import { describe, it, expect, beforeEach, vi } from 'vitest';
import { $isNode, $parseStyle } from '../src/utils/dom.js';

describe('DOM utilities', () => {
  let container: HTMLElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  describe('$isNode', () => {
    it('should return true for DOM nodes', () => {
      const div = document.createElement('div');
      const text = document.createTextNode('hello');
      const comment = document.createComment('comment');
      expect($isNode(div)).toBe(true);
      expect($isNode(text)).toBe(true);
      expect($isNode(comment)).toBe(true);
    });

    it('should return false for non-nodes', () => {
      expect($isNode({})).toBe(false);
      expect($isNode('string')).toBe(false);
      expect($isNode(null)).toBe(false);
      expect($isNode(undefined)).toBe(false);
      expect($isNode(123)).toBe(false);
    });
  });

  describe('$parseStyle', () => {
    it('should return empty string for falsy input', () => {
      expect($parseStyle('')).toBe('');
      expect($parseStyle(null)).toBe('');
      expect($parseStyle(undefined)).toBe('');
      expect($parseStyle(false)).toBe('');
    });

    it('should return string as-is', () => {
      expect($parseStyle('color: red; font-size: 12px')).toBe('color: red; font-size: 12px');
    });

    it('should convert object to CSS string', () => {
      expect($parseStyle({ color: 'red', fontSize: '12px' })).toBe('color:red;font-size:12px');
      expect($parseStyle({ backgroundColor: '#fff' })).toBe('background-color:#fff');
    });

    it('should handle Reactive objects (isKT flag)', () => {
      const reactive = { isKT: true, value: { color: 'blue' } };
      expect($parseStyle(reactive)).toBe('color:blue');
      const reactiveString = { isKT: true, value: 'color: green' };
      expect($parseStyle(reactiveString)).toBe('color: green');
    });
  });
});
