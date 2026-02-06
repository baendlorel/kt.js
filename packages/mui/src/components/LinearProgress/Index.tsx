import { computed, ref, toReactive } from '@ktjs/core';
import { $defines } from '@ktjs/shared';
import './LinearProgress.css';

interface LinearProgressProps {
  class?: string;
  style?: string | Partial<CSSStyleDeclaration>;

  variant?: 'determinate' | 'indeterminate';
  progress?: number;
  color?: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';
}

export type KTMuiLinearProgress = JSX.Element & {};

export function LinearProgress(props: LinearProgressProps) {
  const valueRef = ref(props.progress ?? 0);
  const customClassRef = toReactive(props.class ?? '');
  const colorRef = toReactive(props.color ?? 'primary');
  const variantRef = toReactive(props.variant ?? 'indeterminate');
  const classRef = computed(() => {
    return `mui-linear-progress mui-linear-progress-${variantRef.value} mui-linear-progress-${colorRef.value} ${customClassRef.value}`;
  }, [customClassRef, colorRef, variantRef]);

  const styleRef = toReactive(props.style ?? '');

  const barLengthRef = computed(() => {
    return variantRef.value === 'determinate' ? `width: ${valueRef.value}%` : '';
  }, [variantRef, valueRef]);

  const container = (
    <div class={classRef} style={styleRef} role="progressbar" aria-valuenow={valueRef}>
      <div class="mui-linear-progress-bar" style={barLengthRef}></div>
    </div>
  ) as KTMuiLinearProgress;

  return container;
}
