/**
 * @ktjs/jsx - JSX/TSX support for KT.js
 *
 * This package provides JSX transformation support for KT.js,
 * allowing you to write UI code with JSX syntax while maintaining
 * the direct DOM manipulation philosophy of KT.js.
 *
 * @example
 * ```tsx
 * import { h } from '@ktjs/jsx';
 *
 * const App = (
 *   <div class="app">
 *     <h1>Hello KT.js with JSX!</h1>
 *     <button @click={() => alert('Clicked!')}>
 *       Click me
 *     </button>
 *   </div>
 * );
 * ```
 *
 * __PKG_INFO__
 */

// Export JSX runtime functions
export { jsx, jsxs, jsxDEV, Fragment, h, createElement } from './jsx-runtime.js';

// Export types
export type * from './types/jsx.d.ts';
