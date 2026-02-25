import { NavItem } from '../types/router.js';
import { t } from '../i18n/index.js';
import { ChangeLog } from './Changelog.js';
import { Directives } from './Directive.js';
import { Events } from './Events.js';
import { FragmentDemo } from './Fragment.js';
import { Home } from './Home.js';
import { IE11Compatibility } from './IE11Compatibility.js';
import { OtherElements } from './OtherElements.js';
import { Reactivity } from './Reactive.js';
import { Trivia } from './Trivia.js';

export const basicNavItems: NavItem[] = [
  {
    id: 'home',
    label: t('nav.home.label'),
    title: t('nav.home.title'),
    description: t('nav.home.description'),
    component: Home,
  },
  {
    id: 'ie11-compatibility',
    label: t('nav.ie11.label'),
    title: t('nav.ie11.title'),
    description: t('nav.ie11.description'),
    component: IE11Compatibility,
  },
  {
    id: 'changelog',
    label: t('nav.changelog.label'),
    title: t('nav.changelog.title'),
    description: t('nav.changelog.description'),
    component: ChangeLog,
  },
  {
    id: 'reactive',
    label: t('nav.reactive.label'),
    title: t('nav.reactive.title'),
    description: t('nav.reactive.description'),
    component: Reactivity,
  },
  {
    id: 'directives',
    label: t('nav.directives.label'),
    title: t('nav.directives.title'),
    description: t('nav.directives.description'),
    component: Directives,
  },
  {
    id: 'fragment',
    label: t('nav.fragment.label'),
    title: t('nav.fragment.title'),
    description: t('nav.fragment.description'),
    component: FragmentDemo,
  },
  {
    id: 'events',
    label: t('nav.events.label'),
    title: t('nav.events.title'),
    description: t('nav.events.description'),
    component: Events,
  },
  {
    id: 'other-elements',
    label: t('nav.otherElements.label'),
    title: t('nav.otherElements.title'),
    description: t('nav.otherElements.description'),
    component: OtherElements,
  },
  {
    id: 'trivia',
    label: t('nav.trivia.label'),
    title: t('nav.trivia.title'),
    description: t('nav.trivia.description'),
    component: Trivia,
  },
];
