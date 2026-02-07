import { describe, it, expect, vi } from 'vitest';
import { h } from '../src/h/index.js';

describe('h event handlers', () => {
  describe('regular event handlers (without on: prefix)', () => {
    it('should register click event handler', () => {
      const clickHandler = vi.fn();
      const button = h('button', { 'on:click': clickHandler });

      button.click();
      expect(clickHandler).toHaveBeenCalledTimes(1);
    });

    it('should receive correct event object', () => {
      const clickHandler = vi.fn();
      const button = h('button', { 'on:click': clickHandler });

      button.click();
      expect(clickHandler).toHaveBeenCalledWith(expect.any(MouseEvent));
    });

    it('should register multiple event handlers', () => {
      const clickHandler = vi.fn();
      const mouseoverHandler = vi.fn();
      const div = h('div', {
        'on:click': clickHandler,
        'on:mouseover': mouseoverHandler,
      });

      div.click();
      div.dispatchEvent(new MouseEvent('mouseover'));

      expect(clickHandler).toHaveBeenCalledTimes(1);
      expect(mouseoverHandler).toHaveBeenCalledTimes(1);
    });
  });

  describe('event handler context', () => {
    it('should have correct this context in event handler', () => {
      let contextElement: HTMLElement | null = null;
      const button = h('button', {
        'on:click': function (this: HTMLElement) {
          // eslint-disable-next-line @typescript-eslint/no-this-alias
          contextElement = this;
        },
      });

      button.click();
      expect(contextElement).toBe(button);
    });
  });

  describe('form events', () => {
    it('should handle on:submit event', () => {
      const submitHandler = vi.fn((e) => e.preventDefault());
      const form = h('form', { 'on:submit': submitHandler });

      form.dispatchEvent(new Event('submit'));
      expect(submitHandler).toHaveBeenCalledTimes(1);
    });

    it('should handle on:change event', () => {
      const changeHandler = vi.fn();
      const select = h('select', { 'on:change': changeHandler });

      select.dispatchEvent(new Event('change'));
      expect(changeHandler).toHaveBeenCalledTimes(1);
    });
  });

  describe('keyboard events', () => {
    it('should handle on:keydown with correct event type', () => {
      const keydownHandler = vi.fn();
      const input = h('input', { 'on:keydown': keydownHandler });

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
        }),
      );
    });

    it('should handle on:keyup event', () => {
      const keyupHandler = vi.fn();
      const input = h('input', { 'on:keyup': keyupHandler });

      input.dispatchEvent(new KeyboardEvent('keyup', { key: 'a' }));
      expect(keyupHandler).toHaveBeenCalledTimes(1);
    });
  });

  describe('mouse events', () => {
    it('should handle on:mouseenter and on:mouseleave', () => {
      const mouseenterHandler = vi.fn();
      const mouseleaveHandler = vi.fn();
      const div = h('div', {
        'on:mouseenter': mouseenterHandler,
        'on:mouseleave': mouseleaveHandler,
      });

      div.dispatchEvent(new MouseEvent('mouseenter'));
      div.dispatchEvent(new MouseEvent('mouseleave'));

      expect(mouseenterHandler).toHaveBeenCalledTimes(1);
      expect(mouseleaveHandler).toHaveBeenCalledTimes(1);
    });

    it('should handle on:dblclick event', () => {
      const dblclickHandler = vi.fn();
      const button = h('button', { 'on:dblclick': dblclickHandler });

      button.dispatchEvent(new MouseEvent('dblclick'));
      expect(dblclickHandler).toHaveBeenCalledTimes(1);
    });
  });

  describe('focus events', () => {
    it('should handle on:focus and on:blur events', () => {
      const focusHandler = vi.fn();
      const blurHandler = vi.fn();
      const input = h('input', {
        'on:focus': focusHandler,
        'on:blur': blurHandler,
      });

      input.dispatchEvent(new FocusEvent('focus'));
      input.dispatchEvent(new FocusEvent('blur'));

      expect(focusHandler).toHaveBeenCalledTimes(1);
      expect(blurHandler).toHaveBeenCalledTimes(1);
    });
  });
});
