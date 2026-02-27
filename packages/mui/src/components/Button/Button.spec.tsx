import { computed, ref } from '@ktjs/core';
import { describe, expect, it, vi } from 'vitest';
import { Button } from './Button.js';

describe('MUI Button component reactivity', () => {
  it('reacts to variant/color/size/fullWidth refs', () => {
    const variantSeed = ref<'text' | 'outlined'>('text');
    const variant = computed(() => variantSeed.value, [variantSeed]);
    const color = ref<'primary' | 'secondary'>('primary');
    const size = ref<'small' | 'large'>('small');
    const fullWidth = ref(false);

    const button = (
      <Button
        {...{
          children: 'Action',
          variant,
          color,
          size,
          fullWidth,
        }}
      />
    );

    expect(button.className).toContain('mui-button-text');
    expect(button.className).toContain('mui-button-text-primary');
    expect(button.className).toContain('mui-button-size-small');

    variantSeed.value = 'outlined';
    color.value = 'secondary';
    size.value = 'large';
    fullWidth.value = true;

    expect(button.className).toContain('mui-button-outlined');
    expect(button.className).toContain('mui-button-outlined-secondary');
    expect(button.className).toContain('mui-button-size-large');
    expect(button.className).toContain('mui-button-fullwidth');
  });

  it('blocks and restores click handling when disabled ref changes', () => {
    const onClick = vi.fn();
    const disabled = ref(true);

    const button = (
      <Button
        {...{
          children: 'Click',
          disabled,
          'on:click': onClick,
        }}
      />
    ) as HTMLButtonElement;

    button.click();
    expect(onClick).not.toHaveBeenCalled();

    disabled.value = false;
    button.click();
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
