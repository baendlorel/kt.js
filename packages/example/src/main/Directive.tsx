import { ref } from 'kt.js';

/**
 * k-if 指令示例
 *
 * 特性强调：
 * 1. k-if 如果传入 ref，只要 ref 内容变化就会重画，不管是不是 false、true 变化
 *    这意味着即使 ref 的值从 true 变为 true（相同值），只要 ref 对象本身发生变化，组件也会重绘
 */
function KIfDemo() {
  const show = ref(false);

  // 每2秒切换一次显示状态
  setInterval(() => {
    show.value = !show.value;
  }, 2000);

  // 为了演示 ref 内容变化（而非布尔值变化）也会重绘，我们创建另一个 ref
  const counter = ref(0);
  setInterval(() => {
    counter.value++; // 即使 show 的值没有变化，ref 内容变化也会触发重绘
  }, 500);

  return (
    <div style="border: 1px solid #ccc; padding: 20px; margin: 20px 0;">
      <h3>k-if 指令示例</h3>
      <p>当前 counter 值: {counter.value}</p>
      <div k-if={show} style="background: #e6f7ff; padding: 10px; margin-top: 10px;">
        当 show 为 true 时显示此内容
      </div>
      <p>注意：k-if 指令接收 ref 对象，只要 ref 的内容发生变化（即使是相同的布尔值），组件就会重绘。</p>
    </div>
  );
}

/**
 * k-model 指令示例
 *
 * 特性强调：
 * 2. k-model 传入的必须是 ref，用于实现双向数据绑定
 */
function KModelDemo() {
  const inputValue = ref('Hello, kt.js!');
  const selectValue = ref('option2');
  const checkValue = ref(false);
  const textareaValue = ref('多行文本');

  return (
    <div style="border: 1px solid #ccc; padding: 20px; margin: 20px 0;">
      <h3>k-model 指令示例</h3>
      <p>
        k-model 用于实现表单元素的双向数据绑定，<strong>必须传入 ref 对象</strong>。
      </p>

      <div style="display: grid; gap: 15px; margin-top: 15px;">
        <div>
          <label>文本输入框:</label>
          <input type="text" k-model={inputValue} style="margin-left: 10px; padding: 5px;" />
          <p>当前值: {inputValue}</p>
        </div>

        <div>
          <label>下拉选择框:</label>
          <select k-model={selectValue} style="margin-left: 10px; padding: 5px;">
            <option value="option1">选项 1</option>
            <option value="option2">选项 2</option>
            <option value="option3">选项 3</option>
          </select>
          <p>当前选择: {selectValue}</p>
        </div>

        <div>
          <label>
            <input type="checkbox" k-model={checkValue} style="margin-right: 5px;" />
            复选框
          </label>
          <p>
            当前状态:
            <span k-if={checkValue}>已选中</span>
            <span k-else>未选中</span>
          </p>
        </div>

        <div>
          <label>多行文本框:</label>
          <br />
          <textarea k-model={textareaValue} rows={3} cols={30} style="margin-top: 5px; padding: 5px;" />
          <p>当前值: {textareaValue.value}</p>
        </div>
      </div>
    </div>
  );
}

/**
 * k-html 指令示例
 *
 * 特性强调：
 * 3. k-html 如果传入 ref，那么 ref 变化它也会自动重绘
 */
function KHtmlDemo() {
  const htmlContent = ref('<strong>初始 HTML 内容</strong>');

  // 每3秒更新一次 HTML 内容
  setInterval(() => {
    const now = new Date().toLocaleTimeString();
    htmlContent.value = `<div style="color: #1890ff; background: #f0f5ff; padding: 10px;">
      动态更新的 HTML 内容<br />
      当前时间: <strong>${now}</strong><br />
      随机数: ${Math.random().toFixed(4)}
    </div>`;
  }, 3000);

  return (
    <div style="border: 1px solid #ccc; padding: 20px; margin: 20px 0;">
      <h3>k-html 指令示例</h3>
      <p>
        k-html 用于渲染 HTML 字符串，<strong>传入 ref 后，ref 变化会自动重绘</strong>。
      </p>

      <div style="margin-top: 15px;">
        <p>当前 HTML 内容:</p>
        <div k-html={htmlContent} style="border: 1px dashed #ccc; padding: 15px; margin-top: 10px;" />
      </div>

      <div style="margin-top: 15px; padding: 10px; background: #f6ffed; border: 1px solid #b7eb8f;">
        <p>
          <strong>注意:</strong> k-html 指令会将字符串作为 HTML 解析并插入到 DOM 中。
        </p>
        <p>传入 ref 对象后，当 ref 的值发生变化时，内容会自动更新。</p>
      </div>
    </div>
  );
}

export const FeatDirectives = () => {
  return (
    <div>
      <h2>指令 (Directives) 示例</h2>
      <p>以下展示 kt.js 中三个核心指令的使用方法及其响应式特性。</p>

      <KIfDemo />
      <hr />
      <KModelDemo />
      <hr />
      <KHtmlDemo />

      <div style="margin-top: 30px; padding: 15px; background: #fff7e6; border: 1px solid #ffd591;">
        <h4>特性总结：</h4>
        <ol>
          <li>
            <strong>k-if</strong>: 如果传入 ref，只要 ref 内容变化就会重画，不管是不是 false、true 变化
          </li>
          <li>
            <strong>k-model</strong>: 传入的必须是 ref，用于实现双向数据绑定
          </li>
          <li>
            <strong>k-html</strong>: 如果传入 ref，那么 ref 变化它也会自动重绘
          </li>
        </ol>
        <p>这些指令与 ref 结合使用，实现了自动响应式更新，简化了 UI 状态管理。</p>
      </div>
    </div>
  );
};
