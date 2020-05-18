import { initReactI18next } from 'react-i18next';

import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

import { dashboardUS } from './locales/en_US';
import { dashboardBR } from './locales/pt_BR';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: 'pt_BR',
    fallbackLng: 'pt_BR',

    resources: {
      pt_BR: {
        dash: dashboardBR,
      },
      en_US: {
        dash: dashboardUS,
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
