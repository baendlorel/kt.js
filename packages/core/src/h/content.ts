import type { KTAvailableContent, KTRawContent } from '@/types/h.js';
import { $append, $isArray, $isThenable } from '@/lib/index.js';
import { KTRef } from '../jsx/ref.js';

function apd(element: HTMLElement | DocumentFragment, c: KTAvailableContent[] | KTAvailableContent) {
  console.log('apd', c);

  if ($isArray(c)) {
    for (let i = 0; i < c.length; i++) {
      const r = c[i];
      if (typeof r === 'object' && r !== null && 'isKT' in r) {
        $append.call(element, r.value as Node);
      } else {
        $append.call(element, r as Node);
      }
    }
  } else {
    if (typeof c === 'object' && c !== null && 'isKT' in c) {
      $append.call(element, c.value as Node);
    } else {
      $append.call(element, c as Node);
    }
  }
}

export function applyContent(element: HTMLElement, content: KTRawContent): void {
  if ($isArray(content)) {
    for (let i = 0; i < content.length; i++) {
      apd(element, content[i]);
    }
  } else {
    apd(element, content as KTAvailableContent);
  }
}
