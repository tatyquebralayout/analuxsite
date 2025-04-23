// Teste direto do EmailJS
// Para executar, cole este código no console do navegador enquanto estiver na página do projeto

(function () {
  // Verificar se o EmailJS está disponível
  if (typeof emailjs === 'undefined') {
    console.error(
      '❌ EmailJS não está definido! Certifique-se de que a biblioteca está carregada.'
    );
    return;
  }

  console.log('🔍 Iniciando teste do EmailJS...');

  // Configurações do EmailJS
  const PUBLIC_KEY = 'AmgBu5KTBSjqp5HVm';
  const SERVICE_ID = 'service_2lih55m';
  const TEMPLATE_ID = 'template_2lih55m';

  // Inicializar EmailJS
  try {
    emailjs.init(PUBLIC_KEY);
    console.log('✅ EmailJS inicializado com sucesso');
  } catch (error) {
    console.error('❌ Erro ao inicializar EmailJS:', error);
    return;
  }

  // Dados de teste
  const templateParams = {
    from_name: 'Teste Console',
    reply_to: 'teste.console@example.com',
    phone: '+5511999999999',
    message: 'Esta é uma mensagem de teste enviada pelo console. Por favor, ignore.',
    service_requested: 'teste-console',
    dog_count: '1',
    dog_size: 'small',
    serviceText: 'Teste via Console',
    site_name: 'AmanluxDog',
    date: new Date().toLocaleDateString(),
  };

  console.log('📝 Parâmetros do template:', templateParams);

  // Registrar tempo de início
  const startTime = new Date();
  console.log(`🕒 Iniciando envio: ${startTime.toISOString()}`);

  // Enviar email
  emailjs
    .send(SERVICE_ID, TEMPLATE_ID, templateParams)
    .then(function (response) {
      const endTime = new Date();
      const duration = (endTime - startTime) / 1000;

      console.log(`✅ Email enviado com sucesso!`);
      console.log(`📊 Status: ${response.status}`);
      console.log(`📝 Texto: ${response.text}`);
      console.log(`⏱️ Tempo de envio: ${duration} segundos`);
    })
    .catch(function (error) {
      const endTime = new Date();
      const duration = (endTime - startTime) / 1000;

      console.error(`❌ Erro ao enviar email: ${error.text}`);
      console.error(`📊 Detalhes do erro:`, error);
      console.error(`⏱️ Tempo decorrido: ${duration} segundos`);
    });
})();
