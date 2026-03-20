import { describe, expect, it, vi } from 'vitest';
import { ref } from '@ktjs/core';
import { Tabs } from './Tabs.js';

describe('MUI Tabs component reactivity', () => {
  it('reacts to model and options refs', () => {
    const model = ref('overview');
    const options = ref([
      { value: 'overview', label: 'Overview' },
      { value: 'analytics', label: 'Analytics' },
    ]);
    const onChange = vi.fn();

    const tabs = (
      <Tabs
        {...{
          'k-model': model,
          options,
          'on:change': onChange,
        }}
      />
    );

    expect(tabs.querySelector('.mui-tab-root[data-value="overview"]')?.className).toContain('mui-tab-selected');

    model.state = 'analytics';
    expect(tabs.querySelector('.mui-tab-root[data-value="analytics"]')?.className).toContain('mui-tab-selected');

    options.state = [{ value: 'settings', label: 'Settings' }];

    expect(model.state).toBe('settings');
    expect(tabs.querySelector('.mui-tab-root[data-value="settings"]')?.className).toContain('mui-tab-selected');
    expect(onChange).toHaveBeenLastCalledWith('settings', 'analytics', 0, options.state[0]);
  });

  it('reacts to variant/orientation refs', () => {
    const variant = ref<'standard' | 'scrollable'>('standard');
    const orientation = ref<'horizontal' | 'vertical'>('horizontal');

    const tabs = <Tabs {...{ options: [{ value: 'a', label: 'A' }], variant, orientation }} />;

    expect(tabs.className).toContain('mui-tabs-variant-standard');
    expect(tabs.className).toContain('mui-tabs-orientation-horizontal');

    variant.state = 'scrollable';
    orientation.state = 'vertical';

    expect(tabs.className).toContain('mui-tabs-variant-scrollable');
    expect(tabs.className).toContain('mui-tabs-orientation-vertical');
  });
});
