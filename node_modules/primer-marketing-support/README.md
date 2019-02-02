# Primer Marketing Support

[![npm version](https://img.shields.io/npm/v/primer-marketing-support.svg)](https://www.npmjs.org/package/primer-marketing-support)
[![Build Status](https://travis-ci.org/primer/primer.svg?branch=master)](https://travis-ci.org/primer/primer)

> Support files are Sass variables, mixins, and functions that we import into different bases for use across components, objects, and utilities. Sharing these common properties across GitHub sites helps us to keep our styles more consistent.
>
> Most of the time to include these you'll only need to add `@import "./primer-marketing-support";` to the top of your bundle. If you want only a specific partial you can import them separately.

This repository is a module of the full [primer][primer] repository.

## Install

This repository is distributed with [npm][npm]. After [installing npm][install-npm], you can install `support` with this command.

```
$ npm install --save support
```

## Usage

The source files included are written in [Sass][sass] (`scss`) You can simply point your sass `include-path` at your `node_modules` directory and import it like this.

```scss
@import "primer-marketing-support/index.scss";
```

You can also import specific portions of the module by importing those partials from the `/lib/` folder. _Make sure you import any requirements along with the modules._

## Documentation

<!-- %docs
title: Marketing support
path: support/marketing-variables
status: Stable
-->

### Extended spacing scale
This module extends the `primer-core` spacing scale for marketing site needs. These are useful for achieving bigger vertical spacing between sections on marketing sites.

Starting where the `primer-core` spacing scale ends at spacer 6, the marketing scale first steps up with `8px` for spacer 7 then steps in increments of `16px` from spacer 8 up to 12.

| Scale | Value |
|-------|-------|
| 7     | 48    |
| 8     | 64    |
| 9     | 80    |
| 10    | 96    |
| 11    | 112   |
| 12    | 128   |

See [primer-marketing-support](https://npm.im/primer-marketing-support) for the extended spacing scale used for marketing needs and the related y-axis spacing utilities for [margin](/css/utilities/marketing-margin) and [padding](/css/utilities/marketing-padding).

<!-- %enddocs -->

## License

MIT &copy; [GitHub](https://github.com/)

[primer]: https://github.com/primer/primer
[docs]: http://primer.github.io/
[npm]: https://www.npmjs.com/
[install-npm]: https://docs.npmjs.com/getting-started/installing-node
[sass]: http://sass-lang.com/
