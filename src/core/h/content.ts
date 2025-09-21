import { deferedBranchDynamic } from 'defered-branch';
import { $isArray, $isObject, $appendChild, $createTextNode } from '@/lib/index.js';

import { isKEnhanced } from '../privates.js';

const contentIsString = (element: HTMLKEnhancedElement, content: RawContent) => {
  content = content as string;
  element.ktext = content;
};

const contentIsArray = (element: HTMLKEnhancedElement, content: RawContent) => {
  content = content as (HTMLKEnhancedElement | string)[];
  const len = content.length;
  for (let i = 0; i < len; i++) {
    const c = content[i];
    if (typeof c === 'string') {
      $appendChild.call(element, $createTextNode(c));
      continue;
    }

    if (isKEnhanced(c)) {
      $appendChild.call(element, c);
      continue;
    }

    invalid();
  }
};

const contentIsObject = (element: HTMLKEnhancedElement, content: RawContent) => {
  content = content as HTMLKEnhancedElement;
  if (!isKEnhanced(content)) {
    invalid();
  }

  $appendChild.call(element, content);
};

const invalid = (): never => {
  throw new TypeError(
    '[__NAME__:h] content must be a string, HTMLEnhancedElement or an array of HTMLEnhancedElement.'
  );
};

type BranchFn = (element: HTMLKEnhancedElement, content: RawContent) => void;

export const contentBranch = deferedBranchDynamic<BranchFn>()
  .add((_, content) => typeof content === 'string', contentIsString)
  .add((_, content) => $isObject(content), contentIsObject)
  .add((_, content) => $isArray(content), contentIsArray)
  .nomatch(invalid);
