import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../contexts/useLanguage';
import { translations } from '../utils/translations';
import { TranslationSchema } from '../types';
import CareServices from '../components/services/CareServices';
import TrainingServices from '../components/services/TrainingServices';
import { Video, PhoneCall } from 'lucide-react';

const Services: React.FC = () => {
  const { language } = useLanguage();

  const t = translations[language as keyof typeof translations] as TranslationSchema;

  // Tabs state
  const [activeTab, setActiveTab] = React.useState('care');

  // Animation hooks for different sections
  const { ref: heroRef, inView: heroInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { ref: tabsRef, inView: tabsInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { ref: consultationRef, inView: consultationInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { ref: contactRef, inView: contactInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Card animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <div className="container mx-auto px-4 py-12 font-sans">
      {/* Hero Section */}
      <section ref={heroRef} className="mb-16 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
          className="inline-block bg-primary-container text-primary px-4 py-1 rounded-full text-sm font-medium mb-4"
        >
          {t.services?.title}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="headline1 mb-6"
        >
          {t.services?.heroTitle || 'Professional Dog Care Services'}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="body1 text-gray-600 leading-relaxed"
        >
          {t.services?.heroDescription ||
            'Our goal is to provide your pet with the care and affection you are used to, so that you can work, travel or be on the go without worry. With individual and continuous care, we ensure that your pet feels completely comfortable and safe.'}
        </motion.p>
      </section>

      {/* Services Tabs */}
      <section ref={tabsRef} className="mb-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={tabsInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md mx-auto grid grid-cols-2 h-auto p-1 mb-8 bg-gray-100 rounded-lg"
        >
          <button
            onClick={() => setActiveTab('care')}
            className={`py-3 px-4 rounded-lg transition-colors ${
              activeTab === 'care' ? 'bg-white shadow-md text-primary font-medium' : 'text-gray-600'
            }`}
          >
            {t.services?.careTab || 'Care Services'}
          </button>
          <button
            onClick={() => setActiveTab('training')}
            className={`py-3 px-4 rounded-lg transition-colors ${
              activeTab === 'training'
                ? 'bg-white shadow-md text-primary font-medium'
                : 'text-gray-600'
            }`}
          >
            {t.services?.trainingTab || 'Training'}
          </button>
        </motion.div>

        {/* Conditional Rendering based on Active Tab */}
        {activeTab === 'care' && (
          <CareServices t={t.services} cardVariants={cardVariants} inView={tabsInView} />
        )}
        {activeTab === 'training' && (
          <TrainingServices t={t.services} cardVariants={cardVariants} inView={tabsInView} />
        )}
      </section>

      {/* Online Consultation */}
      <motion.section
        ref={consultationRef}
        initial={{ opacity: 0, y: 20 }}
        animate={consultationInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary-container">
                <Video className="h-5 w-5 text-primary" />
              </div>
              <h3 className="headline6">
                {t.services?.consultationTitle || 'Need Help Choosing?'}
              </h3>
            </div>
            <p className="body1 text-gray-600 mb-6">
              {t.services?.consultationDescription ||
                "We're happy to help you find the perfect service for your furry friend. Contact us for a free consultation."}
            </p>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <p className="text-2xl font-semibold text-primary">110 CHF</p>
                <p className="text-sm text-gray-500">
                  {t.services?.consultationPricing || 'Per session, in-person visits available'}
                </p>
              </div>
              <motion.button
                className="btn-primary flex items-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <PhoneCall className="h-5 w-5" />
                {t.services?.consultationButton || 'Get Free Consultation'}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        ref={contactRef}
        initial={{ opacity: 0, y: 20 }}
        animate={contactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto"
      >
        <h2 className="headline2 mb-4">{t.services?.contactTitle || 'Ready to Get Started?'}</h2>
        <p className="body1 text-gray-600 mb-8">
          {t.services?.contactDescription ||
            "Book a service online or contact us directly with any questions. We can't wait to meet your dog!"}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <motion.button
            className="btn-primary flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <PhoneCall className="h-5 w-5 mr-2" />
            {t.services?.contactButton || 'Contact Us'}
          </motion.button>
          <motion.button
            className="btn-outline"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t.services?.contactViewFaq || 'View FAQ'}
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
};

export default Services;
