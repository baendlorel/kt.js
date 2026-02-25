import { Code } from '../components/Code.js';
import { t } from '../i18n/index.js';
import otherElementsCode from '../code/other-elements.tsx?raw';

export function OtherElements() {
  const [svg, mathml] = otherElementsCode.split('// ---').map((part) => part.trim());
  return (
    <div class="demo-section">
      <h3 k-html={t('otherElements.svgTitle')}></h3>
      <svg width="100" height="100">
        <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
        <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
        <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
      </svg>
      <div className="demo-code">
        <Code code={svg}></Code>
      </div>
      <h3 k-html={t('otherElements.mathmlTitle')}></h3>
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
      <div className="demo-code">
        <Code code={mathml}></Code>
      </div>
    </div>
  );
}
