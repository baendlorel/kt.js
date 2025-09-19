import { $createElement } from '@/lib/dom.js';

/**
 * Global list that accumulates CSS strings produced by the `css` tagged template.
 */
const cssList: string[] = [];

function getCssText(strings: TemplateStringsArray, values: any[]): string {
  // Build the final string from template parts and values.
  const out: string[] = [];
  for (let i = 0; i < strings.length; i++) {
    out.push(strings[i]);
    if (i < values.length) {
      out.push(String(values[i]));
    }
  }

  const cssText = out.join('').replace(/\r\n/g, '\n').trim();

  return cssText;
}

/**
 * Tagged template helper to collect CSS strings.
 *
 * Usage:
 *   css` .cls { color: red } `;
 *
 * The function concatenates the template literal parts and any interpolated
 * values, trims the result, pushes it into `cssList` and returns the final
 * string.
 *
 * @param strings Template string parts
 * @param values Interpolated values
 * @returns The concatenated CSS string that was pushed into `cssList`
 */
export function css(strings: TemplateStringsArray, ...values: any[]): string {
  const cssText = getCssText(strings, values).trim();

  cssList.push(cssText);
  return cssText;
}

export function applyCss(): string {
  const style = $createElement('style');
  style.id = 'kt.js-style';
  style.innerHTML = cssList.join('\n');
  cssList.splice(0);
  return style.innerHTML;
}
