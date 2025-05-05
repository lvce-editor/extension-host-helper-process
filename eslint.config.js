import * as config from '@lvce-editor/eslint-config'

export default [
  ...config.default,
  ...config.recommendedNode,
  {
    files: ['**/*.ts'],
    rules: {
      '@typescript-eslint/prefer-readonly-parameter-types': 'off',
      'n/no-unsupported-features/node-builtins': 'off',
      'n/no-missing-import': 'off',
    },
  },
  {
    files: ['**/package.json'],
    rules: {
      'package-json/no-empty-fields': 'off',
      'package-json/valid-repository-directory': 'off',
    },
  },
]
