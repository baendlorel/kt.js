import { KTReactive } from './reactive';

export type KIfElement = JSX.Element & { __kif?: KTReactive<boolean> };
export type KElseElement = JSX.Element & { __kElse?: any };
