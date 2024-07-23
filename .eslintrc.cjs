module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react-hooks/recommended',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    plugins: ['react-refresh'],
    rules: {
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  }



// module.exports = {
//     root:true,
//     parser: '@typescript-eslint/parser',
//     parserOptions: {
//       ecmaFeatures: {
//         jsx: true,
//       },
//       ecmaVersion: 2021,
//       sourceType: 'module',
//     },
//     settings: {
//       react: {
//         version: 'detect',
//       },
//     },
//     extends: [
//       'eslint:recommended',
//       'plugin:react/recommended',
//       'plugin:@typescript-eslint/recommended',
//     //   'plugin:prettier/recommended',
//       'next',
//       'next/core-web-vitals',
//     ],
//     plugins: ['react', '@typescript-eslint'],
//     rules: {
//       // Add your custom rules here
//     },
//   };
  