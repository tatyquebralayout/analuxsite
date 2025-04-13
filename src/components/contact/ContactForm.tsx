import React, { useState } from 'react';
import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { translations } from '../../utils/translations';

interface ContactFormProps {
  language: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ language }) => {
  const t = translations[language];
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    dogCount: '1',
    dogSize: 'medium',
    service: 'daycare',
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    alert(t.contact.successMessage);
  };

  const inputVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

  return (
    <section id="contact" className="py-16 bg-white lg:w-1/2" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2 
          className="headline2"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          {t.contact.title}
        </motion.h2>
        
        <motion.form 
          onSubmit={handleSubmit} 
          className="max-w-lg"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div 
            className="mb-4"
            variants={inputVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0}
          >
            <label htmlFor="name" className="form-label">{t.contact.name}</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="form-input"
            />
          </motion.div>
          
          <motion.div 
            className="mb-4"
            variants={inputVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={1}
          >
            <label htmlFor="phone" className="form-label">{t.contact.phone}</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="form-input"
            />
          </motion.div>
          
          <motion.div 
            className="mb-4"
            variants={inputVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={2}
          >
            <label htmlFor="email" className="form-label">{t.contact.email}</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-input"
            />
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-2 gap-4 mb-4"
            variants={inputVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={3}
          >
            <div>
              <label htmlFor="dogCount" className="form-label">{t.contact.dogCount}</label>
              <select
                id="dogCount"
                name="dogCount"
                value={formData.dogCount}
                onChange={handleChange}
                className="form-input"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4+">4+</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="dogSize" className="form-label">{t.contact.dogSize}</label>
              <select
                id="dogSize"
                name="dogSize"
                value={formData.dogSize}
                onChange={handleChange}
                className="form-input"
              >
                <option value="small">{t.contact.small}</option>
                <option value="medium">{t.contact.medium}</option>
                <option value="large">{t.contact.large}</option>
              </select>
            </div>
          </motion.div>
          
          <motion.div 
            className="mb-6"
            variants={inputVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={4}
          >
            <label htmlFor="service" className="form-label">{t.contact.service}</label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="form-input"
            >
              <option value="daycare">{t.services.daycare.title}</option>
              <option value="hotel">{t.services.hotel.title}</option>
              <option value="training">{t.services.training.title}</option>
              <option value="taxi">{t.services.taxi.title}</option>
              <option value="grooming">{t.services.grooming.title}</option>
            </select>
          </motion.div>
          
          <motion.button
            type="submit"
            className="w-full btn-primary py-3"
            variants={inputVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={5}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {t.contact.submit}
          </motion.button>
          
          <motion.p 
            className="text-gray-500 text-sm mt-4 text-center"
            variants={inputVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={6}
          >
            {t.contact.promise}
          </motion.p>
          
          <motion.div 
            className="flex items-center justify-center mt-6 gap-2"
            variants={inputVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={7}
          >
            <Phone size={18} className="text-primary" />
            <span>{t.contact.or} +41 76 575 09 77</span>
          </motion.div>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactForm;