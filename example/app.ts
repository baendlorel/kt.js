import { useScope } from '@/index.js';

const { h } = useScope();

// todo 配置一个能跑起来的测试看看
export default h('div', 'container').append(h('h2', 'title').append(h('span', undefined, 'Test')));
