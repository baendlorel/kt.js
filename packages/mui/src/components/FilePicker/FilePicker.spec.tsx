import { computed, ref } from '@ktjs/core';
import { describe, expect, it } from 'vitest';
import { FilePicker } from './FilePicker.js';

// Helper to create mock File objects
function createMockFile(name: string, size: number = 1024): File {
  return new File([''], name, { type: 'text/plain' });
}

describe('MUI FilePicker component reactivity', () => {
  it('reacts to label/required/error/helperText refs', () => {
    const label = ref('Upload Files');
    const required = ref(false);
    const error = ref(false);
    const helperText = ref('Select files to upload');

    const filepicker = (
      <FilePicker
        {...{
          label,
          required,
          error,
          helperText,
        }}
      />
    );

    expect(filepicker.querySelector('.mui-filepicker-label')?.textContent).toContain('Upload Files');
    expect(filepicker.querySelector('.mui-filepicker-required')).toBeNull();

    required.value = true;
    error.value = true;
    helperText.value = 'Updated hint';
    label.value = 'Documents';

    expect(filepicker.querySelector('.mui-filepicker-label')?.textContent).toContain('Documents');
    expect(filepicker.querySelector('.mui-filepicker-required')?.textContent).toBe('*');
    expect(filepicker.className).toContain('mui-filepicker-error');
    expect(filepicker.querySelector('.mui-filepicker-helper-text')?.textContent).toBe('Updated hint');
  });

  it('reacts to computed value updates', () => {
    const labelSeed = ref('Files');
    const label = computed(() => labelSeed.value, [labelSeed]);
    const files = ref<File[]>([]);

    const filepicker = (
      <FilePicker
        {...({
          label,
          'k-model': files,
        } as any)}
      />
    );

    expect(filepicker.querySelector('.mui-filepicker-label')?.textContent).toContain('Files');

    // Add files
    files.value = [createMockFile('test.txt'), createMockFile('test2.txt')];
    labelSeed.value = 'Documents';

    expect(filepicker.querySelector('.mui-filepicker-display')?.textContent).toContain('test.txt');
    expect(filepicker.querySelector('.mui-filepicker-label')?.textContent).toContain('Documents');
    expect(filepicker.className).toContain('mui-filepicker-has-value');
  });

  it('reacts to buttonText changes', () => {
    const buttonText = ref('Browse');

    const filepicker = (
      <FilePicker
        {...({
          buttonText,
        } as any)}
      />
    );

    const button = filepicker.querySelector('.mui-filepicker-button');
    expect(button?.textContent).toBe('Browse');

    buttonText.value = 'Choose Files';

    expect(button?.textContent).toBe('Choose Files');
  });

  it('reacts to disabled state', () => {
    const disabled = ref(false);

    const filepicker = (
      <FilePicker
        {...({
          disabled,
        } as any)}
      />
    );

    expect(filepicker.className).not.toContain('mui-filepicker-disabled');

    disabled.value = true;

    expect(filepicker.className).toContain('mui-filepicker-disabled');
    const button = filepicker.querySelector('.mui-filepicker-button') as HTMLButtonElement;
    expect(button.disabled).toBe(true);
  });

  it('reacts to size changes', () => {
    const size = ref<'small' | 'medium'>('medium');

    const filepicker = (
      <FilePicker
        {...({
          size,
        } as any)}
      />
    );

    expect(filepicker.className).toContain('mui-filepicker-size-medium');

    size.value = 'small';

    expect(filepicker.className).toContain('mui-filepicker-size-small');
    expect(filepicker.className).not.toContain('mui-filepicker-size-medium');
  });

  it('reacts to multiple file selection display', () => {
    const showFileCount = ref(true);
    const files = ref<File[]>([]);

    const filepicker = (
      <FilePicker
        {...({
          'k-model': files,
          showFileCount,
        } as any)}
      />
    );

    // Add multiple files
    files.value = [createMockFile('file1.txt'), createMockFile('file2.txt'), createMockFile('file3.txt')];

    const display = filepicker.querySelector('.mui-filepicker-display');
    expect(display?.textContent).toContain('file1.txt');
    expect(display?.textContent).toContain('2 more');
    expect(filepicker.querySelector('.mui-filepicker-file-count')?.textContent).toBe('3');

    // Change showFileCount
    showFileCount.value = false;

    expect(display?.textContent).toContain('file1.txt');
    expect(display?.textContent).toContain('file2.txt');
    expect(display?.textContent).toContain('file3.txt');
  });

  it('reacts to placeholder changes', () => {
    const placeholder = ref('Select files...');

    const filepicker = (
      <FilePicker
        {...({
          placeholder,
        } as any)}
      />
    );

    const display = filepicker.querySelector('.mui-filepicker-display');
    expect(display?.textContent).toContain('Select files...');

    placeholder.value = 'Choose documents';

    expect(display?.textContent).toContain('Choose documents');
  });

  it('reacts to fullWidth changes', () => {
    const fullWidth = ref(false);

    const filepicker = (
      <FilePicker
        {...({
          fullWidth,
        } as any)}
      />
    );

    expect(filepicker.className).not.toContain('mui-filepicker-fullwidth');

    fullWidth.value = true;

    expect(filepicker.className).toContain('mui-filepicker-fullwidth');
  });

  it('reacts to error state with helper text', () => {
    const error = ref(false);
    const helperText = ref('Select at least one file');

    const filepicker = (
      <FilePicker
        {...({
          error,
          helperText,
        } as any)}
      />
    );

    const helperElement = filepicker.querySelector('.mui-filepicker-helper-text');
    expect(helperElement?.textContent).toBe('Select at least one file');
    expect(filepicker.className).not.toContain('mui-filepicker-error');

    error.value = true;

    expect(filepicker.className).toContain('mui-filepicker-error');
  });
});
