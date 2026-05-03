import { describe, it, expect, vi } from 'vitest';
import { ref } from '@ktjs/core';
import { Popover } from './Popover.js';

describe('MUI Popover component', () => {
  it('should render hidden by default', () => {
    const popover = (
      <Popover {...{ content: 'Body' }}>
        <button>Anchor</button>
      </Popover>
    ) as HTMLElement;
    expect(popover.querySelector('.mui-popover-root')?.className).toContain('mui-popover-root');
    expect((popover.querySelector('.mui-popover-root') as HTMLElement).style.display).toBe('none');
    popover.remove();
  });

  it('should position popover when opened', () => {
    vi.useFakeTimers();
    const popover = (
      <Popover {...{ open: true, content: 'Body' }}>
        <button>Anchor</button>
      </Popover>
    ) as HTMLElement;
    document.body.appendChild(popover);

    vi.runAllTimers();
    const paper = popover.querySelector<HTMLElement>('.mui-popover-paper');
    const overlay = popover.querySelector<HTMLElement>('.mui-popover-root');
    expect(overlay?.style.display).toBe('block');
    expect(paper?.style.top).not.toBe('');
    expect(paper?.style.left).not.toBe('');

    popover.remove();
    vi.useRealTimers();
  });

  it('should close on outside click and Escape key', () => {
    vi.useFakeTimers();
    const openRef = ref(true);
    const onClose = vi.fn();
    const popover = (
      <Popover
        {...{
          open: openRef,
          content: 'Body',
          'on:close': onClose,
        }}
      >
        <button>Anchor</button>
      </Popover>
    );
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
    vi.useRealTimers();
  });

  it('should render jsx content', () => {
    const popover = (
      <Popover content={<div class="custom-content">Body</div>}>
        <button>Anchor</button>
      </Popover>
    ) as HTMLElement;
    expect(popover.querySelector('.custom-content')?.textContent).toBe('Body');
    popover.remove();
  });
});
