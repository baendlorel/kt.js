import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { kelse, kif } from '../src/jsx/if.js';
import { jsx } from '../src/jsx/jsx-runtime.js';
import { ref } from '../src/reactive/index.js';

describe('k-if / k-else', () => {
  let container: HTMLDivElement;
  let originalThrow: any;
  let originalFlags: any;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);

    originalThrow = (globalThis as any).$throw;
    (globalThis as any).$throw = (message?: string): never => {
      throw new Error(message ?? '');
    };

    originalFlags = (globalThis as any).flags;
    (globalThis as any).flags = {
      svg: '__kt_svg__',
      mathml: '__kt_mathml__',
    };
  });

  afterEach(() => {
    container.remove();
    if (originalThrow) {
      (globalThis as any).$throw = originalThrow;
    } else {
      delete (globalThis as any).$throw;
    }

    if (originalFlags) {
      (globalThis as any).flags = originalFlags;
    } else {
      delete (globalThis as any).flags;
    }
  });

  it('renders element/comment correctly for static k-if values', () => {
    const rendered = kif('div', { 'k-if': true, children: 'if-branch' }) as Node & { __kif__?: { value: boolean } };
    const hidden = kif('div', { 'k-if': false, children: 'if-branch' }) as Node & { __kif__?: { value: boolean } };

    expect(rendered.nodeType).toBe(Node.ELEMENT_NODE);
    expect(rendered.textContent).toBe('if-branch');
    expect(rendered.__kif__?.value).toBe(true);

    expect(hidden.nodeType).toBe(Node.COMMENT_NODE);
    expect(hidden.textContent).toBe('k-if');
    expect(hidden.__kif__?.value).toBe(false);
  });

  it('updates k-if node and ref when condition changes', () => {
    const visible = ref(true);
    const nodeRef = ref();

    const node = kif('div', { 'k-if': visible, ref: nodeRef, children: 'if-branch' });
    container.appendChild(node as Node);
    expect(container.textContent).toBe('if-branch');
    expect(nodeRef.value.nodeType).toBe(Node.ELEMENT_NODE);

    visible.value = false;
    expect(container.textContent).toBe('');
    expect(nodeRef.value.nodeType).toBe(Node.COMMENT_NODE);
    expect(nodeRef.value.textContent).toBe('k-if');

    visible.value = true;
    expect(container.textContent).toBe('if-branch');
    expect(nodeRef.value.nodeType).toBe(Node.ELEMENT_NODE);
  });

  it('keeps k-else hidden by default and toggles correctly', () => {
    const nodeRef = ref();
    const node = kelse('div', { 'k-else': true, ref: nodeRef, children: 'else-branch' }) as Node & {
      __kelse__: (v: boolean) => void;
    };

    container.appendChild(node);
    expect(container.textContent).toBe('');
    expect(nodeRef.value.nodeType).toBe(Node.COMMENT_NODE);

    node.__kelse__(false);
    expect(container.textContent).toBe('else-branch');
    expect(nodeRef.value.nodeType).toBe(Node.ELEMENT_NODE);

    node.__kelse__(true);
    expect(container.textContent).toBe('');
    expect(nodeRef.value.nodeType).toBe(Node.COMMENT_NODE);
  });

  it('switches branches when k-if changes in a valid k-if+k-else chain', () => {
    const visible = ref(true);
    const parent = jsx('div', {
      children: [
        jsx('span', { 'k-if': visible, children: 'if-branch' }),
        jsx('span', { 'k-else': true, children: 'else-branch' }),
      ],
    }) as HTMLDivElement;

    container.appendChild(parent);
    expect(parent.textContent).toBe('if-branch');
    expect(parent.querySelectorAll('span').length).toBe(1);

    visible.value = false;
    expect(parent.textContent).toBe('else-branch');
    expect(parent.querySelectorAll('span').length).toBe(1);

    visible.value = true;
    expect(parent.textContent).toBe('if-branch');
    expect(parent.querySelectorAll('span').length).toBe(1);
  });

  it('renders k-else branch immediately when initial k-if is false', () => {
    const visible = ref(false);
    const parent = jsx('div', {
      children: [
        jsx('span', { 'k-if': visible, children: 'if-branch' }),
        jsx('span', { 'k-else': true, children: 'else-branch' }),
      ],
    }) as HTMLDivElement;

    container.appendChild(parent);
    expect(parent.textContent).toBe('else-branch');
    expect(parent.querySelectorAll('span').length).toBe(1);
  });

  it('throws when k-else is the first child', () => {
    expect(() => {
      jsx('div', {
        children: [jsx('span', { 'k-else': true, children: 'else-branch' })],
      });
    }).toThrow('k-else cannot be the first child of its parent element.');
  });

  it('throws when k-else is not immediately preceded by k-if', () => {
    expect(() => {
      jsx('div', {
        children: [
          jsx('span', { 'k-if': true, children: 'if-branch' }),
          'gap',
          jsx('span', { 'k-else': true, children: 'else-branch' }),
        ],
      });
    }).toThrow('k-else must be immediately preceded by a k-if element.');
  });
});
