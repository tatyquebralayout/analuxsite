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

// Configurações comuns
const commonConfig = {
  debug: import.meta.env.MODE === 'development',
  fallbackLng: 'de',
  supportedLngs: ['de', 'en'],
  interpolation: {
    escapeValue: false,
  },
  resources: resources,
};

// Inicialização com verificação de ambiente
if (typeof window !== 'undefined') {
  // No cliente (browser), usa o detector de idioma
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      ...commonConfig,
      detection: {
        order: ['localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
        lookupLocalStorage: 'i18nextLng',
      },
    });
} else {
  // Em ambiente SSR, inicializa sem o detector
  i18n.use(initReactI18next).init(commonConfig);
}

export default i18n;
