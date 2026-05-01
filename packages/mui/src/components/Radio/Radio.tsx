import type { JSX, KTMaybeReactive } from '@ktjs/core';
import type { KTMuiProps } from '../../types/component.js';

import { $defines, $emptyFn, $is, $parseStyle } from '@ktjs/shared';
import { computed, KTFor, toKT } from '@ktjs/core';

import { registerPrefixedEvents } from '../../common/attribute.js';
import { assertModel, toPseudoRef } from '../../common/pseudo-ref.js';
import { createChecked, createUnchecked } from './Icon.js';

export type KTMuiRadioSize = 'small' | 'medium';
export type KTMuiRadioColor = 'primary' | 'secondary' | 'default';

export interface KTMuiRadioProps extends KTMuiProps {
  value: any;
  label: KTMaybeReactive<string | JSX.Element | HTMLElement>;
  checked?: boolean;
  size?: KTMuiRadioSize;
  'on:change'?: (checked: boolean, value: any) => void;
  disabled?: boolean;
  color?: KTMuiRadioColor;

  // # native events
  'on:click'?: (event: MouseEvent) => void;
  'on:mouseenter'?: (event: MouseEvent) => void;
  'on:mouseleave'?: (event: MouseEvent) => void;
}

export interface KTMuiRadioGroupProps extends KTMuiProps {
  value?: KTMaybeReactive<any>;
  name?: string;
  size?: KTMuiRadioSize;
  options: KTMuiRadioProps[];
  'on:change'?: (value: any) => void;
  row?: boolean;

  // # native events
  'on:click'?: (event: MouseEvent) => void;
  'on:mouseenter'?: (event: MouseEvent) => void;
  'on:mouseleave'?: (event: MouseEvent) => void;
}

export type KTMuiRadio = JSX.Element & {
  readonly value: any;
  checked: boolean;
};

export type KTMuiRadioGroup = JSX.Element & {
  value: any;
};

export function Radio(props: KTMuiRadioProps): KTMuiRadio {
  const onChange = props['on:change'] ?? $emptyFn;

  const toggleIcon = (checked: boolean) => {
    uncheckedIcon.style.display = checked ? 'none' : '';
    checkedIcon.style.display = checked ? '' : 'none';
  };

  const handleChange = () => {
    if (disabledRef.value) {
      return;
    }
    checked = input.checked;
    toggleIcon(checked);
    onChange(checked, valueRef.value);
  };

  const { label: text = '', size = 'small', disabled = false, color = 'primary' } = props;
  let checked = props.checked ?? false;

  const valueRef = toKT(props.value);
  const disabledRef = toKT(props.disabled ?? false);

  const input = (
    <input type="radio" class="mui-radio-input" checked={checked} disabled={disabledRef} on:change={handleChange} />
  ) as HTMLInputElement;

  const uncheckedIcon = createUnchecked();
  const checkedIcon = createChecked();

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

export function RadioGroup(props: KTMuiRadioGroupProps): KTMuiRadioGroup {
  const customClassRef = toPseudoRef(props.class ?? '');
  const styleRef = toPseudoRef($parseStyle(props.style));

  const sizeRef = toPseudoRef(props.size ?? 'small');
  const rowRef = toPseudoRef(props.row ?? false);

  const className = computed(
    () => `mui-radio-group ${rowRef.value ? 'mui-radio-group-row' : ''} ${customClassRef.value}`,
    [customClassRef, rowRef],
  );

  const model = assertModel(props, toKT(props.value).value);
  const onChange = props['on:change'] ?? $emptyFn;
  const radioValueMap = new Map<KTMuiRadio, any>();

  const changeHandler = (checked: boolean, radio: KTMuiRadio) => {
    if (!checked) {
      return;
    }
    const value = radioValueMap.get(radio);
    model.value = value;
    onChange(value);
  };

  const radios = toKT(props.options).map((options) => {
    radioValueMap.clear();
    return options.map((option) => {
      option.size = sizeRef.value;
      option.checked = $is(model.value, option.value);

      const originalChange = option['on:change'];
      let radio!: KTMuiRadio;
      option['on:change'] = (checked: boolean, value: any) => {
        originalChange?.(checked, value);
        changeHandler(checked, radio);
      };
      radio = Radio(option);
      radioValueMap.set(radio, option.value);
      return radio;
    });
  });

  model.listen((value) =>
    radios.value.forEach((radio) => {
      radio.checked = $is(radioValueMap.get(radio), value);
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
        return model.value;
      },
      set: (newValue: any) => (model.value = newValue),
    },
  });

  registerPrefixedEvents(container, props, ['on:change']);
  return container;
}
