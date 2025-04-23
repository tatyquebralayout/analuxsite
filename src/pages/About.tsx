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
        title={t('aboutPage.seo.title', 'Über uns - Amanlux Dog')}
        description={t(
          'aboutPage.seo.description',
          'Lernen Sie das Team und die Geschichte von Amanlux Dog kennen.'
        )}
        keywords={t(
          'aboutPage.seo.keywords',
          'über uns, amanluxdog, hundebetreuung zürich, team, geschichte'
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
