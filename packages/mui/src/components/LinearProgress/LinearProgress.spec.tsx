import { computed, ref } from '@ktjs/core';
import { describe, expect, it } from 'vitest';
import { LinearProgress } from './LinearProgress.js';

describe('MUI LinearProgress component reactivity', () => {
  it('reacts to variant/value/color refs', () => {
    const variant = ref<'determinate' | 'indeterminate'>('determinate');
    const value = ref(15);
    const color = ref<'primary' | 'success'>('primary');

    const progress = <LinearProgress {...{ variant, value, color }} />;
    const bar = progress.querySelector('.mui-linear-progress-bar');

    expect(progress.className).toContain('mui-linear-progress-determinate');
    expect(bar.style.width).toBe('15%');

    value.value = 70;
    color.value = 'success';

    expect(bar.style.width).toBe('70%');
    expect(progress.className).toContain('mui-linear-progress-success');

    variant.value = 'indeterminate';
    expect(progress.className).toContain('mui-linear-progress-indeterminate');
    expect(bar.style.width).toBe('');
  });

  it('accepts computed numeric value', () => {
    const seed = ref(20);
    const value = computed(() => seed.value, [seed]);

    const progress = <LinearProgress {...{ variant: 'determinate', value }} />;
    const bar = progress.querySelector('.mui-linear-progress-bar');

    expect(bar.style.width).toBe('20%');
    seed.value = 45;
    expect(bar.style.width).toBe('45%');
  });
});
