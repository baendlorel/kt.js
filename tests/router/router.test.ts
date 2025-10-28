import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { createRouter } from '../../src/core/router/index.js';
import { div, h1, p } from '../../src/shortcuts/index.js';

describe('Router', () => {
  let container: HTMLElement;

  beforeEach(() => {
    // Create container
    container = document.createElement('div');
    container.id = 'app';
    document.body.appendChild(container);

    // Reset location hash
    window.location.hash = '';
  });

  afterEach(() => {
    // Clean up
    document.body.removeChild(container);
  });

  it('should create a router instance', () => {
    const router = createRouter({
      routes: [
        {
          path: '/',
          handler: () => div({}, 'Home'),
        },
      ],
    });

    expect(router).toBeDefined();
    expect(typeof router.start).toBe('function');
    expect(typeof router.push).toBe('function');
  });

  it('should navigate to routes', async () => {
    const homeHandler = vi.fn(() => div({}, 'Home'));
    const aboutHandler = vi.fn(() => div({}, 'About'));

    const router = createRouter({
      container,
      routes: [
        { path: '/', handler: homeHandler },
        { path: '/about', handler: aboutHandler },
      ],
    });

    router.start();

    // Wait for initial route
    await new Promise((resolve) => setTimeout(resolve, 10));
    expect(homeHandler).toHaveBeenCalled();

    // Navigate to about
    router.push('/about');
    await new Promise((resolve) => setTimeout(resolve, 10));
    expect(aboutHandler).toHaveBeenCalled();
  });

  it('should extract route parameters', async () => {
    let capturedParams: any = null;

    const router = createRouter({
      container,
      routes: [
        {
          path: '/user/:id',
          handler: (ctx) => {
            capturedParams = ctx.params;
            return div({}, `User ${ctx.params.id}`);
          },
        },
      ],
    });

    router.start();
    router.push('/user/123');

    await new Promise((resolve) => setTimeout(resolve, 10));
    expect(capturedParams).toEqual({ id: '123' });
  });

  it('should parse query parameters', async () => {
    let capturedQuery: any = null;

    const router = createRouter({
      container,
      routes: [
        {
          path: '/search',
          handler: (ctx) => {
            capturedQuery = ctx.query;
            return div({}, 'Search');
          },
        },
      ],
    });

    router.start();
    router.push('/search?q=hello&page=2');

    await new Promise((resolve) => setTimeout(resolve, 10));
    expect(capturedQuery).toEqual({ q: 'hello', page: '2' });
  });

  it('should call navigation guards', async () => {
    const beforeEachGuard = vi.fn(() => true);
    const afterEachGuard = vi.fn();

    const router = createRouter({
      container,
      routes: [
        { path: '/', handler: () => div({}, 'Home') },
        { path: '/about', handler: () => div({}, 'About') },
      ],
      beforeEach: beforeEachGuard,
      afterEach: afterEachGuard,
    });

    router.start();
    await new Promise((resolve) => setTimeout(resolve, 10));

    router.push('/about');
    await new Promise((resolve) => setTimeout(resolve, 10));

    expect(beforeEachGuard).toHaveBeenCalled();
    expect(afterEachGuard).toHaveBeenCalled();
  });

  it('should block navigation when guard returns false', async () => {
    const blockedHandler = vi.fn(() => div({}, 'Blocked'));

    const router = createRouter({
      container,
      routes: [
        { path: '/', handler: () => div({}, 'Home') },
        { path: '/blocked', handler: blockedHandler },
      ],
      beforeEach: (to) => {
        return to.path !== '/blocked';
      },
    });

    router.start();
    await new Promise((resolve) => setTimeout(resolve, 10));

    router.push('/blocked');
    await new Promise((resolve) => setTimeout(resolve, 10));

    expect(blockedHandler).not.toHaveBeenCalled();
  });

  it('should handle route not found', async () => {
    const errorHandler = vi.fn();

    const router = createRouter({
      container,
      routes: [{ path: '/', handler: () => div({}, 'Home') }],
      onError: errorHandler,
    });

    router.start();
    router.push('/nonexistent');

    await new Promise((resolve) => setTimeout(resolve, 10));
    expect(errorHandler).toHaveBeenCalled();
  });

  it('should support multiple route parameters', async () => {
    let capturedParams: any = null;

    const router = createRouter({
      container,
      routes: [
        {
          path: '/category/:category/item/:id',
          handler: (ctx) => {
            capturedParams = ctx.params;
            return div({}, 'Item');
          },
        },
      ],
    });

    router.start();
    router.push('/category/books/item/42');

    await new Promise((resolve) => setTimeout(resolve, 10));
    expect(capturedParams).toEqual({ category: 'books', id: '42' });
  });

  it('should get current route context', async () => {
    const router = createRouter({
      container,
      routes: [
        { path: '/', handler: () => div({}, 'Home') },
        { path: '/about', handler: () => div({}, 'About') },
      ],
    });

    router.start();
    await new Promise((resolve) => setTimeout(resolve, 10));

    const current = router.current();
    expect(current).toBeDefined();
    expect(current?.path).toBe('/');

    router.push('/about');
    await new Promise((resolve) => setTimeout(resolve, 10));

    const updated = router.current();
    expect(updated?.path).toBe('/about');
  });
});
