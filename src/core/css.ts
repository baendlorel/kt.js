import { parse, stringify } from '@adobe/css-tools';
import { createElement, isArray, isObject, ObjectAssign, ObjectKeys } from './native.js';

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

  return out.join('').replace(/\r\n/g, '\n').trim();
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
  const cssText = getCssText(strings, values);
  cssList.push(cssText);
  return cssText;
}

/**
 * Create a scoped css tag wrapper which prefixes every selector with `scopeName`
 * then calls the provided `css` tagged template function with the transformed
 * CSS.
 *
 * @param cssFn - The original css tagged template function to call with scoped CSS
 * @param scopeName - The scope prefix to add before each selector (e.g. '.my-scope')
 * @returns A new tagged template function that applies the scope and delegates to `cssFn`
 */
export function scopeCss(scopeName: string): typeof css {
  return (strings: TemplateStringsArray, ...values: any[]) => {
    // Reconstruct the template literal into a single CSS string.
    const cssText = getCssText(strings, values);

    // Parse the CSS into an AST, prefix selectors, and stringify back.
    const ast: any = parse(cssText);

    const walk = (node: any) => {
      if (!node || typeof node !== 'object') {
        return;
      }

      // Prefix selectors on normal rule nodes.
      if (node.type === 'rule' && isArray(node.selectors)) {
        node.selectors = node.selectors.map((s: string) => `${scopeName} ${s}`);
      }

      // Recurse into arrays/objects that may contain nested rules (media, supports, etc.).
      const keys = ObjectKeys(node);
      const keysLen = keys.length;
      for (let i = 0; i < keysLen; i++) {
        const child = node[keys[i]];
        if (isArray(child)) {
          child.forEach(walk);
        } else if (isObject(child)) {
          walk(child);
        }
      }
    };

    walk(ast);

    const processed = stringify(ast);
    cssList.push(processed);
    return processed;
  };
}

export function applyCss(): string {
  const style = createElement('style');
  style.innerHTML = cssList.join('\n');
  return style.innerHTML;
}
