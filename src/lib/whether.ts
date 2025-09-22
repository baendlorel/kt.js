export const $is = Object.is as <B extends any>(a: any, b: B) => a is B;

export const $isSafeInteger = Number.isSafeInteger as (n: any) => n is number;

export const $isObject = <T extends object>(o: any): o is T => typeof o === 'object' && o !== null;

export const $isInputElement = (element: HTMLElement): element is HTMLKEnhancedInputElement => {
  switch (element.tagName.toLowerCase()) {
    case 'input':
    case 'select':
    case 'textarea':
      return true;
    default:
      return false;
  }
};
