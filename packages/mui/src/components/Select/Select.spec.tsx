import { ref } from '@ktjs/core';
import { describe, expect, it, vi } from 'vitest';
import { Select } from './Select.js';

describe('MUI Select component reactivity', () => {
  it('reacts to value/label/placeholder refs', () => {
    const model = ref('open');
    const label = ref('Status');
    const placeholder = ref('Pick one');

    const select = (
      <Select
        {...({
          'k-model': model,
          label,
          placeholder,
          options: [
            { label: 'Open', value: 'open' },
            { label: 'Closed', value: 'closed' },
          ],
        } as any)}
      />
    );

    expect(select.querySelector('.mui-select-label')?.textContent).toContain('Status');
    expect(select.querySelector('.mui-select-display')?.textContent).toContain('Open');

    model.value = 'closed';
    label.value = 'State';
    placeholder.value = 'Choose';

    expect(select.querySelector('.mui-select-label')?.textContent).toContain('State');
    expect(select.querySelector('.mui-select-display')?.textContent).toContain('Closed');
  });

  it('resets model when reactive options remove current value', () => {
    const onChange = vi.fn();
    const model = ref('open');
    const options = ref([
      { label: 'Open', value: 'open' },
      { label: 'Closed', value: 'closed' },
    ]);

    const select = (
      <Select
        {...({
          'k-model': model,
          options,
          'on:change': onChange,
        } as any)}
      />
    );

    const hiddenInput = select.querySelector('input[type="hidden"]') as HTMLInputElement;
    expect(hiddenInput.value).toBe('open');

    options.value = [{ label: 'Closed', value: 'closed' }];

    expect(hiddenInput.value).toBe('');
    expect(onChange).toHaveBeenCalledWith('', 'open');
  });
});
