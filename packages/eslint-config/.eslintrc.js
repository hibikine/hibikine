module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: ['react'],
  parserOptions: { ecmaFeatures: { jsx: true } },
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
      parser: 'typescript-eslint-parser',
      plugins: ['react', '@typescript-eslint/eslint-plugin'],
      rules: {
        'no-unused-vars': 0,
        'no-undef': 0,
        'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
        'react/prop-types': 'off',
      },
    },
  ],
};
