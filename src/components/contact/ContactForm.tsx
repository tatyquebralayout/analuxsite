/// <reference types="node" />
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';

const ContactForm: React.FC = () => {
  const { t } = useTranslation();
  const formRef = useRef<HTMLFormElement>(null);
  const submitTimeoutRef = useRef<NodeJS.Timeout>();

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [formData, setFormData] = useState({
    user_name: '',
    user_phone: '',
    user_email: '',
    dog_count: '1',
    dog_size: 'Kleiner (bis 10 kg)',
    training_service: 'daycare',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    if (isSubmitting) return;

    if (submitTimeoutRef.current) {
      clearTimeout(submitTimeoutRef.current);
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Configurações do EmailJS
    const serviceID = 'service_2lih55m';
    const templateID = 'template_70auqci';
    const publicKey = 'AmgBu5KTBSjqp5HVm';

    try {
      const result = await emailjs.sendForm(serviceID, templateID, formRef.current, publicKey);
      console.log('✅ Email enviado com sucesso:', result);

      setSubmitStatus('success');
      setFormData({
        user_name: '',
        user_phone: '',
        user_email: '',
        dog_count: '1',
        dog_size: 'Kleiner (bis 10 kg)',
        training_service: 'daycare',
        message: '',
      });

      if (formRef.current) formRef.current.reset();

      submitTimeoutRef.current = setTimeout(() => {
        setIsSubmitting(false);
      }, 30000);

    } catch (error) {
      console.error('❌ Erro ao enviar email:', error);
      setSubmitStatus('error');
      setErrorMessage(
        t(
          'contact.errorMessage',
          'Es gab ein Problem beim Senden Ihrer Nachricht. Bitte versuchen Sie es später erneut.'
        )
      );
      submitTimeoutRef.current = setTimeout(() => {
        setIsSubmitting(false);
      }, 5000);
    }
  };

  useEffect(() => {
    return () => {
      if (submitTimeoutRef.current) {
        clearTimeout(submitTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div ref={ref} className="max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-primary mb-4 font-sour-gummy">
            {t('contact.title', 'Kontakt')}
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            {t(
              'contact.description',
              'Wir freuen uns auf Ihre Nachricht. Füllen Sie das Formular aus, und wir werden uns so schnell wie möglich bei Ihnen melden.'
            )}
          </p>
        </div>

        {submitStatus === 'success' ? (
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold text-green-600 mb-2">
              {t('contact.successTitle', 'Nachricht gesendet!')}
            </h3>
            <p className="text-green-700 mb-4">
              {t(
                'contact.successMessage',
                'Vielen Dank für Ihre Nachricht. Wir werden uns in Kürze bei Ihnen melden.'
              )}
            </p>
            <button
              onClick={() => setSubmitStatus('idle')}
              className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors"
            >
              {t('contact.sendAnother', 'Weitere Nachricht senden')}
            </button>
          </div>
        ) : (
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-6 bg-white rounded-lg shadow-md p-8"
          >
            <p className="text-center mb-4 text-gray-600">
              {t('contact.requiredFields', 'Felder mit * sind Pflichtfelder')}
            </p>

            {submitStatus === 'error' && (
              <div className="bg-red-50 border border-red-200 p-4 rounded-md text-red-600 mb-6">
                {errorMessage}
              </div>
            )}

            {/* Name Input */}
            <div>
              <label htmlFor="user_name" className="block mb-2 font-bold text-primary">
                {t('contact.name', 'Name')} *
              </label>
              <input
                type="text"
                id="user_name"
                name="user_name"
                value={formData.user_name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                required
                disabled={isSubmitting}
              />
            </div>

            {/* Phone Input */}
            <div>
              <label htmlFor="user_phone" className="block mb-2 font-bold text-primary">
                {t('contact.phone', 'Phone')} *
              </label>
              <input
                type="tel"
                id="user_phone"
                name="user_phone"
                value={formData.user_phone}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                required
                pattern="^(\+49|0)[1-9][0-9 ]{7,14}$"
                title={t('contact.phoneFormatError', 'Please enter a valid German phone number')}
                disabled={isSubmitting}
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="user_email" className="block mb-2 font-bold text-primary">
                {t('contact.email', 'Email')} *
              </label>
              <input
                type="email"
                id="user_email"
                name="user_email"
                value={formData.user_email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                required
                disabled={isSubmitting}
              />
            </div>

            {/* Dog Count Select */}
            <div>
              <label htmlFor="dog_count" className="block mb-2 font-bold text-primary">
                {t('contact.dogCount', 'Anzahl Hunde')} *
              </label>
              <select
                id="dog_count"
                name="dog_count"
                value={formData.dog_count}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                required
                disabled={isSubmitting}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3+">3 oder mehr</option>
              </select>
            </div>

            {/* Dog Size Radio Buttons */}
            <div>
              <label className="block mb-2 font-bold text-primary">
                {t('contact.dogSize', 'Hundegrösse')} *
              </label>
              <div className="flex flex-wrap gap-6">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="dog_size"
                    value="Kleiner (bis 10 kg)"
                    checked={formData.dog_size === 'Kleiner (bis 10 kg)'}
                    onChange={handleChange}
                    className="mr-2"
                    disabled={isSubmitting}
                  />
                  {t('contact.smallDog', 'Kleiner (bis 10 kg)')}
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="dog_size"
                    value="Grosse (ab 10 kg)"
                    checked={formData.dog_size === 'Grosse (ab 10 kg)'}
                    onChange={handleChange}
                    className="mr-2"
                    disabled={isSubmitting}
                  />
                  {t('contact.largeDog', 'Grosse (ab 10 kg)')}
                </label>
              </div>
            </div>

            {/* Service Select */}
            <div>
              <label htmlFor="training_service" className="block mb-2 font-bold text-primary">
                {t('contact.service', 'Dienstleistung')} *
              </label>
              <select
                id="training_service"
                name="training_service"
                value={formData.training_service}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                required
                disabled={isSubmitting}
              >
                <option value="daycare">{t('contact.daycare', 'Tagesbetreuung')}</option>
                <option value="boarding">{t('contact.boarding', 'Ferienbetreuung')}</option>
                <option value="training">{t('contact.training', 'Hundetraining')}</option>
                <option value="other">{t('contact.other', 'Andere')}</option>
              </select>
            </div>

            {/* Message Textarea */}
            <div>
              <label htmlFor="message" className="block mb-2 font-bold text-primary">
                {t('contact.message', 'Nachricht')} *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                required
                disabled={isSubmitting}
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center pt-2">
              <button
                type="submit"
                className={`bg-primary hover:bg-primary-dark text-white font-medium py-3 px-8 rounded-md transition-colors ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                disabled={isSubmitting}
              >
                {isSubmitting
                  ? t('contact.sending', 'Wird gesendet...')
                  : t('contact.submit', 'Nachricht senden')}
              </button>
            </div>
          </form>
        )}
      </motion.div>
    </div>
  );
};

export default ContactForm;
