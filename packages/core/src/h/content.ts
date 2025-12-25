import type { KTRawContent } from '@/types/h.js';
import { $append, $isArray } from '@/lib/index.js';
import { KTRef } from '../jsx/ref.js';

export function applyContent(element: HTMLElement, content: KTRawContent): void {
  if ($isArray(content)) {
    for (let i = 0; i < content.length; i++) {
      let c = content[i];
      if (c && (c as KTRef<any>).isRef) {
        $append.call(element, (c as KTRef<any>).value);
      } else {
        $append.call(element, c as string);
      }
    }
  } else {
    if (content && (content as KTRef<any>).isRef) {
      $append.call(element, (content as KTRef<any>).value);
    } else {
      $append.call(element, content as string);
    }
  }
}
