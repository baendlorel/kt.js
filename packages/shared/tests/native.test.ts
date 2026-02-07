import { describe, it, expect } from 'vitest';
import {
  $isArray,
  $ArrayFrom,
  $is,
  $assign,
  $hasOwn,
  $toString,
  $keys,
  $defines,
  $define,
  $entries,
  $random,
  $isThenable,
} from '../src/utils/native.js';

describe('native utilities', () => {
  describe('$isArray', () => {
    it('should return true for arrays', () => {
      expect($isArray([])).toBe(true);
      expect($isArray([1, 2, 3])).toBe(true);
      expect($isArray(new Array(5))).toBe(true);
    });

    it('should return false for non-arrays', () => {
      expect($isArray({})).toBe(false);
      expect($isArray('array')).toBe(false);
      expect($isArray(null)).toBe(false);
      expect($isArray(undefined)).toBe(false);
      expect($isArray(123)).toBe(false);
      expect($isArray(() => {})).toBe(false);
    });
  });

  describe('$ArrayFrom', () => {
    it('should convert array-like objects to arrays', () => {
      const arrayLike = { 0: 'a', 1: 'b', length: 2 };
      expect($ArrayFrom(arrayLike)).toEqual(['a', 'b']);
      expect($ArrayFrom('hello')).toEqual(['h', 'e', 'l', 'l', 'o']);
    });
  });

  describe('$is', () => {
    it('should perform SameValueZero equality', () => {
      expect($is(1, 1)).toBe(true);
      expect($is(0, -0)).toBe(false); // Different from ===
      expect($is(NaN, NaN)).toBe(true); // Different from ===
      expect($is('a', 'a')).toBe(true);
      expect($is({}, {})).toBe(false);
      const obj = {};
      expect($is(obj, obj)).toBe(true);
    });
  });

  describe('$assign', () => {
    it('should copy properties from sources to target', () => {
      const target = { a: 1 };
      const source = { b: 2 };
      const result = $assign(target, source);
      expect(result).toBe(target);
      expect(target).toEqual({ a: 1, b: 2 });
    });
  });

  describe('$hasOwn', () => {
    it('should check if object has own property', () => {
      const obj = { a: 1 };
      expect($hasOwn.call(obj, 'a')).toBe(true);
      expect($hasOwn.call(obj, 'toString')).toBe(false); // inherited
      expect($hasOwn.call(obj, 'b')).toBe(false);
    });
  });

  describe('$toString', () => {
    it('should return string tag of object', () => {
      expect($toString.call([])).toBe('[object Array]');
      expect($toString.call({})).toBe('[object Object]');
      expect($toString.call('')).toBe('[object String]');
      expect($toString.call(123)).toBe('[object Number]');
    });
  });

  describe('$keys', () => {
    it('should return object keys', () => {
      expect($keys({ a: 1, b: 2 })).toEqual(['a', 'b']);
      expect($keys({})).toEqual([]);
    });
  });

  describe('$entries', () => {
    it('should return object entries', () => {
      expect($entries({ a: 1, b: 2 })).toEqual([
        ['a', 1],
        ['b', 2],
      ]);
      expect($entries({})).toEqual([]);
    });
  });

  describe('$random', () => {
    it('should return a number between 0 and 1', () => {
      const val = $random();
      expect(val).toBeGreaterThanOrEqual(0);
      expect(val).toBeLessThan(1);
      expect(typeof val).toBe('number');
    });
  });

  describe('$isThenable', () => {
    it('should return true for Promise objects', () => {
      expect($isThenable(Promise.resolve())).toBe(true);
      expect($isThenable(new Promise(() => {}))).toBe(true);
    });

    it('should return false for non-Promise objects', () => {
      expect($isThenable({})).toBe(false);
      expect($isThenable({ then: 'not a function' })).toBe(false);
      expect($isThenable(null)).toBe(false);
      expect($isThenable(undefined)).toBe(false);
      expect($isThenable(123)).toBe(false);
      expect($isThenable('promise')).toBe(false);
    });

    it('should return true for objects with .then method', () => {
      const thenable = { then: () => {} };
      expect($isThenable(thenable)).toBe(true);
    });
  });
});