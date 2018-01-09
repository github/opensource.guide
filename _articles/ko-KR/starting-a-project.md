---
locale: ko-KR
title: 오픈소스 프로젝트 시작하기
description: 오픈소스의 세계에 대해 자세히 알아보고 자신만의 프로젝트를 시작할 준비를 하십시오.
class: beginners
toc:
  the-what-and-why-of-open-source: "오픈소스의 목적 및 이유"
  should-i-launch-my-own-open-source-project: "나 자신의 오픈소스 프로젝트를 시작해야합니까?"
  launching-your-own-open-source-project: "나만의 오픈소스 프로젝트 시작하기"
  naming-and-branding-your-project: "프로젝트 네이밍 및 브랜딩"
  your-pre-launch-checklist: "출시 전 체크리스트"
order: 2
image: /assets/images/cards/beginner.png
related:
  - finding
  - building
---

## 오픈소스의 "목적" 및 "이유"

따라서 오픈소스를 시작하는 것에 대해 생각하고 있습니까? 축하합니다! 세상은 당신의 기여를 높이 평가합니다. 오픈소스란 무엇이며, 왜 사람들이 그렇게하는지 이야기해 봅시다.

### "오픈소스"란 무엇을 의미합니까?

프로젝트가 오픈소스일 때,, that means **anybody can view, use, modify, and distribute your project for any purpose.** These permissions are enforced through [an open source license](https://opensource.org/licenses).

오픈소스는 채택의 장벽을 낮추어 아이디어가 빠르게 확산될 수 있기 때문에 강력합니다.

그것이 어떻게 작동하는지 이해하려면, 친구가 potluck을 가지고 있다고 상상해보고, 체리 파이를 가지고 오십시오.

* 모두가 파이를 먹습니다 (_사용_)
* 파이가 히트를 쳤습니다! 그들은 당신에게 파이 제조법을 묻습니다 (_보기_)
* 한 친구인, 제과점 주방장 Alex는 설탕을 줄이는 것이 좋다고 조언합니다 (_수정_)
* 다른 친구인, Lisa는 다음 주 저녁 식사에 그것을 사용할 것을 요청합니다 (_배포_)

비교해 보면, 독점 소스 과정은 식당에 가서 체리 파이 한 조각을 주문할 것입니다. 당신은 파이를 먹기 위해 수수료를 지불해야하며, 레스토랑은 아마도 당신에게 요리 방법을 알려주지 않을 것입니다. 만약 파이를 정확하게 복사하여 같은 이름으로 팔면, 레스토랑이 당신을 상대로 고소할 수도 있습니다.

### 왜 사람들은 자신의 작업을 오픈소스로 공개합니까?

<aside markdown="1" class="pquote">
  <img src="https://avatars1.githubusercontent.com/u/1500684?v=3&s=460" class="pquote-avatar" alt="avatar">
  One of the most rewarding experiences I get out of using and collaborating on open source comes from the relationships that I build with other developers facing many of the same problems I am.
  <p markdown="1" class="pquote-credit">
— @kentcdodds, ["어떻게 오픈 소스에 빠져야 나에게 멋진가?"](https://medium.com/@kentcdodds/how-getting-into-open-source-has-been-awesome-for-me-8480cd756a80#.pjt9oqp4w)
  </p>
</aside>

사람이나 조직이 프로젝트 소스를 공개하려는 데는 [여러 가지 이유](http://ben.balter.com/2015/11/23/why-open-source/)가 있습니다. 몇 가지 예는 다음과 같습니다:

* **협업:** 오픈소스 프로젝트는 전 세계 누구나 변화를 수용 할 수 있습니다. [Exercism](https://github.com/exercism/)를 예시로 들면, 350명이 넘는 기여자가 참여하는 프로그래밍 연습 플랫폼입니다.

* **채택과 재가공:** 오픈소스 프로젝트는 거의 모든 목적으로 누구나 사용할 수 있습니다. 사람들은 그것을 사용하여 다른 것을 만들 수도 있습니다. [WordPress](https://github.com/WordPress)를 예시로 들면, [b2](https://github.com/WordPress/book/blob/master/Content/Part%201/2-b2-cafelog.md)라는 기존 프로젝트의 포크로 시작되었습니다.

* **투명도:** 누구나 오픈소스 프로젝트에서 오류나 불일치를 검사 할 수 있습니다. Transparency matters to governments like [Bulgaria](https://medium.com/@bozhobg/bulgaria-got-a-law-requiring-open-source-98bf626cf70a) or the [United States](https://sourcecode.cio.gov/), regulated industries like banking or healthcare, and security software like [Let's Encrypt](https://github.com/letsencrypt).

오픈소스는 소프트웨어만을 위한 것이 아닙니다. 데이터 세트에서부터 서적에 이르기까지 모두 오픈소스할 수 있습니다. [GitHub Explore](https://github.com/explore)에서 다른 오픈소스 아이디어를 확인하십시오.

### 오픈소스는 "무료"를 의미합니까?

오픈소스의 가장 큰 매력 중 하나는 비용이 들지 않는다는 것입니다. 그러나 "무료 비용"은 오픈소스의 전반적인 가치의 부산물입니다.

[오픈소스 라이선스](https://opensource.org/osd-annotated)는 누구나 거의 모든 목적으로 프로젝트를 사용, 수정 및 공유 할 수 있어야 하므로 프로젝트 자체는 무료입니다. 만약 프로젝트에 사용할 비용이 들었다면, 누구나 합법적으로 복사본을 만들어 무료 버전을 사용할 수 있습니다.

결과적으로 대부분의 오픈소스 프로젝트는 무료이지만, "무료"는 오픈소스 정의의 일부가 아닙니다. 오픈소스의 공식적인 정의를 계속 준수하면서 이중 라이선스 또는 제한된 기능을 통해 간접적으로 오픈소스 프로젝트를 청구할 수있는 방법이 있습니다.

## 나 자신의 오픈소스 프로젝트를 시작해야합니까?

짧은 결과는 예입니다. 결과에 관계없이, 자신의 프로젝트를 시작하는 것이 오픈소스의 작동 방식을 배우기위한 훌륭한 방법이기 때문입니다.

이전에 프로젝트의 소스를 공개 한 적이 없다면, 다른 사람이 의견을 말하지 않거나 전혀 눈치채지 못할거라고 불안해 할 수 있습니다. 이게 당신의 이야기처럼 들린다면, 당신은 혼자가 아닙니다!

오픈소스 작품은 글쓰기나 페인팅과 비슷한 다른 창의적인 활동과 같습니다. 전세계에 당신의 작품을 공유하는 것이 무섭다는 생각이 들지만, 청중이 없는 경우에도 연습하는 것이 유일한 방법입니다.

아직 확신하지 못했다면, 잠시 시간을 내어 목표가 무엇인지 생각해보십시오.

### 목표 설정하기

목표는 어떤 일을 해야할 건지, 어떤 말을 하지 않을건지, 다른 사람들에게 도움이 필요한 곳을 파악하는 것에 도움이 될 수 있습니다. Start by asking yourself,  _why am I open sourcing this project?_

이 질문에 대한 정답은 아무도 없습니다. 한 프로젝트에 대해 여러 가지 목표를 가질 수도 있고, 다른 목표를 가진 다른 프로젝트를 가질 수도 있습니다.

If your only goal is to show off your work, you may not even want contributions, and even say so in your README. On the other hand, if you do want contributors, you'll invest time into clear documentation and making newcomers feel welcome.

<aside markdown="1" class="pquote">
  <img src="https://avatars2.githubusercontent.com/u/3520168?v=3&s=460" class="pquote-avatar" alt="avatar">
  At some point I created a custom UIAlertView that I was using...and I decided to make it open source. So I modified it to be more dynamic and uploaded it to GitHub. I also wrote my first documentation explaining to other developers how to use it on their projects. Probably nobody ever used it because it was a simple project but I was feeling good about my contribution.
  <p markdown="1" class="pquote-credit">
— @mavris, ["독학 소프트웨어 개발자: 오픈소스가 우리에게 중요한 이유"](https://medium.com/rocknnull/self-taught-software-engineers-why-open-source-is-important-to-us-fe2a3473a576#.zhwo5krlq)
  </p>
</aside>

프로젝트가 성장함에 따라 커뮤니티는 단순한 코드 그 이상을 필요로 할 수 있습니다. 이슈에 대응하고, 코드를 검토하고, 프로젝트를 홍보하는 것은 오픈소스 프로젝트에서 중요한 작업입니다.

비코딩 작업에 소요되는 시간은 프로젝트의 크기와 범위에 따라 다르지만, 직접 해결하거나 도움을 줄 담당자를 준비해야합니다.

**If you're part of a company open sourcing a project,** make sure your project has the internal resources it needs to thrive. You'll want to identify who's responsible for maintaining the project after launch, and how you'll share those tasks with your community.

If you need a dedicated budget or staffing for promotion, operations and maintaining the project, start those conversations early.

<aside markdown="1" class="pquote">
  <img src="https://avatars2.githubusercontent.com/u/1857993?v=3&s=460" class="pquote-avatar" alt="avatar">
  As you begin to open source the project, it's important to make sure that your management processes take into consideration the contributions and abilities of the community around your project. Don't be afraid to involve contributors who are not employed in your business in key aspects of the project — especially if they are frequent contributors.
  <p markdown="1" class="pquote-credit">
— @captainsafia, ["그래서 당신은 프로젝트를 오픈소스화하고 싶습니까?"](https://writing.safia.rocks/2016/12/06/so-you-wanna-open-source-a-project-eh/)
  </p>
</aside>

### 다른 프로젝트에 기여하기

다른 사람들과 협력하거나 오픈소스가 어떻게 작동하는지 이해하는 방법을 배우는 것이 목표라면, 기존 프로젝트에 기여하는 것을 고려하십시오. 이미 사용하고 사랑하는 프로젝트부터 시작하십시오. 프로젝트에 기여하는 것은 오타를 수정하거나 문서를 업데이트하는 것만큼 간단합니다.

If you're not sure how to get started as a contributor, check out our [How to Contribute to Open Source guide](../how-to-contribute/).

## 나만의 오픈소스 프로젝트 시작하기

당신의 일을 오픈 소스화 할 완벽한 시간은 없습니다. 아이디어, 진행중인 작업 또는 독점 소스가 된 이후의 수년이 지난 뒤에도 오픈소스화 할 수 있습니다.

일반적으로 말하면, 다른 사람들이 보기에 편하게 느끼고 프로젝트에 대한 피드백을 주려면 프로젝트를 오픈소스화 해야합니다.

프로젝트를 오픈소스로 결정한 단계에 관계없이, 모든 프로젝트에는 다음과 같은 문서가 포함되어야합니다:

* [오픈소스 라이선스](https://help.github.com/articles/open-source-licensing/#where-does-the-license-live-on-my-repository)
* [README](https://help.github.com/articles/create-a-repo/#commit-your-first-change)
* [기여 가이드라인](https://help.github.com/articles/setting-guidelines-for-repository-contributors/)
* [Code of conduct](../code-of-conduct/)

메인테이너는 이러한 구성 요소를 사용하여 기대를 전달하고, 기여를 관리하고, (자신의 권리를 포함한) 모든 사람의 법적 권리를 보호 할 수 있습니다. 그들은 긍정적인 경험을 가질 기회를 상당히 증가시킵니다.

프로젝트가 GitHub에 있는 경우, 권장 파일 이름을 사용하여 이러한 파일을 루트 디렉토리에 저장하면 GitHub에서 해당 파일을 인식하여 자동으로 사용자에게 보여줍니다.

### 라이선스 선택하기

An open source license guarantees that others can use, copy, modify, and contribute back to your project without repercussions. It also protects you from sticky legal situations. **You must include a license when you launch an open source project.**

Legal work is no fun. The good news is that you can copy and paste an existing license into your repository. It will only take a minute to protect your hard work.

[MIT](https://choosealicense.com/licenses/mit/), [Apache 2.0](https://choosealicense.com/licenses/apache-2.0/), and [GPLv3](https://choosealicense.com/licenses/gpl-3.0/) are the most popular open source licenses, but [there are other options](https://choosealicense.com) to choose from.

When you create a new project on GitHub, you are given the option to select a license. Including an open source license will make your GitHub project open source.

![Pick a license](/assets/images/starting-a-project/repository-license-picker.png)

If you have other questions or concerns around the legal aspects of managing an open source project, [we've got you covered](../legal/).

### README 쓰기

READMEs do more than explain how to use your project. They also explain why your project matters, and what your users can do with it.

In your README, try to answer the following questions:

* What does this project do?
* Why is this project useful?
* How do I get started?
* Where can I get more help, if I need it?

You can use your README to answer other questions, like how you handle contributions, what the goals of the project are, and information about licenses and attribution. If you don't want to accept contributions, or your project is not yet ready for production, write this information down.

<aside markdown="1" class="pquote">
  <img src="https://avatars0.githubusercontent.com/u/168572?v=3&s=460" class="pquote-avatar" alt="avatar">
  Better documentation means more users, less support requests, and more contributors. (...) Remember that your readers aren't you. There are people who might come to a project who have completely different experiences.
  <p markdown="1" class="pquote-credit">
— @limedaring, ["Writing So Your Words Are Read (video)"](https://www.youtube.com/watch?v=8LiV759Bje0&list=PLmV2D6sIiX3U03qc-FPXgLFGFkccCEtfv&index=10)
  </p>
</aside>

Sometimes, people avoid writing a README because they feel like the project is unfinished, or they don't want contributions. These are all very good reasons to write one.

For more inspiration, try using @18F's ["Making READMEs Readable"](https://pages.18f.gov/open-source-guide/making-readmes-readable/) or @PurpleBooth's [README template](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2) to write a complete README.

When you include a README file in the root directory, GitHub will automatically display it on the repository homepage.

### 기여 가이드라인 쓰기

A CONTRIBUTING file tells your audience how to participate in your project. For example, you might include information on:

* How to file a bug report (try using [issue and pull request templates](https://github.com/blog/2111-issue-and-pull-request-templates))
* How to suggest a new feature
* How to set up your environment and run tests

In addition to technical details, a CONTRIBUTING file is an opportunity to communicate your expectations for contributions, such as:

* The types of contributions you're looking for
* Your roadmap or vision for the project
* How contributors should (or should not) get in touch with you

Using a warm, friendly tone and offering specific suggestions for contributions (such as writing documentation, or making a website) can go a long way in making newcomers feel welcomed and excited to participate.

For example, [Active Admin](https://github.com/activeadmin/activeadmin/) starts [its contributing guide](https://github.com/activeadmin/activeadmin/blob/master/CONTRIBUTING.md) with:

> First off, thank you for considering contributing to Active Admin. It's people like you that make Active Admin such a great tool.

In the earliest stages of your project, your CONTRIBUTING file can be simple. You should always explain how to report bugs or file issues, and any technical requirements (like tests) to make a contribution.

Over time, you might add other frequently asked questions to your CONTRIBUTING file. Writing down this information means fewer people will ask you the same questions over and over again.

For more help with writing your CONTRIBUTING file, check out @nayafia's [contributing guide template](https://github.com/nayafia/contributing-template/blob/master/CONTRIBUTING-template.md) or @mozilla's ["How to Build a CONTRIBUTING.md"](http://mozillascience.github.io/working-open-workshop/contributing/).

Link to your CONTRIBUTING file from your README, so more people see it. If you [place the CONTRIBUTING file in your project's repository](https://help.github.com/articles/setting-guidelines-for-repository-contributors/), GitHub will automatically link to your file when a contributor creates an issue or opens a pull request.

![Contributing guidelines](/assets/images/starting-a-project/Contributing-guidelines.jpg)

### 행동강령 세우기

<aside markdown="1" class="pquote">
  <img src="https://avatars3.githubusercontent.com/u/11214?v=3&s=460" class="pquote-avatar" alt="avatar">
  We’ve all had experiences where we faced what was probably abuse either as a maintainer trying to explain why something had to be a certain way, or as a user...asking a simple question. (...) A code of conduct becomes an easily referenced and linkable document that indicates that your team takes constructive discourse very seriously.
  <p markdown="1" class="pquote-credit">
— @mlynch, ["오픈소스를 보다 행복한 곳으로 만들기"](https://medium.com/ionic-and-the-mobile-web/making-open-source-a-happier-place-3b90d254f5f#.v4qhl7t7v)
  </p>
</aside>

Finally, a code of conduct helps set ground rules for behavior for your project's participants. This is especially valuable if you're launching an open source project for a community or company. A code of conduct empowers you to facilitate healthy, constructive community behavior, which will reduce your stress as a maintainer.

For more information, check out our [Code of Conduct guide](../code-of-conduct/).

In addition to communicating _how_ you expect participants to behave, a code of conduct also tends to describe who these expectations apply to, when they apply, and what to do if a violation occurs.

Much like open source licenses, there are also emerging standards for codes of conduct, so you don't have to write your own. The [Contributor Covenant](http://contributor-covenant.org/) is a drop-in code of conduct that is used by [over 40,000 open source projects](http://contributor-covenant.org/adopters/), including Kubernetes, Rails, and Swift. No matter which text you use, you should be prepared to enforce your code of conduct when necessary.

Paste the text directly into a CODE_OF_CONDUCT file in your repository. Keep the file in your project's root directory so it's easy to find, and link to it from your README.

## 프로젝트 네이밍 및 브랜딩

브랜딩은 화려한 로고 또는 재미있는 프로젝트 이름 이상입니다. 그것은 당신의 프로젝트에 대해 어떻게 이야기하고, 당신의 메시지를 가지고 도달했는지에 관한 것입니다.

### 올바른 이름 고르기

Pick a name that is easy to remember and, ideally, gives some idea of what the project does. For example:

* [Sentry](https://github.com/getsentry/sentry) monitors apps for crash reporting
* [Thin](https://github.com/macournoyer/thin) is a fast and simple Ruby web server

If you're building upon an existing project, using their name as a prefix can help clarify what your project does (ex. [node-fetch](https://github.com/bitinn/node-fetch) brings `window.fetch` to Node.js).

Consider clarity above all. Puns are fun, but remember that some jokes might not translate to other cultures or people with different experiences from you. Some of your potential users might be company employees: you don't want to make them uncomfortable when they have to explain your project at work!

### 이름 충돌 방지하기

[Check for open source projects with a similar name](http://ivantomic.com/projects/ospnc/), especially if you share the same language or ecosystem. If your name overlaps with a popular existing project, you might confuse your audience.

If you want a website, Twitter handle, or other properties to represent your project, make sure you can get the names you want. Ideally, [reserve those names now](https://instantdomainsearch.com/) for peace of mind, even if you don't intend to use them just yet.

Make sure that your project's name doesn't infringe upon any trademarks. A company might ask you to take down your project later on, or even take legal action against you. It's just not worth the risk.

You can check the [WIPO Global Brand Database](http://www.wipo.int/branddb/en/) for trademark conflicts. If you're at a company, this is one of the things your [legal team can help you with](../legal/).

Finally, do a quick Google search for your project name. Will people be able to easily find your project? Does something else appear in the search results that you wouldn't want them to see?

### 당신이 쓰는 방법(그리고 코드)은 당신의 브랜드에도 영향을 미칩니다!

Throughout the life of your project, you'll do a lot of writing: READMEs, tutorials, community documents, responding to issues, maybe even newsletters and mailing lists.

Whether it's official documentation or a casual email, your writing style is part of your project's brand. Consider how you might come across to your audience and whether that is the tone you wish to convey.

<aside markdown="1" class="pquote">
  <img src="https://avatars0.githubusercontent.com/u/11321?v=3&s=460" class="pquote-avatar" alt="avatar">
  I tried to be involved with every thread on the mailing list, and showing exemplary behaviour, being nice to people, taking their issues seriously and trying to be helpful overall. After a while, people stuck around not to only ask questions, but to help with the answering as well, and to my complete delight, they mimicked my style.
  <p markdown="1" class="pquote-credit">
— @janl on [CouchDB](https://github.com/apache/couchdb), ["지속 가능한 오픈소스"](http://writing.jan.io/2015/11/20/sustainable-open-source.html)
  </p>
</aside>

Using warm, inclusive language (such as "them", even when referring to the single person) can go a long way in making your project feel welcoming to new contributors. Stick to simple language, as many of your readers may not be native English speakers.

Beyond how you write words, your coding style may also become part of your project's brand. [Angular](https://github.com/johnpapa/angular-styleguide) and [jQuery](http://contribute.jquery.org/style-guide/js/) are two examples of projects with rigorous coding styles and guidelines.

It isn't necessary to write a style guide for your project when you're just starting out, and you may find that you enjoy incorporating different coding styles into your project anyway. But you should anticipate how your writing and coding style might attract or discourage different types of people. The earliest stages of your project are your opportunity to set the precedent you wish to see.

## 출시 전 체크리스트

프로젝트를 오픈소스로 할 준비가 되셨습니까? 다음은 도움이 되는 체크리스트입니다. 모든 체크박스를 확인하시겠습니까? 이제 갈 준비가 되었습니다! ["공개"를 클릭](https://help.github.com/articles/making-a-private-repository-public/)하고 등 뒤에서 몸을 담그십시오.

**문서**

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox1" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox1" class="overflow-hidden d-block text-normal">
    프로젝트에는 오픈소스 라이선스가 있는 LICENSE 파일이 있습니다
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox2" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox2" class="overflow-hidden d-block text-normal">
    프로젝트는 기본적인 문서가 있습니다 (README, CONTRIBUTING, CODE_OF_CONDUCT)
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox3" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox3" class="overflow-hidden d-block text-normal">
    이름은 기억하기 쉽고, 프로젝트가 하는 일에 대한 아이디어를 제공하며, 기존 프로젝트와 충돌하거나 상표를 침해하지 않습니다
  </label>
</div>

<div class="clearfix mb-4">
  <input type="checkbox" id="cbox4" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox4" class="overflow-hidden d-block text-normal">
    이슈 대기열은 항상 최신상태이며,명확하게 정리되고 라벨이 지정된 이슈가 있습니다
  </label>
</div>

**코드**

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox5" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox5" class="overflow-hidden d-block text-normal">
    프로젝트는 일관된 코드 규칙을 사용하고 함수/메소드/변수 이름을 지웁니다
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox6" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox6" class="overflow-hidden d-block text-normal">
    코드는 명확하게 주석 처리되어 있으며, 의도와 엣지 케이스를 문서화합니다
  </label>
</div>

<div class="clearfix mb-4">
  <input type="checkbox" id="cbox7" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox7" class="overflow-hidden d-block text-normal">
    버전관리 기록, 이슈, 혹은 pull requests에 민감한 자료가 없습니다 (예. 비밀번호나 비공개 정보)
  </label>
</div>

**사람**

개인의 경우:

<div class="clearfix mb-4">
  <input type="checkbox" id="cbox8" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox8" class="overflow-hidden d-block text-normal">
  법무 부서와 상담하고 (직원이 어딘가에 있다면)회사의 IP 및 오픈소스 정책을 이해했습니다
  </label>
</div>

만약 회사나 조직일 경우:

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox9" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox9" class="overflow-hidden d-block text-normal">
    법무 부서에 얘기했습니다
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox10" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox10" class="overflow-hidden d-block text-normal">
    프로젝트 발표 및 홍보를 위한 마케팅 계획이 있습니다
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox11" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox11" class="overflow-hidden d-block text-normal">
    누군가는 커뮤니티 (이슈에 응답하고 pull requests을 검토 및 병합)상호 작용을 관리하는 데 전념합니다 
  </label>
</div>

<div class="clearfix mb-4">
  <input type="checkbox" id="cbox12" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox12" class="overflow-hidden d-block text-normal">
    프로젝트에 대한 관리 권한이 있는 사람이 두명이상 있습니다
  </label>
</div>

## 훌륭합니다!

첫번째 프로젝트를 오픈소스화한 것을 축하합니다. 결과에 관계없이 공개적으로 일하는 것은 공동체에 대한 선물입니다. 모든 커밋, 설명 및 pull request을 풀어 쓰면, 자신과 다른 사람들이 배우고 성장할 수 있는 기회가 만들어집니다.