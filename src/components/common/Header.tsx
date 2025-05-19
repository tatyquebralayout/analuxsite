import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Menu as MenuIcon, X, ChevronDown } from 'lucide-react';
import { Menu } from '@headlessui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { translations } from '../../utils/translations';
import { TranslationSchema } from '../../types';

/**
 * Interface de propriedades do componente Header
 */
interface HeaderProps {
  language: string; // Idioma atual (sempre 'de')
}

/**
 * Componente de cabeçalho da aplicação
 *
 * Responsável por exibir a barra superior com informações de contato,
 * navegação principal e botão de menu para mobile.
 * O seletor de idiomas foi removido pois o site agora é apenas em Alemão.
 *
 * Implementa comportamento responsivo e efeito de scroll que fixa o
 * cabeçalho no topo da página quando o usuário rola para baixo.
 */
const Header: React.FC<HeaderProps> = ({ language }) => {
  // Get translations based on the passed language prop
  const t = translations[language as keyof typeof translations] as TranslationSchema;

  // Add a check for t and t.header for safety
  const headerTranslations = t?.header || {};

  // Estado para controlar a abertura/fechamento do menu mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Estado para controlar se o cabeçalho está fixo após rolagem
  const [isScrolled, setIsScrolled] = useState(false);

  // Efeito para detectar rolagem da página
  useEffect(() => {
    const handleScroll = () => {
      // Define o cabeçalho como fixo quando a rolagem passa de 100px
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Adiciona o listener de evento de rolagem
    window.addEventListener('scroll', handleScroll);

    // Remove o listener quando o componente é desmontado
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const closeMobileMenu = () => setIsMenuOpen(false);

  // Variantes de animação para o menu mobile
  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <header className="w-full">
      {/* Barra superior informativa (1280x72px) */}
      <motion.div
        className={`bg-neutral-surface h-[72px] transition-all duration-300 ${
          isScrolled ? 'hidden' : 'flex'
        } items-center`}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Informações de contato - lado esquerdo */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-primary" />
              <span className="text-gray-700">+41 76 575 09 77</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-primary" />
              <span className="text-gray-700">• info@amanlux.com</span>
            </div>
          </div>

          {/* Informações de localização e horário - lado direito */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-primary" />
              <span className="text-gray-700">Hauptstrasse, 8416 Flaach (HJF3+Q8)</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-primary" />
              <span className="text-gray-700">07:00 - 18:00 (Mon-Fri)</span>
            </div>
          </div>

          {/* Versão mobile da barra superior - apenas telefone e email */}
          <div className="flex md:hidden w-full justify-between">
            <div className="flex items-center gap-2">
              <Phone size={14} className="text-primary" />
              <span className="text-sm text-gray-700">+41 76 575 09 77</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={14} className="text-primary" />
              <span className="text-sm text-gray-700">contato@amanluxdog.com</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Barra principal de navegação (1280x88px) */}
      <motion.div
        className={`bg-white h-[88px] transition-all duration-300 ${
          isScrolled ? 'fixed top-0 left-0 right-0 shadow-md z-50' : ''
        } flex items-center`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <motion.div className="flex items-center" whileHover={{ scale: 1.05 }}>
              <Link to="/" className="flex items-center">
                <motion.div className="mr-2" whileHover={{ rotate: 5 }}>
                  <img
                    src="https://iili.io/3dgK2Zg.png"
                    alt="AmanluxDog Logo"
                    className="h-10 w-auto"
                  />
                </motion.div>
                <h1 className="headline5 font-bold font-sour-gummy">Amanlux Dog</h1>
              </Link>
            </motion.div>

            {/* Área direita com navegação, botão e seletor de idioma */}
            <div className="flex items-center">
              {/* Navegação para Desktop - Improved Styling */}
              <nav className="hidden md:flex items-center space-x-4 mr-6">
                <motion.div whileHover={{ y: -2 }}>
                  <Link
                    to="/"
                    className="text-primary text-lg font-medium px-3 py-1 rounded-md hover:bg-primary hover:text-white transition-colors"
                  >
                    {headerTranslations.home || 'Home'}
                  </Link>
                </motion.div>

                {/* Services Dropdown Menu - Updated Button Style */}
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="text-primary text-lg font-medium px-3 py-1 rounded-md hover:bg-primary hover:text-white transition-colors inline-flex items-center">
                      {headerTranslations.services || 'Services'}
                      <ChevronDown className="-mr-1 ml-1 h-5 w-5" aria-hidden="true" />
                    </Menu.Button>
                  </div>

                  <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/services"
                            className={`${
                              active ? 'bg-primary text-white' : 'text-gray-700'
                            } block px-4 py-2 font-medium transition-colors`}
                          >
                            Hundebetreuung
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/services/hundetraining"
                            className={`${
                              active ? 'bg-primary text-white' : 'text-gray-700'
                            } block px-4 py-2 font-medium transition-colors`}
                          >
                            Hundetraining
                          </Link>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Menu>

                <motion.div whileHover={{ y: -2 }}>
                  <Link
                    to="/about"
                    className="text-primary text-lg font-medium px-3 py-1 rounded-md hover:bg-primary hover:text-white transition-colors"
                  >
                    {headerTranslations.about || 'About'}
                  </Link>
                </motion.div>
                <motion.div whileHover={{ y: -2 }}>
                  <Link
                    to="/partnership"
                    className="text-primary text-lg font-medium px-3 py-1 rounded-md hover:bg-primary hover:text-white transition-colors"
                  >
                    {headerTranslations.partnership || 'Partnership'}
                  </Link>
                </motion.div>
                <motion.div whileHover={{ y: -2 }}>
                  <Link
                    to="/contact"
                    className="text-primary text-lg font-medium px-3 py-1 rounded-md hover:bg-primary hover:text-white transition-colors"
                  >
                    {headerTranslations.contact || 'Contact'}
                  </Link>
                </motion.div>
              </nav>

              {/* Botão de orçamento - Estilo Aprimorado */}
              <motion.div whileHover={{ scale: 1.05 }} className="hidden md:block mr-4">
                <Link
                  to="/contact"
                  className="bg-primary text-white font-bold py-2 px-6 rounded-lg shadow-md hover:bg-primary-dark transition-colors duration-300"
                >
                  {headerTranslations.bookNow || 'Book Now'}
                </Link>
              </motion.div>

              {/* Botão do menu mobile */}
              <motion.button
                className="md:hidden ml-4"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                whileTap={{ scale: 0.9 }}
                aria-label={
                  isMenuOpen
                    ? headerTranslations.closeMenu || 'Close Menu'
                    : headerTranslations.openMenu || 'Open Menu'
                }
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Menu mobile */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-white shadow-lg py-4 px-6 absolute w-full z-50"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                className="font-medium hover:text-primary transition-colors"
                onClick={closeMobileMenu}
              >
                {headerTranslations.home || 'Home'}
              </Link>
              <Link
                to="/services"
                className="font-medium hover:text-primary transition-colors"
                onClick={closeMobileMenu}
              >
                Hundebetreuung
              </Link>
              <Link
                to="/services/hundetraining"
                className="font-medium hover:text-primary transition-colors"
                onClick={closeMobileMenu}
              >
                Hundetraining
              </Link>
              <Link
                to="/about"
                className="font-medium hover:text-primary transition-colors"
                onClick={closeMobileMenu}
              >
                {headerTranslations.about || 'About'}
              </Link>
              <Link
                to="/partnership"
                className="font-medium hover:text-primary transition-colors"
                onClick={closeMobileMenu}
              >
                {headerTranslations.partnership || 'Partnership'}
              </Link>
              <Link
                to="/contact"
                className="font-medium hover:text-primary transition-colors"
                onClick={closeMobileMenu}
              >
                {headerTranslations.contact || 'Contact'}
              </Link>

              <motion.button
                className="btn-primary-outline mt-4 w-full flex items-center justify-center gap-2"
                whileTap={{ scale: 0.95 }}
                onClick={closeMobileMenu}
              >
                {headerTranslations.bookNow || 'Book Now'}
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Espaçador para evitar salto de conteúdo quando o cabeçalho se torna fixo */}
      {isScrolled && <div className="h-[88px]"></div>}
    </header>
  );
};

export default Header;
