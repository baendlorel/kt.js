import { throws } from '@/lib/error.js';
import { RouteConfig, RouteMatch } from '../../types/router.js';
import { extractParams, normalizePath } from './utils.js';

// todo 改造为函数式，这里可以不用class的
/**
 * Route matcher for finding matching routes and extracting params
 */
export class RouteMatcher {
  private nameMap: Record<string, RouteConfig>;
  private routes: RouteConfig[];

  constructor(routes: RouteConfig[]) {
    this.nameMap = {};
    this.routes = routes;

    for (let i = 0; i < routes.length; i++) {
      const route = routes[i];
      if (route.name !== undefined) {
        if (route.name in this.nameMap) {
          throws(`Duplicate route name detected: '${route.name}'`);
        }
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
    for (const route of this.routes) {
      if (route.path === normalizedPath) {
        return {
          route,
          params: {},
          matched: this.getMatchedChain(route),
        };
      }
    }

    // Try dynamic routes
    for (const route of this.routes) {
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
    const path = route.path;

    // Find parent routes by path prefix matching
    for (let i = 0; i < this.routes.length; i++) {
      const r = this.routes[i];
      if (r !== route && path.startsWith(r.path) && path !== r.path) {
        matched.push(r); // todo 不知道这里为什么用unshift，但如果要这样，不如先push后reverse更好
      }
    }

    return matched.reverse();
  }
}
