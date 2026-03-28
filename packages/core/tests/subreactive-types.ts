import { h, JSX, KTRawContent, KTRefLike, ref } from '@ktjs/core';

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

const _content: KTRawContent = [textGet, 'literal', 1];
const _divAttr: JSX.IntrinsicElements['div'] = { class: classSub };
const _modelAttr: JSX.IntrinsicAttributes = { 'k-model': nameModel };
const _modelIsRefLike: Assert<IsAssignable<typeof nameModel, KTRefLike<string>>> = true;

h('div', { class: classSub }, textGet);
h('input', { 'k-model': nameModel });
