import { ref } from '@ktjs/core';
import { $defines, parseStyle } from '@ktjs/shared';
import './LinearProgress.css';

interface LinearProgressProps {
  class?: string;
  style?: string | Partial<CSSStyleDeclaration>;

  variant?: 'determinate' | 'indeterminate';
  progress?: number;
  color?: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';
}

export type KTMuiLinearProgress = JSX.Element & {
  /**
   * Reactive property to get or set the current progress value (0-100)
   */
  progress: number;
};

/**
 * LinearProgress component - mimics MUI LinearProgress appearance and behavior
 */
export function LinearProgress(props: LinearProgressProps) {
  let { variant = 'indeterminate', progress: value = 0, color = 'primary' } = props;

  const classes = [
    'mui-linear-progress',
    `mui-linear-progress-${color}`,
    `mui-linear-progress-${variant}`,
    props.class ? props.class : '',
  ].join(' ');

  const styleString = parseStyle(props.style);

  // Calculate progress percentage
  let progressValue = Math.min(Math.max(value, 0), 100);
  const barRef = ref();

  const container = (
    <div class={classes} style={styleString} role="progressbar" aria-valuenow={progressValue}>
      <div
        ref={barRef}
        class="mui-linear-progress-bar"
        style={variant === 'determinate' ? `width: ${progressValue}%` : ''}
      ></div>
    </div>
  ) as KTMuiLinearProgress;

  $defines(container, {
    progress: {
      get() {
        return progressValue;
      },
      set(newValue: number) {
        progressValue = Math.min(Math.max(newValue, 0), 100);
        if (variant === 'determinate') {
          barRef.value.style.width = `${progressValue}%`;
        }
      },
    },
  });

  return container;
}
