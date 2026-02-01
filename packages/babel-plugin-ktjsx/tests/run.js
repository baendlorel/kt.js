const fs = require('fs');
const path = require('path');
const babel = require('@babel/core');

let plugin;
try {
  const pluginMod = require(path.resolve(__dirname, '../dist/index.cjs.js'));
  plugin = (pluginMod && (pluginMod.default || pluginMod)) || pluginMod;
} catch (err) {
  // Fallback: use a lightweight inline plugin if dist build is not present
  console.warn('Built plugin not found, using inline fallback plugin for demo.');
  plugin = function (babelApi, options) {
    const t = babelApi.types;
    const svgTags = (options && options.svgTags) || ['svg', 'g', 'path'];
    const ns = (options && options.namespaceURI) || 'http://www.w3.org/2000/svg';
    const createNames = (options && options.createElementNames) || ['createElement', 'h'];
    return {
      visitor: {
        CallExpression(path) {
          const callee = path.node.callee;
          if (!t.isIdentifier(callee)) return;
          if (!createNames.includes(callee.name)) return;

          const args = path.node.arguments;
          if (!args || args.length === 0) return;

          const first = args[0];
          if (!t.isStringLiteral(first)) return;

          const tag = first.value;
          if (!svgTags.includes(tag)) return;

          path.node.callee = t.identifier('createElementNS');
          const nsArg = t.stringLiteral(ns);
          const tagArg = t.stringLiteral(tag);
          path.node.arguments = [nsArg, tagArg, ...args.slice(1)];
        },

        JSXElement(path) {
          // Convert JSXElement to createElement / createElementNS call expression
          function buildPropsObject(attrs) {
            if (!attrs || attrs.length === 0) return t.nullLiteral();
            const props = attrs
              .filter((a) => t.isJSXAttribute(a))
              .map((a) => {
                const key = a.name.name;
                let value;
                if (!a.value) {
                  value = t.booleanLiteral(true);
                } else if (t.isStringLiteral(a.value)) {
                  value = a.value;
                } else if (t.isJSXExpressionContainer(a.value)) {
                  value = a.value.expression || t.nullLiteral();
                } else {
                  value = t.nullLiteral();
                }
                return t.objectProperty(t.identifier(key), value);
              });
            return t.objectExpression(props);
          }

          function convert(node) {
            if (t.isJSXText(node)) {
              const txt = node.value.replace(/\s+/g, ' ').trim();
              return txt ? t.stringLiteral(txt) : null;
            }
            if (t.isJSXExpressionContainer(node)) {
              if (t.isExpression(node.expression)) return node.expression;
              return null;
            }
            if (t.isJSXElement(node)) {
              const opening = node.openingElement;
              const nameNode = opening.name;
              const tagName = t.isJSXIdentifier(nameNode) ? nameNode.name : null;
              const isSvg = tagName && svgTags.includes(tagName);
              const calleeName = isSvg ? 'createElementNS' : 'createElement';
              const args = [];
              if (isSvg) {
                args.push(t.stringLiteral(ns), t.stringLiteral(tagName));
              } else {
                args.push(t.stringLiteral(tagName));
              }
              const props = buildPropsObject(opening.attributes);
              args.push(props === t.nullLiteral() ? t.nullLiteral() : props);
              const children = node.children.map(convert).filter(Boolean);
              args.push(...children);
              return t.callExpression(t.identifier(calleeName), args);
            }
            return null;
          }

          const callExpr = convert(path.node);
          if (callExpr) path.replaceWith(callExpr);
        },
      },
    };
  };
}

const samplePath = path.resolve(__dirname, 'sample.tsx');
const code = fs.readFileSync(samplePath, 'utf8');

const res = babel.transformSync(code, {
  filename: samplePath,
  plugins: [[plugin, { svgTags: ['svg', 'g', 'path'] }]],
  parserOpts: { plugins: ['typescript', 'jsx'] },
  configFile: false,
  babelrc: false,
});

if (!res) {
  console.error('No transform result');
  process.exit(1);
}

console.log('\n--- Transformed output ---\n');
console.log(res.code);
console.log('\n--- Written to tests/out.js ---\n');
