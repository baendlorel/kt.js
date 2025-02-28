export const LanguageTypes = ['zh', 'en'] as const;

export type LanguageType = (typeof LanguageTypes)[number];

export type I18NConfig = Partial<{ [key in LanguageType]: string }>;

export type HTMLElementType = HTMLElementTagNameMap[keyof HTMLElementTagNameMap];

export type HTMLInputElementType =
  | 'button'
  | 'checkbox'
  | 'color'
  | 'date'
  | 'email'
  | 'file'
  | 'hidden'
  | 'image'
  | 'month'
  | 'number'
  | 'password'
  | 'radio'
  | 'range'
  | 'reset'
  | 'search'
  | 'submit'
  | 'tel'
  | 'text'
  | 'time'
  | 'url'
  | 'week';
