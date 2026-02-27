import { $applyModel, type InputElementTag } from '@ktjs/shared';
import { isKT, type KTRef } from '../reactive/index.js';

export function applyKModel(element: HTMLElementTagNameMap[InputElementTag], valueRef: KTRef<any>) {
  if (!isKT(valueRef)) {
    $throw('k-model value must be a KTRef.');
  }

  if (element.tagName === 'INPUT') {
    if (element.type === 'radio' || element.type === 'checkbox') {
      $applyModel(element, valueRef, 'checked', 'change');
      return;
    }

    if (element.type === 'number') {
      $applyModel(element, valueRef, 'checked', 'change', Number);
      return;
    }

    if (element.type === 'date') {
      $applyModel(element, valueRef, 'checked', 'change', (v: any) => new Date(v));
      return;
    }

    $applyModel(element, valueRef, 'value', 'input');
  } else if (element.tagName === 'SELECT') {
    $applyModel(element, valueRef, 'value', 'change');
  } else if (element.tagName === 'TEXTAREA') {
    $applyModel(element, valueRef, 'value', 'input');
  } else {
    $warn('not supported element for k-model:');
  }
}
