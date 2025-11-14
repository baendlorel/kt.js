import { describe, it, expect, vi } from 'vitest';
import { h } from '../../src/core/h/index.js';

describe('h event handlers', () => {
  describe('regular event handlers (without @ prefix)', () => {
    it('should register click event handler', () => {
      const clickHandler = vi.fn();
      const button = h('button', { click: clickHandler });

      button.click();
      expect(clickHandler).toHaveBeenCalledTimes(1);
    });

    it('should receive correct event object', () => {
      const clickHandler = vi.fn();
      const button = h('button', { click: clickHandler });

      button.click();
      expect(clickHandler).toHaveBeenCalledWith(expect.any(MouseEvent));
    });

    it('should register multiple event handlers', () => {
      const clickHandler = vi.fn();
      const mouseoverHandler = vi.fn();
      const div = h('div', {
        click: clickHandler,
        mouseover: mouseoverHandler,
      });

      div.click();
      div.dispatchEvent(new MouseEvent('mouseover'));

      expect(clickHandler).toHaveBeenCalledTimes(1);
      expect(mouseoverHandler).toHaveBeenCalledTimes(1);
    });
  });

  describe('prefixed event handlers (with @ prefix)', () => {
    it('should register @click event handler', () => {
      const clickHandler = vi.fn();
      const button = h('button', { '@click': clickHandler });

      button.click();
      expect(clickHandler).toHaveBeenCalledTimes(1);
    });

    it('should register @input event handler', () => {
      const inputHandler = vi.fn();
      const input = h('input', { '@input': inputHandler });

      input.dispatchEvent(new Event('input'));
      expect(inputHandler).toHaveBeenCalledTimes(1);
    });

    it('should register @keydown event handler', () => {
      const keydownHandler = vi.fn();
      const input = h('input', { '@keydown': keydownHandler });

      input.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));
      expect(keydownHandler).toHaveBeenCalledTimes(1);
    });

    it('should receive correct event object for @click', () => {
      const clickHandler = vi.fn();
      const button = h('button', { '@click': clickHandler });

      button.click();
      expect(clickHandler).toHaveBeenCalledWith(expect.any(MouseEvent));
    });

    it('should register multiple prefixed event handlers', () => {
      const clickHandler = vi.fn();
      const mouseoverHandler = vi.fn();
      const div = h('div', {
        '@click': clickHandler,
        '@mouseover': mouseoverHandler,
      });

      div.click();
      div.dispatchEvent(new MouseEvent('mouseover'));

      expect(clickHandler).toHaveBeenCalledTimes(1);
      expect(mouseoverHandler).toHaveBeenCalledTimes(1);
    });
  });

  describe('mixed event handlers (with and without @ prefix)', () => {
    it('should work with both regular and prefixed handlers', () => {
      const clickHandler = vi.fn();
      const inputHandler = vi.fn();
      const changeHandler = vi.fn();

      const input = h('input', {
        click: clickHandler,
        '@input': inputHandler,
        '@change': changeHandler,
      });

      input.click();
      input.dispatchEvent(new Event('input'));
      input.dispatchEvent(new Event('change'));

      expect(clickHandler).toHaveBeenCalledTimes(1);
      expect(inputHandler).toHaveBeenCalledTimes(1);
      expect(changeHandler).toHaveBeenCalledTimes(1);
    });

    it('should register both regular and prefixed handlers for the same event', () => {
      const regularClickHandler = vi.fn();
      const prefixedClickHandler = vi.fn();

      const button = h('button', {
        click: regularClickHandler,
        '@click': prefixedClickHandler,
      });

      button.click();

      // Both handlers should be called
      expect(regularClickHandler).toHaveBeenCalledTimes(1);
      expect(prefixedClickHandler).toHaveBeenCalledTimes(1);
    });
  });

  describe('event handler context', () => {
    it('should have correct this context in event handler', () => {
      let contextElement: HTMLElement | null = null;
      const button = h('button', {
        '@click': function (this: HTMLElement) {
          contextElement = this;
        },
      });

      button.click();
      expect(contextElement).toBe(button);
    });
  });

  describe('form events', () => {
    it('should handle @submit event', () => {
      const submitHandler = vi.fn((e) => e.preventDefault());
      const form = h('form', { '@submit': submitHandler });

      form.dispatchEvent(new Event('submit'));
      expect(submitHandler).toHaveBeenCalledTimes(1);
    });

    it('should handle @change event', () => {
      const changeHandler = vi.fn();
      const select = h('select', { '@change': changeHandler });

      select.dispatchEvent(new Event('change'));
      expect(changeHandler).toHaveBeenCalledTimes(1);
    });
  });

  describe('keyboard events', () => {
    it('should handle @keydown with correct event type', () => {
      const keydownHandler = vi.fn();
      const input = h('input', { '@keydown': keydownHandler });

      const keyEvent = new KeyboardEvent('keydown', {
        key: 'Enter',
        code: 'Enter',
        keyCode: 13,
      });
      input.dispatchEvent(keyEvent);

      expect(keydownHandler).toHaveBeenCalledTimes(1);
      expect(keydownHandler).toHaveBeenCalledWith(
        expect.objectContaining({
          key: 'Enter',
          code: 'Enter',
        })
      );
    });

    it('should handle @keyup event', () => {
      const keyupHandler = vi.fn();
      const input = h('input', { '@keyup': keyupHandler });

      input.dispatchEvent(new KeyboardEvent('keyup', { key: 'a' }));
      expect(keyupHandler).toHaveBeenCalledTimes(1);
    });
  });

  describe('mouse events', () => {
    it('should handle @mouseenter and @mouseleave', () => {
      const mouseenterHandler = vi.fn();
      const mouseleaveHandler = vi.fn();
      const div = h('div', {
        '@mouseenter': mouseenterHandler,
        '@mouseleave': mouseleaveHandler,
      });

      div.dispatchEvent(new MouseEvent('mouseenter'));
      div.dispatchEvent(new MouseEvent('mouseleave'));

      expect(mouseenterHandler).toHaveBeenCalledTimes(1);
      expect(mouseleaveHandler).toHaveBeenCalledTimes(1);
    });

    it('should handle @dblclick event', () => {
      const dblclickHandler = vi.fn();
      const button = h('button', { '@dblclick': dblclickHandler });

      button.dispatchEvent(new MouseEvent('dblclick'));
      expect(dblclickHandler).toHaveBeenCalledTimes(1);
    });
  });

  describe('focus events', () => {
    it('should handle @focus and @blur events', () => {
      const focusHandler = vi.fn();
      const blurHandler = vi.fn();
      const input = h('input', {
        '@focus': focusHandler,
        '@blur': blurHandler,
      });

      input.dispatchEvent(new FocusEvent('focus'));
      input.dispatchEvent(new FocusEvent('blur'));

      expect(focusHandler).toHaveBeenCalledTimes(1);
      expect(blurHandler).toHaveBeenCalledTimes(1);
    });
  });
});
