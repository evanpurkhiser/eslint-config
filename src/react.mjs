import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import globals from 'globals';
import tseslint from 'typescript-eslint';

const react = tseslint.config(
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat['jsx-runtime'],

  {
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },

    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
      },
    },

    rules: {
      // XXX: Hack while we wait for flat config support in the hooks plugin
      // https://github.com/facebook/react/pull/30774
      ...reactHooksPlugin.configs.recommended.rules,
      'react/prop-types': ['off'],
      'react/display-name': ['off'],
      'react/no-access-state-in-setstate': ['warn'],
      'react/no-this-in-sfc': ['warn'],
      'react/prefer-stateless-function': ['warn'],
      'react/jsx-boolean-value': ['warn'],
      'react/jsx-pascal-case': ['warn'],
    },
  }
);

export {react};
