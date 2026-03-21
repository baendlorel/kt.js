import { computed, ref } from '@ktjs/core';
import { describe, expect, it, vi } from 'vitest';
import { Switch } from './Switch.js';

describe('MUI Switch component reactivity', () => {
  it('reacts to model/color/size/label refs', () => {
    const model = ref(false);
    const colorSeed = ref<'primary' | 'secondary'>('primary');
    const color = computed(() => colorSeed.value, [colorSeed]);
    const size = ref<'small' | 'large'>('small');
    const label = ref('Wi-Fi');

    const sw = (
      <Switch
        {...({
          'k-model': model,
          color,
          size,
          label,
        } as any)}
      />
    );

    const input = sw.querySelector('input') as HTMLInputElement;
    const track = sw.querySelector('.mui-switch-track');

    expect(input.checked).toBe(false);
    expect(sw.className).toContain('mui-switch-size-small');
    expect(sw.className).toContain('mui-switch-color-primary');

    model.value = true;
    size.value = 'large';
    colorSeed.value = 'secondary';
    label.value = 'Bluetooth';

    expect(input.checked).toBe(true);
    expect(track.className).toContain('mui-switch-track-checked');
    expect(sw.className).toContain('mui-switch-size-large');
    expect(sw.className).toContain('mui-switch-color-secondary');
    expect(sw.querySelector('.mui-switch-label')?.textContent).toContain('Bluetooth');
  });

  it('blocks and restores change callback with disabled ref', () => {
    const disabled = ref(true);
    const onChange = vi.fn();
    const sw = <Switch {...{ disabled, 'on:change': onChange }} />;
    const input = sw.querySelector('input') as HTMLInputElement;

    input.checked = true;
    input.dispatchEvent(new Event('change'));
    expect(onChange).not.toHaveBeenCalled();

    disabled.value = false;
    input.checked = true;
    input.dispatchEvent(new Event('change'));
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
