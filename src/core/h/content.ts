import { deferedBranch } from 'defered-branch';
import { $isArray, $isObject, $appendChild, $createTextNode } from '@/lib/index.js';

import { isKEnhanced } from '../privates.js';

const contentIsString = (element: HTMLKEnhancedElement, content: string) => {
  element.ktext = content;
};

const contentIsArray = (element: HTMLElement, content: (HTMLKEnhancedElement | string)[]) => {
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

const contentIsObject = (element: HTMLElement, content: HTMLKEnhancedElement) => {
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

export const createContentBranch = (
  content: (HTMLKEnhancedElement | string)[] | HTMLKEnhancedElement | string
) =>
  deferedBranch()
    .add(typeof content === 'string', contentIsString)
    .add($isObject(content), contentIsObject)
    .add($isArray(content), contentIsArray)
    .nomatch(invalid);
