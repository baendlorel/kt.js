import type { JSX } from '../types/jsx.js';
import type { KTAttribute } from '../types/h.js';
import type { KTReactifyProps } from '../reactable/types.js';

import { static_cast } from 'type-narrow';
import { isRef } from '../reactable/common.js';
import { own } from '../common/owner.js';

export function applyKModel(element: JSX.Element, attr: KTReactifyProps<KTAttribute>) {
  if (!('k-model' in attr)) {
    return;
  }

  const model = attr['k-model'];
  if (!isRef(model)) {
    $throw('k-model value must be a KTRef.');
  }

  if (element.tagName === 'INPUT') {
    static_cast<HTMLInputElement>(element);
    if (element.type === 'radio' || element.type === 'checkbox') {
      element.checked = !!model.value;
      const change = () => (model.value = element.checked);
      element.addEventListener('change', change);
      own(element, () => element.removeEventListener('change', change));
      model.listen((newValue: boolean) => (element.checked = !!newValue), { owner: element });
    } else {
      element.value = model.value ?? '';
      const input = () => (model.value = element.value);
      element.addEventListener('input', input);
      own(element, () => element.removeEventListener('input', input));
      model.listen((newValue: string) => (element.value = newValue), { owner: element });
    }
    return;
  }

  if (element.tagName === 'SELECT' || element.tagName === 'TEXTAREA') {
    static_cast<HTMLSelectElement | HTMLTextAreaElement>(element);
    element.value = model.value ?? '';
    const change = () => (model.value = element.value);
    element.addEventListener('change', change);
    own(element, () => element.removeEventListener('change', change));
    model.listen((newValue: string) => (element.value = newValue), { owner: element });
    return;
  }

  $warn(`not supported element for k-model, nodeType: ${element.nodeType}`);
}
