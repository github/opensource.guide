---
title: Leadership & Governance
next: troubleshooting/index.md
---

Your project is growing, people are engaged, and you’re committed to keeping this thing going. At this stage, you’re probably starting to wonder about governance. Maybe you want to recognize a community member who’s made significant contributions to your project. Maybe you’ve gotten into a debate with your community and realized you didn’t know how to resolve it.

In this section, we’ll answer some commonly asked questions about leadership and governance for open source projects.

## Table of Contents

1. [What are some of the common governance structures for open source projects?](#what-are-some-of-the-common-governance-structures-for-open-source-projects)
2. [Do I need governance docs when I launch my project?](#do-i-need-governance-docs-when-i-launch-my-project)
3. [When should I give someone commit access?](#when-should-i-give-someone-commit-access)
4. [What are some leadership roles or responsibilities that projects use?](#what-are-some-leadership-roles-or-responsibilities-that-projects-use)
5. [How do I formalize leadership roles in my project?](#how-do-i-formalize-leadership-roles-in-my-project)
6. [Do I need a legal entity to support my project?](#do-i-need-a-legal-entity-to-support-my-project)

## What are some of the common governance structures for open source projects?

There are three common governance structures associated with open source projects:

* **BDFL:** BDFL stands for "Benevolent Dictator for Life". Under this structure, one person (usually the author of the project) has final say on all major project decisions. [Python](https://github.com/python) is a classic example of a BDFL project. Smaller projects are probably BDFL by default, because there are only one or two maintainers. A project that originated at a company might also fall into the BDFL category.

* **Meritocracy:** Under a meritocracy, active project contributors (those who demonstrate "merit") are given a formal decision making role. Decisions are usually made based on pure voting consensus. The meritocracy was pioneered by the [Apache Foundation](http://www.apache.org/); [all Apache projects](http://www.apache.org/index.html#projects-list) are meritocracies. Contributions can only be made by individuals representing themselves, not by a company.

* **Liberal contribution:** Under a liberal contribution model, the people who do the most work are recognized as most influential, but this is based on current work and not historic contributions. Major project decisions are made based on a consensus seeking process (discuss major grievances) rather than pure vote, and strive to include as many community perspectives as possible. The liberal contribution model was pioneered by [Node.js](https://nodejs.org/en/foundation/). [Rust](https://www.rust-lang.org/en-US/) is another example.

Which one should you use? It's up to you! There is no one correct model. Each one has advantages and tradeoffs. And although they may seem quite different at first, all three models have more in common than it might seem. If you’re interested in adopting one of these models, here are some templates:

* [BDFL model template](http://oss-watch.ac.uk/resources/benevolentdictatorgovernancemodel)

* [Meritocracy model template](http://oss-watch.ac.uk/resources/meritocraticgovernancemodel)

* [Node.js’s liberal contribution policy](https://medium.com/the-javascript-collection/healthy-open-source-967fa8be7951#.m9ht26e79)

## Do I need governance docs when I launch my project?

It’s not necessary to define your project’s governance when you launch. The best part about open source governance is that it is shaped by the community!

There is no right time to write down your project’s governance, but it’s much easier to define once you’ve seen your community dynamics play out. However, some documentation will inevitably contribute to your project’s governance, so start writing down what you can. For example, you can define clear expectations for behavior, or how your contributor process works, even at your project’s launch. And if you’re a company launching an open source project, you may also want to explain anything particular to how your company will (or won’t!) be involved with the project.

## When should I give someone commit access?

It’s up to you when you want to give someone commit access to your project. Some people think you should give commit access to everybody who makes a contribution. [^1] Doing so could encourage more people to feel ownership of your project. On the other hand, especially for big community projects, you may want to only give commit access to people who have made have demonstrated their commitment. There’s no one right way of doing it - do what makes you most comfortable!

[^1]: [The Pull Request Hack](http://felixge.de/2013/03/11/the-pull-request-hack.html) by @felixge

## What are some leadership roles or responsibilities that projects use?

Here are some common roles that you might have heard of for open source projects. What these roles actually mean, though, is entirely up to you.

* Maintainer

* Contributor

* Committer

[Node.js](https://github.com/nodejs), for example, defines a "contributor" as anyone who comments on an issue or pull request, whereas other projects would define a contributor as somebody whose pull request was accepted. [^2]

[^2]: [Healthy Open Source](https://medium.com/the-javascript-collection/healthy-open-source-967fa8be7951) by @mikeal

For some projects, "maintainers" are the only people in a project with commit access. In other projects, they’re simply the people who are listed in the README as maintainers.

A maintainer doesn’t necessarily have to be someone who writes code for your project. It could be someone who’s done a lot of work evangelizing your project (like @janl did for [CouchDB](https://github.com/apache/couchdb)) or written documentation that made the project more accessible to others (like @orta did for [CocoaPods](https://github.com/CocoaPods/CocoaPods)). [^3] Regardless of what they do day-to-day, a maintainer is probably someone who feels responsibility over the direction of the project and is committed to improving it.

[^3]: [From Orta](https://realm.io/news/orta-therox-moving-to-oss-by-default/):

    > I’ve been renowned for my work on CocoaPods, but most people don’t know that I actually don’t do any real work on the CocoaPods tool itself. My time on the project is mostly spent doing things like documentation and working on branding.

You should use leadership roles to formally recognize people who have made outstanding contributions to your project, regardless of their technical skill. @jacobian, one of [Django](https://github.com/django/django)’s former BDFLs, once told a crowd at PyCon that he is actually a mediocre programmer who joined the project a year after it started, even though he’s often mistaken as the co-creator or even "inventor" of Django. [^4]

[^4]: [Pycon 2015 Keynote](https://www.youtube.com/watch?v=hIJdFxYlEKE#t=5m0s) by @jacobian

## How do I formalize leadership roles in my project?

Formalizing your leadership roles helps people take ownership and tells other community members who to look to for help. For a smaller project, designating leaders can be as simple as adding their names to your README. You could also create a separate text file that lists the names of project leaders. If your project has a website, you can create a team page or list your project leaders there.

If your project is bigger, you may have a "core team" of maintainers, or even subcommittees of people who take ownership of different issue areas. [Rust](https://github.com/rust-lang/rust) is an example of a project that moved from having one core team to multiple teams. [^5] For example, you could have subcommittees focused on security, issue triaging, or community conduct. Let people self-organize and volunteer for the roles they’re most excited about, rather than assigning them.

[^5]: [The Rust Team](https://www.rust-lang.org/en-US/team.html)

Leadership teams may want to create a designated channel (like on IRC) or meet regularly to discuss the project (like on Gitter or Google Hangout). You can even make those meetings public so other people can listen. [Cucumber-ruby](https://github.com/cucumber/cucumber-ruby), for example, hosts office hours every week.[^6]

[^6]: [Talking with other devs](https://github.com/cucumber/cucumber-ruby/blob/master/CONTRIBUTING.md#talking-with-other-devs) from [Cucumber-ruby](https://github.com/cucumber/cucumber-ruby)

Once you’ve established leadership roles, don’t forget to document how people can attain them! Establish a clear process for how someone can become a maintainer or join a subcommittee in your project, and write it into your GOVERNANCE.md. Documenting this information avoids the community perception that maintainers are a clique that makes its decisions in private.

Finally, if your project is on GitHub, consider moving your project from your personal account to an Organization. [GitHub Organizations](https://github.com/blog/674-introducing-organizations) make it easier to manage permissions and help protect your project’s legacy.

## Do I need a legal entity to support my project?

You don’t need a legal entity to support your open source project unless you’re handling money. For example, if you want to create a commercial business, you’ll want to set up a C Corp or LLC (if you’re based in the US). If you’re just doing contract work related to your open source project, you can accept money as a sole proprietor, or set up an LLC (if you’re based in the US).

If you want to accept donations for your open source project, you can set up a donation button (using PayPal or Stripe, for example), but the money won’t be tax-deductible unless you are a nonprofit (such as a 501c3 or 501c6, if you’re in the US). Many projects don’t wish to go through the trouble of setting up a nonprofit, so they find a nonprofit fiscal sponsor instead. A fiscal sponsor accepts donations on your behalf, usually in exchange for a percentage of the donation. [Software Freedom Conservancy](https://sfconservancy.org/), [Apache Foundation](http://www.apache.org/), [Eclipse Foundation](https://eclipse.org/org/foundation/), and [Open Collective](https://opencollective.com/opensource) are examples of organizations that serve as fiscal sponsors for open source projects.

If your project is closely associated with a certain language or ecosystem, there may also be a related software foundation you can work with. For example, the [Python Software Foundation](https://www.python.org/psf/) helps support [PyPI](https://pypi.python.org/pypi), the Python package manager, and the [Node.js Foundation](https://nodejs.org/en/foundation/) helps support [Express.js](http://expressjs.com/), a Node-based framework.

## What's next?

Congratulations on making it this far, and welcome to the ranks of open source maintainership! We hope your project continues to thrive and that this Handbook has helped you along the way.

As you grow into your leadership role, you'll inevitably come across some tough situations. Check out our [Troubleshooting](../../troubleshooting/) section for help when you need it. And from the bottom of our hearts, thank you for sharing your work and making a positive contribution to the world. 💕
