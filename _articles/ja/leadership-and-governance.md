---
lang: ja
title: リーダーシップと組織運営
description: 意思決定するためのルールを決めることで、オープンソースプロジェクトを成長させる助けとなります
class: leadership
order: 6
image: /assets/images/cards/leadership.png
related:
  - best-practices
  - metrics
---

## 成長中のプロジェクトの運営方法を理解しよう

あなたのプロジェクトは成長しており、人々が携わっていて、あなたは物事がこのまま進むように維持することに熱心でしょう。この段階では、あなたはどのようにして通常のコントリビューターをワークフローに組み込むのが良いか悩んでいるかもしれません。誰かにコミット権限を与えるかどうかであったり、コミュニティの議論をどのように収集させるのかであったり。もしこういった疑問があるのであれば、私達は答えを知っています。

## オープンソースプロジェクトで使われる公式の役割の例はなんですか？

多くのプロジェクトでは、コントリビューターの役割は似たようなものを使っています。

しかし、こういった役割が実際の所何を意味するのかは、完全にあなた次第です。下記にあなたが知っているであろう役割を挙げます：

* **メンテナー**
* **コントリビューター**
* **コミッター**

**幾つかのプロジェクトでは、「メンテナー」は** コミット権限を持っている唯一の人です。他のプロジェクトでは、単にREADMEにメンテナーとして記載されている人であることもあります。

メンテナーはプロジェクトでコードを書いている人である必要はありません。プロジェクトの布教を熱心に行っている人でも良いですし、多くのドキュメントを書くことで他の人がプロジェクトにアクセスしやすくしている人でも良いのです。日常的に何をやっているのかにかかわらず、メンテナーはプロジェクトの方向性に責任を持っていると感じていて、またプロジェクトを改善するのに熱心である人でしょう。

**「コントリビューター」は誰でもなり得ます。** それは、イシューやプルリクエストにコメントを書いている人かもしれないし、プロジェクトに価値を与える（イシューを選別する、コードを書く、イベントを運営するなど）人かもしれないし、プルリクエストをマージしてもらった人（おそらくこれが最も狭義のコントリビューターの定義です）かもしれません。

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/mikeal?s=180" class="pquote-avatar" alt="avatar">
  \[Node.jsでは、\] イシューにコメントした人やコードを書いた人は皆コミュニティのメンバーなのです。彼らに会えたということは、ユーザーからコントリビュータへの一線を越えたということを意味しています。
  <p markdown="1" class="pquote-credit">
— @mikeal, ["Healthy Open Source"](https://medium.com/the-javascript-collection/healthy-open-source-967fa8be7951)
  </p>
</aside>

**「コミッター」という言葉は** コミットアクセスという特定の種類の責務を、他の種類のコントリビュートと区別するために使われるでしょう。

あなたの好きなようにプロジェクトの役割を定義できますが、より多くの種類のコントリビュートを奨励するためにより[広い定義を検討しましょう](../how-to-contribute/#貢献するということが意味するもの)。プロジェクトに多大な貢献をしている人に対しては、その人の技術スキルがどうであれ、その人の貢献を公式に認めるために、リーダーの役割を使うことができます。

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/jacobian?s=180" class="pquote-avatar" alt="avatar">
  皆さんは私のことをDjangoの「発明者」と認識しているかもしれません...しかし、実際は私は作られてから1年後に採用された人間なのです。 (...) 皆さんは私のプログラミングスキルのおかげで成功したと思うかもしれません...しかし、私はせいぜい平均的なプログラマーなのです。
  <p markdown="1" class="pquote-credit">
— @jacobian, ["PyCon 2015 Keynote" (video)](https://www.youtube.com/watch?v=hIJdFxYlEKE#t=5m0s)
  </p>
</aside>

## どのようにしてリーダーシップの役割を明確なものにするのか？

リーダーシップの役割を明確にすることで、人々に責任を持たせ、他のコミュニティメンバーが助けが必要な時に誰に聞くべきかが明確になります。

小さいプロジェクトでは、リーダーを任命することは単にREADMEやCONTRIBUTORSファイルに名前を追加するだけで済むこともあります。

大きなプロジェクトでは、ウェブサイトを持っているのであれば、チームページやプロジェクトリーダーのリストのページを作りましょう。例えば、[Postgres](https://github.com/postgres/postgres/) では [チームのリストページ](https://www.postgresql.org/community/contributors/) に各コントリビュータの短いプロフィールを記載しています。

もしあなたのプロジェクトのコントリビュータが非常に活発なのであれば、メンテナーの「コアチーム」を作ったり、異なる問題領域ごと（例えば、セキュリティ、イシューの選別、コミュニティ運営）に席にを持つ分科会を持っているかもしれません。あなたが指名するのではなく、人々が自分の興味のある領域の役割に自律的にボランティアしてくれるように任せましょう。

<aside markdown="1" class="pquote">
  \[私達は\] コアチームに対して、幾つかの「サブチーム」で支えています。各サブチームはそれぞれ特定の領域にフォーカスしています。例えば、言語設計やライブラリなどです。 (...) 世界をまたがるコラボレーションと、プロジェクト全体として協力で一貫したビジョンを維持するために、各サブチームはコアチームのメンバーによってリードされています。
  <p markdown="1" class="pquote-credit">
— ["Rust Governance RFC"](https://github.com/rust-lang/rfcs/blob/master/text/1068-rust-governance.md)
  </p>
</aside>

リーダーシップチームは(IRCのような)専用のチャンネルを作りたいと思ったり、プロジェクトについて定期的に議論するために(Gitter上やGoogle Hangout上で)集まりたいと思うかもしれません。こういったミーティングでさえも公にする事で、他の人も議論を聞けるようにしましょう。例えば、[Cucumber-ruby](https://github.com/cucumber/cucumber-ruby) では、 [毎週オフィスアワーを設けています](https://github.com/cucumber/cucumber-ruby/blob/master/CONTRIBUTING.md#talking-with-other-devs)。

一度リーダーシップの役割を確立したなら、どのようにして彼らにコンタクトを取れるかドキュメントにまとめることを忘れないようにしましょう。メンテナーにどのようにしたらなれるかであったりどのように分科会に参加するのかのプロセスを明確に確立し、GOVERNANCE.mdファイルにそれを記載しましょう。

[Vossibility](https://github.com/icecrime/vossibility-stack) のようなツールは、プロジェクトに対するコントリビュートを誰がやっているのか（やっていないのか）を公にトラッキングするのに役立ちます。こういった情報をドキュメント化することで、メンテナーは非公開の場で意思決定を行う派閥を作っているとコミュニティから認識されることを避けることができます。

最後に、プロジェクトがGitHub上にあるのであれば、プロジェクトを個人アカウントからOrganizationに移し、少なくとも一人の管理者をバックアップとして追加することを検討しましょう。[GitHub Organizations](https://help.github.com/articles/creating-a-new-organization-account/) を使うことで、権限や複数のリポジトリを管理し、[所有権を共有することで](../building-community/#プロジェクトの所有権を共有しよう)プロジェクトの資産を守ることがやりやすくなります。

## いつ他の人にコミット権限を与えるべきだろうか？

Some people think you should give commit access to everybody who makes a contribution. Doing so could encourage more people to feel ownership of your project.

On the other hand, especially for bigger, more complex projects, you may want to only give commit access to people who have demonstrated their commitment. There's no one right way of doing it - do what makes you most comfortable!

If your project is on GitHub, you can use [protected branches](https://help.github.com/articles/about-protected-branches/) to manage who can push to a particular branch, and under which circumstances.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/felixge?s=180" class="pquote-avatar" alt="avatar">
  Whenever somebody sends you a pull request, give them commit access to your project. While it may sound incredibly stupid at first, using this strategy will allow you to unleash the true power of GitHub. (...) Once people have commit access, they are no longer worried that their patch might go unmerged...causing them to put much more work into it.
  <p markdown="1" class="pquote-credit">
— @felixge, ["The Pull Request Hack"](https://felixge.de/2013/03/11/the-pull-request-hack.html)
  </p>
</aside>

## What are some of the common governance structures for open source projects?

There are three common governance structures associated with open source projects.

* **BDFL:** BDFL stands for "Benevolent Dictator for Life". Under this structure, one person (usually the initial author of the project) has final say on all major project decisions. [Python](https://github.com/python) is a classic example. Smaller projects are probably BDFL by default, because there are only one or two maintainers. A project that originated at a company might also fall into the BDFL category.

* **Meritocracy:** **(Note: the term "meritocracy" carries negative connotations for some communities and has a [complex social and political history](http://geekfeminism.wikia.com/wiki/Meritocracy).)** Under a meritocracy, active project contributors (those who demonstrate "merit") are given a formal decision making role. Decisions are usually made based on pure voting consensus. The meritocracy concept was pioneered by the [Apache Foundation](https://www.apache.org/); [all Apache projects](https://www.apache.org/index.html#projects-list) are meritocracies. Contributions can only be made by individuals representing themselves, not by a company.

* **Liberal contribution:** Under a liberal contribution model, the people who do the most work are recognized as most influential, but this is based on current work and not historic contributions. Major project decisions are made based on a consensus seeking process (discuss major grievances) rather than pure vote, and strive to include as many community perspectives as possible. Popular examples of projects that use a liberal contribution model include [Node.js](https://foundation.nodejs.org/) and [Rust](https://www.rust-lang.org/).

Which one should you use? It's up to you! Every model has advantages and trade-offs. And although they may seem quite different at first, all three models have more in common than they seem. If you're interested in adopting one of these models, check out these templates:

* [BDFL model template](http://oss-watch.ac.uk/resources/benevolentdictatorgovernancemodel)
* [Meritocracy model template](http://oss-watch.ac.uk/resources/meritocraticgovernancemodel)
* [Node.js's liberal contribution policy](https://medium.com/the-node-js-collection/healthy-open-source-967fa8be7951)

## Do I need governance docs when I launch my project?

There is no right time to write down your project's governance, but it's much easier to define once you've seen your community dynamics play out. The best (and hardest) part about open source governance is that it is shaped by the community!

Some early documentation will inevitably contribute to your project's governance, however, so start writing down what you can. For example, you can define clear expectations for behavior, or how your contributor process works, even at your project's launch.

If you're part of a company launching an open source project, it's worth having an internal discussion before launch about how your company expects to maintain and make decisions about the project moving forward. You may also want to publicly explain anything particular to how your company will (or won't!) be involved with the project.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/caabernathy?s=180" class="pquote-avatar" alt="avatar">
  We assign small teams to manage projects on GitHub who are actually working on these at Facebook. For example, React is run by a React engineer.
  <p markdown="1" class="pquote-credit">
— @caabernathy, ["An inside look at open source at Facebook"](https://opensource.com/life/15/10/ato-interview-christine-abernathy-facebook)
  </p>
</aside>

## What happens if corporate employees start submitting contributions?

Successful open source projects get used by many people and companies, and some companies may eventually have revenue streams eventually tied to the project. For example, a company may use the project's code as one component in a commercial service offering.

As the project gets more widely used, people who have expertise in it become more in-demand - you may be one of them! - and will sometimes get paid for work they do in the project.

It's important to treat commercial activity as normal and as just another source of development energy. Paid developers shouldn't get special treatment over unpaid ones, of course; each contribution must be evaluated on its technical merits. However, people should feel comfortable engaging in commercial activity, and feel comfortable stating their use cases when arguing in favor of a particular enhancement or feature.

"Commercial" is completely compatible with "open source". "Commercial" just means there is money involved somewhere - that the software is used in commerce, which is increasingly likely as a project gains adoption. (When open source software is used as part of a non-open-source product, the overall product is still "proprietary" software, though, like open source, it might be used for commercial or non-commercial purposes.)

Like anyone else, commercially-motivated developers gain influence in the project through the quality and quantity of their contributions. Obviously, a developer who is paid for her time may be able to do more than someone who is not paid, but that's okay: payment is just one of many possible factors that could affect how much someone does. Keep your project discussions focused on the contributions, not on the external factors that enable people to make those contributions.

## Do I need a legal entity to support my project?

You don't need a legal entity to support your open source project unless you're handling money.

For example, if you want to create a commercial business, you'll want to set up a C Corp or LLC (if you're based in the US). If you're just doing contract work related to your open source project, you can accept money as a sole proprietor, or set up an LLC (if you're based in the US).

If you want to accept donations for your open source project, you can set up a donation button (using PayPal or Stripe, for example), but the money won't be tax-deductible unless you are a qualifying nonprofit (a 501c3, if you're in the US).

Many projects don't wish to go through the trouble of setting up a nonprofit, so they find a nonprofit fiscal sponsor instead. A fiscal sponsor accepts donations on your behalf, usually in exchange for a percentage of the donation. [Software Freedom Conservancy](https://sfconservancy.org/), [Apache Foundation](https://www.apache.org/), [Eclipse Foundation](https://eclipse.org/org/foundation/), [Linux Foundation](https://www.linuxfoundation.org/projects) and [Open Collective](https://opencollective.com/opensource) are examples of organizations that serve as fiscal sponsors for open source projects.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/piamancini?s=180" class="pquote-avatar" alt="avatar">
  Our goal is to provide an infrastructure that communities can use to be self sustainable, thus creating an environment where everyone — contributors, backers, sponsors — get concrete benefits out of it.
  <p markdown="1" class="pquote-credit">
— @piamancini, ["Moving beyond the charity framework"](https://medium.com/open-collective/moving-beyond-the-charity-framework-b1191c33141#.vgsbj9um9)
  </p>
</aside>

If your project is closely associated with a certain language or ecosystem, there may also be a related software foundation you can work with. For example, the [Python Software Foundation](https://www.python.org/psf/) helps support [PyPI](https://pypi.org/), the Python package manager, and the [Node.js Foundation](https://foundation.nodejs.org/) helps support [Express.js](https://expressjs.com/), a Node-based framework.
