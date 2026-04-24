import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { h } from '../src/h/index.js';
import { KTIf, type KTIfAnchor } from '../src/jsx/if.js';
import { ref } from '../src/reactable/index.js';
import { AType } from '../src/common/anchor.js';

describe('KTIf', () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    container.remove();
  });

  it('renders element/comment correctly for static conditions without else branch', () => {
    const rendered = KTIf(true, 'div', () => ({ children: 'if-branch' })) as Node;
    const hidden = KTIf(false, 'div', () => ({ children: 'if-branch' })) as Node;

    expect(rendered.nodeType).toBe(Node.ELEMENT_NODE);
    expect(rendered.textContent).toBe('if-branch');

    expect(hidden.nodeType).toBe(Node.COMMENT_NODE);
    expect((hidden as KTIfAnchor).atype).toBe(AType.If);
  });

  it('returns the else branch when static condition is false', () => {
    const rendered = KTIf(
      false,
      'div',
      () => ({ children: 'if-branch' }),
      'span',
      () => ({ children: 'else-branch' }),
    ) as HTMLElement;

    expect(rendered.tagName).toBe('SPAN');
    expect(rendered.textContent).toBe('else-branch');
  });

  it('updates between element and placeholder when reactive condition changes', () => {
    const visible = ref(true);
    const node = KTIf(visible, 'div', () => ({ id: 'if-node', children: 'if-branch' }));

    container.appendChild(node);
    console.log(container.textContent);
    expect(container.textContent).toBe('if-branch');
    expect(container.querySelector('#if-node')).toBeTruthy();

    visible.value = false;
    expect(container.textContent).toBe('');
    expect(container.firstChild?.nodeType).toBe(Node.COMMENT_NODE);
    expect((container.firstChild as KTIfAnchor).atype).toBe(AType.If);

    visible.value = true;
    expect(container.textContent).toBe('if-branch');
    expect(container.querySelector('#if-node')).toBeTruthy();
  });

  it('switches between if/else branches when reactive condition changes', () => {
    const visible = ref(true);
    const node = KTIf(
      visible,
      'div',
      () => ({ class: 'if-branch', children: 'if-branch' }),
      'div',
      () => ({ class: 'else-branch', children: 'else-branch' }),
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
    const node = KTIf(
      false,
      IfComp,
      () => ({ children: 'if-text' }),
      ElseComp,
      () => ({ children: 'else-text' }),
    ) as Node;

    container.appendChild(node);
    expect(container.querySelector('.if-component')).toBeNull();
    expect(container.querySelector('.else-component')?.textContent).toBe('else-text');
  });

  it('only evaluates the rendered props factory', () => {
    const ifProps = vi.fn(() => ({ children: 'if-branch' }));
    const elseProps = vi.fn(() => ({ children: 'else-branch' }));

    const node = KTIf(false, 'div', ifProps, 'span', elseProps) as HTMLElement;

    expect(node.tagName).toBe('SPAN');
    expect(ifProps).not.toHaveBeenCalled();
    expect(elseProps).toHaveBeenCalledTimes(1);
  });

  it('evaluates props factories on each reactive branch creation', () => {
    const visible = ref(false);
    const ifProps = vi.fn(() => ({ children: 'if-branch' }));
    const elseProps = vi.fn(() => ({ children: 'else-branch' }));
    const node = KTIf(visible, 'div', ifProps, 'span', elseProps) as Node;

    container.appendChild(node);
    expect(ifProps).not.toHaveBeenCalled();
    expect(elseProps).toHaveBeenCalledTimes(1);

    visible.value = true;
    expect(ifProps).toHaveBeenCalledTimes(1);
    expect(elseProps).toHaveBeenCalledTimes(1);
  });
});
