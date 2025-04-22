import React from 'react';
import { MapPin, Car, ParkingMeter } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { translations } from '../../utils/translations';

/**
 * Interface de propriedades do componente Location
 */
interface LocationProps {
  language: string;  // Idioma atual
}

/**
 * Componente de localização
 * 
 * Exibe um mapa incorporado do Google Maps e informações
 * sobre endereço, área de atuação do táxi e estacionamento.
 * 
 * Usa unidades relativas e valores da escala do Tailwind para
 * melhor responsividade e consistência com o design system.
 */
const Location: React.FC<LocationProps> = ({ language }) => {
  // Obtém as traduções para o idioma atual
  const t = translations[language];
  
  // Hook para detectar quando o componente entra no viewport
  const { ref, inView } = useInView({
    threshold: 0.1,  // Ativa quando pelo menos 10% do componente está visível
    triggerOnce: true  // Ativa apenas uma vez
  });

  // Variantes de animação para os itens
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5
      }
    })
  };

  return (
    <section className="py-16 bg-neutral-surface lg:w-1/2" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2 
          className="headline2"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          {t.location.title}
        </motion.h2>
        
        {/* Mapa do Google Maps - Usando h-96 (384px) da escala do Tailwind em vez de h-[400px] */}
        <motion.div 
          className="bg-gray-200 rounded-lg overflow-hidden h-96 mb-6 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.02 }}
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d43066.51751055943!2d8.603308!3d47.574455!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4790775bed45ca5b%3A0x21ef37dcf1471cd7!2sAmanLux%20Dogs%20KlG!5e0!3m2!1spt-PT!2sch!4v1740700630603!5m2!1spt-PT!2sch" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="AmanluxDog Location"
            aria-label="Mapa mostrando a localização da AmanluxDog"
            onError={(e) => {
              const target = e.target as HTMLIFrameElement;
              target.style.display = 'none';
              const container = target.parentElement;
              if (container) {
                const errorMsg = document.createElement('div');
                errorMsg.className = 'p-4 text-center text-gray-700';
                errorMsg.innerText = 'Não foi possível carregar o mapa. Por favor, verifique sua conexão com a internet.';
                container.appendChild(errorMsg);
              }
            }}
          />
        </motion.div>
        
        {/* Informações de localização - Usando gap-3 (12px) da escala do Tailwind */}
        <div className="space-y-4">
          <motion.div 
            className="flex items-start gap-3"
            variants={itemVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0}
          >
            <motion.div
              whileHover={{ scale: 1.2, rotate: 10 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <MapPin className="text-primary mt-1 flex-shrink-0" aria-hidden="true" />
            </motion.div>
            <div>
              <h3 className="headline6 text-gray-900">{t.location.address}</h3>
              <p className="body1 text-gray-700">Hauptstrasse, 8416 Flaach</p>
              <p className="body1 text-gray-700">Switzerland (HJF3+Q8)</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex items-start gap-3"
            variants={itemVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={1}
          >
            <motion.div
              whileHover={{ scale: 1.2, rotate: 10 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Car className="text-primary mt-1 flex-shrink-0" aria-hidden="true" />
            </motion.div>
            <div>
              <h3 className="headline6 text-gray-900">{t.location.taxiArea}</h3>
              <p className="body1 text-gray-700">{t.location.taxiDescription}</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex items-start gap-3"
            variants={itemVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={2}
          >
            <motion.div
              whileHover={{ scale: 1.2, rotate: 10 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <ParkingMeter className="text-primary mt-1 flex-shrink-0" aria-hidden="true" />
            </motion.div>
            <div>
              <h3 className="headline6 text-gray-900">{t.location.parking}</h3>
              <p className="body1 text-gray-700">{t.location.parkingDescription}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;