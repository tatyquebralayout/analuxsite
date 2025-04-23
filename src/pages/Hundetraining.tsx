import React from 'react';
import SEO from '../components/common/SEO';
import { motion } from 'framer-motion';
import TrainingSection from '../components/services/TrainingSection';
import HundetrainingContactForm from '../components/services/HundetrainingContactForm';
import { useTranslation } from 'react-i18next';

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

  const socialTrainingData = {
    id: 'social-training',
    bgColor: 'gray-50' as const,
    layoutReverse: false,
    imageInfo: {
      placeholderText: t('hundetraining.certificate.imageLabel'),
    },
    detailsTitle: t('hundetraining.socialTraining.detailsTitle'),
    detailsList: [
      {
        label: t('hundetraining.socialTraining.whenLabel'),
        value: t('hundetraining.socialTraining.whenValue'),
      },
      {
        label: t('hundetraining.socialTraining.durationLabel'),
        value: t('hundetraining.socialTraining.durationValue'),
      },
      {
        label: t('hundetraining.socialTraining.locationLabel'),
        value: t('hundetraining.socialTraining.locationValue'),
      },
      {
        label: t('hundetraining.socialTraining.groupsLabel'),
        value: t('hundetraining.socialTraining.groupsValue'),
      },
    ],
    priceList: [
      {
        label: t('hundetraining.socialTraining.singleSessionLabel'),
        value: t('hundetraining.socialTraining.singleSessionValue'),
      },
      {
        label: t('hundetraining.socialTraining.packageLabel'),
        value: t('hundetraining.socialTraining.packageValue'),
      },
    ],
    priceLabel: t('common.priceLabel'),
    taxInfoLabel: t('common.taxInfo'),
    contentTitle: t('hundetraining.socialTraining.contentTitle'),
    contentParagraphs: [
      t('hundetraining.socialTraining.paragraph1'),
      t('hundetraining.socialTraining.paragraph2'),
      t('hundetraining.socialTraining.paragraph3'),
      t('hundetraining.socialTraining.paragraph4'),
      t('hundetraining.socialTraining.paragraph5'),
      t('hundetraining.socialTraining.paragraph6'),
      t('hundetraining.socialTraining.paragraph7'),
    ],
    contentListItems: [
      t('hundetraining.socialTraining.listItem1'),
      t('hundetraining.socialTraining.listItem2'),
      t('hundetraining.socialTraining.listItem3'),
    ],
    subContentSections: [
      {
        title: t('hundetraining.socialTraining.subSection1Title'),
        paragraphs: [t('hundetraining.socialTraining.subSection1Paragraph')],
      },
      {
        title: t('hundetraining.socialTraining.subSection2Title'),
        paragraphs: [t('hundetraining.socialTraining.subSection2Paragraph')],
      },
    ],
  };

  const impulskontrolleData = {
    id: 'impulskontrolle',
    bgColor: 'white' as const,
    layoutReverse: true,
    imageInfo: {
      placeholderText: t('hundetraining.certificate.imageLabel'),
    },
    detailsTitle: t('hundetraining.impulseControl.detailsTitle'),
    detailsList: [
      {
        label: t('hundetraining.impulseControl.whenLabel'),
        value: t('hundetraining.impulseControl.whenValue'),
      },
      {
        label: t('hundetraining.impulseControl.durationLabel'),
        value: t('hundetraining.impulseControl.durationValue'),
      },
      {
        label: t('hundetraining.impulseControl.locationLabel'),
        value: t('hundetraining.impulseControl.locationValue'),
      },
      {
        label: t('hundetraining.impulseControl.groupsLabel'),
        value: t('hundetraining.impulseControl.groupsValue'),
      },
    ],
    priceList: [
      {
        label: t('hundetraining.impulseControl.singleSessionLabel'),
        value: t('hundetraining.impulseControl.singleSessionValue'),
      },
      {
        label: t('hundetraining.impulseControl.packageLabel'),
        value: t('hundetraining.impulseControl.packageValue'),
      },
    ],
    priceLabel: t('common.priceLabel'),
    taxInfoLabel: t('common.taxInfo'),
    contentTitle: t('hundetraining.impulseControl.contentTitle'),
    contentParagraphs: [
      t('hundetraining.impulseControl.paragraph1'),
      t('hundetraining.impulseControl.paragraph2'),
      t('hundetraining.impulseControl.paragraph3'),
    ],
    contentListItems: [
      t('hundetraining.impulseControl.listItem1'),
      t('hundetraining.impulseControl.listItem2'),
      t('hundetraining.impulseControl.listItem3'),
      t('hundetraining.impulseControl.listItem4'),
    ],
    subContentSections: [
      {
        title: t('hundetraining.impulseControl.goalTitle'),
        paragraphs: [t('hundetraining.impulseControl.goalParagraph')],
      },
    ],
  };

  const leinenfuehrigkeitData = {
    id: 'leinenfuehrigkeit',
    bgColor: 'gray-50' as const,
    layoutReverse: false,
    imageInfo: {
      placeholderText: t('hundetraining.certificate.imageLabel'),
    },
    detailsTitle: t('hundetraining.leashTraining.detailsTitle'),
    detailsList: [
      {
        label: t('hundetraining.leashTraining.durationLabel'),
        value: t('hundetraining.leashTraining.durationValue'),
      },
      {
        label: t('hundetraining.leashTraining.participantsLabel'),
        value: t('hundetraining.leashTraining.participantsValue'),
      },
      {
        label: t('hundetraining.leashTraining.locationLabel'),
        value: t('hundetraining.leashTraining.locationValue'),
      },
      {
        label: t('hundetraining.leashTraining.stimulusLevelLabel'),
        value: t('hundetraining.leashTraining.stimulusLevelValue'),
      },
    ],
    priceList: [
      {
        label: t('hundetraining.leashTraining.singleSessionLabel'),
        value: t('hundetraining.leashTraining.singleSessionValue'),
      },
      {
        label: t('hundetraining.leashTraining.packageLabel'),
        value: t('hundetraining.leashTraining.packageValue'),
      },
    ],
    priceLabel: t('common.priceLabel'),
    taxInfoLabel: t('common.taxInfo'),
    contentTitle: t('hundetraining.leashTraining.contentTitle'),
    contentParagraphs: [
      t('hundetraining.leashTraining.paragraph1'),
      t('hundetraining.leashTraining.paragraph2'),
      t('hundetraining.leashTraining.paragraph3'),
      t('hundetraining.leashTraining.paragraph4'),
      t('hundetraining.leashTraining.paragraph5'),
    ],
    subContentSections: [
      {
        title: t('hundetraining.leashTraining.goalTitle'),
        paragraphs: [t('hundetraining.leashTraining.goalParagraph')],
      },
    ],
  };

  return (
    <>
      <SEO
        title={t('hundetraining.hero.title')}
        description={t('hundetraining.hero.subtitle1')}
        keywords="Hundetraining, social walking, impulskontrolle, leinenführigkeit, privatunterricht, hundetrainer, zürich"
      />

      <section className="bg-gradient-to-r from-primary-light to-primary py-16 text-center text-white">
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="headline1 mb-4"
          >
            {t('hundetraining.hero.title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="body1 max-w-2xl mx-auto"
          >
            {t('hundetraining.hero.subtitle1')}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="body1 max-w-2xl mx-auto mt-4"
          >
            {t('hundetraining.hero.subtitle2')}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="body1 max-w-2xl mx-auto mt-4"
          >
            {t('hundetraining.hero.subtitle3')}
          </motion.p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="w-48 h-48 mx-auto bg-gray-200 rounded-lg shadow-md flex items-center justify-center text-gray-400 mb-6">
            <span>{t('hundetraining.certificate.imageLabel')}</span>
          </div>
          <p className="body1 text-gray-600">{t('hundetraining.certificate.description')}</p>
        </div>
      </section>

      <TrainingSection {...socialTrainingData} />
      <TrainingSection {...impulskontrolleData} />
      <TrainingSection {...leinenfuehrigkeitData} />

      <motion.section
        className="py-16 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="headline2 text-center mb-6">Privatunterricht</h2>
            <h3 className="headline4 text-center mb-6">💬 Individuell. Persönlich. Effektiv.</h3>
            <p className="body1 text-gray-600 mb-4 text-center">
              In unserem Einzeltraining (60 Minuten) gehen wir gezielt auf die Herausforderungen
              ein, die Sie mit Ihrem Hund erleben. Gemeinsam entwickeln wir Lösungen, die genau zu
              Ihnen, Ihrem Alltag und der Persönlichkeit Ihres Hundes passen.
            </p>
            <p className="body1 text-gray-600 mb-6 text-center">
              Unser Ziel: Ein harmonisches Miteinander – abgestimmt auf Ihre individuellen
              Bedürfnisse.
            </p>
            <hr className="my-6" />
            <h4 className="headline5 text-center mb-4">💰 Preise:</h4>
            <ul className="space-y-2 text-center mb-6">
              <li>– Einzelstunde: CHF 80.00</li>
              <li>– 10er-Paket: CHF 650.00 (gültig für 6 Monate)</li>
              <li>– Fahrtkosten: CHF 1.00 pro Kilometer (ab Standort Flaach)</li>
            </ul>
            <p className="body1 text-gray-600 text-center">
              Ob Verhaltenstraining, Alltagssituationen oder spezielle Themen – wir sind an Ihrer
              Seite, um Sie und Ihren Hund bestmöglich zu begleiten. 🐶🤝
            </p>
            <div className="w-full h-64 bg-gray-200 rounded-lg shadow-lg flex items-center justify-center mt-8">
              <span className="text-gray-400">Foto: Trainer mit Hund</span>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="py-16 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="headline2 text-center mb-6">Online-Beratung</h2>
            <h3 className="headline4 text-center mb-6">
              💻 Online-Beratung – Für einen gelungenen Start mit Ihrem neuen Hund
            </h3>
            <p className="body1 text-gray-600 mb-4 text-center">
              Haben Sie kürzlich einen Hund adoptiert – oder planen Sie, bald ein neues
              Familienmitglied bei sich aufzunehmen?
            </p>
            <p className="body1 text-gray-600 mb-4 text-center">
              Die ersten Wochen sind entscheidend für eine stabile Bindung und ein harmonisches
              Zusammenleben.
            </p>
            <p className="body1 text-gray-600 mb-4 text-center">
              Wir begleiten Sie in dieser wichtigen Phase mit einfühlsamer Beratung per Video- oder
              Onlinegespräch.
            </p>
            <p className="body1 text-gray-600 mb-4 text-center">
              Ob vor der Ankunft oder in den ersten Tagen nach dem Einzug – wir sind für Sie da.
            </p>
            <p className="body1 text-gray-600 mb-6 text-center">
              Auf Wunsch kann auch ein persönliches Treffen (60 Minuten) vereinbart werden.
            </p>
            <hr className="my-6" />
            <h4 className="headline5 text-center mb-4">💰 Preis:</h4>
            <ul className="space-y-2 text-center mb-6">
              <li>– CHF 80.00 pro Beratung (online oder vor Ort)</li>
              <li>– Fahrtkosten: CHF 1.00 pro Kilometer (ab Standort Flaach)</li>
            </ul>
            <div className="w-full h-64 bg-gray-200 rounded-lg shadow-lg flex items-center justify-center mt-8">
              <span className="text-gray-400">Foto: Online-Beratung</span>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="py-16 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-4">
          <h2 className="headline3 text-center mb-8">Kontakt für Hundetraining</h2>
          <p className="text-center mb-6 text-gray-600">Felder mit * sind Pflichtfelder</p>
          <HundetrainingContactForm />
        </div>
      </motion.section>

      <motion.section
        className="py-16 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <div className="h-80 bg-gray-300 rounded-lg"></div>
            </div>
            <div className="md:w-1/2">
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-lg">Zürich</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <span className="text-lg">+41 76 575 09 77</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <span className="text-lg">info@amanlux.com</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-lg">Mon - Fre / 7:00 AM - 6:30 PM</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default HundetrainingPage;
