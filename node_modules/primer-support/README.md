# Primer CSS Support

[![npm version](http://img.shields.io/npm/v/primer-support.svg)](https://www.npmjs.org/package/primer-support)
[![Build Status](https://travis-ci.org/primer/primer-css.svg?branch=master)](https://travis-ci.org/primer/primer-css)

> Support files are Sass variables, mixins, and functions that we import into different bases for use across components, objects, and utilities. Sharing these common properties across GitHub sites helps us to keep our styles more consistent.
>
> Most of the time to include these you'll only need to add `@import "support/support";` to the top of your bundle. If you want only a specific partial you can import them separately.

This repository is a module of the full [primer-css][primer] repository.

## Install

This repository is distributed with [npm][npm]. After [installing npm][install-npm], you can install `primer-support` with this command.

```
$ npm install --save primer-support
```

## Usage

The source files included are written in [Sass][sass] (`scss`) You can simply point your sass `include-path` at your `node_modules` directory and import it like this.

```scss
@import "primer-support/index.scss";
```

You can also import specific portions of the module by importing those partials from the `/lib/` folder. _Make sure you import any requirements along with the modules._

## Documentation

You can read more about support in the [docs][docs].

## License

[MIT](./LICENSE) &copy; [GitHub](https://github.com/)

[primer]: https://github.com/primer/primer
[docs]: http://primercss.io/
[npm]: https://www.npmjs.com/
[install-npm]: https://docs.npmjs.com/getting-started/installing-node
[sass]: http://sass-lang.com/
