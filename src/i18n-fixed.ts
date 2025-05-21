import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// Import LanguageDetector only if needed for client-side detection
// import LanguageDetector from 'i18next-browser-languagedetector';

// Import translations from the translations.ts file and english translations
import { translations } from './utils/translations';
import { en } from './utils/translations/en/index.ts'; // Especificando o caminho completo

// Set resources for German and English languages
const resources = {
  de: {
    translation: translations.de,
  },
  en: {
    translation: en, // Adicionando traduções em inglês
  },
};

// Configurações comuns
const commonConfig = {
  debug: import.meta.env.MODE === 'development',
  // fallbackLng: 'de', // No longer needed as lng is explicitly set
  lng: 'de', // Force German as the initial language
  supportedLngs: ['de', 'en'],
  interpolation: {
    escapeValue: false,
  },
  resources: resources,
};

// Inicialização com verificação de ambiente
if (typeof window !== 'undefined') {
  // No cliente (browser), inicializa sem o detector para forçar o idioma
  i18n
    // .use(LanguageDetector) // Remove LanguageDetector
    .use(initReactI18next)
    .init({
      ...commonConfig,
      // detection: { // Remove detection configuration
      //   order: ['localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
      //   lookupLocalStorage: 'i18nextLng',
      // },
    });
} else {
  // Em ambiente SSR, inicializa sem o detector
  i18n.use(initReactI18next).init(commonConfig);
}

export default i18n;
