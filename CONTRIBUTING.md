# The Guide to Guides

Have an idea for a new guide? Do you have a suggestion for making an existing guide even better? Here's what you can do!

## The Guides Content Model

The [Guides Content Model](https://manual-of-style.githubapp.com/guides-model) is a high-level explanation of how a content developer should form a guide. You may find that your idea is more closely aligned with the [Help Content Model](https://manual-of-style.githubapp.com/help-model).

Still not sure? Open an issue and we can talk it out!

## New guide proposals

To propose an idea for a new guide, just open an issue in this repository.

Ideally, we'd like to know how the proposed guide fits into the story of being successful with GitHub. An outline of the content is fantastic, too, but not necessary if you're unsure.

- Apply the [`guide-suggestion` label](https://github.com/github/guides/issues?q=is%3Aopen+is%3Aissue+label%3Aguide-suggestion)
- If you aren't a domain expert, @mention an individual or team who can help out.

## Updating an existing guide

Have an idea to improve a published guide? Open an issue and apply the [`enhancement` label](https://github.com/github/guides/issues?q=is%3Aopen+is%3Aissue+label%3Aenhancement).

## Assembling a guide

**Categories:** If there isn't a category folder for your file yet, don't fret! Either create a category you think makes sense, or ask for help creating one in the pull request.

**Images:** Images should be included in the same directory as your guide so that they can be rendered using the [Markdown image syntax](http://daringfireball.net/projects/markdown/syntax#img). For example:

```
![GitHub’s API Developer Site README](features/masteringmarkdown/github-developer-api-readme.jpg)
```
The `masteringmarkdown-github-developer-api-readme.jpg` lives in the same directory as the Markdown file for easy referencing.

## Determining your Guide's order

The *_config.yml* file in the root of the *guides* folder includes some code that looks like this:

```yml
organization:
  - /introduction/flow/index.html
  - /introduction/desktop/index.html
  - /activities/contributing-to-open-source/index.html
  - /activities/forking/index.html
  - /activities/socialize/index.html
  - /features/issues/index.html
  - /features/mastering-markdown/index.html
```

Those paths determine how the landing page for Guides is ordered. (Jekyll gleefully fetches whatever it can, so sometimes the front page gets reshuffled when the site is built.)

Include this file with a path to your new guide in your pull request to get consensus on order.
