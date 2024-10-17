import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { resources } from "./resources";
import { DEFAULT_LANGUAGE } from "@/config/languages";

i18n
  .use(initReactI18next) // Passes i18n instance to react-i18next.
  .init({
    resources,
    lng: localStorage.getItem("language") || DEFAULT_LANGUAGE, // Default language.
    fallbackLng: DEFAULT_LANGUAGE, // Fallback language if translation not found.
    interpolation: {
      escapeValue: false, // React already escapes values.
    },
  });

export default i18n;
