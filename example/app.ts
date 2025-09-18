import { useKT } from '../src/index.js';

const { h } = useKT();

export default h('div', 'container').append(h('h2', 'title').append(h('span', undefined, 'Test')));
