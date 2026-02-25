import type { JSX } from '@ktjs/core';
import { dict } from './dict.js';

export type I18NContent = JSX.Element;

export const i18n = (key: keyof typeof dict, ...replacements: Array<any>): I18NContent => {
  let text = dict[key] ?? key;
  for (let i = 0; i < replacements.length; i++) {
    text = text.replace(`{{${i + 1}}}`, String(replacements[i]));
  }
  const nodes = text.split(/(<code>.*?<\/code>)/g).map((part, index) => {
    if (part.startsWith('<code>') && part.endsWith('</code>')) {
      const codeContent = part.slice(6, -7);
      return <code>{codeContent}</code>;
    }
    return part;
  });
  return <>{nodes}</>;
};

export const LocaleOptions = [
  { label: 'English', value: 'en' },
  { label: '中文', value: 'zh' },
] as const;
