---
lang: ja
title: オープンソースメトリクス
description: 成功の度合いを計測し続けることで、データをもとにしてあなたのオープンソースプロジェクトに関する意思決定を行おう。
class: metrics
order: 9
image: /assets/images/cards/metrics.png
related:
  - finding
  - best-practices
---

## なぜあらゆるものを計測するか？

データを賢く使うことで、オープンソースのメンテナーとしてより良い意思決定を行う助けとなります。

より多くの情報を得ることによって、下記が可能となります：

* ユーザーが新機能に対してどう反応しているかを理解する
* 新しいユーザーがどこから来ているのかを把握する
* 滅多にないユースケースや滅多に使われない機能を機能を特定し、今後サポートするかどうかを決める
* プロジェクトの人気を定量化する
* プロジェクトがどのように使われているかを理解する
* スポンサーや補助金によって資金を獲得する

例えば、[Homebrew](https://github.com/Homebrew/brew/blob/bbed7246bc5c5b7acb8c1d427d10b43e090dfd39/docs/Analytics.md)では、Google Analyticsを使うことでやることの優先順位付けの役に立つということに気づきました：

> Homebrewは無償で提供されており、ボランティアが空き時間で運営しています。その結果、Homebrewユーザーについて調査を行って将来の機能を設計する最善の方法を検討したり、現在の作業の優先順位付けを行うためのリソースが不足しています。匿名化されたユーザー解析を行うことによって、人々がHomebrewをいつ、どこで、どのように使っているかを知ることができ、修正や機能の優先順位付けができるようになっています。

人気を得ることだけが全てではありません。人々がオープンソースプロジェクトに参加する理由は様々です。メンテナーとしてのあなたのゴールが注目を集めることであったり、あなたのコードを共有すること、もしくは単に楽しみたいのであれば、メトリクスはあなたにとって重要ではないかもしれません。

もしあなたがプロジェクトをより深いレベルで _理解したいと思っている_ のであれば、以降を読んでプロジェクトの活動を分析する方法を学びましょう。

## 発見

他の人があなたのプロジェクトにコントリビュートしてくれるようになるには、彼らにあなたのプロジェクトの存在を知ってもらう必要があります。この質問を自問してみましょう: _人々はこのプロジェクトをみつけられているだろうか？_

![トラフィックグラフ](/assets/images/metrics/repo_traffic_graphs_tooltip.png)

もしプロジェクトをGitHub上にホストしているのであれば、何人があなたのプロジェクトを訪れていて、どこから来たのかを[見ることが出来ます](https://help.github.com/articles/about-repository-graphs/#traffic)。プロジェクトのページで、"Insights"をクリックし、"Traffic"をクリックします。このページでは、下記を見ることが出来ます:
 
* **トータルページビュー:** プロジェクトが何回閲覧されたか

* **トータルユニークビジター:** プロジェクトが何人に閲覧されたか

* **参照しているサイト:** 訪問者がどこから来たか。この指標は、どこでプロジェクトに興味がある人に接触することができるかを把握したり、宣伝がうまくいっているかどうかを判断する助けとなります。

* **人気のあるコンテンツ:** 訪問者がプロジェクト上のどこを閲覧しているか。ページビューとユニークビジターをコンテンツごとに把握することが出来ます。

[GitHubのスター](https://help.github.com/articles/about-stars/)も、プロジェクトの人気を測る上での基準となります。GitHubのスターは必ずしもプロジェクトのダウンロード数や利用数と関連していませんが、何人がプロジェクトの通知を受け取っているかを知ることが出来ます。

また、[特定の場所での見つけやすさ](https://opensource.com/business/16/6/pirate-metrics)もトラッキングしたいかもしれません：例えば、Google PageRank、プロジェクトのウェブサイトからの流入や他のオープンソースプロジェクトやウェブサイトからの流入などです。

## 使われ方

人々は、インターネットという荒野であなたのプロジェクトを見つけようとしているのです。理想的には、あなたのプロジェクトを見かけたらすぐに、使いたいと思って欲しいわけです。そこで、あなたが気になるであろう2つ目の質問はこれです： _人々はこのプロジェクトを使っているだろうか？_

もしプロジェクトを配布するのにnpmやRubyGems.orgのようなパッケージマネジャーを使っているのであれば、プロジェクトのダウンロード数をトラッキングできるかもしれません。

パッケージマネジャーごとに「ダウンロード」の定義は若干異なりますし、ダウンロードしたからといって必ずしもインストールしたり使ったりするわけではありません。しかし、比較のための基準にはなりえます。様々な有名なパッケージマネジャー間で利用統計をトラックする[Libraries.io](https://libraries.io/)を使ってみましょう。

もしプロジェクトをGitHubでホストしているのであれば、再度"Traffic"ページを見てみましょう。そこでは[clone graph](https://github.com/blog/1873-clone-graphs)によって、あなたのプロジェクトが日毎に何度クローンされたか、トータルのクローン数とクローンを実行したユニークユーザー数を見ることが出来ます。

![Clone graph](/assets/images/metrics/clone_graph.png)

If usage is low compared to the number of people discovering your project, there are two issues to consider. Either:

* Your project isn't successfully converting your audience, or
* You're attracting the wrong audience

For example, if your project lands on the front page of Hacker News, you'll probably see a spike in discovery (traffic), but a lower conversion rate, because you're reaching everyone on Hacker News. If your Ruby project is featured at a Ruby conference, however, you're more likely to see a high conversion rate from a targeted audience.

Try to figure out where your audience is coming from and ask others for feedback on your project page to figure out which of these two issues you're facing.

Once you know that people are using your project, you might want to try to figure out what they are doing with it. Are they building on it by forking your code and adding features? Are they using it for science or business?

## Retention

People are finding your project and they're using it. The next question you'll want to ask yourself is: _are people contributing back to this project?_

It's never too early to start thinking about contributors. Without other people pitching in, you risk putting yourself into an unhealthy situation where your project is _popular_ (many people use it) but not _supported_ (not enough maintainer time to meet demand).

Retention also requires an [inflow of new contributors](http://blog.abigailcabunoc.com/increasing-developer-engagement-at-mozilla-science-learning-advocacy#contributor-pathways_2), as previously active contributors will eventually move on to other things.

Examples of community metrics that you may want to regularly track include:

* **Total contributor count and number of commits per contributor:** Tells you how many contributors you have, and who's more or less active. On GitHub, you can view this under "Insights" -> "Contributors." Right now, this graph only counts contributors who have committed to the default branch of the repository.

![Contributor graph](/assets/images/metrics/repo_contributors_specific_graph.png)

* **First time, casual, and repeat contributors:** Helps you track whether you're getting new contributors, and whether they come back. (Casual contributors are contributors with a low number of commits. Whether that's one commit, less than five commits, or something else is up to you.) Without new contributors, your project's community can become stagnant.

* **Number of open issues and open pull requests:** If these numbers get too high, you might need help with issue triaging and code reviews.

* **Number of _opened_ issues and _opened_ pull requests:** Opened issues means somebody cares enough about your project to open an issue. If that number increases over time, it suggests people are interested in your project.

* **Types of contributions:** For example, commits, fixing typos or bugs, or commenting on an issue.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/arfon?s=180" class="pquote-avatar" alt="avatar">
  Open source is more than just code. Successful open source projects include code and documentation contributions together with conversations about these changes.
  <p markdown="1" class="pquote-credit">
— @arfon, ["The Shape of Open Source"](https://github.com/blog/2195-the-shape-of-open-source)
  </p>
</aside>

## Maintainer activity

Finally, you'll want to close the loop by making sure your project's maintainers are able to handle the volume of contributions received. The last question you'll want to ask yourself is: _am I (or are we) responding to our community?_

Unresponsive maintainers become a bottleneck for open source projects. If someone submits a contribution but never hears back from a maintainer, they may feel discouraged and leave.

[Research from Mozilla](https://docs.google.com/presentation/d/1hsJLv1ieSqtXBzd5YZusY-mB8e1VJzaeOmh8Q4VeMio/edit#slide=id.g43d857af8_0177) suggests that maintainer responsiveness is a critical factor in encouraging repeat contributions.

Consider tracking how long it takes for you (or another maintainer) to respond to contributions, whether an issue or a pull request. Responding doesn't require taking action. It can be as simple as saying: _"Thanks for your submission! I'll review this within the next week."_

You could also measure the time it takes to move between stages in the contribution process, such as:

* Average time an issue remains open
* Whether issues get closed by PRs
* Whether stale issues get closed
* Average time to merge a pull request

## Use 📊 to learn about people

Understanding metrics will help you build an active, growing open source project. Even if you don't track every metric on a dashboard, use the framework above to focus your attention on the type of behavior that will help your project thrive.
