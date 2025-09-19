// lib
import { $defineProperties } from '@/lib/native.js';
import { methods } from './methods.js';
import { getDescriptorMap } from './properties.js';

export function enhance(element: HTMLKEnhancedElement): void {
  $defineProperties(element, getDescriptorMap());
  element.kon = methods.kon;
  element.koff = methods.koff;
  element.kmount = methods.kmount;
}
