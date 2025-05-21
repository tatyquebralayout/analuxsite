import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
// Removed unused useTranslation import
// Removed unused partnershipImageUrl (cachorro.png)
import partnershipBannerUrl from '../../assets/images/banner-parceria.png'; // Import banner image

const Partnership: React.FC = () => {
  const { t } = useTranslation();

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Removed partnershipTitle and partnershipDescription

  return (
    // Removed background image styling, kept bg-white
    <section
      id="partnership"
      className="py-16 bg-white" // Back to bg-white
      ref={ref}
    >
      {/* Restored two-column layout, items-center for vertical alignment */}
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
        {/* Left Column: Text */}
        <motion.div
          className="w-full lg:w-1/2 text-left" // Align text left
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="headline3 font-sour-gummy text-[#EC6B1C] mb-4">
            {t('partnership.title')}
          </p>
          {/* Usando chaves de tradução para os parágrafos da descrição */}
          {Array.isArray(t('partnership.description')) ? (
            (t('partnership.description') as string[]).map((paragraph, index) => (
              <p key={index} className="body1 text-[#EC6B1C] mb-4">
                {paragraph}
              </p>
            ))
          ) : (
            <p className="body1 text-[#EC6B1C] mb-4">
              {t('partnership.description')}
            </p>
          )}
          <p className="body1 text-[#EC6B1C] mb-6">
            Dank dieser Partnerschaft können wir Ihnen jetzt ein noch umfassenderes
            Rundum-Sorglos-Paket bieten: von der liebevollen Betreuung bei AmanLux Dogs bis hin zu
            professionellem Baden, Trimmen und Spa-Momenten bei DogAffair – alles aus einer Hand, in
            der Stadt Zürich.
          </p>
          {/* Usando chave de tradução para o texto final antes do botão */}
          {Array.isArray(t('partnership.description')) && (
            <p className="body1 text-[#EC6B1C] font-medium">
              {t('partnership.description')[t('partnership.description').length - 1]}
            </p>
          )}

          {/* Usando chave de tradução para o texto do botão CTA */}
          <div className="mt-6">
            <Link
              to="/partnership"
              className="bg-[#EC6B1C] text-white px-6 py-2 rounded-full hover:bg-[#c65a17] transition-colors duration-300 w-fit inline-block"
            >
              {t('partnership.cta')}
            </Link>
          </div>
        </motion.div>

        {/* Right Column: Banner Image */}
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }} // Adjusted delay
        >
          <img
            src={partnershipBannerUrl}
            alt="Partnership Banner"
            className="rounded-lg shadow-md"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Partnership;
