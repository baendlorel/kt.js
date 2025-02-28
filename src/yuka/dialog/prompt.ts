import { i18n, I18NConfig, Yuka } from '..';
import {
  createDialog,
  normalize,
  closeDialog,
  createFooterButtonClickHandler,
} from './misc/common';
import {
  BasicOption,
  FooterOption,
  YesOption,
  DialogController,
  PromptInputOption,
  DialogOption,
} from './misc/types';

type DialogPromptOption = Omit<
  Partial<BasicOption & FooterOption & YesOption & PromptInputOption>,
  'body'
>;

const createPrompt = (body: HTMLDivElement, options: DialogOption) => {
  const promptLabel = document.createElement('label');
  const promptInputDiv = document.createElement('div');
  const promptInput = document.createElement('input');
  const promptFeedback = document.createElement('div');

  promptInput.type = 'text';
  if (typeof options.promptDefault === 'string') {
    promptInput.value = options.promptDefault;
  }

  promptFeedback.classList.add('feedback');
  promptInputDiv.style.display = 'grid';
  promptInputDiv.style.marginTop = '8px';
  promptInputDiv.style.gridTemplateColumns = '1fr';
  promptInputDiv.style.width = '100%';
  promptInputDiv.append(promptInput);
  body.append(promptLabel);
  body.append(promptInputDiv);
  body.append(promptFeedback);

  const result = {
    label: promptLabel as HTMLElement,
    input: promptInput,
    feedback: promptFeedback,
  };

  if (typeof options.promptLabel === 'string') {
    promptLabel.textContent = options.promptLabel;
    return result;
  }

  if (i18n.valid(options.promptLabel)) {
    promptLabel.textContent = i18n.get(options.promptLabel as I18NConfig);
    return result;
  }

  if (options.promptLabel instanceof HTMLElement) {
    promptLabel.replaceWith(options.promptLabel);
    result.label = options.promptLabel;
    return result;
  }

  if (options.promptLabel instanceof Yuka) {
    promptLabel.replaceWith(options.promptLabel.el);
    result.label = options.promptLabel.el;
    return result;
  }

  throw new Error("[Yuka:dialog appendPromptInput] options.promptLabel's type is invalid");
};

export function prompt(
  label: string | I18NConfig,
  options?: DialogPromptOption
): DialogController<'prompt'>;

export function prompt(
  label: string | I18NConfig,
  options?: DialogPromptOption
): DialogController<'prompt'> {
  const opt = normalize('prompt', label, options);
  const { dialog, body, yes } = createDialog<'prompt'>(opt);
  const prompt = createPrompt(body, opt); // 会直接append好，无需手动操作
  const newYes = yes.cloneNode(true) as HTMLButtonElement;
  const yesThenClose = createFooterButtonClickHandler(dialog, opt.onYes, 'yes');
  yes.replaceWith(newYes);

  // 这里要使得onYes在validator之后再执行，导致onYes的执行时机不确定
  const result = new Promise((resolve) => {
    newYes.addEventListener('click', () => {
      // 没有设置validator，直接关闭窗口，resolve输入框的值
      if (typeof opt.promptValidator !== 'function') {
        yesThenClose().then(() => resolve(prompt.input.value));
        return;
      }

      // 清空输入框的invalid样式和报错信息
      prompt.input.classList.remove('invalid');
      prompt.feedback.textContent = '';

      const judge = (v: string | I18NConfig | true) => {
        // 校验通过，直接关闭窗口，resolve输入框的值
        if (v === true) {
          yesThenClose().then(() => resolve(prompt.input.value));
          return;
        }
        // 校验不通过，添加invalid样式和报错信息
        prompt.input.classList.add('invalid');
        if (typeof v === 'string') {
          prompt.feedback.textContent = v;
          return;
        }
        if (i18n.valid(v)) {
          prompt.feedback.textContent = i18n.get(v);
          return;
        }
        throw new Error(
          '[Yuka:dialog prompt] Invalid promptValidator return value, must be a string/true/I18NConfig or Promised these types.'
        );
      };

      // 如果有validator，就先执行validator
      const isValid = opt.promptValidator(prompt.input.value);
      if (isValid instanceof Promise) {
        isValid.then(judge);
      } else {
        judge(isValid);
      }
    });
  }) as Promise<string>;

  return {
    result,
    then: result.then.bind(result),
    close: () => closeDialog(dialog),
  };
}
