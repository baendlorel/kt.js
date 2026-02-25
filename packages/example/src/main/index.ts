import { NavItem } from '../types/router.js';
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
    label: 'Getting Started',
    title: 'Welcome to KT.js Framework',
    description: 'Introduction to KT.js framework and core concepts',
    component: Home,
  },
  {
    id: 'ie11-compatibility',
    label: 'IE11 Compatibility',
    title: 'How to Configure for IE11 Support',
    description: 'We need babel to downgrade the code and include necessary polyfills.',
    component: IE11Compatibility,
  },
  {
    id: 'changelog',
    label: 'ChangeLog',
    title: 'View ChangeLog',
    description: 'A comprehensive list of changes, updates, and improvements in the KT.js framework',
    component: ChangeLog,
  },
  {
    id: 'reactive',
    label: 'Reactive',
    title: 'Reactive',
    description: 'Demonstration of reactive features using kt.js refs',
    component: Reactivity,
  },
  {
    id: 'directives',
    label: 'Directives',
    title: 'Directives',
    description: 'Examples for k-if/k-else, k-model, and k-html directives',
    component: Directives,
  },
  {
    id: 'fragment',
    label: 'Fragment',
    title: 'Fragment',
    description: 'Demonstrates fragment shorthand and reactive fragment children arrays',
    component: FragmentDemo,
  },
  {
    id: 'events',
    label: 'Events',
    title: 'Events Handling',
    description: `KT.js uses the on: syntax for event handling, similar to React but with direct DOM events.`,
    component: Events,
  },
  {
    id: 'other-elements',
    label: 'Other Elements',
    title: 'Non-HTMLElement Elements',
    description: `KT.js supports creating non-HTMLElement elements like svg and mathml using jsx syntax. This demo shows how to use them.`,
    component: OtherElements,
  },
];
