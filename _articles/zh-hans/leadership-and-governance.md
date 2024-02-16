---
lang: zh-hans
title: 领导力和治理
description: 决策有了较正式的规则，可让开源项目迅速生长。
class: leadership
order: 6
image: /assets/images/cards/leadership.png
related:
  - best-practices
  - metrics
redirect_from: /zh-cn/leadership-and-governance/
---

## 了解社区治理对快速发展的项目的重要性

当项目开始有条不紊的进行，人员也开始稳定，那么你就应该开始社区的治理了。对于社区的治理，你或许有一些疑问，诸如如何将常规项目的贡献者纳入你的工作流？如何才能判断应该赋予谁提交的权限？又或者是如何解决社区的争论？如果你对这些有疑问的话，我们这里会尽力帮你解决。

## 开源项目中常见的角色有哪些？

很多项目针对贡献者角色和身份均遵循相似的结构。

这些角色实际上意味着什么完全取决于你。我们这里所列举的，相信你是非常熟悉的了：

* **维护者**
* **贡献者**
* **修订者**

**对于某些项目来说， "维护者"** 就是唯一拥有提交权限的人。然而在其它的一些项目中，他们只是在 README 文件中列为维护者的人。

作为一名维护者，不一定非得要为项目撰写代码。Ta有可能是项目的布道师，为项目的宣传做了很多的工作，又或者是撰写文档让更多的人参与进来。不管他们每天做什么，维护者就是那些对项目方向负责的人，并致力于项目的改进。

**作为 "贡献者" 可以是任何人** ，只要Ta提出issue或PR 就叫做贡献者，那些为项目作出有价值的都算（无论是分类问题，编写代码还是组织会议），又或者是将他们的PR合并进主干的（或许这个定义是最接近所谓的贡献者的）。

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/mikeal?s=180" class="pquote-avatar" alt="avatar">
  \[对于 Node.js 来说\] 无论是在issue中提交评论，还是提交代码，任何人都是项目社区的成员。只要能够看到他们，就意味着他们已经实现了跨越，从路人成为一个用户，成为一个贡献者。
  <p markdown="1" class="pquote-credit">
— @mikeal, ["开源的健康衡量"](https://medium.com/the-javascript-collection/healthy-open-source-967fa8be7951)
  </p>
</aside>

**术语 "修订者"** 可能用于区分其他形式的贡献的提交访问，这是一种特定类型的责任。

其实你可以根据自己喜欢的方式来定义项目的角色，[考虑使用更广泛的定义](../how-to-contribute/#贡献意味着什么) 来鼓励更多的形式的贡献。无论技术技能如何，您都可以使用领导角色来正式识别为您的项目做出突出贡献的人员。

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/jacobian?s=180" class="pquote-avatar" alt="avatar">
  你们或许知道我是 Django 的"创始人"...其实真相是在有人雇佣了我之后一年才真正的做出来。(...) 人们猜测我的成功是因为我的编程技能够牛...但事实上我的编程水平只是一般般而已。
  <p markdown="1" class="pquote-credit">
— @jacobian, ["PyCon 2015 Keynote" (视频)](https://www.youtube.com/watch?v=hIJdFxYlEKE#t=5m0s)
  </p>
</aside>

## 如何形成这些领导力角色的？

将领导力角色正规化，可以帮助人们找到归属感，且可以让其它社区成员明白应该找谁能够获得帮助。

对于一个较小的项目来讲，指定领导者，只需要在 README 或 CONTRIBUTORS 文本文件中写上他们的名字即可。

对于稍大型点的项目，如果你已经拥有了网页的话，那么请创建一个团队的页面，或者创建一个团队领导的页面。举例来说， [PostgreSQL](https://github.com/postgres/postgres/) 就拥有一个[很全面的团队页面](https://www.postgresql.org/community/contributors/) ，而且每位贡献者都拥有简短的介绍。

如果你的项目拥有非常活跃的贡献者社区，你或许会专门建立一个维护者的"核心团队"，甚至是根据不同的话题所有者成立子的委员会（例如，安全，问题筛选，或者是社区准则）。让人们自行组织、且能够让志愿者自行找到自己喜欢的角色，而不是去分配他们。

<aside markdown="1" class="pquote">
  \[我们\] 为核心团队设立多个"子团队"。每个子团队都会专门的聚焦于某个特定的领域，举例来说，语言设计或程序库(...) 为了确保全局的协调和健壮，会将整体的项目设置为同一个愿景，每个子团队是由核心团队的一员。
  <p markdown="1" class="pquote-credit">
— ["Rust 治理 RFC"](https://github.com/rust-lang/rfcs/blob/HEAD/text/1068-rust-governance.md)
  </p>
</aside>

领导者团队或许要创建一个指定的频道（如IRC），又或者是参与项目的日常讨论（如Gitter或Google Hangout）。你需要将这些会议可以公开访问，以便让人们方便倾听。举例来说，
 [Cucumber-ruby](https://github.com/cucumber/cucumber-ruby)就会[每周开一次会议，每次持续几小时](https://github.com/cucumber/cucumber-ruby/blob/HEAD/CONTRIBUTING.md#talking-with-other-devs).

一旦你建立了领导力角色，一定不要忘记撰写文档，告诉人们如何成为领导者！要为如何成为一名维护者或加入到项目的子委员会创建一个清晰的流程，并将之写入 GOVERNANCE.md 文件。

诸如[Vossibility](https://github.com/icecrime/vossibility-stack) 这样的工具，可以帮助你追踪谁是（或不是）项目的贡献者。为这些信息作说明，以避免社区出现维护者作出私自的决定。

另外，如果你的项目在托管在GitHub上，考虑将你的项目从个人账户迁移到某个组织，而且要为组织增加额外的一个备份的管理员。
[GitHub 上的组织](https://help.github.com/articles/creating-a-new-organization-account/) 能够让权限管理和多仓库管理更加的轻松，而且可通过 [共享所有权](../building-community/#共享项目所有权)来保护你的项目。

## 什么时候授予提交者权限？

有的人认为项目应该对所有人都开放提交访问，从而让任何人都可以做出贡献。理由是这样做的话，会让人们感到拥有这个项目，进而达到鼓励的目的。

换句话说，尤其是针对那些大型的、更加复杂的项目，你或许只是会给那些证明自己有能力提交代码的人赋予权限。这个没有一个确切的衡量标准，做你认为正确的就好了，或者是最让项目成员感到舒服的方式。

假如项目是托管在GitHub上，可以使用[受保护的分支](https://help.github.com/articles/about-protected-branches/)来管理那些可以提交特定的分支情况。

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/felixge?s=180" class="pquote-avatar" alt="avatar">
  无论什么时候，都会有人向你发送pull request，所以将你的项目开放提交访问。这看起来是有些不够明智，使用此策略能让你释放GitHub的真正威力。(...)一旦人们拥有了提交访问权,他们不再担心他们的补丁可能不会被合并.....这会让他们做的更多。
  <p markdown="1" class="pquote-credit">
— @felixge, ["The Pull Request Hack"](https://felixge.de/2013/03/11/the-pull-request-hack.html)
  </p>
</aside>

## 开源项目的常见治理架构？

关于开源项目有三类通用的相关治理结构。

* **BDFL:** BDFL 是 "终身仁慈独裁者" 的缩写. 在此结构下，有一个人（通常是项目的最初的作者）拥有项目中所有的最后决定权。[Python](https://github.com/python) 就是一个非常经典的例子。较小的项目可能默认就是 BDFL 结构，因为他一般就是一到两位维护者。若是公司组织的项目也极有可能会采用BDFL结构。

* **精英制:** **(注: 术语 "精英制" 对于一些社群可能具有消极的含义，其拥有较[复杂的社会和政治的历史](http://geekfeminism.wikia.com/wiki/Meritocracy).)** 在精英制下，活跃的项目贡献者（他们用行动证明自己是"精英"）给一个正式的决策作用，决定通常会基于纯粹的投票一致性。精英制的概念首次由[Apache Foundation](https://www.apache.org/)提出；[所有的Apache 项目](https://www.apache.org/index.html#projects-list) 都是基于精英制的。贡献者只能代表自己是独立的个体，不可以是公司。

* **自由贡献:** 在自由贡献的模式下，做最多工作的人通常被认为是最具影响力的，但是是基于当前的工作，而不是历史的贡献。项目的重大决策是基于寻求共识的过程（对不同的声音要讨论）而不是纯粹的投票，尽可能的努力的去囊括多的社区观点。较流行的使用自由贡献模式的项目有[Node.js](https://foundation.nodejs.org/) 和 [Rust](https://www.rust-lang.org/)。

应该选择哪一种模式了呢？由你自己来做决定！每个模式都有优点，也有缺点。虽然上面的描述乍一看，这三种模式有着很大的不同，其实不然，它们还是有着共同点的。如果你对上述三种模式有兴趣，可以采用下面的模版：

* [BDFL 模式模版](http://oss-watch.ac.uk/resources/benevolentdictatorgovernancemodel)
* [精英模式模版](http://oss-watch.ac.uk/resources/meritocraticgovernancemodel)
* [Node.js 的自由贡献规则](https://medium.com/the-node-js-collection/healthy-open-source-967fa8be7951)

## 启动项目时是否需要治理文档？

其实没有什么合适的时间来撰写项目的治理，但是一旦你看到社区活跃起来，就更容易定义它。开源治理最好（也是最难）的部分是它由社区塑造！

然而，一些早期文档将不可避免地影响项目的治理，因此请一开始就写下您能写下的内容。举例来说，你可以将某些预期的行为定义清楚，贡献的流程是如何的，或者项目是如何启动的，等等。

如果你要开源公司的项目，那么在发布之前，有必要进行内部讨论，了解你的公司希望如何维护并做出有关项目进展的决策。你可能还想公开解释贵公司将如何（或不会！）参与项目的具体内容。

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/caabernathy?s=180" class="pquote-avatar" alt="avatar">
  我们在GitHub上赋予一些小的团队来管理项目，实际上这些人都是在Facebook工作的，比如，React就是由React的工程师来掌管运行的。
  <p markdown="1" class="pquote-credit">
— @caabernathy, ["Facebook内部员工如何看待开源"](https://opensource.com/life/15/10/ato-interview-christine-abernathy-facebook)
  </p>
</aside>

## 企业员工如何开启项目提交贡献之旅？

成功的开源项目，会有很多的用户和公司使用，而且有一些公司的主要收入和项目是绑在一起的。举例来说，某公司在其商业产品或服务中使用了开源项目的代码作为其一个组件。

一个项目越是被广泛的使用，有相关背景的专业人士的需求就会上升，**你或许就是其中之一**，那么就顺势成为继续为开源项目做事，还有一定的报酬。

将商业的活动视为正常不过的事情很重要，它也只是代码的开发方法之一。为开发者付费不应该被特殊的对待，好像代码必须是无偿开发的才行；每个贡献都必须有技术的衡量标准来进行评估。人们应该在这些商业的活动中感到非常的自在，而且针对特定的增强或功能项讨论时也应是坦荡的、自然的。

"商业" 是完全和"开源"相容的。"商业"仅仅是意味着某些地方有钱的参与 —— 就是说软件被用于了商业行为，也就是说项目被采用获得了认可。（当开源软件被用于非开源产品的一个部分时，这个整体的产品仍然是"专有的"软件，因为开源，它可以用于商业或非商业的目的。）

和这个世界上很多的其它商业产品一样，商业能够激励开发者去积极的贡献于项目，通过他们靠谱的提交贡献。显而易见的是，一位因花了自己的时间和精力的开发者获得报酬，理应比没有获得报酬的更具持久性，当然，这对于某些圣徒是不成立的，或者这么说吧，报酬是能体现一个贡献度的众多衡量因素的其中之一。所以将你的项目讨论聚焦于贡献上，不要让人们分散精力去思考或做其它的事情。

## 是否需要一个法律实体来支持我的项目？

除非你特别的有钱，其实你根本没有必要为开源项目而专门搞一个法律实体来支持。

举例来说，假如你打算创办自己的商业公司，（假如是在美国的话）你需要成立一家集团公司或有限责任公司。如果你只是为你的开源项目做一些合约的工作，你可以以投资人的身份接受钱财，或者成立一家有限责任公司（如果是在美国的话）。

如果你打算让自己的开源项目接受捐赠的话，你可以创建一个捐赠按钮（使用PayPal或Stripe，举例来说），但是你要知道，这些钱并非是免税的，除非你是认证过的非盈利性组织（在美国的话，诸如501c3）。

很多项目都不愿意成立非盈利组织那么麻烦，所以他们会以赞助商的身份寻找一个非营利性组织。财政资助代表你接受捐款,通常以换取一定比例的捐赠。针对开源项目接受财政资助的非营利性组织有很多，如[Software Freedom Conservancy](https://sfconservancy.org/), [Apache 基金会](https://www.apache.org/), [Eclipse 基金会](https://eclipse.org/org/foundation/), [Linux 基金会](https://www.linuxfoundation.org/projects) 以及 [Open Collective](https://opencollective.com/opensource) 等。

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/piamancini?s=180" class="pquote-avatar" alt="avatar">
  我们的目标是提供基础设施，让社区能够自我持续发展下去，每个人——贡献者、支持者、赞助商———所共同营造的环境，也让每个人得到实实在在的利益。
  <p markdown="1" class="pquote-credit">
— @piamancini, ["超越 charity 框架"](https://medium.com/open-collective/moving-beyond-the-charity-framework-b1191c33141)
  </p>
</aside>

如果你的项目是和某特定的语言或生态系统紧密相连的，那么你可以直接在相关的软件基金会下工作。例如，[Python 软件基金会](https://www.python.org/psf/) 就帮衬着项目 [PyPI](https://pypi.org/)，一款优秀的Python包管理器；又比如[Node.js 基金会](https://foundation.nodejs.org/) 支持着 [Express.js](https://expressjs.com/)，一款基于Node的框架。
