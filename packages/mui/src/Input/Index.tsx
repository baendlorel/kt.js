import { KTHTMLElement, ref } from 'kt.js';
import './Input.css';

interface TextFieldProps {
  class?: string;
  style?: string;

  label?: string;
  placeholder?: string;
  value?: any;
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url';
  disabled?: boolean;
  readonly?: boolean;
  required?: boolean;
  error?: boolean;
  helperText?: string;
  fullWidth?: boolean;
  multiline?: boolean;
  rows?: number;
  maxRows?: number;
  size?: 'small' | 'medium';
  'kt:input'?: (value: string, event: Event) => void;
  'kt-trim:input'?: (value: string, event: Event) => void;
  'kt:change'?: (value: string, event: Event) => void;
  'kt-trim:change'?: (value: string, event: Event) => void;
  'kt:blur'?: (value: string, event: Event) => void;
  'kt:focus'?: (value: string, event: Event) => void;
}

const noop = () => {};

type KTMuiTextField = KTHTMLElement & {
  value: string;
};

/**
 * TextField component - mimics MUI TextField appearance and behavior
 */
export function TextField(props: TextFieldProps): KTMuiTextField {
  let {
    label = '',
    placeholder = '',
    value = '',
    type = 'text',
    disabled = false,
    readonly = false,
    required = false,
    error = false,
    helperText = '',
    fullWidth = false,
    multiline = false,
    rows = 3,
    maxRows = 10,
    size = 'medium',
    'kt:input': onInput = noop,
    'kt-trim:input': onInputTrim = noop,
    'kt:change': onChange = noop,
    'kt-trim:change': onChangeTrim = noop,
    'kt:blur': onBlur = noop,
    'kt:focus': onFocus = noop,
  } = props;

  let isFocused = false;
  const inputRef = ref<HTMLInputElement | HTMLTextAreaElement>();

  // Update container classes
  const updateClasses = () => {
    container.className = [
      'mui-textfield-root',
      `mui-textfield-size-${size}`,
      isFocused ? 'mui-textfield-focused' : '',
      error ? 'mui-textfield-error' : '',
      disabled ? 'mui-textfield-disabled' : '',
      fullWidth ? 'mui-textfield-fullwidth' : '',
      label && (isFocused || inputRef.value.value) ? 'mui-textfield-has-value' : '',
      label ? '' : 'mui-textfield-no-label',
    ].join(' ');
  };

  const handleInput = (e: Event) => {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement;
    updateClasses();
    onInput(target.value, e);
    onInputTrim(target.value.trim(), e);
  };

  const handleChange = (e: Event) => {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement;
    onChange(target.value, e);
    onChangeTrim(target.value.trim(), e);
  };

  const handleFocus = (e: Event) => {
    isFocused = true;
    updateClasses();
    const target = e.target as HTMLInputElement | HTMLTextAreaElement;
    onFocus(target.value, e);
  };

  const handleBlur = (e: Event) => {
    isFocused = false;
    updateClasses();
    const target = e.target as HTMLInputElement | HTMLTextAreaElement;
    onBlur(target.value, e);
  };

  // Create input or textarea element
  // Only show placeholder when label is floating (focused or has value)
  const getPlaceholder = () => (label && !isFocused && !value ? '' : placeholder);

  const inputElement = multiline ? (
    <textarea
      ref={inputRef}
      class="mui-textfield-input"
      placeholder={getPlaceholder()}
      value={value}
      disabled={disabled}
      readOnly={readonly}
      required={required}
      rows={rows}
      on:input={handleInput}
      on:change={handleChange}
      on:focus={handleFocus}
      on:blur={handleBlur}
    />
  ) : (
    <input
      ref={inputRef}
      type={type}
      class="mui-textfield-input"
      placeholder={getPlaceholder()}
      value={value}
      disabled={disabled}
      readOnly={readonly}
      required={required}
      on:input={handleInput}
      on:change={handleChange}
      on:focus={handleFocus}
      on:blur={handleBlur}
    />
  );

  const container = (
    <div class={'mui-textfield-root ' + (props.class ? props.class : '')} style={props.style ? props.style : ''}>
      <div class="mui-textfield-wrapper">
        <label k-if={label} class="mui-textfield-label">
          {label}
          {required && <span class="mui-textfield-required">*</span>}
        </label>
        <div class="mui-textfield-input-wrapper">{inputElement}</div>
        <fieldset class="mui-textfield-fieldset">
          <legend k-if={label} class="mui-textfield-legend">
            <span>
              {label}
              {required && '*'}
            </span>
          </legend>
        </fieldset>
      </div>
      {helperText && <p class="mui-textfield-helper-text">{helperText}</p>}
    </div>
  ) as KTMuiTextField;

  // Initialize classes
  setTimeout(() => updateClasses(), 0);

  Object.defineProperties(container, {
    value: {
      get() {
        return inputRef.value.value;
      },
      set(newValue: string) {
        inputRef.value.value = newValue;
        updateClasses();
      },
    },
  });

  return container;
}
