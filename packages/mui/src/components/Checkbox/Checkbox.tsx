import { $emptyFn } from '@ktjs/shared';
import { toReactive, $modelOrRef, computed, effect } from '@ktjs/core';

import type { KTMuiCheckboxProps, KTMuiCheckbox } from './checkbox.js';
import { createUnchecked, createChecked, createIndeterminate } from './Icons.js';

export function Checkbox(props: KTMuiCheckboxProps): KTMuiCheckbox {
  // Handle change
  const handleChange = () => {
    if (disabledRef.value) {
      return;
    }
    modelRef.value = inputEl.checked;
    interminateRef.value = false;
    onChange(modelRef.value, valueRef.value);
  };

  const onChange = props['on:change'] ?? $emptyFn;

  const labelRef = toReactive(props.label ?? '');
  const valueRef = toReactive(props.value ?? '');
  const interminateRef = toReactive(props.indeterminate ?? false);
  const colorRef = toReactive(props.color ?? 'primary');
  const sizeRef = toReactive(props.size ?? 'medium');
  const disabledRef = toReactive(props.disabled ?? false, (v) => {
    inputEl.disabled = v;
    container.classList.toggle('mui-checkbox-disabled', v);
  });
  const modelRef = $modelOrRef(props, props.checked ?? false);

  const inputEl = (
    <input
      type="checkbox"
      class="mui-checkbox-input"
      checked={modelRef}
      value={valueRef}
      disabled={disabledRef}
      on:change={handleChange}
    />
  ) as HTMLInputElement;

  const uncheckedIcon = createUnchecked();
  const checkedIcon = createChecked();
  const indeterminateIcon = createIndeterminate();

  const classRef = computed(() => {
    return `mui-checkbox-wrapper mui-checkbox-size-${sizeRef.value} ${disabledRef.value ? 'mui-checkbox-disabled' : ''} mui-checkbox-color-${colorRef.value}`;
  }, [colorRef, disabledRef, sizeRef]);

  const container = (
    <label class={classRef}>
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
      uncheckedIcon.style.display = modelRef.value ? 'none' : '';
      checkedIcon.style.display = modelRef.value ? '' : 'none';
      indeterminateIcon.style.display = 'none';
    }
  }, [modelRef, interminateRef]);

  return container;
}
