import '@ktjs/core/jsx';

/**
 * Home page - Introduction to KT.js framework
 */
export function FeatHome() {
  return (
    <div>
      <div class="demo-section">
        <h3>Welcome to KT.js Framework</h3>
        <p>
          KT.js is a lightweight, direct DOM manipulation framework that <strong>never re-renders</strong>. Unlike React
          or Vue which use virtual DOM and automatic re-rendering, KT.js gives you fine-grained control over when and
          how DOM updates happen.
        </p>
        <p>
          <strong>Core Philosophy:</strong> Create DOM elements once, then update them manually when needed using the{' '}
          <code>redraw()</code> method. No automatic reactivity, no hidden magic - just direct control.
        </p>
      </div>

      <div class="demo-section">
        <h3>Key Features</h3>
        <ul style="margin-left: 24px; color: #666; line-height: 2;">
          <li>📦 Direct DOM manipulation without virtual DOM overhead</li>
          <li>⚡ JSX support with TypeScript</li>
          <li>🎯 Manual redraw mechanism for precise control</li>
          <li>📋 Efficient list rendering with KTFor component</li>
          <li>🎨 Material-UI inspired component library</li>
          <li>🔀 Client-side routing with @ktjs/router</li>
        </ul>
      </div>

      <div class="demo-section">
        <h3>Quick Example</h3>
        <p style="color: #666;">Here's how you create and update elements in KT.js:</p>
        <pre style="background: #f5f5f5; padding: 16px; border-radius: 8px; overflow-x: auto; font-size: 0.875rem;">
          {`const div = (<div>Initial</div>) as KTHTMLElement;
div.redraw(undefined, 'Updated content');

function Counter({ count = 0 }) {
  return (
    <div>
      <span>Count: {count}</span>
      <button on:click={() => el.redraw({ count: count + 1 })}>
        +
      </button>
    </div>
  );
}
const el = (<Counter />) as KTHTMLElement;`}
        </pre>
      </div>
    </div>
  );
}
