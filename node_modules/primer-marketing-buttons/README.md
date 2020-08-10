# Primer Marketing CSS Buttons

[![npm version](https://img.shields.io/npm/v/primer-marketing-buttons.svg)](https://www.npmjs.org/package/primer-marketing-buttons)
[![Build Status](https://travis-ci.org/primer/primer.svg?branch=master)](https://travis-ci.org/primer/primer)

> Buttons are used for actions, like in forms, while textual hyperlinks are used for destinations, or moving from one page to another.

This repository is a module of the full [primer][primer] repository.

## Documentation

<!-- %docs
title: Marketing Buttons
path: components/marketing-buttons
status: New Release
-->

Marketing buttons come in different colors and sizes, and are also available in a blue outlined version.

## Colors and outlined

Marketing buttons can be solid blue, outlined blue, or solid green.

The solid blue and solid green buttons have more visual emphasis than the blue outlined button, therefore they should be used sparingly and only for call to actions that need emphasis.

```html
<button class="btn-mktg mr-2" type="button">Learn more</button>
<button class="btn-mktg btn-outline-mktg mr-2" type="button">Learn more</button>
<button class="btn-mktg btn-primary-mktg mr-2" type="button">Sign up</button>
```

## Sizes

Available in two sizes, marketing buttons have a default size and a large size.

```html
<button class="btn-mktg mr-2" type="button">Learn more</button>
<button class="btn-mktg btn-outline-mktg mr-2" type="button">Learn more</button>
<button class="btn-mktg btn-primary-mktg mr-2" type="button">Sign up</button>
<button class="btn-mktg btn-large-mktg mr-2" type="button">Learn more</button>
<button class="btn-mktg btn-outline-mktg btn-large-mktg mr-2" type="button">Learn more</button>
<button class="btn-mktg btn-primary-mktg btn-large-mktg mr-2" type="button">Sign up</button>
```

<!-- %enddocs -->

## Install

This repository is distributed with [npm][npm]. After [installing npm][install-npm], you can install `primer-marketing-buttons` with this command.

```
$ npm install --save primer-marketing-buttons
```

## Usage

The source files included are written in [Sass][sass] (`scss`) You can simply point your sass `include-path` at your `node_modules` directory and import it like this.

```scss
@import "primer-marketing-buttons/index.scss";
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
