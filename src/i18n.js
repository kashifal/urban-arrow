// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Retrieve the language from localStorage or use default 'en'
const storedLang = localStorage.getItem('language') || 'en';

i18n
  .use(initReactI18next) // Initializes i18next for React
  .init({
    resources: {
      en: {
        translation: {
          "welcome": "Welcome",
          "hello": "Hello",
        },
      },
      es: {
        translation: {
          "welcome": "Bienvenido",
          "hello": "Hola",
        },
      },
      fr: {
        translation: {
          "welcome": "Bienvenue",
          "hello": "Bonjour",
        },
      },
    },
    lng: storedLang, // Set the initial language from localStorage
    fallbackLng: 'en', // Fallback language
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;
