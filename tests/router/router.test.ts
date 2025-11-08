import { describe, it, expect, beforeEach, vi } from 'vitest';
import { createRouter } from '../../src/core/router/index.js';

describe('Router', () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    // Reset location hash
    window.location.hash = '';

    // Create a fresh container for each test
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  describe('basic routing', () => {
    it('should navigate to routes', async () => {
      const homeHandler = vi.fn((ctx) => {
        container.innerHTML = '<div id="home">Home Page</div>';
      });

      const router = createRouter({
        routes: [{ path: '/', handler: homeHandler }],
        container,
      });

      await router.start();

      expect(homeHandler).toHaveBeenCalled();
      expect(container.querySelector('#home')).toBeTruthy();
    });

    it('should navigate between routes', async () => {
      const homeHandler = vi.fn(() => {
        container.innerHTML = '<div id="home">Home</div>';
      });
      const aboutHandler = vi.fn(() => {
        container.innerHTML = '<div id="about">About</div>';
      });

      const router = createRouter({
        routes: [
          { path: '/', handler: homeHandler },
          { path: '/about', handler: aboutHandler },
        ],
        container,
      });

      await router.start();
      expect(container.querySelector('#home')).toBeTruthy();

      await router.push('/about');
      expect(aboutHandler).toHaveBeenCalled();
      expect(container.querySelector('#about')).toBeTruthy();
    });
  });

  describe('route parameters', () => {
    it('should extract route parameters', async () => {
      let capturedParams: any = null;

      const router = createRouter({
        routes: [
          {
            path: '/user/:id',
            handler: (ctx) => {
              capturedParams = ctx.params;
              container.innerHTML = `<div id="user">User ${ctx.params.id}</div>`;
            },
          },
        ],
        container,
      });

      await router.push('/user/123');

      expect(capturedParams).toEqual({ id: '123' });
      expect(container.textContent).toContain('User 123');
    });

    it('should support multiple route parameters', async () => {
      let capturedParams: any = null;

      const router = createRouter({
        routes: [
          {
            path: '/post/:category/:id',
            handler: (ctx) => {
              capturedParams = ctx.params;
            },
          },
        ],
        container,
      });

      await router.push('/post/tech/456');

      expect(capturedParams).toEqual({ category: 'tech', id: '456' });
    });
  });

  describe('query parameters', () => {
    it('should parse query parameters', async () => {
      let capturedQuery: any = null;

      const router = createRouter({
        routes: [
          {
            path: '/search',
            handler: (ctx) => {
              capturedQuery = ctx.query;
            },
          },
        ],
        container,
      });

      await router.push('/search?q=test&page=2');

      expect(capturedQuery).toEqual({ q: 'test', page: '2' });
    });

    it('should handle query parameters with route parameters', async () => {
      let capturedContext: any = null;

      const router = createRouter({
        routes: [
          {
            path: '/user/:id',
            handler: (ctx) => {
              capturedContext = ctx;
            },
          },
        ],
        container,
      });

      await router.push('/user/123?tab=profile&lang=en');

      expect(capturedContext.params).toEqual({ id: '123' });
      expect(capturedContext.query).toEqual({ tab: 'profile', lang: 'en' });
    });
  });

  describe('navigation guards', () => {
    it('should call beforeEach guard', async () => {
      const beforeEach = vi.fn(() => true);
      const handler = vi.fn();

      const router = createRouter({
        routes: [{ path: '/', handler }],
        container,
        beforeEach,
      });

      await router.start();

      expect(beforeEach).toHaveBeenCalled();
      expect(handler).toHaveBeenCalled();
    });

    it('should block navigation when guard returns false', async () => {
      const beforeEach = vi.fn(() => false);
      const homeHandler = vi.fn();
      const aboutHandler = vi.fn();

      const router = createRouter({
        routes: [
          { path: '/', handler: homeHandler },
          { path: '/about', handler: aboutHandler },
        ],
        container,
        beforeEach,
      });

      await router.start();
      expect(homeHandler).toHaveBeenCalledTimes(1);

      // Try to navigate, should be blocked
      try {
        await router.push('/about');
      } catch (e) {
        // Navigation should be blocked
      }

      expect(aboutHandler).not.toHaveBeenCalled();
    });

    it('should call afterEach after navigation', async () => {
      const afterEach = vi.fn();
      const handler = vi.fn();

      const router = createRouter({
        routes: [{ path: '/', handler }],
        container,
        afterEach,
      });

      await router.start();

      expect(afterEach).toHaveBeenCalled();
    });

    it('should pass route context to guards', async () => {
      let beforeContext: any = null;
      let afterContext: any = null;

      const router = createRouter({
        routes: [
          {
            path: '/user/:id',
            handler: () => {},
          },
        ],
        container,
        beforeEach: (ctx) => {
          beforeContext = ctx;
          return true;
        },
        afterEach: (ctx) => {
          afterContext = ctx;
        },
      });

      await router.push('/user/123?lang=en');

      expect(beforeContext.params).toEqual({ id: '123' });
      expect(beforeContext.query).toEqual({ lang: 'en' });
      expect(beforeContext.path).toBe('/user/123');

      expect(afterContext.params).toEqual({ id: '123' });
      expect(afterContext.query).toEqual({ lang: 'en' });
    });
  });

  describe('route meta', () => {
    it('should pass meta field to route context', async () => {
      let capturedMeta: any = null;

      const router = createRouter({
        routes: [
          {
            path: '/admin',
            handler: (ctx) => {
              capturedMeta = ctx.meta;
            },
            meta: { requiresAuth: true, title: 'Admin Panel' },
          },
        ],
        container,
      });

      await router.push('/admin');

      expect(capturedMeta).toEqual({ requiresAuth: true, title: 'Admin Panel' });
    });

    it('should access meta in navigation guards', async () => {
      let guardMeta: any = null;

      const router = createRouter({
        routes: [
          {
            path: '/protected',
            handler: () => {},
            meta: { requiresAuth: true },
          },
        ],
        container,
        beforeEach: (ctx) => {
          guardMeta = ctx.meta;
          return true;
        },
      });

      await router.push('/protected');

      expect(guardMeta).toEqual({ requiresAuth: true });
    });
  });

  describe('error handling', () => {
    it('should handle route not found', async () => {
      const onError = vi.fn();

      const router = createRouter({
        routes: [{ path: '/', handler: () => {} }],
        container,
        onError,
      });

      try {
        await router.push('/nonexistent');
      } catch (e) {
        // Expected to throw
      }

      expect(onError).toHaveBeenCalled();
      expect(onError.mock.calls[0][0].message).toContain('Route not found');
    });
  });

  describe('current route', () => {
    it('should get current route context', async () => {
      const router = createRouter({
        routes: [
          {
            path: '/user/:id',
            handler: () => {},
          },
        ],
        container,
      });

      await router.push('/user/456');

      const current = router.current();
      expect(current?.params).toEqual({ id: '456' });
      expect(current?.path).toBe('/user/456');
    });

    it('should return null when no route is active', () => {
      const router = createRouter({
        routes: [{ path: '/', handler: () => {} }],
        container,
      });

      expect(router.current()).toBeNull();
    });
  });
});
