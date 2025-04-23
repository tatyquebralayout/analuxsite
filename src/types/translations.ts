// Tipos relacionados a traduções

// Interfaces específicas para cada seção
export interface HeroSection {
  headline: string;
  subtitle: string;
  primaryCTA: string;
}

export interface AdvantagesSection {
  title: string;
  subtitle?: string;
  stories: { title: string; description: string };
  years: { title: string; description: string };
  space: { title: string; description: string };
  attention: { title: string; description: string };
  common?: {
    backButton: string;
    readMore: string;
    viewAll: string;
    submit: string;
    loading: string;
    priceLabel?: string;
    taxInfo?: string;
    learnMore?: string;
  };
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

interface ServiceHighlightItem {
  title: string;
  description: string;
  button?: string;
  locationHint?: string;
}

export interface AboutSection {
  title: string;
  homeSectionTitle?: string;
  subtitle?: string;
  description: string | string[];
  button?: string;
  team?: {
    title: string;
    description?: string;
  };
  serviceHighlights?: {
    daycare: ServiceHighlightItem;
    hotel: ServiceHighlightItem;
    training: ServiceHighlightItem;
    taxi: ServiceHighlightItem;
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
  members: TeamMember[];
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
  viewAll?: string;
  items: Array<{
    question: string;
    answer: string;
  }>;
  small?: string;
  medium?: string;
  large?: string;
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
  taxiArea?: string;
  parking?: string;
  parkingDescription?: string;
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
  header?: {
    home?: string;
    about?: string;
    services?: string;
    contact?: string;
    bookNow?: string;
    languageSelector?: string;
    openMenu?: string;
    closeMenu?: string;
  };
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
