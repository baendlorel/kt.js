import type { KTRef } from '@ktjs/core';
import type { ChangeHandler } from '../../common/handler.ts';

export type InputTypes = 'text' | 'password' | 'email' | 'number' | 'tel' | 'url';

export interface KTMuiTextFieldProps<T extends InputTypes = 'text'> {
  /**
   * Two-way binding for the input value
   * - Provide a `KTRef` to make it reactive
   */
  'k-model'?: KTRef<T extends 'number' ? number : string>;

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
   * - Can be get/set directly or bound via `k-model` ref
   */
  value: string;

  /**
   * Reactive `label` of the input field
   * - Can be get/set directly or provided as `KTRef` in props
   */
  label: string;

  /**
   * Reactive `placeholder` of the input field
   * - Can be get/set directly or provided as `KTRef` in props
   */
  placeholder: string;

  /**
   * Reactive `type` of the input field
   * - Can be get/set directly or provided as `KTRef` in props
   */
  type: string;

  /**
   * Reactive `disabled` state of the input field
   * - Can be get/set directly or provided as `KTRef` in props
   */
  disabled: boolean;

  /**
   * Reactive `readonly` state of the input field
   * - Can be get/set directly or provided as `KTRef` in props
   */
  readonly: boolean;

  /**
   * `required` state of the input field
   * - Can be get/set directly or provided as `KTRef` in props
   * @readonly
   */
  readonly required: boolean;

  /**
   * Reactive `error` state of the input field
   * - Can be get/set directly or provided as `KTRef` in props
   */
  error: boolean;

  /**
   * Reactive `helperText` of the input field
   * - Can be get/set directly or provided as `KTRef` in props
   */
  helperText: string;
};
