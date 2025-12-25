import type { KTRawContent } from '@/types/h.js';
import { $append, $isArray } from '@/lib/index.js';

export function applyContent(element: HTMLElement, content: KTRawContent | (() => KTRawContent)): void {
  if (typeof content === 'function') {
    content = content();
  }

  if ($isArray(content)) {
    for (let i = 0; i < content.length; i++) {
      let c = content[i];
      if (typeof c === 'function') {
        c = c();
      } else if (typeof c === 'number') {
        $append.call(element, c.toString());
      } else {
        $append.call(element, c!);
      }
    }
  } else {
    if (typeof content === 'number') {
      $append.call(element, content.toString());
    } else {
      $append.call(element, content!);
    }
  }
}
