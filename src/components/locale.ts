import { useYuka, i18n } from '@/yuka';

const { h, css } = useYuka();

css(`.locale{
  margin: 15px 0px;
  text-align: center;
}`);

const comp = h('div', 'locale').append(
  h('input', {
    type: 'radio',
    id: 'ui-zh',
    name: 'ui-language',
    value: 'zh',
    checked: i18n.locale === 'zh',
    onchange: () => (i18n.locale = 'zh'),
  }),
  h('label', { for: 'ui-zh', class: 'ui-language' }, '中文'),
  h('input', {
    type: 'radio',
    id: 'ui-en',
    name: 'ui-language',
    value: 'en',
    checked: i18n.locale === 'en',
    onchange: () => (i18n.locale = 'en'),
  }),
  h('label', { for: 'ui-en', class: 'ui-language' }, 'English')
);

export default comp;
