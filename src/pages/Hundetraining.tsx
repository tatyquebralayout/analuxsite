import React from 'react';
import SEO from '../components/common/SEO';
import { motion } from 'framer-motion';
import HundetrainingContactForm from '../components/services/HundetrainingContactForm';
import { useTranslation } from 'react-i18next';
import { Calendar, Clock, MapPin, Users, DollarSign, Activity } from 'lucide-react';

// Importações das imagens e ícones locais
import adestramentoImg from '../assets/images/adestramento.png';
import certificadoImg from '../assets/images/certificado.png';
import socialTrainingIcon from '../assets/images/svg/socialtraing.png';
import bannerSocialImg from '../assets/images/banner_social.png';
import treinamentoIcon from '../assets/images/svg/treinamento.png';
import bannerTreinamentoImg from '../assets/images/banner_treinamento.png';
import sempuxarIcon from '../assets/images/sempuxar.png';
import bannerCursoImg from '../assets/images/banner_curso.png';
import particularIcon from '../assets/images/particular_ICON.jpg.png';
import bannerParticularImg from '../assets/images/banner_PARTICILAR.png';
import bannerOnlineImg from '../assets/images/banner_online.png';

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
                      src={bannerSocialImg}
                      alt="Warum Social Training & Social Walking so wichtig sind"
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
            Impulskontrolle und Gehorsamkeitstraining
          </h2>

          {/* Coluna centralizada com informações */}
          <div className="max-w-3xl mx-auto mb-14 flex justify-center">
            <div className="bg-white p-8 md:p-10 rounded-lg shadow-sm w-full max-w-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-6 w-6 text-primary-light flex-shrink-0" />
                    <h3 className="text-xl font-medium text-primary">Wann:</h3>
                  </div>
                  <p className="text-gray-700 pl-8">Termine werden noch bekannt gegeben</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Clock className="h-6 w-6 text-primary-light flex-shrink-0" />
                    <h3 className="text-xl font-medium text-primary">Dauer:</h3>
                  </div>
                  <p className="text-gray-700 pl-8">60 Minuten</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-6 w-6 text-primary-light flex-shrink-0" />
                    <h3 className="text-xl font-medium text-primary">Ort:</h3>
                  </div>
                  <p className="text-gray-700 pl-8">
                    Verschiedene Locations im Kanton Zürich – z. B. Parks, Strassen oder Wälder
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Users className="h-6 w-6 text-primary-light flex-shrink-0" />
                    <h3 className="text-xl font-medium text-primary">Gruppen:</h3>
                  </div>
                  <p className="text-gray-700 pl-8">4–6 Hunde, jeweils mit einer Begleitperson</p>
                </div>

                <div className="md:col-span-2 mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center gap-2 mb-4">
                    <DollarSign className="h-6 w-6 text-primary-light flex-shrink-0" />
                    <h3 className="text-xl font-medium text-primary">Preis:</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pl-8">
                    <div className="space-y-2">
                      <p className="font-medium text-primary-dark">Einzelsession:</p>
                      <p className="text-gray-700 pl-3 text-lg">CHF 70.00</p>
                    </div>

                    <div className="space-y-2">
                      <p className="font-medium text-primary-dark">10er-Paket:</p>
                      <p className="text-gray-700 pl-3 text-lg">CHF 650.00</p>
                      <p className="text-gray-600 pl-3">(gültig für 6 Monate)</p>
                    </div>
                  </div>

                  <p className="text-sm text-gray-500 mt-6 pl-8">Preise exkl. MwSt</p>
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
                    <p>
                      Ungehorsamkeit und fehlende Impulskontrolle können für Mensch und Hund
                      gleichermassen frustrierend sein. Oft entstehen diese Herausforderungen aus
                      Unsicherheit, mangelnder Orientierung oder fehlendem Training.
                    </p>
                    <p>
                      Viele dieser Probleme lassen sich vermeiden, wenn der Hund lernt, seinem
                      Menschen zu vertrauen, auf ihn zu achten und klare Kommandos zu verstehen.
                    </p>
                    <p>In diesem Kurs lernt Ihr Hund,</p>
                    <ul className="list-disc list-inside">
                      <li>sich besser zu konzentrieren,</li>
                      <li>
                        Impulse zu kontrollieren (z. B. bei Reizen wie anderen Hunden, Katzen oder
                        Geräuschen),
                      </li>
                      <li>zuverlässig auf Kommandos zu reagieren,</li>
                      <li>und gelassener in Alltagssituationen zu bleiben.</li>
                    </ul>
                    <p>
                      Das Ziel ist eine harmonische, sichere und entspannte Beziehung – damit
                      Spaziergänge wieder Freude machen und Vertrauen wächst.
                    </p>
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <img
                    src={bannerTreinamentoImg}
                    alt="Impulskontrolle und Gehorsamkeitstraining"
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
            Training des Hundes, damit er beim Spaziergang nicht mehr an der Leine zieht
          </h2>

          {/* Duas colunas abaixo do título */}
          <div className="max-w-6xl mx-auto mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Primeira coluna */}
              <div className="bg-white p-8 rounded-lg shadow-sm flex items-center">
                <h3 className="headline3 text-primary">
                  Leinenführigkeit – Training für entspannte Spaziergänge
                </h3>
              </div>

              {/* Segunda coluna */}
              <div className="bg-white p-8 rounded-lg shadow-sm flex items-center">
                <div className="w-full">
                  <div className="flex items-center gap-2 mb-6">
                    <DollarSign className="h-6 w-6 text-primary-light flex-shrink-0" />
                    <h3 className="text-xl font-medium text-primary">Preis:</h3>
                  </div>

                  <div className="pl-8 space-y-5">
                    <div className="flex items-baseline justify-between">
                      <p className="font-medium text-primary-dark">Einzelsession:</p>
                      <p className="text-gray-700 text-lg">CHF 70.00</p>
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-baseline justify-between">
                        <p className="font-medium text-primary-dark">10er-Paket:</p>
                        <p className="text-gray-700 text-lg">CHF 650.00</p>
                      </div>
                      <p className="text-gray-600 text-right text-sm">(gültig für 6 Monate)</p>
                    </div>

                    <p className="text-sm text-gray-500 mt-4">Preise exkl. MwSt</p>
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
                      alt="Hund an der Leine Training"
                      className="w-full h-auto object-cover rounded-lg transform hover:scale-105 transition duration-300"
                    />
                  </div>
                </div>
                <div className="w-full md:w-2/5">
                  <div className="body1 space-y-4 text-gray-600">
                    <p>
                      Zieht Ihr Hund an der Leine, obwohl Sie ihn immer wieder bitten, damit
                      aufzuhören?
                    </p>
                    <p>
                      Reagiert er plötzlich stark, wenn er andere Hunde, Katzen, Autos oder Menschen
                      sieht?
                    </p>
                    <p>Fühlen Sie sich auf Spaziergängen gestresst oder überfordert?</p>
                    <p className="font-medium text-primary-dark">
                      Dann ist dieser Kurs genau das Richtige für Sie.
                    </p>
                    <p>
                      Wir helfen Ihnen, die Kontrolle zurückzugewinnen – mit Geduld, positiver
                      Kommunikation und gezielten Techniken. Ihr Hund lernt, sich besser zu
                      konzentrieren, ruhiger zu bleiben und achtsam an Ihrer Seite zu laufen.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Duas novas colunas: Trainingsdetails e Ziel */}
          <div className="max-w-6xl mx-auto mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Primeira coluna - Trainingsdetails */}
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-medium text-primary mb-6">Trainingsdetails</h3>
                <ul className="space-y-5 text-gray-600">
                  <li className="flex items-start gap-3">
                    <Clock className="h-6 w-6 text-primary-light mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-primary-light">Dauer:</span> 90 Minuten
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Users className="h-6 w-6 text-primary-light mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-primary-light">Teilnehmer:</span> 3 Hunde
                      + 3 Bezugspersonen
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="h-6 w-6 text-primary-light mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-primary-light">Ort:</span> Verschiedene
                      Locations im Kanton Zürich (Parks, Strassen oder Wälder)
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Activity className="h-6 w-6 text-primary-light mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-primary-light">Reizlevel:</span> mit
                      vielen, wenigen oder keinen externen Einflüssen – je nach Trainingsziel
                    </div>
                  </li>
                </ul>
              </div>

              {/* Segunda coluna - Ziel */}
              <div className="bg-white p-8 rounded-lg shadow-sm flex flex-col justify-center">
                <h3 className="text-xl font-medium text-primary mb-6">Ziel:</h3>
                <p className="text-gray-600">
                  Ein harmonisches, sicheres Miteinander an der Leine – für entspannte und freudige
                  Spaziergänge, bei denen Sie und Ihr Hund wieder im Einklang unterwegs sind.
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
            Privatunterricht
          </h2>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-stretch">
              {/* Coluna esquerda - Banner (maior) */}
              <div className="bg-white p-4 rounded-lg shadow-sm md:col-span-3">
                <div className="overflow-hidden rounded-lg w-full">
                  <img
                    src={bannerParticularImg}
                    alt="Privatunterricht Banner"
                    className="w-full h-auto object-cover rounded-lg transform hover:scale-105 transition duration-300"
                  />
                </div>
              </div>

              {/* Coluna direita - Texto (menor) na metade inferior */}
              <div
                className="bg-white p-8 rounded-lg shadow-sm md:col-span-2 flex flex-col"
                style={{ minHeight: '400px' }}
              >
                <div className="flex-grow min-h-[40%]"></div>
                <div className="body1 space-y-6 text-gray-600 pb-6">
                  <p>
                    In unserem Einzeltraining (60 Minuten) gehen wir gezielt auf die
                    Herausforderungen ein, die Sie mit Ihrem Hund erleben. Gemeinsam entwickeln wir
                    Lösungen, die genau zu Ihnen, Ihrem Alltag und der Persönlichkeit Ihres Hundes
                    passen.
                  </p>
                  <p>
                    <span className="font-medium text-primary-dark">Unser Ziel:</span> Ein
                    harmonisches Miteinander – abgestimmt auf Ihre individuellen Bedürfnisse.
                  </p>
                </div>
              </div>
            </div>

            {/* Preços e informações adicionais */}
            <div className="max-w-4xl mx-auto mt-12 bg-white p-8 rounded-lg shadow-sm">
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-6">
                  <DollarSign className="h-6 w-6 text-primary-light flex-shrink-0" />
                  <h3 className="text-xl font-medium text-primary">Preise:</h3>
                </div>

                <ul className="pl-9 space-y-4 text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="text-primary-light font-medium">–</span>
                    <p>
                      <span className="font-medium">Einzelstunde:</span> CHF 80.00
                    </p>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary-light font-medium">–</span>
                    <p>
                      <span className="font-medium">10er-Paket:</span> CHF 650.00 (gültig für 6
                      Monate)
                    </p>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary-light font-medium">–</span>
                    <p>
                      <span className="font-medium">Fahrtkosten:</span> CHF 1.00 pro Kilometer (ab
                      Standort Flaach)
                    </p>
                  </li>
                </ul>
              </div>

              <div className="border-t border-gray-200 my-6"></div>

              <div className="flex items-start gap-3 mt-8">
                <Activity className="h-6 w-6 text-primary-light mt-1 flex-shrink-0" />
                <p className="text-gray-600">
                  Ob Verhaltenstraining, Alltagssituationen oder spezielle Themen – wir sind an
                  Ihrer Seite, um Sie und Ihren Hund bestmöglich zu begleiten.
                </p>
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
                Für einen gelungenen Start mit Ihrem neuen Hund
              </h2>
            </div>

            <div className="body1 space-y-4 text-gray-600 max-w-3xl mx-auto">
              <p>
                Haben Sie kürzlich einen Hund adoptiert – oder planen Sie, bald ein neues
                Familienmitglied bei sich aufzunehmen?
              </p>
              <p>
                Die ersten Wochen sind entscheidend für eine stabile Bindung und ein harmonisches
                Zusammenleben.
              </p>
              <p>
                Wir begleiten Sie in dieser wichtigen Phase mit einfühlsamer Beratung per Video-
                oder Onlinegespräch.
              </p>
              <p>
                Ob vor der Ankunft oder in den ersten Tagen nach dem Einzug – wir sind für Sie da.
              </p>
              <p>Auf Wunsch kann auch ein persönliches Treffen (60 Minuten) vereinbart werden.</p>

              <div className="border-t border-gray-200 my-6"></div>

              <div className="mt-6">
                <div className="flex items-center gap-2 mb-4">
                  <DollarSign className="h-6 w-6 text-primary-light flex-shrink-0" />
                  <h3 className="text-xl font-medium text-primary">Preis:</h3>
                </div>

                <ul className="pl-9 space-y-3 text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="text-primary-light font-medium">–</span>
                    <p>CHF 80.00 pro Beratung (online oder vor Ort)</p>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary-light font-medium">–</span>
                    <p>Fahrtkosten: CHF 1.00 pro Kilometer (ab Standort Flaach)</p>
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
          <h2 className="headline2 text-primary font-sour-gummy text-center mb-8">Kontakt</h2>
          <HundetrainingContactForm />
        </div>
      </motion.section>
    </>
  );
};

export default HundetrainingPage;
