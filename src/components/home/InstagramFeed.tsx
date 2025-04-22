import React, { useState } from 'react';
import { Instagram, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { translations } from '../../utils/translations';

/**
 * Interface de propriedades do componente InstagramFeed
 */
interface InstagramFeedProps {
  language: string;  // Idioma atual
}

/**
 * Interface para os posts do Instagram
 */
interface InstagramPost {
  imageUrl: string;
  postUrl: string;
}

/**
 * Componente de feed do Instagram
 * 
 * Exibe posts recentes do Instagram da AmanluxDogs em um grid,
 * com efeitos de hover e animações de entrada.
 */
const InstagramFeed: React.FC<InstagramFeedProps> = ({ language }) => {
  // Obtém as traduções para o idioma atual
  const t = translations[language];
  
  // Estado para controlar qual item está com hover
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  // Hook para detectar quando o componente entra no viewport
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  // Posts reais do Instagram com imagens e links
  const instagramPosts: InstagramPost[] = [
    {
      imageUrl: "https://iili.io/3d6N9lS.md.jpg",
      postUrl: "https://www.instagram.com/p/Cp2b147KSRT/"
    },
    {
      imageUrl: "https://iili.io/3d6rerG.md.png",
      postUrl: "https://www.instagram.com/p/C32qelvqE6H/"
    },
    {
      imageUrl: "https://iili.io/3d6ZaUX.md.png",
      postUrl: "https://www.instagram.com/p/C3F-Om6qE82/"
    },
    {
      imageUrl: "https://iili.io/3d6ZYlt.md.png",
      postUrl: "https://www.instagram.com/p/C3FpaVBKdOH/"
    },
    {
      imageUrl: "https://iili.io/3d6ZEbf.md.png",
      postUrl: "https://www.instagram.com/p/CzESGykqyxa/"
    },
    {
      imageUrl: "https://iili.io/3d6Z1OG.md.png",
      postUrl: "https://www.instagram.com/p/CwTOqL7yvib/"
    },
    {
      imageUrl: "https://iili.io/3d6ZMx4.md.png",
      postUrl: "https://www.instagram.com/p/CwTOiDCyMVn/"
    },
    {
      imageUrl: "https://iili.io/3d6ZVWl.md.png",
      postUrl: "https://www.instagram.com/p/Cv7ZYYVKxaZ/"
    }
  ];

  // Variantes de animação para o container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Variantes de animação para os itens
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-16 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Botão para seguir no Instagram no topo */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          <motion.a 
            href="https://instagram.com/amanluxdogs" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors font-medium bg-primary-container px-6 py-3 rounded-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ 
                rotate: [0, 10, 0, -10, 0],
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity,
                repeatType: "loop" 
              }}
            >
              <Instagram size={20} />
            </motion.div>
            {t.gallery.instagram}
            <ExternalLink size={16} />
          </motion.a>
        </motion.div>
        
        {/* Grid de posts do Instagram */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Posts do Instagram com imagens reais */}
          {instagramPosts.map((post, index) => (
            <motion.div 
              key={index}
              className="overflow-hidden rounded-lg"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div 
                className="relative h-64 w-full cursor-pointer"
                onClick={() => window.open(post.postUrl, "_blank")}
              >
                <img 
                  src={post.imageUrl} 
                  alt={`AmanluxDogs Instagram post ${index + 1}`} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-15 hover:bg-opacity-30 transition-all duration-300 flex items-end justify-end p-2">
                  <div className="bg-white bg-opacity-15 px-2 py-1 rounded-md">
                    <div className="flex items-center gap-1">
                      <Instagram size={12} className="text-white" />
                      <span className="text-white text-xs">@amanluxdogs</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default InstagramFeed;