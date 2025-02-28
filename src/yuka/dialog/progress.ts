import { i18n, I18NConfig } from '..';
import { createDialog, closeDialog, normalize } from './misc/common';
import { BasicOption, ProgressOption, DialogController, DialogOption } from './misc/types';

type DialogProgressOption = Partial<BasicOption & ProgressOption>;

const createProgress = (body: HTMLDivElement, options: DialogOption) => {
  const wrapper = document.createElement('div');
  const label = document.createElement('div');
  const percentage = document.createElement('div');
  const background = document.createElement('div');
  const bar = document.createElement('div');

  wrapper.setAttribute('yk-role', 'progress-wrapper');
  background.setAttribute('yk-role', 'progress-background');
  label.setAttribute('yk-role', 'progress-label');
  percentage.setAttribute('yk-role', 'progress-percentage');
  bar.setAttribute('yk-role', 'progress-bar');

  // 预设的barType样式，进入此函数前已经设置过默认值了
  wrapper.setAttribute('bar-type', options.barType as string);

  // 文字
  if (typeof options.progressLabel === 'string') {
    label.textContent = options.progressLabel;
  }
  if (i18n.valid(options.progressLabel)) {
    label.textContent = i18n.get(options.progressLabel as I18NConfig);
  }

  background.append(bar);
  wrapper.append(label, percentage, background);
  body.append(wrapper);
  return { wrapper, label, percentage, background, bar };
};

/**
 * 根据配置弹出progress窗口，窗口是以DOM标签dialog制作的
 * progress窗口的文字默认居中显示
 * @param percentageGetter 获取百分比用的函数，会经常调用它以刷新显示的百分比
 * @param options 详细配置，根据TS类型提示进行配置即可
 * @returns  DialogController<'progress'> 在返回Promise，当resolve时表示进度条已达到100%
 */
export function progress(
  percentageGetter: () => number,
  options?: DialogProgressOption
): DialogController<'progress'>;

export function progress(
  percentageGetter: () => number,
  options?: DialogProgressOption
): DialogController<'progress'> {
  if (typeof percentageGetter !== 'function') {
    throw new Error('[Yuka:dialog progress] percentageGetter must be a function');
  }

  const p = percentageGetter();
  if (typeof p !== 'number') {
    throw new Error('[Yuka:dialog progress] percentageGetter must return a number');
  }

  // 如果已经是100%进度了就不用开启progress了
  if (p >= 1) {
    const result = Promise.resolve();
    return {
      result,
      then: result.then.bind(result),
      close: () => {},
    };
  }

  // progress某些设置的默认值
  options = Object.assign(
    {
      percentageFractionDigits: 2,
      showPercentage: true,
      barType: 'normal',
      titleStyle: { textAlign: 'center' },
    },
    options
  );

  // 初始化
  const opt = normalize('progress', '', options);

  const { dialog, body, footer } = createDialog<'progress'>(opt);
  const { percentage, bar } = createProgress(body, opt);

  // 删除不需要的元素
  footer.remove();
  if (opt.showPercentage === false) {
    percentage.style.display = 'none';
  }

  const result = new Promise((resolve) => {
    // * 使用overflow:hidden的情况，无需使用最小百分比
    // const w = background.getBoundingClientRect().width;
    // const minWidth = bar.getBoundingClientRect().height;
    // const minPercent = minWidth / w;
    // const minPercentWidth = (minPercent * 100).toFixed(2) + '%';

    const _runner = () => {
      const p = percentageGetter();
      const pText = (p * 100).toFixed(opt.percentageFractionDigits) + '%';

      // 16px;
      percentage.textContent = pText;
      // bar.style.width = p > minPercent ? pText : minPercentWidth;
      bar.style.width = pText;
      if (p >= 1) {
        // 稍微等一会再关掉，让用户看到100%的效果
        setTimeout(() => {
          closeDialog(dialog);
          resolve();
        }, 600);
        return;
      }
      requestAnimationFrame(_runner);
      // setTimeout(_runner, 1000);
    };
    _runner();
  }) as Promise<void>;

  return {
    result,
    then: result.then.bind(result),
    close: () => closeDialog(dialog),
  };
}
