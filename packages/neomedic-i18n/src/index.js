import { initReactI18next } from 'react-i18next';

import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import { dashboard_BR } from './locales/pt_BR';
import { dashboard_US } from './locales/en_US';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: 'pt_BR',
    fallbackLng: 'pt_BR',

    resources: {
      'pt_BR': {
        dash: dashboard_BR,
      },
      'en_US': {
        dash: dashboard_US,
      },
    },

    // keySeparator: false,

    // react: {
    //   useSuspense: false,
    // },

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
