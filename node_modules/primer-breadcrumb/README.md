# Primer Breadcrumb Navigation

[![npm version](https://img.shields.io/npm/v/primer-breadcrumb.svg)](https://www.npmjs.org/package/primer-breadcrumb)
[![Build Status](https://travis-ci.org/primer/primer.svg?branch=master)](https://travis-ci.org/primer/primer)

> Breadcrumb navigation for GitHub's pages with parents / grandparents.

This repository is a module of the full [primer][primer] repository.

## Documentation

<!-- %docs
title: Breadcrumbs
path: components/breadcrumb
status: Stable
-->

Breadcrumbs are used to show taxonomical context on pages that are many levels deep in a site’s hierarchy. Breadcrumbs show and link to parent, grandparent, and sometimes great-grandparent pages. Breadcrumbs are most appropriate on pages that:

- Are many levels deep on a site
- Do not have a section-level navigation
- May need the ability to quickly go back to the previous (parent) page

#### Usage

```html title="Breadcrumb"
<nav aria-label="Breadcrumb">
  <ol>
    <li class="breadcrumb-item text-small"><a href="https://github.com/business">Business</a></li>
    <li class="breadcrumb-item text-small"><a href="https://github.com/business/customers">Customers</a></li>
    <li class="breadcrumb-item breadcrumb-item-selected text-small text-gray" aria-current="page">MailChimp</li>
  </ol>
</nav>
```

<!-- %enddocs -->

## License

MIT &copy; [GitHub](https://github.com/)

[primer]: https://github.com/primer/primer
[primer-support]: https://github.com/primer/primer-support
[support]: https://github.com/primer/primer-support
[docs]: http://primer.github.io/
[npm]: https://www.npmjs.com/
[install-npm]: https://docs.npmjs.com/getting-started/installing-node
[sass]: http://sass-lang.com/
