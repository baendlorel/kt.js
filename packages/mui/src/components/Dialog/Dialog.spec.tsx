import { computed, ref } from '@ktjs/core';
import { describe, expect, it, vi } from 'vitest';
import { Dialog } from './Dialog.js';

describe('MUI Dialog component reactivity', () => {
  it('reacts to open ref with transition timers', () => {
    vi.useFakeTimers();
    const open = ref(false);

    const dialog = <Dialog {...{ open, children: 'Body' }} />;
    expect(dialog.style.display).toBe('none');

    open.value = true;
    vi.advanceTimersByTime(60);
    expect(dialog.style.display).toBe('flex');
    expect(dialog.className).toContain('kt-dialog-backdrop-open');

    open.value = false;
    vi.advanceTimersByTime(225);
    expect(dialog.style.display).toBe('none');

    dialog.remove();
    vi.useRealTimers();
  });

  it('reacts to computed size and fullWidth refs', () => {
    const sizeSeed = ref<'sm' | 'lg'>('sm');
    const size = computed(() => sizeSeed.value, [sizeSeed]);
    const fullWidth = ref(false);

    const dialog = (
      <Dialog
        {...{
          open: true,
          size,
          fullWidth,
          children: 'Body',
        }}
      />
    );

    const paper = dialog.querySelector('.kt-dialog-paper');
    expect(paper.className).toContain('kt-dialog-maxWidth-sm');
    expect(paper.className).not.toContain('kt-dialog-fullWidth');

    sizeSeed.value = 'lg';
    fullWidth.value = true;

    expect(paper.className).toContain('kt-dialog-maxWidth-lg');
    expect(paper.className).toContain('kt-dialog-fullWidth');
    dialog.remove();
  });
});
