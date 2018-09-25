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

### Be responsive

As you [promote your project](../finding-users), people will have feedback for you. They may have questions about how things work, or need help getting started.

Try to be responsive when someone files an issue, submits a pull request, or asks a question about your project. When you respond quickly, people will feel they are part of a dialogue, and they'll be more enthusiastic about participating.

Even if you can't review the request immediately, acknowledging it early helps increase engagement. Here's how @tdreyno responded to a pull request on [Middleman](https://github.com/middleman/middleman/pull/1466):

![Middleman pull request](/assets/images/building-community/middleman_pr.png)

[A Mozilla study found that](https://docs.google.com/presentation/d/1hsJLv1ieSqtXBzd5YZusY-mB8e1VJzaeOmh8Q4VeMio/edit#slide=id.g43d857af8_0177) contributors who received code reviews within 48 hours had a much higher rate of return and repeat contribution.

Conversations about your project could also be happening in other places around the internet, such as Stack Overflow, Twitter, or Reddit. You can set up notifications in some of these places so you are alerted when someone mentions your project.

### Give your community a place to congregate

There are two reasons to give your community a place to congregate.

The first reason is for them. Help people get to know each other. People with common interests will inevitably want a place to talk about it. And when communication is public and accessible, anybody can read past archives to get up to speed and participate.

The second reason is for you. If you don't give people a public place to talk about your project, they will likely contact you directly. In the beginning, it may seem easy enough to respond to private messages "just this once". But over time, especially if your project becomes popular, you will feel exhausted. Resist the temptation to communicate with people about your project in private. Instead, direct them to a designated public channel.

Public communication can be as simple as directing people to open an issue instead of emailing you directly or commenting on your blog. You could also set up a mailing list, or create a Twitter account, Slack, or IRC channel for people to talk about your project. Or try all of the above!

[Kubernetes kops](https://github.com/kubernetes/kops#getting-involved) sets aside office hours every other week to help community members:

> Kops also has time set aside every other week to offer help and guidance to the community. Kops maintainers have agreed to set aside time specifically dedicated to working with newcomers, helping with PRs, and discussing new features.

Notable exceptions to public communication are: 1) security issues and 2) sensitive code of conduct violations. You should always have a way for people to report these issues privately. If you don't want to use your personal email, set up a dedicated email address.

## Growing your community

Communities are extremely powerful. That power can be a blessing or a curse, depending on how you wield it. As your project's community grows, there are ways to help it become a force of construction, not destruction.

### Don't tolerate bad actors

Any popular project will inevitably attract people who harm, rather than help, your community. They may start unnecessary debates, quibble over trivial features, or bully others.

Do your best to adopt a zero-tolerance policy towards these types of people. If left unchecked, negative people will make other people in your community uncomfortable. They may even leave.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/karissa?s=180" class="pquote-avatar" alt="avatar">
  The truth is that having a supportive community is key. I'd never be able to do this work without the help of my colleagues, friendly internet strangers, and chatty IRC channels. (...) Don't settle for less. Don't settle for assholes.
  <p markdown="1" class="pquote-credit">
— @karissa, ["How to Run a FOSS Project"](https://karissa.github.io/post/okf-de)
  </p>
</aside>

Regular debates over trivial aspects of your project distracts others, including you, from focusing on important tasks. New people who arrive to your project may see these conversations and not want to participate.

When you see negative behavior happening on your project, call it out publicly. Explain, in a kind but firm tone, why their behavior is not acceptable. If the problem persists, you may need to [ask them to leave](../code-of-conduct/#enforcing-your-code-of-conduct). Your [code of conduct](../code-of-conduct/) can be a constructive guide for these conversations.

### Meet contributors where they're at

Good documentation only becomes more important as your community grows. Casual contributors, who may not otherwise be familiar with your project, read your documentation to quickly get the context they need.

In your CONTRIBUTING file, explicitly tell new contributors how to get started. You may even want to make a dedicated section for this purpose. [Django](https://github.com/django/django), for example, has a special landing page to welcome new contributors.

![Django new contributors page](/assets/images/building-community/django_new_contributors.png)

In your issue queue, label bugs that are suitable for different types of contributors: for example, [_"first timers only"_](https://medium.com/@kentcdodds/first-timers-only-78281ea47455#.g1k01jy05), _"good first issue"_, or _"documentation"_. [These labels](https://github.com/librariesio/libraries.io/blob/6afea1a3354aef4672d9b3a9fc4cc308d60020c8/app/models/github_issue.rb#L8-L14) make it easy for someone new to your project to quickly scan your issues and get started.

Finally, use your documentation to make people feel welcome at every step of the way.

You will never interact with most people who land on your project. There may be contributions you didn't receive because somebody felt intimidated or didn't know where to get started. Even a few kind words can keep someone from leaving your project in frustration.

For example, here's how [Rubinius](https://github.com/rubinius/rubinius/) starts [its contributing guide](https://github.com/rubinius/rubinius/blob/master/.github/contributing.md):

> We want to start off by saying thank you for using Rubinius. This project is a labor of love, and we appreciate all of the users that catch bugs, make performance improvements, and help with documentation. Every contribution is meaningful, so thank you for participating. That being said, here are a few guidelines that we ask you to follow so we can successfully address your issue.

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
