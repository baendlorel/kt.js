import { i18n, Yuka, I18NConfig } from '../..';
import { DialogCreateResult, DialogOption, DialogType } from './types';

export const isDialogSupported = ((supported) => {
  if (!supported) {
    console.error('[Yuka:dialog] dialog is not supported in this browser!');
  }
  return supported;
})(typeof document.createElement('dialog').showModal === 'function');

export const DIALOG_CONFIRM_ATTR = 'yk-confirm';

const DIALOG_ROLE = 'yk-role';

const DEFAULT_FOOTER_BUTTON_I18N = {
  yes: {
    zh: '确定',
    en: 'Yes',
  },
  no: {
    zh: '取消',
    en: 'No',
  },
};

const DialogState = {
  ATTR_NAME: 'yk-state',
  OPENED: 'opened',
  OPENING: 'opening',
  CLOSING: 'closing',
};

/**
 * 制作出基于onYes和onNo回调函数的按钮点击事件处理器
 * 会在回调函数返回值为false时阻止dialog关闭，其余情况不阻止
 * 会在prompt中使用，使得此函数运行在promptValidator之后
 * @param dialog
 * @param handler 使用者给出的onYes和onNo
 * @param type
 * @returns
 */
export const createFooterButtonClickHandler =
  (dialog: HTMLDialogElement, handler: ((event?: Event) => any) | undefined, type: 'yes' | 'no') =>
  (e?: Event) => {
    if (typeof handler !== 'function') {
      dialog.setAttribute(DIALOG_CONFIRM_ATTR, type);
      closeDialog(dialog);
      return Promise.resolve();
    }
    // 归一化为Promise的情形
    return Promise.resolve(handler(e)).then((result) => {
      // 只有false会阻止dialog关闭
      if (result !== false) {
        dialog.setAttribute(DIALOG_CONFIRM_ATTR, type);
        closeDialog(dialog);
      }
    });
  };

const createFooterButton = (
  dialog: HTMLDialogElement,
  options: DialogOption,
  type: 'yes' | 'no'
) => {
  const b = document.createElement('button');
  const content = type === 'yes' ? options.yesText : options.noText;

  // 填充按钮文字
  if (typeof content === 'string') {
    b.textContent = content;
  } else if (i18n.valid(content)) {
    b.textContent = i18n.get(content as I18NConfig);
  } else {
    b.textContent = i18n.get(DEFAULT_FOOTER_BUTTON_I18N[type]);
  }

  // TODO yes no的样式改为由sass决定
  // 设置样式
  if (type === 'no') {
    b.style.backgroundColor = '#F8F9FA';
    b.style.color = 'black';
    b.style.marginRight = '8px';
  }

  b.addEventListener('click', createFooterButtonClickHandler(dialog, options.onYes, type));

  return b;
};

const applyStyle = (el: HTMLElement, style: Partial<CSSStyleDeclaration>) => {
  for (const k in style) {
    if (style.hasOwnProperty(k)) {
      (el.style as any)[k] = style[k];
    }
  }
};

const applyTitle = (dialog: HTMLDialogElement, title: HTMLDivElement, options: DialogOption) => {
  // 如果没有设置title，就删除title元素。
  // 和下方的body不一样，body留着是为了放置prompt的input
  if (!options.title) {
    title.remove();
    return { title: undefined };
  }

  if (options.titleStyle && typeof options === 'object') {
    applyStyle(title, options.titleStyle);
  }

  if (options.variant) {
    title.classList.add(`bg-${options.variant}`);
  }

  if (typeof options.title === 'string') {
    title.textContent = options.title;
    return { title };
  }

  if (i18n.valid(options.title)) {
    title.textContent = i18n.get(options.title as I18NConfig);
    return { title };
  }

  if (options.title instanceof HTMLElement) {
    title.replaceWith(options.title);
    return { title: options.title };
  }

  if (options.title instanceof Yuka) {
    title.replaceWith(options.title.el);
    return { title: options.title.el };
  }

  throw new Error("[Yuka:dialog applyTitle] options.title's type is invalid");
};

const applyBody = (dialog: HTMLDialogElement, body: HTMLDivElement, options: DialogOption) => {
  if (options.bodyStyle && typeof options.bodyStyle === 'object') {
    applyStyle(body, options.bodyStyle);
  }

  // prompt和progress的body不能随意定制
  if (options.type === 'prompt' || options.type === 'progress') {
    return { body };
  }

  // if (!options.body) {
  //   body.remove();
  //   return { body: undefined };
  // }

  if (typeof options.body === 'string') {
    body.textContent = options.body;
    return { body };
  }

  if (i18n.valid(options.body)) {
    body.textContent = i18n.get(options.body as I18NConfig);
    return { body };
  }

  if (options.body instanceof HTMLElement) {
    body.replaceWith(options.body);
    return { body: options.body };
  }

  if (options.body instanceof Yuka) {
    body.replaceWith(options.body.el);
    return { body: options.body.el };
  }

  throw new Error("[Yuka:dialog applyBody] options.body's type is invalid");
};

/**
 * 在没有footer的情况下会根据type的不同创建默认的确认按钮和取消按钮
 * 如果onYes、onNo事件返回值为false，则会阻止dialog关闭
 * @param dialog 对话框
 * @param footer 对话框的底部
 * @param options 扩展type后的配置
 * @returns
 */
const applyFooter = (dialog: HTMLDialogElement, footer: HTMLDivElement, options: DialogOption) => {
  // 创建yes按钮的事件并绑定
  const yes = createFooterButton(dialog, options, 'yes');
  const no = createFooterButton(dialog, options, 'no');

  if (options.footerStyle && typeof options === 'object') {
    applyStyle(footer, options.footerStyle);
  }

  switch (options.type) {
    case 'alert':
    case 'prompt':
      footer.appendChild(yes);
      break;
    case 'confirm':
      footer.appendChild(no);
      footer.appendChild(yes);
  }

  return { footer, yes, no };

  // * 不允许使用options.footer来自定义footer
};

export const normalize = (
  type: DialogType,
  arg1: string | I18NConfig | Partial<DialogOption> | undefined,
  options: Partial<DialogOption> | undefined
) => {
  // 这里只做一些通用的必要的校验，更细致的校验将在其他函数中完成
  if (!arg1 && !options) {
    throw new Error('[Yuka:dialog normalize] arg1 and options cannot be both undefined/null.');
  }
  if (typeof arg1 !== 'string' && typeof arg1 !== 'object') {
    throw new Error('[Yuka:dialog normalize] arg1 must be a string or an i18nConfig object.');
  }

  // 确保options一定是一个对象而非undefined
  options = Object.assign({ type }, options) as DialogOption;

  // 只用message的
  if (typeof arg1 === 'string') {
    options.body = arg1;
    options.promptLabel = options.promptLabel || arg1;
  }
  // 用i18nConfig的
  else if (i18n.valid(arg1)) {
    options.body = i18n.get(arg1 as I18NConfig);
    options.promptLabel = options.promptLabel || i18n.get(arg1 as I18NConfig);
  }
  // 直接用options的
  else {
    options = arg1 as DialogOption;
  }

  return options as DialogOption;
};

/**
 * 已经注册了事件，close之后dialog就会自动remove掉
 */
export const closeDialog = (dialog: HTMLDialogElement) => {
  dialog.setAttribute(DialogState.ATTR_NAME, DialogState.CLOSING);
  dialog.classList.remove('show');
};

const openDialog = (dialog: HTMLDialogElement) => {
  dialog.setAttribute(DialogState.ATTR_NAME, DialogState.OPENING);
  dialog.classList.add('show');
};

export const createDialog = <T extends DialogType>(options: DialogOption) => {
  const dialog = document.createElement('dialog');
  const rawTitle = document.createElement('div');
  const rawBody = document.createElement('div');
  const rawFooter = document.createElement('div');

  // 元素标签设置
  dialog.setAttribute(DIALOG_ROLE, 'dialog');
  rawTitle.setAttribute(DIALOG_ROLE, 'title');
  rawBody.setAttribute(DIALOG_ROLE, 'body');
  rawFooter.setAttribute(DIALOG_ROLE, 'footer');

  dialog.appendChild(rawTitle);
  dialog.appendChild(rawBody);
  dialog.appendChild(rawFooter);

  const { body } = applyBody(dialog, rawBody, options);
  const { title } = applyTitle(dialog, rawTitle, options);
  const { footer, yes, no } = applyFooter(dialog, rawFooter, options);

  if (options.dialogStyle && typeof options === 'object') {
    applyStyle(dialog, options.dialogStyle);
  }

  document.body.appendChild(dialog);

  dialog.showModal();

  const compare = (state: string, targetOpacity: string) => {
    const isRightState = dialog.getAttribute(DialogState.ATTR_NAME) === state;
    const elOpacity = Number(getComputedStyle(dialog).opacity);
    const opacity = Number(targetOpacity);
    return isRightState && Math.abs(elOpacity - opacity) < 0.06;
  };

  dialog.addEventListener('transitionstart', (e: TransitionEvent) => {
    // 确定是dialog元素、确定转换的属性是opacity、确定不是dialog的backdrop在重复触发事件
    if (dialog !== (e.target as Node) || e.propertyName !== 'opacity' || e.pseudoElement !== '') {
      return;
    }

    // 检测opacity从0向1变化，触发onOpen
    if (compare(DialogState.OPENING, '0')) {
      typeof options.onOpen === 'function' && options.onOpen();
    }

    // 检测opacity从1向0变化，触发onClose
    if (compare(DialogState.CLOSING, '1')) {
      typeof options.onClose === 'function' && options.onClose();
    }
  });

  dialog.addEventListener('transitionend', (e: TransitionEvent) => {
    // 确定是dialog元素、确定转换的属性是opacity、确定不是dialog的backdrop在重复触发事件
    if (dialog !== (e.target as Node) || e.propertyName !== 'opacity' || e.pseudoElement !== '') {
      return;
    }

    if (compare(DialogState.OPENING, '1')) {
      dialog.setAttribute(DialogState.ATTR_NAME, DialogState.OPENED);
      typeof options.onOpened === 'function' && options.onOpened();
    }

    if (compare(DialogState.CLOSING, '0')) {
      typeof options.onClosed === 'function' && options.onClosed();
      dialog.close();

      // 延迟删除，防止触发的close事件取不到dialog
      setTimeout(() => {
        dialog.remove();
      }, 1000);
    }
  });

  openDialog(dialog);

  return { dialog, title, body, footer, yes, no } as DialogCreateResult[T];
};
