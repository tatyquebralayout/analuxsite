import React from 'react';
// import { useLanguage } from '../contexts/useLanguage'; // Remover
// import { translations } from '../utils/translations'; // Remover
// import { TranslationSchema } from '../types'; // Remover se não for mais usada
import SEO from '../components/common/SEO';
import PartnershipComponent from '../components/home/Partnership';
import { useTranslation } from 'react-i18next'; // Adicionar

const PartnershipPage: React.FC = () => {
  // const { language } = useLanguage(); // Remover
  // const t_old = translations[language as keyof typeof translations] as TranslationSchema; // Remover
  const { t } = useTranslation(); // Apenas t é necessário

  return (
    <>
      <SEO
        title={t('partnership.title', 'Partnership')} // Usar t() com valor padrão
        description={t('partnership.description', 'Become a partner with AmanluxDog.')} // Usar t() com valor padrão
        keywords="dog partnership, amanluxdog partners, hundebetreuung partnerschaft"
      />
      <div className="container mx-auto px-4 py-12 font-sans">
        {/* Passar i18n.language se PartnershipComponent precisar */}
        <PartnershipComponent />
      </div>
    </>
  );
};

export default PartnershipPage;
