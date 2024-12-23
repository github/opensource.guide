---
lang: ja
title: オープンソースメンテナーのバランス維持
description: メンテナンス担当者としてのセルフケアと燃え尽き症候群を避けるためのヒント。
class: balance
order: 0
image: /assets/images/cards/maintaining-balance-for-open-source-maintainers.png
---

人気のあるオープンソースプロジェクトが成長するにつれて、バランスを保ち、長期的にリフレッシュし、生産性を維持するために明確な境界線を設定することが必要になります。

メンテナーの経験とバランスを取るための戦略を知るために、私たちは 40 人の <a href="http://maintainers.github.com/">maintainer community</a> のメンバーとワークショップを行い、彼らのオープンソースでの燃え尽き症候群に対する第一線での経験と、バランスを保つための実践を学ぶことができました。ここで「パーソナルエコロジー」という概念が登場します。

「パーソナルエコロジー」とはなんでしょうか？<a href="https://rockwoodleadership.org/nonprofit-four-day-workweek-can-take-care-still-change-world/#:~:text=personal%20ecology%3A%20maintaining%20balance%2C%20pacing%20and%20efficiency%20to%20sustain%20your%20energy%20over%20a%20lifetime%20of%20activism">described by the Rockwood Leadership Institute</a> によると、「<strong>生涯にわたってエネルギーを維持するために、バランス、ペース、効率を維持すること</strong>」を意味します。これにより、私たちの会話のフレームワークを作り、メンテナーが自分の行動や貢献を、時間とともに進化する大きな生態系の一部であると認識する助けとなりました。燃え尽き症候群は、[WHO によって定義されるように](https://icd.who.int/browse11/l-m/en#/http://id.who.int/icd/entity/129180281) 、慢性的な職場でのストレスから生じる症候群であり、メンテナーの間では珍しくありません。これは、モチベーションの喪失、集中力の欠如、および共同作業者やコミュニティとの共感の欠如に繋がります。

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/gabek?s=180" class="pquote-avatar" alt="avatar">
  私は仕事を始めることや集中することができませんでした。ユーザーに対して共感の欠如がありました。
  <p markdown="1" class="pquote-credit">
— <a href="https://github.com/gabek">@gabek</a>, Owncast ライブストリーミングサーバーのメンタナー、燃え尽き症候群がオープンソースの仕事に与える影響について語る
  </p>
</aside>

パーソナルエコロジーの概念を取り入れることで、燃え尽き症候群を積極的に回避し、セルフケアを優先し、最高の仕事をするためのバランスを維持することができます。

## メンテナーとしてのセルフケアと燃え尽き症候群を回避するためのヒント

### オープンソースで働く動機を明確にする

オープンソースのメンテナンスのどの部分にあなたの活力が湧いてくるか、じっくり考えてみましょう。あなたのモチベーション理解することで、新しい課題に取り組む準備ができ、仕事に優先順位をつけることができます。ユーザーからの好意的なフィードバックであれ、コミュニティとの協力や交流の喜び、コードに没頭する満足感など、あなたのモチベーションを認識することで、集中力を高める指針になります。

### バランスを崩し、ストレスを感じる原因を振り返る

燃え尽きてしまう原因を理解することは重要です。オープンソースのメンテナーの間で見られるいくつかの共通のテーマは以下の通りです。

* **肯定的なフィードバックの欠如:** ユーザーは苦情があるときに接触する可能性が高いです。全てが順調に進んでいる場合、ユーザーは黙っている傾向があります。あなたの貢献がどのような変化をもたらしているかを示すポジティブなフィードバックがないまま、問題のリストが増えていくのを見るのは、がっかりするでしょう。

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/thisisnic?s=180" class="pquote-avatar" alt="avatar">
  まるで虚空に叫ぶようなもので、フィードバックが本当に活力を与えてくれます。私たちには、幸せだけど静かなユーザーがたくさんいます。
  <p markdown="1" class="pquote-credit">
— <a href="https://github.com/thisisnic">@thisisnic</a>, Apache Arrow のメンテナー
  </p>
</aside>

* **「No」と言わない:** オープンソースプロジェクトでは、必要以上の責任を負うことは簡単です。それがユーザーであれ、貢献者であれ、他のメンテナーであれ、彼らの期待に答えられるとは限りません。

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/agnostic-apollo?s=180" class="pquote-avatar" alt="avatar">
  私は、自分が一人で行うべきこと以上のことを引き受けて、多くの人々の仕事をしなければならないことに気がつきました。これは FOSS でよく行われています。
  <p markdown="1" class="pquote-credit">
— <a href="https://github.com/agnostic-apollo">@agnostic-apollo</a>, Termux のメンテナー
  </p>
</aside>

* **一人での作業:** メンテナーであることは非常に孤独です。例え同じメンテナーのグループで働いていたとしても、ここ数年、分散チームを直接集めるのは難しくなっています。

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/gabek?s=180" class="pquote-avatar" alt="avatar">
 特に COVID 以降、自宅で仕事をするようになってからは、誰とも会わず、誰とも話さない方が難しいです。
  <p markdown="1" class="pquote-credit">
— <a href="https://github.com/gabek">@gabek</a>, Owncast ライブストリーミングサーバーのメンタナー、燃え尽き症候群がオープンソースの仕事に与える影響について語る
  </p>
</aside>

* **時間やリソースの不足:** これは特にプロジェクトに取り組むために自分の自由な時間を犠牲にしなければならないボランティアのメンテナーにとって特に当てはまります。

<aside markdown="1" class="pquote">
私はもっと経済的なサポートが欲しいのです。そうすれば、私の貯金を使い果たすことなくオープンソースの仕事に専念でき、後に多くの契約業務を行って補わなければならないというプレッシャーも感じずに済みます。
  <p markdown="1" class="pquote-credit">
— オープンソースのメンテナー
  </p>
</aside>

* **矛盾する要求:**  オープンソースは様々な動機を持ったグループで溢れており、その間を行き来するのは難しいことがあります。オープンソースの仕事で給料をもらっている場合、雇用主の利益はコミュニティの利益と対立することがあります。

<aside markdown="1" class="pquote">
  有料のオープンソースでは、雇用主が重視するものとコミュニティにとっての最善のものとの間に葛藤が生じます。
  <p markdown="1" class="pquote-credit">
— オープンソースのメンテナー
  </p>
</aside>

### 燃え尽きの兆候に注意

あなたは 10 週間、10 ヶ月、10 年とこのペースを続けることができますか？

[@shaunagm](https://github.com/shaunagm) による [Burnout Checklist](https://governingopen.com/resources/signs-of-burnout-checklist.html) や のようなツールがあり、自分の現在のペースを振り返り、調整できる点があるかどうかを確認することができます。一部のメンテナーは、睡眠の質や心拍数変動 (両方ともストレスに関連している) のような指標を追跡するためにウェアラブル技術も利用しています。

<aside markdown="1" class="pquote">
 私は良質なウェアラブル技術を強く信じています。その背後にある科学的根拠によって、どのように改善的できたかや、目指す状態を最適にする方法を理解することができます。
  <p markdown="1" class="pquote-credit">
— オープンソースのメンテナー
  </p>
</aside>

### 自分自身とコミュニティを維持し続けるためには何が必要だろうか？

これは各メンテナーによって異なり、生活の段階や外部要因によって変わるでしょう。しかし、以下は私たちが耳にしたいくつかのテーマです：

* **コミュニティに頼る:** 仕事の委譲や貢献者の探し方は、仕事の負担を軽減できます。プロジェクトの連絡窓口を複数持つことで、心配することなく休憩を取ることができます。[Maintainer Community](http://maintainers.github.com/) のようなグループで他のメンテナーや広いコミュニティと繋がることができます。これは、相互支援や学びのための素晴らしいリソースとなるでしょう。

  ユーザーコミュニティとの交流方法も探して、定期的にフィードバックを受け取り、オープンソースの作業の影響を理解することができます。

* **資金調達をさぐる:** ピザのお金を探しているのか、フルタイムのオープンソースを探しているのか、サポートするリソースはたくさんあります！最初のステップとして、[GitHub Sponsors](https://github.com/sponsors)を有効にして、他の人があなたのオープンソースの作業をスポンサーすることを許可します。フルタイムに移行することを考えている場合は、次回の [GitHub Accelerator](http://accelerator.github.com/) に応募してみて下さい。

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/mansona?s=180" class="pquote-avatar" alt="avatar">
 少し前にポッドキャストに出演し、オープンソースの維持と持続性について話していました。GitHubで私の作業をサポートしてくれる少数の人々がいるだけで、ゲームの前に座るのではなく、オープンソースでちょっとしたことをする決断をすぐに下す助けとなることに気づきました。
  <p markdown="1" class="pquote-credit">
— <a href="https://github.com/mansona">@mansona</a>, EmberJS のメンテナー
  </p>
</aside>

* **ツールを使う:** [GitHub Copilot](https://github.com/features/copilot/) や [GitHub Actions](https://github.com/features/actions) のようなツールを使って、退屈な作業を自動化し、より意味のある貢献のために時間を確保しましょう。

<aside markdown="1" class="pquote">
 退屈な時に [Copilot](http://github.com/features/copilot/) を使って、楽しいことをしましょう。
  <p markdown="1" class="pquote-credit">
— オープンソースメンテナー
  </p>
</aside>

* **休息と充電:** オープンソース以外の趣味や興味の時間を作りましょう。週末は休んでリフレッシュし、[GitHub status](https://docs.github.com/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/personalizing-your-profile#setting-a-status) に反映させましょう！一晩ぐっすり眠れるかどうかで、長期的な努力を継続できるかどうかが大きく変わってきます。

  プロジェクトのある側面が特に楽しいと感じるのであれば、その楽しさを 1 日を通して体験できるように仕事を構成してみましょう。

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/danielroe?s=180" class="pquote-avatar" alt="avatar">
 夜にリラックスするよりも、日中に「創造的なひととき」を取り入れる機会が増えてきていると感じています。
  <p markdown="1" class="pquote-credit">
— <a href="https://github.com/danielroe">@danielroe</a>, Nuxt のメンテナー
  </p>
</aside>

* **境界線を設ける:** 全ての要求に「 Yes 」と言うわけにはいきません。これは、「今すぐそれに対応することはできませんし、将来的にも考えていません」とシンプルに伝えることや、READMEに自分が取り組みたいことや取り組みたくないことを明記することも含みます。例として、「明確な理由が示されたPRだけをマージする」とか、「隔週の木曜日の18時から19時にだけ問題をレビューする」といったことを伝えることができます。これにより、他の人たちに対する期待値を明確にし、また、あなたの時間に求められることに対して柔軟に対応するための基準を提供することができます。

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/mikemcquaid?s=180" class="pquote-avatar" alt="avatar">
これらの点で他者を真に信頼するためには、全ての要求に「 Yes 」と答えるような人であってはいけません。そうすることで、プロフェッショナルにもプライベートにも境界線を持たなくなり、信頼性のある同僚としての立場も失ってしまいます。
  <p markdown="1" class="pquote-credit">
  — <a href="https://github.com/mikemcquaid">@mikemcquaid</a>, Homebrew のメンテナー、 [Saying No](https://mikemcquaid.com/saying-no/) にて
  </p>
</aside>

  不利益な行動や否定的な交流を断ち切る毅然とした態度を身につけましょう。どうでもいいことにはエネルギーを使わなくても大丈夫です。

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/IvanSanchez?s=180" class="pquote-avatar" alt="avatar">
私のソフトウェアは無料で提供していますが、私の時間やエネルギーは無料ではありません。
  <p markdown="1" class="pquote-credit">
— <a href="https://github.com/IvanSanchez">@IvanSanchez</a>, Leaflet のメンテナー
  </p>
</aside>

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/foosel?s=180" class="pquote-avatar" alt="avatar">
オープンソースのメンテナンスに暗い面があるのは、誰もが知っていることです。その中には、ありがたみを感じない人や、過度な権利を主張する人、あるいは明らかにトラブルを起こす人との接触が含まれます。プロジェクトが人気を集めるにつれて、このようなやり取りが増え、メンテナの負担が増大し、その結果、燃え尽きるリスクが高まることが考えられます。
  <p markdown="1" class="pquote-credit">
— <a href="https://github.com/foosel">@foosel</a>, Octoprint のメンテナー、 [How to deal with toxic people](https://www.youtube.com/watch?v=7lIpP3GEyXs) にて
  </p>
</aside>

忘れないでください、パーソナルエコロジーは継続的な実践であり、オープンソースの旅を進める中で進化していきます。自分自身のケアを優先し、バランスを保つことで、効果的かつ持続可能にオープンソースコミュニティに貢献できます。これにより、あなた自身の幸福とプロジェクトの長期的な成功の両方を確保することができます。

## その他のリソース

* [Maintainer Community](http://maintainers.github.com/)
* [The social contract of open source](https://snarky.ca/the-social-contract-of-open-source/), Brett Cannon
* [Uncurled](https://daniel.haxx.se/uncurled/), Daniel Stenberg
* [How to deal with toxic people](https://www.youtube.com/watch?v=7lIpP3GEyXs), Gina Häußge
* [SustainOSS](https://sustainoss.org/)
* [Rockwood Art of Leadership](https://rockwoodleadership.org/art-of-leadership/)
* [Saying No](https://mikemcquaid.com/saying-no/), Mike McQuaid
* [Governing Open](hhttps://governingopen.com/)
* Workshop agenda was remixed from [Mozilla's Movement Building from Home](https://foundation.mozilla.org/en/blog/its-a-wrap-movement-building-from-home/) series

## 貢献者

このガイドのために経験やヒントを提供してくれた全てのメンテナーに感謝します！

このガイドブックは、[@abbycabs](https://github.com/abbycabs) によって作成されました。：

[@agnostic-apollo](https://github.com/agnostic-apollo)
[@AndreaGriffiths11](https://github.com/AndreaGriffiths11)
[@antfu](https://github.com/antfu)
[@anthonyronda](https://github.com/anthonyronda)
[@CBID2](https://github.com/CBID2)
[@Cli4d](https://github.com/Cli4d)
[@confused-Techie](https://github.com/confused-Techie)
[@danielroe](https://github.com/danielroe)
[@Dexters-Hub](https://github.com/Dexters-Hub)
[@eddiejaoude](https://github.com/eddiejaoude)
[@Eugeny](https://github.com/Eugeny)
[@ferki](https://github.com/ferki)
[@gabek](https://github.com/gabek)
[@geromegrignon](https://github.com/geromegrignon)
[@hynek](https://github.com/hynek)
[@IvanSanchez](https://github.com/IvanSanchez)
[@karasowles](https://github.com/karasowles)
[@KoolTheba](https://github.com/KoolTheba)
[@leereilly](https://github.com/leereilly)
[@ljharb](https://github.com/ljharb)
[@nightlark](https://github.com/nightlark)
[@plarson3427](https://github.com/plarson3427)
[@Pradumnasaraf](https://github.com/Pradumnasaraf)
[@RichardLitt](https://github.com/RichardLitt)
[@rrousselGit](https://github.com/rrousselGit)
[@sansyrox](https://github.com/sansyrox)
[@schlessera](https://github.com/schlessera)
[@shyim](https://github.com/shyim)
[@smashah](https://github.com/smashah)
[@ssalbdivad](https://github.com/ssalbdivad)
[@The-Compiler](https://github.com/The-Compiler)
[@thehale](https://github.com/thehale)
[@thisisnic](https://github.com/thisisnic)
[@tudoramariei](https://github.com/tudoramariei)
[@UlisesGascon](https://github.com/UlisesGascon)
[@waldyrious](https://github.com/waldyrious) + many others!
