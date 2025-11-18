import type { RawContent } from '@/types/h.js';
import { $append, $isArray } from '@ktjs/shared';

export function applyContent(element: HTMLElement, content: RawContent): void {
  if ($isArray(content)) {
    $append.apply(element, content as any[]);
  } else {
    $append.call(element, content);
  }
}
