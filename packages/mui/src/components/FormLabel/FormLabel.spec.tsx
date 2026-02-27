import { ref } from '@ktjs/core';
import { describe, expect, it } from 'vitest';
import { FormLabel } from './FormLabel.js';

describe('MUI FormLabel component reactivity', () => {
  it('reacts to status refs and required marker', () => {
    const required = ref(false);
    const error = ref(false);
    const focused = ref(false);

    const label = FormLabel({
      children: 'Email',
      required,
      error,
      focused,
    }) as HTMLElement;

    expect(label.className).not.toContain('mui-form-label-error');
    expect(label.querySelector('.mui-form-label-asterisk')?.getAttribute('k-if')).toBe('false');

    required.value = true;
    error.value = true;
    focused.value = true;

    expect(label.className).toContain('mui-form-label-error');
    expect(label.className).toContain('mui-form-label-focused');
    expect(label.querySelector('.mui-form-label-asterisk')?.getAttribute('k-if')).toBe('true');
  });

  it('reacts to htmlFor ref changes', () => {
    const htmlFor = ref('field-a');
    const label = FormLabel({ children: 'Name', htmlFor }) as HTMLElement;

    expect(label.getAttribute('for')).toBe('field-a');
    htmlFor.value = 'field-b';
    expect(label.getAttribute('for')).toBe('field-b');
  });
});
