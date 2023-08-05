---
lang: ko
title: 리더십과 관리
description: 결정을 위한 공식적인 규칙을 정하면 오픈소스 프로젝트의 성장에 이익을 얻을 수 있습니다.
class: leadership
order: 6
image: /assets/images/cards/leadership.png
related:
  - best-practices
  - metrics
---

## 성장하는 프로젝트 관리 이해하기

프로젝트는 성장하고, 사람들은 바쁘게 활동하고, 여러분은 계속 이끌어 나가고 싶습니다. 이 단계에서 여러분은 어떻게 일의 흐름에 기여자들을 모을지 알고자 합니다. 누군가에게 커밋 권한을 주거나 커뮤니티 토론을 해결하는 식으로 말입니다. 질문이 있다면 대답해드리겠습니다.

## 오픈소스 프로젝트에서 공식적인 역할은 어떤 식으로 적용되나요?

대부분 프로젝트는 비슷한 기여자 역할 구조를 갖습니다.

역할이 실제로 의미하는 것이 무엇인지는 전적으로 여러분에게 달렸습니다. 여러분이 이미 아실 만한 역할은 다음과 같습니다.

* **관리자(Maintainer)**
* **기여자(Contributor)**
* **커미터(Committer)**

**몇몇 프로젝트에서 "관리자"**는 커밋 권한을 가진 사람들만을 의미하지만, 어떤 프로젝트에서는 단순히 README 파일에 관리자로서 나열되어 있는 사람들을 가리킵니다.

관리자가 반드시 코드를 작성하는 사람일 필요는 없습니다. 프로젝트를 홍보하는 데 큰 몫을 한 사람일 수도 있고, 프로젝트 접근성을 높이기 위해 문서화를 맡은 사람일 수도 있습니다. 그들이 무슨 일을 하든, 관리자는 보통 프로젝트의 방향에 책임감을 가지고 이를 개선하고자 노력하는 사람일 것입니다.

**"기여자"**는 이슈나 풀 리퀘스트에 댓글을 작성하는 모든 사람이라고 볼 수 있습니다. 이슈에 우선 순위를 매기는 사람, 코드를 작성하는 사람, 행사를 조율하는 사람에서부터 (가장 좁은 의미로는) 병합된 풀 리퀘스트를 가진 사람까지 모두가 기여자인 셈입니다.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/mikeal?s=180" class="pquote-avatar" alt="avatar">
  \[For Node.js,\] every person who shows up to comment on an issue or submit code is a member of a project’s community. Just being able to see them means that they have crossed the line from being a user to being a contributor.
  <p markdown="1" class="pquote-credit">
— @mikeal, [“Healthy Open Source”](https://medium.com/the-javascript-collection/healthy-open-source-967fa8be7951)
  </p>
</aside>

**"커미터"**라는 용어는 다른 기여 유형에 대비해 커밋이라는 특정 권한과 책임을 가진 사람을 구분하고자 사용합니다.

프로젝트 역할은 여러분이 원하는 대로 정의할 수 있지만, 다양한 유형의 기여를 이끌어내기 위해 되도록 [넓은 정의를 사용하세요](../how-to-contribute/#기여한다는-것의-의미). 전문적인 기술 수준과 별개로 프로젝트에 대단한 기여를 한 사람들에게 리더십 역할을 부여하며 그들에게 답례를 표할 수 있습니다.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/jacobian?s=180" class="pquote-avatar" alt="avatar">
  You might know me as the "inventor" of Django...but really I'm the guy who got hired to work on a thing a year after it was already made. (...) People suspect that I'm successful because of my programming skill...but I'm at best an average programmer.
  <p markdown="1" class="pquote-credit">
— @jacobian, [“PyCon 2015 Keynote” (video)](https://www.youtube.com/watch?v=hIJdFxYlEKE#t=5m0s)
  </p>
</aside>

## 어떻게 리더십 역할을 구성해야 할까요?

리더십 역할을 잘 갖추고 형식화하면 사람들이 소유감을 느끼고, 다른 커뮤니티 구성원들에게 도움을 줄 수 있습니다.

작은 프로젝트에서는 README 파일이나 CONTRIBUTORS 파일에 이름을 추가하는 것 정도로 간단하게 리더를 지정할 수 있습니다.

큰 프로젝트에서는, 웹사이트가 있다면 팀 페이지를 만들거나 프로젝트 리더들을 사이트에 나열하세요. [Postgres](https://github.com/postgres/postgres/)는 각 기여자의 짧은 프로필을 담은 [팀 페이지](https://www.postgresql.org/community/contributors/)를 가지고 있습니다.

매우 활성화된 기여자 커뮤니티를 가진 프로젝트라면 관리자들이나 각 분야(보안, 이슈 분류, 커뮤니티 관리 등)의 기여자들로 "핵심 팀"을 구성하는 방법이 있습니다. 사람들에게 역할을 부여하기보다 사람들이 스스로 역할을 구성하고 자원할 수 있게 하세요.

<aside markdown="1" class="pquote">
  \[We\] supplement the core team with several "subteams". Each subteam is focused on a specific area, e.g., language design or libraries. (...) To ensure global coordination and a strong, coherent vision for the project as a whole, each subteam is led by a member of the core team.
  <p markdown="1" class="pquote-credit">
— [“Rust Governance RFC”](https://github.com/rust-lang/rfcs/blob/HEAD/text/1068-rust-governance.md)
  </p>
</aside>

리더 팀은 IRC 등 지정된 채널을 만들거나 Gitter나 Google Hangout 등에서 정기적으로 프로젝트 토론 시간을 가지는 것이 좋습니다. 다른 사람들도 참관할 수 있게 채널이나 토론을 공개해도 됩니다. 예컨대 [Cucumber-ruby](https://github.com/cucumber/cucumber-ruby)는 [매주 토론 시간을 갖습니다](https://github.com/cucumber/cucumber-ruby/blob/HEAD/CONTRIBUTING.md#talking-with-other-devs).

리더십 역할을 구성한 후에는 사람들이 어떻게 그 역할을 부여받을 수 있는지 문서화하는 것을 잊지 마세요! 관리자나 특정 분야 전문 기여자가 되는 방법을 명확하게 정하고 GOVERNANCE 파일에 기록하세요.

누가 프로젝트에 기여하고 누가 그렇지 않은지 공개적으로 파악하는 데 [Vossibility](https://github.com/icecrime/vossibility-stack) 같은 툴이 도움을 줍니다. 이런 정보를 문서화하면 관리자들이 불공평한 결정을 내린다는 인식을 피할 수 있습니다.

마지막으로, 여러분의 프로젝트가 GitHub에서 진행되고 있다면 프로젝트를 여러분의 개인 계정에서 조직 계정으로 이동하는 것을 고려해 보세요. [조직 계정](https://help.github.com/articles/creating-a-new-organization-account/) 기능이 여러 저장소의 권한 관리, [공동 소유](../building-community/#프로젝트를-공동으로-소유하세요)를 통한 프로젝트 정책 보호를 쉽게 만들어 줍니다.

## 커밋 권한은 언제 부여해야 하나요?

몇몇 사람들은 여러분이 모든 기여자에게 커밋 권한을 줘야 한다고 생각합니다. 그렇게 한다면 더 많은 사람들이 프로젝트 소유감을 느끼게 할 수 있을 것입니다.

반면, 특히 크고 복잡한 프로젝트에서는 노력을 보인 사람들에게만 커밋 권한을 부여할 수도 있습니다. 정해진 방법은 없습니다. 가장 편한 방법을 선택하세요!

여러분의 프로젝트가 GitHub에서 진행되고 있다면 [보호 브랜치](https://help.github.com/articles/about-protected-branches/) 기능을 사용해 누가 어떠한 상황에 특정 브랜치에 푸시할 수 있는지 지정할 수 있습니다.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/felixge?s=180" class="pquote-avatar" alt="avatar">
  Whenever somebody sends you a pull request, give them commit access to your project. While it may sound incredibly stupid at first, using this strategy will allow you to unleash the true power of GitHub. (...) Once people have commit access, they are no longer worried that their patch might go unmerged...causing them to put much more work into it.
  <p markdown="1" class="pquote-credit">
— @felixge, [“The Pull Request Hack”](https://felixge.de/2013/03/11/the-pull-request-hack.html)
  </p>
</aside>

## 오픈소스의 관리 구조로는 어떤 것이 있나요?

오픈소스 프로젝트에서 적용되는 세 가지 일반적인 관리 구조가 있습니다.

* **BDFL:** BDFL은 "자비로운 종신독재자"(Benevolent Dictator for Life)의 약자입니다. 이 구조 아래에서는 (주로 프로젝트 창시자) 한 사람이 주요 사안의 최종 결정권을 갖습니다. [Python](https://github.com/python)이 그 대표적인 예입니다. 작은 프로젝트는 한두 명의 관리자만이 존재하므로 BDFL이라 할 수 있습니다. 기업에 의해 시작된 프로젝트도 보통 BDFL의 범주에 들어갑니다.

* **능력주의(Meritocracy):** **(참고: "능력주의"라는 용어는 일부 커뮤니티에서는 부정적 의미를 내포하며, [복잡한 사회·정치적 역사](http://geekfeminism.wikia.com/wiki/Meritocracy)를 가지고 있습니다.)** 능력주의 구조 아래에서는 ("능력"을 보이는) 활동적인 프로젝트 기여자들이 공식 결정권을 갖습니다. 사안 결정은 주로 투표를 통한 합의로 이루어집니다. 능력주의라는 개념은 [Apache Foundation](https://www.apache.org/)에 의해 만들어졌습니다. [모든 Apache 프로젝트](https://www.apache.org/index.html#projects-list)가 능력주의 구조입니다. 기여는 반드시 기업이 아닌 각각의 개인에 의해 이루어집니다.

* **자유주의 기여(Liberal contribution):** 자유주의 기여 구조에서는 가장 많은 일을 하는 사람이 가장 영향력 있는 사람으로 받아들여집니다. 하지만 이는 과거의 기여가 아닌 현재 작업 내용에 따라 판단합니다. 주요 사안은 투표보다는 (불만 사항에 대해 토론하는) 합의 도출 과정을 기반으로 하며, 가능한 많은 관점을 포함하려 합니다. 자유주의 기여 구조의 유명한 프로젝트로는 [Node.js](https://foundation.nodejs.org/)와 [Rust](https://www.rust-lang.org/)가 있습니다.

어느 구조를 채택해야 할까요? 그건 여러분의 손에 달려 있습니다! 모든 구조는 각각의 장단점을 가지고 있습니다. 그리고 얼핏 보기에는 제법 달라 보여도 세 구조 모두 실제로는 보기보다 비슷합니다. 위 구조들 중 하나를 도입하고자 한다면 아래 템플릿을 참조하세요.

* [BDFL 구조 템플릿](http://oss-watch.ac.uk/resources/benevolentdictatorgovernancemodel)
* [능력주의 구조 템플릿](http://oss-watch.ac.uk/resources/meritocraticgovernancemodel)
* [Node.js의 자유주의 기여 정책](https://medium.com/the-node-js-collection/healthy-open-source-967fa8be7951)

## 프로젝트를 출시하려면 관리 문서가 있어야 하나요?

프로젝트 관리 문서를 작성하는 데에 정해진 시기는 없습니다. 하지만 커뮤니티의 역학이 작용하는 모습을 직접 보고 나서 작성하면 더 쉽습니다. 오픈소스 관리의 가장 좋은 (그리고 어려운) 점은 그것이 커뮤니티에 의해 형성된다는 점입니다!

하지만 이른 문서화는 프로젝트 관리에 필연적으로 도움이 됩니다. 그러니 적을 수 있는 것부터 적으며 시작하세요. 프로젝트 출시 단계에서도 어떤 기여를 기대하는지 명시하거나 기여 과정이 어떻게 되는지 등을 정의할 수 있습니다.

여러분이 오픈소스 프로젝트를 출시하는 기업의 일원이라면, 출시 전에 앞으로 어떻게 프로젝트를 유지하고 사안을 결정할지에 대한 내부 토론 시간을 가지세요. 또한 기업이 프로젝트에 어떤 식으로 관여할지 (또는 관여하지 않을지!) 공개적으로 설명하는 것이 좋습니다.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/caabernathy?s=180" class="pquote-avatar" alt="avatar">
  We assign small teams to manage projects on GitHub who are actually working on these at Facebook. For example, React is run by a React engineer.
  <p markdown="1" class="pquote-credit">
— @caabernathy, ["An inside look at open source at Facebook”](https://opensource.com/life/15/10/ato-interview-christine-abernathy-facebook)
  </p>
</aside>

## 기업 직원들이 기여하기 시작하면 어떤 일이 일어나나요?

성공적인 오픈소스 프로젝트는 많은 사람과 기업에서 사용됩니다. 그러다 보면 어떤 기업의 수익 흐름이 프로젝트와 엮이기도 합니다. 예컨대, 기업이 상업적 서비스 제공을 위한 한 요소로서 프로젝트 코드를 사용하는 경우가 있습니다.

프로젝트가 널리 쓰이면 해당 프로젝트에 전문적인 사람들(여러분일 수도 있습니다!)의 수요도 증가합니다. 때로는 프로젝트에서 맡는 작업에 대한 보수를 받기도 합니다.

영리 활동을 다른 개발 원동력과 같이 평범하게 여기는 것이 중요합니다. 보수를 받는 개발자들은 그렇지 않은 개발자들에 비해 특별한 대우를 받아서는 안 됩니다. 물론 그들이 만드는 기여는 기술적인 가치에 따라 평가받아야 하겠지만 말입니다. 사람들은 영리 활동에 대해 이야기하거나, 특정 기능 개선이 필요하다고 주장하며 용례를 다루는 데 불편이 없어야 합니다.

"영리" 또는 "상용"이라는 단어는 "오픈소스"와 완벽히 어울리는 단어입니다. "영리"는 그저 어딘가에 돈이 연관되어 있다는 뜻입니다. 소프트웨어가 시장에서 사용되면 자연스럽게 프로젝트 채용률도 오릅니다. (오픈소스 소프트웨어가 비공개 소프트웨어의 일부분에 사용된다면 전체 소프트웨어는 여전히 "독점" 소프트웨어입니다. 이는 오픈소스처럼 영리적 용도로든 비영리적 용도로든 사용될 수 있습니다.)

다른 누구나와 마찬가지로, 이윤을 얻는 개발자들은 기여의 양과 질을 통해 프로젝트에서 영향력을 얻습니다. 투자한 시간에 대한 보상을 받는 개발자가 그렇지 않은 이들보다 많은 일을 할 수 있는 것은 분명한 사실이지만, 괜찮습니다. 보수는 누군가의 역량에 영향을 미치는 여러 요인 중 하나일 뿐입니다. 사람들이 기여하게 만들기 위한 외적 요인이 아닌 기여 자체에 토론을 집중하세요.

## 제 프로젝트를 지원하려면 법인이 필요한가요?

금전을 다루는 게 아니라면 오픈소스 프로젝트를 지원하는 데 법인은 필요하지 않습니다.

예컨대 영리 사업을 하고 싶다면 (미국 기준) C Corp이나 LLC를 설립해야 할 것입니다. 오픈소스 프로젝트에 관한 계약만 받고 있는 것이라면 독점 대표로서 돈을 수령하거나, 역시 (미국 기준) LLC를 설립할 수 있습니다.

오픈소스 프로젝트에 대한 기부를 받고 싶다면 PayPal이나 Stripe 등을 이용해 기부 버튼을 마련해둘 수 있습니다. 하지만 여러분이 비영리(미국 기준 501c3)를 증명하지 못한다면 세금 공제는 받지 못합니다.

대부분 프로젝트는 비영리 단체를 설립하는 번거로운 절차를 따르고 싶어하지 않습니다. 대신 비영리 회계 스폰서를 찾는 방법을 택합니다. 회계 스폰서는 보통 기부금의 일정 비율을 대가로 여러분을 대신하여 기부금을 수령합니다. 오픈소스 프로젝트를 위한 회계 스폰서 역할을 하는 조직은 [Software Freedom Conservancy](https://sfconservancy.org/), [Apache Foundation](https://www.apache.org/), [Eclipse Foundation](https://eclipse.org/org/foundation/), [Linux Foundation](https://www.linuxfoundation.org/projects), [Open Collective](https://opencollective.com/opensource) 등이 있습니다.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/piamancini?s=180" class="pquote-avatar" alt="avatar">
  Our goal is to provide an infrastructure that communities can use to be self sustainable, thus creating an environment where everyone — contributors, backers, sponsors — get concrete benefits out of it.
  <p markdown="1" class="pquote-credit">
— @piamancini, ["Moving beyond the charity framework”](https://medium.com/open-collective/moving-beyond-the-charity-framework-b1191c33141)
  </p>
</aside>

여러분의 프로젝트가 특정 언어 또는 생태계와 밀접하게 관련되어 있다면 협업할 수 있는 관련 소프트웨어 재단 또한 있을 것입니다. 예를 들어 [Python Software Foundation](https://www.python.org/psf/)은 Python 패키지 관리자인 [PyPI](https://pypi.org/) 프로젝트를 지원하고, [Node.js Foundation](https://foundation.nodejs.org/)은 Node 기반 프레임워크인 [Express.js](https://expressjs.com/) 프로젝트를 지원합니다.
