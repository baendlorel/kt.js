import { useYuka } from './yuka';
import typescriptLogo from './assets/typescript.svg';
import locale from './components/locale';
import players from './components/players';
import audioForm from './components/audio-form';
import displayer from './components/displayer';
// import testButtons from './components/test-buttons';

const { h } = useYuka();

export default h('div', 'container').append(
  h('h2', 'title').append(
    h('img', { src: typescriptLogo, class: 'logo' }),
    h('span', undefined, 'Whisper ASR')
  ),
  // testButtons,
  locale,
  displayer,
  players,
  audioForm
);
