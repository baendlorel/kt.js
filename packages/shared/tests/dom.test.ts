import { describe, it, expect, beforeEach, vi } from 'vitest';
import { $isNode, $parseStyle, $indom } from '../src/utils/dom.js';

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

  describe('$indom', () => {
    it('should return true for nodes in the DOM', () => {
      const div = document.createElement('div');
      const text = document.createTextNode('hello');
      const comment = document.createComment('comment');

      container.appendChild(div);
      container.appendChild(text);
      container.appendChild(comment);

      expect($indom(div)).toBe(true);
      expect($indom(text)).toBe(true);
      expect($indom(comment)).toBe(true);
    });

    it('should return false for nodes not in the DOM', () => {
      const div = document.createElement('div');
      const text = document.createTextNode('hello');
      const comment = document.createComment('comment');

      expect($indom(div)).toBe(false);
      expect($indom(text)).toBe(false);
      expect($indom(comment)).toBe(false);
    });

    it('should return false after node is removed from DOM', () => {
      const div = document.createElement('div');
      container.appendChild(div);

      expect($indom(div)).toBe(true);

      container.removeChild(div);
      expect($indom(div)).toBe(false);
    });

    it('should handle nested elements', () => {
      const parent = document.createElement('div');
      const child = document.createElement('span');
      parent.appendChild(child);
      container.appendChild(parent);

      expect($indom(parent)).toBe(true);
      expect($indom(child)).toBe(true);

      parent.removeChild(child);
      expect($indom(child)).toBe(false);
      expect($indom(parent)).toBe(true);
    });

    it('should work with fragment-detached nodes', () => {
      const fragment = document.createDocumentFragment();
      const div = document.createElement('div');
      fragment.appendChild(div);

      // Node in fragment but not in DOM
      expect($indom(div)).toBe(false);

      // After appending fragment to DOM
      container.appendChild(fragment);
      expect($indom(div)).toBe(true);
    });
  });
});
