import { describe, it, expect, beforeEach } from 'vitest';
import { KTFor } from '../src/jsx/for.js';
import { h } from '../src/h/index.js';

describe('KTFor Component', () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  it('should create anchor comment node', () => {
    const list = [1, 2, 3];
    const anchor = KTFor({
      list,
      map: (item) => h('div', {}, String(item)),
    });

    expect(anchor.nodeType).toBe(Node.COMMENT_NODE);
    expect(anchor.textContent).toBe('kt-for');
  });

  it('should attach __kt_for_list__ to anchor', () => {
    const list = [1, 2, 3];
    const anchor = KTFor({
      list,
      map: (item) => h('div', {}, String(item)),
    });

    expect(anchor.__kt_for_list__).toBeDefined();
    expect(Array.isArray(anchor.__kt_for_list__)).toBe(true);
    expect(anchor.__kt_for_list__.length).toBe(3);
  });

  it('should render list elements', () => {
    const list = ['a', 'b', 'c'];
    const anchor = KTFor({
      list,
      map: (item) => h('div', { class: 'item' }, item),
    });

    container.appendChild(anchor);

    // Check that elements are in DOM
    const items = container.querySelectorAll('.item');
    expect(items.length).toBe(3);
    expect(items[0].textContent).toBe('a');
    expect(items[1].textContent).toBe('b');
    expect(items[2].textContent).toBe('c');
  });

  it('should use default key function (identity)', () => {
    const list = [1, 2, 3];
    const anchor = KTFor({
      list,
      map: (item) => h('div', {}, String(item)),
    });

    expect(anchor.__kt_for_list__.length).toBe(3);
  });

  it('should use custom key function', () => {
    interface Item {
      id: number;
      name: string;
    }

    const list: Item[] = [
      { id: 1, name: 'a' },
      { id: 2, name: 'b' },
    ];

    const anchor = KTFor({
      list,
      key: (item) => item.id,
      map: (item) => h('div', {}, item.name),
    });

    container.appendChild(anchor);

    const items = container.querySelectorAll('div');
    expect(items.length).toBe(2);
    expect(items[0].textContent).toBe('a');
    expect(items[1].textContent).toBe('b');
  });

  it('should pass item, index, array to map function', () => {
    const list = ['x', 'y', 'z'];
    let capturedIndex = -1;
    let capturedArray: string[] = [];

    const anchor = KTFor({
      list,
      map: (item, index, array) => {
        capturedIndex = index;
        capturedArray = array;
        return h('div', {}, `${item}-${index}`);
      },
    });

    container.appendChild(anchor);

    expect(capturedIndex).toBeGreaterThanOrEqual(0);
    expect(capturedArray).toBe(list);

    const items = container.querySelectorAll('div');
    expect(items[0].textContent).toBe('x-0');
    expect(items[1].textContent).toBe('y-1');
    expect(items[2].textContent).toBe('z-2');
  });

  it('should redraw with new list', () => {
    let list = [1, 2, 3];
    const anchor = KTFor({
      list,
      map: (item) => h('div', { class: 'item' }, String(item)),
    });

    container.appendChild(anchor);

    let items = container.querySelectorAll('.item');
    expect(items.length).toBe(3);

    // Redraw with new list
    list = [4, 5, 6, 7];
    anchor.redraw({ list });

    items = container.querySelectorAll('.item');
    expect(items.length).toBe(4);
    expect(items[0].textContent).toBe('4');
    expect(items[3].textContent).toBe('7');
  });

  it('should reuse DOM nodes with same key', () => {
    interface Item {
      id: number;
      value: string;
    }

    const list: Item[] = [
      { id: 1, value: 'a' },
      { id: 2, value: 'b' },
      { id: 3, value: 'c' },
    ];

    const anchor = KTFor({
      list,
      key: (item) => item.id,
      map: (item) => {
        const div = h('div', { class: 'item' }, item.value);
        (div as any).__test_id__ = item.id;
        return div;
      },
    });

    container.appendChild(anchor);

    const firstDiv = container.querySelector('.item') as any;
    const firstTestId = firstDiv.__test_id__;

    // Reorder list - first item stays first
    anchor.redraw({
      list: [
        { id: 1, value: 'a-updated' },
        { id: 3, value: 'c' },
        { id: 2, value: 'b' },
      ],
    });

    const newFirstDiv = container.querySelector('.item') as any;
    expect(newFirstDiv.__test_id__).toBe(firstTestId); // Same DOM node
    expect(newFirstDiv.textContent).toBe('a-updated');
  });

  it('should remove elements not in new list', () => {
    let list = [1, 2, 3, 4, 5];
    const anchor = KTFor({
      list,
      map: (item) => h('div', { class: 'item' }, String(item)),
    });

    container.appendChild(anchor);

    let items = container.querySelectorAll('.item');
    expect(items.length).toBe(5);

    // Remove some items
    anchor.redraw({ list: [1, 3, 5] });

    items = container.querySelectorAll('.item');
    expect(items.length).toBe(3);
    expect(items[0].textContent).toBe('1');
    expect(items[1].textContent).toBe('3');
    expect(items[2].textContent).toBe('5');
  });

  it('should handle empty list', () => {
    const anchor = KTFor({
      list: [],
      map: (item: number) => h('div', {}, String(item)),
    });

    container.appendChild(anchor);

    const items = container.querySelectorAll('div');
    expect(items.length).toBe(0);
    expect(anchor.__kt_for_list__.length).toBe(0);
  });

  it('should work before being added to DOM', () => {
    const list = [1, 2, 3];
    const anchor = KTFor({
      list,
      map: (item) => h('div', {}, String(item)),
    });

    expect(anchor.__kt_for_list__.length).toBe(3);

    // Redraw before adding to DOM
    anchor.redraw({ list: [4, 5] });

    expect(anchor.__kt_for_list__.length).toBe(2);

    // Now add to DOM
    container.appendChild(anchor);

    const items = container.querySelectorAll('div');
    expect(items.length).toBe(2);
    expect(items[0].textContent).toBe('4');
    expect(items[1].textContent).toBe('5');
  });
});
