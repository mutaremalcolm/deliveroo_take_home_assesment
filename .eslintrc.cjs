module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    plugins: ['react-refresh'],
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react-hooks/recommended',
      'plugin:react-hooks/recommended',
      'plugin:@next/next/recommended',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "@typescript-eslint"
  ],
  "rules": {
    "react-refresh/only-export-components": "off",
    "@typescript-eslint/no-explicit-any": "off"
  }
}
