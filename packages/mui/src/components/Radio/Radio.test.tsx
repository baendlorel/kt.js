import { describe, it, expect, vi } from 'vitest';
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
    const onChange = vi.fn();
    const radio = <Radio {...{ value: 'a', 'on:change': onChange, label: 'Option' }} />;
    const input = radio.querySelector('input') as HTMLInputElement;
    const unchecked = radio.querySelector('.mui-radio-icon-unchecked');
    const checked = radio.querySelector('.mui-radio-icon-checked');
    expect(unchecked.style.display).toBe('');
    expect(checked.style.display).toBe('none');
    input.checked = true;
    input.dispatchEvent(new Event('change'));
    expect(onChange).toHaveBeenCalledWith(true, 'a');
    expect(unchecked.style.display).toBe('none');
    expect(checked.style.display).toBe('');
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

  it('should expose value property updates', () => {
    const group = (
      <RadioGroup
        {...{
          value: 'a',
          options: [
            { label: 'A', value: 'a' },
            { label: 'B', value: 'b' },
          ],
        }}
      />
    );

    expect((group as any).value).toBe('a');
    (group as any).value = 'b';
    expect((group as any).value).toBe('b');
  });
});
