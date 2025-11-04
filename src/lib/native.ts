export const $isArray = Array.isArray;
export const $stringSlice = String.prototype.slice;

export const $keys = Object.keys as <T>(o: T) => (keyof T)[];
export const $defineProperties = Object.defineProperties;

const emptyPromiseHandler = (...args: any[]) => ({}) as unknown as Promise<any>;
export const $resolve = typeof Promise === 'undefined' ? emptyPromiseHandler : Promise.resolve;
export const $reject = typeof Promise === 'undefined' ? emptyPromiseHandler : Promise.reject;
