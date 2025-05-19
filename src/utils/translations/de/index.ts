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
  // Aqui seriam adicionadas outras seções específicas
};

export default de;
