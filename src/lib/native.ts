export const $apply = Reflect.apply;
export const $set = Reflect.set;
export const $get = Reflect.get;
export const $define = Reflect.defineProperty;
export const $delete = Reflect.deleteProperty;

export const $isArray = Array.isArray;
export const $arrayFrom = Array.from;

export const $keys = Object.keys as <T>(o: T) => (keyof T)[];
export const $assign = Object.assign;
export const $defineProperties = Object.defineProperties;

export const $max = Math.max;
export const $min = Math.min;
