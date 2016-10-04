---
title: Best practices for maintainers
following: _articles/sustaining/healthy-communities.md
---

We spend plenty of time talking about how to make other people happy. But first and foremost, make yourself happy. Maintainer happiness is a non-negotiable requirement for the survival of any open source project.

As you've probably noticed, a major part of maintaining an active open source project is managing other people. While that can be a lot less fun than coding or writing, there are things you can do to make your life easier.

Let's talk about how to set up your projects in a way that helps you maintain your sanity.

* TOC
{:toc}

## Recognize your constraints

Remember way back, before you launched your project, [when you thought about goals](../../getting-started/setting-expectations/)? It's time to revisit those now. Remind yourself why you open sourced the project in the first place. Has anything changed?

If maintaining your project is part-time or volunteer work, be honest about how much time you have. This is not the same as how much time you think the project requires, or how much time others want you to spend. Write down your time constraints, and make it public so others understand your priorities, too.

If you want to spend more time on the project, and your work is relevant to your job, consider asking your employer for more dedicated time, or even additional staff resources.

Write down your project's vision and, where possible, make that vision transparent to others. Your vision is your North Star, guiding you when you feel overwhelmed by requests, and helping you reset your priorities. Add it to your README. If there are other artifacts that could help, like a project roadmap, make those public as well.

@lord discovered that having a project vision helped him figure out which requests to spend time on. As a new maintainer, [he regretted](https://lord.io/blog/2014/oss-tips/) not sticking to his project's scope when he got his first feature request for [Slate](https://github.com/lord/slate):

> I fumbled it. I didn't put in the effort to come up with a complete solution. Instead of an half-assed solution, I wish I had said "I don't have time for this right now, but I'll add it to the long term nice-to-have list."

These types of exercises may seem trivial, but the more you know yourself and your limits (not just abilities!), the easier it is to say no when something [doesn't fit into your scope](../../troubleshooting/contributions/).

## Write down your rules

Rules can be nerve-wracking to write down. Sometimes you might feel like you're policing other people's behavior or killing all the fun.

Done right, however, good rules empower maintainers. Rules are your chance to explain how you want to manage your project. They prevent you from getting dragged into doing things you don't want to do. And the more guidelines you write down (and enforce fairly), the more people can understand your perspective without you having to explain yourself.

Some examples of rules you may want to write down:

* How a contribution is reviewed and accepted

* The types of contributions you'll accept

* How long someone should expect for you to respond, and when it's appropriate to follow up (ex. _"You can expect a response from maintainers within 7 days. If you haven't heard anything by then, feel free to ping the thread."_)

* How people can (and can't) contact you

* How much time you spend on the project (ex. _"I only work on this project on weekends"_ or _"I spend 10 percent of my employer's time on this project, usually Wednesdays through Fridays"_)

## Enforce your rules

The first rule of open source, [according to](https://twitter.com/solomonstre/status/715277134978113536) @shykes: _"No is temporary, yes is forever."_ It's never too early to practice saying no.

Saying no applies to many situations you'll come across as a maintainer: feature requests that don't fit the scope, someone derailing a discussion, doing unnecessary work for others.

One of the most important places you'll practice saying no is on your issue and pull request queue. If someone suggests an idea that you know you won't accept, don't leave it open because you feel guilty or want to be nice. Be kind, but firm. Thank them for their contribution and explain why it doesn't fit into the scope of the project. Link to relevant documentation, if you have it. Then [close the request](../../troubleshooting/contributions/).

Defining your project's scope makes closing pull requests with "scope creep" easier. If you notice repeated requests for things you don't want to accept, consider adding them into your contribution policy or modifying your project's scope, so you don't have to keep repeating yourself.

If the thought of saying no terrifies you, you're not alone. As @jfrazelle [put it](https://blog.jessfraz.com/post/the-art-of-closing/):

> I've talked to maintainers from several different open source projects, Mesos, Kubernetes, Chromium, and they all agree one of the hardest parts of being a maintainer is saying "No" to patches you don't want.

The more often you practice saying no, the easier it becomes. Promise.

## Keep communication public

Wherever you can, keep communication about your project public. If somebody tries to contact you privately to discuss a feature request or support need, politely direct them to a public communication channel, such as a mailing list or issue tracker.

The more often you practice saying no, the easier it becomes. Promise.

## Automate your work

One of the most important ways you can automate your project is by adding tests. Tests help contributors feel confident that they won't break anything. They also make it easier for you to review and accept contributions quickly. The more responsive you are, the more engaged your community can be. If you add tests, make sure to explain how they work in your CONTRIBUTING file.

There are also a [variety of tools available](https://github.com/integrations) to help automate your work. (The good news about maintaining a popular project is that other maintainers have probably faced similar issues!) For example:

* [Greenkeeper](https://github.com/greenkeeperio/greenkeeper) monitors your project's dependencies
* [Coveralls](https://coveralls.io/) checks for test coverage
* [Vossibility](https://github.com/icecrime/vossibility-stack) pulls stats on your project
* [mention-bot](https://github.com/facebook/mention-bot) automatically mentions potential reviewers for pull requests
* [PullApprove](https://about.pullapprove.com/) helps you manage pull requests
* [semantic-release](https://github.com/semantic-release/semantic-release) automates your releases

For bug reports and other common contributions, GitHub has [Issue Templates and Pull Request Templates](https://github.com/blog/2111-issue-and-pull-request-templates), which you can create to streamline the communication you receive. You can also set up [email filters](https://github.com/blog/2203-email-updates-about-your-own-activity) to manage your email notifications.

If you want to get a little more advanced, style guides and linters can standardize project contributions and make them easier to review and accept. However, if your standards are too complicated, they can increase the barriers to contribution, so make sure you're only adding enough rules to make everyone's lives easier.

If you're not sure which tools to use, sometimes it helps to look at what other popular projects do, especially those in your ecosystem. For example, what does the contribution process look like for other Node modules? Using similar tools and approaches will also make your process more familiar to potential contributors.

## Let others help out

You don't have to do everything yourself. As your project's community grows, you may find that others are making substantial contributions to your project. Recognizing their contributions explicitly and [formalizing their role](../leadership/#how-do-i-formalize-leadership-roles-in-my-project) in your project can help reduce your burden. Make it clear early on in your CONTRIBUTING file how others can grow into leadership roles if they wish.

Hopefully, you're feeling more empowered to say no, set and enforce rules, and take breaks when you need them. In the next section, we'll talk about how you can leverage your community to grow a sustainable project.

## Further reading

* [Be Cordial or Be on Your Way](http://www.kennethreitz.org/essays/be-cordial-or-be-on-your-way) by @kennethreitz
* [A Plea for Better Open Source Etiquette](https://blog.quickpeople.co.uk/2013/04/14/a-plea-for-better-open-source-etiquette/) by @benilovj
* [How to be an open source gardener](http://words.steveklabnik.com/how-to-be-an-open-source-gardener) by @steveklabnik
* [Kindly Closing Pull Requests](https://github.com/blog/2124-kindly-closing-pull-requests) by @MikeMcQuaid
* [My condolences, you're now the maintainer of a popular open source project](https://runcommand.io/2016/06/26/my-condolences-youre-now-the-maintainer-of-a-popular-open-source-project/) by @danielbachhuber
* [Handling Large OSS Projects Defensively](http://artsy.github.io/blog/2016/07/03/handling-big-projects/) by @orta
