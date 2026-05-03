import { describe, expect, it, vi } from 'vitest';
import { ref } from '@ktjs/core';
import { Menu } from './Menu.js';

describe('MUI Menu component', () => {
  it('should render hidden by default', () => {
    const menu = (
      <Menu options={[{ value: 'edit', label: 'Edit' }]}>
        <button>Anchor</button>
      </Menu>
    ) as HTMLElement;

    const overlay = menu.querySelector('.mui-popover-root') as HTMLElement;
    expect(menu.className).toContain('mui-popover-anchor-root');
    expect(overlay.className).toContain('mui-popover-root');
    expect(overlay.style.display).toBe('none');
    menu.remove();
  });

  it('should emit on:select and close on item click', () => {
    vi.useFakeTimers();
    const open = ref(true);
    const onSelect = vi.fn();
    const onClose = vi.fn();
    const option = { value: 'archive', label: 'Archive' };

    const menu = (
      <Menu open={open} options={[option]} on:select={onSelect} on:close={onClose}>
        <button>Anchor</button>
      </Menu>
    );
    document.body.appendChild(menu);
    vi.runAllTimers();

    const item = menu.querySelector('.mui-menu-item[data-index="0"]') as HTMLLIElement;
    item.click();

    expect(onSelect).toHaveBeenCalledWith('archive', option);
    expect(onClose).toHaveBeenCalledWith('itemClick');
    expect(open.value).toBe(false);

    menu.remove();
    vi.useRealTimers();
  });

  it('should close when clicking outside', () => {
    vi.useFakeTimers();
    const onClose = vi.fn();
    const open = ref(true);

    const menu = (
      <Menu open={open} options={[{ value: 'edit', label: 'Edit' }]} on:close={onClose}>
        <button>Anchor</button>
      </Menu>
    );
    document.body.appendChild(menu);
    vi.runAllTimers();

    document.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));

    expect(onClose).toHaveBeenCalledWith('backdropClick');
    expect(open.value).toBe(false);

    menu.remove();
    vi.useRealTimers();
  });

  it('should not select disabled item', () => {
    vi.useFakeTimers();
    const onSelect = vi.fn();

    const menu = (
      <Menu open={true} options={[{ value: 'blocked', label: 'Blocked', disabled: true }]} on:select={onSelect}>
        <button>Anchor</button>
      </Menu>
    );
    document.body.appendChild(menu);
    vi.runAllTimers();

    const item = menu.querySelector('.mui-menu-item[data-index="0"]') as HTMLLIElement;
    expect(item.className).toContain('mui-menu-item-disabled');
    item.click();

    expect(onSelect).not.toHaveBeenCalled();

    menu.remove();
    vi.useRealTimers();
  });
});
