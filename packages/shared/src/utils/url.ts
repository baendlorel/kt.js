/**
 * Normalize path by joining parts and ensuring leading slash
 */
export const normalizePath = (...paths: string[]) => {
  const p = paths
    .map((p) => p.split('/'))
    .flat()
    .filter(Boolean);
  return '/' + p.join('/');
};

/**
 * Parse query string into object
 */
export const parseQuery = (queryString: string): Record<string, string> => {
  const query: Record<string, string> = {};
  if (!queryString || queryString === '?') {
    return query;
  }

  const params = queryString.replace(/^\?/, '').split('&');
  for (const param of params) {
    const [key, value] = param.split('=');
    if (key) {
      query[decodeURIComponent(key)] = value ? decodeURIComponent(value) : '';
    }
  }
  return query;
};

/**
 * Build query string from object
 */
export const buildQuery = (query: Record<string, string>): string => {
  const keys = Object.keys(query);
  if (keys.length === 0) return '';

  const params = keys.map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`).join('&');
  return `?${params}`;
};

/**
 * Substitute params into path pattern
 * @example '/user/:id' + {id: '123'} => '/user/123'
 */
export const emplaceParams = (path: string, params: Record<string, string>): string => {
  let result = path;
  for (const key in params) {
    result = result.replace(`:${key}`, params[key]);
  }
  return result;
};

/**
 * Extract dynamic params from path using pattern
 * @example pattern: '/user/:id', path: '/user/123' => {id: '123'}
 */
export const extractParams = (pattern: string, path: string): Record<string, string> | null => {
  const params: Record<string, string> = {};
  const patternParts = pattern.split('/');
  const pathParts = path.split('/');

  if (patternParts.length !== pathParts.length) {
    return null;
  }

  for (let i = 0; i < patternParts.length; i++) {
    const patternPart = patternParts[i];
    const pathPart = pathParts[i];

    if (patternPart.startsWith(':')) {
      const paramName = patternPart.slice(1);
      params[paramName] = pathPart;
    } else if (patternPart !== pathPart) {
      return null;
    }
  }

  return params;
};
