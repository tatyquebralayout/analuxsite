import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import translationDE from './utils/translations/de';

// Set resources for German language only
const resources = {
  de: {
    translation: translationDE,
  },
};

// Configurações comuns
const commonConfig = {
  debug: import.meta.env.MODE === 'development',
  fallbackLng: 'de',
  supportedLngs: ['de'],
  interpolation: {
    escapeValue: false,
  },
  resources: resources,
};

// Inicialização com verificação de ambiente
if (typeof window !== 'undefined') {
  // No cliente (browser), usa o detector de idioma, mas ele sempre resolverá para 'de' ou fallback
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
