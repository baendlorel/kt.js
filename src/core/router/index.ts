import { Router, RouterConfig, RouteContext, NavigateOptions, SilentLevel, RouteConfig } from '../../types/router.js';

import { RouteMatcher } from './matcher.js';
import { buildQuery, normalizePath, parseQuery, substituteParams } from './utils.js';

/**
 * Default guard that always returns true
 */
const defaultGuard = () => true;

/**
 * Normalize routes by adding default guards
 */
function normalizeRoutes(routes: RouteConfig[]): RouteConfig[] {
  return routes.map((route) => ({
    ...route,
    beforeEnter: route.beforeEnter ?? defaultGuard,
    after: route.after ?? defaultGuard,
    children: route.children ? normalizeRoutes(route.children) : undefined,
  }));
}

/**
 * Create a new router instance
 */
export function createRouter(config: RouterConfig): Router {
  // Normalize routes with default guards
  const normalizedRoutes = normalizeRoutes(config.routes);
  const matcher = new RouteMatcher(normalizedRoutes);
  let current: RouteContext | null = null;
  const history: RouteContext[] = [];

  /**
   * Navigate to a route
   */
  // todo 写出promise版本
  const navigateSync = function (options: NavigateOptions): boolean {
    try {
      // Extract control flags
      const silentLevel = options.silentLevel ?? SilentLevel.None;
      const replace = options.replace ?? false;

      // Resolve target route
      let targetPath: string;
      let targetRoute;

      if (options.name) {
        targetRoute = matcher.findByName(options.name);
        if (!targetRoute) {
          throw new Error(`Route not found: ${options.name}`);
        }
        targetPath = targetRoute.path;
      } else if (options.path) {
        targetPath = normalizePath(options.path);
        targetRoute = matcher.match(targetPath)?.route;
      } else {
        throw new Error('Either path or name must be provided');
      }

      // Substitute params
      if (options.params) {
        targetPath = substituteParams(targetPath, options.params);
      }

      // Match final path
      const match = matcher.match(targetPath);
      if (!match) {
        if (config.onNotFound) {
          const result = config.onNotFound(targetPath);
          if (result === false) {
            return false;
          }
        }
        return false;
      }

      // Build route context
      const queryString = options.query ? buildQuery(options.query) : '';
      const fullPath = targetPath + queryString;

      const to: RouteContext = {
        path: targetPath,
        name: match.route.name,
        params: { ...match.params, ...(options.params || {}) },
        query: options.query || {},
        meta: match.route.meta || {},
        matched: match.matched,
      };

      // Execute guards
      if (!executeGuards(to, current, silentLevel)) {
        return false;
      }

      // Update browser history
      const url = fullPath;
      if (replace) {
        window.history.replaceState({ path: targetPath }, '', url);
      } else {
        window.history.pushState({ path: targetPath }, '', url);
      }

      // Update current route
      current = to;
      history.push(to);

      // Execute after hooks
      executeAfterHooks(to, history[history.length - 2] || null);

      return true;
    } catch (error) {
      if (config.onError) {
        config.onError(error as Error);
      }
      return false;
    }
  };

  // const navigateAsync = function (options: NavigateOptions): boolean {};

  const navigate = typeof Promise === 'undefined' ? navigateSync : navigateSync;

  /**
   * Execute before guards in the correct order:
   * 1. Global beforeEach (unless silentLevel >= Global)
   * 2. Target route's beforeEnter (unless silentLevel >= All)
   * @returns true if navigation should proceed, false otherwise
   */
  function executeGuards(to: RouteContext, from: RouteContext | null, silentLevel: SilentLevel): boolean {
    // 1. Global beforeEach (skip if silentLevel >= Global)
    if (silentLevel < SilentLevel.Global && config.beforeEach) {
      const result = config.beforeEach(to, from);
      if (result === false) {
        return false;
      }
    }

    // 2. Target route's beforeEnter (skip if silentLevel >= All)
    if (silentLevel < SilentLevel.All) {
      const targetRoute = to.matched[to.matched.length - 1];
      if (targetRoute?.beforeEnter) {
        const result = targetRoute.beforeEnter(to);
        if (result === false) {
          return false;
        }
      }
    }

    return true;
  }

  /**
   * Execute after hooks
   */
  function executeAfterHooks(to: RouteContext, from: RouteContext | null) {
    // Route-level after
    const targetRoute = to.matched[to.matched.length - 1];
    if (targetRoute?.after) {
      targetRoute.after(to);
    }

    // Global afterEach
    if (config.afterEach) {
      config.afterEach(to, from);
    }
  }

  /**
   * Normalize navigation argument
   */
  function normalizeLocation(location: string | NavigateOptions): NavigateOptions {
    if (typeof location === 'string') {
      // Parse path and query
      const [path, queryString] = location.split('?');
      return {
        path,
        query: queryString ? parseQuery(queryString) : undefined,
      };
    }
    return location;
  }

  // Listen to browser back/forward
  window.addEventListener('popstate', (event) => {
    if (event.state?.path) {
      navigate({
        path: event.state.path,
        silentLevel: SilentLevel.Global,
        replace: true,
      });
    }
  });

  // Router instance
  return {
    get current() {
      return current;
    },
    get history() {
      return [...history];
    },

    push(location: string | NavigateOptions): boolean {
      const options = normalizeLocation(location);
      return navigate(options);
    },

    silentPush(location: string | NavigateOptions): boolean {
      const options = normalizeLocation(location);
      return navigate({ ...options, silentLevel: SilentLevel.Global });
    },

    replace(location: string | NavigateOptions): boolean {
      const options = normalizeLocation(location);
      return navigate({ ...options, replace: true });
    },

    back() {
      window.history.back();
    },

    forward() {
      window.history.forward();
    },
  };
}
