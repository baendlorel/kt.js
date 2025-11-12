import { describe, it, expect, beforeEach, vi } from 'vitest';
import { createRouter } from '../../src/core/router/index.js';
import { div } from '@/index.js';

describe('Router', () => {
  let container: HTMLDivElement;

  beforeEach((testContext) => {
    // Reset location hash
    window.location.hash = '';

    // Create a fresh container for each test
    container = div();
    container.dataset.suite = testContext.task.name;
  });

  describe('basic routing', () => {
    it('should navigate to routes', async () => {
      const homeHandler = vi.fn((ctx) => {
        const el = document.createElement('div');
        el.id = 'home';
        el.textContent = 'Home Page';
        return el;
      });

      const router = createRouter({
        routes: [{ path: '/', handler: homeHandler }],
        container,
      });

      router.start();
      // Wait for async navigation
      await new Promise((resolve) => setTimeout(resolve, 50));

      expect(homeHandler).toHaveBeenCalled();
      expect(container.querySelector('#home')).toBeTruthy();
    });

    it('should navigate between routes', async () => {
      const homeHandler = vi.fn(() => div({ id: 'home' }, 'Home'));
      const aboutHandler = vi.fn(() => div({ id: 'about' }, 'About'));

      const router = createRouter({
        routes: [
          { path: '/', handler: homeHandler },
          { path: '/about', handler: aboutHandler },
        ],
        container,
      });

      await router.start();
      expect(homeHandler).toHaveBeenCalled();
      await new Promise((resolve) => setTimeout(resolve, 500));
      console.log(Array.from(container.querySelectorAll('div')));
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
              const el = document.createElement('div');
              el.id = 'user';
              el.textContent = `User ${ctx.params.id}`;
              return el;
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
              return document.createElement('div');
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
              return document.createElement('div');
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
              return document.createElement('div');
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
      const handler = vi.fn(() => document.createElement('div'));

      const router = createRouter({
        routes: [{ path: '/', handler }],
        container,
        beforeEach,
      });

      router.start();
      await new Promise((resolve) => setTimeout(resolve, 50));

      expect(beforeEach).toHaveBeenCalled();
      expect(handler).toHaveBeenCalled();
    });

    it('should block navigation when guard returns false', async () => {
      let navigationError: Error | null = null;
      const beforeEach = vi.fn(() => false);
      const homeHandler = vi.fn(() => document.createElement('div'));
      const aboutHandler = vi.fn(() => document.createElement('div'));

      const router = createRouter({
        routes: [
          { path: '/', handler: homeHandler },
          { path: '/about', handler: aboutHandler },
        ],
        container,
        beforeEach,
        onError: (e) => {
          navigationError = e;
        },
      });

      router.start();
      await new Promise((resolve) => setTimeout(resolve, 50));
      // First navigation is blocked
      expect(homeHandler).not.toHaveBeenCalled();
      expect(navigationError).toBeTruthy();

      // Try to navigate, should be blocked
      navigationError = null;
      try {
        await router.push('/about');
      } catch (e) {
        // Navigation should be blocked
      }

      expect(aboutHandler).not.toHaveBeenCalled();
      expect(navigationError).toBeTruthy();
    });

    it('should call afterEach after navigation', async () => {
      const afterEach = vi.fn();
      const handler = vi.fn(() => document.createElement('div'));

      const router = createRouter({
        routes: [{ path: '/', handler }],
        container,
        afterEach,
      });

      router.start();
      await new Promise((resolve) => setTimeout(resolve, 50));

      expect(afterEach).toHaveBeenCalled();
    });

    it('should pass route context to guards', async () => {
      let beforeContext: any = null;
      let afterContext: any = null;

      const router = createRouter({
        routes: [
          {
            path: '/user/:id',
            handler: () => document.createElement('div'),
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
              return document.createElement('div');
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
            handler: () => document.createElement('div'),
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
        routes: [{ path: '/', handler: () => document.createElement('div') }],
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
            handler: () => document.createElement('div'),
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
        routes: [{ path: '/', handler: () => document.createElement('div') }],
        container,
      });

      expect(router.current()).toBeNull();
    });
  });
});
