import { $define, $max } from '@/lib/native.js';

type FirstNParamsAlt<T extends (...args: any) => any, N extends number> =
  Parameters<T> extends [...infer F, ...infer R]
    ? F['length'] extends N
      ? F
      : [...F, ...FirstNParamsAlt<(...args: R) => any, N>] // 这个版本递归逻辑稍有不同，但结果一致
    : [];

type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc['length']]>;

type AllPossibleParams<
  F extends (...args: any) => any,
  N extends number = Parameters<F>['length'],
> = Enumerate<N> | N extends infer L extends number ? FirstNParamsAlt<F, L> : never;

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
  Bound extends FirstParamOrAllParams<T> = [],
  Remainder extends any[] = DropPrefix<Parameters<T>, Bound['length']>,
>(fn: T, ...boundArgs: Bound & Partial<Parameters<T>>): (...args: Remainder) => ReturnType<T> {
  const newFn = function (...args: any[]) {
    return fn(...boundArgs, ...args);
  };

  $define(newFn, 'name', { value: fn.name, configurable: true });
  $define(newFn, 'length', {
    value: $max(0, fn.length - boundArgs.length),
    configurable: true,
  });

  return newFn;
}
