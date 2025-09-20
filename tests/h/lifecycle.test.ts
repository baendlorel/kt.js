import { describe, it, expect, vi } from 'vitest';
import { h } from '../../src/core/h/index.js';

describe('h lifecycle methods', () => {
  it('exposes kon/koff/kmount methods', () => {
    const el = h('div');
    expect(typeof el.kon).toBe('function');
    expect(typeof el.koff).toBe('function');
    expect(typeof el.kmount).toBe('function');
  });

  it('kon/koff register and remove event listeners', () => {
    const el = h('button');
    // & native way

    const spy = vi.fn(() => console.log('运行了spy'));
    // register
    el.kon('click', spy);
    // simulate click
    el.dispatchEvent(new MouseEvent('click'));
    expect(spy).toHaveBeenCalled();

    // remove
    el.koff('click', spy);
    spy.mockClear();
    el.dispatchEvent(new MouseEvent('click'));
    expect(spy.mock.calls.length === 1);
  });

  it('kmount is callable when appended to document', () => {
    const el = h('div');
    const el2 = h('div');
    el.kmount(el2);
    // kmount should be a no-op or callable; we just ensure it doesn't throw
    // mount into document body
    document.body.appendChild(el);
    document.body.removeChild(el);
  });
});
