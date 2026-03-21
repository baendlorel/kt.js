import { $defines, $parseStyle } from '@ktjs/shared';
import { KTConditional, toReactive, $modelOrRef, computed, effect } from '@ktjs/core';
import type { JSX, KTMaybeReactive } from '@ktjs/core';

import type { KTMuiProps } from '../../types/component.js';
import { createUnchecked, createChecked, createIndeterminate } from './Icons.js';
import { registerPrefixedEvents } from '../../common/attribute.js';

export type KTMuiCheckboxSize = 'small' | 'medium';
export type KTMuiCheckboxColor = 'primary' | 'secondary' | 'default' | 'success' | 'error' | 'warning';

export interface KTMuiCheckboxProps extends Omit<KTMuiProps, 'children'> {
  value?: KTMaybeReactive<string>;
  label?: KTMaybeReactive<string | JSX.Element | HTMLElement>;
  size?: KTMaybeReactive<KTMuiCheckboxSize>;
  disabled?: KTMaybeReactive<boolean>;
  color?: KTMaybeReactive<KTMuiCheckboxColor>;
  indeterminate?: KTMaybeReactive<boolean>;
  'on:change'?: (checked: boolean, value: string) => void;

  // # native events
  'on:click'?: (event: MouseEvent) => void;
  'on:mouseenter'?: (event: MouseEvent) => void;
  'on:mouseleave'?: (event: MouseEvent) => void;
}

export type KTMuiCheckbox = JSX.Element & {
  checked: boolean;
  value: string;
  disabled: boolean;
};

/**
 * Create a checkbox component.
 * @param props normal props
 * @param onChangeForGroup onchange event only for checkbox group
 */
export function Checkbox(
  props: KTMuiCheckboxProps,
  onChangeForGroup?: (checked: boolean, value: string) => void,
): KTMuiCheckbox {
  // Handle change
  const handleChange = () => {
    if (disabledRef.state) {
      return;
    }
    model.state = inputEl.checked;
    interminateRef.state = false;
  };

  const customClassRef = toReactive(props.class ?? '');
  const styleRef = toReactive($parseStyle(props.style));

  const labelRef = toReactive(props.label ?? '');
  const valueRef = toReactive(props.value ?? '');
  const interminateRef = toReactive(props.indeterminate ?? false);
  const colorRef = toReactive(props.color ?? 'primary');
  const sizeRef = toReactive(props.size ?? 'medium');
  const disabledRef = toReactive(props.disabled ?? false);
  const model = $modelOrRef(props, false);

  const inputEl = (
    <input
      type="checkbox"
      class="mui-checkbox-input"
      checked={model}
      value={valueRef}
      disabled={disabledRef}
      on:change={handleChange}
    />
  ) as HTMLInputElement;

  // # events
  const onChange = props['on:change'];
  if (onChange) {
    inputEl.addEventListener('change', () => onChange(inputEl.checked, valueRef.state));
  }
  if (onChangeForGroup) {
    inputEl.addEventListener('change', () => onChangeForGroup(inputEl.checked, valueRef.state));
  }

  const uncheckedIcon = createUnchecked();
  const checkedIcon = createChecked();
  const indeterminateIcon = createIndeterminate();

  const className = computed(() => {
    return `mui-checkbox-wrapper mui-checkbox-size-${sizeRef.state} ${disabledRef.state ? 'mui-checkbox-disabled' : ''} mui-checkbox-color-${colorRef.state} ${customClassRef.state}`;
  }, [colorRef, disabledRef, sizeRef, customClassRef]);

  const container = (
    <label class={className} style={styleRef}>
      {inputEl}
      <span class="mui-checkbox-icon">
        {uncheckedIcon}
        {checkedIcon}
        {indeterminateIcon}
      </span>
      {KTConditional(labelRef, 'span', { class: 'mui-checkbox-label', children: labelRef })}
    </label>
  ) as KTMuiCheckbox;

  effect(() => {
    if (interminateRef.state) {
      uncheckedIcon.style.display = 'none';
      checkedIcon.style.display = 'none';
      indeterminateIcon.style.display = '';
    } else {
      uncheckedIcon.style.display = model.state ? 'none' : '';
      checkedIcon.style.display = model.state ? '' : 'none';
      indeterminateIcon.style.display = 'none';
    }
  }, [model, interminateRef]);

  $defines(container, {
    checked: {
      get() {
        return model.state;
      },
      set(v: boolean) {
        model.state = v;
      },
    },
    value: {
      get() {
        return valueRef.state;
      },
      set(v: string) {
        valueRef.state = v;
      },
    },
    disabled: {
      get() {
        return disabledRef.state;
      },
      set(v: boolean) {
        disabledRef.state = v;
      },
    },
  });

  registerPrefixedEvents(container, props, ['on:change']);
  return container;
}
