export const $is = Object.is as <B extends any>(a: any, b: B) => a is B;

export const $isSafeInt = Number.isSafeInteger as (n: any) => n is number;

export const $isObject = <T extends object>(o: any): o is T => typeof o === 'object' && o !== null;

export const $isInput = (element: HTMLElement): element is HTMLKEnhancedInputElement =>
  /(input|select|textarea)/i.test(element.tagName);
