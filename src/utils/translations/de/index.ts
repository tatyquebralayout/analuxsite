import { common } from './common';
import { pages } from './pages';
import { TranslationSchema } from '../../../types/translations';

/**
 * Combinação de todas as traduções em alemão
 */
export const de: Partial<TranslationSchema> = {
  ...common,
  ...pages,
  hero: {
    headline: 'Ein Ort voller Liebe – für Welpen, Erwachsene und Seniorenhunde',
    subtitle: 'Weil Ihr Hund ein Familienmitglied ist – und nur das Beste verdient.',
    primaryCTA: common.header?.bookNow || 'Jetzt Buchen', // Reutilizar CTA existente se possível, ou um fallback
  },
  about: {
    title: 'Über Uns Platzhalter',
    description: 'Platzhalter Beschreibung für Über Uns.',
    serviceHighlights: {
      daycare: {
        title: 'Tagesbetreuung',
        description: 'Platzhalter-Beschreibung für Tagesbetreuung.',
      },
      hotel: {
        title: 'Übernachtung und Wochenende',
        description:
          'Wenn Ihr Hund über Nacht oder am Wochenende bei uns bleibt, kümmern wir uns liebevoll um alles.\nWir stellen bequeme Betten, kuschelige Decken und Spielzeug zur Verfügung – alles, was Ihr Hund für Komfort und Wohlbefinden braucht, ist bereits da.\nSie müssen nichts mitbringen – ausser dem gewohnten Futter Ihres Hundes.\nDenn bei AmanLux Dogs ist für alles gesorgt.',
      },
      training: {
        title: 'Hundetraining',
        description: 'Platzhalter-Beschreibung für Hundetraining.',
      },
      taxi: { title: 'Taxi Dog', description: 'Platzhalter-Beschreibung für Taxi Dog.' },
    },
  },
  // Adicionando traduções para o formulário de contato
  contact: {
    title: 'Kontakt',
    description: 'Wir freuen uns auf Ihre Nachricht. Füllen Sie das Formular aus, und wir werden uns so schnell wie möglich bei Ihnen melden.',
    name: 'Name',
    email: 'Email',
    phone: 'Telefon',
    message: 'Nachricht',
    dogCount: 'Anzahl Hunde',
    dogSize: 'Hundegrösse',
    smallDog: 'Kleiner (bis 10 kg)',
    largeDog: 'Grosse (ab 10 kg)',
    service: 'Dienstleistung',
    daycare: 'Tagesbetreuung',
    boarding: 'Ferienbetreuung',
    training: 'Hundetraining',
    other: 'Andere',
    submit: 'Nachricht senden',
    sending: 'Wird gesendet...',
    successTitle: 'Nachricht gesendet!',
    successMessage: 'Vielen Dank für Ihre Nachricht. Wir werden uns in Kürze bei Ihnen melden.',
    sendAnother: 'Weitere Nachricht senden',
    requiredFields: 'Felder mit * sind Pflichtfelder',
    validationError: 'Bitte füllen Sie alle Pflichtfelder aus.',
    errorMessage: 'Es gab ein Problem beim Senden Ihrer Nachricht. Bitte versuchen Sie es später erneut.',
    emailFormatError: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.',
    phoneFormatError: 'Bitte geben Sie eine gültige deutsche Telefonnummer ein.',
    promise: 'Wir werden uns so schnell wie möglich bei Ihnen melden',
    or: 'oder',
    small: 'Klein',
    medium: 'Mittel',
    large: 'Groß'
  },
  // Aqui seriam adicionadas outras seções específicas
};

export default de;
