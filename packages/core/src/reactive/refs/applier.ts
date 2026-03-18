import type { KTRef } from '../ref.js';

/**
 * Calls the setter-like function and emit all changes of it
 */
export const apply: <R>(dataRef: KTRef<unknown>, setter: (...args: any[]) => R, ...args: unknown[]) => R = (
  dataRef,
  setter,
  ...args
) => {
  const v = dataRef.value;
  const result = setter.apply(v, args);
  (dataRef as any)._onChanges.forEach((handler: (...args: any[]) => void) => handler(v, v));
  return result;
};
