import { describe, it, expect, vi } from 'vitest';
import { Button } from '../src/components/Button/Index.js';

describe('MUI Button component', () => {
  it('should render button with default props', () => {
    const button = Button({ children: 'Click me' }) as HTMLButtonElement;
    expect(button.tagName).toBe('BUTTON');
    expect(button.type).toBe('button');
    expect(button.textContent).toContain('Click me');
    expect(button.className).toContain('mui-button');
    expect(button.className).toContain('mui-button-text');
    expect(button.className).toContain('mui-button-text-primary');
    expect(button.className).toContain('mui-button-size-medium');
    expect(button.disabled).toBe(false);
  });

  it('should apply variant and color classes', () => {
    const contained = Button({ variant: 'contained', color: 'secondary', children: 'Test' }) as HTMLButtonElement;
    expect(contained.className).toContain('mui-button-contained');
    expect(contained.className).toContain('mui-button-contained-secondary');

    const outlined = Button({ variant: 'outlined', color: 'error', children: 'Test' }) as HTMLButtonElement;
    expect(outlined.className).toContain('mui-button-outlined');
    expect(outlined.className).toContain('mui-button-outlined-error');
  });

  it('should apply size classes', () => {
    const small = Button({ size: 'small', children: 'Test' }) as HTMLButtonElement;
    expect(small.className).toContain('mui-button-size-small');
    const large = Button({ size: 'large', children: 'Test' }) as HTMLButtonElement;
    expect(large.className).toContain('mui-button-size-large');
  });

  it('should handle disabled state', () => {
    const disabled = Button({ disabled: true, children: 'Test' }) as HTMLButtonElement;
    expect(disabled.disabled).toBe(true);
    expect(disabled.className).toContain('mui-button-disabled');

    const enabled = Button({ disabled: false, children: 'Test' }) as HTMLButtonElement;
    expect(enabled.disabled).toBe(false);
    expect(enabled.className).not.toContain('mui-button-disabled');
  });

  it('should apply fullWidth class', () => {
    const fullWidth = Button({ fullWidth: true, children: 'Test' }) as HTMLButtonElement;
    expect(fullWidth.className).toContain('mui-button-fullwidth');
  });

  it('should apply iconOnly class', () => {
    const iconOnly = Button({ iconOnly: true, children: 'Test' }) as HTMLButtonElement;
    expect(iconOnly.className).toContain('mui-button-icon-only');
  });

  it('should render startIcon and endIcon', () => {
    const startIcon = document.createElement('span');
    startIcon.textContent = 'S';
    const endIcon = document.createElement('span');
    endIcon.textContent = 'E';
    const button = Button({
      children: 'Button',
      startIcon,
      endIcon,
    }) as HTMLButtonElement;
    expect(button.querySelector('.mui-button-start-icon')).toBeTruthy();
    expect(button.querySelector('.mui-button-end-icon')).toBeTruthy();
    expect(button.querySelector('.mui-button-label')?.textContent).toBe('Button');
  });

  it('should handle click events with ripple effect', () => {
    const onClick = vi.fn();
    const button = Button({ children: 'Click', 'on:click': onClick }) as HTMLButtonElement;
    const rippleContainer = button.querySelector('.mui-button-ripple');
    expect(rippleContainer).toBeTruthy();
    // Simulate click
    button.click();
    expect(onClick).toHaveBeenCalledTimes(1);
    // Should have created a ripple element
    expect(rippleContainer?.children.length).toBeGreaterThan(0);
  });

  it('should prevent click when disabled', () => {
    const onClick = vi.fn();
    const button = Button({ children: 'Click', disabled: true, 'on:click': onClick }) as HTMLButtonElement;
    const event = new MouseEvent('click', { cancelable: true });
    const preventDefaultSpy = vi.spyOn(event, 'preventDefault');
    button.dispatchEvent(event);
    expect(preventDefaultSpy).toHaveBeenCalled();
    expect(onClick).not.toHaveBeenCalled();
  });

  it('should apply custom class and style', () => {
    const button = Button({
      children: 'Test',
      class: 'custom-class',
      style: { color: 'red', fontSize: '16px' },
    }) as HTMLButtonElement;
    expect(button.className).toContain('custom-class');
    expect(button.style.color).toBe('red');
    expect(button.style.fontSize).toBe('16px');
  });
});