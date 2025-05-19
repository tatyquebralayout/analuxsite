import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import { Scissors, Heart, Gift } from 'lucide-react';
import SEO from '../components/common/SEO';
import heroImage from '../assets/images/Dogaffair-Bern-5294.png';

const PartnershipPage: React.FC = () => {
  const { t } = useTranslation();
  const { ref: heroRef, inView: heroInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { ref: contentRef, inView: contentInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <>
      <SEO
        title={t('partnership.title', 'Partnership - Amanlux Dog')}
        description={t('partnership.description', 'Become a partner with AmanluxDog.')}
        keywords="dog partnership, Amanlux Dog partners, hundebetreuung partnerschaft"
      />

      {/* Hero Section - Image Only */}
      <section ref={heroRef} className="relative h-[70vh] overflow-hidden">
        <motion.div
          className="absolute inset-0 w-full h-full"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={heroInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          <img src={heroImage} alt="Dog Partnership Hero" className="w-full h-full object-cover" />
        </motion.div>
      </section>

      {/* Partnership Announcement Section */}
      <section ref={contentRef} className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            className="bg-white rounded-lg shadow-lg p-8 md:p-12"
            initial={{ y: 50, opacity: 0 }}
            animate={contentInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Header */}
            <motion.div
              className="text-center mb-10"
              initial={{ y: 20, opacity: 0 }}
              animate={contentInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2 font-sour-gummy">
                Great news! New partnership for your dog's care
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto my-6"></div>
            </motion.div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-xl font-medium text-gray-700 mb-6">Dear clients,</p>

              <p className="mb-4">
                We are thrilled to share some exciting news with you: we have partnered with
                DogAffair, a company specialized in the grooming and wellbeing of dogs. They offer
                bathing, hair trimming, and comprehensive care services to pamper your beloved pets.
              </p>

              <p className="mb-4">
                This partnership allows us to provide you with more complete and high-quality
                services, ensuring your furry friends receive the attention and care they deserve.
                DogAffair is located right in the heart of Zurich and offers a wide range of
                personalized services.
              </p>

              {/* Services Section */}
              <div className="bg-neutral-50 p-6 rounded-lg my-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <Scissors className="mr-2 text-primary" size={24} />
                  Available Services
                </h3>

                <p className="mb-4">
                  DogAffair provides services that can be booked individually and are tailored based
                  on each dog's characteristics:
                </p>

                <ul className="mb-4 list-disc pl-6">
                  <li className="mb-2">
                    <span className="font-medium">Main Categories:</span> Small, medium, and large
                    dogs.
                  </li>
                  <li className="mb-2">
                    <span className="font-medium">Sublayers:</span> Short-haired, long-haired, and
                    double-coated dogs.
                  </li>
                </ul>

                <p className="font-medium mb-2">Service Options and Add-ons:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li className="mb-2">
                    <span className="font-medium">All-in-One Service:</span> A package tailored to
                    the dog's coat type. For instance, a small short-haired dog includes washing,
                    drying, ear care, paw care, and eye care, but no cutting or undercoat removal.
                  </li>
                  <li className="mb-2">Wash and dry.</li>
                  <li className="mb-2">Wash, dry, and cut.</li>
                  <li className="mb-2">Wash, dry, undercoat removal, and cut.</li>
                  <li className="mb-2">
                    <span className="font-medium">Additional care:</span> Brushing, facial care, eye
                    care, ear care, paw care, undercoat removal, and dental care.
                  </li>
                </ul>

                <p className="italic text-gray-600">
                  Note: Dental care and brushing are standalone services and must always be booked
                  separately.
                </p>
              </div>

              {/* Promotion Section */}
              <div className="bg-primary bg-opacity-10 p-6 rounded-lg my-8 border-l-4 border-primary">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <Gift className="mr-2 text-primary" size={24} />
                  Special Promotion for Our Clients
                </h3>

                <p className="mb-4">
                  By booking through the DogAffair website, you can view their full list of
                  services, prices, and schedule appointments directly online.
                </p>

                <p className="mb-4">
                  Visit their website here:{' '}
                  <a
                    href="https://dogaffair.ch/"
                    className="text-primary font-medium hover:underline"
                  >
                    https://dogaffair.ch/
                  </a>
                </p>

                <p className="font-medium text-primary-dark">
                  Additionally, by using the code{' '}
                  <span className="bg-white px-2 py-1 rounded font-bold">amanluxfriends</span>, you
                  will receive 10% off all services.
                </p>
              </div>

              <p className="mb-4">
                If you have any questions or need more information, don't hesitate to reach out to
                us. We are so grateful for your trust and excited to bring you even more options for
                the wellbeing of your four-legged companions.
              </p>

              <p className="mb-6">Thank you for being part of this new chapter with us!</p>

              <div className="mt-10 text-gray-800">
                <p className="mb-1">Sincerely,</p>
                <p className="font-bold text-primary flex items-center">
                  <Heart className="mr-2" size={18} />
                  Amanlux Dogs
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default PartnershipPage;
