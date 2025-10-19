import { HTMLKEnhancedInputElement } from '@/types/enhance.js';

export const $isSafeInt = Number.isSafeInteger as (n: unknown) => n is number;

export const $isObject = <T extends object>(o: unknown): o is T =>
  typeof o === 'object' && o !== null;

export const $isInput = (element: HTMLElement): element is HTMLKEnhancedInputElement =>
  /(input|select|textarea)/i.test(element.tagName);
