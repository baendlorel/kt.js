// Simple TSX sample to demonstrate SVG JSX that should be namespace-corrected
import { h } from '../../core/src/h/index.js';

export const App = () => (
  <div>
    <svg viewBox="0 0 24 24">
      <g>
        <path d="M1 1 L10 10" />
      </g>
    </svg>
    <input type="text" />
  </div>
);
