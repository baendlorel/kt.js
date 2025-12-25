/**
 * JSX/TSX support for KT.js
 *
 * This module provides JSX transformation support for KT.js,
 * allowing you to write UI code with JSX syntax while maintaining
 * the direct DOM manipulation philosophy of KT.js.
 *
 * @example
 * ```tsx
 * import { h } from '@ktjs/core/jsx';
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
 */

// Export JSX runtime functions (excluding h which is already exported from core)
export { jsx, jsxs, jsxDEV, Fragment, createElement } from './jsx-runtime.js';

export * from './ref.js';
