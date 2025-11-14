// Export router functionality
export * from './index.js';
export { GuardLevel } from './consts.js';

// Re-export router types
export type {
  Router,
  RouterConfig,
  RouteConfig,
  RawRouteConfig,
  RouteContext,
  NavOptions,
  RouteMatch,
  NavigationGuard,
  AfterNavigationHook,
} from './types/router.js';
