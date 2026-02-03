import type { KTRef } from '@ktjs/core';
import type { ChangeHandler } from '../../common/handler.ts';

export type InputTypes = 'text' | 'password' | 'email' | 'number' | 'tel' | 'url';

export interface KTMuiTextFieldProps<T extends InputTypes = 'text'> {
  /**
   * Two-way binding for the input value
   * - Provide a `KTRef` to make it reactive
   */
  'k-model'?: T extends 'number' ? KTRef<number> : KTRef<string>;

  class?: string;
  style?: string | Partial<CSSStyleDeclaration>;
  /**
   * Label text for the input field
   * - Provide a `KTRef` to make it reactive
   */
  label?: string | KTRef<string>;
  /**
   * Placeholder text for the input field
   * - Provide a `KTRef` to make it reactive
   */
  placeholder?: string | KTRef<string>;
  /**
   * Current value of the input field
   * - Provide a `KTRef` to make it reactive
   * - If both `value` and `k-model` are provided, `k-model` takes precedence
   */
  value?: any;
  /**
   * Type of the input field
   * - Provide a `KTRef` to make it reactive
   */
  type?: T | KTRef<T>;
  /**
   * Whether the input is disabled
   * - Provide a `KTRef` to make it reactive
   */
  disabled?: boolean | KTRef<boolean>;
  /**
   * Whether the input is readonly
   * - Provide a `KTRef` to make it reactive
   */
  readonly?: boolean | KTRef<boolean>;
  /**
   * Whether the input is required
   * - Provide a `KTRef` to make it reactive
   */
  required?: boolean | KTRef<boolean>;
  /**
   * Whether the input is in error state
   * - Provide a `KTRef` to make it reactive
   */
  error?: boolean | KTRef<boolean>;
  /**
   * Helper text displayed below the input
   * - Provide a `KTRef` to make it reactive
   */
  helperText?: string | KTRef<string>;
  /**
   * Whether the input should take full width
   * - Provide a `KTRef` to make it reactive
   */
  fullWidth?: boolean | KTRef<boolean>;
  /**
   * Whether the input is multiline (textarea)
   * - Provide a `KTRef` to make it reactive
   */
  multiline?: boolean | KTRef<boolean>;
  /**
   * Number of rows for multiline input
   * - Provide a `KTRef` to make it reactive
   */
  rows?: number | KTRef<number>;
  /**
   * Size of the input field
   * - Provide a `KTRef` to make it reactive
   */
  size?: 'small' | 'medium' | KTRef<'small' | 'medium'>;
  'kt:input'?: ChangeHandler<T extends 'number' ? number : string>;
  'kt-trim:input'?: ChangeHandler<T extends 'number' ? number : string>;
  'kt:change'?: ChangeHandler<T extends 'number' ? number : string>;
  'kt-trim:change'?: ChangeHandler<T extends 'number' ? number : string>;
  'kt:blur'?: () => void;
  'kt:focus'?: () => void;
}

export type KTMuiTextField = JSX.Element;
