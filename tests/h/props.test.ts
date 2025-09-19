import { describe, it, expect } from 'vitest';
import { h } from '../../src/core/h/index.js';

describe('h properties', () => {
  it('has isKT true and kid number', () => {
    const a = h('div');
    const b = h('div');
    expect(a.isKT).toBe(true);
    expect(typeof a.kid).toBe('number');
    expect(a.kid).not.toBe(b.kid);
  });
});
