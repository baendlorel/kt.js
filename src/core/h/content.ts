import { deferedBranchDynamic } from 'defered-branch';
import { HTMLKElement } from '@/types/enhance.js';
import { RawContent } from '@/types/h.js';

import { KIdSymbol, KTextSymbol } from '@/consts/sym.js';
import { $isArray, $isObject, $appendChild, $textNode } from '@/lib/index.js';

const contentIsString = (element: HTMLKElement, content: RawContent) => {
  content = content as string;
  // Only set ktext if the element supports it (has a text node)
  if (element[KTextSymbol]) {
    element.ktext = content;
  }
};

const contentIsArray = (element: HTMLKElement, content: RawContent) => {
  content = content as (HTMLKElement | string)[];
  const len = content.length;
  for (let i = 0; i < len; i++) {
    const c = content[i];
    if (typeof c === 'string') {
      $appendChild.call(element, $textNode(c));
      continue;
    }

    if (KIdSymbol in c) {
      $appendChild.call(element, c);
      continue;
    }

    invalid();
  }
};

const contentIsObject = (element: HTMLKElement, content: RawContent) => {
  content = content as HTMLKElement;
  if (!(KIdSymbol in content)) {
    invalid();
  }

  $appendChild.call(element, content);
};

const invalid = (): never => {
  throw new TypeError(
    '[__NAME__:h] content must be a string, HTMLEnhancedElement or HTMLEnhancedElement[].'
  );
};

type BranchFn = (element: HTMLKElement, content: RawContent) => void;
type NoMatchFn = typeof invalid;
type PredicateFn = (_: null, content: RawContent) => boolean;

export const contentBranch = deferedBranchDynamic<BranchFn, NoMatchFn, PredicateFn>()
  .add((_, content) => typeof content === 'string', contentIsString)
  .add((_, content) => $isObject(content), contentIsObject)
  .add((_, content) => $isArray(content), contentIsArray)
  .nomatch(invalid);
