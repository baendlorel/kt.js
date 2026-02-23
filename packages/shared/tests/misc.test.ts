import { describe, it, expect } from 'vitest';
import { $emptyFn } from '../src/utils/misc.js';

describe('misc utilities', () => {
  describe('$emptyFn', () => {
    it('should return true when called', () => {
      expect($emptyFn()).toBe(true);
      expect($emptyFn(1, 2, 3)).toBe(true);
    });
  });
});
