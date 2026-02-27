import type { JSX } from '@ktjs/core';
import type { KTReactive } from '@ktjs/core';
import type { ChangeHandler } from '../../common/handler.js';
import type { KTMaybeReactive, KTMuiProps } from '../../types/component.js';

export type InputTypes = 'text' | 'password' | 'email' | 'number' | 'tel' | 'url';

export interface KTMuiTextFieldProps<T extends InputTypes = 'text'> extends KTMuiProps {
  /**
   * Two-way binding for the input value
   */
  'k-model'?: T extends 'number' ? KTReactive<number> : KTReactive<string>;

  /**
   * Label text for the input field
   */
  label?: KTMaybeReactive<string>;

  /**
   * Placeholder text for the input field
   */
  placeholder?: KTMaybeReactive<string>;

  /**
   * Current value of the input field
   * - If both `value` and `k-model` are provided, `k-model` takes precedence
   */
  value?: any;

  /**
   * Type of the input field
   */
  type?: KTMaybeReactive<T>;

  /**
   * Whether the input is disabled
   */
  disabled?: KTMaybeReactive<boolean>;

  /**
   * Whether the input is readonly
   *
   * __Note:__ The correct prop name is `readOnly` with a capital "O". Same as it is in DOM.
   */
  readOnly?: KTMaybeReactive<boolean>;

  /**
   * Whether the input is required
   */
  required?: KTMaybeReactive<boolean>;

  /**
   * Whether the input is in error state
   */
  error?: KTMaybeReactive<boolean>;

  /**
   * Helper text displayed below the input
   */
  helperText?: KTMaybeReactive<string>;

  /**
   * Whether the input should take full width
   */
  fullWidth?: KTMaybeReactive<boolean>;

  /**
   * Whether the input is multiline (textarea)
   * - Not reactive
   */
  multiline?: boolean;

  /**
   * Number of rows for multiline input
   */
  rows?: KTMaybeReactive<number>;

  /**
   * Size of the input field
   */
  size?: 'small' | 'medium' | KTReactive<'small' | 'medium'>;

  'on:input'?: ChangeHandler<T extends 'number' ? number : T extends 'date' ? Date : string>;
  'on:change'?: ChangeHandler<T extends 'number' ? number : T extends 'date' ? Date : string>;
  'on:blur'?: () => void;
  'on:focus'?: () => void;
}

export type KTMuiTextField = JSX.Element;
