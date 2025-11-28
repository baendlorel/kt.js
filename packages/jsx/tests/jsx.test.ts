import { describe, it, expect, beforeEach } from 'vitest';
import { jsx, jsxs, Fragment, h } from '../src/jsx-runtime';
import { ktnull } from '@ktjs/core';

describe('@ktjs/jsx Runtime', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
  });

  describe('jsx/jsxs function', () => {
    it('should create a simple element', () => {
      const element = jsx('div', { class: 'test' });

      expect(element).toBeInstanceOf(HTMLDivElement);
      expect(element.className).toBe('test');
    });

    it('should create element with text content', () => {
      const element = jsx('p', {}, 'Hello World');

      expect(element.textContent).toBe('Hello World');
    });

    it('should create element with children from props', () => {
      const child = jsx('span', {}, 'Child');
      const parent = jsx('div', { children: child });

      expect(parent.children.length).toBe(1);
      expect(parent.children[0].textContent).toBe('Child');
    });

    it('should create element with multiple children', () => {
      const children = [jsx('span', {}, 'First'), jsx('span', {}, 'Second')];
      const parent = jsxs('div', { children });

      expect(parent.children.length).toBe(2);
      expect(parent.children[0].textContent).toBe('First');
      expect(parent.children[1].textContent).toBe('Second');
    });

    it('should handle event handlers with @ prefix', () => {
      let clicked = false;
      const button = jsx(
        'button',
        {
          '@click': () => {
            clicked = true;
          },
        },
        'Click me'
      );

      button.click();
      expect(clicked).toBe(true);
    });

    it('should handle function attributes as event handlers', () => {
      let count = 0;
      const button = jsx(
        'button',
        {
          click: () => {
            count++;
          },
        },
        'Click'
      );

      button.click();
      expect(count).toBe(1);
    });

    it('should support nested elements', () => {
      const app = jsx('div', { id: 'app' }, jsx('header', {}, jsx('h1', {}, 'Title')));

      expect(app.id).toBe('app');
      expect(app.querySelector('h1')?.textContent).toBe('Title');
    });

    it('should handle mixed string and element children', () => {
      const element = jsxs('div', {}, ['Text ', jsx('strong', {}, 'Bold'), ' more text']);

      expect(element.childNodes.length).toBe(3);
      expect(element.textContent).toBe('Text Bold more text');
    });
  });

  describe('Fragment', () => {
    it('should return ktnull for empty fragment', () => {
      const fragment = Fragment({});

      expect(fragment).toBe(ktnull);
    });

    it('should return single child directly', () => {
      const child = jsx('div', {}, 'Child');
      const fragment = Fragment({ children: child });

      expect(fragment).toBe(child);
    });

    it('should wrap multiple children in a div', () => {
      const children = [jsx('span', {}, 'First'), jsx('span', {}, 'Second')];
      const fragment = Fragment({ children });

      expect(fragment).toBeInstanceOf(HTMLDivElement);
      expect((fragment as HTMLElement).getAttribute('data-kt-fragment')).toBe('true');
      expect((fragment as HTMLElement).children.length).toBe(2);
    });

    it('should filter out ktnull from children', () => {
      const children = [jsx('span', {}, 'First'), ktnull, jsx('span', {}, 'Second')];
      const fragment = Fragment({ children });

      expect((fragment as HTMLElement).children.length).toBe(2);
    });
  });

  describe('h function (classic JSX)', () => {
    it('should work as JSX factory', () => {
      const element = h('div', { class: 'classic' }, 'Content');

      expect(element.className).toBe('classic');
      expect(element.textContent).toBe('Content');
    });
  });

  describe('Type safety', () => {
    it('should create correct element types', () => {
      const div = jsx('div', {});
      const button = jsx('button', {});
      const input = jsx('input', { type: 'text' });

      expect(div).toBeInstanceOf(HTMLDivElement);
      expect(button).toBeInstanceOf(HTMLButtonElement);
      expect(input).toBeInstanceOf(HTMLInputElement);
      expect((input as HTMLInputElement).type).toBe('text');
    });
  });

  describe('Conditional rendering', () => {
    it('should handle conditional children with ktnull', () => {
      const showButton = false;
      const element = jsx('div', {}, [jsx('p', {}, 'Always shown'), showButton ? jsx('button', {}, 'Click') : ktnull]);

      expect(element.children.length).toBe(1);
      expect(element.querySelector('button')).toBeNull();
    });
  });

  describe('Attributes', () => {
    it('should set style attribute', () => {
      const element = jsx('div', {
        style: 'color: red; font-size: 16px',
      });

      expect(element.getAttribute('style')).toBe('color: red; font-size: 16px');
    });

    it('should set data attributes', () => {
      const element = jsx('div', {
        'data-id': '123',
        'data-name': 'test',
      });

      expect(element.getAttribute('data-id')).toBe('123');
      expect(element.getAttribute('data-name')).toBe('test');
    });

    it('should set id and class', () => {
      const element = jsx('div', {
        id: 'app',
        class: 'container primary',
      });

      expect(element.id).toBe('app');
      expect(element.className).toBe('container primary');
    });
  });
});
