import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';
import { 
  Sun, 
  Moon, 
  Car, 
  Clock, 
  PawPrint, 
  Home, 
  Heart, 
  MapPin, 
  Users, 
  Dog, 
  Video, 
  PhoneCall 
} from 'lucide-react';

const Services: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  
  // Tabs state
  const [activeTab, setActiveTab] = React.useState('care');
  
  // Animation hooks for different sections
  const { ref: heroRef, inView: heroInView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  const { ref: tabsRef, inView: tabsInView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  const { ref: consultationRef, inView: consultationInView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  const { ref: contactRef, inView: contactInView } = useInView({
    threshold: 0.1,
    triggerOnce: true
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
        ease: "easeOut"
      }
    })
  };

  return (
    <div className="container mx-auto px-4 py-12 font-sans">
      {/* Hero Section */}
      <section 
        ref={heroRef} 
        className="mb-16 text-center max-w-4xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
          className="inline-block bg-primary-container text-primary px-4 py-1 rounded-full text-sm font-medium mb-4"
        >
          {t.services.title}
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="headline1 mb-6"
        >
          {t.services.heroTitle || "Professional Dog Care Services"}
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="body1 text-gray-600 leading-relaxed"
        >
          {t.services.heroDescription || "Our goal is to provide your pet with the care and affection you are used to, so that you can work, travel or be on the go without worry. With individual and continuous care, we ensure that your pet feels completely comfortable and safe."}
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
            className={`py-3 px-4 rounded-lg transition-colors ${activeTab === 'care' ? 'bg-white shadow-md text-primary font-medium' : 'text-gray-600'}`}
          >
            {t.services.careTab || "Care Services"}
          </button>
          <button 
            onClick={() => setActiveTab('training')}
            className={`py-3 px-4 rounded-lg transition-colors ${activeTab === 'training' ? 'bg-white shadow-md text-primary font-medium' : 'text-gray-600'}`}
          >
            {t.services.trainingTab || "Training"}
          </button>
        </motion.div>

        {/* Care Services */}
        {activeTab === 'care' && (
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
              animate={tabsInView ? "visible" : "hidden"}
              className="bg-white rounded-lg shadow-md overflow-hidden group"
            >
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary-container">
                    <Sun className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="headline6">{t.services.daycare.title}</h3>
                </div>
                <p className="body1 text-gray-600 mb-6">
                  {t.services.daycare.description}
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-gray-500" />
                    <span>{t.services.daycare.hours || "Pick up from 6:30am"}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <PawPrint className="h-4 w-4 text-gray-500" />
                    <span>{t.services.daycare.attention || "Individual attention & care"}</span>
                  </div>
                  <div className="pt-4 border-t">
                    <p className="text-2xl font-semibold text-primary">87 CHF</p>
                    <p className="text-sm text-gray-500">{t.services.perDay || "Per day, excl. VAT"}</p>
                  </div>
                  <motion.button 
                    className="w-full btn-primary"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {t.services.bookNow || "Book Now"}
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Overnight Stay */}
            <motion.div 
              custom={1}
              variants={cardVariants}
              initial="hidden"
              animate={tabsInView ? "visible" : "hidden"}
              className="bg-white rounded-lg shadow-md overflow-hidden group"
            >
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary-container">
                    <Moon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="headline6">{t.services.hotel.title}</h3>
                </div>
                <p className="body1 text-gray-600 mb-6">
                  {t.services.hotel.description}
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Home className="h-4 w-4 text-gray-500" />
                    <span>{t.services.hotel.comfort || "Comfortable accommodation"}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Heart className="h-4 w-4 text-gray-500" />
                    <span>{t.services.hotel.care || "24/7 loving care"}</span>
                  </div>
                  <div className="pt-4 border-t">
                    <p className="text-2xl font-semibold text-primary">{t.services.contactPrice || "Contact for pricing"}</p>
                    <p className="text-sm text-gray-500">{t.services.customPlans || "Customized care plans"}</p>
                  </div>
                  <motion.button 
                    className="w-full btn-primary"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {t.services.inquireNow || "Inquire Now"}
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Taxi Service */}
            <motion.div 
              custom={2}
              variants={cardVariants}
              initial="hidden"
              animate={tabsInView ? "visible" : "hidden"}
              className="bg-white rounded-lg shadow-md overflow-hidden group"
            >
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary-container">
                    <Car className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="headline6">{t.services.taxi.title}</h3>
                </div>
                <p className="body1 text-gray-600 mb-6">
                  {t.services.taxi.description}
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-gray-500" />
                    <span>{t.services.taxi.coverage || "Zurich coverage area"}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-gray-500" />
                    <span>{t.services.taxi.hours || "Mon-Fri service"}</span>
                  </div>
                  <div className="pt-4 border-t">
                    <div className="inline-block bg-secondary-container text-secondary px-3 py-1 rounded-full text-sm font-medium mb-2">
                      {t.services.included || "Included with care services"}
                    </div>
                    <p className="text-sm text-gray-500">{t.services.notAvailable || "Not available on weekends & holidays"}</p>
                  </div>
                  <motion.button 
                    className="w-full border border-primary text-primary hover:bg-primary-container px-6 py-3 rounded-md transition-colors font-medium"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {t.services.checkCoverage || "Check Coverage"}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Training Services */}
        {activeTab === 'training' && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="grid gap-6 md:grid-cols-2"
          >
            {/* Social Training */}
            <motion.div 
              custom={0}
              variants={cardVariants}
              initial="hidden"
              animate={tabsInView ? "visible" : "hidden"}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary-container">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="headline6">{t.services.training?.social || "Social Training & Walking"}</h3>
                </div>
                <p className="body1 text-gray-600 mb-6">
                  {t.services.training?.socialDesc || "Group training to improve socialization and enable harmonious coexistence in different environments."}
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-gray-500" />
                    <span>{t.services.training?.duration || "90 minutes per session"}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-gray-500" />
                    <span>{t.services.training?.groupSize || "8-10 dogs per group"}</span>
                  </div>
                  <div className="pt-4 border-t">
                    <p className="text-2xl font-semibold text-primary">55 CHF</p>
                    <p className="text-sm text-gray-500">{t.services.training?.pricing || "Per session, package deals available"}</p>
                  </div>
                  <motion.button 
                    className="w-full btn-primary"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {t.services.training?.book || "Book Training"}
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Private Training */}
            <motion.div 
              custom={1}
              variants={cardVariants}
              initial="hidden"
              animate={tabsInView ? "visible" : "hidden"}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary-container">
                    <Dog className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="headline6">{t.services.training?.private || "Private Training"}</h3>
                </div>
                <p className="body1 text-gray-600 mb-6">
                  {t.services.training?.privateDesc || "Personalized one-on-one training sessions tailored to your dog's specific needs."}
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-gray-500" />
                    <span>{t.services.training?.privateDuration || "60 minutes per session"}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-gray-500" />
                    <span>{t.services.training?.location || "At your location"}</span>
                  </div>
                  <div className="pt-4 border-t">
                    <p className="text-2xl font-semibold text-primary">150 CHF</p>
                    <p className="text-sm text-gray-500">{t.services.training?.privatePricing || "Per session, travel fees may apply"}</p>
                  </div>
                  <motion.button 
                    className="w-full btn-primary"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {t.services.training?.schedule || "Schedule Session"}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
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
              <h3 className="headline6">{t.services.consultation?.title || "Online Consultation"}</h3>
            </div>
            <p className="body1 text-gray-600 mb-6">
              {t.services.consultation?.description || "Get expert guidance through online video conversations to make the first few weeks with your new pet as stress-free as possible."}
            </p>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <p className="text-2xl font-semibold text-primary">110 CHF</p>
                <p className="text-sm text-gray-500">{t.services.consultation?.pricing || "Per session, in-person visits available"}</p>
              </div>
              <motion.button 
                className="btn-primary flex items-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <PhoneCall className="h-5 w-5" />
                {t.services.consultation?.schedule || "Schedule Consultation"}
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
        <h2 className="headline2 mb-4">{t.services.contact?.title || "Ready to Get Started?"}</h2>
        <p className="body1 text-gray-600 mb-8">
          {t.services.contact?.description || "Contact us today to discuss how we can provide the best care for your beloved pet."}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <motion.button 
            className="btn-primary flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <PhoneCall className="h-5 w-5" />
            {t.services.contact?.contactUs || "Contact Us"}
          </motion.button>
          <motion.button 
            className="btn-outline"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t.services.contact?.viewFaq || "View FAQ"}
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
};

export default Services;