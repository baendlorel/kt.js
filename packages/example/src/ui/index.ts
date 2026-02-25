import { NavItem } from '../types/router.js';
import { t } from '../i18n/index.js';

// # Views
import { MuiAlertDemo } from './mui-alert.js';
import { MuiBadgeDemo } from './mui-badge.js';
import { MuiButtonDemo } from './mui-button.js';
import { MuiCardDemo } from './mui-card.js';
import { MuiCheckboxDemo } from './mui-checkbox.js';
import { MuiDialogDemo } from './mui-dialog.js';
import { MuiDropdownButtonDemo } from './mui-dropdown-button.js';
import { MuiFormLabelDemo } from './mui-formlabel.js';
import { MuiIconsDemo } from './mui-icons.js';
import { MuiPillDemo } from './mui-pill.js';
import { MuiPopoverDemo } from './mui-popover.js';
import { MuiProgressDemo } from './mui-progress.js';
import { MuiRadioDemo } from './mui-radio.js';
import { MuiSelectDemo } from './mui-select.js';
import { MuiSwitchDemo } from './mui-switch.js';
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
    id: 'mui-dropdown-button',
    label: t('nav.mui.dropdownButton.label'),
    title: t('nav.mui.dropdownButton.title'),
    description: t('nav.mui.dropdownButton.description'),
    component: MuiDropdownButtonDemo,
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
    id: 'mui-switch',
    label: t('nav.mui.switch.label'),
    title: t('nav.mui.switch.title'),
    description: t('nav.mui.switch.description'),
    component: MuiSwitchDemo,
  },
  {
    id: 'mui-select',
    label: t('nav.mui.select.label'),
    title: t('nav.mui.select.title'),
    description: t('nav.mui.select.description'),
    component: MuiSelectDemo,
  },
  {
    id: 'mui-formlabel',
    label: t('nav.mui.formlabel.label'),
    title: t('nav.mui.formlabel.title'),
    description: t('nav.mui.formlabel.description'),
    component: MuiFormLabelDemo,
  },
  {
    id: 'mui-card',
    label: t('nav.mui.card.label'),
    title: t('nav.mui.card.title'),
    description: t('nav.mui.card.description'),
    component: MuiCardDemo,
  },
  {
    id: 'mui-pill',
    label: t('nav.mui.pill.label'),
    title: t('nav.mui.pill.title'),
    description: t('nav.mui.pill.description'),
    component: MuiPillDemo,
  },
  {
    id: 'mui-badge',
    label: t('nav.mui.badge.label'),
    title: t('nav.mui.badge.title'),
    description: t('nav.mui.badge.description'),
    component: MuiBadgeDemo,
  },
  {
    id: 'mui-popover',
    label: t('nav.mui.popover.label'),
    title: t('nav.mui.popover.title'),
    description: t('nav.mui.popover.description'),
    component: MuiPopoverDemo,
  },
  {
    id: 'mui-icons',
    label: t('nav.mui.icons.label'),
    title: t('nav.mui.icons.title'),
    description: t('nav.mui.icons.description'),
    component: MuiIconsDemo,
  },
];
