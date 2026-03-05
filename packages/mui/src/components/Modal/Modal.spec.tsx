import { describe, expect, it } from 'vitest';
import { Modal, alert, confirm, modalAlert, modalConfirm, modalPrompt, prompt } from './Modal.js';

describe('MUI Modal helpers exports', () => {
  it('Modal object should expose alert/confirm/prompt methods', () => {
    expect(Modal.alert).toBe(modalAlert);
    expect(Modal.confirm).toBe(modalConfirm);
    expect(Modal.prompt).toBe(modalPrompt);
  });

  it('named aliases should map to modal helpers', () => {
    expect(alert).toBe(modalAlert);
    expect(confirm).toBe(modalConfirm);
    expect(prompt).toBe(modalPrompt);
  });
});
