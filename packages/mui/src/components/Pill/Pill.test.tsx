import { describe, it, expect, vi } from 'vitest';
import { ref } from '@ktjs/core';
import { Pill } from './Pill.js';

describe('MUI Pill component', () => {
  it('should render with default classes and label', () => {
    const pill = Pill({ label: 'Draft' }) as HTMLElement;
    expect(pill.className).toContain('mui-pill');
    expect(pill.className).toContain('mui-pill-color-default');
    expect(pill.className).toContain('mui-pill-variant-filled');
    expect(pill.className).toContain('mui-pill-size-medium');
    expect(pill.textContent).toContain('Draft');
  });

  it('should apply variant, color, class and style', () => {
    const pill = Pill({
      label: 'Beta',
      variant: 'outlined',
      color: 'primary',
      class: 'custom-pill',
      style: { marginTop: '8px' },
    }) as HTMLElement;

    expect(pill.className).toContain('mui-pill-variant-outlined');
    expect(pill.className).toContain('mui-pill-color-primary');
    expect(pill.className).toContain('custom-pill');
    expect(pill.style.marginTop).toBe('8px');
  });

  it('should support reactive disabled state', () => {
    const disabled = ref(false);
    const pill = Pill({ label: 'Reactive', disabled }) as HTMLElement;
    expect(pill.className).not.toContain('mui-pill-disabled');

    disabled.value = true;
    expect(pill.className).toContain('mui-pill-disabled');
  });

  it('should trigger on:click and on:delete handlers', () => {
    const onClick = vi.fn();
    const onDelete = vi.fn();
    const pill = Pill({
      label: 'Closable',
      clickable: true,
      'on:click': onClick,
      'on:delete': onDelete,
    }) as HTMLElement;
    document.body.appendChild(pill);

    pill.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    const deleteButton = pill.querySelector('.mui-pill-delete') as HTMLButtonElement;
    deleteButton.click();

    expect(onClick).toHaveBeenCalledTimes(1);
    expect(onDelete).toHaveBeenCalledTimes(1);
    expect(pill.isConnected).toBe(false);
  });

  it('should keep element when autoRemoveOnDelete is false', () => {
    const onDelete = vi.fn();
    const pill = Pill({
      label: 'Pinned',
      autoRemoveOnDelete: false,
      'on:delete': onDelete,
    }) as HTMLElement;

    document.body.appendChild(pill);
    const deleteButton = pill.querySelector('.mui-pill-delete') as HTMLButtonElement;
    deleteButton.click();

    expect(onDelete).toHaveBeenCalledTimes(1);
    expect(pill.isConnected).toBe(true);
    pill.remove();
  });
});
