import React from 'react';
import { useLanguage } from '../contexts/useLanguage';
import { translations } from '../utils/translations';
import { TranslationSchema } from '../types';
import SEO from '../components/common/SEO';
import ContactForm from '../components/contact/ContactForm';

const ContactPage: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations] as TranslationSchema;

  // Removendo todos os event listeners e handlers globais
  // para permitir que o formulário funcione corretamente

  return (
    <div>
      <SEO
        title={t.contact?.title || 'Contact Us'}
        description={t.contact?.promise || 'Contact AmanluxDog for inquiries about our services.'}
        keywords="contact amanluxdog, hundebetreuung kontakt, hundetraining kontakt"
      />
      <div className="container mx-auto px-4 py-12 font-sans">
        <ContactForm language={language} />
      </div>
    </div>
  );
};

export default ContactPage;
