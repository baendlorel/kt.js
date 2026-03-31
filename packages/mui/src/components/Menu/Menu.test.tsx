import { describe, expect, it, vi } from 'vitest';
import { ref } from '@ktjs/core';
import { Menu } from './Menu.js';

const createAnchor = () => {
  const anchor = document.createElement('button');
  anchor.getBoundingClientRect = () =>
    ({
      width: 120,
      height: 40,
      top: 120,
      left: 200,
      right: 320,
      bottom: 160,
      x: 200,
      y: 120,
      toJSON: () => ({}),
    }) as DOMRect;
  document.body.appendChild(anchor);
  return anchor;
};

describe('MUI Menu component', () => {
  it('should render hidden by default', () => {
    const menu = (<Menu {...{ options: [{ value: 'edit', label: 'Edit' }] }} />) as HTMLElement;

    expect(menu.className).toContain('mui-popover-root');
    expect(menu.style.display).toBe('none');
    menu.remove();
  });

  it('should emit on:select and close on item click', () => {
    vi.useFakeTimers();
    const anchor = createAnchor();
    const open = ref(true);
    const onSelect = vi.fn();
    const onClose = vi.fn();
    const option = { value: 'archive', label: 'Archive' };

    const menu = (
      <Menu
        {...{
          open,
          anchorEl: anchor,
          options: [option],
          'on:select': onSelect,
          'on:close': onClose,
        }}
      />
    );
    document.body.appendChild(menu);
    vi.runAllTimers();

    const item = menu.querySelector('.mui-menu-item[data-index="0"]') as HTMLLIElement;
    item.click();

    expect(onSelect).toHaveBeenCalledWith('archive', option);
    expect(onClose).toHaveBeenCalledWith('itemClick');
    expect(open.value).toBe(false);

    menu.remove();
    anchor.remove();
    vi.useRealTimers();
  });

  it('should close when clicking outside', () => {
    vi.useFakeTimers();
    const anchor = createAnchor();
    const onClose = vi.fn();
    const open = ref(true);

    const menu = (
      <Menu
        {...{
          open,
          anchorEl: anchor,
          options: [{ value: 'edit', label: 'Edit' }],
          'on:close': onClose,
        }}
      />
    );
    document.body.appendChild(menu);
    vi.runAllTimers();

    document.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));

    expect(onClose).toHaveBeenCalledWith('backdropClick');
    expect(open.value).toBe(false);

    menu.remove();
    anchor.remove();
    vi.useRealTimers();
  });

  it('should not select disabled item', () => {
    vi.useFakeTimers();
    const anchor = createAnchor();
    const onSelect = vi.fn();

    const menu = (
      <Menu
        {...{
          open: true,
          anchorEl: anchor,
          options: [{ value: 'blocked', label: 'Blocked', disabled: true }],
          'on:select': onSelect,
        }}
      />
    );
    document.body.appendChild(menu);
    vi.runAllTimers();

    const item = menu.querySelector('.mui-menu-item[data-index="0"]') as HTMLLIElement;
    expect(item.className).toContain('mui-menu-item-disabled');
    item.click();

    expect(onSelect).not.toHaveBeenCalled();

    menu.remove();
    anchor.remove();
    vi.useRealTimers();
  });
});
