import { throws } from '@/lib/error.js';
import { Router, RouterConfig, RouteContext, NavigateOptions, RouteConfig } from '../../types/router.js';
import { SilentLevel } from './consts.js';

import { RouteMatcher } from './matcher.js';
import { buildQuery, defaultHook, normalizePath, normalizeResult, parseQuery, emplaceParams } from './utils.js';

/**
 * Create a new router instance
 */
export function createRouter(config: RouterConfig): Router {
  // # default configs
  const beforeEach = config.beforeEach ?? defaultHook;
  const afterEach = config.afterEach ?? (defaultHook as () => void);
  const asyncGuards = config.asyncGuards ?? true;

  // # private values
  const routes: Required<RouteConfig>[] = [];

  /**
   * Normalize routes by adding default guards
   */
  const normalize = (rawRoutes: RouteConfig[], parentPath: string): Required<RouteConfig>[] =>
    rawRoutes.map((route) => {
      const path = normalizePath(parentPath, route.path);
      const normalized = {
        path,
        name: route.name ?? '',
        meta: route.meta ?? {},
        beforeEnter: route.beforeEnter ?? defaultHook,
        after: route.after ?? (defaultHook as () => void),
        children: route.children ? normalize(route.children, path) : [],
      };

      // directly push the normalized route to the list
      // avoid flatten them again
      routes.push(normalized);
      return normalized;
    });

  // Normalize routes with default guards
  normalize(config.routes, '/');
  const matcher = new RouteMatcher(routes);
  let current: RouteContext | null = null;
  const history: RouteContext[] = [];

  /**
   * Navigate to a route
   */
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
        if (targetRoute) {
          targetPath = targetRoute.path;
        } else {
          return throws(`Route not found: ${options.name}`);
        }
      } else if (options.path) {
        targetPath = normalizePath(options.path);
        targetRoute = matcher.match(targetPath)?.route;
      } else {
        throws('Either path or name must be provided');
      }

      // Substitute params
      if (options.params) {
        targetPath = emplaceParams(targetPath, options.params);
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

  /**
   * Navigate to a route asynchronously (supports async guards)
   * Uses Promise chain instead of async/await to minimize transpilation overhead
   */
  const navigateAsync = function (options: NavigateOptions): Promise<boolean> {
    return new Promise((resolve) => {
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
            throws(`Route not found: ${options.name}`);
          }
          targetPath = targetRoute.path;
        } else if (options.path) {
          targetPath = normalizePath(options.path);
          targetRoute = matcher.match(targetPath)?.route;
        } else {
          throws('Either path or name must be provided');
        }

        // Substitute params
        if (options.params) {
          targetPath = emplaceParams(targetPath, options.params);
        }

        // Match final path
        const match = matcher.match(targetPath);
        if (!match) {
          if (config.onNotFound) {
            const result = config.onNotFound(targetPath);
            if (result === false) {
              resolve(false);
              return;
            }
          }
          resolve(false);
          return;
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

        // Execute guards asynchronously
        executeGuardsAsync(to, current, silentLevel)
          .then((guardsPassed) => {
            if (!guardsPassed) {
              resolve(false);
              return;
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

            // Execute after hooks asynchronously
            return executeAfterHooksAsync(to, history[history.length - 2] || null);
          })
          .then(() => {
            resolve(true);
          })
          .catch((error) => {
            if (config.onError) {
              config.onError(error as Error);
            }
            resolve(false);
          });
      } catch (error) {
        if (config.onError) {
          config.onError(error as Error);
        }
        resolve(false);
      }
    });
  };

  const navigate = asyncGuards ? navigateSync : navigateAsync;

  /**
   * Execute before guards in the correct order:
   * 1. Global beforeEach (unless silentLevel >= Global)
   * 2. Target route's beforeEnter (unless silentLevel >= All)
   * @returns true if navigation should proceed, false otherwise
   */
  function executeGuards(to: RouteContext, from: RouteContext | null, silentLevel: SilentLevel): boolean {
    switch (silentLevel) {
      case SilentLevel.None: {
        const result = beforeEach(to, from);
        if (result === false) {
          return false;
        }
      }
      case SilentLevel.Global: {
        const targetRoute = to.matched[to.matched.length - 1];
        if (targetRoute?.beforeEnter) {
          const result = targetRoute.beforeEnter(to);
          if (result === false) {
            return false;
          }
        }
      }
      case SilentLevel.All:
        return true;
    }
  }

  /**
   * Execute before guards asynchronously in the correct order:
   * 1. Global beforeEach (unless silentLevel >= Global)
   * 2. Target route's beforeEnter (unless silentLevel >= All)
   * @returns Promise<boolean> - resolves to true if navigation should proceed
   */
  // todo 规整这个地方的silentlevel逻辑
  function executeGuardsAsync(to: RouteContext, from: RouteContext | null, silentLevel: SilentLevel): Promise<boolean> {
    // 1. Global beforeEach (skip if silentLevel >= Global)
    if (silentLevel < SilentLevel.Global) {
      return normalizeResult(beforeEach(to, from)).then((passed) => {
        if (!passed) {
          return false;
        }

        // 2. Target route's beforeEnter (skip if silentLevel >= All)
        if (silentLevel < SilentLevel.All) {
          const targetRoute = to.matched[to.matched.length - 1];
          if (targetRoute?.beforeEnter) {
            return normalizeResult(targetRoute.beforeEnter(to));
          }
        }

        return true;
      });
    }

    // 2. Target route's beforeEnter only (skip if silentLevel >= All)
    if (silentLevel < SilentLevel.All) {
      const targetRoute = to.matched[to.matched.length - 1];
      if (targetRoute?.beforeEnter) {
        return normalizeResult(targetRoute.beforeEnter(to));
      }
    }

    return Promise.resolve(true);
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
   * Execute after hooks asynchronously
   */
  function executeAfterHooksAsync(to: RouteContext, from: RouteContext | null): Promise<void> {
    const targetRoute = to.matched[to.matched.length - 1];

    // Helper to normalize hook result to Promise<void>
    const normalizeHook = (result: void | Promise<void>): Promise<void> => {
      if (result instanceof Promise) {
        return result;
      }
      return Promise.resolve();
    };

    // Execute route-level after hook
    const routeAfterPromise = targetRoute?.after ? normalizeHook(targetRoute.after(to)) : Promise.resolve();

    // Chain global afterEach
    return routeAfterPromise.then(() => normalizeHook(afterEach(to, from)));
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

    push(location: string | NavigateOptions): boolean | Promise<boolean> {
      const options = normalizeLocation(location);
      return navigate(options);
    },

    silentPush(location: string | NavigateOptions): boolean | Promise<boolean> {
      const options = normalizeLocation(location);
      return navigate({ ...options, silentLevel: SilentLevel.Global });
    },

    replace(location: string | NavigateOptions): boolean | Promise<boolean> {
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
