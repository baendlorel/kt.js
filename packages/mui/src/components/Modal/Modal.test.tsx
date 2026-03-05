import { afterEach, describe, expect, it, vi } from 'vitest';
import { modalAlert, modalConfirm, modalPrompt } from './Modal.js';

const removeDialogs = () => {
  const dialogs = document.querySelectorAll('.kt-dialog-backdrop');
  for (let i = 0; i < dialogs.length; i++) {
    (dialogs[i] as HTMLElement).remove();
  }
};

afterEach(() => {
  removeDialogs();
  vi.useRealTimers();
});

describe('MUI Modal helpers', () => {
  it('modalAlert should resolve when confirm button is clicked', async () => {
    vi.useFakeTimers();
    const done = modalAlert('Done');

    const confirmButton = document.querySelector('.mui-modal-actions .mui-button') as HTMLButtonElement;
    confirmButton.click();

    await expect(done).resolves.toBeUndefined();
    vi.runAllTimers();
    expect(document.querySelector('.kt-dialog-backdrop')).toBeFalsy();
  });

  it('modalConfirm should resolve false on cancel', async () => {
    vi.useFakeTimers();
    const done = modalConfirm('Continue?');

    const buttons = document.querySelectorAll('.mui-modal-actions .mui-button');
    (buttons[0] as HTMLButtonElement).click();

    await expect(done).resolves.toBe(false);
    vi.runAllTimers();
  });

  it('modalConfirm should resolve false on backdrop close', async () => {
    vi.useFakeTimers();
    const done = modalConfirm('Close by backdrop');

    const backdrop = document.querySelector('.kt-dialog-backdrop') as HTMLDivElement;
    backdrop.dispatchEvent(new MouseEvent('click', { bubbles: true }));

    await expect(done).resolves.toBe(false);
    vi.runAllTimers();
  });

  it('modalPrompt should resolve input value when confirmed', async () => {
    vi.useFakeTimers();
    const done = modalPrompt('Input name', { defaultValue: 'Aldia' });

    const input = document.querySelector('.mui-modal-prompt-input') as HTMLInputElement;
    input.value = 'kt.js';
    input.dispatchEvent(new Event('input', { bubbles: true }));

    const buttons = document.querySelectorAll('.mui-modal-actions .mui-button');
    (buttons[1] as HTMLButtonElement).click();

    await expect(done).resolves.toBe('kt.js');
    vi.runAllTimers();
  });

  it('modalPrompt should resolve null when canceled', async () => {
    vi.useFakeTimers();
    const done = modalPrompt('Cancel prompt');

    const buttons = document.querySelectorAll('.mui-modal-actions .mui-button');
    (buttons[0] as HTMLButtonElement).click();

    await expect(done).resolves.toBeNull();
    vi.runAllTimers();
  });
});
