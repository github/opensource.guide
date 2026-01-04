---
layout: default
---

# Contributing to Open Source Guides

Thanks for checking out the Open Source Guides! We're excited to hear and learn from you. Your experiences will benefit others who read and use these guides.

We've put together the following guidelines to help you figure out where you can best be helpful.

## Table of Contents

0. [Types of contributions we're looking for](#types-of-contributions-were-looking-for)
0. [Ground rules & expectations](#ground-rules--expectations)
0. [How to contribute](#how-to-contribute)
0. [Style guide](#style-guide)
0. [Setting up your environment](#setting-up-your-environment)
0. [Community](#community)

## Types of contributions we're looking for

There are many ways you can directly contribute to the guides (in descending order of need):

* Fix editorial inconsistencies or inaccuracies
* [Translate guides into other languages](docs/translations.md)

Interested in contributing to this Open Source Guide? Read on!

## Ground rules & expectations

Before we get started, here are a few things we expect from you (and that you should expect from others):

* Be kind and thoughtful in your conversations around this project. We all come from different backgrounds and projects, which means we likely have different perspectives on "how open source is done." Try to listen to others rather than convince them that your way is correct.
* Open Source Guides are released with a [Contributor Code of Conduct](./CODE_OF_CONDUCT.md). By participating in this project, you agree to abide by its terms.
* Please ensure that your contribution passes all tests if you open a pull request. If there are test failures, you will need to address them before we can merge your contribution.
* When adding content, please consider if it is widely valuable. Please don't add references or links to things you or your employer have created, as others will do so if they appreciate it.

## How to contribute

If you'd like to contribute, start by searching through the [pull requests](https://github.com/github/opensource.guide/pulls) to see whether someone else has raised a similar idea or question.

If you don't see your idea listed, and you think it fits into the goals of this guide, open a pull request.

## Suggesting New Content Ideas

Not all contributions need to be direct edits. If you have an idea for a new guide, example, or improvement that doesn’t exist yet, you can contribute by suggesting it first.

1. **Check Existing Content:** Before suggesting, review the current guides and open pull requests to make sure your idea hasn’t already been proposed or implemented.
2. **Open an Issue:** Use the repository's Issues tab to create a new issue describing your idea. Provide a clear explanation of the problem or improvement and why it would be helpful for readers.
3. **Discuss Collaboratively:** Other contributors and maintainers may comment on your suggestion. Be open to feedback, ask questions, and iterate on your idea.
4. **Submit a Pull Request (Optional):** Once your idea is refined, you can implement it and submit a pull request. Even partial contributions or drafts are welcome, as they help move the idea forward.

💡 **Tip for Beginners:** Suggesting ideas is a valuable contribution even if you don’t immediately edit files. It helps the project grow and is recognized by the community.

## 💡 Quick Tip for Beginners

1. Always create a new branch for your changes.
2. Write clear commit messages.
3. Test your changes locally before submitting a PR.
4. Follow the style guide.
5. Be patient during reviews.

## Style guide

If you're writing content, see the [style guide](./docs/styleguide.md) to help your prose match the rest of the guides.

## Setting up your environment

This site is powered by [Jekyll](https://jekyllrb.com/). Running it on your local machine requires a working [Ruby](https://www.ruby-lang.org/en/) installation with [Bundler](https://bundler.io/) along with [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

Once you have that set up:

1. Grant execution permissions to the scripts:

```bash
chmod +x script/bootstrap
chmod +x script/server
```

2. Execute the scripts:

```bash
./script/bootstrap
./script/server
```

…and open <http://localhost:4000> in your web browser.

## Community

Discussions about the Open Source Guides take place on this repository's [Pull Requests](https://github.com/github/opensource.guide/pulls) section. Anybody is welcome to join these conversations.

Wherever possible, do not take these conversations to private channels, including contacting the maintainers directly. Keeping communication public means everybody can benefit and learn from the conversation.
