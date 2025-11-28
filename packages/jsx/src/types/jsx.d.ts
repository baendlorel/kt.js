import type { HTMLTag } from '@ktjs/core';
import type { KTAttribute, KTRawContent } from '@ktjs/core';

/**
 * JSX namespace for TypeScript JSX type checking
 */
declare global {
  namespace JSX {
    /**
     * The type returned by JSX elements
     */
    type Element = HTMLElement;

    /**
     * Props for all intrinsic HTML elements
     */
    interface IntrinsicElements {
      [K in HTMLTag]: KTAttribute & {
        children?: KTRawContent;
      };
    }

    /**
     * For class components (if needed in the future)
     */
    interface ElementClass {
      render(): Element;
    }

    /**
     * Props for all JSX elements
     */
    interface IntrinsicAttributes {
      key?: string | number;
    }

    /**
     * Props for class-based components
     */
    interface ElementChildrenAttribute {
      children: {};
    }
  }
}

export {};
