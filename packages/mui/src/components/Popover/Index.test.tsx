import { describe, it, expect, vi } from 'vitest';
import { ref } from '@ktjs/core';
import { Popover } from './Index.js';

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

describe('MUI Popover component', () => {
  it('should render hidden by default', () => {
    const popover = Popover({ children: 'Body' }) as HTMLElement;
    expect(popover.className).toContain('mui-popover-root');
    expect(popover.style.display).toBe('none');
    popover.remove();
  });

  it('should position popover when opened', () => {
    vi.useFakeTimers();
    const anchor = createAnchor();
    const popover = Popover({ open: true, anchorEl: anchor, children: 'Body' }) as HTMLElement;
    document.body.appendChild(popover);

    vi.runAllTimers();
    const paper = popover.querySelector('.mui-popover-paper') as HTMLElement;
    expect(popover.style.display).toBe('block');
    expect(paper.style.top).not.toBe('');
    expect(paper.style.left).not.toBe('');

    popover.remove();
    anchor.remove();
    vi.useRealTimers();
  });

  it('should close on outside click and Escape key', () => {
    vi.useFakeTimers();
    const anchor = createAnchor();
    const openRef = ref(true);
    const onClose = vi.fn();
    const popover = Popover({
      open: openRef,
      anchorEl: anchor,
      'on:close': onClose,
      children: 'Body',
    }) as HTMLElement;
    document.body.appendChild(popover);
    vi.runAllTimers();

    document.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
    expect(onClose).toHaveBeenCalledWith('backdropClick');
    expect(openRef.value).toBe(false);

    openRef.value = true;
    vi.runAllTimers();
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    expect(onClose).toHaveBeenCalledWith('escapeKeyDown');
    expect(openRef.value).toBe(false);

    popover.remove();
    anchor.remove();
    vi.useRealTimers();
  });

  it('should apply custom class and style to paper', () => {
    vi.useFakeTimers();
    const anchor = createAnchor();
    const popover = Popover({
      open: true,
      anchorEl: anchor,
      class: 'custom-popover',
      style: { minWidth: '240px' },
      children: 'Body',
    }) as HTMLElement;
    document.body.appendChild(popover);
    vi.runAllTimers();

    const paper = popover.querySelector('.mui-popover-paper') as HTMLElement;
    expect(paper.className).toContain('custom-popover');
    expect(paper.style.minWidth).toBe('240px');

    popover.remove();
    anchor.remove();
    vi.useRealTimers();
  });
});
