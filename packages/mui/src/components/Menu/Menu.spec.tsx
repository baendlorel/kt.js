import { describe, expect, it, vi } from 'vitest';
import { ref } from '@ktjs/core';
import { Menu } from './Menu.js';

describe('MUI Menu component reactivity', () => {
  it('reacts to options ref updates', () => {
    vi.useFakeTimers();
    const options = ref([{ value: 'one', label: 'One' }]);

    const menu = (
      <Menu open={true} options={options}>
        <button>Anchor</button>
      </Menu>
    );
    document.body.appendChild(menu);
    vi.runAllTimers();

    expect(menu.querySelector('.mui-menu-item')?.textContent).toContain('One');

    options.value = [{ value: 'two', label: 'Two' }];

    expect(menu.querySelector('.mui-menu-item')?.textContent).toContain('Two');

    menu.remove();
    vi.useRealTimers();
  });

  it('reacts to autoClose ref', () => {
    vi.useFakeTimers();
    const open = ref(true);
    const autoClose = ref(false);
    const onClose = vi.fn();

    const menu = (
      <Menu open={open} autoClose={autoClose} options={[{ value: 'save', label: 'Save' }]} on:close={onClose}>
        <button>Anchor</button>
      </Menu>
    );
    document.body.appendChild(menu);
    vi.runAllTimers();

    const item = menu.querySelector('.mui-menu-item[data-index="0"]') as HTMLLIElement;
    item.click();
    expect(open.value).toBe(true);
    expect(onClose).not.toHaveBeenCalled();

    autoClose.value = true;
    item.click();
    expect(open.value).toBe(false);
    expect(onClose).toHaveBeenCalledWith('itemClick');

    menu.remove();
    vi.useRealTimers();
  });
});
