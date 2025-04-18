import React, { useEffect, useState } from 'react';
import { Heart, Calendar, Home, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { translations } from '../../utils/translations';

interface AdvantagesProps {
  language: string;
}

const Advantages: React.FC<AdvantagesProps> = ({ language }) => {
  const t = translations[language];
  
  // State for counters
  const [counts, setCounts] = useState({
    stories: 0,
    years: 0,
    space: 0,
  });
  
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  // Counter animation effect
  useEffect(() => {
    if (!inView) return;
    
    const duration = 2000; // 2 seconds
    const interval = 20; // Update every 20ms
    
    const targetCounts = {
      stories: 2000,
      years: 5,
      space: 220,
    };
    
    const steps = {
      stories: (targetCounts.stories / (duration / interval)),
      years: (targetCounts.years / (duration / interval)),
      space: (targetCounts.space / (duration / interval)),
    };
    
    let timer: NodeJS.Timeout;
    
    const startCounting = () => {
      let elapsed = 0;
      
      timer = setInterval(() => {
        elapsed += interval;
        
        setCounts(prev => ({
          stories: Math.min(Math.round(steps.stories * (elapsed / interval)), targetCounts.stories),
          years: Math.min(Math.round(steps.years * (elapsed / interval)), targetCounts.years),
          space: Math.min(Math.round(steps.space * (elapsed / interval)), targetCounts.space),
        }));
        
        if (elapsed >= duration) {
          clearInterval(timer);
        }
      }, interval);
    };
    
    startCounting();
    
    return () => {
      clearInterval(timer);
    };
  }, [inView]);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  return (
    <section id="advantages" className="py-16 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2 
          className="headline2 text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          {t.advantages.title}
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Happy Stories */}
          <motion.div 
            className="bg-primary-container rounded-lg p-6 text-center transform transition-transform hover:scale-105"
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0}
            whileHover={{ y: -10 }}
          >
            <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
              <motion.span 
                className="text-white"
                animate={{ rotate: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >🐾</motion.span>
            </div>
            <h3 className="headline4 font-bold mb-2">+{counts.stories.toLocaleString()}</h3>
            <h4 className="headline6 mb-2">{t.advantages.stories.title}</h4>
            <p className="body1 text-gray-600">{t.advantages.stories.description}</p>
          </motion.div>
          
          {/* Years of Experience */}
          <motion.div 
            className="bg-primary-container rounded-lg p-6 text-center transform transition-transform hover:scale-105"
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={1}
            whileHover={{ y: -10 }}
          >
            <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <Calendar className="text-white" />
              </motion.div>
            </div>
            <h3 className="headline4 font-bold mb-2">{counts.years}</h3>
            <h4 className="headline6 mb-2">{t.advantages.years.title}</h4>
            <p className="body1 text-gray-600">{t.advantages.years.description}</p>
          </motion.div>
          
          {/* Space */}
          <motion.div 
            className="bg-primary-container rounded-lg p-6 text-center transform transition-transform hover:scale-105"
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={2}
            whileHover={{ y: -10 }}
          >
            <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
              <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Home className="text-white" />
              </motion.div>
            </div>
            <h3 className="headline4 font-bold mb-2">{counts.space}m²</h3>
            <h4 className="headline6 mb-2">{t.advantages.space.title}</h4>
            <p className="body1 text-gray-600">{t.advantages.space.description}</p>
          </motion.div>
          
          {/* 24/7 Attention */}
          <motion.div 
            className="bg-primary-container rounded-lg p-6 text-center transform transition-transform hover:scale-105"
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={3}
            whileHover={{ y: -10 }}
          >
            <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity,
                  repeatType: "reverse" 
                }}
              >
                <Heart className="text-white" />
              </motion.div>
            </div>
            <h3 className="headline4 font-bold mb-2">24/7</h3>
            <h4 className="headline6 mb-2">{t.advantages.attention.title}</h4>
            <p className="body1 text-gray-600">{t.advantages.attention.description}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;