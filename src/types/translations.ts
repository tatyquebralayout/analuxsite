// Tipos relacionados a traduções

// Interfaces específicas para cada seção
export interface HeroSection {
  headline: string;
  subtitle: string;
  primaryCTA: string;
  secondaryCTA?: string;
  imageAlt?: string;
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
  heroTitle?: string;
  heroSubtitle?: string;
  heroPrimaryCTA?: string;
  heroSecondaryCTA?: string;
  aboutSectionTitle?: string;
  history?: { title: string; description: string | string[]; };
  founders?: { title: string; description: string | string[]; };
  philosophy?: { title: string; description: string | string[]; };
  mission?: { title: string; description: string | string[]; };
  values?: { title: string; description: string | string[]; };
  methodology?: { title: string; description: string | string[]; };
  teamTitle?: string;
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
    photo?: string;
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
  requiredFields: string;
  description?: string;
  name: string;
  phone: string;
  email: string;
  message?: string;
  dogCount: string;
  dogSize: string;
  service: string;
  submit: string;
  promise: string;
  or: string;
  successMessage: string;
  dogCountOptions?: string[];
  dogSizeOptions?: string[];
  serviceOptions?: string[];
  small?: string;
  medium?: string;
  large?: string;
  smallDog?: string;
  largeDog?: string;
  daycare?: string;
  boarding?: string;
  training?: string;
  other?: string;
  sending?: string;
  successTitle?: string;
  sendAnother?: string;
  selectPlaceholder?: string;
  dogCountOption1?: string;
  dogCountOption2?: string;
  dogCountOption3Plus?: string;
  smallDogFull?: string;
  largeDogFull?: string;
  validationError?: string;
  errorMessage?: string;
  emailFormatError?: string;
  phoneFormatError?: string;
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
  phone?: string;
  email?: string;
  hours?: string;
  mapError?: string;
}

export interface PartnershipSection {
  title: string;
  subtitle?: string;
  description: string[] | string;
  benefits?: string[];
  cta?: string;
  sectionTitle?: string;
  sectionDescription?: string;
}

export interface ServiceSectionDetail {
  title: string;
  description: string | string[];
}

export interface PriceItem {
  title: string;
  price: string;
  details: string[];
  unit?: string;
  vatInfo?: string;
}

export interface ServicePageSection {
  intro?: {
    p1: string;
    p2: string;
    p3: string;
  };
  daycare?: ServiceSectionDetail;
  boarding?: ServiceSectionDetail;
  taxi?: ServiceSectionDetail & { note?: string; noteTitle?: string; };
  prices?: {
    title: string;
    daycare?: PriceItem;
    boarding?: PriceItem;
    taxi?: PriceItem;
  };
  galleryTitle?: string;
  hero?: {
    title: string;
    subtitle: string;
  };
  introductionTitle?: string;
  [key: string]: unknown;
}

export interface QuickServicesSection {
  daycare: {
    title: string;
    description: string;
    button: string;
  };
  boarding: {
    title: string;
    description: string;
    button: string;
  };
  training: {
    title: string;
    description: string;
    button: string;
  };
}

export interface VideoHighlightSection {
  title: string;
  subtitle: string;
  items: Array<{ text: string }>;
  bottomTitle: string;
  bottomSubtitle: string;
  button: string;
}

export interface FooterSection {
  quickLinks?: string;
  followUs?: string;
  rights?: string;
  privacy?: string;
  terms?: string;
  newsletter?: string;
  newsletterText?: string;
  emailPlaceholder?: string;
  subscribe?: string;
  subscribeSuccess?: string;
  mapSectionTitle?: string;
  instagramAriaLabel?: string;
  facebookAriaLabel?: string;
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
    partnership?: string;
    everyday?: string;
    phone?: string;
    email?: string;
    address?: string;
    hours?: string;
    siteTitle?: string;
  };
  footer?: FooterSection;
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
  quickServices?: QuickServicesSection;
  videoHighlight?: VideoHighlightSection;
}
