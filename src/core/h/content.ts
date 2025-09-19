import { deferedBranch } from 'defered-branch';
import { $appendChild, $createTextNode } from '@/lib/dom.js';
import { $isArray } from '@/lib/native.js';
import { $isObject } from '@/lib/whether.js';

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

    if (c.isKT) {
      $appendChild.call(element, c);
      continue;
    }

    invalid();
  }
};

const contentIsObject = (element: HTMLElement, content: HTMLKEnhancedElement) => {
  if (!content.isKT) {
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
