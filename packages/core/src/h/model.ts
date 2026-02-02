import { InputElementTag } from '../types/global.js';
import { KTRef } from '../jsx/ref.js';

function register(element: any, valueRef: KTRef<any>, propName: 'value' | 'checked', eventName: 'change' | 'input') {
  element.addEventListener(eventName, () => (valueRef.value = element[propName]));
  element[propName] = valueRef.value;
  valueRef.addOnChange((newValue) => (element[propName] = newValue));
}

export function applyModel(element: HTMLElementTagNameMap[InputElementTag], valueRef: KTRef<any>) {
  if (element instanceof HTMLInputElement) {
    if (element.type === 'radio' || element.type === 'checkbox') {
      register(element, valueRef, 'checked', 'change');
    } else {
      register(element, valueRef, 'value', 'input');
    }
  } else if (element instanceof HTMLSelectElement) {
    register(element, valueRef, 'value', 'change');
  } else if (element instanceof HTMLTextAreaElement) {
    register(element, valueRef, 'value', 'input');
  }
}
