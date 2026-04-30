import { afterEach, describe, expect, it, vi } from 'vitest';
import { Modal } from './Modal.js';

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
  it('Modal.alert should animate in after mounting', async () => {
    vi.useFakeTimers();
    const done = Modal.alert('Animated');

    const backdrop = document.querySelector('.kt-dialog-backdrop') as HTMLDivElement;
    expect(backdrop.classList.contains('kt-dialog-backdrop-open')).toBe(false);

    vi.advanceTimersByTime(20);
    expect(backdrop.classList.contains('kt-dialog-backdrop-open')).toBe(true);

    const confirmButton = document.querySelector('.mui-modal-actions .mui-button') as HTMLButtonElement;
    confirmButton.click();

    await expect(done).resolves.toBeUndefined();
    vi.runAllTimers();
  });

  it('Modal.alert should resolve when confirm button is clicked', async () => {
    vi.useFakeTimers();
    const done = Modal.alert('Done');

    const confirmButton = document.querySelector('.mui-modal-actions .mui-button') as HTMLButtonElement;
    confirmButton.click();

    await expect(done).resolves.toBeUndefined();
    vi.runAllTimers();
    expect(document.querySelector('.kt-dialog-backdrop')).toBeFalsy();
  });

  it('modalConfirm should resolve false on cancel', async () => {
    vi.useFakeTimers();
    const done = Modal.confirm('Continue?');

    const buttons = document.querySelectorAll('.mui-modal-actions .mui-button');
    (buttons[0] as HTMLButtonElement).click();

    await expect(done).resolves.toBe(false);
    vi.runAllTimers();
  });

  it('modalConfirm should resolve false on backdrop close when enabled', async () => {
    vi.useFakeTimers();
    const done = Modal.confirm('Close by backdrop', { backdropClosable: true });

    const backdrop = document.querySelector('.kt-dialog-backdrop') as HTMLDivElement;
    backdrop.dispatchEvent(new MouseEvent('click', { bubbles: true }));

    await expect(done).resolves.toBe(false);
    vi.runAllTimers();
  });

  it('modalConfirm should ignore backdrop click by default', async () => {
    vi.useFakeTimers();
    const done = Modal.confirm('Default backdrop behavior');
    let resolved = false;
    done.then(() => {
      resolved = true;
    });

    const backdrop = document.querySelector('.kt-dialog-backdrop') as HTMLDivElement;
    backdrop.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    await Promise.resolve();

    expect(resolved).toBe(false);

    const buttons = document.querySelectorAll('.mui-modal-actions .mui-button');
    (buttons[0] as HTMLButtonElement).click();
    await expect(done).resolves.toBe(false);
    vi.runAllTimers();
  });

  it('modalPrompt should resolve input value when confirmed', async () => {
    vi.useFakeTimers();
    const done = Modal.prompt('Input name', { defaultValue: 'Aldia' });

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
    const done = Modal.prompt('Cancel prompt');

    const buttons = document.querySelectorAll('.mui-modal-actions .mui-button');
    (buttons[0] as HTMLButtonElement).click();

    await expect(done).resolves.toBeNull();
    vi.runAllTimers();
  });
});
