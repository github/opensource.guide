# Primer Marketing CSS Tables

[![npm version](https://img.shields.io/npm/v/primer-tables.svg)](https://www.npmjs.org/package/primer-tables)
[![Build Status](https://travis-ci.org/primer/primer.svg?branch=master)](https://travis-ci.org/primer/primer)

> Styles to display tabular data for marketing websites at GitHub.

This repository is a module of the full [primer][primer] repository.

## Documentation

<!-- %docs
title: Tables
status: Deprecated
-->

**This component will be removed, and the `primer-tables` npm package deprecated, in Primer version 11.**

<!-- %enddocs -->

## Install

This repository is distributed with [npm][npm]. After [installing npm][install-npm], you can install `primer-tables` with this command.

```
$ npm install --save primer-tables
```

## Usage

The source files included are written in [Sass][sass] (`scss`) You can simply point your sass `include-path` at your `node_modules` directory and import it like this.

```scss
@import "primer-tables/index.scss";
```

You can also import specific portions of the module by importing those partials from the `/lib/` folder. _Make sure you import any requirements along with the modules._

## Build

For a compiled **css** version of this module, a npm script is included that will output a css version to `build/build.css`

```
$ npm run build
```

## License

MIT &copy; [GitHub](https://github.com/)

[primer]: https://github.com/primer/primer
[primer-support]: https://github.com/primer/primer-support
[support]: https://github.com/primer/primer-support
[docs]: http://primer.github.io/
[npm]: https://www.npmjs.com/
[install-npm]: https://docs.npmjs.com/getting-started/installing-node
[sass]: http://sass-lang.com/
