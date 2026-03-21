import { computed, ref } from '@ktjs/core';
import { describe, expect, it } from 'vitest';
import { Alert } from './Alert.js';

describe('MUI Alert component reactivity', () => {
  it('updates severity and variant classes from refs/computed', () => {
    const severitySeed = ref<'info' | 'error'>('info');
    const severity = computed(() => severitySeed.value, [severitySeed]);
    const variant = ref<'standard' | 'filled'>('standard');

    const alert = (
      <Alert
        {...{
          children: 'Notice',
          severity,
          variant,
        }}
      />
    );

    expect(alert.className).toContain('mui-alert-info');
    expect(alert.className).toContain('mui-alert-standard');

    severitySeed.value = 'error';
    variant.value = 'filled';

    expect(alert.className).toContain('mui-alert-error');
    expect(alert.className).toContain('mui-alert-filled');
  });

  it('reacts to icon visibility ref', () => {
    const icon = ref(true);
    const alert = <Alert {...{ children: 'Notice', icon }} />;

    expect(alert.querySelector('.mui-alert-icon-wrapper svg')).toBeTruthy();

    icon.value = false;
    expect(alert.querySelector('.mui-alert-icon-wrapper svg')).toBeFalsy();
  });
});
