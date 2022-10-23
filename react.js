module.exports = {
  extends: ['plugin:react/recommended', 'plugin:react-hooks/recommended'],
  plugins: ['react', 'react-hooks'],

  settings: {
    react: {version: 'detect'},
  },

  rules: {
    'react/prop-types': ['off'],
    'react/display-name': ['off'],
    'react/no-access-state-in-setstate': ['warn'],
    'react/no-this-in-sfc': ['warn'],
    'react/prefer-stateless-function': ['warn'],
    'react/jsx-boolean-value': ['warn'],
    'react/jsx-pascal-case': ['warn'],
  },
};
