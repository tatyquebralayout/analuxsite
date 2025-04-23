// Script Node.js para testar as configurações do EmailJS
// Para executar: node src/tests/test-emailjs.js

import fetch from 'node-fetch';

// Configurações do EmailJS
const PUBLIC_KEY = 'AmgBu5KTBSjqp5HVm';
const SERVICE_ID = 'service_2lih55m';
const TEMPLATE_ID = 'template_2lih55m';

// Dados de teste
const templateParams = {
  from_name: 'Teste Node',
  reply_to: 'teste.node@example.com',
  phone: '+5511999999999',
  message: 'Esta é uma mensagem de teste enviada pelo Node.js. Por favor, ignore.',
  service_requested: 'teste-node',
  dog_count: '1',
  dog_size: 'small',
  serviceText: 'Teste via Node.js',
  site_name: 'AmanluxDog',
  date: new Date().toLocaleDateString(),
};

console.log('🔍 Iniciando teste do EmailJS via Node.js...');
console.log('📝 Parâmetros do template:', templateParams);

// Registrar tempo de início
const startTime = new Date();
console.log(`🕒 Iniciando envio: ${startTime.toISOString()}`);

// Função para enviar email usando a API REST do EmailJS
async function sendEmail() {
  try {
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: SERVICE_ID,
        template_id: TEMPLATE_ID,
        user_id: PUBLIC_KEY,
        template_params: templateParams,
      }),
    });

    const endTime = new Date();
    const duration = (endTime - startTime) / 1000;

    if (response.status === 200) {
      console.log('✅ Email enviado com sucesso!');
      console.log(`📊 Status: ${response.status}`);
      console.log(`⏱️ Tempo de envio: ${duration} segundos`);
    } else {
      const errorText = await response.text();
      console.error(`❌ Erro ao enviar email. Status: ${response.status}`);
      console.error(`📝 Resposta: ${errorText}`);
      console.error(`⏱️ Tempo decorrido: ${duration} segundos`);
    }
  } catch (error) {
    const endTime = new Date();
    const duration = (endTime - startTime) / 1000;

    console.error(`❌ Erro de conexão ao enviar email:`);
    console.error(error);
    console.error(`⏱️ Tempo decorrido: ${duration} segundos`);
  }
}

// Executar o teste
sendEmail();
