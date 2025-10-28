// Minimal router types

export interface RouteContext {
  params: Record<string, string>;
  query: Record<string, string>;
  path: string;
  meta?: Record<string, any>;
}

export type RouteHandler = (ctx: RouteContext) => HTMLElement | void | Promise<HTMLElement | void>;

export interface RouteConfig {
  path: string;
  handler: RouteHandler;
  meta?: Record<string, any>;
}

export interface RouterConfig {
  routes: RouteConfig[];
  container?: HTMLElement;
  beforeEach?: (to: RouteContext, from: RouteContext | null) => boolean | Promise<boolean>;
  afterEach?: (to: RouteContext) => void;
  onError?: (error: Error) => void;
}
