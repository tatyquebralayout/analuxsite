import React from 'react';
import { Handshake, Award, Users, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';

const Partnership: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="partnership" className="py-16 bg-neutral-surface" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          className="headline2 text-center mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          {t('partnership.sectionTitle')}
        </motion.h2>

        <motion.p
          className="body1 text-gray-600 text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {t('partnership.sectionDescription')}
        </motion.p>

        {/* Partner logos placeholder */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {[1, 2, 3, 4].map(item => (
            <motion.div
              key={item}
              className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center"
              variants={itemVariants}
              whileHover={{
                y: -10,
                boxShadow:
                  '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
              }}
            >
              <div className="text-center">
                <motion.div
                  className="w-16 h-16 bg-primary-container rounded-full flex items-center justify-center mx-auto mb-4"
                  whileHover={{ rotate: 10 }}
                >
                  {item === 1 && <Handshake className="text-primary" />}
                  {item === 2 && <Award className="text-primary" />}
                  {item === 3 && <Users className="text-primary" />}
                  {item === 4 && <Sparkles className="text-primary" />}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Partnership;
