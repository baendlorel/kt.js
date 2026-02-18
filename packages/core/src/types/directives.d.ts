import { KTReactive } from './reactive';

export type KIfElement = JSX.Element & { __kif__?: KTReactive<boolean> };
export type KElseElement = JSX.Element & { __kelse__?: any };
