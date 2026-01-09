# Translations

Thanks for your interest in helping to translate the guides! This document provides comprehensive instructions for translating the Open Source Guides into other languages.

## Table of Contents

- [Starting a translation](#starting-a-translation)
- [Translation workflow](#translation-workflow)
- [Best practices for translators](#best-practices-for-translators)
- [Quality assurance](#quality-assurance)
- [Updating a translation](#updating-a-translation)
- [Getting help](#getting-help)

## Starting a translation

Before you start working on a translation, look through the [open pull requests](https://github.com/github/opensource.guide/pulls) to see if anyone else is already working on one for your language.

If there's not, then today is your day to lead this effort! Here's how to start:

1. [Fork this repository](https://github.com/github/opensource.guide/fork)
2. [Set up your environment](../CONTRIBUTING.md#setting-up-your-environment)
3. Create a new branch for your translation work e.g. `es`.
4. Copy `_data/locales/en.yml` to your target language file e.g. `_data/locales/es.yml` and translate all the strings.
5. Create a new directory in `_articles/` for your language e.g. `_articles/es/`, copy each guide from `_articles/` into that folder and translate the content in each guide, except for the field names in the front matter between the `---`s at the top of each file, e.g., `title:` should remain unchanged.
6. Copy `index.html` to your target language index file e.g. `_articles/es/index.html` and update the `lang:` and add the `permalink:` fields. Example: `lang: es` and `permalink: /es/`. All other fields' values must remain unchanged.
7. Run `script/test` and make sure there are no failures with your translation files. Note that you may need to fix broken links.
8. Send a pull request. (You may send a pull request before all steps above are complete: e.g., you may want to ask for help with translations, or getting tests to pass. However, your pull request will not be merged until all steps above are complete.)

### Working with other translators

Completing an initial translation of the whole site is a fairly large task. One way to break that task up is to work with other translators through pull requests on your fork. Example: [pull requests on fork for German translation](https://github.com/katrinleinweber/opensource.guide/pulls?q=is%3Apr+is%3Aclosed) and corresponding [initial pull request for German translation](https://github.com/github/opensource.guide/pull/577) on this repository. You can also [add collaborators to your fork](https://help.github.com/en/github/setting-up-and-managing-your-github-user-account/inviting-collaborators-to-a-personal-repository) if you'd like to invite other translators to commit directly to your fork and share responsibility for merging pull requests.

## Translation workflow

### Phase 1: Setup (Day 1)
- Fork the repository
- Set up your local development environment
- Create a translation branch
- Announce your translation effort by opening a draft pull request

### Phase 2: UI Strings (Days 1-2)
- Translate `_data/locales/en.yml`
- This file contains all the user interface strings (navigation, buttons, etc.)
- Test locally to see your translations in the UI

### Phase 3: Content Translation (Days 3-14)
- Translate articles one by one
- Start with shorter articles to build momentum
- Maintain consistency in terminology across all articles
- Keep the front matter fields unchanged

### Phase 4: Review and Polish (Days 15-17)
- Review all translations for consistency
- Check that technical terms are used appropriately
- Run tests to catch broken links
- Ask for feedback from native speakers

### Phase 5: Final submission (Day 18+)
- Address any feedback
- Ensure all tests pass
- Mark your pull request as ready for review

## Best practices for translators

### Language and tone
- Maintain the friendly, welcoming tone of the original content
- Use inclusive language appropriate for your target audience
- Adapt cultural references when necessary, but keep the core message

### Technical terminology
- Use established translations for technical terms when they exist in your language
- Keep English terms in backticks (e.g., `pull request`) if no good translation exists
- Create a glossary for your language to ensure consistency
- Consider what terms your community commonly uses (e.g., do they use "fork" or translate it?)

### Formatting
- Preserve all markdown formatting
- Keep links intact - only translate the link text, not the URL
- Maintain the same heading structure
- Don't translate code examples, file paths, or command-line examples
- Keep HTML comments unchanged

### Front matter
**Do NOT translate these fields:**
- `layout:`
- `class:`
- `order:`

**DO translate these fields:**
- `title:`
- `description:`

**New fields to add:**
- `lang:` (your language code, e.g., `es`, `fr`, `de`)
- `permalink:` (e.g., `/es/` for the index page)

### Examples

Good translation example:
```yaml
---
lang: es
title: Cómo Contribuir al Código Abierto
description: ¿Quieres contribuir al código abierto? Una guía para hacer contribuciones, tanto para principiantes como para veteranos.
class: contribute
order: 1
---
```

Bad translation example (don't do this):
```yaml
---
idioma: es  # Wrong: don't translate field names
título: Cómo Contribuir
class: contribuir  # Wrong: don't translate class
order: uno  # Wrong: keep numbers as numbers
---
```

## Quality assurance

### Self-review checklist
Before submitting your translation, check that:

- [ ] All UI strings in `_data/locales/[lang].yml` are translated
- [ ] All article files are translated
- [ ] Index page is created with correct `lang` and `permalink`
- [ ] Front matter fields are correctly handled (some translated, some not)
- [ ] All links work correctly
- [ ] Technical terms are used consistently
- [ ] Tests pass locally (`script/test`)
- [ ] No English text remains (except code examples, file paths, technical terms)
- [ ] Markdown formatting is preserved
- [ ] Tone matches the original guides

### Testing
Run these commands to test your translation:

```bash
# Test for broken links and formatting issues
script/test

# Run the site locally to preview your translation
script/server
# Then visit http://localhost:4000/[your-lang]/ in your browser
```

### Getting feedback
- Ask other native speakers to review your translation
- Share the preview link from your fork's GitHub Pages (if enabled)
- Respond to review comments promptly

## Updating a translation

### Corrections

If you notice spelling or grammar errors, typos, or opportunities for better phrasing, open a pull request with your suggested fix. If you see a problem that you aren't sure of or don't have time to fix, open an issue.

### Broken links

When tests find broken links, try to fix them across all translations. Ideally, [only update the linked URLs](https://github.com/github/opensource.guide/pull/880/files), so that translation changes will definitely not be necessary.

### Article updates

Add the updated text in English to all translations to implicitly solicit pull requests to translate these strings.

### New articles

We do not plan on ever adding any new articles.

## Getting help

### Resources for translators
- Check existing translations to see how others handled similar content
- Review [previous translation pull requests](https://github.com/github/opensource.guide/pulls?q=is%3Apr+label%3Atranslation)
- Read the [contributing guidelines](../CONTRIBUTING.md)
- Look at the [style guide](styleguide.md) for writing guidance

### Where to ask questions
- Open an issue with the `translation` label for questions
- Comment on your pull request if you need help with a specific file
- Tag `@github/opensource` for urgent questions

### Common issues

**Issue**: Tests are failing with "broken links"
**Solution**: Update the links to point to translated pages or keep them pointing to English versions

**Issue**: Site won't build locally
**Solution**: Ensure you've installed all dependencies with `script/bootstrap`

**Issue**: Unsure how to translate a technical term
**Solution**: Check how other projects in your language translate it, or keep the English term

**Issue**: Pull request is too large
**Solution**: Consider splitting it into multiple PRs (e.g., one for UI strings, one per article)

## Translation maintenance

### Staying up to date
Once your translation is merged:
- Watch the repository for updates to English content
- Respond to issues related to your language
- Help review updates from other contributors
- Consider becoming a maintainer for your language

### Community building
Help build a community around your translation:
- Share the translated guides in your local community
- Encourage others to contribute improvements
- Coordinate with other translators through issues and pull requests

Thank you for helping make Open Source Guides accessible to more people around the world! 🌍
