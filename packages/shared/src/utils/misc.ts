// String manipulation utilities

import { static_cast } from 'type-narrow';
import { $is, $isArray, $keys } from './native.js';

/**
 * Default empty function
 */
export const $emptyFn = (() => true) as (...args: any[]) => any;
export const $identity = <T>(x: T): T => x;

/**
 * SameValueZero comparison, similar to `Object.is` but treats `+0 === -0`
 */
export const $SameValueZero = (x: unknown, y: unknown): boolean => (x !== x && y !== y) || x === y;

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
  callback: (item: unknown, index: number, array: unknown[]) => Promise<void>,
): Promise<void> => {
  const len = array.length;
  for (let i = 0; i < len; i++) {
    await callback(array[i], i, array);
  }
};

export const $arrayPushUnique = (array: unknown[], item: unknown): void => {
  if (array.indexOf(item) === -1) {
    array.push(item);
  }
};

export const $arrayDelete = (array: unknown[], item: unknown): void => {
  const index = array.indexOf(item);
  if (index !== -1) {
    array[index] = array[array.length - 1];
    array.pop();
  }
};

export const $deepMatch = (obj: any, pattern: any): boolean => {
  const keys = $keys(pattern);

  for (const key of keys) {
    const patternValue = pattern[key];
    const objValue = obj[key];

    if ($isArray(patternValue)) {
      if (!$isArray(objValue)) {
        return false;
      }
      if (patternValue.length !== objValue.length) {
        return false;
      }
      for (let i = 0; i < patternValue.length; i++) {
        if (typeof patternValue[i] === 'object' && patternValue[i] !== null) {
          if (typeof objValue[i] !== 'object' || objValue[i] === null) {
            return false;
          }
          if (!$deepMatch(objValue[i], patternValue[i])) {
            return false;
          }
        } else if (!$is(patternValue[i], objValue[i])) {
          return false;
        }
      }
    } else if (typeof patternValue === 'object' && patternValue !== null) {
      if (typeof objValue !== 'object' || objValue === null) {
        return false;
      }
      if (!$deepMatch(objValue, patternValue)) {
        return false;
      }
    } else {
      if (!$is(patternValue, objValue)) {
        return false;
      }
    }
  }

  return true;
};
