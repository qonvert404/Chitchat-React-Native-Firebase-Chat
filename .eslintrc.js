module.exports = {
  parser: 'babel-eslint',
  extends: ['plugin:prettier/recommended', 'plugin:react/recommended'],
  plugins: ['react'],
  env: {
    jest: true
  },
  settings: {
    'import/resolver': { 'babel-module': {} }
  }
};
