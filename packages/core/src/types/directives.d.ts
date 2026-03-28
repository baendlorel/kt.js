import type { KTReactiveLike } from '../reactable/reactive.js';
import type { JSX } from './jsx.js';

export type KIfElement = JSX.Element & {
  /**
   * Save the reactive value for `k-if` to allow `k-else` to listen to it
   */
  __kif__?: KTReactiveLike<boolean>;
};

export type KElseElement = JSX.Element & { __kelse__: any };
