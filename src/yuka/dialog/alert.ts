import { I18NConfig } from '..';
import { createDialog, normalize, closeDialog } from './misc/common';
import { BasicOption, FooterOption, YesOption, DialogController } from './misc/types';

type DialogAlertOption = Partial<BasicOption & FooterOption & YesOption>;

/**
 * 根据配置弹出alert窗口，窗口是以DOM标签dialog制作的
 * @param message 消息内容
 * @param options 可选的详细配置，根据TS类型提示进行配置即可
 */
export function alert(message: string, options?: DialogAlertOption): DialogController<'alert'>;

/**
 * 根据配置弹出alert窗口，窗口是以DOM标签dialog制作的
 * @param i18nConfig 多国语言的消息配置，会根据现在的语言环境自动显示对应文字
 * @param options 可选的详细配置，根据TS类型提示进行配置即可
 */
export function alert(
  i18nConfig: I18NConfig,
  options?: DialogAlertOption
): DialogController<'alert'>;

/**
 * 根据配置弹出alert窗口，窗口是以DOM标签dialog制作的
 * @param options 直接使用详细配置，根据TS类型提示进行配置即可
 */
export function alert(options: DialogAlertOption): DialogController<'alert'>;

export function alert(
  arg1: string | I18NConfig | DialogAlertOption,
  options?: DialogAlertOption
): DialogController<'alert'> {
  const opt = normalize('alert', arg1, options);
  const { dialog, yes } = createDialog<'alert'>(opt);

  const result = new Promise((resolve) => {
    yes.addEventListener('click', () => {
      resolve();
    });
  }) as Promise<void>;

  return {
    result,
    then: result.then.bind(result),
    close: () => closeDialog(dialog),
  };
}
