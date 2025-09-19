import { $define } from '@/lib/native.js';

// todo consider publishing it as an npm package
/**
 * bindArgs and creates a new function with bound leading arguments.
 * - type safe
 * @param fn
 * @param boundArgs
 * @returns
 */
export function bindArgs<
  T extends (...args: any[]) => any,
  Bound extends any[] = [],
  Remainder extends any[] = DropPrefix<Parameters<T>, Bound['length']>,
>(fn: T, ...boundArgs: Bound & Partial<Parameters<T>>): (...args: Remainder) => ReturnType<T> {
  const newFn = function (...args: any[]) {
    return fn.apply(boundArgs.concat(args));
  };

  $define(newFn, 'name', { value: fn.name, configurable: true });
  $define(newFn, 'length', {
    value: Math.max(0, fn.length - boundArgs.length),
    configurable: true,
  });

  return newFn;
}
