const { babel } = require('@rollup/plugin-babel');
const { terser } = require('rollup-plugin-terser');
const postcss = require('rollup-plugin-postcss');

const production = () => process.env.NODE_ENV === 'production';
const bundleName = () => production()
  ? '[name].[hash].min.js'
  : '[name].js';

module.exports = {
  input: 'client/blog.js',
  output: {
    dir: 'static/',
    entryFileNames: bundleName(),
    format: 'iife',
    sourcemap: !production()
  },
  plugins: [
    babel({
      babelHelpers: 'bundled'
    }),
    postcss({
      extract: true,
      minimize: production(),
      sourceMap: !production(),
      plugins: [
        require('tailwindcss'),
        require('postcss-preset-env')
      ]
    }),
    production() && terser()
  ]
};
