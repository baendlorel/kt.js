import '@ktjs/runtime';
import { describe, it, expect } from 'vitest';
import { div, btn } from '../src/common.js';

describe('shortcuts alias', () => {
  it('div alias creates a div element with string class and text', () => {
    const el = div('my-class', 'hello');
    expect(el.tagName.toLowerCase()).toBe('div');
    expect(el.className).toBe('my-class');
    expect(el.textContent).toBe('hello');
  });

  it('btn alias creates a button element and accepts attribute object', () => {
    const el = btn({ id: 'b1', class: 'btn primary' }, 'ok');
    expect(el.tagName.toLowerCase()).toBe('button');
    expect(el.getAttribute('id')).toBe('b1');
    expect(el.classList.contains('btn')).toBe(true);
    expect(el.classList.contains('primary')).toBe(true);
    expect(el.textContent).toBe('ok');
  });
});
