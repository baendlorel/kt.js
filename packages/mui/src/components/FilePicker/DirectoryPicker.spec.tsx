import { computed, ref } from '@ktjs/core';
import { describe, expect, it, vi } from 'vitest';
import { DirectoryPicker } from './DirectoryPicker.js';

// Helper to create mock File objects with webkitRelativePath
function createMockFileWithDirectory(name: string, directory: string, size: number = 1024): File {
  const file = new File([''], name, { type: 'text/plain' });
  // Mock webkitRelativePath property
  Object.defineProperty(file, 'webkitRelativePath', {
    value: `${directory}/${name}`,
    writable: false,
  });
  return file;
}

describe('MUI DirectoryPicker component reactivity', () => {
  it('reacts to label/required/error/helperText refs', () => {
    const label = ref('Select Folder');
    const required = ref(false);
    const error = ref(false);
    const helperText = ref('Choose a directory');

    const dirPicker = (
      <DirectoryPicker
        {...{
          label,
          required,
          error,
          helperText,
        }}
      />
    );

    expect(dirPicker.querySelector('.mui-filepicker-label')?.textContent).toContain('Select Folder');
    expect(dirPicker.querySelector('.mui-filepicker-required')).toBeNull();

    required.value = true;
    error.value = true;
    helperText.value = 'Updated hint';
    label.value = 'Directory';

    expect(dirPicker.querySelector('.mui-filepicker-label')?.textContent).toContain('Directory');
    expect(dirPicker.querySelector('.mui-filepicker-required')?.textContent).toBe('*');
    expect(dirPicker.className).toContain('mui-filepicker-error');
    expect(dirPicker.querySelector('.mui-filepicker-helper-text')?.textContent).toBe('Updated hint');
  });

  it('reacts to computed value updates', () => {
    const labelSeed = ref('Folder');
    const label = computed(() => labelSeed.value, [labelSeed]);
    const files = ref<File[]>([]);

    const dirPicker = (
      <DirectoryPicker
        {...({
          label,
          'k-model': files,
        } as any)}
      />
    );

    expect(dirPicker.querySelector('.mui-filepicker-label')?.textContent).toContain('Folder');

    // Add files with directory
    files.value = [
      createMockFileWithDirectory('file1.txt', 'myFolder'),
      createMockFileWithDirectory('file2.txt', 'myFolder'),
    ];
    labelSeed.value = 'Project';

    expect(dirPicker.querySelector('.mui-filepicker-display')?.textContent).toContain('myFolder');
    expect(dirPicker.querySelector('.mui-filepicker-label')?.textContent).toContain('Project');
    expect(dirPicker.className).toContain('mui-filepicker-has-value');
  });

  it('reacts to disabled state', () => {
    const disabled = ref(false);

    const dirPicker = (
      <DirectoryPicker
        {...({
          disabled,
        } as any)}
      />
    );

    expect(dirPicker.className).not.toContain('mui-filepicker-disabled');

    disabled.value = true;

    expect(dirPicker.className).toContain('mui-filepicker-disabled');
    const input = dirPicker.querySelector('input') as HTMLInputElement;
    expect(input.disabled).toBe(true);
  });

  it('reacts to size changes', () => {
    const size = ref<'small' | 'medium'>('medium');

    const dirPicker = (
      <DirectoryPicker
        {...({
          size,
        } as any)}
      />
    );

    expect(dirPicker.className).toContain('mui-filepicker-size-medium');

    size.value = 'small';

    expect(dirPicker.className).toContain('mui-filepicker-size-small');
    expect(dirPicker.className).not.toContain('mui-filepicker-size-medium');
  });

  it('reacts to directory selection display', () => {
    const files = ref<File[]>([]);

    const dirPicker = (
      <DirectoryPicker
        {...({
          'k-model': files,
          label: 'Directory',
        } as any)}
      />
    );

    // Add files from a directory
    files.value = [
      createMockFileWithDirectory('file1.txt', 'myProject'),
      createMockFileWithDirectory('file2.txt', 'myProject'),
      createMockFileWithDirectory('file3.txt', 'myProject'),
    ];

    const display = dirPicker.querySelector('.mui-filepicker-display');
    expect(display?.textContent).toContain('myProject');
    expect(dirPicker.className).toContain('mui-filepicker-has-value');
  });

  it('reacts to placeholder changes', () => {
    const placeholder = ref('Select directory...');

    const dirPicker = (
      <DirectoryPicker
        {...({
          placeholder,
        } as any)}
      />
    );

    const display = dirPicker.querySelector('.mui-filepicker-display');
    expect(display?.textContent).toContain('Select directory...');

    placeholder.value = 'Choose a folder';

    expect(display?.textContent).toContain('Choose a folder');
  });

  it('reacts to buttonText changes', () => {
    const buttonText = ref('Select');

    const dirPicker = (
      <DirectoryPicker
        {...({
          buttonText,
        } as any)}
      />
    );

    const button = dirPicker.querySelector('.mui-filepicker-button');
    expect(button?.textContent).toBe('Select');

    buttonText.value = 'Choose Folder';

    expect(button?.textContent).toBe('Choose Folder');
  });

  it('reacts to fullWidth changes', () => {
    const fullWidth = ref(false);

    const dirPicker = (
      <DirectoryPicker
        {...({
          fullWidth,
        } as any)}
      />
    );

    expect(dirPicker.className).not.toContain('mui-filepicker-fullwidth');

    fullWidth.value = true;

    expect(dirPicker.className).toContain('mui-filepicker-fullwidth');
  });

  it('reacts to error state with helper text', () => {
    const error = ref(false);
    const helperText = ref('Select a directory');

    const dirPicker = (
      <DirectoryPicker
        {...({
          error,
          helperText,
        } as any)}
      />
    );

    const helperElement = dirPicker.querySelector('.mui-filepicker-helper-text');
    expect(helperElement?.textContent).toBe('Select a directory');
    expect(dirPicker.className).not.toContain('mui-filepicker-error');

    error.value = true;

    expect(dirPicker.className).toContain('mui-filepicker-error');
  });

  it('extracts directory path correctly from files', () => {
    const files = ref<File[]>([]);

    const dirPicker = (
      <DirectoryPicker
        {...({
          'k-model': files,
        } as any)}
      />
    );

    // Test with nested directory structure
    files.value = [
      createMockFileWithDirectory('src/index.ts', 'project'),
      createMockFileWithDirectory('src/utils.ts', 'project'),
    ];

    const display = dirPicker.querySelector('.mui-filepicker-display');
    expect(display?.textContent).toContain('project');
  });

  it('has a select button', () => {
    const dirPicker = <DirectoryPicker {...{}} />;

    const button = dirPicker.querySelector('.mui-filepicker-button');
    expect(button?.textContent).toBe('Select');
  });

  it('reacts to readOnly state', () => {
    const readOnly = ref(false);

    const dirPicker = (
      <DirectoryPicker
        {...({
          readOnly,
        } as any)}
      />
    );

    readOnly.value = true;

    // When readOnly, clicking should not trigger file input
    const input = dirPicker.querySelector('input') as HTMLInputElement;
    const clickSpy = vi.spyOn(input, 'click');
    const wrapper = dirPicker.querySelector('.mui-filepicker-wrapper') as HTMLDivElement;
    wrapper.click();
    expect(clickSpy).not.toHaveBeenCalled();
  });
});
