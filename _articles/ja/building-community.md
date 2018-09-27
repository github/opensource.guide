---
lang: ja
title: 居心地の良いコミュニティを築こう
description: 人々があなたのプロジェクトを使ったり、貢献したり、人に伝えたくなるようなコミュニティを築きましょう
class: building
toc:
  あなたのプロジェクトの成功のためのお膳立てをしましょう: "あなたのプロジェクトの成功のためのお膳立てをしましょう"
  growing-your-community: "Growing your community"
  resolving-conflicts: "Resolving conflicts"
order: 4
image: /assets/images/cards/building.png
related:
  - best-practices
  - coc
---

## あなたのプロジェクトの成功のためのお膳立てをしましょう

あなたはプロジェクトを立ち上げて、あなたの言葉を広めており、人々は注目しています。素晴らしい！さて、彼らに定着してもらうのはどうしたら良いでしょうか？

居心地の良いコミュニティはあなたはプロジェクトの未来や評判への投資となります。プロジェクトで初めての貢献が行われるようになってきたら、初期のコントリビュータに良い経験を与え、また戻ってきやすくしましょう。

### 人々が歓迎されていると感じてもらいましょう

あなたのプロジェクトのコミュニティについて考える一つの方法として、@MikeMcQuaidが[contributor funnel](https://mikemcquaid.com/2018/08/14/the-open-source-contributor-funnel-why-people-dont-contribute-to-your-open-source-project/)と呼ぶものを使ってみましょう:

![Contributor funnel](/assets/images/building-community/contributor_funnel_mikemcquaid.png)

コミュニティを築く際、理屈の上ではファネルの一番上にいる人（潜在的なユーザー）が一番下（活動的なメンテナ）にどうやって向かって進むのかを考えましょう。あなたのゴールは、コントリビュータが各段階で経験する摩擦を減らすことです。もし人々が簡単に進めるのであれば、より多くのことをしたいと思う様になるでしょう。

まずはドキュメントから始めましょう：

* **あなたのプロジェクトを使いやすくしましょう** [親切なREADME](../starting-a-project/#READMEを書く) とわかりやすいコードの例によって、あなたのプロジェクトを初めて見る人が使い始めやすくなります。
* **貢献の仕方をわかりやすく説明しましょう**。その際、[CONTRIBUTINGファイルを使い](../starting-a-project/#貢献のガイドラインを書く)、イシューの状態を最新に保ちましょう。

[GitHubの2017 Open Source Survey](http://opensourcesurvey.org/2017/)では、未完成であったり混乱するドキュメントはオープンソースプロジェクトのユーザーにとって最大の問題である事が示されています。良いドキュメントによって人々をあなたのプロジェクトに招き入れるのです。結果として、イシューやプルリクエストを登録する人が出てきます。こういったやり取りを、ファネルを下がってもらう機会として利用しましょう。
 
* **新しくプロジェクトに参加してくれた人に対して、興味を示してくれた感謝の気持ちを伝えよう！** 一度ネガティブな経験をしただけで、人は戻ってきてくれなくなってしまいます。
* **すぐに返事を返すようにしよう** 一ヶ月もの間イシューに返事をしないと、おそらく彼らはあなたのプロジェクトのことを忘れ去ってしまうだろう。
* **どんな種類の貢献を受け入れるかについて柔軟になろう** 　多くのコントリビュータがバグレポートや小さな修正から始めます。プロジェクトへの[貢献には多くのやり方many ways to contribute](../how-to-contribute/#貢献するということが意味するもの)があります。人々が望むやり方で貢献できるように手助けしましょう。
* **受け入れられない貢献があった場合は、**彼らのアイデアに感謝を示して、なぜプロジェクトのスコープから外れているのかを[説明しましょう](../best-practices/#learning-to-say-no)。その際、関連するドキュメントも組み合わせましょう。

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/mikeal?s=180" class="pquote-avatar" alt="avatar">
  オープンソースに貢献することは一部の人にとってはより簡単なことです。間違ったことをしたり、場違いな事をして叱られるのではないかという大きな恐怖があります。コントリビュータに対して、技術力をあまり必要としない（ドキュメント、ウェブサイトのコンテンツ等）貢献ができる場を提供することで、そういった心配を大きく減らすことができます。
  <p markdown="1" class="pquote-credit">
— @mikeal, ["Growing a contributor base in modern open source"](https://opensource.com/life/16/5/growing-contributor-base-modern-open-source)
  </p>
</aside>

オープンソースのコントリビュータの大部分は「一時的なコントリビュータ」です：彼らはプロジェクトへの貢献を時々するだけの人々です。一時的なコントリビュータはあなたのプロジェクトに完全に精通する時間がないかもしれないので、あなたの仕事は彼らが貢献しやすくしてあげることです。

他のコントリビュータを助けることはあなた自身への投資にもなります。喜んで一緒に仕事をしてくれる大きなファンに裁量を与えることで、全てをあなた自身がやらないといけないというプレッシャーを減らすことができます。

### あらゆる事を記録しよう

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/janl?s=180" class="pquote-avatar" alt="avatar">
  あなたはこれまでに（技術）イベントに参加して、知り合いが誰もおらず、周りは皆グループになって古い友人のように話しているという経験がありますか？（…）オープンソースプロジェクトに貢献をしたいと思っているが、なぜやどのようにしたらそれができるのかをわからないという状況を想像してみて下さい。
  <p markdown="1" class="pquote-credit">
— @janl, ["Sustainable Open Source"](http://writing.jan.io/2015/11/20/sustainable-open-source.html)
  </p>
</aside>

新しいプロジェクトを始めるときは、あなたのやっていることを秘密にしておきたいと感じるのは当然です。しかし、オープンソースプロジェクトはその過程を公開して記録することで成長していきます。

ものを書く事で、より多くの人がその過程の各ステップに参加することができます。それによって、あなたが助けが必要だと言うことさえ把握していなかったことを助けてもらえるかもしれません。

ものを書くというのは技術的なドキュメントに限った話ではありません。なにか書き残しておいたほうが良いと感じるものやプロジェクトについて非公式に議論するときはいつでも、それを公開できないか自問してみましょう。

プロジェクトのロードマップ、あなたが求めている貢献の種類、貢献がどのようにしてレビューされるか、ある決定をなぜ下したのか、といったことは公明正大にしましょう。

もし複数のユーザーが同じ問題に遭遇しているのであれば、その解決策をREADMEに書きましょう。

ミーティングに関しては、あなたのメモや学びを関連するイシューで公開することを検討しましょう。このようにして透明性を高めることで得られるフィードバックにあなたは驚くかもしれません。

あらゆる事を記録するというのはあなたの作業についても当てはまります。プロジェクトでなにか大きなアップデートに取り組んでいる場合、プルリクエストを作成し、作業中（WIP）という印をつけましょう。その方が、他の人がプロセスの早い段階から一緒にやっていると感じることができます。

### すぐに反応しよう

[プロジェクトを宣伝する](../finding-users)につれて、人々からのフィードバックをもらうでしょう。どうやって動いているのかの質問や始めるにあたって助けを必要としているといった質問かもしれません。

イシューが登録されたり、プルリクエストが提出されたり、プロジェクトについて質問を受けた場合はすぐに反応するようにしましょう。素早く返事をすれば、人々は会話に参加していると感じ、より熱心に参加してくれるでしょう。

たとえすぐにプルリクエストのレビューをできない場合であっても、その旨を素早く伝える事で満足度を高めることができます。これは@tdreynoが[Middleman](https://github.com/middleman/middleman/pull/1466)のプルリクエストに返答したものです：

![Middleman pull request](/assets/images/building-community/middleman_pr.png)

[Mozillaの調査によると](https://docs.google.com/presentation/d/1hsJLv1ieSqtXBzd5YZusY-mB8e1VJzaeOmh8Q4VeMio/edit#slide=id.g43d857af8_0177)、48時間以内にコードレビューをしてもらったコントリビュータは再度貢献を行う確率が非常に高いということがわかっています。 

インターネット上の他の場所でもあなたのプロジェクトについての会話が行われることがあります。例えば、Stack OverflowやTwitterやReddit上でです。そういった場所で通知を設定することで、誰かがあなたのプロジェクトに言及したときに知らせを受け取ることができます。

### コミュニティが集まる場所を提供しよう

コミュニティが集まる場所を作るのには2つの理由があります。

1つ目はコミュニティメンバーのためです。人々が互いに知り合うのを助けましょう。共通の興味を持つ人々は、当然それについて話す場を求めるでしょう。そして、そのコミュニケーションが公開されていてアクセスできるのであれば、誰でも過去のアーカイブを読むことで最新の情報に追いつき参加することができます。

2つ目の理由はあなたのためです。もしあなたのプロジェクトについて話す公の場を提供しないと、あなたに直接コンタクトが来るようになるでしょう。初めは、「これだけは」と思って私的なメッセージで反応するのも十分簡単に見えるかもしれません。しかし、時間がたつにつれて、特にあなたのプロジェクトが有名になると、あなたは疲れ切ってしまうでしょう。あなたのプロジェクトについて内密に人々とコミュニケーションしたいという衝動に抵抗しましょう。そのかわりに、彼らにはプロジェクト用の公開チャンネルに誘導しましょう。

公の場でコミュニケーションすることは、あなたに直接メールを送ったり、ブログにコメントする代わりにイシューを開いてもらうように仕向けるのと同じ位簡単なことです。また、メーリングリストを設定したり、TwitterアカウントやSlackやIRCチャンネルを作って、プロジェクトについて話すことができるようにすることもできます。もしくは、それを全部やってもよいのです！

[Kubernetes kops](https://github.com/kubernetes/kops#getting-involved)は、コミュニティメンバーを助けるために隔週でオフィスアワーを設定しています：

> Kopsはコミュニティを助けてガイダンスを提供するために隔週で時間を設けています。Kopsのメンテナーは、新しく参加した方のためや、プルリクエストの手助け、新機能についての議論に使うために時間を確保することに同意しています。

公の場でコミュニケーションすべきという事にも例外はあります：1) セキュリティイシューや2) 微妙な行動規範への違反です。こういったイシューに関しては、内密に報告する手段を常に用意しておくべきです。あなた個人のメールを使いたくない場合は、専用のメールアドレスを確保しましょう。

## コミュニティを発展させよう

コミュニティは非常にパワフルです。このパワーは恵みにもなりますし、災いにもなりえます。これはあなたがコミュニティのパワーをどう使うかに依ります。あなたのプロジェクトのコミュニティが発展する際、破壊的な方向ではなく、生産的な力にする方法があります。

### 悪い参加者を許容しない

あらゆる有名なプロジェクトは、あなたのプロジェクトの助けになるよりも害をなす人々を必ずひきつけてしまいます。彼らは不必要な議論を開始したり、些末な機能に難癖をつけたり、他の人を脅したりするかもしれません。

人々のこういった行為に対しては、徹底して取りしますように最善を尽くしましょう。もし放置されてしまうと、有害な人々によって、コミュニティ内の他の人は居心地が悪いと感じてしまうでしょう。彼らは去ってしまうかもしれません。

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/karissa?s=180" class="pquote-avatar" alt="avatar">
  実のところ、協力的なコミュニティを持つことが鍵となります。私は、同僚や、親切なインターネット上の見知らぬ人、気さくなIRCチャンネルの助けが無ければ、この仕事を達成することはできなかったでしょう。そうでない状況に甘んじてはいけません。バカを甘んじて受け入れてはいけません。
  <p markdown="1" class="pquote-credit">
— @karissa, ["How to Run a FOSS Project"](https://karissa.github.io/post/okf-de)
  </p>
</aside>

プロジェクトの些末な点について議論することが日常的になってしまうと、あなたを含む人々が重要なタスクに集中することから気が逸れてしまいます。あなたのプロジェクトを初めてみた人もこういった議論を見て、参加したくないと思うかもしれません。

もしあなたのプロジェクトで有害な行動を見つけたら、公の場で指摘しましょう。温和ながらも断固たるトーンで、なぜその行動が受け入れられないのか説明しましょう。もし問題が続くようであれば、[彼らに立ち去るように言う](../code-of-conduct/#enforcing-your-code-of-conduct)必要があるかもしれません。[行動規範](../code-of-conduct/)は、こういった会話を
生産的にする助けになりえます。

### Meet contributors where they're at

優れたドキュメントは、コミュニティが成長するにつれてより重要になります。あなたのプロジェクトに精通していない一時的なコントリビュータは、ドキュメントを読むことで彼らが必要としている周辺知識を得ることができます。

CONTRIBUTINGファイルに、新しいコントリビュータにどのようにして始めるのかを明示しましょう。これを説明するために節をまるまる使いたいとさえ思うかもしれません。例えば[Django](https://github.com/django/django)は、新しいコントリビュータを迎えるためにランディングページを持っています。

![Django new contributors page](/assets/images/building-community/django_new_contributors.png)

イシューのリストにおいて、バグに対してコントリビュータの種類に応じたラベル付けをしましょう：例えば、[_"first timers only"_](https://medium.com/@kentcdodds/first-timers-only-78281ea47455#.g1k01jy05)や _"good first issue"_ 、 _"documentation"_ といったものです。[こういったラベル](https://github.com/librariesio/libraries.io/blob/6afea1a3354aef4672d9b3a9fc4cc308d60020c8/app/models/github_issue.rb#L8-L14)によって、あなたのプロジェクトに詳しくない人がイシューをざっと目を通して貢献を始める事が簡単になります。

最後に、全ての過程で歓迎されていると人々が感じられるようにドキュメントを使いましょう。

プロジェクトに参加し始めたほとんどの人とやり取りすることはないでしょう。恐れを感じたり、どのように初めたらよいかわからないという理由で、あなたへの連絡なしで貢献を行うこともあるかもしれません。そういった場合でも、ほんの少しでも彼らを歓迎する言葉があれば、彼らがイライラしてプロジェクトを去ってしまう事を防ぐことができます。

これは[Rubinius](https://github.com/rubinius/rubinius/)の[貢献ガイド](https://github.com/rubinius/rubinius/blob/master/.github/contributing.md)の書き出しの例です：

> まず最初に、はRubiniusを使ってくれてありがとうとお伝えしたいとおもいます。このプロジェクトは愛の結晶であり、バグを見つけてくれたり、性能を向上させたり、ドキュメントを手伝ってくれる全てのユーザーに感謝しています。あらゆる貢献には意味があるので、参加してくれたことに感謝しています。そうは言っても、私達があなた達の問題を解決する事ができるように、いくつかのガイドラインに従うようにお願いしたいと思います。

### Share ownership of your project

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/sarahsharp?s=180" class="pquote-avatar" alt="avatar">
  Your leaders will have different opinions, as all healthy communities should! However, you need to take steps to ensure the loudest voice doesn't always win by tiring people out, and that less prominent and minority voices are heard.
  <p markdown="1" class="pquote-credit">
— @sarahsharp, ["What makes a good community?"](http://sarah.thesharps.us/2015/10/06/what-makes-a-good-community/)
  </p>
</aside>

People are excited to contribute to projects when they feel a sense of ownership. That doesn't mean you need to turn over your project's vision or accept contributions you don't want. But the more you give credit to others, the more they'll stick around.

See if you can find ways to share ownership with your community as much as possible. Here are some ideas:

* **Resist fixing easy (non-critical) bugs.** Instead, use them as opportunities to recruit new contributors, or mentor someone who'd like to contribute. It may seem unnatural at first, but your investment will pay off over time. For example, @michaeljoseph asked a contributor to submit a pull request on a [Cookiecutter](https://github.com/audreyr/cookiecutter) issue below, rather than fix it himself.

![Cookiecutter issue](/assets/images/building-community/cookiecutter_submit_pr.png)

* **Start a CONTRIBUTORS or AUTHORS file in your project** that lists everyone who's contributed to your project, like [Sinatra](https://github.com/sinatra/sinatra/blob/master/AUTHORS.md) does.

* If you've got a sizable community, **send out a newsletter or write a blog post** thanking contributors. Rust's [This Week in Rust](https://this-week-in-rust.org/) and Hoodie's [Shoutouts](http://hood.ie/blog/shoutouts-week-24.html) are two good examples.

* **Give every contributor commit access.** @felixge found that this made people [more excited to polish their patches](https://felixge.de/2013/03/11/the-pull-request-hack.html), and he even found new maintainers for projects that he hadn't worked on in awhile.

* If your project is on GitHub, **move your project from your personal account to an [Organization](https://help.github.com/articles/creating-a-new-organization-account/)** and add at least one backup admin. Organizations make it easier to work on projects with external collaborators.

The reality is that [most projects only have](https://peerj.com/preprints/1233.pdf) one or two maintainers who do most of the work. The bigger your project, and the bigger your community, the easier it is to find help.

While you may not always find someone to answer the call, putting a signal out there increases the chances that other people will pitch in. And the earlier you start, the sooner people can help.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/gr2m?s=180" class="pquote-avatar" alt="avatar">
  \[It's in your\] best interest to recruit contributors who enjoy and who are capable of doing the things that you are not. Do you enjoy coding, but not answering issues? Then identify those individuals in your community who do and let them have it.
  <p markdown="1" class="pquote-credit">
— @gr2m, ["Welcoming Communities"](http://hood.ie/blog/welcoming-communities.html)
  </p>
</aside>

## Resolving conflicts

In the early stages of your project, making major decisions is easy. When you want to do something, you just do it.

As your project becomes more popular, more people will take interest in the decisions you make. Even if you don't have a big community of contributors, if your project has a lot of users, you'll find people weighing in on decisions or raising issues of their own.

For the most part, if you've cultivated a friendly, respectful community and documented your processes openly, your community should be able to find resolution. But sometimes you run into an issue that's a bit harder to address.

### Set the bar for kindness

When your community is grappling with a difficult issue, tempers may rise. People may become angry or frustrated and take it out on one another, or on you.

Your job as a maintainer is to keep these situations from escalating. Even if you have a strong opinion on the topic, try to take the position of a moderator or facilitator, rather than jumping into the fight and pushing your views. If someone is being unkind or monopolizing the conversation, [act immediately](../building-community/#dont-tolerate-bad-actors) to keep discussions civil and productive.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/kennethreitz?s=180" class="pquote-avatar" alt="avatar">
  As a project maintainer, it's extremely important to be respectful to your contributors. They often take what you say very personally.
  <p markdown="1" class="pquote-credit">
— @kennethreitz, ["Be Cordial or Be on Your Way"](https://www.kennethreitz.org/essays/be-cordial-or-be-on-your-way)
  </p>
</aside>

Other people are looking to you for guidance. Set a good example. You can still express disappointment, unhappiness, or concern, but do so calmly.

Keeping your cool isn't easy, but demonstrating leadership improves the health of your community. The internet thanks you.

### Treat your README as a constitution

Your README is [more than just a set of instructions](../starting-a-project/#READMEを書く). It's also a place to talk about your goals, product vision, and roadmap. If people are overly focused on debating the merit of a particular feature, it may help to revisit your README and talk about the higher vision of your project. Focusing on your README also depersonalizes the conversation, so you can have a constructive discussion.

### Focus on the journey, not the destination

Some projects use a voting process to make major decisions. While sensible at first glance, voting emphasizes getting to an "answer," rather than listening to and addressing each other's concerns.

Voting can become political, where community members feel pressured to do each other favors or vote a certain way. Not everybody votes, either, whether it's the [silent majority](https://ben.balter.com/2016/03/08/optimizing-for-power-users-and-edge-cases/#the-silent-majority-of-users) in your community, or current users who didn't know a vote was taking place.

Sometimes, voting is a necessary tiebreaker. As much as you are able, however, emphasize ["consensus seeking"](https://en.wikipedia.org/wiki/Consensus-seeking_decision-making) rather than consensus.

Under a consensus seeking process, community members discuss major concerns until they feel they have been adequately heard. When only minor concerns remain, the community moves forward. "Consensus seeking" acknowledges that a community may not be able to reach a perfect answer. Instead, it prioritizes listening and discussion.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/lee-dohm?s=180" class="pquote-avatar" alt="avatar">
  Part of the reason why a voting system doesn't exist for Atom Issues is because the Atom team isn't going to follow a voting system in all cases. Sometimes we have to choose what we feel is right even if it is unpopular. (...) What I can offer and pledge to do...is that it is my job to listen to the community.
  <p markdown="1" class="pquote-credit">
— @lee-dohm on [Atom's decisionmaking process](https://discuss.atom.io/t/prioritize-issues-feature-requests-based-on-voting-system/27642/2)
  </p>
</aside>

Even if you don't actually adopt a consensus seeking process, as a project maintainer, it's important that people know you are listening. Making other people feel heard, and committing to resolving their concerns, goes a long way to diffuse sensitive situations. Then, follow up on your words with actions.

Don't rush into a decision for the sake of having a resolution. Make sure that everybody feels heard and that all information has been made public before moving toward a resolution.

### Keep the conversation focused on action

Discussion is important, but there is a difference between productive and unproductive conversations.

Encourage discussion so long as it is actively moving towards resolution. If it's clear that conversation is languishing or going off-topic, jabs are getting personal, or people are quibbling about minor details, it's time to shut it down.

Allowing these conversations to continue is not only bad for the issue at hand, but bad for the health of your community. It sends a message that these types of conversations are permitted or even encouraged, and it can discourage people from raising or resolving future issues.

With every point made by you or by others, ask yourself, _"How does this bring us closer to a resolution?"_

If the conversation is starting to unravel, ask the group, _"Which steps should we take next?"_ to refocus the conversation.

If a conversation clearly isn't going anywhere, there are no clear actions to be taken, or the appropriate action has already been taken, close the issue and explain why you closed it.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/kfogel?s=180" class="pquote-avatar" alt="avatar">
  Guiding a thread toward usefulness without being pushy is an art. It won't work to simply admonish people to stop wasting their time, or to ask them not to post unless they have something constructive to say. (...) Instead, you have to suggest conditions for further progress: give people a route, a path to follow that leads to the results you want, yet without sounding like you're dictating conduct.
  <p markdown="1" class="pquote-credit">
— @kfogel, [_Producing OSS_](http://producingoss.com/en/producingoss.html#common-pitfalls)
  </p>
</aside>

### Pick your battles wisely

Context is important. Consider who is involved in the discussion and how they represent the rest of the community.

Is everybody in the community upset about, or even engaged with, this issue? Or is a lone troublemaker? Don't forget to consider your silent community members, not just the active voices.

If the issue does not represent the broader needs of your community, you may just need to acknowledge the concerns of a few people. If this is a recurring issue without a clear resolution, point them to previous discussions on the topic and close the thread.

### Identify a community tiebreaker

With a good attitude and clear communication, most difficult situations are resolvable. However, even in a productive conversation, there can simply be a difference in opinion on how to proceed. In these cases, identify an individual or group of people that can serve as a tiebreaker.

A tiebreaker could be the primary maintainer of the project, or it could be a small group of people who make a decision based on voting. Ideally, you've identified a tiebreaker and the associated process in a GOVERNANCE file before you ever have to use it.

Your tiebreaker should be a last resort. Divisive issues are an opportunity for your community to grow and learn. Embrace these opportunities and use a collaborative process to move to a resolution wherever possible.

## Community is the ❤️ of open source

Healthy, thriving communities fuel the thousands of hours poured into open source every week. Many contributors point to other people as the reason for working - or not working - on open source. By learning how to tap into that power constructively, you'll help someone out there have an unforgettable open source experience.
