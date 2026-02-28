import { computed, KTFor, toReactive } from '@ktjs/core';
import { $defines, $emptyFn, $parseStyle } from '@ktjs/shared';
import type { JSX, KTReactive } from '@ktjs/core';

import type { KTMuiProps } from '../../types/component.js';
import './Radio.css.ts';
import { registerPrefixedEvents } from '../../common/attribute.js';

export interface KTMuiRadioProps extends KTMuiProps {
  value: string;
  label: string | JSX.Element | HTMLElement | KTReactive<string | JSX.Element | HTMLElement>;
  checked?: boolean;
  size?: 'small' | 'medium';
  'on:change'?: (checked: boolean, value: string) => void;
  disabled?: boolean;
  color?: 'primary' | 'secondary' | 'default';
}

export interface KTMuiRadioGroupProps extends KTMuiProps {
  value?: string;
  name?: string;
  size?: 'small' | 'medium';
  options: KTMuiRadioProps[];
  'on:change'?: (value: string) => void;
  'on:click'?: (checked: boolean) => void;
  row?: boolean;
}

export type KTMuiRadio = JSX.Element & {
  readonly value: string;
  checked: boolean;
};

export type KTMuiRadioGroup = JSX.Element & {
  value: string;
};

/**
 * Radio component - mimics MUI Radio appearance and behavior
 */
export function Radio(props: KTMuiRadioProps): KTMuiRadio {
  const onChange = props['on:change'] ?? $emptyFn;

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

  const valueRef = toReactive(props.value ?? '');
  const disabledRef = toReactive(props.disabled ?? false);

  const input = (
    <input
      type="radio"
      class="mui-radio-input"
      checked={checked}
      value={valueRef}
      disabled={disabledRef}
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
      style={$parseStyle(props.style)}
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

  registerPrefixedEvents(container, props);

  return container;
}

/**
 * RadioGroup component - groups multiple radios together
 */
export function RadioGroup(props: KTMuiRadioGroupProps): KTMuiRadioGroup {
  const customClassRef = toReactive(props.class ?? '');
  const styleRef = toReactive($parseStyle(props.style));

  const valueRef = toReactive(props.value ?? '');
  const sizeRef = toReactive(props.size ?? 'small');
  const rowRef = toReactive(props.row ?? false);

  const className = computed(
    () => `mui-radio-group ${rowRef.value ? 'mui-radio-group-row' : ''} ${customClassRef.value}`,
    [customClassRef, rowRef],
  );

  const onChange = props['on:change'] ?? $emptyFn;

  const changeHandler = (checked: boolean, value: string) => {
    if (checked) {
      valueRef.value = value;
      onChange(value);
    }
    radios.value.forEach((radio) => (radio.checked = radio.value === value));
  };

  const radios = toReactive(props.options).toComputed((options) =>
    options.map((o) => {
      o.size = sizeRef.value;
      o.checked = valueRef.value === o.value;

      const originalChange = o['on:change'];
      if (originalChange) {
        o['on:change'] = (checked: boolean, newValue: string) => {
          originalChange(checked, newValue);
          changeHandler(checked, newValue);
        };
      } else {
        o['on:change'] = changeHandler;
      }
      return Radio(o);
    }),
  );

  const container = (
    <div class={className} style={styleRef} role="radiogroup">
      <KTFor list={radios}></KTFor>
    </div>
  ) as KTMuiRadioGroup;

  $defines(container, {
    value: {
      get() {
        return valueRef.value;
      },
      set(newValue: string) {
        valueRef.value = newValue;
        radios.value.forEach((radio) => (radio.checked = radio.value === valueRef.value));
      },
    },
  });

  registerPrefixedEvents(container, props);
  return container;
}
