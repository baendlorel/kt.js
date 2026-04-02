import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { h } from '../src/h/index.js';
import { Fragment } from '../src/jsx/fragment.js';
import { KTConditional } from '../src/jsx/if.js';
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

  it('should cleanup event listeners when conditional branches are replaced', async () => {
    const visible = ref(true);
    const onClick = vi.fn();
    const node = KTConditional(visible, 'button', { 'on:click': onClick, children: 'if' }, 'div', {
      children: 'else',
    }) as Node;

    container.appendChild(node);
    const button = container.querySelector('button')!;

    visible.value = false;
    await Promise.resolve();
    button.click();

    expect(onClick).not.toHaveBeenCalled();
  });

  it('should cleanup reactive attribute listeners when conditional branches are replaced', async () => {
    const visible = ref(true);
    const className = ref('before');
    const node = KTConditional(visible, 'div', { class: className as any, children: 'if' }, 'div', {
      children: 'else',
    }) as Node;

    container.appendChild(node);
    expect((className as any)._changeHandlers.size).toBe(1);

    visible.value = false;
    await Promise.resolve();

    expect((className as any)._changeHandlers.size).toBe(0);
  });

  it('should cleanup k-model bindings when a branch is removed', async () => {
    const visible = ref(true);
    const model = ref('hello');
    const node = KTConditional(visible, 'input', { 'k-model': model }, 'div', { children: 'else' }) as Node;

    container.appendChild(node);
    const input = container.querySelector('input')!;

    visible.value = false;
    await Promise.resolve();
    input.value = 'changed';
    input.dispatchEvent(new Event('input'));

    expect(model.value).toBe('hello');
    expect((model as any)._changeHandlers.size).toBe(0);
  });

  it('should cleanup replaced reactive content nodes', async () => {
    const onClick = vi.fn();
    const content = ref(h('button', { 'on:click': onClick }, 'before'));
    const host = h('div', {}, content);

    container.appendChild(host);
    const oldButton = host.querySelector('button')!;

    content.value = h('button', {}, 'after');
    await Promise.resolve();
    oldButton.click();

    expect(onClick).not.toHaveBeenCalled();
  });

  it('should cleanup fragment subscriptions when removed by conditional replacement', async () => {
    const visible = ref(true);
    const children = ref([h('div', {}, 'fragment')]);
    const Frag = (() => Fragment({ children })) as any;
    const node = KTConditional(visible, Frag, {}, 'div', { children: 'else' }) as Node;

    container.appendChild(node);
    expect((children as any)._changeHandlers.size).toBe(1);

    visible.value = false;
    await Promise.resolve();

    expect((children as any)._changeHandlers.size).toBe(0);
  });

  it('computed.dispose should unsubscribe from dependencies', () => {
    const base = ref(2);
    const doubled = computed(() => base.value * 2, [base]);

    expect((base as any)._changeHandlers.size).toBe(1);

    doubled.dispose();
    base.value = 3;

    expect((base as any)._changeHandlers.size).toBe(0);
    expect(doubled.value).toBe(4);
  });
});
