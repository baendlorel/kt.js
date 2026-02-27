import type { JSX, KTMaybeReactive } from '@ktjs/core';
import type { KTMuiProps } from '../../types/component.js';

export interface KTMuiCheckboxProps extends Omit<KTMuiProps, 'children'> {
  value?: KTMaybeReactive<string>;
  label?: KTMaybeReactive<string | JSX.Element | HTMLElement>;
  // checked?: KTMaybeReactive<boolean>;
  size?: KTMaybeReactive<'small' | 'medium'>;
  disabled?: KTMaybeReactive<boolean>;
  color?: KTMaybeReactive<'primary' | 'secondary' | 'default' | 'success' | 'error' | 'warning'>;
  indeterminate?: KTMaybeReactive<boolean>;
  'on:change'?: (checked: boolean, value: string) => void;
}

export interface KTMuiCheckboxGroupProps extends Omit<KTMuiProps, 'children'> {
  size?: KTMaybeReactive<'small' | 'medium'>;
  options: KTMaybeReactive<Array<Omit<KTMuiCheckboxProps, 'value'> & { value: string }>>;
  row?: KTMaybeReactive<boolean>;
  'on:change'?: (values: string[]) => void;
}

export type KTMuiCheckbox = JSX.Element & {
  checked: boolean;
  value: string;
  disabled: boolean;
};

export type KTMuiCheckboxGroup = JSX.Element & {};
