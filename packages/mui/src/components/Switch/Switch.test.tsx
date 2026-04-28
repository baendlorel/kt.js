import { describe, it, expect, vi } from 'vitest';
import { ref } from '@ktjs/core';
import { Switch } from './Switch.js';

describe('MUI Switch component', () => {
  it('should render with defaults', () => {
    const sw = <Switch {...{}} />;
    const input = sw.querySelector('input') as HTMLInputElement;
    expect(input.type).toBe('checkbox');
    expect(sw.className).toContain('mui-switch-wrapper');
    expect(sw.className).toContain('mui-switch-size-medium');
    expect(sw.className).toContain('mui-switch-color-primary');
  });

  it('should apply style/class', () => {
    const sw = (
      <Switch
        {...{
          class: 'custom-switch',
          style: { marginLeft: '12px' },
        }}
      />
    ) as HTMLElement;
    expect(sw.className).toContain('custom-switch');
    expect(sw.style.marginLeft).toBe('12px');
  });

  it('should render label', () => {
    const sw = <Switch label="Airplane mode" />;
    expect(sw.querySelector('.mui-switch-label')?.textContent).toBe('Airplane mode');
  });

  it('should call on:change when toggled', () => {
    const onChange = vi.fn();
    const sw = <Switch valueOn="v1" valueOff="v2" on:change={onChange} />;
    const input = sw.querySelector('input') as HTMLInputElement;
    input.checked = true;
    input.dispatchEvent(new Event('change'));
    expect(onChange).toHaveBeenCalledWith('v1', 'v2');
  });

  it('should apply disabled state and block on:change', () => {
    const onChange = vi.fn();
    const sw = <Switch {...{ disabled: true, 'on:change': onChange }} />;
    const input = sw.querySelector('input') as HTMLInputElement;
    expect(input.disabled).toBe(true);
    expect(sw.className).toContain('mui-switch-disabled');
    input.checked = true;
    input.dispatchEvent(new Event('change'));
    expect(onChange).not.toHaveBeenCalled();
  });

  it('should react to disabled ref changes', () => {
    const disabled = ref(false);
    const sw = <Switch {...{ disabled }} />;
    expect(sw.className).not.toContain('mui-switch-disabled');
    disabled.value = true;
    expect(sw.className).toContain('mui-switch-disabled');
  });

  it('should sync checked state with custom valueOn/valueOff', () => {
    const model = ref('off');
    const sw = <Switch {...({ 'k-model': model, valueOn: 'on', valueOff: 'off' } as any)} />;
    const input = sw.querySelector('input') as HTMLInputElement;
    expect(input.checked).toBe(false);
    model.value = 'on';
    expect(input.checked).toBe(true);
    model.value = 'off';
    expect(input.checked).toBe(false);
  });
});
