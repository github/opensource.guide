---
title: Building a community
following: _articles/marketing/measuring.md
more:
- title: Growing the community around your open-source project
  href: http://radek.io/2015/10/12/marketing-for-open-source-projects-5/
  by: "@pazdera"
- title: Welcoming Communities
  href: http://hood.ie/blog/welcoming-communities.html
  by: "@gr2m"
- title: Building Popular Projects
  href: https://ashfurrow.com/blog/building-popular-projects/
  by: "@ashfurrow"
- title: What makes a good community?
  href: http://sarah.thesharps.us/2015/10/06/what-makes-a-good-community/
  by: "@sarahsharp"
- title: Lowering the barriers
  href: https://the-pastry-box-project.net/charlotte-spencer/2015-september-16
  by: "@charlotteis"
- title: First Timers Only
  href: https://medium.com/@kentcdodds/first-timers-only-78281ea47455#.f0i87x7us
  by: "@kentcdodds"
---

You've launched your project, you're spreading the word, and people are checking out your project. Awesome! Now, how do you get them to stick around? There are all sorts of ways to encourage people to use, contribute to, and evangelize your project.

* TOC
{:toc}

## Give your community a place to congregate

There are two reasons to give your community a place to congregate.

The first reason is for them. People with common interests will inevitably want a place to talk about it. And when communication is public and accessible, anybody can read past archives to get up to speed and new people will feel more comfortable participating. Helping people forge connections with each other builds a stronger and more resilient community.

The second reason is for you. If you don't give people a public place to talk about your project, they will likely contact you directly. In the beginning, it may seem easy enough to respond to private messages "just this once". But over time, especially if your project becomes popular, you will feel exhausted. Resist the temptation to communicate with people about your project in private. Instead, direct them to a designated public channel.

If your project is on GitHub, public communication can be as simple as directing people to use [GitHub Issues](https://guides.github.com/features/issues/) instead of emailing you directly. You could also set up a mailing list (such as [Google Groups](https://groups.google.com/forum/#!overview)) or create a Twitter account, Slack, or IRC channel for people to talk about your project. Or try all of the above!

Notable exceptions to public communication are: 1) security issues and 2) sensitive code of conduct violations. You should always have a way for people to report these issues privately. If you don't want to use your personal communication channels, set up a separate email address for this purpose.

## Make people feel welcome

A welcoming community is an investment into your project's future and reputation. When someone new lands on your project, make sure to thank them for their interest! Show them around and help them get started. Point them to resources, like onboarding materials or past mailing list threads, that you think might be helpful. It only takes one negative experience to make someone not want to come back.

![django new contributors page](/assets/images/marketing/django_new_contributors.png)

## Document everything

When you start an open source project, it may feel natural to keep your ideas and workflows private. But open source projects thrive when you [document your process](http://www.writethedocs.org/) in public. That way, more people can participate at every step of the way. Not only will they know _what_ to contribute, but they'll also know _how_. You might get help on something you didn't even know you needed.

Documenting your open source project means more than just technical documentation. Be transparent about your project's roadmap, your timeline for completing new features, the types of contributions you're looking for, how contributions are reviewed and accepted, or why you made certain decisions. If there are certain types of contributions that you won't accept, explain so in your CONTRIBUTING.md file. If you get frequent questions or notice users running into the same problem, document the answers in the README. Any time you feel the urge to write something down or privately discuss your project, ask yourself whether you can make it public. For meetings, consider publishing your notes or takeaways in a relevant issue. The feedback you'll get from this level of transparency may surprise you.

Writing things down isn't just for meetings and technical documentation, either. If you're working on a substantial update to your project, put it into a pull request and mark it as a work in progress (WIP). That way, other people can feel involved in the process early on.

## Be responsive

As you promote your project, people will probably have feedback and ideas for you. They may request support or functionality, have questions about how things work, or need help getting started.

Try to be responsive when someone files an issue, submits a pull request, or asks a question about your project. When you respond quickly, people will feel they are part of a dialogue, and they'll be more enthusiastic about participating.

Even if you can't review the request immediately, acknowledging it early helps increase engagement. Here's how @tdreyno responded to a pull request on [Middleman](https://github.com/middleman/middleman/pull/1466):

![middleman pull request](/assets/images/marketing/middleman_pr.png)

When Mozilla studied its community and engagement in 2014, [they found that](https://docs.google.com/presentation/d/1hsJLv1ieSqtXBzd5YZusY-mB8e1VJzaeOmh8Q4VeMio/edit#slide=id.g43d857af8_0177) contributors who received code reviews within 48 hours had a much higher rate of return and repeat contribution.

Conversations about your project could also be happening in other places around the internet, such as Stack Overflow, Twitter, or Reddit. You can set up notifications in some of these places so you are alerted when someone mentions your project.

## Make it easy for people to use and contribute

One way to think about your project's community is what @MikeMcQuaid calls the [contributor funnel](https://speakerdeck.com/mikemcquaid/the-open-source-contributor-funnel):

![contributor funnel](/assets/images/marketing/contributor_funnel_mikemcquaid.png)

As you build your community, consider how someone at the top of the funnel (a potential user) might theoretically make their way to the bottom (an active maintainer). Your goal is to reduce friction at each stage of the contributor experience. When people have easy wins, they will feel incentivized to do more.

Start by making it easy for someone to use your project. Tutorials, clear code examples, good documentation, and a friendly README will make it easier for anyone who lands on your project to grasp its value and get started. Don't forget to document processes for non-code contributions as well, such as triaging, community management, or design.

For casual or first-time contributors, be open-minded about the types of contributions you'll accept. Your pool of contributors includes much more than just developers. Many contributors start with a bug report or small fix. A new contributor might write a tutorial or improve your project's documentation, because newer users notice things that more experienced users might not. Let people help how they want to help.

If there's a contribution you disagree with, thank them for their idea and [explain why](../../troubleshooting/contributions/) it doesn't fit into the scope of the project. Link to existing documentation on the types of contributions you are looking for and encourage them to stay involved.
