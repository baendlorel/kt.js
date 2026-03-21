import { computed, ref } from '@ktjs/core';
import '@ktjs/core/jsx';
import { Button, DirectoryPicker, FilePicker } from '@ktjs/mui';
import { Code } from '../components/Code.js';

import muiFilePickerCode from '../code/ui/mui-filepicker.tsx?raw';

export function MuiFilePickerDemo() {
  const filesRef = ref<File[]>([]);
  const directoryFilesRef = ref<File[]>([]);
  const directoryPathRef = ref('');

  const fileSummary = computed(() => {
    const files = filesRef.value;
    if (files.length === 0) {
      return 'No files selected yet.';
    }
    return `${files.length} file(s): ${files.map((file) => file.name).join(', ')}`;
  }, [filesRef]);

  const directorySummary = computed(() => {
    const files = directoryFilesRef.value;
    if (files.length === 0) {
      return 'No directory selected yet.';
    }
    const preview = files
      .slice(0, 3)
      .map((file) => file.webkitRelativePath || file.name)
      .join(', ');
    return `${directoryPathRef.value || 'Selected directory'} · ${files.length} file(s)${preview ? ` · ${preview}` : ''}`;
  }, [directoryFilesRef, directoryPathRef]);

  return (
    <div class="demo-section">
      <h2>FilePicker / DirectoryPicker</h2>
      <p class="description">Pick files or a whole directory with native inputs and KT refs.</p>

      <div class="demo-block">
        <h3>FilePicker</h3>
        <p class="demo-desc">
          Supports multiple files, file type filters, helper text, and <code>k-model</code>.
        </p>
        <FilePicker
          k-model={filesRef}
          label="Project assets"
          placeholder="Choose images or markdown files"
          helperText="Try selecting several files to see the summary update."
          accept=".png,.jpg,.jpeg,.svg,.md"
          fullWidth
        />
        <div class="button-group">
          <Button variant="outlined" on:click={() => (filesRef.value = [])}>
            Clear Files
          </Button>
        </div>
        <div class="demo-result">{fileSummary}</div>
      </div>

      <div class="demo-block">
        <h3>DirectoryPicker</h3>
        <p class="demo-desc">Uses browser directory selection and exposes the top-level folder plus file list.</p>
        <DirectoryPicker
          k-model={directoryFilesRef}
          label="Workspace folder"
          placeholder="Choose a directory"
          helperText="Directory selection depends on browser support for webkitdirectory."
          fullWidth
          on:change={(_files, directoryPath) => (directoryPathRef.value = directoryPath)}
        />
        <div class="button-group">
          <Button
            variant="outlined"
            on:click={() => {
              directoryFilesRef.value = [];
              directoryPathRef.value = '';
            }}
          >
            Clear Directory
          </Button>
        </div>
        <div class="demo-result">{directorySummary}</div>
      </div>

      <Code code={muiFilePickerCode} />
    </div>
  );
}
