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

有的人认为项目应该对所有人都开放提交访问，从而让任何人都可以做出贡献。理由是这样做的话，会让人们感到拥有这个项目，进而达到鼓励的目的。

On the other hand, especially for bigger, more complex projects, you may want to only give commit access to people who have demonstrated their commitment. There's no one right way of doing it - do what makes you most comfortable!

If your project is on GitHub, you can use [protected branches](https://help.github.com/articles/about-protected-branches/) to manage who can push to a particular branch, and under which circumstances.

<aside markdown="1" class="pquote">
  <img src="https://avatars2.githubusercontent.com/u/15000?v=3&s=460" class="pquote-avatar" alt="avatar">
  无论什么时候，都会有人向你发送pull request，所以将你的项目开放提交访问。这看起来是有些不够明智，使用此策略能让你释放GitHub的真正威力。(...)一旦人们拥有了提交访问权,他们不再担心他们的补丁可能不会被合并.....这会让他们做的更多。
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

成功的开源项目，会有很多的用户和公司使用，而且有一些公司的主要收入和项目是绑在一起的。举例来说，某公司在其商业产品或服务中使用了开源项目的代码作为其一个组件。


一个项目越是被广泛的使用，有相关背景的专业人士的需求就会上升，**你或许就是其中之一**，那么就顺势成为继续为开源项目做事，还有一定的报酬。

将商业的活动视为正常不过的事情很重要，它也只是代码的开发方法之一。为开发者付费不应该被特殊的对待，好像代码必须是无偿开发的才行；每个贡献都必须有技术的衡量标准来进行评估。人们应该在这些商业的活动中感到非常的自在，而且针对特定的增强或功能项讨论时也应是坦荡的、自然的。

“商业” 是完全和“开源”相容的。“商业”仅仅是意味着某些地方有钱的参与 —— 就是说软件被用于了商业行为，也就是说项目被采用获得了认可。（当开源软件被用于非开源产品的一个部分时，这个整体的产品仍然是“专有的”软件，因为开源，它可以用于商业或非商业的目的。）

和这个世界上很多的其它商业产品一样，商业能够激励开发者去积极的贡献于项目，通过他们靠谱的提交贡献。显而易见的是，一位因花了自己的时间和精力的开发者获得报酬，理应比没有获得报酬的更具持久性，当然，这对于某些圣徒是不成立的，或者这么说吧，报酬是能体现一个贡献度的众多衡量因素的其中之一。所以将你的项目讨论聚焦于贡献上，不要让人们分散精力去思考或做其它的事情。

## 我是否需要一个法律实体来支持我的项目?

除非你特别的有钱，其实你根本没有必要为开源项目而专门搞一个法律实体来支持。

举例来说，假如你打算创办自己的商业公司，（假如是在美国的话）你需要成立一家集团公司或有限责任公司。如果你只是为你的开源项目做一些合约的工作，你可以以投资人的身份接受钱财，或者成立一家有限责任公司（如果是在美国的话）。

如果你打算让自己的开源项目接受捐赠的话，你可以创建一个捐赠按钮（使用PayPal或Stripe，举例来说），但是你要知道，这些钱并非是免税的，除非你是认证过的非盈利性组织（在美国的话，诸如501c3）。

很多项目都不愿意成立非盈利组织那么麻烦，所以他们会以赞助商的身份寻找一个非营利性组织。财政资助代表你接受捐款,通常以换取一定比例的捐赠。针对开源项目接受财政资助的非营利性组织有很多，如[Software Freedom Conservancy](https://sfconservancy.org/), [Apache 基金会](http://www.apache.org/), [Eclipse 基金会](https://eclipse.org/org/foundation/), [Linux 基金会](https://www.linuxfoundation.org/projects) and [Open Collective](https://opencollective.com/opensource) 等等。

<aside markdown="1" class="pquote">
  <img src="https://avatars2.githubusercontent.com/u/3671070?v=3&s=460" class="pquote-avatar" alt="avatar">
  我们的目标是提供基础设施，让社区能够自我持续发展下去，每个人——贡献者、支持者、赞助商———所共同营造的环境，也让每个人得到实实在在的利益。
  <p markdown="1" class="pquote-credit">
— @piamancini, ["超越 charity 框架"](https://medium.com/open-collective/moving-beyond-the-charity-framework-b1191c33141#.vgsbj9um9)
  </p>
</aside>

如果你的项目是和某特定的语言或生态系统紧密相连的，那么你可以直接在相关的软件基金会下工作。例如，[Python 软件基金会](https://www.python.org/psf/) 就帮衬着项目 [PyPI](https://pypi.python.org/pypi)，这是一块优秀的Python包管理器，又比如[Node.js 基金会](https://nodejs.org/en/foundation/) 支撑着 [Express.js](http://expressjs.com/)，一款基于Node的框架。
