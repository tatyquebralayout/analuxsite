import React from 'react';
import { motion } from 'framer-motion';

interface DetailItem {
  label: string;
  value: string;
}

interface PriceItem {
  label: string;
  value: string;
}

interface SubContentSection {
  title: string;
  paragraphs: string[];
}

interface TrainingSectionProps {
  id?: string;
  bgColor?: 'white' | 'gray-50';
  layoutReverse?: boolean;
  imageInfo: {
    placeholderText: string; // Usaremos placeholder por enquanto
    // Futuramente: imageUrl: string; alt: string;
  };
  detailsTitle: string;
  detailsList: DetailItem[];
  priceList: PriceItem[];
  priceLabel: string;
  taxInfoLabel: string;
  contentTitle: string;
  contentParagraphs: string[];
  contentListItems?: string[];
  subContentSections?: SubContentSection[];
}

const TrainingSection: React.FC<TrainingSectionProps> = ({
  id,
  bgColor = 'gray-50',
  layoutReverse = false,
  imageInfo,
  detailsTitle,
  detailsList,
  priceList,
  priceLabel,
  taxInfoLabel,
  contentTitle,
  contentParagraphs,
  contentListItems,
  subContentSections,
}) => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  // Determina a ordem das colunas (imagem e texto) com base em layoutReverse
  const flexDirection = layoutReverse ? 'md:flex-row-reverse' : 'md:flex-row';
  const detailsBgColor = bgColor === 'white' ? 'bg-gray-50' : 'bg-white'; // Alterna a cor do card de detalhes

  return (
    <motion.section
      id={id}
      className={`py-16 ${bgColor === 'white' ? 'bg-white' : 'bg-gray-50'}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={sectionVariants}
    >
      <div className="container mx-auto px-4">
        <div className={`flex flex-col ${flexDirection} items-start gap-8`}>
          {/* Coluna da Imagem e Detalhes */}
          <div className="md:w-1/2 w-full">
            {/* Placeholder da Imagem */}
            <div className="w-full h-64 md:h-80 bg-gray-200 rounded-lg shadow-lg flex items-center justify-center mb-4">
              <span className="text-gray-400">{imageInfo.placeholderText}</span>
            </div>
            {/* Card de Detalhes */}
            <div className={`${detailsBgColor} p-6 rounded-lg shadow-md`}>
              <h3 className="headline4 mb-4">{detailsTitle}</h3>
              {detailsList.map((item, index) => (
                <p key={index} className="body2 mb-2">
                  {item.label}: {item.value}
                </p>
              ))}
              <hr className="my-4" />
              <h4 className="headline6 mb-2">{priceLabel}</h4>
              {priceList.map((item, index) => (
                <p key={index} className="body2 mb-2">
                  {item.label}: {item.value}
                </p>
              ))}
              <p className="body2">{taxInfoLabel}</p>
            </div>
          </div>

          {/* Coluna do Conteúdo Principal */}
          <div className="md:w-1/2 w-full">
            <h2 className="headline3 mb-4">{contentTitle}</h2>
            {contentParagraphs.map((p, index) => (
              <p key={index} className="body1 text-gray-600 mb-4">
                {p}
              </p>
            ))}
            {contentListItems && (
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                {contentListItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}

            {/* Seções de Sub-conteúdo */}
            {subContentSections && subContentSections.length > 0 && (
              <>
                {subContentSections.map((subSection, sIdx) => (
                  <React.Fragment key={sIdx}>
                    <hr className="my-6" />
                    <h3 className="headline4 mb-4">{subSection.title}</h3>
                    {subSection.paragraphs.map((p, pIdx) => (
                      <p key={pIdx} className="body1 text-gray-600 mb-6">
                        {p}
                      </p>
                    ))}
                  </React.Fragment>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default TrainingSection;
