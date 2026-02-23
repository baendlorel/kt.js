import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { h } from '../src/h/index.js';
import { KTConditional } from '../src/jsx/if.js';
import { ref } from '../src/reactive/index.js';

describe('KTConditional', () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    container.remove();
  });

  it('renders element/comment correctly for static conditions without else branch', () => {
    const rendered = KTConditional(true, 'div', { children: 'if-branch' }) as Node;
    const hidden = KTConditional(false, 'div', { children: 'if-branch' }) as Node;

    expect(rendered.nodeType).toBe(Node.ELEMENT_NODE);
    expect(rendered.textContent).toBe('if-branch');

    expect(hidden.nodeType).toBe(Node.COMMENT_NODE);
    expect((hidden as Comment).data).toBe('kt-conditional');
  });

  it('returns the else branch when static condition is false', () => {
    const rendered = KTConditional(false, 'div', { children: 'if-branch' }, 'span', { children: 'else-branch' }) as HTMLElement;

    expect(rendered.tagName).toBe('SPAN');
    expect(rendered.textContent).toBe('else-branch');
  });

  it('updates between element and placeholder when reactive condition changes', () => {
    const visible = ref(true);
    const node = KTConditional(visible, 'div', { id: 'if-node', children: 'if-branch' }) as Node;

    container.appendChild(node);
    expect(container.textContent).toBe('if-branch');
    expect(container.querySelector('#if-node')).toBeTruthy();

    visible.value = false;
    expect(container.textContent).toBe('');
    expect(container.firstChild?.nodeType).toBe(Node.COMMENT_NODE);
    expect((container.firstChild as Comment).data).toBe('kt-conditional');

    visible.value = true;
    expect(container.textContent).toBe('if-branch');
    expect(container.querySelector('#if-node')).toBeTruthy();
  });

  it('switches between if/else branches when reactive condition changes', () => {
    const visible = ref(true);
    const node = KTConditional(
      visible,
      'div',
      { class: 'if-branch', children: 'if-branch' },
      'div',
      { class: 'else-branch', children: 'else-branch' },
    ) as Node;

    container.appendChild(node);
    expect(container.querySelector('.if-branch')?.textContent).toBe('if-branch');
    expect(container.querySelector('.else-branch')).toBeNull();

    visible.value = false;
    expect(container.querySelector('.if-branch')).toBeNull();
    expect(container.querySelector('.else-branch')?.textContent).toBe('else-branch');

    visible.value = true;
    expect(container.querySelector('.if-branch')?.textContent).toBe('if-branch');
    expect(container.querySelector('.else-branch')).toBeNull();
  });

  it('supports component tags for both branches', () => {
    const IfComp = (props: { children?: string }) => h('p', { class: 'if-component' }, props.children);
    const ElseComp = (props: { children?: string }) => h('p', { class: 'else-component' }, props.children);
    const node = KTConditional(false, IfComp, { children: 'if-text' }, ElseComp, { children: 'else-text' }) as Node;

    container.appendChild(node);
    expect(container.querySelector('.if-component')).toBeNull();
    expect(container.querySelector('.else-component')?.textContent).toBe('else-text');
  });
});
