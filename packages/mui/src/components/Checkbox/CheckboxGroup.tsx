import type { JSX, KTMaybeReactive } from '@ktjs/core';
import { $arrayDelete, $arrayPushUnique, $emptyFn, $parseStyle } from '@ktjs/shared';
import { $modelOrRef, computed, KTFor, toReactive } from '@ktjs/core';
import type { KTMuiProps } from '../../types/component.js';
import type { KTMuiCheckbox, KTMuiCheckboxProps } from './Checkbox.js';

import './Checkbox.css';
import { Checkbox } from './Checkbox.js';
import { registerPrefixedEvents } from '../../common/attribute.js';

export { Checkbox };

export interface KTMuiCheckboxGroupProps extends Omit<KTMuiProps, 'children'> {
  size?: KTMaybeReactive<'small' | 'medium'>;
  options: KTMaybeReactive<Array<Omit<KTMuiCheckboxProps, 'value'> & { value: string }>>;
  row?: KTMaybeReactive<boolean>;
  'on:change'?: (values: string[]) => void;
}

export type KTMuiCheckboxGroup = JSX.Element & {};

/**
 * CheckboxGroup component - groups multiple checkboxes together
 */
export function CheckboxGroup(props: KTMuiCheckboxGroupProps): KTMuiCheckboxGroup {
  let { 'on:change': onChange = $emptyFn } = props;

  const customClassRef = toReactive(props.class ?? '');
  const styleRef = toReactive($parseStyle(props.style));

  const optionsRef = toReactive(props.options);
  const rowRef = toReactive(props.row ?? true);
  const sizeRef = toReactive(props.size ?? 'medium');
  const model = $modelOrRef(props, [] as string[]);
  let internalChange = false;
  model.addOnChange((newValues) => {
    if (internalChange) {
      internalChange = false;
      return;
    }
    for (let i = 0; i < checkboxes.length; i++) {
      const c = checkboxes[i];
      c.checked = newValues.includes(c.value);
    }
  });

  const className = computed(() => {
    return `mui-checkbox-group ${rowRef.value ? 'mui-checkbox-group-row' : ''} ${customClassRef.value}`;
  }, [rowRef, customClassRef]);

  const checkboxes: KTMuiCheckbox[] = [];
  const checkboxOnChangeForGroup = (checked: boolean, value: string) => {
    const old = model.value.slice();
    if (checked) {
      $arrayPushUnique(model.value, value);
    } else {
      $arrayDelete(model.value, value);
    }
    onChange(model.value.slice(), old);
    internalChange = true;
    model.notify();
  };

  /**
   * Options and non-option elements, both will be put into the CheckboxGroup.
   */
  const members = computed<Array<KTMuiCheckbox | JSX.Element>>(() => {
    checkboxes.length = 0;
    return optionsRef.value.map((o) => {
      if (o !== null && typeof o === 'object' && 'value' in o && 'label' in o) {
        const checkboxProps = { ...o, size: sizeRef.value };
        const checkbox = Checkbox(checkboxProps, checkboxOnChangeForGroup);
        checkboxes.push(checkbox);
        return checkbox;
      }
      return o as JSX.Element;
    });
  }, [optionsRef, sizeRef]);

  const container = (
    <div class={className} style={styleRef} role="group">
      <KTFor list={members}></KTFor>
    </div>
  ) as KTMuiCheckboxGroup;

  // # init selection
  model.notify();

  registerPrefixedEvents(container, props, ['on:change']);
  return container;
}
