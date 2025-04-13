import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Dog } from 'lucide-react';
import { TranslationSchema } from '../../types';

interface TrainingServicesProps {
  t: TranslationSchema['services']; // Use the specific services part of the schema
  cardVariants: Variants; // Use Variants type
  inView: boolean;
}

const TrainingServices: React.FC<TrainingServicesProps> = ({ t, cardVariants, inView }) => {
  if (!t) return null; // Return null if translations aren't loaded

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="grid gap-6 md:grid-cols-1 lg:grid-cols-2" // Adjusted grid columns
    >
      {/* Training Service Card */}
      <motion.div
        custom={0} // Adjust custom index if needed
        variants={cardVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="bg-white rounded-lg shadow-md overflow-hidden group"
      >
        <div className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-primary-container">
              <Dog className="h-5 w-5 text-primary" />
            </div>
            <h3 className="headline6">{t.training.title}</h3>
          </div>
          <p className="body1 text-gray-600 mb-6">{t.training.description}</p>
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm">
              {/* Example detail - replace with actual training details if available in translations */}
              {/* <Users className="h-4 w-4 text-gray-500" /> */}
              {/* <span>{t.training.level || 'All levels welcome'}</span> */}
            </div>
            <div className="flex items-center gap-2 text-sm">
              {/* Example detail - replace with actual training details */}
              {/* <Target className="h-4 w-4 text-gray-500" /> */}
              {/* <span>{t.training.focus || 'Positive reinforcement'}</span> */}
            </div>
            <div className="pt-4 border-t">
              <p className="text-2xl font-semibold text-primary">
                {t.contactPrice || 'Contact for details'}
              </p>
              <p className="text-sm text-gray-500">
                {t.customPlans || 'Customized training plans'}
              </p>
            </div>
            <motion.button
              className="w-full btn-primary"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {t.inquireNow || 'Learn More'}
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Add more training service cards if needed */}
    </motion.div>
  );
};

export default TrainingServices;
