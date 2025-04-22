// Tipos relacionados a traduções

// Interfaces específicas para cada seção
export interface HeroSection {
  headline: string;
  subtitle: string;
  primaryCTA: string;
  secondaryCTA?: string;
  image?: string;
}

export interface AdvantagesSection {
  title: string;
  subtitle?: string;
  stories: { title: string; description: string };
  years: { title: string; description: string };
  space: { title: string; description: string };
  attention: { title: string; description: string };
}

export interface ServiceItemDetail {
  title: string;
  description: string;
  hours?: string;
  attention?: string;
  comfort?: string;
  care?: string;
  coverage?: string;
  notAvailable?: string;
  locationHint?: string;
  button?: string;
}

export interface TrainingServiceItemDetail {
  title: string;
  description: string;
  level?: string;
  focus?: string;
  duration?: string;
  format?: string;
  methodology?: string;
  button?: string;
}

export interface ServicesSection {
  title: string;
  heroTitle?: string;
  heroDescription?: string;
  careTab?: string;
  trainingTab?: string;
  learnMore?: string;
  bookNow?: string;
  inquireNow?: string;
  contactPrice?: string;
  customPlans?: string;
  perDay?: string;
  included?: string;
  consultationTitle?: string;
  consultationDescription?: string;
  consultationButton?: string;
  consultationPricing?: string;
  contactTitle?: string;
  contactDescription?: string;
  contactButton?: string;
  contactViewFaq?: string;
  daycare: ServiceItemDetail;
  hotel: ServiceItemDetail;
  taxi: ServiceItemDetail & { notAvailable?: string };
  training: TrainingServiceItemDetail;
  grooming?: ServiceItemDetail;
}

export interface AboutSection {
  title: string;
  subtitle?: string;
  description: string | string[];
  button?: string;
  team?: {
    title: string;
    description?: string;
  };
}

export interface TeamMember {
  name: string;
  role: string;
  description?: string;
  image?: string;
}

export interface TeamSection {
  title: string;
  subtitle?: string;
  button?: string;
  ceo?: TeamMember;
  manager?: TeamMember;
  trainer?: TeamMember;
  member1?: TeamMember;
  member2?: TeamMember;
  member3?: TeamMember;
  member4?: TeamMember;
}

export interface TestimonialsSection {
  title: string;
  subtitle?: string;
  badge?: string;
  items: Array<{
    text: string;
    name: string;
    pet: string;
    image?: string;
  }>;
}

export interface GallerySection {
  title: string;
  description?: string;
  sectionSubtitle?: string;
  viewImage?: string;
  viewAll?: string;
  instagram?: string;
  images?: Array<{
    src: string;
    alt: string;
    caption?: string;
  }>;
}

export interface FAQSection {
  title: string;
  subtitle?: string;
  items: Array<{
    question: string;
    answer: string;
  }>;
}

export interface ContactSection {
  title: string;
  subtitle?: string;
  address?: string;
  phone?: string;
  email?: string;
  formTitle?: string;
  formSubtitle?: string;
  requiredFields?: string;
  name?: string;
  dogCount?: string;
  dogCountOptions?: string[];
  dogSize?: string;
  dogSizeOptions?: string[];
  service?: string;
  serviceOptions?: string[];
  message?: string;
  submit?: string;
  promise?: string;
  or?: string;
  formFields?: {
    name: string;
    email: string;
    phone?: string;
    message: string;
    submit: string;
  };
  successMessage?: string;
  errorMessage?: string;
}

export interface LocationSection {
  title: string;
  subtitle?: string;
  address: string;
  directions?: string[];
  taxiDescription?: string;
  publicTransport?: string[];
  mapTitle?: string;
}

export interface PartnershipSection {
  title: string;
  subtitle?: string;
  description: string[];
  benefits?: string[];
  cta?: string;
}

export interface ServicePageSection {
  intro: {
    p1: string;
    p2: string;
    p3: string;
  };
  pricing: Record<string, string>;
  [key: string]: unknown;
}

// Define a estrutura para cada seção de traduções
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

  // 404 Not found page
  notFound?: {
    title: string;
    message: string;
    backHome: string;
  };

  // Seções específicas
  hero?: HeroSection;
  advantages?: AdvantagesSection;
  services?: ServicesSection;
  about?: AboutSection;
  team?: TeamSection;
  testimonials?: TestimonialsSection;
  gallery?: GallerySection;
  faq?: FAQSection;
  contact?: ContactSection;
  location?: LocationSection;
  partnership?: PartnershipSection;
  hundebetreuungPage?: ServicePageSection;
  hundetrainingPage?: ServicePageSection;
}
