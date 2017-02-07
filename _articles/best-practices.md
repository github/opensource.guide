---
title: Best Practices for Maintainers
description: How to make your life easier as an open source maintainer, from documenting processes to leveraging your community.
---

If you maintain an open source project that a lot of people use, you may have noticed a lot of your work is administrative: triaging issues, responding to questions, managing a roadmap.

While these tasks can be less fun than coding or writing, there are ways to make your life easier, from documenting processes to leveraging your community.

## Documenting your processes

Writing documentation is one of the most important things you can do as a maintainer. Documentation not only clarifies your own thinking, but it helps other people understand what you need or expect, before they even ask. Even if you don't use full paragraphs, jotting down bullet points is better than not writing at all.

These types of exercises may seem trivial, but the more you know yourself and your limits (not just abilities!), the easier it is to say no when something doesn't fit into your scope, or you feel overwhelmed by requests. Defining your project's scope also makes closing pull requests with "scope creep" easier.

### Write down your project's vision

Start by writing down the goals of your project. Add them to your README. If there are other artifacts that could help, like a project roadmap, make those public as well.

@lord discovered that having a project vision helped him figure out which requests to spend time on. As a new maintainer, [he regretted](https://lord.io/blog/2014/oss-tips/) not sticking to his project's scope when he got his first feature request for [Slate](https://github.com/lord/slate):

> I fumbled it. I didn't put in the effort to come up with a complete solution. Instead of an half-assed solution, I wish I had said "I don't have time for this right now, but I'll add it to the long term nice-to-have list."

### Write down your policies

Policies are your chance to explain how you want to manage your project. They prevent you from getting dragged into doing things you don't want to do. Some examples of rules that are worth writing down:

* How a contribution is reviewed and accepted
* The types of contributions you'll accept
* How long someone should expect for you to respond, and when it's appropriate to follow up (ex. _"You can expect a response from maintainers within 7 days. If you haven't heard anything by then, feel free to ping the thread."_)
* How people can (and can't) contact you
* How much time you spend on the project (ex. _"I only work on this project on weekends"_ or _"I spend 10 percent of my employer's time on this project, usually Wednesdays through Fridays"_)

Rules can be nerve-wracking to write down. Sometimes you might feel like you're policing other people's behavior or killing all the fun. Written and enforced fairly, however, good rules empower maintainers.

## Communicate your expectations

For example, as a maintainer, you might promise to acknowledge every contribution, even if you don't accept them. You might ask contributors to promise that their code passes all tests before they submit it.

[Jekyll](https://github.com/jekyll/jekyll/tree/master/docs), [CocoaPods](https://github.com/CocoaPods/CocoaPods/wiki/Communication-&-Design-Rules), and [Homebrew](https://github.com/Homebrew/brew/blob/bbed7246bc5c5b7acb8c1d427d10b43e090dfd39/docs/Maintainers-Avoiding-Burnout.md) are several examples of projects that have ground rules for maintainers and contributors.

### Keep communication public

Don't forget to document your interactions, too. Wherever you can, keep communication about your project public. If somebody tries to contact you privately to discuss a feature request or support need, politely direct them to a public communication channel, such as a mailing list or issue tracker.

If you meet with other maintainers, or make a major decision in private, be sure to write about these conversations in public, even if it's just posting your notes. That way, anybody who joins your community will have access to the same information as someone who's been there for years.

### Be transparent about your circumstances

Most people who come across your project don't know anything about you or your circumstances. They may even think that you get paid to work on the project, especially if it's something they regularly use and depend on.

Maybe at one point you put a lot of time into your project, but now circumstances have changed. You're juggling a new family and a full-time job, and you just don't have that much time to spend on open source work anymore. That's perfectly okay! Make sure other people know what's changed.

If maintaining your project is part-time or purely volunteered, be honest about how much time you have. This is not the same as how much time you think the project requires, or how much time others want you to spend.

Write your time constraints directly into your README, and make them public so others understand your priorities, too. You can even explain exactly how many hours, or which days, you spend on the project per week. If your project is completely unmaintained or a low priority in your life, tell people that, too.

[PhantomJS](https://github.com/ariya/phantomjs) used Issues to [communicate the time constraints](https://github.com/ariya/phantomjs/issues/14541) of their maintainers:

> The team behind PhantomJS (@ariya @Vitallium @zackw and other occasional contributors) is committed, yet we remain a small team. None of us is paid to work on PhantomJS, thus we carry out the contribution during our spare time. For the sake of discussion, let's say that our estimated total effort is 4 hours/week.

## Learning to say no

You've written down your rules. Ideally, everybody would read your documentation, but in reality, you will probably have to remind others that this knowledge exists.

Having everything written down, however, helps depersonalize situations when you do need to enforce your rules. Saying no isn't fun, but  _"Your contribution doesn't match this project's criteria"_ feels less personal than _"I don't like your contribution"_.

Saying no applies to many situations you'll come across as a maintainer: feature requests that don't fit the scope, someone derailing a discussion, doing unnecessary work for others.

### Keep the conversation friendly

One of the most important places you'll practice saying no is on your issue and pull request queue. As a project maintainer, you'll inevitably receive suggestions that you don't want to accept. Maybe the contribution changes your project's scope or doesn't match your vision. Maybe the idea is good, but the implementation is poor.

Regardless of the reason, it is possible to tactfully handle contributions that don't meet your project's standards.

If you receive a contribution you don't want to accept, your first reaction might be to ignore it or pretend you didn't see it. Doing so could hurt the other person's feelings and even demotivate other potential contributors in your community.

> If you or your company are keen to benefit from community contributions, a bunch of unacknowledged year-old PRs lying around probably isn't the best way to achieve that. - @benilovj, ["A Plea for Better Open Source Etiquette"](https://blog.quickpeople.co.uk/2013/04/14/a-plea-for-better-open-source-etiquette/)

Don't leave an unwanted contribution open because you feel guilty or want to be nice. Firstly, over time, your unanswered issues and PRs will accumulate and make working on your project feel that much more stressful and intimidating. It's better to immediately close the contributions you know you don't want to accept. (If your project already suffers from a large backlog, @steveklabnik has suggestions for [how to triage those issues efficiently](http://words.steveklabnik.com/how-to-be-an-open-source-gardener).)

Secondly, contributing to an open source project can be intimidating, especially if it's someone's first time. Even if you don't accept their contribution, be sure to respond to their submission. Acknowledge the person behind it and thank them for their interest. It's a big compliment!

If you don't want to accept the contribution, explain why and offer clear suggestions for improvement, if you're able. Be kind, but firm. Thank them for their contribution and explain why it doesn't fit into the scope of the project. Link to relevant documentation, if you have it. Then close the request.

For example, when a user of [celery](https://github.com/celery/celery/) reported a Windows-related error, @berkerpeksag [responded with](https://github.com/celery/celery/issues/3383):

![celery screenshot](/assets/images/sustaining/celery.png)

If you notice repeated requests for things you don't want to accept, consider adding them into your contribution policy or modifying your project's scope, so you don't have to keep repeating yourself.

If the thought of saying no terrifies you, you're not alone. As @jessfraz [put it](https://blog.jessfraz.com/post/the-art-of-closing/):

> I've talked to maintainers from several different open source projects, Mesos, Kubernetes, Chromium, and they all agree one of the hardest parts of being a maintainer is saying "No" to patches you don't want.

Don't feel guilty about not wanting to accept someone's contribution. The first rule of open source, [according to](https://twitter.com/solomonstre/status/715277134978113536) @shykes: _"No is temporary, yes is forever."_ While empathizing with another person's enthusiasm is a good thing, rejecting a contribution is not the same as rejecting the person behind it. Ultimately, if a contribution isn't good enough, remember that you are under no obligation to accept it. Be kind and responsive when people contribute to your project, but only accept changes that you truly believe will make your project better. The more often you practice saying no, the easier it becomes. Promise.

### Be proactive

To reduce the volume of unwanted contributions in the first place, explain your project's process for submitting and accepting contributions in your contributing guide. Many projects specify that if someone is proposing a major change, that they open an issue first before doing any work. This approach reduces the chance that someone will put in many wasted hours of work into a pull request that you aren't going to accept. And, if someone does make an unexpected pull request, you can point to your policy and explain that major changes need to be discussed first.

> Ideally, explain to them and in a CONTRIBUTING.md file how they can get a better indication in the future on what would or would not be accepted before they begin the work. - @mikemcquaid, ["Kindly Closing Pull Requests"](https://github.com/blog/2124-kindly-closing-pull-requests)

Sometimes, when you say no, your potential contributor may get upset or criticize your decision. If their behavior becomes hostile, take steps to diffuse the situation or even remove them from your community, if they're not willing to collaborate constructively.

> When you find yourself repeatedly dealing with a troll, there is no shame in permanently shedding the negativity by blocking the user completely. Moreover, you are under no obligation to explain yourself to the user. - @jonschlinkert, ["Maintainer's Guide to Staying Positive"](https://github.com/jonschlinkert/maintainers-guide-to-staying-positive)

### Embrace mentorship

Maybe someone in your community regularly submits contributions that don't meet your project's standards. It can be frustrating for both parties to repeatedly go through rejections.

If you see that someone is enthusiastic about your project, but needs a bit of polish, be patient. Explain clearly in each situation why their contributions don't meet the expectations of the project. Try pointing them to an easier or less ambiguous task, like an issue marked _"good first bug,"_ to get their feet wet. If you have time, you can even mentor them through their first contribution, or find someone else in your community who might be willing to mentor them.

## Leverage your community

You don't have to do everything yourself. Your project's community exists for a reason! Even if you don't yet have an active contributor community, if you have a lot of users, put them to work.

### Share the workload

If your project has other regular contributors, ask them for help in reducing your workload. Recognize regular contributors and formalize their roles in your project. Make it clear early on in your CONTRIBUTING file how others can grow into leadership roles if they wish.

For example, Jekyll is experimenting with the idea of [affinity team captains](https://github.com/jekyll/jekyll/pull/5273) to triage issues and review pull requests. Affinity teams help distribute the work, while captains ensure that someone is responsible and decisions are made efficiently.

If you're looking for others to pitch in, start by asking around. @vishnubob added a "Help Needed" section to the README of his project, [wait-for-it](https://github.com/vishnubob/wait-for-it#help-needed), once the work became more than he could handle:

> Hi there! I wrote wait-for-it in order to help me orchestrate containers I operate at my day job. I thought it was a neat little script, so I published it. I assumed I would be its only user, but that's not what happened! wait-for-it has received more stars then all of my other public repositories put together. I had no idea this tool would solicit such an audience, and I was equally unprepared to carve out the time required to address my user's issues and patches. I would like to solicit a volunteer from the community who would be willing to be a co-maintainer of this repository.

If you need to step away from your project, either on hiatus or permanently, there's no shame in asking someone else to take over for you. If other people are enthusiastic about its direction, give them commit access or formally hand over control to someone else. If someone forked your project and is actively maintaining it elsewhere, consider linking to the fork from your original project. It's great that so many people want your project to live on!

@progrium [found that](http://progrium.com/blog/2015/12/04/leadership-guilt-and-pull-requests/) documenting the vision for his project, [Dokku](https://github.com/dokku/dokku), helped those goals live on even after he stepped away from the project:

> I wrote a wiki page describing what I wanted and why I wanted it. For some reason it came as a surprise to me that the maintainers started moving the project in that direction! Did it happen exactly how I'd do it? Not always. But it still brought the project closer to what I wrote down.

### Let others build the solutions they need

> I cater to the 80% use case. If you are one of the unicorns, please fork my work. I won't get offended! My public projects are almost always meant to solve the most common problems; I try to make it easy to go deeper by either forking my work or extending it. - @geerlingguy, ["Why I Close PRs"](https://www.jeffgeerling.com/blog/2016/why-i-close-prs-oss-project-maintainer-notes)

If a potential contributor has a different opinion on what your project should do, you may want to gently encourage them to work on their own fork.

Forking a project doesn't have to be a bad thing. Being able to copy and modify projects is one of the best things about open source. Encouraging your community members to work on their own fork can provide the creative outlet they need, without conflicting with your project's vision.

The same applies to a user who really wants a solution that you simply don't have the bandwidth to build. Offering APIs and customization hooks can help others meet their own needs, without having to modify the source directly. @orta [describes his strategy](http://artsy.github.io/blog/2016/07/03/handling-big-projects/) for building open source "defensively" in the iOS ecosystem:

> It's almost inevitable that once a project becomes big, maintainers have to become a lot more conservative about how they introduce new code. You become good at saying "no", but a lot of people have legitimate needs. So, instead you end up converting your tool into a platform.
>
> Some of the most interesting ideas in the CocoaPods ecosystem come from plugins.
>
> I wanted plugins to be a first class citizen within Danger from day one. It's in the VISION file, and it's applied into how I've designed a lot of the user-facing site. I was torn after a few months of development where things should go. Now the core of Danger is built as plugins.

## Bring in the robots

Just as there are tasks that other people can help you with, there are also tasks that no human should ever have to do. Robots are your friend. Use them to make your life as a maintainer easier.

### Require tests and other checks to improve the quality of your code

One of the most important ways you can automate your project is by adding tests. Tests help contributors feel confident that they won't break anything. They also make it easier for you to review and accept contributions quickly. The more responsive you are, the more engaged your community can be.

Set up automatic tests that will run on all incoming contributions, and ensure that your tests can easily be run locally by contributors. Require that all code contributions pass your tests before they can be submitted. You'll help set a minimum standard of quality for all submissions. If you add tests, make sure to explain how they work in your CONTRIBUTING file.

### Use tools to automate basic maintenance tasks

The good news about maintaining a popular project is that other maintainers have probably faced similar issues! There are a [variety of tools available](https://github.com/integrations) to help automate some aspects of maintenance work. A few examples:

* [Greenkeeper](https://github.com/greenkeeperio/greenkeeper) monitors your project's dependencies
* [Coveralls](https://coveralls.io/) checks for test coverage
* [mention-bot](https://github.com/facebook/mention-bot) automatically mentions potential reviewers for pull requests
* [PullApprove](https://about.pullapprove.com/) helps you manage pull requests
* [semantic-release](https://github.com/semantic-release/semantic-release) automates your releases

@KrauseFx uses a bot to manage issues on his project, [fastlane](https://github.com/fastlane/fastlane):

> The key to handle support for large-scale open source projects is to keep issues moving. Having a bot can ensure that issues are still relevant and reproducible. The fastlane-bot automatically asks if an issue is still relevant with the most recent fastlane release after just 2 months. If no participant of the issue replies to the bot within a month, the issue gets auto-closed. About a month after closing the issue, the bot locks the conversation to repository admins only.

For bug reports and other common contributions, GitHub has [Issue Templates and Pull Request Templates](https://github.com/blog/2111-issue-and-pull-request-templates), which you can create to streamline the communication you receive. You can also set up [email filters](https://github.com/blog/2203-email-updates-about-your-own-activity) to manage your email notifications.

If you want to get a little more advanced, style guides and linters can standardize project contributions and make them easier to review and accept. However, if your standards are too complicated, they can increase the barriers to contribution, so make sure you're only adding enough rules to make everyone's lives easier.

> There's a fine line between using labels well and overusing them. When there's too many or the system is too complex, people will just ignore them. - @pazdera, ["How to use Github issues to attract new contributors"](http://radek.io/2015/08/24/github-issues/)

If you're not sure which tools to use, sometimes it helps to look at what other popular projects do, especially those in your ecosystem. For example, what does the contribution process look like for other Node modules? Using similar tools and approaches will also make your process more familiar to potential contributors.

## It's okay to hit pause

Open source work once brought you joy. Maybe now it's starting to make you feel avoidant or guilty. Perhaps you're feeling overwhelmed or a growing sense of dread when you think about your projects. And meanwhile, the issues and pull requests pile up.

Burnout is a real and pervasive issue in open source work, especially among maintainers. As a maintainer, your happiness is a non-negotiable requirement for the survival of any open source project.

Although it should go without saying, take a break! You shouldn't have to wait until you feel burned out to take a vacation. Just like any other type of work, taking regular breaks will keep you refreshed, happy, and excited about your work. For example, @brettcannon, a Python core developer, decided to take [a month-long vacation](http://www.snarky.ca/why-i-took-october-off-from-oss-volunteering) after 14 years of volunteer OSS work.

Sometimes, it can be hard to take a break from open source work when it feels like everybody needs you. People may even try to make you feel guilty for stepping away.

Do your best to find support for your users and community while you're away from a project. If you can't find the support you need, take a break anyway. Be sure to communicate when you're not available, so people aren't confused by your lack of responsiveness.

Taking breaks applies to more than just vacations, too. If you don't want to do open source work on weekends, or during work hours, communicate those expectations to others, so they know not to bother you.

> In maintaining WP-CLI, I've discovered I need to make myself happy first, and set clear boundaries on my involvement. The best balance I've found is 2-5 hours per week, as a part of my normal work schedule. This keeps my involvement a passion, and from feeling too much like work. Because I prioritize the issues I'm working on, I can make regular progress on what I think is most important. - @danielbachhuber, ["My condolences, you're now the maintainer of a popular open source project"](https://runcommand.io/2016/06/26/my-condolences-youre-now-the-maintainer-of-a-popular-open-source-project/)
