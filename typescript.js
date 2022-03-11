module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
  ],
  plugins: ['@typescript-eslint', 'simple-import-sort', 'prettier', 'import'],
  parser: '@typescript-eslint/parser',
  rules: {
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/array-type': 'error',
    'no-restricted-syntax': [
      'off',
      {
        selector: 'TSEnumDeclaration',
        message: 'Enum restricted. Use Object.Freeze or a string union.',
      },
      {
        selector: 'ClassDeclaration[abstract=true]',
        message: 'Abstract class restricted.',
      },
      {
        selector: 'TSParameterProperty',
        message: 'Parameter property restricted.',
      },
    ],
  },
};
