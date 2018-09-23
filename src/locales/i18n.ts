import I18n from "react-native-i18n";
//import ReactNative from "react-native"
// Import all locales
const en = require("./en.json");
const fr = require("./fr.json");

// Si locale n'existe pas on retourne sur anglais
I18n.fallbacks = true;

// Les langues supportées
I18n.translations = {
  en,
  fr
};

/*
const currentLocale = I18n.currentLocale();

// Is it a RTL language?
export const isRTL = currentLocale.indexOf('he') === 0 || currentLocale.indexOf('ar') === 0;

// Allow RTL alignment in RTL languages
ReactNative.I18nManager.allowRTL(isRTL);
*/
// Méthode que l'on appelera pour avoir la traduction
export function translate(name: string, params?: any): string {
  return I18n.t(name, params);
}

export default I18n;
