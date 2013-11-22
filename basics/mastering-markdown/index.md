---
layout: article
title: Mastering Markdown
read_time: 1 minute
updated_at: Aug 3, 2013
---

<a id="intro" title="Intro" class="toc-item"></a>
Markdown is a lightweight and easy to use syntax for styling all forms of writing on the GitHub platform.

**What you will learn:**

* How the Markdown format makes styled collaborative editing easy
* How Markdown differs from traditional formatting approaches
* How to use Markdown to format text
* How to leverage GitHub’s automatic Markdown rendering
* How to apply GitHub’s unique Markdown extensions

<a id="what" title="What is Markdown?" class="toc-item"></a>
## What is Markdown?

Markdown is a way to style text on the web. Bold, italics, font size, images, and lists are just a few of the things we can do with it.

<strong><a href="https://github.com/github/developer.github.com" target="_blank">Here's an example from the GitHub API deevloper Documentation</a></strong>

![GitHub’s API Developer Site README](masteringmarkdown-github-developer-api-readme.jpg)


<a id="format" title="The Format" class="toc-item"></a>
## A little bit about the format

Imagine you have a document with several paragraphs. You think, “This would look best if I could do some formatting such as a header for a paragraph, like I would in a traditional word processor.”

To practice this, [create a new practice issue](https://github.com/githubtraining/sample-markdown/issues/new) and type a bit of text in the comment section with a "#" in front to denote your header. You have now created the first heading of your document.

![Raw Markdown in an Issue](masteringmarkdown-sample-issue-raw.jpg)

Click the Preview tab to see a rendered view of your Markdown.

![Previewed Markdown in an Issue](masteringmarkdown-sample-issue-preview.jpg)

<a id="special" title="Special Flavors" class="toc-item"></a>
## Special Flavors
Depending on the location of where we're writing markdown, we may have a few additional sets of styling we can use Markdown for.

### Comment Boxes
Comments have a nice set of additional Markdown syntax that writing in files don't, these relate to sets of data that may change or be updated.

* TaskList
* SHA References
* Issues references in same repo
* Username @mentions
* Cross-repository memtions with username/repo#issue
* Automatic linking for URLs
* Emoji

### Markdown Files + Comment Boxes
Special Markdown that is everywhere including files are more related to text and not dynamic content.

* Strikethrough
* Code fences to show formated code examples
* Syntax highlighting for code blocks with language definition
* Relative image linking within repository

<a id="gfm" title="Basic Use Beyond Issues" class="toc-item"></a>
## Basic Use Beyond Issues

### Pull Requests
Pull Request work just like Issues, only discussion is about code. Comment on a Pull Request just like you would an issue.

![from-rails-rails](https://f.cloud.github.com/assets/45141/1573881/09a0fbd4-5136-11e3-8e60-27ad047cce2a.png)

### Gists
Gists are a perfect place to have small snippets of text for Markdown files. Whether these are code examples or small notes to yourself, gists make it perfect to create things fast.

![gist-to-do-file](https://f.cloud.github.com/assets/45141/1545382/9b986474-4d75-11e3-8e26-c712711fcdda.png)


### Files

Files ending in ".md" are rendered on GitHub to allow you to write more rich content using GitHub Flavored Markdown. Many people first do this with their README for their repository to give people an idea of what their project may be about and how to use it.

![GitHub’s API Developer Site README](masteringmarkdown-github-developer-api-readme.jpg)

