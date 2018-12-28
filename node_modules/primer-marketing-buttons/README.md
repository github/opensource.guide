# Primer Marketing CSS Buttons

[![npm version](https://img.shields.io/npm/v/primer-marketing-buttons.svg)](https://www.npmjs.org/package/primer-marketing-buttons)
[![Build Status](https://travis-ci.org/primer/primer.svg?branch=master)](https://travis-ci.org/primer/primer)

> Buttons are used for actions, like in forms, while textual hyperlinks are used for destinations, or moving from one page to another.

This repository is a module of the full [primer][primer] repository.

## Documentation

<!-- %docs
title: Marketing Buttons
status: New Release
-->

Marketing buttons extend primer-core buttons with more color and fill styles.


## Colors

Marketing buttons are available in orange.

```html
<button class="btn btn-orange" type="button">Button button</button>
```

## Outline button colors

The `btn-outline` has also been extended with orange, purple, and green.

```html
<button class="btn btn-outline-orange" type="button">Button button</button>
<a class="btn btn-outline-purple" href="#url" role="button">Link button</a>
<button class="btn btn-outline-green" type="button">Button button</button>
```

## Transparent button

A button can also be transparent and displayed with a white border with `btn-transparent`.

```html
<div class="bg-gray-dark p-4 mt-4">
  <button class="btn btn-transparent" type="button">
    Button button
    <span class="Counter">12</span>
  </button>
</div>
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
