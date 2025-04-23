import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { translations } from '../../utils/translations';
import emailjs from '@emailjs/browser';
import { TranslationSchema } from '../../types';

interface ContactFormProps {
  language: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ language }) => {
  const t = translations[language as keyof typeof translations] as TranslationSchema;
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    dogCount: '1',
    dogSize: 'small',
    service: 'daycare',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Inicializa o EmailJS apenas uma vez
  useEffect(() => {
    try {
      emailjs.init('AmgBu5KTBSjqp5HVm');
      console.log('EmailJS inicializado com sucesso');

      // Verificar se as configurações do EmailJS estão definidas
      const serviceID = 'service_2lih55m';
      const templateID = 'template_2lih55m';
      const publicKey = 'AmgBu5KTBSjqp5HVm';

      if (!serviceID || !templateID || !publicKey) {
        console.warn('⚠️ Verificar configurações do EmailJS - algum valor pode estar indefinido');
      } else {
        console.log('✅ Configurações do EmailJS verificadas com sucesso');
      }
    } catch (error) {
      console.error('❌ Erro ao inicializar EmailJS:', error);
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Helper para obter o texto do serviço
  function getServiceText() {
    if (!t.services) return formData.service;

    let serviceTitle = '';

    switch (formData.service) {
      case 'daycare':
        serviceTitle = t.services.daycare?.title || '';
        break;
      case 'hotel':
        serviceTitle = t.services.hotel?.title || '';
        break;
      case 'training':
        serviceTitle = t.services.training?.title || '';
        break;
      case 'taxi':
        serviceTitle = t.services.taxi?.title || '';
        break;
      case 'grooming':
        serviceTitle = t.services.grooming?.title || '';
        break;
      default:
        serviceTitle = formData.service;
    }

    return serviceTitle || formData.service;
  }

  // Função simplificada para enviar e-mail
  const sendEmail = async () => {
    if (!t.contact || !t.services) {
      console.log('❌ t.contact ou t.services está undefined, abortando envio');
      return;
    }

    // Validação básica
    if (!formData.name || !formData.phone || !formData.email || !formData.message) {
      console.log('❌ Validação falhou, alguns campos estão vazios');
      alert('Por favor, preencha todos os campos obrigatórios');
      return;
    }

    console.log('✅ Validação passou, preparando para enviar email');

    // Configurações do EmailJS
    const serviceID = 'service_2lih55m';
    const templateID = 'template_2lih55m';

    // Preparação dos parâmetros para o e-mail
    const templateParams = {
      from_name: formData.name,
      reply_to: formData.email,
      phone: formData.phone,
      message: formData.message,
      dog_count: formData.dogCount,
      dog_size: formData.dogSize,
      service_requested: formData.service,
      // Informações adicionais
      serviceText: getServiceText(),
      site_name: 'AmanluxDog',
      date: new Date().toLocaleDateString(),
    };

    setIsSubmitting(true);
    setSubmitStatus('idle');

    console.log('📧 Tentando enviar email com os seguintes parâmetros:', templateParams);
    console.log('📧 Usando serviceID:', serviceID);
    console.log('📧 Usando templateID:', templateID);

    try {
      // Envio do e-mail
      console.time('Tempo de envio do email');
      const response = await emailjs.send(serviceID, templateID, templateParams);
      console.timeEnd('Tempo de envio do email');

      console.log('✅ Email enviado com sucesso!', {
        status: response.status,
        text: response.text,
        timestamp: new Date().toISOString(),
      });

      // Atualiza o estado para mostrar mensagem de sucesso
      setSubmitStatus('success');

      // Limpa o formulário após envio bem-sucedido
      setFormData({
        name: '',
        phone: '',
        email: '',
        dogCount: '1',
        dogSize: 'small',
        service: 'daycare',
        message: '',
      });

      console.log('✅ Formulário limpo após envio bem-sucedido');

      // Rola suavemente até a mensagem de sucesso
      setTimeout(() => {
        const successMessage = document.querySelector('.success-message');
        if (successMessage) {
          console.log('✅ Rolando até a mensagem de sucesso');
          successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
          console.log('⚠️ Mensagem de sucesso não encontrada no DOM');
        }
      }, 100);
    } catch (error) {
      console.error('❌ Erro ao enviar email:', error);
      // Log detalhado do erro para diagnóstico
      if (error instanceof Error) {
        console.error('❌ Detalhes do erro:', {
          name: error.name,
          message: error.message,
          stack: error.stack,
          timestamp: new Date().toISOString(),
        });
      }

      setSubmitStatus('error');

      console.log('⚠️ Preparando para mostrar mensagem de erro');

      // Rola suavemente até a mensagem de erro
      setTimeout(() => {
        const errorMessage = document.querySelector('.error-message');
        if (errorMessage) {
          console.log('⚠️ Rolando até a mensagem de erro');
          errorMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
          console.log('⚠️ Mensagem de erro não encontrada no DOM');
        }
      }, 100);
    } finally {
      console.log('📧 Processo de envio finalizado');
      setIsSubmitting(false);
    }
  };

  // Manipulador de submissão simplificado
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Esta linha é essencial e suficiente
    console.log('📝 Formulário submetido, prevenindo comportamento padrão');

    if (!isSubmitting) {
      sendEmail();
    } else {
      console.log('⚠️ Envio já em andamento, ignorando tentativa duplicada');
    }
  };

  const inputVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  // Renderização condicional do formulário
  const renderFormContent = () => {
    // Verificar se t.contact e t.services existem
    if (!t.contact || !t.services) return null;

    // Mensagem de sucesso
    if (submitStatus === 'success') {
      return (
        <motion.div
          className="p-8 bg-green-100 text-green-700 rounded-md shadow-md border border-green-200 success-message"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="flex items-center mb-4">
            <svg
              className="w-12 h-12 mr-4 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            <h3 className="text-xl font-semibold">Mensagem Enviada!</h3>
          </div>
          <p className="mb-4">
            {t.contact.successMessage ||
              'Sua mensagem foi enviada com sucesso. Entraremos em contato em breve!'}
          </p>
          <button
            type="button" // type="button" para não acionar o formulário
            onClick={() => setSubmitStatus('idle')}
            className="mt-4 px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
          >
            Enviar outra mensagem
          </button>
        </motion.div>
      );
    }

    // Mensagem de erro
    if (submitStatus === 'error') {
      return (
        <motion.div
          className="p-8 bg-red-100 text-red-700 rounded-md shadow-md border border-red-200 error-message"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="flex items-center mb-4">
            <svg
              className="w-12 h-12 mr-4 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <h3 className="text-xl font-semibold">Erro ao Enviar</h3>
          </div>
          <p className="mb-4">
            {t.contact?.errorMessage ||
              'Houve um erro ao enviar sua mensagem. Por favor, tente novamente ou entre em contato por telefone.'}
          </p>
          <button
            type="button" // type="button" para não acionar o formulário
            onClick={() => setSubmitStatus('idle')}
            className="mt-4 px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
          >
            {'Tentar novamente'}
          </button>
        </motion.div>
      );
    }

    // Formulário padrão
    return (
      <motion.div
        className="max-w-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <form onSubmit={handleSubmit}>
          <motion.div
            className="mb-4"
            variants={inputVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={0}
          >
            <label htmlFor="name" className="form-label">
              {t.contact?.name || 'Name'}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="form-input"
            />
          </motion.div>

          <motion.div
            className="mb-4"
            variants={inputVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={1}
          >
            <label htmlFor="phone" className="form-label">
              {t.contact?.phone || 'Phone'}
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="form-input"
            />
          </motion.div>

          <motion.div
            className="mb-4"
            variants={inputVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={2}
          >
            <label htmlFor="email" className="form-label">
              {t.contact?.email || 'Email'}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-input"
            />
          </motion.div>

          <motion.div
            className="mb-4"
            variants={inputVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={3}
          >
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label htmlFor="dogCount" className="form-label">
                  {t.contact?.dogCount || 'Dog Count'}
                </label>
                <select
                  id="dogCount"
                  name="dogCount"
                  value={formData.dogCount}
                  onChange={handleChange}
                  className="form-input"
                >
                  {t.contact?.dogCountOptions?.map((option, index) => (
                    <option key={index} value={String(index + 1)}>
                      {option}
                    </option>
                  )) || (
                    <>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3+</option>
                    </>
                  )}
                </select>
              </div>
              <div className="w-1/2">
                <label htmlFor="dogSize" className="form-label">
                  {t.contact?.dogSize || 'Dog Size'}
                </label>
                <select
                  id="dogSize"
                  name="dogSize"
                  value={formData.dogSize}
                  onChange={handleChange}
                  className="form-input"
                >
                  {t.contact?.dogSizeOptions?.map((option, index) => (
                    <option key={index} value={index === 0 ? 'small' : 'large'}>
                      {option}
                    </option>
                  )) || (
                    <>
                      <option value="small">Klein</option>
                      <option value="large">Groß</option>
                    </>
                  )}
                </select>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="mb-6"
            variants={inputVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={4}
          >
            <label htmlFor="service" className="form-label">
              {t.contact?.service || 'Service'}
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="form-input"
            >
              {t.contact?.serviceOptions?.map((option, index) => (
                <option key={index} value={['daycare', 'hotel', 'training'][index] || 'daycare'}>
                  {option}
                </option>
              )) || (
                <>
                  <option value="daycare">{t.services?.daycare?.title || 'Daycare'}</option>
                  <option value="hotel">{t.services?.hotel?.title || 'Hotel'}</option>
                  <option value="training">{t.services?.training?.title || 'Training'}</option>
                  {t.services?.taxi && (
                    <option value="taxi">{t.services.taxi.title || 'Taxi'}</option>
                  )}
                  {t.services?.grooming && (
                    <option value="grooming">{t.services.grooming.title || 'Grooming'}</option>
                  )}
                </>
              )}
            </select>
          </motion.div>

          <motion.div
            className="mb-6"
            variants={inputVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={5}
          >
            <label htmlFor="message" className="form-label">
              {t.contact?.message || 'Message'}
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="form-input resize-none"
            />
          </motion.div>

          {/* Status de envio */}
          {isSubmitting && (
            <motion.div
              className="mb-4 p-4 bg-blue-50 text-blue-600 rounded-md shadow-sm border border-blue-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="flex items-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                <span>{'Enviando mensagem...'}</span>
              </div>
            </motion.div>
          )}

          <motion.button
            type="submit"
            className="w-full btn-primary py-3 relative"
            variants={inputVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={6}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span className="opacity-0">{t.contact?.submit || 'Submit'}</span>
                <span className="absolute inset-0 flex items-center justify-center">
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                </span>
              </>
            ) : (
              t.contact?.submit || 'Submit'
            )}
          </motion.button>
        </form>

        <motion.p
          className="text-gray-500 text-sm mt-4 text-center"
          variants={inputVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={7}
        >
          {t.contact?.promise || 'We promise to respond quickly.'}
        </motion.p>

        <motion.div
          className="flex items-center justify-center mt-6 gap-2"
          variants={inputVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={8}
        >
          <Phone size={18} className="text-primary" />
          <span>{t.contact?.or || 'Or'} +41 76 575 09 77</span>
        </motion.div>
      </motion.div>
    );
  };

  if (!t.contact || !t.services) {
    return null;
  }

  return (
    <section id="contact" className="py-16 bg-white lg:w-1/2" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          className="headline2 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          {t.contact?.title || 'Contact Us'}
        </motion.h2>

        {/* Renderização condicional do conteúdo do formulário */}
        {renderFormContent()}
      </div>
    </section>
  );
};

export default ContactForm;
