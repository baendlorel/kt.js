import { useScope } from '@/index.js';

const { h } = useScope();

export default h('div', 'container').append(h('h2', 'title').append(h('span', undefined, 'Test')));
