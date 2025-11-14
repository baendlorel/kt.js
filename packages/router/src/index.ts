import { $throw } from '@ktjs/shared';

import type { Router, RouterConfig, RouteContext, NavOptions, RawRouteConfig, RouteConfig } from '@/types/router.js';
import { GuardLevel } from './consts.js';
import { createMatcher } from './matcher.js';
import { buildQuery, defaultHook, normalizePath, resolves, parseQuery, emplaceParams } from './utils.js';

/**
 * Create a new router instance
 */
export const createRouter = (config: RouterConfig): Router => {
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
  const { findByName, match } = createMatcher(routes);
  let current: RouteContext | null = null;
  const history: RouteContext[] = [];

  // # methods
  const executeGuards = (to: RouteContext, from: RouteContext | null, guardLevel: GuardLevel): boolean => {
    if (guardLevel === GuardLevel.None) {
      return true;
    }

    if (guardLevel & GuardLevel.Global) {
      const result = beforeEach(to, from);
      if (result === false) {
        return false;
      }
    }

    if (guardLevel & GuardLevel.Route) {
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
    guardLevel: GuardLevel
  ): Promise<boolean> => {
    let promise = Promise.resolve(true);
    if (guardLevel === GuardLevel.None) {
      return promise;
    }

    if (guardLevel & GuardLevel.Global) {
      promise = promise
        .then(() => beforeEach(to, from))
        .then((result) => {
          if (result === false) return Promise.reject(false);
          return true;
        });
    }

    if (guardLevel & GuardLevel.Route) {
      promise = promise
        .then(() => {
          const targetRoute = to.matched[to.matched.length - 1];
          return targetRoute.beforeEnter(to);
        })
        .then((result) => {
          if (result === false) {
            return Promise.reject(false);
          }
          return true;
        });
    }

    return promise.catch((reason) => {
      if (reason === false) {
        return false;
      }
      return Promise.reject(reason);
    });
  };

  const navigatePrepare = (options: NavOptions) => {
    // Resolve target route
    let targetPath: string;
    let targetRoute;

    if (options.name) {
      targetRoute = findByName(options.name);
      if (!targetRoute) {
        $throw(`Route not found: ${options.name}`);
      }
      targetPath = targetRoute.path;
    } else if (options.path) {
      targetPath = normalizePath(options.path);
      targetRoute = match(targetPath)?.route;
    } else {
      $throw('Either path or name must be provided');
    }

    // Substitute params
    if (options.params) {
      targetPath = emplaceParams(targetPath, options.params);
    }

    // Match final path
    const matched = match(targetPath);
    if (!matched) {
      onNotFound(targetPath);
      return null;
    }

    // Build route context
    const queryString = options.query ? buildQuery(options.query) : '';
    const fullPath = targetPath + queryString;

    const to: RouteContext = {
      path: targetPath,
      name: matched.route.name,
      params: { ...matched.params, ...(options.params || {}) },
      query: options.query || {},
      meta: matched.route.meta || {},
      matched: matched.result,
    };

    return {
      guardLevel: options.guardLevel ?? GuardLevel.Default,
      replace: options.replace ?? false,
      to,
      fullPath,
    };
  };

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

  const navigateAsync = (options: NavOptions): Promise<boolean> =>
    new Promise<boolean>((resolve) => {
      try {
        const prep = navigatePrepare(options);
        if (!prep) {
          return resolve(false);
        }

        const { guardLevel, replace, to, fullPath } = prep;

        executeGuardsAsync(to, current, guardLevel)
          .then((guardOk) => {
            if (!guardOk) {
              return resolve(false);
            }

            // ---- Guards passed ----

            const url = fullPath;
            if (replace) {
              window.history.replaceState({ path: to.path }, '', url);
            } else {
              window.history.pushState({ path: to.path }, '', url);
            }

            // Update current route
            current = to;
            history.push(to);

            // Execute after hooks (sync)
            executeAfterHooksAsync(to, history[history.length - 2] || null);

            return resolve(true);
          })
          .catch((error) => {
            // executeGuards 抛出的非 false 错误会到这里
            onError(error as Error);
            return resolve(false);
          });
      } catch (error) {
        // navigatePrepare 的同步异常
        onError(error as Error);
        return resolve(false);
      }
    });

  const navigate = asyncGuards ? navigateSync : navigateAsync;

  const executeAfterHooks = (to: RouteContext, from: RouteContext | null) => {
    const targetRoute = to.matched[to.matched.length - 1];
    targetRoute.after(to);
    afterEach(to, from);
  };

  const executeAfterHooksAsync = (to: RouteContext, from: RouteContext | null): Promise<void> => {
    const targetRoute = to.matched[to.matched.length - 1];
    return resolves(targetRoute.after(to)).then(() => resolves(afterEach(to, from)));
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

  // # register events
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
};
