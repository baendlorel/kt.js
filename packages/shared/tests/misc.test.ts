import { describe, it, expect } from 'vitest';
import { $emptyFn, $isSame } from '../src/utils/misc.js';

describe('misc utilities', () => {
  describe('$emptyFn', () => {
    it('should return true when called', () => {
      expect($emptyFn()).toBe(true);
      expect($emptyFn(1, 2, 3)).toBe(true);
    });
  });

  describe('$isSame', () => {
    it('should always return true for arrays', () => {
      expect($isSame([], [])).toBe(true);
      expect($isSame([1, 2], [3, 4])).toBe(true);
      expect($isSame([], null)).toBe(true);
      expect($isSame([], undefined)).toBe(true);
    });

    it('should use $is for non-arrays', () => {
      expect($isSame(1, 1)).toBe(true);
      expect($isSame(0, -0)).toBe(false); // Object.is difference
      expect($isSame(NaN, NaN)).toBe(true);
      expect($isSame('a', 'a')).toBe(true);
      expect($isSame({}, {})).toBe(false);
      const obj = {};
      expect($isSame(obj, obj)).toBe(true);
    });
  });
});