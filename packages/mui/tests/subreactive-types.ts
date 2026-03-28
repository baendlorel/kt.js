import { ref } from '@ktjs/core';
import {
  KTMuiTextFieldProps,
  KTMuiFilePickerProps,
  KTMuiTabsProps,
  KTMuiPopoverProps,
  TextField,
  FilePicker,
  Tabs,
  Popover,
} from '@ktjs/mui';

const model = ref({
  name: 'kt',
  files: [] as File[],
  tab: 'a',
  anchor: undefined as HTMLButtonElement | undefined,
});

const ui = ref({
  textSize: 'small' as const,
  fileSize: 'medium' as const,
  open: true,
});

const textFieldProps: KTMuiTextFieldProps = {
  'k-model': model.subref('name'),
  size: ui.get('textSize'),
};

const filePickerProps: KTMuiFilePickerProps = {
  'k-model': model.subref('files'),
  size: ui.get('fileSize'),
};

const tabsProps: KTMuiTabsProps = {
  options: [{ value: 'a', label: 'Tab A' }],
  'k-model': model.subref('tab'),
};

const popoverProps: KTMuiPopoverProps<HTMLButtonElement | undefined> = {
  open: ui.get('open'),
  anchorEl: model.subref('anchor'),
};

TextField(textFieldProps);
FilePicker(filePickerProps);
Tabs(tabsProps);
Popover(popoverProps);
