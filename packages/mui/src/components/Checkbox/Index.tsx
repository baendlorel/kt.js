import { $emptyFn, $parseStyle } from '@ktjs/shared';
import { $modelOrRef, computed, toReactive } from '@ktjs/core';
import type { KTMuiCheckbox, KTMuiCheckboxGroup, KTMuiCheckboxGroupProps } from './checkbox.js';
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
      $ArrayPushUnique(model.value, checkboxValue);
    } else {
      $ArrayDelete(model.value, checkboxValue);
    }
    onChange(model.value);
  };

  const row = toReactive(props.row ?? true);
  const size = toReactive(props.size ?? 'medium');
  const model = $modelOrRef(props, [] as string[]);
  model.addOnChange((newValues) => {
    if (newValues.length !== checkboxes.length) {
      $throw('CheckboxGroup: model value length must match the number of checkboxes');
    }
    for (let i = 0; i < checkboxes.length; i++) {
      const c = checkboxes[i];
      c.checked = newValues.includes(c.value);
    }
  });

  const customClass = toReactive(props.class ?? '');
  const className = computed(() => {
    return `mui-checkbox-group ${row.value ? 'mui-checkbox-group-row' : ''} ${customClass.value}`;
  }, [row, customClass]);
  const style = toReactive($parseStyle(props.style ?? ''));

  const options = toReactive(props.options);

  const checkboxes: KTMuiCheckbox[] = [];
  /**
   * Options and non-option elements, both will be put into the CheckboxGroup.
   */
  const members = computed(() => {
    checkboxes.length = 0;
    return options.value.map((o) => {
      if (o !== null && typeof o === 'object' && 'value' in o && 'label' in o) {
        const checkboxProps = { ...o, size: size.value };
        const checkbox = Checkbox(checkboxProps);
        checkboxes.push(checkbox);
        return checkbox;
      }
      if (o instanceof Element) {
        return o;
      }
      $throw('CheckboxGroup: options must be an array of objects with "value" and "label" properties or DOM elements');
    });
  }, [options, size]);
  const checkbox = computed(() => {
    // todo options里面可能存在不是option的东西，这些东西要正常渲染。
    return options.value.map((o) => {
      o.size = size.value;
      o.checked = model.value.includes(o.value);

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
  }, [options, size]);

  const container = (
    <div class={className} style={style} role="group">
      {checkboxes}
    </div>
  ) as KTMuiCheckboxGroup;

  return container;
}
