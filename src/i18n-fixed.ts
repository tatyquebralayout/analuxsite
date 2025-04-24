import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import translationDE from './utils/translations/de.json';
import translationEN from './utils/translations/en.json';

// Set resources for both languages
const resources = {
  de: {
    translation: translationDE,
  },
  en: {
    translation: translationEN,
  },
};

// Inicializa o i18n sem o detector de idioma
i18n.use(initReactI18next).init({
  debug: import.meta.env.MODE === 'development',
  fallbackLng: 'de',
  supportedLngs: ['de', 'en'],
  interpolation: {
    escapeValue: false,
  },
  resources: resources,
});

// Adiciona o detector de idioma somente no cliente
if (typeof window !== 'undefined') {
  i18n.use(LanguageDetector).init({
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
      lookupLocalStorage: 'i18nextLng',
    },
  });
}

export default i18n;
