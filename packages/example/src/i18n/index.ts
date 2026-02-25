import { dict } from './dict.js';

export type I18NContent = DocumentFragment;

export const i18n = (key: keyof typeof dict, ...replacements: Array<any>): I18NContent => {
  const text = dict[key] ?? key;
  const template = text.split(/{{\d+}}/g);
  const result: I18NContent = document.createDocumentFragment();
  for (let i = 0; i < template.length; i++) {
    result.append(template[i]);
    const r = replacements[i];
    if (r) {
      result.append(r);
    }
  }
  return result;
};

export const LocaleOptions = [
  { label: 'English', value: 'en' },
  { label: '中文', value: 'zh' },
] as const;
