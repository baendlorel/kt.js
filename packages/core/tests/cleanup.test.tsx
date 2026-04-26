import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { h } from '../src/h/index.js';
import { KTIf } from '../src/jsx/if.js';
import { ref, computed } from '../src/reactable/index.js';
describe('core cleanup lifecycle', () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    container.remove();
  });

  it.skip('should cleanup event listeners when conditional branches are replaced', async () => {
    const visible = ref(true);
    const onClick = vi.fn();
    const node = KTIf(
      visible,
      'button',
      () => ({ 'on:click': onClick, children: 'if' }),
      'div',
      () => ({ children: 'else' }),
    ) as Node;

    container.appendChild(node);
    const button = container.querySelector('button')!;

    visible.value = false;
    await Promise.resolve();
    button.click();

    expect(onClick).not.toHaveBeenCalled();
  });

  it.skip('should cleanup reactive attribute listeners when conditional branches are replaced', async () => {
    const visible = ref(true);
    const className = ref('before');
    const node = KTIf(
      visible,
      'div',
      () => ({ class: className as any, children: 'if' }),
      'div',
      () => ({ children: 'else' }),
    ) as Node;

    node._appendTo(container);
    expect(className._listeners.size).toBe(1);

    visible.value = false;
    await Promise.resolve();

    expect(className._listeners.size).toBe(0);
  });

  it.skip('should cleanup k-model bindings when a branch is removed', async () => {
    const visible = ref(true);
    const model = ref('hello');
    const node = KTIf(
      visible,
      'input',
      () => ({ 'k-model': model }),
      'div',
      () => ({ children: 'else' }),
    ) as Node;

    node._appendTo(container);
    const input = container.querySelector('input')!;

    visible.value = false;
    await Promise.resolve();
    input.value = 'changed';
    input.dispatchEvent(new Event('input'));

    expect(model.value).toBe('hello');
    expect(model._listeners.size).toBe(0);
  });

  // TEST 等清理机制完成后，这里的所有内容skip都要删掉
  it.skip('should cleanup replaced reactive content nodes', async () => {
    const onClick = vi.fn();
    const content = ref(h('button', { 'on:click': onClick }, 'before'));
    const host = h('div', {}, content);

    host._appendTo(container);
    const oldButton = host.querySelector('button')!;

    content.value = h('button', {}, 'after');
    await Promise.resolve();
    oldButton.click();

    expect(content.value.innerHTML).not.includes('before');
    expect(onClick).not.toHaveBeenCalled();
  });

  it('computed.dispose should unsubscribe from dependencies', () => {
    const base = ref(2);
    const doubled = computed(() => base.value * 2, [base]);

    expect(base._listeners.size).toBe(1);

    doubled.dispose();
    base.value = 3;

    expect(base._listeners.size).toBe(0);
    expect(doubled.value).toBe(4);
  });
});
