import { $warn, applyModel, InputElementTag } from '@ktjs/shared';
import { isKT, KTRef } from '../reactive/index.js';

export function applyKModel(element: HTMLElementTagNameMap[InputElementTag], valueRef: KTRef<any>) {
  if (!isKT(valueRef)) {
    $warn('k-model value must be a KTRef.');
    return;
  }

  if (element instanceof HTMLInputElement) {
    if (element.type === 'radio' || element.type === 'checkbox') {
      applyModel(element, valueRef, 'checked', 'change');
    } else {
      applyModel(element, valueRef, 'value', 'input');
    }
  } else if (element instanceof HTMLSelectElement) {
    applyModel(element, valueRef, 'value', 'change');
  } else if (element instanceof HTMLTextAreaElement) {
    applyModel(element, valueRef, 'value', 'input');
  } else {
    $warn('not supported element for k-model:');
  }
}
