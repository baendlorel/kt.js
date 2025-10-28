import { otherstring } from '@/global.js';

export type RawContent = (HTMLElement | string | undefined)[] | HTMLElement | string;
export type RawAttr = KAttribute | string;

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
