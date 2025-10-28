export const $isArray = Array.isArray;
export const $stringSlice = String.prototype.slice;

export const $keys = Object.keys as <T>(o: T) => (keyof T)[];
export const $assign = Object.assign;
export const $defineProperties = Object.defineProperties;
