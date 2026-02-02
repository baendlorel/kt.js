import { type InputElementTag, KTRef } from '@ktjs/core';

// & Same as it is in core
export const applyModel = (
  element: HTMLElementTagNameMap[InputElementTag],
  valueRef: KTRef<any>,
  propName: 'value' | 'checked',
  eventName: 'change' | 'input',
) => {
  (element as any)[propName] = valueRef.value; // initialize
  valueRef.addOnChange((newValue) => ((element as any)[propName] = newValue));
  element.addEventListener(eventName, () => (valueRef.value = (element as any)[propName]));
};
