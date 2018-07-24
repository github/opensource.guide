# Translations

Thanks for your interest in helping translating the guides!

## Starting a translation

Before you start working on a translation, look through the [open pull requests](https://github.com/github/opensource.guide/pulls) to see if anyone else is already working on one for your language.

If there's not, then today is your day to lead this effort! Here's how to start:

1. [Fork this repository](https://github.com/github/opensource.guide/fork)
1. Create a new branch for your translation work e.g. `es`.
1. Copy `_data/locales/en.yml` to your target language file e.g. `_data/locales/es.yml` and translate all the strings.
1. Copy `index.html` to your target language index file e.g. `es.html` and update the `lang:`.
1. Create a new directory in `_articles/` for your language e.g. `_articles/es/`, copy each guide from `_articles/` into that folder and translate each guide.
1. Run `script/test` and make sure there are no failures with your translation files. Note that you may need to rename anchor links or leave some headers in English to fix broken links.
1. Send a pull request.

Completing an initial translation of the whole site is a fairly large task. One way to break that task up is to work with other translators through pull requests on your fork. Example: [pull requests on fork for German translation](https://github.com/katrinleinweber/opensource.guide/pulls?q=is%3Apr+is%3Aclosed) and corresponding [initial pull request for German translation](https://github.com/github/opensource.guide/pull/577) on this repository.
