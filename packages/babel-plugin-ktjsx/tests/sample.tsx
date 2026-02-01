// Simple TSX sample to demonstrate SVG and MathML JSX that should be namespace-corrected

export const App = () => (
  <div sss="2">
    <div>
      <span class="d">sdfsfd</span>
      <svg viewBox="0 0 24 24">
        <g>
          <path d="M1 1 L10 10" />
        </g>
      </svg>

      {/* MathML root example (standard) */}
      <math>
        <mrow>
          <mi>x</mi>
          <mo>=</mo>
          <mn>5</mn>
        </mrow>
      </math>

      {/* MathML using namespace-like prefix (plugin should detect "math:") */}
      <math:math>
        <math:mi>y</math:mi>
        <math:mo>+</math:mo>
        <math:mn>2</math:mn>
      </math:math>

      <input type="text" />
    </div>
  </div>
);
