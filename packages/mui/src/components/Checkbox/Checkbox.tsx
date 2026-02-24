import { $defines, $emptyFn } from '@ktjs/shared';
import { toReactive, $modelOrRef, computed, effect } from '@ktjs/core';

import type { KTMuiCheckboxProps, KTMuiCheckbox } from './checkbox.js';
import { createUnchecked, createChecked, createIndeterminate } from './Icons.js';

/**
 * Create a checkbox component.
 * @param props normal props
 * @param onChangeForGroup onchange event only for checkbox group
 */
export function Checkbox(
  props: KTMuiCheckboxProps,
  onChangeForGroup?: (checked: boolean, value: any) => void,
): KTMuiCheckbox {
  // Handle change
  const handleChange = () => {
    if (disabled.value) {
      return;
    }
    model.value = inputEl.checked;
    interminate.value = false;
  };

  const label = toReactive(props.label ?? '');
  const value = toReactive(props.value ?? '');
  const interminate = toReactive(props.indeterminate ?? false);
  const color = toReactive(props.color ?? 'primary');
  const size = toReactive(props.size ?? 'medium');
  const disabled = toReactive(props.disabled ?? false);
  const model = $modelOrRef(props, props.checked ?? false);

  const inputEl = (
    <input
      type="checkbox"
      class="mui-checkbox-input"
      checked={model}
      value={value}
      disabled={disabled}
      on:change={handleChange}
    />
  ) as HTMLInputElement;

  // # events
  const onChange = props['on:change'];
  if (onChange) {
    inputEl.addEventListener('change', () => onChange(inputEl.checked, value.value));
  }
  if (onChangeForGroup) {
    inputEl.addEventListener('change', () => onChangeForGroup(inputEl.checked, value.value));
  }

  const uncheckedIcon = createUnchecked();
  const checkedIcon = createChecked();
  const indeterminateIcon = createIndeterminate();

  const className = computed(() => {
    return `mui-checkbox-wrapper mui-checkbox-size-${size.value} ${disabled.value ? 'mui-checkbox-disabled' : ''} mui-checkbox-color-${color.value}`;
  }, [color, disabled, size]);

  const container = (
    <label class={className}>
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

  effect(() => {
    if (interminate.value) {
      uncheckedIcon.style.display = 'none';
      checkedIcon.style.display = 'none';
      indeterminateIcon.style.display = '';
    } else {
      uncheckedIcon.style.display = model.value ? 'none' : '';
      checkedIcon.style.display = model.value ? '' : 'none';
      indeterminateIcon.style.display = 'none';
    }
  }, [model, interminate]);

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
        return value.value;
      },
      set(v: string) {
        value.value = v;
      },
    },
    disabled: {
      get() {
        return disabled.value;
      },
      set(v: boolean) {
        disabled.value = v;
      },
    },
  });

  return container;
}
