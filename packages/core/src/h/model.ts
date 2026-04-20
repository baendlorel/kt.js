import type { InputElementTag } from '@ktjs/shared';
import type { KTRef } from '../reactable/ref.js';

import { static_cast } from 'type-narrow';
import { isRef } from '../reactable/common.js';

export function applyKModel(element: HTMLElementTagNameMap[InputElementTag], valueRef: KTRef<any>) {
  if (!isRef(valueRef)) {
    $throw('k-model value must be a KTRefLike.');
  }

  if (element.tagName === 'INPUT') {
    static_cast<HTMLInputElement>(element);
    if (element.type === 'radio' || element.type === 'checkbox') {
      element.checked = Boolean(valueRef.value);
      element.addEventListener('change', () => (valueRef.value = element.checked));
      valueRef.addOnChange((newValue: boolean) => (element.checked = newValue));
    } else {
      element.value = valueRef.value ?? '';
      element.addEventListener('input', () => (valueRef.value = element.value));
      valueRef.addOnChange((newValue: string) => (element.value = newValue));
    }
    return;
  }

  if (element.tagName === 'SELECT' || element.tagName === 'TEXTAREA') {
    element.value = valueRef.value ?? '';
    element.addEventListener('change', () => (valueRef.value = element.value));
    valueRef.addOnChange((newValue: string) => (element.value = newValue));
    return;
  }

  $warn('not supported element for k-model:');
}
