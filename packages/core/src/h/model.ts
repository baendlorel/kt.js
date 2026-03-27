import type { InputElementTag } from '@ktjs/shared';
import type { KTRef } from '../reactable/ref.js';
import { isKT } from '../reactable/index.js';

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
