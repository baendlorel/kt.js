/**
 * Silent level for navigation guards
 */
export const enum SilentLevel {
  /** Execute all guards */
  None = 0,
  /** Skip global beforeEach guard */
  Global = 1,
  /** Skip both global and route-level guards */
  All = 2,
}

/**
 * Route configuration for defining application routes
 */
export interface RouteConfig {
  /** Route path pattern (e.g., '/user/:id') */
  path: string;
  /** Optional unique route name for named navigation */
  name?: string;
  /** Optional metadata attached to the route */
  meta?: Record<string, any>;
  /** Route-level guard executed before entering this route */
  beforeEnter?: (context: RouteContext) => boolean | void;
  /** Route-level hook executed after navigation */
  after?: (context: RouteContext) => void;
  /** Nested child routes */
  children?: RouteConfig[];
}

/**
 * Current route context information
 */
export interface RouteContext {
  /** Full matched path */
  path: string;
  /** Route name if defined */
  name?: string;
  /** Dynamic parameters extracted from path */
  params: Record<string, string>;
  /** Query string parameters */
  query: Record<string, string>;
  /** Route metadata */
  meta: Record<string, any>;
  /** Array of matched route configs (for nested routes) */
  matched: RouteConfig[];
}

/**
 * Base navigation options containing target information
 */
export interface NavigateBaseOptions {
  /** Target path (alternative to name) */
  path?: string;
  /** Target route name (alternative to path) */
  name?: string;
  /** Parameters to substitute in path */
  params?: Record<string, string>;
  /** Query parameters to append */
  query?: Record<string, string>;
}

/**
 * Complete navigation options including control flags
 */
export interface NavigateOptions extends NavigateBaseOptions {
  /** Silent level: 0=none, 1=skip global guards, 2=skip all guards */
  silentLevel?: SilentLevel;
  /** Replace current history entry instead of pushing */
  replace?: boolean;
}

/**
 * Router configuration
 */
export interface RouterConfig {
  /** Array of route definitions */
  routes: RouteConfig[];
  /** Global guard executed before each navigation (except silentPush) */
  beforeEach?: (to: RouteContext, from: RouteContext | null) => boolean | void;
  /** Global hook executed after each navigation */
  afterEach?: (to: RouteContext, from: RouteContext | null) => void;
  /** Handler for 404 errors - return false to prevent default behavior */
  onNotFound?: (path: string) => void | false;
  /** Handler for routing errors */
  onError?: (error: Error, route?: RouteConfig) => void;

  // # options
  /**
   * Default is `true`
   * - only when this equals `false` will activate sync guards
   */
  asyncGuards?: boolean;
}

/**
 * Router instance
 */
export interface Router {
  /** Current active route context */
  current: RouteContext | null;
  /** Navigation history */
  history: RouteContext[];
  /** Navigate with guards */
  push(location: string | NavigateOptions): boolean;
  /** Navigate without beforeEach guard */
  silentPush(location: string | NavigateOptions): boolean;
  /** Replace current history entry */
  replace(location: string | NavigateOptions): boolean;
  /** Navigate back in history */
  back(): void;
  /** Navigate forward in history */
  forward(): void;
}

export interface RouteMatch {
  route: RouteConfig;
  params: Record<string, string>;
  matched: RouteConfig[];
}
