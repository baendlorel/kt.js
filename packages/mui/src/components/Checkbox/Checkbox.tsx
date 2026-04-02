import { $defines, $parseStyle } from '@ktjs/shared';
import { KTConditional, toReactive, assertModel, computed, effect, isRefLike } from '@ktjs/core';
import type { JSX, KTMaybeReactive } from '@ktjs/core';

import type { KTMuiProps } from '../../types/component.js';
import { createUnchecked, createChecked, createIndeterminate } from './Icons.js';
import { registerPrefixedEvents } from '../../common/attribute.js';
import { toPseudoRef } from '../../common/pseudo-ref.js';

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
    if (disabledRef.value) {
      return;
    }
    model.value = inputEl.checked;
    if (isRefLike(interminateRef)) {
      interminateRef.value = false;
    }
  };

  const customClassRef = toPseudoRef(props.class ?? '');
  const styleRef = toPseudoRef($parseStyle(props.style));

  const labelRef = toPseudoRef(props.label ?? '');
  const valueRef = toPseudoRef(props.value ?? '');
  const colorRef = toPseudoRef(props.color ?? 'primary');
  const sizeRef = toPseudoRef(props.size ?? 'medium');
  const disabledRef = toPseudoRef(props.disabled ?? false);

  const interminateRef = toReactive(props.indeterminate ?? false);
  const model = assertModel(props, false);

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
      {KTConditional(labelRef, 'span', { class: 'mui-checkbox-label', children: labelRef })}
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
      set: isRefLike(valueRef)
        ? (v: string) => {
            valueRef.value = v;
          }
        : undefined,
    },
    disabled: {
      get() {
        return disabledRef.value;
      },
      set: isRefLike(disabledRef)
        ? (v: boolean) => {
            disabledRef.value = v;
          }
        : undefined,
    },
  });

  registerPrefixedEvents(container, props, ['on:change']);
  return container;
}
