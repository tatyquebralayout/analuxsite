import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import ContactImage from '../../assets/images/contato.png'; // Import the image

// Definir tipos para as props, se necessário, como o idioma
interface ContactSectionProps {
  language?: string; // Opcional por enquanto
}

const ContactSection: React.FC<ContactSectionProps> = () => {
  // Hook para detectar quando o componente entra no viewport
  const { ref, inView } = useInView({
    threshold: 0.2, // Ajuste conforme necessário
    triggerOnce: true,
  });

  // Variantes de animação
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section id="contact-cta" className="bg-[#ffe202]" ref={ref}>
      <motion.div
        className="container mx-auto px-4 py-16 md:py-24"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Imagem à esquerda */}
          <motion.div variants={imageVariants} className="text-center lg:text-left">
            <img
              src={ContactImage}
              alt="Cachorro feliz usando fones de ouvido"
              className="max-w-full h-auto mx-auto lg:mx-0 rounded-lg shadow-lg" // Adicionado rounded e shadow
              style={{ maxWidth: '450px' }} // Limitar tamanho da imagem se necessário
            />
          </motion.div>

          {/* Texto e Botão à direita */}
          <motion.div variants={itemVariants}>
            <h1 className="headline2 font-sour-gummy text-white mb-6 drop-shadow-md">
              {' '}
              {/* Sombra para contraste */}
              Ein Ort, an dem Ihr Hund nicht nur betreut – sondern von Herzen geliebt wird.
            </h1>
            <p className="body1 text-primary-dark mb-8">
              {' '}
              {/* Usando primary-dark para contraste */}
              Bei AmanLux Dogs steht das ganzheitliche Wohlbefinden Ihres Vierbeiners im
              Mittelpunkt: Tagesbetreuung, Übernachtung, Taxi-Dog-Service, individuelles
              Verhaltenstraining, Social Walking, Gehorsamkeitstraining, Online-Beratung – und neu:
              exklusive Partnerschaften für Pflege und Gesundheit.
              <br />
              <br />
              Unser engagiertes Team verbindet Erfahrung, Einfühlungsvermögen und höchste Sorgfalt –
              damit Ihr Hund in einem sicheren, liebevollen und naturnahen Umfeld aufblüht. Denn bei
              uns ist Ihr Hund mehr als ein Gast – er ist Teil der Familie.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="inline-block bg-white text-accent font-semibold py-3 px-8 rounded-full shadow-md transition duration-300 ease-in-out hover:bg-gray-100 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-accent-light focus:ring-offset-2 focus:ring-offset-[#ffe202]"
              >
                Kontaktieren Sie uns
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
