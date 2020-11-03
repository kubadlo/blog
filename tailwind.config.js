module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  purge: ['templates/**/*.html'],
  theme: {
    fontFamily: {
      sans: ['Fira Sans', 'BlinkMacSystemFont', '-apple-system', 'sans-serif'],
      mono: ['Fira Code', 'monospace']
    },
    extend: {}
  },
  variants: {},
  plugins: []
};
