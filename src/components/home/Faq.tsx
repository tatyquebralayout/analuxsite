import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import { FAQSection } from '../../types/translations';

const Faq: React.FC = () => {
  const { t } = useTranslation();

  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const faqData = t('faq', { returnObjects: true }) as FAQSection;

  if (!faqData || !faqData.title || !Array.isArray(faqData.items)) {
    console.error('FAQ data not loaded correctly from translations');
    return null;
  }

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-neutral-surface" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="headline2 text-center mb-12 font-sour-gummy"
        >
          {faqData.title}
        </motion.h2>

        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {faqData.items.map((item, index) => (
            <motion.div
              key={index}
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
            >
              <motion.button
                className="w-full flex justify-between items-center p-4 bg-white rounded-lg shadow-sm hover:bg-gray-50 transition-colors"
                onClick={() => toggleAccordion(index)}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <span className="headline6 text-left font-sour-gummy">{item.question}</span>
                {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </motion.button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    className="p-4 bg-white border-t border-gray-100 rounded-b-lg"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="body1 text-gray-700">{item.answer || ''}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {faqData.viewAll && (
          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.button
              className="text-primary font-medium hover:text-primary-dark transition-colors"
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              {faqData.viewAll}
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Faq;
