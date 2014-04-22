---
layout: article
title: Mastering Wikis
read_time: 809 minute
icon: book
updated_at: February 15, 2014
survey_tag: 'wiki-1'
summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat."
---

Good documentation is key to the success of any project. Making that documentation accessible enables people to learn about your project. Making it easy to update ensures that your documentation stays relevant. **Wikis** on GitHub help you present useful information about your project in a readable way, while also letting contributors propose changes.

## Creating Your Wiki

Every repository on GitHub comes with a wiki. You can find yours through the sidbar navigation. Starting your wiki is simply a matter of selecting the wiki button, which creates your first page. 

![Screenshot a starting wiki](wiki-start.png)

You can edit the content of this page with the "Edit" button, located in the upper right corner of the page. 

## Adding Content

Wiki content is designed to be human editable using the wiki editor.

![screencap of editor]()

Wiki pages can be written in any format supported by [GitHub Markup](http://github.com/github/markup). GitHub detects the page file format via the extension, so files must have one of the default or registered extensions in order to be converted.

## Adding Pages

Wiki pages can be organized into directories any way you choose. The special page file `Home.ext` (where the extension is one of the supported formats) will be used as the entrance page to your wiki. If it is missing, an automatically generated table of contents will be shown instead.

By default, your wiki will feature a sidebar that lists all of your pages. When you add new pages, they will be added to the sidebar automatically. To manage sidebar content yourself, click the "Edit" link and select whatever custom content you would like to display on each page.

![Screenshot of a sidebar]()

Sidebar content is saved in a file named `_Sidebar` and, like wiki pages, can use any of format supported by [GitHub Markup](http://github.com/github/markup). Sidebars affect all pages in their directory and any subdirectories that do not have a sidebar file of their own.

## Cloning Your Wiki



## Syntax Highlighting

Wiki pages support automatic syntax highlighting of code for a wide range of languages by using the following syntax:

    ```ruby
      def foo
        puts 'bar'
      end
    ```

The block must start with three backticks, optionally followed by the the name of the language that is contained by the block. See [Pygments for the list of languages](http://pygments.org/docs/lexers/) that can be syntax highlighted.

The block contents should be indented at the same level than the opening backticks. The block must end with three backticks indented at the same level than the opening backticks.
