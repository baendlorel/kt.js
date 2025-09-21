// lib
import { $defineProperties } from '@/lib/index.js';
import { methods } from './methods.js';
import { descriptors } from './properties.js';

export function enhance(element: HTMLKEnhancedElement): void {
  // todo 对于是否为空元素、自闭合的元素，ktext应当被优化掉
  $defineProperties(element, descriptors);
  element.kon = methods.kon;
  element.koff = methods.koff;
  element.kmount = methods.kmount;
}
