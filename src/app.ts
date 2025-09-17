import { useYuka } from './yuka/index.js';
// import testButtons from './components/test-buttons';

const { h } = useYuka();

export default h('div', 'container').append(h('h2', 'title').append(h('span', undefined, 'Test')));
