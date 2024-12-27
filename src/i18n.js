import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// load resource translasi file dari backend server
import BackEnd from "i18next-http-backend";

// untuk deteksi bahasa yang digunakan pada browser berdasarkan local storage dll.
import LanguageDetector from "i18next-browser-languagedetector";

const currentHost = window.location.origin;
console.log(currentHost);

const getCurrentHost = currentHost;

i18n
  .use(BackEnd)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "id",
    detection: {
      order: ["path", "localStorage", "htmlTag", "cookie"],
      caches: ["localStorage", "cookie"],
      lookupLocalStorage: "i18nextLng",
    },
    backend: {
      // Use the dynamically determined host for loading translation files
      loadPath: `${getCurrentHost}/i18n/{{lng}}.json`, // Path to fetch translation files from
    },
  });
