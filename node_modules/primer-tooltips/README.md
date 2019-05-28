# Primer Tooltips

[![npm version](https://img.shields.io/npm/v/primer-tooltips.svg)](https://www.npmjs.org/package/primer-tooltips)
[![Build Status](https://travis-ci.org/primer/primer.svg?branch=master)](https://travis-ci.org/primer/primer)

> Add tooltips built entirely in CSS to nearly any element. Just add a few classes and an aria-label attribute.

This repository is a module of the full [primer][primer] repository.

## Install

This repository is distributed with [npm][npm]. After [installing npm][install-npm], you can install `primer-tooltips` with this command.

```
$ npm install --save primer-tooltips
```

## Usage

The source files included are written in [Sass][sass] (`scss`) You can simply point your sass `include-path` at your `node_modules` directory and import it like this.

```scss
@import "primer-tooltips/index.scss";
```

You can also import specific portions of the module by importing those partials from the `/lib/` folder. _Make sure you import any requirements along with the modules._

## Build

For a compiled **css** version of this module, a npm script is included that will output a css version to `build/build.css` The built css file is also included in the npm package.

```
$ npm run build
```

## Documentation

<!-- %docs
title: Tooltips
path: components/tooltips
status: Stable
-->

Add tooltips built entirely in CSS to nearly any element.

{:toc}

## Implementation and accessibility

**Attention**: we use `aria-label` for tooltips instead of something like `data-tooltip` because it is crucial that the tooltip content is available for screen reader users as well. However, `aria-label` **replaces** the text content of an element for screen reader users, so only use tooltip if there is no better way to present the information, or consider using `title` for supplement information.

**Note:** Tooltip classes will conflict with Octicon styles, and as such, must be applied to the parent element instead of the icon.

## Tooltip direction
Specify the direction of a tooltip with north, south, east, and west directions:

- `.tooltipped-n`
- `.tooltipped-ne`
- `.tooltipped-e`
- `.tooltipped-se`
- `.tooltipped-s`
- `.tooltipped-sw`
- `.tooltipped-w`
- `.tooltipped-nw`


```html
<span class="tooltipped tooltipped-n border p-2 mb-2 mr-2 float-left" aria-label="This is the tooltip on the North side.">
  Tooltip North
</span>
<span class="tooltipped tooltipped-ne border p-2 mb-2 mr-2 float-left" aria-label="This is the tooltip on the North East side.">
  Tooltip North East
</span>
<span class="tooltipped tooltipped-e border p-2 mb-2 mr-2 float-left" aria-label="This is the tooltip on the East side.">
  Tooltip East
</span>
<span class="tooltipped tooltipped-se border p-2 mb-2 mr-2 float-left" aria-label="This is the tooltip on the South East side.">
  Tooltip South East
</span>
<span class="tooltipped tooltipped-s border p-2 mb-2 mr-2 float-left" aria-label="This is the tooltip on the South side.">
  Tooltip South
</span>
<span class="tooltipped tooltipped-sw border p-2 mb-2 mr-2 float-left" aria-label="This is the tooltip on the South West side.">
  Tooltip South West
</span>
<span class="tooltipped tooltipped-w border p-2 mb-2 mr-2 float-left" aria-label="This is the tooltip on the West side.">
  Tooltip West
</span>
<span class="tooltipped tooltipped-nw border p-2 mb-2 mr-2 float-left" aria-label="This is the tooltip on the North West side.">
  Tooltip North West
</span>
```

## Tooltip alignment
Align tooltips to the left or right of an element, combined with a directional class to specify north or south.

```html
<span class="tooltipped tooltipped-ne tooltipped-align-left-1 border p-2 mb-2 mr-2 float-left" aria-label="Tooltipped NE and aligned left.">
  Tooltip North East align left 1
</span>
<span class="tooltipped tooltipped-ne tooltipped-align-left-2 border p-2 mb-2 mr-2 float-left" aria-label="Tooltipped NE and aligned left.">
  Tooltip North East align left 2
</span>
<span class="tooltipped tooltipped-se tooltipped-align-left-1 border p-2 mb-2 mr-2 float-left" aria-label="Tooltipped SW and aigned left.">
  Tooltip South East align left 1
</span>
<span class="tooltipped tooltipped-se tooltipped-align-left-2 border p-2 mb-2 mr-2 float-left" aria-label="Tooltipped SW and aigned left.">
  Tooltip South East align left 2
</span>
<span class="tooltipped tooltipped-nw tooltipped-align-right-1 border p-2 mb-2 mr-2 float-left" aria-label="Tooltipped NW and aligned right.">
  Tooltip North West align right 1
</span>
<span class="tooltipped tooltipped-nw tooltipped-align-right-2 border p-2 mb-2 mr-2 float-left" aria-label="Tooltipped NW and aligned right.">
  Tooltip North West align right 2
</span>
<span class="tooltipped tooltipped-sw tooltipped-align-right-1 border p-2 mb-2 mr-2 float-left" aria-label="Tooltipped SE and aligned right.">
  Tooltip South West align right 1
</span>
<span class="tooltipped tooltipped-sw tooltipped-align-right-2 border p-2 mb-2 mr-2 float-left" aria-label="Tooltipped SE and aligned right.">
  Tooltip South West align right 2
</span>
```

## Tooltips with multiple lines
Use `.tooltipped-multiline` when you have long content. This style has some limitations: you cannot pre-format the text with newlines, and tooltips are limited to a max-width of `250px`.


```html
<span class="tooltipped tooltipped-multiline tooltipped-n border p-2" aria-label="This is the tooltip with multiple lines. This is the tooltip with multiple lines.">
  Tooltip with multiple lines
</span>
```

## Tooltips No Delay

By default the tooltips have a slight delay before appearing. This is to keep multiple tooltips in the UI from being distracting. There is a modifier class you can use to override this. `.tooltipped-no-delay`

```html
<span class="tooltipped tooltipped-n tooltipped-no-delay border p-2" aria-label="This is the tooltip on the no delay side.">
  Tooltip no delay
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
