import type { Router } from './types/router.js';

/**
 * Create a router view container that automatically renders route components
 */
export function KTRouter({ router }: { router: Router }): JSX.Element {
  const view = document.createElement('kt-router-view');
  router.setRouterView(view);
  return view as JSX.Element;
}
