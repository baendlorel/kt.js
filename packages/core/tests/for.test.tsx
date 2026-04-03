import { describe, it, expect, beforeEach, vi } from 'vitest';
import { KTFor, KTForAnchor, KTForElement } from '../src/jsx/for.js';
import { h } from '../src/h/index.js';
import { ref } from '@ktjs/core';

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

  it('should attach list to anchor', () => {
    const list = [1, 2, 3];
    const anchor = KTFor({
      list,
      map: (item) => h('div', {}, String(item)),
    });

    expect(anchor).toBeInstanceOf(KTForAnchor);
    expect(Array.isArray(anchor.list)).toBe(true);
    expect(anchor.list.length).toBe(3);
  });

  it('should auto mount when appended directly by raw DOM', async () => {
    const anchor = KTFor({
      list: ['a', 'b'],
      map: (item) => h('div', { class: 'item' }, item),
    });

    container.appendChild(anchor);
    await Promise.resolve();

    const items = container.querySelectorAll('.item');
    expect(items.length).toBe(2);
    expect(items[0].textContent).toBe('a');
    expect(items[1].textContent).toBe('b');
  });

  it('should render list elements', () => {
    const list = ['a', 'b', 'c'];
    const anchor = KTFor({
      list,
      map: (item) => h('div', { class: 'item' }, item),
    });

    const forEl = (
      <div>
        <KTFor list={list} map={(item) => h('div', { class: 'item' }, item)} />
      </div>
    );

    container.appendChild(forEl);

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

    expect(anchor.list.length).toBe(3);
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

    const forEl = (
      <div>
        <KTFor list={list} map={(item) => h('div', { class: 'item' }, item.name)} />
      </div>
    );

    container.appendChild(forEl);

    const items = container.querySelectorAll('.item');
    expect(items.length).toBe(2);
    expect(items[0].textContent).toBe('a');
    expect(items[1].textContent).toBe('b');
  });

  it('should pass item, index, array to map function', () => {
    const list = ['x', 'y', 'z'];
    let capturedIndex = -1;
    let capturedArray: string[] = [];

    const forEl = (
      <div>
        <KTFor
          list={list}
          map={(item, index, array) => {
            capturedIndex = index;
            capturedArray = array;
            return h('div', { class: 'item' }, `${item}-${index}`);
          }}
        />
      </div>
    );

    container.appendChild(forEl);

    expect(capturedIndex).toBeGreaterThanOrEqual(0);
    expect(capturedArray).toBe(list);

    const items = container.querySelectorAll('.item');
    expect(items[0].textContent).toBe('x-0');
    expect(items[1].textContent).toBe('y-1');
    expect(items[2].textContent).toBe('z-2');
  });

  it('should redraw with new list', () => {
    const list = ref([1, 2, 3]);

    const forEl = (
      <div>
        <KTFor list={list} map={(item) => h('div', { class: 'item' }, item)} />
      </div>
    );

    container.appendChild(forEl);

    let items = container.querySelectorAll('.item');
    expect(items.length).toBe(3);

    // Redraw with new list
    list.value = [4, 5, 6, 7];

    items = container.querySelectorAll('.item');
    expect(items.length).toBe(4);
    expect(items[0].textContent).toBe('4');
    expect(items[3].textContent).toBe('7');
  });

  it('should reuse DOM nodes with same key', () => {
    interface Item {
      id: string;
      value: string;
    }

    const list = ref([
      { id: '1', value: 'a' },
      { id: '2', value: 'b' },
      { id: '3', value: 'c' },
    ]);

    const forEl = (
      <div>
        <KTFor
          list={list}
          key={(item) => item.id}
          map={(item) => {
            const div = h('div', { class: 'item' }, item.value);
            div.dataset.__test_id__ = item.id;
            return div;
          }}
        />
      </div>
    );

    container.appendChild(forEl);

    const firstDiv = container.querySelector('.item') as any;
    const firstTestId = firstDiv.dataset.__test_id__;

    // Reorder list - first item stays first
    list.value = [
      { id: '1', value: 'a-updated' },
      { id: '3', value: 'c' },
      { id: '2', value: 'b' },
    ];
    const newFirstDiv = container.querySelector('.item') as any;
    expect(newFirstDiv.dataset.__test_id__).toBe(firstTestId); // Same DOM node
    expect(newFirstDiv.textContent).toBe('a-updated');
  });

  it('should reorder keyed DOM nodes', () => {
    const list = ref([
      { id: '1', value: 'a' },
      { id: '2', value: 'b' },
      { id: '3', value: 'c' },
      { id: '4', value: 'd' },
    ]);

    const forEl = (
      <div>
        <KTFor
          list={list}
          key={(item) => item.id}
          map={(item) => {
            const div = h('div', { class: 'item' }, item.value);
            div.dataset.__test_id__ = item.id;
            return div;
          }}
        />
      </div>
    );

    container.appendChild(forEl);

    list.value = [
      { id: '4', value: 'd' },
      { id: '2', value: 'b' },
      { id: '1', value: 'a' },
      { id: '3', value: 'c' },
    ];

    const items = Array.from(container.querySelectorAll('.item'));
    expect(items.map((item) => item.textContent)).toEqual(['d', 'b', 'a', 'c']);
    expect(items.map((item) => (item as HTMLDivElement).dataset.__test_id__)).toEqual(['4', '2', '1', '3']);
  });

  it('should warn when duplicate keys are present', () => {
    const warnSpy = vi.fn();
    const oldWarn = (globalThis as any).$warn;
    (globalThis as any).$warn = warnSpy;
    try {
      const list = ref([
        { id: '1', value: 'a' },
        { id: '1', value: 'b' },
      ]);
      const anchor = KTFor({
        list,
        key: (item) => item.id,
        map: (item) => h('div', { class: 'item' }, item.value),
      });
      expect(anchor.list.length).toBe(2);

      expect(warnSpy).toHaveBeenCalled();
      expect(warnSpy.mock.calls.some((args: any[]) => String(args[0]).includes('Duplicate key detected'))).toBe(true);
    } finally {
      (globalThis as any).$warn = oldWarn;
    }
  });

  it('should remove elements not in new list', () => {
    const list = ref([1, 2, 3, 4, 5]);
    const anchor = KTFor({
      list,
      map: (item) => h('div', { class: 'item' }, String(item)),
    });

    const forEl = (
      <div>
        <KTFor list={list} map={(item) => h('div', { class: 'item' }, String(item))} />
      </div>
    );

    container.appendChild(forEl);

    let items = container.querySelectorAll('.item');
    expect(items.length).toBe(5);

    // Remove some items
    list.value = [1, 3, 5];

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
    expect(anchor.list.length).toBe(0);
  });

  it('should work before being added to DOM', () => {
    const list = ref([1, 2, 3]);
    const anchor = ref<KTForElement>();

    const forEl = (
      <div>
        <KTFor ref={anchor} list={list} map={(item) => h('div', { class: 'item' }, String(item))} />
      </div>
    );

    expect(anchor.value.list.length).toBe(3);

    // Redraw before adding to DOM
    list.value = [4, 5];

    expect(anchor.value.list.length).toBe(2);

    // Now add to DOM
    container.appendChild(forEl);

    const items = container.querySelectorAll('.item');
    expect(items.length).toBe(2);
    expect(items[0].textContent).toBe('4');
    expect(items[1].textContent).toBe('5');
  });
});
