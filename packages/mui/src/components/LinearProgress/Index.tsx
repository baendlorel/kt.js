import { $defines } from '@ktjs/shared';
import type { JSX, KTReactive } from '@ktjs/core';
import { computed, ref, toReactive } from '@ktjs/core';
import type { KTMuiProps } from '../../types/component.js';
import './LinearProgress.css';

interface LinearProgressProps extends Pick<KTMuiProps, 'class'> {
  // todo 此处不一样
  style?: string | Partial<CSSStyleDeclaration>;
  variant?: 'determinate' | 'indeterminate';
  value?: number | KTReactive<number>;
  color?: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';
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

  const style = toReactive(props.style ?? '');

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

  return container;
}
