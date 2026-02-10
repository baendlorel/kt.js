import type { KTMuiProps } from '../../types/component.js';

// todo 此处不一样
export interface KTMuiCheckboxProps {
  value?: string;
  label?: string | JSX.Element | HTMLElement;
  checked?: boolean;
  size?: 'small' | 'medium';
  'on:change'?: (checked: boolean, value: string) => void;
  disabled?: boolean;
  color?: 'primary' | 'secondary' | 'default' | 'success' | 'error' | 'warning';
  indeterminate?: boolean;
}

export interface KTMuiCheckboxGroupProps extends KTMuiProps {
  value?: string[];
  size?: 'small' | 'medium';
  options: Array<Omit<KTMuiCheckboxProps, 'value'> & { value: string }>;
  'on:change'?: (values: string[]) => void;
  row?: boolean;
}

export type KTMuiCheckbox = JSX.Element & {
  checked: boolean;
  value: string;
  disabled: boolean;
};

export type KTMuiCheckboxGroup = JSX.Element & {};
