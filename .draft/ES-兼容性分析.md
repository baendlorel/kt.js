# KT.js ES 版本兼容性分析及 Firefox 52 支持方案

## 一、项目当前 ES 版本分析

### 1.1 TypeScript 编译配置

**开发环境配置**：
- `tsconfig.json`: `target: "ESNext"`
- `tsconfig.build.json`: `target: "esnext"`

**生产环境配置**：
- 标准构建：使用 Rollup + TypeScript，默认输出 `ESNext`
- Legacy 构建：`tsconfig.build.legacy.json` 设置 `target: "es5"`

### 1.2 项目使用的现代 JavaScript 特性

通过代码分析，项目大量使用了以下 ES6+ 特性：

#### ES2015 (ES6) 特性
- ✅ **箭头函数** (`=>`)
- ✅ **let/const**
- ✅ **模板字符串** (Template literals)
- ✅ **解构赋值** (Destructuring)
- ✅ **对象字面量增强** (Object literal enhancements)
- ✅ **扩展运算符** (`...` spread operator)
- ✅ **Promise**
- ✅ **for...of 循环**
- ✅ **Map/Set**
- ✅ **Class 语法**

#### ES2016-ES2017 特性
- ✅ **async/await**
- ✅ **Object.entries()**
- ✅ **Object.values()**
- ✅ **Object.keys()**

#### ES2018-ES2019 特性
- ✅ **对象扩展运算符** (`{ ...obj }`)
- ✅ **空值合并运算符** (`??`)

#### ES2020+ 特性
- ✅ **可选链** (`?.`) - 部分使用

#### 现代 DOM API
- ✅ **Element.replaceWith()**
- ✅ **String.prototype.startsWith()**
- ✅ **String.prototype.includes()**
- ✅ **Array.prototype.find()**
- ✅ **Array.prototype.findIndex()**

### 1.3 结论

**KT.js 项目最多支持到 ES2019/ES2020**，因为：
- TypeScript 编译目标设置为 `ESNext`
- 使用了对象扩展运算符 (`...`)、空值合并运算符 (`??`)
- 依赖现代 DOM API 如 `replaceWith()`

---

## 二、Firefox 52 兼容性分析

### 2.1 Firefox 52 基本信息

- **发布时间**：2017 年 3 月
- **支持的 ES 版本**：ES2015 (ES6) + 部分 ES2017
- **JavaScript 引擎**：SpiderMonkey 52

### 2.2 Firefox 52 支持的特性

✅ **完全支持**：
- ES2015 (ES6) 所有特性：箭头函数、let/const、Promise、Class、模板字符串等
- async/await (ES2017)
- Object.entries()/values() (ES2017)

❌ **不支持或部分支持**：
- 对象扩展运算符 (`{ ...obj }`) - **不支持**
- 空值合并运算符 (`??`) - **不支持**
- 可选链 (`?.`) - **不支持**
- `Element.replaceWith()` - **不支持**
- `String.prototype.includes()` - **支持**
- `String.prototype.startsWith()` - **支持**

---

## 三、支持 Firefox 52 的完整方案

### 3.1 构建配置调整

#### 方案 A：使用现有 Legacy 构建（推荐）

KT.js 已经配置了 Legacy 构建，生成 ES5 代码：

```json
// tsconfig.build.legacy.json
{
  "compilerOptions": {
    "target": "es5"
  }
}
```

**构建输出**：
- `dist/index.legacy.js` - ES5 IIFE 格式

**使用方式**：
```html
<!-- 使用 legacy 版本 -->
<script src="node_modules/@ktjs/core/dist/index.legacy.js"></script>
```

#### 方案 B：调整标准构建目标为 ES2015

修改 `tsconfig.build.json` 和 Rollup 配置：

```json
{
  "compilerOptions": {
    "target": "es2015" // 或 "es6"
  }
}
```

### 3.2 必需的 Polyfills

即使使用 ES5 构建，仍需要以下 polyfills：

#### 1. 核心语言特性 Polyfills

```bash
# 安装 core-js
pnpm add core-js
```

**在 HTML 中引入**：
```html
<!-- 在 kt.js 之前加载 -->
<script src="https://cdn.jsdelivr.net/npm/core-js@3/minified.min.js"></script>
<script src="dist/index.legacy.js"></script>
```

**或者选择性引入**：
```javascript
// 仅引入需要的 polyfills
import 'core-js/features/object/assign';
import 'core-js/features/array/from';
import 'core-js/features/promise';
```

#### 2. DOM API Polyfills

**Element.replaceWith() Polyfill**：
```javascript
// replaceWith-polyfill.js
if (!Element.prototype.replaceWith) {
  Element.prototype.replaceWith = function(...nodes) {
    const parent = this.parentNode;
    if (!parent) return;
    
    let i = nodes.length;
    if (!i) parent.removeChild(this);
    
    while (i--) {
      let node = nodes[i];
      if (typeof node !== 'object') {
        node = document.createTextNode(node);
      }
      if (!i) {
        parent.replaceChild(node, this);
      } else {
        parent.insertBefore(node, this.nextSibling);
      }
    }
  };
}
```

### 3.3 完整的 HTML 引入示例

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>KT.js on Firefox 52</title>
</head>
<body>
  <div id="app"></div>

  <!-- 1. Core-js polyfill (ES6+ 特性) -->
  <script src="https://cdn.jsdelivr.net/npm/core-js-bundle@3.36.0/minified.js"></script>
  
  <!-- 2. DOM API polyfills -->
  <script>
    // replaceWith polyfill
    if (!Element.prototype.replaceWith) {
      Element.prototype.replaceWith = function() {
        var parent = this.parentNode;
        if (!parent) return;
        var argArr = Array.prototype.slice.call(arguments);
        var docFrag = document.createDocumentFragment();
        
        argArr.forEach(function(argItem) {
          var isNode = argItem instanceof Node;
          docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
        });
        
        parent.replaceChild(docFrag, this);
      };
    }
  </script>
  
  <!-- 3. KT.js legacy build -->
  <script src="./dist/index.legacy.js"></script>
  
  <!-- 4. Your app code (also compiled to ES5) -->
  <script src="./dist/app.legacy.js"></script>
</body>
</html>
```

### 3.4 Babel 配置（应用代码编译）

为了确保你的应用代码也兼容 Firefox 52，需要配置 Babel：

```bash
pnpm add -D @babel/core @babel/preset-env
```

**babel.config.js**：
```javascript
module.exports = {
  presets: [
    ['@babel/preset-env', {
      targets: {
        firefox: '52'
      },
      useBuiltIns: 'usage',
      corejs: 3
    }]
  ]
};
```

### 3.5 Vite 项目配置

如果使用 Vite（如 `packages/example`），需要调整配置：

```javascript
// vite.config.ts
import { defineConfig } from 'vite';
import legacy from '@vitejs/plugin-legacy';

export default defineConfig({
  plugins: [
    legacy({
      targets: ['firefox >= 52'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime']
    })
  ],
  build: {
    target: 'es2015'
  }
});
```

```bash
pnpm add -D @vitejs/plugin-legacy
```

---

## 四、测试验证清单

### 4.1 必需测试的功能

- [ ] JSX 元素创建和渲染
- [ ] 事件处理 (`on:click` 等)
- [ ] `redraw()` 方法
- [ ] 异步组件 (`KTAsync`)
- [ ] 路由导航
- [ ] Promise 处理
- [ ] DOM 替换 (`replaceWith`)

### 4.2 测试方法

```javascript
// 简单测试脚本
function testKTJS() {
  console.log('Testing KT.js on Firefox 52...');
  
  // 1. 测试基本元素创建
  const div = document.createElement('div');
  console.log('✓ createElement works');
  
  // 2. 测试 replaceWith
  const old = document.createElement('span');
  const neu = document.createElement('p');
  document.body.appendChild(old);
  old.replaceWith(neu);
  console.log('✓ replaceWith works');
  
  // 3. 测试 Promise
  Promise.resolve(42).then(v => {
    console.log('✓ Promise works:', v);
  });
  
  // 4. 测试 async/await
  (async function() {
    const result = await Promise.resolve('async');
    console.log('✓ async/await works:', result);
  })();
  
  console.log('All tests passed!');
}
```

---

## 五、推荐实施步骤

### 步骤 1：验证当前 Legacy 构建
```bash
cd packages/core
pnpm build
# 检查 dist/index.legacy.js 是否生成
```

### 步骤 2：添加 Polyfill 脚本
创建 `polyfills.js` 文件，包含所有必需的 polyfills。

### 步骤 3：更新示例项目
修改 `packages/example/index.html`，使用 legacy 版本 + polyfills。

### 步骤 4：在 Firefox 52 环境测试
- 使用虚拟机或旧版本 Firefox
- 或使用 BrowserStack 等在线测试平台

### 步骤 5：更新文档
在 README 中添加 Firefox 52 兼容性说明。

---

## 六、潜在问题和限制

### 6.1 性能影响
- ES5 代码体积更大（约 1.5-2 倍）
- Polyfills 增加额外的加载时间
- 某些优化在旧浏览器上无法应用

### 6.2 功能限制
以下功能可能需要特别注意：
- Proxy/Reflect：无法完美 polyfill，避免使用
- WeakMap/WeakSet：可以 polyfill 但性能较差
- Symbol：可以 polyfill 但不是真正的 symbol

### 6.3 维护成本
- 需要同时维护现代版本和 legacy 版本
- 需要在两个版本上都进行测试
- 可能需要为某些功能提供降级方案

---

## 七、总结和建议

### 当前状态
- ✅ KT.js 已配置 Legacy 构建（ES5）
- ⚠️ 缺少 DOM API polyfills
- ⚠️ 缺少 Firefox 52 测试和文档

### 推荐方案
1. **使用现有的 Legacy 构建**（`index.legacy.js`）
2. **添加必需的 Polyfills**（core-js + replaceWith）
3. **应用代码使用 Babel 编译到 ES5**
4. **在 Firefox 52 上进行充分测试**

### 最小化改动方案
如果不想大幅改动，最小化方案是：
1. 在文档中说明需要加载 core-js
2. 提供 `replaceWith` polyfill 代码片段
3. 推荐使用 `dist/index.legacy.js`

### 完整支持方案
如果要完整支持 Firefox 52：
1. 创建专门的 polyfills 包
2. 修改构建流程自动注入 polyfills
3. 添加 Firefox 52 的 CI/CD 测试
4. 在 README 中添加兼容性表格

---

## 附录：Firefox 52 功能支持表

| 特性 | ES 版本 | Firefox 52 | 需要 Polyfill |
|------|---------|------------|---------------|
| 箭头函数 | ES2015 | ✅ | ❌ |
| let/const | ES2015 | ✅ | ❌ |
| Promise | ES2015 | ✅ | ❌ |
| Class | ES2015 | ✅ | ❌ |
| 模板字符串 | ES2015 | ✅ | ❌ |
| 解构赋值 | ES2015 | ✅ | ❌ |
| async/await | ES2017 | ✅ | ❌ |
| Object.entries() | ES2017 | ✅ | ❌ |
| Object.values() | ES2017 | ✅ | ❌ |
| 对象扩展运算符 | ES2018 | ❌ | ✅ (Babel) |
| 空值合并 (??) | ES2020 | ❌ | ✅ (Babel) |
| 可选链 (?.) | ES2020 | ❌ | ✅ (Babel) |
| replaceWith() | DOM API | ❌ | ✅ |
| includes() | ES2015 | ✅ | ❌ |
| startsWith() | ES2015 | ✅ | ❌ |

---

**文档生成日期**：2026-01-22  
**KT.js 版本**：0.14.x  
**分析者**：GitHub Copilot
