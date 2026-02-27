// Cached native methods for performance optimization

export const $isArray = Array.isArray;
export const $ArrayFrom = Array.from;

export const $is = Object.is;
export const $assign = Object.assign;
export const $hasOwn = Object.prototype.hasOwnProperty;
export const $toString = Object.prototype.toString;

export const $keys = Object.keys as <T>(o: T) => Array<keyof T>;
export const $defines = Object.defineProperties;
export const $define = Object.defineProperty;
export const $entries = Object.entries as <T>(o: T) => Array<[keyof T, T[keyof T]]>;

export const $random = Math.random;
export const $max = Math.max;
export const $min = Math.min;
export const $round = Math.round;
export const $clamp = (value: number, min: number, max: number) => $max(min, $min(max, value));

export const $isThenable = (o: any): o is Promise<any> => typeof o?.then === 'function';
