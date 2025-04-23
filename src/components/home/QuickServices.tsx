import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import DaycareIcon from '../../assets/images/svg/daycare.svg?react';
import SeguroIcon from '../../assets/images/svg/seguro.svg?react'; // Placeholder for Overnight
import TaxiIcon from '../../assets/images/svg/verde.svg?react'; // Placeholder for Taxi

interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description, delay }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
    >
      <Icon className="h-12 w-12 text-primary mb-4" />
      <h3 className="headline6 text-gray-900 mb-2">{title}</h3>
      <p className="body2 text-gray-600">{description}</p>
    </motion.div>
  );
};

const services = [
  {
    icon: DaycareIcon,
    title: 'Tagesbetreuung',
    description:
      'Wir bieten Ihrem vierbeinigen Liebling ein besonderes Erlebnis – voller Freude, Geborgenheit und Komfort, den ganzen Tag über.',
    delay: 0,
  },
  {
    icon: SeguroIcon, // Using SeguroIcon as placeholder
    title: 'Übernachtung und Wochenende',
    description:
      'Bleibt Ihr Hund über Nacht oder am Wochenende bei uns, kümmern wir uns liebevoll um alles – mit bequemen Betten, kuscheligen Decken und Spielzeug, sodass es Ihrem Vierbeiner an nichts fehlt.',
    delay: 0.15,
  },
  {
    icon: TaxiIcon, // Using VerdeIcon as placeholder
    title: 'Taxi Dog-Service',
    description:
      'Unser Taxi-Dog-Service in Zürich und Umgebung ist im Preis inbegriffen und fährt auf zwei fixen Routen – bitte beachten Sie, dass er an Wochenenden und Feiertagen nicht verfügbar ist.',
    delay: 0.3,
  },
];

const QuickServices: React.FC = () => {
  return (
    <section className="py-16 bg-neutral-surface-subtle">
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
