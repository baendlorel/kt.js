import { computed, ref } from '@ktjs/core';
import { describe, expect, it } from 'vitest';
import { Radio, RadioGroup } from './Radio.js';

describe('MUI Radio component reactivity', () => {
  it('reacts to disabled ref on native input', () => {
    const disabled = ref(false);
    const radio = (
      <Radio
        {...({
          label: 'Option',
          value: 'a',
          disabled,
        } as any)}
      />
    );

    const input = radio.querySelector('input') as HTMLInputElement;
    expect(input.disabled).toBe(false);

    disabled.value = true;
    expect(input.disabled).toBe(true);
  });
});

describe('MUI RadioGroup component reactivity', () => {
  it('reacts to k-model/row/size refs and computed size', () => {
    const valueA = { id: 'a' };
    const valueB = { id: 'b' };
    const model = ref(valueA);
    const row = ref(false);
    const sizeSeed = ref<'small' | 'medium'>('small');
    const size = computed(() => sizeSeed.value, [sizeSeed]);

    const group = (
      <RadioGroup
        {...({
          'k-model': model,
          row,
          size,
          options: [
            { label: 'A', value: valueA },
            { label: 'B', value: valueB },
          ],
        } as any)}
      />
    );

    expect(group.className).not.toContain('mui-radio-group-row');
    expect((group as any).value).toBe(valueA);

    row.value = true;
    sizeSeed.value = 'medium';
    model.value = valueB;

    expect(group.className).toContain('mui-radio-group-row');
    expect((group as any).value).toBe(valueB);
  });

  it('treats value as init-only when k-model is absent', () => {
    const valueA = { id: 'a' };
    const valueB = { id: 'b' };
    const value = ref(valueA);
    const group = (
      <RadioGroup
        {...({
          value,
          options: [
            { label: 'A', value: valueA },
            { label: 'B', value: valueB },
          ],
        } as any)}
      />
    );

    expect((group as any).value).toBe(valueA);
    value.value = valueB;
    expect((group as any).value).toBe(valueA);
  });
});
