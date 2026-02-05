import { $defines, $emptyFn, parseStyle } from '@ktjs/shared';

import type { KTMuiRadioProps, KTMuiRadio, KTMuiRadioGroup, KTMuiRadioGroupProps } from './radio.js';
import './Radio.css';

/**
 * Radio component - mimics MUI Radio appearance and behavior
 */
export function Radio(props: KTMuiRadioProps): KTMuiRadio {
  const onChange = props['kt:change'] ?? $emptyFn;

  const toggleIcon = (checked: boolean) => {
    uncheckedIcon.style.display = checked ? 'none' : '';
    checkedIcon.style.display = checked ? '' : 'none';
  };

  // Handle change
  const handleChange = () => {
    if (disabled) {
      return;
    }
    checked = input.checked;
    toggleIcon(checked);
    onChange(checked, value);
  };

  let { checked = false, value = '', label: text = '', size = 'small', disabled = false, color = 'primary' } = props;

  const input = (
    <input
      type="radio"
      class="mui-radio-input"
      checked={checked}
      value={value}
      disabled={disabled}
      on:change={handleChange}
    />
  ) as HTMLInputElement;

  const uncheckedIcon = (
    <span class="mui-radio-icon-unchecked">
      <svg viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
      </svg>
    </span>
  );
  const checkedIcon = (
    <span class="mui-radio-icon-checked">
      <svg viewBox="0 0 24 24">
        <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
      </svg>
    </span>
  );

  // initialize icon state
  toggleIcon(checked);

  const container = (
    <label
      class={`mui-radio-wrapper ${props.class ?? ''} mui-radio-size-${size} ${disabled ? 'mui-radio-disabled' : ''} mui-radio-color-${color}`}
      style={parseStyle(props.style)}
    >
      {input}
      <span class="mui-radio-icon">
        {uncheckedIcon}
        {checkedIcon}
      </span>
      <span class="mui-radio-label">{text}</span>
    </label>
  ) as KTMuiRadio;

  $defines(container, {
    value: {
      get() {
        return value;
      },
    },
    checked: {
      get() {
        return checked;
      },
      set(newChecked) {
        checked = newChecked;
        input.checked = checked;
        toggleIcon(checked);
      },
    },
  });

  return container;
}

/**
 * RadioGroup component - groups multiple radios together
 */
export function RadioGroup(props: KTMuiRadioGroupProps): KTMuiRadioGroup {
  let { value = '', size = 'small', row = false } = props;

  const onChange = props['kt:change'] ?? $emptyFn;

  const changeHandler = (checked: boolean, value: string) => {
    if (checked) {
      onChange(value);
    }
    radios.forEach((radio) => (radio.checked = radio.value === value));
  };

  const radios = props.options.map((o) => {
    o.size = size;
    o.checked = value === o.value;

    const originalChange = o['kt:change'];
    if (originalChange) {
      o['kt:change'] = (checked: boolean, newValue: string) => {
        originalChange(checked, newValue);
        changeHandler(checked, newValue);
      };
    } else {
      o['kt:change'] = changeHandler;
    }
    return Radio(o);
  });

  const container = (
    <div
      class={`mui-radio-group ${row ? 'mui-radio-group-row' : ''} ${props.class ?? ''}`}
      style={parseStyle(props.style)}
      role="radiogroup"
    >
      {radios}
    </div>
  ) as KTMuiRadioGroup;

  $defines(container, {
    value: {
      get() {
        return value;
      },
      set(newValue: string) {
        value = newValue;
        radios.forEach((radio) => (radio.checked = radio.value === value));
      },
    },
  });

  return container;
}
