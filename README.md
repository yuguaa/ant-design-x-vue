# wzc-init-vue

[![NPM version](https://img.shields.io/npm/v/wzc-init-vue.svg?style=flat)](https://npmjs.org/package/wzc-init-vue)
[![NPM downloads](http://img.shields.io/npm/dm/wzc-init-vue.svg?style=flat)](https://npmjs.org/package/wzc-init-vue)

A vue library developed with dumi

## Usage

First, introduce css file:

```ts
import 'wzc-init-vue/dist/style.css';
```

Then, introduce components:

```html
<script setup lang="ts">
  import { Foo, Bar } from 'wzc-init-vue';
</script>
```

## Options

TODO

## Development

```bash
# install dependencies
$ pnpm install

# develop library by docs demo
$ pnpm start

# build library source code
$ pnpm run build

# build library source code in watch mode
$ pnpm run build:watch

# build docs
$ pnpm run docs:build

# Locally preview the production build.
$ pnpm run docs:preview

# check your project for potential problems
$ pnpm run doctor

# Test
$ pnpm test

# Coverage
$ pnpm test:cov

# Lint
$ pnpm lint
```

## LICENSE

MIT
