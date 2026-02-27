import { describe, it, expect, vi } from 'vitest';
import { ref } from '@ktjs/core';
import { Switch } from './Switch.js';

describe('MUI Switch component', () => {
  it('should render with defaults', () => {
    const sw = Switch({}) as HTMLElement;
    const input = sw.querySelector('input') as HTMLInputElement;
    expect(input.type).toBe('checkbox');
    expect(sw.className).toContain('mui-switch-wrapper');
    expect(sw.className).toContain('mui-switch-size-medium');
    expect(sw.className).toContain('mui-switch-color-primary');
  });

  it('should render label and apply style/class', () => {
    const sw = Switch({
      label: 'Wi-Fi',
      class: 'custom-switch',
      style: { marginLeft: '12px' },
    }) as HTMLElement;
    expect(sw.querySelector('.mui-switch-label')?.textContent).toContain('Wi-Fi');
    expect(sw.className).toContain('custom-switch');
    expect(sw.style.marginLeft).toBe('12px');
  });

  it('should call on:change when toggled', () => {
    const onChange = vi.fn();
    const sw = Switch({ value: 'v1', 'on:change': onChange }) as HTMLElement;
    const input = sw.querySelector('input') as HTMLInputElement;
    input.checked = true;
    input.dispatchEvent(new Event('change'));
    expect(onChange).toHaveBeenCalledWith(true, 'v1');
  });

  it('should apply disabled state and block on:change', () => {
    const onChange = vi.fn();
    const sw = Switch({ disabled: true, 'on:change': onChange }) as HTMLElement;
    const input = sw.querySelector('input') as HTMLInputElement;
    expect(input.disabled).toBe(true);
    expect(sw.className).toContain('mui-switch-disabled');
    input.checked = true;
    input.dispatchEvent(new Event('change'));
    expect(onChange).not.toHaveBeenCalled();
  });

  it('should react to disabled ref changes', () => {
    const disabled = ref(false);
    const sw = Switch({ disabled }) as HTMLElement;
    expect(sw.className).not.toContain('mui-switch-disabled');
    disabled.value = true;
    expect(sw.className).toContain('mui-switch-disabled');
  });
});
