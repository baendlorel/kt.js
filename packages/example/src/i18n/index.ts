import { dict } from './dict.js';

export type I18NContent = DocumentFragment;

export const i18n = (key: keyof typeof dict, ...replacements: Array<any>): I18NContent => {
  const text = dict[key] ?? key;
  const template = text.split(/{{\d+}}/g);
  const result: I18NContent = document.createDocumentFragment();
  for (let i = 0; i < template.length; i++) {
    const textNode = document.createTextNode(template[i]);
    result.appendChild(textNode);
    const r = replacements[i];
    if (r) {
      if (r instanceof Node) {
        result.appendChild(r);
      } else {
        result.appendChild(document.createTextNode(r));
      }
    }
  }
  return result;
};

export const LocaleOptions = [
  { label: 'English', value: 'en' },
  { label: '中文', value: 'zh' },
] as const;
