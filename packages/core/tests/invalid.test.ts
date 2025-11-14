import { describe, it, expect } from 'vitest';
import { h } from '../../src/core/h/index.js';

describe('h invalid inputs', () => {
  it('throws for non-string tag', () => {
    // @ts-ignore
    expect(() => h(123)).toThrow(Error);
  });

  it('throws for invalid attr type', () => {
    // attr must be string or object
    // @ts-ignore
    expect(() => h('div', 123)).toThrow(Error);
  });
});
