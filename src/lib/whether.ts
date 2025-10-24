import { HTMLKEnhancedInputElement } from '@/types/enhance.js';

export const $isObject = <T extends object>(o: unknown): o is T => typeof o === 'object' && o !== null;

/**
 * Using `instanceof` not `tagName` because there might be custom elements.
 */
export const $isInput = (element: HTMLElement): element is HTMLKEnhancedInputElement =>
  element instanceof HTMLInputElement || element instanceof HTMLSelectElement || element instanceof HTMLTextAreaElement;
