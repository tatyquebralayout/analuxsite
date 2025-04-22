import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/useLanguage';
import { translations } from '../utils/translations';

// Definir interface para a seção notFound nas traduções
interface WithNotFound {
  notFound?: {
    title: string;
    message: string;
    backHome: string;
  };
}

const NotFound: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations] as WithNotFound;

  // Fallback texts for 404 page
  const title = 'Page Not Found';
  const message = 'Sorry, the page you are looking for does not exist or has been moved.';
  const backHome = 'Back to Home';

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-white">
      <div className="text-center px-4">
        <motion.h1
          className="text-9xl font-bold text-orange-500"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          404
        </motion.h1>

        <motion.h2
          className="text-3xl font-semibold mt-4 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {t.notFound?.title || title}
        </motion.h2>

        <motion.p
          className="text-gray-600 mb-8 max-w-md mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {t.notFound?.message || message}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link to="/">
            <motion.button
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md transition-colors font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t.notFound?.backHome || backHome}
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
