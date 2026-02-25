import { describe, it, expect, vi } from 'vitest';
import { DropdownButton } from '../src/components/DropdownButton/Index.js';

describe('MUI DropdownButton component', () => {
  it('should render trigger with label and options', () => {
    const dropdown = DropdownButton({
      label: 'Actions',
      options: [
        { label: 'Open', value: 'open' },
        { label: 'Close', value: 'close' },
      ],
    }) as HTMLElement;

    expect(dropdown.className).toContain('mui-dropdown-button-wrapper');
    expect(dropdown.querySelector('.mui-dropdown-button-trigger')?.textContent).toContain('Actions');
    expect(dropdown.querySelectorAll('.mui-dropdown-button-option').length).toBe(2);
    dropdown.remove();
  });

  it('should open and close menu on trigger click', () => {
    const dropdown = DropdownButton({
      label: 'Actions',
      options: [{ label: 'Open', value: 'open' }],
    }) as HTMLElement;
    document.body.appendChild(dropdown);

    const trigger = dropdown.querySelector('.mui-dropdown-button-trigger') as HTMLButtonElement;
    const menu = dropdown.querySelector('.mui-dropdown-button-menu') as HTMLElement;

    trigger.click();
    expect(menu.classList.contains('mui-dropdown-button-menu-open')).toBe(true);
    expect(dropdown.classList.contains('mui-dropdown-button-open')).toBe(true);

    trigger.click();
    expect(menu.classList.contains('mui-dropdown-button-menu-open')).toBe(false);
    expect(dropdown.classList.contains('mui-dropdown-button-open')).toBe(false);

    dropdown.remove();
  });

  it('should emit on:select when selecting an option', () => {
    const onSelect = vi.fn();
    const option = { label: 'Delete', value: 'delete' };
    const dropdown = DropdownButton({
      label: 'Actions',
      options: [option],
      'on:select': onSelect,
    }) as HTMLElement;
    document.body.appendChild(dropdown);

    const trigger = dropdown.querySelector('.mui-dropdown-button-trigger') as HTMLButtonElement;
    trigger.click();

    const menuOption = dropdown.querySelector('.mui-dropdown-button-option[data-value="delete"]') as HTMLButtonElement;
    menuOption.click();

    expect(onSelect).toHaveBeenCalledTimes(1);
    expect(onSelect).toHaveBeenCalledWith('delete', option);
    expect(dropdown.classList.contains('mui-dropdown-button-open')).toBe(false);

    dropdown.remove();
  });

  it('should not open when disabled', () => {
    const dropdown = DropdownButton({
      label: 'Actions',
      disabled: true,
      options: [{ label: 'Open', value: 'open' }],
    }) as HTMLElement;
    document.body.appendChild(dropdown);

    const trigger = dropdown.querySelector('.mui-dropdown-button-trigger') as HTMLButtonElement;
    const menu = dropdown.querySelector('.mui-dropdown-button-menu') as HTMLElement;

    expect(trigger.disabled).toBe(true);
    trigger.click();
    expect(menu.classList.contains('mui-dropdown-button-menu-open')).toBe(false);
    expect(dropdown.classList.contains('mui-dropdown-button-open')).toBe(false);

    dropdown.remove();
  });

  it('should close menu when clicking outside', () => {
    const dropdown = DropdownButton({
      label: 'Actions',
      options: [{ label: 'Open', value: 'open' }],
    }) as HTMLElement;
    document.body.appendChild(dropdown);

    const trigger = dropdown.querySelector('.mui-dropdown-button-trigger') as HTMLButtonElement;
    const menu = dropdown.querySelector('.mui-dropdown-button-menu') as HTMLElement;

    trigger.click();
    expect(menu.classList.contains('mui-dropdown-button-menu-open')).toBe(true);

    document.body.click();
    expect(menu.classList.contains('mui-dropdown-button-menu-open')).toBe(false);

    dropdown.remove();
  });
});
