module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/stylistic',
  ],
  plugins: ['prettier', 'import', '@typescript-eslint', 'simple-import-sort'],
  parser: '@typescript-eslint/parser',

  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },

  rules: {
    // Best practices
    'array-callback-return': ['warn'],
    'consistent-return': ['warn'],
    'no-caller': ['warn'],
    'no-else-return': ['error', {allowElseIf: false}],
    'no-extra-label': ['error'],
    'no-floating-decimal': ['error'],
    'no-implied-eval': ['error'],
    'no-lone-blocks': ['error'],
    'no-return-await': ['error'],
    'no-self-compare': ['error'],
    'no-sequences': ['error'],
    'no-useless-call': ['warn'],
    'no-useless-concat': ['warn'],
    'no-useless-return': ['warn'],
    'require-await': ['warn'],
    curly: ['error'],
    eqeqeq: ['error'],
    radix: ['warn'],

    // Variables
    'no-undef-init': ['warn'],

    // Style (mostly handled by prettier)
    'eol-last': ['error', 'always'],
    'new-parens': ['error'],
    'padded-blocks': ['warn', 'never'],
    'spaced-comment': ['warn', 'always'],

    // ECMA 6
    'no-var': ['error'],
    'prefer-arrow-callback': ['warn'],
    'prefer-const': ['error'],
    'prefer-destructuring': ['off'],
    'prefer-numeric-literals': ['warn'],
    'prefer-rest-params': ['warn'],
    'prefer-spread': ['warn'],
    'prefer-template': ['warn'],
    'arrow-body-style': ['error', 'as-needed'],

    // disabled for typescript
    'no-unused-expressions': ['off'],

    // Typescript
    '@typescript-eslint/explicit-function-return-type': ['off'],
    '@typescript-eslint/no-use-before-define': ['off'],
    '@typescript-eslint/no-explicit-any': ['off'],
    '@typescript-eslint/no-non-null-assertion': ['off'],
    '@typescript-eslint/explicit-module-boundary-types': ['off'],
    '@typescript-eslint/no-unused-vars': ['error', {argsIgnorePattern: '^_'}],
    '@typescript-eslint/no-unused-expressions': ['error'],

    // see: https://github.com/typescript-eslint/typescript-eslint/issues/420
    '@typescript-eslint/no-useless-constructor': 'error',

    // Consistent Array<T> / T[] usage
    '@typescript-eslint/array-type': ['error', {default: 'array-simple'}],

    // Sort imports
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // Side effect imports.
          ['^\\u0000'],
          // Packages. `react` related packages come first.
          ['^react', '^@?\\w'],
          // Node.js builtins.
          [`^(${require('module').builtinModules.join('|')})(/|$)`],
          // Internal packages.
          ['^(src|app)(/.*|$)'],
          // Parent imports. Put `..` last.
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          // Other relative imports. Put same-folder imports and `.` last.
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
        ],
      },
    ],
  },
};
