import { RouterConfig, RouteContext } from '@/types/router.js';

export const createRouter = (config: RouterConfig) => {
  const { routes, container, beforeEach, afterEach, onError } = config;
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
    for (const { route, pattern, names } of compiled) {
      const m = path.match(pattern);
      if (m) {
        const params: Record<string, string> = {};
        names.forEach((name, i) => (params[name] = m[i + 1]));
        return { route, params };
      }
    }
    return null;
  };

  // Parse query string
  const parseQuery = (search: string) => {
    const query: Record<string, string> = {};
    if (!search) return query;
    const qs = search.startsWith('?') ? search.slice(1) : search;
    qs.split('&').forEach((pair) => {
      const [k, v] = pair.split('=');
      if (k) query[decodeURIComponent(k)] = decodeURIComponent(v || '');
    });
    return query;
  };

  // Navigate to path
  const navigate = async (path: string) => {
    try {
      const [pathname, search] = path.split('?');
      const query = parseQuery(search || '');
      const matched = match(pathname);

      if (!matched) {
        throw new Error(`Route not found: ${pathname}`);
      }

      const ctx: RouteContext = { params: matched.params, query, path: pathname, meta: matched.route.meta };

      // Run guard
      if (beforeEach) {
        const ok = await beforeEach(ctx, current);
        if (!ok) return;
      }

      // Update URL
      window.location.hash = search ? `${pathname}?${search}` : pathname;

      // Execute handler
      const result = await matched.route.handler(ctx);

      // Update container
      if (container && result) {
        container.innerHTML = '';
        container.appendChild(result);
      }

      current = ctx;

      // Run afterEach
      if (afterEach) afterEach(ctx);
    } catch (error) {
      if (onError) {
        onError(error as Error);
      } else {
        console.error(error);
      }
    }
  };

  // Handle hash change
  const handle = () => {
    const hash = window.location.hash.slice(1) || '/';
    navigate(hash);
  };

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
};
