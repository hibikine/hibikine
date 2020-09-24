module.exports = {
  extends: ['airbnb', '@hibikine/eslint-config-base', 'prettier/react'],
  plugins: ['jsx-a11y', 'react', 'react-hooks'],
  parserOptions: { ecmaFeatures: { jsx: true, modules: true } },
  rules: {
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
      plugins: ['react'],
      rules: {
        'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
        'react/prop-types': 'off',
      },
    },
  ],
};
