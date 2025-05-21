import React from 'react';
import SEO from '../components/common/SEO';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import carinhoImg from '../assets/images/carinho.png';
// import crecheImg from '../assets/images/creche.png'; // Removido, pois não é mais usado
import sleepIcon from '../assets/images/svg/sleep.png';
import hotelImg from '../assets/images/hotel.png';
import taxiIcon from '../assets/images/svg/taxidog.png';
import taxiImg from '../assets/images/taxidogfot.png';

const HundebetreuungPage: React.FC = () => {
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

  // Inicializando o EmailJS
  React.useEffect(() => {
    emailjs.init('AmgBu5KTBSjqp5HVm');
  }, []);

  const [formData, setFormData] = React.useState({
    name: '',
    phone: '',
    service: 'tagesbetreuung',
    dogCount: '1',
    dogSize: 'small',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState('');
  const formRef = React.useRef(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    const serviceID = 'service_2lih55m';
    const templateID = 'template_2lih55m';

    const templateParams = {
      from_name: formData.name,
      reply_to: formData.email,
      phone: formData.phone,
      message: formData.message,
      dog_count: formData.dogCount,
      dog_size: formData.dogSize,
      service_requested: formData.service,
      site_name: 'AmanluxDog',
      date: new Date().toLocaleDateString(),
    };

    try {
      await emailjs.send(serviceID, templateID, templateParams);
      setSubmitStatus('success');
      setFormData({
        name: '',
        phone: '',
        service: 'tagesbetreuung',
        dogCount: '1',
        dogSize: 'small',
        email: '',
        message: '',
      });
    } catch (error) {
      console.error('Es ist ein Fehler aufgetreten:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEO
        title={t('seo.hundebetreuung.title', 'Hundebetreuung - AmanLux Dogs')}
        description={t(
          'seo.hundebetreuung.description',
          'Tagesbetreuung, Übernachtung und Wochenende für Ihren Hund in Zürich.'
        )}
        keywords={t(
          'seo.hundebetreuung.keywords',
          'Hundebetreuung, Hundehotel, Hundetagesstätte, Zürich, Übernachtung, Wochenende'
        )}
      />

      {/* Hero Section */}
      <section className="bg-primary-light py-12 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col items-center text-center">
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="headline1 mb-6 leading-tight font-sour-gummy"
              >
                {t(
                  'hundebetreuungPage.hero.title',
                  'Betreuung, die über den Alltag hinausgeht – mit Liebe, Achtsamkeit und Vertrauen.'
                )}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="body1 text-white"
              >
                {t(
                  'hundebetreuungPage.hero.subtitle',
                  'Während Sie sich um Ihre Verpflichtungen kümmern, sorgen wir für den, der zu Hause sehnsüchtig auf Sie wartet – mit der gleichen Zuwendung und Geborgenheit, die er von Ihnen kennt.'
                )}
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex justify-center"
            >
              <img
                src={carinhoImg}
                alt="Hundebetreuung bei AmanLux Dogs"
                className="w-auto h-auto max-h-80"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction Section - Modificada para coluna única e texto centralizado */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
            {/* Coluna da esquerda (anteriormente vídeo) foi removida implicitamente ao reestruturar */}
            {/* Conteúdo de texto (anteriormente coluna da direita) */}
            <motion.div
              className="w-full pt-10 lg:pt-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.h2 className="headline2 mb-6 text-primary font-sour-gummy">
                Hundebetreuung
              </motion.h2>
              <div className="space-y-4">
                <p className="body1 text-gray-600">
                  Unser Ziel ist es, Ihren Hund mit der gleichen Fürsorge und Zuneigung zu betreuen,
                  die er auch von Ihnen kennt. So können Sie entspannt arbeiten, reisen oder
                  unterwegs sein – in dem Wissen, dass Ihr Vierbeiner in besten Händen ist.
                </p>
                <p className="body1 text-gray-600">
                  Mit individueller und liebevoller Betreuung sorgen wir dafür, dass sich Ihr Hund
                  bei uns sicher, geborgen und rundum wohlfühlt.
                </p>
                <p className="body1 text-gray-600">
                  Wir kümmern uns um alle seine Bedürfnisse – mit Aufmerksamkeit, Geduld und ganz
                  viel Herz.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 bg-white">
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
            {[
              'https://i.postimg.cc/cJ3HjDQF/Whats-App-Image-2025-05-13-at-08-00-00.jpg',
              'https://i.postimg.cc/5tQYJ9Mq/Whats-App-Image-2025-05-13-at-08-00-00-1.jpg',
              'https://i.postimg.cc/tT0140q0/Whats-App-Image-2025-05-13-at-08-00-00-2.jpg',
              'https://i.postimg.cc/50wXHPyX/Whats-App-Image-2025-05-13-at-08-00-00-3.jpg',
              'https://i.postimg.cc/6qtyCd4Y/Whats-App-Image-2025-05-13-at-08-00-00-4.jpg',
              'https://i.postimg.cc/HnzjzVQH/Whats-App-Image-2025-05-13-at-08-00-00-5.jpg',
              'https://i.postimg.cc/c41vHBSJ/Whats-App-Image-2025-05-13-at-08-00-00-6.jpg',
              'https://i.postimg.cc/7YBfTJHn/Whats-App-Image-2025-05-13-at-08-00-00-7.jpg',
              'https://i.postimg.cc/jSLC6qC0/Whats-App-Image-2025-05-13-at-08-00-00-8.jpg',
              'https://i.postimg.cc/jSpqzzGP/Whats-App-Image-2025-05-13-at-08-00-01.jpg',
              'https://i.postimg.cc/hjbG4fZx/Whats-App-Image-2025-05-13-at-08-00-01-1.jpg',
              'https://i.postimg.cc/SRSxnkHP/Whats-App-Image-2025-05-13-at-08-00-01-2.jpg',
              'https://i.postimg.cc/Kj0vLC28/Whats-App-Image-2025-05-13-at-08-00-01-3.jpg',
              'https://i.postimg.cc/nV2L69Df/Whats-App-Image-2025-05-13-at-08-00-01-4.jpg',
              'https://i.postimg.cc/DyzzFfrJ/Whats-App-Image-2025-05-13-at-08-00-01-5.jpg',
              'https://i.postimg.cc/QxndMLm6/Whats-App-Image-2025-05-13-at-08-00-01-6.jpg',
            ].map((imageUrl, index) => (
              <motion.div
                key={imageUrl}
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
                <img
                  src={imageUrl}
                  alt={`Hundebetreuung Bild ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
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
              <div className="flex items-center mb-6">
                <img
                  src="/src/assets/images/svg/daycare.png"
                  alt="Daycare Icon"
                  className="w-12 h-12 mr-4"
                />
                <h2 className="headline2 text-primary font-sour-gummy">Tagesbetreuung</h2>
              </div>
              <p className="body1 text-gray-600 mb-6 leading-relaxed">
                Wir bieten Ihrem vierbeinigen Liebling ein besonderes Erlebnis – voller Freude,
                Geborgenheit und Komfort, den ganzen Tag über.
              </p>
            </div>
            <div className="md:w-1/2">
              <motion.div
                className="overflow-hidden rounded-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full overflow-hidden aspect-ratio-4-3">
                  <img
                    src={
                      'https://i.postimg.cc/jSwdw8kR/Whats-App-Image-2025-05-13-at-08-00-01-7.jpg'
                    }
                    alt="Hunde in der Tagesbetreuung"
                    className="w-full h-full object-contain bg-white"
                  />
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
              <div className="flex items-center mb-6">
                <img src={sleepIcon} alt="Sleep Icon" className="w-12 h-12 mr-4" />
                <h2 className="headline3 font-sour-gummy text-primary">
                  Übernachtung und Wochenende
                </h2>
              </div>
              <p className="body1 text-gray-600 mb-4 leading-relaxed">
                Wenn Ihr Hund über Nacht oder am Wochenende bei uns bleibt, kümmern wir uns liebevoll um alles.
              </p>
              <p className="body1 text-gray-600 mb-4 leading-relaxed">
                Wir stellen bequeme Betten, kuschelige Decken und Spielzeug zur Verfügung – alles, was Ihr Hund für Komfort und Wohlbefinden braucht, ist bereits da.
              </p>
              <p className="body1 text-gray-600 mb-4 leading-relaxed">
                Sie müssen nichts mitbringen – ausser dem gewohnten Futter Ihres Hundes.
              </p>
              <p className="body1 text-gray-600 mb-6 leading-relaxed">
                Denn bei AmanLux Dogs ist für alles gesorgt.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="w-full rounded-lg overflow-hidden aspect-ratio-4-3">
                <img
                  src={hotelImg}
                  alt="Hunde Übernachtung"
                  className="w-full h-full object-contain bg-white"
                />
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
              <div className="flex items-center mb-6">
                <img src={taxiIcon} alt="Taxi Dog Icon" className="w-12 h-12 mr-4" />
                <h2 className="headline3 font-sour-gummy text-primary-light">Taxi Dog-Service</h2>
              </div>
              <p className="body1 text-gray-600 mb-4">
                Unser Taxi-Dog-Service in Zürich und Umgebung ist im Preis für die Tagesbetreuung
                und das Hundehotel inbegriffen.
              </p>
              <p className="body1 text-gray-600 mb-4">
                Da wir zwei Fahrzeuge haben, bieten wir zwei feste Routen an.
              </p>
              <p className="font-bold text-primary-light mb-4">Bitte beachten Sie:</p>
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
              <div className="w-full rounded-lg overflow-hidden aspect-ratio-4-3">
                <img
                  src={taxiImg}
                  alt="Taxi Dog Service"
                  className="w-full h-full object-contain bg-white"
                />
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
            <motion.div
              className="bg-white shadow-xl rounded-2xl overflow-hidden transform transition duration-300 hover:shadow-2xl"
              whileHover={{ y: -5 }}
            >
              <div className="bg-primary-light p-8 text-white">
                <h3 className="headline3 mb-2 font-sour-gummy">Preise – Tagesbetreuung</h3>
                <p className="headline2 font-bold flex items-baseline">
                  87 CHF
                  <span className="text-sm ml-2 opacity-80 font-normal">(Preise exkl. MwSt)</span>
                </p>
                <p className="mt-2 text-white text-opacity-90">pro Tag</p>
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
                      Die genaue Uhrzeit hängt von der täglichen Route, der Anzahl der Hunde, dem
                      Verkehrsaufkommen und der individuellen Betreuungszeit ab.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5 shrink-0">
                      <span className="text-sm">3</span>
                    </div>
                    <p className="text-gray-600">
                      Aus Sicherheitsgründen holen wir jeden Hund direkt an Ihrer Haustür ab – daher
                      kann es zu leichten Zeitabweichungen kommen. Sobald wir unterwegs sind,
                      erhalten Sie eine kurze Nachricht mit der voraussichtlichen Ankunftszeit.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5 shrink-0">
                      <span className="text-sm">4</span>
                    </div>
                    <p className="font-bold text-primary-light">
                      Falls Sie nicht zu Hause sind, können Sie uns einfach den Schlüssel
                      hinterlassen – wir holen Ihren Hund sicher ab und bringen ihn ebenso
                      zuverlässig wieder zurück.
                    </p>
                  </li>
                </ul>
              </div>
            </motion.div>
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
          <h2 className="headline3 text-center mb-8 font-sour-gummy text-primary">
            Kontakt für Hundebetreuung
          </h2>
          <p className="text-center mb-6 text-gray-600">Felder mit * sind Pflichtfelder</p>

          <div className="max-w-2xl mx-auto">
            <form className="space-y-6" onSubmit={handleSubmit} ref={formRef}>
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="phone" className="block mb-2 font-medium">
                  Telefonnummer *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="service" className="block mb-2 font-medium">
                  Betreuungsart *
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  required
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="tagesbetreuung">Tagesbetreuung</option>
                  <option value="ferienbetreuung">Ferienbetreuung</option>
                </select>
              </div>

              <div>
                <label htmlFor="dogCount" className="block mb-2 font-medium">
                  Wie viele Hunde? *
                </label>
                <select
                  id="dogCount"
                  name="dogCount"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  required
                  value={formData.dogCount}
                  onChange={handleChange}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3 oder mehr</option>
                </select>
              </div>

              <div>
                <label className="block mb-2 font-medium">Hundegrosse *</label>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="dogSize"
                      value="small"
                      className="mr-2"
                      checked={formData.dogSize === 'small'}
                      onChange={handleChange}
                    />
                    Kleiner (bis 10 kg)
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="dogSize"
                      value="large"
                      className="mr-2"
                      checked={formData.dogSize === 'large'}
                      onChange={handleChange}
                    />
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
                  name="email"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 font-medium">
                  Nachricht *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full p-3 border border-gray-300 rounded-md"
                  required
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="bg-primary text-white py-3 px-6 rounded-md hover:bg-primary-dark transition"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Wird gesendet...' : 'Absenden'}
                </button>
              </div>

              {submitStatus === 'success' && (
                <div className="p-4 bg-green-100 text-green-700 rounded-md">
                  <p className="font-medium">Vielen Dank für Ihre Nachricht!</p>
                  <p>Wir werden uns so schnell wie möglich bei Ihnen melden.</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-100 text-red-700 rounded-md">
                  <p className="font-medium">Es ist ein Fehler aufgetreten.</p>
                  <p>
                    Bitte versuchen Sie es später noch einmal oder kontaktieren Sie uns telefonisch.
                  </p>
                </div>
              )}
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
          <h2 className="headline2 text-center mb-10 text-primary font-sour-gummy">Standort</h2>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-3/5 w-full">
                <div className="h-80 rounded-lg overflow-hidden shadow-md">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2695.8066014845847!2d8.599349976526055!3d47.5766069718048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47907b7d7107f8dd%3A0x3a1afd03a55b7a7d!2sHauptstrasse%2C%208416%20Flaach%2C%20Switzerland!5e0!3m2!1sen!2sbr!4v1688561234567!5m2!1sen!2sbr"
                    width="100%"
                    height="100%"
                    className="maps-iframe"
                    allowFullScreen={true}
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Karte zu AmanluxDog in Flaach"
                  ></iframe>
                </div>
              </div>
              <div className="md:w-2/5 w-full">
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
                    <span className="text-lg">Hauptstrasse, 8416 Flaach</span>
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
        </div>
      </motion.section>
    </>
  );
};

export default HundebetreuungPage;
