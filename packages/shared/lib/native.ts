export const $isArray = Array.isArray;

export const $hasOwn = Object.prototype.hasOwnProperty;

export const $keys = Object.keys as <T>(o: T) => Array<keyof T>;
export const $defineProperties = Object.defineProperties;

const emptyPromiseHandler: (...args: any[]) => Promise<any> = () => ({}) as unknown as Promise<any>;
if (typeof Promise === 'undefined') {
  window.Promise = { resolve: emptyPromiseHandler, reject: emptyPromiseHandler } as any;
}
