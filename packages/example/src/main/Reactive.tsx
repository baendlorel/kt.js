import { css } from '@emotion/css';
import { computed, ref } from 'kt.js';

const styles = {
  description: css`
    margin-top: 10px;
    font-size: 12px;
    color: #666;
  `,
};
export function Reactivity() {
  const kifFlag = ref(false);
  const kmodelText = ref('响应式文本');
  const khtmlContent = ref('<span style="color: #52c41a;">初始HTML</span>');

  // 定时器用于演示自动更新
  setInterval(() => {
    kifFlag.value = !kifFlag.value;
  }, 1500);

  const notKifFLag = computed(() => !kifFlag.value, [kifFlag]);

  setInterval(() => {
    const time = new Date().toLocaleTimeString();
    kmodelText.value = `更新于: ${time}`;
  }, 2000);

  setInterval(() => {
    khtmlContent.value = `<div style="padding: 8px; background: #f0f0f0; margin: 5px 0;">
      <strong>动态HTML</strong><br/>
      随机值: ${Math.random().toFixed(3)}<br/>
      时间: ${new Date().toLocaleTimeString()}
    </div>`;
  }, 2500);

  return (
    <div style="border: 2px solid #1890ff; padding: 20px; margin: 20px 0; border-radius: 8px;">
      <h3>Section 1: 指令的响应式特性</h3>
      <p>展示 k-if、k-model、k-html 三大指令在传入 ref 时的响应式行为：</p>

      <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px; margin-top: 20px;">
        <div style="border: 1px solid #d9d9d9; padding: 15px; border-radius: 4px;">
          <h4>k-if 指令</h4>
          <p>
            当前状态:
            <span k-if={kifFlag}>true</span>
            <span k-if={notKifFLag}>false</span>
          </p>
          <p class={styles.description}>k-if 传入 ref，ref 内容变化时重绘（即使布尔值相同）</p>
        </div>

        <div style="border: 1px solid #d9d9d9; padding: 15px; border-radius: 4px;">
          <h4>k-model 指令</h4>
          <input
            type="text"
            k-model={kmodelText}
            style="width: 100%; padding: 8px; margin: 10px 0; box-sizing: border-box;"
          />
          <p>当前值: {kmodelText}</p>
          <p class={styles.description}>k-model 必须传入 ref，实现双向绑定</p>
        </div>

        <div style="border: 1px solid #d9d9d9; padding: 15px; border-radius: 4px;">
          <h4>k-html 指令</h4>
          <div k-html={khtmlContent} style="min-height: 100px; border: 1px dashed #ccc; padding: 10px;" />
          <p class={styles.description}>k-html 传入 ref，ref 变化时自动重绘</p>
        </div>
      </div>

      <div style="margin-top: 20px; padding: 15px; background: #f6ffed; border: 1px solid #b7eb8f; border-radius: 4px;">
        <h4>特性总结</h4>
        <p>以上三个指令都接受 ref 作为参数，当 ref 的值发生变化时：</p>
        <ul>
          <li>
            <strong>k-if</strong>: 重新评估条件并渲染/移除元素
          </li>
          <li>
            <strong>k-model</strong>: 更新表单元素的值，同时监听用户输入更新 ref
          </li>
          <li>
            <strong>k-html</strong>: 重新解析 HTML 字符串并更新 DOM
          </li>
        </ul>
        <p>这种响应式机制使得 UI 能够自动与数据状态保持同步。</p>
      </div>
    </div>
  );
}

/**
 * 第二个 Demo Section: 直接嵌入 ref 的响应式特性
 *
 * 展示在元素的子元素中直接使用 ref 的响应式行为
 * 例如：<div>{someref}</div>
 */
function DirectRefEmbeddingDemo() {
  const counter = ref(0);
  const message = ref('Hello, kt.js!');
  const color = ref('#1890ff');
  const items = ref(['项目A', '项目B', '项目C']);

  // 定时器演示自动更新
  setInterval(() => {
    counter.value++;
  }, 1000);

  setInterval(() => {
    const messages = ['Hello, kt.js!', '响应式编程真简单', '数据变化，UI自动更新', '无需手动操作DOM'];
    const randomIndex = Math.floor(Math.random() * messages.length);
    message.value = messages[randomIndex];
  }, 2000);

  setInterval(() => {
    const colors = ['#1890ff', '#52c41a', '#f5222d', '#fa8c16', '#722ed1'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    color.value = colors[randomIndex];
  }, 1500);

  setInterval(() => {
    const newItems = [...items.value];
    if (newItems.length > 5) {
      newItems.shift();
    }
    newItems.push(`项目${String.fromCharCode(65 + Math.floor(Math.random() * 26))}`);
    items.value = newItems;
  }, 3000);

  return (
    <div style="border: 2px solid #52c41a; padding: 20px; margin: 20px 0; border-radius: 8px;">
      <h3>Section 2: 直接嵌入 ref 的响应式特性</h3>
      <p>展示在元素的子元素中直接使用 ref 的响应式行为：</p>
      <p style="color: #666; margin-bottom: 20px;">
        例如：<code>{'<div>{someref}</div>'}</code>，当 someref 变化时，这一块会自动重绘成新的值
      </p>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 20px;">
        {/* 计数器示例 */}
        <div style="border: 1px solid #d9d9d9; padding: 15px; border-radius: 4px;">
          <h4>计数器</h4>
          <p style="font-size: 24px; font-weight: bold; text-align: center; margin: 15px 0;">{counter}</p>
          <p style="font-size: 12px; color: #666;">每秒自动加1，UI自动更新</p>
        </div>

        {/* 动态消息示例 */}
        <div style="border: 1px solid #d9d9d9; padding: 15px; border-radius: 4px;">
          <h4>动态消息</h4>
          <div style="padding: 15px; background: #fafafa; border-radius: 4px; margin: 10px 0;">{message}</div>
          <p style="font-size: 12px; color: #666;">每2秒随机更换消息内容</p>
        </div>

        {/* 动态颜色示例 */}
        <div style="border: 1px solid #d9d9d9; padding: 15px; border-radius: 4px;">
          <h4>动态颜色</h4>
          <div
            style={{
              width: '100%',
              height: '60px',
              backgroundColor: color.value,
              borderRadius: '4px',
              margin: '10px 0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              fontWeight: 'bold',
            }}
          >
            {color}
          </div>
          <p style="font-size: 12px; color: #666;">每1.5秒更换背景颜色</p>
        </div>

        {/* 列表示例 */}
        <div style="border: 1px solid #d9d9d9; padding: 15px; border-radius: 4px;">
          <h4>动态列表</h4>
          <ul style="margin: 10px 0; padding-left: 20px;">
            {items.value.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p style="font-size: 12px; color: #666;">每3秒添加新项目，列表自动更新</p>
        </div>
      </div>

      <div style="margin-top: 20px; padding: 15px; background: #fff7e6; border: 1px solid #ffd591; border-radius: 4px;">
        <h4>技术原理</h4>
        <p>
          在 kt.js 中，当在 JSX 中直接使用 <code>{'{ref}'}</code> 语法时：
        </p>
        <ol>
          <li>
            ref 对象会被自动解包，显示其 <code>.value</code> 属性的值
          </li>
          <li>
            当 ref 的 <code>.value</code> 发生变化时，包含该 ref 的组件部分会自动重绘
          </li>
          <li>这种响应式更新是细粒度的，只有使用该 ref 的 DOM 部分会更新</li>
        </ol>
        <p>这种方式使得状态管理变得极其简单，开发者只需关注数据变化，UI 会自动同步。</p>
      </div>
    </div>
  );
}

/**
 * 主导出组件
 */
export const ReactiveDemo = () => {
  return (
    <div style="padding: 20px;">
      <h2>响应式特性演示</h2>
      <p style="margin-bottom: 30px; color: #666;">
        本页面演示 kt.js 中响应式系统的两种主要使用方式：通过指令和直接嵌入 ref。
      </p>

      <Reactivity />
      <DirectRefEmbeddingDemo />

      <div style="margin-top: 30px; padding: 20px; background: #f0f5ff; border: 1px solid #adc6ff; border-radius: 8px;">
        <h3>响应式系统核心概念</h3>
        <p>kt.js 的响应式系统基于 ref 对象构建：</p>
        <ul>
          <li>
            <strong>ref</strong>: 响应式引用，包装一个值使其变成响应式
          </li>
          <li>
            <strong>自动追踪</strong>: 在模板中使用 ref 时，系统会自动建立依赖关系
          </li>
          <li>
            <strong>自动更新</strong>: 当 ref 的值变化时，所有依赖它的 UI 部分自动更新
          </li>
          <li>
            <strong>细粒度更新</strong>: 只更新必要的 DOM 部分，性能高效
          </li>
        </ul>
        <p>这种设计模式使得开发者可以专注于业务逻辑，而无需手动管理 UI 更新。</p>
      </div>
    </div>
  );
};
