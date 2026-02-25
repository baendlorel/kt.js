import { describe, it, expect } from 'vitest';
import { DeleteIcon, HomeIcon } from '../src/Icons/index.js';

describe('MUI Icon components', () => {
  it('should render svg icons with path nodes', () => {
    const home = HomeIcon({}) as SVGSVGElement;
    const path = home.querySelector('path');

    expect(home.tagName.toLowerCase()).toBe('svg');
    expect(path).not.toBeNull();
    expect(path?.getAttribute('d')).toBeTruthy();
  });

  it('should apply custom attributes', () => {
    const icon = DeleteIcon({
      class: 'danger-icon',
      width: '2em',
      height: '2em',
      fill: '#f00',
    }) as SVGSVGElement;

    expect(icon.classList.contains('danger-icon')).toBe(true);
    expect(icon.getAttribute('width')).toBe('2em');
    expect(icon.getAttribute('height')).toBe('2em');
    expect(icon.getAttribute('fill')).toBe('#f00');
  });
});
