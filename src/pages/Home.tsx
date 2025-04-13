import React from 'react';
import { useLanguage } from '../contexts/useLanguage';
import Hero from '../components/home/Hero';
import Advantages from '../components/home/Advantages';
import Services from '../components/home/Services';
import AboutUs from '../components/home/AboutUs';
import Partnership from '../components/home/Partnership';
import Testimonials from '../components/home/Testimonials';
import Gallery from '../components/home/Gallery';
import Faq from '../components/home/Faq';
import InstagramFeed from '../components/home/InstagramFeed';
import ContactSection from '../components/home/ContactSection';

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
      <Hero language={language} />
      <Advantages language={language} />
      <Services language={language} />
      <AboutUs language={language} />
      <Partnership language={language} />
      <Testimonials language={language} />
      <Gallery language={language} />
      <Faq language={language} />
      <InstagramFeed language={language} />
      <ContactSection language={language} />
    </>
  );
};

export default Home;
