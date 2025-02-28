import { I18NConfig } from '..';
import { createDialog, normalize, DIALOG_CONFIRM_ATTR, closeDialog } from './misc/common';
import { BasicOption, FooterOption, YesOption, DialogController, NoOption } from './misc/types';

type DialogConfirmOption = Partial<BasicOption & FooterOption & YesOption & NoOption>;

/**
 * 根据配置弹出confirm窗口，窗口是以DOM标签dialog制作的
 * @param message 消息内容
 * @param options 可选的详细配置，根据TS类型提示进行配置即可
 * @returns 点击确认返回true，点击取消返回false
 */
export function confirm(
  message: string,
  options?: DialogConfirmOption
): DialogController<'confirm'>;

/**
 * 根据配置弹出confirm窗口，窗口是以DOM标签dialog制作的
 * @param i18nConfig 多国语言的消息配置，会根据现在的语言环境自动显示对应文字
 * @param options 可选的详细配置，根据TS类型提示进行配置即可
 * @returns 点击确认返回true，点击取消返回false
 */
export function confirm(
  i18nConfig: I18NConfig,
  options?: DialogConfirmOption
): DialogController<'confirm'>;

/**
 * 根据配置弹出confirm窗口，窗口是以DOM标签dialog制作的
 * @param options 直接使用详细配置，根据TS类型提示进行配置即可
 */
export function confirm(options: DialogConfirmOption): DialogController<'confirm'>;

export function confirm(
  arg1: string | I18NConfig | DialogConfirmOption,
  options?: DialogConfirmOption
): DialogController<'confirm'> {
  const opt = normalize('confirm', arg1, options);
  const { dialog } = createDialog<'confirm'>(opt);

  const result = new Promise((resolve) =>
    dialog.addEventListener('close', () =>
      resolve(dialog.getAttribute(DIALOG_CONFIRM_ATTR) === 'yes')
    )
  ) as Promise<boolean>;

  return {
    result,
    then: result.then.bind(result),
    close: () => closeDialog(dialog),
  };
}
