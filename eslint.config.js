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
      '@typescript-eslint/explicit-function-return-type': 'off',
      'n/no-process-exit': 'off',
      'unicorn/no-process-exit': 'off',
      'no-useless-escape': 'off',
      'unicorn/error-message': 'off',
      'no-console': 'off',
    },
  },
  {
    files: ['**/package.json'],
    rules: {
      'package-json/no-empty-fields': 'off',
      'package-json/valid-repository-directory': 'off',
      'package-json/valid-description': 'off',
      'package-json/sort-collections': 'off',
      'package-json/valid-author': 'off',
    },
  },
  {
    files: ['packages/extension-host-helper-process/**/*.ts'],
    rules: {
      'unicorn/no-error-property-assignment': 'off',
      'perfectionist/sort-objects': 'off',
      'perfectionist/sort-switch-case': 'off',
      'sonarjs/single-character-alternation': 'off',
      'sonarjs/argument-type': 'off',
    },
  },
]
