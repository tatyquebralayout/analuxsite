import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import { LanguageProvider } from '../contexts/LanguageContext';
import { useTranslation } from 'react-i18next';
import { useScrollToTop } from '../utils/hooks';

/**
 * Layout principal da aplicação
 *
 * Este componente define a estrutura básica de todas as páginas,
 * incluindo o Header e Footer.
 *
 * Gerencia a mudança de idioma global usando i18next.
 *
 * A AnimatePresence é usada para animar transições entre páginas.
 */
const MainLayout: React.FC = () => {
  const { i18n } = useTranslation();
  const location = useLocation();

  // Usa o hook para rolar para o topo ao mudar de página
  useScrollToTop();

  const currentLanguage = i18n.language.split('-')[0];

  const handleSetLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <LanguageProvider value={{ language: currentLanguage, setLanguage: handleSetLanguage }}>
      <div className="min-h-screen bg-white flex flex-col">
        <Header language={currentLanguage} setLanguage={handleSetLanguage} />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </main>
        <Footer language={currentLanguage} />
      </div>
    </LanguageProvider>
  );
};

export default MainLayout;
