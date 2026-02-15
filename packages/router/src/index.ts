import '@ktjs/shared';

// Export router functionality
export * from './core/index.js';
export { GuardLevel } from './core/consts.js';

// Re-export router types
export type {
  Router,
  RouterConfig,
  RouteConfig,
  RawRouteConfig,
  RouteContext,
  NavOptions,
  RouteMatch,
} from './types/router.js';
