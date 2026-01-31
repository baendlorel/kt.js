import type { KTRef, KTHTMLElement } from '@ktjs/core';

export interface KTMuiRadioProps {
  class?: string;
  style?: string | Partial<CSSStyleDeclaration>;
  value: string;
  label: string | KTHTMLElement | HTMLElement;
  checked?: boolean;
  size?: 'small' | 'medium';
  'kt:change'?: (checked: boolean, value: string) => void;
  disabled?: boolean;
  color?: 'primary' | 'secondary' | 'default';
}

export interface KTMuiRadioGroupProps {
  class?: string;
  style?: string | Partial<CSSStyleDeclaration>;
  value?: string;
  name?: string;
  size?: 'small' | 'medium';
  options: KTMuiRadioProps[];
  'kt:change'?: ((value: string) => void) | KTRef<string>;
  'kt:click'?: (checked: boolean) => void;
  row?: boolean;
}

export type KTMuiRadio = KTHTMLElement & {
  /**
   * The value of the radio button
   * @readonly
   */
  readonly value: string;

  /**
   * Reactive checked state of the radio button
   */
  checked: boolean;
};
export type KTMuiRadioGroup = KTHTMLElement & {
  /**
   * Reactive checked state of the radio button
   */
  value: string;
};
