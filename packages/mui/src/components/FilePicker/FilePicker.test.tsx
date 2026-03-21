import { describe, it, expect, vi } from 'vitest';
import { FilePicker } from './FilePicker.js';

describe('MUI FilePicker component', () => {
  it('should render file input', () => {
    const filepicker = <FilePicker />;
    const input = filepicker.querySelector('input[type="file"]');
    expect(input).toBeTruthy();
    expect(filepicker.className).toContain('mui-filepicker-root');
  });

  it('should apply label', () => {
    const filepicker = <FilePicker {...{ label: 'Select Files' }} />;
    const label = filepicker.querySelector('.mui-filepicker-label');
    expect(label?.textContent).toContain('Select Files');
  });

  it('should apply placeholder', () => {
    const filepicker = <FilePicker {...{ placeholder: 'Choose files...' }} />;
    const display = filepicker.querySelector('.mui-filepicker-display');
    expect(display?.textContent).toContain('Choose files...');
  });

  it('should handle disabled state', () => {
    const filepicker = <FilePicker {...{ disabled: true }} />;
    const input = filepicker.querySelector('input');
    expect(input?.disabled).toBe(true);
    expect(filepicker.className).toContain('mui-filepicker-disabled');
  });

  it('should handle required state', () => {
    const filepicker = <FilePicker {...{ required: true, label: 'Files' }} />;
    const requiredStar = filepicker.querySelector('.mui-filepicker-required');
    expect(requiredStar?.textContent).toBe('*');
  });

  it('should handle error state', () => {
    const filepicker = <FilePicker {...{ error: true }} />;
    expect(filepicker.className).toContain('mui-filepicker-error');
  });

  it('should apply helper text', () => {
    const filepicker = <FilePicker {...{ helperText: 'Select one or more files' }} />;
    const helper = filepicker.querySelector('.mui-filepicker-helper-text');
    expect(helper?.textContent).toBe('Select one or more files');
  });

  it('should apply fullWidth class', () => {
    const filepicker = <FilePicker {...{ fullWidth: true }} />;
    expect(filepicker.className).toContain('mui-filepicker-fullwidth');
  });

  it('should apply size classes', () => {
    const small = <FilePicker {...{ size: 'small' }} />;
    expect(small.className).toContain('mui-filepicker-size-small');
    const medium = <FilePicker {...{ size: 'medium' }} />;
    expect(medium.className).toContain('mui-filepicker-size-medium');
  });

  it('should render browse button', () => {
    const filepicker = <FilePicker {...{}} />;
    const button = filepicker.querySelector('.mui-filepicker-button');
    expect(button).toBeTruthy();
    expect(button?.textContent).toBe('Browse');
  });

  it('should apply custom button text', () => {
    const filepicker = <FilePicker {...{ buttonText: 'Choose' }} />;
    const button = filepicker.querySelector('.mui-filepicker-button');
    expect(button?.textContent).toBe('Choose');
  });

  it('should handle accept attribute', () => {
    const filepicker = <FilePicker {...{ accept: '.jpg,.png' }} />;
    const input = filepicker.querySelector('input');
    expect(input?.accept).toBe('.jpg,.png');
  });

  it('should handle multiple attribute', () => {
    const multiple = <FilePicker {...{ multiple: true }} />;
    const input1 = multiple.querySelector('input');
    expect(input1?.multiple).toBe(true);

    const single = <FilePicker {...{ multiple: false }} />;
    const input2 = single.querySelector('input');
    expect(input2?.multiple).toBe(false);
  });

  it('should apply custom class and style', () => {
    const filepicker = (
      <FilePicker
        {...{
          class: 'custom-filepicker',
          style: { margin: '10px' },
        }}
      />
    ) as HTMLElement;
    expect(filepicker.className).toContain('custom-filepicker');
    expect(filepicker.style.margin).toBe('10px');
  });

  it('should handle focus and blur events', () => {
    const onFocus = vi.fn();
    const onBlur = vi.fn();
    const filepicker = <FilePicker {...{ 'on:focus': onFocus, 'on:blur': onBlur }} />;
    const input = filepicker.querySelector('input') as HTMLInputElement;
    input.dispatchEvent(new Event('focus'));
    expect(onFocus).toHaveBeenCalled();
    expect(filepicker.className).toContain('mui-filepicker-focused');
    input.dispatchEvent(new Event('blur'));
    expect(onBlur).toHaveBeenCalled();
    expect(filepicker.className).not.toContain('mui-filepicker-focused');
  });
});
