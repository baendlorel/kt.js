import { ref } from 'kt.js';
import { highlight, highlightDark } from '../common/highlight.js';
import { state } from '../common/state.js';

type CodeProps = {
  code: string;
  lang?: string;
};

const fallbackCopy = (code: string) => {
  const textarea = document.createElement('textarea');
  textarea.value = code;
  textarea.setAttribute('readonly', '');
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();
  const copied = document.execCommand('copy');
  textarea.remove();
  return copied;
};

export function Code(props: CodeProps) {
  const code = props.code.replace('// @ts-nocheck', '').trim();
  const copied = ref(false);
  let copiedTimer: number | undefined;

  const copyCode = async () => {
    let isCopied = false;

    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(code);
        isCopied = true;
      } catch {
        isCopied = false;
      }
    }

    if (!isCopied) {
      isCopied = fallbackCopy(code);
    }

    if (!isCopied) {
      return;
    }

    copied.value = true;
    if (copiedTimer !== undefined) {
      clearTimeout(copiedTimer);
    }
    copiedTimer = window.setTimeout(() => (copied.value = false), 1200);
  };

  return (
    <div class="demo-code code-panel">
      <button class="demo-code-copy" on:click={copyCode}>
        {copied.map((v) => (v ? 'Copied' : 'Copy'))}
      </button>
      <div k-if={state.map((v) => v.theme === 'light')}> {highlight(code, props.lang || 'tsx')}</div>
      <div k-else> {highlightDark(code, props.lang || 'tsx')} </div>
    </div>
  );
}
