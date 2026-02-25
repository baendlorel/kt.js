import { dict } from './dict.js';

export const i18n = (key: keyof typeof dict, ...replacements: any[]) => {
  dict[key] = dict[key] || key;
  let result: string = dict[key];
  for (let i = 0; i < replacements.length; i++) {
    result = result.replace('{{' + i + '}}', replacements[i]);
  }
  return result;
};
