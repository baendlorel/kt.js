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

export interface CompiledRoute {
  config: RouteConfig;
  pattern: RegExp;
  paramNames: string[];
}
