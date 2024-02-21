module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "react/no-unknown-property": ["error", { "ignore": ["intensity", "groundColor", "object", 'geometry', 'material', 'position', 'rotation', 'dispose'] }],
    'react/react-in-jsx-scope': 'off',
    'no-unused-vars': ['error', { varsIgnorePattern: 'React' }],
    'react/prop-types': 'off',
    camelcase: 'error', // Enforces camelCase
    'react/jsx-pascal-case': ['error', { allowAllCaps: true, ignore: [] }], // Enforces PascalCase for components
  },
}
