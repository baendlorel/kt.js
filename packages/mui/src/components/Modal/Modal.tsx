import type { JSX } from '@ktjs/core';
import { ref } from '@ktjs/core';
import type { KTMuiProps } from '../../types/component.js';
import { Button } from '../Button/Button.js';
import { Dialog, type KTMuiDialogSize } from '../Dialog/Dialog.js';
import './Modal.css.ts';

export type KTMuiModalContent = string | JSX.Element | HTMLElement;

interface KTMuiModalCommonOptions extends Pick<KTMuiProps, 'class' | 'style'> {
  title?: string;
  size?: KTMuiDialogSize;
  fullWidth?: boolean;
  confirmText?: string;
  cancelText?: string;
}

export interface KTMuiAlertOptions extends KTMuiModalCommonOptions {}

export interface KTMuiConfirmOptions extends KTMuiModalCommonOptions {}

export interface KTMuiPromptOptions extends KTMuiModalCommonOptions {
  defaultValue?: string;
  placeholder?: string;
  inputType?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url';
  validator?: (value: string) => boolean | string;
}

const DIALOG_EXIT_MS = 240;

const resolveContent = (content: KTMuiModalContent) => {
  if (content instanceof Node) {
    return content;
  }
  return <p class="mui-modal-message">{content}</p>;
};

const createDialogClass = (className?: KTMuiProps['class']) => {
  const custom = typeof className === 'string' ? className : '';
  return ['mui-modal-dialog', custom].join(' ').trim();
};

const appendAndFocus = (dialog: HTMLElement, target?: HTMLElement) => {
  document.body.appendChild(dialog);
  if (target) {
    setTimeout(() => target.focus(), 0);
  }
};

const removeDialog = (dialog: HTMLElement) => {
  setTimeout(() => dialog.remove(), DIALOG_EXIT_MS);
};

const createActions = (children: HTMLElement[]) => {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < children.length; i++) {
    fragment.appendChild(children[i]);
  }
  const wrapper = <div class="mui-modal-actions"></div> as HTMLDivElement;
  wrapper.appendChild(fragment);
  return wrapper;
};

const createContainer = (content: KTMuiModalContent) => {
  const body = <div class="mui-modal-content"></div> as HTMLDivElement;
  body.appendChild(resolveContent(content));
  return body;
};

export function modalAlert(content: KTMuiModalContent, options: KTMuiAlertOptions = {}): Promise<void> {
  return new Promise((resolve) => {
    const openRef = ref(true);
    let settled = false;

    const finish = () => {
      if (settled) {
        return;
      }
      settled = true;
      openRef.value = false;
      resolve();
      removeDialog(dialog);
    };

    const confirmButton = (
      <Button variant="contained" size="small" on:click={finish}>
        {options.confirmText ?? 'OK'}
      </Button>
    ) as HTMLButtonElement;

    const dialog = (
      <Dialog
        {...{
          open: openRef,
          title: options.title ?? '提醒',
          size: options.size ?? 'xs',
          fullWidth: options.fullWidth ?? true,
          class: createDialogClass(options.class),
          style: options.style,
          actions: createActions([confirmButton]),
          'on:close': finish,
        }}
      >
        {createContainer(content)}
      </Dialog>
    ) as HTMLElement;

    appendAndFocus(dialog, confirmButton);
  });
}

export function modalConfirm(content: KTMuiModalContent, options: KTMuiConfirmOptions = {}): Promise<boolean> {
  return new Promise((resolve) => {
    const openRef = ref(true);
    let settled = false;

    const settle = (value: boolean) => {
      if (settled) {
        return;
      }
      settled = true;
      openRef.value = false;
      resolve(value);
      removeDialog(dialog);
    };

    const cancelButton = (
      <Button variant="text" size="small" on:click={() => settle(false)}>
        {options.cancelText ?? '取消'}
      </Button>
    ) as HTMLButtonElement;

    const confirmButton = (
      <Button variant="contained" size="small" on:click={() => settle(true)}>
        {options.confirmText ?? '确定'}
      </Button>
    ) as HTMLButtonElement;

    const dialog = (
      <Dialog
        {...{
          open: openRef,
          title: options.title ?? '请确认',
          size: options.size ?? 'xs',
          fullWidth: options.fullWidth ?? true,
          class: createDialogClass(options.class),
          style: options.style,
          actions: createActions([cancelButton, confirmButton]),
          'on:close': () => settle(false),
        }}
      >
        {createContainer(content)}
      </Dialog>
    ) as HTMLElement;

    appendAndFocus(dialog, confirmButton);
  });
}

export function modalPrompt(content: KTMuiModalContent, options: KTMuiPromptOptions = {}): Promise<string | null> {
  return new Promise((resolve) => {
    const openRef = ref(true);
    let settled = false;

    const input = (
      <input
        class="mui-modal-prompt-input"
        type={options.inputType ?? 'text'}
        value={options.defaultValue ?? ''}
        placeholder={options.placeholder ?? ''}
      />
    ) as HTMLInputElement;
    const error = <p class="mui-modal-prompt-error" style="display:none;"></p> as HTMLParagraphElement;

    const settle = (value: string | null) => {
      if (settled) {
        return;
      }
      settled = true;
      openRef.value = false;
      resolve(value);
      removeDialog(dialog);
    };

    const validate = () => {
      if (!options.validator) {
        return true;
      }
      const result = options.validator(input.value);
      if (result === true) {
        return true;
      }
      error.style.display = '';
      error.textContent = typeof result === 'string' ? result : '输入不合法';
      return false;
    };

    const submit = () => {
      if (!validate()) {
        return;
      }
      settle(input.value);
    };

    input.addEventListener('input', () => {
      error.style.display = 'none';
      error.textContent = '';
    });

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        submit();
      }
    });

    const cancelButton = (
      <Button variant="text" size="small" on:click={() => settle(null)}>
        {options.cancelText ?? '取消'}
      </Button>
    ) as HTMLButtonElement;

    const confirmButton = (
      <Button variant="contained" size="small" on:click={submit}>
        {options.confirmText ?? '确定'}
      </Button>
    ) as HTMLButtonElement;

    const body = createContainer(content);
    body.appendChild(input);
    body.appendChild(error);

    const dialog = (
      <Dialog
        {...{
          open: openRef,
          title: options.title ?? '请输入',
          size: options.size ?? 'xs',
          fullWidth: options.fullWidth ?? true,
          class: createDialogClass(options.class),
          style: options.style,
          actions: createActions([cancelButton, confirmButton]),
          'on:close': () => settle(null),
        }}
      >
        {body}
      </Dialog>
    ) as HTMLElement;

    appendAndFocus(dialog, input);
    input.select();
  });
}

export const Modal = {
  alert: modalAlert,
  confirm: modalConfirm,
  prompt: modalPrompt,
};

export const alert = modalAlert;
export const confirm = modalConfirm;
export const prompt = modalPrompt;
