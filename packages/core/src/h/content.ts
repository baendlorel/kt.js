import type { KTRawContent } from '@/types/h.js';
import { $append, $isArray } from '@/lib/index.js';
import { KTRef } from '../jsx/ref.js';

function apd(element: HTMLElement, content: KTRawContent) {
  if (content && (content as KTRef<any>).isKT) {
    $append.call(element, (content as KTRef<any>).value);
  } else {
    $append.call(element, content as string);
  }
}

export function applyContent(element: HTMLElement, content: KTRawContent): void {
  if ($isArray(content)) {
    for (let i = 0; i < content.length; i++) {
      apd(element, content[i]);
    }
  } else {
    apd(element, content);
  }
}
