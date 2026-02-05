import type { RouteConfig, RouteMatch } from './types/router.js';
import { extractParams, normalizePath } from '@ktjs/shared';

/**
 * Route matcher for finding matching routes and extracting params
 */
export const createMatcher = (routes: RouteConfig[]) => {
  const nameMap: Record<string, RouteConfig> = {};

  for (let i = 0; i < routes.length; i++) {
    const route = routes[i];
    if (route.name !== undefined) {
      if (route.name in nameMap) {
        $throw(`Duplicate route name detected: '${route.name}'`);
      }
      nameMap[route.name] = route;
    }
  }

  /**
   * Find route by name
   */
  const findByName = (name: string): RouteConfig | null => {
    return nameMap[name] ?? null;
  };

  /**
   * Match path against all routes
   */
  const match = (path: string): RouteMatch | null => {
    const normalizedPath = normalizePath(path);

    // Try exact match first
    for (const route of routes) {
      if (route.path === normalizedPath) {
        return {
          route,
          params: {},
          result: getMatchedChain(route),
        };
      }
    }

    // Try dynamic routes
    for (const route of routes) {
      if (route.path.includes(':')) {
        const params = extractParams(route.path, normalizedPath);
        if (params) {
          return {
            route,
            params,
            result: getMatchedChain(route),
          };
        }
      }
    }

    return null;
  };

  /**
   * Get chain of matched routes (for nested routes)
   * - parent roots ahead
   */
  const getMatchedChain = (route: RouteConfig): RouteConfig[] => {
    const matched: RouteConfig[] = [route];
    const path = route.path;

    // Find parent routes by path prefix matching
    for (let i = 0; i < routes.length; i++) {
      const r = routes[i];
      if (r !== route && path.startsWith(r.path) && path !== r.path) {
        matched.push(r);
      }
    }

    return matched.reverse();
  };

  return {
    findByName,
    match,
  };
};
