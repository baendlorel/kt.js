import { describe, it, expect, vi } from 'vitest';
import { Card } from './Card.js';

describe('MUI Card component', () => {
  it('should render default card classes', () => {
    const card = Card({ children: 'Body' }) as HTMLElement;
    expect(card.className).toContain('mui-card');
    expect(card.className).toContain('mui-card-elevation');
    expect(card.className).toContain('mui-card-elevation-1');
    expect(card.textContent).toContain('Body');
  });

  it('should apply variant, elevation and flags', () => {
    const card = Card({
      variant: 'elevation',
      elevation: 12,
      square: true,
      raised: true,
      children: 'Test',
    }) as HTMLElement;
    expect(card.className).toContain('mui-card-elevation');
    expect(card.className).toContain('mui-card-elevation-12');
    expect(card.className).toContain('mui-card-square');
    expect(card.className).toContain('mui-card-raised');
  });

  it('should apply custom class and style', () => {
    const card = Card({
      children: 'Styled',
      class: 'custom-card',
      style: { marginTop: '8px' },
    }) as HTMLElement;
    expect(card.className).toContain('custom-card');
    expect(card.style.marginTop).toBe('8px');
  });

  it('should emit click event', () => {
    const onClick = vi.fn();
    const card = Card({ children: 'Clickable', 'on:click': onClick }) as HTMLElement;
    card.dispatchEvent(new PointerEvent('click', { bubbles: true }));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
