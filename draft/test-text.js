// @ts-check

var ArraySlice = Array.prototype.slice;
var TEXT_CONTENT = '文本节点2';
var WRAPPER = 'block';
var EL = 'EL';

var header = document.createElement('div');
var container = document.createElement('div');

function getBrowserName() {
  var ua = navigator && navigator.userAgent;
  if (!ua) {
    return 'Unknown';
  }

  if (/Edg\//i.test(ua)) return 'Edge';
  if (/Chrome\//i.test(ua)) {
    if (/QQBrowser/i.test(ua)) return 'QQ Browser';
    if (/UBrowser/i.test(ua)) return 'UC Browser';
    if (/MetaSr/i.test(ua)) return 'Sogou Browser';
    if (/2345Explorer/i.test(ua)) return '2345 Explorer';
    if (/LBBROWSER/i.test(ua)) return 'Liebao Browser';
    if (/Maxthon/i.test(ua)) return 'Maxthon';
    if (/OPR\//i.test(ua)) return 'Opera';
    return 'Chrome';
  }
  if (/Firefox\//i.test(ua)) return 'Firefox';
  if (/Safari\//i.test(ua)) return 'Safari';
  return JSON.stringify(ua);
}

/**
 *
 * @param {string} tag
 */
function testTag(tag) {
  var wrapper = document.createElement('div');
  wrapper.style.display = 'flex';
  wrapper.style.marginBottom = '8px';
  wrapper.classList.add(WRAPPER);

  var el = document.createElement(tag);
  el.classList.add(EL);

  var span = document.createElement('span');
  span.textContent = tag + ' : ';
  span.style.fontWeight = 'bold';

  // ! Adding a text node to <script> causes Maxthon to throw an uncatchable error.
  // * just skip <script>, we already know it is invalid
  if (tag === 'script') {
    return;
  }

  var textNode = document.createTextNode(TEXT_CONTENT);
  el.appendChild(textNode);

  wrapper.appendChild(span);
  wrapper.appendChild(el);
  container.appendChild(wrapper);
}

// find which tags cannot render text nodes
function collect() {
  var invalidTextNodeTags = [];
  /**
   * @type {HTMLElement[]}
   */
  var list = ArraySlice.call(document.getElementsByClassName(WRAPPER));

  for (var i = 0; i < list.length; i++) {
    /**
     * @type {HTMLElement}
     */
    var wrapper = list[i];
    if (wrapper.innerText.indexOf(TEXT_CONTENT) === -1) {
      var w = wrapper.getElementsByClassName(EL)[0];
      if (!w) {
        alert('没有找到' + EL);
        return;
      }
      if (invalidTextNodeTags.length % 10 === 0) {
        invalidTextNodeTags.push('\n' + w.tagName);
      } else {
        invalidTextNodeTags.push(w.tagName);
      }
    }
  }

  var pre = document.createElement('pre');
  pre.style.fontFamily = 'JetBrains Mono';
  pre.style.width = '42rem';
  pre.style.fontSize = '16px';
  pre.style.margin = '20px';
  pre.style.color = '#c12525';
  pre.textContent = getBrowserName() + ' :\n' + invalidTextNodeTags.join(', ').toLowerCase();

  header.appendChild(pre);
}

function run() {
  document.body.innerHTML = '';
  document.body.appendChild(header);
  document.body.appendChild(container);

  var htmlTags = [
    'a',
    'abbr',
    'acronym',
    'address',
    'appvar',
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
  setTimeout(() => {
    try {
      collect();
    } catch (/**  @type {any} */ error) {
      if (typeof error === 'string') {
        alert(error);
      } else if (typeof error === 'object' && error !== null) {
        alert(error.message);
      } else {
        alert(String(error));
      }
    }
  }, 1000);
}

try {
  run();
} catch (/**  @type {any} */ error) {
  if (typeof error === 'string') {
    alert(error);
  } else if (typeof error === 'object' && error !== null) {
    alert(error.message);
  } else {
    alert(String(error));
  }
}
