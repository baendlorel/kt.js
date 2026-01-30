import { KTRef, createRedrawable, KTHTMLElement } from '@ktjs/core';
import './Input.css';
import { ChangeHandler, generateHandler } from '../common/handler.js';

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
  size?: 'small' | 'medium';
  'kt:input'?: ChangeHandler | KTRef<string>;
  'kt-trim:input'?: ChangeHandler | KTRef<string>;
  'kt:change'?: ChangeHandler | KTRef<string>;
  'kt-trim:change'?: ChangeHandler | KTRef<string>;
  'kt:blur'?: ChangeHandler | KTRef<string>;
  'kt:focus'?: ChangeHandler | KTRef<string>;
}

type KTMuiTextField = KTHTMLElement & {
  value: string;
  label: string;
  placeholder: string;
  type: string;
  disabled: boolean;
  readonly: boolean;
  required: boolean;
  error: boolean;
  helperText: string;
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
    size = 'medium',
  } = props;

  const onInput = generateHandler(props, 'kt:input');
  const onInputTrim = generateHandler(props, 'kt-trim:input');
  const onChange = generateHandler(props, 'kt:change');
  const onChangeTrim = generateHandler(props, 'kt-trim:change');
  const onBlur = generateHandler(props, 'kt:blur');
  const onFocus = generateHandler(props, 'kt:focus');

  let isFocused = false;
  const helperTextEl = <p class="mui-textfield-helper-text">{helperText}</p>;

  // Update container classes
  const updateContainerClass = () => {
    container.className = [
      'mui-textfield-root',
      `mui-textfield-size-${size}`,
      isFocused ? 'mui-textfield-focused' : '',
      error ? 'mui-textfield-error' : '',
      disabled ? 'mui-textfield-disabled' : '',
      fullWidth ? 'mui-textfield-fullwidth' : '',
      label && isFocused && inputEl.value ? 'mui-textfield-has-value' : '',
      label ? '' : 'mui-textfield-no-label',
    ].join(' ');
  };

  const handleInput = (e: Event) => {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement;
    updateContainerClass();
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
    updateContainerClass();
    const target = e.target as HTMLInputElement | HTMLTextAreaElement;
    onFocus(target.value, e);
  };

  const handleBlur = (e: Event) => {
    isFocused = false;
    updateContainerClass();
    const target = e.target as HTMLInputElement | HTMLTextAreaElement;
    onBlur(target.value, e);
  };

  // Create input or textarea element
  // Only show placeholder when label is floating (focused or has value)
  const getPlaceholder = () => (label && !isFocused && !value ? '' : placeholder);

  const inputEl = multiline
    ? ((
        <textarea
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
      ) as KTHTMLElement<HTMLInputElement | HTMLTextAreaElement>)
    : ((
        <input
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
      ) as KTHTMLElement<HTMLInputElement | HTMLTextAreaElement>);

  const wrapperRef = createRedrawable(() => (
    <div class="mui-textfield-wrapper">
      <label k-if={label} class="mui-textfield-label">
        {label}
        {required && <span class="mui-textfield-required">*</span>}
      </label>
      <div class="mui-textfield-input-wrapper">{inputEl}</div>
      <fieldset class="mui-textfield-fieldset">
        <legend k-if={label} class="mui-textfield-legend">
          <span>
            {label}
            {required && '*'}
          </span>
        </legend>
      </fieldset>
    </div>
  ));

  const container = (
    <div class={'mui-textfield-root ' + (props.class ? props.class : '')} style={props.style ? props.style : ''}>
      {wrapperRef}
      {helperTextEl}
    </div>
  ) as KTMuiTextField;

  // Initialize classes
  setTimeout(() => updateContainerClass(), 0);

  Object.defineProperties(container, {
    value: {
      get() {
        return inputEl.value;
      },
      set(newValue: string) {
        inputEl.value = newValue;
        updateContainerClass();
      },
    },
    label: {
      get() {
        return label;
      },
      set(newLabel) {
        label = newLabel;
        wrapperRef.value.redraw(); // label takes too much and should be redrawn
        updateContainerClass();
      },
    },
    placeholder: {
      get() {
        return placeholder;
      },
      set(newPlaceholder) {
        placeholder = newPlaceholder;
        inputEl.placeholder = getPlaceholder();
      },
    },
    type: {
      get() {
        return type;
      },
      set(newType) {
        type = newType || 'text';
        (inputEl as any).type = type;
      },
    },
    disabled: {
      get() {
        return disabled;
      },
      set(val: boolean) {
        disabled = !!val;
        inputEl.disabled = disabled;
        container.classList.toggle('mui-textfield-disabled', disabled);
      },
    },
    readonly: {
      get() {
        return readonly;
      },
      set(val) {
        readonly = Boolean(val);
        inputEl.readOnly = readonly;
      },
    },
    error: {
      get() {
        return error;
      },
      set(val: boolean) {
        error = Boolean(val);
        container.classList.toggle('mui-textfield-error', error);
      },
    },
    helperText: {
      get() {
        return helperText;
      },
      set(text) {
        helperTextEl.textContent = text;
        helperTextEl.style.display = text ? 'block' : 'none';
      },
    },
  });

  return container;
}
