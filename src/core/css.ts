import { CssAllNodesAST, CssStylesheetAST, parse, stringify } from '@adobe/css-tools';
import { Indexer } from '@/utils/indexer.js';
import { omit } from '@/utils/index.js';
import { $createElement, $getElementById } from '@/lib/dom.js';
import { $delete, $isArray, $keys, $set } from '@/lib/native.js';
import { $isObject } from '@/lib/whether.js';

/**
 * Global list that accumulates CSS strings produced by the `css` tagged template.
 */
const cssMap = new Map<string, HTMLStyleElement>();

function parseCss(cssText: string): { ast: CssStylesheetAST; cssId: string } {
  let ast = parse(cssText, { silent: true });
  let cssId = '';
  if (ast.stylesheet.parsingErrors?.some((e) => e.reason === `missing '{'`)) {
    cssId = Indexer.genCssId();
    ast = parse(`.${cssId} { ${cssText} }`);
  }

  return { ast, cssId };
}

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

/**
 * Tagged template helper to collect CSS strings.
 *
 * ## Usage
 * ```ts
 *  const className = css` color: red `;
 *  h('div', { class: className }, 'hello'); // 'hello' will be red
 * ```
 *
 * @returns a generated CSS class. e.g. `kt-css-xxxxxx`
 */
export function css(strings: TemplateStringsArray, ...values: any[]): string {
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
  const result = parseCss(cssText);

  removeComments(result.ast);

  cssText = stringify(result.ast, { compress: true });

  // todo 这里要防止style元素太多了的问题
  if (result.cssId) {
    if (!$getElementById(result.cssId)) {
      const style = $createElement('style');
      style.id = result.cssId;
      style.textContent = cssText;
      document.head.appendChild(style);
    }
  } else {
    console.warn(
      '[__NAME__:css] seems it is not a single class style, it is recommened to write these in a css file',
      omit(cssText)
    );
  }

  return result.cssId;
}
