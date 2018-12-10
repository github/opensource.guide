---
lang: ko
title: 리더십과 정치
description: 오픈소스 프로젝트가 성장하면서 공식적인 의사 결정 규칙의 혜택을 볼 수 있습니다.
class: leadership
order: 6
image: /assets/images/cards/leadership.png
related:
  - best-practices
  - metrics
---

## Understanding governance for your growing project

프로젝트가 성장하고 있고, 사람들이 종사하고 있으며, 당신은 이 일을 계속 지키려고합니다. 이 단계에서 누군가가 프로젝트에 커밋하거나 커뮤니티 토론을 해결할 때, 정기적인 프로젝트 참여자를 워크플로우에 통합하는 방법에 대해 궁금해 할 수 있습니다. 질문이 있으시면 답변을 드리겠습니다.

## What are examples of formal roles used in open source projects?

많은 프로젝트가 기여자 역할과 인식을 위해 유사한 구조를 따릅니다.

이 역할들이 실제로 의미하는 바는 전적으로 당신에게 달렸습니다. 다음과 같은 몇 가지 유형의 역할을 인식 할 수 있습니다:

* **메인테이너**
* **기여자**
* **커미터**

**약간의 예시로, "메인테이너"**는 커밋 권한이있는 프로젝트의 유일한 사람입니다. 다른 프로젝트에서는 단순히 README에 메인테이너로 올라온 사람들입니다.

메인테이너는 반드시 프로젝트에 코드를 작성하는 사람일 필요는 없습니다. 그것은 프로젝트를 전파하는 많은 일을 한 사람일 수도 있고, 프로젝트를 다른 사람들이 더 쉽게 이용할 수 있도록 작성한 문서일 수도 있습니다. 메인테이너가 매일 수행하는 업무와 관계없이 메인테이너는 프로젝트 방향에 대한 책임감을 느끼고, 이를 개선하기 위해 최선을 다하는 사람입니다.

**모든 사람이 될 수 있는 "기여자"**는 이슈 혹은 pull request에 대한 의견을 말하거나, 프로젝트에 가치를 부여하는 사람 (이슈를 다루거나, 코드 작성 혹은 이벤트 구성), 또는 병합된 pull request을 소유한 사람(아마도 기여자의 가장 좁은 정의)이 될 수 있습니다.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/mikeal?s=180" class="pquote-avatar" alt="avatar">
  \[For Node.js,\] every person who shows up to comment on an issue or submit code is a member of a project’s community. Just being able to see them means that they have crossed the line from being a user to being a contributor.
  <p markdown="1" class="pquote-credit">
— @mikeal, ["건강한 오픈소스"](https://medium.com/the-javascript-collection/healthy-open-source-967fa8be7951)
  </p>
</aside>

**"커미터"**라는 용어는 특정 유형의 책임인 커밋 액세스를 다른 형태의 기여와 구별하는 데 사용될 수 있습니다.

원하는 방식으로 프로젝트 역할을 정의할 수 있지만, [보다 폭 넓은 정의를 사용하여](../how-to-contribute/#what-it-means-to-contribute) 더 많은 기여 양식을 권장하십시오. 리더십 역할을 사용하여 기술 능력에 관계없이 프로젝트에 뛰어난 기여를 한 사람을 공식적으로 인정할 수 있습니다.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/jacobian?s=180" class="pquote-avatar" alt="avatar">
  You might know me as the "inventor" of Django...but really I'm the guy who got hired to work on a thing a year after it was already made. (...) People suspect that I'm successful because of my programming skill...but I'm at best an average programmer.
  <p markdown="1" class="pquote-credit">
— @jacobian, ["파이콘 2015 키노트" (비디오)](https://www.youtube.com/watch?v=hIJdFxYlEKE#t=5m0s)
  </p>
</aside>

## How do I formalize these leadership roles?

리더십 역할을 공식화하면 사람들이 소유권을 느끼게되고 도움이 필요한 다른 커뮤니티 회원에게도 도움이 됩니다.

소규모 프로젝트의 경우, 리더 지정은 README 또는 CONTRIBUTORS 텍스트 파일에 이름을 추가하는 것처럼 간단할 수 있습니다.

대규모 프로젝트의 경우,만약 웹사이트를 가지고있다면, 팀 페이지를 만들거나 거기에 프로젝트 리더를 나열하십시오. 예시로, [Postgres](https://github.com/postgres/postgres/)는 각각 기여자를 위한 짧은 프로필을 [포괄적인 팀 페이지](https://www.postgresql.org/community/contributors/)에 넣었습니다.

만약 프로젝트에 매우 활발하게 기여한 커뮤니티가 있는 경우, 메인테이너 또는 다른 이슈 영역(예시. 보안, 이슈 security, 시위, 커뮤니티 행동)의 소유권을 가진 사람들의 소위원회로 "핵심 팀"을 구성 할 수 있습니다. 사람들이 자신을 할당하는 것이 아니라, 가장 흥분되는 역할에 대해 스스로 조직하고 자원 봉사하게 하십시오.

<aside markdown="1" class="pquote">
  \[We\] supplement the core team with several "subteams". Each subteam is focused on a specific area, e.g., language design or libraries. (...) To ensure global coordination and a strong, coherent vision for the project as a whole, each subteam is led by a member of the core team.
  <p markdown="1" class="pquote-credit">
— ["Rust 가버넌스 RFC"](https://github.com/rust-lang/rfcs/blob/master/text/1068-rust-governance.md)
  </p>
</aside>

리더십 팀은 IRC와 같이 지정된 채널을 만들거나 프로젝트를 토론하기 위해 정기적으로 (Gitter 또는 Google 행 아웃과 같은)모임을 갖기를 원할 수 있습니다. 다른 사람들이 들을 수 있도록 그 모임을 공개할 수도 있습니다.
예시로, [Cucumber-ruby](https://github.com/cucumber/cucumber-ruby)는, [매주 근무 시간에 가졌습니다](https://github.com/cucumber/cucumber-ruby/blob/master/CONTRIBUTING.md#talking-with-other-devs).

리더십 역할을 확립한 후에는 사람들이 어떻게 달성할 수 있는지 문서화하는 것을 잊지 마십시오! 누군가가 어떻게 메인테이너나 프로젝트의 소위원회에 참여할 수 있는지에 대한 명확한 프로세스를 수립하고 GOVERNANCE.md에 기록합시다.

[Vossibility](https://github.com/icecrime/vossibility-stack)와 같은 도구는 프로젝트에 기여한 사람(또는 참여하지 않은 사람)을 공개적으로 추적하는 데 도움이 될 수 있습니다. 이 정보를 문서화하면, 메인테이너가 사적인 결정을 내리는 그들만의 커뮤니티라는 인식을 피할 수 있습니다.

마지막으로, 프로젝트가 GitHub에 있을 경우, 프로젝트를 개인 계정에서 조직으로 옮기고 적어도 하나의 백업 관리자를 추가하는 것을 고려하십시오. [GitHub Organizations](https://help.github.com/articles/creating-a-new-organization-account/)에서는 권한 및 여러 저장소를 쉽게 관리하고 [공유 소유권](../building-community/#share-ownership-of-your-project)을 통해 프로젝트의 유산을 보호합니다.

## When should I give someone commit access?

어떤 사람들은 당신이 기여하는 모든 사람에게 헌신적으로 접근해야한다고 생각합니다. 그렇게하면 더 많은 사람들이 프로젝트 소유권을 느낄 수 있습니다.

반면에, 특히 더 크고 복잡한 프로젝트의 경우, 자신의 의지를 입증한 사람들에게만 커밋 액세스 권한을 부여할 수 있습니다. 그렇게하는 데 올바른 방법이 없습니다 - 당신을 가장 편안하게 만드는 것은 무엇입니까!

만약 GitHub에 프로젝트가 있다면, [protected branches](https://help.github.com/articles/about-protected-branches/)를 사용하여 특정 브랜치로 푸시 할 수있는 사람과 상황을 관리할 수 ​​있습니다.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/felixge?s=180" class="pquote-avatar" alt="avatar">
  Whenever somebody sends you a pull request, give them commit access to your project. While it may sound incredibly stupid at first, using this strategy will allow you to unleash the true power of GitHub. (...) Once people have commit access, they are no longer worried that their patch might go unmerged...causing them to put much more work into it.
  <p markdown="1" class="pquote-credit">
— @felixge, ["Pull Request 핵"](https://felixge.de/2013/03/11/the-pull-request-hack.html)
  </p>
</aside>

## What are some of the common governance structures for open source projects?

오픈소스 프로젝트와 관련된 세 가지 공통 관리 구조가 있습니다.

* **BDFL:** BDFL은 "생명을 위한 자비로운 독재자"(Benevolent Dictator for Life)의 약자입니다. 이 구조하에서 한 사람(보통 프로젝트의 초기 저자)은 모든 주요 프로젝트 결정에 대해 최종 결정권을 갖습니다. [파이썬](https://github.com/python)은 고전적인 예시입니다. 작은 프로젝트는 한명 또는 두명의 관리자가 있기 때문에 기본적으로 BDFL일 것입니다. 한 회사에서 시작된 프로젝트도 BDFL 범주에 속할 수도 있습니다.

* **실력주의:** **(Note: "능력주의"라는 용어는 일부 지역 사회에 부정적인 의미를 지니며 [복잡한 사회 정치적 역사](http://geekfeminism.wikia.com/wiki/Meritocracy)를 가지고있습니다.)** 능력있는 사회에서 활동적인 프로젝트 기여가 ("공로"를 입증하는 사람들)에게 공식적인 의사 결정 역할이 부여됩니다. 결정은 일반적으로 순수한 투표 컨센서스를 기반으로합니다. 실력주의 개념은 [Apache Foundation](https://www.apache.org/)에 의해 개척되었습니다; [모든 아파치 프로젝트](https://www.apache.org/index.html#projects-list)는 장점이 있습니다. 기여는 회사가 아니라 집단을 대표하는 개인이 할 수 있습니다.

* **자유주의 기여:** 자유주의 기여 모델하에서, 가장 많은 일을 하는 사람들이 가장 영향력있는 사람으로 인식되지만, 이것은 역사적인 기여가 아니라 현재의 일을 기반으로합니다. 주요 프로젝트 결정은 순수한 표결보다는 합의를 모색하는 과정(주요 불만 사항을 논의)을 토대로 이루어지며, 가능한 많은 공동체 관점을 포함하기 위해 노력합니다. 프로젝트의 인기있는 예제는 [Node.js](https://foundation.nodejs.org/)와 [Rust](https://www.rust-lang.org/)에 포함된 자유주의 기여 모델을 사용합니다.

어느 것을 사용해야합니까? 그것은 당신에게 달렸습니다! 모든 모델에는 장점과 절충점이 있습니다. 처음에는 전혀 다른 것처럼 보일 수 있지만, 세 모델 모두 공통적으로 보입니다. 이 모델 중 하나를 채택하는 데 관심이 있다면 다음 템플릿을 확인하십시오:

* [BDFL 모델 템플릿](http://oss-watch.ac.uk/resources/benevolentdictatorgovernancemodel)
* [실력주의 모델 템플릿](http://oss-watch.ac.uk/resources/meritocraticgovernancemodel)
* [Node.js의 자유주의 기여 정책](https://medium.com/the-node-js-collection/healthy-open-source-967fa8be7951)

## Do I need governance docs when I launch my project?

프로젝트 관리 방식을 작성할 적절한 시기는 없지만, 커뮤니티 역학 관계가 성립했다면 정의하는 것이 훨씬 쉽습니다. 오픈소스 관리에 대한 가장 좋은(그리고 가장 어려운) 부분은 그것이 커뮤니티에 의해 형성된다는 것입니다!

일부 초기 문서는 필연적으로 프로젝트 관리에 기여할 것이므로, 가능하다면 글을 써내려가는 것을 시작하십시오. 예를 들어, 프로젝트 시작시에도 동작에 대한 명확한 기대치 또는 기여 프로세스가 어떻게 작동하는지 정의할 수 있습니다.

오픈소스 프로젝트를 시작한 회사의 일원이라면, 회사가 앞으로 나아갈 프로젝트에 대한 결정을 유지하고 결정할 방법에 대해 공개하기 전에 내부 토론을 가질 필요가 있습니다. 귀사가 프로젝트에 참여하는 방법에 대해 공개적으로 설명하고 싶을 수도 있습니다.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/caabernathy?s=180" class="pquote-avatar" alt="avatar">
  We assign small teams to manage projects on GitHub who are actually working on these at Facebook. For example, React is run by a React engineer.
  <p markdown="1" class="pquote-credit">
— @caabernathy, ["Facebook의 오픈소스에 대한 내부 모습"](https://opensource.com/life/15/10/ato-interview-christine-abernathy-facebook)
  </p>
</aside>

## What happens if corporate employees start submitting contributions?

성공적인 오픈소스 프로젝트는 많은 사람들과 회사에서 사용되며, 결국 일부 회사는 궁극적으로 프로젝트에 묶인 수익원을 갖게 될 것입니다. 예를 들어, 회사는 상용 서비스에서 프로젝트 코드를 하나의 구성 요소로 사용할 수 있습니다.

프로젝트가 널리 사용됨에 따라 전문 지식을 보유한 사람들은 더 많은 수요가 생깁니다. - 때로는 프로젝트에서 수행하는 일에 대해 보수를 받습니다.

상업 활동을 평범하고 또 다른 개발 에너지 원으로 간주하는 것이 중요합니다. 유료 개발자는 물론 지불하지 않은 애플리케이션에 대해서는 특별한 대우를 받아서는 안됩니다. 각 기부금은 기술적 장점으로 평가되어야합니다. 그러나 사람들은 상업 활동에 익숙해져야하며, 특정 향상이나 기능을 선호할 때 자신의 use cases에 대해 쉽게 알 수 있어야합니다.

"상용"은 "오픈소스"와 완전히 호환됩니다. "상업적"이란 말은 어딘가에 돈이 들어 있다는 의미입니다. 소프트웨어가 상용으로 사용되고 있다는 것이고, 프로젝트가 채택되면서 점점 더 많이 이용 될 가능성이 높습니다. 오픈소스 소프트웨어가 비 오픈소스 제품의 일부로 사용될 때, 전체 제품은 여전히 ​​"독점"소프트웨어이지만, 오픈소스와 마찬가지로 상업적 또는 비상업적 용도로 사용될 수 있습니다.

다른 사람들과 마찬가지로, 상업적 동기를 부여받은 개발자는 기여도의 질과 양을 통해 프로젝트에 영향력을 행사합니다. 분명히 일정한 시간동안 돈을 지불한 개발자는 돈을 지불하지 않은 사람보다 더 많은 것을 할 수 있지만, 괜찮습니다. 지불은 누군가가 얼마나 많은 영향을 줄 수 있는지에 대한 많은 요인 중 하나일뿐입니다. 사람들이 그 기여를 할 수 있게 해주는 외적 요인이 아닌, 기여에 초점을 맞춘 프로젝트 토론을 유지하십시오.

## Do I need a legal entity to support my project?

돈을 처리할 필요가 없다면, 오픈소스 프로젝트를 지원하는 법인이 필요하지 않습니다.

예시로, 상업용 비즈니스를 만들고 싶다면 C Corp 또는 LLC(미국에 거주하는 경우)를 설정해야합니다. 오픈소스 프로젝트와 관련된 계약 업무를 수행하는 중이라면, 독점 주인으로 돈을 받거나 LLC (미국에있는 경우)를 설립할 수 있습니다.

만약 오픈소스 프로젝트에 대한 기부를 받고 싶다면, (예를 들어 PayPal 또는 Stripe을 사용하여)기부 버튼을 설정할 수 있지만, 하지만 자격이 되는 비영리 단체(미국에 거주하는 경우 501c3)가 아닌 이상 돈은 세금 공제되지 않습니다.

많은 프로젝트가 비영리 단체를 설립하는 문제를 겪고 싶어하지 않으므로, 대신 비영리 재정 스폰서를 찾습니다. 재정 보증인은 귀하를 대신하여 기부금을 수령합니다. [Software Freedom Conservancy](https://sfconservancy.org/), [아파치 재단](https://www.apache.org/), [이클립스 재단](https://eclipse.org/org/foundation/), [리눅스 재단](https://www.linuxfoundation.org/projects) 그리고 [Open Collective](https://opencollective.com/opensource)는 오픈소스 프로젝트를 위한 회계 스폰서 역할을하는 조직의 예시입니다.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/piamancini?s=180" class="pquote-avatar" alt="avatar">
  Our goal is to provide an infrastructure that communities can use to be self sustainable, thus creating an environment where everyone — contributors, backers, sponsors — get concrete benefits out of it.
  <p markdown="1" class="pquote-credit">
— @piamancini, ["자선 단체의 틀을 넘어서"](https://medium.com/open-collective/moving-beyond-the-charity-framework-b1191c33141)
  </p>
</aside>

프로젝트가 특정 언어 또는 생태계와 밀접하게 관련되어 있다면, 함께 작업할 수 있는 관련 소프트웨어 기반이 있을겁니다. 예시로, [파이썬 소프트웨어 재단](https://www.python.org/psf/)은 파이썬 패키지 관리자인 [PyPI](https://pypi.org/)를 돕고, [Node.js 재단](https://foundation.nodejs.org/)은 노드 기반 프레임워크인 [Express.js](https://expressjs.com/)를 돕습니다.
