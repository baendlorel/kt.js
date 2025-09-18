import { Sym } from '@/consts/sym.js';

function h(
  tagName: keyof HTMLElementTagNameMap,
  attr: YukaAttribute = Sym.NotProvided as any,
  children: HTMLElement[] = Sym.NotProvided as any
) {}
