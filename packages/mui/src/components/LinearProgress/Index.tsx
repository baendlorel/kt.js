import { $defines, $parseStyle } from '@ktjs/shared';
import type { JSX, KTMaybeReactive } from '@ktjs/core';
import { computed, toReactive } from '@ktjs/core';
import type { KTMuiProps } from '../../types/component.js';
import './LinearProgress.css';
import { registerPrefixedEvents } from '../../common/attribute.js';

interface LinearProgressProps extends KTMuiProps {
  variant?: KTMaybeReactive<'determinate' | 'indeterminate'>;
  value?: KTMaybeReactive<number>;
  color?: KTMaybeReactive<'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success'>;
}

export type KTMuiLinearProgress = JSX.Element & {
  value: number;
};

export function LinearProgress(props: LinearProgressProps) {
  const value = toReactive(props.value ?? 0);
  const customClass = toReactive(props.class ?? '');
  const color = toReactive(props.color ?? 'primary');
  const variant = toReactive(props.variant ?? 'indeterminate');
  const className = computed(() => {
    return `mui-linear-progress mui-linear-progress-${variant.value} mui-linear-progress-${color.value} ${customClass.value}`;
  }, [customClass, color, variant]);

  const style = toReactive($parseStyle(props.style));

  const barLength = computed(() => (variant.value === 'determinate' ? `width: ${value.value}%` : ''), [variant, value]);

  const container = (
    <div class={className} style={style} role="progressbar" aria-valuenow={value}>
      <div class="mui-linear-progress-bar" style={barLength}></div>
    </div>
  ) as KTMuiLinearProgress;

  $defines(container, {
    value: {
      get() {
        return value.value;
      },
      set(v: number) {
        value.value = v;
      },
    },
  });

  registerPrefixedEvents(container, props);
  return container;
}
