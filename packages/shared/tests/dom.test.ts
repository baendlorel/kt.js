import { describe, it, expect, beforeEach, vi } from 'vitest';
import { $isNode, $parseStyle, $applyModel } from '../src/utils/dom.js';

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

  describe('$applyModel', () => {
    it('should bind input value and change events', () => {
      const input = document.createElement('input');
      const valueRef = { value: 'initial', addOnChange: vi.fn() };
      const onChangeMock = vi.fn();
      valueRef.addOnChange.mockImplementation((fn) => {
        // Simulate storing the callback
        onChangeMock.mockImplementation(fn);
      });

      $applyModel(input, valueRef, 'value', 'input');

      expect(input.value).toBe('initial');
      expect(valueRef.addOnChange).toHaveBeenCalledTimes(1);

      // Simulate ref value change
      onChangeMock('new value');
      expect(input.value).toBe('new value');

      // Simulate user input
      input.value = 'user typed';
      input.dispatchEvent(new Event('input'));
      expect(valueRef.value).toBe('user typed');
    });

    it('should bind checkbox checked and change events', () => {
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      const valueRef = { value: false, addOnChange: vi.fn() };
      const onChangeMock = vi.fn();
      valueRef.addOnChange.mockImplementation((fn) => {
        onChangeMock.mockImplementation(fn);
      });

      $applyModel(checkbox, valueRef, 'checked', 'change');

      expect(checkbox.checked).toBe(false);
      expect(valueRef.addOnChange).toHaveBeenCalledTimes(1);

      onChangeMock(true);
      expect(checkbox.checked).toBe(true);

      checkbox.checked = false;
      checkbox.dispatchEvent(new Event('change'));
      expect(valueRef.value).toBe(false);
    });
  });
});
