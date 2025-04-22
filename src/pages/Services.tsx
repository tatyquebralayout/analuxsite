import React from 'react';
import SEO from '../components/common/SEO';
import { Bed, Dog, Car } from 'lucide-react';
import { motion } from 'framer-motion';
import DaycareIcon from '../components/services/DaycareIcon';

const ServicesPage: React.FC = () => {
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
        title="Angebot - AmanLux Dogs"
        description="Wir bieten Tagesbetreuung, Übernachtung, Hundetraining und Taxi-Service für Hunde in Zürich."
        keywords="Hundebetreuung, Hundehotel, Hundetraining, Hundetagesstätte, Zürich, Hundetaxi"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-light to-primary py-16 text-center text-white">
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="headline1 mb-4"
          >
            Angebot
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="body1 max-w-2xl mx-auto"
          >
            Ein Ort voller Liebe – für Welpen, Erwachsene und Seniorenhunde
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="body1 max-w-2xl mx-auto mt-2"
          >
            Weil Ihr Hund ein Familienmitglied ist – und nur das Beste verdient.
          </motion.p>
        </div>
      </section>

      {/* Tagesbetreuung Section */}
      <motion.section
        className="py-16 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mb-4">
                <div className="text-white">
                  <DaycareIcon />
                </div>
              </div>
              <h2 className="headline3 mb-4">Tagesbetreuung</h2>
              <p className="body1 text-gray-600 mb-6">
                Wir bieten Ihrem vierbeinigen besten Freund ein einzigartiges Erlebnis voller
                Freude, Komfort und Fürsorge während des Betreuungstages.
              </p>
              <motion.a
                href="/services/hundebetreuung"
                className="inline-block bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-dark transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Zur Seite Hundebetreuung →
              </motion.a>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="w-full h-64 md:h-80 bg-gray-200 rounded-lg shadow-lg flex items-center justify-center">
                <div className="text-gray-400 text-5xl">
                  <DaycareIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Übernachtung und Wochenende Section */}
      <motion.section
        className="py-16 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="md:w-1/2">
              <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mb-4">
                <div className="text-white">
                  <Bed size={32} />
                </div>
              </div>
              <h2 className="headline3 mb-4">Übernachtung und Wochenende</h2>
              <p className="body1 text-gray-600 mb-4">
                Wenn Ihr Hund über Nacht oder am Wochenende bei uns bleibt, kümmern wir uns
                liebevoll um alles.
              </p>
              <p className="body1 text-gray-600 mb-4">
                Wir stellen bequeme Betten, kuschelige Decken und Spielzeug zur Verfügung – alles,
                was Ihr Hund für Komfort und Wohlbefinden braucht, ist bereits da.
              </p>
              <p className="body1 text-gray-600 mb-4">
                Sie müssen nichts mitbringen – ausser dem gewohnten Futter Ihres Hundes.
              </p>
              <p className="body1 text-gray-600 mb-6">
                Denn bei AmanLux Dogs ist für alles gesorgt.
              </p>
              <motion.a
                href="/services/hundebetreuung"
                className="inline-block bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-dark transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Zur Seite Hundebetreuung →
              </motion.a>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="w-full h-64 md:h-80 bg-gray-200 rounded-lg shadow-lg flex items-center justify-center">
                <div className="text-gray-400 text-5xl">
                  <Bed size={64} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Hundetraining Section */}
      <motion.section
        className="py-16 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mb-4">
                <div className="text-white">
                  <Dog size={32} />
                </div>
              </div>
              <h2 className="headline3 mb-4">Hundetraining</h2>
              <p className="body1 text-gray-600 mb-4">
                Unser Training kombiniert Fachwissen, Geduld und ganz viel Liebe.
              </p>
              <p className="body1 text-gray-600 mb-6">
                Ob Welpe oder erwachsener Hund – wir unterstützen Sie dabei, Vertrauen,
                Kommunikation und gutes Verhalten aufzubauen.
              </p>
              <motion.a
                href="/services/hundetraining"
                className="inline-block bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-dark transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Zur Seite Hundetraining →
              </motion.a>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="w-full h-64 md:h-80 bg-gray-200 rounded-lg shadow-lg flex items-center justify-center">
                <div className="text-gray-400 text-5xl">
                  <Dog size={64} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Taxi Dog-Service Section */}
      <motion.section
        className="py-16 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="md:w-1/2">
              <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mb-4">
                <div className="text-white">
                  <Car size={32} />
                </div>
              </div>
              <h2 className="headline3 mb-4">Taxi Dog-Service</h2>
              <p className="body1 text-gray-600 mb-4">
                Unser Taxi-Dog-Service in Zürich und Umgebung ist im Preis für die Tagesbetreuung
                und das Hundehotel inbegriffen.
              </p>
              <p className="body1 text-gray-600 mb-4">
                Wir verfügen über zwei Fahrzeuge mit festen Routen. Bitte beachten Sie:
              </p>
              <p className="body1 text-gray-600 mb-4">
                Am Wochenende und an Feiertagen steht der Service nicht zur Verfügung.
              </p>
              <p className="body1 text-gray-600 mb-4">
                Fragen Sie uns gerne, ob Ihre Adresse auf einer unserer Routen liegt.
              </p>
              <p className="body1 text-gray-600 mb-4">
                Kunden ausserhalb dieser Gebiete treffen wir gerne an einem zentralen Ort in Zürich.
              </p>
              <p className="body1 text-gray-600 mb-6">
                📍 Unser Standort: Flaach, umgeben von Natur – Ihr Hund wird es lieben!
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="w-full h-64 md:h-80 bg-gray-200 rounded-lg shadow-lg flex items-center justify-center">
                <div className="text-gray-400 text-5xl">
                  <Car size={64} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Contact Form */}
      <motion.section
        className="py-16 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-4">
          <h2 className="headline3 text-center mb-8">Kontakt</h2>
          <p className="text-center mb-6 text-gray-600">Felder mit * sind Pflichtfelder</p>

          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block mb-2 font-medium">
                  Telefonnummer *
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  required
                />
              </div>

              <div>
                <label htmlFor="service" className="block mb-2 font-medium">
                  Angebot *
                </label>
                <select
                  id="service"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  required
                >
                  <option value="tagesbetreuung">Tagesbetreuung</option>
                  <option value="ferienbetreuung">Ferienbetreuung</option>
                  <option value="hundetraining">Hundetraining</option>
                </select>
              </div>

              <div>
                <label htmlFor="dogs" className="block mb-2 font-medium">
                  Wie viele Hunde? *
                </label>
                <select id="dogs" className="w-full p-3 border border-gray-300 rounded-md" required>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3 oder +</option>
                </select>
              </div>

              <div>
                <label className="block mb-2 font-medium">Hundegrosse *</label>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    Kleiner (bis 10 kg)
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    Grosse (ab 10 kg)
                  </label>
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 font-medium">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 font-medium">
                  Nachricht *
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full p-3 border border-gray-300 rounded-md"
                  required
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="bg-primary text-white py-3 px-6 rounded-md hover:bg-primary-dark transition"
                >
                  Absenden
                </button>
              </div>
            </form>
          </div>
        </div>
      </motion.section>

      {/* Contact Info Section */}
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
              {/* Map placeholder - replace with actual Google Maps embed */}
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
                  <span className="text-lg">Mo - Fr / 7:00 - 18:30 Uhr</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default ServicesPage;
