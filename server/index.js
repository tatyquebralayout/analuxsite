import express from 'express';
import cors from 'cors';
import * as emailjs from '@emailjs/nodejs';

const app = express();
const port = process.env.PORT || 3030;

// Configurações do EmailJS
const EMAIL_PUBLIC_KEY = 'AmgBu5KTBSjqp5HVm';
const EMAIL_SERVICE_ID = 'service_2lih55m';
const EMAIL_TEMPLATE_ID = 'template_70auqci';

// Inicializar EmailJS com modo debug
emailjs.init({
  publicKey: EMAIL_PUBLIC_KEY,
  privateKey: '', // opcional
  debug: true
});

// Middleware
app.use(cors());
app.use(express.json());

// Middleware de logging
app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.url}`);
  if (req.method === 'POST') {
    console.log('Request body:', JSON.stringify(req.body, null, 2));
  }
  next();
});

// Rota de teste
app.get('/api/test', (req, res) => {
  console.log('📝 Teste de API solicitado');
  res.json({ message: 'API está funcionando!' });
});

// Rota para listar templates
app.get('/api/list-templates', async (req, res) => {
  try {
    emailjs.init(EMAIL_PUBLIC_KEY);
    console.log('Tentando listar templates com as seguintes configurações:');
    console.log('Public Key:', EMAIL_PUBLIC_KEY);
    console.log('Service ID:', EMAIL_SERVICE_ID);
    console.log('Template ID atual:', EMAIL_TEMPLATE_ID);
    
    // Tentar enviar um email de teste para ver mais detalhes do erro
    try {
      await emailjs.send(EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID, {
        to_name: "Test",
        from_name: "Test",
        message: "Test"
      });
    } catch (error) {
      console.log('Detalhes completos do erro:', error);
    }
    
    res.json({ 
      message: 'Verifique o console do servidor para mais informações',
      config: {
        publicKey: EMAIL_PUBLIC_KEY,
        serviceId: EMAIL_SERVICE_ID,
        templateId: EMAIL_TEMPLATE_ID
      }
    });
  } catch (error) {
    console.error('Erro ao listar templates:', error);
    res.status(500).json({ error: error.message });
  }
});

// Rota para enviar email
app.post('/api/send-email', async (req, res) => {
  console.log('\n=== Iniciando processamento de email ===');
  try {
    const {
      user_name,
      user_email,
      user_phone,
      message,
      dog_count,
      dog_size,
      training_service,
    } = req.body;

    console.log('Dados recebidos:', {
      user_name,
      user_email,
      user_phone,
      message,
      dog_count,
      dog_size,
      training_service,
    });

    // Validações
    if (!user_name || !user_email || !user_phone || !message) {
      console.log('❌ Erro: Campos obrigatórios faltando');
      return res.status(400).json({ error: 'Campos obrigatórios faltando' });
    }

    // Validação de email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(user_email)) {
      console.log('❌ Erro: Email inválido -', user_email);
      return res.status(400).json({ error: 'Email inválido' });
    }

    // Validação de telefone alemão
    const phoneRegex = /^(\+49|0)[1-9][0-9 ]{7,14}$/;
    if (!phoneRegex.test(user_phone)) {
      console.log('❌ Erro: Telefone inválido -', user_phone);
      return res.status(400).json({ error: 'Número de telefone inválido' });
    }

    const templateParams = {
      to_name: 'AmanluxDog',
      from_name: user_name,
      from_email: user_email,
      from_phone: user_phone,
      message: message,
      dog_count: dog_count,
      dog_size: dog_size,
      service: training_service,
      site_name: 'AmanluxDog',
      date: new Date().toLocaleDateString()
    };

    console.log('📧 Tentando enviar email com os parâmetros:', templateParams);

    // Enviar email
    const result = await emailjs.send(EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID, templateParams);
    console.log('✅ Email enviado com sucesso!', result);

    res.json({ success: true, message: 'Email enviado com sucesso' });
  } catch (error) {
    console.error('❌ Erro ao enviar email:', {
      message: error.message,
      stack: error.stack,
      details: error.details || 'Sem detalhes adicionais'
    });
    res.status(500).json({ 
      error: 'Erro ao enviar email',
      details: error.message,
      code: error.code || 'UNKNOWN'
    });
  }
  console.log('=== Fim do processamento de email ===\n');
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`
    🚀 Servidor rodando em http://localhost:${port}
    📧 EmailJS configurado com:
       - Service ID: ${EMAIL_SERVICE_ID}
       - Template ID: ${EMAIL_TEMPLATE_ID}
       - Public Key: ${EMAIL_PUBLIC_KEY.substring(0, 4)}...${EMAIL_PUBLIC_KEY.substring(EMAIL_PUBLIC_KEY.length - 4)}
       - Debug Mode: Ativado
    🔄 Rotas disponíveis:
       - GET  /api/test
       - GET  /api/list-templates
       - POST /api/send-email
  `);
}); 