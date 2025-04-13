import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import { LanguageProvider } from '../contexts/LanguageContext';

/**
 * Layout principal da aplicação
 * 
 * Este componente define a estrutura básica de todas as páginas,
 * incluindo o Header e Footer, e gerencia o estado do idioma.
 * 
 * Usa o LanguageProvider para disponibilizar o idioma selecionado
 * para todos os componentes filhos.
 * 
 * A AnimatePresence é usada para animar transições entre mudanças
 * de idioma, criando uma experiência mais fluida.
 */
const MainLayout: React.FC = () => {
  // Estado para gerenciar o idioma atual, com português como padrão
  const [language, setLanguage] = useState('pt');

  return (
    <LanguageProvider value={{ language, setLanguage }}>
      <div className="min-h-screen bg-white">
        <Header language={language} setLanguage={setLanguage} />
        <main>
          <AnimatePresence mode="wait">
            <motion.div
              key={language}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </main>
        <Footer language={language} />
      </div>
    </LanguageProvider>
  );
};

export default MainLayout;