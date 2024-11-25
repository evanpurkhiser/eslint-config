## Evan Purkhiser's Personal JS code styles

[![publish](https://github.com/evanpurkhiser/eslint-config/workflows/publish/badge.svg)](https://github.com/evanpurkhiser/eslint-config/actions?query=workflow%3Apublish)
[![NPM](https://img.shields.io/npm/v/@evanpurkhiser/eslint-config)](https://www.npmjs.com/package/@evanpurkhiser/eslint-config)

These are my eslint configurations that I use across my various personal
projects.

```
yarn install -D @evanpurkhiser/eslint-config
```

Create a `eslint.config.mjs` file with the contents:

```js
import {all} from '@evanpurkhiser/eslint-config';

export default [...all];
```

The default configuration is for React apps, but you can select from the
following configurations

- `common` - ES6 and Typescript rules
- `react` - React specific rules

For example:

```js
import {common} from '@evanpurkhiser/eslint-config';

export default [...common];
```
