import { describe, it, expect, vi } from 'vitest';
import { ref } from '@ktjs/core';
import { Dialog } from './Dialog.js';

describe('MUI Dialog component', () => {
  it('should render closed by default', () => {
    const dialog = (<Dialog {...{}} />) as HTMLElement;
    expect(dialog.style.display).toBe('none');
    expect(dialog.className).toContain('kt-dialog-backdrop');
  });

  it('should render title, content, and actions', () => {
    const actions = document.createElement('button');
    actions.textContent = 'OK';
    const dialog = <Dialog {...{ title: 'Title', children: 'Body', actions }} />;
    expect(dialog.querySelector('.kt-dialog-title')?.textContent).toContain('Title');
    expect(dialog.querySelector('.kt-dialog-content')?.textContent).toContain('Body');
    expect(dialog.querySelector('.kt-dialog-actions')?.textContent).toContain('OK');
  });

  it('should open when open is true', () => {
    vi.useFakeTimers();
    const dialog = (<Dialog {...{ open: true }} />) as HTMLElement;
    expect(dialog.style.display).toBe('flex');
    expect(dialog.classList.contains('kt-dialog-backdrop-open')).toBe(false);

    vi.advanceTimersByTime(20);
    expect(dialog.classList.contains('kt-dialog-backdrop-open')).toBe(true);

    dialog.remove();
    vi.useRealTimers();
  });

  it('should animate out before hiding when closed', () => {
    vi.useFakeTimers();
    const openRef = ref(true);
    const dialog = (<Dialog {...{ open: openRef }} />) as HTMLElement;

    vi.advanceTimersByTime(20);
    expect(dialog.classList.contains('kt-dialog-backdrop-open')).toBe(true);

    openRef.value = false;
    expect(dialog.classList.contains('kt-dialog-backdrop-open')).toBe(false);
    expect(dialog.style.display).toBe('flex');

    vi.advanceTimersByTime(225);
    expect(dialog.style.display).toBe('none');

    dialog.remove();
    vi.useRealTimers();
  });

  it('should call on:close when backdrop clicked', () => {
    const onClose = vi.fn();
    const dialog = <Dialog {...{ open: true, 'on:close': onClose }} />;
    dialog.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('should close on Escape key', () => {
    vi.useFakeTimers();
    const onClose = vi.fn();
    const openRef = ref(true);
    const dialog = (<Dialog {...{ open: openRef, 'on:close': onClose }} />) as HTMLElement;
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    vi.advanceTimersByTime(250);
    expect(onClose).toHaveBeenCalledTimes(1);
    expect(dialog.style.display).toBe('none');
    dialog.remove();
    vi.useRealTimers();
  });
});
