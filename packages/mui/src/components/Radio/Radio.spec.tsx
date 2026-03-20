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

    disabled.state = true;
    expect(input.disabled).toBe(true);
  });
});

describe('MUI RadioGroup component reactivity', () => {
  it('reacts to value/row/size refs and computed size', () => {
    const value = ref('a');
    const row = ref(false);
    const sizeSeed = ref<'small' | 'medium'>('small');
    const size = computed(() => sizeSeed.state, [sizeSeed]);

    const group = (
      <RadioGroup
        {...({
          value,
          row,
          size,
          options: [
            { label: 'A', value: 'a' },
            { label: 'B', value: 'b' },
          ],
        } as any)}
      />
    );

    expect(group.className).not.toContain('mui-radio-group-row');
    expect((group as any).value).toBe('a');

    row.state = true;
    sizeSeed.state = 'medium';
    value.state = 'b';

    expect(group.className).toContain('mui-radio-group-row');
    expect((group as any).value).toBe('b');
  });
});
