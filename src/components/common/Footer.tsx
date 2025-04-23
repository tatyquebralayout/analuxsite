import React, { useState } from 'react';
import { Phone, Mail, Clock, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { translations } from '../../utils/translations';
import { TranslationSchema } from '../../types';

/**
 * Interface de propriedades do componente Footer
 */
interface FooterProps {
  language: string; // Idioma atual
}

/**
 * Componente de rodapé da aplicação
 *
 * Exibe informações de contato, links rápidos, redes sociais,
 * formulário de newsletter e informações de copyright.
 */
const Footer: React.FC<FooterProps> = ({ language }) => {
  // Obtém as traduções para o idioma atual
  const t = translations[language as keyof typeof translations] as TranslationSchema;

  // Estado para o campo de email do formulário de newsletter
  const [email, setEmail] = useState('');

  // Hook para detectar quando o componente entra no viewport
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  /**
   * Manipula o envio do formulário de newsletter
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica de inscrição na newsletter iria aqui
    console.log('Newsletter subscription:', email);
    alert(t.footer.subscribeSuccess);
    setEmail('');
  };

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
              <h2 className="headline5 font-bold">Amanlux Dog</h2>
            </motion.div>

            <div className="space-y-3">
              <motion.div className="flex items-center gap-3" whileHover={{ x: 5 }}>
                <Phone size={18} className="text-accent-light" />
                <span>+41 76 575 09 77</span>
              </motion.div>
              <motion.div className="flex items-center gap-3" whileHover={{ x: 5 }}>
                <Mail size={18} className="text-accent-light" />
                <span>contato@amanluxdog.com</span>
              </motion.div>
              <motion.div className="flex items-center gap-3" whileHover={{ x: 5 }}>
                <Clock size={18} className="text-accent-light" />
                <div>
                  <p>{t.footer.weekdays}: 07:00 - 18:00</p>
                  <p>
                    {t.footer.weekends}:{' '}
                    {language === 'pt'
                      ? 'Fechado'
                      : language === 'es'
                        ? 'Cerrado'
                        : language === 'fr'
                          ? 'Fermé'
                          : language === 'de'
                            ? 'Geschlossen'
                            : 'Closed'}
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Links rápidos */}
          <motion.div variants={itemVariants}>
            <h3 className="headline6 mb-6">{t.footer.quickLinks}</h3>
            <ul className="space-y-3">
              <li>
                <motion.a
                  href="#home"
                  className="hover:text-accent transition-colors"
                  whileHover={{ x: 5 }}
                >
                  {t.header.home}
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#services"
                  className="hover:text-accent transition-colors"
                  whileHover={{ x: 5 }}
                >
                  {t.header.services}
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#about"
                  className="hover:text-accent transition-colors"
                  whileHover={{ x: 5 }}
                >
                  {t.header.about}
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#partnership"
                  className="hover:text-accent transition-colors"
                  whileHover={{ x: 5 }}
                >
                  {t.header.partnership}
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#contact"
                  className="hover:text-accent transition-colors"
                  whileHover={{ x: 5 }}
                >
                  {t.header.contact}
                </motion.a>
              </li>
            </ul>
          </motion.div>

          {/* Redes sociais */}
          <motion.div variants={itemVariants}>
            <h3 className="headline6 mb-6">{t.footer.followUs}</h3>
            <div className="flex space-x-4 mb-6">
              <motion.a
                href="#"
                className="bg-primary hover:bg-accent text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                variants={socialIconVariants}
                custom={0}
                whileHover={{ scale: 1.2, rotate: 10 }}
                aria-label="Visit our Instagram"
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a
                href="#"
                className="bg-primary hover:bg-accent text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                variants={socialIconVariants}
                custom={1}
                whileHover={{ scale: 1.2, rotate: 10 }}
                aria-label="Visit our Facebook"
              >
                <Facebook size={20} />
              </motion.a>
              <motion.a
                href="#"
                className="bg-primary hover:bg-accent text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                variants={socialIconVariants}
                custom={2}
                whileHover={{ scale: 1.2, rotate: 10 }}
                aria-label="Visit our Twitter"
              >
                <Twitter size={20} />
              </motion.a>
              <motion.a
                href="#"
                className="bg-primary hover:bg-accent text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                variants={socialIconVariants}
                custom={3}
                whileHover={{ scale: 1.2, rotate: 10 }}
                aria-label="Visit our YouTube"
              >
                <Youtube size={20} />
              </motion.a>
            </div>

            <div>
              <motion.a
                href="#"
                className="text-sm hover:text-accent transition-colors"
                whileHover={{ x: 2 }}
              >
                {t.footer.privacy}
              </motion.a>
              <span className="mx-2">|</span>
              <motion.a
                href="#"
                className="text-sm hover:text-accent transition-colors"
                whileHover={{ x: 2 }}
              >
                {t.footer.terms}
              </motion.a>
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={itemVariants}>
            <h3 className="headline6 mb-6">{t.footer.newsletter}</h3>
            <p className="mb-4 text-gray-300">{t.footer.newsletterText}</p>

            <form onSubmit={handleSubmit} className="flex">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder={t.footer.emailPlaceholder}
                required
                className="px-4 py-2 rounded-l-md text-gray-800 w-full focus:outline-none focus:ring-2 focus:ring-accent"
                aria-label={t.footer.emailPlaceholder || 'Enter your email for newsletter'}
              />
              <motion.button
                type="submit"
                className="bg-accent hover:bg-accent-dark text-black px-4 py-2 rounded-r-md transition-colors font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t.footer.subscribe}
              </motion.button>
            </form>
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
            &copy; {new Date().getFullYear()} Amanlux Dog. {t.footer.rights}
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
