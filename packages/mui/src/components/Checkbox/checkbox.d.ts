import type { KTHTMLElement, KTRef } from '@ktjs/core';

export interface KTMuiCheckboxProps {
  value: string;
  label?: string | KTHTMLElement | HTMLElement;
  checked?: boolean;
  size?: 'small' | 'medium';
  'kt:change'?: ((checked: boolean, value: string) => void) | KTRef<boolean>;
  disabled?: boolean;
  color?: 'primary' | 'secondary' | 'default' | 'success' | 'error' | 'warning';
  indeterminate?: boolean;
}

export interface KTMuiCheckboxGroupProps {
  class?: string;
  style?: string;
  value?: string[];
  size?: 'small' | 'medium';
  options: KTMuiCheckboxProps[];
  'kt:change'?: ((values: string[]) => void) | KTRef<string[]>;
  row?: boolean;
}

export type KTMuiCheckbox = KTHTMLElement & {
  checked: boolean;
  value: string;
  disabled: boolean;
};

export type KTMuiCheckboxGroup = KTHTMLElement & {
  value: string[];
  disabled: boolean[];
  disableAll: () => void;
  enableAll: () => void;
};
