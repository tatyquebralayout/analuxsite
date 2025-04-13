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
  };
  
  // Hero section
  hero: {
    headline: string;
    subtitle: string;
    primaryCTA: string;
    secondaryCTA: string;
  };
  
  // Advantages section
  advantages: {
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
    };
    hotel: {
      title: string;
      description: string;
      fullDescription?: string;
      features?: string[];
      pricing?: string;
      comfort?: string;
      care?: string;
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
    };
    taxi: {
      title: string;
      description: string;
      fullDescription?: string;
      features?: string[];
      pricing?: string;
      coverage?: string;
      hours?: string;
    };
    grooming: {
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
    ceo: {
      name: string;
      role: string;
      description: string;
    };
    manager: {
      name: string;
      role: string;
      description: string;
    };
    trainer: {
      name: string;
      role: string;
      description: string;
    };
  };
  
  // Testimonials section
  testimonials: {
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
  };
  
  // FAQ section
  faq: {
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
  };
  
  // Location section
  location: {
    title: string;
    address: string;
    taxiArea: string;
    taxiDescription: string;
    parking: string;
    parkingDescription: string;
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
  partnership: {
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
  notFound: {
    title: string;
    message: string;
    backHome: string;
  };
}