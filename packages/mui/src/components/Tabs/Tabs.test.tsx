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
    expect(selected?.textContent).toContain('Overview');
  });

  it('should update model and emit on:change when clicking a tab', () => {
    const overview = { id: 'overview' };
    const analytics = { id: 'analytics' };
    const model = ref(overview);
    const onChange = vi.fn();
    const options = [
      { value: overview, label: 'Overview' },
      { value: analytics, label: 'Analytics' },
    ];

    const tabs = (
      <Tabs
        {...{
          'k-model': model,
          options,
          'on:change': onChange,
        }}
      />
    );

    const target = tabs.querySelectorAll('.mui-tab-root')[1] as HTMLButtonElement;
    target.click();

    expect(model.value).toBe(analytics);
    expect(tabs.querySelectorAll('.mui-tab-root')[1]?.className).toContain('mui-tab-selected');
    expect(onChange).toHaveBeenCalledWith(analytics, overview, 1, options[1]);
  });

  it('should not switch to disabled tabs', () => {
    const model = ref('overview');
    const onChange = vi.fn();

    const tabs = (
      <Tabs
        {...{
          'k-model': model,
          options: [
            { value: 'overview', label: 'Overview' },
            { value: 'blocked', label: 'Blocked', disabled: true },
          ],
          'on:change': onChange,
        }}
      />
    );

    const disabledTab = tabs.querySelectorAll('.mui-tab-root')[1] as HTMLButtonElement;
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

  it('should ignore value prop and use the internal or k-model state instead', () => {
    const tabs = (
      <Tabs
        {...({
          value: 'analytics',
          options: [
            { value: 'overview', label: 'Overview' },
            { value: 'analytics', label: 'Analytics' },
          ],
        } as any)}
      />
    );

    expect(tabs.querySelector('.mui-tab-selected')?.textContent).toContain('Overview');
  });
});
