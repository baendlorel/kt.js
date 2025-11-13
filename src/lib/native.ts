export const $rand = Math.random;
export const randStr = (length: number = 8): string =>
  $rand()
    .toString(36)
    .substring(2, 2 + length);

export const $isArray = Array.isArray;
export const $filter = Array.prototype.filter;

export const $hasOwn = Object.prototype.hasOwnProperty;

export const $keys = Object.keys as <T>(o: T) => (keyof T)[];
export const $defineProperties = Object.defineProperties;

const emptyPromiseHandler = (...args: any[]) => ({}) as unknown as Promise<any>;
if (typeof Promise === 'undefined') {
  window.Promise = { resolve: emptyPromiseHandler, reject: emptyPromiseHandler } as any;
}
