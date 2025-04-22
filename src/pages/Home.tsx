import React from 'react';
import { useLanguage } from '../contexts/useLanguage';
import Hero from '../components/home/Hero';
import Advantages from '../components/home/Advantages';
import Testimonials from '../components/home/Testimonials';
import Gallery from '../components/home/Gallery';
import Faq from '../components/home/Faq';
import InstagramFeed from '../components/home/InstagramFeed';
import SEO from '../components/common/SEO';

/**
 * Componente da página inicial
 *
 * Agrega todos os componentes que formam a página inicial,
 * obtendo o idioma atual do contexto de idioma.
 */
const Home: React.FC = () => {
  // Obtém o idioma atual do contexto
  const { language } = useLanguage();

  return (
    <>
      <SEO
        title="AmanluxDog - Hundetagesstätte & Hotel in Zürich"
        description="Liebevolle Hundebetreuung, Hundehotel und Hundetraining in Flaach, Zürich. Sicherer Transport inklusive."
        keywords="Hundebetreuung Zürich, Hundehotel Zürich, Hundetagesstätte Flaach, Hundetraining, AmanluxDog"
      />
      <Hero language={language} />
      <Advantages language={language} />
      {/* <Services language={language} /> */}
      <Testimonials language={language} />
      <Gallery language={language} />
      <Faq language={language} />
      <InstagramFeed language={language} />
      {/* <ContactSection language={language} /> */}
    </>
  );
};

export default Home;
