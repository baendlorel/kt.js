import type { RawContent } from '@/types/h.js';
import { $append } from '@common/lib/dom.js';
import { $isArray } from '@common/lib/native.js';

export function applyContent(element: HTMLElement, content: RawContent): void {
  if ($isArray(content)) {
    $append.apply(element, content as any[]);
  } else {
    $append.call(element, content);
  }
}
