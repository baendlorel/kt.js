import type { KTRawContent } from '@/types/h.js';
import { $append, $isArray } from '@/lib/index.js';

export function applyContent(element: HTMLElement, content: KTRawContent): void {
  if ($isArray(content)) {
    $append.apply(element, content as any[]);
  } else {
    $append.call(element, content);
  }
}
