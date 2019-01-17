---
lang: ja
title: オープンソースプロジェクトを始めよう
description: オープンソースの世界のことをもっと学び、あなた自身のプロジェクトを立ち上げる準備をしましょう
class: beginners
order: 2
image: /assets/images/cards/beginner.png
related:
  - finding
  - building
---

## オープンソースとは何でなぜそれを行うのか

さて、あなたはオープンソースを始めようと考えているのですか？おめでとう！世界はあなたの貢献に感謝します。オープンソースとはなんであってなぜ人々はそれを行うのかについて話しましょう。

### 「オープンソース」が意味するものは？

あるプロジェクトがオープンソースである時、それは**誰でも見て、使って、修正して、あなたのプロジェクトをいかなる目的であっても配布できる**ということを意味します。これらの行為を許可するということは[オープンソースライセンス](https://opensource.org/licenses)に定められています。

オープンソースは採用される敷居を下げ、アイデアがすぐに広がることを可能にするため、強力です。

オープンソースがどのように機能しているかを理解するため、あなたの友人がありあわせの料理を食べていて、あなたがチェリーパイを持ってきたと想像してみて下さい。

* 誰しもがパイを食べようとします (_使う_)
* パイはヒットしました！友人たちはレシピを教えてほしいと頼み、それを教えてあげます。 (_見る_)
* アレックスというある友達は、彼は洋菓子職人なのですが、砂糖を減らす事を提案します。 (_修正する_)
* リサという他の友達は、来週の夕食に使ってもよいかと尋ねます (_配布する_)

この比較としては、クローズドソースのプロセスはレストランに行ってチェリーパイを頼むことだと言えます。パイを食べるのには料金を支払う必要がありますし、レストランはおそらくあなたにレシピを教えてくれることはないでしょう。もしあなたが彼らのパイを完全にコピーし、あなたの名前で売り出したとしたら、レストランはあなたに対して何らかの行動を取るかもしれません。

### なぜ人々は彼らの業績をオープンソースにするのか？

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/kentcdodds?s=180" class="pquote-avatar" alt="avatar">
  オープンソースを使ったりコラボレーションすることからくる最もやりがいのある経験の一つは、私と同じ問題に遭遇している他の開発者と作り上げる関係から来ています。
  <p markdown="1" class="pquote-credit">
— @kentcdodds, ["How getting into Open Source has been awesome for me"](https://medium.com/@kentcdodds/how-getting-into-open-source-has-been-awesome-for-me-8480cd756a80#.pjt9oqp4w)
  </p>
</aside>

人々や組織がオープンソースプロジェクトを始めるには[様々な理由があります](https://ben.balter.com/2015/11/23/why-open-source/)。いくつか例を挙げてみましょう：

* **コラボレーション：** オープンソースプロジェクトは世界の誰からも変更を受け付けます。例えば[Exercism](https://github.com/exercism/)は、350を超えるコントリビュータがいるプログラミング練習プラットフォームです。

* **取り入れて再構成：** オープンソースプロジェクトは誰しもがほとんどいかなる理由のためにも使えるものです。人々は他のものを作るためにでも使うことができます。例えば [WordPress](https://github.com/WordPress) は、 [b2](https://github.com/WordPress/book/blob/master/Content/Part%201/2-b2-cafelog.md) と呼ばれる既存のプロジェクトのフォークとして始まりました。

* **透明性：** 誰でもオープンソースプロジェクトにエラーがないかや一貫していないところがないか調べることができます。透明性は [ブルガリア](https://medium.com/@bozhobg/bulgaria-got-a-law-requiring-open-source-98bf626cf70a) や [アメリカ](https://sourcecode.cio.gov/) のような政府、銀行やヘルスケアのような規制産業、 [Let's Encrypt](https://github.com/letsencrypt) のようなセキュリティソフトウェアにとって重要です。

オープンソースはソフトウェアのためだけのものでもありません。データセットから本まであらゆるものをオープンソースにできるのです。他になにかオープンソースにできるものはないかアイデアを得るために [GitHub Explore](https://github.com/explore) をチェックしてみましょう。

### オープンソースは「無料で使える」事を意味している？

オープンソースの大きな魅力の一つがお金がかからないということです。しかし、「無料で使える」ことはオープンソースの全ての価値の副産物でしかありません。

[オープンソースライセンスが要求しているように](https://opensource.org/osd-annotated)、誰でも使え、修正でき、どんな目的でも共有できるため、プロジェクト自身は無料で使える傾向にあります。もしそのプロジェクトが使うのにお金がかかるとしたら、誰でも合法的にそのコピーを作って無料のバージョンを代わりに作ることができます。

結果として、ほとんどのオープンソースプロジェクトは無料です。しかし、「無料で使える」ことはオープンソースの定義には含まれていません。オープンソースプロジェクトでも、デュアルライセンスや機能制限によて間接的に料金を取る方法はあります。これでもまだオープンソースの公式な定義に則っています。

## 自分自身のオープンソースプロジェクトを立ち上げるべき？

簡単な答えとしてはイエスです。なぜなら、成果がどうであれ、あなた自身のプロジェクトを立ち上げるのはオープンソースがどうやって成り立っているのかを学ぶ素晴らしい方法です。

もし今までプロジェクトをオープンソースにしたことがないのであれば、他の人から何を言われるか、誰も全く気づいてくれないんじゃないかと心配になっているかもしれません。もしあなたがそうだとしたら、あなたは一人ではありません！

オープンソース活動は他の執筆や絵画などのクリエイティブな活動を似ています。世界にあなたの作品を公開するのは怖いと感じるでしょうが、上達する唯一の方法は練習することなのです。たとえ、誰も見ている人が居ないとしても。

もしまだ納得していないのであれば、あなたのゴールがどういったものであるかを少し考えてみましょう。

### ゴールを設定する

ゴールを設定することによって、何をやるべきか、なににノーというべきか、他の人の助けが必要な箇所を明確にすることができます。_私はなぜこのプロジェクトをオープンソースにしたのか？_ と自問してみましょう。

この質問に唯一の正解はありません。一つのプロジェクトに対して複数のゴールがあるかもしれないし、異なるプロジェクトで異なるゴールがあるかもしれません。

もしあなたのゴールがあなたの作品を見せびらかすことだけなのであれば、貢献は望まないでしょうし、READMEでそういうべきですらあります。その一方で、コントリビュータを望むであれば、明確なドキュメントと新しく来た人が歓迎されていると感じるように時間を投資するでしょう。

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/mavris?s=180" class="pquote-avatar" alt="avatar">
  ある時点で、私は自分で使っていたカスタムのUIAlertViewを作りました…そして、オープンソースにすることを決めたのです。そこで私はそれをより機能的になるように修正し、GitHubにアップロードしました。また、他の開発者が彼らのプロジェクトでどのように使うかを説明するはじめてのドキュメントも書きました。おそらく、非常にシンプルなプロジェクトだったので誰もこれまでに使っていないでしょうが、自分の貢献に対して良い気分でした。
  <p markdown="1" class="pquote-credit">
— @mavris, ["Self-taught Software Developers: Why Open Source is important to us"](https://medium.com/rocknnull/self-taught-software-engineers-why-open-source-is-important-to-us-fe2a3473a576#.zhwo5krlq)
  </p>
</aside>

あなたのプロジェクトが成長するにつれて、コミュニティがあなたに求めるものはコードを書くことだけではなくなるでしょう。イシューに返答したり、コードをレビューしたり、あなたのプロジェクトがオープンソースプロジェクトにとってとても重要なタスクなのであると説いて回るといったことです。

コーディング以外のタスクに費やす時間はあなたのプロジェクトのサイズと範囲に依存する一方で、メンテナーとしてそういった活動に取り組む準備をするか手伝ってくれる人を見つけるべきです。

**もしあなたが企業でプロジェクトをオープンソースにすることに携わっているのであれば、** あなたのプロジェクトが盛り上がるのに必要な企業内部のリソースを持っているかどうか確かめましょう。立ち上げた後にプロジェクトをメンテナンスする担当の人は誰で、コミュニティとどのようにタスクを共有するのかを特定したいと思うでしょう。

プロジェクトの推進と運営、メンテナンスに予算と人員が必要なのであれば、その会話は早めに始めましょう。

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/captainsafia?s=180" class="pquote-avatar" alt="avatar">
  オープンソースプロジェクトを始める時に、あなたの管理プロセスにおいて貢献やそのプロジェクトのコミュニティの能力が考慮されているかどうかを確かめておくのは大事なことです。プロジェクトの大事な部分であなたの企業に雇われていないコントリビュータを巻き込むことを恐れてはいけません - 特に彼らが頻繁に貢献をしてくれるのであれば。
  <p markdown="1" class="pquote-credit">
— @captainsafia, ["So you wanna open source a project, eh?"](https://writing.safia.rocks/2016/12/06/so-you-wanna-open-source-a-project-eh/)
  </p>
</aside>

### 他のプロジェクトに貢献する

もしあなたのゴールが他の人とコラボレーションする方法を学んだり、オープンソースがどうやって機能しているのかを理解することなのであれば、既存のプロジェクトに貢献することも考えてみましょう。あなたが既に使っていて気に入っているプロジェクトから始めましょう。プロジェクトに貢献するのは誤植を直したり、ドキュメントを更新したりといったシンプルなものでもよいのです。

コントリビュータとして活動し始める方法がわからないのであれば、私達の[オープンソースに貢献する方法](../how-to-contribute/)をチェックしてみて下さい。

## あなた自身のオープンソースプロジェクトを立ち上げる

あなたの作品をオープンソースにするのに完璧なタイミングはありません。アイデアや作業中のもの、クローズドで何年も経ったものであってもオープンソースにできるのです。

一般的に言って、他の人があなたの作品をみて、フィードバックをくれることに対して苦痛がないのであれば、あなたのプロジェクトをオープンソースにするべきです。

あなたのプロジェクトをオープンソースをするのがどの段階であれ、全てのプロジェクトは下記のドキュメントを含んでいるべきです：

* [オープンソースライセンス](https://help.github.com/articles/open-source-licensing/#where-does-the-license-live-on-my-repository)
* [README](https://help.github.com/articles/create-a-repo/#commit-your-first-change)
* [貢献のガイドライン](https://help.github.com/articles/setting-guidelines-for-repository-contributors/)
* [行動規範](../code-of-conduct/)

メンテナーとして、これらの要素は期待値をコミュニケーションし、貢献をマネジメントし、すべての人（あなた自身も含む）の法的権利を守る助けになります。これらによってあなたが良い経験を積むことができる可能性を大幅に増やします。

もしあなたのプロジェクトがGitHub上にあるのであれば、これらのファイルを推奨されているファイル名でルートディレクトリに置くことで、GitHubがそれを認識し、見ている人に自動的に表示してくれます。

### ライセンスを選ぶ

オープンソースライセンスは、他の人が恐れを感じることなくあなたのプロジェクトを使い、コピーし、修正し、貢献する事を保証します。また、あなたを法的な面倒事からも守ってくれます。**あなたがプロジェクトをオープンソースにするときは必ずライセンスを含めるようにしましょう。**

法的な作業は楽しくはありません。既存のライセンスをあなたのリポジトリにコピーペーストできるというのは良い知らせでしょう。あなたの大事な作品を守るのに1分しかかかりません。

[MIT](https://choosealicense.com/licenses/mit/) や [Apache 2.0](https://choosealicense.com/licenses/apache-2.0/)、[GPLv3](https://choosealicense.com/licenses/gpl-3.0/)が最も有名なオープンソースライセンスですが、[他の選択肢](https://choosealicense.com)もあります。

GitHub上に新しいプロジェクトを作るときは、ライセンスを選択する選択肢が表示されます。オープンソースライセンスを含めることで、あなたのGitHubプロジェクトはオープンソースになります。

![Pick a license](/assets/images/starting-a-project/repository-license-picker.png)

オープンソースプロジェクトを管理する上での法的な面でまだ疑問や懸念があるのであれば、[こちらを参照して下さい](../legal/)。

### READMEを書く

READMEはあなたのプロジェクトをどうやって使うかを説明するだけにとどまりません。そこでは、なぜあなたのプロジェクトが重要なのか、そしてユーザーはあなたのプロジェクトで何ができるかということも説明するためのものです。

READMEには、下記の質問に答えるようにしましょう：

* このプロジェクトは何をするものなのか？
* なぜこのプロジェクトは便利なのか？
* どのようにして使い始められるのか？How do I get started?
* もし必要な場合、どうやったら助けを得られるか？

READMEでは、貢献をどのように扱うか、プロジェクトのゴールはなにか、ライセンスや帰属についての情報などといった他の疑問に答えるのに使うこともできる。もし貢献を受け入れたくなかったり、あなたのプロジェクトは運用に乗せる準備が整っていなかったりする場合は、その情報も書きましょう。

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/tracymakes?s=180" class="pquote-avatar" alt="avatar">
  良いドキュメントを書くことで、ユーザーが増え、サポートのリクエストが減り、コントリビュータが増えることを意味します。（…）読者はあなたとは違うということを忘れないで下さい。完全に異なる経験を持った人がプロジェクトに来るかもしれないのです。
  <p markdown="1" class="pquote-credit">
— @tracymakes, ["Writing So Your Words Are Read (video)"](https://www.youtube.com/watch?v=8LiV759Bje0&list=PLmV2D6sIiX3U03qc-FPXgLFGFkccCEtfv&index=10)
  </p>
</aside>

時々、プロジェクトが未完了であったり貢献を求めていないといった理由でREADMEを書くのを避ける人が居ます。これらもREADMEに書いておくと良いでしょう。

さらなるヒントとしては、完全なREADMEを書くために@18Fの["Making READMEs Readable"](https://pages.18f.gov/open-source-guide/making-readmes-readable/)か@PurpleBooth's [README template](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2)を読んでみると良いでしょう。

READMEファイルをルートディレクトリに置くことで、GitHubが自動的にリポジトリのホームページに表示してくれます。

### 貢献のガイドラインを書く

CONTRIBUTINGファイルはあなたのプロジェクトにどうやって参加するのかを伝えるためのものです。例えば、下記の様な情報を含めると良いでしょう：

* バグレポートの登録の仕方 ([イシューやプルリクエストのテンプレート](https://github.com/blog/2111-issue-and-pull-request-templates)を使ってみましょう)
* 新しい機能の提案の仕方
* 環境のセットアップとテストの実行の仕方

技術的な詳細に加えて、CONTRIBUTINGファイルは貢献に対する期待値を伝える機会でもあります。例えば：

* あなたが求めている貢献の種類
* プロジェクトのロードマップやビジョン
* コントリビュータがどのようにしてあなたにコンタクトすべきか（もしくはすべきでないか）

暖かく友好的なトーンを使って、（ドキュメントを書く、もしくはウェブサイトを作る、といったような）貢献を具体的に提示することで、新しく来る人が歓迎されていて是非参加したいと思ってもらうのにとても役に立ちます。

例えば、[Active Admin](https://github.com/activeadmin/activeadmin/)は[貢献ガイド](https://github.com/activeadmin/activeadmin/blob/master/CONTRIBUTING.md)を下記の内容から始めた：

> まずはじめに、Active Adminへの貢献を考えてくれてありがとうございます。あなたのような人々がActive Adminを偉大なツールにしているのです。

あなたのプロジェクトの最初期では、CONTRIBUTINGファイルはシンプルで大丈夫です。常にバグの報告の仕方かイシューの登録の仕方、貢献をする際の技術的な要求（テストなど）を書くようにしましょう。

時間が経つにつれて、CONTRIBUTINGファイルに頻繁に聞かれる質問を加えるでしょう。こういった情報を書くことによって、同じ質問を何度も繰り返ししてくる人が減っていくでしょう。

CONTRIBUTINGファイルを書くときに更に役に立つものとして、@nayafiaの[contributing guide template](https://github.com/nayafia/contributing-template/blob/master/CONTRIBUTING-template.md)や@mozillaの["How to Build a CONTRIBUTING.md"](https://mozillascience.github.io/working-open-workshop/contributing/)も参考になるでしょう。

READMEにCONTRIBUTINGファイルへのリンクをすることで、より多くの人の目に触れるようになります。[CONTRIBUTINGファイルをプロジェクトのリポジトリに置くことで](https://help.github.com/articles/setting-guidelines-for-repository-contributors/)、GitHubでコントリビュータがイシューを登録したり、プルリクエストをオープンする際に、そのファイルへのリンクが自動的に表示されます。

![Contributing guidelines](/assets/images/starting-a-project/Contributing-guidelines.jpg)

### 行動規範を定める

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/mlynch?s=180" class="pquote-avatar" alt="avatar">
  私達は皆、違反だと思われるような場面に遭遇したことがあります。ときにはメンテナとしてなぜそういったやり方でやるべきなのかを説明しようとしたり、時にはユーザーとして単純な質問をしたり。行動規範は、あなたのチームが生産的な議論を非常に真剣に捉えていることを示すために参照してリンクするためのドキュメントとして使うことができます。
  <p markdown="1" class="pquote-credit">
— @mlynch, ["Making Open Source a Happier Place"](https://medium.com/ionic-and-the-mobile-web/making-open-source-a-happier-place-3b90d254f5f#.v4qhl7t7v)
  </p>
</aside>

最後に、行動規範はあなたのプロジェクトの参加者の行動に対する基本原則を設定する助けになります。これは特にあなたがコミュニティや会社のためのオープンソースを立ち上げる時に役に立ちます。行動規範は健康的で生産的なコミュニティの振る舞いを促進する助けになります。そして、あなたのメンテナとしてのストレスを減らしてくれるでしょう。

更に情報が必要な場合は、[行動規範ガイド](../code-of-conduct/)を見てみましょう。

プロジェクトの参加者に _どう_ 振る舞ってほしいかを伝えるのに加えて、行動規範では期待される行動が、誰に対して、いつ適用され、違反した場合には何をすべきなのかについても記載される傾向があります。

オープンソースライセンスによく似ていますが、行動規範にもスタンダードが出てきています。なので、あなた自身で書く必要はありません。[Contributor Covenant](https://contributor-covenant.org/)はカジュアルに使うことができる行動規範で、[40,000を超えるオープンソースプロジェクト](https://www.contributor-covenant.org/adopters)に使われており、そこにはKubernetes、RailsやSwiftも含まれます。どの文書を使うにしても、必要なときにはあなたの指針に従わせる準備をしておくべきです。

あなたのリポジトリのCODE_OF_CONDUCTファイルに文書を直接貼り付けましょう。そのファイルをプロジェクトのルートディレクトリに置いておくことで、簡単に見つけることができ、READMEからリンクすることができます。

## あなたのプロジェクトに名前とブランドを付けよう

ブランディングは華やかなロゴやキャッチーな名前以上のものです。それは、あなたのプロジェクトについてどう紹介し、あなたのメッセージが誰に届くのかということなのです。

### 適切な名前を選ぶ

覚えやすい名前を選びましょう。理想的には名前からそのプロジェクトが何をするのかがわかるようにしましょう。例：

* [Sentry](https://github.com/getsentry/sentry)はクラッシュレポートのためにアプリケーションをモニターします
* [Thin](https://github.com/macournoyer/thin)は高速でシンプルなRubyのウェブサーバーです

既存のプロジェクトに基づいて開発しているのであれば、その名前を頭につけることであなたのプロジェクトが何をするものかを明らかにする助けになります（例えば、[node-fetch](https://github.com/bitinn/node-fetch)はNode.jsに`window.fetch`を追加するものです）。

明快さを第一に考えましょう。ダジャレは面白いですが、ジョークは他の文化やあなたとは異なる経験を持った人には通じないこともあるということを覚えておきましょう。潜在的なユーザーには企業の従業員もいるかもしれません: 彼らがあなたのプロジェクトについて職場で説明する時に居心地の悪い思いをさせたくはないでしょう。

### 名前の衝突を避ける

[同じような名前のオープンソースプロジェクトを調べましょう](http://ivantomic.com/projects/ospnc/)。同じ言語やエコシステムを共有する場合は特にです。もし既存の有名なプロジェクトと名前が同じ部分があると、外から見た人を混乱させてしまうでしょう。

ウェブサイトやTwitterのハンドルや他であなたのプロジェクト名を使いたいのであれば、使いたい名前を使えるかどうか確かめましょう。理想的には、心の平穏のために[すぐにそれらの名前を予約しましょう](https://instantdomainsearch.com/)。たとえ、今すぐに使うつもりがないとしても。

プロジェクトの名前が商標の侵害をしていないか確かめましょう。後になってある企業があなたのプロジェクトをやめるように言ってきたり、法的措置さえしてくるかもしれません。そんなリスクは見合いません。

商標を侵害していないかを調べるには[WIPO Global Brand Database](http://www.wipo.int/branddb/en/)を確認しましょう。もし企業にいるのであれば、この点は[法務部門が助けてくれる](../legal/)ことの一つでしょう。

最後に、あなたのプロジェクト名でGoogle検索をしてみましょう。人々は簡単にあなたのプロジェクトを見つけることができるでしょうか？検索結果の中になにか望ましくないものが表示されていないでしょうか？

### How you write (and code) affects your brand, too!

あなたのプロジェクト全体を通して、多くの文書を書くでしょう：README、チュートリアル、コミュニティドキュメント、イシューへの返答、もしかしたらニュースレターやメーリングリストもあるかもしれません。

公式のドキュメントであれ、カジュアルなメールであれ、あなたの文書のスタイルはプロジェクトのブランドの一部になります。見る人にどのようにして伝わるかやあなたが伝えたいトーンかどうかを検討しましょう。

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/janl?s=180" class="pquote-avatar" alt="avatar">
  メーリングリストのすべてのスレッドに関わるようにしましたし、模範的な行動を示し、人々に親切にし、イシューを真剣に捉え、何より助けになるようにしました。しばらくすると、人々は質問をするだけでなく、質問に答えたり、何よりも嬉しいことに私のスタイルを真似してくれたのです。
  <p markdown="1" class="pquote-credit">
— @janl on [CouchDB](https://github.com/apache/couchdb), ["Sustainable Open Source"](http://writing.jan.io/2015/11/20/sustainable-open-source.html)
  </p>
</aside>

暖かく、排他的でない言葉遣い（一人の人を指すときであっても「彼ら」を使う、といったような）をすることで、あなたのプロジェクトで新しいコントリビュータが歓迎されていると感じてもらうことに繋がります。シンプルな言葉遣いをすることにこだわりましょう。あなたのプロジェクトを見る人の多くは英語のネイティブスピーカーではないかもしれません。

あなたがどう文書を書くかに加えて、あなたのコーディングスタイルもプロジェクトのブランドの一分になるかもしれません。[Angular](https://github.com/johnpapa/angular-styleguide)と[jQuery](https://contribute.jquery.org/style-guide/js/)の2つは厳密なコーディングスタイルとガイドラインを持つプロジェクトの例です。

かならずしもプロジェクトを始める際にスタイルガイドを書く必要はありませんし、とにかく異なるコーディングスタイルを盛り込むのが楽しいと思うかもしれません。しかし、あなたの文書やコーディングスタイルが異なるタイプの人々を惹きつけることもあれば落胆させることもあるということを予期しておくべきです。プロジェクトの最初期はあなたが望む先例を作る良い機会です。

## 立ち上げ前のチェックリスト

あなたのプロジェクトをオープンソースにする準備が整いましたか？ここにあなたの助けとなるよう、チェックリストを用意しました。全てにチェックが就きましたか？そうであれば準備万端です！
["publish"をクリックして](https://help.github.com/articles/making-a-private-repository-public/)、自分を褒めてあげましょう。

**ドキュメント**

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox1" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox1" class="overflow-hidden d-block text-normal">
    オープンソースライセンスのLICENSEファイルがある
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox2" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox2" class="overflow-hidden d-block text-normal">
    基本的なドキュメント（README、CONTRIBUTING、CODE_OF_CONDUCT）がある
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox3" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox3" class="overflow-hidden d-block text-normal">
    名前が覚えやすく、プロジェクトが何をするのかがある程度わかり、既存のプロジェクトと重複したり、商標を侵害していない
  </label>
</div>

<div class="clearfix mb-4">
  <input type="checkbox" id="cbox4" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox4" class="overflow-hidden d-block text-normal">
    イシューのキューが最新であり、イシューが整理されてラベル付けされている
  </label>
</div>

**Code**

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox5" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox5" class="overflow-hidden d-block text-normal">
    一貫した命名規則を使っていて、明快な関数名/メソッド名/変数名を使っている
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox6" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox6" class="overflow-hidden d-block text-normal">
    コードに明快なコメントがあり、そこには意図やエッジケースが書かれている
  </label>
</div>

<div class="clearfix mb-4">
  <input type="checkbox" id="cbox7" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox7" class="overflow-hidden d-block text-normal">
    リビジョンの履歴やイシュー、プルリクエストに機密情報（例えばパスワードやそれ以外の非公開情報）が含まれていない
  </label>
</div>

**人々**

もし個人でやっているのであれば：

<div class="clearfix mb-4">
  <input type="checkbox" id="cbox8" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox8" class="overflow-hidden d-block text-normal">
  （もしどこかの従業員であれば）法務部門と話をして、あなたの会社の知的財産やオープンソースの方針を理解している
  </label>
</div>

企業や組織でやっているのであれば：

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox9" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox9" class="overflow-hidden d-block text-normal">
    法務部門と話をした
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox10" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox10" class="overflow-hidden d-block text-normal">
    プロジェクトのアナウンスや売り込みのマーケティングプランを持っている
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox11" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox11" class="overflow-hidden d-block text-normal">
    コミュニティのやりとり（イシューへの返答、レビュー、プルリクエストのマージ）の担当者がいる
  </label>
</div>

<div class="clearfix mb-4">
  <input type="checkbox" id="cbox12" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox12" class="overflow-hidden d-block text-normal">
    プロジェクトの管理権限を持っている人が少なくとも2人いる
  </label>
</div>

## やりました！

おめでとう！あなたの最初のプロジェクトをオープンソースにしました。成果はどうあれ、公の場で働くことはコミュニティへの贈り物です。あらゆるコミット、コメント、プルリクエストによって、あなた自身や他の人が学び、成長する機会を提供しているのです。
