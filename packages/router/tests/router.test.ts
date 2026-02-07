import { describe, it, expect, beforeEach, vi } from 'vitest';
import { createRouter } from '../src/index.js';
import { GuardLevel } from '../src/consts.js';

const component = (textContent: string = '') => {
  const d = document.createElement('div');
  d.textContent = textContent;
  return d;
};

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
    it('should skip global beforeEach guard', () => {
      const beforeEach = vi.fn(() => true);

      const router = createRouter({
        routes: [{ path: '/', name: 'home', component }],
        beforeEach,
      });

      router.silentPush('/');

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
  });
});
