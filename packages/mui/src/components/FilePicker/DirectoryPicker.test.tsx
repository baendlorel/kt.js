import { describe, it, expect, vi } from 'vitest';
import { DirectoryPicker } from './DirectoryPicker.js';
import { ref } from '@ktjs/core';

describe('MUI DirectoryPicker component', () => {
  it('should render file input with webkitdirectory', () => {
    const dirPicker = <DirectoryPicker {...{}} />;
    const input = dirPicker.querySelector('input[type="file"]');
    expect(input).toBeTruthy();
    expect(input?.hasAttribute('webkitdirectory')).toBe(true);
    expect(dirPicker.className).toContain('mui-filepicker-root');
  });

  it('should apply label', () => {
    const dirPicker = <DirectoryPicker {...{ label: 'Select Directory' }} />;
    const label = dirPicker.querySelector('.mui-filepicker-label');
    expect(label?.textContent).toContain('Select Directory');
  });

  it('should apply placeholder', () => {
    const dirPicker = <DirectoryPicker {...{ placeholder: 'Select directory...' }} />;
    const display = dirPicker.querySelector('.mui-filepicker-display');
    expect(display?.textContent).toContain('Select directory...');
  });

  it('should hide placeholder when label is resting', () => {
    const dirPicker = <DirectoryPicker {...{ label: 'Directory', placeholder: 'Select directory...' }} />;
    const display = dirPicker.querySelector('.mui-filepicker-display') as HTMLSpanElement;
    const input = dirPicker.querySelector('input') as HTMLInputElement;
    expect(display.textContent).toBe('');
    input.dispatchEvent(new Event('focus'));
    expect(display.textContent).toContain('Select directory...');
  });

  it('should handle disabled state', () => {
    const dirPicker = <DirectoryPicker {...{ disabled: true }} />;
    const input = dirPicker.querySelector('input');
    expect(input?.disabled).toBe(true);
    expect(dirPicker.className).toContain('mui-filepicker-disabled');
  });

  it('should handle required state', () => {
    const dirPicker = <DirectoryPicker {...{ required: true, label: 'Directory' }} />;
    const requiredStar = dirPicker.querySelector('.mui-filepicker-required');
    expect(requiredStar?.textContent).toBe('*');
  });

  it('should handle error state', () => {
    const dirPicker = <DirectoryPicker {...{ error: true }} />;
    expect(dirPicker.className).toContain('mui-filepicker-error');
  });

  it('should apply helper text', () => {
    const dirPicker = <DirectoryPicker {...{ helperText: 'Select a directory' }} />;
    const helper = dirPicker.querySelector('.mui-filepicker-helper-text');
    expect(helper?.textContent).toBe('Select a directory');
  });

  it('should apply fullWidth class', () => {
    const dirPicker = <DirectoryPicker {...{ fullWidth: true }} />;
    expect(dirPicker.className).toContain('mui-filepicker-fullwidth');
  });

  it('should apply size classes', () => {
    const small = <DirectoryPicker {...{ size: 'small' }} />;
    expect(small.className).toContain('mui-filepicker-size-small');
    const medium = <DirectoryPicker {...{ size: 'medium' }} />;
    expect(medium.className).toContain('mui-filepicker-size-medium');
  });

  it('should render select button', () => {
    const dirPicker = <DirectoryPicker {...{}} />;
    const button = dirPicker.querySelector('.mui-filepicker-button');
    expect(button).toBeTruthy();
    expect(button?.textContent).toBe('Select');
  });

  it('should apply custom button text', () => {
    const dirPicker = <DirectoryPicker {...{ buttonText: 'Choose' }} />;
    const button = dirPicker.querySelector('.mui-filepicker-button');
    expect(button?.textContent).toBe('Choose');
  });

  it('should have clickable wrapper', () => {
    const dirPicker = <DirectoryPicker {...{}} />;
    const wrapper = dirPicker.querySelector('.mui-filepicker-wrapper');
    expect(wrapper).toBeTruthy();
  });

  it('should apply custom class and style', () => {
    const dirPicker = (
      <DirectoryPicker
        {...{
          class: 'custom-directory-picker',
          style: { margin: '10px' },
        }}
      />
    ) as HTMLElement;
    expect(dirPicker.className).toContain('custom-directory-picker');
    expect(dirPicker.style.margin).toBe('10px');
  });

  it('should handle focus and blur events', () => {
    const onFocus = vi.fn();
    const onBlur = vi.fn();
    const dirPicker = <DirectoryPicker {...{ 'on:focus': onFocus, 'on:blur': onBlur }} />;
    const input = dirPicker.querySelector('input') as HTMLInputElement;
    input.dispatchEvent(new Event('focus'));
    expect(onFocus).toHaveBeenCalled();
    expect(dirPicker.className).toContain('mui-filepicker-focused');
    input.dispatchEvent(new Event('blur'));
    expect(onBlur).toHaveBeenCalled();
    expect(dirPicker.className).not.toContain('mui-filepicker-focused');
  });

  it('should trigger file input on wrapper click', () => {
    const dirPicker = <DirectoryPicker {...{}} />;
    const input = dirPicker.querySelector('input') as HTMLInputElement;
    const clickSpy = vi.spyOn(input, 'click');
    const wrapper = dirPicker.querySelector('.mui-filepicker-wrapper') as HTMLDivElement;
    wrapper.click();
    expect(clickSpy).toHaveBeenCalled();
  });

  it('should not trigger file input when disabled', () => {
    const dirPicker = <DirectoryPicker {...{ disabled: true }} />;
    const input = dirPicker.querySelector('input') as HTMLInputElement;
    const clickSpy = vi.spyOn(input, 'click');
    const wrapper = dirPicker.querySelector('.mui-filepicker-wrapper') as HTMLDivElement;
    wrapper.click();
    expect(clickSpy).not.toHaveBeenCalled();
  });
});
