---
lang: ja
title: メンテナーベストプラクティス
description: プロセスのドキュメント化からコミュニティの活用まで、オープンソースメンテナーとしての日々を楽にしましょう
class: best-practices
order: 5
image: /assets/images/cards/best-practices.png
related:
  - metrics
  - leadership
---

## メンテナーになるということは何を意味するのか？

もし多くの人々に使われるオープンソースプロジェクトをメンテナンスしているのであれば、コーディングの時間が減り、イシューへの対応により多くの時間を使っていることでしょう。

プロジェクトの初期段階では、あなたがやりたいと思ったことに基づいて新しいアイデアを実験したり、意思決定しているでしょう。プロジェクトが人気を獲得するに従って、ユーザーやコントリビューターと一緒に仕事をする時間が多くなっていくでしょう。

プロジェクトを運営するということは、コードを書く以上のものです。そういったタスクは時にはあなたがやりたいと思っているものではないこともありますが、プロジェクトを大きくしていくためには重要なものなのです。この文書では、プロセスをドキュメント化する所からコミュニティの活用まで、あなたの日々を楽にする方法をいくつか集めました。

## プロセスをドキュメント化しよう

ドキュメント化はメンテナーとして最も大事な仕事の1つです。

ドキュメントを書くことであなた自身の考えが明確になるだけでなく、他の人があなたが必要としていることや望んでいることを、あなたが尋ねる前に理解する手助けとなります。

ドキュメントを書いておくことで、スコープ外のことが起きたときにノーと言いやすくなります。また、人々が援助したり手助けすることもやりやすくなります。誰がドキュメントを読んでいたり、あなたのプロジェクトを使っているのか、知らないでしょう。

たとえ完全な文章ではなく、箇条書きにしておくだけでも何も書かないより良いです。

ドキュメントを最新の状態に保つよう心がけましょう。もし常に最新を保つことが出来ないのであれば、古くなったドキュメントは削除するか、既に古くなっているということを明示することで、コントリビューターに対してそのドキュメントを更新することが喜ばれることだということを伝えることが出来ます。

### プロジェクトのビジョンを書こう

プロジェクトのゴールを書く所から始めましょう。それをREADMEに追記するか、VISIONという名前の別のファイルを作りましょう。もし他にも関連するもの、例えばプロジェクトロードマップなど、があればそれも公開しましょう。

明確でドキュメント化されたビジョンを持つことで、プロジェクトの焦点を絞り、他の人からのコントリビュートによってプロジェクトが肥大化するのを防ぐ助けとなります。

例えば @lord は、プロジェクトビジョンを持つことでどのリクエストに時間を割くべきか判断しやすくなる、ということに気づきました。新しいメンテナーとして、彼は[Slate](https://github.com/lord/slate)への最初の機能要望を受け取ったときに、プロジェクトのスコープを固執しなかったことを後悔していました。

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/lord?s=180" class="pquote-avatar" alt="avatar">
  私はヘマをしたのです。私は完璧な解決策を見つける努力をしませんでした。中途半端な解決策の代わりに、「今は十分な時間がないのですが、長期的なnice-to-haveリストに追加します」といえたら良かったのです。
  <p markdown="1" class="pquote-credit">
— @lord, ["Tips for new open source maintainers"](https://lord.io/blog/2014/oss-tips/)
  </p>
</aside>

### あなたの期待値をコミュニケーションしよう

ルールを書き出すというのは神経をすり減らすこともあります。時折、他の人の行動を取り締まったり、楽しみを殺してしまっていると感じるかもしれません。

しかし、適切に明文化され、運用されれば、良いルールはメンテナーの力となります。あなたが望まない事を行うような状況を防いでくれるのです。

あなたのプロジェクトを訪れる人の殆どはあなた自身やあなたを取り巻く状況について何も知りません。彼らは、あなたがこのプロジェクトで金銭を得ていると考えるかもしれません。特に彼らがあなたのプロジェクトを定期的に使い、依存している場合はなおさらです。おそらく、プロジェクトに多くの時間を費やしていた時もあったでしょうが、しかし今やあなたは新しい仕事や家族で忙しいのです。

こういったことの全ては全く問題ありません！他の人々があなたの状況について知ることができるようにすればよいのです。

プロジェクトを運営するのがパートタイムであったり、完全にボランティアで行っている場合、どのくらいの時間を使えるのか正直になりましょう。これは、プロジェクトが必要とするであろう時間や、他の人があなたに使ってほしいと望む時間とは異なります。

下記に、明記しておく価値のある幾つかのルールをまとめます：

* コントリビュートがどのようにしてレビューされ、受け入れられるか（ _テストは必要か？イシューテンプレートを使うべきか？_ ）
* 受け入れる予定のコントリビュートの種類（ _コードの一部分に関してのみ手助けが必要か？_ ）
* リマインドをするのはいつが適切か？（ _例えば、「メンテナーが7日以内に返答をします。もしそれを過ぎても返事がない場合は、スレッドで気軽にリマインドして下さい」_ ）
* あなたがどのくらいの時間をプロジェクトにつかうか（ _例えば、「私達はこのプロジェクトに週5時間しか使いません。」_ ）

[Jekyll](https://github.com/jekyll/jekyll/tree/master/docs)や[CocoaPods](https://github.com/CocoaPods/CocoaPods/wiki/Communication-&-Design-Rules)、[Homebrew](https://github.com/Homebrew/brew/blob/bbed7246bc5c5b7acb8c1d427d10b43e090dfd39/docs/Maintainers-Avoiding-Burnout.md) は、メンテナーとコントリビューターのための基本ルールを定めたプロジェクトの良い例です。
 
### 公の場でコミュニケーションしよう

あなたのやり取りをドキュメント化することも忘れないようにしましょう。可能な限りいつでも、プロジェクトについてのコミュニケーションを公にしましょう。機能要望やサポートリクエストについてプライベートにコンタクトしてくる人がいたら、彼らをメーリングリストやイシュートラッカーのようなパブリックなコミュニケーションチャネルに丁寧に誘導しましょう。

他のメンテナーと会ったり、プライベートに大きな決断をした場合は、これらの会話を公の場にドキュメント化しましょう。たとえ、メモ書きを投稿するだけだとしても。

このようにして、コミュニティに参加した人は何年も所属している人と同じ情報にアクセスできるようになるでしょう。

## ノーを言うやり方を学ぼう

ここまでで様々なものを明文化してきました。あらゆる人があなたのドキュメントを読んでくれるのが理想ですが、現実はドキュメントが存在することを伝える必要があるでしょう。

しかし、あらゆるものをドキュメント化する事は、ルールを遵守してもらう必要があるときに属人性を排除するのに役立ちます。

ノーを言うのは楽しいことではありません、しかし _「あなたのコントリビュートはこのプロジェクトの優先事項にはマッチしません。」_ という方が _「あなたのコントリビュートが好きではありません。」_ というよりも個人的でない印象になります。

メンテナーとして様々な状況でノーを言う場面があります：プロジェクトのスコープに当てはまらない機能要望、議論を脱線させる人、他人のために不要な作業をすること。

### 会話を友好的に保ちましょう

ノーということを実践する上で最も重要な場所の一つが、イシューやプルリクエスト上です。プロジェクトのメンテナーとして、必ず受け入れたくない提案を受けることでしょう。

そのコントリビュートはプロジェクトのスコープを変更してしまうか、ビジョンにマッチしないのかもしれません。アイデアは良くても、実装が良くないのかもしれません。

その理由にかかわらず、あなたのプロジェクトの基準を満たさないコントリビュートをそつなく対処する事は可能です。

もし受け入れたくないコントリビュートを受け取った場合は、あなたの最初の反応はそれを無視するか見なかったことにするでしょう。そうすることで、他の人の感情を傷つけ、コミュニティの潜在的なコントリビュータのやる気を削いでしまいます。

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/krausefx?s=180" class="pquote-avatar" alt="avatar">
  大規模なオープンソースプロジェクトでサポートの対応をする際に大事なのは、イシューを動かし続けることです。イシューを停滞させないようにしましょう。もしあなたがiOS開発者なのであれば、審査に時間がかかることがどれだけイライラするものかわかるでしょう。2年経ってから返事が返ってきて、iOSの最新バージョンでやり直してくれと言われるかもしれないのです。
  <p markdown="1" class="pquote-credit">
— @KrauseFx, ["Scaling open source communities"](https://krausefx.com/blog/scaling-open-source-communities)
  </p>
</aside>

望ましくないコントリビュートを放置しないようにしましょう。放置すると罪悪感を感じてしまいます。時間が経つにつれて、回答されていないイシューやプルリクエストによって、プロジェクトを進めることがストレスを伴い、恐怖を感じるものになってしまいます。

受け入れるつもりのないコントリビュートはすぐに閉じてしまうのが良いです。もし既に巨大なバックログで困っているのであれば、 @steveklabnik の [イシューを効率的にトリアージする方法](http://words.steveklabnik.com/how-to-be-an-open-source-gardener) が役に立つでしょう。

また、コントリビュートを無視することはコミュニティに悪い影響を与えます。プロジェクトにコントリビュートすることは大変な作業です。特に初めてのコントリビュートであればなおさらです。たとえ、そのコントリビュートを受け入れないとしても、その人に対して受け入れない旨と感謝の気持ちを伝えましょう。それによって敬意を表すことが出来ます。

もし、コントリビュートを受け入れたくないのであれば：

* 彼らのコントリビュートに**感謝しましょう**
* なぜプロジェクトのスコープに**マッチしないか説明しましょう**。そして、可能であれば、明確な改善提案をしましょう。親切に、しかし確固たる態度で行いましょう。
* もしあるのであれば、**関連するドキュメントにリンクしましょう**。もし受け入れたくない内容が繰り返し提案されるようであれば、ドキュメントにその旨を追記して繰り返しの作業をなくしましょう。
* **リクエストをクローズしましょう**。

1,2文以上の返答は不要です。例えば、[celery](https://github.com/celery/celery/)のユーザーがWindows関連のエラーを報告してきたときに、@berkerpeksag は[このように返答しました](https://github.com/celery/celery/issues/3383)

![Celery screenshot](/assets/images/best-practices/celery.png)

ノーというのが恐ろしいと感じるのはあなただけではありません。@jessfraz も[こう書いています](https://blog.jessfraz.com/post/the-art-of-closing/)：

> 私はこれまでMesosやKubernetes、Chromiumといったオープンソースプロジェクトのメンテナーと話をしてきました。そして、彼ら全員が同意した事は、メンテナーとして最も難しいことの1つは、受け入れたくないパッチに対して「ノー」を言うことだ、という点です。

コントリビュートを受け入れたくないと思うことを罪に感じる必要はありません。オープンソースの第一のルールは、
Don't feel guilty about not wanting to accept someone's contribution. The first rule of open source, @shykes [によると](https://twitter.com/solomonstre/status/715277134978113536)： _「ノーというのは一時的なものだが、イエスと言うと永遠に影響がある」_ 。他の人の熱意に共感するのは良いことですが、コントリビュートを拒否することはその人自身を拒否することとは異なります。

残念ながらコントリビュートがあまり良くないものであれば、あなたにそれを受け入れる義務はありません。人々がプロジェクトにコントリビュートしてくれたときには親切に、またきちんと返事をするようにしましょう。しかし、本当にプロジェクトのためになるとあなたが思う変更のみを受け入れましょう。ノーという事を頻繁に言えば言うほど、それは簡単になっていきます。約束します。

### 先回りしよう

まず第一に望ましくないコントリビュートの量を減らすには、コントリビュートガイドでコントリビュートの提案のプロセスとコントリビュートを受け入れるプロセスを説明しましょう。

もし品質の低いコントリビュートを多く受け取るようであれば、コントリビュータに事前に確認してもらうよう要求しましょう。例えば：

* イシューやプルリクエストのテンプレート/チェックリストを埋めてもらう
* プルリクエストを提出する前にイシューを開いてもらう

もしあなたのルールに従わない人がいたら、即座にイシューを閉じてドキュメントを共有しましょう。

はじめはこのやり方は親切ではないと感じるかもしれませんが、先回りしておくことは両者にとって良いことなのです。コントリビュートする人にとっては、受け入れられる見込みのないプルリクエストの何時間も費やす可能性が減ります。そして、あなた自身の作業量もやりくりしやすくなります。

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/mikemcquaid?s=180" class="pquote-avatar" alt="avatar">
  コントリビュータに対してCONTRIBUTING.mdファイルでどういった変更は受け入れられるのかを、作業を開始する前に知ることができるようになっているのが理想的です。
  <p markdown="1" class="pquote-credit">
— @MikeMcQuaid, ["Kindly Closing Pull Requests"](https://github.com/blog/2124-kindly-closing-pull-requests)
  </p>
</aside>

時には、ノーということで、コントリビュータががっかりしたり、あなたの決定を批判するかもしれません。もし、彼らが敵対的な行動を取るようであれば、状況を[沈静化するために行動を起こす](https://github.com/jonschlinkert/maintainers-guide-to-staying-positive#action-items)か、生産的にコラボレーションできないようであればコミュニティから抜けてもらいましょう。

### メンターになろう

プロジェクトの基準に満たないコントリビュートを定期的に提出する人がいるかもしれません。何度も拒否されるのはお互いにとってイライラするものです。

もしその人がプロジェクトに対して情熱があるように感じるけれども、上達が必要な場合は、辛抱強くなりましょう。プロジェクトの期待する水準になぜ満たないのかを明確に説明しましょう。より簡単な、もしくはより明確なタスクを紹介しましょう。例えば、手始めに取り掛かるのにちょうど良いイシューに _"good first issue,"_ ラベルを付けるといったことです。もし時間があるのであれば、初めてのコントリビュートを通じて彼らのメンターとなることも検討しましょう。もしくは、コミュニティの中で喜んでメンターとなってくれそうな人を探しましょう。

## コミュニティを活用しよう

あらゆる事を一人で行う必要はありません。あなたのプロジェクトのコミュニティはそのためにいるのですから！たとえ現時点ではまだ活発なコントリビュータコミュニティを持っていないとしても、たくさんのユーザーがいるのであれば、彼らに仕事をしてもらいましょう。

### 作業量を共有しよう

もし他の人に支援してもらいたいなら、まずはお願いして回る所からはじめましょう。

新しいコントリビュータが繰り返しコントリビュートを行っていることに気づいたら、より多くの責任を提供することで彼らの仕事を認めましょう。もし望むならどのようにすれば他の人もリーダーになれるのかをドキュメント化しましょう。

他の人に対して[プロジェクトの所有権を共有する](../building-community/#プロジェクトの所有権を共有しよう)よう推奨することはあなたの作業量を大いに減らすことに繋がります。@lmccart が彼女のプロジェクトである[p5.js](https://github.com/processing/p5.js)で認識したように。

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/lmccart?s=180" class="pquote-avatar" alt="avatar">
  （コントリビュータ向けのイベントの告知で）私は「誰でも参加可能です、優れたコーディングスキルも必要ありません。」と言い続けてきました。その後、（イベントに）多くの人が登録してくれた時に、今まで自分が言ってきたことは本当だろうか？と思い始めました。40人もの参加者が来てくれたため、彼ら一人ひとりを私がサポートすることは出来ませんでした。しかし、皆が集まったのです。そして、うまくいきました。一人の人が状況を理解すると、すぐに近くの人にプロジェクトに必要な知識を教え始めたのです。
  <p markdown="1" class="pquote-credit">
—  @lmccart, ["What Does "Open Source" Even Mean? p5.js Edition"](https://medium.com/@kenjagan/what-does-open-source-even-mean-p5-js-edition-98c02d354b39#.chnjlag7p)
  </p>
</aside>

もし、一時的であれ恒久的であれ、あなたがプロジェクトから退く必要があるのであれば、他の誰かに代わってくれるようお願いするのは少しも恥ずかしいことではありません。

もしプロジェクトの方向性に熱意を持っている人がいれば、その人にコミット権限を与えるか、公式にその人にプロジェクトの管理を明け渡しましょう。もしあなたのプロジェクトをフォークしている人がいて、フォーク先が活発にメンテナンスされているのであれば、あなたの元々のプロジェクトとフォーク先をリンクすることを検討しましょう。多くの人があなたのプロジェクトがアクティブであり続けて欲しいと望んでくれることは素晴らしいことです。

@progrium が彼のプロジェクトである [Dokku](https://github.com/dokku/dokku) で[気づいたこととして](http://progrium.com/blog/2015/12/04/leadership-guilt-and-pull-requests/)、プロジェクトのビジョンをドキュメントに明記しておくことで、たとえ彼がプロジェクトから退いてもプロジェクトのゴールが生き続けたというものがあります：

> 私はwikiに私が望むものとその理由を書きました。私にとってとても驚きだったのは、プロジェクトのメンテナーたちがその方向に向かい始めたのです！全てが私がやるのと同じように実現されたでしょうか？常にそうだったわけではありません。しかし、それでも私が書いた理想像にプロジェクトが近づいていったのです。

### 他の人に彼らが必要な解決策を作ってもらおう

もし潜在的なコントリビュータがあなたのプロジェクトがやるべきことについて異なる意見を持っているのであれば、彼ら自身のフォークを作ることを推奨するのも一つの手です。

プロジェクトをフォークすることは必ずしも悪いことではありません。プロジェクトをコピーしてそれを修正できるということはオープンソースの最も素晴らしい点の1つです。コミュニティメンバーに対して彼ら自身のフォークを作ることを推奨することで、あなた自身のプロジェクトのビジョンを衝突することなく、メンバーの創造性を発揮する場所を作り出すことが出来ます。

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/geerlingguy?s=180" class="pquote-avatar" alt="avatar">
  I cater to the 80% use case. If you are one of the unicorns, please fork my work. I won't get offended! My public projects are almost always meant to solve the most common problems; I try to make it easy to go deeper by either forking my work or extending it.
  <p markdown="1" class="pquote-credit">
— @geerlingguy, ["Why I Close PRs"](https://www.jeffgeerling.com/blog/2016/why-i-close-prs-oss-project-maintainer-notes)
  </p>
</aside>

The same applies to a user who really wants a solution that you simply don't have the bandwidth to build. Offering APIs and customization hooks can help others meet their own needs, without having to modify the source directly. @orta [found that](https://artsy.github.io/blog/2016/07/03/handling-big-projects/) encouraging plugins for CocoaPods led to "some of the most interesting ideas":

> It's almost inevitable that once a project becomes big, maintainers have to become a lot more conservative about how they introduce new code. You become good at saying "no", but a lot of people have legitimate needs. So, instead you end up converting your tool into a platform.

## Bring in the robots

Just as there are tasks that other people can help you with, there are also tasks that no human should ever have to do. Robots are your friend. Use them to make your life as a maintainer easier.

### Require tests and other checks to improve the quality of your code

One of the most important ways you can automate your project is by adding tests.

Tests help contributors feel confident that they won't break anything. They also make it easier for you to review and accept contributions quickly. The more responsive you are, the more engaged your community can be.

Set up automatic tests that will run on all incoming contributions, and ensure that your tests can easily be run locally by contributors. Require that all code contributions pass your tests before they can be submitted. You'll help set a minimum standard of quality for all submissions. [Required status checks](https://help.github.com/articles/about-required-status-checks/) on GitHub can help ensure no change gets merged without your tests passing.

If you add tests, make sure to explain how they work in your CONTRIBUTING file.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/edunham?s=180" class="pquote-avatar" alt="avatar">
  I believe that tests are necessary for all code that people work on. If the code was fully and perfectly correct, it wouldn't need changes – we only write code when something is wrong, whether that's "It crashes" or "It lacks such-and-such a feature". And regardless of the changes you're making, tests are essential for catching any regressions you might accidentally introduce.
  <p markdown="1" class="pquote-credit">
— @edunham, ["Rust's Community Automation"](https://edunham.net/2016/09/27/rust_s_community_automation.html)
  </p>
</aside>

### Use tools to automate basic maintenance tasks

The good news about maintaining a popular project is that other maintainers have probably faced similar issues and built a solution for it.

There are a [variety of tools available](https://github.com/showcases/tools-for-open-source) to help automate some aspects of maintenance work. A few examples:

* [semantic-release](https://github.com/semantic-release/semantic-release) automates your releases
* [mention-bot](https://github.com/facebook/mention-bot) mentions potential reviewers for pull requests
* [Danger](https://github.com/danger/danger) helps automate code review

For bug reports and other common contributions, GitHub has [Issue Templates and Pull Request Templates](https://github.com/blog/2111-issue-and-pull-request-templates), which you can create to streamline the communication you receive. @TalAter made a [Choose Your Own Adventure guide](https://www.talater.com/open-source-templates/#/) to help you write your issue and PR templates.

To manage your email notifications, you can set up [email filters](https://github.com/blog/2203-email-updates-about-your-own-activity) to organize by priority.

If you want to get a little more advanced, style guides and linters can standardize project contributions and make them easier to review and accept.

However, if your standards are too complicated, they can increase the barriers to contribution. Make sure you're only adding enough rules to make everyone's lives easier.

If you're not sure which tools to use, look at what other popular projects do, especially those in your ecosystem. For example, what does the contribution process look like for other Node modules? Using similar tools and approaches will also make your process more familiar to your target contributors.

## It's okay to hit pause

Open source work once brought you joy. Maybe now it's starting to make you feel avoidant or guilty.

Perhaps you're feeling overwhelmed or a growing sense of dread when you think about your projects. And meanwhile, the issues and pull requests pile up.

Burnout is a real and pervasive issue in open source work, especially among maintainers. As a maintainer, your happiness is a non-negotiable requirement for the survival of any open source project.

Although it should go without saying, take a break! You shouldn't have to wait until you feel burned out to take a vacation. @brettcannon, a Python core developer, decided to take [a month-long vacation](https://snarky.ca/why-i-took-october-off-from-oss-volunteering/) after 14 years of volunteer OSS work.

Just like any other type of work, taking regular breaks will keep you refreshed, happy, and excited about your work.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/danielbachhuber?s=180" class="pquote-avatar" alt="avatar">
  In maintaining WP-CLI, I've discovered I need to make myself happy first, and set clear boundaries on my involvement. The best balance I've found is 2-5 hours per week, as a part of my normal work schedule. This keeps my involvement a passion, and from feeling too much like work. Because I prioritize the issues I'm working on, I can make regular progress on what I think is most important.
  <p markdown="1" class="pquote-credit">
— @danielbachhuber, ["My condolences, you're now the maintainer of a popular open source project"](https://runcommand.io/2016/06/26/my-condolences-youre-now-the-maintainer-of-a-popular-open-source-project/)
  </p>
</aside>

Sometimes, it can be hard to take a break from open source work when it feels like everybody needs you. People may even try to make you feel guilty for stepping away.

Do your best to find support for your users and community while you're away from a project. If you can't find the support you need, take a break anyway. Be sure to communicate when you're not available, so people aren't confused by your lack of responsiveness.

Taking breaks applies to more than just vacations, too. If you don't want to do open source work on weekends, or during work hours, communicate those expectations to others, so they know not to bother you.

## Take care of yourself first!

Maintaining a popular project requires different skills than the earlier stages of growth, but it's no less rewarding. As a maintainer, you'll practice leadership and personal skills on a level that few people get to experience. While it's not always easy to manage, setting clear boundaries and only taking on what you're comfortable with will help you stay happy, refreshed, and productive.
