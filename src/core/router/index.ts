import { RouterConfig, RouteContext } from '@/types/router.js';

const emptyFunc = () => true;

// todo promise要polyfill
export function createRouter(config: RouterConfig) {
  const { routes, container, beforeEach = emptyFunc, afterEach = emptyFunc, onError = console.error } = config;

  let current: RouteContext | null = null;

  // Compile routes to regex patterns
  const compiled = routes.map((route) => {
    const names: string[] = [];
    const pattern = route.path.replace(/\/:([^/]+)/g, (_, name) => {
      names.push(name);
      return '/([^/]+)';
    });
    return { route, pattern: new RegExp(`^${pattern}$`), names };
  });

  // Match path and extract params
  const match = (path: string) => {
    for (let i = 0; i < compiled.length; i++) {
      const { route, pattern, names } = compiled[i];
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
  const parseQuery = (search: string) => {
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
  const navigate = (path: string) => {
    // 总是返回 Promise 以保持一致的 await 行为
    // 假设 Promise 存在（需要在 IE11 中 polyfill）
    return new Promise((resolve) => {
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
        const okHandler = (ok: boolean) => {
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
              .then((result) => {
                routeHandler(result);
                resolve(undefined);
              })
              .catch(onError);
          } else {
            routeHandler(rawResult);
            resolve(undefined);
          }
        };
        const routeHandler = (result: HTMLElement | void) => {
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
  const handle = () => navigate(window.location.hash.slice(1) || '/');
  // Start router
  const start = () => {
    window.addEventListener('hashchange', handle);
    handle();
  };

  // Stop router
  const stop = () => window.removeEventListener('hashchange', handle);

  // Push new route
  const push = (path: string) => navigate(path);

  // Get current context
  const getCurrentContext = () => current;

  return { start, stop, push, current: getCurrentContext };
}
