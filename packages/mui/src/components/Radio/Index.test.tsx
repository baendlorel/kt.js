import { describe, it, expect, vi } from 'vitest';
import { Radio, RadioGroup } from './Index.js';

describe('MUI Radio component', () => {
  it('should render with defaults', () => {
    const radio = Radio({ label: 'Option', value: '' }) as HTMLElement;
    const input = radio.querySelector('input') as HTMLInputElement;
    expect(input.type).toBe('radio');
    expect(radio.className).toContain('mui-radio-wrapper');
    expect(radio.className).toContain('mui-radio-size-small');
    expect(radio.className).toContain('mui-radio-color-primary');
    expect(radio.querySelector('.mui-radio-label')?.textContent).toBe('Option');
  });

  it('should toggle icons and call on:change', () => {
    const onChange = vi.fn();
    const radio = Radio({ value: 'a', 'on:change': onChange, label: 'Option' }) as HTMLElement;
    const input = radio.querySelector('input') as HTMLInputElement;
    const unchecked = radio.querySelector('.mui-radio-icon-unchecked') as HTMLElement;
    const checked = radio.querySelector('.mui-radio-icon-checked') as HTMLElement;
    expect(unchecked.style.display).toBe('');
    expect(checked.style.display).toBe('none');
    input.checked = true;
    input.dispatchEvent(new Event('change'));
    expect(onChange).toHaveBeenCalledWith(true, 'a');
    expect(unchecked.style.display).toBe('none');
    expect(checked.style.display).toBe('');
  });

  it('should apply disabled class', () => {
    const radio = Radio({ disabled: true, value: '', label: 'Option' }) as HTMLElement;
    expect(radio.className).toContain('mui-radio-disabled');
  });
});

describe('MUI RadioGroup component', () => {
  it('should render options and role', () => {
    const group = RadioGroup({
      options: [
        { label: 'A', value: 'a' },
        { label: 'B', value: 'b' },
      ],
    }) as HTMLElement;
    expect(group.getAttribute('role')).toBe('radiogroup');
    expect(group.querySelectorAll('input[type="radio"]').length).toBe(2);
  });

  it('should update selection and call on:change', () => {
    const onChange = vi.fn();
    const group = RadioGroup({
      value: 'a',
      options: [
        { label: 'A', value: 'a' },
        { label: 'B', value: 'b' },
      ],
      'on:change': onChange,
    }) as HTMLElement;
    const inputs = group.querySelectorAll('input') as NodeListOf<HTMLInputElement>;
    inputs[1].checked = true;
    inputs[1].dispatchEvent(new Event('change'));
    expect(onChange).toHaveBeenCalledWith('b');
    expect((group.querySelectorAll('input')[1] as HTMLInputElement).checked).toBe(true);
  });
});
