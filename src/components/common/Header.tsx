import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { translations } from '../../utils/translations';
import { flags } from '../../assets/flags';
import { TranslationSchema } from '../../types';

/**
 * Interface de propriedades do componente Header
 */
interface HeaderProps {
  language: string; // Idioma atual
  setLanguage: (lang: string) => void; // Função para alterar o idioma
}

/**
 * Componente de cabeçalho da aplicação
 *
 * Responsável por exibir a barra superior com informações de contato,
 * navegação principal, seletor de idiomas e botão de menu para mobile.
 *
 * Implementa comportamento responsivo e efeito de scroll que fixa o
 * cabeçalho no topo da página quando o usuário rola para baixo.
 */
const Header: React.FC<HeaderProps> = ({ language, setLanguage }) => {
  // Estado para controlar a abertura/fechamento do menu mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Estado para controlar se o cabeçalho está fixo após rolagem
  const [isScrolled, setIsScrolled] = useState(false);

  // Obtém as traduções para o idioma atual
  const t = translations[language as keyof typeof translations] as TranslationSchema;

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
              <span className="text-gray-700">contato@amanluxdog.com</span>
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
                <h1 className="headline5 font-bold">Amanlux Dog</h1>
              </Link>
            </motion.div>

            {/* Área direita com navegação, botão e seletor de idioma */}
            <div className="flex items-center">
              {/* Navegação para Desktop */}
              <nav className="hidden md:flex items-center space-x-6 mr-6">
                <motion.div whileHover={{ y: -2 }}>
                  <Link to="/" className="font-medium hover:text-primary transition-colors">
                    {t.header.home}
                  </Link>
                </motion.div>
                <motion.div whileHover={{ y: -2 }}>
                  <Link to="/services" className="font-medium hover:text-primary transition-colors">
                    {t.header.services}
                  </Link>
                </motion.div>
                <motion.div whileHover={{ y: -2 }}>
                  <Link to="/about" className="font-medium hover:text-primary transition-colors">
                    {t.header.about}
                  </Link>
                </motion.div>
                <motion.div whileHover={{ y: -2 }}>
                  <Link
                    to="/partnership"
                    className="font-medium hover:text-primary transition-colors"
                  >
                    {t.header.partnership}
                  </Link>
                </motion.div>
                <motion.div whileHover={{ y: -2 }}>
                  <Link to="/contact" className="font-medium hover:text-primary transition-colors">
                    {t.header.contact}
                  </Link>
                </motion.div>
              </nav>

              {/* Botão de destaque e seletor de idioma */}
              <div className="hidden md:flex items-center space-x-4">
                <motion.button
                  className="btn-primary flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Clock size={16} />
                  {t.header.bookNow}
                </motion.button>

                {/* Seletor de idioma */}
                <div
                  className="flex border rounded-md"
                  role="group"
                  aria-label={t.header.languageSelector || 'Select Language'}
                >
                  <motion.button
                    onClick={() => setLanguage('pt')}
                    className={`px-2 py-1 text-sm flex items-center justify-center ${
                      language === 'pt' ? 'bg-gray-200' : ''
                    }`}
                    title="Português"
                    aria-label="Mudar para Português"
                    whileHover={{ y: -2 }}
                    dangerouslySetInnerHTML={{ __html: flags.pt }}
                  />
                  <motion.button
                    onClick={() => setLanguage('de')}
                    className={`px-2 py-1 text-sm flex items-center justify-center ${
                      language === 'de' ? 'bg-gray-200' : ''
                    }`}
                    title="Deutsch"
                    aria-label="Wechseln zu Deutsch"
                    whileHover={{ y: -2 }}
                    dangerouslySetInnerHTML={{ __html: flags.de }}
                  />
                </div>
              </div>

              {/* Botão do menu mobile */}
              <motion.button
                className="md:hidden ml-4"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                whileTap={{ scale: 0.9 }}
                aria-label={
                  isMenuOpen ? t.header.closeMenu || 'Close Menu' : t.header.openMenu || 'Open Menu'
                }
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
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
                {t.header.home}
              </Link>
              <Link
                to="/services"
                className="font-medium hover:text-primary transition-colors"
                onClick={closeMobileMenu}
              >
                {t.header.services}
              </Link>
              <Link
                to="/about"
                className="font-medium hover:text-primary transition-colors"
                onClick={closeMobileMenu}
              >
                {t.header.about}
              </Link>
              <Link
                to="/partnership"
                className="font-medium hover:text-primary transition-colors"
                onClick={closeMobileMenu}
              >
                {t.header.partnership}
              </Link>
              <Link
                to="/contact"
                className="font-medium hover:text-primary transition-colors"
                onClick={closeMobileMenu}
              >
                {t.header.contact}
              </Link>

              <motion.button
                className="btn-primary flex items-center justify-center gap-2 w-full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Clock size={16} />
                {t.header.bookNow}
              </motion.button>

              {/* Seletor de idioma para mobile */}
              <div
                className="flex border rounded-md self-start"
                role="group"
                aria-label={t.header.languageSelector || 'Select Language'}
              >
                <button
                  onClick={() => setLanguage('pt')}
                  className={`px-2 py-1 text-sm flex items-center justify-center ${
                    language === 'pt' ? 'bg-gray-200' : ''
                  }`}
                  title="Português"
                  aria-label="Mudar para Português"
                  dangerouslySetInnerHTML={{ __html: flags.pt }}
                />
                <button
                  onClick={() => setLanguage('de')}
                  className={`px-2 py-1 text-sm flex items-center justify-center ${
                    language === 'de' ? 'bg-gray-200' : ''
                  }`}
                  title="Deutsch"
                  aria-label="Wechseln zu Deutsch"
                  dangerouslySetInnerHTML={{ __html: flags.de }}
                />
              </div>

              {/* Informações adicionais no menu mobile */}
              <div className="pt-4 mt-4 border-t border-gray-200">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin size={16} className="text-primary" />
                  <span className="text-sm text-gray-700">Hauptstrasse, 8416 Flaach</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-primary" />
                  <span className="text-sm text-gray-700">07:00 - 18:00 (Mon-Fri)</span>
                </div>
              </div>
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
