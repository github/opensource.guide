# Translations

Thanks for your interest in helping translating the guides!

## Starting a translation

Before you start working on a translation, look through the [open pull requests](https://github.com/github/opensource.guide/pulls) to see if anyone else is already working on one for your language.

If there's not, then today is your day to lead this effort! Here's how to start:

1. [Fork this repository](https://github.com/github/opensource.guide/fork)
1. Create a new branch for your translation work e.g. `es`.
1. Copy `_data/locales/en.yml` to your target language file e.g. `_data/locales/es.yml` and translate all the strings.
1. Create a new directory in `_articles/` for your language e.g. `_articles/es/`, copy each guide from `_articles/` into that folder and translate the content in each guide, except for the field names in the front matter between the `---`s at the top of each file, e.g., `title:` should remain unchanged. Remove the `toc:` fields (they are only used for English).
1. Copy `index.html` to your target language index file e.g. `[_articles/es/index.html](https://github.com/github/opensource.guide/blob/master/_articles/es/index.html)` and update the `lang:` and add the `permalink:` fields. Example: `lang: es` and `permalink: /es/`. All other fields' values must remain unchanged.
1. Run `script/test` and make sure there are no failures with your translation files. Note that you may need to fix broken links.
1. Send a pull request.

Completing an initial translation of the whole site is a fairly large task. One way to break that task up is to work with other translators through pull requests on your fork. Example: [pull requests on fork for German translation](https://github.com/katrinleinweber/opensource.guide/pulls?q=is%3Apr+is%3Aclosed) and corresponding [initial pull request for German translation](https://github.com/github/opensource.guide/pull/577) on this repository.

## Updating a translation

### Corrections

If you notice spelling or grammar errors, typos, or opportunities for better phrasing, open a pull request with your suggested fix. If you see a problem that you aren't sure of or don't have time to fix, open an issue.

### Broken links

When tests find broken links, try to fix them across all translations. Ideally, [only update the linked URLs](https://github.com/github/opensource.guide/pull/880/files), so that translation changes will definitely not be necessary.

### Article updates

We're collecting [tips](https://github.com/github/opensource.guide/issues/1119) on how to check if a translation should be updated to account for improvements made to the English source articles.

### New articles

New articles are rare! When we have one, we'll probably do [some form](https://github.com/github/opensource.guide/issues/1120) of a call for translations.
