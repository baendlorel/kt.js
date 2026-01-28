import './LinearProgress.css';

interface LinearProgressProps {
  class?: string;
  style?: string;
  sx?: Record<string, any>;

  variant?: 'determinate' | 'indeterminate';
  progress?: number;
  color?: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';
}

/**
 * LinearProgress component - mimics MUI LinearProgress appearance and behavior
 */
export function LinearProgress(props: LinearProgressProps) {
  const { variant = 'indeterminate', progress: value = 0, color = 'primary', sx } = props;

  const classes = [
    'mui-linear-progress',
    `mui-linear-progress-${color}`,
    `mui-linear-progress-${variant}`,
    props.class ? props.class : '',
  ]
    .filter(Boolean)
    .join(' ');

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
  const progressValue = Math.min(Math.max(value, 0), 100);
  const barStyle = variant === 'determinate' ? `width: ${progressValue}%` : '';

  return (
    <div class={classes} style={styleString} role="progressbar" aria-valuenow={progressValue}>
      <div class="mui-linear-progress-bar" style={barStyle}></div>
    </div>
  );
}
