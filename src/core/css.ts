import { CssRuleAST, CssStylesheetAST, CssTypes, parse, stringify } from '@adobe/css-tools';
import { $createElement, $get, $isArray, $isObject, $keys } from './native.js';

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
 */
export function scopeCss(scopeName: string): typeof css {
  return function (strings: TemplateStringsArray, ...values: any[]) {
    // Reconstruct the template literal into a single CSS string.
    const cssText = getCssText(strings, values);

    // Parse the CSS into an AST, prefix selectors, and stringify back.
    const ast = parse(cssText);

    const walk = (node: CssStylesheetAST | CssRuleAST) => {
      if (!$isObject(node)) {
        return;
      }

      // Prefix selectors on normal rule nodes.
      if (node.type === CssTypes.rule) {
        node.selectors = node.selectors.map((s: string) => `[${scopeName}]${s}`);
      }

      // Recurse into arrays/objects that may contain nested rules (media, supports, etc.).
      const keys = $keys(node);
      const keysLen = keys.length;
      for (let i = 0; i < keysLen; i++) {
        const child = $get(node, keys[i]);

        if ($isArray(child)) {
          const childLen = child.length;
          for (let i = 0; i < childLen; i++) {
            walk(child[i]);
          }
          continue;
        }

        if ($isObject(child)) {
          walk(child as CssStylesheetAST | CssRuleAST);
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
  const style = $createElement('style');
  style.id = 'kt.js-style';
  style.innerHTML = cssList.join('\n');
  cssList.splice(0);
  return style.innerHTML;
}
