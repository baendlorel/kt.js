import type { KTRef } from './ref.js';

/**
 * Calls the setter-like function and emit all changes of it
 */
export const apply = (r: KTRef<any>, setter: (...args: any[]) => any, args: any[]) => {
  const v = r.value;
  const result = setter.apply(v, args);
  (r as any)._onChanges.forEach((handler: (...args: any[]) => void) => handler(v, v));
  return result;
};

export const applyArgless = (r: KTRef<any>, setter: (...args: any[]) => any) => {
  const v = r.value;
  const result = setter.apply(v);
  (r as any)._onChanges.forEach((handler: (...args: any[]) => void) => handler(v, v));
  return result;
};
