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
Markdown is a lightweight and easy-to-use syntax for styling all forms of writing on the GitHub platform.

**What you will learn:**

* How the Markdown format makes styled collaborative editing easy
* How Markdown differs from traditional formatting approaches
* How to use Markdown to format text
* How to leverage GitHub's automatic Markdown rendering
* How to apply GitHub's unique Markdown extensions

<a id="what" title="What is Markdown?" class="toc-item"></a>
## What is Markdown?

Markdown is a way to style text on the web. You control the display of the document; formatting words as bold or italic, adding images, and creating lists are just a few of the things we can do with Markdown. Mostly, Markdown is just regular text with a few non-alphabetic characters thrown in, like `#` or `*`.

You can use Markdown most places around GitHub:

- [Gists](https://gist.github.com/)
- Comments in Issues and Pull Requests
- Files with the `.md` or `.markdown` extension

<a id="examples" title="Examples" class="toc-item"></a>
## Examples

<ul class="example-nav js-examples-nav">
  <li><a href="#" class="selected" data-container-id="example-text">Text</a></li>
  <li><a href="#" data-container-id="example-lists">Lists</a></li>
  <li><a href="#" data-container-id="example-images">Images</a></li>
  <li><a href="#" data-container-id="example-headings">Headings</a></li>
  <li><a href="#" data-container-id="example-code">Code</a></li>
  <li><a href="#" data-container-id="example-extras">Extras</a></li>
</ul>

<div class="markdown-example" id="example-text">
<pre class="source">
It's very easy to make some words **bold** and other words *italic* with Markdown. You can even [link to Google!](http://google.com).
</pre>
<div class="rendered">
It's very easy to make some words <strong>bold</strong> and other words <em>italic</em> with Markdown. You can even <a href="http://google.com">link to Google!</a>
</div>
</div>

<div class="markdown-example" id="example-lists" style="display:none">
<pre class="source">
Sometimes you want numbered lists:

1. One
2. Two
3. Three

Sometimes you want bullet points:

* Start a line with a star
* Profit!

Alternatively,

- Dashes work just as well
- And if you have sub points, put two spaces before the dash or star:
  - Like this
  - And this
</pre>
<div class="rendered">
  <p>Sometimes you want numbered lists:</p>
  <ol>
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
  </ol>
  <p>Sometimes you want bullet points:</p>
  <ul>
  <li>Start a line with a star</li>
  <li>Profit!</li>
  </ul>
  <p>Alternatively,</p>
  <ul>
  <li>Dashes work just as well</li>
  <li>And if you have sub points, put two spaces before the dash or star:
  <ul>
  <li>Like this</li>
  <li>And this</li>
  </ul>
  </li>
  </ul>
</div>
</div>

<a id="syntax" title="Basic syntax" class="toc-item"></a>
## Basic syntax

Here's an overview of Markdown syntax that you can use anywhere on GitHub.com or in your own text files.

### Headers

```markdown
# This is an <h1> tag
## This is an <h2> tag
###### This is an <h6> tag
```

### Emphasis

```markdown
*This text will be italic*
_This will also be italic_

**This text will be bold**
__This will also be bold__

*You **can** combine them*
```

### Lists

#### Unordered

```markdown
* Item 1
* Item 2
  * Item 2a
  * Item 2b
```

#### Ordered

```markdown
1. Item 1
2. Item 2
3. Item 3
   * Item 3a
   * Item 3b
```

### Images

```markdown
![GitHub Logo](/images/logo.png)
Format: ![Alt Text](url)
```

### Links

```markdown
http://github.com - automatic!
[GitHub](http://github.com)
```

### Blockquotes

```markdown
As Kanye West said:

> We're living the future so
> the present is our past.
```

### Inline code

    I think you should use an
    `<addr>` element here instead.

<a id="GitHub-flavored-markdown" title="GFM" class="toc-item"></a>
## GitHub Flavored Markdown

GitHub.com uses its own version of the Markdown syntax that provides an additional set of useful features, many of which make it easier to work with content on GitHub.com.

Note that some features of GitHub Flavored Markdown are only available in the descriptions and comments of Issues and Pull Requests. These include @mentions as well as references to SHA-1 hashes, Issues, and Pull Requests. Task Lists are also available in Gist comments and in Gist Markdown files.

### Syntax highlighting

Here's an example of how you can use syntax highlighting with [GitHub Flavored Markdown](https://help.github.com/articles/github-flavored-markdown):

    ```javascript
    function fancyAlert(arg) {
      if(arg) {
        $.facebox({div:'#foo'})
      }
    }
    ```

You can also simply indent your code by four spaces:

        function fancyAlert(arg) {
          if(arg) {
            $.facebox({div:'#foo'})
          }
        }

Here's an example of Python code without syntax highlighting:

    def foo:
      if not bar:
        return true

### Task Lists

```
- [x] @mentions, #refs, [links](), **formatting**, and <del>tags</del> supported
- [x] list syntax required (any unordered or ordered list supported)
- [x] this is a complete item
- [ ] this is an incomplete item
```

### SHA references

Any reference to a commit's [SHA-1 hash][] will be automatically converted into a link to that commit on GitHub.

  [SHA-1 hash]: http://en.wikipedia.org/wiki/SHA-1

```
16c999e8c71134401a78d4d46435517b2271d6ac
mojombo@16c999e8c71134401a78d4d46435517b2271d6ac
mojombo/github-flavored-markdown@16c999e8c71134401a78d4d46435517b2271d6ac
```

### Issue references within a repository

Any number that refers to an Issue or Pull Request will be automatically converted into a link.

```
#1
mojombo#1
mojombo/github-flavored-markdown#1
```

### Username @mentions

Typing an `@` symbol, followed by a username, will notify that person to come and view the comment. This is called an "@mention", because you're _mentioning_ the individual. You can also @mention teams within an organization.

### Automatic linking for URLs

Any URL (like `http://www.github.com/`) will be automatically converted into a clickable link.

### Strikethrough

Any word wrapped with two tildes (like `~~this~~`) will appear crossed out.

### Emoji

GitHub supports emoji! To see a list of every image we support, check out the [Emoji Cheat Sheet](http://www.emoji-cheat-sheet.com/).
