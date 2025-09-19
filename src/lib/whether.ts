export const $is = Object.is as <B extends unknown>(a: unknown, b: B) => a is B;

export const $isSafeInteger = Number.isSafeInteger as (n: unknown) => n is number;

export const $isObject = <T extends object>(o: unknown): o is T =>
  typeof o === 'object' && o !== null;
