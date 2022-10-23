## Evan Purkhiser's Personal JS code styles

[![publish](https://github.com/evanpurkhiser/eslint-config/workflows/publish/badge.svg)](https://github.com/evanpurkhiser/eslint-config/actions?query=workflow%3Apublish)

These are my eslint configurations that I use across my various personal
projects.

```
yarn install -D @evanpurkihser/eslint-config
```

Create a `.eslintrc.js` file with the contents:

```js
module.exports = {
  extends: ['@evanpurkhiser'],
};
```

The default configuration is for React apps, but you can select from the
following configurations

- `common` - ES6 and Typescript rules
- `react` - React specific rules

For example:

```js
module.exports = {
  extends: ['@evanpurkhiser/eslint-config/common'],
};
```
