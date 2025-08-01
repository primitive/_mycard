module.exports = {
  parser: '@babel/eslint-parser',
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  plugins: ['react'],
  env: {
    browser: true,
    es2021: true,
  },
  settings: {
    react: { version: 'detect' }
  }
};