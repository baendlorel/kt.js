import { NavItem } from '../types/router.js';

// # Views
import { MuiAlertDemo } from './mui-alert.js';
import { MuiButtonDemo } from './mui-button.js';
import { MuiCheckboxDemo } from './mui-checkbox.js';
import { MuiDialogDemo } from './mui-dialog.js';
import { MuiIconsDemo } from './mui-icons.js';
import { MuiProgressDemo } from './mui-progress.js';
import { MuiRadioDemo } from './mui-radio.js';
import { MuiSelectDemo } from './mui-select.js';
import { MuiTextFieldDemo } from './mui-textfield.js';

export const muiNavItems: NavItem[] = [
  {
    id: 'mui-button',
    label: 'Button',
    title: 'MUI Button',
    description: 'Material-UI Button component',
    component: MuiButtonDemo,
  },
  {
    id: 'mui-alert',
    label: 'Alert',
    title: 'MUI Alert',
    description: 'Material-UI Alert component',
    component: MuiAlertDemo,
  },
  {
    id: 'mui-textfield',
    label: 'TextField',
    title: 'MUI TextField',
    description: 'Material-UI TextField component',
    component: MuiTextFieldDemo,
  },
  {
    id: 'mui-textfield-ref',
    label: 'TextField (Reactive Refs)',
    title: 'MUI TextField with Reactive Refs',
    description: 'Demonstrates all TextField properties controlled via KTRefs',
    component: MuiTextFieldDemo,
  },
  {
    id: 'mui-dialog',
    label: 'Dialog',
    title: 'MUI Dialog',
    description: 'Material-UI Dialog component',
    component: MuiDialogDemo,
  },
  {
    id: 'mui-progress',
    label: 'Progress',
    title: 'MUI LinearProgress',
    description: 'Material-UI Progress indicator',
    component: MuiProgressDemo,
  },
  {
    id: 'mui-radio',
    label: 'Radio',
    title: 'MUI Radio',
    description: 'Material-UI Radio component',
    component: MuiRadioDemo,
  },
  {
    id: 'mui-checkbox',
    label: 'Checkbox',
    title: 'MUI Checkbox',
    description: 'Material-UI Checkbox component',
    component: MuiCheckboxDemo,
  },
  {
    id: 'mui-select',
    label: 'Select',
    title: 'MUI Select',
    description: 'Material-UI Select component',
    component: MuiSelectDemo,
  },
  {
    id: 'mui-icons',
    label: 'Icons',
    title: 'MUI Icons',
    description: 'Material-UI Icons',
    component: MuiIconsDemo,
  },
];
