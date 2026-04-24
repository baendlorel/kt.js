import { JSX, KTRawContent, KTRef, ref } from '@ktjs/core';

type IsAssignable<From, To> = [From] extends [To] ? true : false;
type Assert<T extends true> = T;

const state = ref({
  ui: { className: 'card' },
  form: { name: 'kt' },
  text: 'hello',
});

const textGet = state.get('text');
const classSub = state.subref('ui', 'className');
const nameModel = state.subref('form', 'name');

const _content: KTRawContent = [, 'literal', 1];
const _divAttr: JSX.IntrinsicElements['div'] = { class: classSub };
const _modelAttr: JSX.IntrinsicAttributes = { 'k-model': nameModel }; // FIXME 这里居然需要断言，为什么Sub的类型不能直接嵌入
const _modelIsRefLike: Assert<IsAssignable<typeof nameModel, KTRef<string>>> = true;

<div class={classSub}></div>;
<input type="text" k-model={nameModel} />;
