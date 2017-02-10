---
title: The Beginner's Guide to Open Sourcing&nbsp;a&nbsp;Project
description: A brief overview of what open source is, why people do it, and how to launch your own open source project.
toc:
  the-what-and-why-of-open-source: "The what and why of open source"
  should-i-launch-my-own-open-source-project: "Should I launch my own open source project?"
  launching-your-own-open-source-project: "Launching your own open source project"
  extra-credit-naming-and-branding-your-project: "Extra credit&#58; Naming and branding your project"
---

## The "what" and "why" of open source

So you're thinking about getting started with open source? Congratulations! The world appreciates your contribution. Let's talk about what open source is, why people do it, and how to launch your own open source project.

### What does "open source" mean?

When a project is open source, that means **anybody can view, use, modify, and distribute your project for any purpose.** These permissions are enforced through [an open source license](https://opensource.org/licenses).

Open source is powerful because it lowers the barriers to adoption, allowing ideas to spread quickly, and because the production process is open to the public.

For example, imagine you're having a potluck. Your friend Lisa makes a cherry pie to share. Everybody tries the pie (**use**). It's a hit. They ask Lisa for the recipe, which she gladly provides (**view**). One friend, Joe, asks if he can use it for a dinner next week (**distribute**). Another friend, Alex, who's a pastry chef, looks at the recipe and suggests increasing the amount of butter to make a flakier crust (**modify**).

By comparison, a closed source process would be going to a restaurant and ordering a slice of cherry pie. You must pay a fee to eat the pie, and the restaurant won't give you their recipe. If you copied their pie exactly and sold it under your own name, the restaurant might take action against you.

### Why do people open source their work?

There are many reasons why a person or organization would want to open source a project. Some examples include:

* **Collaboration:** Open source projects can accept changes and updates from anybody, which means they benefit from multiple skill sets and experiences. Collaboration matters to those who want to build their projects with a community, like [Hoodie](https://github.com/hoodiehq) and [Rust](https://github.com/rust-lang/rust).

* **Adoption and remixing:** Open source projects can be used by anyone for any purpose. That means more people are likely to use your project, or even build something else with it.

[WordPress](https://github.com/WordPress) started as a fork of an existing project called [b2](https://github.com/WordPress/book/blob/master/Content/Part%201/2-b2-cafelog.md).

* **Transparency:** Anyone can inspect an open source project for errors or inconsistencies. Transparency matters to governments like [Bulgaria](https://medium.com/@bozhobg/bulgaria-got-a-law-requiring-open-source-98bf626cf70a) or the [United States](https://sourcecode.cio.gov/), regulated industries like banking or healthcare, and security software like [Let's Encrypt](https://github.com/letsencrypt).

Remember: open source isn't just for software! You can open source everything from data sets to websites to books. Check out [GitHub Explore](https://github.com/explore) for ideas on what else you can open source.

### Does open source mean "free of charge"?

One of open source's biggest draws is that it does not cost money, but "free of charge" is just a byproduct of open source's overall value.

Because [an open source license requires](https://opensource.org/osd-annotated) that anyone can use, modify, and share your project for nearly any purpose, projects themselves tend to be free of charge. If the project cost money to use, anyone could legally make a copy and use the free version instead.

As a result, most open source projects are free, but "free of charge" is not part of the open source definition. There are ways to charge for open source projects indirectly through dual licensing or limited features, while still complying with the official definition of open source.

## Should I launch my own open source project?

The short answer is yes, because no matter the outcome, launching your own open source project is a great way to learn how open source works.

If you've never open sourced a project before, you might be nervous about whether your work is good enough, what people will say, or whether anyone will notice at all. If this sounds like you, don't worry! Open source work is like any other creative activity, such as writing or painting. It might feel scary to share your work with the world for the first time, but the only way to get better is to practice, even if you don't have an audience.

Before you get started, it helps to identify your goals and expectations beforehand, so you can get the most out of your experience.

### Setting your goals

Goals can help you figure out what to work on, what to say no to, and where you need help from others. Start by asking yourself,  _why am I open sourcing this project?_

There is no one right answer to this question. You may find that you have multiple goals for a single project, or that different projects have different goals.

A few [reasons why](http://ben.balter.com/2015/11/23/why-open-source/) people open source their work include:

* A person wants to show off their portfolio or share their work
* A community wants to find collaborators to shape the project and help it grow
* A company wants foster an ecosystem or make their code transparent

If your only goal is to show off your work, you may not want contributions, and even state that you're not accepting contributions in your README. On the other hand, if you are hoping for contributors, you'll invest time into clear, detailed documentation and making newcomers feel welcome.

For example, [Tessel](https://github.com/tessel) keeps [its goals and roadmap](https://github.com/tessel/project#current-goals) in a README, which include growing their number of outside contributions and production deployments.

If you hope to get contributions, remember that as your project grows, your community may need more than just code from you. Responding to issues, reviewing code, and evangelizing your project are all important tasks in an open source project. While the amount of time you spend on non-coding tasks will depend on the size and scope of your project, you should be prepared as a maintainer to address them yourself or find someone to help you.

If you're part of a company open sourcing a project, make sure your project has the internal resources it needs to thrive. You'll want to identify who's responsible for maintainer-related tasks after launch, and how you want to share those tasks with your community. If you need a dedicated budget or staffing for promotion, operations and maintaining the project, start those conversations early.

### Contributing to other projects

If your goal is to learn how to collaborate with others or understand how open source works, consider contributing to an existing open source project. Start with a project that you already use and love. Contributing to a project can be as simple as fixing typos or updating documentation.

If you're not sure how to get started, check out our [How to Contribute to Open Source guide](../how-to-contribute/)).

## Launching your own open source project

Not sure whether you're ready to launch? There is no ideal time to open source your work. You can open source an idea, a work in progress, or after years of being closed source. You should open source your project when you feel comfortable having others view, and give feedback on, your work.

If you're ready to launch, hopefully you've been hard at work building your project. (Haven't started yet? [Create a repository!](https://help.github.com/articles/create-a-repo/)) Let's talk about what to include in an open source project before sharing it with the world.

### Basic documentation for your project

No matter which stage you decide to open source your project, every project should include the following (standard GitHub filenames are listed in parentheses):

* [License](https://help.github.com/articles/open-source-licensing/#where-does-the-license-live-on-my-repository) (LICENSE)
* [README](https://help.github.com/articles/create-a-repo/#commit-your-first-change) (README)
* [Contributing guidelines](https://help.github.com/articles/setting-guidelines-for-repository-contributors/) (CONTRIBUTING)
* Code of conduct (CODE_OF_CONDUCT)

As a maintainer, these components will help you communicate expectations, manage contributions, and protect everyone's legal rights (including your own). They significantly increase your chances of having a positive experience.

If your project is on GitHub, putting these files in your root directory with the recommended filenames will help GitHub recognize and automatically surface them to your readers.

> Why do we write important files, like README, in all caps? Many command line environments use [ASCIIbetical ordering](https://en.wikipedia.org/wiki/ASCII#Character_order), which means upper-case files appear first in a list.

### Choosing a license

An open source license guarantees that others can use, copy, modify, and contribute back to your project without repercussions. It also protects you from sticky legal situations. **You must include a license when you launch an open source project.**

Legal work is no fun. The good news is that you can copy and paste an existing license into your repository. It will only take a minute to protect your hard work.

[MIT](http://choosealicense.com/licenses/mit/), [Apache 2.0](http://choosealicense.com/licenses/apache-2.0/), and [GPLv3](http://choosealicense.com/licenses/gpl-3.0/) are the most popular open source licenses, but [there are other options](http://choosealicense.com) to choose from.

When you create a new project on GitHub, you are given the option to select a license. Including an open source license will make your GitHub project open source.

![pick a license](/assets/images/getting-started/repository-license-picker.png)

If you have other questions or concerns around the legal aspects of managing an open source project, [we've got you covered](../legal/).

### Writing a README

READMEs [do more than explain](http://tom.preston-werner.com/2010/08/23/readme-driven-development.html) how to use your project. They also explain why your project matters, and what your users can do with it.

In your README, try to answer the following questions:

* What does this project do?
* Why is this project useful?
* How do I get started?
* Where can I get more help, if I need it?

For example, @sindresorhus uses the [Pageres](https://github.com/sindresorhus/pageres) README to explain not just _what_ the project is, but also _why_ it's useful:

> Capture screenshots of websites in various resolutions. A good way to make sure your websites are responsive. It's speedy and generates 100 screenshots from 10 different websites in just over a minute. It can also be used to render SVG images.

You can use your README to answer other questions, like how you handle contributions, what the goals of the project are, and information about licenses and attribution. If you don't want to accept contributions, or your project is not yet ready for production, write this information down.

Sometimes, people avoid writing a README because they feel like the project is unfinished, or they don't want contributions. These are all very good reasons to write one.

@18F's ["Making READMEs Readable"](https://pages.18f.gov/open-source-guide/making-readmes-readable/) is a template you can use to write a complete README. For more inspiration, check out @matiassingers' list of [awesome READMEs](https://github.com/matiassingers/awesome-readme).

When you include a README file in the root directory, GitHub will automatically display it on your project repository's homepage. It will be the first thing someone sees when they arrive.

### Writing your contributing guidelines

A CONTRIBUTING file tells your audience how to participate in your project. For example, you might include information on:

* How to file a bug report (on GitHub, you can use [issue and pull request templates](https://github.com/blog/2111-issue-and-pull-request-templates) to make this easier)
* How to suggest a new feature
* How to set up your environment and run tests

In addition to technical details, a CONTRIBUTING file is an opportunity to communicate your expectations for contributions, such as:

* The types of contributions you're looking for
* Your roadmap or vision for the project
* How contributors should (or should not) get in touch with you

Using a warm, friendly tone and offering specific suggestions for contributions (such as writing documentation, or making a website) can go a long way in making newcomers feel welcomed and excited to participate.

For example, [Active Admin](https://github.com/activeadmin/activeadmin/blob/master/CONTRIBUTING.md) starts its contributing guide with:

> First off, thank you for considering contributing to Active Admin. It's people like you that make Active Admin such a great tool.

In the earliest stages of your project, your CONTRIBUTING file can be simple. You should always explain how to report bugs or file issues, and any technical requirements (like tests) to make a contribution.

Over time, you might add other frequently asked questions to your CONTRIBUTING file. Writing down this information means fewer people will ask you the same questions over and over again.

For more help with writing your CONTRIBUTING file, check out @nayafia's [contributing guide template](https://github.com/nayafia/contributing-template/blob/master/CONTRIBUTING-template.md) or @mozilla's ["How to Build a CONTRIBUTING.md"](http://mozillascience.github.io/working-open-workshop/contributing/).

Link to your CONTRIBUTING file from your README, so more people see it. If you [place the CONTRIBUTING file in your project's repository](https://help.github.com/articles/setting-guidelines-for-repository-contributors/), GitHub will automatically link to your file when a contributor creates an issue or opens a pull request.

![contributing guidelines](/assets/images/getting-started/Contributing-guidelines.jpg)

### Establishing a code of conduct

Finally, a code of conduct helps set ground rules for behavior for your project's participants. This is especially valuable if you're launching an open source project for a community or company. A code of conduct empowers you to facilitate healthy, constructive community behavior, which will reduce your stress as a maintainer.

In addition to communicating _how_ you expect participants to behave, a code of conduct also tends to describe who these expectations apply to, when they apply, and what to do if a violation occurs.

Much like open source licenses, there are also emerging standards for codes of conduct, so you don't have to write your own. The [Contributor Covenant](http://contributor-covenant.org/) is a drop-in code of conduct that is used by [over 40,000 open source projects](http://contributor-covenant.org/adopters/), including Kubernetes, Rails, and Swift. No matter which text you use, you should be prepared to enforce your code of conduct when necessary.

Paste the text directly into a CODE_OF_CONDUCT file in your repository. Keep the file in your project's root directory so it's easy to find, and link to it from your README.

## Naming and branding your project

Branding may sound like a waste of time. After all, there are plenty of popular open source projects that have never thought about their brand at all.

Branding is more than a flashy logo or catchy project name, however. It's about how you talk about your project and who you reach with your message.

### Choosing the right name

Pick a name that is easy to remember and, ideally, gives some idea of what the project does. For example, [Sentry](https://github.com/getsentry/sentry) monitors apps for crash reporting, and [Thin](https://github.com/macournoyer/thin) is a fast and simple Ruby web server.

If you're building upon an existing project, using their name as a prefix can help clarify what your project does. For example, [node-fetch](https://github.com/bitinn/node-fetch) is a module that brings `window.fetch` to Node.js.

Consider clarity above all. Puns are fun, but remember that some jokes might not translate to other cultures or people with different experiences from you. Some of your potential users might be company employees, for example: you don't want to make them uncomfortable when they have to explain your project at work!

For more tips on naming, check out @kfogel's section in _Producing OSS_ on [choosing a project name](http://producingoss.com/en/getting-started.html#choosing-a-name).

### Avoiding name conflicts

You'll [also want to check](http://ivantomic.com/projects/ospnc/) for open source projects with a similar name, especially if you share the same language or ecosystem. If your name overlaps with a popular existing project, you might confuse your audience.

If you want a website, Twitter handle, or other properties to represent your project, make sure you can get the names you want. Ideally, [reserve those names now](https://instantdomainsearch.com/) for peace of mind, even if you don't intend to use them just yet.

Make sure that your project's name doesn't infringe upon any trademarks. A company might ask you to take down your project later on, or even take legal action against you. It's just not worth the risk. You can check the [WIPO Global Brand Database](http://www.wipo.int/branddb/en/) for trademark conflicts. If you're at a company, this is one of the things your [legal team can help you with](../legal/).

Finally, do a quick Google search for your project name. Will people be able to easily find your project? Does something else appear in the search results that you wouldn't want them to see?

### How you write (and code) affects your brand, too!

Throughout the life of your project, you'll do a lot of writing: READMEs, tutorials, community documents, responding to issues, maybe even newsletters and mailing lists. Whether it's official documentation or a casual email, your writing style is part of your project's brand. Consider how you might come across to your audience and whether that is the tone you wish to convey.

@janl discovered that the way he spoke to others [helped create a positive brand](http://writing.jan.io/2015/11/20/sustainable-open-source.html) for [CouchDB](https://github.com/apache/couchdb):

> I tried to be involved with every thread on the mailing list, and showing exemplary behaviour, being nice to people, taking their issues seriously and trying to be helpful overall. After a while, people stuck around not to only ask questions, but to help with the answering as well, and to my complete delight, they mimicked my style. \[...\]
>
> Every time I join and read, I see the culture that I helped plant there seven years ago and it makes me very proud.

Using warm, inclusive language (such as "them", even when referring to the single person) can go a long way in making your project feel welcoming to new contributors. Also consider using simple language when writing, as many of your readers may not be native English speakers. You can use [Hemingway](http://www.hemingwayapp.com/) to find quick ways to simplify your language.

Beyond how you write words, your coding style may also become part of your project's brand. For example, [Angular](https://github.com/johnpapa/angular-styleguide) and [jQuery](http://contribute.jquery.org/style-guide/js/) are two projects with rigorous coding styles and guidelines.

It isn't necessary to write a style guide for your project when you're just starting out, and you may find that you enjoy incorporating different coding styles into your project anyway. But you should anticipate how your writing and coding style might attract or discourage different types of people. The earliest stages of your project are your opportunity to set the precedent you wish to see.

## Your pre-launch checklist

Ready to open source your project? Here's a checklist before you do:

**Documentation**

* ☑️ Project has a LICENSE file of the open source license
* ☑️ Project has basic documentation (README, CONTRIBUTING, CODE_OF_CONDUCT)
* ☑️ The name is easy to remember, gives some idea of what the project does, and does not conflict with an existing project or infringe on trademarks
* ☑️ The issue queue is up-to-date, with issues clearly organized and labeled

**Code**

* ☑️ Project uses consistent code conventions and clear function/method/variable names
* ☑️ The code is clearly commented, documenting intentions and edge cases
* ☑️ There are no sensitive materials in the revision history, issues, or pull requests (ex. passwords or other non-public information)

**People**

If you're an individual:

* ☑️ You've talked to the legal department and/or understand the IP and open source policies of your company (if you're an employee somewhere)

If you're a company or organization:

* ☑️ You've talked to your legal department
* ☑️ You have a marketing plan for announcing and promoting the project
* ☑️ Someone is committed to managing community interactions (responding to issues, reviewing and merging pull requests)
* ☑️ At least two people have administrative access to the project

Checked all the boxes? You're ready to go! [Click "publish"](https://help.github.com/articles/making-a-private-repository-public/) and pat yourself on the back.

## You did it!

Congratulations on open sourcing your first project. No matter the outcome, the act of working in public is an important community contribution. With every commit, comment, and pull request, you're creating opportunities for yourself and for others to learn and grow.
