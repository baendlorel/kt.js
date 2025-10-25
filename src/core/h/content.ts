import { RawContent } from '@/types/h.js';
import { $isArray, $appendChild, $textNode } from '@/lib/index.js';
import { throws } from '@/lib/error.js';
import { KEnhanced } from '@/types/enhance.js';

function contentIsArray(element: HTMLElement, content: (HTMLElement | string | undefined)[]) {
  const len = content.length;
  for (let i = 0; i < len; i++) {
    const c = content[i];
    if (c === undefined) {
      continue;
    } else if (typeof c === 'object') {
      $appendChild.call(element, c);
    } else if (typeof c === 'string') {
      $appendChild.call(element, $textNode(c));
    } else {
      throws('__func__ invalid content.');
    }
  }
}

export function applyContent(element: HTMLElement, content: RawContent): void {
  if (typeof content === 'string') {
    (element as HTMLElement & KEnhanced).ktext = content;
  } else if ($isArray(content)) {
    contentIsArray(element, content);
  } else if (content instanceof HTMLElement) {
    $appendChild.call(element, content);
  } else {
    throws('__func__ invalid content.');
  }
}
