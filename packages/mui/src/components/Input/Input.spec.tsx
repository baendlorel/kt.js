import { computed, ref } from '@ktjs/core';
import { describe, expect, it } from 'vitest';
import { TextField } from './Input.js';

describe('MUI TextField component reactivity', () => {
  it('reacts to label/required/error/helperText refs', () => {
    const label = ref('Email');
    const required = ref(false);
    const error = ref(false);
    const helperText = ref('Hint');

    const textfield = (
      <TextField
        {...{
          label,
          required,
          error,
          helperText,
        }}
      />
    );

    expect(textfield.querySelector('.mui-textfield-label')?.textContent).toContain('Email');
    expect(textfield.querySelector('.mui-textfield-required')?.getAttribute('k-if')).toBe('false');

    required.value = true;
    error.value = true;
    helperText.value = 'Updated hint';
    label.value = 'Account';

    expect(textfield.querySelector('.mui-textfield-label')?.textContent).toContain('Account');
    expect(textfield.querySelector('.mui-textfield-required')?.textContent).toBe('*');
    expect(textfield.className).toContain('mui-textfield-error');
    expect(textfield.querySelector('.mui-textfield-helper-text')?.textContent).toBe('Updated hint');
  });

  it('reacts to computed value updates', () => {
    const labelSeed = ref('State');
    const label = computed(() => labelSeed.value, [labelSeed]);
    const model = ref('alpha');

    const textfield = (
      <TextField
        {...({
          label,
          'k-model': model,
        } as any)}
      />
    );
    const input = textfield.querySelector('input') as HTMLInputElement;

    expect(input.value).toBe('alpha');
    expect(textfield.querySelector('.mui-textfield-label')?.textContent).toContain('State');

    model.value = 'beta';
    labelSeed.value = 'Account';

    expect(input.value).toBe('beta');
    expect(textfield.querySelector('.mui-textfield-label')?.textContent).toContain('Account');
    expect(textfield.className).toContain('mui-textfield-has-value');
  });
});
