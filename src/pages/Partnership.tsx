import React from 'react';
import { useLanguage } from '../contexts/useLanguage';
import { translations } from '../utils/translations';
import { TranslationSchema } from '../types';
import SEO from '../components/common/SEO';
import PartnershipComponent from '../components/home/Partnership';

const PartnershipPage: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations] as TranslationSchema;

  return (
    <>
      <SEO
        title={t.partnership?.title || 'Partnership'}
        description={String(t.partnership?.description || 'Become a partner with AmanluxDog.')}
        keywords="dog partnership, amanluxdog partners, hundebetreuung partnerschaft"
      />
      <div className="container mx-auto px-4 py-12 font-sans">
        <PartnershipComponent language={language} />
      </div>
    </>
  );
};

export default PartnershipPage;
