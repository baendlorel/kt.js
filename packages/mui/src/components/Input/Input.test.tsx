import { describe, it, expect, vi } from 'vitest';
import { TextField } from './Input.js';
import { ref } from '@ktjs/core';

describe('MUI TextField component', () => {
  it('should render text input by default', () => {
    const textfield = <TextField {...{}} />;
    const input = textfield.querySelector('input');
    expect(input).toBeTruthy();
    expect(input?.type).toBe('text');
    expect(textfield.className).toContain('mui-textfield-root');
  });

  it('should render textarea when multiline is true', () => {
    const textfield = <TextField {...{ multiline: true }} />;
    const textarea = textfield.querySelector('textarea');
    expect(textarea).toBeTruthy();
    expect(textarea?.rows).toBe(3);
  });

  it('should apply label', () => {
    const textfield = <TextField {...{ label: 'Username' }} />;
    const label = textfield.querySelector('.mui-textfield-label');
    expect(label?.textContent).toContain('Username');
  });

  it('should apply placeholder', () => {
    const textfield = <TextField {...{ placeholder: 'Enter text' }} />;
    const input = textfield.querySelector('input');
    expect(input?.placeholder).toBe('Enter text');
  });

  it('should handle disabled state', () => {
    const textfield = <TextField {...{ disabled: true }} />;
    const input = textfield.querySelector('input');
    expect(input?.disabled).toBe(true);
    expect(textfield.className).toContain('mui-textfield-disabled');
  });

  it('should handle readOnly state', () => {
    const textfield = <TextField {...{ readOnly: true }} />;
    const input = textfield.querySelector('input');
    expect(input?.readOnly).toBe(true);
  });

  it('should handle required state', () => {
    const textfield = <TextField {...{ required: true, label: 'Field' }} />;
    const requiredStar = textfield.querySelector('.mui-textfield-required');
    expect(requiredStar?.textContent).toBe('*');
    const input = textfield.querySelector('input');
    expect(input?.required).toBe(true);
  });

  it('should not render required mark when there is no label', () => {
    const textfield = <TextField {...{ required: true, placeholder: 'Enter text' }} />;
    const input = textfield.querySelector('input');
    expect(input?.placeholder).toBe('Enter text');
    expect(textfield.className).toContain('mui-textfield-no-label');
    expect(textfield.querySelector('.mui-textfield-required')).toBeFalsy();
  });

  it('should handle error state', () => {
    const textfield = <TextField {...{ error: true }} />;
    expect(textfield.className).toContain('mui-textfield-error');
  });

  it('should apply helper text', () => {
    const textfield = <TextField {...{ helperText: 'Please enter a value' }} />;
    const helper = textfield.querySelector('.mui-textfield-helper-text');
    expect(helper?.textContent).toBe('Please enter a value');
  });

  it('should apply fullWidth class', () => {
    const textfield = <TextField {...{ fullWidth: true }} />;
    expect(textfield.className).toContain('mui-textfield-fullwidth');
  });

  it('should apply size classes', () => {
    const small = <TextField {...{ size: 'small' }} />;
    expect(small.className).toContain('mui-textfield-size-small');
    const medium = <TextField {...{ size: 'medium' }} />;
    expect(medium.className).toContain('mui-textfield-size-medium');
  });

  it('should handle value binding with ref', () => {
    const valueRef = ref('initial');
    const textfield = <TextField {...({ 'k-model': valueRef } as any)} />;
    const input = textfield.querySelector('input') as HTMLInputElement;
    expect(input.value).toBe('initial');
    valueRef.value = 'updated';
    expect(input.value).toBe('updated');
  });

  it('should handle input events', () => {
    const onInput = vi.fn();
    const textfield = <TextField {...{ 'on:input': onInput }} />;
    const input = textfield.querySelector('input') as HTMLInputElement;
    input.value = 'new value';
    input.dispatchEvent(new Event('input'));
    expect(onInput).toHaveBeenCalledWith('new value');
  });

  it('should handle change events', () => {
    const onChange = vi.fn();
    const model = ref('');
    const textfield = <TextField {...({ 'k-model': model, 'on:change': onChange } as any)} />;
    const input = textfield.querySelector('input') as HTMLInputElement;
    input.value = 'changed';
    input.dispatchEvent(new Event('input'));
    input.dispatchEvent(new Event('change'));
    expect(onChange).toHaveBeenCalledWith('changed');
  });

  it('should handle focus and blur events', () => {
    const onFocus = vi.fn();
    const onBlur = vi.fn();
    const textfield = <TextField {...{ 'on:focus': onFocus, 'on:blur': onBlur }} />;
    const input = textfield.querySelector('input') as HTMLInputElement;
    input.dispatchEvent(new Event('focus'));
    expect(onFocus).toHaveBeenCalled();
    expect(textfield.className).toContain('mui-textfield-focused');
    input.dispatchEvent(new Event('blur'));
    expect(onBlur).toHaveBeenCalled();
    expect(textfield.className).not.toContain('mui-textfield-focused');
  });

  it('should apply custom class and style', () => {
    const textfield = (
      <TextField
        {...{
          class: 'custom-textfield',
          style: { margin: '10px' },
        }}
      />
    );
    expect(textfield.className).toContain('custom-textfield');
    expect(textfield.style.margin).toBe('10px');
  });
});
