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
