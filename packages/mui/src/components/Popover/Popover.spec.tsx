import { computed, ref } from '@ktjs/core';
import { describe, expect, it, vi } from 'vitest';
import { Popover } from './Popover.js';

const createAnchor = () => {
  const anchor = document.createElement('button');
  anchor.getBoundingClientRect = () =>
    ({
      width: 80,
      height: 40,
      top: 100,
      left: 160,
      right: 240,
      bottom: 140,
      x: 160,
      y: 100,
      toJSON: () => ({}),
    }) as DOMRect;
  document.body.appendChild(anchor);
  return anchor;
};

describe('MUI Popover component reactivity', () => {
  it('reacts to open ref transitions', () => {
    vi.useFakeTimers();
    const anchor = createAnchor();
    const open = ref(false);

    const popover = <Popover {...{ open, anchorEl: anchor, children: 'Body' }} />;
    document.body.appendChild(popover);

    expect(popover.style.display).toBe('none');

    open.value = true;
    vi.runAllTimers();
    expect(popover.style.display).toBe('block');
    expect(popover.className).toContain('mui-popover-open');

    open.value = false;
    vi.advanceTimersByTime(180);
    expect(popover.style.display).toBe('none');

    popover.remove();
    anchor.remove();
    vi.useRealTimers();
  });

  it('reacts to computed elevation changes', () => {
    const anchor = createAnchor();
    const elevationSeed = ref(2);
    const elevation = computed(() => elevationSeed.value, [elevationSeed]);

    const popover = (
      <Popover
        {...{
          open: true,
          anchorEl: anchor,
          elevation,
          children: 'Body',
        }}
      />
    );
    document.body.appendChild(popover);

    const paper = popover.querySelector('.mui-popover-paper');
    const previousShadow = paper.style.boxShadow;

    elevationSeed.value = 20;
    expect(paper.style.boxShadow).not.toBe(previousShadow);

    popover.remove();
    anchor.remove();
  });
});
