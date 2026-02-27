import { $defines, $parseStyle } from '@ktjs/shared';
import { toReactive, $modelOrRef, computed, effect } from '@ktjs/core';
import type { JSX, KTMaybeReactive } from '@ktjs/core';

import type { KTMuiProps } from '../../types/component.js';
import { createUnchecked, createChecked, createIndeterminate } from './Icons.js';
import { registerPrefixedEvents } from '../../common/attribute.js';

export interface KTMuiCheckboxProps extends Omit<KTMuiProps, 'children'> {
  value?: KTMaybeReactive<string>;
  label?: KTMaybeReactive<string | JSX.Element | HTMLElement>;
  size?: KTMaybeReactive<'small' | 'medium'>;
  disabled?: KTMaybeReactive<boolean>;
  color?: KTMaybeReactive<'primary' | 'secondary' | 'default' | 'success' | 'error' | 'warning'>;
  indeterminate?: KTMaybeReactive<boolean>;
  'on:change'?: (checked: boolean, value: string) => void;
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
    if (disabledRef.value) {
      return;
    }
    model.value = inputEl.checked;
    interminateRef.value = false;
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
    inputEl.addEventListener('change', () => onChange(inputEl.checked, valueRef.value));
  }
  if (onChangeForGroup) {
    inputEl.addEventListener('change', () => onChangeForGroup(inputEl.checked, valueRef.value));
  }

  const uncheckedIcon = createUnchecked();
  const checkedIcon = createChecked();
  const indeterminateIcon = createIndeterminate();

  const className = computed(() => {
    return `mui-checkbox-wrapper mui-checkbox-size-${sizeRef.value} ${disabledRef.value ? 'mui-checkbox-disabled' : ''} mui-checkbox-color-${colorRef.value} ${customClassRef.value}`;
  }, [colorRef, disabledRef, sizeRef, customClassRef]);

  const container = (
    <label class={className} style={styleRef}>
      {inputEl}
      <span class="mui-checkbox-icon">
        {uncheckedIcon}
        {checkedIcon}
        {indeterminateIcon}
      </span>
      <span k-if={labelRef} class="mui-checkbox-label">
        {labelRef}
      </span>
    </label>
  ) as KTMuiCheckbox;

  effect(() => {
    if (interminateRef.value) {
      uncheckedIcon.style.display = 'none';
      checkedIcon.style.display = 'none';
      indeterminateIcon.style.display = '';
    } else {
      uncheckedIcon.style.display = model.value ? 'none' : '';
      checkedIcon.style.display = model.value ? '' : 'none';
      indeterminateIcon.style.display = 'none';
    }
  }, [model, interminateRef]);

  $defines(container, {
    checked: {
      get() {
        return model.value;
      },
      set(v: boolean) {
        model.value = v;
      },
    },
    value: {
      get() {
        return valueRef.value;
      },
      set(v: string) {
        valueRef.value = v;
      },
    },
    disabled: {
      get() {
        return disabledRef.value;
      },
      set(v: boolean) {
        disabledRef.value = v;
      },
    },
  });

  registerPrefixedEvents(container, props, ['on:change']);
  return container;
}
