import type { KTRef } from '@ktjs/core';
import type { ChangeHandler } from '../../common/handler.ts';

export type InputTypes = 'text' | 'password' | 'email' | 'number' | 'tel' | 'url';

export interface KTMuiTextFieldProps<T extends InputTypes = 'text'> {
  'k-model'?: KTRef<T extends 'number' ? number : string>;

  class?: string;
  style?: string | Partial<CSSStyleDeclaration>;
  label?: string;
  placeholder?: string;
  value?: any;
  type?: T;
  disabled?: boolean;
  readonly?: boolean;
  required?: boolean;
  error?: boolean;
  helperText?: string;
  fullWidth?: boolean;
  multiline?: boolean;
  rows?: number;
  size?: 'small' | 'medium';
  'kt:input'?: T extends 'number' ? ChangeHandler<number> | KTRef<number> : ChangeHandler | KTRef<string>;
  'kt-trim:input'?: T extends 'number' ? ChangeHandler<number> | KTRef<number> : ChangeHandler | KTRef<string>;
  'kt:change'?: T extends 'number' ? ChangeHandler<number> | KTRef<number> : ChangeHandler | KTRef<string>;
  'kt-trim:change'?: T extends 'number' ? ChangeHandler<number> | KTRef<number> : ChangeHandler | KTRef<string>;
  'kt:blur'?: () => void;
  'kt:focus'?: () => void;
}

export type KTMuiTextField = JSX.Element & {
  /**
   * Reactive `value` of the input field
   */
  value: string;

  /**
   * Reactive `label` of the input field
   */
  label: string;

  /**
   * Reactive `placeholder` of the input field
   */
  placeholder: string;

  /**
   * Reactive `type` of the input field
   */
  type: string;

  /**
   * Reactive `disabled` state of the input field
   */
  disabled: boolean;

  /**
   * Reactive `readonly` state of the input field
   */
  readonly: boolean;

  /**
   * `required` state of the input field
   * @readonly
   */
  readonly required: boolean;

  /**
   * Reactive `error` state of the input field
   */
  error: boolean;

  /**
   * Reactive `helperText` of the input field
   */
  helperText: string;
};
