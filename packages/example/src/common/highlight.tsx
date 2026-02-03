import { ref } from 'kt.js';
import { codeToHtml } from 'shiki';

export const highlight = (code: string, lang: string = 'tsx') => {
  const o = ref(document.createComment('loading code...') as unknown as Node);
  codeToHtml(code, { lang, theme: 'github-light' }).then((v) => (o.value = <div class="highlight" k-html={v}></div>));
  return o;
};
