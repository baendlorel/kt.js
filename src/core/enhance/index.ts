// lib
import { HTMLKElement } from '@/types/enhance.js';
import { $defineProperties } from '@/lib/index.js';
import { descriptors } from './properties.js';

export function enhance(element: HTMLKElement): void {
  $defineProperties(element, descriptors);
}
