import { TranslationSchema } from '../../../types/translations';

/**
 * Traduções comuns em alemão
 */
export const common: Pick<TranslationSchema, 'header' | 'footer' | 'notFound'> = {
  header: {
    home: 'Home',
    services: 'Dienstleistungen',
    about: 'Über Uns',
    partnership: 'Partnerschaft',
    contact: 'Kontakt',
    bookNow: 'Jetzt Buchen',
    everyday: 'Täglich',
  },
  footer: {
    weekdays: 'Montag bis Freitag',
    weekends: 'Samstag und Sonntag',
    quickLinks: 'Schnelllinks',
    followUs: 'Folgen Sie uns',
    privacy: 'Datenschutz',
    terms: 'Nutzungsbedingungen',
    newsletter: 'Newsletter',
    newsletterText: 'Erhalten Sie exklusive Tipps und Neuigkeiten zur Hundepflege!',
    emailPlaceholder: 'Ihre E-Mail',
    subscribe: 'Abonnieren',
    subscribeSuccess: 'Anmeldung erfolgreich!',
    rights: 'Alle Rechte vorbehalten.',
  },
  notFound: {
    title: 'Seite nicht gefunden',
    message: 'Die gesuchte Seite existiert nicht.',
    backHome: 'Zurück zur Startseite',
  },
};
