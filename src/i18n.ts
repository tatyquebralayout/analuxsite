import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// import LanguageDetector from 'i18next-browser-languagedetector'; // Removido

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

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  // .use(LanguageDetector) // Removido
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    lng: 'de', // Definido 'de' como idioma padrão explícito
    debug: process.env.NODE_ENV === 'development',
    fallbackLng: 'de',
    supportedLngs: ['de', 'en'],
    interpolation: {
      escapeValue: false,
    },
    resources: resources,
    // detection: { // Seção de detecção removida
    //   order: ['localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
    //   lookupLocalStorage: 'i18nextLng',
    // },
  });

export default i18n;
