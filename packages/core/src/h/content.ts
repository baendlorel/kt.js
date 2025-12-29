import type { KTAvailableContent, KTRawContent } from '@/types/h.js';
import { $append, $isArray, $isThenable } from '@/lib/index.js';
import { KTRef } from '../jsx/ref.js';

function apd(element: HTMLElement | DocumentFragment, resolved: KTAvailableContent[] | KTAvailableContent) {
  if ($isArray(resolved)) {
    for (let i = 0; i < resolved.length; i++) {
      const r = resolved[i];
      $append.call(element, r as Node);
    }
  } else {
    $append.call(element, resolved as Node);
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
