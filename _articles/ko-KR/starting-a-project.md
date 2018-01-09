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

To understand how it works, imagine your friend is having a potluck, and you bring a cherry pie.

* Everybody tries the pie (_use_)
* The pie is a hit! They ask you for the recipe, which you provide (_view_)
* One friend, Alex, who's a pastry chef, suggests reducing the sugar (_modify_)
* Another friend, Lisa, asks to use it for a dinner next week (_distribute_)

By comparison, a closed source process would be going to a restaurant and ordering a slice of cherry pie. You must pay a fee to eat the pie, and the restaurant probably won't give you their recipe. If you copied their pie exactly and sold it under your own name, the restaurant could take action against you.

### 왜 사람들은 자신의 작업을 오픈소스로 공개합니까?

<aside markdown="1" class="pquote">
  <img src="https://avatars1.githubusercontent.com/u/1500684?v=3&s=460" class="pquote-avatar" alt="avatar">
  One of the most rewarding experiences I get out of using and collaborating on open source comes from the relationships that I build with other developers facing many of the same problems I am.
  <p markdown="1" class="pquote-credit">
— @kentcdodds, ["어떻게 오픈 소스에 빠져야 나에게 멋진가?"](https://medium.com/@kentcdodds/how-getting-into-open-source-has-been-awesome-for-me-8480cd756a80#.pjt9oqp4w)
  </p>
</aside>

[There are many reasons](http://ben.balter.com/2015/11/23/why-open-source/) why a person or organization would want to open source a project. Some examples include:

* **Collaboration:** Open source projects can accept changes from anybody in the world. [Exercism](https://github.com/exercism/), for example, is a programming exercise platform with over 350 contributors.

* **Adoption and remixing:** Open source projects can be used by anyone for nearly any purpose. People can even use it to build other things. [WordPress](https://github.com/WordPress), for example, started as a fork of an existing project called [b2](https://github.com/WordPress/book/blob/master/Content/Part%201/2-b2-cafelog.md).

* **Transparency:** Anyone can inspect an open source project for errors or inconsistencies. Transparency matters to governments like [Bulgaria](https://medium.com/@bozhobg/bulgaria-got-a-law-requiring-open-source-98bf626cf70a) or the [United States](https://sourcecode.cio.gov/), regulated industries like banking or healthcare, and security software like [Let's Encrypt](https://github.com/letsencrypt).

Open source isn't just for software, either. You can open source everything from data sets to books. Check out [GitHub Explore](https://github.com/explore) for ideas on what else you can open source.

### 오픈소스는 "무료"를 의미합니까?

One of open source's biggest draws is that it does not cost money. "Free of charge", however, is a byproduct of open source's overall value.

Because [an open source license requires](https://opensource.org/osd-annotated) that anyone can use, modify, and share your project for nearly any purpose, projects themselves tend to be free of charge. If the project cost money to use, anyone could legally make a copy and use the free version instead.

As a result, most open source projects are free, but "free of charge" is not part of the open source definition. There are ways to charge for open source projects indirectly through dual licensing or limited features, while still complying with the official definition of open source.

## 나 자신의 오픈소스 프로젝트를 시작해야합니까?

The short answer is yes, because no matter the outcome, launching your own project is a great way to learn how open source works.

If you've never open sourced a project before, you might be nervous about what people will say, or whether anyone will notice at all. If this sounds like you, you're not alone!

Open source work is like any other creative activity, whether it's writing or painting. It can feel scary to share your work with the world, but the only way to get better is to practice - even if you don't have an audience.

If you're not yet convinced, take a moment to think about what your goals might be.

### 목표 설정하기

Goals can help you figure out what to work on, what to say no to, and where you need help from others. Start by asking yourself,  _why am I open sourcing this project?_

There is no one right answer to this question. You may have multiple goals for a single project, or different projects with different goals.

If your only goal is to show off your work, you may not even want contributions, and even say so in your README. On the other hand, if you do want contributors, you'll invest time into clear documentation and making newcomers feel welcome.

<aside markdown="1" class="pquote">
  <img src="https://avatars2.githubusercontent.com/u/3520168?v=3&s=460" class="pquote-avatar" alt="avatar">
  At some point I created a custom UIAlertView that I was using...and I decided to make it open source. So I modified it to be more dynamic and uploaded it to GitHub. I also wrote my first documentation explaining to other developers how to use it on their projects. Probably nobody ever used it because it was a simple project but I was feeling good about my contribution.
  <p markdown="1" class="pquote-credit">
— @mavris, ["독학 소프트웨어 개발자: 오픈소스가 우리에게 중요한 이유"](https://medium.com/rocknnull/self-taught-software-engineers-why-open-source-is-important-to-us-fe2a3473a576#.zhwo5krlq)
  </p>
</aside>

As your project grows, your community may need more than just code from you. Responding to issues, reviewing code, and evangelizing your project are all important tasks in an open source project.

While the amount of time you spend on non-coding tasks will depend on the size and scope of your project, you should be prepared as a maintainer to address them yourself or find someone to help you.

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

If your goal is to learn how to collaborate with others or understand how open source works, consider contributing to an existing project. Start with a project that you already use and love. Contributing to a project can be as simple as fixing typos or updating documentation.

If you're not sure how to get started as a contributor, check out our [How to Contribute to Open Source guide](../how-to-contribute/).

## 나만의 오픈소스 프로젝트 시작하기

There is no perfect time to open source your work. You can open source an idea, a work in progress, or after years of being closed source.

Generally speaking, you should open source your project when you feel comfortable having others view, and give feedback on, your work.

No matter which stage you decide to open source your project, every project should include the following documentation:

* [Open source license](https://help.github.com/articles/open-source-licensing/#where-does-the-license-live-on-my-repository)
* [README](https://help.github.com/articles/create-a-repo/#commit-your-first-change)
* [Contributing guidelines](https://help.github.com/articles/setting-guidelines-for-repository-contributors/)
* [Code of conduct](../code-of-conduct/)

As a maintainer, these components will help you communicate expectations, manage contributions, and protect everyone's legal rights (including your own). They significantly increase your chances of having a positive experience.

If your project is on GitHub, putting these files in your root directory with the recommended filenames will help GitHub recognize and automatically surface them to your readers.

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