{
  const TEXT_CONTENT = '文本节点';
  const BLOCK = 'block';
  const TAG = 'tag';

  function testTag(tag) {
    const wrapper = document.createElement('div');
    wrapper.className = BLOCK;
    wrapper.style.display = 'flex';
    wrapper.style.marginBottom = '8px';

    const el = document.createElement(tag);
    el.className = TAG;

    const span = document.createElement('span');
    span.textContent = tag + ' : ';
    span.style.fontWeight = 'bold';

    const textNode = document.createTextNode(TEXT_CONTENT);
    el.appendChild(textNode);
    wrapper.append(span, el);
    document.body.appendChild(wrapper);
  }

  // find which tags cannot render text nodes
  function collect() {
    const invalidTextNodeTags = [];
    const list = document.querySelectorAll('.' + BLOCK);
    for (let i = 0; i < list.length; i++) {
      const wrapper = list[i];
      if (!wrapper.textContent.includes(TEXT_CONTENT)) {
        invalidTextNodeTags.push(wrapper.querySelector('.' + TAG).tagName);
      }
    }

    const pre = document.createElement('pre');
    pre.style.fontFamily = 'JetBrains Mono';
    pre.style.width = '42rem';
    pre.style.fontSize = '16px';
    pre.style.margin = '20px';
    pre.style.color = '#c12525';
    pre.style.textWrap = 'auto';
    pre.textContent = invalidTextNodeTags.join(', ').toLowerCase();
    document.body.appendChild(pre);
  }

  function run() {
    const body = document.body;
    body.innerHTML = '';

    const htmlTags = [
      'a',
      'abbr',
      'acronym',
      'address',
      'applet',
      'area',
      'article',
      'aside',
      'audio',
      'b',
      'base',
      'basefont',
      'bdi',
      'bdo',
      'big',
      'blockquote',
      'body',
      'br',
      'button',
      'canvas',
      'caption',
      'center',
      'cite',
      'code',
      'col',
      'colgroup',
      'data',
      'datalist',
      'dd',
      'del',
      'details',
      'dfn',
      'dialog',
      'dir',
      'div',
      'dl',
      'dt',
      'em',
      'embed',
      'fieldset',
      'figcaption',
      'figure',
      'font',
      'footer',
      'form',
      'frame',
      'frameset',
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'head',
      'header',
      'hgroup',
      'hr',
      'html',
      'i',
      'iframe',
      'img',
      'input',
      'ins',
      'kbd',
      'keygen',
      'label',
      'legend',
      'li',
      'link',
      'main',
      'map',
      'mark',
      'marquee',
      'menu',
      'menuitem',
      'meta',
      'meter',
      'nav',
      'nobr',
      'noembed',
      'noframes',
      'noscript',
      'object',
      'ol',
      'optgroup',
      'option',
      'output',
      'p',
      'param',
      'picture',
      'plaintext',
      'portal',
      'pre',
      'progress',
      'q',
      'rb',
      'rp',
      'rt',
      'rtc',
      'ruby',
      's',
      'samp',
      'script',
      'search',
      'section',
      'select',
      'slot',
      'small',
      'source',
      'spacer',
      'span',
      'strike',
      'strong',
      'style',
      'sub',
      'summary',
      'sup',
      'table',
      'tbody',
      'td',
      'template',
      'textarea',
      'tfoot',
      'th',
      'thead',
      'time',
      'title',
      'tr',
      'track',
      'tt',
      'u',
      'ul',
      'var',
      'video',
      'wbr',
      'xmp',
    ];

    htmlTags.forEach(testTag);
    setTimeout(collect, 1000);
  }

  run();
}
