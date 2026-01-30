import { KTHTMLElement, ref } from '@ktjs/core';
import './LinearProgress.css';

interface LinearProgressProps {
  class?: string;
  style?: string;
  sx?: Record<string, any>;

  variant?: 'determinate' | 'indeterminate';
  progress?: number;
  color?: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';
}

export type KTMuiLinearProgress = KTHTMLElement & {
  progress: number;
};

/**
 * LinearProgress component - mimics MUI LinearProgress appearance and behavior
 */
export function LinearProgress(props: LinearProgressProps) {
  let { variant = 'indeterminate', progress: value = 0, color = 'primary', sx } = props;

  const classes = [
    'mui-linear-progress',
    `mui-linear-progress-${color}`,
    `mui-linear-progress-${variant}`,
    props.class ? props.class : '',
  ].join(' ');

  // Convert sx object to style string
  let styleString = props.style || '';
  if (sx) {
    const sxStyles = Object.entries(sx)
      .map(([key, value]) => {
        // Convert camelCase to kebab-case
        const cssKey = key.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`);
        return `${cssKey}: ${value}`;
      })
      .join('; ');
    styleString = styleString ? `${styleString}; ${sxStyles}` : sxStyles;
  }

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

  Object.defineProperty(container, 'progress', {
    get() {
      return progressValue;
    },
    set(newValue: number) {
      progressValue = Math.min(Math.max(newValue, 0), 100);
      if (variant === 'determinate') {
        barRef.value.style.width = `${progressValue}%`;
      }
    },
  });

  return container;
}
