export const $isArray = Array.isArray;

export const $hasOwn = Object.prototype.hasOwnProperty;

export const $keys = Object.keys as <T>(o: T) => Array<keyof T>;
export const $defines = Object.defineProperties;
export const $mark = (func: (...args: any[]) => any, tag: string) =>
  $defines(func, { __ktjs_h__: { value: tag, configurable: true } });

const emptyPromiseHandler: (...args: any[]) => Promise<any> = () => ({}) as unknown as Promise<any>;
if (typeof Promise === 'undefined') {
  window.Promise = { resolve: emptyPromiseHandler, reject: emptyPromiseHandler } as any;
}

export const $isThenable = (o: any): o is Promise<any> =>
  typeof o === 'object' && o !== null && 'then' in o && typeof o.then === 'function';
