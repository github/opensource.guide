---
layout: article
title: Mastering Markdown
read_time: 3 minute
updated_at: Aug 3, 2013
icon: markdown
title_sha: e8df966767fbd3a383c53216799beb4b4564cb74
survey_tag: 'markdown-1'

summary: Almost all text on GitHub is processed through a markup language called <em>Markdown</em> — it's an easy way to include simple formatting (like <em>italics</em>, <strong>bold words</strong>, lists, and <a href="/basics/mastering-markdown">links</a>). This guide will show you the ins-and-outs of Markdown on GitHub.
---

<a id="intro" title="Intro" class="toc-item"></a>
Markdown is a lightweight and easy to use syntax for styling all forms of writing on the GitHub platform.

**What you will learn:**

* How the Markdown format makes styled collaborative editing easy
* How Markdown differs from traditional formatting approaches
* How to use Markdown to format text
* How to leverage GitHub's automatic Markdown rendering
* How to apply GitHub’s unique Markdown extensions

<a id="what" title="What is Markdown?" class="toc-item"></a>
## What is Markdown?

Markdown is a way to style text on the web. You control the display of the document; formatting words as bold or italic, adding images, and creating lists are just a few of the things we can do with Markdown.

<strong><a href="https://github.com/github/developer.github.com" target="_blank">Here's an example from the GitHub API developer Documentation</a></strong>

![GitHub’s API Developer Site README](masteringmarkdown-github-developer-api-readme.jpg)


<a id="format" title="The Format" class="toc-item"></a>
## About the format

Imagine you have a document with several paragraphs. You think, "This would look better if I could include some formatting, like making a word italic, just like I would in a traditional word processor."

To try this out, [create a new practice issue](https://github.com/githubtraining/sample-markdown/issues/new) and type a bit of text in the comment section. Add a "#" symbol to the front of your sentence; this turns it into a header. You have now created the first heading of your document!

![Raw Markdown in an Issue](masteringmarkdown-sample-issue-raw.jpg)

To see your craftsmanship, click on the "Preview" tab to see a rendered view of your Markdown.

![Previewed Markdown in an Issue](masteringmarkdown-sample-issue-preview.jpg)

<a id="special" title="Special Flavors" class="toc-item"></a>
## Special flavors

Here's an overview of Markdown syntax that you can use anywhere on GitHub.com, or your own text files:

### Formating text

Headers

```markdown
# This is an <h1> tag
## This is an <h2> tag
###### This is an <h6> tag
```

Text styles

```markdown
*This text will be italic*
_This will also be italic_
**This text will be bold**
__This will also be bold__

*You **can** combine them*
```

### Lists

Unordered

```markdown
* Item 1
* Item 2
  * Item 2a
  * Item 2b
```

Ordered

```markdown
1. Item 1
2. Item 2
3. Item 3
   * Item 3a
   * Item 3b
```

### Miscellaneous

Images

```markdown
![GitHub Logo](/images/logo.png)
Format: ![Alt Text](url)
```

Links

```markdown
http://github.com - automatic!
[GitHub](http://github.com)
```

Blockquotes

```markdown
As Kanye West said:

> We're living the future so
> the present is our past.
```

### GitHub Flavored Markdown

Syntax highlighting with [GitHub Flavored Markdown](https://help.github.com/articles/github-flavored-markdown)

<pre>
```javascript
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
```</pre>

Or, indent your code 4 spaces:


Here is a Python code example
without syntax highlighting:

```
    def foo:
      if not bar:
        return true
```

Inline code for comments
<pre>
I think you should use an
`<addr>` element here instead.
</pre>

### Comment Boxes

Comments have a useful set of additional Markdown syntax that differs from the format in files. These syntaxes correlate to information on GitHub.com.

TaskLists

```
    - [x] @mentions, #refs, [links](), **formatting**, and <del>tags</del> supported
    - [x] list syntax required (any unordered or ordered list supported)
    - [x] this is a complete item
    - [ ] this is an incomplete item
```

SHA References

Referencing a commit SHA, like so:

```
16c999e8c71134401a78d4d46435517b2271d6ac
mojombo@16c999e8c71134401a78d4d46435517b2271d6ac
mojombo/github-flavored-markdown@16c999e8c71134401a78d4d46435517b2271d6ac
```

becomes a link to the commit with that SHA.

Issues references in same repo


Referencing an Issue or Pull Request by its number, like so:

```
#1
mojombo#1
mojombo/github-flavored-markdown#1
```

turns it into a link to that Issue or Pull Request.

Username @mentions

Typing an `@` symbol, followed by a username, will notify that person to come and view
the comment. This is called an "@mention", because you're _mentioning_ the individual.
You can also @mention teams within an organization.

Automatic linking for URLs

Any pasted URL, like `http://www.github.com/`, will automatically turn into a clicklable link.

Strikethrough

Wrapping a word with two `~` marks--like `~~this~~`--will generate a strike through, or cross the text with a line.
Emoji

GitHub supports emoji! To see a list of every image we support, check out the [Emoji Cheat Sheet](http://www.emoji-cheat-sheet.com/).

<a id="gfm" title="Basic use beyond issues" class="toc-item"></a>
## Basic use beyond issues

### Pull Requests
Pull Requests work just like Issues, except the discussion is about code. Comment on a Pull Request just like you would an issue.

![from-rails-rails](https://f.cloud.github.com/assets/45141/1573881/09a0fbd4-5136-11e3-8e60-27ad047cce2a.png)

### Gists
Gists are a perfect place to have small snippets of text for Markdown files. Whether these are code examples or small notes to yourself, gists make it easy to create fast content for people to read.

![gist-to-do-file](https://f.cloud.github.com/assets/45141/1545382/9b986474-4d75-11e3-8e26-c712711fcdda.png)


### Files

Files ending in ".md" are rendered on GitHub to allow you to write more rich content using GitHub Flavored Markdown. Many people first do this with their README for their repository to give people an idea of what their project may be about, and how to use it.

![GitHub’s API Developer Site README](masteringmarkdown-github-developer-api-readme.jpg)
