import type { InputElementTag } from '@ktjs/shared';
import type { KTRef } from '../reactive/ref.js';
import { isKT } from '../reactive/index.js';

// todo 这里完全可以直接访问subref的source来加事件，但是，颗粒度是否太大了？能否通过path来触发更加精细的change事件？
export function applyKModel(element: HTMLElementTagNameMap[InputElementTag], valueRef: KTRef<any>) {
  if (!isKT(valueRef)) {
    $throw('k-model value must be a KTRef.');
  }

  if (element.tagName === 'INPUT') {
    if (element.type === 'radio' || element.type === 'checkbox') {
      element.addEventListener('change', () => (valueRef.value = (element as HTMLInputElement).checked));
      valueRef.addOnChange((newValue) => ((element as HTMLInputElement).checked = newValue));
    } else {
      element.addEventListener('input', () => (valueRef.value = element.value));
      valueRef.addOnChange((newValue) => (element.value = newValue));
    }
    return;
  }

  if (element.tagName === 'SELECT' || element.tagName === 'TEXTAREA') {
    element.addEventListener('change', () => (valueRef.value = element.value));
    valueRef.addOnChange((newValue) => (element.value = newValue));
    return;
  }

  $warn('not supported element for k-model:');
}
