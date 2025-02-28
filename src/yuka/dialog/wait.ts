import { i18n, I18NConfig } from '..';
import { createDialog, closeDialog, normalize } from './misc/common';
import { BasicOption, CountDownOption, DialogController } from './misc/types';

type DialogWaitOption = Partial<BasicOption & CountDownOption>;

// 此为参数归一化后通用的wait函数
const _wait = (
  arg1: string | I18NConfig | undefined,
  until: number | Promise<any>,
  options?: DialogWaitOption
): DialogController<'wait'> => {
  if (typeof until !== 'number' && until instanceof Promise === false) {
    throw new TypeError('[Yuka:dialog wait] until must be a number or Promise.');
  }
  // wait样式默认文字居中
  options = Object.assign(
    {
      titleStyle: { textAlign: 'center' },
      bodyStyle: { textAlign: 'center' },
    },
    options
  );

  const opt = normalize('wait', arg1, options);
  const { dialog, body, footer } = createDialog<'wait'>(opt);

  // 删除不需要的元素
  footer.remove();

  const startTime = Date.now();
  const cdt = options?.countDownText;
  let timePast = 0;
  // 这里需要根据countDownText的返回值来重载refreshCountDown
  // 不能提前运行来检测返回值，以避免countDownText存在副作用
  // * 不考虑返回值一会string一会Promise变来变去的情况
  let _refresh = () => undefined as any;
  if (typeof cdt === 'function') {
    _refresh = () => {
      const text = cdt(timePast);
      if (typeof text === 'string') {
        body.textContent = text;
        _refresh = () => (body.textContent = cdt(timePast) as string);
        return;
      }
      if (i18n.valid(text)) {
        body.textContent = i18n.get(text as I18NConfig);
        _refresh = () => (body.textContent = i18n.get(cdt(timePast) as I18NConfig));
        return;
      }

      if (text instanceof Promise) {
        text.then((v) => {
          if (typeof v === 'string') {
            body.textContent = v;
            _refresh = () => (cdt(timePast) as Promise<string>).then((t) => (body.textContent = t));
            return;
          }

          if (i18n.valid(v)) {
            body.textContent = i18n.get(v as I18NConfig);
            _refresh = () =>
              (cdt(timePast) as Promise<I18NConfig>).then((t) => (body.textContent = i18n.get(t)));
            return;
          }
        });
      }

      throw new TypeError(
        '[Yuka:dialog wait.countDownText] countDownText must return a string/I18NConfig/Promise<string>/Promise<I18NConfig> .'
      );
    };
  }

  // 先展示第一次的文本，同时达到重载此函数的效果
  _refresh();

  const result = new Promise((resolve) => {
    const tick = (() => {
      let fufilled = false;

      // 并非归一化变量，而是把判定终止的函数归一化，让tick得以有统一的写法而不用根据until类型来写
      const checkFufilled = (() => {
        if (until instanceof Promise) {
          until.finally(() => (fufilled = true));
          return () => fufilled;
        }
        if (typeof until === 'number') {
          return () => timePast >= until;
        }
        throw new Error('[Yuka:dialog wait] Invalid until type, must be a number or Promise.');
      })();

      return () => {
        timePast = Date.now() - startTime;
        _refresh();
        if (checkFufilled()) {
          closeDialog(dialog);
          resolve(timePast);
          return;
        }
        requestAnimationFrame(tick);
      };
    })();

    tick();
  }) as Promise<number>;

  return {
    result,
    then: result.then.bind(result),
    close: () => closeDialog(dialog),
  };
};

/**
 * 根据配置弹出wait窗口，窗口是以DOM标签dialog制作的
 * wait窗口的文字默认居中显示
 * @param message 消息内容
 * @param until 如果是毫秒数，则等待这么多毫秒。如果是Promise，则等待这个Promise.finally触发
 * @param options 详细配置，根据TS类型提示进行配置即可
 * @returns  DialogController<'wait'> 在返回Promise，当resolve时表示等待已经结束
 */
export function wait(
  message: string,
  until: number | Promise<any>,
  options?: DialogWaitOption
): DialogController<'wait'>;

/**
 * 根据配置弹出wait窗口，窗口是以DOM标签dialog制作的
 * wait窗口的文字默认居中显示
 * @param i18nConfig 多国语言的消息配置，会根据现在的语言环境自动显示对应文字
 * @param until 如果是毫秒数，则等待这么多毫秒。如果是Promise，则等待这个Promise.finally触发
 * @param options 详细配置，根据TS类型提示进行配置即可
 * @returns  DialogController<'wait'> 在返回Promise，当resolve时表示等待已经结束
 */
export function wait(
  i18nConfig: I18NConfig,
  until: number | Promise<any>,
  options?: DialogWaitOption
): DialogController<'wait'>;

/**
 * 根据配置弹出wait窗口，窗口是以DOM标签dialog制作的
 * wait窗口的文字默认居中显示
 * @param until 如果是毫秒数，则等待这么多毫秒。如果是Promise，则等待这个Promise.finally触发
 * @param options 详细配置，根据TS类型提示进行配置即可
 * @returns  DialogController<'wait'> 在返回Promise，当resolve时表示等待已经结束
 */
export function wait(
  until: number | Promise<any>,
  options?: DialogWaitOption
): DialogController<'wait'>;

export function wait(
  arg1: string | I18NConfig | number | Promise<any>,
  until?: number | Promise<any> | DialogWaitOption,
  options?: DialogWaitOption
): DialogController<'wait'> {
  // 开始检测参数是哪一种重载
  // 1. wait(message: string, until: number | Promise<any>, options?: DialogWaitOption): void;
  if (typeof arg1 === 'string' && (typeof until === 'number' || until instanceof Promise)) {
    return _wait(arg1, until, options);
  }

  // 2. wait(i18nConfig: I18NConfig, until: number | Promise<any>, options?: DialogWaitOption): void;
  if (i18n.valid(arg1) && (typeof until === 'number' || until instanceof Promise)) {
    return _wait(arg1 as I18NConfig, until, options);
  }

  // 3. wait(until: number | Promise<any>, options?: DialogWaitOption): void;
  if (typeof arg1 === 'number' || arg1 instanceof Promise) {
    options = until as DialogWaitOption;
    until = arg1 as number | Promise<any>;
    return _wait(undefined, until, options);
  }

  throw new Error('[Yuka:dialog wait] Invalid overload.');
}
