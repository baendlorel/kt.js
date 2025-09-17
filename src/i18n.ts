import { yukaEvent } from './event-bus';
import { I18NConfig, LanguageType, LanguageTypes } from './types';

const UI_LANGUAGE = 'UI_LANGUAGE';
const DEFAULT_LANGUAGE = 'zh' as LanguageType;

export const i18n = {
  get locale() {
    return (localStorage.getItem(UI_LANGUAGE) || DEFAULT_LANGUAGE) as LanguageType;
  },

  set locale(lang: LanguageType) {
    if (typeof lang !== 'string') {
      throw new Error('[Yuka:i18n.set locale] lang must be a string');
    }

    if (!LanguageTypes.includes(lang)) {
      console.warn(
        `[Yuka:i18n.set locale] lang '${lang}' is not in [${LanguageTypes.join()}], use default '${DEFAULT_LANGUAGE} instead.'`
      );
      lang = DEFAULT_LANGUAGE;
    }

    localStorage.setItem(UI_LANGUAGE, lang);

    yukaEvent.emitI18NUpdated();
  },

  get: (i18nConfig: I18NConfig) => {
    if (i18n.valid(i18nConfig)) {
      return i18nConfig[i18n.locale] || '';
    }
    console.error('[Yuka:i18n.get] i18nConfig is invalid:', i18nConfig);
    return '[Error i18nConfig]';
  },

  valid: (i18nConfig: any) => {
    if (typeof i18nConfig !== 'object' || !i18nConfig) {
      return false;
    }

    // 只要有一个配置符合条件就可以
    for (const key of LanguageTypes) {
      if (typeof i18nConfig[key] === 'string') {
        return true;
      }
    }

    return false;
  },
};
