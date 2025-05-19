import React from 'react';
import SEO from '../components/common/SEO';
import AboutUsComponent from '../components/home/AboutUs';
import Team from '../components/about/Team';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../contexts/useLanguage';

const AboutPage: React.FC = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();

  return (
    <>
      <SEO
        title={t('about.title', 'Über Uns - Amanlux Dog')}
        description={t('about.description', 'Erfahren Sie mehr über Amanlux Dog.')}
        keywords={t(
          'about.keywords',
          'über uns, Amanlux Dog, hundebetreuung zürich, team, geschichte'
        )}
      />
      <div className="container mx-auto px-4 py-12 font-sans">
        <AboutUsComponent />
        <Team language={language} />
      </div>
    </>
  );
};

export default AboutPage;
