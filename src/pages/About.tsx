import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../contexts/useLanguage';
import { translations } from '../utils/translations';
import Team from '../components/about/Team';

const About: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations];
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <>
      <section className="py-16 bg-white" ref={ref}>
        <div className="container mx-auto px-4">
          <motion.h1
            className="text-4xl font-bold mb-8 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {t.about.title}
          </motion.h1>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Image */}
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <motion.img
                src="https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
                alt="Dogs playing in AmanluxDog space"
                className="rounded-lg shadow-xl w-full h-auto object-cover"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            {/* Content */}
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            >
              <p className="text-gray-700 mb-8 leading-relaxed">{t.about.description}</p>
              <motion.button
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md transition-colors font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t.about.button}
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      <Team language={language} />
    </>
  );
};

export default About;
