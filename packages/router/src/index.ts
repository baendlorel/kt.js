import '@ktjs/runtime';

import type { Router, RouterConfig, RouteContext, NavOptions, RawRouteConfig, RouteConfig } from '@/types/router.js';
import { GuardLevel } from './consts.js';
import { createMatcher } from './matcher.js';
import { buildQuery, defaultHook, normalizePath, parseQuery, emplaceParams } from './utils.js';

/**
 * Create a new router instance
 */
export const createRouter = (config: RouterConfig): Router => {
  const throws: (message: string) => never = window.__ktjs__.throws;

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
  const executeGuardsSync = (to: RouteContext, from: RouteContext | null, guardLevel: GuardLevel): boolean => {
    try {
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
    } catch (error) {
      onError(error as Error);
      return false;
    }
  };

  const executeGuards = async (
    to: RouteContext,
    from: RouteContext | null,
    guardLevel: GuardLevel
  ): Promise<boolean> => {
    try {
      if (guardLevel === GuardLevel.None) {
        return true;
      }

      if (guardLevel & GuardLevel.Global) {
        const result = await beforeEach(to, from);
        if (result === false) {
          return false;
        }
      }

      if (guardLevel & GuardLevel.Route) {
        const targetRoute = to.matched[to.matched.length - 1];
        const result = targetRoute.beforeEnter(to);
        return result !== false;
      }

      return true;
    } catch (error) {
      onError(error as Error);
      return false;
    }
  };

  const navigatePrepare = (options: NavOptions) => {
    // Resolve target route
    let targetPath: string;
    let targetRoute;

    if (options.name) {
      targetRoute = findByName(options.name);
      if (!targetRoute) {
        throws(`Route not found: ${options.name}`);
      }
      targetPath = targetRoute.path;
    } else if (options.path) {
      targetPath = normalizePath(options.path);
      targetRoute = match(targetPath)?.route;
    } else {
      throws('Either path or name must be provided');
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
      if (!executeGuardsSync(to, current, guardLevel)) {
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
      executeAfterHooksSync(to, history[history.length - 2] || null);

      return true;
    } catch (error) {
      onError(error as Error);
      return false;
    }
  };

  const navigateAsync = async (options: NavOptions): Promise<boolean> => {
    try {
      const prep = navigatePrepare(options);
      if (!prep) {
        return false;
      }

      const { guardLevel, replace, to, fullPath } = prep;

      const passed = await executeGuards(to, current, guardLevel);
      if (!passed) {
        return false;
      }

      // ---- Guards passed ----

      const url = fullPath;
      if (replace) {
        window.history.replaceState({ path: to.path }, '', url);
      } else {
        window.history.pushState({ path: to.path }, '', url);
      }

      executeAfterHooks(to, history[history.length - 2] || null);
      return true;
    } catch (error) {
      onError(error as Error);
      return false;
    }
  };

  const navigate = asyncGuards ? navigateSync : navigateAsync;

  const executeAfterHooksSync = (to: RouteContext, from: RouteContext | null) => {
    const targetRoute = to.matched[to.matched.length - 1];
    targetRoute.after(to);
    afterEach(to, from);
  };

  const executeAfterHooks = async (to: RouteContext, from: RouteContext | null): Promise<void> => {
    const targetRoute = to.matched[to.matched.length - 1];
    await targetRoute.after(to);
    await afterEach(to, from);
  };

  /**
   * Normalize navigation argument
   */
  const normalizeLocation = (loc: string | NavOptions): NavOptions => {
    if (typeof loc === 'string') {
      // Parse path and query
      const [path, queryString] = loc.split('?');
      return {
        path,
        query: queryString ? parseQuery(queryString) : undefined,
      };
    }
    return loc;
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
      return navigate({ ...options, guardLevel: GuardLevel.Route });
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
