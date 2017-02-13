# Primer CSS States

[![NPM version](http://img.shields.io/npm/v/primer-states.svg)](https://www.npmjs.org/package/primer-states)
[![Build Status](https://travis-ci.org/primer/states.svg?branch=master)](https://travis-ci.org/primer/states)

> States, or state indicators, inform users of the current status of a particular item. Included common states are Open, Closed, or Merged, each requiring it’s own modifier class.

This repository is a module of the full [primer-css][primer-css] repository.

## Install

This repository is distributed with [npm][npm]. After [installing npm][install-npm], you can install `primer-states` with this command.

```
$ npm install --save primer-states
```

## Usage

The source files included are written in [Sass][sass] (`scss`) You can simply point your sass `include-path` at your `node_modules` directory and import it like this.

```scss
@import "primer-states/index.scss";
```

You can also import specific portions of the module by importing those partials from the `/lib/` folder. _Make sure you import any requirements along with the modules._

## Build

For a compiled **css** version of this module, a npm script is included that will output a css version to `build/build.css` The built css file is also included in the npm package.

```
$ npm run build
```

## Documentation

<!-- %docs
title: States
status: Stable
-->

States, or state indicators, inform users of the current status of a particular item. Included common states are Open, Closed, or Merged, each requiring it's own modifier class.

#### Open (green)

```html
<span class="state state-open">Open</span>
<span class="state state-proposed">Open</span>
<span class="state state-reopened">Open</span>
```

#### Closed (red)

```html
<span class="state state-closed">Closed</span>
```

#### Merged (purple)

```html
<span class="state state-merged">Merged</span>
```

<!-- %enddocs -->

## License

[MIT](./LICENSE) &copy; [GitHub](https://github.com/)

[primer-css]: https://github.com/primer/primer
[docs]: http://primercss.io/
[npm]: https://www.npmjs.com/
[install-npm]: https://docs.npmjs.com/getting-started/installing-node
[sass]: http://sass-lang.com/
