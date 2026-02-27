import { ref } from '@ktjs/core';
import { describe, expect, it, vi } from 'vitest';
import { Checkbox, CheckboxGroup } from './CheckboxGroup.js';

describe('MUI Checkbox component reactivity', () => {
  it('syncs k-model and indeterminate refs', () => {
    const model = ref(false);
    const indeterminate = ref(true);
    const label = ref('Accept');

    const checkbox = Checkbox({
      'k-model': model,
      indeterminate,
      label,
      value: 'accept',
    } as any) as HTMLElement;

    const input = checkbox.querySelector('input') as HTMLInputElement;
    const indeterminateIcon = checkbox.querySelector('.mui-checkbox-icon-indeterminate') as HTMLElement;
    const checkedIcon = checkbox.querySelector('.mui-checkbox-icon-checked') as HTMLElement;

    expect(indeterminateIcon.style.display).toBe('');
    expect(checkedIcon.style.display).toBe('none');

    indeterminate.value = false;
    model.value = true;
    label.value = 'Accepted';

    expect(input.checked).toBe(true);
    expect(checkedIcon.style.display).toBe('');
    expect(checkbox.querySelector('.mui-checkbox-label')?.textContent).toBe('Accepted');
  });
});

describe('MUI CheckboxGroup component reactivity', () => {
  it('syncs external value ref and emits group changes', () => {
    const value = ref<string[]>([]);
    const onChange = vi.fn();

    const group = CheckboxGroup({
      value,
      options: ref([
        { label: 'A', value: 'a' },
        { label: 'B', value: 'b' },
      ]),
      'on:change': onChange,
    } as any) as HTMLElement;

    const inputs = group.querySelectorAll('input') as NodeListOf<HTMLInputElement>;
    expect(inputs[0].checked).toBe(false);
    expect(inputs[1].checked).toBe(false);

    inputs[0].checked = true;
    inputs[0].dispatchEvent(new Event('change'));

    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledWith(['a'], []);
  });
});
