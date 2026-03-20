import { describe, expect, it, vi } from 'vitest';
import { ref } from '@ktjs/core';
import { BottomNavigation } from './BottomNavigation.js';

describe('MUI BottomNavigation component reactivity', () => {
  it('reacts to model/options refs', () => {
    const model = ref('recents');
    const options = ref([
      { value: 'recents', label: 'Recents' },
      { value: 'favorites', label: 'Favorites' },
    ]);
    const onChange = vi.fn();

    const navigation = (
      <BottomNavigation
        {...({
          'k-model': model,
          options,
          'on:change': onChange,
        } as any)}
      />
    );

    expect(navigation.querySelector('[data-value="recents"]')?.className).toContain(
      'mui-bottom-navigation-action-selected',
    );

    model.state = 'favorites';
    expect(navigation.querySelector('[data-value="favorites"]')?.className).toContain(
      'mui-bottom-navigation-action-selected',
    );

    options.state = [{ value: 'home', label: 'Home' }];

    expect(model.state).toBe('home');
    expect(navigation.querySelector('[data-value="home"]')?.className).toContain(
      'mui-bottom-navigation-action-selected',
    );
    expect(onChange).toHaveBeenLastCalledWith('home', 'favorites', 0, options.state[0]);
  });

  it('reacts to showLabels ref', () => {
    const showLabels = ref(false);
    const navigation = <BottomNavigation {...{ options: [{ value: 'home', label: 'Home' }], showLabels }} />;

    expect(navigation.className).not.toContain('mui-bottom-navigation-show-labels');

    showLabels.state = true;
    expect(navigation.className).toContain('mui-bottom-navigation-show-labels');
  });
});
