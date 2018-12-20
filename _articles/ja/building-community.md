---
lang: ja
title: 居心地の良いコミュニティを築こう
description: 人々があなたのプロジェクトを使ったり、貢献したり、人に伝えたくなるようなコミュニティを築きましょう
class: building
toc:
  あなたのプロジェクトの成功のためのお膳立てをしましょう: "あなたのプロジェクトの成功のためのお膳立てをしましょう"
  コミュニティを発展させよう: "コミュニティを発展させよう"
  衝突を解消しよう: "衝突を解消しよう"
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

* **あなたのプロジェクトを使いやすくしましょう** [親切なREADME](../starting-a-project/#readmeを書く) とわかりやすいコードの例によって、あなたのプロジェクトを初めて見る人が使い始めやすくなります。
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
— @karissa, ["How to Run a FOSS Project"](https://okdistribute.xyz/post/okf-de)
  </p>
</aside>

プロジェクトの些末な点について議論することが日常的になってしまうと、あなたを含む人々が重要なタスクに集中することから気が逸れてしまいます。あなたのプロジェクトを初めてみた人もこういった議論を見て、参加したくないと思うかもしれません。

もしあなたのプロジェクトで有害な行動を見つけたら、公の場で指摘しましょう。温和ながらも断固たるトーンで、なぜその行動が受け入れられないのか説明しましょう。もし問題が続くようであれば、[彼らに立ち去るように言う](../code-of-conduct/#enforcing-your-code-of-conduct)必要があるかもしれません。[行動規範](../code-of-conduct/)は、こういった会話を生産的にする助けになりえます。

### コントリビュータを出迎えよう

優れたドキュメントは、コミュニティが成長するにつれてより重要になります。あなたのプロジェクトに精通していない一時的なコントリビュータは、ドキュメントを読むことで彼らが必要としている周辺知識を得ることができます。

CONTRIBUTINGファイルに、新しいコントリビュータにどのようにして始めるのかを明示しましょう。これを説明するために節をまるまる使いたいとさえ思うかもしれません。例えば[Django](https://github.com/django/django)は、新しいコントリビュータを迎えるためにランディングページを持っています。

![Django new contributors page](/assets/images/building-community/django_new_contributors.png)

イシューのリストにおいて、バグに対してコントリビュータの種類に応じたラベル付けをしましょう：例えば、[_"first timers only"_](https://medium.com/@kentcdodds/first-timers-only-78281ea47455#.g1k01jy05)や _"good first issue"_ 、 _"documentation"_ といったものです。[こういったラベル](https://github.com/librariesio/libraries.io/blob/6afea1a3354aef4672d9b3a9fc4cc308d60020c8/app/models/github_issue.rb#L8-L14)によって、あなたのプロジェクトに詳しくない人がイシューをざっと目を通して貢献を始める事が簡単になります。

最後に、全ての過程で歓迎されていると人々が感じられるようにドキュメントを使いましょう。

プロジェクトに参加し始めたほとんどの人とやり取りすることはないでしょう。恐れを感じたり、どのように初めたらよいかわからないという理由で、あなたへの連絡なしで貢献を行うこともあるかもしれません。そういった場合でも、ほんの少しでも彼らを歓迎する言葉があれば、彼らがイライラしてプロジェクトを去ってしまう事を防ぐことができます。

これは[Rubinius](https://github.com/rubinius/rubinius/)の[貢献ガイド](https://github.com/rubinius/rubinius/blob/master/.github/contributing.md)の書き出しの例です：

> まず最初に、はRubiniusを使ってくれてありがとうとお伝えしたいとおもいます。このプロジェクトは愛の結晶であり、バグを見つけてくれたり、性能を向上させたり、ドキュメントを手伝ってくれる全てのユーザーに感謝しています。あらゆる貢献には意味があるので、参加してくれたことに感謝しています。そうは言っても、私達があなた達の問題を解決する事ができるように、いくつかのガイドラインに従うようにお願いしたいと思います。

### プロジェクトの所有権を共有しよう

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/sarahsharp?s=180" class="pquote-avatar" alt="avatar">
  リーダーたちは異なる意見を持っていることでしょう。あらゆる健全なコミュニティはそうあるべきなのです！しかし、大きな声で人々を疲れさせる人が常に勝利するわけではなく、目立たない少数派の意見も聞き入れられるように対策を講じる必要があります。
  <p markdown="1" class="pquote-credit">
— @sarahsharp, ["What makes a good community?"](http://sarah.thesharps.us/2015/10/06/what-makes-a-good-community/)
  </p>
</aside>

人々は、自分もプロジェクトのオーナーであるという感覚を持つときに、ワクワクして貢献してくれる。これはあなたが望まない方向にプロジェクトのビジョンを変えたり、望まない貢献を受け入れるべきということではありません。しかし、他の人を評価すればするほど、彼らはよりプロジェクトに留まってくれるようになるでしょう。

可能な限りコミュニティに所有権を共有する方法があるかどうか見てみましょう。次にいくつかアイデアを挙げます：

* **簡単な（致命的でない）バグを直すのを我慢しよう** 代わりに、そのバツを新しいコントリビュータを採用したり、貢献したいと思っている人をメンターするのに利用しよう。初めは不自然に思うかもしれないが、時間がたつにつれて、それは投資に見合うようになります。例えば、@michaeljosephは下の[Cookiecutter](https://github.com/audreyr/cookiecutter)のイシューに対して、彼自身が直すのではなく、プルリクエストを送るように尋ねています。

![Cookiecutter issue](/assets/images/building-community/cookiecutter_submit_pr.png)

* **CONTRIBUTORSファイルやAUTHORSファイルをプロジェクトに作ろう。** このファイルにはプロジェクトに貢献した全員をリストします。例えば、[Sinatra](https://github.com/sinatra/sinatra/blob/master/AUTHORS.md)のように。

* かなり大きなコミュニティを既に獲得しているのであれば、コントリビュータへの感謝を伝える **ニュースレターを送ったり、ブロクポストを書いたりしましょう。** Rustの [This Week in Rust](https://this-week-in-rust.org/) やHoodieの[Shoutouts](http://hood.ie/blog/shoutouts-week-24.html) の2つは良い事例です。

* **全てのコントリビュータにコミット権限を与えよう。** @felixge によると、これによって人々は [喜んで彼らのパッチに磨きをかけるようになり](https://felixge.de/2013/03/11/the-pull-request-hack.html)、更に彼がしばらくの間作業していなかったプロジェクトの新しいメンテナーを見つけることもできたのです。

* もしあなたのプロジェクトがGitHub上にあるのであれば、 **あなたのプロジェクトをあなた個人のアカウントから[Organization](https://help.github.com/articles/creating-a-new-organization-account/)** に移し、最低でも一人は代わりの管理者を追加しましょう。Organization に移行することによって外部の協力者と一緒にプロジェクトで作業しやすくなります。

実際のところ、[ほとんどのプロジェクトはたった](https://peerj.com/preprints/1233.pdf) 一人か二人のメンテナーしかおらず、彼らがほとんどの作業を行っています。プロジェクトやコミュニティが大きくなるにつれて、助けてくれる人を見つけるのがより簡単になります。

常に要求に答えてくれる人が見つかるとは限りませんが、そういったシグナルを出しておくことで、協力してくれる人が出てくるチャンスが増えます。そして、早く始めるほど、すぐに人々が助けてくれるでしょう。

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/gr2m?s=180" class="pquote-avatar" alt="avatar">
  あなたがやりたいと思わないことを楽しんでやってくれるコントリビュータを採用する事が最優先です。あなたはコーディングは好きだけどイシューに回答するのは好きではありませんか？それなら、コミュニティの中からそれを楽しんでくれる人を探し出して、その人にやってもらいましょう。
  <p markdown="1" class="pquote-credit">
— @gr2m, ["Welcoming Communities"](http://hood.ie/blog/welcoming-communities.html)
  </p>
</aside>

## 衝突を解消しよう

プロジェクトの初期段階では、大きな決定をするのは簡単です。もし何かをやりたいのであれば、あなたがやるだけです。

プロジェクトが有名になるにつれて、人々はあなたが下す決定に興味を持ち始めます。たとえ大きなコントリビュータのコミュニティがなかったとしても、たくさんのユーザーがいるのであれば、人々が決定に対して影響を与えたり、彼ら自身の問題を取り上げたりしていることに気づくでしょう。

ほとんどの部分では、もしあなたが友好的で互いを尊重するコミュニティを作り上げ、プロセスを公開して記録してきているのであれば、コミュニティによって解決策を見つけることができるようになっているはずです。しかし、時々解決するのがやや難しい問題に遭遇するでしょう。

### 親切さの基準を設けよう

コミュニティが難しい問題に取り組んでいるときは、カッとなりやすくなるものです。人々は怒ったりイライラして、他の誰か、もしくはあなたに八つ当たりするかもしれません。

メンテナーとしてのあなたの仕事はこういった状況が悪化しないようにすることです。たとえあなたがそのトピックについて強い意見を持っていたとしても、争いの飛び込んであなたの意見を押し付けるのではなく、調停役やファシリテーターとして振る舞うようにしましょう。もし誰かがひどい態度をとったり会話を独り占めする場合は、議論を品位があり生産的に保つために[即座に行動しましょう](../building-community/#悪い参加者を許容しない)。

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/kennethreitz?s=180" class="pquote-avatar" alt="avatar">
  プロジェクトのメンテナーとして、コントリビュータに対して敬意を払うのは非常に重要です。彼らはあなたの言うことが彼らに向けられたものとして捉えることがよくあります。
  <p markdown="1" class="pquote-credit">
— @kennethreitz, ["Be Cordial or Be on Your Way"](https://www.kennethreitz.org/essays/be-cordial-or-be-on-your-way)
  </p>
</aside>

他の人々はあなたが指示することを期待しています。良い例を設定しましょう。あなたはがっかりしていたり、良い気分でなかったり、心配しているといった事を表明することもできますが、その場合も穏やかに行うようにしましょう。

常に冷静でいるのは簡単なことではありませんが、リーダーシップを示すことで、コミュニティの健全性を向上させることができます。インターネット上の人々はあなたに感謝することでしょう。

### READMEを憲法のように扱おう

READMEは[単なる手順書以上のものです](../starting-a-project/#readmeを書く)。そこにはあなたのゴールやロードマップについて書く場所でもあるのです。もし人々がある特定の機能のメリットについて議論しすぎているのであれば、READMEを見返してプロジェクトのより高レベルのビジョンについて話すことが助けとなるかもしれません。READMEに注力することは、会話を個人から切り離し、生産的な議論を行うことに繋がります。

### 向かう先ではなく、その過程に集中しよう

大きな決定を行う際に投票を用いるプロジェクトもあります。一見して賢明に見えますが、投票はお互いの声を聞き、心配事を解決することよりも、答えを出す事に重きをおいてしまいます。

投票は政治的になり得ます。そうなると、コミュニティメンバーは互いのためになることをしたり、ある方法で投票するようプレッシャーを感じるようになります。また、コミュニティの[サイレントマジョリティ](https://ben.balter.com/2016/03/08/optimizing-for-power-users-and-edge-cases/#the-silent-majority-of-users)や投票が行われていることを知らないユーザーのように、全員が投票を行うわけでもありません。

とはいえ、時によっては決選投票が必要なこともあります。しかし、合意を得る事自体よりも、できるだけ[「合意の模索」](https://en.wikipedia.org/wiki/Consensus-seeking_decision-making)を強調しましょう。する事得る方法を模索するようにしましょう。

合意を模索する過程において、コミュニティメンバーは十分出し尽くされたと感じるまで懸念点を議論します。小さな論点しか残っていない状況になったら、コミュニティは前に進みます。「合意の模索」によって、コミュニティが完璧な解にたどり着けないことが認識されるかもしれません。そのかわりに、意見を聞き、議論をすることに重きをおくのです。

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/lee-dohm?s=180" class="pquote-avatar" alt="avatar">
  AtomのIssueに投票システムが存在しない理由の一部は、Atomチームはあらゆるケースにおいて投票システムを使うわけではないからです。時によっては、あまり支持されていない案であっても、正しいと感じるものを選ぶ必要があります。（…）私が提供し、実際に行うと固く約束するのは、コミュニティの意見を聞くことが私の仕事であるということです。
  <p markdown="1" class="pquote-credit">
— @lee-dohm on [Atom's decisionmaking process](https://discuss.atom.io/t/prioritize-issues-feature-requests-based-on-voting-system/27642/2)
  </p>
</aside>

たとえ合意の模索プロセスを採用していないとしても、プロジェクトメンテナーとして重要なことは、あなたが人々の声を聞いていると理解しているということです。皆に自分の意見を受け止められていると感じさせ、彼らの心配を解決すると約束することは、問題にすぐに気づけるような環境を広める上での長い道のりのスタートとなります。そして、あなたの発言に行動が伴うようにするのです。

問題解決のために意思決定を急いではいけません。解決に至る前に、皆の意見が聞き入れられ、全ての情報が公開されているようにしましょう。

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
