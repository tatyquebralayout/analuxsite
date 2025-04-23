import React from 'react';
import { Bed, Dog, Car, Scissors } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import { ServicesSection } from '../../types/translations';

/**
 * Componente SVG personalizado para o ícone de Creche Diária
 * Usando o SVG fornecido pelo cliente
 */
const DaycareIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 74.91 74.14"
    xmlns="http://www.w3.org/2000/svg"
    className="text-white"
    fill="currentColor"
  >
    <g>
      <path d="M41.05,1.48c-.91-.87-2.33-.93-3.3-.13l-11.14,9.03.24-7.49c.04-1.38-1.04-2.53-2.42-2.58L14.67,0c-1.38-.04-2.53,1.04-2.58,2.42l-.64,20.24L0,31.94l3.15,3.88L39.18,6.62l32.27,30.85,3.46-3.61L41.05,1.48ZM17.01,5.08l4.75.15-.3,9.31-4.88,3.96.43-13.42Z" />
      <path d="M39.39,13.84c-.94-.86-2.37-.88-3.33-.05l-25.22,21.88c-.54.47-.86,1.15-.86,1.87l-.19,33.8c0,1.38,1.11,2.51,2.49,2.51l49.33.28c1.38,0,2.51-1.11,2.51-2.49l.19-33.8c0-.7-.29-1.38-.81-1.86l-24.11-22.15ZM50.43,32.17c1.28.69,1.52,2.74.53,4.56-.99,1.83-2.83,2.74-4.11,2.05-1.28-.69-1.52-2.73-.53-4.56.99-1.83,2.83-2.74,4.11-2.05ZM40.28,28.84c.55-2.27,2.3-3.8,3.89-3.41,1.6.39,2.44,2.54,1.89,4.82-.55,2.27-2.3,3.8-3.89,3.41-1.59-.39-2.44-2.54-1.89-4.82ZM40.69,38.19c4.86,1.57,9.56,9.06,5.77,12.37-4.58,4.01-6.84-.63-9.51,1.06-3.35,2.12-6.35.55-7.66-2.02-1.32-2.57,1.23-6.47,1.23-6.47,0,0,4.13-6.89,10.18-4.94ZM34.6,25.27c1.64-.11,3.09,1.7,3.24,4.03.15,2.33-1.05,4.31-2.69,4.42-1.64.11-3.09-1.7-3.24-4.03-.15-2.33,1.06-4.31,2.69-4.42ZM27.9,31.84c1.36-.55,3.1.58,3.89,2.52.78,1.94.31,3.96-1.05,4.51-1.36.55-3.1-.58-3.89-2.52-.79-1.94-.32-3.96,1.05-4.51ZM55.45,64.31l-32.17-.18.03-5,32.17.18-.03,5Z" />
    </g>
  </svg>
);

/**
 * Componente de serviços da página inicial
 *
 * Exibe os diferentes serviços oferecidos pela AmanluxDog em um grid
 * de cards com ícones, títulos e descrições.
 *
 * Implementa animações de entrada quando o componente entra no viewport
 * e efeitos de hover nos cards.
 */
const Services: React.FC = () => {
  // Use i18next hook
  const { t } = useTranslation();

  // Hooks must be called before conditional returns
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Get structured services data
  const servicesData = t('services', { returnObjects: true }) as ServicesSection;

  // Basic check for data (AFTER hooks)
  if (
    !servicesData ||
    !servicesData.title ||
    !servicesData.daycare ||
    !servicesData.hotel ||
    !servicesData.training ||
    !servicesData.taxi ||
    !servicesData.learnMore // Check for learnMore key
  ) {
    console.error('Core services data not loaded correctly from translations');
    return null; // Or a loading indicator
  }

  // Handle optional groomingData with default values
  const groomingData = servicesData.grooming || {
    title: t('services.grooming.title', 'Grooming'),
    description: t('services.grooming.description', 'Ask for details'),
  };

  // Variantes de animação para o container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Variantes de animação para os cards
  const cardVariants = {
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
    <section id="services" className="py-16 bg-neutral-surface" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          className="headline2 text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          {servicesData.title}
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Daycare */}
          <motion.div
            className="card card-hover"
            variants={cardVariants}
            whileHover={{
              y: -10,
              boxShadow:
                '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            }}
          >
            <div className="p-6">
              <motion.div
                className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center mb-4"
                whileHover={{ rotate: 10 }}
              >
                <DaycareIcon />
              </motion.div>
              <h3 className="headline6">{servicesData.daycare.title}</h3>
              <p className="body1 text-gray-600 mb-4">{servicesData.daycare.description}</p>
              <motion.a
                href="/services/hundebetreuung"
                className="text-primary font-medium hover:text-primary-dark transition-colors"
                whileHover={{ x: 5 }}
              >
                {servicesData.learnMore} →
              </motion.a>
            </div>
          </motion.div>

          {/* Hotel */}
          <motion.div
            className="card card-hover"
            variants={cardVariants}
            whileHover={{
              y: -10,
              boxShadow:
                '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            }}
          >
            <div className="p-6">
              <motion.div
                className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center mb-4"
                whileHover={{ rotate: 10 }}
              >
                <Bed className="text-white" />
              </motion.div>
              <h3 className="headline6">{servicesData.hotel.title}</h3>
              <p className="body1 text-gray-600 mb-4">{servicesData.hotel.description}</p>
              <motion.a
                href="/services/hundebetreuung"
                className="text-primary font-medium hover:text-primary-dark transition-colors"
                whileHover={{ x: 5 }}
              >
                {servicesData.learnMore} →
              </motion.a>
            </div>
          </motion.div>

          {/* Training */}
          <motion.div
            className="card card-hover"
            variants={cardVariants}
            whileHover={{
              y: -10,
              boxShadow:
                '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            }}
          >
            <div className="p-6">
              <motion.div
                className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center mb-4"
                whileHover={{ rotate: 10 }}
              >
                <Dog className="text-white" />
              </motion.div>
              <h3 className="headline6">{servicesData.training.title}</h3>
              <p className="body1 text-gray-600 mb-4">{servicesData.training.description}</p>
              <motion.a
                href="/services/hundetraining"
                className="text-primary font-medium hover:text-primary-dark transition-colors"
                whileHover={{ x: 5 }}
              >
                {servicesData.learnMore} →
              </motion.a>
            </div>
          </motion.div>

          {/* Taxi */}
          <motion.div
            className="card card-hover"
            variants={cardVariants}
            whileHover={{
              y: -10,
              boxShadow:
                '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            }}
          >
            <div className="p-6">
              <motion.div
                className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center mb-4"
                whileHover={{ rotate: 10 }}
              >
                <Car className="text-white" />
              </motion.div>
              <h3 className="headline6">{servicesData.taxi.title}</h3>
              <p className="body1 text-gray-600 mb-4">{servicesData.taxi.description}</p>
              {/* No learn more link for Taxi */}
            </div>
          </motion.div>

          {/* Grooming */}
          <motion.div
            className="card card-hover"
            variants={cardVariants}
            whileHover={{
              y: -10,
              boxShadow:
                '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            }}
          >
            <div className="p-6">
              <motion.div
                className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center mb-4"
                whileHover={{ rotate: 10 }}
              >
                <Scissors className="text-white" />
              </motion.div>
              <h3 className="headline6">{groomingData.title}</h3>
              <p className="body1 text-gray-600 mb-4">{groomingData.description}</p>
              <motion.a
                href="#" // TODO: Update link if Grooming page exists
                className="text-primary font-medium hover:text-primary-dark transition-colors"
                whileHover={{ x: 5 }}
              >
                {servicesData.learnMore} →
              </motion.a>
            </div>
          </motion.div>

          {/* Empty div for grid alignment */}
          <div className="hidden lg:block"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
