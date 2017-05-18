---
locale: zh-CN
title: 领导力和治理
description: 决策有了较正式的规则，可让开源项目野蛮生长。
class: leadership
toc:
  what-are-examples-of-formal-roles-used-in-open-source-projects: "开源项目中通常都有那些角色？"
  how-do-i-formalize-these-leadership-roles: "该如何将这些领导力角色正规化？"
  when-should-i-give-someone-commit-access: "何时该赋予提交者权限？"
  what-are-some-of-the-common-governance-structures-for-open-source-projects: "对于开源项目来说有那些常见的治理结构？"
  do-i-need-governance-docs-when-i-launch-my-project: "当我创建开源项目时，需要专门撰写一份治理文档吗？"
  what-happens-if-corporate-employees-start-submitting-contributions: "公司员工该如何开启提交贡献之旅？"
  do-i-need-a-legal-entity-to-support-my-project: "我是否需要一个法律实体来支持我的项目?"
order: 6
image: /assets/images/cards/leadership.png
---

## 针对增长的项目来理解治理

当项目开始有条不紊的进行，人员也开始稳定，那么你就应该开始社区的治理了。对于社区的治理，你或许有一些疑问，诸如如何将常规项目的贡献者纳入你的工作流？如何才能判断应该赋予谁提交的权限？又或者是如何解决社区的债务？如果你对这些有疑问的话，我们这里会尽力帮你解决。

## 开源项目中通常都有那些角色？

很多项目针对贡献者角色和身份均遵循相似的结构。

这些角色实际上意味着什么完全取决于你。我们这里所列举的，相信你是非常熟悉的了：

* **维护者**
* **贡献者**
* **修订者**

**对于某些项目来说， "维护者"** 就是唯一拥有提交权限的人。然而在其它的一些项目中， they're simply the people who are listed in the README as maintainers.

作为一名维护者，不一定非得一定要为项目撰写代码。Ta有可能是项目的布道师，为项目的宣传做了很多的工作，又或者是撰写文档让更多的人参与进来。不管他们每天做什么，维护者就是那些对项目方向负责的人，并致力于项目的改进。

**作为 "贡献者" 可以是任何人** ，只要Ta提出issue或PR 就叫做贡献者，那些为项目作出有价值的都算（无论是分类问题，编写代码还是组织会议），又或者是将他们的PR合并进主干的（或许这个定义是最接近所谓的贡献者的）。

<aside markdown="1" class="pquote">
  <img src="https://avatars1.githubusercontent.com/u/579?v=3&s=460" class="pquote-avatar" alt="avatar">
  \[对于 Node.js 来说\] 无论是在issue中提交评论，还是提交代码，任何人都是项目社区的成员。只要能够看到他们，就意味着他们已经实现了跨越，从路人成为一个用户，成为一个贡献者。
  <p markdown="1" class="pquote-credit">
— @mikeal, ["开源的健康衡量"](https://medium.com/the-javascript-collection/healthy-open-source-967fa8be7951)
  </p>
</aside>

**术语 "修订者"** 可能用于区分其他形式的贡献的提交访问，这是一种特定类型的责任。

其实你可以根据自己喜欢的方式来定义项目的角色，[考虑使用更广泛的定义](../how-to-contribute/#what-it-means-to-contribute) 来鼓励更多的形式的贡献。无论技术技能如何，您都可以使用领导角色来正式识别为您的项目做出突出贡献的人员。

<aside markdown="1" class="pquote">
  <img src="https://avatars3.githubusercontent.com/u/21148?v=3&s=460" class="pquote-avatar" alt="avatar">
  你们或许知道我是 Django 的“创始人”...其实真相是在有人雇佣了我之后一年才真正的做出来。(...) 人们猜测我的成功是因为我的编程技能够牛...但事实上我的编程水平只是一般般而已。
  <p markdown="1" class="pquote-credit">
— @jacobian, ["PyCon 2015 Keynote" (视频)](https://www.youtube.com/watch?v=hIJdFxYlEKE#t=5m0s)
  </p>
</aside>

## 该如何将这些领导力角色正规化？

将领导力角色正规化，可以帮助人们找到归属感，且可以让其它社区成员明白应该找谁能够获得帮助。

对于一个较小的项目来讲，指定领导者，只需要在 README 或 CONTRIBUTORS 文本文件中写上他们的名字即可。

对于稍大型点的项目，如果你已经拥有了网页的话，那么请创建一个团队的页面，或者创建一个团队领导的页面。举例来说， [PostgreSQL](https://github.com/postgres/postgres/) 就拥有一个[很全面地团队页面](https://www.postgresql.org/community/contributors/) ，而且每位贡献者都拥有简短的介绍。

如果你的项目拥有非常活跃的贡献者社区，你或许会专门建立一个维护者的“核心团队”，甚至是根据不同的话题所有者成立子的委员会（例如，安全，问题筛选，或者是社区准则）。让人们自行组织、且能够让志愿者自行找到自己喜欢的角色，而不是去分配他们。

<aside markdown="1" class="pquote">
  \[我们\] 为核心团队设立多个“子团队”。每个子团队都会专门的聚焦于某个特定的领域，举例来说，语言设计或程序库(...) 为了确保全局的协调和健壮，会将整体的项目设置为同一个愿景，每个子团队是由核心团队的一员。
  <p markdown="1" class="pquote-credit">
— ["Rust 治理 RFC"](https://github.com/rust-lang/rfcs/blob/master/text/1068-rust-governance.md)
  </p>
</aside>

领导者团队或许要创建一个指定的频道（如IRC），又或者是参与项目的日常讨论（如Gitter或Google Hangout）。你需要将这些会议可以公开访问，以便让人们方便倾听。举例来说，
 [Cucumber-ruby](https://github.com/cucumber/cucumber-ruby)就会[每周开一次会议，每次持续几小时](https://github.com/cucumber/cucumber-ruby/blob/master/CONTRIBUTING.md#talking-with-other-devs).

一旦你建立了领导力角色，一定不要忘记撰写文档，告诉人们如何成为领导者！要为如何成为一名维护者或加入到项目的子委员会创建一个清晰的流程，并将之写入 GOVERNANCE.md 文件。

诸如[Vossibility](https://github.com/icecrime/vossibility-stack) 这样的工具，可以帮助你追踪谁是（或不是）项目的贡献者。为这些信息作说明，以避免社区出现维护者作出私自的决定。

另外，如果你的项目在托管在GitHub上，考虑将你的项目从个人账户迁移到某个组织，而且要为组织增加额外的一个备份的管理员。
[GitHub 上的组织](https://help.github.com/articles/creating-a-new-organization-account/) 能够让权限管理和多仓库管理更加的轻松，而且可通过 [共享所有权](../building-community/#share-ownership-of-your-project)来保护你的项目。

## 何时该赋予提交者权限？

Some people think you should give commit access to everybody who makes a contribution. Doing so could encourage more people to feel ownership of your project.

On the other hand, especially for bigger, more complex projects, you may want to only give commit access to people who have demonstrated their commitment. There's no one right way of doing it - do what makes you most comfortable!

If your project is on GitHub, you can use [protected branches](https://help.github.com/articles/about-protected-branches/) to manage who can push to a particular branch, and under which circumstances.

<aside markdown="1" class="pquote">
  <img src="https://avatars2.githubusercontent.com/u/15000?v=3&s=460" class="pquote-avatar" alt="avatar">
  Whenever somebody sends you a pull request, give them commit access to your project. While it may sound incredibly stupid at first, using this strategy will allow you to unleash the true power of GitHub. (...) Once people have commit access, they are no longer worried that their patch might go unmerged...causing them to put much more work into it.
  <p markdown="1" class="pquote-credit">
— @felixge, ["The Pull Request Hack"](http://felixge.de/2013/03/11/the-pull-request-hack.html)
  </p>
</aside>

## 对于开源项目来说有那些常见的治理结构？

There are three common governance structures associated with open source projects.

* **BDFL:** BDFL stands for "Benevolent Dictator for Life". Under this structure, one person (usually the initial author of the project) has final say on all major project decisions. [Python](https://github.com/python) is a classic example. Smaller projects are probably BDFL by default, because there are only one or two maintainers. A project that originated at a company might also fall into the BDFL category.

* **Meritocracy:** **(Note: the term "meritocracy" carries negative connotations for some communities and has a [complex social and political history](http://geekfeminism.wikia.com/wiki/Meritocracy).)** Under a meritocracy, active project contributors (those who demonstrate "merit") are given a formal decision making role. Decisions are usually made based on pure voting consensus. The meritocracy concept was pioneered by the [Apache Foundation](http://www.apache.org/); [all Apache projects](http://www.apache.org/index.html#projects-list) are meritocracies. Contributions can only be made by individuals representing themselves, not by a company.

* **Liberal contribution:** Under a liberal contribution model, the people who do the most work are recognized as most influential, but this is based on current work and not historic contributions. Major project decisions are made based on a consensus seeking process (discuss major grievances) rather than pure vote, and strive to include as many community perspectives as possible. Popular examples of projects that use a liberal contribution model include [Node.js](https://nodejs.org/en/foundation/) and [Rust](https://www.rust-lang.org/en-US/).

Which one should you use? It's up to you! Every model has advantages and tradeoffs. And although they may seem quite different at first, all three models have more in common than they seem. If you're interested in adopting one of these models, check out these templates:

* [BDFL model template](http://oss-watch.ac.uk/resources/benevolentdictatorgovernancemodel)
* [Meritocracy model template](http://oss-watch.ac.uk/resources/meritocraticgovernancemodel)
* [Node.js's liberal contribution policy](https://medium.com/the-javascript-collection/healthy-open-source-967fa8be7951#.m9ht26e79)

## 当我创建开源项目时，需要专门撰写一份治理文档吗？

There is no right time to write down your project's governance, but it's much easier to define once you've seen your community dynamics play out. The best (and hardest) part about open source governance is that it is shaped by the community!

Some early documentation will inevitably contribute to your project's governance, however, so start writing down what you can. For example, you can define clear expectations for behavior, or how your contributor process works, even at your project's launch.

If you're part of a company launching an open source project, it's worth having an internal discussion before launch about how your company expects to maintain and make decisions about the project moving forward. You may also want to publicly explain anything particular to how your company will (or won't!) be involved with the project.

<aside markdown="1" class="pquote">
  <img src="https://avatars1.githubusercontent.com/u/691109?v=3&s=460" class="pquote-avatar" alt="avatar">
  我们在GitHub上赋予一些小的团队来管理项目，实际上这些人都是在Facebook工作的，比如，React就是由React的工程师来掌管运行的。
  <p markdown="1" class="pquote-credit">
— @caabernathy, ["Facebook内部员工如何看待开源"](https://opensource.com/life/15/10/ato-interview-christine-abernathy-facebook)
  </p>
</aside>

## 公司员工该如何开启提交贡献之旅？

Successful open source projects get used by many people and companies, and some companies may eventually have revenue streams eventually tied to the project. For example, a company may use the project's code as one component in a commercial service offering.

As the project gets more widely used, people who have expertise in it become more in-demand - you may be one of them! - and will sometimes get paid for work they do in the project.

It's important to treat commercial activity as normal and as just another source of development energy. Paid developers shouldn't get special treatment over unpaid ones, of course; each contribution must be evaluated on its technical merits. However, people should feel comfortable engaging in commercial activity, and feel comfortable stating their use cases when arguing in favor of a particular enhancement or feature.

"Commercial" is completely compatible with "open source". "Commercial" just means there is money involved somewhere - that the software is used in commerce, which is increasingly likely as a project gains adoption. (When open source software is used as part of a non-open-source product, the overall product is still "proprietary" software, though, like open source, it might be used for commercial or non-commercial purposes.)

Like anyone else, commercially-motivated developers gain influence in the project through the quality and quantity of their contributions. Obviously, a developer who is paid for her time may be able to do more than someone who is not paid, but that's okay: payment is just one of many possible factors that could affect how much someone does. Keep your project discussions focused on the contributions, not on the external factors that enable people to make those contributions.

## 我是否需要一个法律实体来支持我的项目?

You don't need a legal entity to support your open source project unless you're handling money.

For example, if you want to create a commercial business, you'll want to set up a C Corp or LLC (if you're based in the US). If you're just doing contract work related to your open source project, you can accept money as a sole proprietor, or set up an LLC (if you're based in the US).

If you want to accept donations for your open source project, you can set up a donation button (using PayPal or Stripe, for example), but the money won't be tax-deductible unless you are a qualifying nonprofit (a 501c3, if you're in the US).

Many projects don't wish to go through the trouble of setting up a nonprofit, so they find a nonprofit fiscal sponsor instead. A fiscal sponsor accepts donations on your behalf, usually in exchange for a percentage of the donation. [Software Freedom Conservancy](https://sfconservancy.org/), [Apache Foundation](http://www.apache.org/), [Eclipse Foundation](https://eclipse.org/org/foundation/), [Linux Foundation](https://www.linuxfoundation.org/projects) and [Open Collective](https://opencollective.com/opensource) are examples of organizations that serve as fiscal sponsors for open source projects.

<aside markdown="1" class="pquote">
  <img src="https://avatars2.githubusercontent.com/u/3671070?v=3&s=460" class="pquote-avatar" alt="avatar">
  Our goal is to provide an infrastructure that communities can use to be self sustainable, thus creating an environment where everyone — contributors, backers, sponsors — get concrete benefits out of it.
  <p markdown="1" class="pquote-credit">
— @piamancini, ["Moving beyond the charity framework"](https://medium.com/open-collective/moving-beyond-the-charity-framework-b1191c33141#.vgsbj9um9)
  </p>
</aside>

If your project is closely associated with a certain language or ecosystem, there may also be a related software foundation you can work with. For example, the [Python Software Foundation](https://www.python.org/psf/) helps support [PyPI](https://pypi.python.org/pypi), the Python package manager, and the [Node.js Foundation](https://nodejs.org/en/foundation/) helps support [Express.js](http://expressjs.com/), a Node-based framework.
