/**
 * Babel preset for @ktjs/jsx
 *
 * This preset configures Babel to transform JSX/TSX syntax
 * to use the KT.js JSX runtime.
 *
 * @example
 * // babel.config.js
 * module.exports = {
 *   presets: ['@ktjs/jsx/babel-preset']
 * }
 *
 * @param {import('@babel/core').ConfigAPI} api
 * @param {Object} options
 * @param {boolean} [options.runtime='automatic'] - JSX runtime mode: 'automatic' or 'classic'
 * @param {string} [options.importSource='@ktjs/jsx'] - Import source for automatic runtime
 * @param {string} [options.pragma='h'] - JSX pragma for classic runtime
 * @param {string} [options.pragmaFrag='Fragment'] - JSX fragment pragma for classic runtime
 */
module.exports = function (api, options = {}) {
  const { runtime = 'automatic', importSource = '@ktjs/jsx', pragma = 'h', pragmaFrag = 'Fragment' } = options;

  api.assertVersion(7);

  return {
    plugins: [
      [
        '@babel/plugin-transform-react-jsx',
        {
          runtime,
          importSource: runtime === 'automatic' ? importSource : undefined,
          pragma: runtime === 'classic' ? pragma : undefined,
          pragmaFrag: runtime === 'classic' ? pragmaFrag : undefined,
        },
      ],
    ],
  };
};
