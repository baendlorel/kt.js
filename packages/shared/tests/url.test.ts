import { describe, it, expect } from 'vitest';
import {
  normalizePath,
  parseQuery,
  buildQuery,
  emplaceParams,
  extractParams,
} from '../src/utils/url.js';

describe('URL utilities', () => {
  describe('normalizePath', () => {
    it('should join path parts with leading slash', () => {
      expect(normalizePath('user', 'profile')).toBe('/user/profile');
      expect(normalizePath('/user', 'profile/')).toBe('/user/profile');
      expect(normalizePath('user/', '/profile')).toBe('/user/profile');
      expect(normalizePath('user', '', 'profile')).toBe('/user/profile');
    });

    it('should handle single part', () => {
      expect(normalizePath('user')).toBe('/user');
      expect(normalizePath('/user')).toBe('/user');
      expect(normalizePath('')).toBe('/');
    });
  });

  describe('parseQuery', () => {
    it('should parse query string to object', () => {
      expect(parseQuery('?name=john&age=25')).toEqual({ name: 'john', age: '25' });
      expect(parseQuery('name=john&age=25')).toEqual({ name: 'john', age: '25' });
      expect(parseQuery('?single')).toEqual({ single: '' });
      expect(parseQuery('?')).toEqual({});
      expect(parseQuery('')).toEqual({});
    });

    it('should decode URL encoded values', () => {
      expect(parseQuery('?name=john%20doe&city=new%20york')).toEqual({
        name: 'john doe',
        city: 'new york',
      });
    });
  });

  describe('buildQuery', () => {
    it('should build query string from object', () => {
      expect(buildQuery({ name: 'john', age: '25' })).toBe('?name=john&age=25');
      expect(buildQuery({ single: '' })).toBe('?single=');
      expect(buildQuery({})).toBe('');
    });

    it('should encode URL unsafe characters', () => {
      expect(buildQuery({ name: 'john doe', city: 'new york' })).toBe('?name=john%20doe&city=new%20york');
    });
  });

  describe('emplaceParams', () => {
    it('should substitute params into path pattern', () => {
      expect(emplaceParams('/user/:id', { id: '123' })).toBe('/user/123');
      expect(emplaceParams('/post/:slug/comments/:commentId', {
        slug: 'hello-world',
        commentId: '456',
      })).toBe('/post/hello-world/comments/456');
      expect(emplaceParams('/static/path', {})).toBe('/static/path');
    });
  });

  describe('extractParams', () => {
    it('should extract params from path using pattern', () => {
      expect(extractParams('/user/:id', '/user/123')).toEqual({ id: '123' });
      expect(extractParams('/post/:slug/comments/:commentId', '/post/hello/comments/456')).toEqual({
        slug: 'hello',
        commentId: '456',
      });
    });

    it('should return null if pattern does not match', () => {
      expect(extractParams('/user/:id', '/user')).toBe(null);
      expect(extractParams('/user/:id', '/user/123/extra')).toBe(null);
      expect(extractParams('/user/:id', '/profile/123')).toBe(null);
    });

    it('should handle static paths', () => {
      expect(extractParams('/about', '/about')).toEqual({});
      expect(extractParams('/about', '/about-us')).toBe(null);
    });
  });
});