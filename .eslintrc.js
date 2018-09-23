// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/strongly-recommended', 
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'eslint:recommended'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    // 'generator-star-spacing': 'off',
    // allow debugger during development
    // 'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'key-spacing': 'warn',
        'eol-last': 'warn',
        'keyword-spacing': 'warn',
        'indent': ['warn', 4, { 'SwitchCase': 1 }],
        'vue/html-indent': ['warn', 4],
        'no-trailing-spaces': 'warn',
        'no-multi-spaces': 'warn',
        'space-unary-ops': 'warn',
        'no-multiple-empty-lines': 'warn',
        'object-curly-spacing': ['warn', 'always'],
        'space-before-blocks': 'warn',
        'array-bracket-spacing': ['warn', 'always'],
        'comma-spacing': 'warn',
        'space-in-parens': 'warn',
        'no-undef': 'off',
        'semi': ['error', 'never'],
        'brace-style': ['warn', 'stroustrup'],
        'no-console': 'warn',
        'vue/require-prop-types': 'off',
        'no-unused-vars': 'warn',
        'vue/html-closing-bracket-newline': ['error', {
            'singleline': 'never',
            'multiline': 'always'
        }],
        'vue/require-default-prop': 'off',
        'vue/attribute-hyphenation': 'off'

  }
}
