import { dict } from './dict.js';

export const i18nText = (key: keyof typeof dict, ...replacements: Array<string | number>): string => {
  let text = dict[key] ?? key;
  for (let i = 0; i < replacements.length; i++) {
    text = text.replace(`{{${i + 1}}}`, String(replacements[i]));
  }
  return text;
};
