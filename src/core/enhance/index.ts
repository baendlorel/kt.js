// lib
import { $defineProperties } from '@/lib/index.js';
import { methods } from './methods.js';
import { descriptors } from './properties.js';

export function enhance(element: HTMLKElement): void {
  $defineProperties(element, descriptors);
  element.kon = methods.kon;
  element.koff = methods.koff;
  element.kmount = methods.kmount;
}
