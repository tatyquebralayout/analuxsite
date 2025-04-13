import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../contexts/useLanguage';
import { translations } from '../utils/translations';
import PartnershipSection from '../components/partnership/PartnershipSection';

// Interface para tipar as traduções com a seção partnership
interface WithPartnership {
  partnership: {
    title: string;
    description: string;
    cta?: string;
  };
}

const Partnership: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations] as unknown as WithPartnership;
  const { ref } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="py-16 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h1
          className="text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {t.partnership.title}
        </motion.h1>

        <motion.p
          className="text-lg text-gray-700 mb-12 max-w-4xl mx-auto text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {t.partnership.description}
        </motion.p>

        <PartnershipSection language={language} />
      </div>
    </section>
  );
};

export default Partnership;
