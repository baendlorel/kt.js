import { beforeEach, describe, expect, it } from 'vitest';
import '../src/misc/dom-polyfill.js';

describe('DOM polyfills', () => {
  let container: HTMLElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  it('provides Node.prototype.remove', () => {
    const node = document.createElement('div');
    container.appendChild(node);
    node.remove();
    expect(container.contains(node)).toBe(false);
  });

  it('provides Node.prototype.replaceWith for Node arguments', () => {
    const oldNode = document.createElement('div');
    const newNode = document.createElement('span');
    container.appendChild(oldNode);
    oldNode.replaceWith(newNode);
    expect(container.firstChild).toBe(newNode);
  });

  it('provides Node.prototype.replaceWith for string arguments', () => {
    const oldNode = document.createElement('div');
    container.appendChild(oldNode);
    oldNode.replaceWith('ktjs');
    expect(container.textContent).toBe('ktjs');
  });
});
