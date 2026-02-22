import { $emptyFn, $parseStyle } from '@ktjs/shared';
import { $modelOrRef, computed, toReactive } from '@ktjs/core';
import type { KTMuiCheckboxGroup, KTMuiCheckboxGroupProps } from './checkbox.js';
import { $ArrayDelete, $ArrayPushUnique } from '../../common/misc.js';

import './Checkbox.css';
import { Checkbox } from './Checkbox.js';

/**
 * CheckboxGroup component - groups multiple checkboxes together
 */
export function CheckboxGroup(props: KTMuiCheckboxGroupProps): KTMuiCheckboxGroup {
  let { 'on:change': onChange = $emptyFn } = props;

  const changeHandler = (checked: boolean, checkboxValue: string) => {
    if (checked) {
      $ArrayPushUnique(modelRef.value, checkboxValue);
    } else {
      $ArrayDelete(modelRef.value, checkboxValue);
    }
    onChange(modelRef.value);
  };

  const rowRef = toReactive(props.row ?? true);
  const sizeRef = toReactive(props.size ?? 'medium');
  const modelRef = $modelOrRef(props, props.value ?? []);
  modelRef.addOnChange((newValues) => {
    for (let i = 0; i < checkboxes.value.length; i++) {
      const c = checkboxes.value[i];
      c.checked = newValues.includes(c.value);
    }
  });

  const customClassRef = toReactive(props.class ?? '');
  const classRef = computed(() => {
    return `mui-checkbox-group ${rowRef.value ? 'mui-checkbox-group-row' : ''} ${customClassRef.value}`;
  }, [rowRef, customClassRef]);
  const styleRef = toReactive($parseStyle(props.style ?? ''));

  const optionsRef = toReactive(props.options);
  const checkboxes = computed(() => {
    return optionsRef.value.map((o) => {
      o.size = sizeRef.value;
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
  }, [optionsRef, sizeRef]);

  const container = (
    <div class={classRef} style={styleRef} role="group">
      {checkboxes}
    </div>
  ) as KTMuiCheckboxGroup;

  return container;
}
