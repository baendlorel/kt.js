import { NavItem } from '../types/router.js';
import { i18n } from '../i18n/index.js';
import { ChangeLog } from './Changelog.js';
import { Directives } from './Directive.js';
import { Events } from './Events.js';
import { FragmentDemo } from './Fragment.js';
import { Home } from './Home.js';
import { IE11Compatibility } from './IE11Compatibility.js';
import { OtherElements } from './OtherElements.js';
import { Reactivity } from './Reactive.js';

export const basicNavItems: NavItem[] = [
  {
    id: 'home',
    label: i18n('nav.home.label'),
    title: i18n('nav.home.title'),
    description: i18n('nav.home.description'),
    component: Home,
  },
  {
    id: 'ie11-compatibility',
    label: i18n('nav.ie11.label'),
    title: i18n('nav.ie11.title'),
    description: i18n('nav.ie11.description'),
    component: IE11Compatibility,
  },
  {
    id: 'changelog',
    label: i18n('nav.changelog.label'),
    title: i18n('nav.changelog.title'),
    description: i18n('nav.changelog.description'),
    component: ChangeLog,
  },
  {
    id: 'reactive',
    label: i18n('nav.reactive.label'),
    title: i18n('nav.reactive.title'),
    description: i18n('nav.reactive.description'),
    component: Reactivity,
  },
  {
    id: 'directives',
    label: i18n('nav.directives.label'),
    title: i18n('nav.directives.title'),
    description: i18n('nav.directives.description'),
    component: Directives,
  },
  {
    id: 'fragment',
    label: i18n('nav.fragment.label'),
    title: i18n('nav.fragment.title'),
    description: i18n('nav.fragment.description'),
    component: FragmentDemo,
  },
  {
    id: 'events',
    label: i18n('nav.events.label'),
    title: i18n('nav.events.title'),
    description: i18n('nav.events.description'),
    component: Events,
  },
  {
    id: 'other-elements',
    label: i18n('nav.otherElements.label'),
    title: i18n('nav.otherElements.title'),
    description: i18n('nav.otherElements.description'),
    component: OtherElements,
  },
];
