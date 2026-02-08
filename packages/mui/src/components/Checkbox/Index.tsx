import { $emptyFn } from '@ktjs/shared';
import { $modelOrRef, computed, effect, toReactive } from '@ktjs/core';
import type { KTMuiCheckboxProps, KTMuiCheckbox, KTMuiCheckboxGroup, KTMuiCheckboxGroupProps } from './checkbox.js';

import { $ArrayDelete, $ArrayPushUnique } from '../../common/misc.js';
import './Checkbox.css';

const createUncheckedIcon = () => (
  <span class="mui-checkbox-icon-unchecked">
    <svg viewBox="0 0 24 24">
      <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
    </svg>
  </span>
);

const createCheckedIcon = () => (
  <span class="mui-checkbox-icon-checked">
    <svg viewBox="0 0 24 24">
      <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
    </svg>
  </span>
);

const createIndeterminateIcon = () => (
  <span class="mui-checkbox-icon-indeterminate">
    <svg viewBox="0 0 24 24">
      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"></path>
    </svg>
  </span>
);

/**
 * Checkbox component - mimics MUI Checkbox appearance and behavior
 */
export function Checkbox(props: KTMuiCheckboxProps): KTMuiCheckbox {
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
    if (disabledRef.value) {
      return;
    }
    modelRef.value = inputEl.checked;
    interminateRef.value = false;
    toggleIcon(modelRef.value, interminateRef.value);
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
  modelRef.addOnChange((newValue) => {
    inputEl.checked = newValue;
    toggleIcon(newValue, interminateRef.value);
  });

  const inputEl = (
    <input
      type="checkbox"
      class="mui-checkbox-input"
      checked={modelRef.value}
      value={valueRef}
      disabled={disabledRef}
      on:change={handleChange}
    />
  ) as HTMLInputElement;

  const uncheckedIcon = createUncheckedIcon();
  const checkedIcon = createCheckedIcon();
  const indeterminateIcon = createIndeterminateIcon();

  // Initialize icon state
  toggleIcon(modelRef.value, interminateRef.value);

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

  return container;
}

/**
 * CheckboxGroup component - groups multiple checkboxes together
 */
export function CheckboxGroup(props: KTMuiCheckboxGroupProps): KTMuiCheckboxGroup {
  let { size = 'medium', row = false, 'on:change': onChange = $emptyFn } = props;

  const changeHandler = (checked: boolean, checkboxValue: string) => {
    if (checked) {
      $ArrayPushUnique(modelRef.value, checkboxValue);
    } else {
      $ArrayDelete(modelRef.value, checkboxValue);
    }
    onChange(modelRef.value);
  };

  const modelRef = $modelOrRef(props, props.value ?? []);
  modelRef.addOnChange((newValues) => {
    for (let i = 0; i < checkboxes.value.length; i++) {
      const c = checkboxes.value[i];
      c.checked = newValues.includes(c.value);
    }
  });

  const optionsRef = toReactive(props.options);
  const checkboxes = computed(() => {
    return optionsRef.value.map((o) => {
      o.size = size;
      o.checked = modelRef.value.includes(o.value);

      const originalChange = o['on:change'];
      if (originalChange) {
        if (typeof originalChange !== 'function') {
          $throw('CheckboxGroup: handler must be a function');
        }
        o['on:change'] = (checked: boolean, value: string) => {
          originalChange(checked, value);
          changeHandler(checked, value);
        };
      } else {
        o['on:change'] = changeHandler;
      }
      return Checkbox(o);
    });
  }, [optionsRef]);

  const container = (
    <div
      class={`mui-checkbox-group ${row ? 'mui-checkbox-group-row' : ''} ${props.class ? props.class : ''}`}
      style={props.style ? props.style : ''}
      role="group"
    >
      {checkboxes}
    </div>
  ) as KTMuiCheckboxGroup;

  return container;
}
