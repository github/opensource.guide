---
title: Best Practices for Maintainers
next: sustaining/healthy-communities.md
---

In this handbook, we spend plenty of time talking about how to make other people happy. But first and foremost, make yourself happy. Your happiness and health are the most important requirements of open source work. Without them, nothing else matters.

As you've probably noticed, a major part of maintaining an active open source project is managing other people. While that can be a lot less fun than coding or writing, there are things you can do to make your life easier.

In this section, we'll talk about how to set up your projects in a way that helps you maintain your sanity.

## Know yourself and your needs

Remember way back, before you launched your project, [when you wrote down](../../getting-started/setting-expectations) your expectations? It's time to revisit that document now. Remind yourself why you're doing this work and what you want to get out of open sourcing your project. Has anything changed?

Be honest with yourself about how much time you have to spend on your project. This is not the same as how much time you think the project requires, or how much time you think others want you to spend on your project. Write down your time constraints, and make it public so others understand your priorities, too.

Write down your project's vision and, where possible, make that vision transparent to others. Your vision is your North Star, guiding you when you feel overwhelmed by others' requests, and helping you reset your priorities. Add it to your README. If there are related artifacts that you think could help, like a project roadmap, make those public as well.

@lord discovered that having a project vision helped him figure out which requests he should spend time on. As a new maintainer, he regretted not sticking to his project's scope when he got his first feature request for [Slate](https://github.com/lord/slate):

> I fumbled it. I didn't put in the effort to come up with a complete solution. Instead of an half-assed solution, I wish I had said "I don't have time for this right now, but I'll add it to the long term nice-to-have list."[^1]

[^1]: [Tips for New Open Source Maintainers](https://lord.io/blog/2014/oss-tips/) by @lord

These types of exercises may seem trivial, but the more you know yourself and your limits (not just abilities!), the easier it is to say no to things that don't fit into your scope.

## Write down your rules

Rules can be nerve-wracking to write down. Sometimes you might feel like you're policing other people's behavior or killing all the fun.

Done right, however, good rules empower maintainers. Rules are your chance to explain how you want to manage your project. They help prevent you from getting dragged into doing things you don't want to do. And the more guidelines you write down (and enforce fairly), the more people can understand your perspective without you having to explain yourself.

Some examples of rules you may want to write down:

* How a contribution is reviewed and accepted

* The types of contributions you will or won't accept

* How long someone should expect for you to respond, and when it's appropriate to follow up (ex. "You can expect a response from maintainers within 7 days. If you haven't heard anything by then, feel free to ping the same thread.")

* How people can (and can't) contact you

* How much time you spend on the project (for example: "I only work on this project on weekends" or "I spend 10 percent of my employer's time on this project, usually Wednesdays through Fridays")

## Learn to say no

The first rule of open source, according to @shykes: _"No is temporary, yes is forever."_[^2] If you plan on maintaining open source projects for a long time, it's never too early to practice saying no.

[^2]: [tweet from @solomonstre](https://twitter.com/solomonstre/status/715277134978113536)

Saying no applies to many situations you'll come across as a maintainer. You can say no to feature requests that don't fit the scope of your project. You can say no, or refuse to engage, when someone derails a conversation on a mailing list. You can say no to doing work for others that you don't find important.

One of the most important places you'll practice saying no is on your your issue and pull request queue.  If someone suggests an idea that you know you won't accept, don't leave it open because you feel guilty or want to be nice. Be kind, but firm. Thank them for their contribution and explain why it doesn't fit into the scope of the project. Then close the request.

If you notice repeated requests for things you don't want to accept, consider adding them into your contribution policy, so you don't have to keep repeating yourself.

If the thought of saying no terrifies you, you're not alone. As @jfrazelle put it: _"I've talked to maintainers from several different open source projects, Mesos, Kubernetes, Chromium, and they all agree one of the hardest parts of being a maintainer is saying "No" to patches you don't want."_ [^3] But the more often you practice saying no, the easier it becomes. Promise.

[^3]: [The Art of Closing](https://blog.jessfraz.com/post/the-art-of-closing/) by @jfrazelle

## Keep communication public

Wherever you can, keep communication about your project public. If somebody tries to contact you privately to discuss a feature request or support need, politely direct them to a public communication channel, such as a mailing list or issue tracker.

It's tempting to respond to private communication, especially early in the life of a project. Resist the temptation. Keeping communication public means less work for you personally. It also opens up opportunities for other people to learn and participate.

Notable exceptions to this practice are: 1) security issues and 2) sensitive code of conduct violations. You should always have a way for people to report these types of issues privately. If you don't want to use your personal communication channels, set up a separate email address for this purpose.

## Automate your work

The good news about maintaining a popular open source project is that other maintainers have probably struggled with similar issues. There are a variety of tools available to help automate your work. For example:

* [Greenkeeper](https://github.com/greenkeeperio/greenkeeper) monitors your project's dependencies

* [Coveralls](https://coveralls.io/) checks for test coverage

* [Vossibility](https://github.com/icecrime/vossibility-stack) pulls stats on your project

* [mention-bot](https://github.com/facebook/mention-bot)automatically mentions potential reviewers for pull requests

* [PullApprove](https://about.pullapprove.com/) helps you manage pull requests

One of the most important ways you can automate your project is by adding tests. Tests help contributors feel confident that they won't break anything. They also make it easier for you to review and accept contributions quickly. The more responsive you are, the more engaged your community can be. If you add tests to your project, make sure to explain how they work in your CONTRIBUTING.md file.

For bug reports and other common contributions, GitHub has [Issue Templates and Pull Request Templates](https://github.com/blog/2111-issue-and-pull-request-templates), which you can create to streamline the communication you receive.

If you want to get a little more advanced, style guides and linters can help standardize project contributions and make them easier to review and accept. However, if your standards are too complicated, they can increase the barriers to contribution, so proceed carefully here and make sure you're only adding just enough rules to make everyone's lives easier.

Hopefully, you're feeling more empowered to say no, set and enforce rules, and take breaks when you need them. In the next section, we'll talk about how you can leverage your community to grow a sustainable project.

## Further reading

* [Be Cordial or Be on Your Way](http://www.kennethreitz.org/essays/be-cordial-or-be-on-your-way) by @kennethreitz
* [A Plea for Better Open Source Etiquette](https://blog.quickpeople.co.uk/2013/04/14/a-plea-for-better-open-source-etiquette/) by @benilovj
* [How to be an open source gardener](http://words.steveklabnik.com/how-to-be-an-open-source-gardener) by @steveklabnik
* [Kindly Closing Pull Requests](https://github.com/blog/2124-kindly-closing-pull-requests) by @MikeMcQuaid
* [My condolences, you're now the maintainer of a popular open source project](https://runcommand.io/2016/06/26/my-condolences-youre-now-the-maintainer-of-a-popular-open-source-project/) by @danielbachhuber
* [Handling Large OSS Projects Defensively](http://artsy.github.io/blog/2016/07/03/handling-big-projects/) by @orta
