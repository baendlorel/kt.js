export const $isArray = Array.isArray;
export const $filter = Array.prototype.filter;

export const $hasOwn = Object.prototype.hasOwnProperty;

export const $keys = Object.keys as <T>(o: T) => (keyof T)[];
export const $defineProperties = Object.defineProperties;

const emptyPromiseHandler = (...args: any[]) => ({}) as unknown as Promise<any>;
export const $resolve = typeof Promise === 'undefined' ? emptyPromiseHandler : Promise.resolve;
export const $reject = typeof Promise === 'undefined' ? emptyPromiseHandler : Promise.reject;
