export function OtherElements() {
  return (
    <div class="demo-section">
      <h3>Svg</h3>
      <svg width="100" height="100">
        <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
        <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
        <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
      </svg>
      <h3>MathML</h3>
      <math xmlns="http://www.w3.org/1998/Math/MathML">
        <msup>
          <mi>x</mi>
          <mn>2</mn>
        </msup>
        <mo>+</mo>
        <mi>b</mi>
        <mi>x</mi>
        <mo>+</mo>
        <mi>c</mi>
      </math>
    </div>
  );
}
