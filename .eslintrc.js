module.exports = {
  rules: {
    'react-hooks/exhaustive-deps': 'off',
    'react-native/no-inline-styles': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/func-call-spacing': 'off',
    'react/react-in-jsx-scope': 'off',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      presets: ['@babel/preset-env', '@babel/preset-react'],
    },
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    '@react-native',
    'plugin:@typescript-eslint/recommended', // Add TypeScript ESLint plugin
    'plugin:jest/recommended', // Add Jest plugin
  ],
  ignorePatterns: ['jest.config.js', 'babel.config.js', 'metro.config.js'],
};
