import { NavItem } from '../types/router.js';
import { BasicUsage } from './BasicUsage.js';
import { Counter } from './Counter.js';
import { Home } from './Home.js';

export const basicNavItems: NavItem[] = [
  {
    id: 'home',
    label: 'Getting Started',
    title: 'Welcome to KT.js Framework',
    description: 'Introduction to KT.js framework and core concepts',
    component: Home,
  },
  {
    id: 'basic-usage',
    label: 'Basic Usage',
    title: 'Basic Usage',
    description: `This section combines three fundamental features of KT.js: Directives, Event Handling, and KTFor list rendering. These are the core building blocks for creating interactive applications.`,
    component: BasicUsage,
  },
  {
    id: 'counter',
    label: 'Counter Demo',
    title: 'Counter Demo',
    description: 'Basic state management with manual DOM updates',
    component: Counter,
  },
];
