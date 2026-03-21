import { describe, it, expect, beforeEach, vi } from 'vitest';
import { Fragment, convertChildrenToElements } from '../src/jsx/fragment.js';
import { h } from '../src/h/index.js';
import { ref } from '@ktjs/core';

describe('Fragment Component', () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  it('should create anchor comment node', () => {
    const children = [h('div', {}, 'A'), h('div', {}, 'B')];
    const anchor = Fragment({ children });

    expect(anchor.nodeType).toBe(Node.COMMENT_NODE);
    expect(anchor.textContent).toBe('kt-fragment');
  });

  it('should attach __kt_fragment_list__ to anchor', () => {
    const children = [h('div', {}, 'A'), h('div', {}, 'B')];
    const anchor = Fragment({ children });

    expect((anchor as any).__kt_fragment_list__).toBeDefined();
    expect(Array.isArray((anchor as any).__kt_fragment_list__)).toBe(true);
    expect((anchor as any).__kt_fragment_list__.length).toBe(2);
  });

  it('should render children elements when anchor is in DOM', () => {
    const children = [h('div', { class: 'item' }, 'A'), h('div', { class: 'item' }, 'B')];
    const anchor = Fragment({ children });

    container.appendChild(anchor);

    // Children should be inserted after anchor
    const items = container.querySelectorAll('.item');
    expect(items.length).toBe(2);
    expect(items[0].textContent).toBe('A');
    expect(items[1].textContent).toBe('B');
    expect(items[0].previousSibling).toBe(anchor);
    expect(items[1].previousSibling).toBe(items[0]);
  });

  it('should support reactive children array', () => {
    const childrenRef = ref([h('div', { class: 'item' }, 'A'), h('div', { class: 'item' }, 'B')]);
    const anchor = Fragment({ children: childrenRef });

    container.appendChild(anchor);

    let items = container.querySelectorAll('.item');
    expect(items.length).toBe(2);

    // Update reactive array
    childrenRef.value = [
      h('div', { class: 'item' }, 'C'),
      h('div', { class: 'item' }, 'D'),
      h('div', { class: 'item' }, 'E'),
    ];

    items = container.querySelectorAll('.item');
    expect(items.length).toBe(3);
    expect(items[0].textContent).toBe('C');
    expect(items[1].textContent).toBe('D');
    expect(items[2].textContent).toBe('E');
  });

  it('should update internal state when not in DOM', () => {
    const childrenRef = ref([h('div', { class: 'item' }, 'A'), h('div', { class: 'item' }, 'B')]);
    const anchor = Fragment({ children: childrenRef });

    // Update while anchor not in DOM
    childrenRef.value = [h('div', { class: 'item' }, 'C')];

    expect((anchor as any).__kt_fragment_list__.length).toBe(1);

    // Now add to DOM
    container.appendChild(anchor);

    const items = container.querySelectorAll('.item');
    expect(items.length).toBe(1);
    expect(items[0].textContent).toBe('C');
  });

  it('should support ref prop', () => {
    const children = [h('div', {}, 'A')];
    const fragmentRef = ref<JSX.Element>();
    const anchor = Fragment({ children, ref: fragmentRef });

    expect(fragmentRef.value).toBe(anchor);
  });

  it('should handle empty children array', () => {
    const anchor = Fragment({ children: [] });

    expect((anchor as any).__kt_fragment_list__.length).toBe(0);

    container.appendChild(anchor);

    // No elements should be added after anchor
    expect(anchor.nextSibling).toBeNull();
  });

  it('should handle null/undefined children', () => {
    // TypeScript should prevent this, but test with type assertion
    const anchor = Fragment({ children: [] });

    expect((anchor as any).__kt_fragment_list__.length).toBe(0);
  });

  it('should remove old elements and insert new ones on update', () => {
    const childrenRef = ref([h('div', { class: 'item' }, 'A'), h('div', { class: 'item' }, 'B')]);
    const anchor = Fragment({ children: childrenRef });

    container.appendChild(anchor);

    const firstItems = container.querySelectorAll('.item');
    expect(firstItems.length).toBe(2);

    // Capture references to old elements
    const oldElement1 = firstItems[0];
    const oldElement2 = firstItems[1];

    // Update children
    childrenRef.value = [h('div', { class: 'item' }, 'C'), h('div', { class: 'item' }, 'D')];

    // Old elements should be removed from DOM
    expect(document.body.contains(oldElement1)).toBe(false);
    expect(document.body.contains(oldElement2)).toBe(false);

    const newItems = container.querySelectorAll('.item');
    expect(newItems.length).toBe(2);
    expect(newItems[0].textContent).toBe('C');
    expect(newItems[1].textContent).toBe('D');
  });

  it('should work with JSX syntax', () => {
    // Test that Fragment works with JSX children
    const children = [<div className="item">A</div>, <div className="item">B</div>];
    const anchor = Fragment({ children });

    container.appendChild(anchor);

    const items = container.querySelectorAll('.item');
    expect(items.length).toBe(2);
  });

  it('should ignore key parameter (reserved for future use)', () => {
    const children = [h('div', {}, 'A')];
    const keyFn = vi.fn();
    const anchor = Fragment({ children, key: keyFn });

    // Should not throw and key function should not be called
    expect(anchor.nodeType).toBe(Node.COMMENT_NODE);
    expect(keyFn).not.toHaveBeenCalled();
  });

  it('should throw error when ref is not a KTRef', () => {
    const children = [h('div', {}, 'A')];

    // Mock console.error to catch the error if $throw uses it
    const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    // Try to call with invalid ref
    expect(() => {
      Fragment({ children, ref: {} as any });
    }).toThrow();

    consoleErrorSpy.mockRestore();
  });
});

describe('convertChildrenToElements', () => {
  it('should convert HTMLElement children', () => {
    const div1 = document.createElement('div');
    const div2 = document.createElement('span');
    const result = convertChildrenToElements([div1, div2]);

    expect(result).toEqual([div1, div2]);
  });

  it('should convert string and number children to span elements', () => {
    const result = convertChildrenToElements(['hello', 42, 'world']);

    expect(result.length).toBe(3);
    expect(result[0].tagName).toBe('SPAN');
    expect(result[0].textContent).toBe('hello');
    expect(result[1].tagName).toBe('SPAN');
    expect(result[1].textContent).toBe('42');
    expect(result[2].tagName).toBe('SPAN');
    expect(result[2].textContent).toBe('world');
  });

  it('should ignore null, undefined, false, true', () => {
    const result = convertChildrenToElements([null, undefined, false, true, 'valid']);

    expect(result.length).toBe(1);
    expect(result[0].tagName).toBe('SPAN');
    expect(result[0].textContent).toBe('valid');
  });

  it('should flatten arrays recursively', () => {
    const div1 = document.createElement('div');
    const div2 = document.createElement('span');
    const result = convertChildrenToElements([['nested', [div1]], div2]);

    expect(result.length).toBe(3);
    expect(result[0].tagName).toBe('SPAN');
    expect(result[0].textContent).toBe('nested');
    expect(result[1]).toBe(div1);
    expect(result[2]).toBe(div2);
  });

  it('should unwrap KTRef and KTComputed values', () => {
    // Mock KTRef-like object
    const mockRef = {
      isKT: true,
      value: 'unwrapped',
    };

    const result = convertChildrenToElements(mockRef as any);

    expect(result.length).toBe(1);
    expect(result[0].tagName).toBe('SPAN');
    expect(result[0].textContent).toBe('unwrapped');
  });

  it('should handle mixed content types', () => {
    const div = document.createElement('div');
    const result = convertChildrenToElements([null, 'text', 123, div, ['nested', 'array'], false]);

    expect(result.length).toBe(5);
    expect(result[0].tagName).toBe('SPAN');
    expect(result[0].textContent).toBe('text');
    expect(result[1].tagName).toBe('SPAN');
    expect(result[1].textContent).toBe('123');
    expect(result[2]).toBe(div);
    expect(result[3].tagName).toBe('SPAN');
    expect(result[3].textContent).toBe('nested');
    expect(result[4].tagName).toBe('SPAN');
    expect(result[4].textContent).toBe('array');
  });

  it('should warn on unsupported types', () => {
    const consoleWarnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});

    const unsupportedObject = { foo: 'bar' };
    convertChildrenToElements(unsupportedObject as any);

    expect(consoleWarnSpy).toHaveBeenCalledWith('Fragment: unsupported child type', unsupportedObject);
    consoleWarnSpy.mockRestore();
  });
});
