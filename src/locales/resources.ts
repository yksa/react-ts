import { Language } from "@/config/languages";
import en from "./en.json";
import my from "./my.json";
import th from "./th.json";
import zh from "./zh.json";

export const resources = {
  [Language.EN]: { translation: en },
  [Language.MY]: { translation: my },
  [Language.TH]: { translation: th },
  [Language.ZH]: { translation: zh },
};
