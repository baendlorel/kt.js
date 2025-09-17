import { Yuka } from './yuka.js';

declare global {
  const __IS_DEV__: boolean;

  type YukaCreator = (...args: any[]) => Yuka<HTMLElementTypes>;
}
