import type { KTReactive } from '@ktjs/core';
import type { ChangeHandler } from '../../common/handler.js';
import type { KTMuiProps } from '../../types/component.js';

export type InputTypes = 'text' | 'password' | 'email' | 'number' | 'tel' | 'url';

export interface KTMuiTextFieldProps<T extends InputTypes = 'text'> extends KTMuiProps {
  /**
   * Two-way binding for the input value
   * - Provide a `KTReactive` to make it reactive
   */
  'k-model'?: T extends 'number' ? KTReactive<number> : KTReactive<string>;

  /**
   * Label text for the input field
   * - Provide a `KTReactive` to make it reactive
   */
  label?: string | KTReactive<string>;
  /**
   * Placeholder text for the input field
   * - Provide a `KTReactive` to make it reactive
   */
  placeholder?: string | KTReactive<string>;
  /**
   * Current value of the input field
   * - Provide a `KTReactive` to make it reactive
   * - If both `value` and `k-model` are provided, `k-model` takes precedence
   */
  value?: any;
  /**
   * Type of the input field
   * - Provide a `KTReactive` to make it reactive
   */
  type?: T | KTReactive<T>;
  /**
   * Whether the input is disabled
   * - Provide a `KTReactive` to make it reactive
   */
  disabled?: boolean | KTReactive<boolean>;
  /**
   * Whether the input is readonly
   * - Provide a `KTReactive` to make it reactive
   *
   * __Note:__ The correct prop name is `readOnly` with a capital "O". Same as it is in DOM.
   */
  readOnly?: boolean | KTReactive<boolean>;
  /**
   * Whether the input is required
   * - Provide a `KTReactive` to make it reactive
   */
  required?: boolean | KTReactive<boolean>;
  /**
   * Whether the input is in error state
   * - Provide a `KTReactive` to make it reactive
   */
  error?: boolean | KTReactive<boolean>;
  /**
   * Helper text displayed below the input
   * - Provide a `KTReactive` to make it reactive
   */
  helperText?: string | KTReactive<string>;
  /**
   * Whether the input should take full width
   * - Provide a `KTReactive` to make it reactive
   */
  fullWidth?: boolean | KTReactive<boolean>;
  /**
   * Whether the input is multiline (textarea)
   * - Provide a `KTReactive` to make it reactive
   */
  multiline?: boolean | KTReactive<boolean>;
  /**
   * Number of rows for multiline input
   * - Provide a `KTReactive` to make it reactive
   */
  rows?: number | KTReactive<number>;
  /**
   * Size of the input field
   * - Provide a `KTReactive` to make it reactive
   */
  size?: 'small' | 'medium' | KTReactive<'small' | 'medium'>;
  'on:input'?: ChangeHandler<T extends 'number' ? number : string>;
  'on-trim:input'?: ChangeHandler<T extends 'number' ? number : string>;
  'on:change'?: ChangeHandler<T extends 'number' ? number : string>;
  'on-trim:change'?: ChangeHandler<T extends 'number' ? number : string>;
  'on:blur'?: () => void;
  'on:focus'?: () => void;
}

export type KTMuiTextField = JSX.Element;
