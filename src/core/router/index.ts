import { RouterConfig, RouteContext } from '@/types/router.js';

function emptyFunc() {
  return true;
}

// todo promise要polyfill
export function createRouter(config: RouterConfig) {
  const routes = config.routes;
  const container = config.container;
  const beforeEach = config.beforeEach || emptyFunc;
  const afterEach = config.afterEach || emptyFunc;
  const onError = config.onError || console.error;

  let current: RouteContext | null = null;

  // Compile routes to regex patterns
  const compiled = routes.map(function (route) {
    const names: string[] = [];
    const pattern = route.path.replace(/\/:([^/]+)/g, function (_, name) {
      names.push(name);
      return '/([^/]+)';
    });
    return { route, pattern: new RegExp(`^${pattern}$`), names };
  });

  // Match path and extract params
  const match = function (path: string) {
    for (const { route, pattern, names } of compiled) {
      const m = path.match(pattern);
      if (m) {
        const params: Record<string, string> = {};
        for (let i = 0; i < names.length; i++) {
          params[names[i]] = m[i + 1];
        }
        return { route, params };
      }
    }
    return null;
  };

  // Parse query string
  const parseQuery = function (search: string) {
    const query: Record<string, string> = {};
    if (!search) {
      return query;
    }
    const qs = search.indexOf('?') === 0 ? search.slice(1) : search;
    const pairs = qs.split('&');
    for (let i = 0; i < pairs.length; i++) {
      const pair = pairs[i].split('=');
      const k = pair[0];
      if (k) {
        query[decodeURIComponent(k)] = decodeURIComponent(pair[1] || '');
      }
    }
    return query;
  };

  // Navigate to path
  const navigate = function (path: string) {
    try {
      const [pathname, search] = path.split('?');
      const query = parseQuery(search || '');
      const matched = match(pathname);

      if (!matched) {
        throw new Error(`Route not found: ${pathname}`);
      }

      const ctx: RouteContext = { params: matched.params, query, path: pathname, meta: matched.route.meta };

      // Run guard
      const ok = beforeEach(ctx, current);
      const okHandler = function (ok: boolean) {
        if (!ok) {
          return;
        }

        // Update URL
        window.location.hash = search ? `${pathname}?${search}` : pathname;

        // Execute handler
        const rawResult = matched.route.handler(ctx);

        if (rawResult instanceof Promise) {
          return rawResult.then(routeHandler).catch(onError);
        } else {
          return routeHandler(rawResult);
        }
      };
      const routeHandler = function (result: HTMLElement | void) {
        // Update container
        if (container && result) {
          container.innerHTML = '';
          container.appendChild(result);
        }

        current = ctx;

        // Run afterEach
        afterEach(ctx);
      };

      if (ok instanceof Promise) {
        return ok.then(okHandler).catch(onError);
      } else {
        return okHandler(ok);
      }
    } catch (error) {
      onError(error as Error);
    }
  };

  // Handle hash change
  const handle = function () {
    const hash = window.location.hash.slice(1) || '/';
    navigate(hash);
  };

  // Start router
  const start = function () {
    window.addEventListener('hashchange', handle);
    handle();
  };

  // Stop router
  const stop = function () {
    return window.removeEventListener('hashchange', handle);
  };

  // Push new route
  const push = function (path: string) {
    return navigate(path);
  };

  // Get current context
  const getCurrentContext = function () {
    return current;
  };

  return { start, stop, push, current: getCurrentContext };
}
