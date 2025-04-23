import React from 'react';
// import { useLanguage } from '../contexts/useLanguage'; // Remover
// import { translations } from '../utils/translations'; // Remover
// import { TranslationSchema } from '../types'; // Remover
import SEO from '../components/common/SEO';
import ContactForm from '../components/contact/ContactForm';
import { useTranslation } from 'react-i18next'; // Adicionar

const ContactPage: React.FC = () => {
  // const { language } = useLanguage(); // Remover
  // const t_old = translations[language as keyof typeof translations] as TranslationSchema; // Remover
  const { t } = useTranslation(); // Apenas t é necessário

  // Removendo todos os event listeners e handlers globais
  // para permitir que o formulário funcione corretamente

  return (
    <div>
      <SEO
        // title={t_old.contact?.title || 'Contact Us'}
        // description={t_old.contact?.promise || 'Contact AmanluxDog for inquiries about our services.'}
        title={t('contact.title', 'Contact Us')} // Usar t()
        description={t('contact.promise', 'Contact AmanluxDog for inquiries about our services.')} // Usar t()
        keywords="contact amanluxdog, hundebetreuung kontakt, hundetraining kontakt"
      />
      <div className="container mx-auto px-4 py-12 font-sans">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;
