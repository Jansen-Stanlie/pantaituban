import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import id from "./locales/id.json";
import en from "./locales/en.json";

export const LANGUAGES = ["id", "en"];
const STORAGE_KEY = "i18nextLng";

// Render pertama selalu "id" agar cocok dengan HTML prerender.
// Bahasa tersimpan diterapkan setelah hydration lewat restoreLanguage().
i18n.use(initReactI18next).init({
  resources: { id: { translation: id }, en: { translation: en } },
  lng: "id",
  fallbackLng: "id",
  supportedLngs: LANGUAGES,
  initImmediate: false,
  interpolation: { escapeValue: false },
  react: { useSuspense: false },
});

export function restoreLanguage() {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (LANGUAGES.includes(saved) && saved !== i18n.language) {
      i18n.changeLanguage(saved);
    }
  } catch {
    // Storage bisa diblokir browser; bahasa default tetap dipakai.
  }
}

export function setLanguage(lang) {
  i18n.changeLanguage(lang);
  try {
    window.localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    // Pilihan tetap berlaku untuk sesi ini.
  }
}

export default i18n;
