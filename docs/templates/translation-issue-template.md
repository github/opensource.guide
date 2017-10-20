Repository: https://github.com/[yourname]/opensource.guide
Preview: https://[yourname].github.io/opensource.guide
Locale: `xx-YY`

On your fork:

- [ ] Update `title`, `description`, and `locale` in `_config.yml`, and push the branch to the `gh-pages` branch of your fork. This should build the website and it should be visible at the preview url above.
- [ ] Copy `_data/locale/en-US.yml` to a new file with the name of your locale and translate the strings
- [ ] Create a new directory in `_articles/` for your locale and translate each guide:
  - [ ] best-practices.md
  - [ ] building-community.md
  - [ ] code-of-conduct.md
  - [ ] finding-users.md
  - [ ] getting-paid.md
  - [ ] how-to-contribute.md
  - [ ] leadership-and-governance.md
  - [ ] legal.md
  - [ ] metrics.md
  - [ ] starting-a-project.md
- [ ] Update `CNAME` to include your locale (e.g. de.opensource.guide)

Once a translation is completed:

- [ ] Open a Pull Request on the [upstream repository](https://github.com/github/opensource.guide) to add your fork to `translations` in `_config.yml`
