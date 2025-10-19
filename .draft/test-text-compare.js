// @ts-check

/**
 * @type {Record<string,string>}
 */
var o = {
  maxthon: `

audio, base, basefont, br, canvas, datalist, details, dialog, embed, frameset, 
head, iframe, img, input, link, meta, meter, noembed, noframes, noscript, 
optgroup, param, progress, rp, select, style, template, textarea, title, video, 
wbr

`,
  quark: `
audio, base, basefont, br, canvas, datalist, details, dialog, embed, frameset, 
head, iframe, img, input, link, meta, meter, noembed, noframes, noscript, 
optgroup, param, progress, rp, select, style, template, textarea, title, video, 
wbr

`,
  uc: `

audio, base, basefont, br, canvas, datalist, details, dialog, embed, frameset, 
head, iframe, img, input, link, meta, meter, noembed, noframes, noscript, 
optgroup, param, progress, rp, select, style, template, textarea, title, video, 
wbr

`,
  Chrome: `

audio, br, canvas, datalist, details, dialog, embed, frame, frameset, head, 
iframe, img, input, link, meta, meter, noembed, noframes, noscript, optgroup, 
param, progress, rp, select, style, template, textarea, title, video, wbr

`,
  QQ: `

audio, base, basefont, br, canvas, datalist, details, dialog, embed, frameset, 
head, iframe, img, input, link, meta, meter, noembed, noframes, noscript, 
optgroup, param, progress, rp, select, style, template, textarea, title, video, 
wbr

`,
  Sogou: `

audio, base, basefont, br, canvas, datalist, details, dialog, embed, frameset, 
head, iframe, img, input, link, meta, meter, noembed, noframes, noscript, 
optgroup, param, progress, rp, select, style, template, textarea, title, video, 
wbr

`,
  cent: `

audio, base, basefont, br, canvas, datalist, details, dialog, embed, frameset, 
head, iframe, img, input, link, meta, meter, noembed, noframes, noscript, 
optgroup, param, progress, rp, select, style, template, textarea, title, video, 
wbr


`,
  world: `

audio, br, canvas, datalist, details, dialog, embed, frame, frameset, head, 
iframe, img, input, keygen, link, meta, meter, noembed, noframes, noscript, 
optgroup, option, param, progress, select, style, template, textarea, title, video, 
wbr

`,
  Opera: `

audio, base, basefont, br, canvas, datalist, details, dialog, embed, frameset, 
head, iframe, img, input, link, meta, meter, noembed, noframes, noscript, 
optgroup, param, progress, rp, select, style, template, textarea, title, video, 
wbr


`,
  Firefox: `

area, audio, base, basefont, br, canvas, datalist, details, dialog, frameset, 
head, iframe, img, input, link, meta, meter, noembed, noframes, noscript, 
optgroup, param, progress, rp, select, style, template, textarea, title, video, 
wbr`,
  Edge: `
audio, base, basefont, br, canvas, datalist, details, dialog, embed, frameset, 
head, iframe, img, input, link, meta, meter, noembed, noframes, noscript, 
optgroup, param, progress, rp, select, style, template, textarea, title, video, 
wbr`,
  liebao: `
audio, base, basefont, br, canvas, datalist, details, dialog, embed, frameset, 
head, iframe, img, input, link, meta, meter, noembed, noframes, noscript, 
optgroup, param, progress, rp, select, style, template, textarea, title, video, 
wbr`,
  360: `
audio, base, basefont, br, canvas, datalist, details, dialog, embed, frameset, 
head, iframe, img, input, link, meta, meter, noembed, noframes, noscript, 
optgroup, param, progress, rp, select, style, template, textarea, title, video, 
wbr`,
  2345: `
audio, base, basefont, br, canvas, datalist, details, dialog, embed, frameset, 
head, iframe, img, input, link, meta, meter, noembed, noframes, noscript, 
optgroup, param, progress, rp, select, style, template, textarea, title, video, 
wbr`,
  '360turbo': `
audio, br, canvas, datalist, details, dialog, embed, frame, frameset, head, 
iframe, img, input, link, meta, meter, noembed, noframes, noscript, optgroup, 
param, progress, rp, select, style, template, textarea, title, video, wbr`,
};

function compare() {
  /**
   * @type {Map<string,string[]>} o
   */
  const listMap = new Map();
  /**
   * @type {string[]}
   */
  const base = [];
  Object.entries(o).forEach(([k, v]) => {
    const key = k.toLowerCase();
    const value = v.replace(/\s/g, '').split(',');
    if (key === 'firefox') {
      base.push(...value);
    } else {
      listMap.set(key, value);
    }
  });

  Array.from(document.body.children).forEach((e) => e.remove());

  const div = document.createElement('div');
  div.style.fontFamily = 'JetBrains Mono';
  div.style.whiteSpace = 'pre-wrap';
  div.style.lineHeight = '1.6';
  div.style.fontSize = '16px';
  div.style.margin = '20px';
  div.style.color = '#c12525';

  div.textContent += 'FireFox(as base): ' + base.join(', ') + '\n';

  listMap.forEach((v, k) => {
    div.textContent += k + ': ';
    /**
     * @type {string[]}
     */
    const list = [];
    v.forEach((tag) => {
      if (!base.includes(tag)) {
        list.push(tag);
      }
    });
    div.textContent += list.length === 0 ? '没有记录' : list.join(',');
    div.textContent += '\n';
  });

  document.body.appendChild(div);

  // compare
}
