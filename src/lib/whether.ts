import { HTMLKEnhancedInputElement } from '@/types/enhance.js';

export const $isObject = <T extends object>(o: unknown): o is T => typeof o === 'object' && o !== null;

export const $isInput = (element: HTMLElement): element is HTMLKEnhancedInputElement =>
  element.tagName === 'INPUT' || element.tagName === 'SELECT' || element.tagName === 'TEXTAREA';
