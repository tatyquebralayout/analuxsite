import React, { useEffect } from 'react';
import { useLanguage } from '../contexts/useLanguage';
import { translations } from '../utils/translations';
import { TranslationSchema } from '../types';
import SEO from '../components/common/SEO';
import ContactForm from '../components/contact/ContactForm';

const ContactPage: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations] as TranslationSchema;

  // Captura de eventos a nível de página
  useEffect(() => {
    const handleFormSubmit = (e: Event) => {
      console.log('Evento de submit capturado a nível de página');
      e.preventDefault();
      e.stopPropagation();
      return false;
    };

    // Capturar eventos de submit globalmente
    document.addEventListener('submit', handleFormSubmit, true);

    return () => {
      document.removeEventListener('submit', handleFormSubmit, true);
    };
  }, []);

  const handleGlobalClick = (e: React.MouseEvent) => {
    // Prevenir qualquer comportamento que possa causar refresh
    if ((e.target as HTMLElement).tagName === 'BUTTON') {
      console.log('Clique em botão interceptado a nível de página');
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <div onClick={handleGlobalClick}>
      <SEO
        title={t.contact?.title || 'Contact Us'}
        description={t.contact?.promise || 'Contact AmanluxDog for inquiries about our services.'}
        keywords="contact amanluxdog, hundebetreuung kontakt, hundetraining kontakt"
      />
      <div className="container mx-auto px-4 py-12 font-sans">
        <ContactForm language={language} onClick={handleGlobalClick} />
      </div>
    </div>
  );
};

export default ContactPage;
