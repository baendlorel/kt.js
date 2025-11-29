好的！让我详细告诉你 JSX 包的输出配置需求：

## 📦 JSX 包必须包含的输出文件

### **1. 主入口（index）**

```javascript
// 入口：src/index.ts
// 输出需要：
{
  ('dist/index.mjs', // ESM 格式 - 用于现代打包工具（Vite、Webpack 5+、Rollup）
    'dist/index.cjs', // CommonJS 格式 - 用于 Node.js require()
    'dist/index.d.ts'); // TypeScript 类型定义
}
```

**package.json 中对应的字段：**

```json
{
  "main": "./dist/index.cjs", // Node.js 默认入口
  "module": "./dist/index.mjs", // ESM 入口
  "types": "./dist/index.d.ts", // TypeScript 类型
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "import": "./dist/index.mjs",
      "require": "./dist/index.cjs"
    }
  }
}
```

**用途：**

```typescript
// 用户这样导入时使用
import { h, Fragment, ktnull } from '@ktjs/jsx';
```

---

### **2. JSX Runtime（jsx-runtime）**

```javascript
// 入口：src/jsx-runtime.ts
// 输出需要：
{
  ('dist/jsx-runtime.mjs', // ESM 格式
    'dist/jsx-runtime.cjs', // CommonJS 格式
    'dist/jsx-runtime.d.ts'); // TypeScript 类型定义
}
```

**package.json 中对应的字段：**

```json
{
  "exports": {
    "./jsx-runtime": {
      "types": "./dist/jsx-runtime.d.ts",
      "import": "./dist/jsx-runtime.mjs",
      "require": "./dist/jsx-runtime.cjs"
    },
    "./jsx-dev-runtime": {
      "types": "./dist/jsx-runtime.d.ts",
      "import": "./dist/jsx-runtime.mjs",
      "require": "./dist/jsx-runtime.cjs"
    }
  }
}
```

**用途：**

```typescript
// TypeScript/Babel 自动导入（不是用户手动导入）
// 当配置 "jsxImportSource": "@ktjs/jsx" 时
// 编译器会自动生成：
import { jsx as _jsx } from '@ktjs/jsx/jsx-runtime';
```

---

### **3. Babel Preset（可选但推荐）**

```javascript
// 文件：babel-preset.cjs
// 输出：直接复制到 dist 或保持在根目录
{
  ('babel-preset.cjs'); // CommonJS 格式的 Babel 配置
}
```

**package.json 中对应的字段：**

```json
{
  "exports": {
    "./babel-preset": {
      "require": "./babel-preset.cjs"
    }
  },
  "files": ["dist", "babel-preset.cjs"]
}
```

**用途：**

```javascript
// babel.config.js
module.exports = {
  presets: ['@ktjs/jsx/babel-preset'],
};
```

---

## 🎯 为什么需要这些格式？

### **为什么需要 ESM (.mjs)？**

- ✅ 现代打包工具（Vite、Rollup、Webpack 5+）优先使用
- ✅ 支持 tree-shaking（摇树优化）
- ✅ 浏览器原生 `<script type="module">` 支持
- ✅ 未来趋势

### **为什么需要 CJS (.cjs)？**

- ✅ Node.js 的 `require()` 需要
- ✅ 一些老旧工具链还在用 CommonJS
- ✅ Jest 等测试框架默认使用 CJS
- ✅ 向后兼容

### **为什么需要类型定义 (.d.ts)？**

- ✅ TypeScript 用户获得类型提示
- ✅ IDE 智能提示（即使用户不用 TypeScript）
- ✅ 编译时类型检查

---

## 📋 完整的构建输出清单

```
packages/jsx/dist/
├── index.mjs           # 主入口 ESM
├── index.cjs           # 主入口 CJS
├── index.d.ts          # 主入口类型
├── jsx-runtime.mjs     # JSX runtime ESM（编译器自动导入）
├── jsx-runtime.cjs     # JSX runtime CJS（编译器自动导入）
└── jsx-runtime.d.ts    # JSX runtime 类型

packages/jsx/
└── babel-preset.cjs    # Babel 预设（可选）
```

---

## 🔧 Rollup 配置需要做什么？

对于 **每个入口文件**，需要生成 **3 个配置对象**：

### **配置 1：ESM + CJS 代码构建**

```javascript
{
  input: 'src/xxx.ts',
  output: [
    { file: 'dist/xxx.mjs', format: 'esm' },
    { file: 'dist/xxx.cjs', format: 'cjs' }
  ],
  plugins: [alias, replace, resolve, typescript, terser],
  external: ['@ktjs/core']
}
```

### **配置 2：TypeScript 类型声明**

```javascript
{
  input: 'src/xxx.ts',
  output: [
    { file: 'dist/xxx.d.ts', format: 'es' }
  ],
  plugins: [alias, replace, dts],
  external: ['@ktjs/core']
}
```

---

## 💡 关键点总结

1. **两个入口** = 需要 **6 个输出文件**（每个入口 3 个文件）
2. **ESM 和 CJS 必须都有**，缺一不可
3. **类型定义必须有**，否则 TypeScript 用户体验差
4. **jsx-runtime.ts 特别重要**，因为它是编译器自动导入的
5. **package.json 的 exports 字段**要和输出文件完全对应

---

## ❓ 常见问题

**Q: 能不能只输出 ESM？**  
A: 不行，Node.js 和一些工具还需要 CJS

**Q: 能不能只输出 CJS？**  
A: 理论上可以，但会失去 tree-shaking，不推荐

**Q: jsx-dev-runtime 需要单独的文件吗？**  
A: 不需要，它可以和 jsx-runtime 共用同一个文件

**Q: 需要压缩（minify）吗？**  
A: 看需求，库文件一般压缩，但保留可读性也行

你现在理解了吗？有什么疑问可以继续问我！
