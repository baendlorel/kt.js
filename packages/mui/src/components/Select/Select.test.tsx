import { describe, it, expect, vi } from 'vitest';
import { Select } from './Select.js';

describe('MUI Select component', () => {
  it('should render placeholder and label', () => {
    const select = Select({
      label: 'Status',
      placeholder: 'Pick one',
      options: [
        { label: 'Open', value: 'open' },
        { label: 'Closed', value: 'closed' },
      ],
    }) as HTMLElement;
    expect(select.querySelector('.mui-select-label')?.textContent).toContain('Status');
    expect(select.querySelector('.mui-select-placeholder')?.textContent).toBe('Pick one');
  });

  it('should open and close menu on control click', () => {
    vi.useFakeTimers();
    const select = Select({
      options: [
        { label: 'Open', value: 'open' },
        { label: 'Closed', value: 'closed' },
      ],
    }) as HTMLElement;
    document.body.appendChild(select);
    const control = select.querySelector('.mui-select-control') as HTMLElement;
    const menu = select.querySelector('.mui-select-menu') as HTMLElement;
    control.click();
    expect(menu.style.display).toBe('block');
    expect(menu.classList.contains('mui-select-menu-open')).toBe(true);
    expect(select.classList.contains('mui-select-open')).toBe(true);
    control.click();
    vi.advanceTimersByTime(250);
    expect(menu.classList.contains('mui-select-menu-open')).toBe(false);
    expect(menu.style.display).toBe('none');
    select.remove();
    vi.useRealTimers();
  });

  it('should select option and call on:change', () => {
    vi.useFakeTimers();
    const onChange = vi.fn();
    const select = Select({
      options: [
        { label: 'Open', value: 'open' },
        { label: 'Closed', value: 'closed' },
      ],
      'on:change': onChange,
    }) as HTMLElement;
    document.body.appendChild(select);
    const control = select.querySelector('.mui-select-control') as HTMLElement;
    control.click();
    const option = select.querySelector('.mui-select-option[data-value="closed"]') as HTMLElement;
    option.click();
    vi.advanceTimersByTime(250);
    expect(onChange).toHaveBeenCalledWith('closed');
    const hiddenInput = select.querySelector('input[type="hidden"]') as HTMLInputElement;
    expect(hiddenInput.value).toBe('closed');
    select.remove();
    vi.useRealTimers();
  });

  it('should not open when disabled', () => {
    const select = Select({
      disabled: true,
      options: [
        { label: 'Open', value: 'open' },
        { label: 'Closed', value: 'closed' },
      ],
    }) as HTMLElement;
    const control = select.querySelector('.mui-select-control') as HTMLElement;
    const menu = select.querySelector('.mui-select-menu') as HTMLElement;
    expect(control.tabIndex).toBe(-1);
    control.click();
    expect(menu.classList.contains('mui-select-menu-open')).toBe(false);
  });

  it('should apply size and fullWidth classes', () => {
    const select = Select({
      size: 'small',
      fullWidth: true,
      options: [{ label: 'Open', value: 'open' }],
    }) as HTMLElement;
    expect(select.className).toContain('mui-select-size-small');
    expect(select.className).toContain('mui-select-fullWidth');
  });
});
