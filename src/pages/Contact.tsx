import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';
import ContactForm from '../components/contact/ContactForm';
import Location from '../components/contact/Location';

const Contact: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {t.contact.title}
        </motion.h1>
        
        <div className="flex flex-col lg:flex-row">
          <ContactForm language={language} />
          <Location language={language} />
        </div>
      </div>
    </section>
  );
};

export default Contact;