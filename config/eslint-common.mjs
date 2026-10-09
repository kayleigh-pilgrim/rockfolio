export const commonRules = {
  eqeqeq: ['error', 'always', { null: 'ignore' }],
  curly: ['error', 'all'],
  'no-var': 'error',
  'prefer-const': 'error',
  'no-debugger': 'error',
  'no-unused-vars': [
    'error',
    {
      args: 'all',
      argsIgnorePattern: '^_',
      caughtErrors: 'all',
      caughtErrorsIgnorePattern: '^_',
      ignoreRestSiblings: true,
    },
  ],
};
