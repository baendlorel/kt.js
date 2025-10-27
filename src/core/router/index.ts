/**
 * KT.js Router - Lightweight client-side routing
 *
 * Features:
 * - Hash-based and History API routing
 * - Dynamic route parameters
 * - Navigation guards
 * - Lazy loading support
 * - No dependencies
 */

type RouteParams = Record<string, string>;
type QueryParams = Record<string, string>;

export interface RouteContext {
  params: RouteParams;
  query: QueryParams;
  path: string;
  hash: string;
}

export type RouteHandler = (ctx: RouteContext) => HTMLElement | void | Promise<HTMLElement | void>;
export type NavigationGuard = (to: RouteContext, from: RouteContext | null) => boolean | Promise<boolean>;

export interface RouteConfig {
  path: string;
  handler: RouteHandler;
  name?: string;
}

export interface RouterConfig {
  routes: RouteConfig[];
  mode?: 'hash' | 'history';
  base?: string;
  container?: HTMLElement;
  beforeEach?: NavigationGuard;
  afterEach?: (to: RouteContext) => void;
  onError?: (error: Error) => void;
}

interface CompiledRoute {
  config: RouteConfig;
  pattern: RegExp;
  paramNames: string[];
}

/**
 * Create a router instance
 */
export const createRouter = (config: RouterConfig) => {
  const { routes, mode = 'hash', base = '', container, beforeEach, afterEach, onError } = config;

  let currentContext: RouteContext | null = null;
  let isNavigating = false;

  // Compile routes into regex patterns
  const compiledRoutes: CompiledRoute[] = routes.map((route) => {
    const paramNames: string[] = [];
    const pattern = route.path
      .replace(/\/:([^/]+)/g, (_, paramName) => {
        paramNames.push(paramName);
        return '/([^/]+)';
      })
      .replace(/\*/g, '.*');

    return {
      config: route,
      pattern: new RegExp(`^${pattern}$`),
      paramNames,
    };
  });

  /**
   * Parse path and extract params
   */
  const matchRoute = (path: string): { route: CompiledRoute; params: RouteParams } | null => {
    for (const route of compiledRoutes) {
      const match = path.match(route.pattern);
      if (match) {
        const params: RouteParams = {};
        route.paramNames.forEach((name, index) => {
          params[name] = match[index + 1];
        });
        return { route, params };
      }
    }
    return null;
  };

  /**
   * Parse query string
   */
  const parseQuery = (search: string): QueryParams => {
    const query: QueryParams = {};
    if (!search) return query;

    const queryString = search.startsWith('?') ? search.slice(1) : search;
    queryString.split('&').forEach((pair) => {
      const [key, value] = pair.split('=');
      if (key) {
        query[decodeURIComponent(key)] = decodeURIComponent(value || '');
      }
    });

    return query;
  };

  /**
   * Get current path based on mode
   */
  const getCurrentPath = (): string => {
    if (mode === 'hash') {
      const hash = window.location.hash.slice(1) || '/';
      return hash.split('?')[0];
    } else {
      let path = window.location.pathname;
      if (base && path.startsWith(base)) {
        path = path.slice(base.length) || '/';
      }
      return path;
    }
  };

  /**
   * Get current query string
   */
  const getCurrentQuery = (): string => {
    if (mode === 'hash') {
      const hash = window.location.hash.slice(1) || '/';
      const queryIndex = hash.indexOf('?');
      return queryIndex > -1 ? hash.slice(queryIndex) : '';
    } else {
      return window.location.search;
    }
  };

  /**
   * Navigate to a path
   */
  const navigate = async (path: string, replace = false): Promise<void> => {
    if (isNavigating) return;

    try {
      isNavigating = true;

      // Parse path and query
      const [pathname, search] = path.split('?');
      const query = parseQuery(search || '');

      // Match route
      const match = matchRoute(pathname);
      if (!match) {
        throw new Error(`No route matched for path: ${pathname}`);
      }

      // Create context
      const context: RouteContext = {
        params: match.params,
        query,
        path: pathname,
        hash: mode === 'hash' ? window.location.hash : '',
      };

      // Run beforeEach guard
      if (beforeEach) {
        const canProceed = await beforeEach(context, currentContext);
        if (!canProceed) {
          isNavigating = false;
          return;
        }
      }

      // Update browser history
      const fullPath = search ? `${pathname}?${search}` : pathname;
      if (mode === 'hash') {
        const url = `#${fullPath}`;
        if (replace) {
          window.location.replace(url);
        } else {
          window.location.hash = fullPath;
        }
      } else {
        const url = base + fullPath;
        if (replace) {
          window.history.replaceState(null, '', url);
        } else {
          window.history.pushState(null, '', url);
        }
      }

      // Execute route handler
      const result = await match.route.config.handler(context);

      // Update container if provided
      if (container && result instanceof HTMLElement) {
        container.innerHTML = '';
        container.appendChild(result);
      }

      // Update current context
      currentContext = context;

      // Run afterEach hook
      if (afterEach) {
        afterEach(context);
      }
    } catch (error) {
      if (onError) {
        onError(error as Error);
      } else {
        console.error('Router error:', error);
      }
    } finally {
      isNavigating = false;
    }
  };

  /**
   * Handle browser navigation events
   */
  const handleNavigation = () => {
    const path = getCurrentPath();
    const query = getCurrentQuery();
    const fullPath = query ? `${path}${query}` : path;
    navigate(fullPath, true);
  };

  /**
   * Start listening to navigation events
   */
  const start = () => {
    if (mode === 'hash') {
      window.addEventListener('hashchange', handleNavigation);
    } else {
      window.addEventListener('popstate', handleNavigation);
    }

    // Handle initial route
    handleNavigation();
  };

  /**
   * Stop listening to navigation events
   */
  const stop = () => {
    if (mode === 'hash') {
      window.removeEventListener('hashchange', handleNavigation);
    } else {
      window.removeEventListener('popstate', handleNavigation);
    }
  };

  /**
   * Navigate back
   */
  const back = () => {
    window.history.back();
  };

  /**
   * Navigate forward
   */
  const forward = () => {
    window.history.forward();
  };

  /**
   * Go to a specific history position
   */
  const go = (delta: number) => {
    window.history.go(delta);
  };

  /**
   * Get current route context
   */
  const current = (): RouteContext | null => {
    return currentContext;
  };

  /**
   * Push a new route
   */
  const push = (path: string) => navigate(path, false);

  /**
   * Replace current route
   */
  const replace = (path: string) => navigate(path, true);

  return {
    start,
    stop,
    push,
    replace,
    back,
    forward,
    go,
    current,
    navigate,
  };
};

/**
 * Create a route link element
 */
export const createLink = (
  href: string,
  content: string | HTMLElement,
  router: ReturnType<typeof createRouter>,
  className?: string
): HTMLElement => {
  const link = document.createElement('a');
  link.href = href;
  if (className) link.className = className;

  if (typeof content === 'string') {
    link.textContent = content;
  } else {
    link.appendChild(content);
  }

  link.addEventListener('click', (e) => {
    e.preventDefault();
    router.push(href);
  });

  return link;
};

/**
 * Lazy load a route handler
 */
export const lazy = (loader: () => Promise<{ default: RouteHandler }>): RouteHandler => {
  return async (ctx: RouteContext) => {
    const module = await loader();
    return module.default(ctx);
  };
};
