import { $defineProperties } from '@/lib/index.js';
import { descriptors } from './properties.js';

export function enhance(element: HTMLElement): void {
  $defineProperties(element, descriptors);
}
