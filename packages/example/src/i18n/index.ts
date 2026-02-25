import { dictionaries, localeOptions, localeStorageKey, resolveLocale, type I18nKey, type Locale } from './dict.js';

const getTemplate = (locale: Locale, key: I18nKey): string => {
  return dictionaries[locale][key] ?? key;
};

export const getLocale = (): Locale => resolveLocale();

export const i18n = (key: I18nKey, ...replacements: Array<string | number>): string => {
  const template = getTemplate(resolveLocale(), key);
  let result = template;
  for (let i = 0; i < replacements.length; i++) {
    result = result.replace(`{{${i}}}`, String(replacements[i]));
  }
  return result;
};

export const setLocale = (locale: Locale) => {
  if (typeof window === 'undefined') {
    return;
  }

  if (resolveLocale() === locale) {
    return;
  }

  window.localStorage.setItem(localeStorageKey, locale);
  const url = new URL(window.location.href);
  url.searchParams.set('lang', locale);
  window.location.assign(url.toString());
};

export { localeOptions, type Locale };
