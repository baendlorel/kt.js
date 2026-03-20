import { ref } from '@ktjs/core';
import { describe, expect, it } from 'vitest';
import { FormLabel } from './FormLabel.js';

describe('MUI FormLabel component reactivity', () => {
  it('reacts to status refs and required marker', () => {
    const required = ref(false);
    const error = ref(false);
    const focused = ref(false);

    const label = (
      <FormLabel
        {...{
          children: 'Email',
          required,
          error,
          focused,
        }}
      />
    );

    expect(label.className).not.toContain('mui-form-label-error');
    expect(label.querySelector('.mui-form-label-asterisk')).toBeNull();

    required.state = true;
    error.state = true;
    focused.state = true;

    expect(label.className).toContain('mui-form-label-error');
    expect(label.className).toContain('mui-form-label-focused');
    expect(label.querySelector('.mui-form-label-asterisk')?.textContent).toBe('*');
  });

  it('reacts to htmlFor ref changes', () => {
    const htmlFor = ref('field-a');
    const label = <FormLabel {...{ children: 'Name', htmlFor }} />;

    expect(label.getAttribute('for')).toBe('field-a');
    htmlFor.state = 'field-b';
    expect(label.getAttribute('for')).toBe('field-b');
  });
});
