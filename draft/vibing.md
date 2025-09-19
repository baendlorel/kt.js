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

---

编写readme：

1. 用英文写
2. src/index.ts里导出的4个函数详细介绍一下
3. 介绍一下enhance之后多出来的属性
4. 标题下面要有这一行：

```text
For more awesome packages, check out [my homepage💛](https://baendlorel.github.io/?repoType=npm)
```

4. 介绍一下这个库的理念：不强制重绘, 几乎不重绘，最小化开销，极致性能，直接操作DOM
5. 在标题下面说明：这个库还在开发中
6. 覆盖现有的README.md文件
7. 写一个中文版README_ZH.md ，两个md文件的标题下方给出这两者相互的链接用于切换

---

写一组类型工具，要求最终能实现一个类型，表示一个函数的任意前N个入参:

1. 实现FirstNParams<Func,N>类型，入参为函数和数字，返回值为元组类型，表示函数的前N个入参类型
2. 这个类型要能处理可选参数和剩余参数
3. 用FirstNParams进一步实现一个联合类型：FirstParamOrAllParams<Func> =[] | FirstNParams<Func,1> |FirstNParams<Func,1> |FirstNParams<Func,2> |FirstNParams<Func,3> | ... | Parameters<Func>
4. 写在src/types/type-utils.d.ts里；
