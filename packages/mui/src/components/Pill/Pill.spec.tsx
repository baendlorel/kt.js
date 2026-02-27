import { ref } from '@ktjs/core';
import { describe, expect, it, vi } from 'vitest';
import { Pill } from './Pill.js';

describe('MUI Pill component reactivity', () => {
  it('reacts to label/clickable/disabled refs', () => {
    const label = ref('Draft');
    const clickable = ref(false);
    const disabled = ref(false);
    const onClick = vi.fn();

    const pill = Pill({
      label,
      clickable,
      disabled,
      'on:click': onClick,
    }) as HTMLElement;

    pill.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    expect(onClick).not.toHaveBeenCalled();

    clickable.value = true;
    label.value = 'Published';
    pill.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(pill.textContent).toContain('Published');

    disabled.value = true;
    pill.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(pill.className).toContain('mui-pill-disabled');
  });

  it('reacts to autoRemoveOnDelete ref', () => {
    const autoRemoveOnDelete = ref(false);
    const onDelete = vi.fn();

    const pill = Pill({
      label: 'Removable',
      autoRemoveOnDelete,
      'on:delete': onDelete,
    }) as HTMLElement;
    document.body.appendChild(pill);

    const deleteButton = pill.querySelector('.mui-pill-delete') as HTMLButtonElement;
    deleteButton.click();

    expect(onDelete).toHaveBeenCalledTimes(1);
    expect(pill.isConnected).toBe(true);

    autoRemoveOnDelete.value = true;
    deleteButton.click();

    expect(onDelete).toHaveBeenCalledTimes(2);
    expect(pill.isConnected).toBe(false);
  });
});
