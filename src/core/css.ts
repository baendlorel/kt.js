import { $createElement } from '@/lib/dom.js';
import { $delete, $isArray, $keys, $set } from '@/lib/native.js';
import { $isObject } from '@/lib/whether.js';
import { CssAllNodesAST, parse, stringify } from '@adobe/css-tools';

/**
 * Global list that accumulates CSS strings produced by the `css` tagged template.
 */
const cssList: string[] = [];

// Recursive walk to filter out comment nodes from any rules/containers.
function removeComments(node: CssAllNodesAST) {
  if (!$isObject(node)) {
    return;
  }

  if ($isArray(node)) {
    for (let i = node.length - 1; i >= 0; i--) {
      const child = node[i];
      if (child && child.type === 'comment') {
        node.splice(i, 1);
      } else {
        removeComments(child);
      }
    }
    return;
  }

  const keys = $keys(node);
  const keysLen = keys.length;
  for (let i = 0; i < keysLen; i++) {
    const key = keys[i];
    const val = node[key];
    if ($isArray(val)) {
      const newArr = [] as CssAllNodesAST[];
      const len = val.length;
      for (let j = 0; j < len; j++) {
        const c = val[j];
        if (!c || c.type === 'comment') {
          continue;
        }

        removeComments(c);
        newArr.push(c);
      }

      $set(node, key, newArr);

      continue;
    }

    if ($isObject<CssAllNodesAST>(val)) {
      if (val.type === 'comment') {
        $delete(node, key);
      } else {
        removeComments(val);
      }
      continue;
    }
  }
}

function getCssText(strings: TemplateStringsArray, values: any[]): string {
  // Build the final string from template parts and values.
  const out: string[] = [];
  for (let i = 0; i < strings.length; i++) {
    out.push(strings[i]);
    if (i < values.length) {
      out.push(String(values[i]));
    }
  }

  // Join template parts and normalize Windows line endings to Unix.
  let cssText = out.join('').replace(/\r\n/g, '\n');

  // Use @adobe/css-tools to parse the CSS into an AST, remove comment nodes,
  // then stringify back to CSS. This is more robust than a regex-based strip.
  const ast = parse(cssText);

  removeComments(ast);

  cssText = stringify(ast, { compress: true });

  return cssText.trim();
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

export function applyCss(): string {
  const style = $createElement('style');
  style.id = 'kt.js-style';
  style.innerHTML = cssList.join('\n');
  cssList.splice(0);
  return style.innerHTML;
}
