export const $apply = Reflect.apply;
export const $define = Reflect.defineProperty;
export const $delete = Reflect.deleteProperty;

export const $isArray = Array.isArray;
export const $arrayFrom = Array.from;
export const $arraySlice = Array.prototype.slice;
export const $arrayPush = Array.prototype.push;
export const $arraySplice = Array.prototype.splice;
export const $arrayConcat = Array.prototype.concat;
export const $arrayJoin = Array.prototype.join;
export const $arrayReverse = Array.prototype.reverse;

export const $stringCharCodeAt = String.prototype.charCodeAt;
export const $stringReplace = String.prototype.replace;
export const $stringSlice = String.prototype.slice;
export const $stringToLowerCase = String.prototype.toLowerCase;
export const $stringToUpperCase = String.prototype.toUpperCase;

export const $keys = Object.keys as <T>(o: T) => (keyof T)[];
export const $assign = Object.assign;
export const $defineProperties = Object.defineProperties;

export const $max = Math.max;
export const $min = Math.min;
export const $clamp = (n: number, a: number, b: number) => $min(b, $max(a, n));

export const $set = (o: any, key: string | symbol, value: any) => (o[key] = value);
export const $get = (o: any, key: string | symbol) => o[key];
