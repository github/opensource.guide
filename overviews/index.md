---
layout: article
title: Contributing to Open Source on GitHub
read_time: 999 minute
updated_at: Jan 18, 2013
icon: repo
title_sha: affe39a19c114de9a15b371413c5498e5f8e9633
survey_tag: 'issues-1'

summary: Open source software is thriving on GitHub. Anyone can get involved and it's easy, too. This guide covers the basics about what to look for and what to do when contributing to open source projects
---

<a id="intro" title="Intro" class="toc-item"></a>

A great way to get involved in open source is to contribute to existing projects. GitHub is home to more than ___ open source projects. There are projects for every skill set like [recipes](), [HTML/CSS](), [Ruby](), [Astrophysics]() and many more. While every project and project maintainer(s) is different, there are a number of standards that have developed and we'll cover those here.

<a id="find" title="Find Projects" class="toc-item"></a>

## Find Projects

Before you contribute to a project you'll need to find a project that you're interested in using. You'll find GitHub projects being shared all over the internet. A few great places to keep an eye on are: 

_Maybe say twitter and mention how much traffic comes in from Tiwtter_

- [GitHub Explore](): A page highlighting popular projects by language, popularity throughout GitHub or within your organization or those you follow.
- [GitHub Stars](): Checking out the repositories another user stars is a great way to find interesting projects.
- [Layervault News](): Many front end 
- [CodeTriage](): 

<a id="readme" title="Readme and other Docs" class="toc-item"></a>

## Readme and other Docs

Nearly all GitHub projects include a `README.md` file. The readme provides a lay of the land for a project with details on how to use, build and sometimes contribute to a project. You may also find badges signifying browser support and test statuses (or did we just remove this?). You'll sometimes find the license in the readme, too. Sometimes the readme is the kitchen sink, sometimes elements are given their own file:

### Contributing.md

Projects and project maintainers vary, so the best way to contribute will also vary. Contributing docs detail the specifics about how the maintainers would like to see patches or features contributed. This can include what tests to write, code syntax style or areas to focus on for patches.

### License.md

A license file is straightforward -- it provides the license for the project. There are many ways to be _open source_ and for each of those ways there is a license. Read more about what each license means at [choosealicense.com](). 

### Documentation and Wikis

Many larger projects must beyond go the readme to detail how to use the project. In such cases you'll often find a link to another file or a folder named 'docs' in the repository. The repository may instead use the GitHub wiki to break down documentation.

### github.io

GitHub offers [free static site hosting]() for all repositories (and users and organizations) and many open source projects take advantage of this by creating a website for the project -- a great resource for finding live demos. All pages hosted this way have a 'github.io' domain. Regardless of where the site is hosted, if a project has its own website, the link can often be found at the top of the repository's page on GitHub.

<a id="issue" title="Create an Issue" class="toc-item"></a>

## Create an Issue

If you find a bug in a project you're using (and you don't know how to fix it), have trouble following the documentation or have a question about the project -- create an issue! There's nothing to it and whatever issue you're having, you're likely not the only one, so others will find your issue helpful, too. We've got a guide on [issues]().

<a id="cla" title="Contributor Licsence Agreement" class="toc-item"></a>

## Contributor's License Agreement

Before you create a pull request with a patch or feature, it will be helpful to know if that project requires contributors to sign a Contributor License Agreement, usually mentioned in the contributing doc. This is a legally binding contract concerning the code that you're contributing. Most often the agreement's purpose is to keep the blame off the maintainers for any bugs introduced by someone outside of the organization. (ummm?)

<a id="pr" title="Pull Request" class="toc-item"></a>

## Pull Request

When you've found a feature to add or bug to fix in a project and you've read the documents on contributing, create a pull request. The pull request allows the maintainer to compare your branch to the existing one and decide whether or not to incorporate (pull in) your changes.

### Pull Request Pro Tips :TM:

- Fork the repository and clone it locally. Connect your local to the original 'upstream' repository by adding it as a remote. **Pull in changes** from 'upstream' often so that you stay up to date and when you submit you pull request, merge conflicts will be less likely.
- If the project asks contributors to create tests, **create tests**. Also run your changes against any existing tests. If tests exist but creating new ones is not explicit, it's always best to test.
- In the body of your pull request, be clear about what problem was occurring and how someone can recreate that problem. Then be equally as clear about what steps you took to make your changes.
- If your changes include differences in HTML/CSS, **include screenshots** of the before and after. Just drag and drop the images into the body of your pull request.
- If the project you're contributing to doesn't have guidelines on contributing, it's always best to create your patch in the style of the project. This may mean indents, semi colons or comments will be different than you'd do in your own repository.

### Open Pull Requests

Once you've opened a pull request a discussion will start around your proposed changes. Other contributors and users may chime in but ultimately the decision is made by the maintainer or core-contributors (these are regular contributors who have write access to the project's repository). You may be asked to make some changes to your pull request, if so, add more commits to your branch and push them -- they'll automatically go into the pull request too.

If your pull request is merged -- great! If it is not, no sweat, it may not be what they had in mind, or they were already working on it. Go forth and pull request again -- or [create your own open source project](theotherguide).

notes on notes on notes

- Intro
- Find Projects
 - Sites to find links: Twitter, news.layervault, 
 - GitHub Explore/Help Wanted
 - Code Triage
 - 'easy' tags
 - https://twitter.com/search?q=github.io&src=typd
- Readme and other Docs
 - Contributing Doc
 - License
- Create an Issue
- Tests
- CLA
- Pull Request
- Who Reviews?

- gather images
- should I have the documents as sub-sections or sections?
- how to refer to docs? 'CONTRIBUTING.md' or 'contributing docs' or 'contributing.md'
