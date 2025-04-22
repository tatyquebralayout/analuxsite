// Type definitions for the translation schema

// Define the structure for each section of translations
export interface TranslationSchema {
  // Common elements across pages
  common?: {
    backButton: string;
    readMore: string;
    viewAll: string;
    submit: string;
    loading: string;
  };

  // Header section
  header: {
    home: string;
    services: string;
    about: string;
    partnership: string;
    contact: string;
    bookNow: string;
    everyday: string;
    languages?: string;
    appointments?: string;
    closeMenu?: string;
    openMenu?: string;
    languageSelector?: string;
  };

  // Hero section
  hero: {
    headline: string;
    subtitle: string;
    primaryCTA: string;
    secondaryCTA: string;
  };

  // Advantages section
  advantages?: {
    title: string;
    stories: {
      title: string;
      description: string;
    };
    years: {
      title: string;
      description: string;
    };
    space: {
      title: string;
      description: string;
    };
    attention: {
      title: string;
      description: string;
    };
  };

  // Services section
  services: {
    title: string;
    learnMore: string;
    heroTitle?: string;
    heroDescription?: string;
    careTab?: string;
    trainingTab?: string;
    perDay?: string;
    bookNow?: string;
    inquireNow?: string;
    included?: string;
    notAvailable?: string;
    checkCoverage?: string;
    contactPrice?: string;
    customPlans?: string;
    daycare: {
      title: string;
      description: string;
      fullDescription?: string;
      features?: string[];
      pricing?: string;
      hours?: string;
      attention?: string;
      button?: string;
    };
    hotel: {
      title: string;
      description: string;
      fullDescription?: string;
      features?: string[];
      pricing?: string;
      comfort?: string;
      care?: string;
      button?: string;
    };
    training: {
      title: string;
      description: string;
      fullDescription?: string;
      features?: string[];
      pricing?: string;
      social?: string;
      socialDesc?: string;
      duration?: string;
      groupSize?: string;
      book?: string;
      private?: string;
      privateDesc?: string;
      privateDuration?: string;
      location?: string;
      privatePricing?: string;
      schedule?: string;
      button?: string;
    };
    taxi?: {
      title: string;
      description: string;
      fullDescription?: string;
      features?: string[];
      pricing?: string;
      coverage?: string;
      hours?: string;
      locationHint?: string;
    };
    grooming?: {
      title: string;
      description: string;
      fullDescription?: string;
      features?: string[];
      pricing?: string;
    };
    consultation?: {
      title?: string;
      description?: string;
      pricing?: string;
      schedule?: string;
    };
    contact?: {
      title?: string;
      description?: string;
      contactUs?: string;
      viewFaq?: string;
    };
  };

  // About Us section
  about: {
    title: string;
    description: string;
    button: string;
    mission?: string;
    vision?: string;
    values?: string[];
  };

  // Team section
  team: {
    title: string;
    button: string;
    ceo?: {
      name: string;
      role: string;
      description: string;
    };
    manager?: {
      name: string;
      role: string;
      description: string;
    };
    trainer?: {
      name: string;
      role: string;
      description: string;
    };
    member1?: {
      name: string;
      role: string;
      description: string;
    };
    member2?: {
      name: string;
      role: string;
      description: string;
    };
    member3?: {
      name: string;
      role: string;
      description: string;
    };
    member4?: {
      name: string;
      role: string;
      description: string;
    };
  };

  // Testimonials section
  testimonials?: {
    title: string;
    badge: string;
    items: Array<{
      text: string;
      name: string;
      pet: string;
    }>;
  };

  // Gallery section
  gallery: {
    title: string;
    description?: string;
    viewImage?: string;
    viewAll: string;
    instagram: string;
    sectionTitle?: string;
  };

  // FAQ section
  faq?: {
    title: string;
    viewAll: string;
    items: Array<{
      question: string;
      answer: string;
    }>;
  };

  // Contact section
  contact: {
    title: string;
    name: string;
    phone: string;
    email: string;
    dogCount: string;
    dogSize: string;
    small: string;
    medium: string;
    large: string;
    service: string;
    submit: string;
    promise: string;
    or: string;
    successMessage: string;
    requiredFields?: string;
    dogCountOptions?: string[];
    dogSizeOptions?: string[];
    serviceOptions?: string[];
    message?: string;
  };

  // Location section
  location: {
    title: string;
    address: string;
    taxiArea: string;
    taxiDescription: string;
    parking: string;
    parkingDescription: string;
    city?: string;
    phone?: string;
    email?: string;
    hours?: string;
  };

  // Footer section
  footer: {
    weekdays: string;
    weekends: string;
    quickLinks: string;
    followUs: string;
    privacy: string;
    terms: string;
    newsletter: string;
    newsletterText: string;
    emailPlaceholder: string;
    subscribe: string;
    subscribeSuccess: string;
    rights: string;
  };

  // Partnership page
  partnership?: {
    title: string;
    description: string;
    benefits?: {
      title: string;
      items: string[];
    };
    process?: {
      title: string;
      steps: string[];
    };
    cta: string;
  };

  // 404 Not found page
  notFound?: {
    title: string;
    message: string;
    backHome: string;
  };

  // Hundebetreuung page
  hundebetreuungPage?: {
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
  };

  // Hundetraining page
  hundetrainingPage?: {
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
      descriptionTitle?: string;
      descriptionP1?: string;
      descriptionP2?: string;
      descriptionP3?: string;
      descriptionP4?: string;
      descriptionExamplesTitle?: string;
      descriptionExamples?: string[];
      descriptionP5?: string;
      descriptionP6?: string;
      socialWalkingTitle?: string;
      socialWalkingText?: string;
      socialTrainingDefTitle?: string;
      socialTrainingDefText?: string;
    };
    impulseControl?: {
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
      descriptionTitle?: string;
      descriptionP1?: string;
      descriptionP2?: string;
      descriptionLearningsTitle?: string;
      descriptionLearnings?: string[];
      descriptionGoal?: string;
    };
    leashTraining?: {
      title?: string;
      detailsTitle?: string;
      pricingTitle?: string;
      priceSingle?: string;
      pricePackage?: string;
      vatInfo?: string;
      descriptionTitle?: string;
      descriptionP1?: string;
      descriptionP2?: string;
      descriptionP3?: string;
      descriptionP4?: string;
      descriptionP5?: string;
      trainingDetailsTitle?: string;
      duration?: string;
      participants?: string;
      location?: string;
      stimulusLevel?: string;
      goalTitle?: string;
      goalText?: string;
    };
    privateLesson?: {
      title?: string;
      detailsTitle?: string;
      descriptionP1?: string;
      goal?: string;
      pricingTitle?: string;
      priceSingle?: string;
      pricePackage?: string;
      travelCost?: string;
      closing?: string;
    };
    onlineConsulting?: {
      title?: string;
      detailsTitle?: string;
      descriptionP1?: string;
      descriptionP2?: string;
      descriptionP3?: string;
      descriptionP4?: string;
      descriptionP5?: string;
      pricingTitle?: string;
      priceConsultation?: string;
      travelCost?: string;
    };
  };
}
