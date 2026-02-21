import { NavItem } from '../types/router.js';
import { Directives } from './Directive.js';
import { Events } from './Events.js';
import { FragmentDemo } from './Fragment.js';
import { Home } from './Home.js';
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
    description: ` KT.js uses the on: syntax for event handling, similar to React but with direct DOM events.`,
    component: Events,
  },
];
