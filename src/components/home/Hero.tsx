import React from 'react';
import { motion } from 'framer-motion';
import { translations } from '../../utils/translations';

/**
 * Interface de propriedades do componente Hero
 */
interface HeroProps {
  language: string;  // Idioma atual
}

/**
 * Componente Hero com layout específico e espaçamento adequado
 * 
 * Implementa um design com dimensões específicas:
 * - Altura total: 540px
 * - Área de texto à esquerda: 647px de largura
 * - Espaçamento superior reduzido para melhor harmonização
 * - Inclui botão CTA
 */
const Hero: React.FC<HeroProps> = ({ language }) => {
  // Obtém as traduções para o idioma atual
  const t = translations[language];

  return (
    <div className="container mx-auto flex flex-col md:flex-row items-center bg-white h-[540px]">
      {/* Área de texto à esquerda - limitada a 647px de largura */}
      <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0 max-w-[647px] h-full flex flex-col justify-center">
        <motion.p 
          className="text-accent-dark font-medium mb-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Pet Care
        </motion.p>
        
        {/* Bloco de título */}
        <motion.h1 
          className="headline1 text-black leading-tight mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {t.hero.headline}
        </motion.h1>
        
        <motion.p 
          className="body1 text-gray-700 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {t.hero.subtitle}
        </motion.p>
        
        {/* Botão CTA */}
        <motion.button
          className="btn-primary w-fit"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {t.hero.primaryCTA}
        </motion.button>
      </div>
      
      {/* Área da imagem à direita */}
      <div className="md:w-1/2 h-full flex items-center justify-center">
        <motion.div 
          className="relative w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Imagem do cachorro */}
          <div className="relative z-10 w-full h-full flex items-center justify-center">
            <img 
              src="https://iili.io/3dPCVXp.md.jpg" 
              alt="Cachorro feliz na AmanluxDog" 
              className="object-cover rounded-lg shadow-xl max-h-[489px] max-w-[439px]"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;