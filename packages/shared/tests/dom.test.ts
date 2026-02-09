import { describe, it, expect, beforeEach, vi } from 'vitest';
import {
  $isNode,
  $replaceNode,
  $appendChild,
  $append,
  $buttonDisabledGetter,
  $buttonDisabledSetter,
  $parseStyle,
  $applyModel,
} from '../src/utils/dom.js';

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

  describe('$replaceNode', () => {
    it('should replace old node with new node', () => {
      const oldNode = document.createElement('div');
      oldNode.textContent = 'old';
      const newNode = document.createElement('span');
      newNode.textContent = 'new';
      container.appendChild(oldNode);
      $replaceNode(oldNode, newNode);
      expect(container.contains(oldNode)).toBe(false);
      expect(container.contains(newNode)).toBe(true);
      expect(container.firstChild).toBe(newNode);
    });

    it('should handle when new node contains old node', () => {
      const oldNode = document.createElement('div');
      oldNode.textContent = 'old';
      const newNode = document.createElement('span');
      newNode.appendChild(oldNode); // newNode contains oldNode
      container.appendChild(oldNode);
      $replaceNode(oldNode, newNode);
      // newNode should be removed first, then oldNode replaced with newNode
      expect(container.contains(oldNode)).toBe(false);
      expect(container.contains(newNode)).toBe(true);
    });

    it('should do nothing for non-nodes', () => {
      const oldNode = document.createElement('div');
      container.appendChild(oldNode);
      // Testing invalid input - cast to any to bypass type checking
      $replaceNode(oldNode as any, 'not a node');
      expect(container.contains(oldNode)).toBe(true);
      $replaceNode('not a node' as any, document.createElement('div'));
      expect(container.contains(oldNode)).toBe(true);
    });
  });

  describe('$appendChild', () => {
    it('should append child element', () => {
      const parent = document.createElement('div');
      const child = document.createElement('span');
      $appendChild.call(parent, child);
      expect(parent.firstChild).toBe(child);
    });
  });

  describe('$append', () => {
    it('should append nodes and strings', () => {
      const parent = document.createElement('div');
      const child1 = document.createElement('span');
      const child2 = document.createElement('div');
      $append.call(parent, child1, 'text', child2);
      expect(parent.childNodes.length).toBe(3);
      expect(parent.childNodes[0]).toBe(child1);
      expect(parent.childNodes[1].textContent).toBe('text');
      expect(parent.childNodes[2]).toBe(child2);
    });

    it('should use DocumentFragment for many nodes', () => {
      const parent = document.createElement('div');
      const nodes = Array.from({ length: 100 }, (_, i) => document.createTextNode(`node${i}`));
      $append.call(parent, ...nodes);
      expect(parent.childNodes.length).toBe(100);
    });
  });

  describe('button disabled property descriptors', () => {
    it('should get and set disabled property', () => {
      const button = document.createElement('button');
      expect($buttonDisabledGetter.call(button)).toBe(false);
      $buttonDisabledSetter.call(button, true);
      expect(button.disabled).toBe(true);
      expect($buttonDisabledGetter.call(button)).toBe(true);
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
