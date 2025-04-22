import { TranslationSchema } from '../../../types/translations';

/**
 * Traduções específicas de páginas em alemão
 */
export const pages: Pick<TranslationSchema, 'hundebetreuungPage' | 'hundetrainingPage'> = {
  hundebetreuungPage: {
    intro: {
      p1: 'Bei uns kann sich Ihr Hund frei bewegen, spielen und interagieren...',
      p2: 'Unsere Hundebetreuer sorgen für liebevolle Aufmerksamkeit...',
      p3: 'Alle Hunde werden nach Größe, Alter und Temperament gruppiert...',
    },
    pricing: {
      title: 'Preise',
      daycareTitle: 'Tagespreis für Hundebetreuung',
      pricePerDay: '87 CHF',
      vatInfo: 'zzgl. MwSt.',
      pickupInfoTitle: 'Abholservice',
      pickupLine1: 'Morgens zwischen 06:30 und 09:00 Uhr',
      pickupLine2: 'Abends zwischen 16:00 und 18:30 Uhr',
      pickupLine3: 'Am Freitag bis 19:00 Uhr',
      pickupLine4: 'Bei Bedarf zwischen 12:00 und 14:00 Uhr',
      pickupLine5: 'Nach Vereinbarung auch zu anderen Zeiten möglich',
    },
  },
  hundetrainingPage: {
    intro: {
      p1: 'Wir bieten verschiedene Trainingskurse für Hunde jeden Alters...',
      p2: 'Unser Training basiert auf positiver Verstärkung...',
      p3: 'Sie können zwischen Gruppentraining und Einzelstunden wählen...',
    },
    socialTraining: {
      title: 'Sozialisierungstraining',
      detailsTitle: 'Details',
      when: 'Dienstag und Donnerstag, 18:00-19:00 Uhr',
      duration: '60 Minuten',
      location: 'Unser Trainingsgelände in Zürich',
      groups: 'Kleine Gruppen von 4-6 Hunden',
      pricingTitle: 'Preise',
      priceSingle: '45 CHF pro Stunde',
      pricePackage: '200 CHF für 5er-Paket',
      vatInfo: 'zzgl. MwSt.',
    },
  },
};
