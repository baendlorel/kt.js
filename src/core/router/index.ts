import { Router, RouterConfig, RouteContext, NavigateOptions } from '../../types/router.js';

import { RouteMatcher } from './matcher.js';
import { buildQuery, normalizePath, parseQuery, substituteParams } from './utils.js';

const defaultGuard = () => true;

/**
 * Create a new router instance
 */
export function createRouter(config: RouterConfig): Router {
  const matcher = new RouteMatcher(config.routes);
  let current: RouteContext | null = null;
  const history: RouteContext[] = [];

  /**
   * Navigate to a route
   */
  // todo 写出promise版本
  const navigateSync = function (options: NavigateOptions): boolean {
    try {
      // Extract control flags
      const silent = options.silent ?? false;
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
      if (!executeGuards(to, current, silent)) {
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
   * Execute before guards
   */
  function executeGuards(to: RouteContext, from: RouteContext | null, silent: boolean): boolean {
    // Global beforeEach (skip if silent)
    if (!silent && config.beforeEach) {
      const result = config.beforeEach(to, from);
      if (result === false) {
        return false;
      }
    }

    // Route-level before
    const targetRoute = to.matched[to.matched.length - 1];
    if (targetRoute?.before) {
      const result = targetRoute.before(to);
      if (result === false) {
        return false;
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
      navigate({ path: event.state.path, silent: true, replace: true });
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
      return navigate({ ...options, silent: true });
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
