import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import { LanguageProvider } from '../contexts/LanguageContext';
import { useScrollToTop } from '../utils/hooks/useScrollToTop';

/**
 * Layout principal da aplicação
 *
 * Este componente define a estrutura básica de todas as páginas,
 * incluindo o Header e Footer.
 *
 * O idioma agora é fixo para Alemão (de).
 *
 * A AnimatePresence é usada para animar transições entre páginas.
 */
const MainLayout: React.FC = () => {
  const location = useLocation();
  useScrollToTop();

  const currentLanguage = 'de'; // Idioma fixo

  return (
    <LanguageProvider value={{ language: currentLanguage }}>
      <div className="min-h-screen bg-white flex flex-col">
        <Header language={currentLanguage} />
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
