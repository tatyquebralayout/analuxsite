import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
// import DaycareIcon from '../../assets/images/svg/daycare.svg?react'; // SVG removed for now
import daycareImageUrl from '../../assets/images/service-daycare-image.png'; // Import PNG com novo nome
import treinamentoImageUrl from '../../assets/images/treinamento.png'; // Added treinamento icon
// import TaxiIcon from '../../assets/images/svg/verde.svg?react'; // Removed placeholder
// import taxiDogImageUrl from '../../assets/images/svg/taxidog.png'; // Removed Taxi icon

interface ServiceCardProps {
  icon?: React.ElementType | string | null; // Made icon optional
  title: string;
  description: string;
  delay: number;
  t: (key: string) => string; // Added t prop
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, delay, t }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const IconComponent = typeof icon === 'function' ? icon : null; // Check if it's a component

  return (
    <motion.div
      ref={ref}
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center h-full"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
    >
      {/* Render icon/image only if provided - Further increased size */}
      {typeof icon === 'string' && (
        <img src={icon} alt={title} className="h-24 w-auto mb-4" /> /* Increased height to h-24 */
      )}
      {IconComponent && (
        <IconComponent className="h-24 w-auto text-primary mb-4" /> /* Increased height to h-24 */
      )}
      <h3 className="headline3 text-primary mb-2 font-sour-gummy">{title}</h3>
      <p className="body1 text-gray-600 mb-4 whitespace-pre-line">{description}</p>{' '}
      {/* Added whitespace-pre-line */}
      {/* Conditionally render the button link for specific services */}
      {(title === t('quickServices.daycare.title') || title === t('quickServices.boarding.title')) && (
        <Link to="/services" className="btn-primary w-fit mt-auto">
          {t('quickServices.daycare.button')}
        </Link>
      )}
      {/* Added button link for Hundetraining */}
      {title === t('quickServices.training.title') && (
        <Link to="/services/hundetraining" className="btn-primary w-fit mt-auto">
          {t('quickServices.training.button')}
        </Link>
      )}
    </motion.div>
  );
};

const QuickServices: React.FC = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: daycareImageUrl,
      title: t('quickServices.daycare.title'),
      description:
        t('quickServices.daycare.description'),
      delay: 0,
    },
    {
      icon: daycareImageUrl,
      title: t('quickServices.boarding.title'),
      description:
        t('quickServices.boarding.description'),
      delay: 0.15,
    },
    {
      icon: treinamentoImageUrl, // Added treinamento icon
      title: t('quickServices.training.title'),
      description:
        t('quickServices.training.description'),
      delay: 0.3,
    },
  ];

  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map(service => (
            <ServiceCard key={service.title} {...service} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickServices;
