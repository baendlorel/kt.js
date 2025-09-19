现在以@adobe/css-tools库为基础，编写一个函数，名为css

1. 使用是这样的

```ts
css`
  .sdf {
    color: red;
  }
`;
```

2. 作用是把这段css文字加入到一个全局的string[]变量`cssList`中。
3. 写在src/core/css.ts里

---

创建一个scopeCss函数：

1. 它以刚才的函数`css`作为第一个入参，第二个入参是scopeName，string型；
2. 它将会使用@adobe/css-tools库，把css文本中的所有选择器都加上scopeName前缀；
3. 然后把处理后的css文本调用一次`css`函数；
4. 此函数写在src/core/css.ts里

---

这个scopeCss函数依然不是我想要的，请优化：

1. 这个scopename添加的规则要和vue一样

---

编写用于测试h函数的测试文件，放在tests/h文件夹下，包含多个文件，要测试：

1. h函数的基本用法
2. 入参不符合条件的情况
3. isKT,kid等属性
4. kon,koff,kmount等方法
