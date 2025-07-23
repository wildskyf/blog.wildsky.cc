import { translations, type Locale } from './translations.ts';

export function getTranslation(locale: Locale) {
  return translations[locale] || translations.tw;
}

export function t(locale: Locale, key: string) {
  const translation = getTranslation(locale);
  const keys = key.split('.');
  let result: any = translation;
  
  for (const k of keys) {
    result = result?.[k];
    if (result === undefined) break;
  }
  
  return result || key;
}