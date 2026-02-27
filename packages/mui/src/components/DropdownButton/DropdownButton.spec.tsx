import { ref } from '@ktjs/core';
import { describe, expect, it } from 'vitest';
import { DropdownButton } from './DropdownButton.js';

describe('MUI DropdownButton component reactivity', () => {
  it('reacts to label/fullWidth/disabled refs', () => {
    const label = ref('Menu');
    const fullWidth = ref(false);
    const disabled = ref(false);

    const dropdown = (
      <DropdownButton
        {...{
          label,
          fullWidth,
          disabled,
          options: [{ label: 'Open', value: 'open' }],
        }}
      />
    );
    document.body.appendChild(dropdown);

    const trigger = dropdown.querySelector('.mui-dropdown-button-trigger') as HTMLButtonElement;
    expect(trigger.textContent).toContain('Menu');

    label.value = 'Actions';
    fullWidth.value = true;

    expect(trigger.textContent).toContain('Actions');
    expect(dropdown.className).toContain('mui-dropdown-button-fullwidth');

    disabled.value = true;
    expect(trigger.disabled).toBe(true);
    expect(dropdown.className).toContain('mui-dropdown-button-disabled');

    dropdown.remove();
  });

  it('reacts to options ref updates', () => {
    const options = ref([{ label: 'Open', value: 'open' }]);

    const dropdown = (
      <DropdownButton
        {...{
          label: 'Actions',
          options,
        }}
      />
    );
    document.body.appendChild(dropdown);

    const trigger = dropdown.querySelector('.mui-dropdown-button-trigger') as HTMLButtonElement;
    trigger.click();
    expect(dropdown.querySelectorAll('.mui-dropdown-button-option').length).toBe(1);

    options.value = [
      { label: 'Open', value: 'open' },
      { label: 'Close', value: 'close' },
    ];

    expect(dropdown.querySelectorAll('.mui-dropdown-button-option').length).toBe(2);
    dropdown.remove();
  });
});
