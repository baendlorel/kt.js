import { useYuka, Yuka, I18NConfig } from '@/yuka';
import style from './style.css?raw';

const { h, css } = useYuka();

css(style);

export default () => {
  let progressBar: Yuka<HTMLDivElement>;
  let spanLabel: Yuka<HTMLSpanElement>;
  let spanPercent: Yuka<HTMLSpanElement>;

  const component = h('div', { class: 'progress-wrapper' }).append(
    (progressBar = h('div', 'progress-bar')).append(
      (spanLabel = h('span', { style: { paddingRight: '5px' } })),
      (spanPercent = h('span'))
    )
  );

  /**
   * 设置进度条百分比
   * @param percent 0~1之间的小数
   */
  const setProgress = (percent: number) => {
    const p = (percent * 100).toFixed(2) + '%';
    progressBar.style.width = p;
    spanPercent.text = p;
  };

  const setLabel = (i18n: I18NConfig) => {
    spanLabel.i18n = i18n;
  };

  return {
    component,
    setProgress,
    setLabel,
  };
};
