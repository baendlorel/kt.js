import { NavItem } from '../types/router.js';
import { t } from '../i18n/index.js';

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
// import { MuiTextFieldRefDemo } from './mui-textfield-ref-demo.js';

export const muiNavItems: NavItem[] = [
  {
    id: 'mui-button',
    label: t('nav.mui.button.label'),
    title: t('nav.mui.button.title'),
    description: t('nav.mui.button.description'),
    component: MuiButtonDemo,
  },
  {
    id: 'mui-alert',
    label: t('nav.mui.alert.label'),
    title: t('nav.mui.alert.title'),
    description: t('nav.mui.alert.description'),
    component: MuiAlertDemo,
  },
  {
    id: 'mui-textfield',
    label: t('nav.mui.textfield.label'),
    title: t('nav.mui.textfield.title'),
    description: t('nav.mui.textfield.description'),
    component: MuiTextFieldDemo,
  },
  // {
  //   id: 'mui-textfield-ref',
  //   label: t('nav.mui.textfieldRef.label'),
  //   title: t('nav.mui.textfieldRef.title'),
  //   description: t('nav.mui.textfieldRef.description'),
  //   component: MuiTextFieldRefDemo,
  // },
  {
    id: 'mui-dialog',
    label: t('nav.mui.dialog.label'),
    title: t('nav.mui.dialog.title'),
    description: t('nav.mui.dialog.description'),
    component: MuiDialogDemo,
  },
  {
    id: 'mui-progress',
    label: t('nav.mui.progress.label'),
    title: t('nav.mui.progress.title'),
    description: t('nav.mui.progress.description'),
    component: MuiProgressDemo,
  },
  {
    id: 'mui-radio',
    label: t('nav.mui.radio.label'),
    title: t('nav.mui.radio.title'),
    description: t('nav.mui.radio.description'),
    component: MuiRadioDemo,
  },
  {
    id: 'mui-checkbox',
    label: t('nav.mui.checkbox.label'),
    title: t('nav.mui.checkbox.title'),
    description: t('nav.mui.checkbox.description'),
    component: MuiCheckboxDemo,
  },
  {
    id: 'mui-select',
    label: t('nav.mui.select.label'),
    title: t('nav.mui.select.title'),
    description: t('nav.mui.select.description'),
    component: MuiSelectDemo,
  },
  {
    id: 'mui-icons',
    label: t('nav.mui.icons.label'),
    title: t('nav.mui.icons.title'),
    description: t('nav.mui.icons.description'),
    component: MuiIconsDemo,
  },
];
