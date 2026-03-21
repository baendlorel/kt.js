import { describe, it, expect } from 'vitest';
import { ref } from '@ktjs/core';
import { Badge } from './Badge.js';

describe('MUI Badge component', () => {
  it('should render badge content and max overflow', () => {
    const badgeContent = ref(120);
    const badge = (
      <Badge
        {...{
          badgeContent,
          max: 99,
          children: <span>Inbox</span>,
        }}
      />
    );

    const badgeNode = badge.querySelector('.mui-badge-badge');
    expect(badgeNode.textContent).toBe('99+');

    badgeContent.value = 9;
    expect(badgeNode.textContent).toBe('9');
  });

  it('should hide zero badge by default and show when showZero is true', () => {
    const hidden = <Badge {...{ badgeContent: 0, children: <span>Item</span> }} />;
    expect(hidden.querySelector('.mui-badge-badge')?.className).toContain('mui-badge-invisible');

    const shown = <Badge {...{ badgeContent: 0, showZero: true, children: <span>Item</span> }} />;
    expect(shown.querySelector('.mui-badge-badge')?.className).not.toContain('mui-badge-invisible');
  });

  it('should support dot variant and anchor origin classes', () => {
    const badge = (
      <Badge
        {...{
          variant: 'dot',
          overlap: 'circular',
          anchorOrigin: { vertical: 'bottom', horizontal: 'left' },
          children: <span>Avatar</span>,
        }}
      />
    );

    const badgeNode = badge.querySelector('.mui-badge-badge');
    expect(badgeNode.className).toContain('mui-badge-dot');
    expect(badgeNode.className).toContain('mui-badge-overlap-circular');
    expect(badgeNode.className).toContain('mui-badge-anchor-bottom-left');
  });

  it('should apply root class and style', () => {
    const badge = (
      <Badge
        {...{
          badgeContent: 1,
          class: 'custom-badge',
          style: { marginLeft: '12px' },
          children: <span>Node</span>,
        }}
      />
    );

    expect(badge.className).toContain('custom-badge');
    expect(badge.style.marginLeft).toBe('12px');
  });
});
