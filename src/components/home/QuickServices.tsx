import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
// import DaycareIcon from '../../assets/images/svg/daycare.svg?react'; // SVG removed for now
import daycareImageUrl from '../../assets/images/svg/daycare.png'; // Import PNG
// import SeguroIcon from '../../assets/images/svg/seguro.svg?react'; // Removed placeholder SVG
import sleepImageUrl from '../../assets/images/svg/sleep.png'; // Import sleep PNG
import treinamentoImageUrl from '../../assets/images/svg/treinamento.png'; // Added treinamento icon
// import TaxiIcon from '../../assets/images/svg/verde.svg?react'; // Removed placeholder
// import taxiDogImageUrl from '../../assets/images/svg/taxidog.png'; // Removed Taxi icon

interface ServiceCardProps {
  icon?: React.ElementType | string | null; // Made icon optional
  title: string;
  description: string;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, delay }) => {
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
      {(title === 'Tagesbetreuung' || title === 'Übernachtung und Wochenende') && (
        <Link to="/services/hundebetreuung" className="btn-primary w-fit mt-auto">
          Zur Seite Hundebetreuung
        </Link>
      )}
      {/* Added button link for Hundetraining */}
      {title === 'Hundetraining' && (
        <Link to="/services/hundetraining" className="btn-primary w-fit mt-auto">
          Zur Seite Hundetraining
        </Link>
      )}
    </motion.div>
  );
};

const services = [
  {
    icon: daycareImageUrl,
    title: 'Tagesbetreuung',
    description:
      'Wir bieten Ihrem vierbeinigen Liebling ein besonderes Erlebnis – voller Freude, Geborgenheit und Komfort, den ganzen Tag über.',
    delay: 0,
  },
  {
    icon: sleepImageUrl,
    title: 'Übernachtung und Wochenende',
    description:
      'Bleibt Ihr Hund über Nacht oder am Wochenende bei uns, kümmern wir uns liebevoll um alles – mit bequemen Betten, kuscheligen Decken und Spielzeug, sodass es Ihrem Vierbeiner an nichts fehlt.',
    delay: 0.15,
  },
  {
    icon: treinamentoImageUrl, // Added treinamento icon
    title: 'Hundetraining',
    description:
      'Unser Training kombiniert Fachwissen, Geduld und ganz viel Liebe.\nOb Welpe oder erwachsener Hund – wir unterstützen Sie dabei, Vertrauen, Kommunikation und gutes Verhalten aufzubauen.',
    delay: 0.3,
  },
];

const QuickServices: React.FC = () => {
  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map(service => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickServices;
