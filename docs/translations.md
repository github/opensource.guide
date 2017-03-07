# Translations

TODO

## Starting a translation

Thanks for your interest in translating the guides! Before you start working on a translation, look through the [open translation issues](https://github.com/github/open-source-guide/labels/translation) to see if anyone else is already working on one for your language.

If there's not, then today is your day to lead this effort! Here's how to start:

0. [Fork this repository](https://github.com/github/open-source-guide/fork)
0. Open an issue using [this issue template](templates/translation-issue-template.md)
0. Start working through the checklist!

## Keeping a translation updated

Git is pretty good at making it easy to see what files have changed. We'll try to make it as easy as possible for you to keep your translation up to date. Here is the recommended process.

> These directions assume you have two [remotes](https://git-scm.com/docs/git-remote) configured for your local clone of this repository.
>
> 1. `origin` - the translation fork. If you didn't originally clone this from the fork, you can update it with `git remote set-url origin https://github.com/[yourname]/open-source-guide.git`
> 2. `upstream` - `git remote add upstream https://github.com/github/open-source-guide.git`

0. Run `$ script/sync-translation` to merge the latest changes from upstream and open a Pull Request on your fork.
0. If files requiring translation have been modified, they will be added to a checklist in the Pull Request.
0. Once all files have been updated, merge the pull request.
