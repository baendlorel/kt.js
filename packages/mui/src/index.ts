import '@ktjs/shared';
import './main.css.ts';

// UI Components
export { Alert } from './components/Alert/Alert.js';
export { Button } from './components/Button/Button.js';
export { BottomNavigation } from './components/BottomNavigation/BottomNavigation.js';
export { Checkbox, CheckboxGroup } from './components/Checkbox/CheckboxGroup.js';
export { Dialog } from './components/Dialog/Dialog.js';
export { FormLabel } from './components/FormLabel/FormLabel.js';
export { LinearProgress } from './components/LinearProgress/LinearProgress.js';
export { Menu } from './components/Menu/Menu.js';
export { Modal, modalAlert, modalConfirm, modalPrompt, alert, confirm, prompt } from './components/Modal/Modal.js';
export { TextField } from './components/Input/Input.js';
export { Radio, RadioGroup } from './components/Radio/Radio.js';
export { Select } from './components/Select/Select.js';
export { Card } from './components/Card/Card.js';
export { Switch } from './components/Switch/Switch.js';
export { Pill } from './components/Pill/Pill.js';
export { Badge } from './components/Badge/Badge.js';
export { Popover } from './components/Popover/Popover.js';
export { Tabs } from './components/Tabs/Tabs.js';

export type { KTMuiRadioProps, KTMuiRadio, KTMuiRadioGroup } from './components/Radio/Radio.js';
export type { KTMuiRadioSize, KTMuiRadioColor } from './components/Radio/Radio.js';
export type {
  KTMuiTextField,
  KTMuiTextFieldProps,
  KTMuiTextFieldType,
  KTMuiTextFieldSize,
} from './components/Input/Input.js';
export type {
  KTMuiCheckboxProps,
  KTMuiCheckbox,
  KTMuiCheckboxSize,
  KTMuiCheckboxColor,
} from './components/Checkbox/Checkbox.js';
export type { KTMuiCheckboxGroupProps, KTMuiCheckboxGroup } from './components/Checkbox/CheckboxGroup.js';
export type {
  KTMuiBottomNavigationAction,
  KTMuiBottomNavigationProps,
  KTMuiBottomNavigation,
} from './components/BottomNavigation/BottomNavigation.js';
export type { KTMuiSelectProps, KTMuiSelect, KTMuiSelectOption, KTMuiSelectSize } from './components/Select/Select.js';
export type { KTMuiDialog, KTMuiDialogSize } from './components/Dialog/Dialog.js';
export type {
  KTMuiLinearProgress,
  KTMuiLinearProgressVariant,
  KTMuiLinearProgressColor,
} from './components/LinearProgress/LinearProgress.js';
export type { KTMuiCardProps, KTMuiCard, KTMuiCardVariant } from './components/Card/Card.js';
export type { KTMuiSwitchProps, KTMuiSwitch, KTMuiSwitchColor, KTMuiSwitchSize } from './components/Switch/Switch.js';
export type {
  KTMuiMenuOption,
  KTMuiMenuContent,
  KTMuiMenuProps,
  KTMuiMenu,
  KTMuiMenuCloseReason,
  KTMuiMenuHorizontalOrigin,
  KTMuiMenuVerticalOrigin,
} from './components/Menu/Menu.js';
export type {
  KTMuiModalContent,
  KTMuiAlertOptions,
  KTMuiConfirmOptions,
  KTMuiPromptOptions,
} from './components/Modal/Modal.js';
export type {
  KTMuiPillProps,
  KTMuiPill,
  KTMuiPillColor,
  KTMuiPillVariant,
  KTMuiPillSize,
} from './components/Pill/Pill.js';
export type {
  KTMuiBadgeProps,
  KTMuiBadge,
  KTMuiBadgeAnchorOrigin,
  KTMuiBadgeColor,
  KTMuiBadgeVariant,
  KTMuiBadgeOverlap,
  KTMuiBadgeVerticalOrigin,
  KTMuiBadgeHorizontalOrigin,
  KTMuiBadgeContent,
} from './components/Badge/Badge.js';
export type {
  KTMuiPopoverProps,
  KTMuiPopover,
  KTMuiPopoverOrigin,
  KTMuiPopoverCloseReason,
  KTMuiPopoverVerticalOrigin,
  KTMuiPopoverHorizontalOrigin,
} from './components/Popover/Popover.js';
export type {
  KTMuiTabsProps,
  KTMuiTabs,
  KTMuiTabOption,
  KTMuiTabsVariant,
  KTMuiTabsTextColor,
  KTMuiTabsIndicatorColor,
  KTMuiTabsOrientation,
} from './components/Tabs/Tabs.js';
export type {
  KTMuiButtonVariant,
  KTMuiButtonColor,
  KTMuiButtonSize,
  KTMuiButtonType,
} from './components/Button/Button.js';
export type { KTMuiAlertSeverity, KTMuiAlertVariant } from './components/Alert/Alert.js';
export type { KTMuiFormLabelComponent } from './components/FormLabel/FormLabel.js';
