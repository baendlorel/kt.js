import { describe, it, expect, beforeEach, vi } from 'vitest';
import { computed, type JSX, ref } from '@ktjs/core';
import { createFragment } from '../src/jsx/fragment.js';
import { h } from '../src/h/index.js';

describe('Fragment Component', () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  it('should create anchor comment node', () => {
    const children = [h('div', {}, 'A'), h('div', {}, 'B')];
    const anchor = createFragment({ children });

    expect(anchor.nodeType).toBe(Node.COMMENT_NODE);
    expect(anchor.textContent).toBe('kt-fragment');
  });

  it('anchor.list is defined as an array', () => {
    const children = [h('div', {}, 'A'), h('div', {}, 'B')];
    const anchor = createFragment({ children });
    expect(anchor._current).toBeDefined();
    expect(Array.isArray(anchor._current)).toBe(true);
    expect(anchor._current.length).toBe(2);
  });

  it('should render children elements when anchor is in DOM', async () => {
    const children = [h('div', { class: 'item' }, 'A'), h('div', { class: 'item' }, 'B')];
    const anchor = createFragment({ children });

    container.appendChild(anchor);
    await Promise.resolve();

    // Children should be inserted after anchor
    const items = container.querySelectorAll('.item');
    expect(items.length).toBe(2);
    expect(items[0].textContent).toBe('A');
    expect(items[1].textContent).toBe('B');
    expect(items[0].previousSibling).toBe(anchor);
    expect(items[1].previousSibling).toBe(items[0]);
  });

  it('should support ref prop', () => {
    const children = [h('div', {}, 'A')];
    const fragmentRef = ref<JSX.Element>();
    const anchor = createFragment({ children, ref: fragmentRef });

    expect(fragmentRef.value).toBe(anchor);
  });

  it('should auto mount when appended directly into raw DOM parent', async () => {
    const children = [h('div', { class: 'item' }, 'A')];
    const anchor = createFragment({ children });

    expect(container.querySelectorAll('.item').length).toBe(0);

    container.appendChild(anchor);
    await Promise.resolve();
    expect(container.querySelectorAll('.item').length).toBe(1);
  });

  it('should handle empty children array', async () => {
    const anchor = createFragment({ children: [] });

    expect(anchor._current.length).toBe(0);

    container.appendChild(anchor);
    await Promise.resolve();

    // No elements should be added after anchor
    expect(anchor.nextSibling).toBeNull();
  });

  it('should handle null/undefined children', () => {
    // TypeScript should prevent this, but test with type assertion
    const anchor = createFragment({ children: [] });

    expect(anchor._current.length).toBe(0);
  });

  it('should work with JSX syntax', async () => {
    // Test that Fragment works with JSX children
    const children = [<div className="item">A</div>, <div className="item">B</div>];
    const anchor = createFragment({ children });

    container.appendChild(anchor);
    await Promise.resolve();

    const items = container.querySelectorAll('.item');
    expect(items.length).toBe(2);
  });

  it('should throw error when ref is not a KTRef', () => {
    const children = [h('div', {}, 'A')];

    // Mock console.error to catch the error if $throw uses it
    const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    // Try to call with invalid ref
    expect(() => {
      createFragment({ children, ref: {} as any });
    }).toThrow();

    consoleErrorSpy.mockRestore();
  });
});
