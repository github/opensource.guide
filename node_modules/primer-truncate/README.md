# Primer Truncate

[![npm version](https://img.shields.io/npm/v/primer-truncate.svg)](https://www.npmjs.org/package/primer-truncate)
[![Build Status](https://travis-ci.org/primer/primer.svg?branch=master)](https://travis-ci.org/primer/primer)

> .css-truncate will shorten text with an ellipsis. The maximum width of the truncated text can be changed by overriding the max-width of the .css-truncate-target.

This repository is a module of the full [primer][primer] repository.

## Install

This repository is distributed with [npm][npm]. After [installing npm][install-npm], you can install `primer-truncate` with this command.

```
$ npm install --save primer-truncate
```

## Usage

The source files included are written in [Sass][sass] (`scss`) You can simply point your sass `include-path` at your `node_modules` directory and import it like this.

```scss
@import "primer-truncate/index.scss";
```

You can also import specific portions of the module by importing those partials from the `/lib/` folder. _Make sure you import any requirements along with the modules._

## Build

For a compiled **css** version of this module, a npm script is included that will output a css version to `build/build.css` The built css file is also included in the npm package.

```
$ npm run build
```

## Documentation

<!-- %docs
title: Truncate
path: components/truncate
status: Stable
-->

`.css-truncate` will shorten text with an ellipsis. The maximum width of the truncated text can be changed by overriding the max-width of `.css-truncate-target`. Unless the full text is so long that it affects performace, always add `title` to the truncated element so the full text can still be seen.

```html title="Truncate"
<span class="branch-ref css-truncate css-truncate-target" title="really-long-branch-name">
  really-long-branch-name
</span>
```

You can reveal the entire string on hover with the addition of `.expandable`.

```html title="Truncate Expandable"
<span class="css-truncate expandable">
  <span class="branch-ref css-truncate-target">this-is-a-really-long-branch-name</span>
</span>
```
<!-- %enddocs -->

## License

[MIT](./LICENSE) &copy; [GitHub](https://github.com/)

[primer]: https://github.com/primer/primer
[docs]: http://primer.github.io/
[npm]: https://www.npmjs.com/
[install-npm]: https://docs.npmjs.com/getting-started/installing-node
[sass]: http://sass-lang.com/
