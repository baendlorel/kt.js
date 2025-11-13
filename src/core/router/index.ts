import { Router, RouterConfig, RouteContext, NavigateOptions, RouteConfig } from '../../types/router.js';
import { SilentLevel } from './consts.js';

import { RouteMatcher } from './matcher.js';
import { buildQuery, normalizePath, parseQuery, substituteParams } from './utils.js';

/**
 * Default guard that always returns true
 */
const defaultGuard = (): boolean => true;

/**
 * Default after hook that does nothing
 */
const defaultAfterHook = (): void => {};

const mergePath = (parent: string, child: string) => {
  const path = parent.split('/').concat(child.split('/')).filter(Boolean);
  return '/' + path.join('/');
};

/**
 * Normalize routes by adding default guards
 */
const normalizeRoutes = (routes: RouteConfig[], parentPath: string): Required<RouteConfig>[] =>
  routes.map((route) => {
    const path = mergePath(parentPath, route.path);
    return {
      path,
      name: route.name ?? '',
      meta: route.meta ?? {},
      beforeEnter: route.beforeEnter ?? defaultGuard,
      after: route.after ?? defaultAfterHook,
      children: route.children ? normalizeRoutes(route.children, path) : [],
    };
  });

/**
 * Create a new router instance
 */
export function createRouter(config: RouterConfig): Router {
  const beforeEach = config.beforeEach ?? defaultGuard;
  const afterEach = config.afterEach ?? defaultAfterHook;
  const asyncGuards = config.asyncGuards ?? true;

  // Normalize routes with default guards
  const normalizedRoutes = normalizeRoutes(config.routes, '/');
  const matcher = new RouteMatcher(normalizedRoutes);
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
    // Helper to normalize guard result to Promise<boolean>
    const normalizeResult = (result: boolean | void | Promise<boolean | void>): Promise<boolean> => {
      if (result instanceof Promise) {
        return result.then((res) => res !== false);
      }
      return Promise.resolve(result !== false);
    };

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
