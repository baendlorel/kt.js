import type { InputElementTag } from '@ktjs/shared';
import type { KTRefLike } from '../reactable/ref.js';

import { static_cast } from 'type-narrow';
import { isRefLike } from '../reactable/common.js';
import { $addNodeCleanup } from '../jsx/anchor.js';

export function applyKModel(element: HTMLElementTagNameMap[InputElementTag], valueRef: KTRefLike<any>) {
  if (!isRefLike(valueRef)) {
    $throw('k-model value must be a KTRefLike.');
  }

  if (element.tagName === 'INPUT') {
    static_cast<HTMLInputElement>(element);
    if (element.type === 'radio' || element.type === 'checkbox') {
      element.checked = Boolean(valueRef.value);
      const onChange = () => (valueRef.value = element.checked);
      const onValueChange = (newValue: boolean) => (element.checked = newValue);
      element.addEventListener('change', onChange);
      valueRef.addOnChange(onValueChange, onValueChange);
      $addNodeCleanup(element, () => element.removeEventListener('change', onChange));
      $addNodeCleanup(element, () => valueRef.removeOnChange(onValueChange));
    } else {
      element.value = valueRef.value ?? '';
      const onInput = () => (valueRef.value = element.value);
      const onValueChange = (newValue: string) => (element.value = newValue);
      element.addEventListener('input', onInput);
      valueRef.addOnChange(onValueChange, onValueChange);
      $addNodeCleanup(element, () => element.removeEventListener('input', onInput));
      $addNodeCleanup(element, () => valueRef.removeOnChange(onValueChange));
    }
    return;
  }

  if (element.tagName === 'SELECT' || element.tagName === 'TEXTAREA') {
    element.value = valueRef.value ?? '';
    const onChange = () => (valueRef.value = element.value);
    const onValueChange = (newValue: string) => (element.value = newValue);
    element.addEventListener('change', onChange);
    valueRef.addOnChange(onValueChange, onValueChange);
    $addNodeCleanup(element, () => element.removeEventListener('change', onChange));
    $addNodeCleanup(element, () => valueRef.removeOnChange(onValueChange));
    return;
  }

  $warn('not supported element for k-model:');
}
