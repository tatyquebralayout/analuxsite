import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import heroDogsUrl from '../../assets/images/dogs_hero.webp';

/**
 * Interface de propriedades do componente Hero
 */

/**
 * Componente Hero redesenhado com altura proporcional e nova imagem.
 */
const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4 py-16 md:py-20 bg-white flex flex-col md:flex-row items-center">
      {/* Área de texto - md:w-1/2, smaller max-width, left-aligned */}
      <div className="w-full md:w-1/2 md:pr-12 lg:pr-16 mb-10 md:mb-0 max-w-2xl">
        {/* Bloco de título */}
        <motion.h1
          className="headline1 text-[#ec1c54] leading-tight mb-6 font-sour-gummy font-medium"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {t('hero.headline')}
        </motion.h1>

        <motion.p
          className="body1 text-gray-700 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {t('hero.subtitle')}
        </motion.p>

        {/* Botão CTA - Adjust layout */}
        <motion.button
          className="btn-primary w-fit"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {t('hero.primaryCTA')}
        </motion.button>
      </div>

      {/* Área da nova imagem - md:w-1/2, remove max-width */}
      <motion.div
        className="w-full md:w-1/2"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <img
          src={heroDogsUrl}
          alt={t('hero.imageAlt', 'Cachorros olhando por cima de uma superfície branca')}
          className="w-full h-auto rounded-lg shadow-xl"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
