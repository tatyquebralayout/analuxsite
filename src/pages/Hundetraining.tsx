import React from 'react';
import SEO from '../components/common/SEO';
import { motion } from 'framer-motion';
import HundetrainingContactForm from '../components/services/HundetrainingContactForm';
import { useTranslation } from 'react-i18next';
import { Calendar, Clock, MapPin, Users, DollarSign, Activity } from 'lucide-react';

// Importações das imagens e ícones locais
import adestramentoImg from '../assets/images/adestramento.png';
import certificadoImg from '../assets/images/certificado.png';
import socialTrainingIcon from '../assets/images/training-social.png';
import bannerSocialImg from '../assets/images/banner-social.png';
import treinamentoIcon from '../assets/images/treinamento.png';
import bannerTreinamentoImg from '../assets/images/banner-treinamento.png';
import sempuxarIcon from '../assets/images/training-sempuxar.png';
import bannerCursoImg from '../assets/images/banner_curso.png';
import particularIcon from '../assets/images/icon-particular.png';
import bannerParticularImg from '../assets/images/banner-particular.png';
import bannerOnlineImg from '../assets/images/banner-online.png';

import styles from './Hundetraining.module.css';

const HundetrainingPage: React.FC = () => {
  const { t } = useTranslation();

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

  return (
    <>
      <SEO
        title={t('hundetraining.hero.title')}
        description={t('hundetraining.hero.subtitle1')}
        keywords="Hundetraining, social walking, impulskontrolle, leinenführigkeit, privatunterricht, hundetrainer, zürich"
      />

      <section className="bg-primary-light py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto">
            <div className="w-full md:w-1/2 flex justify-center">
              <motion.div
                className="max-w-lg p-8"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <motion.h1
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="headline1 mb-6 leading-tight font-sour-gummy"
                >
                  {t('hundetrainingPage.heroTitle')}
                </motion.h1>
              </motion.div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden">
                  <img
                    src={adestramentoImg}
                    alt="Hundetraining bei AmanLux Dogs"
                    className="w-full h-full object-cover"
                    onError={e => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://via.placeholder.com/400?text=Hundetraining';
                    }}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
            <div className="w-full md:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <img
                  src={certificadoImg}
                  alt="Hundetrainer Zertifikat"
                  className="w-full rounded-lg shadow-md"
                />
              </motion.div>
            </div>
            <div className="w-full md:w-1/2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="headline2 text-primary font-sour-gummy mb-6">{t('hundetrainingPage.introductionTitle')}</h2>
                <div className="space-y-4">
                  <p className="body1 text-gray-600">
                    Die Körpersprache ist eine der wichtigsten Arten, wie Hunde mit uns und ihrer
                    Umwelt kommunizieren.
                  </p>
                  <p className="body1 text-gray-600">
                    Unser Ziel beim Training ist es, das gegenseitige Verständnis zwischen Mensch
                    und Hund zu vertiefen, die Sozialisierung zu fördern und ein harmonisches
                    Zusammenleben in verschiedenen Alltagssituationen zu ermöglichen.
                  </p>
                  <p className="body1 text-gray-600">
                    Mit Geduld, Einfühlungsvermögen und positiver Bestärkung schaffen wir eine
                    vertrauensvolle Beziehung – die beste Grundlage für ein glückliches Miteinander.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-8 relative overflow-visible">
            <motion.div
              className="relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              {/* Efeito de ondas concêntricas */}
              {[...Array(3)].map((_, i) => (
                <motion.div 
                  key={i}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-secondary rounded-full"
                  initial={{ width: 0, height: 0, opacity: 0 }}
                  animate={{ 
                    width: [0, 180 + i * 20], 
                    height: [0, 180 + i * 20],
                    opacity: [0, 0.7, 0]
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 3,
                    delay: i * 0.8,
                    ease: "easeOut"
                  }}
                />
              ))}
              
              {/* Ícone principal com animação de rotação 3D */}
              <motion.div
                className="relative z-10"
                initial={{ rotateX: -30 }}
                animate={{ 
                  rotateX: [-30, 0, -30],
                  rotateZ: [0, 5, 0, -5, 0],
                }}
                transition={{ 
                  rotateX: { repeat: Infinity, duration: 3, ease: "easeInOut" },
                  rotateZ: { repeat: Infinity, duration: 7, ease: "easeInOut" }
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.img
                  src={socialTrainingIcon}
                  alt="Social Training und Social Walking"
                  className="h-[120px] w-[120px]"
                  initial={{ scale: 0.8 }}
                  animate={{ 
                    scale: [0.8, 1],
                    filter: ["drop-shadow(0px 0px 0px rgba(21, 101, 192, 0))", "drop-shadow(0px 0px 10px rgba(21, 101, 192, 0.7))", "drop-shadow(0px 0px 0px rgba(21, 101, 192, 0))"]
                  }}
                  transition={{ 
                    scale: { duration: 0.8 },
                    filter: { repeat: Infinity, duration: 3, ease: "easeInOut" }
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ 
                    scale: 0.9,
                    rotate: 360,
                    transition: { duration: 0.5 }
                  }}
                />
                
                {/* Pequenas estrelas orbitando */}
                {[...Array(4)].map((_, i) => (
                  <motion.div 
                    key={i}
                    className="absolute top-1/2 left-1/2 w-3 h-3 bg-secondary-light rounded-full"
                    animate={{ 
                      x: Math.cos(i * Math.PI / 2) * 70,
                      y: Math.sin(i * Math.PI / 2) * 70,
                      opacity: [0.2, 1, 0.2],
                      scale: [0.5, 1, 0.5]
                    }}
                    transition={{ 
                      x: { repeat: Infinity, duration: 4, ease: "linear" },
                      y: { repeat: Infinity, duration: 4, ease: "linear" },
                      opacity: { repeat: Infinity, duration: 2, ease: "easeInOut", delay: i * 0.5 },
                      scale: { repeat: Infinity, duration: 2, ease: "easeInOut", delay: i * 0.5 }
                    }}
                    style={{ transformOrigin: "center" }}
                  />
                ))}
              </motion.div>
            </motion.div>
          </div>
          <h2 className="headline2 text-primary font-sour-gummy text-center mb-12">
            {t('hundetrainingPage.socialTrainingTitle')}
          </h2>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Primeira coluna */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="body1 space-y-4">
                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-primary-light mt-0.5 flex-shrink-0" />
                  <span>
                    <span className="font-medium text-primary">{t('hundetrainingPage.socialTrainingDetails.when')}</span> {t('hundetrainingPage.socialTrainingDetails.whenValue')}
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-primary-light mt-0.5 flex-shrink-0" />
                  <span>
                    <span className="font-medium text-primary">{t('hundetrainingPage.socialTrainingDetails.duration')}</span> {t('hundetrainingPage.socialTrainingDetails.durationValue')}
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary-light mt-0.5 flex-shrink-0" />
                  <span>
                    <span className="font-medium text-primary">{t('hundetrainingPage.socialTrainingDetails.location')}</span> {t('hundetrainingPage.socialTrainingDetails.locationValue')}
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-primary-light mt-0.5 flex-shrink-0" />
                  <span>
                    <span className="font-medium text-primary">{t('hundetrainingPage.socialTrainingDetails.groups')}</span>
                  </span>
                </div>
                <div className="border-t border-gray-200 my-5"></div>
                <div className="flex items-start gap-3">
                  <DollarSign className="h-5 w-5 text-primary-light mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-primary">{t('hundetrainingPage.socialTrainingDetails.price')}:</p>
                    <p className="mt-2">
                      <span className="font-medium text-primary">{t('hundetrainingPage.socialTrainingDetails.singleSession')}</span>
                    </p>
                    <p className="mt-1">
                      <span className="font-medium text-primary">{t('hundetrainingPage.socialTrainingDetails.tenSessions')}</span>{' '}
                      {t('hundetrainingPage.socialTrainingDetails.validity')}
                    </p>
                    <p className="text-sm text-gray-500 mt-2">{t('hundetrainingPage.socialTrainingDetails.exclVat')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Segunda coluna */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="headline4 mb-4 text-primary-dark">{t('hundetrainingPage.socialWalkingTitle')}</h3>
              <p className="body1 text-gray-600 mb-4">
                {t('hundetrainingPage.socialWalkingText1')}
              </p>
              <p className="body1 text-gray-600">
                {t('hundetrainingPage.socialWalkingText2')}
              </p>
            </div>

            {/* Terceira coluna */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="headline4 mb-4 text-primary-dark">{t('hundetrainingPage.socialTrainingDefinitionTitle')}</h3>
              <p className="body1 text-gray-600 mb-4">
                {t('hundetrainingPage.socialTrainingDefinitionText1')}
              </p>
              <p className="body1 text-gray-600">
                {t('hundetrainingPage.socialTrainingDefinitionText2')}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-1/2 flex items-center">
                  <div className="body1 text-gray-600 space-y-2 max-w-xl">
                    <p className="mb-3">
                      {t('hundetrainingPage.socialTrainingDetails.text1')}
                    </p>

                    <p>
                      {t('hundetrainingPage.socialTrainingDetails.text2')}
                    </p>

                    <p>
                      {t('hundetrainingPage.socialTrainingDetails.text3')}
                    </p>

                    <div>
                      <p className="mb-1">
                        {t('hundetrainingPage.socialTrainingDetails.text4')}
                      </p>
                      <ul className="pl-5 list-disc mb-2">
                        <li>{t('hundetrainingPage.socialTrainingDetails.bullet1')}</li>
                        <li>{t('hundetrainingPage.socialTrainingDetails.bullet2')}</li>
                        <li>{t('hundetrainingPage.socialTrainingDetails.bullet3')}</li>
                      </ul>
                    </div>

                    <p>
                      {t('hundetrainingPage.socialTrainingDetails.text5')}
                    </p>
                  </div>
                </div>
                <div className="w-full md:w-1/2 flex items-center justify-center">
                  <div className="w-full h-full flex items-center">
                    <img
                      src={bannerSocialImg}
                      alt={t('hundetrainingPage.socialTrainingBannerAlt', 'Warum Social Training & Social Walking so wichtig sind')}
                      className="w-full h-auto rounded-lg shadow-sm object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-10">
            <img
              src={treinamentoIcon}
              alt="Impulskontrolle und Gehorsamkeitstraining"
              className="h-[120px] w-[120px]"
            />
          </div>
          <h2 className="headline2 text-primary font-sour-gummy text-center mb-14">
            {t('hundetrainingPage.impulseControlTitle')}
          </h2>

          {/* Coluna centralizada com informações */}
          <div className="max-w-3xl mx-auto mb-14 flex justify-center">
            <div className="bg-white p-8 md:p-10 rounded-lg shadow-sm w-full max-w-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-6 w-6 text-primary-light flex-shrink-0" />
                    <h3 className="text-xl font-medium text-primary">{t('hundetrainingPage.impulseControlDetails.when')}</h3>
                  </div>
                  <p className="text-gray-700 pl-8">{t('hundetrainingPage.impulseControlDetails.whenValue')}</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Clock className="h-6 w-6 text-primary-light flex-shrink-0" />
                    <h3 className="text-xl font-medium text-primary">{t('hundetrainingPage.impulseControlDetails.duration')}</h3>
                  </div>
                  <p className="text-gray-700 pl-8">{t('hundetrainingPage.impulseControlDetails.durationValue')}</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-6 w-6 text-primary-light flex-shrink-0" />
                    <h3 className="text-xl font-medium text-primary">{t('hundetrainingPage.impulseControlDetails.location')}</h3>
                  </div>
                  <p className="text-gray-700 pl-8">{t('hundetrainingPage.impulseControlDetails.locationValue')}</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Users className="h-6 w-6 text-primary-light flex-shrink-0" />
                    <h3 className="text-xl font-medium text-primary">{t('hundetrainingPage.impulseControlDetails.groups')}</h3>
                  </div>
                  <p className="text-gray-700 pl-8">{t('hundetrainingPage.impulseControlDetails.groupsValue')}</p>
                </div>

                <div className="md:col-span-2 mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center gap-2 mb-4">
                    <DollarSign className="h-6 w-6 text-primary-light flex-shrink-0" />
                    <h3 className="text-xl font-medium text-primary">{t('hundetrainingPage.impulseControlDetails.price')}</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pl-8">
                    <div className="space-y-2">
                      <p className="font-medium text-primary-dark">{t('hundetrainingPage.impulseControlDetails.singleSession')}</p>
                      <p className="text-gray-700 pl-3 text-lg">{t('hundetrainingPage.impulseControlDetails.singleSessionPrice')}</p>
                    </div>

                    <div className="space-y-2">
                      <p className="font-medium text-primary-dark">{t('hundetrainingPage.impulseControlDetails.tenSessions')}</p>
                      <p className="text-gray-700 pl-3 text-lg">{t('hundetrainingPage.impulseControlDetails.tenSessionsPrice')}</p>
                      <p className="text-gray-600 pl-3">{t('hundetrainingPage.impulseControlDetails.validity')}</p>
                    </div>
                  </div>

                  <p className="text-sm text-gray-500 mt-6 pl-8">{t('hundetrainingPage.impulseControlDetails.exclVat')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Nova seção para texto e imagem */}
          <div className="max-w-6xl mx-auto mt-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-full md:w-1/2">
                  <div className="body1 space-y-4">
                    <p>{t('hundetrainingPage.impulseControlDetails.text1')}</p>
                    <p>{t('hundetrainingPage.impulseControlDetails.text2')}</p>
                    <p>{t('hundetrainingPage.impulseControlDetails.text3')}</p>
                    <p>{t('hundetrainingPage.impulseControlDetails.text4')}</p>
                    <ul className="list-disc list-inside">
                      <li>{t('hundetrainingPage.impulseControlDetails.bullet1')}</li>
                      <li>{t('hundetrainingPage.impulseControlDetails.bullet2')}</li>
                      <li>{t('hundetrainingPage.impulseControlDetails.bullet3')}</li>
                      <li>{t('hundetrainingPage.impulseControlDetails.bullet4')}</li>
                    </ul>
                    <p>{t('hundetrainingPage.impulseControlDetails.text5')}</p>
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <img
                    src={bannerTreinamentoImg}
                    alt={t('hundetrainingPage.impulseControlDetails.bannerAlt', 'Impulskontrolle und Gehorsamkeitstraining')}
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-10">
            <img src={sempuxarIcon} alt="Training des Hundes" className="h-[120px] w-[120px]" />
          </div>
          <h2 className="headline2 text-primary font-sour-gummy text-center mb-14">
            {t('hundetrainingPage.leashTrainingTitle')}
          </h2>

          {/* Duas colunas abaixo do título */}
          <div className="max-w-6xl mx-auto mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Primeira coluna */}
              <div className="bg-white p-8 rounded-lg shadow-sm flex items-center">
                <h3 className="headline3 text-primary">
                  {t('hundetrainingPage.leashTrainingSubtitle')}
                </h3>
              </div>

              {/* Segunda coluna */}
              <div className="bg-white p-8 rounded-lg shadow-sm flex items-center">
                <div className="w-full">
                  <div className="flex items-center gap-2 mb-6">
                    <DollarSign className="h-6 w-6 text-primary-light flex-shrink-0" />
                    <h3 className="text-xl font-medium text-primary">{t('hundetrainingPage.leashTrainingDetails.priceTitle')}:</h3>
                  </div>

                  <div className="pl-8 space-y-5">
                    <div className="flex items-baseline justify-between">
                      <p className="font-medium text-primary-dark">{t('hundetrainingPage.leashTrainingDetails.singleSessionLabel')}:</p>
                      <p className="text-gray-700 text-lg">{t('hundetrainingPage.leashTrainingDetails.singleSessionPrice')}</p>
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-baseline justify-between">
                        <p className="font-medium text-primary-dark">{t('hundetrainingPage.leashTrainingDetails.tenSessionsLabel')}:</p>
                        <p className="text-gray-700 text-lg">{t('hundetrainingPage.leashTrainingDetails.tenSessionsPrice')}</p>
                      </div>
                      <p className="text-gray-600 text-right text-sm">{t('hundetrainingPage.leashTrainingDetails.validity')}</p>
                    </div>

                    <p className="text-sm text-gray-500 mt-4">{t('hundetrainingPage.leashTrainingDetails.exclVat')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Nova seção para texto e imagem */}
          <div className="max-w-6xl mx-auto mt-12">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-3/5">
                  <div className="overflow-hidden rounded-lg">
                    <img
                      src={bannerCursoImg}
                      alt={t('hundetrainingPage.leashTrainingDetails.bannerAlt', 'Hund an der Leine Training')}
                      className="w-full h-auto object-cover rounded-lg transform hover:scale-105 transition duration-300"
                    />
                  </div>
                </div>
                <div className="w-full md:w-2/5">
                  <div className="body1 space-y-4 text-gray-600">
                    <p>{t('hundetrainingPage.leashTrainingDetails.text1')}</p>
                    <p>{t('hundetrainingPage.leashTrainingDetails.text2')}</p>
                    <p>{t('hundetrainingPage.leashTrainingDetails.text3')}</p>
                    <p className="font-medium text-primary-dark">{t('hundetrainingPage.leashTrainingDetails.text4')}</p>
                    <p>{t('hundetrainingPage.leashTrainingDetails.text5')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Duas novas colunas: Trainingsdetails und Ziel */}
          <div className="max-w-6xl mx-auto mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Primeira coluna - Trainingsdetails */}
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-medium text-primary mb-6">{t('hundetrainingPage.leashTrainingDetails.trainingDetailsTitle')}</h3>
                <ul className="space-y-5 text-gray-600">
                  <li className="flex items-start gap-3">
                    <Clock className="h-6 w-6 text-primary-light mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-primary-light">{t('hundetrainingPage.leashTrainingDetails.durationLabel')}:</span> {t('hundetrainingPage.leashTrainingDetails.durationValue')}
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Users className="h-6 w-6 text-primary-light mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-primary-light">{t('hundetrainingPage.leashTrainingDetails.participantsLabel')}:</span> {t('hundetrainingPage.leashTrainingDetails.participantsValue')}
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="h-6 w-6 text-primary-light mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-primary-light">{t('hundetrainingPage.leashTrainingDetails.locationLabel')}:</span> {t('hundetrainingPage.leashTrainingDetails.locationValue')}
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Activity className="h-6 w-6 text-primary-light mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-primary-light">{t('hundetrainingPage.leashTrainingDetails.stimulusLevelLabel')}:</span> {t('hundetrainingPage.leashTrainingDetails.stimulusLevelValue')}
                    </div>
                  </li>
                </ul>
              </div>

              {/* Segunda coluna - Ziel */}
              <div className="bg-white p-8 rounded-lg shadow-sm flex flex-col justify-center">
                <h3 className="text-xl font-medium text-primary mb-6">{t('hundetrainingPage.leashTrainingDetails.goalTitle')}:</h3>
                <p className="text-gray-600">
                  {t('hundetrainingPage.leashTrainingDetails.goalText')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-10 relative">
            <motion.div
              className="relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              {/* Círculo de fundo animado */}
              <motion.div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-container" 
                initial={{ width: 0, height: 0 }}
                animate={{ 
                  width: 150, 
                  height: 150,
                  boxShadow: ['0px 0px 0px rgba(236, 28, 84, 0)', '0px 0px 20px rgba(236, 28, 84, 0.3)', '0px 0px 0px rgba(236, 28, 84, 0)'],
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 3,
                  ease: "easeInOut"
                }}
              />
              
              {/* Partículas decorativas */}
              {[...Array(5)].map((_, i) => (
                <motion.div 
                  key={i}
                  className="absolute w-3 h-3 rounded-full bg-primary"
                  initial={{ 
                    x: 0, 
                    y: 0, 
                    opacity: 0,
                    scale: 0
                  }}
                  animate={{ 
                    x: [0, (i % 2 === 0 ? 1 : -1) * (30 + i * 10) * Math.cos(i * 72 * Math.PI / 180)],
                    y: [0, (i % 2 === 0 ? 1 : -1) * (30 + i * 10) * Math.sin(i * 72 * Math.PI / 180)],
                    opacity: [0, 0.7, 0],
                    scale: [0, 1, 0]
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 2 + i * 0.2,
                    delay: i * 0.3,
                    ease: "easeOut"
                  }}
                />
              ))}
              
              {/* Ícone principal com animação */}
              <motion.img 
                src={particularIcon} 
                alt="Privatunterricht" 
                className="h-[120px] w-[120px] relative z-10" 
                initial={{ rotateY: 90, opacity: 0 }}
                animate={{ 
                  rotateY: 0, 
                  opacity: 1,
                  y: [0, -8, 0],
                }}
                transition={{ 
                  rotateY: { duration: 0.8, ease: "easeOut" },
                  opacity: { duration: 0.8 },
                  y: { repeat: Infinity, duration: 2, ease: "easeInOut" }
                }}
                whileHover={{ 
                  scale: 1.1,
                  rotateZ: [0, -3, 3, -3, 0],
                  filter: ["brightness(1)", "brightness(1.2)", "brightness(1)"],
                  transition: { duration: 0.8 }
                }}
                whileTap={{ 
                  scale: 0.9,
                  rotateY: 180,
                  transition: { duration: 0.4 }
                }}
                drag
                dragConstraints={{
                  top: -10,
                  left: -10,
                  right: 10,
                  bottom: 10,
                }}
                dragElastic={0.3}
              />
            </motion.div>
          </div>
          <h2 className="headline2 text-primary font-sour-gummy text-center mb-14">
            {t('hundetrainingPage.privateLessonsTitle')}
          </h2>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-stretch">
              {/* Coluna esquerda - Banner (maior) */}
              <div className="bg-white p-4 rounded-lg shadow-sm md:col-span-3">
                <div className="overflow-hidden rounded-lg w-full">
                  <img
                    src={bannerParticularImg}
                    alt={t('hundetrainingPage.privateLessonsDetails.privateLessonsBannerAlt')}
                    className="w-full h-auto object-cover rounded-lg transform hover:scale-105 transition duration-300"
                  />
                </div>
              </div>

              {/* Coluna direita - Texto (menor) na metade inferior */}
              <div
                className={
                  `bg-white p-8 rounded-lg shadow-sm md:col-span-2 flex flex-col ${styles.minHeight400}`
                }
              >
                <div className="flex-grow min-h-[40%]"></div>
                <div className="body1 space-y-6 text-gray-600 pb-6">
                  <p>{t('hundetrainingPage.privateLessonsDetails.text1')}</p>
                  <p>
                    <span className="font-medium text-primary-dark">{t('hundetrainingPage.privateLessonsDetails.goalTitle')}</span> {t('hundetrainingPage.privateLessonsDetails.goalText')}
                  </p>
                </div>
              </div>
            </div>

            {/* Preços e informações adicionais */}
            <div className="max-w-4xl mx-auto mt-12 bg-white p-8 rounded-lg shadow-sm">
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-6">
                  <DollarSign className="h-6 w-6 text-primary-light flex-shrink-0" />
                  <h3 className="text-xl font-medium text-primary">{t('hundetrainingPage.privateLessonsDetails.priceTitle')}</h3>
                </div>

                <ul className="pl-9 space-y-4 text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="text-primary-light font-medium">–</span>
                    <p>
                      <span className="font-medium">{t('hundetrainingPage.privateLessonsDetails.singleHour')}</span> CHF 80.00
                    </p>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary-light font-medium">–</span>
                    <p>
                      <span className="font-medium">{t('hundetrainingPage.privateLessonsDetails.tenHours')}</span> CHF 650.00 ({t('hundetrainingPage.privateLessonsDetails.validity')})
                    </p>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary-light font-medium">–</span>
                    <p>
                      <span className="font-medium">{t('hundetrainingPage.privateLessonsDetails.travelCosts')}</span> {t('hundetrainingPage.privateLessonsDetails.travelCostValue')}
                    </p>
                  </li>
                </ul>
              </div>

              <div className="border-t border-gray-200 my-6"></div>

              <div className="flex items-start gap-3 mt-8">
                <Activity className="h-6 w-6 text-primary-light mt-1 flex-shrink-0" />
                <p className="text-gray-600">{t('hundetrainingPage.privateLessonsDetails.finalText')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-10 flex justify-center">
              <img
                src={bannerOnlineImg}
                alt="Online-Beratung"
                className="w-[85%] md:w-3/4 lg:w-3/5 h-auto rounded-lg shadow-md"
              />
            </div>

            <div className="text-center">
              <h2 className="headline2 text-primary font-sour-gummy mb-8">
                {t('hundetrainingPage.onlineTrainingTitle')}
              </h2>
            </div>

            <div className="body1 space-y-4 text-gray-600 max-w-3xl mx-auto">
              <p>{t('hundetrainingPage.onlineTrainingDetails.text1')}</p>
              <p>{t('hundetrainingPage.onlineTrainingDetails.text2')}</p>
              <p>{t('hundetrainingPage.onlineTrainingDetails.text3')}</p>
              <p>{t('hundetrainingPage.onlineTrainingDetails.text4')}</p>
              <p>{t('hundetrainingPage.onlineTrainingDetails.text5')}</p>

              <div className="border-t border-gray-200 my-6"></div>

              <div className="mt-6">
                <div className="flex items-center gap-2 mb-4">
                  <DollarSign className="h-6 w-6 text-primary-light flex-shrink-0" />
                  <h3 className="text-xl font-medium text-primary">{t('hundetrainingPage.onlineTrainingDetails.priceTitle')}</h3>
                </div>

                <ul className="pl-9 space-y-3 text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="text-primary-light font-medium">–</span>
                    <p>{t('hundetrainingPage.onlineTrainingDetails.priceOnline')}</p>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary-light font-medium">–</span>
                    <p>{t('hundetrainingPage.onlineTrainingDetails.travelCosts')}: {t('hundetrainingPage.onlineTrainingDetails.travelCostValue')}</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <motion.section
        className="py-16 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-4">
          <h2 className="headline2 text-primary font-sour-gummy text-center mb-8">{t('contact.title')}</h2>
          <HundetrainingContactForm />
        </div>
      </motion.section>
    </>
  );
};

export default HundetrainingPage;
