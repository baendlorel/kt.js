import { NavItem } from '../types/router.js';
import { Counter } from './Counter.js';
import { Events } from './Events.js';
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
    id: 'events',
    label: 'Events',
    title: 'Events Handling',
    description: ` KT.js uses the on: syntax for event handling, similar to React but with direct DOM events.`,
    component: Events,
  },
];
