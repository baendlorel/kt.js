import type { KTRawContent } from '@/types/h.js';
import { $append, $isArray } from '@/lib/index.js';
import { Ref } from '../jsx/ref.js';

export function applyContent(element: HTMLElement, content: KTRawContent): void {
  if ($isArray(content)) {
    for (let i = 0; i < content.length; i++) {
      let c = content[i];
      if (c instanceof Ref) {
        $append.call(element, c.value);
      } else {
        $append.call(element, c as string);
      }
    }
  } else {
    if (content instanceof Ref) {
      $append.call(element, content.value);
    } else {
      $append.call(element, content as string);
    }
  }
}
