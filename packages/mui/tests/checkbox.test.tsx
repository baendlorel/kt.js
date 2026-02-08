import { describe, it, expect, vi } from 'vitest';
import { Checkbox, CheckboxGroup } from '../src/components/Checkbox/Index.js';

describe('MUI Checkbox component', () => {
  it('should render with defaults', () => {
    const checkbox = Checkbox({}) as HTMLElement;
    const input = checkbox.querySelector('input') as HTMLInputElement;
    expect(input.type).toBe('checkbox');
    expect(checkbox.className).toContain('mui-checkbox-wrapper');
    expect(checkbox.className).toContain('mui-checkbox-size-medium');
    expect(checkbox.className).toContain('mui-checkbox-color-primary');
    expect(checkbox.querySelector('.mui-checkbox-label')).toBeFalsy();
  });

  it('should render label text', () => {
    const checkbox = Checkbox({ label: 'Accept' }) as HTMLElement;
    const label = checkbox.querySelector('.mui-checkbox-label');
    expect(label?.textContent).toBe('Accept');
  });

  it('should toggle icons based on state', () => {
    const checkbox = Checkbox({ checked: true }) as HTMLElement;
    const unchecked = checkbox.querySelector('.mui-checkbox-icon-unchecked') as HTMLElement;
    const checked = checkbox.querySelector('.mui-checkbox-icon-checked') as HTMLElement;
    const indeterminate = checkbox.querySelector('.mui-checkbox-icon-indeterminate') as HTMLElement;
    expect(unchecked.style.display).toBe('none');
    expect(checked.style.display).toBe('');
    expect(indeterminate.style.display).toBe('none');
  });

  it('should show indeterminate icon', () => {
    const checkbox = Checkbox({ indeterminate: true }) as HTMLElement;
    const unchecked = checkbox.querySelector('.mui-checkbox-icon-unchecked') as HTMLElement;
    const checked = checkbox.querySelector('.mui-checkbox-icon-checked') as HTMLElement;
    const indeterminate = checkbox.querySelector('.mui-checkbox-icon-indeterminate') as HTMLElement;
    expect(unchecked.style.display).toBe('none');
    expect(checked.style.display).toBe('none');
    expect(indeterminate.style.display).toBe('');
  });

  it('should call on:change on toggle', () => {
    const onChange = vi.fn();
    const checkbox = Checkbox({ value: 'v1', 'on:change': onChange }) as HTMLElement;
    const input = checkbox.querySelector('input') as HTMLInputElement;
    input.checked = true;
    input.dispatchEvent(new Event('change'));
    expect(onChange).toHaveBeenCalledWith(true, 'v1');
  });

  it('should ignore changes when disabled', () => {
    const onChange = vi.fn();
    const checkbox = Checkbox({ disabled: true, 'on:change': onChange }) as HTMLElement;
    const input = checkbox.querySelector('input') as HTMLInputElement;
    input.checked = true;
    input.dispatchEvent(new Event('change'));
    expect(onChange).not.toHaveBeenCalled();
    expect(checkbox.className).toContain('mui-checkbox-disabled');
  });
});

describe('MUI CheckboxGroup component', () => {
  it('should render options and role', () => {
    const group = CheckboxGroup({
      options: [
        { label: 'A', value: 'a' },
        { label: 'B', value: 'b' },
      ],
    }) as HTMLElement;
    expect(group.getAttribute('role')).toBe('group');
    console.log('group.innerHTML', group.innerHTML);
    expect(group.querySelectorAll('input[type="checkbox"]').length).toBe(2);
  });

  it('should update value list and call on:change', () => {
    const onChange = vi.fn();
    const group = CheckboxGroup({
      value: [],
      options: [
        { label: 'A', value: 'a' },
        { label: 'B', value: 'b' },
      ],
      'on:change': onChange,
    }) as HTMLElement;
    const inputs = group.querySelectorAll('input') as NodeListOf<HTMLInputElement>;
    inputs[0].checked = true;
    inputs[0].dispatchEvent(new Event('change'));
    expect(onChange).toHaveBeenCalledWith(['a']);
  });
});
