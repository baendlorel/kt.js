import type { JSX, KTMaybeReactive } from '@ktjs/core';
import type { KTMuiProps } from '../../types/component.js';

import { $defines, $emptyFn, $parseStyle } from '@ktjs/shared';
import { assertModel, computed, KTFor, toReactive } from '@ktjs/core';

import { registerPrefixedEvents } from '../../common/attribute.js';
import { toPseudoRef } from '../../common/pseudo-ref.js';
import { createChecked, createUnchecked } from './Icon.js';

import './Radio.css.js';

export type KTMuiRadioSize = 'small' | 'medium';
export type KTMuiRadioColor = 'primary' | 'secondary' | 'default';

export interface KTMuiRadioProps extends KTMuiProps {
  value: string;
  label: KTMaybeReactive<string | JSX.Element | HTMLElement>;
  checked?: boolean;
  size?: KTMuiRadioSize;
  'on:change'?: (checked: boolean, value: string) => void;
  disabled?: boolean;
  color?: KTMuiRadioColor;

  // # native events
  'on:click'?: (event: MouseEvent) => void;
  'on:mouseenter'?: (event: MouseEvent) => void;
  'on:mouseleave'?: (event: MouseEvent) => void;
}

export interface KTMuiRadioGroupProps extends KTMuiProps {
  value?: KTMaybeReactive<string>;
  name?: string;
  size?: KTMuiRadioSize;
  options: KTMuiRadioProps[];
  'on:change'?: (value: string) => void;
  row?: boolean;

  // # native events
  'on:click'?: (event: MouseEvent) => void;
  'on:mouseenter'?: (event: MouseEvent) => void;
  'on:mouseleave'?: (event: MouseEvent) => void;
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
    if (disabledRef.value) {
      return;
    }
    checked = input.checked;
    toggleIcon(checked);
    onChange(checked, valueRef.value);
  };

  // & There is no need to make these reactive.
  const { label: text = '', size = 'small', disabled = false, color = 'primary' } = props;
  let checked = props.checked ?? false;

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

  const uncheckedIcon = createUnchecked();
  const checkedIcon = createChecked();

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
        return valueRef.value;
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

  registerPrefixedEvents(container, props, ['on:change']);

  return container;
}

/**
 * RadioGroup component - groups multiple radios together
 */
export function RadioGroup(props: KTMuiRadioGroupProps): KTMuiRadioGroup {
  const customClassRef = toPseudoRef(props.class ?? '');
  const styleRef = toPseudoRef($parseStyle(props.style));

  const sizeRef = toPseudoRef(props.size ?? 'small');
  const rowRef = toPseudoRef(props.row ?? false);

  const className = computed(
    () => `mui-radio-group ${rowRef.value ? 'mui-radio-group-row' : ''} ${customClassRef.value}`,
    [customClassRef, rowRef],
  );

  const model = assertModel(props, toReactive(props.value ?? '').value);

  const onChange = props['on:change'] ?? $emptyFn;

  const changeHandler = (checked: boolean, value: string) => {
    if (!checked) {
      return;
    }
    model.value = value;
    onChange(value);
  };

  const radios = toReactive(props.options).map((options) =>
    options.map((o) => {
      o.size = sizeRef.value;
      o.checked = model.value === o.value;

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
  model.addOnChange((value) => radios.value.forEach((radio) => (radio.checked = radio.value === value)));

  const container = (
    <div class={className} style={styleRef} role="radiogroup">
      <KTFor list={radios}></KTFor>
    </div>
  ) as KTMuiRadioGroup;

  $defines(container, {
    value: {
      get() {
        return model.value;
      },
      set: (newValue: string) => (model.value = newValue),
    },
  });

  registerPrefixedEvents(container, props, ['on:change']);
  return container;
}
