import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import commonDE from './utils/translations/de/common.json';
import contactDE from './utils/translations/de.json';
import commonEN from './utils/translations/en/common.json';
import contactEN from './utils/translations/en.json';

// Set resources for both languages and namespaces
const resources = {
  de: {
    common: commonDE,
    contact: contactDE,
  },
  en: {
    common: commonEN,
    contact: contactEN,
  },
};

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    lng: 'de', // Mantém 'de' como idioma inicial se nada for detectado e não houver escolha prévia
    fallbackLng: 'de', // Se o idioma detectado/escolhido não tiver uma tradução, usa 'de'
    debug: process.env.NODE_ENV === 'development',
    supportedLngs: ['de', 'en'],
    ns: ['common', 'contact'],
    defaultNS: 'common',
    interpolation: {
      escapeValue: false,
    },
    resources: resources,
    detection: { // Configuração para o LanguageDetector
      order: ['localStorage', 'navigator', 'htmlTag'], // Ordem de detecção: localStorage primeiro
      lookupLocalStorage: 'i18nextLng', // Nome da chave no localStorage para guardar a escolha do idioma
      caches: ['localStorage'], // Onde guardar a escolha do usuário
    },
  });

export default i18n;
