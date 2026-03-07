import { describe, expect, it, vi } from 'vitest';
import { ref } from '@ktjs/core';
import { BottomNavigation } from './BottomNavigation.js';

describe('MUI BottomNavigation component', () => {
  it('should render with default classes and select first option', () => {
    const navigation = (
      <BottomNavigation
        {...{
          options: [
            { value: 'home', label: 'Home' },
            { value: 'search', label: 'Search' },
          ],
        }}
      />
    );

    expect(navigation.className).toContain('mui-bottom-navigation-root');
    expect(navigation.querySelector('.mui-bottom-navigation-action-selected')?.getAttribute('data-value')).toBe('home');
  });

  it('should change selected action and emit on:change', () => {
    const model = ref('home');
    const onChange = vi.fn();
    const options = [
      { value: 'home', label: 'Home' },
      { value: 'favorites', label: 'Favorites' },
    ];

    const navigation = (
      <BottomNavigation
        {...({
          'k-model': model,
          options,
          'on:change': onChange,
        } as any)}
      />
    );

    const action = navigation.querySelector('[data-value="favorites"]') as HTMLButtonElement;
    action.click();

    expect(model.value).toBe('favorites');
    expect(navigation.querySelector('[data-value="favorites"]')?.className).toContain(
      'mui-bottom-navigation-action-selected',
    );
    expect(onChange).toHaveBeenCalledWith('favorites', 'home', 1, options[1]);
  });

  it('should reuse action nodes when selection changes so transitions can run', () => {
    const model = ref('home');
    const navigation = (
      <BottomNavigation
        {...({
          'k-model': model,
          options: [
            { value: 'home', label: 'Home' },
            { value: 'favorites', label: 'Favorites' },
          ],
        } as any)}
      />
    );

    const homeBefore = navigation.querySelector('[data-value="home"]') as HTMLButtonElement;
    const favoritesBefore = navigation.querySelector('[data-value="favorites"]') as HTMLButtonElement;

    model.value = 'favorites';

    const homeAfter = navigation.querySelector('[data-value="home"]') as HTMLButtonElement;
    const favoritesAfter = navigation.querySelector('[data-value="favorites"]') as HTMLButtonElement;

    expect(homeAfter).toBe(homeBefore);
    expect(favoritesAfter).toBe(favoritesBefore);
    expect(homeAfter.className).not.toContain('mui-bottom-navigation-action-selected');
    expect(favoritesAfter.className).toContain('mui-bottom-navigation-action-selected');
  });

  it('should not activate disabled action', () => {
    const model = ref('home');
    const onChange = vi.fn();

    const navigation = (
      <BottomNavigation
        {...({
          'k-model': model,
          options: [
            { value: 'home', label: 'Home' },
            { value: 'blocked', label: 'Blocked', disabled: true },
          ],
          'on:change': onChange,
        } as any)}
      />
    );

    const blocked = navigation.querySelector('[data-value="blocked"]') as HTMLButtonElement;
    expect(blocked.disabled).toBe(true);
    blocked.click();

    expect(model.value).toBe('home');
    expect(onChange).not.toHaveBeenCalled();
  });

  it('should apply showLabels class', () => {
    const navigation = <BottomNavigation {...{ options: [{ value: 'home', label: 'Home' }], showLabels: true }} />;

    expect(navigation.className).toContain('mui-bottom-navigation-show-labels');
  });
});
