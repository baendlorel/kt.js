import { computed, ref } from '@ktjs/core';
import { describe, expect, it, vi } from 'vitest';
import { Dialog } from './Dialog.js';

describe('MUI Dialog component reactivity', () => {
  it('reacts to open ref with transition timers', () => {
    vi.useFakeTimers();
    const open = ref(false);

    const dialog = (<Dialog {...{ 'k-model': open, children: 'Body' }} />) as HTMLElement;
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
    const size = ref('600px');

    const dialog = (
      <Dialog
        {...{
          'k-model': ref(true),
          width: size,
          children: 'Body',
        }}
      />
    ) as HTMLElement;

    const paper = dialog.querySelector<HTMLElement>('.kt-dialog-paper');

    expect(paper?.style.width).toContain('600px');
    size.value = '800px';
    expect(paper?.style.width).toContain('800px');
    dialog.remove();
  });
});
