---
title: Feeling guilty or burned out
more:
- title: Leadership, Guilt, and Pull Requests
  href: http://progrium.com/blog/2015/12/04/leadership-guilt-and-pull-requests/
  by: "@progrium"
- title: Why I Haven't Fixed Your Issue Yet
  href: https://archive.is/j8zAk
  by: "@michaelbromley"
- title: The Open Source Maintainer's Dilemma
  href: https://publicobject.com/2016/05/03/the-open-source-maintainers-dilemma/
  by: "@swankjesse"
- title: Software Maintenance and Self-Restraint
  href: https://ariya.io/2013/01/software-maintenance-and-self-restraint/
  by: "@ariya"
---

Open source work once brought you joy. Maybe now it's starting to make you feel avoidant or guilty. Perhaps you're feeling overwhelmed or a growing sense of dread when you think about your projects. And meanwhile, the issues and pull requests pile up.

Burnout is a real and pervasive issue in open source work, especially among maintainers. Let's talk about how to make things better.

* TOC
{:toc}

## Clearly communicate your limits

Most people who come across your project don't know anything about you or your circumstances. They may even think that you get paid to work on the project, especially if it's something they regularly use and depend on.

Maybe at one point you put a lot of time into your project but now circumstances have changed. You're juggling a new family and a full-time job, and you just don't have that much time to spend on open source work anymore. That's perfectly okay! Make sure other people know what's changed.

Write your time constraints directly into your README. [Say no to contributions](../contributions/) you don't want to accept. If your time is purely volunteered, make sure that people are aware of your circumstances. You can even tell them exactly how many hours, or which days, you spend on the project per week. If your project is completely unmaintained or a low priority in your life, tell people that, too. [Cultivating best practices](../../sustaining/best-practices/) as a maintainer will help you protect your boundaries.

[PhantomJS](https://github.com/ariya/phantomjs) used Issues to [communicate the time constraints](https://github.com/ariya/phantomjs/issues/14541) of their maintainers:

> The team behind PhantomJS (@ariya @Vitallium @zackw and other occasional contributors) is committed, yet we remain a small team. None of us is paid to work on PhantomJS, thus we carry out the contribution during our spare time. For the sake of discussion, let's say that our estimated total effort is 4 hours/week.

## Write an agreement for maintainers and contributors

If you haven't noticed by now, the more you write down, the easier your life will be. One thing you may want to consider writing down are ground rules and expectations for maintainers (and contributors!). Think of it as an extension of your code of conduct.

For example, as a maintainer, you might promise to acknowledge every contribution, even if you don't accept them. You might ask contributors to promise that their code passes all tests before they submit it.

[Jekyll](https://github.com/jekyll/jekyll/tree/master/docs), [CocoaPods](https://github.com/CocoaPods/CocoaPods/wiki/Communication-&-Design-Rules), and [Homebrew](https://github.com/Homebrew/brew/blob/bbed7246bc5c5b7acb8c1d427d10b43e090dfd39/docs/Maintainers-Avoiding-Burnout.md) are several examples of projects that have ground rules for maintainers and contributors.

## Don't forget to take breaks

Although it should go without saying, take a vacation! Sometimes it can be hard to take a break from open source work when it feels like everybody needs you. People may even try to make you feel guilty for stepping away.

Do your best to find support for your users and community while you're away from a project. If you can't find the support you need, take a break anyway. Be sure to communicate when you're not available, so people aren't confused by your lack of responsiveness.

Taking breaks applies to more than just vacations, too. If you don't want to do open source work on weekends, or during work hours, communicate those expectations to others, so they know not to bother you.

## Let others build the solutions they need

Sometimes, someone who uses your project really wants a solution that you simply don't have the bandwidth to build. Offering APIs and customization hooks can help others meet their own needs, without having to modify the source directly. @orta [describes his strategy](http://artsy.github.io/blog/2016/07/03/handling-big-projects/) for building open source "defensively" in the iOS ecosystem:

> It's almost inevitable that once a project becomes big, maintainers have to become a lot more conservative about how they introduce new code. You become good at saying "no", but a lot of people have legitimate needs. So, instead you end up converting your tool into a platform.
>
> Some of the most interesting ideas in the CocoaPods ecosystem come from plugins.
>
> I wanted plugins to be a first class citizen within Danger from day one. It's in the VISION file, and it's applied into how I've designed a lot of the user-facing site. I was torn after a few months of development where things should go. Now the core of Danger is built as plugins.

## Share the workload

If your project has other regular contributors, don't be afraid to ask them for help in reducing your workload. For example, Jekyll is experimenting with the idea of [affinity team captains](https://github.com/jekyll/jekyll/pull/5273) to triage issues and review pull requests. Affinity teams help distribute the work, while captains ensure that someone is responsible and decisions are made efficiently.

If you're looking for others to pitch in, start by asking around. @vishnubob added a "Help Needed" section to the README of his project, [wait-for-it](https://github.com/vishnubob/wait-for-it#help-needed), once the work became more than he could handle:

> Hi there! I wrote wait-for-it in order to help me orchestrate containers I operate at my day job. I thought it was a neat little script, so I published it. I assumed I would be its only user, but that's not what happened! wait-for-it has received more stars then all of my other public repositories put together. I had no idea this tool would solicit such an audience, and I was equally unprepared to carve out the time required to address my user's issues and patches. I would like to solicit a volunteer from the community who would be willing to be a co-maintainer of this repository.

If you need to step away from your project, either on hiatus or permanently, there's no shame in asking someone else to take over for you. If other people are enthusiastic about its direction, give them commit access or formally hand over control to someone else. If someone forked your project and is actively maintaining it elsewhere, consider linking to the fork from your original project. It's a compliment that so many people want your project to live on!
