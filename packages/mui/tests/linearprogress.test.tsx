import { describe, it, expect } from 'vitest';
import { LinearProgress } from '../src/components/LinearProgress/Index.js';

describe('MUI LinearProgress component', () => {
  it('should render with default props', () => {
    const progress = LinearProgress({}) as HTMLElement;
    expect(progress.getAttribute('role')).toBe('progressbar');
    expect(progress.className).toContain('mui-linear-progress');
    expect(progress.className).toContain('mui-linear-progress-indeterminate');
  });

  it('should apply determinate width and color', () => {
    const progress = LinearProgress({ variant: 'determinate', value: 40, color: 'error' }) as HTMLElement;
    const bar = progress.querySelector('.mui-linear-progress-bar') as HTMLElement;
    expect(progress.className).toContain('mui-linear-progress-determinate');
    expect(progress.className).toContain('mui-linear-progress-error');
    expect(bar.style.width).toBe('40%');
  });

  it('should apply custom class and style', () => {
    const progress = LinearProgress({ class: 'custom', style: { marginTop: '8px' } }) as HTMLElement;
    expect(progress.className).toContain('custom');
    expect(progress.style.marginTop).toBe('8px');
  });

  it('should update width when progress property changes', () => {
    const progress = LinearProgress({ variant: 'determinate', value: 10 });
    const bar = progress.querySelector('.mui-linear-progress-bar') as HTMLElement;

    expect(bar.style.width).toBe('10%');
    progress.value = 65;
    expect(bar.style.width).toBe('65%');
  });
});
