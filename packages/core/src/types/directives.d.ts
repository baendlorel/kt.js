import { KTReactive } from './reactive';

export type KIfElement = JSX.Element & { __kIf?: KTReactive<boolean> };
