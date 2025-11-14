import type { Router, RouterConfig, RouteContext, NavOptions, RawRouteConfig, RouteConfig } from '@/types/router.js';

import { throws } from '@/lib/error.js';
import { GuardLevel } from './consts.js';
import { RouteMatcher } from './matcher.js';
import { buildQuery, defaultHook, normalizePath, resolves, parseQuery, emplaceParams } from './utils.js';

/**
 * Create a new router instance
 */
export function createRouter(config: RouterConfig): Router {
  // # default configs
  const beforeEach = config.beforeEach ?? defaultHook;
  const afterEach = config.afterEach ?? (defaultHook as () => void);
  const onNotFound = config.onNotFound ?? defaultHook;
  const onError = config.onError ?? defaultHook;
  const asyncGuards = config.asyncGuards ?? true;

  // # private values
  const routes: RouteConfig[] = [];

  /**
   * Normalize routes by adding default guards
   */
  const normalize = (rawRoutes: RawRouteConfig[], parentPath: string): RouteConfig[] =>
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

  const navigatePrepare = (options: NavOptions) => {
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
      onNotFound(targetPath);
      return null;
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

    return {
      guardLevel: options.guardLevel ?? GuardLevel.Default,
      replace: options.replace ?? false,
      to,
      fullPath,
    };
  };

  /**
   * Navigate to a route
   */
  const navigateSync = (options: NavOptions): boolean => {
    try {
      const prep = navigatePrepare(options);
      if (!prep) {
        return false;
      }
      const { guardLevel, replace, to, fullPath } = prep;

      // Execute guards
      if (!executeGuards(to, current, guardLevel)) {
        return false;
      }

      // Update browser history
      const url = fullPath;
      if (replace) {
        window.history.replaceState({ path: to.path }, '', url);
      } else {
        window.history.pushState({ path: to.path }, '', url);
      }

      // Update current route
      current = to;
      history.push(to);

      // Execute after hooks
      executeAfterHooks(to, history[history.length - 2] || null);

      return true;
    } catch (error) {
      onError(error as Error);
      return false;
    }
  };

  /**
   * Navigate to a route asynchronously (supports async guards)
   * Uses Promise chain instead of async/await to minimize transpilation overhead
   */
  const navigateAsync = (options: NavOptions): Promise<boolean> =>
    new Promise((resolve) => {
      try {
        const prep = navigatePrepare(options);
        if (!prep) {
          resolve(false);
          return;
        }

        const { guardLevel, replace, to, fullPath } = prep;

        // Execute guards asynchronously
        executeGuardsAsync(to, current, guardLevel)
          .then((guardsPassed) => {
            if (!guardsPassed) {
              resolve(false);
              return;
            }

            // Update browser historys
            const url = fullPath;
            if (replace) {
              window.history.replaceState({ path: to.path }, '', url);
            } else {
              window.history.pushState({ path: to.path }, '', url);
            }

            // Update current route
            current = to;
            history.push(to);

            // Execute after hooks asynchronously
            return executeAfterHooksAsync(to, history[history.length - 2] || null);
          })
          .then(() => resolve(true))
          .catch((error) => (onError(error as Error), resolve(false)));
      } catch (error) {
        onError(error as Error);
        resolve(false);
      }
    });

  const navigate = asyncGuards ? navigateSync : navigateAsync;

  const executeGuards = (to: RouteContext, from: RouteContext | null, silentLevel: GuardLevel): boolean => {
    if (silentLevel === GuardLevel.None) {
      return true;
    }

    if (silentLevel & GuardLevel.Global) {
      const result = beforeEach(to, from);
      if (result === false) {
        return false;
      }
    }

    if (silentLevel & GuardLevel.Route) {
      const targetRoute = to.matched[to.matched.length - 1];
      const result = targetRoute.beforeEnter(to);
      if (result === false) {
        return false;
      }
    }

    return true;
  };

  const executeGuardsAsync = (
    to: RouteContext,
    from: RouteContext | null,
    silentLevel: GuardLevel
  ): Promise<boolean> => {
    return Promise.resolve(true);
  };

  /**
   * Execute after hooks
   */
  const executeAfterHooks = (to: RouteContext, from: RouteContext | null) => {
    // Route-level after
    const targetRoute = to.matched[to.matched.length - 1];
    if (targetRoute?.after) {
      targetRoute.after(to);
    }

    afterEach(to, from);
  };

  /**
   * Execute after hooks asynchronously
   */
  const executeAfterHooksAsync = (to: RouteContext, from: RouteContext | null): Promise<void> => {
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
  };

  /**
   * Normalize navigation argument
   */
  const normalizeLocation = (location: string | NavOptions): NavOptions => {
    if (typeof location === 'string') {
      // Parse path and query
      const [path, queryString] = location.split('?');
      return {
        path,
        query: queryString ? parseQuery(queryString) : undefined,
      };
    }
    return location;
  };

  // Listen to browser back/forward
  window.addEventListener('popstate', (event) => {
    if (event.state?.path) {
      navigate({ path: event.state.path, guardLevel: GuardLevel.Global, replace: true });
    }
  });

  // Router instance
  return {
    get current() {
      return current;
    },
    get history() {
      return history.concat();
    },

    push(location: string | NavOptions): boolean | Promise<boolean> {
      const options = normalizeLocation(location);
      return navigate(options);
    },

    silentPush(location: string | NavOptions): boolean | Promise<boolean> {
      const options = normalizeLocation(location);
      return navigate({ ...options, guardLevel: GuardLevel.Global });
    },

    replace(location: string | NavOptions): boolean | Promise<boolean> {
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
