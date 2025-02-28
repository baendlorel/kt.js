import { dialog, i18n, LanguageTypes, useYuka } from '@/yuka';
import { memoize } from '@/yuka/utils';

const { h } = useYuka();

const waitBtn = h(
  'button',
  {
    onclick: () =>
      dialog
        .wait({ zh: '等3秒', en: 'wait 3s' }, 3000, {
          title: { zh: '等待测试', en: 'wait test' },
          onOpen() {
            console.time('dialog');
            console.timeLog('dialog', 'onOpen');
          },
          onOpened() {
            console.timeLog('dialog', 'onOpened');
          },
          onClose() {
            console.timeLog('dialog', 'onClose');
          },
          onClosed() {
            console.timeLog('dialog', 'onClosed');
            console.timeEnd('dialog');
          },
          countDownText(timePast: number) {
            return {
              zh: `已经过去了${(timePast / 1000).toFixed(3)}秒`,
              en: `passed ${(timePast / 1000).toFixed(3)}s`,
            };
          },
        })
        .then((ms) =>
          dialog.alert({ zh: `总共花费${ms / 1000}s`, en: `total cost ${ms / 1000}s` })
        ),
  },
  'wait'
);

const promptBtn = h(
  'button',
  {
    onclick: () =>
      dialog.prompt(
        { zh: '输入校验码', en: 'Input check code' },
        {
          promptValidator(value) {
            if (value === '123') {
              return true;
            }

            return { zh: '校验码错误', en: 'Check code error' };
          },
          async onYes() {
            const a = Math.random();
            console.log('a', a);
            return a > 0.5;
          },
        }
      ),
  },
  'prompt'
);

const alertBtn = h(
  'button',
  {
    onclick: () => dialog.alert({ zh: '输入校验码', en: 'Input check code' }),
  },
  'alert'
);

// * 经测试，memoize对i18n.valid的优化效果为负。100万次守卫代码比正向判定略微慢十几毫秒，不做更改
const memoizei18nBtn = h(
  'button',
  {
    onclick: () => {
      const originValid = (i18nConfig: any) => {
        if (!i18nConfig || typeof i18nConfig !== 'object') {
          return false;
        }

        // 只要有一个配置符合条件就可以
        for (const key of LanguageTypes) {
          if (typeof i18nConfig[key] === 'string') {
            return true;
          }
        }

        return false;
      };

      const COUNT = 1000000;
      console.log(`do ${COUNT} times`);

      console.time('pure get i18n');
      const pureGet = (i18nConfig: any) => i18nConfig[i18n.locale];
      const conf = { zh: '中文', en: 'English' };
      for (let i = 0; i < COUNT; i++) {
        pureGet(conf);
      }
      console.timeEnd('pure get i18n');

      console.time('origini18n');
      for (let i = 0; i < COUNT; i++) {
        if (originValid(conf)) {
          pureGet(conf);
        }
      }
      console.timeEnd('origini18n');

      console.time('memoizei18n');
      const valid = memoize(originValid);
      for (let i = 0; i < COUNT; i++) {
        if (valid(conf)) {
          pureGet(conf);
        }
      }
      console.timeEnd('memoizei18n');

      console.time('current');
      for (let i = 0; i < COUNT; i++) {
        i18n.get(conf);
      }
      console.timeEnd('current');
    },
  },
  'memoizei18n'
);

const progresser = () => {
  let p = 0.1;
  return () => {
    p += 0.01;
    return p;
  };
};

const progressBtn = h(
  'button',
  {
    onclick: () =>
      dialog.progress(progresser(), {
        progressLabel: { zh: '进度条', en: 'progress bar' },
        barType: 'lightspot',
      }),
  },
  'progresslightspot'
);

const progressnormalBtn = h(
  'button',
  {
    onclick: () =>
      dialog.progress(progresser(), {
        progressLabel: { zh: '进度条', en: 'progress bar' },
        barType: 'normal',
      }),
  },
  'progressnormal'
);

export default h('div', {
  style: {
    display: 'flex',
    margin: '5px 0px',
  },
}).append(waitBtn, promptBtn, alertBtn, memoizei18nBtn, progressBtn, progressnormalBtn);
