import { computed, ref } from '@ktjs/core';
import '@ktjs/core/jsx';
import { Button, DirectoryPicker, FilePicker } from '@ktjs/mui';
import { Code } from '../components/Code.js';
import { t } from '../i18n/index.js';

import muiFilePickerCode from '../code/ui/mui-filepicker.tsx?raw';

export function MuiFilePickerDemo() {
  const filesRef = ref<File[]>([]);
  const directoryFilesRef = ref<File[]>([]);
  const directoryPathRef = ref('');

  const fileSummary = computed(() => {
    const files = filesRef.value;
    if (files.length === 0) {
      return t('mui.filepicker.file.empty');
    }
    return t('mui.filepicker.file.summary', files.length, files.map((file) => file.name).join(', '));
  }, [filesRef]);

  const directorySummary = computed(() => {
    const files = directoryFilesRef.value;
    if (files.length === 0) {
      return t('mui.filepicker.directory.empty');
    }
    const preview = files
      .slice(0, 3)
      .map((file) => file.webkitRelativePath || file.name)
      .join(', ');
    return t(
      'mui.filepicker.directory.summary',
      directoryPathRef.value || t('mui.filepicker.directory.selected'),
      files.length,
      preview ? ` · ${preview}` : '',
    );
  }, [directoryFilesRef, directoryPathRef]);

  return (
    <div class="demo-section">
      <div class="demo-block">
        <h3>FilePicker</h3>
        <p class="demo-desc" k-html={t('mui.filepicker.file.description')}></p>
        <FilePicker
          k-model={filesRef}
          label={t('mui.filepicker.file.label')}
          placeholder={t('mui.filepicker.file.placeholder')}
          helperText={t('mui.filepicker.file.helper')}
          buttonText={t('mui.filepicker.file.button')}
          accept=".png,.jpg,.jpeg,.svg,.md"
          fullWidth
        />
        <div class="button-group">
          <Button variant="outlined" on:click={() => (filesRef.value = [])}>
            {t('mui.filepicker.file.clear')}
          </Button>
        </div>
        <div class="demo-result">{fileSummary}</div>
      </div>

      <div class="demo-block">
        <h3>DirectoryPicker</h3>
        <p class="demo-desc">{t('mui.filepicker.directory.description')}</p>
        <DirectoryPicker
          k-model={directoryFilesRef}
          label={t('mui.filepicker.directory.label')}
          placeholder={t('mui.filepicker.directory.placeholder')}
          helperText={t('mui.filepicker.directory.helper')}
          buttonText={t('mui.filepicker.directory.button')}
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
            {t('mui.filepicker.directory.clear')}
          </Button>
        </div>
        <div class="demo-result">{directorySummary}</div>
      </div>

      <Code code={muiFilePickerCode} />
    </div>
  );
}
