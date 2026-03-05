import { describe, expect, it, vi } from 'vitest';
import { ref } from '@ktjs/core';
import { Tabs } from './Tabs.js';

describe('MUI Tabs component', () => {
  it('should render tabs and select the first enabled option by default', () => {
    const tabs = (
      <Tabs
        {...{
          options: [
            { value: 'overview', label: 'Overview' },
            { value: 'disabled', label: 'Disabled', disabled: true },
          ],
        }}
      />
    );

    expect(tabs.className).toContain('mui-tabs-root');
    expect(tabs.className).toContain('mui-tabs-variant-standard');

    const selected = tabs.querySelector('.mui-tab-selected') as HTMLButtonElement;
    expect(selected?.dataset.value).toBe('overview');
  });

  it('should update model and emit on:change when clicking a tab', () => {
    const model = ref('overview');
    const onChange = vi.fn();
    const options = [
      { value: 'overview', label: 'Overview' },
      { value: 'analytics', label: 'Analytics' },
    ];

    const tabs = (
      <Tabs
        {...({
          'k-model': model,
          options,
          'on:change': onChange,
        } as any)}
      />
    );

    const target = tabs.querySelector('.mui-tab-root[data-value="analytics"]') as HTMLButtonElement;
    target.click();

    expect(model.value).toBe('analytics');
    expect(tabs.querySelector('.mui-tab-root[data-value="analytics"]')?.className).toContain('mui-tab-selected');
    expect(onChange).toHaveBeenCalledWith('analytics', 'overview', 1, options[1]);
  });

  it('should not switch to disabled tabs', () => {
    const model = ref('overview');
    const onChange = vi.fn();

    const tabs = (
      <Tabs
        {...({
          'k-model': model,
          options: [
            { value: 'overview', label: 'Overview' },
            { value: 'blocked', label: 'Blocked', disabled: true },
          ],
          'on:change': onChange,
        } as any)}
      />
    );

    const disabledTab = tabs.querySelector('.mui-tab-root[data-value="blocked"]') as HTMLButtonElement;
    expect(disabledTab.disabled).toBe(true);
    disabledTab.click();

    expect(model.value).toBe('overview');
    expect(onChange).not.toHaveBeenCalled();
  });

  it('should apply variant and orientation classes', () => {
    const tabs = (
      <Tabs
        {...{
          options: [{ value: 'one', label: 'One' }],
          variant: 'fullWidth',
          orientation: 'vertical',
          centered: true,
        }}
      />
    );

    expect(tabs.className).toContain('mui-tabs-variant-fullWidth');
    expect(tabs.className).toContain('mui-tabs-orientation-vertical');
    expect(tabs.className).toContain('mui-tabs-centered');
  });
});
