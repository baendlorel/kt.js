import type { JSX, KTMaybeReactive } from '@ktjs/core';
import type { KTMuiProps } from '../../types/component.js';
import type { KTMuiCheckbox, KTMuiCheckboxProps, KTMuiCheckboxSize } from './Checkbox.js';

import { $emptyFn, $is, $parseStyle } from '@ktjs/shared';
import { computed, KTFor } from '@ktjs/core';
import { registerPrefixedEvents } from '../../common/attribute.js';
import { assertModel, toPseudoRef } from '../../common/pseudo-ref.js';

import { Checkbox } from './Checkbox.js';

export { Checkbox };

export interface KTMuiCheckboxGroupProps extends Omit<KTMuiProps, 'children'> {
  size?: KTMaybeReactive<KTMuiCheckboxSize>;
  options: KTMaybeReactive<Array<Omit<KTMuiCheckboxProps, 'value'> & { value: any }>>;
  row?: KTMaybeReactive<boolean>;
  'on:change'?: (values: any[]) => void;

  'on:click'?: (event: MouseEvent) => void;
  'on:mouseenter'?: (event: MouseEvent) => void;
  'on:mouseleave'?: (event: MouseEvent) => void;
}

export type KTMuiCheckboxGroup = JSX.Element & {};

export function CheckboxGroup(props: KTMuiCheckboxGroupProps): KTMuiCheckboxGroup {
  const onChange = props['on:change'] ?? $emptyFn;

  const customClassRef = toPseudoRef(props.class ?? '');
  const styleRef = toPseudoRef($parseStyle(props.style));

  const optionsRef = toPseudoRef(props.options);
  const rowRef = toPseudoRef(props.row ?? true);
  const sizeRef = toPseudoRef(props.size ?? 'medium');

  const model = assertModel(props, [] as any[]);
  const checkboxValueMap = new Map<KTMuiCheckbox, any>();
  let internalChange = false;
  model.listen((newValues) => {
    if (internalChange) {
      internalChange = false;
      return;
    }
    for (let i = 0; i < checkboxes.length; i++) {
      const checkbox = checkboxes[i];
      const value = checkboxValueMap.get(checkbox);
      checkbox.checked = newValues.some((item) => $is(item, value));
    }
  });

  const className = computed(() => {
    return `mui-checkbox-group ${rowRef.value ? 'mui-checkbox-group-row' : ''} ${customClassRef.value}`;
  }, [rowRef, customClassRef]);

  const checkboxes: KTMuiCheckbox[] = [];
  const checkboxOnChangeForGroup = (checked: boolean, checkbox: KTMuiCheckbox) => {
    const value = checkboxValueMap.get(checkbox);
    const nextValues = checked
      ? model.value.some((item) => $is(item, value))
        ? model.value.slice()
        : [...model.value, value]
      : model.value.filter((item) => !$is(item, value));
    model.value = nextValues;
    onChange(nextValues.slice());
    internalChange = true;
    model.notify();
  };

  const members = computed<Array<KTMuiCheckbox | JSX.Element>>(() => {
    checkboxes.length = 0;
    checkboxValueMap.clear();
    return optionsRef.value.map((option) => {
      if (option !== null && typeof option === 'object' && 'value' in option && 'label' in option) {
        const originalChange = option['on:change'];
        const checkboxProps = { ...option, size: sizeRef.value };
        let checkbox!: KTMuiCheckbox;
        checkboxProps['on:change'] = (checked: boolean, value: any) => {
          originalChange?.(checked, value);
          checkboxOnChangeForGroup(checked, checkbox);
        };
        checkbox = Checkbox(checkboxProps);
        checkbox.checked = model.value.some((item) => $is(item, option.value));
        checkboxes.push(checkbox);
        checkboxValueMap.set(checkbox, option.value);
        return checkbox;
      }
      return option as unknown as JSX.Element;
    });
  }, [optionsRef, sizeRef, model]);

  const container = (
    <div class={className} style={styleRef} role="group">
      <KTFor list={members}></KTFor>
    </div>
  ) as KTMuiCheckboxGroup;

  model.notify();

  registerPrefixedEvents(container, props, ['on:change']);
  return container;
}
