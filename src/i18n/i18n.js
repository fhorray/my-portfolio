import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import ENUS from "./locales/en.json";
import PTBR from "./locales/pt.json";

const resources = {
  pt: { ...PTBR },
  en: { ...ENUS },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "pt",
  // fallbackLng: "en", // Idioma de fallback
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
