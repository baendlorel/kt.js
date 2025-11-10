import { RouterConfig, RouteContext } from '@/types/router.js';

const emptyFunc = () => true;

// fixme 大概知道router通不过测试的原因了。这可能是需要router在push的时候和内部naviage的时候要带有不同的标记，就像不致死标记、生命移除标记来避免无限循环
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

  // Navigate to path - use Promise version if available, otherwise sync version
  const navigate =
    typeof Promise !== 'undefined'
      ? (opts: { path: string; internal: boolean }): Promise<void> => {
          const [pathname, search] = opts.path.split('?');
          const query = parseQuery(search || '');
          const matched = match(pathname);

          if (!matched) {
            const e = new Error(`Route not found: ${pathname}`);
            onError(e);
            return Promise.reject(e);
          }

          const ctx: RouteContext = { params: matched.params, query, path: pathname, meta: matched.route.meta };

          // Run guard
          const handleCatched = (e: Error) => onError(e); //  (onError(e), Promise.reject(e));
          return Promise.resolve(beforeEach(ctx, current))
            .then((ok) => {
              if (!ok) {
                return Promise.reject(new Error('Navigation blocked by guard'));
              }

              // Update URL
              window.location.hash = search ? `${pathname}?${search}` : pathname;

              // Execute handler
              return matched.route.handler(ctx);
            }, handleCatched)
            .then((result) => {
              // Update container
              if (container && result) {
                container.innerHTML = '';
                container.appendChild(result);
              }

              // Run afterEach
              afterEach((current = ctx));
            }, handleCatched);
        }
      : (opts: { path: string; internal: boolean }): void => {
          const [pathname, search] = opts.path.split('?');
          const query = parseQuery(search || '');
          const matched = match(pathname);

          if (!matched) {
            onError(new Error(`Route not found: ${pathname}`));
            return;
          }

          const ctx: RouteContext = { params: matched.params, query, path: pathname, meta: matched.route.meta };
          // todo   这一行以上的部分，异步和非异步版本相同，考虑归并

          try {
            const ok = beforeEach(ctx, current);
            if (!ok) {
              return;
            }

            // Update URL
            window.location.hash = search ? `${pathname}?${search}` : pathname;

            // Execute handler (must be sync)
            const result = matched.route.handler(ctx);

            // Update container (only if not Promise)
            if (container && result && typeof (result as any).then !== 'function') {
              container.innerHTML = '';
              container.appendChild(result as HTMLElement);
            }

            // Run afterEach
            afterEach((current = ctx));
          } catch (e) {
            onError(e as Error);
          }
        };

  // Handle hash change
  const handle = () => navigate({ path: window.location.hash.slice(1) || '/', internal: true });

  // Start router
  const start = () => {
    window.addEventListener('hashchange', handle);
    return handle();
  };

  // Stop router
  const stop = () => window.removeEventListener('hashchange', handle);

  // Push new route
  const push = (path: string) => navigate({ path, internal: false });

  // Get current context
  const getCurrentContext = () => current;

  return { start, stop, push, current: getCurrentContext };
}
