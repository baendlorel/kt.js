import { describe, it, expect } from 'vitest';
import { FormLabel } from './FormLabel.js';

describe('MUI FormLabel component', () => {
  it('should render label by default', () => {
    const label = FormLabel({ children: 'Name' }) as HTMLElement;
    expect(label.tagName).toBe('LABEL');
    expect(label.textContent).toContain('Name');
    expect(label.className).toContain('mui-form-label');
  });

  it('should render legend when component is legend', () => {
    const label = FormLabel({ children: 'Legend', component: 'legend' }) as HTMLElement;
    expect(label.tagName).toBe('LEGEND');
  });

  it('should apply states and required marker', () => {
    const label = FormLabel({
      children: 'Email',
      required: true,
      error: true,
      disabled: true,
      focused: true,
      filled: true,
      htmlFor: 'email',
    }) as HTMLElement;
    expect(label.className).toContain('mui-form-label-error');
    expect(label.className).toContain('mui-form-label-disabled');
    expect(label.className).toContain('mui-form-label-focused');
    expect(label.className).toContain('mui-form-label-filled');
    expect(label.getAttribute('for')).toBe('email');
    const asterisk = label.querySelector('.mui-form-label-asterisk');
    expect(asterisk?.textContent).toContain('*');
  });
});
