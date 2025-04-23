import React from 'react';
import Hero from '../components/home/Hero';
import QuickServices from '../components/home/QuickServices';
import Advantages from '../components/home/Advantages';
import Testimonials from '../components/home/Testimonials';
import Gallery from '../components/home/Gallery';
import Faq from '../components/home/Faq';
import InstagramFeed from '../components/home/InstagramFeed';
import SEO from '../components/common/SEO';

/**
 * Componente da página inicial
 *
 * Agrega todos os componentes que formam a página inicial.
 */
const Home: React.FC = () => {
  // Remove language prop getting if not used elsewhere
  // const { language } = useLanguage();

  return (
    <>
      <SEO
        title="AmanluxDog - Hundetagesstätte & Hotel in Zürich"
        description="Liebevolle Hundebetreuung, Hundehotel und Hundetraining in Flaach, Zürich. Sicherer Transport inklusive."
        keywords="Hundebetreuung Zürich, Hundehotel Zürich, Hundetagesstätte Flaach, Hundetraining, AmanluxDog"
      />
      <Hero />
      <QuickServices />
      <Advantages />
      {/* <Services language={language} /> */}
      <Testimonials />
      <Gallery />
      <Faq />
      <InstagramFeed />
      {/* <ContactSection language={language} /> */}
    </>
  );
};

export default Home;
