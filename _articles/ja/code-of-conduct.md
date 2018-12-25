---
lang: ja
title: 行動規範ガイド
description: 行動規範を採用することで、健全で生産的なコミュニティを作り上げよう
class: coc
order: 8
image: /assets/images/cards/coc.png
related:
  - building
  - leadership
---

## なぜ行動規範が必要なのか？

行動規範は、あなたのプロジェクトの参加者に期待する振る舞いをまとめたドキュメントです。行動規範を採用することで、コミュニティでポジティブな雰囲気を作り上げる事ができます。

行動規範は、コミュニティの参加者を守るのに役立つだけでなく、あなた自身の役にも立ちます。もしあなたがメンテナーなのであれば、参加者の生産的でない態度に対処することに疲れを感じ、不幸せだと感じることでしょう。

行動規範は、健全で生産的なコミュニティを作り上げる助けとなります。事前に行動規範を決めておくことで、あなた自身やプロジェクトの参加者が疲れ果ててしまう可能性を下げることができ、あなたが好ましいと思わない事が起きたときに、それに対して行動を起こす助けとなります。

## 行動規範を作ろう

できるだけ早い段階で行動規範を作りましょう: 理想的にはプロジェクトを始めに立ち上げるときに作りましょう。

あなたの期待値を伝えることに加えて、行動規範では下記の内容も記述しましょう:

* 行動規範が有効な範囲はどこまでか _(イシューやプルリクエスト上だけで有効なのか、それともイベントのようなコミュニティ活動でも有効なのか？)_
* 行動規範が適用されるのは誰か _(コミュニティメンバーやメンテナー以外にもスポンサーも適用範囲なのか？)_
* 行動規範に違反したら何が起きるのか
* 違反はどのようにして報告するのか

できる限り、既存の行動規範を使いましょう。[Contributor Covenant](https://contributor-covenant.org/)は40,000以上のオープンソースプロジェクトで使われている行動規範で、Kubernetes、Rails、Swiftでも使われています。

[Django Code of Conduct](https://www.djangoproject.com/conduct/)や[Citizen Code of Conduct](http://citizencodeofconduct.org/)の2つもよく使われる行動規範です。

CODE_OF_CONDUCGファイルをプロジェクトのルートディレクトリに置き、CONTRIBUTINGやREADMEファイルからリンクを張ってコミュニティの皆がすぐに見れるようにしましょう。

## どのように行動規範に従ってもらうかを決めよう

<aside markdown="1" class="pquote">
  強制されていない行動指針は、全く行動指針がない状態よりも悪い状態です: 強制されていないことで、コミュニティの人々に行動指針に記載されている価値観は実際は重要でないか尊重されていないというメッセージを与えてしまうからです。
  <p markdown="1" class="pquote-credit">
— [Ada Initiative](https://adainitiative.org/2014/02/18/howto-design-a-code-of-conduct-for-your-community/)
  </p>
</aside>

行動指針の違反が発生する **前に** どのように行動指針に従ってもらうかを説明するべきです。そうするべき理由はいくつかあります:

* 必要な時にはあなたが行動を起こすということに本気であるということを示す事ができる。

* 不満を言った場合にとあなたがきちんとそれについて考慮してくれるとコミュニティのメンバーを安心させることができる。

* コミュニティのメンバーたちに対して違反について調査をするときに、レビュープロセスが公正で透明性の高いものであると安心させることができる。

メンバーに対しては、行動規範の違反を報告するための（メールアドレスのような）プライベートな方法を与え、それを受け取るのが誰なのかを説明するべきです。それはメンテナーのうちの一人かもしれないし、何人かのメンテナーかもしれないし、行動規範チームかもしれません。

行動規範の違反の報告を受け取る人の違反を報告したいというケースもあることを忘れてはいけません。この場合は、他の人に違反を報告できるような選択肢を設けましょう。例えば、@ctb と @mr-c は、彼らの[khmer](https://github.com/dib-lab/khmer)というプロジェクトで[このように説明しています](https://github.com/dib-lab/khmer/blob/master/CODE_OF_CONDUCT.rst):

> 不正行為やハラスメント、受け入れられない行為は、 **khmer-project@idyll.org** にメールを送ることによって報告することが出来ます。このメールは、C. Titus Brown と Michael R. Crusoe のみが受け取ります。彼ら二人のどちらかが関係する問題について報告する場合は、NSF Center for Science and Technology の BEACON Center for the Study of Evolution in Action のダイバーシティディレクターの **Judi Brown Clarke, Ph.D.** にメールで報告して下さい。*

他にもDjangoの[enforcement manual](https://www.djangoproject.com/conduct/enforcement-manual/)も参考になります （ただし、プロジェクトのサイズによってはここまで網羅したものは必要ないかもしれません）。

## 行動規範を強制しよう

どんなに努力したとしても、時には行動規範を違反するような行為をする人も出てきます。こういったネガティブで害のある行為を解決する方法は幾つかあります。

### 状況についての情報を集めよう

コミュニティメンバーの声を、自分の意見と同じくらい大事に扱おう。誰かが行動規約に違反していると報告を受けたら、たとえ報告を受けた人物が違反をしそうにないと起こったとしても、報告を真剣に捉え調査をしよう。そうすることでコミュニティに対して、彼らのものの見方に価値を見出しており、また彼らの判断を信頼しているという事を知らしめることが出来ます。

疑惑のメンバーは、何度も人を不愉快にさせている人かもしれないし、一度だけやってしまった人かもしれません。状況によってはどちらも行動が必要な理由になります。

行動を起こす前に、時間を取って何が起きたのか理解しましょう。その人の過去のコメントや会話に目を通して、彼らがどういった人物でなぜそういった行動に出たのかを理解しましょう。その人自体やその人の行動に対する他の人の観点を集めましょう。

<aside markdown="1" class="pquote">
  論争に巻き込まれないようにしましょう。眼の前の問題を解決し終える前に他の人の振る舞いについて横道にそれないようにしましょう。必要なことに集中するのです。
  <p markdown="1" class="pquote-credit">
— Stephanie Zvan, ["So You've Got Yourself a Policy. Now What?"](https://the-orbit.net/almostdiamonds/2014/04/10/so-youve-got-yourself-a-policy-now-what/)
  </p>
</aside>

### 適切な行動を取ろう

After gathering and processing sufficient information, you'll need to decide what to do. As you consider your next steps, remember that your goal as a moderator is to foster a safe, respectful, and collaborative environment. Consider not only how to deal with the situation in question, but how your response will affect the rest of your community's behavior and expectations moving forward.

When somebody reports a code of conduct violation, it is your, not their, job to handle it. Sometimes, the reporter is disclosing information at great risk to their career, reputation, or physical safety. Forcing them to confront their harasser could put the reporter in a compromising position. You should handle direct communication with the person in question, unless the reporter explicitly requests otherwise.

There are a few ways you might respond to a code of conduct violation:

* **Give the person in question a public warning** and explain how their behavior negatively impacted others, preferably in the channel where it occurred. Where possible, public communication conveys to the rest of the community that you take the code of conduct seriously. Be kind, but firm in your communication.

* **Privately reach out to the person** in question to explain how their behavior negatively impacted others. You may want to use a private communication channel if the situation involves sensitive personal information. If you communicate with someone privately, it's a good idea to CC those who first reported the situation, so they know you took action. Ask the reporting person for consent before CCing them.

Sometimes, a resolution cannot be reached. The person in question may become aggressive or hostile when confronted or does not change their behavior. In this situation, you may want to consider taking stronger action. For example:

* **Suspend the person** in question from the project, enforced through a temporary ban on participating in any aspect of the project

* **Permanently ban** the person from the project

Banning members should not be taken lightly and represents a permanent and irreconcilable difference of perspectives. You should only take these measures when it is clear that a resolution cannot be reached.

## Your responsibilities as a maintainer

A code of conduct is not a law that is enforced arbitrarily. You are the enforcer of the code of conduct and it's your responsibility to follow the rules that the code of conduct establishes.

As a maintainer you establish the guidelines for your community and enforce those guidelines according to the rules set forth in your code of conduct. This means taking any report of a code of conduct violation seriously. The reporter is owed a thorough and fair review of their complaint. If you determine that the behavior that they reported is not a violation, communicate that clearly to them and explain why you're not going to take action on it. What they do with that is up to them: tolerate the behavior that they had an issue with, or stop participating in the community.

A report of behavior that doesn't _technically_ violate the code of conduct may still indicate that there is a problem in your community, and you should investigate this potential problem and act accordingly. This may include revising your code of conduct to clarify acceptable behavior and/or talking to the person whose behavior was reported and telling them that while they did not violate the code of conduct, they are skirting the edge of what is expected and are making certain participants feel uncomfortable.

In the end, as a maintainer, you set and enforce the standards for acceptable behavior. You have the ability to shape the community values of the project, and participants expect you to enforce those values in a fair and even-handed way.

## Encourage the behavior you want to see in the world 🌎

When a project seems hostile or unwelcoming, even if it's just one person whose behavior is tolerated by others, you risk losing many more contributors, some of whom you may never even meet. It's not always easy to adopt or enforce a code of conduct, but fostering a welcoming environment will help your community grow.
