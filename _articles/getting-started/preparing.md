---
title: Preparing for launch
following: _articles/marketing.md
---

You've written down your goals, you've chosen a name and an idea, and hopefully you've been hard at work building your project. (Haven't started yet? [Create a repository!](https://help.github.com/articles/create-a-repo/))

Feel ready to launch? In this section, we'll talk about what to include in an open source project before sharing it with the world.

Not sure whether you're ready to launch? The short answer is there is no perfect time to open source your work. You can open source an idea, a work in progress, or after years of being closed source. You should open source your project when you feel comfortable having others view, and give feedback on, your work.

* TOC
{:toc}

## Your project launch checklist

No matter which stage you decide to open source your project, every project should include the following (standard GitHub filenames are listed in parentheses):

* [License](https://help.github.com/articles/open-source-licensing/#where-does-the-license-live-on-my-repository) (LICENSE)
* [README](https://help.github.com/articles/create-a-repo/#commit-your-first-change) (README)
* [Contributing guidelines](https://help.github.com/articles/setting-guidelines-for-repository-contributors/) (CONTRIBUTING)
* Code of conduct (CODE_OF_CONDUCT)

If your project is on GitHub, putting these in your root directory with the recommended filenames will help GitHub recognize these as special files and automatically surface them to your readers.

As a maintainer, these components will help you communicate expectations, manage contributions, protect your, contributors', and users' legal rights, and make sure that you and your contributors have a positive experience. The more you can document for your readers up front, the less work you'll have to do later on.

## Choosing a license

An open source license guarantees that others can use, copy, modify, and contribute back to your project without repercussions. It also protects you from any sticky legal situations.

Legal work is no fun. The good news is there are many licenses available that you can copy and paste into your repository. It will only take a minute to protect your hard work.

When you create a new project on GitHub, you are given the option to select a license. Including an open source license will make your GitHub project open source.

![pick a license[(/assets/images/getting-started/repository-license-picker.png)

[MIT](http://choosealicense.com/licenses/mit/), [Apache 2.0](http://choosealicense.com/licenses/apache-2.0/), and [GPLv3](http://choosealicense.com/licenses/gpl-3.0/) are the most popular open source licenses, but [there are other options](http://choosealicense.com) to choose from.

If you have other questions or concerns around the legal aspects of managing an open source project, [we've got you covered](../legal/).

## Writing a README

Your project's README file gives your reader context about the project.

The README should do more than explain how to use your project. It should also help your audience understand why your project matters, and what they can do with it.

In your README, try to answer the following questions:

* What does the project do?
* As a user, how does this project help me?
* How do I get started?
* Where can I get more help, if I need it?

You can also use your README to answer other questions, like how you handle contributions, what the goals of the project are, and information about licenses and attribution.

Sometimes, people avoid writing a README because they feel like the project is unfinished, or they don't want contributions. These are all very good reasons to write one.

As a maintainer, READMEs are an opportunity to [clarify your goals](../setting-expectations/) in public. If you don't want to accept contributions or your project is not yet ready for production, you should especially write this information down so others can see it.

When you include a README file in the root directory, GitHub will automatically display it on your project repository's homepage. It will be the first thing someone sees when they arrive.

## Setting your contributing guidelines

A CONTRIBUTING file tells your audience how to participate in your project. For example, you might want to tell your reader how to create an issue, file a bug report, test fixes, or format code.

In addition to technical details, a CONTRIBUTING file is an opportunity to communicate your expectations for contributions. Remember that no two open source projects are alike. Write down rules that work best for you and your lifestyle. For example, you may want to convey that you are only accepting certain types of contributions, tell participants how long they should expect to hear a response from you, or explain how (or how not) to get in touch with you.

The CONTRIBUTING file is a place to clearly state the types of contributions you're looking for. Using a warm, friendly tone and offering specific suggestions (such as writing documentation, or making a website) can go a long way in making newcomers feel welcomed and excited to participate.

You should reference your CONTRIBUTING file in your README. In your README, give your audience a quick overview of how contributions work, then link to the CONTRIBUTING file for more information.

If you [place your CONTRIBUTING file in your project's repository](https://help.github.com/articles/setting-guidelines-for-repository-contributors/), GitHub will automatically link to your file when a contributor creates an issue or opens a pull request.

![contributing guidelines[(/assets/images/getting-started/Contributing-guidelines.jpg)

## Establishing a code of conduct

Finally, a code of conduct helps set ground rules for behavior for your project's participants. This is especially valuable if you're launching an open source project for a community or company. We recommend placing a CODE_OF_CONDUCT file in your project's root directory.

In addition to communicating your expectations, you should describe the following:

* Where your code of conduct takes effect (only on issues and pull requests, or related community activities like events?)
* Who the code of conduct applies to (community members and maintainers, but what about sponsors?)
* What happens if someone violates the code of conduct
* How someone can report violations

The [Contributor Covenant](http://contributor-covenant.org/) is a drop-in code of conduct that has been adopted by [thousands of open source projects](http://contributor-covenant.org/adopters/). If you'd prefer to write your own, the [Django Code of Conduct](https://www.djangoproject.com/conduct/) and the [Angular Code of Conduct](https://github.com/angular/code-of-conduct/blob/master/CODE_OF_CONDUCT.md) are good customized examples that can serve as inspiration.

Codes of conduct help protect not just your participants, but yourself. As you maintain your project, you may find that unproductive attitudes from other participants can make you feel drained or unhappy about your work. A code of conduct empowers you to facilitate healthy, constructive community behavior. Being proactive reduces the likelihood that you, or others, will become fatigued with your project later on, and helps in case you need to [enforce your code of conduct](../../troubleshooting/conduct/).

## What's next?

Now that you have these four files in the root directory of your project, you're ready to open source your project! [Click "publish"](https://help.github.com/articles/making-a-private-repository-public/) and pat yourself on the back. Then continue on to the next section. We've got work to do.

Launching your project is only the first step. If one of your goals is for people to discover and use your project, you'll want to make sure they know about it.

Sometimes, it takes a long time before people notice your open source project. Your project will likely go through multiple phases of activity. That's okay! Some of the most popular projects today took years to reach high levels of activity. The rest of this handbook is designed to help you manage your project every step of the way.

## Further reading

* Licenses
  * [ChooseALicense.com](http://choosealicense.com)
* READMEs
  * [Readme Driven Development](http://tom.preston-werner.com/2010/08/23/readme-driven-development.html) by @mojombo
  * [Awesome README](https://github.com/matiassingers/awesome-readme)
  * [18F Open Source Style Guide](https://pages.18f.gov/open-source-guide/making-readmes-readable/)
  * [A Beginner's Guide to Creating a README](https://changelog.com/a-beginners-guide-to-creating-a-readme/) by @beverlynelson
  * [README.md template](https://gist.github.com/jxson/1784669) from @jxson
* Contributing guides
  * [Contributing Guidelines](https://github.com/blog/1184-contributing-guidelines) by @vinbarnes
  * [Contributing to Open Source Projects](http://www.contribution-guide.org/) by @bitprophet
  * [Contributing Guides: A Template](https://github.com/nayafia/contributing-template) by @nayafia
  * [Wrangling Web Contributions: How to Build a CONTRIBUTING.md](http://mozillascience.github.io/working-open-workshop/contributing/)
* Codes of conduct
  * [Code of conduct evaluations](http://geekfeminism.wikia.com/wiki/Code_of_conduct_evaluations) from the Geek Feminism wiki
  * [Contributor Covenant](http://contributor-covenant.org/)
  * [Django Code of Conduct](https://github.com/django/code-of-conduct)
  * [HOWTO design a code of conduct for your community](https://adainitiative.org/2014/02/18/howto-design-a-code-of-conduct-for-your-community/) by Valerie Aurora
  * [Docker community guidelines](https://github.com/docker/docker/blob/master/CONTRIBUTING.md#docker-community-guidelines)
