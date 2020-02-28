module.exports = {
  extends: ['airbnb-base', 'prettier'],
  plugins: ['jsx-a11y', 'import', 'prettier'],
  parserOptions: { ecmaFeatures: { jsx: true, modules: true } },
  rules: {
    'import/extensions': ['error', { ts: 'never', tsx: 'never' }],
    'no-console': 'error',
    'prefer-destructuring': [
      'error',
      {
        array: false,
        object: true,
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
      },
    },
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      rules: {
        'no-unused-vars': 0,
        'no-undef': 0,
      },
    },
  ],
};
