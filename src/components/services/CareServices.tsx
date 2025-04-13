import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Sun, Moon, Car, Clock, PawPrint, Home, Heart, MapPin } from 'lucide-react';
import { TranslationSchema } from '../../types';

interface CareServicesProps {
  t: TranslationSchema['services'];
  cardVariants: Variants;
  inView: boolean;
}

const CareServices: React.FC<CareServicesProps> = ({ t, cardVariants, inView }) => {
  if (!t) return null; // Return null if translations aren't loaded

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
    >
      {/* Day Care */}
      <motion.div
        custom={0}
        variants={cardVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="bg-white rounded-lg shadow-md overflow-hidden group"
      >
        <div className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-primary-container">
              <Sun className="h-5 w-5 text-primary" />
            </div>
            <h3 className="headline6">{t.daycare.title}</h3>
          </div>
          <p className="body1 text-gray-600 mb-6">{t.daycare.description}</p>
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm">
              <Clock className="h-4 w-4 text-gray-500" />
              <span>{t.daycare.hours || 'Pick up from 6:30am'}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <PawPrint className="h-4 w-4 text-gray-500" />
              <span>{t.daycare.attention || 'Individual attention & care'}</span>
            </div>
            <div className="pt-4 border-t">
              <p className="text-2xl font-semibold text-primary">87 CHF</p>
              <p className="text-sm text-gray-500">{t.perDay || 'Per day, excl. VAT'}</p>
            </div>
            <motion.button
              className="w-full btn-primary"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {t.bookNow || 'Book Now'}
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Overnight Stay */}
      <motion.div
        custom={1}
        variants={cardVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="bg-white rounded-lg shadow-md overflow-hidden group"
      >
        <div className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-primary-container">
              <Moon className="h-5 w-5 text-primary" />
            </div>
            <h3 className="headline6">{t.hotel.title}</h3>
          </div>
          <p className="body1 text-gray-600 mb-6">{t.hotel.description}</p>
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm">
              <Home className="h-4 w-4 text-gray-500" />
              <span>{t.hotel.comfort || 'Comfortable accommodation'}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Heart className="h-4 w-4 text-gray-500" />
              <span>{t.hotel.care || '24/7 loving care'}</span>
            </div>
            <div className="pt-4 border-t">
              <p className="text-2xl font-semibold text-primary">
                {t.contactPrice || 'Contact for pricing'}
              </p>
              <p className="text-sm text-gray-500">{t.customPlans || 'Customized care plans'}</p>
            </div>
            <motion.button
              className="w-full btn-primary"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {t.inquireNow || 'Inquire Now'}
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Taxi Service */}
      <motion.div
        custom={2}
        variants={cardVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="bg-white rounded-lg shadow-md overflow-hidden group"
      >
        <div className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-primary-container">
              <Car className="h-5 w-5 text-primary" />
            </div>
            <h3 className="headline6">{t.taxi.title}</h3>
          </div>
          <p className="body1 text-gray-600 mb-6">{t.taxi.description}</p>
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="h-4 w-4 text-gray-500" />
              <span>{t.taxi.coverage || 'Zurich coverage area'}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Clock className="h-4 w-4 text-gray-500" />
              <span>{t.taxi.hours || 'Mon-Fri service'}</span>
            </div>
            <div className="pt-4 border-t">
              <div className="inline-block bg-secondary-container text-secondary px-3 py-1 rounded-full text-sm font-medium mb-2">
                {t.included || 'Included with care services'}
              </div>
              <p className="text-sm text-gray-500">
                {t.taxi.notAvailable || 'Not available on weekends & holidays'}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CareServices;
