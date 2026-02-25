import { ref } from 'kt.js';
import { createHighlighterCore } from 'shiki/core';
import { createJavaScriptRegexEngine } from 'shiki/engine/javascript';
import langBash from 'shiki/dist/langs/bash.mjs';
import langJson from 'shiki/dist/langs/json.mjs';
import langTsx from 'shiki/dist/langs/tsx.mjs';
import themeOneLight from 'shiki/dist/themes/one-light.mjs';

const highlighterPromise = createHighlighterCore({
  themes: [themeOneLight],
  langs: [langTsx, langBash, langJson],
  engine: createJavaScriptRegexEngine(),
});

const normalizeLang = (lang: string) => {
  const normalized = lang.toLowerCase();
  if (normalized === 'sh' || normalized === 'shell') {
    return 'bash';
  }
  if (normalized === 'jsonc' || normalized === 'json5') {
    return 'json';
  }
  if (normalized === 'ts' || normalized === 'typescript' || normalized === 'js' || normalized === 'javascript') {
    return 'tsx';
  }
  return normalized;
};

export const highlight = (code: string, lang: string = 'tsx') => {
  const o = ref(document.createComment('loading code...') as unknown as Node);
  highlighterPromise
    .then((highlighter) => {
      const html = highlighter.codeToHtml(code, {
        lang: normalizeLang(lang) as any,
        theme: 'one-light',
      });
      o.value = <div class="highlight" k-html={html}></div>;
    })
    .catch(() => (o.value = <pre class="highlight">{code}</pre>));
  return o;
};
