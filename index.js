module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'prettier',
    'prettier/react',
  ],
  plugins: ['react', 'prettier'],

  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },

  rules: {
    // Best practices
    'array-callback-return': ['error', 'always'],
    'class-methods-use-this': ['warn'],
    'consistent-return': ['warn'],
    'no-caller': ['warn'],
    'no-else-return': ['error', { allowElseIf: false }],
    'no-extra-label': ['error'],
    'no-floating-decimal': ['error'],
    'no-implied-eval': ['error'],
    'no-invalid-this': ['error'],
    'no-lone-blocks': ['error'],
    'no-return-await': ['error'],
    'no-self-compare': ['error'],
    'no-sequences': ['error'],
    'no-unused-expressions': ['warn'],
    'no-useless-call': ['warn'],
    'no-useless-concat': ['warn'],
    'no-useless-return': ['warn'],
    'require-await': ['warn'],
    curly: ['error'],
    eqeqeq: ['error'],
    radix: ['wran'],

    // Variables
    'no-undef-init': ['warn'],
    'no-undefined': ['warn'],

    // Style (mostly handled by prettier)
    'capitalized-comments': ['warn'],
    'eol-last': ['error', 'always'],
    'line-comment-position': ["error", { "position": "above" }]
    'new-cap': ['error'],
    'new-parens': ['error'],
    'padded-blocks': ['warn', 'never'],
    'spaced-comment': ['warn', 'always'],
    camelcase: ['warn'],

    // ECMA 6
    'no-useless-constructor': ['warn'],
    'no-var': ['error'],
    'prefer-arrow-callback': ['warn'],
    'prefer-const': ['error'],
    'prefer-destructuring': ['warn'],
    'prefer-numeric-literals': ['warn'],
    'prefer-rest-params': ['warn'],
    'prefer-spread': ['warn'],
    'prefer-template': ['warn'],

    // React
    'react/boolean-prop-naming': ['warn'],
    'react/default-props-match-prop-types': ['warn']
    'react/destructuring-assignment': ['warn'],
    'react/no-access-state-in-setstate': ['warn'],
    'react/no-this-in-sfc': ['warn'],
    'react/prefer-stateless-function': ['warn'],
    'react/jsx-boolean-value': ['warn'],
    'react/jsx-handler-names)': ['warn'],
    'react/jsx-pascal-case': ['warn'],
  },
};
