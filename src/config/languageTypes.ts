// Enum to ensure only valid language codes are used
export enum Language {
  EN = "en",
  MY = "my",
  TH = "th",
  ZH = "zh",
}

// An array of available languages, useful for rendering dropdowns or lists
export const AVAILABLE_LANGUAGES: Language[] = [
  Language.EN,
  Language.MY,
  Language.TH,
  Language.ZH,
];

// Default language for fallback
export const DEFAULT_LANGUAGE: Language = Language.EN;
