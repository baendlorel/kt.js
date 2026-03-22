import { describe, it, expect, beforeEach, vi } from 'vitest';
import { createRouter } from '../src/core/index.js';
import { GuardLevel } from '../src/core/consts.js';

const component = (textContent: string = '') => {
  const d = document.createElement('div');
  d.textContent = textContent;
  return d;
};

const waitForNavigation = () => new Promise((resolve) => setTimeout(resolve, 0));

describe('Router', () => {
  beforeEach(() => {
    window.history.replaceState(null, '', '/');
  });

  describe('basic routing', () => {
    it('should navigate to routes', async () => {
      const router = createRouter({
        routes: [{ path: '/', name: 'home', component }],
      });

      const result = await router.push('/');

      expect(typeof result === 'boolean').toBe(true);
      expect(router.current).toBeTruthy();
      expect(router.current?.path).toBe('/');
    });

    it('should navigate between routes', async () => {
      const router = createRouter({
        routes: [
          { path: '/', name: 'home', component: () => component('Home') },
          { path: '/about', name: 'about', component: () => component('About') },
        ],
      });

      await router.push('/');
      expect(router.current?.name).toBe('home');

      await router.push('/about');
      expect(router.current?.name).toBe('about');
    });

    it('should navigate by route name', async () => {
      const router = createRouter({
        routes: [{ path: '/user/:id', name: 'user', component }],
      });

      const result = await router.push({ name: 'user', params: { id: '123' } });

      expect(result).toBe(true);
      expect(router.current?.name).toBe('user');
      expect(router.current?.params.id).toBe('123');
    });

    it('should allow unnamed routes', async () => {
      const router = createRouter({
        routes: [
          { path: '/', component: () => component('Home') },
          { path: '/about', component: () => component('About') },
        ],
      });

      await router.push('/about');

      expect(router.current?.path).toBe('/about');
      expect(router.current?.name).toBe('');
    });
  });

  describe('route parameters', () => {
    it('should extract route parameters', async () => {
      const router = createRouter({
        routes: [{ path: '/user/:id', name: 'user', component }],
      });

      await router.push('/user/123');

      expect(router.current?.params).toEqual({ id: '123' });
    });

    it('should support multiple route parameters', async () => {
      const router = createRouter({
        routes: [{ path: '/post/:category/:id', name: 'post', component }],
      });

      await router.push('/post/tech/456');

      expect(router.current?.params).toEqual({ category: 'tech', id: '456' });
    });

    it('should keep matched chain limited to declared parents', async () => {
      const router = createRouter({
        routes: [
          { path: '/a', name: 'a', component },
          { path: '/ab', name: 'ab', component },
          {
            path: '/users',
            name: 'users',
            component,
            children: [{ path: ':id', name: 'user-detail', component }],
          },
        ],
      });

      await router.push('/ab');
      expect(router.current?.matched.map((route) => route.path)).toEqual(['/ab']);

      await router.push('/users/123');
      expect(router.current?.matched.map((route) => route.path)).toEqual(['/users', '/users/:id']);
    });
  });

  describe('query parameters', () => {
    it('should parse query parameters', async () => {
      const router = createRouter({
        routes: [{ path: '/search', name: 'search', component }],
      });

      await router.push('/search?q=test&page=2');

      expect(router.current?.query).toEqual({ q: 'test', page: '2' });
    });

    it('should build query string from object', async () => {
      const router = createRouter({
        routes: [{ path: '/search', name: 'search', component }],
      });

      await router.push({ path: '/search', query: { q: 'hello', page: '3' } });

      expect(router.current?.query).toEqual({ q: 'hello', page: '3' });
    });
  });

  describe('navigation guards', () => {
    it('should call beforeEach guard', async () => {
      const beforeEach = vi.fn(() => true);

      const router = createRouter({
        routes: [{ path: '/', name: 'home', component }],
        beforeEach,
      });

      await router.push('/');

      expect(beforeEach).toHaveBeenCalled();
    });

    it('should block navigation when guard returns false', async () => {
      const beforeEach = vi.fn(() => false);

      const router = createRouter({
        routes: [{ path: '/', name: 'home', component }],
        beforeEach,
      });

      const result = await router.push('/');

      expect(result).toBe(false);
      expect(router.current).toBeNull();
    });

    it('should call afterEach after navigation', async () => {
      const afterEach = vi.fn();

      const router = createRouter({
        routes: [{ path: '/', name: 'home', component }],
        afterEach,
      });

      await router.push('/');

      expect(afterEach).toHaveBeenCalled();
    });
  });

  describe('silentPush', () => {
    it('should skip global beforeEach guard', async () => {
      const beforeEach = vi.fn(() => true);

      const router = createRouter({
        routes: [{ path: '/', name: 'home', component }],
        beforeEach,
      });

      await router.silentPush('/');

      expect(beforeEach).not.toHaveBeenCalled();
      expect(router.current?.path).toBe('/');
    });
  });

  describe('error handling', () => {
    it('should call onNotFound when route not found', async () => {
      const onNotFound = vi.fn();

      const router = createRouter({
        routes: [{ path: '/', name: 'home', component }],
        onNotFound,
      });

      const result = await router.push('/nonexistent');

      expect(result).toBe(false);
      expect(onNotFound).toHaveBeenCalledWith('/nonexistent');
    });

    it('should call onError when navigation fails', async () => {
      const onError = vi.fn();

      const router = createRouter({
        routes: [{ path: '/', name: 'home', component }],
        onError,
      });

      await router.push({});

      expect(onError).toHaveBeenCalled();
    });

    it('should report after hook errors via onError', async () => {
      const onError = vi.fn();

      const router = createRouter({
        routes: [
          {
            path: '/',
            name: 'home',
            after: async () => {
              throw new Error('after failed');
            },
            component,
          },
        ],
        onError,
      });

      await router.push('/');
      await waitForNavigation();

      expect(onError).toHaveBeenCalledWith(expect.objectContaining({ message: 'after failed' }), expect.any(Object));
    });
  });

  describe('hash navigation', () => {
    it('should apply guards on hashchange', async () => {
      const beforeEach = vi.fn((to: { path: string }) => to.path !== '/blocked');

      const router = createRouter({
        routes: [
          { path: '/', name: 'home', component },
          { path: '/blocked', name: 'blocked', component },
        ],
        beforeEach,
      });

      await router.push('/');
      window.location.hash = '/blocked';
      await waitForNavigation();
      await waitForNavigation();

      expect(beforeEach).toHaveBeenCalledWith(expect.objectContaining({ path: '/blocked' }), expect.anything());
      expect(router.current?.path).toBe('/');
      expect(window.location.hash).not.toBe('#/blocked');
    });

    it('should update query when only hash query changes', async () => {
      const router = createRouter({
        routes: [{ path: '/search', name: 'search', component }],
      });

      await router.push('/search?q=1');
      window.location.hash = '/search?q=2';
      await waitForNavigation();

      expect(router.current?.query).toEqual({ q: '2' });
    });
  });

  describe('NavigateOptions with flags', () => {
    it('should support GuardLevel flag in push', async () => {
      const beforeEach = vi.fn(() => true);
      const beforeEnter = vi.fn(() => true);

      const router = createRouter({
        routes: [{ path: '/', name: 'home', beforeEnter, component }],
        beforeEach,
      });

      await router.push({ path: '/', guardLevel: GuardLevel.Route });

      expect(beforeEach).not.toHaveBeenCalled();
      expect(beforeEnter).toHaveBeenCalled();
      expect(router.current?.path).toBe('/');
    });

    it('should support GuardLevel.None to skip all guards', async () => {
      const beforeEach = vi.fn(() => true);
      const beforeEnter = vi.fn(() => true);

      const router = createRouter({
        routes: [{ path: '/', name: 'home', beforeEnter, component }],
        beforeEach,
      });

      await router.push({ path: '/', guardLevel: GuardLevel.None });

      expect(beforeEach).not.toHaveBeenCalled();
      expect(beforeEnter).not.toHaveBeenCalled();
      expect(router.current?.path).toBe('/');
    });

    it('should support replace flag in push', async () => {
      const router = createRouter({
        routes: [
          { path: '/', name: 'home', component: () => component('Home') },
          { path: '/about', name: 'about', component: () => component('About') },
        ],
      });

      await router.push('/');
      await router.push({ path: '/about', replace: true });
      expect(router.current?.name).toBe('about');
    });

    it('should apply prefix to path navigation', async () => {
      const router = createRouter({
        prefix: '/app',
        routes: [{ path: '/home', name: 'home', component }],
      });

      const result = await router.push('/home');

      expect(result).toBe(true);
      expect(router.current?.path).toBe('/app/home');
    });
  });
});
