import { $emptyFn, $parseStyle } from '@ktjs/shared';
import { $modelOrRef, computed, toReactive } from '@ktjs/core';
import type { KTMuiCheckbox, KTMuiCheckboxGroup, KTMuiCheckboxGroupProps } from './checkbox.js';

import './Checkbox.css';
import { Checkbox } from './Checkbox.js';

export { Checkbox } from './Checkbox.js';

/**
 * CheckboxGroup component - groups multiple checkboxes together
 */
export function CheckboxGroup(props: KTMuiCheckboxGroupProps): KTMuiCheckboxGroup {
  let { 'on:change': onChange = $emptyFn } = props;

  const row = toReactive(props.row ?? true);
  const size = toReactive(props.size ?? 'medium');
  const model = $modelOrRef(props, [] as string[]);
  model.addOnChange((newValues) => {
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
      return o;
    });
  }, [options, size]);

  const onClick = () => {
    const old = model.value.slice();
    model.value.length = 0;
    for (let i = 0; i < checkboxes.length; i++) {
      const c = checkboxes[i];
      if (c.checked) {
        model.value.push(c.value);
      }
    }
    onChange(old, model.value.slice());
  };

  const container = (
    <div class={className} style={style} role="group" on:click={onClick}>
      {members}
    </div>
  ) as KTMuiCheckboxGroup;

  return container;
}
