import React from 'react';
import { useLanguage } from '../contexts/useLanguage';
import { translations } from '../utils/translations';
import { TranslationSchema } from '../types';
import SEO from '../components/common/SEO';
import AboutUsComponent from '../components/home/AboutUs';

const AboutPage: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations] as TranslationSchema;

  return (
    <>
      <SEO
        title={t.about?.title || 'Über uns'}
        description={String(t.about?.description || 'Erfahren Sie mehr über AmanluxDog.')}
        keywords="about amanluxdog, hundebetreuung zürich, hundetagesstätte"
      />
      <div className="container mx-auto px-4 py-12 font-sans">
        <AboutUsComponent language={language} />
      </div>
    </>
  );
};

export default AboutPage;
