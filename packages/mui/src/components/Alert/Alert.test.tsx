import { describe, it, expect, vi } from 'vitest';
import { Alert } from './Alert.js';

describe('MUI Alert component', () => {
  it('should render alert with default props', () => {
    const alert = Alert({ children: 'Message' }) as HTMLElement;
    expect(alert.tagName).toBe('DIV');
    expect(alert.getAttribute('role')).toBe('alert');
    expect(alert.className).toContain('mui-alert');
    expect(alert.className).toContain('mui-alert-info');
    expect(alert.className).toContain('mui-alert-standard');
    expect(alert.querySelector('.mui-alert-message')?.textContent).toBe('Message');
    expect(alert.querySelector('.mui-alert-icon-wrapper')).toBeTruthy();
    expect(alert.querySelector('.mui-alert-close')).toBeTruthy();
  });

  it('should apply severity classes', () => {
    const error = Alert({ severity: 'error', children: 'Error' }) as HTMLElement;
    expect(error.className).toContain('mui-alert-error');
    const warning = Alert({ severity: 'warning', children: 'Warning' }) as HTMLElement;
    expect(warning.className).toContain('mui-alert-warning');
    const success = Alert({ severity: 'success', children: 'Success' }) as HTMLElement;
    expect(success.className).toContain('mui-alert-success');
    const info = Alert({ severity: 'info', children: 'Info' }) as HTMLElement;
    expect(info.className).toContain('mui-alert-info');
  });

  it('should apply variant classes', () => {
    const filled = Alert({ variant: 'filled', children: 'Test' }) as HTMLElement;
    expect(filled.className).toContain('mui-alert-filled');
    const outlined = Alert({ variant: 'outlined', children: 'Test' }) as HTMLElement;
    expect(outlined.className).toContain('mui-alert-outlined');
    const standard = Alert({ variant: 'standard', children: 'Test' }) as HTMLElement;
    expect(standard.className).toContain('mui-alert-standard');
  });

  it('should hide icon when icon is false', () => {
    const alert = Alert({ children: 'Test', icon: false }) as HTMLElement;
    expect(alert.querySelector('.mui-alert-icon-wrapper svg')).toBeFalsy();
  });

  it('should use custom icon element', () => {
    const customIcon = document.createElement('span');
    customIcon.textContent = '!';
    const alert = Alert({ children: 'Test', icon: customIcon }) as HTMLElement;
    const iconWrapper = alert.querySelector('.mui-alert-icon-wrapper');
    expect(iconWrapper).toBeTruthy();
  });

  it('should render close button when on:close provided', () => {
    const onClose = vi.fn();
    const alert = Alert({ children: 'Test', 'on:close': onClose }) as HTMLElement;
    const closeButton = alert.querySelector('.mui-alert-close');
    expect(closeButton).toBeTruthy();
    expect(closeButton?.getAttribute('aria-label')).toBe('Close');
  });

  it('should call on:close when close button clicked', () => {
    const onClose = vi.fn();
    const alert = Alert({ children: 'Test', 'on:close': onClose }) as HTMLElement;
    const closeButton = alert.querySelector('.mui-alert-close') as HTMLButtonElement;
    closeButton.click();
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('should apply custom class and style', () => {
    const alert = Alert({
      children: 'Test',
      class: 'custom-alert',
      style: { backgroundColor: 'red', padding: '10px' },
    }) as HTMLElement;
    expect(alert.className).toContain('custom-alert');
    expect(alert.style.backgroundColor).toBe('red');
    expect(alert.style.padding).toBe('10px');
  });
});
