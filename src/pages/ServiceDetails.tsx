import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/useLanguage';
import { translations } from '../utils/translations';
import NotFound from './NotFound';

// Interface para tipar as traduções
interface ServiceTranslation {
  services: Record<string, { title: string; description: string }>;
  common: { backButton: string };
}

const ServiceDetails: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const { language } = useLanguage();
  const navigate = useNavigate();
  const t = translations[language as keyof typeof translations] as unknown as ServiceTranslation;

  // Check if service exists
  const validServices = ['daycare', 'hotel', 'training', 'taxi', 'grooming'];
  if (!serviceId || !validServices.includes(serviceId)) {
    return <NotFound />;
  }

  // Get service details
  const service = t.services[serviceId as keyof typeof t.services];

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h1
          className="text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {service.title}
        </motion.h1>

        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-lg text-gray-700 mb-8">{service.description}</p>

          {/* More service details would go here */}

          <motion.button
            onClick={() => navigate(-1)}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md transition-colors font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t.common.backButton}
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceDetails;
