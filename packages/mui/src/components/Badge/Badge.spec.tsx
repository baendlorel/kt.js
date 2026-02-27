import { computed, ref } from '@ktjs/core';
import { describe, expect, it } from 'vitest';
import { Badge } from './Badge.js';

describe('MUI Badge component reactivity', () => {
  it('reacts to content/max/showZero refs', () => {
    const badgeContent = ref(0);
    const max = ref(9);
    const showZero = ref(false);

    const badge = Badge({
      badgeContent,
      max,
      showZero,
      children: <span>Inbox</span>,
    }) as HTMLElement;

    const badgeNode = badge.querySelector('.mui-badge-badge') as HTMLElement;
    expect(badgeNode.className).toContain('mui-badge-invisible');

    showZero.value = true;
    expect(badgeNode.className).not.toContain('mui-badge-invisible');
    expect(badgeNode.textContent).toBe('0');

    badgeContent.value = 18;
    expect(badgeNode.textContent).toBe('9+');

    max.value = 99;
    expect(badgeNode.textContent).toBe('18');
  });

  it('reacts to computed overlap/color and anchor origin refs', () => {
    const overlapSeed = ref<'rectangular' | 'circular'>('rectangular');
    const overlap = computed(() => overlapSeed.value, [overlapSeed]);
    const color = ref<'default' | 'success'>('default');
    const anchorOrigin = ref({ vertical: 'top', horizontal: 'right' } as const);

    const badge = Badge({
      badgeContent: 1,
      overlap,
      color,
      anchorOrigin,
      children: <span>Avatar</span>,
    }) as HTMLElement;

    const badgeNode = badge.querySelector('.mui-badge-badge') as HTMLElement;
    expect(badgeNode.className).toContain('mui-badge-overlap-rectangular');
    expect(badgeNode.className).toContain('mui-badge-anchor-top-right');

    overlapSeed.value = 'circular';
    color.value = 'success';
    anchorOrigin.value = { vertical: 'bottom', horizontal: 'left' };

    expect(badgeNode.className).toContain('mui-badge-overlap-circular');
    expect(badgeNode.className).toContain('mui-badge-color-success');
    expect(badgeNode.className).toContain('mui-badge-anchor-bottom-left');
  });
});
