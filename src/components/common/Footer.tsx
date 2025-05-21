import React from 'react';
import { Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

/**
 * Componente de rodapé da aplicação
 *
 * Exibe informações de contato, links rápidos, redes sociais,
 * formulário de newsletter e informações de copyright.
 */
const Footer = () => {
  // Usando o hook useTranslation
  const { t } = useTranslation();

  // Hook para detectar quando o componente entra no viewport
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Variantes de animação para o container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Variantes de animação para os itens
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  // Variantes de animação para os ícones sociais
  const socialIconVariants = {
    hidden: { scale: 0 },
    visible: (i: number) => ({
      scale: 1,
      transition: {
        delay: i * 0.1,
        type: 'spring',
        stiffness: 300,
        damping: 10,
      },
    }),
  };

  return (
    <footer className="bg-primary-dark text-white pt-16 pb-8" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Logo e informações de contato */}
          <motion.div variants={itemVariants}>
            <motion.div className="flex items-center mb-6" whileHover={{ x: 5 }}>
              <motion.div className="mr-2" whileHover={{ rotate: 5 }}>
                <img
                  src="https://iili.io/3dgK2Zg.png"
                  alt="AmanluxDog Logo"
                  className="h-10 w-auto"
                />
              </motion.div>
              <h2 className="headline5 font-bold font-sour-gummy">{t('header.siteTitle')}</h2>
            </motion.div>

            <div className="space-y-3">
              <motion.div className="flex items-center gap-3" whileHover={{ x: 5 }}>
                <Phone size={18} className="text-accent-light" />
                <span>{t('header.phone')} Daniel Leon</span>
              </motion.div>
              <motion.div className="flex items-center gap-3" whileHover={{ x: 5 }}>
                <Phone size={18} className="text-accent-light" />
                <span>{t('header.phone')} Danillo Pires</span>
              </motion.div>
              <motion.div className="flex items-center gap-3" whileHover={{ x: 5 }}>
                <Mail size={18} className="text-accent-light" />
                <span>{t('header.email')}</span>
              </motion.div>
              <motion.div className="flex items-center gap-3" whileHover={{ x: 5 }}>
                <Clock size={18} className="text-accent-light" />
                <span>{t('header.hours')}</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Links rápidos */}
          <motion.div variants={itemVariants}>
            <h3 className="headline6 mb-6 font-sour-gummy">
              {t('footer.quickLinks')}
            </h3>
            <ul className="space-y-3">
              <li>
                <motion.div whileHover={{ x: 5 }}>
                  <Link to="/" className="hover:text-accent transition-colors">
                    {t('header.home')}
                  </Link>
                </motion.div>
              </li>
              <li>
                <motion.div whileHover={{ x: 5 }}>
                  <Link to="/services" className="hover:text-accent transition-colors">
                    {t('header.services')}
                  </Link>
                </motion.div>
              </li>
              <li>
                <motion.div whileHover={{ x: 5 }}>
                  <Link to="/about" className="hover:text-accent transition-colors">
                    {t('header.about')}
                  </Link>
                </motion.div>
              </li>
              <li>
                <motion.div whileHover={{ x: 5 }}>
                  <Link to="/partnership" className="hover:text-accent transition-colors">
                    {t('header.partnership')}
                  </Link>
                </motion.div>
              </li>
              <li>
                <motion.div whileHover={{ x: 5 }}>
                  <Link to="/contact" className="hover:text-accent transition-colors">
                    {t('header.contact')}
                  </Link>
                </motion.div>
              </li>
            </ul>
          </motion.div>

          {/* Redes sociais */}
          <motion.div variants={itemVariants}>
            <h3 className="headline6 mb-6 font-sour-gummy">{t('footer.followUs')}</h3>
            <div className="flex space-x-4 mb-6">
              <motion.a
                href="https://www.instagram.com/amanluxdogs/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-accent text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                variants={socialIconVariants}
                custom={0}
                whileHover={{ scale: 1.2, rotate: 10 }}
                aria-label={t('footer.instagramAriaLabel')}
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a
                href="https://www.facebook.com/amanluxdogs/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-accent text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                variants={socialIconVariants}
                custom={1}
                whileHover={{ scale: 1.2, rotate: 10 }}
                aria-label={t('footer.facebookAriaLabel')}
              >
                <Facebook size={20} />
              </motion.a>
            </div>
          </motion.div>

          {/* Google Maps */}
          <motion.div variants={itemVariants}>
            <h3 className="headline6 mb-6 font-sour-gummy">{t('footer.mapSectionTitle')}</h3>
            <div className="aspect-w-16 aspect-h-9 rounded-md overflow-hidden">
              <iframe
                src="https://maps.google.com/maps?q=Hauptstrasse%208416%20Flaach%2C%20Switzerland&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                className="maps-iframe"
                allowFullScreen={false}
                referrerPolicy="no-referrer-when-downgrade"
                title="Amanlux Dog Location Map"
              ></iframe>
            </div>
            <p className="text-sm mt-2 text-gray-300">{t('location.address')}</p>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="pt-8 border-t border-primary text-center text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p>
            &copy; {new Date().getFullYear()} Amanlux Dog.{' '}
            {t('footer.rights')}
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
