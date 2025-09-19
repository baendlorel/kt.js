import { DocumentCreateTextNode, IsArray, IsObject } from '@/core/native.js';
import { deferedBranch } from 'defered-branch';

const contentIsString = (element: HTMLKEnhancedElement, content: string) => {
  element.ktext = content;
};

const contentIsArray = (element: HTMLElement, content: (HTMLKEnhancedElement | string)[]) => {
  const len = content.length;
  for (let i = 0; i < len; i++) {
    const c = content[i];
    if (typeof c === 'string') {
      element.appendChild(DocumentCreateTextNode(c));
      continue;
    }

    if (c.isKT) {
      element.appendChild(c);
      continue;
    }

    invalid();
  }
};

const contentIsObject = (element: HTMLElement, content: HTMLKEnhancedElement) => {
  if (!content.isKT) {
    invalid();
  }

  element.appendChild(content);
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
    .add(IsObject(content), contentIsObject)
    .add(IsArray(content), contentIsArray)
    .nomatch(invalid);
