import type { JSX } from '@ktjs/core';
import type { I18NContent } from '../i18n/index.js';

// Navigation structure
export interface NavItem {
  id: string;
  label: I18NContent;
  title: I18NContent;
  description: I18NContent;
  component: (...args: unknown[]) => JSX.Element;
  groupId?: string; // for reverse lookup of the parent group
}

export interface NavGroup {
  id: string;
  label: I18NContent;
  items: NavItem[];
}

export type Nav = NavItem | NavGroup;
