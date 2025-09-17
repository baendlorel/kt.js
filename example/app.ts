import { useYuka } from '../src/index.js';

const { h } = useYuka();

export default h('div', 'container').append(h('h2', 'title').append(h('span', undefined, 'Test')));
