---
lang: ja
title: オープンソースの法的側面
description: オープンソースについてあなたが不思議に思ったことのすべてと、思いもしなかったいくつかのこと。
class: legal
order: 10
image: /assets/images/cards/legal.png
related:
  - contribute
  - leadership
---

## オープンソースの法的意味を理解しよう

あなたの創造的な仕事を世界に共有することは、とても興奮することであり報われる経験になり得ます。しかし、それは懸念必要があることを知らなかった多くの法的な事柄が必要になるということでもあるのです。ありがたいことに、あなたはゼロから始める必要はありません。あなたが必要な法的知識をここにまとめました。（読み進める前に、私達の[免責事項](/notices/)をお読みください。）

## なぜオープンソースの法的な側面を気にするんですか？

聞いてくれて嬉しいです！何か作品（文書、グラフィックス、コードなど）を創作するときには、その作品はデフォルトで排他的な著作権によって守られます。つまり、あなたは作品の作者として、他の人があなたの作品についてやって良いことについて意見があるということを法律は想定しています。

この事は、一般的にはあなたの作品を使ったり、コピーしたり、配布したり、修正することは、取り下げや捜査、訴訟のリスクが発生することを意味します。

しかし、オープンソースでは他の人が使って、修正して、それを共有することを推奨しており、通常とは異なる状況です。しかし、法的にはデフォルトで排他的な著作権で守られており、他の人に許可する事項を明確にライセンスで宣言する必要があります。

もしオープンソースライセンスを適用しないと、プロジェクトにコントリビュートする全員が、彼らの作業についての排他的な著作権を持つことになります。つまり、彼らのコントリビュートに関しては他の誰もそれを使ったり、コピーしたり、配布したり、変更することができません。そして、あなたもそれに含まれます。

最後に、あなたのプロジェクトの依存関係の中には、あなたが気付いていないような要求をするライセンスのものがあるかもしれません。プロジェクトのコミュニティや雇用主の方針によって、あなたのプロジェクトで特定のオープンソースライセンスを使うよう要求されることもあるかもしれません。これらの状況については、後述します。

## パブリックなGitHubプロジェクトはオープンソースですか？

GitHub上で[新しいプロジェクトを作る](https://help.github.com/articles/creating-a-new-repository/)際、リポジトリをパブリックにするかプライベートにするか、2つの選択肢があります。
 
![リポジトリの作成](/assets/images/legal/repo-create-name.png)

**GitHub上のプロジェクトをおパブリックにするということと、プロジェクトにライセンスを設定することは同じではありません。** パブリックプロジェクトは[GitHubのTerms of Service](https://help.github.com/articles/github-terms-of-service/#f-copyright-and-content-ownership)によって保護されます。これによって、他の人があなたのプロジェクトを見たりフォークすることを許可します。しかし、それ以外の点については許可していません。

もし、他に人に対してプロジェクトの利用、配布、変更、コントリビュートをしてもらいたいと思うのであれば、オープンソースライセンスをプロジェクトに含める必要があります。たとえあなたのプロジェクトがパブリックだったとしても、もしあなたがプロジェクトのソースコードをほか脳pロジェクトで使って良いと明記しない限りは、他の人はそのプロジェクトのコードのどの部分も合法的に使うことができません。

## 私のプロジェクトを守るのに必要な概要だけを教えてください。

あなたはラッキーです。なぜなら、今日ではオープンソースライセンスは標準化されていて、簡単に使うことができます。既存のライセンスを直接プロジェクトにコピーペーストすることが可能です。

[MIT](https://choosealicense.com/licenses/mit/)や[Apache 2.0](https://choosealicense.com/licenses/apache-2.0/)、[GPLv3](https://choosealicense.com/licenses/gpl-3.0/) は最も有名なオープンソースライセンスです。しかし、他の選択肢もあります。[choosealicense.com](https://choosealicense.com/)では、そういったライセンスの全文と使い方の手順を確認することができます。

GitHubで新しいプロジェクトを作るときには、[ライセンスを追加するよう聞かれます](https://help.github.com/articles/open-source-licensing/)。

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/benbalter?s=180" class="pquote-avatar" alt="avatar">
  標準化されたライセンスは、ソフトウェアに対して他の人は何ができて何ができないのかを正確に把握していない人にとっては、代理人として機能します。どうしても必要な場合を除いて、カスタムしたり、修正したり、標準的でない条項は使わないようにしましょう。そういったものは、政府機関のコードを下流で使う際の障壁となります。
  <p markdown="1" class="pquote-credit">
— @benbalter, ["Everything a government attorney needs to know about open source software&nbsp;licensing"](https://ben.balter.com/2014/10/08/open-source-licensing-for-government-attorneys/)
  </p>
</aside>

## 私のプロジェクトに適切なオープンソースライセンスはどれでしょう？

もし白紙からプロジェクトを始めるのであれば、[MITライセンス](https://choosealicense.com/licenses/mit/)を使えば失敗することはないでしょう。短くて、理解しやすく、あなたの著作権表示を含むライセンスのコピーを維持し続ける限りは誰が何をやっても良いというライセンスです。必要であれば、別のライセンスを使ってプロジェクトをリリースすることもできます。

それ以外のケースでは、どれが適切なオープンソースライセンスかは目的によって異なります。

あなたのプロジェクトには **依存関係** があるはずです（もしくは今後必要になるでしょう）。例えば、オープンソースでNode.jsのプロジェクトに取り掛かっているのであれば、Node Package Manager (npm) を使ってライブラリを使っていることでしょう。あなたのプロジェクトで使っているこれらのライブラリはそれぞれのオープンソースライセンスを持っています。これらのライセンスが「寛容」（ライブラリを利用するプロジェクトのライセンスに条件をつけることなく、誰でも利用、修正、共有が可能）であれば、どういったライセンスのものでも使うことができます。よく使われる寛容なライセンスには、MIT、Apache 2.0、ISC、BSDといったものがあります。

その一方で、もし依存するライブラリの中に「強いコピーレフト」（寛容なライセンス同様、誰でも利用してよいが、その条件としてライブラリを利用するプロジェクトも同じライセンスである必要がある）の場合、あなたのプロジェクトでも同じライセンスを使う必要が出るでしょう。よく使われる強いコピーレフトのライセンスには、GPLv2、GPLv3、AGPLv3といったものがあります。

また、 **コミュニティ** にあなたのプロジェクトを使ってもらったり、コントリビュートしてもらいたいとも思うでしょう:

* **他のプロジェクトから依存関係として使われるのを望みますか？** おそらく、関連するコミュニティで最も多く使われているライセンスを使うのが一番でしょう。例えば、 [MIT](https://choosealicense.com/licenses/mit/)は[npmライブラリ](https://libraries.io/search?platforms=NPM)で最もよく使われています。
* **大企業に使ってもらいたいと思っていますか？** 大企業は全てのコントリビュータから特許ライセンスを望む傾向があります。この場合、[Apache 2.0](https://choosealicense.com/licenses/apache-2.0/)があなた（と大企業も）をカバーします。
* **クローズドなソフトウェアではコントリビュートを使ってほしくないと思っているコントリビュータにもアピールしたいですか？** [GPLv3](https://choosealicense.com/licenses/gpl-3.0/)か（もしクローズドなサービスにも使われたくないと思っているのであれば）[AGPLv3](https://choosealicense.com/licenses/agpl-3.0/)が適しています。

あなたの勤める **企業** が、オープンソースプロジェクトには特定のライセンスを使うよう要求するかもしれません。例えば、企業のクローズドな製品であなたのプロジェクトを使えるよう、寛容なライセンスを要求するかもしれません。もしくは、あなたの企業だけがあなたのプロジェクトをクローズドなソフトウェアで使えるように、強いコピーレフトを追加で貢献者同意（後述します）を要求するかもしれません。もしくは、あなたの企業は社内標準や社会的責任、透明性などに関連したニーズを持っているかもしれません。こういったものは独自のライセンス戦略が必要となってきます。[企業の法務部門](#what-does-my-companys-legal-team-need-to-know)に相談してみましょう。

GitHub上で新しいプロジェクトを作ると、ライセンスの選択が表示されます。上記のライセンスのうちのどれかを指定することで、あなたのGitHubプロジェクトはオープンソースとなります。他の選択肢を確認したい場合は、あなたのプロジェクトに適切なライセンスを見つけるために[choosealicense.com](https://choosealicense.com)を確認してみましょう。このサイトはあなたのプロジェクトが[ソフトウェアではない場合](https://choosealicense.com/non-software/)も使うことができます。

## プロジェクトのライセンスを変更したいときはどうしたら良いでしょう？

ほとんどのプロジェクトはライセンスを変更する必要は発生しません。しかし、時々状況が変わることがあります。

例えば、プロジェクトが成長するに従って依存関係やユーザーが増えたり、あなたの企業が戦略を変更したり、こういった理由によって異なるライセンスが必要になることがあります。それに加えて、もしプロジェクトを開始する際にライセンスを指定していなかったら、ライセンスをあとから追加するということはライセンスを変更することと実質上同じになります。ライセンスを追加したり変更する際に考えるべき重要なポイントは3つあります：

**事態は複雑。** ライセンスの互換性や遵守を検討したり、誰がコピーライトを保持しているのかを調査することはすぐに複雑で混乱するでしょう。新しいリリースやコントリビュートについてのみ、新しいが互換性のあるライセンスに切り替えるのは、過去のコントリビュートの全てのライセンスを切り替えることとは事情が異なります。ライセンスを変更したいと思い始めた時に、法務部門を巻き込みましょう。たとえプロジェクトのコピーライトの保有者からライセンスの変更について許可を得ている（もしくは得ることが可能）としても、プロジェクトの他のユーザーやコントリビュータへの影響をきちんと考慮しましょう。ライセンスの変更は、あなたのプロジェクトにおける「運営上の大きな出来事」だと考えるようにしましょう。そうすることで、プロジェクトの利害関係者と明確なコミュニケーションと相談を行い、物事が円滑に進むようになります。プロジェクト発足時に適切なライセンスを選んで使うべきなのはこういった事情のためです！

**プロジェクトの既存のライセンス。** もし既存のライセンスとこれから変更しようとしているライセンスで互換性があるのであれば、単に新しいライセンスを使い始めれば大丈夫です。なぜなら、もしライセンスAがライセンスBと互換性がある場合、ライセンスBの規約に従っているのであればライセンスAの規約も遵守していることになるからです（ただし、必ずしも逆は成り立ちません）。もし現在使っているのが寛容なライセンス（例えばMIT）であれば、MITライセンスと関連するコピーライト表示を保ちつづける（つまり、MITライセンスの最低限の条件は守り続ける）かぎりは、より条件の多いライセンスに変更することができます。しかし、現在使っているライセンスが寛容でなく（例えばコピーレフトやライセンスがない場合）、あなたが単一のコピーライト保持者ではない場合、単純にライセンスをMITに変更することはできません。基本的に寛容なライセンスでは、プロジェクトのコピーライト保有者は前もってライセンスの変更を許可しているということになります。

**プロジェクトの既存のコピーライト保有者。** もしあなたがプロジェクトの単独のコントリビュータなのであれば、あなたかあなたの会社がプロジェクトの単独のコピーライト保有者です。あなたやあなたの企業が望むどんなライセンスの追加や変更をすることができます。そうでない場合は、ライセンスの変更にあたって同意を取る必要のある他のコピーライト保有者がいるかもしれません。それは誰でしょうか？あなたのプロジェクトにコミットをしたことがある人は第一の候補になります。しかし、場合によってはコピーライトを保有しているのは彼らの雇用主かもしれません。他にも、ほんの少しのコントリビュートをした人々について考慮が必要かもしれません。一定量以下の変更しかないコントリビュートに対してはコピーライトを保有できないという明確なルールがない場合もあるからです。比較的小さくて歴史の浅いプロジェクトであれば、イシューやプルリクエストで全ての既存のコントリビュータからライセンスの変更についての同意を取ることは実現可能かもしれません。巨大で歴史の長いプロジェクトであれば多くのコントリビュータ、場合によってはその相続人を探し出す必要があります。MozillaはFirefoxやThunderbirdと関連するソフトウェアのライセンスを変更するのに多くの時間（2001年ー2006年）を費やしました。

Alternatively, you can have contributors agree in advance (via an additional contributor agreement -- see below) to certain license changes under certain conditions, beyond those allowed by your existing open source license. This shifts the complexity of changing licenses a bit. You'll need more help from your lawyers up front, and you'll still want to clearly communicate with your project's stakeholders when executing a license change.

## Does my project need an additional contributor agreement?

Probably not. For the vast majority of open source projects, an open source license implicitly serves as both the inbound (from contributors) and outbound (to other contributors and users) license. If your project is on GitHub, the GitHub Terms of Service make "inbound=outbound" the [explicit default](https://help.github.com/articles/github-terms-of-service/#6-contributions-under-repository-license).

An additional contributor agreement -- often called a Contributor License Agreement (CLA) -- can create administrative work for project maintainers. How much work an agreement adds depends on the project and implementation. A simple agreement might require that contributors confirm, with a click, that they have the rights necessary to contribute under the project open source license. A more complicated agreement might require legal review and sign-off from contributors' employers.

Also, by adding "paperwork" that some believe is unnecessary, hard to understand, or unfair (when the agreement recipient gets more rights than contributors or the public do via the project's open source license), an additional contributor agreement may be perceived as unfriendly to the project's community.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/bcantrill?s=180" class="pquote-avatar" alt="avatar">
    We have eliminated the CLA for Node.js. Doing this lowers the barrier to entry for Node.js contributors thereby broadening the contributor base.
  <p markdown="1" class="pquote-credit">
— @bcantrill, ["Broadening Node.js Contributions"](https://www.joyent.com/blog/broadening-node-js-contributions)
  </p>
</aside>

Some situations where you may want to consider an additional contributor agreement for your project include:

* Your lawyers want all contributors to expressly accept (_sign_, online or offline) contribution terms, perhaps because they feel the open source license itself is not enough (even though it is!). If this is the only concern, a contributor agreement that affirms the project's open source license should be enough. The [jQuery Individual Contributor License Agreement](https://contribute.jquery.org/CLA/) is a good example of a lightweight additional contributor agreement. For some projects, a [Developer Certificate of Origin](https://github.com/probot/dco) can be an alternative.
* Your project uses an open source license that does not include an express patent grant (such as MIT), and you need a patent grant from all contributors, some of whom may work for companies with large patent portfolios that could be used to target you or the project's other contributors and users. The [Apache Individual Contributor License Agreement](https://www.apache.org/licenses/icla.pdf) is a commonly used additional contributor agreement that has a patent grant mirroring the one found in the Apache License 2.0.
* Your project is under a copyleft license, but you also need to distribute a proprietary version of the project. You'll need every contributor to assign copyright to you or grant you (but not the public) a permissive license. The [MongoDB Contributor Agreement](https://www.mongodb.com/legal/contributor-agreement) is an example this type of agreement.
* You think your project might need to change licenses over its lifetime and want contributors to agree in advance to such changes.

If you do need to use an additional contributor agreement with your project, consider using an integration such as [CLA assistant](https://github.com/cla-assistant/cla-assistant) to minimize contributor distraction.

## What does my company's legal team need to know?

If you're releasing an open source project as a company employee, first, your legal team should know that you're open sourcing a project.

For better or worse, consider letting them know even if it's a personal project. You probably have an "employee IP agreement" with your company that gives them some control of your projects, especially if they are at all related to the company's business or you use any company resources to develop the project. Your company _should_ easily give you permission, and maybe already has through an employee-friendly IP agreement or a company policy. If not, you can negotiate (for example, explain that your project serves the company's professional learning and development objectives for you), or avoid working on your project until you find a better company.

**If you're open sourcing a project for your company,** then definitely let them know. Your legal team probably already has policies for what open source license (and maybe additional contributor agreement) to use based on the company's business requirements and expertise around ensuring your project complies with the licenses of its dependencies. If not, you and they are in luck! Your legal team should be eager to work with you to figure this stuff out. Some things to think about:

* **Third party material:** Does your project have dependencies created by others or otherwise include or use others' code? If these are open source, you'll need to comply with the materials' open source licenses. That starts with choosing a license that works with the third party open source licenses (see above). If your project modifies or distributes third party open source material, then your legal team will also want to know that you're meeting other conditions of the third party open source licenses such as retaining copyright notices. If your project uses others' code that doesn't have an open source license, you'll probably have to ask the third party maintainers to [add an open source license](https://choosealicense.com/no-license/#for-users), and if you can't get one, stop using their code in your project.

* **Trade secrets:** Consider whether there is anything in the project that the company does not want to make available to the general public. If so, you could open source the rest of your project, after extracting the material you want to keep private.

* **Patents:** Is your company applying for a patent of which open sourcing your project would constitute [public disclosure](https://en.wikipedia.org/wiki/Public_disclosure)? Sadly, you might be asked to wait (or maybe the company will reconsider the wisdom of the application). If you're expecting contributions to your project from employees of companies with large patent portfolios, your legal team may want you to use a license with an express patent grant from contributors (such as Apache 2.0 or GPLv3), or an additional contributor agreement (see above).

* **Trademarks:** Double check that your project's name [does not conflict with any existing trademarks](../starting-a-project/#名前の衝突を避ける). If you use your own company trademarks in the project, check that it does not cause any conflicts. [FOSSmarks](http://fossmarks.org/) is a practical guide to understanding trademarks in the context of free and open source projects.

* **Privacy:** Does your project collect data on users? "Phone home" to company servers? Your legal team can help you comply with company policies and external regulations.

If you're releasing your company's first open source project, the above is more than enough to get through (but don't worry, most projects shouldn't raise any major concerns).

Longer term, your legal team can do more to help the company get more from its involvement in open source, and stay safe:

* **Employee contribution policies:** Consider developing a corporate policy that specifies how your employees contribute to open source projects. A clear policy will reduce confusion among your employees and help them contribute to open source projects in the company's best interest, whether as part of their jobs or in their free time. A good example is Rackspace's [Model IP and Open Source Contribution Policy](https://processmechanics.com/2015/07/22/a-model-ip-and-open-source-contribution-policy/).

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/vanl?s=180" class="pquote-avatar" alt="avatar">
  Letting out the IP associated with a patch builds the employee's knowledge base and reputation. It shows that the company is invested in the development of that employee and creates a sense of empowerment and autonomy. All of these benefits also lead to higher morale and better employee retention.
  <p markdown="1" class="pquote-credit">
— @vanl, ["A Model IP and Open Source Contribution Policy"](https://processmechanics.com/2015/07/22/a-model-ip-and-open-source-contribution-policy/)
  </p>
</aside>

* **What to release:** [(Almost) everything?](http://tom.preston-werner.com/2011/11/22/open-source-everything.html) If your legal team understands and is invested in your company's open source strategy, they'll be best able to help rather than hinder your efforts.
* **Compliance:** Even if your company doesn't release any open source projects, it uses others' open source software. [Awareness and process](https://www.linuxfoundation.org/blog/2015/06/why-companies-that-use-open-source-need-a-compliance-program/) can prevent headaches, product delays, and lawsuits.

<aside markdown="1" class="pquote">
  Organizations must have a license and compliance strategy in place that fits both \["permissive" and "copyleft"\] categories. This begins with keeping a record of the licensing terms that apply to the open source software you’re using — including subcomponents and dependencies.
  <p markdown="1" class="pquote-credit">
— Heather Meeker, ["Open Source Software: Compliance Basics And Best Practices"](https://techcrunch.com/2012/12/14/open-source-software-compliance-basics-and-best-practices/)
  </p>
</aside>

* **Patents:** Your company may wish to join the [Open Invention Network](https://www.openinventionnetwork.com/), a shared defensive patent pool to protect members' use of major open source projects, or explore other [alternative patent licensing](https://www.eff.org/document/hacking-patent-system-2016).
* **Governance:** Especially if and when it makes sense to move a project to a [legal entity outside of the company](../leadership-and-governance/#プロジェクトを運営するのに法人は必要ですか).
