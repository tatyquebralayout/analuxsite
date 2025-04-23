import React from 'react';
import { MapPin, Car, ParkingMeter } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';

/**
 * Componente de localização
 *
 * Exibe um mapa incorporado do Google Maps e informações
 * sobre endereço, área de atuação do táxi e estacionamento.
 *
 * Usa unidades relativas e valores da escala do Tailwind para
 * melhor responsividade e consistência com o design system.
 */
const Location: React.FC = () => {
  const { t } = useTranslation();

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      },
    }),
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
          {t('location.title', 'Find Us')}
        </motion.h2>

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
            onError={e => {
              const target = e.target as HTMLIFrameElement;
              target.style.display = 'none';
              const container = target.parentElement;
              if (container) {
                const errorMsg = document.createElement('div');
                errorMsg.className = 'p-4 text-center text-gray-700';
                errorMsg.innerText =
                  'Não foi possível carregar o mapa. Por favor, verifique sua conexão com a internet.';
                container.appendChild(errorMsg);
              }
            }}
          />
        </motion.div>

        <div className="space-y-4">
          <motion.div
            className="flex items-start gap-3"
            variants={itemVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={0}
          >
            <motion.div
              whileHover={{ scale: 1.2, rotate: 10 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <MapPin className="text-primary mt-1 flex-shrink-0" aria-hidden="true" />
            </motion.div>
            <div>
              <h3 className="headline6 text-gray-900">{t('location.address', 'Address')}</h3>
              <p className="body1 text-gray-700">Hauptstrasse, 8416 Flaach</p>
              <p className="body1 text-gray-700">Switzerland (HJF3+Q8)</p>
            </div>
          </motion.div>

          <motion.div
            className="flex items-start gap-3"
            variants={itemVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={1}
          >
            <motion.div
              whileHover={{ scale: 1.2, rotate: 10 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <Car className="text-primary mt-1 flex-shrink-0" aria-hidden="true" />
            </motion.div>
            <div>
              <h3 className="headline6 text-gray-900">
                {t('location.taxiArea', 'Taxi Service Area')}
              </h3>
              <p className="body1 text-gray-700">
                {t(
                  'location.taxiDescription',
                  'Taxi service included for Zurich & surroundings. Contact us to check your route.'
                )}
              </p>
            </div>
          </motion.div>

          <motion.div
            className="flex items-start gap-3"
            variants={itemVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={2}
          >
            <motion.div
              whileHover={{ scale: 1.2, rotate: 10 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <ParkingMeter className="text-primary mt-1 flex-shrink-0" aria-hidden="true" />
            </motion.div>
            <div>
              <h3 className="headline6 text-gray-900">{t('location.parking', 'Parking')}</h3>
              <p className="body1 text-gray-700">
                {t('location.parkingDescription', 'Free parking available on site.')}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;
