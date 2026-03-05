import { describe, expect, it, vi } from 'vitest';
import { ref } from '@ktjs/core';
import { Menu } from './Menu.js';

const createAnchor = () => {
  const anchor = document.createElement('button');
  anchor.getBoundingClientRect = () =>
    ({
      width: 100,
      height: 32,
      top: 80,
      left: 100,
      right: 200,
      bottom: 112,
      x: 100,
      y: 80,
      toJSON: () => ({}),
    }) as DOMRect;
  document.body.appendChild(anchor);
  return anchor;
};

describe('MUI Menu component reactivity', () => {
  it('reacts to options ref updates', () => {
    vi.useFakeTimers();
    const anchor = createAnchor();
    const options = ref([{ value: 'one', label: 'One' }]);

    const menu = <Menu {...{ open: true, anchorEl: anchor, options }} />;
    document.body.appendChild(menu);
    vi.runAllTimers();

    expect(menu.querySelector('.mui-menu-item')?.textContent).toContain('One');

    options.value = [{ value: 'two', label: 'Two' }];

    expect(menu.querySelector('.mui-menu-item')?.textContent).toContain('Two');

    menu.remove();
    anchor.remove();
    vi.useRealTimers();
  });

  it('reacts to autoClose ref', () => {
    vi.useFakeTimers();
    const anchor = createAnchor();
    const open = ref(true);
    const autoClose = ref(false);
    const onClose = vi.fn();

    const menu = (
      <Menu
        {...{
          open,
          anchorEl: anchor,
          autoClose,
          options: [{ value: 'save', label: 'Save' }],
          'on:close': onClose,
        }}
      />
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
    anchor.remove();
    vi.useRealTimers();
  });
});
