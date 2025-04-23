import React from 'react';
import Hero from '../components/home/Hero';
import VideoHighlight from '../components/home/VideoHighlight';
import QuickServices from '../components/home/QuickServices';
import Partnership from '../components/home/Advantages';
import Gallery from '../components/home/Gallery';
import Faq from '../components/home/Faq';
import InstagramFeed from '../components/home/InstagramFeed';
import SEO from '../components/common/SEO';
import ContactSection from '../components/contact/ContactSection';

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
      <VideoHighlight />
      <QuickServices />
      <Partnership />
      {/* <Services language={language} /> */}
      {/* <Testimonials /> */}
      <Gallery />
      <Faq />
      <InstagramFeed />
      <ContactSection />
    </>
  );
};

export default Home;
