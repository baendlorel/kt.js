import type { KTHTMLElement } from 'kt.js';

export interface KTMuiRadioProps {
  value: string;
  text: string | KTHTMLElement | HTMLElement;
  checked?: boolean;
  size?: 'small' | 'medium';
  'kt:change'?: (checked: boolean, value: string) => void;
  disabled?: boolean;
  color?: 'primary' | 'secondary' | 'default';
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
