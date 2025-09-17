let cssString: string[] = [];

export const _css = (cssText: string, scopeName?: string) => {
  if (typeof cssText !== 'string') {
    throw new Error('[Yuka:css] cssText must be a string');
  }
  if (scopeName !== undefined && typeof scopeName !== 'string') {
    throw new Error('[Yuka:css] cssText must be a string');
  }
  if (scopeName === undefined) {
    cssString.push(cssText);
    return;
  }

  // 下面开始解析css文本并加入scope
  // 解析的前提是css文本是语法正确的，此处只能假设是正确的
  const canonicalIndexes: number[] = [];
  let isSingleQuotation = false;
  let isDoubleQuotation = false;
  for (let i = 0; i < cssText.length; i++) {
    const c = cssText[i];
    // 先看是否本次就是单双引号
    switch (c) {
      case `"`:
        if (isDoubleQuotation) {
          // 说明是第2次碰到引号，引号结束
          isDoubleQuotation = false;
        } else {
          // 说明是第1次碰到引号，引号结束
          isDoubleQuotation = true;
          continue;
        }
        break;
      case `'`:
        if (isSingleQuotation) {
          // 说明是第2次碰到引号，引号结束
          isSingleQuotation = false;
        } else {
          // 说明是第1次碰到引号，引号结束
          isSingleQuotation = true;
          continue;
        }
        break;
    }

    // 再看是否在单双引号中
    if (isSingleQuotation || isDoubleQuotation) {
      continue;
    }

    // 如果碰到疑似标志着选择器的字符，则往回回溯到第一个不是空白字符的字符
    if (c === '{' || c === ',') {
      for (let j = i; j >= 0; j--) {
        if (cssText[j].match(/[\w\]\.\#\)]/)) {
          canonicalIndexes.push(j + 1);
          break;
        }
      }
    }
  }

  // 收集到了所有需要添加scope的位置，开始处理
  let scopedCss = '';
  let last = 0;
  scopeName = `[${scopeName}]`;
  for (let i = 0; i < canonicalIndexes.length; i++) {
    const idx = canonicalIndexes[i];
    scopedCss += cssText.slice(last, idx);
    scopedCss += scopeName;
    last = idx;
  }
  scopedCss += cssText.slice(last);

  cssString.push(scopedCss);
};

export const applyCss = () => {
  // 删除旧的
  document.querySelectorAll('style[yuka]').forEach((el) => {
    el.remove();
  });

  // 添加新的
  const style = document.createElement('style');
  style.innerHTML = cssString.join(' ');
  style.setAttribute('yuka', '');
  document.body.append(style);
};
