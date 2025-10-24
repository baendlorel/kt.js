import { HTMLTag, otherstring } from '@/global.js';
import { HTMLKElement } from './enhance.js';

export type HAlias<T extends HTMLTag> = (
  attr?: KAttribute | string,
  content?: (HTMLKElement | string | undefined)[] | HTMLKElement | string
) => HTMLKElement<T>;

export type RawContent = (HTMLKElement | string | undefined)[] | HTMLKElement | string;
export type RawAttribute = KAttribute | string;

/**
 * Used to create enhanced HTML elements
 */
export interface KAttribute {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [k: string]: any;

  id?: string;

  type?: string;
  for?: string;
  name?: string;
  value?: string;
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
