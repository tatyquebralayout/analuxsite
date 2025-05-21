import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import { useScrollToTop } from '../utils/hooks/useScrollToTop';

/**
 * Main Application Layout
 *
 * This component defines the basic structure for all pages,
 * including the Header and Footer.
 *
 * Language is now handled by react-i18next and user selection.
 *
 * AnimatePresence is used to animate transitions between pages.
 */
const MainLayout: React.FC = () => {
  const location = useLocation();
  useScrollToTop();

  // The currentLanguage is now managed by react-i18next, 
  // so this fixed value is no longer needed.
  // const currentLanguage = 'de'; // Fixed language

  return (
    // Language is now handled globally by i18next, LanguageProvider might be deprecated or adapted
    <div className="min-h-screen bg-white flex flex-col">
      {/* Render the Header component. Language is implicitly handled by Header now. */}
      <Header />
      <main className="flex-grow">
        {/* Animate page transitions */}
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Render the current page component */}
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      {/* Render the Footer component. Language is implicitly handled by Footer now. */}
      <Footer />
    </div>
  );
};

export default MainLayout;
