---
title: Measuring Success
next: sustaining/index.md
---

Your project is starting to grow. 🌱 Well, you think it's growing. Is it growing? In this section, we'll talk about how to measure and track the success of your open source project.

* TOC
{:toc}

## Discoverability

Before anybody can use or contribute back to your project, they first need to know it exists. The first question you'll want to ask yourself, then, is: _are people finding my project?_

If your project is hosted on GitHub, you can view how many people land on your project and where they come from. From your project's page, click "Graphs", then "Traffic". On this page, you can see:

* **Total pageviews:** Tells you how many times your project was viewed

* **Total unique visitors:** Tells you how many people viewed your project

* **Referring sites:** Tells you where visitors came from. This metric can help you figure out where to reach your audience and whether your promotion efforts are working.

* **Popular content:** Tells you where visitors go on your project, broken down by pageviews and unique visitors.

[GitHub stars](https://github.com/blog/1204-notifications-stars) can also help provide a baseline measure of popularity. While GitHub stars don't necessarily correlate to downloads and usage, they can tell you how many people are taking notice of your work.

You may also want to track discoverability in specific places: for example, Google PageRank, referral traffic from your project's website, or referrals from other open source projects or websites.

## Usage

People are finding your project on this wild and crazy thing we call the internet. Ideally, when they see your project, they'll feel compelled to do something. The second question you'll want to ask is: _are people using my project?_

If you use a package manager, such as npm or RubyGems.org, to distribute your project, you may be able to track your project's downloads. Each package manager may use a slightly different definition of "download", and downloads do not not necessarily correlate to installs or use, but it provides some baseline for comparison.

If your project is on GitHub, navigate again to the "Traffic" page. You can use the [clone graph](https://github.com/blog/1873-clone-graphs) to see how many times your project has been cloned on a given day, broken down by total clones and unique cloners.

If usage is low compared to the number of people discovering your project, there are two issues to consider: 1) that your project isn't successfully converting your audience, or 2) that you're attracting the wrong audience. For example, if your project lands on the front page of Hacker News, you'll probably see a traffic spike but a lower conversion rate because you're reaching everyone on Hacker News, not just your target audience. Try to figure out where your audience is coming from and ask others for feedback on your project page to figure out which of these two issues you're facing.

## Retention

People are finding your project and they're using it. The last question you'll want to ask yourself is: _are people contributing back to my project?_

This is a big one. Without other people pitching in, you risk putting yourself into an unhealthy situation where your project is popular (many people use it) but not supported (not enough maintainer time to meet demand). It's never too early to start thinking about contributors!

Here are a few types of contributor metrics you may want to regularly keep track of:

* **Total contributor count and number of commits per contributor:** Tells you how many contributors you have, and who's more or less active. You can view this under "Graphs" -> "Contributors"

* **Casual contributors:** This is defined as contributors with only low number of commits. Whether that's one commit, less than five commits, or something else is up to you.

* **First time vs. repeat contributors:** Helps you track whether you're getting new contributors in. Without new contributors, your project's community can become stagnant.

* **Number of open issues and open pull requests:** If these numbers get too high, you might need help with issue triaging and code reviews.

* **Types of contributions:** For example, commits, fixing typos or bugs, or commenting on an issue.

## Further reading

* [Measuring Success in an Open Source Project](http://blog.smartbear.com/news/measuring-success-in-an-open-source-project/) by @sjvn
* [Using Pirate Metrics to measure success of open source projects](https://opensource.com/business/16/6/pirate-metrics) by @gfachler
* [
The Open Source Contributor Funnel](https://speakerdeck.com/mikemcquaid/the-open-source-contributor-funnel) by @MikeMcQuaid
* [The shape of open source](https://github.com/blog/2195-the-shape-of-open-source) by @arfon
* [Libraries.io](http://libraries.io)
