import { describe, test, expect } from 'vitest';
import { h } from '@/core/h/index.js';

describe('Specialized element handling', () => {
  describe('Elements that should NOT support ktext', () => {
    const invalidTags = [
      'input',
      'br',
      'img',
      'textarea',
      'select',
      'video',
      'audio',
      'canvas',
    ] as const;

    test.each(invalidTags)('<%s> should not append text node', (tag) => {
      const element = h(tag, '', 'test content');

      // The element should have no child nodes (no text node appended)
      expect(element.childNodes.length).toBe(0);
    });

    test.each(invalidTags)('<%s> ktext getter should return empty string', (tag) => {
      const element = h(tag, '', 'test content');

      // ktext should return empty string
      expect(element.ktext).toBe('');
    });

    test.each(invalidTags)('<%s> ktext setter should do nothing', (tag) => {
      const element = h(tag);

      // Try to set ktext
      element.ktext = 'new text';

      // ktext should still be empty
      expect(element.ktext).toBe('');
      // No text node should be created
      expect(element.childNodes.length).toBe(0);
    });
  });

  describe('Elements that SHOULD support ktext', () => {
    const validTags = ['div', 'span', 'p', 'h1', 'a', 'button', 'label'] as const;

    test.each(validTags)('<%s> should append text node', (tag) => {
      const element = h(tag, '', 'test content');

      // The element should have at least one child node (the text node)
      expect(element.childNodes.length).toBeGreaterThan(0);
      expect(element.ktext).toBe('test content');
    });

    test.each(validTags)('<%s> ktext getter should return text content', (tag) => {
      const element = h(tag, '', 'initial text');

      expect(element.ktext).toBe('initial text');
    });

    test.each(validTags)('<%s> ktext setter should update text content', (tag) => {
      const element = h(tag, '', 'initial text');

      element.ktext = 'updated text';

      expect(element.ktext).toBe('updated text');
      // The first child should be a text node with the updated text
      const firstChild = element.childNodes[0];
      expect(firstChild.nodeType).toBe(Node.TEXT_NODE);
      expect((firstChild as Text).textContent).toBe('updated text');
    });
  });

  describe('Edge cases', () => {
    test('input element with array content should not create text nodes for strings', () => {
      const element = h('input', '', ['text1', 'text2']);

      // Since input doesn't support text content, string children should be ignored
      // Only the actual child elements would be added (but strings become text nodes which are filtered)
      expect(element.childNodes.length).toBe(0);
    });

    test('div element with array content should create text nodes for strings', () => {
      const child = h('span');
      const element = h('div', '', ['text1', child, 'text2']);

      // div should have: text node (ktext), text node (text1), span, text node (text2)
      // Actually: text node (ktext from h function), text1, child, text2
      expect(element.childNodes.length).toBeGreaterThan(0);
      expect(element.children.length).toBe(1); // only the span
    });
  });
});
