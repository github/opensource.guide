---
title: Open Source Metrics
description: Cupcake ipsum dolor. Sit amet fruitcake lollipop toffee. Sweet roll muffin cupcake jelly liquorice I love muffin. Croissant I love sweet roll. Chupa chups lemon drops halvah fruitcake. Croissant pie dessert sesame snaps bear claw liquorice I love.
more:
- title: Measuring Success in an Open Source Project
  href: http://blog.smartbear.com/news/measuring-success-in-an-open-source-project/
  by: "@sjvn"
- title: Using Pirate Metrics to measure success of open source projects
  href: https://opensource.com/business/16/6/pirate-metrics
  by: "@gfachler"
- title: The Open Source Contributor Funnel
  href: https://speakerdeck.com/mikemcquaid/the-open-source-contributor-funnel
  by: "@MikeMcQuaid"
- title: The shape of open source
  href: https://github.com/blog/2195-the-shape-of-open-source
  by: "@arfon"
- title: Libraries.io
  href: http://libraries.io
  by: "@andrew"
---

Your project is starting to grow. 🌱  Well, you think it's growing. Is it growing? Let's talk about how to measure and track the success of your open source project.

## Why measure anything?

Data, when used wisely, can help you make better decisions as an open source maintainer. For example, data can help you:

* Understand how users respond to a new feature
* Figure out where new users come from
* Convey your project’s popularity
* Raise money from sponsorships

@mikemcquaid explained [Homebrew’s decision](https://github.com/Homebrew/brew/blob/bbed7246bc5c5b7acb8c1d427d10b43e090dfd39/docs/Analytics.md) to use Google Analytics as such:

> Homebrew is provided free of charge and run entirely by volunteers in their spare time. As a result, we do not have the resources to do detailed user studies of Homebrew users to decide on how best to design future features and prioritise current work. Anonymous aggregate user analytics allow us to prioritise fixes and features based on how, where and when people use Homebrew.

On the other hand, popularity isn't everything. Everybody gets into open source for different reasons. If your goal as an open source maintainer is to show off your work, be transparent about your code, or just have fun, metrics may not be important to you.

If you _are_ interested in understanding your project on a deeper level, the following metrics will help you analyze your work.

## Discovery

Before anybody can use or contribute back to your project, they need to know it exists. The first question you'll want to ask yourself, then, is: _are people finding my project?_

![traffic graph](/assets/images/marketing/repo_traffic_graphs_tooltip.png)

If your project is hosted on GitHub, [you can view](https://help.github.com/articles/about-repository-graphs/#traffic) how many people land on your project and where they come from. From your project's page, click "Graphs", then "Traffic". On this page, you can see:

* **Total pageviews:** Tells you how many times your project was viewed

* **Total unique visitors:** Tells you how many people viewed your project

* **Referring sites:** Tells you where visitors came from. This metric can help you figure out where to reach your audience and whether your promotion efforts are working.

* **Popular content:** Tells you where visitors go on your project, broken down by pageviews and unique visitors.

[GitHub stars](https://github.com/blog/1204-notifications-stars) can also help provide a baseline measure of popularity. While GitHub stars don't necessarily correlate to downloads and usage, they can tell you how many people are taking notice of your work.

You may also want to track discoverability in specific places: for example, Google PageRank, referral traffic from your project's website, or referrals from other open source projects or websites.

## Use

People are finding your project on this wild and crazy thing we call the internet. Ideally, when they see your project, they'll feel compelled to do something. The second question you'll want to ask is: _are people using my project?_

If you use a package manager, such as npm or RubyGems.org, to distribute your project, you may be able to track your project's downloads. Each package manager may use a slightly different definition of "download", and downloads do not necessarily correlate to installs or use, but it provides some baseline for comparison.

If your project is on GitHub, navigate again to the "Traffic" page. You can use the [clone graph](https://github.com/blog/1873-clone-graphs) to see how many times your project has been cloned on a given day, broken down by total clones and unique cloners.

![clone graph](/assets/images/marketing/clone_graph.png)

If usage is low compared to the number of people discovering your project, there are two issues to consider: 1) that your project isn't successfully converting your audience, or 2) that you're attracting the wrong audience. For example, if your project lands on the front page of Hacker News, you'll probably see a traffic spike but a lower conversion rate because you're reaching everyone on Hacker News, not just your target audience. Try to figure out where your audience is coming from and ask others for feedback on your project page to figure out which of these two issues you're facing.

## Retention

People are finding your project and they're using it. The next question you'll want to ask yourself is: _are people contributing back to my project?_

This is a big one. Without other people pitching in, you risk putting yourself into an unhealthy situation where your project is popular (many people use it) but not supported (not enough maintainer time to meet demand). Retention also requires an inflow of new contributors, as previously active contributors will eventually move on to other things. It's never too early to start thinking about contributors!

Examples of contributor metrics that you may want to regularly track include:

* **Total contributor count and number of commits per contributor:** Tells you how many contributors you have, and who's more or less active. On GitHub, you can view this under "Graphs" -> "Contributors." Right now, this graph only counts contributors who have committed to the default branch of the repository.

![contributor graph](/assets/images/marketing/repo_contributors_specific_graph.png)

* **Casual contributors:** This is defined as contributors with a low number of commits. Whether that's one commit, less than five commits, or something else is up to you.

* **First time vs. repeat contributors:** Helps you track whether you're getting new contributors in. Without new contributors, your project's community can become stagnant.

* **Number of open issues and open pull requests:** If these numbers get too high, you might need help with issue triaging and code reviews.
* **Number of _opened_ issues and _opened_ pull requests:** Opened issues means somebody cares enough about your project to open an issue. If that number increases over time, it suggests people are interested in your project.

* **Types of contributions:** For example, commits, fixing typos or bugs, or commenting on an issue.

## Maintainer Health

Finally, you'll want to close the loop by making sure your project's maintainers are able to handle the volume of contributions received. The last question you'll want to ask yourself is: _am I (or are we) responding to our community?_

Unresponsive maintainers can become a bottleneck for open source projects. If someone submits a contribution but never hears back from a maintainer, they may feel discouraged and leave. [Research from Mozilla](https://docs.google.com/presentation/d/1hsJLv1ieSqtXBzd5YZusY-mB8e1VJzaeOmh8Q4VeMio/edit#slide=id.g43d857af8_0177) suggests that maintainer responsiveness is a critical factor in encouraging repeat contributions.

Consider tracking how long it takes for you (or another maintainer) to respond to contributions, whether an issue or a pull request. Responding doesn't require taking action: it can be as simple as saying: _"Thanks for your submission! I'll review this within the next week."_

You could also measure the time it takes to move between stages in the contribution process, such as average amount of time an issue remains open, or time from issue to PR.
