import { useYuka } from '@/yuka';
import style from './style.css?raw';

const { h, css, eventBus } = useYuka();

css(style);

const displayer = h('div', { class: 'displayer' });

export default displayer;

eventBus.on('display-result', (data: any) => {
  console.log('display-result', data);
  displayer.text = data.toString();
});
