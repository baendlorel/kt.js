import { NavItem } from '../types/router.js';
import { i18n } from '../i18n/index.js';

// # Views
import { MuiAlertDemo } from './mui-alert.js';
import { MuiButtonDemo } from './mui-button.js';
import { MuiCheckboxDemo } from './mui-checkbox.js';
import { MuiDialogDemo } from './mui-dialog.js';
import { MuiIconsDemo } from './mui-icons.js';
import { MuiProgressDemo } from './mui-progress.js';
import { MuiRadioDemo } from './mui-radio.js';
import { MuiSelectDemo } from './mui-select.js';
import { MuiTextFieldRefDemo } from './mui-textfield-ref-demo.js';
import { MuiTextFieldDemo } from './mui-textfield.js';

export const muiNavItems: NavItem[] = [
  {
    id: 'mui-button',
    label: i18n('nav.mui.button.label'),
    title: i18n('nav.mui.button.title'),
    description: i18n('nav.mui.button.description'),
    component: MuiButtonDemo,
  },
  {
    id: 'mui-alert',
    label: i18n('nav.mui.alert.label'),
    title: i18n('nav.mui.alert.title'),
    description: i18n('nav.mui.alert.description'),
    component: MuiAlertDemo,
  },
  {
    id: 'mui-textfield',
    label: i18n('nav.mui.textfield.label'),
    title: i18n('nav.mui.textfield.title'),
    description: i18n('nav.mui.textfield.description'),
    component: MuiTextFieldDemo,
  },
  {
    id: 'mui-textfield-ref',
    label: i18n('nav.mui.textfieldRef.label'),
    title: i18n('nav.mui.textfieldRef.title'),
    description: i18n('nav.mui.textfieldRef.description'),
    component: MuiTextFieldRefDemo,
  },
  {
    id: 'mui-dialog',
    label: i18n('nav.mui.dialog.label'),
    title: i18n('nav.mui.dialog.title'),
    description: i18n('nav.mui.dialog.description'),
    component: MuiDialogDemo,
  },
  {
    id: 'mui-progress',
    label: i18n('nav.mui.progress.label'),
    title: i18n('nav.mui.progress.title'),
    description: i18n('nav.mui.progress.description'),
    component: MuiProgressDemo,
  },
  {
    id: 'mui-radio',
    label: i18n('nav.mui.radio.label'),
    title: i18n('nav.mui.radio.title'),
    description: i18n('nav.mui.radio.description'),
    component: MuiRadioDemo,
  },
  {
    id: 'mui-checkbox',
    label: i18n('nav.mui.checkbox.label'),
    title: i18n('nav.mui.checkbox.title'),
    description: i18n('nav.mui.checkbox.description'),
    component: MuiCheckboxDemo,
  },
  {
    id: 'mui-select',
    label: i18n('nav.mui.select.label'),
    title: i18n('nav.mui.select.title'),
    description: i18n('nav.mui.select.description'),
    component: MuiSelectDemo,
  },
  {
    id: 'mui-icons',
    label: i18n('nav.mui.icons.label'),
    title: i18n('nav.mui.icons.title'),
    description: i18n('nav.mui.icons.description'),
    component: MuiIconsDemo,
  },
];
