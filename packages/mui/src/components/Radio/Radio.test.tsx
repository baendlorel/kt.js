import { describe, it, expect, vi } from 'vitest';
import { ref } from '@ktjs/core';
import { Radio, RadioGroup } from './Radio.js';

describe('MUI Radio component', () => {
  it('should render with defaults', () => {
    const radio = <Radio {...{ label: 'Option', value: '' }} />;
    const input = radio.querySelector('input') as HTMLInputElement;
    expect(input.type).toBe('radio');
    expect(radio.className).toContain('mui-radio-wrapper');
    expect(radio.className).toContain('mui-radio-size-small');
    expect(radio.className).toContain('mui-radio-color-primary');
    expect(radio.querySelector('.mui-radio-label')?.textContent).toBe('Option');
  });

  it('should toggle icons and call on:change', () => {
    const value = { id: 1 };
    const onChange = vi.fn();
    const radio = (<Radio {...{ value, 'on:change': onChange, label: 'Option' }} />) as HTMLElement;
    const input = radio.querySelector('input') as HTMLInputElement;
    const unchecked = radio.querySelector<HTMLElement>('.mui-radio-icon-unchecked');
    const checked = radio.querySelector<HTMLElement>('.mui-radio-icon-checked');
    expect(unchecked?.style.display).toBe('');
    expect(checked?.style.display).toBe('none');
    input.checked = true;
    input.dispatchEvent(new Event('change'));
    expect(onChange).toHaveBeenCalledWith(true, value);
    expect(unchecked?.style.display).toBe('none');
    expect(checked?.style.display).toBe('');
  });

  it('should apply disabled class', () => {
    const radio = <Radio {...{ disabled: true, value: '', label: 'Option' }} />;
    expect(radio.className).toContain('mui-radio-disabled');
  });
});

describe('MUI RadioGroup component', () => {
  it('should render role container', () => {
    const group = (
      <RadioGroup
        {...{
          options: [
            { label: 'A', value: 'a' },
            { label: 'B', value: 'b' },
          ],
        }}
      />
    );
    expect(group.getAttribute('role')).toBe('radiogroup');
    expect(group.className).toContain('mui-radio-group');
  });

  it('should render options as radio elements instead of stringified nodes', () => {
    const group = (
      <RadioGroup
        {...{
          options: [
            { label: 'A', value: 'a' },
            { label: 'B', value: 'b' },
          ],
        }}
      />
    );

    expect(group.querySelectorAll('.mui-radio-wrapper')).toHaveLength(2);
    expect(group.textContent).not.toContain('[object HTMLLabelElement]');
  });

  it('should call group on:change with selected object value', () => {
    const valueA = { id: 'a' };
    const valueB = { id: 'b' };
    const onChange = vi.fn();
    const group = (
      <RadioGroup
        {...{
          value: valueA,
          'on:change': onChange,
          options: [
            { label: 'A', value: valueA },
            { label: 'B', value: valueB },
          ],
        }}
      />
    );

    const inputs = group.querySelectorAll('input');
    const second = inputs[1] as HTMLInputElement;
    second.checked = true;
    second.dispatchEvent(new Event('change', { bubbles: true }));

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenLastCalledWith(valueB);
    expect((group as any).value).toBe(valueB);
  });

  it('should expose value property updates', () => {
    const valueA = { id: 'a' };
    const valueB = { id: 'b' };
    const group = (
      <RadioGroup
        {...{
          value: valueA,
          options: [
            { label: 'A', value: valueA },
            { label: 'B', value: valueB },
          ],
        }}
      />
    );

    expect((group as any).value).toBe(valueA);
    (group as any).value = valueB;
    expect((group as any).value).toBe(valueB);
  });

  it('should prioritize k-model over value and sync selection', () => {
    const valueA = { id: 'a' };
    const valueB = { id: 'b' };
    const model = ref(valueB);
    const group = (
      <RadioGroup
        {...({
          value: valueA,
          'k-model': model,
          options: [
            { label: 'A', value: valueA },
            { label: 'B', value: valueB },
          ],
        } as any)}
      />
    );

    expect((group as any).value).toBe(valueB);
    const inputs = group.querySelectorAll('input') as NodeListOf<HTMLInputElement>;
    expect(inputs[0].checked).toBe(false);
    expect(inputs[1].checked).toBe(true);

    inputs[0].checked = true;
    inputs[0].dispatchEvent(new Event('change', { bubbles: true }));
    expect(model.value).toBe(valueA);
    expect((group as any).value).toBe(valueA);
  });
});
