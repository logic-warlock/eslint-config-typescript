/* eslint-disable @typescript-eslint/no-var-requires */
const documentation = require('./rules/documentation')
const syntax = require('./rules/syntax')

module.exports = {
  overrides: [
    {
      // TypeScript rules should only apply to TypeScript files
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint', 'eslint-plugin-tsdoc'],
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      rules: {
        ...syntax,
        ...documentation,
      },
    },
  ],
}
