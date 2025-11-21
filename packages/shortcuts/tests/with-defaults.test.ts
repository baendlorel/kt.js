import '@ktjs/runtime';
import { describe, it, expect } from 'vitest';
import { h } from '@ktjs/core';
import { aliasH } from '../src/alias-h.js';
import { withDefaults } from '../src/with-defaults.js';

describe('withDefaults', () => {
  it('throws when func is not h or alias', () => {
    const bad = () => {};
    expect(() => withDefaults(bad as any, {} as any)).toThrow(/withDefaults can only be used/);
  });

  it('throws when defaultAttr is not an object', () => {
    const f = h as any;
    expect(() => withDefaults(f, null as any)).toThrow(/defaultAttr must be an object/);
    expect(() => withDefaults(f, 123 as any)).toThrow(/defaultAttr must be an object/);
  });

  it('merges class when defaultAttr.class is a string (h variant, attr string)', () => {
    const wrapped = withDefaults(h as any, { class: 'dft', id: 'x' } as any) as typeof h;
    const el = wrapped('div', 'cls', 't');
    expect(el.tagName.toLowerCase()).toBe('div');
    expect(el.className).toBe('cls dft');
    expect(el.getAttribute('id')).toBe('x');
  });

  it('merges class when defaultAttr.class is a string (h variant, attr object)', () => {
    const wrapped = withDefaults(h as any, { class: 'dft', id: 'x' } as any) as typeof h;
    const el = wrapped('section', { class: 'a', id: 'my' } as any, 'c');
    expect(el.tagName.toLowerCase()).toBe('section');
    expect(el.className).toBe('a dft');
    expect(el.getAttribute('id')).toBe('my');
  });

  it('merges when defaultAttr.class is not a string (attr string)', () => {
    const wrapped = withDefaults(h as any, { id: 'x' } as any) as typeof h;
    const el = wrapped('div', 'cls', 't');
    expect(el.className).toBe('cls');
    expect(el.getAttribute('id')).toBe('x');
  });

  it('merges when defaultAttr.class is not a string (attr object)', () => {
    const wrapped = withDefaults(h as any, { id: 'x', title: 't1' } as any) as typeof h;
    const el = wrapped('div', { class: 'c', id: 'over' } as any, 'x');
    expect(el.className).toBe('c');
    expect(el.getAttribute('id')).toBe('over');
    expect(el.getAttribute('title')).toBe('t1');
  });

  it('works for alias (attr string) with default class string', () => {
    const alias = aliasH('div');
    const wrapped = withDefaults(alias as any, { class: 'dft' } as any) as any;
    const el = wrapped('a', 't');
    expect(el.tagName.toLowerCase()).toBe('div');
    expect(el.className).toBe('a dft');
  });

  it('works for alias (attr object) with default class string', () => {
    const alias = aliasH('button');
    const wrapped = withDefaults(alias as any, { class: 'dft', type: 'submit' } as any) as any;
    const el = wrapped({ class: 'ok', id: 'b' }, 'x');
    expect(el.tagName.toLowerCase()).toBe('button');
    expect(el.className).toBe('ok dft');
    expect(el.getAttribute('type')).toBe('submit');
    expect(el.getAttribute('id')).toBe('b');
  });
});
