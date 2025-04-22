import React from 'react';
import SEO from '../components/common/SEO';
import { motion } from 'framer-motion';

const HundetrainingPage: React.FC = () => {
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
        title="Hundetraining - AmanLux Dogs"
        description="Die Körpersprache ist eine der wichtigsten Arten, wie Hunde mit uns und ihrer Umwelt kommunizieren."
        keywords="Hundetraining, social walking, impulskontrolle, leinenführigkeit, privatunterricht, hundetrainer, zürich"
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
            Hundetraining
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="body1 max-w-2xl mx-auto"
          >
            Die Körpersprache ist eine der wichtigsten Arten, wie Hunde mit uns und ihrer Umwelt
            kommunizieren.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="body1 max-w-2xl mx-auto mt-4"
          >
            Unser Ziel beim Training ist es, das gegenseitige Verständnis zwischen Mensch und Hund
            zu vertiefen, die Sozialisierung zu fördern und ein harmonisches Zusammenleben in
            verschiedenen Alltagssituationen zu ermöglichen.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="body1 max-w-2xl mx-auto mt-4"
          >
            Mit Geduld, Einfühlungsvermögen und positiver Bestärkung schaffen wir eine
            vertrauensvolle Beziehung – die beste Grundlage für ein glückliches Miteinander.
          </motion.p>
        </div>
      </section>

      {/* Certificate Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="w-48 h-48 mx-auto bg-gray-200 rounded-lg shadow-md flex items-center justify-center text-gray-400 mb-6">
            <span>Trainerzertifikat</span>
          </div>
          <p className="body1 text-gray-600">Offizielles Trainerzertifikat von Danillo Balbino</p>
        </div>
      </section>

      {/* Social Training und Social Walking */}
      <motion.section
        className="py-16 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="md:w-1/2">
              <div className="w-full h-64 md:h-80 bg-gray-200 rounded-lg shadow-lg flex items-center justify-center mb-4">
                <span className="text-gray-400">Foto: Danillo mit Hunden</span>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="headline4 mb-4">🐕‍🦺 Social Training & Social Walking</h3>
                <p className="body2 mb-2">🗓 Wann: Termine werden noch bekannt gegeben</p>
                <p className="body2 mb-2">⏱ Dauer: 90 Minuten</p>
                <p className="body2 mb-4">
                  📍 Ort: Verschiedene Locations – je nach Ziel der Einheit mit vielen, wenigen oder
                  keinen Menschen ausser der Gruppe (z. B. Parks, Strassen oder Wälder)
                </p>
                <p className="body2 mb-4">
                  👥 Gruppen: 8–10 Hunde, jeweils mit einer Begleitperson
                </p>
                <hr className="my-4" />
                <h4 className="headline6 mb-2">💰 Preis:</h4>
                <p className="body2 mb-2">Einzelsession: CHF 55.00</p>
                <p className="body2 mb-2">10er-Paket: CHF 450.00 (gültig für 6 Monate)</p>
                <p className="body2">Preise exkl. MwSt</p>
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="headline3 mb-4">
                Warum Social Training & Social Walking so wichtig sind
              </h2>
              <p className="body1 text-gray-600 mb-4">
                Das Verhalten eines Hundes hängt stark davon ab, wie gut er die soziale Struktur
                versteht, in der er lebt – also seine Rolle in der Familie, in der Gruppe und in der
                Gesellschaft.
              </p>
              <p className="body1 text-gray-600 mb-4">
                Manche Verhaltensweisen, die für uns Menschen unangenehm oder unerwünscht
                erscheinen, haben oft tiefere Ursachen, die nicht sofort erkennbar sind.
              </p>
              <p className="body1 text-gray-600 mb-4">
                Deshalb ist es entscheidend, dass wir lernen, diese Signale richtig zu deuten – nur
                so können wir unseren Hunden wirklich helfen.
              </p>
              <p className="body1 text-gray-600 mb-4">
                Viele Probleme entstehen durch fehlende oder unzureichende Sozialisierung.
              </p>
              <p className="body1 text-gray-600 mb-4">Beispiele dafür sind:</p>
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li>Angst vor anderen Hunden</li>
                <li>Unsicherheit gegenüber Kindern, fremden Menschen oder Katzen</li>
                <li>Bellen, Fluchtverhalten oder sogar aggressives Verhalten</li>
              </ul>
              <p className="body1 text-gray-600 mb-4">
                Diese Verhaltensmuster lassen sich nicht durch Strafen, sondern nur durch gezieltes
                Training und kontinuierliche Sozialisierung verbessern.
              </p>
              <p className="body1 text-gray-600 mb-6">
                Und je früher man damit beginnt, desto nachhaltiger sind die Ergebnisse.
              </p>

              <hr className="my-6" />

              <h3 className="headline4 mb-4">🐕 Was ist Social Walking?</h3>
              <p className="body1 text-gray-600 mb-6">
                Beim Social Walking spaziert der Hund gemeinsam mit seinem Besitzer und anderen
                Hunden in einer Gruppe – in Umgebungen mit unterschiedlichen Reizen, wie Parks,
                Straßen oder Wäldern. Der Hund lernt dabei, gelassener auf verschiedene Situationen,
                Geräusche, Menschen und andere Tiere zu reagieren – immer in sicherer Begleitung.
              </p>

              <hr className="my-6" />

              <h3 className="headline4 mb-4">🎓 Was ist Social Training?</h3>
              <p className="body1 text-gray-600 mb-6">
                Das Social Training ist eine ergänzende Trainingseinheit, bei der gezielt am
                Verhalten des Hundes gearbeitet wird – unter Berücksichtigung seiner Persönlichkeit,
                seiner Bedürfnisse und seiner Grenzen. Unser Ziel ist es, ein harmonisches
                Miteinander zu fördern – mit Geduld, Respekt und positiver Verstärkung.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Impulskontrolle und Gehorsamkeitstraining */}
      <motion.section
        className="py-16 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-start gap-8">
            <div className="md:w-1/2">
              <div className="w-full h-64 md:h-80 bg-gray-200 rounded-lg shadow-lg flex items-center justify-center mb-4">
                <span className="text-gray-400">Foto: Trainer mit Hund</span>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="headline4 mb-4">🧠 Impulskontrolle & Gehorsamkeitstraining</h3>
                <p className="body2 mb-2">🗓 Wann: Termine werden noch bekannt gegeben</p>
                <p className="body2 mb-2">⏱ Dauer: 60 Minuten</p>
                <p className="body2 mb-4">
                  📍 Ort: Verschiedene Locations im Kanton Zürich – z. B. Parks, Strassen oder
                  Wälder
                </p>
                <p className="body2 mb-4">👥 Gruppen: 4–6 Hunde, jeweils mit einer Begleitperson</p>
                <hr className="my-4" />
                <h4 className="headline6 mb-2">💰 Preis:</h4>
                <p className="body2 mb-2">Einzelsession: CHF 70.00</p>
                <p className="body2 mb-2">10er-Paket: CHF 650.00 (gültig für 6 Monate)</p>
                <p className="body2">Preise exkl. MwSt</p>
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="headline3 mb-4">🐾 Worum geht es in diesem Training?</h2>
              <p className="body1 text-gray-600 mb-4">
                Ungehorsamkeit und fehlende Impulskontrolle können für Mensch und Hund
                gleichermassen frustrierend sein. Oft entstehen diese Herausforderungen aus
                Unsicherheit, mangelnder Orientierung oder fehlendem Training.
              </p>
              <p className="body1 text-gray-600 mb-4">
                Viele dieser Probleme lassen sich vermeiden, wenn der Hund lernt, seinem Menschen zu
                vertrauen, auf ihn zu achten und klare Kommandos zu verstehen.
              </p>
              <p className="body1 text-gray-600 mb-4">In diesem Kurs lernt Ihr Hund,</p>
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li>sich besser zu konzentrieren,</li>
                <li>
                  Impulse zu kontrollieren (z. B. bei Reizen wie anderen Hunden, Katzen oder
                  Geräuschen),
                </li>
                <li>zuverlässig auf Kommandos zu reagieren,</li>
                <li>und gelassener in Alltagssituationen zu bleiben.</li>
              </ul>
              <p className="body1 text-gray-600 mb-4">
                Das Ziel ist eine harmonische, sichere und entspannte Beziehung – damit Spaziergänge
                wieder Freude machen und Vertrauen wächst. 🐕❤️
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Leinenführigkeit */}
      <motion.section
        className="py-16 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="md:w-1/2">
              <div className="w-full h-64 md:h-80 bg-gray-200 rounded-lg shadow-lg flex items-center justify-center mb-4">
                <span className="text-gray-400">Foto: Hund an der Leine</span>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="headline4 mb-4">
                  🐕‍🦺 Leinenführigkeit – Training für entspannte Spaziergänge
                </h3>
                <h4 className="headline6 mb-2">💰 Preis:</h4>
                <p className="body2 mb-2">Einzelsession: CHF 70.00</p>
                <p className="body2 mb-2">10er-Paket: CHF 650.00 (gültig für 6 Monate)</p>
                <p className="body2 mb-4">Preise exkl. MwSt</p>
                <hr className="my-4" />
                <h4 className="headline6 mb-2">🗓 Trainingsdetails</h4>
                <p className="body2 mb-2">– Dauer: 90 Minuten</p>
                <p className="body2 mb-2">– Teilnehmer: 3 Hunde + 3 Bezugspersonen</p>
                <p className="body2 mb-2">
                  – Ort: Verschiedene Locations im Kanton Zürich (Parks, Strassen oder Wälder)
                </p>
                <p className="body2 mb-2">
                  – Reizlevel: mit vielen, wenigen oder keinen externen Einflüssen – je nach
                  Trainingsziel
                </p>
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="headline3 mb-4">🐾 Worum geht es in diesem Kurs?</h2>
              <p className="body1 text-gray-600 mb-4">
                Zieht Ihr Hund an der Leine, obwohl Sie ihn immer wieder bitten, damit aufzuhören?
              </p>
              <p className="body1 text-gray-600 mb-4">
                Reagiert er plötzlich stark, wenn er andere Hunde, Katzen, Autos oder Menschen
                sieht?
              </p>
              <p className="body1 text-gray-600 mb-4">
                Fühlen Sie sich auf Spaziergängen gestresst oder überfordert?
              </p>
              <p className="body1 text-gray-600 mb-4">
                Dann ist dieser Kurs genau das Richtige für Sie.
              </p>
              <p className="body1 text-gray-600 mb-4">
                Wir helfen Ihnen, die Kontrolle zurückzugewinnen – mit Geduld, positiver
                Kommunikation und gezielten Techniken. Ihr Hund lernt, sich besser zu konzentrieren,
                ruhiger zu bleiben und achtsam an Ihrer Seite zu laufen.
              </p>
              <hr className="my-6" />
              <h4 className="headline5 mb-2">Ziel:</h4>
              <p className="body1 text-gray-600 mb-4">
                Ein harmonisches, sicheres Miteinander an der Leine – für entspannte und freudige
                Spaziergänge, bei denen Sie und Ihr Hund wieder im Einklang unterwegs sind. 🐾
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Privatunterricht */}
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

      {/* Online-Beratung */}
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

      {/* Contact Form */}
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
                  Trainingsart *
                </label>
                <select
                  id="service"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  required
                >
                  <option value="grundkommandos">Grundkommandos</option>
                  <option value="leinentraining">Leinentraining</option>
                  <option value="problembewaltigung">Problembewältigung</option>
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
