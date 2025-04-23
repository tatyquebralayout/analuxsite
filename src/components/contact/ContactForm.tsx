import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';

// Step 1: Remove or comment out the ContactFormProps interface
/*
interface ContactFormProps {
  language: string;
}
*/

// Step 2: Change the component definition
// const ContactForm: React.FC<ContactFormProps> = ({ language }) => {
const ContactForm: React.FC = () => {
  const { t } = useTranslation();

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

  useEffect(() => {
    try {
      emailjs.init('AmgBu5KTBSjqp5HVm');
      console.log('EmailJS inicializado com sucesso');

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

  function getServiceText() {
    const serviceKey = `services.${formData.service}.title`;
    return t(serviceKey, formData.service);
  }

  const sendEmail = async () => {
    if (!formData.name || !formData.phone || !formData.email || !formData.message) {
      console.log('❌ Validação falhou, alguns campos estão vazios');
      alert(t('contact.validationError', 'Por favor, preencha todos os campos obrigatórios'));
      return;
    }

    console.log('✅ Validação passou, preparando para enviar email');

    const serviceID = 'service_2lih55m';
    const templateID = 'template_2lih55m';

    const templateParams = {
      from_name: formData.name,
      reply_to: formData.email,
      phone: formData.phone,
      message: formData.message,
      dog_count: formData.dogCount,
      dog_size: formData.dogSize,
      service_requested: formData.service,
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
      console.time('Tempo de envio do email');
      const response = await emailjs.send(serviceID, templateID, templateParams);
      console.timeEnd('Tempo de envio do email');

      console.log('✅ Email enviado com sucesso!', {
        status: response.status,
        text: response.text,
        timestamp: new Date().toISOString(),
      });

      setSubmitStatus('success');
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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

  const renderFormContent = () => {
    if (submitStatus === 'success') {
      return (
        <motion.div
          className="p-8 bg-green-100 text-green-700 rounded-md shadow-md border border-green-200 success-message"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="flex items-center mb-4">
            <h3 className="text-xl font-semibold">
              {t('contact.successTitle', 'Mensagem Enviada!')}
            </h3>
          </div>
          <p className="mb-4">
            {t(
              'contact.successMessage',
              'Sua mensagem foi enviada com sucesso. Entraremos em contato em breve!'
            )}
          </p>
          <button
            type="button"
            onClick={() => setSubmitStatus('idle')}
            className="mt-4 px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
          >
            {t('contact.sendAnother', 'Enviar outra mensagem')}
          </button>
        </motion.div>
      );
    }

    if (submitStatus === 'error') {
      return (
        <motion.div
          className="p-8 bg-red-100 text-red-700 rounded-md shadow-md border border-red-200 error-message"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="flex items-center mb-4">
            <h3 className="text-xl font-semibold">{t('contact.errorTitle', 'Erro ao Enviar')}</h3>
          </div>
          <p className="mb-4">
            {t(
              'contact.errorMessage',
              'Houve um erro ao enviar sua mensagem. Por favor, tente novamente ou entre em contato por telefone.'
            )}
          </p>
          <button
            type="button"
            onClick={() => setSubmitStatus('idle')}
            className="mt-4 px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
          >
            {t('contact.tryAgain', 'Tentar novamente')}
          </button>
        </motion.div>
      );
    }

    const dogCountOptions = t('contact.dogCountOptions', {
      returnObjects: true,
      defaultValue: ['1', '2', '3 or +'],
    });
    const dogSizeOptions = t('contact.dogSizeOptions', {
      returnObjects: true,
      defaultValue: ['Small (up to 10kg)', 'Large (10kg+)'],
    });
    const serviceOptions = t('contact.serviceOptions', {
      returnObjects: true,
      defaultValue: ['Daycare', 'Boarding', 'Training'],
    });

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
              {t('contact.name', 'Name *')}
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
              {t('contact.phone', 'Phone *')}
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
              {t('contact.email', 'Email *')}
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
                  {t('contact.dogCount', 'How many dogs? *')}
                </label>
                <select
                  id="dogCount"
                  name="dogCount"
                  value={formData.dogCount}
                  onChange={handleChange}
                  required
                  className="form-select"
                >
                  {Array.isArray(dogCountOptions) &&
                    dogCountOptions.map((option, index) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ))}
                </select>
              </div>
              <div className="w-1/2">
                <label htmlFor="dogSize" className="form-label">
                  {t('contact.dogSize', 'Dog size *')}
                </label>
                <select
                  id="dogSize"
                  name="dogSize"
                  value={formData.dogSize}
                  onChange={handleChange}
                  required
                  className="form-select"
                >
                  {Array.isArray(dogSizeOptions) &&
                    dogSizeOptions.map((option, index) => (
                      <option key={index} value={option.toLowerCase().split(' ')[0]}>
                        {option}
                      </option>
                    ))}
                </select>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="mb-4"
            variants={inputVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={4}
          >
            <label htmlFor="service" className="form-label">
              {t('contact.service', 'Service *')}
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="form-select"
            >
              {Array.isArray(serviceOptions) &&
                serviceOptions.map((option, index) => (
                  <option
                    key={index}
                    value={option.toLowerCase().split(' ')[0].replace('betreuung', '')}
                  >
                    {option}
                  </option>
                ))}
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
              {t('contact.message', 'Message *')}
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="form-textarea"
            ></textarea>
          </motion.div>

          <motion.div
            className="text-center"
            variants={inputVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={6}
          >
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className={`btn btn-primary w-full md:w-auto ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              whileHover={!isSubmitting ? { scale: 1.05 } : {}}
              whileTap={!isSubmitting ? { scale: 0.95 } : {}}
            >
              {isSubmitting
                ? t('contact.submitting', 'Sending...')
                : t('contact.submit', 'Send Now')}
            </motion.button>
          </motion.div>
        </form>
      </motion.div>
    );
  };

  return (
    <section id="contact" className="py-16 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center">
          <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
            <motion.h2
              className="headline2 text-center mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
            >
              {t('contact.title', 'Contact Us')}
            </motion.h2>
            <motion.p
              className="text-center text-gray-600 mb-8"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {t('contact.requiredFields', 'Fields marked with * are required')}
            </motion.p>
            {renderFormContent()}
          </div>

          <div className="w-full lg:w-1/2 px-4 flex flex-col justify-center">
            <motion.div
              className="text-center lg:text-left"
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p className="body1 mb-4">
                {t('contact.promise', 'We promise to respond within 24 hours.')}
              </p>
              <p className="body1 mb-6">{t('contact.or', 'Or call us:')}</p>
              <a
                href={`tel:${t('location.phone', '+123456789')}`}
                className="flex items-center justify-center lg:justify-start text-primary hover:text-primary-dark transition-colors text-xl font-semibold"
              >
                <Phone size={24} className="mr-2" />
                <span>{t('location.phone', '+123456789')}</span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
