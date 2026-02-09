import { KTReactive } from '@ktjs/core';
import type { KTMuiProps } from '../../types/component.js';

export interface KTMuiRadioProps extends KTMuiProps {
  value: string;
  label: string | JSX.Element | HTMLElement | KTReactive<string | JSX.Element | HTMLElement>;
  checked?: boolean;
  size?: 'small' | 'medium';
  'on:change'?: (checked: boolean, value: string) => void;
  disabled?: boolean;
  color?: 'primary' | 'secondary' | 'default';
}

export interface KTMuiRadioGroupProps extends KTMuiProps {
  value?: string;
  name?: string;
  size?: 'small' | 'medium';
  options: KTMuiRadioProps[];
  'on:change'?: (value: string) => void;
  'on:click'?: (checked: boolean) => void;
  row?: boolean;
}

export type KTMuiRadio = JSX.Element & {
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
export type KTMuiRadioGroup = JSX.Element & {
  /**
   * Reactive checked state of the radio button
   */
  value: string;
};
