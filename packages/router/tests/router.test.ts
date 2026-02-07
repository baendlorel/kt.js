import { describe, it, expect, beforeEach, vi } from 'vitest';
import { createRouter } from '../src/index.js';
import { GuardLevel } from '../src/consts.js';

describe('Router', () => {
  beforeEach(() => {
    window.history.replaceState(null, '', '/');
  });

  describe('basic routing', () => {
    it('should navigate to routes', async () => {
      const router = createRouter({
        routes: [{ path: '/', name: 'home' }],
      });

      const result = await router.push('/');

      expect(typeof result === 'boolean').toBe(true);
      expect(router.current).toBeTruthy();
      expect(router.current?.path).toBe('/');
    });

    it('should navigate between routes', () => {
      const router = createRouter({
        routes: [
          { path: '/', name: 'home' },
          { path: '/about', name: 'about' },
        ],
      });

      router.push('/');
      expect(router.current?.name).toBe('home');

      router.push('/about');
      expect(router.current?.name).toBe('about');
    });

    it('should navigate by route name', () => {
      const router = createRouter({
        routes: [{ path: '/user/:id', name: 'user' }],
      });

      const result = router.push({ name: 'user', params: { id: '123' } });

      expect(result).toBe(true);
      expect(router.current?.name).toBe('user');
      expect(router.current?.params.id).toBe('123');
    });
  });

  describe('route parameters', () => {
    it('should extract route parameters', () => {
      const router = createRouter({
        routes: [{ path: '/user/:id', name: 'user' }],
      });

      router.push('/user/123');

      expect(router.current?.params).toEqual({ id: '123' });
    });

    it('should support multiple route parameters', () => {
      const router = createRouter({
        routes: [{ path: '/post/:category/:id', name: 'post' }],
      });

      router.push('/post/tech/456');

      expect(router.current?.params).toEqual({ category: 'tech', id: '456' });
    });
  });

  describe('query parameters', () => {
    it('should parse query parameters', () => {
      const router = createRouter({
        routes: [{ path: '/search', name: 'search' }],
      });

      router.push('/search?q=test&page=2');

      expect(router.current?.query).toEqual({ q: 'test', page: '2' });
    });

    it('should build query string from object', () => {
      const router = createRouter({
        routes: [{ path: '/search', name: 'search' }],
      });

      router.push({ path: '/search', query: { q: 'hello', page: '3' } });

      expect(router.current?.query).toEqual({ q: 'hello', page: '3' });
    });
  });

  describe('navigation guards', () => {
    it('should call beforeEach guard', () => {
      const beforeEach = vi.fn(() => true);

      const router = createRouter({
        routes: [{ path: '/', name: 'home' }],
        beforeEach,
      });

      router.push('/');

      expect(beforeEach).toHaveBeenCalled();
    });

    it('should block navigation when guard returns false', () => {
      const beforeEach = vi.fn(() => false);

      const router = createRouter({
        routes: [{ path: '/', name: 'home' }],
        beforeEach,
      });

      const result = router.push('/');

      expect(result).toBe(false);
      expect(router.current).toBeNull();
    });

    it('should call afterEach after navigation', () => {
      const afterEach = vi.fn();

      const router = createRouter({
        routes: [{ path: '/', name: 'home' }],
        afterEach,
      });

      router.push('/');

      expect(afterEach).toHaveBeenCalled();
    });
  });

  describe('silentPush', () => {
    it('should skip global beforeEach guard', () => {
      const beforeEach = vi.fn(() => true);

      const router = createRouter({
        routes: [{ path: '/', name: 'home' }],
        beforeEach,
      });

      router.silentPush('/');

      expect(beforeEach).not.toHaveBeenCalled();
      expect(router.current?.path).toBe('/');
    });
  });

  describe('error handling', () => {
    it('should call onNotFound when route not found', () => {
      const onNotFound = vi.fn();

      const router = createRouter({
        routes: [{ path: '/', name: 'home' }],
        onNotFound,
      });

      const result = router.push('/nonexistent');

      expect(result).toBe(false);
      expect(onNotFound).toHaveBeenCalledWith('/nonexistent');
    });

    it('should call onError when navigation fails', () => {
      const onError = vi.fn();

      const router = createRouter({
        routes: [{ path: '/', name: 'home' }],
        onError,
      });

      router.push({});

      expect(onError).toHaveBeenCalled();
    });
  });

  describe('NavigateOptions with flags', () => {
    it('should support GuardLevel flag in push', () => {
      const beforeEach = vi.fn(() => true);
      const beforeEnter = vi.fn(() => true);

      const router = createRouter({
        routes: [{ path: '/', name: 'home', beforeEnter }],
        beforeEach,
      });

      router.push({ path: '/', guardLevel: GuardLevel.Route });

      expect(beforeEach).not.toHaveBeenCalled();
      expect(beforeEnter).toHaveBeenCalled();
      expect(router.current?.path).toBe('/');
    });

    it('should support GuardLevel.None to skip all guards', () => {
      const beforeEach = vi.fn(() => true);
      const beforeEnter = vi.fn(() => true);

      const router = createRouter({
        routes: [{ path: '/', name: 'home', beforeEnter }],
        beforeEach,
      });

      router.push({ path: '/', guardLevel: GuardLevel.None });

      expect(beforeEach).not.toHaveBeenCalled();
      expect(beforeEnter).not.toHaveBeenCalled();
      expect(router.current?.path).toBe('/');
    });

    it('should support replace flag in push', () => {
      const router = createRouter({
        routes: [
          { path: '/', name: 'home' },
          { path: '/about', name: 'about' },
        ],
      });

      router.push('/');
      router.push({ path: '/about', replace: true });
      expect(router.current?.name).toBe('about');
    });
  });
});
