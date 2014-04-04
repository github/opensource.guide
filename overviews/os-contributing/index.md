---
layout: article
title: Contributing to Open Source on GitHub
read_time: 6 minute
updated_at: Jan 18, 2013
icon: repo
survey_tag: 'contributing-to-open-source-1'

summary: Open source software is thriving on GitHub. Anyone can get involved and it's easy, too. This guide covers the basics about what to look for and what to do when contributing to open source projects.
---

<a id="intro" title="Intro" class="toc-item"></a>

A great way to get involved in open source is to contribute to the existing projects you're using. GitHub is home to more than 5 million open source projects. There are projects for every skill set like [recipes](https://github.com/sinker/tacofancy), [HTML/CSS](https://github.com/tobiasahlin/SpinKit), [Ruby](https://github.com/sferik/t), [Astrophysics](https://github.com/dfm/emcee) and many more. This guide will cover what you might find in a typical project and how to make a great contribution.

## Find Projects

We recommend that you start by finding a project that you're already (or are interested in) using. Here are a few great places to look:

- [GitHub Explore](https://github.com/explore): Popular and trending projects.
- [GitHub Stars](https://github.com/stars?direction=desc&sort=created): Projects starred by other people.
- [GitHub Showcases](https://github.com/showcases): A way to discover related repositories.
- [Layervault News](http://news.layervault.com): Front-end and design projects.

![layervault](layervault.png)

<a id="project" title="A Typical Project" class="toc-item"></a>

## A Typical Project

Below are some elements you're likely to come across in an open source project on GitHub.

### The Community

Projects often have a community around them, made up of other users in different (formal or informal) roles:

- **Owner** is the user or organization that created the project has the project on their account.
- **Maintainers and Collaborators** are the users primarily doing the work on a project and driving the direction. Oftentimes the owner and the maintainer are the same. They have write access to the repository.
- **Contributors** is everyone who has had a pull request merged into a project.
- **Community Members** are the users who often use and care deeply about the project and are active in discussions for features and pull requests.

### The Docs

The what's-what of common files in projects.

#### Readme

Nearly all GitHub projects include a `README.md` file. The readme provides a lay of the land for a project with details on how to use, build and sometimes contribute to a project.

#### Contributing

Projects and project maintainers vary, so the best way to contribute will also vary. Keep your eye open for a doc labeled `CONTRIBUTING`. Contributing docs detail the specifics about how a project's maintainer would like to see patches or features contributed. This can include what tests to write, code syntax style or areas to focus on for patches.

#### License

A `LICENSE` file, well, is the license for the project. An open source project's license informs users what they can and can't do (e.g., use, modify, redistribute), and contributors, what they are allowing others to do. There are many ways to license and open source project, you can read more about what each license means at [choosealicense.com](http://www.choosealicense.com).

#### Documentation and Wikis

Many larger projects must beyond go the readme to give instructions for how people can use their project. In such cases you'll often find a link to another file or a folder named 'docs' in the repository.

![bootstrap docs](docs-folder.png)

Alternatively, the repository may instead use the GitHub wiki to break down documentation.

![d3 wiki](d3-wiki.png)

<a id="contributing" title="Contributing to a Project" class="toc-item"></a>

## Contributing to a Project

Now that you've found the material for understanding the project, here is how you can take action.

### Create an Issue

If you find a bug in a project you're using (and you don't know how to fix it), have trouble following the documentation or have a question about the project -- create an issue! There's nothing to it and whatever issue you're having, you're likely not the only one, so others will find your issue helpful, too. For more information on how issues work, check out our [Issues guide](http://guides.github.com/overviews/issues).

#### Issues Pro Tips

- **Check existing issues** for your issue. Duplicating an issue is slower for both parties so search through open and closed issues to see if what you're running into has been addressed already.
- **Be clear** about what your problem is: what was the expected outcome, what happened instead? Detail how someone else can recreate the problem.
- **Link to demos** recreating the problem on things like [JSFiddle](http://jsfiddle.net) or [CodePen](http://codepen.io).
- **Include system details** like what the browser, library or operating system you're using and its version.
- **Paste error output** or logs in your issue or in a [Gist](http://gist.github.com). If pasting them in the issue, wrap it in three backticks: ` ``` ` so that it renders nicely.

### Pull Request

If you're able to patch the bug or add the feature yourself -- fantastic, make a pull request with the code! Be sure you've read any documents on contributing, understand the license and have signed a CLA if required. Once you've submitted a pull request the maintainer(s) can compare your branch to the existing one and decide whether or not to incorporate (pull in) your changes.

#### Pull Request Pro Tips

- **[Fork](http://guides.github.com/overviews/forking/) the repository** and clone it locally. Connect your local to the original 'upstream' repository by adding it as a remote. **Pull in changes** from 'upstream' often so that you stay up to date so that when you submit your pull request, merge conflicts will be less likely. See more detailed instructions [here](https://help.github.com/articles/syncing-a-fork).
- **Create a [branch](http://guides.github.com/overviews/flow/)** for your edits.
- **Be clear** about what problem is occurring and how someone can recreate that problem or why your feature will help. Then be equally as clear about the steps you took to make your changes.
- **It's best to test**. Run your changes against any existing tests if they exist and create new ones when needed. Whether tests exist or not, make sure your changes don't break the existing project.
- **Include screenshots** of the before and after if your changes include differences in HTML/CSS. Drag and drop the images into the body of your pull request.
- **Contribute in the style of the project** to the best of your abilities. This may mean using indents, semi colons or comments differently than you would in your own repository, but makes it easier for the maintainer to merge, others to understand and maintain in the future.

#### Open Pull Requests

Once you've opened a pull request a discussion will start around your proposed changes. Other contributors and users may chime in, but ultimately the decision is made by the maintainer(s). You may be asked to make some changes to your pull request, if so, add more commits to your branch and push them -- they'll automatically go into the existing pull request.

![pr convo](convo.png)

If your pull request is merged -- great! If it is not, no sweat, it may not be what the project maintainer had in mind, or they were already working on it. This happens, so our recommendation is to take any feedback you've received and go forth and pull request again -- or create your own open source project.
