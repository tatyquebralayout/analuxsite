import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { translations } from '../../utils/translations';

/**
 * Interface de propriedades do componente AboutUs
 */
interface AboutUsProps {
  language: string;  // Idioma atual
}

/**
 * Componente AboutUs da página inicial
 * 
 * Exibe uma seção sobre a empresa com imagem e texto descritivo.
 * Implementa animações de entrada quando o componente entra no viewport.
 */
const AboutUs: React.FC<AboutUsProps> = ({ language }) => {
  // Obtém as traduções para o idioma atual
  const t = translations[language];
  
  // Hook para detectar quando o componente entra no viewport
  const { ref, inView } = useInView({
    threshold: 0.1,  // Ativa quando pelo menos 10% do componente está visível
    triggerOnce: true  // Ativa apenas uma vez
  });

  return (
    <section id="about" className="py-16 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Imagem */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.img 
              src="https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" 
              alt="Cães brincando no espaço AmanluxDog" 
              className="rounded-lg shadow-xl w-full h-auto object-cover"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
          
          {/* Conteúdo */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <h2 className="headline2">
              {t.about.title}
            </h2>
            <p className="body1 text-gray-700 mb-8 leading-relaxed">
              {t.about.description}
            </p>
            <motion.button 
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t.about.button}
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;