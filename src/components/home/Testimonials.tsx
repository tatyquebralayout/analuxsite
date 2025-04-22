import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { translations } from '../../utils/translations';

/**
 * Interface de propriedades do componente Testimonials
 */
interface TestimonialsProps {
  language: string;  // Idioma atual
}

/**
 * Componente de depoimentos
 * 
 * Exibe um carrossel de depoimentos de clientes com dois cards por vez,
 * navegação intuitiva e animações suaves.
 */
const Testimonials: React.FC<TestimonialsProps> = ({ language }) => {
  // Obtém as traduções para o idioma atual
  const t = translations[language];
  
  // Estado para controlar a página atual (cada página tem 2 testemunhos)
  const [currentPage, setCurrentPage] = useState(0);
  
  // Estado para controlar a direção da animação
  const [direction, setDirection] = useState(0);
  
  // Hook para detectar quando o componente entra no viewport
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  // Fotos de perfil para os testemunhos
  const profilePhotos = [
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
  ];
  
  // Obter os testemunhos do arquivo de traduções e adicionar fotos
  const testimonials = t.testimonials.items.map((item, index) => {
    // Dividir o texto em linhas para melhor formatação
    const textLines = item.text.split('. ').map(line => line.trim() + (line.endsWith('.') ? '' : '.'));
    
    return {
      text: textLines,
      name: item.name,
      pet: item.pet,
      photo: profilePhotos[index % profilePhotos.length]
    };
  });
  
  // Número total de páginas (cada página mostra 2 testemunhos)
  const totalPages = Math.ceil(testimonials.length / 2);
  
  // Efeito para avançar automaticamente os testemunhos a cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      goToNextPage();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentPage]);
  
  // Efeito para resetar a página atual quando o idioma muda
  useEffect(() => {
    setCurrentPage(0);
  }, [language]);
  
  // Função para avançar para a próxima página
  const goToNextPage = () => {
    setDirection(1);
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };
  
  // Função para voltar para a página anterior
  const goToPrevPage = () => {
    setDirection(-1);
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };
  
  // Função para ir para uma página específica
  const goToPage = (pageIndex: number) => {
    setDirection(pageIndex > currentPage ? 1 : -1);
    setCurrentPage(pageIndex);
  };
  
  // Obtém os testemunhos da página atual
  const getCurrentPageTestimonials = () => {
    const startIndex = currentPage * 2;
    return testimonials.slice(startIndex, startIndex + 2);
  };

  // Variantes para animação do slider
  const sliderVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0
    })
  };

  return (
    <section 
      className="py-16 bg-amber-50 relative overflow-hidden" 
      ref={ref}
    >
      <div className="container mx-auto px-4">
        {/* Título */}
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          {t.testimonials.title}
        </motion.h2>
        
        {/* Carrossel de depoimentos */}
        <div className="relative max-w-5xl mx-auto">
          {/* Botão de navegação - Anterior */}
          <motion.button 
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-md hover:bg-gray-100 transition-colors"
            onClick={goToPrevPage}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Depoimentos anteriores"
            initial={{ opacity: 0, x: -10 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
            transition={{ duration: 0.4 }}
          >
            <ChevronLeft size={24} className="text-orange-500" />
          </motion.button>
          
          {/* Container do carrossel com overflow hidden */}
          <div className="overflow-hidden px-12">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div 
                key={currentPage + language} // Adicionar language à key para forçar re-renderização quando o idioma muda
                custom={direction}
                variants={sliderVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 }
                }}
                className="flex flex-col md:flex-row justify-center gap-8"
              >
                {/* Renderiza os testemunhos da página atual */}
                {getCurrentPageTestimonials().map((testimonial, idx) => (
                  <motion.div 
                    key={`${currentPage}-${idx}-${language}`} // Adicionar language à key
                    className="bg-white rounded-xl shadow-md p-6 md:p-8 flex-1 flex flex-col"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: idx * 0.15 }}
                  >
                    {/* Aspas decorativas */}
                    <div className="text-orange-200 text-6xl font-serif absolute -top-2 left-6">"</div>
                    
                    <div className="flex flex-col items-center relative z-10">
                      {/* Foto de perfil */}
                      <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-orange-100 mb-4 shadow-sm">
                        <img 
                          src={testimonial.photo} 
                          alt={`Foto de ${testimonial.name}`} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      {/* Estrelas de avaliação */}
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="text-amber-400 fill-amber-400" size={16} />
                        ))}
                      </div>
                      
                      {/* Texto do depoimento */}
                      <div className="text-center mb-6">
                        {testimonial.text.map((line, lineIdx) => (
                          <p key={lineIdx} className="text-gray-700 leading-relaxed">
                            {line}
                          </p>
                        ))}
                      </div>
                      
                      {/* Linha divisória */}
                      <div className="w-16 h-0.5 bg-orange-200 mb-4"></div>
                      
                      {/* Informações do cliente */}
                      <div className="text-center mt-auto">
                        <p className="font-bold text-gray-800">{testimonial.name}</p>
                        <p className="text-sm text-orange-500">{testimonial.pet}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Botão de navegação - Próximo */}
          <motion.button 
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-md hover:bg-gray-100 transition-colors"
            onClick={goToNextPage}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Próximos depoimentos"
            initial={{ opacity: 0, x: 10 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 10 }}
            transition={{ duration: 0.4 }}
          >
            <ChevronRight size={24} className="text-orange-500" />
          </motion.button>
        </div>
        
        {/* Indicadores de página (bolinhas) */}
        <div className="flex justify-center mt-8 space-x-2">
          {[...Array(totalPages)].map((_, index) => (
            <motion.button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentPage ? 'bg-orange-500' : 'bg-gray-300'
              }`}
              onClick={() => goToPage(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Ir para depoimentos ${index + 1}`}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
            />
          ))}
        </div>
        
        {/* Badge */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.div 
            className="inline-block bg-orange-100 text-orange-700 px-6 py-3 rounded-full font-medium"
            whileHover={{ scale: 1.05 }}
          >
            {t.testimonials.badge}
          </motion.div>
        </motion.div>
      </div>
      
      {/* Elementos decorativos */}
      <motion.div 
        className="absolute top-0 right-0 w-64 h-64 bg-orange-200 rounded-full opacity-20 transform translate-x-1/3 -translate-y-1/3"
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 10, 0]
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity,
          repeatType: "reverse" 
        }}
      ></motion.div>
      <motion.div 
        className="absolute bottom-0 left-0 w-64 h-64 bg-amber-200 rounded-full opacity-20 transform -translate-x-1/3 translate-y-1/3"
        animate={{ 
          scale: [1, 1.3, 1],
          rotate: [0, -10, 0]
        }}
        transition={{ 
          duration: 12, 
          repeat: Infinity,
          repeatType: "reverse" 
        }}
      ></motion.div>
    </section>
  );
};

export default Testimonials;