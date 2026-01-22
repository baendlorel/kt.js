import type {} from '@ktjs/core';
import type { Router, RouterConfig, RouteContext, NavOptions, RawRouteConfig, RouteConfig } from './types/router.js';
import { GuardLevel } from './consts.js';
import { createMatcher } from './matcher.js';
import { buildQuery, defaultHook, normalizePath, parseQuery, emplaceParams, throws } from './lib.js';

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
  // default to 'hash' mode
  const mode = config.mode ?? 'hash';
  const baseUrl = config.baseUrl ?? '';

  // # private values
  const routes: RouteConfig[] = [];
  let routerView: HTMLElement | null = null;

  /**
   * Normalize routes by adding default guards
   */
  const normalize = (rawRoutes: RawRouteConfig[], parentPath: string): RouteConfig[] =>
    rawRoutes.map((route) => {
      const path = normalizePath(parentPath, route.path);
      const normalized = {
        path: baseUrl + path,
        name: route.name ?? '',
        meta: route.meta ?? {},
        beforeEnter: route.beforeEnter ?? defaultHook,
        after: route.after ?? (defaultHook as () => void),
        children: route.children ? normalize(route.children, path) : [],
        component: route.component,
      };

      // directly push the normalized route to the list
      // avoid flatten them again
      routes.push(normalized);
      return normalized;
    });

  // Normalize routes with default guards
  normalize(config.routes, '/');
  const { findByName, match } = createMatcher(routes);

  /**
   * Initialize current route from URL
   */
  const initCurrentRoute = () => {
    if (mode === 'hash') {
      const hash = window.location.hash.slice(1); // Remove '#'
      if (!hash) {
        return (current = null);
      }

      // Parse path and query
      const [path, queryString] = hash.split('?');
      const normalizedPath = normalizePath(path);

      // Match route
      const matched = match(normalizedPath);
      if (!matched) {
        return (current = null);
      }

      // Build route context
      return (current = {
        path: normalizedPath,
        name: matched.route.name,
        params: matched.params,
        query: queryString ? parseQuery(queryString) : {},
        meta: matched.route.meta ?? {},
        matched: matched.result,
      });
    }

    // history mode
    const pathWithQuery = window.location.pathname + window.location.search;
    const [path, queryString] = pathWithQuery.split('?');
    const normalizedPath = normalizePath(path);
    const matched = match(normalizedPath);
    if (!matched) {
      return (current = null);
    }

    alert('queryString ' + queryString + ' -- ' + JSON.stringify(parseQuery(queryString)));
    return (current = {
      path: normalizedPath,
      name: matched.route.name,
      params: matched.params,
      query: queryString ? parseQuery(queryString) : {},
      meta: matched.route.meta ?? {},
      matched: matched.result,
    });
  };

  let current: RouteContext | null = null;
  const history: RouteContext[] = current ? [current] : [];

  // # methods
  const executeGuardsSync = (
    to: RouteContext,
    from: RouteContext | null,
    guardLevel: GuardLevel,
  ): { continue: boolean; redirectTo?: NavOptions } => {
    try {
      if (guardLevel === GuardLevel.None) {
        return { continue: true };
      }

      if (guardLevel & GuardLevel.Global) {
        const result = beforeEach(to, from);
        if (result === false) {
          return { continue: false };
        }
        if (typeof result === 'string') {
          return { continue: false, redirectTo: { path: result } };
        }
        if (result && typeof result === 'object' && !('then' in result)) {
          return { continue: false, redirectTo: result as NavOptions };
        }
      }

      if (guardLevel & GuardLevel.Route) {
        const targetRoute = to.matched[to.matched.length - 1];
        const result = targetRoute.beforeEnter(to);
        if (result === false) {
          return { continue: false };
        }
        if (typeof result === 'string') {
          return { continue: false, redirectTo: { path: result } };
        }
        if (result && typeof result === 'object' && !('then' in result)) {
          return { continue: false, redirectTo: result as NavOptions };
        }
      }

      return { continue: true };
    } catch (error) {
      onError(error as Error);
      return { continue: false };
    }
  };

  const executeGuards = async (
    to: RouteContext,
    from: RouteContext | null,
    guardLevel: GuardLevel,
  ): Promise<{ continue: boolean; redirectTo?: NavOptions }> => {
    try {
      if (guardLevel === GuardLevel.None) {
        return { continue: true };
      }

      if (guardLevel & GuardLevel.Global) {
        const result = await beforeEach(to, from);
        if (result === false) {
          return { continue: false };
        }
        if (typeof result === 'string') {
          return { continue: false, redirectTo: { path: result } };
        }
        if (result && typeof result === 'object') {
          return { continue: false, redirectTo: result };
        }
      }

      if (guardLevel & GuardLevel.Route) {
        const targetRoute = to.matched[to.matched.length - 1];
        const result = await targetRoute.beforeEnter(to);
        if (result === false) {
          return { continue: false };
        }
        if (typeof result === 'string') {
          return { continue: false, redirectTo: { path: result } };
        }
        if (result && typeof result === 'object') {
          return { continue: false, redirectTo: result };
        }
      }

      return { continue: true };
    } catch (error) {
      onError(error as Error);
      return { continue: false };
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
      throws(`Either path or name must be provided`);
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
      params: { ...matched.params, ...(options.params ?? {}) },
      query: options.query ?? {},
      meta: matched.route.meta ?? {},
      matched: matched.result,
    };

    return {
      guardLevel: options.guardLevel ?? GuardLevel.Default,
      replace: options.replace ?? false,
      to,
      fullPath,
    };
  };

  const navigateSync = (options: NavOptions, redirectCount = 0): boolean => {
    try {
      // Prevent infinite redirect loop
      if (redirectCount > 10) {
        onError(new Error('Maximum redirect count exceeded'));
        return false;
      }

      const prep = navigatePrepare(options);
      if (!prep) {
        return false;
      }
      const { guardLevel, replace, to, fullPath } = prep;

      // Execute guards
      const guardResult = executeGuardsSync(to, current, guardLevel);
      if (!guardResult.continue) {
        // Check if there's a redirect
        if (guardResult.redirectTo) {
          return navigateSync(guardResult.redirectTo, redirectCount + 1);
        }
        return false;
      }

      // Update browser history depending on mode
      const url = fullPath;
      if (mode === 'history') {
        if (replace) {
          window.history.replaceState({ path: to.path }, '', url);
        } else {
          window.history.pushState({ path: to.path }, '', url);
        }
      } else {
        const hashUrl = '#' + fullPath;
        if (replace) {
          window.location.replace(hashUrl);
        } else {
          window.location.hash = fullPath;
        }
      }

      // Update current route in memory
      current = to;
      if (replace) {
        if (history.length > 0) {
          history[history.length - 1] = to;
        } else {
          history.push(to);
        }
      } else {
        history.push(to);
      }

      // Render component if routerView exists
      if (routerView && to.matched.length > 0) {
        const route = to.matched[to.matched.length - 1];
        if (route.component) {
          const element = route.component();
          if (element instanceof Promise) {
            element.then((el) => {
              routerView!.innerHTML = '';
              routerView!.appendChild(el);
            });
          } else {
            routerView.innerHTML = '';
            routerView.appendChild(element);
          }
        }
      }

      // Execute after hooks
      executeAfterHooksSync(to, history[history.length - 2] ?? null);

      return true;
    } catch (error) {
      onError(error as Error);
      return false;
    }
  };

  const navigateAsync = async (options: NavOptions, redirectCount = 0): Promise<boolean> => {
    try {
      // Prevent infinite redirect loop
      if (redirectCount > 10) {
        onError(new Error('Maximum redirect count exceeded'));
        return false;
      }

      const prep = navigatePrepare(options);
      if (!prep) {
        return false;
      }

      const { guardLevel, replace, to, fullPath } = prep;

      const guardResult = await executeGuards(to, current, guardLevel);
      if (!guardResult.continue) {
        // Check if there's a redirect
        if (guardResult.redirectTo) {
          return navigateAsync(guardResult.redirectTo, redirectCount + 1);
        }
        return false;
      }

      // ---- Guards passed ----

      const url = fullPath;
      if (mode === 'history') {
        if (replace) {
          window.history.replaceState({ path: to.path }, '', url);
        } else {
          window.history.pushState({ path: to.path }, '', url);
        }
      } else {
        const hashUrl = '#' + fullPath;
        if (replace) {
          window.location.replace(hashUrl);
        } else {
          window.location.hash = fullPath;
        }
      }

      current = to;
      if (replace) {
        if (history.length > 0) {
          history[history.length - 1] = to;
        } else {
          history.push(to);
        }
      } else {
        history.push(to);
      }

      // Render component if routerView exists
      if (routerView && to.matched.length > 0) {
        const route = to.matched[to.matched.length - 1];
        if (route.component) {
          const element = await route.component();
          routerView.innerHTML = '';
          routerView.appendChild(element);
        }
      }

      executeAfterHooks(to, history[history.length - 2] ?? null);
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
  if (mode === 'history') {
    // Listen to browser back/forward for history mode
    window.addEventListener('popstate', (event) => {
      if (event.state?.path) {
        // navigate without pushing new history entry
        navigate({ path: event.state.path, guardLevel: GuardLevel.Global, replace: true });
      }
    });
  } else {
    // hash mode: listen to hashchange
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash.slice(1);
      const [path] = hash.split('?');
      const normalizedPath = normalizePath(path);
      if (current && current.path === normalizedPath) {
        return;
      }
      // render route for new hash without adding extra history entry
      const matched = match(normalizedPath);
      if (!matched) {
        onNotFound(normalizedPath);
        return;
      }
      const queryString = window.location.hash.slice(1).split('?')[1];
      const to: RouteContext = {
        path: normalizedPath,
        name: matched.route.name,
        params: matched.params,
        query: queryString ? parseQuery(queryString) : {},
        meta: matched.route.meta ?? {},
        matched: matched.result,
      };

      // apply without modifying browser history
      current = to;
      history.push(to);

      if (routerView && to.matched.length > 0) {
        const route = to.matched[to.matched.length - 1];
        if (route.component) {
          const element = route.component();
          if (element instanceof Promise) {
            element.then((el) => {
              routerView!.innerHTML = '';
              routerView!.appendChild(el);
            });
          } else {
            routerView.innerHTML = '';
            routerView.appendChild(element);
          }
        }
      }

      executeAfterHooksSync(to, history[history.length - 2] ?? null);
    });
  }

  // Router instance
  return {
    get current() {
      return current;
    },

    get history() {
      return history.concat();
    },

    setRouterView(view: HTMLElement) {
      routerView = view;
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
    initCurrentRoute,
  };
};

export { GuardLevel };
export { KTRouter } from './kt-router.js';
