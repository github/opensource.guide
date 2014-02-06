---
layout: article
title: Creating Open Source on GitHub
read_time: 999 minute
updated_at: Jan 18, 2013
icon: repo
title_sha: 5fb2ff6b477800a7dabe49940ab07d90b819bfa9
survey_tag: 'issues-1'

summary: Learn the basics for creating and maintaining an open source project on GitHub.
---

<a id="intro" title="Intro" class="toc-item"></a>
Creating an open source project starts simple: push your source code to a public repository on GitHub. But from there its life in open source, its success and maintainably depend many other things beyond simply making the source code available. This guide details best practices in open source on GitHub, all of which have a the same ethos: _make the project easy to understand and barrier to entry low_.

<a id="repo" title="Public Repository" class="toc-item"></a>

## Public Repository

First things first, push your source code to a public repository on GitHub.

Dont be afraid --
File structure ---

<a id="license" title="Choose a License" class="toc-item"></a>

## Choose a License

There are many flavors of open source and for each there is a license. The license describes in what ways others may use your library. It's important to choose a license for your project because many places can't use work that is un-licensed, even though it is public on GitHub. We've built a site to make choosing the right license easier: [choosealicense.com](http://choosealicense.com/)  

<a id="docs" title="Readmes and Documentation" class="toc-item"></a>

## Readmes and Documentation

A critical part of your open source project is its documentation -- if people can't learn how to use it, how will it, well, get used? More often than not a `readme.md` file with instructions will do the trick. Remember, keep the barrier to entry low. Let users know how to use your project: how do they link to it or install it? What options are available? Some users may also be developers so instructions on how to build the project are essential for enabling contributors.  

If your project is rather large, there are more documentation methods to consider.

### Docs Directory

A folder within your project dedicated to documenation allows you to create multiple files for multiple topics in your project.

### Wikis

GitHub provides a wiki for every repository and they're backed by Git. Document away, roll back changes and get contributions just like with your project.

![future image of https://github.com/mbostock/d3/wiki]()

### GitHub Pages

GitHub also provides free static site hosting for all repositories (and users and organizations). Simply put your website files onto a branch named `gh-pages` and GitHub will serve them up at:
username.github.io/reponame

<a id="contribution" title="Contribution Docs" class="toc-item"></a>

## Contribution Docs

Contribution docs are essential for projects that see large numbers of contributions or want to make things easier on both the contributor and the maintainer. Contribution docks detail what exactly a pull request should look like, the types of files or tests to include, the language syntax style to use or ..

_image from https://github.com/rails/rails/blob/master/CONTRIBUTING.md_

### CLA

Many very large projects such as Node.js, JQuery, and yeoman require Contributor License Agreements. These are legally binding contracts regarding the contribution and the responsibilities of the contributor and the maintainer. It's best to speak to a legal professional if you think your project may need to use a CLA.

<a id="issues" title="Issues" class="toc-item"></a>

## Issues

<a id="pullrequests" title="Managing Pull Requests" class="toc-item"></a>

## Managing Pull Request

<a id="updates" title="Communicating Updates" class="toc-item"></a>

## Communicating Updates

### Releases

### Changelog

<a id="collaborators" title="Contributors" class="toc-item"></a>

## Contributors

### Collaborators

<a id="community" title="Community" class="toc-item"></a>

## Community (or spread the word)




- make the barrier to entry low

- Create a project
-- Don't be afraid
- Choose a license
-- choosealicense.com
-- some places can't use unlicensed work
-- protects you, your code and contributors
- Create a readme and documentation
-- how to use it, and how to build it
-- gh-pages
- Create contribution docs
-- CLA
- Use issues
-- easy labels
- versioning, http://semver.org/
- releases
- change log
- spread the word
- core contributors -> collaborators
