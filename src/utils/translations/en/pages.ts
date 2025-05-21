/**
 * Specific page translations in English
 */

interface HundebetreuungPageTranslations {
  intro?: {
    p1?: string;
    p2?: string;
    p3?: string;
  };
  pricing?: {
    title?: string;
    daycareTitle?: string;
    pricePerDay?: string;
    vatInfo?: string;
    pickupInfoTitle?: string;
    pickupLine1?: string;
    pickupLine2?: string;
    pickupLine3?: string;
    pickupLine4?: string;
    pickupLine5?: string;
  };
}

interface HundetrainingPageTranslations {
  intro?: {
    p1?: string;
    p2?: string;
    p3?: string;
  };
  socialTraining?: {
    title?: string;
    detailsTitle?: string;
    when?: string;
    duration?: string;
    location?: string;
    groups?: string;
    pricingTitle?: string;
    priceSingle?: string;
    pricePackage?: string;
    vatInfo?: string;
  };
}

export const pages: {
  hundebetreuungPage?: HundebetreuungPageTranslations;
  hundetrainingPage?: HundetrainingPageTranslations;
} = {
  hundebetreuungPage: {
    intro: {
      p1: 'With us, your dog can move freely, play, and interact...',
      p2: 'Our dog caretakers provide loving attention...',
      p3: 'All dogs are grouped according to size, age, and temperament...',
    },
    pricing: {
      title: 'Prices',
      daycareTitle: 'Daily Price for Dog Care',
      pricePerDay: '87 CHF',
      vatInfo: 'plus VAT',
      pickupInfoTitle: 'Pickup Service',
      pickupLine1: 'Mornings between 06:30 and 09:00',
      pickupLine2: 'Evenings between 16:00 and 18:30',
      pickupLine3: 'On Fridays until 19:00',
      pickupLine4: 'If needed between 12:00 and 14:00',
      pickupLine5: 'Also possible at other times by arrangement',
    },
  },
  hundetrainingPage: {
    intro: {
      p1: 'We offer various training courses for dogs of all ages...',
      p2: 'Our training is based on positive reinforcement...',
      p3: 'You can choose between group training and individual lessons...',
    },
    socialTraining: {
      title: 'Socialization Training',
      detailsTitle: 'Details',
      when: 'Tuesday and Thursday, 18:00-19:00',
      duration: '60 Minutes',
      location: 'Our training area in Zurich',
      groups: 'Small groups of 4-6 dogs',
      pricingTitle: 'Prices',
      priceSingle: '45 CHF per hour',
      pricePackage: '200 CHF for 5-session package',
      vatInfo: 'plus VAT',
    },
  },
}; 