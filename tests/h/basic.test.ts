import { describe, it, expect } from 'vitest';
import { h } from '../../src/core/h/index.js';

describe('h basic usage', () => {
  it('creates an element with string className', () => {
    const el = h('div', 'my-class', 'hello');
    expect(el.tagName.toLowerCase()).toBe('div');
    expect(el.className).toBe('my-class');
    expect(el.textContent).toBe('hello');
  });

  it('creates element with attribute object and children array', () => {
    const child = h('span', 'child', 'c');
    const el = h('section', { id: 's1', class: ['a', 'b'], style: { color: 'red' } }, [child, 't']);
    expect(el.getAttribute('id')).toBe('s1');
    expect(el.classList.contains('a')).toBe(true);
    expect(el.classList.contains('b')).toBe(true);
    expect(el.style.color).toBe('red');
    expect(el.children.length).toBe(1);
    expect(el.textContent).toContain('t');
  });
});
