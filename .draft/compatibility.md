# IE11 兼容性评估报告

## 项目概述
- **项目名称**: kt.js
- **当前构建目标**: ESNext (TypeScript配置)
- **主要用途**: Web框架，DOM操作和路由管理

## IE11 兼容性现状评估

### ✅ 已兼容的功能

1. **DOM操作** ([src/lib/dom.ts](src/lib/dom.ts))
   - 已提供 `$append` polyfill，检测 `HTMLElement.prototype.append` 是否存在
   - 使用传统的 `appendChild` 方法作为降级方案
   - 使用 `document.createTextNode` 处理字符串内容

2. **基础API** ([src/lib/native.ts](src/lib/native.ts))
   - `Array.isArray` - IE9+ 支持
   - `Object.keys` - IE9+ 支持
   - `Object.defineProperties` - IE9+ 支持

3. **事件处理**
   - 使用 `addEventListener` - IE9+ 支持

### ⚠️ 需要修复的问题

#### 1. **ES6+ 语法特性**

**箭头函数** ([src/core/h/attr.ts](src/core/h/attr.ts):67-77)
```typescript
// 当前代码使用箭头函数
const keys = $keys(attr) as (keyof KAttribute & string)[];
for (let i = keys.length - 1; i >= 0; i--) {
  const key = keys[i];
  const o = attr[key];

  if (typeof o !== 'function') {
    (handlers[key] || defaultHandler)(element, key, o);
  } else {
    $on.call(element, key, o);
  }
}
```

**解构赋值** ([src/core/router/index.ts](src/core/router/index.ts):35-37)
```typescript
// 当前代码使用解构赋值
const [k, v] = pair.split('=');
if (k) query[decodeURIComponent(k)] = decodeURIComponent(v || '');
```

**模板字符串** ([src/lib/error.ts](src/lib/error.ts):2)
```typescript
// 当前代码使用模板字符串
throw new Error('__NAME__:' + message);
```

**const/let** - 大量使用，需要转换为 `var`

#### 2. **ES6+ API**

**Promise/async-await** ([src/core/router/index.ts](src/core/router/index.ts):43-84)
```typescript
// 当前代码使用 async/await
const navigate = async (path: string) => {
  try {
    // ... async operations
    if (beforeEach) {
      const ok = await beforeEach(ctx, current);
      if (!ok) return;
    }
    // ...
  } catch (error) {
    // ...
  }
};
```

**Array.prototype.forEach** ([src/core/router/index.ts](src/core/router/index.ts):35)
```typescript
// 当前代码使用 forEach
qs.split('&').forEach((pair) => {
  // ...
});
```

**String.prototype.startsWith** ([src/core/router/index.ts](src/core/router/index.ts):34)
```typescript
// 当前代码使用 startsWith
if (!search) return query;
const qs = search.startsWith('?') ? search.slice(1) : search;
```

#### 3. **模块系统**

- 当前使用 ES6 模块 (`import/export`)
- IE11 不支持 ES6 模块，需要转换为 CommonJS 或 UMD

#### 4. **TypeScript 编译目标**

- 当前 `tsconfig.json` 中 `target: "ESNext"`
- 需要降级到 `ES5` 以获得更好的 IE11 兼容性

## 修复建议

### 1. **TypeScript 配置调整**
```json
{
  "compilerOptions": {
    "target": "ES5",
    "lib": ["ES5", "DOM", "ES2015.Promise"],
    "downlevelIteration": true
  }
}
```

### 2. **构建配置调整**

在 `rollup.config.mjs` 中：
- 添加 `@rollup/plugin-babel` 进行 ES5 转译
- 配置 Babel 预设 `@babel/preset-env` 针对 IE11

### 3. **代码层面的修复**

#### 替换箭头函数
```typescript
// 替换前
const handler = (element, key, value) => { /* ... */ };

// 替换后
function handler(element, key, value) { /* ... */ }
```

#### 替换解构赋值
```typescript
// 替换前
const [k, v] = pair.split('=');

// 替换后
const parts = pair.split('=');
const k = parts[0];
const v = parts[1];
```

#### 替换 async/await
```typescript
// 替换前
const navigate = async (path: string) => {
  const result = await someAsyncFunction();
};

// 替换后
const navigate = function(path: string) {
  return someAsyncFunction().then(function(result) {
    // ...
  });
};
```

#### 替换 forEach
```typescript
// 替换前
array.forEach(item => { /* ... */ });

// 替换后
for (let i = 0; i < array.length; i++) {
  const item = array[i];
  // ...
}
```

### 4. **添加必要的 Polyfill**

在入口文件添加：
```typescript
// Promise polyfill
if (typeof Promise === 'undefined') {
  // 需要引入 Promise polyfill
}

// Object.assign polyfill
if (typeof Object.assign === 'undefined') {
  Object.assign = function(target, source) {
    // polyfill implementation
  };
}

// Array.prototype.includes polyfill
if (!Array.prototype.includes) {
  Array.prototype.includes = function(searchElement) {
    // polyfill implementation
  };
}
```

## 优先级建议

1. **高优先级**: TypeScript 目标降级和构建配置调整
2. **中优先级**: 替换 async/await 和 Promise 相关代码
3. **低优先级**: 替换其他 ES6+ 语法特性

## 测试建议

- 使用 BrowserStack 或类似服务测试 IE11
- 添加 IE11 特定的测试用例
- 考虑使用 `@babel/preset-env` 的 `useBuiltIns: "usage"` 自动引入需要的 polyfill

## 结论

当前代码库对 IE11 的兼容性较好，主要问题集中在 ES6+ 语法特性上。通过调整 TypeScript 编译目标和添加适当的 polyfill，可以相对容易地实现 IE11 兼容。DOM 操作部分已经做了很好的兼容性处理。