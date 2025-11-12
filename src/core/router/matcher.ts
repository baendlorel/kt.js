import { RouteConfig, RouteMatch } from '../../types/router.js';
import { extractParams, flattenRoutes, normalizePath } from './utils.js';

/**
 * Route matcher for finding matching routes and extracting params
 */
export class RouteMatcher {
  private nameMap: Record<string, RouteConfig>;
  private flatRoutes: RouteConfig[];

  constructor(routes: RouteConfig[]) {
    this.nameMap = {};
    this.flatRoutes = flattenRoutes(routes);

    for (let i = 0; i < this.flatRoutes.length; i++) {
      const route = this.flatRoutes[i];
      if (route.name !== undefined) {
        this.nameMap[route.name] = route;
      }
    }
  }

  /**
   * Find route by name
   */
  findByName(name: string): RouteConfig | null {
    return this.nameMap[name] ?? null;
  }

  /**
   * Match path against all routes
   */
  match(path: string): RouteMatch | null {
    const normalizedPath = normalizePath(path);

    // Try exact match first
    for (const route of this.flatRoutes) {
      if (route.path === normalizedPath) {
        return {
          route,
          params: {},
          matched: this.getMatchedChain(route),
        };
      }
    }

    // Try dynamic routes
    for (const route of this.flatRoutes) {
      if (route.path.includes(':')) {
        const params = extractParams(route.path, normalizedPath);
        if (params) {
          return {
            route,
            params,
            matched: this.getMatchedChain(route),
          };
        }
      }
    }

    return null;
  }

  /**
   * Get chain of matched routes (for nested routes)
   */
  private getMatchedChain(route: RouteConfig): RouteConfig[] {
    const matched: RouteConfig[] = [route];
    const routePath = route.path;

    // Find parent routes by path prefix matching
    for (let i = 0; i < this.flatRoutes.length; i++) {
      const r = this.flatRoutes[i];
      if (r !== route && routePath.startsWith(r.path) && routePath !== r.path) {
        matched.unshift(r);
      }
    }

    return matched;
  }
}
