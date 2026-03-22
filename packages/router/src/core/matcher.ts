import type { RouteConfig, RouteMatch } from '../types/router.js';
import { extractParams, normalizePath } from '@ktjs/shared';

/**
 * Route matcher for finding matching routes and extracting params
 */
export const createMatcher = (routes: RouteConfig[], matchedMap: Map<RouteConfig, RouteConfig[]>) => {
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
          result: matchedMap.get(route) ?? [route],
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
            result: matchedMap.get(route) ?? [route],
          };
        }
      }
    }

    return null;
  };

  return {
    findByName,
    match,
  };
};
