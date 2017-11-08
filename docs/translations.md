# Translations

Thanks for your interest in helping translating the guides!

## Starting a translation

Before you start working on a translation, look through the [open translation issues](https://github.com/github/opensource.guide/labels/translation) to see if anyone else is already working on one for your language.

If there's not, then today is your day to lead this effort! Here's how to start:

1. [Fork this repository](https://github.com/github/opensource.guide/fork)
1. Open an issue using [this issue template](templates/translation-issue-template.md)
1. Start working through the checklist!

## Keeping a translation updated

Git is pretty good at tracking files that have changed. We'll try to make it as easy as possible for you to keep your translation up to date.

Note: These directions assume the `origin` [remote](https://git-scm.com/docs/git-remote) is the translation fork. If you didn't originally clone the repository from the fork, you can update it with `git remote set-url origin https://github.com/[yourname]/opensource.guide.git`.

Here is the recommended process:

1. Run `$ script/sync-translation` to merge the latest changes from upstream and open a Pull Request on your fork.
1. If files requiring translation have been modified, they will be added to a checklist in the Pull Request.
1. Once all files have been updated, merge the pull request.

Run this script as often as you want to keep your translation up to date.
