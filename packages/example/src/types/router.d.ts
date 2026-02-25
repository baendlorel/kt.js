import { JSX } from '@ktjs/core';
import { I18NContent } from '../i18n/index.js';

// Navigation structure
export interface NavItem {
  id: string;
  label: I18NContent;
  title: I18NContent;
  description: I18NContent;
  component: (...args: unknown[]) => JSX.Element;
}
