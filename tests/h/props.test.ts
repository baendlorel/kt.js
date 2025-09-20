import { describe, it, expect } from 'vitest';
import { h } from '../../src/core/h/index.js';
import { isKEnhanced } from '../../src/core/privates.js';

describe('h properties', () => {
  it('has true', () => {
    const a = h('div');
    expect(isKEnhanced(a)).toBe(true);
  });
});
