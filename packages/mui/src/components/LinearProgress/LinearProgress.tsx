import { $defines, $parseStyle } from '@ktjs/shared';
import type { JSX, KTMaybeReactive } from '@ktjs/core';
import { computed, toReactive } from '@ktjs/core';
import type { KTMuiProps } from '../../types/component.js';
import './LinearProgress.css';
import { registerPrefixedEvents } from '../../common/attribute.js';

interface LinearProgressProps extends KTMuiProps {
  /**
   * The variant to use.
   * - `determinate` - Use when the progress is a specific value.
   * - `indeterminate` - Use when the progress is unknown.
   * Default is `indeterminate`.
   */
  variant?: KTMaybeReactive<'determinate' | 'indeterminate'>;

  /**
   * The value of the progress indicator for the determinate variant. Value between 0 and 100.
   */
  value?: KTMaybeReactive<number>;

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color?: KTMaybeReactive<'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success'>;
}

export type KTMuiLinearProgress = JSX.Element & {
  value: number;
};

export function LinearProgress(props: LinearProgressProps) {
  const customClassRef = toReactive(props.class ?? '');
  const style = toReactive($parseStyle(props.style));

  const valueRef = toReactive(props.value ?? 0);
  const colorRef = toReactive(props.color ?? 'primary');
  const variantRef = toReactive(props.variant ?? 'indeterminate');
  const className = computed(() => {
    return `mui-linear-progress mui-linear-progress-${variantRef.value} mui-linear-progress-${colorRef.value} ${customClassRef.value}`;
  }, [customClassRef, colorRef, variantRef]);

  const barLength = computed(
    () => (variantRef.value === 'determinate' ? `width: ${valueRef.value}%` : ''),
    [variantRef, valueRef],
  );

  const container = (
    <div class={className} style={style} role="progressbar" aria-valuenow={valueRef}>
      <div class="mui-linear-progress-bar" style={barLength}></div>
    </div>
  ) as KTMuiLinearProgress;

  $defines(container, {
    value: {
      get() {
        return valueRef.value;
      },
      set(v: number) {
        valueRef.value = v;
      },
    },
  });

  registerPrefixedEvents(container, props);
  return container;
}
