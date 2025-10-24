import { HTMLTag, otherstring } from '@/global.js';
import { HTMLKElement } from './enhance.js';

export type HAlias<T extends HTMLTag> = (attr?: RawAttribute, content?: RawContent) => HTMLKElement<T>;
export type RawContent = (HTMLKElement | string | undefined)[] | HTMLKElement | string;
export type RawAttribute = KAttribute | string;

/**
 * Used to create enhanced HTML elements
 */
export interface KAttribute {
  [k: string]: any;

  id?: string;

  type?: string;
  for?: string;
  name?: string;
  value?: string;
  valueAsDate?: Date;
  valueAsNumber?: number;
  label?: string;
  disabled?: string;
  min?: string;
  max?: string;
  selected?: boolean;
  checked?: boolean;
  class?: string;
  style?: string | Partial<CSSStyleDeclaration>;
  action?: string;
  method?: 'POST' | 'GET' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD' | 'OPTIONS' | 'CONNECT' | 'TRACE' | otherstring;
}
