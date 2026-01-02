import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import TranslateRu from '../langs/ru.json';
import TranslateEn from '../langs/en.json';
import TranslateRo from '../langs/en.json';

export const translations = {
  ru: { translation: TranslateRu },
  en: { translation: TranslateEn },
  ro: { translation: TranslateRo }
};

i18n.use(initReactI18next).init({
  resources: translations,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
});

export const $t = i18n.t as typeof i18n.t;
