import { FeatEvents } from './Events.js';
import { FeatKTFor } from './KTFor.js';

/**
 * Basic Usage page - Combines directives, events, and ktfor demos
 */
export function BasicUsage() {
  return (
    <div>
      <div class="demo-section">
        <h3>Event Handling</h3>
        <p>
          KT.js uses the <code>on:</code> syntax for event handling, similar to React but with direct DOM events.
        </p>
        <FeatEvents />
      </div>

      <div class="demo-section">
        <h3>KTFor List Rendering</h3>
        <p>
          The <code>KTFor</code> component provides efficient list rendering with key-based DOM reuse, similar to
          React's <code>key</code> prop but with manual control.
        </p>
        <FeatKTFor />
      </div>
    </div>
  );
}
