---
locale: zh-CN
title: 开启一个开源项目
description: 从开源的世界汲取智慧，然后开始准备着手发起开源项目。
class: beginners
toc:
  the-what-and-why-of-open-source: "什么是开源，为什么要开源"
  should-i-launch-my-own-open-source-project: "我有必要去发起开源项目?"
  launching-your-own-open-source-project: "发起自己的开源项目"
  naming-and-branding-your-project: "为项目命名及设立品牌"
  your-pre-launch-checklist: "发起项目之前的检查项"
order: 2
image: /assets/images/cards/beginner.png
---

## 什么是开源，为什么要开源


所以你在考虑开始参与开源？恭喜！世界赞赏你的贡献。让我们来谈谈开源是什么，以及人们这样做。

### “开源”是什么意思？

当一个项目被开源，这意味着**任何人都可以出于任何目的查看，使用，修改和分发你的项目**。 这些权限通过[开源许可](https://opensource.org/licenses)强制实施。

开源是强大的，因为它降低了事物被采纳的障碍，允许想法迅速传播。

要了解它的工作原理，想象你的朋友组织了一场聚餐，而你带去了一个樱桃派。

* 每个人都尝了那个派（_使用_)
* 派的味道棒极了！大家请你分享它的配方（_view_）
* 一个叫 Alex 的朋友是个糕点师，他建议少放点糖（_modify_）
* 一个叫 Lisa 的朋友想要用它作为下周的晚餐（_distribute_）

相比之下，一个闭源过程就像去一家餐厅订购一个樱桃派。你必须为了吃饼支付费用，餐厅恐怕不会给你他们的食谱。如果你准确地复制了他们的馅饼，并以你自己的名义出售，餐厅可以对你采取措施。

### 人们为什么把他们的作品开源？

<aside markdown="1" class="pquote">
  <img src="https://avatars1.githubusercontent.com/u/1500684?v=3&s=460" class="pquote-avatar" alt="avatar">
我从开源使用和协作中获得的最有价值的经验之一，就是在我面临许多与其他开发人员相同问题的过程中所建立的联系。
  <p markdown="1" class="pquote-credit">
    — @kentcdodds, [“参与开源对我来说太棒了”](https://medium.com/@kentcdodds/how-getting-into-open-source-has-been-awesome-for-me-8480cd756a80#.pjt9oqp4w)
  </p>
</aside>

个人或组织为何想要开源一个项目，[有各种各样的的原因](http://ben.balter.com/2015/11/23/why-open-source/)，例如：

* **协作：** 开源项目可以接受世界各地人们的修改。 例如 [Exercism](https://github.com/exercism/) 就是一个拥有350多个贡献者的练习平台。

* **采用和重组：** 任何人几乎可以出于任何目的使用开源项目。人们甚至可以使用它来构建其他东西。例如，[WordPress](https://github.com/WordPress) 就是派生自一个名为 [b2](https://github.com/WordPress/book/blob/master/Content/Part%201/2-b2-cafelog.md) 的现有项目。

* **透明度：** 任何人都可以检查开源项目是否有错误或不一致。 透明度对[保加利亚](https://medium.com/@bozhobg/bulgaria-got-a-law-requiring-open-source-98bf626cf70a) 或[美国](https://sourcecode.cio.gov/)等政府，银行或医疗保健等受监管行业以及 [Let's Encrypt](https://github.com/letsencrypt) 等安全软件都很重要。

开源并不仅仅限于软件。您可以开源任何事物，从数据集到书本。查看 [GitHub Explore](https://github.com/explore) 开找找有什么是你可以开源的。

### 开源是指“免费”吗？

开源最大的吸引之一是它不花钱。 但是，“免费”只是开源的总体价值的一个副产品。

因为[开源许可证要求](https://opensource.org/osd-annotated)任何人可以几乎出于任何目使用，修改和共享您的项目，项目本身往往是免费的。 如果该项目花钱使用，任何人也都可以合法地复制和使用免费版本。

因此，大多数开源项目是免费的，但“免费”不是开源定义的一部分。 有些方法可以通过双重许可或有限功能间接地为开源项目收费，同时仍然遵守开源的官方定义。

## 我是否应该发起我自己的开源项目?

简单来说，答案是肯定的，因为无论结果如何，启动您自己的项目来了解开源的工作原理是一个好方法。

如果你从来没有创建过一个项目，你可能会担心人们会说什么，或者是否有人会注意到。 如果这听起来像你现在的状态，别担心，你并不孤独！

开源工作就像任何其他充满创意的活动，无论是写作还是绘画。 向世界分享你的作品会让你提心吊胆，但唯有练习能够让你的感觉变好的方法 - 即使你没有观众。

如果你还不确信，请花一点时间思考你的目标可能是什么。

### 设置你的目标

目标可以帮助你弄清该做什么，不应该说什么，以及你在哪方面需要其他人的帮助。 首先问自己，_我是为什么开源这个项目？_

这个问题没有标准答案。 对于一个项目你可以有多个目标，或者具有不同目标的不同项目。

如果你唯一的目标是炫耀你的工作，你甚至可能不需要他人的贡献，甚至在你的 README 中说明这点。但另一方面，如果你需要贡献者，你会投入时间来使文档清晰，好让新的参与者感到欢迎。

<aside markdown="1" class="pquote">
  <img src="https://avatars2.githubusercontent.com/u/3520168?v=3&s=460" class="pquote-avatar" alt="avatar">
在某些时候，我创建了一个自己正在使用的自定义 UIAlertView，我决定将它开源。所以我修改它使其更有活力，并把它上传到了 GitHub。我还写了我的第一个文档，解释给其他开发人员如何在他们的项目中使用它。很可能没有人会去使用它，因为它是一个简单的项目，但我的贡献让我感觉很好。 
  <p markdown="1" class="pquote-credit">
— @mavris, [“自学的软件开发者：为什么开源对我们那么重要”](https://medium.com/rocknnull/self-taught-software-engineers-why-open-source-is-important-to-us-fe2a3473a576#.zhwo5krlq)
  </p>
</aside>

随着你的项目增长，你的社区可能不仅需要你的代码。回应问题，审查代码和传播你的项目都会成为开源项目中的重要任务。

而你在非编码的任务上花费的时间将取决于项目的大小和范围，你应该准备好作为维护者来自己解决或找人帮助你。

**如果你是公司开源项目的一部分，** 确保你的项目有它需要茁壮成长的内部资源。 你需要确定谁在启动后负责维护项目，以及如何与你的社区共享这些任务。

如果你需要专门的预算或人员来促进，操作和维护项目，请尽早提出。

<aside markdown="1" class="pquote">
  <img src="https://avatars2.githubusercontent.com/u/1857993?v=3&s=460" class="pquote-avatar" alt="avatar">
当你开始开源一个项目时，确保您的管理流程考虑到您项目周围社区的贡献和能力很重要。不要害怕让那些没有在你的企业中受雇的贡献者参与项目的关键部分 - 尤其如果他们是频繁的贡献者的话。
  <p markdown="1" class="pquote-credit">
— @captainsafia, [“所以你想开源一个项目，是吗？”](https://writing.safia.rocks/2016/12/06/so-you-wanna-open-source-a-project-eh/)
  </p>
</aside>

### 加入其他项目

如果你的目标是学习如何与他人合作或了解开源的工作方式，请考虑为现有项目做出贡献。从你已经使用并喜欢的项目开始。像修复拼写错误或更新文档简单的事也能为项目做出贡献。

如果你不知道如何开始作为贡献者，请查看我们的[如何贡献开源指南](../how-to-contribute/)。

## 发起自己的开源项目

即使你没有很好的时间来开源你的工作。你也可以开源一个想法，正在进行中的工作，或是关闭了多年的源码。

一般来说，如果你乐意于他人对你工作的查看和反馈，你就应该开源你的项目。

无论您决定开展项目的哪个阶段，每个项目都应包括以下文档：

* [Open source license](https://help.github.com/articles/open-source-licensing/#where-does-the-license-live-on-my-repository)
* [README](https://help.github.com/articles/create-a-repo/#commit-your-first-change)
* [Contributing guidelines](https://help.github.com/articles/setting-guidelines-for-repository-contributors/)
* [Code of conduct](../code-of-conduct/)

作为维护者，这些组件将帮助你交流你的期望，管理贡献并保护每个人的合法权益（也包括您自己的）。他们能够大大增加你积极体验的机会。

如果您的项目在 GitHub 上，则将这些文件放在您的根目录中，并使用推荐的文件名将有助于 GitHub 识别并自动将其显示给读者。

### 选择一个许可证 (license)

开源许可证保证其他人可以使用，复制，修改和贡献给您的项目，而不会产生不良后果。 它也可以保护您免受繁琐的法律影响。**启动开源项目时，请务必包含许可证。**

法律工作是非常无趣的。但好消息是，您可以将现有许可证复制并粘贴到存储库中。只需要花这么一点时间，就能保护你的辛苦工作。

[MIT](https://choosealicense.com/licenses/mit/), [Apache 2.0](https://choosealicense.com/licenses/apache-2.0/),  和 [GPLv3](https://choosealicense.com/licenses/gpl-3.0/) 都是非常流行的开源许可证， 但你可以选择[其他选项](https://choosealicense.com).

当你在GitHub上创建新项目时，你可以选择许可证。包括开源许可证将使你的GitHub项目成为开源。

![挑选一个许可证](/assets/images/starting-a-project/repository-license-picker.png)

如果您在管理开放源码项目的法律方面有其他问题或疑虑，我们已经[在这里](../legal/)介绍了。

### 编写自述文件 (README)

自述文件不仅仅是用于说明如何使用你的项目。他们还可以解释你的项目为什么重要，以及它可以为你的用户做什么。

在您的自述文件中，尝试回答以下问题：

* 这个项目做什么？
* 为什么这个项目有用？
* 如何开始？
* 如果需要，我可以在哪里获得更多的帮助？

您可以使用自己的README回答其他问题，例如处理贡献，项目的目标以及许可证和归属信息。 如果您不想接受他人的贡献，或者您的项目尚未准备好作为产品提供使用，请将这些信息写下来。

<aside markdown="1" class="pquote">
  <img src="https://avatars0.githubusercontent.com/u/168572?v=3&s=460" class="pquote-avatar" alt="avatar">
更好的文档意味着更多的用户，更少的求助和更多的贡献者，等等。要记住你的读者不是你自己。来到项目中的每个人可能有着截然不同的经历。
  <p markdown="1" class="pquote-credit">
— @limedaring, ["这样写给他人看（视频）"](https://www.youtube.com/watch?v=8LiV759Bje0&list=PLmV2D6sIiX3U03qc-FPXgLFGFkccCEtfv&index=10)
  </p>
</aside>

有时，人们会因为觉得项目未完成而不愿意撰写 README，或者他们不希望做出贡献。这些都是写一个 README 的很好的理由。

想要获得更多灵感，请尝试使用 @18F 的 ["让 README 可读"](https://pages.18f.gov/open-source-guide/making-readmes-readable/) 或者 @PurpleBooth 的 [README 模板](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2) 来撰写一个完整的 README。

当你在根目录中包含一个 README 文件时，GitHub 会自动将其显示在存储库的主页上。

### 编写你的贡献指南

贡献文件 (CONTRIBUTING file) 告诉你的受众如何参与你的项目. 例如，你可以包括一下信息:

* 如何提交错误报告（尝试使用[issue 和 pull request 模板](https://github.com/blog/2111-issue-and-pull-request-templates)）
* 如何建议一个新功能
* 如何配置你的环境和运行测试

除了技术细节， 贡献文件也是一个供你传达对贡献期待的机会， 例如：

* 你在寻求的贡献类型
* 你项目的路线图或者版本
* 贡献者应该（或者不应该）如何与你取得联系

温柔友好的逾期和向贡献者们提供具体的建议（例如写文档或者搭建一个网页）能够有效地使新人感到受欢迎并乐于参与其中。

例如，[Active Admin](https://github.com/activeadmin/activeadmin/) 以这样的方式开始[它的贡献指南](https://github.com/activeadmin/activeadmin/blob/master/CONTRIBUTING.md)：

> 首先， 非常感谢你考虑为 Active Admin 贡献帮助。正式你这样的人们使得 Active Admin 成为了如此优秀的工具。

在你项目开始的初期，你的贡献文件可以很简单。你应该经常解释如何提交错误和文件问题，以及关于如何作出贡献的技术问题（例如测试）。

随着时间的推移，你硬弓增加其他常见问题到你的贡献文件中去。写下这些信息意味着问你相同问题的人会越来越少。

想要获得更多有关编写贡献文件的方式，请查阅 @nayafia 的 [贡献指南模板](https://github.com/nayafia/contributing-template/blob/master/CONTRIBUTING-template.md) 或者 @mozilla 的 [“如何构建 CONTRIBUTION.md”](http://mozillascience.github.io/working-open-workshop/contributing/)。

来你的 README 中链接你的 CONTRIBUTING，这样更多人就能看到他。如果你[在你的项目中放入了 CONTRIBUTING 文件](https://help.github.com/articles/setting-guidelines-for-repository-contributors/)，当一个贡献者创建 issue 或者开启一个 pull request 时，GitHub 会自动链接你的文件。

![贡献指南](/assets/images/starting-a-project/Contributing-guidelines.jpg)

### 建立行为规范

<aside markdown="1" class="pquote">
  <img src="https://avatars3.githubusercontent.com/u/11214?v=3&s=460" class="pquote-avatar" alt="avatar">
  我们都有过这样的关于重复劳动的经验，无论是维护者试着解释为什么某些事物必须通过某种明确的方式执行，或者是用户...提出一个简单的问题。行为规范成为一个便利的参考和可链接的文档标明你的团队会认真对待具有建设性的讨论。
  <p markdown="1" class="pquote-credit">
— @mlynch, [“让开源成为一个有趣的地方”](https://medium.com/ionic-and-the-mobile-web/making-open-source-a-happier-place-3b90d254f5f#.v4qhl7t7v)
  </p>
</aside>

最后，行为规范有助于为你项目的参与者车里行为规则。这在你为社区或者项目推出一个开源项目的时候尤为有价值。一份行为帮助你促进健康，有建设性的社区行为，这也会减轻你作为维护者的压力。

更多信息，请参见 [行为规范指导](../code-of-conduct/)。

除了传达你期待参与者**如何**行动，行为规范也倾向于描述这些期待针对谁，适用于何时，以及对于违规行为的处理方法。

就像开源许可证一样，有现成的行为规范，所以你不必自己编写。[贡献者公约](http://contributor-covenant.org/)是一个行之有效的行为规范，已经被用在[超过4000个开源项目](http://contributor-covenant.org/adopters/)，包括 Kubernetes，Rails，以及 Swift。无论你使用哪一种，你都应该准备好在必要时执行行为规范。

将文本直接粘贴到项目存储库中的 CODE_OF_CONDUCT 文件中。将文件保存在项目的根目录中，以便轻松找到，并从 README 中链接到它。

## 为项目命名及设立品牌

Branding is more than a flashy logo or catchy project name. It's about how you talk about your project, and who you reach with your message.

### Choosing the right name

Pick a name that is easy to remember and, ideally, gives some idea of what the project does. For example:

* [Sentry](https://github.com/getsentry/sentry) monitors apps for crash reporting
* [Thin](https://github.com/macournoyer/thin) is a fast and simple Ruby web server

If you're building upon an existing project, using their name as a prefix can help clarify what your project does (ex. [node-fetch](https://github.com/bitinn/node-fetch) brings `window.fetch` to Node.js).

Consider clarity above all. Puns are fun, but remember that some jokes might not translate to other cultures or people with different experiences from you. Some of your potential users might be company employees: you don't want to make them uncomfortable when they have to explain your project at work!

### Avoiding name conflicts

[Check for open source projects with a similar name](http://ivantomic.com/projects/ospnc/), especially if you share the same language or ecosystem. If your name overlaps with a popular existing project, you might confuse your audience.

If you want a website, Twitter handle, or other properties to represent your project, make sure you can get the names you want. Ideally, [reserve those names now](https://instantdomainsearch.com/) for peace of mind, even if you don't intend to use them just yet.

Make sure that your project's name doesn't infringe upon any trademarks. A company might ask you to take down your project later on, or even take legal action against you. It's just not worth the risk.

You can check the [WIPO Global Brand Database](http://www.wipo.int/branddb/en/) for trademark conflicts. If you're at a company, this is one of the things your [legal team can help you with](../legal/).

Finally, do a quick Google search for your project name. Will people be able to easily find your project? Does something else appear in the search results that you wouldn't want them to see?

### How you write (and code) affects your brand, too!

Throughout the life of your project, you'll do a lot of writing: READMEs, tutorials, community documents, responding to issues, maybe even newsletters and mailing lists.

Whether it's official documentation or a casual email, your writing style is part of your project's brand. Consider how you might come across to your audience and whether that is the tone you wish to convey.

<aside markdown="1" class="pquote">
  <img src="https://avatars0.githubusercontent.com/u/11321?v=3&s=460" class="pquote-avatar" alt="avatar">
  I tried to be involved with every thread on the mailing list, and showing exemplary behaviour, being nice to people, taking their issues seriously and trying to be helpful overall. After a while, people stuck around not to only ask questions, but to help with the answering as well, and to my complete delight, they mimicked my style.
  <p markdown="1" class="pquote-credit">
— @janl on [CouchDB](https://github.com/apache/couchdb), ["Sustainable Open Source"](http://writing.jan.io/2015/11/20/sustainable-open-source.html)
  </p>
</aside>

Using warm, inclusive language (such as "them", even when referring to the single person) can go a long way in making your project feel welcoming to new contributors. Stick to simple language, as many of your readers may not be native English speakers.

Beyond how you write words, your coding style may also become part of your project's brand. [Angular](https://github.com/johnpapa/angular-styleguide) and [jQuery](http://contribute.jquery.org/style-guide/js/) are two examples of projects with rigorous coding styles and guidelines.

It isn't necessary to write a style guide for your project when you're just starting out, and you may find that you enjoy incorporating different coding styles into your project anyway. But you should anticipate how your writing and coding style might attract or discourage different types of people. The earliest stages of your project are your opportunity to set the precedent you wish to see.

## 发起项目之前的检查项

Ready to open source your project? Here's a checklist to help. Check all the boxes? You're ready to go! [Click "publish"](https://help.github.com/articles/making-a-private-repository-public/) and pat yourself on the back.

**Documentation**

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox1" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox1" class="overflow-hidden d-block text-normal">
    Project has a LICENSE file with an open source license
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox2" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox2" class="overflow-hidden d-block text-normal">
    Project has basic documentation (README, CONTRIBUTING, CODE_OF_CONDUCT)
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox3" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox3" class="overflow-hidden d-block text-normal">
    The name is easy to remember, gives some idea of what the project does, and does not conflict with an existing project or infringe on trademarks
  </label>
</div>

<div class="clearfix mb-4">
  <input type="checkbox" id="cbox4" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox4" class="overflow-hidden d-block text-normal">
    The issue queue is up-to-date, with issues clearly organized and labeled
  </label>
</div>

**Code**

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox5" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox5" class="overflow-hidden d-block text-normal">
    Project uses consistent code conventions and clear function/method/variable names
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox6" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox6" class="overflow-hidden d-block text-normal">
    The code is clearly commented, documenting intentions and edge cases
  </label>
</div>

<div class="clearfix mb-4">
  <input type="checkbox" id="cbox7" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox7" class="overflow-hidden d-block text-normal">
    There are no sensitive materials in the revision history, issues, or pull requests (ex. passwords or other non-public information)
  </label>
</div>

**People**

If you're an individual:

<div class="clearfix mb-4">
  <input type="checkbox" id="cbox8" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox8" class="overflow-hidden d-block text-normal">
  You've talked to the legal department and/or understand the IP and open source policies of your company (if you're an employee somewhere)
  </label>
</div>

If you're a company or organization:

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox9" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox9" class="overflow-hidden d-block text-normal">
    You've talked to your legal department
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox10" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox10" class="overflow-hidden d-block text-normal">
    You have a marketing plan for announcing and promoting the project
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox11" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox11" class="overflow-hidden d-block text-normal">
    Someone is committed to managing community interactions (responding to issues, reviewing and merging pull requests)
  </label>
</div>

<div class="clearfix mb-4">
  <input type="checkbox" id="cbox12" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox12" class="overflow-hidden d-block text-normal">
    At least two people have administrative access to the project
  </label>
</div>

## You did it!

Congratulations on open sourcing your first project. No matter the outcome, working in public is a gift to the community. With every commit, comment, and pull request, you're creating opportunities for yourself and for others to learn and grow.
