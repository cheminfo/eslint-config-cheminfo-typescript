# eslint-config-cheminfo-typescript

Shared ESLint config for TypeScript projects.

## Installation

```console
npx i -D eslint-config-cheminfo-typescript eslint@^8.57.0
```

## Usage

Create a `eslint.config.mjs` file with the following contents:

```js
import cheminfo from 'eslint-config-cheminfo-typescript';

export default [...cheminfo];
```

You can then customize the config for your project.

## References

This config extends our base [`eslint-config-cheminfo`](https://github.com/cheminfo/eslint-config) JavaScript config.
