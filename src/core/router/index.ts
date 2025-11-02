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
    for (let i = 0; i < compiled.length; i++) {
      const route = compiled[i].route;
      const pattern = compiled[i].pattern;
      const names = compiled[i].names;
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
    // 总是返回 Promise 以保持一致的 await 行为
    // 假设 Promise 存在（需要在 IE11 中 polyfill）
    return new Promise(function (resolve) {
      try {
        const splitPath = path.split('?');
        const pathname = splitPath[0];
        const search = splitPath[1];
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
            resolve(undefined);
            return;
          }

          // Update URL
          window.location.hash = search ? `${pathname}?${search}` : pathname;

          // Execute handler
          const rawResult = matched.route.handler(ctx);

          if (rawResult instanceof Promise) {
            rawResult
              .then(function (result) {
                routeHandler(result);
                resolve(undefined);
              })
              .catch(onError);
          } else {
            routeHandler(rawResult);
            resolve(undefined);
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
          ok.then(okHandler).catch(onError);
        } else {
          okHandler(ok);
        }
      } catch (error) {
        onError(error);
      }
    });
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
