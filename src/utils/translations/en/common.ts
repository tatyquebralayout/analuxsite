/**
 * Types for common translations
 */
interface CommonHeader {
  home?: string;
  services?: string;
  about?: string;
  partnership?: string;
  contact?: string;
  bookNow?: string;
  everyday?: string;
}

interface CommonFooter {
  weekdays?: string;
  weekends?: string;
  quickLinks?: string;
  followUs?: string;
  privacy?: string;
  terms?: string;
  newsletter?: string;
  newsletterText?: string;
  emailPlaceholder?: string;
  subscribe?: string;
  subscribeSuccess?: string;
  rights?: string;
}

interface CommonNotFound {
  title?: string;
  message?: string;
  backHome?: string;
}

/**
 * Common English translations
 */
export const common: {
  header?: CommonHeader;
  footer?: CommonFooter;
  notFound?: CommonNotFound;
} = {
  header: {
    home: 'Home',
    services: 'Services',
    about: 'About Us',
    partnership: 'Partnership',
    contact: 'Contact',
    bookNow: 'Book Now',
    everyday: 'Everyday',
  },
  footer: {
    weekdays: 'Monday to Friday',
    weekends: 'Saturday and Sunday',
    quickLinks: 'Quick Links',
    followUs: 'Follow Us',
    privacy: 'Privacy Policy',
    terms: 'Terms of Use',
    newsletter: 'Newsletter',
    newsletterText: 'Receive exclusive tips and news about dog care!',
    emailPlaceholder: 'Your Email',
    subscribe: 'Subscribe',
    subscribeSuccess: 'Subscription successful!',
    rights: 'All rights reserved.',
  },
  notFound: {
    title: 'Page not found',
    message: 'The page you are looking for does not exist.',
    backHome: 'Back to Home',
  },
}; 