// String manipulation utilities

import { $is, $isArray } from './native.js';

/**
 * Default empty function
 */
export const $emptyFn = (() => true) as (...args: any[]) => any;

export const $isSame = (a: unknown, b: unknown): boolean => {
  if ($isArray(a)) {
    return true; // always trigger an array
  }
  return $is(a, b);
};

/**
 * Safe and quick forEach implementation that works with array-like objects and handles sparse arrays.
 */
export const $forEach = (
  array: unknown[],
  callback: (item: unknown, index: number, array: unknown[]) => void,
): void => {
  const len = array.length;
  for (let i = 0; i < len; i++) {
    callback(array[i], i, array);
  }
};

/**
 * Async version of $forEach that allows for asynchronous callbacks. It processes items sequentially, awaiting each callback before moving to the next.
 */
export const $forEachAsync = async (
  array: unknown[],
  callback: (item: unknown, index: number, array: unknown[]) => void,
): Promise<void> => {
  const len = array.length;
  for (let i = 0; i < len; i++) {
    await callback(array[i], i, array);
  }
};
