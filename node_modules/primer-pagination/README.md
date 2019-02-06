# Primer Pagination

[![npm version](https://img.shields.io/npm/v/primer-pagination.svg)](https://www.npmjs.org/package/primer-pagination)
[![Build Status](https://travis-ci.org/primer/primer.svg?branch=master)](https://travis-ci.org/primer/primer)

> Pagination component for applying button styles to a connected set of links that go to related pages

This repository is a module of the full [primer][primer] repository.

## Install

This repository is distributed with [npm]. After [installing npm][install-npm], you can install `primer-pagination` with this command.

```
$ npm install --save primer-pagination
```

## Usage

The source files included are written in [Sass][sass] (SCSS) You can simply point your sass `include-path` at your `node_modules` directory and import it like this.

```scss
@import "primer-pagination/index.scss";
```

You can also import specific portions of the module by importing those partials from the `/lib/` folder. _Make sure you import any requirements along with the modules._

## Build

For a compiled **CSS** version of this module, an npm script is included that will output a css version to `build/build.css` The built css file is also included in the npm package:

```
$ npm run build
```

## Documentation

<!-- %docs
title: Pagination
path: components/pagination
status: New Release
-->

Use the pagination component to apply button styles to a connected set of links that go to related pages (for example, previous, next, or page numbers).

{:toc}

## Previous/next pagination

You can make a very simple pagination container with just the Previous and Next buttons. Add the class `disabled` to the `Previous` button if there isn't a preceding page, or to the `Next` button if there isn't a succeeding page.

```html
<nav class="paginate-container" aria-label="Pagination">
  <div class="pagination">
    <span class="previous_page disabled">Previous</span>
    <a class="next_page" rel="next" href="#url" aria-label="Next Page">Next</a>
  </div>
</nav>
```

## Numbered pagination

For pagination across multiple pages, make sure it's clear to the user where they are in a set of pages.

To do this, add anchor links to the `pagination` element. Previous and Next buttons should always be present. Add the class `disabled` to the Previous button if you're on the first page. Apply the class `current` to the current numbered page.

As always, make sure to include the appropriate `aria` attributes to make the element accessible.

- Add `aria-label="Pagination"` to the the `paginate-container` element.
- Add `aria-current="true"` to the current page marker.
- Add `aria-label="Page X"` to each anchor link.

```html
<nav class="paginate-container" aria-label="Pagination">
  <div class="pagination">
    <span class="previous_page disabled">Previous</span>
    <em class="current selected" aria-current="true">1</em>
    <a href="#url" aria-label="Page 2">2</a>
    <a href="#url" aria-label="Page 3">3</a>
    <span class="gap">…</span>
    <a href="#url" aria-label="Page 8">8</a>
    <a href="#url" aria-label="Page 9">9</a>
    <a href="#url" aria-label="Page 10">10</a>
    <a class="next_page" rel="next" href="#url" aria-label="Next Page">Next</a>
  </div>
</nav>
```

<!-- %enddocs -->
