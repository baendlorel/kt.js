import { KTRef, createRedrawable, KTHTMLElement } from '@ktjs/core';
import './Input.css';
import { ChangeHandler, generateHandler } from '../../common/handler.js';

type InputTypes = 'text' | 'password' | 'email' | 'number' | 'tel' | 'url';

interface TextFieldProps<T extends InputTypes> {
  class?: string;
  style?: string;
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

export type KTMuiTextField = KTHTMLElement & {
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
export function TextField<T extends InputTypes>(props: TextFieldProps<T>): KTMuiTextField {
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

  const onInput = generateHandler<string | number>(props, 'kt:input');
  const onInputTrim = generateHandler<string | number>(props, 'kt-trim:input');
  const onChange = generateHandler<string | number>(props, 'kt:change');
  const onChangeTrim = generateHandler<string | number>(props, 'kt-trim:change');
  const onBlur = generateHandler<string | number>(props, 'kt:blur');
  const onFocus = generateHandler<string | number>(props, 'kt:focus');

  const updateContainerClass = () => {
    container.className = [
      'mui-textfield-root',
      `mui-textfield-size-${size}`,
      isFocused ? 'mui-textfield-focused' : '',
      error ? 'mui-textfield-error' : '',
      disabled ? 'mui-textfield-disabled' : '',
      fullWidth ? 'mui-textfield-fullwidth' : '',
      label && inputEl.value ? 'mui-textfield-has-value' : '',
      label ? '' : 'mui-textfield-no-label',
    ].join(' ');
  };

  const handleInput = () => {
    updateContainerClass();

    if (type === 'number') {
      const v = Number(inputEl.value);
      onInput(v);
      onInputTrim(v);
    } else {
      onInput(inputEl.value);
      onInputTrim(inputEl.value.trim());
    }
  };

  const handleChange = () => {
    updateContainerClass();

    if (type === 'number') {
      const v = Number(inputEl.value);
      onChange(v);
      onChangeTrim(v);
    } else {
      onChange(inputEl.value);
      onChangeTrim(inputEl.value.trim());
    }
  };

  const handleFocus = () => {
    isFocused = true;
    updateContainerClass();
    onFocus(inputEl.value);
  };

  const handleBlur = () => {
    isFocused = false;
    updateContainerClass();
    onBlur(inputEl.value);
  };

  const getPlaceholder = () => (label && !isFocused && !value ? '' : placeholder);

  let isFocused = false;
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
          type={type as any}
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
  const helperTextEl = <p class="mui-textfield-helper-text">{helperText}</p>;

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
