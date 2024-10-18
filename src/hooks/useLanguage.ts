import { useTranslation } from "react-i18next";
import {
  AVAILABLE_LANGUAGES,
  DEFAULT_LANGUAGE,
  Language,
} from "@/config/languageTypes";

export const useLanguage = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lang: Language) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang); // Persist preference
  };

  return {
    t,
    changeLanguage,
    currentLanguage: i18n.language as Language,
    availableLanguages: AVAILABLE_LANGUAGES,
    defaultLanguage: DEFAULT_LANGUAGE,
  };
};
