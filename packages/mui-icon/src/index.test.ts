import { describe, expect, it } from 'vitest';

describe('@ktjs/mui-icon exports', () => {
  it('should generate all underscore icon elements', async () => {
    const icons = await import('./index.js');
    const underscoreIcons = Object.entries(icons).filter(([name]) => name.startsWith('_'));

    expect(underscoreIcons.length).toBeGreaterThan(0);

    for (const [name, icon] of underscoreIcons) {
      expect(icon, `${name} should be an SVGElement`).toBeInstanceOf(SVGElement);
      expect((icon as SVGElement).tagName.toLowerCase(), `${name} should be svg`).toBe('svg');
    }
  });
});
