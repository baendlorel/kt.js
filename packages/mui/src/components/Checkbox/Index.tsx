import { KTRef, KTHTMLElement } from '@ktjs/core';
import './Checkbox.css';
import { generateHandler } from '../../common/handler.js';

interface CheckboxProps {
  value: string;
  label?: string | KTHTMLElement | HTMLElement;
  checked?: boolean;
  size?: 'small' | 'medium';
  'kt:change'?: ((checked: boolean, value: string) => void) | KTRef<boolean>;
  disabled?: boolean;
  color?: 'primary' | 'secondary' | 'default' | 'success' | 'error' | 'warning';
  indeterminate?: boolean;
}

const emptyFn = () => {};

type KTMuiCheckbox = KTHTMLElement & {
  checked: boolean;
  value: string;
  disabled: boolean;
};

type KTMuiCheckboxGroup = KTHTMLElement & {
  value: string[];
  disabled: boolean[];
  disableAll: () => void;
  enableAll: () => void;
};

/**
 * Checkbox component - mimics MUI Checkbox appearance and behavior
 */
export function Checkbox(props: CheckboxProps): KTMuiCheckbox {
  const toggleIcon = (checked: boolean, indeterminate: boolean) => {
    if (indeterminate) {
      uncheckedIcon.style.display = 'none';
      checkedIcon.style.display = 'none';
      indeterminateIcon.style.display = '';
    } else {
      uncheckedIcon.style.display = checked ? 'none' : '';
      checkedIcon.style.display = checked ? '' : 'none';
      indeterminateIcon.style.display = 'none';
    }
  };

  // Handle change
  const handleChange = () => {
    if (disabled) {
      return;
    }
    checked = inputEl.checked;
    indeterminate = false;
    toggleIcon(checked, indeterminate);
    onChange(checked, value);
  };

  let {
    checked = false,
    value = '',
    label = '',
    size = 'medium',
    disabled = false,
    color = 'primary',
    indeterminate = false,
  } = props;
  const onChange = generateHandler<boolean>(props, 'kt:change');

  const inputEl = (
    <input
      type="checkbox"
      class="mui-checkbox-input"
      checked={checked}
      value={value}
      disabled={disabled}
      on:change={handleChange}
    />
  ) as KTHTMLElement<HTMLInputElement>;

  // Unchecked icon
  const uncheckedIcon = (
    <span class="mui-checkbox-icon-unchecked">
      <svg viewBox="0 0 24 24">
        <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
      </svg>
    </span>
  );

  // Checked icon
  const checkedIcon = (
    <span class="mui-checkbox-icon-checked">
      <svg viewBox="0 0 24 24">
        <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
      </svg>
    </span>
  );

  // Indeterminate icon
  const indeterminateIcon = (
    <span class="mui-checkbox-icon-indeterminate">
      <svg viewBox="0 0 24 24">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"></path>
      </svg>
    </span>
  );

  // Initialize icon state
  toggleIcon(checked, indeterminate);

  const container = (
    <label
      class={`mui-checkbox-wrapper mui-checkbox-size-${size} ${disabled ? 'mui-checkbox-disabled' : ''} mui-checkbox-color-${color}`}
    >
      {inputEl}
      <span class="mui-checkbox-icon">
        {uncheckedIcon}
        {checkedIcon}
        {indeterminateIcon}
      </span>
      <span k-if={label} class="mui-checkbox-label">
        {label}
      </span>
    </label>
  ) as KTMuiCheckbox;

  Object.defineProperties(container, {
    checked: {
      get() {
        return checked;
      },
      set(newChecked: boolean) {
        checked = newChecked;
        indeterminate = false;
        inputEl.checked = checked;
        toggleIcon(checked, indeterminate);
      },
    },
    value: {
      get() {
        return value;
      },
      set(newValue: string) {
        value = newValue;
        inputEl.value = value;
      },
    },
    disabled: {
      get() {
        return disabled;
      },
      set(newDisabled) {
        disabled = Boolean(newDisabled);
        inputEl.disabled = disabled;
        container.classList.toggle('mui-checkbox-disabled', disabled);
      },
    },
  });

  return container;
}

interface CheckboxGroupProps {
  class?: string;
  style?: string;
  value?: string[];
  size?: 'small' | 'medium';
  options: CheckboxProps[];
  'kt:change'?: ((values: string[]) => void) | KTRef<string[]>;
  row?: boolean;
}

/**
 * CheckboxGroup component - groups multiple checkboxes together
 */
export function CheckboxGroup(props: CheckboxGroupProps): KTMuiCheckboxGroup {
  let { value = [], size = 'medium', row = false } = props;
  const onChange = generateHandler<string[]>(props, 'kt:change');

  let selectedValues = new Set(value);

  const changeHandler = (checked: boolean, checkboxValue: string) => {
    if (checked) {
      selectedValues.add(checkboxValue);
    } else {
      selectedValues.delete(checkboxValue);
    }
    onChange(Array.from(selectedValues));
  };

  const checkboxes = props.options.map((o) => {
    o.size = size;
    o.checked = selectedValues.has(o.value);

    const originalChange = generateHandler<boolean>(o, 'kt:change');
    if (originalChange) {
      o['kt:change'] = (checked: boolean, value: string) => {
        originalChange(checked, value);
        changeHandler(checked, value);
      };
    } else {
      o['kt:change'] = changeHandler;
    }
    return Checkbox(o);
  });

  const container = (
    <div
      class={`mui-checkbox-group ${row ? 'mui-checkbox-group-row' : ''} ${props.class ? props.class : ''}`}
      style={props.style ? props.style : ''}
      role="group"
    >
      {checkboxes}
    </div>
  ) as KTMuiCheckboxGroup;

  Object.defineProperties(container, {
    value: {
      get() {
        return Array.from(selectedValues);
      },
      set(newValues: string[]) {
        selectedValues = new Set(newValues);
        for (let i = 0; i < checkboxes.length; i++) {
          const checkbox = checkboxes[i];
          checkbox.checked = selectedValues.has(checkbox.value);
        }
      },
    },
    disabled: {
      get() {
        return checkboxes.map((cb) => cb.disabled);
      },
      set(newDisabled: boolean[]) {
        for (let i = 0; i < checkboxes.length; i++) {
          const checkbox = checkboxes[i];
          checkbox.disabled = Boolean(newDisabled);
        }
      },
    },
    disableAll: {
      value: () => {
        for (let i = 0; i < checkboxes.length; i++) {
          checkboxes[i].disabled = true;
        }
      },
    },
    enableAll: {
      value: () => {
        for (let i = 0; i < checkboxes.length; i++) {
          checkboxes[i].disabled = false;
        }
      },
    },
  });

  return container;
}
