import React from 'react';
import { motion } from 'framer-motion';
import { Award, Heart, Clock } from 'lucide-react';

const AboutUs: React.FC = () => {
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
      {/* Hero Section with pink background */}
      <section className="bg-[#ff1655] py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col items-center justify-center h-full">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-lg"
              >
                <h1 className="headline1 text-center leading-tight font-sour-gummy">
                  Denn wir wissen: Ihr Hund ist ein Teil Ihrer Familie – und verdient nur das Beste.
                </h1>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex justify-center"
            >
              <img
                src="/src/assets/images/chamo_ceo.png"
                alt="AmanLux Dogs Gründerin"
                className="w-auto h-auto max-h-80 rounded-full border-4 border-white shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Título principal */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="headline2 text-primary font-sour-gummy mb-4">Über uns</h2>
          </motion.div>

          {/* História e Fundadora */}
          <div className="max-w-6xl mx-auto mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="order-2 md:order-1"
              >
                <div className="body1 text-gray-600 space-y-4">
                  <p>
                    Willkommen bei AmanLux Dogs – Ihrer exklusiven Hundetagesstätte und Ihrem
                    liebevollen Hundehotel in Zürich, wo jeder Hund als Familienmitglied willkommen
                    ist.
                  </p>
                  <p>
                    Wir bieten nicht einfach nur Betreuung – bei AmanLux Dogs erlebt Ihr Hund einen
                    Tag voller Liebe, Geborgenheit und Abenteuer. In unserem 220 Quadratmeter
                    grossen Haus mit einem liebevoll gestalteten Garten hat Ihr Vierbeiner viel
                    Platz zum Spielen, zur Sozialisation und zum Entdecken.
                  </p>
                  <p>
                    Unsere Arbeit basiert auf Vertrauen, Qualität und Herz. Mit der offiziellen
                    Bewilligung <span className="font-bold text-[#ff1655]">WHgH2021147</span> des
                    Veterinäramts garantieren wir höchste Standards in Sachen Sicherheit und
                    Wohlbefinden.
                  </p>
                  <p>
                    Bei AmanLux Dogs ist Ihr Hund nie allein – er ist immer in fürsorglichen und
                    erfahrenen Händen.
                  </p>
                  <p>
                    Wir holen Ihren Hund direkt bei Ihnen zu Hause ab und bringen ihn nach einem
                    erlebnisreichen Tag voller Zuwendung und Freude sicher zurück.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="order-1 md:order-2 flex justify-center"
              >
                <div className="relative">
                  <img
                    src="/src/assets/images/banner_foto_about.png"
                    alt="AmanLux Dogs"
                    className="w-full h-auto rounded-lg shadow-xl"
                  />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Missão e Valores */}
          <motion.div
            className="max-w-6xl mx-auto bg-gray-50 rounded-lg p-8 md:p-12 shadow-sm mb-20"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <h3 className="headline3 text-primary-dark text-center mb-10">Unsere Philosophie</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-[#ff1655] text-center h-full transform hover:-translate-y-1"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 rounded-full bg-[#ff1655]/10 flex items-center justify-center">
                    <Heart className="h-10 w-10 text-[#ff1655]" />
                  </div>
                </div>
                <h4 className="headline4 text-primary-dark mb-4">Mission</h4>
                <p className="body2 text-gray-600 leading-relaxed">
                  Bei AmanLux Dogs ist es unsere Mission, jedem Hund ein zweites Zuhause zu bieten –
                  einen Ort voller Geborgenheit, Vertrauen und Freude. Ob Tagesbetreuung, Training
                  oder Übernachtung: Wir möchten, dass sich jeder Vierbeiner bei uns sicher, gesehen
                  und geliebt fühlt.
                </p>
              </motion.div>

              <motion.div
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-[#ff1655] text-center h-full transform hover:-translate-y-1"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 rounded-full bg-[#ff1655]/10 flex items-center justify-center">
                    <Award className="h-10 w-10 text-[#ff1655]" />
                  </div>
                </div>
                <h4 className="headline4 text-primary-dark mb-4">Werte</h4>
                <p className="body2 text-gray-600 leading-relaxed">
                  Unsere Arbeit basiert auf drei zentralen Werten: Respekt, Geduld und echter
                  Zuneigung. Wir begegnen jedem Hund mit Achtsamkeit und passen unsere Betreuung
                  individuell an sein Wesen, seine Bedürfnisse und seine Geschichte an.
                </p>
              </motion.div>

              <motion.div
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-[#ff1655] text-center h-full transform hover:-translate-y-1"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 rounded-full bg-[#ff1655]/10 flex items-center justify-center">
                    <Clock className="h-10 w-10 text-[#ff1655]" />
                  </div>
                </div>
                <h4 className="headline4 text-primary-dark mb-4">Methodik</h4>
                <p className="body2 text-gray-600 leading-relaxed">
                  Unsere Methodik kombiniert fachliche Kompetenz mit Herz. Wir arbeiten mit
                  positiver Verstärkung, klarer Kommunikation und viel Einfühlungsvermögen – so
                  schaffen wir eine stabile Vertrauensbasis, auf der Mensch und Hund wachsen können.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
