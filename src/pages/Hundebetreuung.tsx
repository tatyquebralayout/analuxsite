import React from 'react';
import SEO from '../components/common/SEO';
import { motion } from 'framer-motion';
import { Bed, Car } from 'lucide-react';
import DaycareIcon from '../components/services/DaycareIcon';

const HundebetreuungPage: React.FC = () => {
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
        title="Hundebetreuung - AmanLux Dogs"
        description="Tagesbetreuung, Übernachtung und Wochenende für Ihren Hund in Zürich."
        keywords="Hundebetreuung, Hundehotel, Hundetagesstätte, Zürich, Übernachtung, Wochenende"
      />

      {/* Hero Section */}
      <section className="bg-white py-16 text-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col items-center text-center">
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="headline1 mb-6 leading-tight font-sour-gummy"
              >
                Betreuung, die über den Alltag hinausgeht – mit Liebe, Achtsamkeit und Vertrauen.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="body1 text-gray-600"
              >
                Während Sie sich um Ihre Verpflichtungen kümmern, sorgen wir für den, der zu Hause
                sehnsüchtig auf Sie wartet – mit der gleichen Zuwendung und Geborgenheit, die er von
                Ihnen kennt.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex justify-center"
            >
              <img
                src="/src/assets/images/carinho.png"
                alt="Hundebetreuung bei AmanLux Dogs"
                className="w-auto h-auto max-h-80"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            className="headline2 text-center mb-10 text-primary font-sour-gummy"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Unsere Hundebetreuung in Bildern
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
              <motion.div
                key={item}
                className="relative overflow-hidden rounded-lg shadow-md aspect-square"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow:
                    '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                }}
              >
                <div className="bg-gray-200 w-full h-full flex items-center justify-center text-gray-400">
                  <span>Dog Image {item}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tagesbetreuung Section */}
      <motion.section
        className="py-20 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="inline-block p-3 bg-primary-light rounded-2xl mb-6">
                <div className="text-white">
                  <DaycareIcon />
                </div>
              </div>
              <h2 className="headline2 mb-6 text-primary font-sour-gummy">Tagesbetreuung</h2>
              <p className="body1 text-gray-600 mb-6 leading-relaxed">
                Wir bieten Ihrem vierbeinigen Liebling ein besonderes Erlebnis – voller Freude,
                Geborgenheit und Komfort, den ganzen Tag über. Ihr Hund genießt bei uns:
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary-light text-white flex items-center justify-center mt-1 mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="body1 text-gray-700">
                    Individuelle Betreuung mit viel Aufmerksamkeit
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary-light text-white flex items-center justify-center mt-1 mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="body1 text-gray-700">
                    Gemeinsames Spielen und soziales Lernen
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary-light text-white flex items-center justify-center mt-1 mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="body1 text-gray-700">
                    Ausreichend Ruhezeiten und sichere Umgebung
                  </span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <motion.div
                className="rounded-2xl overflow-hidden shadow-xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-primary-light p-1">
                  <div className="w-full h-64 md:h-96 bg-gray-200 flex items-center justify-center">
                    <div className="text-gray-400 text-5xl">
                      <DaycareIcon />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Übernachtung und Wochenende Section */}
      <motion.section
        className="py-16 bg-white"
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
              <h2 className="headline3 mb-4 font-sour-gummy">Übernachtung und Wochenende</h2>
              <p className="body1 text-gray-600 mb-4">
                Wenn Ihr Hund die Nacht oder das Wochenende bei uns verbringt, kümmern wir uns
                liebevoll um alles.
              </p>
              <p className="body1 text-gray-600 mb-4">
                Wir stellen bequeme Betten, kuschelige Decken und Spielzeug zur Verfügung – damit es
                Ihrem Vierbeiner an nichts fehlt.
              </p>
              <p className="body1 text-gray-600 mb-4">
                Sie müssen nichts mitbringen – ausser dem gewohnten Futter Ihres Hundes.
              </p>
              <p className="body1 text-gray-600 mb-6">
                Alles, was Ihr Hund für Komfort, Sicherheit und Wohlbefinden braucht, ist bereits
                da.
              </p>
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

      {/* Taxi Dog-Service Section */}
      <motion.section
        className="py-16 bg-gray-50"
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
                  <Car size={32} />
                </div>
              </div>
              <h2 className="headline3 mb-4 font-sour-gummy">Taxi Dog-Service</h2>
              <p className="body1 text-gray-600 mb-4">
                Unser Taxi-Dog-Service in Zürich und Umgebung ist im Preis für die Tagesbetreuung
                und das Hundehotel inbegriffen.
              </p>
              <p className="body1 text-gray-600 mb-4">
                Da wir zwei Fahrzeuge haben, bieten wir zwei feste Routen an.
              </p>
              <p className="body1 text-gray-600 mb-4">Bitte beachten Sie:</p>
              <p className="body1 text-gray-600 mb-4">
                An Wochenenden und Feiertagen ist der Taxi-Dog-Service nicht verfügbar.
              </p>
              <p className="body1 text-gray-600 mb-4">
                Fragen Sie uns gerne, ob Ihre Adresse innerhalb unserer Fahrtrouten liegt.
              </p>
              <p className="body1 text-gray-600 mb-4">
                Für Kunden ausserhalb dieser Gebiete vereinbaren wir gerne einen zentralen
                Treffpunkt in Zürich.
              </p>
              <p className="body1 text-gray-600 mb-4">
                Unser Standort befindet sich in Flaach, mitten im Grünen – ein wahres Paradies für
                Ihren Hund! 🥰
              </p>
              <p className="body1 text-gray-600 mb-6">
                Für weitere Informationen stehen wir Ihnen jederzeit zur Verfügung.
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

      {/* Preise Section */}
      <motion.section
        className="py-20 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-4">
          <h2 className="headline2 text-center mb-12 text-primary font-sour-gummy">Preise</h2>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                className="bg-white shadow-xl rounded-2xl overflow-hidden transform transition duration-300 hover:shadow-2xl"
                whileHover={{ y: -5 }}
              >
                <div className="bg-primary-light p-8 text-white">
                  <h3 className="headline3 mb-2 font-sour-gummy">Tagesbetreuung</h3>
                  <p className="headline2 font-bold flex items-baseline">
                    87 CHF
                    <span className="text-sm ml-2 opacity-80 font-normal">(exkl. MwSt)</span>
                  </p>
                  <p className="mt-2 text-white text-opacity-90">pro Tag</p>
                </div>
                <div className="p-8">
                  <h4 className="headline5 mb-4 text-primary">Beinhaltet</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-primary mr-2 mt-0.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Abholung und Rückgabe</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-primary mr-2 mt-0.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Individuelle Betreuung</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-primary mr-2 mt-0.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Gemeinsames Spielen</span>
                    </li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
                className="bg-white shadow-xl rounded-2xl overflow-hidden transform transition duration-300 hover:shadow-2xl"
                whileHover={{ y: -5 }}
              >
                <div className="bg-primary p-8 text-white">
                  <h3 className="headline3 mb-2 font-sour-gummy">Abholung und Rückgabe</h3>
                  <p className="text-lg mt-2 text-white text-opacity-90">Zeiten und Details</p>
                </div>
                <div className="p-8">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5 shrink-0">
                        <span className="text-sm">1</span>
                      </div>
                      <p className="text-gray-600">Die Abholung beginnt ab 07:00 Uhr.</p>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5 shrink-0">
                        <span className="text-sm">2</span>
                      </div>
                      <p className="text-gray-600">
                        Die genaue Uhrzeit variiert je nach Route, Anzahl der Hunde und Verkehr.
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5 shrink-0">
                        <span className="text-sm">3</span>
                      </div>
                      <p className="text-gray-600">
                        Sie erhalten eine Nachricht mit der voraussichtlichen Ankunftszeit.
                      </p>
                    </li>
                  </ul>
                </div>
              </motion.div>
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
          <h2 className="headline3 text-center mb-8 font-sour-gummy">Kontakt für Hundebetreuung</h2>
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
                  Betreuungsart *
                </label>
                <select
                  id="service"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  required
                >
                  <option value="tagesbetreuung">Tagesbetreuung</option>
                  <option value="ferienbetreuung">Ferienbetreuung</option>
                </select>
              </div>

              <div>
                <label htmlFor="dogs" className="block mb-2 font-medium">
                  Wie viele Hunde? *
                </label>
                <select id="dogs" className="w-full p-3 border border-gray-300 rounded-md" required>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3 oder mehr</option>
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
        className="py-16 bg-white"
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

export default HundebetreuungPage;
