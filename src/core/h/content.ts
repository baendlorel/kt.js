import { RawContent } from '@/types/h.js';
import { $isArray, $append } from '@/lib/index.js';
import { throws } from '@/lib/error.js';
import { KEnhanced } from '@/types/enhance.js';

export function applyContent(element: HTMLElement, content: RawContent): void {
  if (typeof content === 'string') {
    (element as HTMLElement & KEnhanced).ktext = content;
  } else if ($isArray(content)) {
    $append.apply(element, content as any[]);
  } else if (content instanceof HTMLElement) {
    $append.call(element, content);
  } else {
    throws('__func__ invalid content.');
  }
}
