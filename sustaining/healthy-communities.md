---
title: Sustaining Healthy Communities
next: sustaining/leadership.md
---

Your project's community is extremely powerful. That power can be a blessing or a curse, depending on how you wield it. In this section, we'll look at ways to structure your community to become a force of construction, not destruction.

If you're starting an open source project today, the vast majority of contributors will be "casual contributors": people who contribute to a project only occasionally. Sometimes these are also called "drive-by contributors".

A casual contributor may not have time to get fully up to speed with your project. Nearly half of contributors on popular GitHub projects, for example, only made one contribution.[^1] This level of noise can be overwhelming at first. But the more people feel ownership of your project, the more work can be distributed.[^2] It will be much less stressful than trying to do everything yourself.

[^1]: [More Common Than You Think: An In-Depth Study of Casual Contributors](http://gustavopinto.org/lost+found/saner2016.pdf)
[^2]: [Node.js](https://github.com/nodejs) is a big project that helped popularize some of these ideas. See [Building a Better Node Community.](https://medium.com/node-js-javascript/building-a-better-node-community-3f8f45b45cb5)

Here are some ways you can empower your biggest fans to run with the work they're excited about.

## Meet contributors where they're at

Good documentation is important to give casual contributors the context they need. Make sure people know what the goal of your project is and whether there are contributions you categorically won't accept.

In your CONTRIBUTING.md file, explicitly tell new contributors how to get started. You may even want to make a dedicated section for this purpose. For example, [Read the Docs](http://docs.readthedocs.io/en/latest/contribute.html#contributing-to-development) tells its readers:

> If you want to deep dive and help out with development on Read the Docs, then first get the project installed locally according to the Installation Guide. After that is done we suggest you have a look at tickets in our issue tracker that are labelled Good First Bug. These are meant to be a great way to get a smooth start and won't put you in front of the most complex parts of the system.

In Issues, label bugs that are suitable for beginners: for example, _"good first bug"_, _"help wanted"_, or _"first-timers-only"_. These labels make it easy for someone new to your project to quickly scan your issues and get started. ([Here](https://github.com/librariesio/libraries.io/blob/6afea1a3354aef4672d9b3a9fc4cc308d60020c8/app/models/github_issue.rb#L8-L14) are some other examples of commonly used labels.)

Finally, use your documentation to make people feel welcome at every step of the way. Remember that you will never meet most of the people who come across your project. There are probably contributions you didn't receive because somebody felt intimidated or didn't know where to get started. Do your best to reduce your chances of someone leaving your project in frustration. Even a few kind words can help. For example, here's how [Rubinius](https://github.com/rubinius/rubinius/blob/master/CONTRIBUTING.md) starts off its contributing guide:

> We want to start off by saying thank you for using Rubinius. This project is a labor of love, and we appreciate all of the users that catch bugs, make performance improvements, and help with documentation. Every contribution is meaningful, so thank you for participating. That being said, here are a few guidelines that we ask you to follow so we can successfully address your issue.

## Share ownership of your project

People are excited to contribute to projects when they feel like it belongs to them. That doesn't mean you need to turn over your project's vision or accept contributions you don't want. But the more you can give credit to others, the more likely it is that they will stick around.

@orta found that this approach to ownership helped him succeed with his open source projects, including [Danger](https://github.com/danger/danger/):

> Understanding motivations, encouraging ownership and accommodating multiple viewpoints are vital parts of anyone who wants to make a project bigger than themselves. There [are lots of times](https://github.com/danger/danger/graphs/contributors) when I'm not the lead developer on Danger.[^danger]

[^danger]: [Handling Large OSS Projects Defensively](http://artsy.github.io/blog/2016/07/03/handling-big-projects/) by @orta

See if you can find ways to give credit to your community as much as possible. Here are some ideas:

* Resist fixing easy bugs. Instead, use them as opportunities to recruit new contributors, or mentor someone who'd like to contribute. It may seem unnatural at first, but your investment will pay off over time.

* Start a CONTRIBUTORS.txt file in your project that lists everyone who's contributed to your project. Here's an example that @shazow made for his project, [urllib3](https://github.com/shazow/urllib3/blob/master/CONTRIBUTORS.txt).

* If you've got a sizeable community, consider sending out a newsletter or writing a blog post that calls out contributors and thanks them. Rust's [This Week in Rust](https://this-week-in-rust.org/) and Hoodie's [Shoutouts](http://hood.ie/blog/shoutouts-week-24.html) are two good examples.

* Consider giving every contributor commit access. @felixge found that this made people more excited to polish up their patches, and he even found new maintainers for projects that he hadn't worked on in awhile. [^5]

[^5]: [The Pull Request Hack](http://felixge.de/2013/03/11/the-pull-request-hack.html)

The bigger your project, and the bigger your community, the easier it is to find help. The reality is that most projects only have one or two maintainers who do most of the work.[^6] While you many not always find someone to answer the call, putting a Batsignal out there increases the chances that other people will pitch in. And the earlier you start, the sooner people can help. Early investments in your community will pay off over time.

[^6]: [What is the Truck Factor of Popular GitHub Applications? A First Assessment](https://peerj.com/preprints/1233.pdf)

As you build a community of engaged and thoughtful people, you may start thinking about how to formalize their ownership in your project. In the next section, we'll cover some commonly asked questions around leadership and governance.

## Don't tolerate bad actors

Any popular project will inevitably attract people who harm, rather than help, your community. They may start unnecessary debates, quibble over trivial features, or bully others.

Do your best to adopt a zero-tolerance policy towards these types of people. If left unchecked, negative people will make other people in your community uncomfortable. They may even leave. Regular debates over trivial aspects of your project distracts others, including you, from focusing on important tasks. New people who arrive to your project may see these types of conversations and not want to participate.

When you see negative behavior happening on your project, call it out publicly. Explain, in a kind but firm tone, why their behavior is not acceptable. If the problem persists, you may need to [ask them to leave](../../troubleshooting/conduct/). Your code of conduct can be a constructive guide for these conversations.

## Further reading

* [Growing a contributor base in modern open source](https://opensource.com/life/16/5/growing-contributor-base-modern-open-source) by @mikeal
* [Sustainable Open Source](http://writing.jan.io/2015/11/20/sustainable-open-source.html) by @janl
* [Wharton's Adam Grant on the key to professional success](http://www.mckinsey.com/business-functions/organization/our-insights/whartons-adam-grant-on-the-key-to-professional-success)
* [How the Moya org handles contributions](https://github.com/Moya/contributors)
* [Rust Governance](https://github.com/rust-lang/rfcs/blob/master/text/1068-rust-governance.md)
* [How to use Github issues to attract new contributors](http://radek.io/2015/08/24/github-issues/) by @pazdera
* [Difficult People](http://producingoss.com/en/producingoss.html#difficult-people) from _Producing Open Source Software_ by @kfogel
