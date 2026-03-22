import { $emptyFn, buildQuery, normalizePath, parseQuery, emplaceParams } from '@ktjs/shared';

import type { Router, RouterConfig, RouteContext, NavOptions, RawRouteConfig, RouteConfig } from '../types/router.js';
import { GuardLevel } from './consts.js';
import { createMatcher } from './matcher.js';

/**
 * Create a new router instance
 */
export const createRouter = ({
  beforeEach = $emptyFn,
  afterEach = $emptyFn,
  onNotFound = $emptyFn,
  onError = $emptyFn,
  prefix = '',
  routes: rawRoutes,
}: RouterConfig): Router => {
  // # private values
  const routes: RouteConfig[] = [];
  const matchedMap = new Map<RouteConfig, RouteConfig[]>();
  const history: RouteContext[] = [];
  const prefixPath = prefix ? normalizePath(prefix) : '';
  let routerView: HTMLElement | null = null;
  let current: RouteContext | null = null;
  let ignoreNextHashChange = false;

  // # methods
  const normalize = (rawRoutes: RawRouteConfig[], parentPath: string, parentMatched: RouteConfig[]): RouteConfig[] =>
    rawRoutes.map((route) => {
      const path = normalizePath(parentPath, route.path);
      const normalized: RouteConfig = {
        path: prefixPath ? normalizePath(prefixPath, path) : path,
        name: route.name,
        meta: route.meta ?? {},
        beforeEnter: route.beforeEnter ?? $emptyFn,
        after: route.after ?? $emptyFn,
        children: [],
        component: route.component,
      };
      const matched = parentMatched.concat(normalized);
      matchedMap.set(normalized, matched);
      normalized.children = route.children ? normalize(route.children, path, matched) : [];

      // directly push the normalized route to the list
      // avoid flatten them again
      routes.push(normalized);
      return normalized;
    });

  normalize(rawRoutes, '/', []);

  const guard = async (
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

    if (options.name) {
      const targetRoute = findByName(options.name);
      if (!targetRoute) {
        $throw(`Route not found: ${options.name}`);
      }
      targetPath = targetRoute.path;
    } else if (options.path) {
      targetPath = normalizePath(options.path);
      if (prefixPath && targetPath !== prefixPath && !targetPath.startsWith(prefixPath + '/')) {
        targetPath = normalizePath(prefixPath, targetPath);
      }
    } else {
      $throw(`Either path or name must be provided`);
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
      name: matched.route.name ?? '',
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

  const commit = async (
    to: RouteContext,
    fullPath: string,
    replaceHistory: boolean,
    hashMode: 'push' | 'replace' | null,
  ): Promise<void> => {
    if (hashMode && window.location.hash.slice(1) !== fullPath) {
      ignoreNextHashChange = true;
      const hashUrl = '#' + fullPath;
      if (hashMode === 'replace') {
        window.location.replace(hashUrl);
      } else {
        window.location.hash = fullPath;
      }
    }

    const from = current;
    current = to;
    if (replaceHistory) {
      if (history.length > 0) {
        history[history.length - 1] = to;
      } else {
        history.push(to);
      }
    } else {
      history.push(to);
    }

    if (routerView && to.matched.length > 0) {
      const route = to.matched[to.matched.length - 1];
      const element = await route.component();
      routerView.innerHTML = '';
      routerView.appendChild(element);
    }

    void executeAfterHooks(to, from).catch((error) => {
      onError(error as Error, to.matched[to.matched.length - 1]);
    });
  };

  const navigate = async (options: NavOptions, redirectCount = 0): Promise<boolean> => {
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

      const guardResult = await guard(to, current, guardLevel);
      if (!guardResult.continue) {
        // Check if there's a redirect
        if (guardResult.redirectTo) {
          return await navigate(guardResult.redirectTo, redirectCount + 1);
        }
        return false;
      }

      // ---- Guards passed ----
      await commit(to, fullPath, replace, replace ? 'replace' : 'push');
      return true;
    } catch (error) {
      onError(error as Error);
      return false;
    }
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
    if (typeof loc !== 'string') {
      return loc;
    }

    const [path, queryString] = loc.split('?');
    return {
      path,
      query: queryString ? parseQuery(queryString) : undefined,
    };
  };

  const { findByName, match } = createMatcher(routes, matchedMap);

  const handleHashChange = async () => {
    if (ignoreNextHashChange) {
      ignoreNextHashChange = false;
      return;
    }

    const hash = window.location.hash.slice(1);
    if (!hash) {
      return;
    }

    const prep = navigatePrepare(normalizeLocation(hash));
    if (!prep) {
      return;
    }

    const { guardLevel, to, fullPath } = prep;
    const guardResult = await guard(to, current, guardLevel);
    if (!guardResult.continue) {
      if (guardResult.redirectTo) {
        await navigate({ ...guardResult.redirectTo, replace: true });
        return;
      }

      ignoreNextHashChange = true;
      if (current) {
        window.location.replace('#' + current.path + buildQuery(current.query));
      } else {
        window.location.replace(window.location.pathname + window.location.search);
      }
      return;
    }

    await commit(to, fullPath, false, fullPath === hash ? null : 'replace');
  };

  // # register events
  window.addEventListener('hashchange', () => {
    void handleHashChange();
  });

  // # initialize
  const instance: Router = {
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
  };
  const currentHash = window.location.hash.slice(1);
  if (currentHash) {
    void handleHashChange();
  }

  return instance;
};

export { GuardLevel };
export { KTRouter } from './kt-router.js';
