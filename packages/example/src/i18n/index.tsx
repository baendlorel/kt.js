import { dict } from './dict.js';

export type I18NContent = string;

export const t = (key: keyof typeof dict, ...replacements: Array<any>): I18NContent => {
  let text = dict[key] ?? key;
  for (let i = 0; i < replacements.length; i++) {
    text = text.replace(`{{${i + 1}}}`, String(replacements[i]));
  }
  return text;
};

export const LocaleOptions = [
  { label: 'English', value: 'en' },
  { label: '中文', value: 'zh' },
] as const;
