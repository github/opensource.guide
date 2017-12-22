---
locale: ko-KR
title: 리더십과 정치
description: 오픈소스 프로젝트가 성장하면서 공식적인 의사 결정 규칙의 혜택을 볼 수 있습니다.
class: leadership
toc:
  what-are-examples-of-formal-roles-used-in-open-source-projects: "오픈소스 프로젝트에서 사용되는 공식 역할의 예시로는 무엇입니까?"
  how-do-i-formalize-these-leadership-roles: "이러한 리더십 역할을 어떻게 공식화할 수 있습니까?"
  when-should-i-give-someone-commit-access: "누군가에게 언제 커밋 권한을 부여해야합니까?"
  what-are-some-of-the-common-governance-structures-for-open-source-projects: "오픈소스 프로젝트의 공통적인 관리 구조에는 어떤 것들이 있습니까?"
  do-i-need-governance-docs-when-i-launch-my-project: "프로젝트를 시작할 때 거버넌스 문서가 필요합니까?"
  what-happens-if-corporate-employees-start-submitting-contributions: "기업 직원이 기여를 제출하기 시작하면 어떻게됩니까?"
  do-i-need-a-legal-entity-to-support-my-project: "내 프로젝트를 지원하기 위해 법인이 필요합니까?"
order: 6
image: /assets/images/cards/leadership.png
related:
  - best-practices
  - metrics
---

## 성장하는 프로젝트를 위한 거버넌스 이해하기

프로젝트가 성장하고 있고, 사람들이 종사하고 있으며, 당신은 이 일을 계속 지키려고합니다. 이 단계에서 누군가가 프로젝트에 커밋하거나 커뮤니티 토론을 해결할 때, 정기적인 프로젝트 참여자를 워크플로우에 통합하는 방법에 대해 궁금해 할 수 있습니다. 질문이 있으시면 답변을 드리겠습니다.

## 오픈소스 프로젝트에서 사용되는 공식 역할의 예시로는 무엇입니까?

많은 프로젝트가 기여자 역할과 인식을 위해 유사한 구조를 따릅니다.

이 역할들이 실제로 의미하는 바는 전적으로 당신에게 달렸습니다. 다음과 같은 몇 가지 유형의 역할을 인식 할 수 있습니다:

* **메인테이너**
* **기여자**
* **커미터**

**약간의 예시로, "메인테이너"**는 커밋 권한이있는 프로젝트의 유일한 사람입니다. 다른 프로젝트에서는 단순히 README에 메인테이너로 올라온 사람들입니다.

메인테이너는 반드시 프로젝트에 코드를 작성하는 사람일 필요는 없습니다. 그것은 프로젝트를 전파하는 많은 일을 한 사람일 수도 있고, 프로젝트를 다른 사람들이 더 쉽게 이용할 수 있도록 작성한 문서일 수도 있습니다. 메인테이너가 매일 수행하는 업무와 관계없이 메인테이너는 프로젝트 방향에 대한 책임감을 느끼고, 이를 개선하기 위해 최선을 다하는 사람입니다.

**모든 사람이 될 수 있는 "기여자"**는 이슈 혹은 pull request에 대한 의견을 말하거나, 프로젝트에 가치를 부여하는 사람 (이슈를 다루거나, 코드 작성 혹은 이벤트 구성), 또는 병합된 pull request을 소유한 사람(아마도 기여자의 가장 좁은 정의)이 될 수 있습니다.

<aside markdown="1" class="pquote">
  <img src="https://avatars1.githubusercontent.com/u/579?v=3&s=460" class="pquote-avatar" alt="avatar">
  \[For Node.js,\] every person who shows up to comment on an issue or submit code is a member of a project’s community. Just being able to see them means that they have crossed the line from being a user to being a contributor.
  <p markdown="1" class="pquote-credit">
— @mikeal, ["건강한 오픈소스"](https://medium.com/the-javascript-collection/healthy-open-source-967fa8be7951)
  </p>
</aside>

**"커미터"**라는 용어는 특정 유형의 책임인 커밋 액세스를 다른 형태의 기여와 구별하는 데 사용될 수 있습니다.

원하는 방식으로 프로젝트 역할을 정의할 수 있지만, [보다 폭 넓은 정의를 사용하여](../how-to-contribute/#what-it-means-to-contribute) 더 많은 기여 양식을 권장하십시오. 리더십 역할을 사용하여 기술 능력에 관계없이 프로젝트에 뛰어난 기여를 한 사람을 공식적으로 인정할 수 있습니다.

<aside markdown="1" class="pquote">
  <img src="https://avatars3.githubusercontent.com/u/21148?v=3&s=460" class="pquote-avatar" alt="avatar">
  You might know me as the "inventor" of Django...but really I'm the guy who got hired to work on a thing a year after it was already made. (...) People suspect that I'm successful because of my programming skill...but I'm at best an average programmer.
  <p markdown="1" class="pquote-credit">
— @jacobian, ["파이콘 2015 키노트" (비디오)](https://www.youtube.com/watch?v=hIJdFxYlEKE#t=5m0s)
  </p>
</aside>

## 이러한 리더십 역할을 어떻게 공식화할 수 있습니까?

리더십 역할을 공식화하면 사람들이 소유권을 느끼게되고 도움이 필요한 다른 커뮤니티 회원에게도 도움이 됩니다.

소규모 프로젝트의 경우, 리더 지정은 README 또는 CONTRIBUTORS 텍스트 파일에 이름을 추가하는 것처럼 간단할 수 있습니다.

For a bigger project, if you have a website, create a team page or list your project leaders there. For example, [Postgres](https://github.com/postgres/postgres/) has a [comprehensive team page](https://www.postgresql.org/community/contributors/) with short profiles for each contributor.

If your project has a very active contributor community, you might form a "core team" of maintainers, or even subcommittees of people who take ownership of different issue areas (ex. security, issue triaging, or community conduct). Let people self-organize and volunteer for the roles they're most excited about, rather than assigning them.

<aside markdown="1" class="pquote">
  \[We\] supplement the core team with several "subteams". Each subteam is focused on a specific area, e.g., language design or libraries. (...) To ensure global coordination and a strong, coherent vision for the project as a whole, each subteam is led by a member of the core team.
  <p markdown="1" class="pquote-credit">
— ["Rust 가버넌스 RFC"](https://github.com/rust-lang/rfcs/blob/master/text/1068-rust-governance.md)
  </p>
</aside>

Leadership teams may want to create a designated channel (like on IRC) or meet regularly to discuss the project (like on Gitter or Google Hangout). You can even make those meetings public so other people can listen. [Cucumber-ruby](https://github.com/cucumber/cucumber-ruby), for example, [hosts office hours every week](https://github.com/cucumber/cucumber-ruby/blob/master/CONTRIBUTING.md#talking-with-other-devs).

Once you've established leadership roles, don't forget to document how people can attain them! Establish a clear process for how someone can become a maintainer or join a subcommittee in your project, and write it into your GOVERNANCE.md.

Tools like [Vossibility](https://github.com/icecrime/vossibility-stack) can help you publicly track who is (or isn't) making contributions to the project. Documenting this information avoids the community perception that maintainers are a clique that makes its decisions privately.

Finally, if your project is on GitHub, consider moving your project from your personal account to an Organization and adding at least one backup admin. [GitHub Organizations](https://help.github.com/articles/creating-a-new-organization-account/) make it easier to manage permissions and multiple repositories and protect your project's legacy through [shared ownership](../building-community/#share-ownership-of-your-project).

## 누군가에게 언제 커밋 권한을 부여해야합니까?

Some people think you should give commit access to everybody who makes a contribution. Doing so could encourage more people to feel ownership of your project.

On the other hand, especially for bigger, more complex projects, you may want to only give commit access to people who have demonstrated their commitment. There's no one right way of doing it - do what makes you most comfortable!

If your project is on GitHub, you can use [protected branches](https://help.github.com/articles/about-protected-branches/) to manage who can push to a particular branch, and under which circumstances.

<aside markdown="1" class="pquote">
  <img src="https://avatars2.githubusercontent.com/u/15000?v=3&s=460" class="pquote-avatar" alt="avatar">
  Whenever somebody sends you a pull request, give them commit access to your project. While it may sound incredibly stupid at first, using this strategy will allow you to unleash the true power of GitHub. (...) Once people have commit access, they are no longer worried that their patch might go unmerged...causing them to put much more work into it.
  <p markdown="1" class="pquote-credit">
— @felixge, ["Pull Request 핵"](http://felixge.de/2013/03/11/the-pull-request-hack.html)
  </p>
</aside>

## 오픈소스 프로젝트의 공통적인 관리 구조에는 어떤 것들이 있습니까?

There are three common governance structures associated with open source projects.

* **BDFL:** BDFL stands for "Benevolent Dictator for Life". Under this structure, one person (usually the initial author of the project) has final say on all major project decisions. [Python](https://github.com/python) is a classic example. Smaller projects are probably BDFL by default, because there are only one or two maintainers. A project that originated at a company might also fall into the BDFL category.

* **Meritocracy:** **(Note: the term "meritocracy" carries negative connotations for some communities and has a [complex social and political history](http://geekfeminism.wikia.com/wiki/Meritocracy).)** Under a meritocracy, active project contributors (those who demonstrate "merit") are given a formal decision making role. Decisions are usually made based on pure voting consensus. The meritocracy concept was pioneered by the [Apache Foundation](http://www.apache.org/); [all Apache projects](http://www.apache.org/index.html#projects-list) are meritocracies. Contributions can only be made by individuals representing themselves, not by a company.

* **Liberal contribution:** Under a liberal contribution model, the people who do the most work are recognized as most influential, but this is based on current work and not historic contributions. Major project decisions are made based on a consensus seeking process (discuss major grievances) rather than pure vote, and strive to include as many community perspectives as possible. Popular examples of projects that use a liberal contribution model include [Node.js](https://nodejs.org/en/foundation/) and [Rust](https://www.rust-lang.org/en-US/).

Which one should you use? It's up to you! Every model has advantages and trade-offs. And although they may seem quite different at first, all three models have more in common than they seem. If you're interested in adopting one of these models, check out these templates:

* [BDFL model template](http://oss-watch.ac.uk/resources/benevolentdictatorgovernancemodel)
* [Meritocracy model template](http://oss-watch.ac.uk/resources/meritocraticgovernancemodel)
* [Node.js's liberal contribution policy](https://medium.com/the-javascript-collection/healthy-open-source-967fa8be7951#.m9ht26e79)

## 프로젝트를 시작할 때 거버넌스 문서가 필요합니까?

There is no right time to write down your project's governance, but it's much easier to define once you've seen your community dynamics play out. The best (and hardest) part about open source governance is that it is shaped by the community!

Some early documentation will inevitably contribute to your project's governance, however, so start writing down what you can. For example, you can define clear expectations for behavior, or how your contributor process works, even at your project's launch.

If you're part of a company launching an open source project, it's worth having an internal discussion before launch about how your company expects to maintain and make decisions about the project moving forward. You may also want to publicly explain anything particular to how your company will (or won't!) be involved with the project.

<aside markdown="1" class="pquote">
  <img src="https://avatars1.githubusercontent.com/u/691109?v=3&s=460" class="pquote-avatar" alt="avatar">
  We assign small teams to manage projects on GitHub who are actually working on these at Facebook. For example, React is run by a React engineer.
  <p markdown="1" class="pquote-credit">
— @caabernathy, ["Facebook의 오픈소스에 대한 내부 모습"](https://opensource.com/life/15/10/ato-interview-christine-abernathy-facebook)
  </p>
</aside>

## 기업 직원이 기여를 제출하기 시작하면 어떻게됩니까?

Successful open source projects get used by many people and companies, and some companies may eventually have revenue streams eventually tied to the project. For example, a company may use the project's code as one component in a commercial service offering.

As the project gets more widely used, people who have expertise in it become more in-demand - you may be one of them! - and will sometimes get paid for work they do in the project.

It's important to treat commercial activity as normal and as just another source of development energy. Paid developers shouldn't get special treatment over unpaid ones, of course; each contribution must be evaluated on its technical merits. However, people should feel comfortable engaging in commercial activity, and feel comfortable stating their use cases when arguing in favor of a particular enhancement or feature.

"Commercial" is completely compatible with "open source". "Commercial" just means there is money involved somewhere - that the software is used in commerce, which is increasingly likely as a project gains adoption. (When open source software is used as part of a non-open-source product, the overall product is still "proprietary" software, though, like open source, it might be used for commercial or non-commercial purposes.)

Like anyone else, commercially-motivated developers gain influence in the project through the quality and quantity of their contributions. Obviously, a developer who is paid for her time may be able to do more than someone who is not paid, but that's okay: payment is just one of many possible factors that could affect how much someone does. Keep your project discussions focused on the contributions, not on the external factors that enable people to make those contributions.

## 내 프로젝트를 지원하기 위해 법인이 필요합니까?

You don't need a legal entity to support your open source project unless you're handling money.

For example, if you want to create a commercial business, you'll want to set up a C Corp or LLC (if you're based in the US). If you're just doing contract work related to your open source project, you can accept money as a sole proprietor, or set up an LLC (if you're based in the US).

If you want to accept donations for your open source project, you can set up a donation button (using PayPal or Stripe, for example), but the money won't be tax-deductible unless you are a qualifying nonprofit (a 501c3, if you're in the US).

Many projects don't wish to go through the trouble of setting up a nonprofit, so they find a nonprofit fiscal sponsor instead. A fiscal sponsor accepts donations on your behalf, usually in exchange for a percentage of the donation. [Software Freedom Conservancy](https://sfconservancy.org/), [Apache Foundation](http://www.apache.org/), [Eclipse Foundation](https://eclipse.org/org/foundation/), [Linux Foundation](https://www.linuxfoundation.org/projects) and [Open Collective](https://opencollective.com/opensource) are examples of organizations that serve as fiscal sponsors for open source projects.

<aside markdown="1" class="pquote">
  <img src="https://avatars2.githubusercontent.com/u/3671070?v=3&s=460" class="pquote-avatar" alt="avatar">
  Our goal is to provide an infrastructure that communities can use to be self sustainable, thus creating an environment where everyone — contributors, backers, sponsors — get concrete benefits out of it.
  <p markdown="1" class="pquote-credit">
— @piamancini, ["자선 단체의 틀을 넘어서"](https://medium.com/open-collective/moving-beyond-the-charity-framework-b1191c33141#.vgsbj9um9)
  </p>
</aside>

프로젝트가 특정 언어 또는 생태계와 밀접하게 관련되어 있다면, 함께 작업할 수 있는 관련 소프트웨어 기반이 있을겁니다. 예시로, [파이썬 소프트웨어 재단](https://www.python.org/psf/)은 파이썬 패키지 관리자인 [PyPI](https://pypi.python.org/pypi)를 돕고, [Node.js 재단](https://nodejs.org/en/foundation/)은 노드 기반 프레임워크인 [Express.js](http://expressjs.com/)를 돕습니다.
