import { ref } from '@ktjs/core';
import { DirectoryPicker, FilePicker } from '@ktjs/mui';

export function FilePickerExample() {
  const filesRef = ref<File[]>([]);
  const directoryFilesRef = ref<File[]>([]);
  const directoryPathRef = ref('');

  return (
    <>
      <FilePicker k-model={filesRef} label="Project assets" fullWidth />
      <DirectoryPicker
        k-model={directoryFilesRef}
        label="Workspace folder"
        fullWidth
        on:change={(_files, directoryPath) => (directoryPathRef.value = directoryPath)}
      />
    </>
  );
}
