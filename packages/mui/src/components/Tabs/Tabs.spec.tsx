import { describe, expect, it, vi } from 'vitest';
import { ref } from '@ktjs/core';
import { Tabs } from './Tabs.js';

describe('MUI Tabs component reactivity', () => {
  it('reacts to model and options refs', () => {
    const overview = { id: 'overview' };
    const analytics = { id: 'analytics' };
    const settings = { id: 'settings' };
    const model = ref(overview);
    const options = ref([
      { value: overview, label: 'Overview' },
      { value: analytics, label: 'Analytics' },
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

    expect(tabs.querySelectorAll('.mui-tab-root')[0]?.className).toContain('mui-tab-selected');

    model.value = analytics;
    expect(tabs.querySelectorAll('.mui-tab-root')[1]?.className).toContain('mui-tab-selected');

    options.value = [{ value: settings, label: 'Settings' }];

    expect(model.value).toBe(settings);
    expect(tabs.querySelectorAll('.mui-tab-root')[0]?.className).toContain('mui-tab-selected');
    expect(onChange).toHaveBeenLastCalledWith(settings, analytics, 0, options.value[0]);
  });

  it('reacts to variant/orientation refs', () => {
    const variant = ref<'standard' | 'scrollable'>('standard');
    const orientation = ref<'horizontal' | 'vertical'>('horizontal');

    const tabs = <Tabs {...{ options: [{ value: 'a', label: 'A' }], variant, orientation }} />;

    expect(tabs.className).toContain('mui-tabs-variant-standard');
    expect(tabs.className).toContain('mui-tabs-orientation-horizontal');

    variant.value = 'scrollable';
    orientation.value = 'vertical';

    expect(tabs.className).toContain('mui-tabs-variant-scrollable');
    expect(tabs.className).toContain('mui-tabs-orientation-vertical');
  });
});
