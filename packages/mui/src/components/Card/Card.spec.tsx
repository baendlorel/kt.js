import { computed, ref } from '@ktjs/core';
import { describe, expect, it } from 'vitest';
import { Card } from './Card.js';

describe('MUI Card component reactivity', () => {
  it('reacts to variant/elevation/square/raised refs', () => {
    const variantSeed = ref<'elevation' | 'outlined'>('elevation');
    const variant = computed(() => variantSeed.value, [variantSeed]);
    const elevation = ref(2);
    const square = ref(false);
    const raised = ref(false);

    const card = Card({
      children: 'Body',
      variant,
      elevation,
      square,
      raised,
    }) as HTMLElement;

    expect(card.className).toContain('mui-card-elevation-2');

    elevation.value = 30;
    square.value = true;
    raised.value = true;

    expect(card.className).toContain('mui-card-elevation-24');
    expect(card.className).toContain('mui-card-square');
    expect(card.className).toContain('mui-card-raised');

    variantSeed.value = 'outlined';
    expect(card.className).not.toContain('mui-card-elevation-24');
    expect(card.className).toContain('mui-card-outlined');
  });

  it('reacts to computed custom class', () => {
    const customSeed = ref<'card-a' | 'card-b'>('card-a');
    const customClass = computed(() => customSeed.value, [customSeed]);

    const card = Card({ children: 'Body', class: customClass }) as HTMLElement;
    expect(card.className).toContain('card-a');

    customSeed.value = 'card-b';
    expect(card.className).toContain('card-b');
  });
});
