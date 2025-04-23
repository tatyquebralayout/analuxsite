import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { AboutSection } from '../../types/translations';
import { Link } from 'react-router-dom';
import VigiaIcon from '../../assets/images/svg/vigia.svg?react';

/**
 * Componente AboutUs da página inicial, redesenhado com Hero de seção e layout integrado.
 */
const AboutUs: React.FC = () => {
  const { t } = useTranslation();

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const aboutData = t('about', { returnObjects: true }) as AboutSection;

  if (!aboutData || !aboutData.title || !aboutData.description || !aboutData.serviceHighlights) {
    console.error('About data (title, description, highlights) not loaded correctly');
    return null;
  }
  const teamData = aboutData.team;

  return (
    <section id="about" className="py-16 bg-neutral-surface" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Hero Block - Redesigned */}
        <motion.div
          className="text-center mb-16 bg-white p-8 rounded-lg shadow-md"
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-2">
            {aboutData.title}
          </h3>
          <h2 className="headline2 text-gray-900 mb-4">
            {aboutData.homeSectionTitle || aboutData.title}
          </h2>
          <VigiaIcon className="h-10 w-10 text-primary mx-auto" />
        </motion.div>

        {/* Main Content: Image + Integrated Text */}
        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* Image */}
          <motion.div
            className="lg:w-5/12 xl:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            <motion.img
              src="https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
              alt={t('about.imageAlt', 'Cães brincando no espaço AmanluxDog')}
              className="rounded-lg shadow-xl w-full h-auto object-cover"
              whileHover={{ scale: 1.03, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          {/* Integrated Text Column */}
          <motion.div
            className="lg:w-7/12 xl:w-1/2 space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          >
            {/* Description */}
            <div className="body1 text-gray-700 leading-relaxed space-y-4">
              {Array.isArray(aboutData.description) ? (
                aboutData.description.map((paragraph: string, index: number) => (
                  <p key={index}>{paragraph}</p>
                ))
              ) : (
                <p>{aboutData.description}</p>
              )}
            </div>

            {/* Service Highlights Integrated */}
            <div>
              <h4 className="headline5 mb-4 text-gray-800">Was uns auszeichnet:</h4>
              <div className="space-y-4">
                {Object.values(aboutData.serviceHighlights).map((highlight, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircleIcon className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-semibold text-gray-900">{highlight.title}:</span>
                      <p className="body2 text-gray-600 inline ml-1">{highlight.description}</p>
                      {highlight.button && (
                        <Link
                          to={`/services/${
                            highlight.title.toLowerCase().includes('training')
                              ? 'hundetraining'
                              : 'hundebetreuung'
                          }`}
                          className="text-primary font-medium hover:text-primary-dark transition-colors text-sm ml-2 whitespace-nowrap"
                        >
                          [{highlight.button}]
                        </Link>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Team Introduction Integrated */}
            {teamData && (
              <div className="pt-6 border-t border-gray-200">
                <h4 className="headline5 mb-2 text-gray-800">{teamData.title}</h4>
                {teamData.description && (
                  <p className="body1 text-gray-700 mb-4">{teamData.description}</p>
                )}
                <Link to="/about">
                  <motion.button
                    className="btn-secondary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {t('common.meetTheTeam', 'Meet the Team')}
                  </motion.button>
                </Link>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
