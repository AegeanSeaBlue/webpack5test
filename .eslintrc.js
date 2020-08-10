module.exports = {
  parser: 'babel-eslint',
  extends: ['react-app', 'plugin:jsx-a11y/recommended'],
  plugins: ['jsx-a11y'],
  env: {
    browser: true,
    node: true,
    es6: true
  },
  globals: {
    React: true
  },
  rules: {},
  settings: {
    polyfills: ['fetch', 'Promise', 'Uint8Array', 'url', 'Object']
  }
};
