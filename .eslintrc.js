module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb',
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    'no-unused-vars': 'off',
    'class-methods-use-this': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-param-reassign': 'off',
    'max-len': 'off', 
  },
};
