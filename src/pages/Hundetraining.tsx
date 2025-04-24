import React from 'react';
import SEO from '../components/common/SEO';
import { motion } from 'framer-motion';
import TrainingSection from '../components/services/TrainingSection';
import HundetrainingContactForm from '../components/services/HundetrainingContactForm';
import { useTranslation } from 'react-i18next';
import { Calendar, Clock, MapPin, Users, DollarSign } from 'lucide-react';

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
                  Mehr als nur Kommandos – eine vertrauensvolle Beziehung zwischen Mensch und Hund
                  aufbauen
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
                    src="/src/assets/images/adestramento.png"
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
                  src="/src/assets/images/certificado.png"
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
                <h2 className="headline2 text-primary font-sour-gummy mb-6">Hundetraining</h2>
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
          <div className="flex justify-center mb-8">
            <img
              src="/src/assets/images/svg/treinamento.png"
              alt="Hundetraining"
              className="h-[120px] w-[120px]"
            />
          </div>
          <h2 className="headline2 text-primary font-sour-gummy text-center mb-12">
            Social Training und Social Walking
          </h2>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Primeira coluna */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="body1 space-y-4">
                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-primary-light mt-0.5 flex-shrink-0" />
                  <span>
                    <span className="font-medium text-primary">Wann:</span> Termine werden noch
                    bekannt gegeben
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-primary-light mt-0.5 flex-shrink-0" />
                  <span>
                    <span className="font-medium text-primary">Dauer:</span> 90 Minuten
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary-light mt-0.5 flex-shrink-0" />
                  <span>
                    <span className="font-medium text-primary">Ort:</span> Verschiedene Locations –
                    je nach Ziel der Einheit mit vielen, wenigen oder keinen Menschen ausser der
                    Gruppe (z. B. Parks, Strassen oder Wälder)
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-primary-light mt-0.5 flex-shrink-0" />
                  <span>
                    <span className="font-medium text-primary">Gruppen:</span> 8–10 Hunde, jeweils
                    mit einer Begleitperson
                  </span>
                </div>
                <div className="border-t border-gray-200 my-5"></div>
                <div className="flex items-start gap-3">
                  <DollarSign className="h-5 w-5 text-primary-light mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-primary">Preis:</p>
                    <p className="mt-2">
                      <span className="font-medium text-primary">Einzelsession: CHF 55.00</span>
                    </p>
                    <p className="mt-1">
                      <span className="font-medium text-primary">10er-Paket: CHF 450.00</span>{' '}
                      (gültig für 6 Monate)
                    </p>
                    <p className="text-sm text-gray-500 mt-2">Preise exkl. MwSt</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Segunda coluna */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="headline4 mb-4 text-primary-dark">Was ist Social Walking?</h3>
              <p className="body1 text-gray-600 mb-4">
                Beim Social Walking spaziert der Hund gemeinsam mit seinem Besitzer und anderen
                Hunden in einer Gruppe – in Umgebungen mit unterschiedlichen Reizen, wie Parks,
                Straßen oder Wäldern.
              </p>
              <p className="body1 text-gray-600">
                Der Hund lernt dabei, gelassener auf verschiedene Situationen, Geräusche, Menschen
                und andere Tiere zu reagieren – immer in sicherer Begleitung.
              </p>
            </div>

            {/* Terceira coluna */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="headline4 mb-4 text-primary-dark">Was ist Social Training?</h3>
              <p className="body1 text-gray-600 mb-4">
                Das Social Training ist eine ergänzende Trainingseinheit, bei der gezielt am
                Verhalten des Hundes gearbeitet wird – unter Berücksichtigung seiner Persönlichkeit,
                seiner Bedürfnisse und seiner Grenzen.
              </p>
              <p className="body1 text-gray-600">
                Unser Ziel ist es, ein harmonisches Miteinander zu fördern – mit Geduld, Respekt und
                positiver Verstärkung.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nova seção horizontal com o conteúdo da antiga segunda coluna */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-1/2 flex items-center">
                  <div className="body1 text-gray-600 space-y-2 max-w-xl">
                    <p className="mb-3">
                      Das Verhalten eines Hundes hängt stark davon ab, wie gut er die soziale
                      Struktur versteht, in der er lebt – also seine Rolle in der Familie, in der
                      Gruppe und in der Gesellschaft.
                    </p>

                    <p>
                      Manche Verhaltensweisen, die für uns Menschen unangenehm oder unerwünscht
                      erscheinen, haben oft tiefere Ursachen, die nicht sofort erkennbar sind.
                    </p>

                    <p>
                      Deshalb ist es entscheidend, dass wir lernen, diese Signale richtig zu deuten
                      – nur so können wir unseren Hunden wirklich helfen.
                    </p>

                    <div>
                      <p className="mb-1">
                        Viele Probleme entstehen durch fehlende oder unzureichende Sozialisierung.
                        Beispiele dafür sind:
                      </p>
                      <ul className="pl-5 list-disc mb-2">
                        <li>Angst vor anderen Hunden</li>
                        <li>Unsicherheit gegenüber Kindern, fremden Menschen oder Katzen</li>
                        <li>Bellen, Fluchtverhalten oder sogar aggressives Verhalten</li>
                      </ul>
                    </div>

                    <p>
                      Diese Verhaltensmuster lassen sich nicht durch Strafen, sondern nur durch
                      gezieltes Training und kontinuierliche Sozialisierung verbessern. Und je
                      früher man damit beginnt, desto nachhaltiger sind die Ergebnisse.
                    </p>
                  </div>
                </div>
                <div className="w-full md:w-1/2 flex items-center justify-center">
                  <div className="w-full h-full flex items-center">
                    <img
                      src="/src/assets/images/banner_social.png"
                      alt="Warum Social Training & Social Walking so wichtig sind"
                      className="w-full h-auto rounded-lg shadow-sm object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
