module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: ['react', 'jsx-a11y', 'import', 'prettier', 'react-hooks'],
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
    'react/jsx-no-target-blank': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
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
      plugins: ['react', '@typescript-eslint'],
      rules: {
        'no-unused-vars': 0,
        'no-undef': 0,
        'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
        'react/prop-types': 'off',
      },
    },
  ],
};
