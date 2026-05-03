import { ref } from '@ktjs/core';
import { describe, expect, it, vi } from 'vitest';
import { Popover } from './Popover.js';

describe('MUI Popover component reactivity', () => {
  it('reacts to open ref transitions', () => {
    vi.useFakeTimers();
    const open = ref(false);

    const popover = (
      <Popover {...{ open, content: 'Body' }}>
        <button>Anchor</button>
      </Popover>
    ) as HTMLElement;
    document.body.appendChild(popover);

    const overlay = popover.querySelector<HTMLElement>('.mui-popover-root');
    expect(overlay?.style.display).toBe('none');

    open.value = true;
    vi.runAllTimers();
    expect(overlay?.style.display).toBe('block');
    expect(overlay?.className).toContain('mui-popover-open');

    open.value = false;
    vi.advanceTimersByTime(180);
    expect(overlay?.style.display).toBe('none');

    popover.remove();
    vi.useRealTimers();
  });

  it('flips direction when preferred side has no space', () => {
    vi.useFakeTimers();
    const popover = (
      <Popover {...{ open: true, content: 'Body', direction: 'bottom' }}>
        <button>Anchor</button>
      </Popover>
    ) as HTMLElement;
    document.body.appendChild(popover);

    const anchor = popover as HTMLElement;
    anchor.getBoundingClientRect = () =>
      ({
        width: 80,
        height: 32,
        top: window.innerHeight - 24,
        left: 100,
        right: 180,
        bottom: window.innerHeight + 8,
        x: 100,
        y: window.innerHeight - 24,
        toJSON: () => ({}),
      }) as DOMRect;

    vi.runAllTimers();
    const paper = popover.querySelector<HTMLElement>('.mui-popover-paper');
    expect(paper?.style.transformOrigin).toBe('center bottom');

    popover.remove();
    vi.useRealTimers();
  });

  it('reacts to direction changes', () => {
    vi.useFakeTimers();
    const direction = ref<'top' | 'bottom'>('bottom');

    const popover = (
      <Popover {...{ open: true, content: 'Body', direction }}>
        <button>Anchor</button>
      </Popover>
    ) as HTMLElement;
    document.body.appendChild(popover);

    const anchor = popover as HTMLElement;
    anchor.getBoundingClientRect = () =>
      ({
        width: 80,
        height: 32,
        top: 120,
        left: 100,
        right: 180,
        bottom: 152,
        x: 100,
        y: 120,
        toJSON: () => ({}),
      }) as DOMRect;

    vi.runAllTimers();

    const paper = popover.querySelector<HTMLElement>('.mui-popover-paper');
    const before = paper?.style.transformOrigin;

    direction.value = 'top';
    vi.runAllTimers();
    expect(paper?.style.transformOrigin).not.toBe(before);

    popover.remove();
    vi.useRealTimers();
  });
});
