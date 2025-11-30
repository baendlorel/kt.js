/**
 * Type inference test for JSX
 * This file tests that JSX elements have correct TypeScript types
 */

import { describe, it, expect } from 'vitest';

describe('JSX Type Inference', () => {
  it('should infer HTMLButtonElement for button tag', () => {
    const button = <button>Click me</button>;

    // Type assertion to verify compile-time type
    const _typeCheck: HTMLButtonElement = button;

    expect(button).toBeInstanceOf(HTMLButtonElement);
    expect(button.tagName).toBe('BUTTON');
  });

  it('should infer HTMLDivElement for div tag', () => {
    const div = <div>Content</div>;

    const _typeCheck: HTMLDivElement = div;

    expect(div).toBeInstanceOf(HTMLDivElement);
    expect(div.tagName).toBe('DIV');
  });

  it('should infer HTMLInputElement for input tag', () => {
    const input = <input type="text" />;

    const _typeCheck: HTMLInputElement = input;

    expect(input).toBeInstanceOf(HTMLInputElement);
    expect(input.tagName).toBe('INPUT');

    // Should have input-specific properties
    expect(input.type).toBe('text');
  });

  it('should infer HTMLAnchorElement for anchor tag', () => {
    const anchor = <a href="https://example.com">Link</a>;

    const _typeCheck: HTMLAnchorElement = anchor;

    expect(anchor).toBeInstanceOf(HTMLAnchorElement);
    expect(anchor.tagName).toBe('A');

    // Should have anchor-specific properties
    expect(anchor.href).toBe('https://example.com/');
  });

  it('should infer HTMLSpanElement for span tag', () => {
    const span = <span>Text</span>;

    const _typeCheck: HTMLSpanElement = span;

    expect(span).toBeInstanceOf(HTMLSpanElement);
    expect(span.tagName).toBe('SPAN');
  });

  it('should allow element-specific method calls', () => {
    const button = <button>Click</button>;

    // HTMLButtonElement has click() method
    button.click();

    const input = <input type="text" />;

    // HTMLInputElement has select() method
    input.select();

    expect(true).toBe(true); // No type errors = success
  });

  it('should work with nested elements maintaining correct types', () => {
    const container = (
      <div class="container">
        <button>Button</button>
        <input type="text" />
      </div>
    );

    const _typeCheck: HTMLDivElement = container;

    expect(container).toBeInstanceOf(HTMLDivElement);

    const button = container.querySelector('button') as HTMLButtonElement;
    const input = container.querySelector('input') as HTMLInputElement;

    expect(button).toBeInstanceOf(HTMLButtonElement);
    expect(input).toBeInstanceOf(HTMLInputElement);
  });
});
