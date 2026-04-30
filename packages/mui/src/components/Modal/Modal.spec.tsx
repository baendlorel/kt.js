import { describe, expect, it } from 'vitest';
import { Modal } from './Modal.js';

describe('MUI Modal helpers exports', () => {
  it('Modal object should expose methods', () => {
    expect(typeof Modal.alert).toBe('function');
    expect(typeof Modal.confirm).toBe('function');
    expect(typeof Modal.prompt).toBe('function');
  });
});
