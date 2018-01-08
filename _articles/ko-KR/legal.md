---
locale: ko-KR
title: 오픈소스의 법적 측면
description: 오픈소스의 법적 측면과 당신이 하지 않은 몇가지 사항에 대해 궁금해하는 모든 것입니다.
class: legal
toc:
  why-do-people-care-so-much-about-the-legal-side-of-open-source: "왜 사람들은 오픈소스의 법적 측면에 많은 관심을 보이고 있습니까?"
  are-public-github-projects-open-source: "공개 GitHub 프로젝트는 오픈소스입니까?"
  just-give-me-the-tldr-on-what-i-need-to-protect-my-project: "내 프로젝트를 보호하기 위해 필요한 DR;TL 제공해주기"
  which-open-source-license-is-appropriate-for-my-project: "내 프로젝트에 적합한 오픈소스 라이선스는 무엇입니까?"
  what-if-i-want-to-change-the-license-of-my-project: "프로젝트 라이선스를 변경하려면 어떻게해야합니까?"
  does-my-project-need-an-additional-contributor-agreement: "내 프로젝트에 추가 기여자 계약이 필요합니까?"
  what-does-my-companys-legal-team-need-to-know: "우리 회사의 법률 팀은 무엇을 알아야합니까?"
order: 10
image: /assets/images/cards/legal.png
related:
  - contribute
  - leadership
---

## 오픈소스의 법적 영향에 대한 이해

세계와 창의적인 작업을 공유하는 것은 흥미롭고 보람있는 경험이 될 수 있습니다. 그것은 또한 당신이 모른다고 걱정해야한다는 것을 합법적이라는 걸로 의미 할 수 있습니다. 고맙게도 처음부터 다시 시작할 필요는 없습니다. 귀하의 법적 요구 사항이 있습니다. (이 내용을 파기전에, [면책조항](../notices/)을 읽으십시오.)

## 왜 사람들은 오픈소스의 법적 측면에 많은 관심을 보이고 있습니까?

물어봤다는건 다행입니다! 창의적인 작업(작성, 그래픽 또는 코드)을 할 때, 그 저작물은 기본적으로 독점적인 저작권하에 있습니다. 즉, 법은 귀하의 저작물의 작성자로서 다른 사람들이 할 수 있는 것에 대해 귀하가 말하고있는 것으로 간주합니다.

일반적으로, 이는 타인이 인계, 훼손 또는 소송의 위험이 없이 작업을 사용, 복사, 배포 또는 수정할 수 있음을 의미합니다.

그러나 오픈소스는 다른 사람들이 작업을 사용, 수정 및 공유하기를 기대하기 때문에 드문 경우입니다. 그러나 법적 기본값은 독점적인 저작권이므로 명시적으로 이러한 사용 권한을 명시한 사용권이 필요합니다.

오픈소스 라이선스를 신청하지 않으면, 프로젝트에 기여한 모든 사람도 자신의 저작물의 독점적인 저작권자가 됩니다. 즉, 아무도 자신의 기여를 사용, 복사, 배포 또는 수정할 수 없으며 "아무도"에서는 귀하를 포함하지 않는다는 의미입니다.

마지막으로, 프로젝트는 사용자가 알지 못하는 라이선스 요구 사항과의 종속성을 가질 수 있습니다. 프로젝트의 커뮤니티 또는 고용주의 정책에 따라 프로젝트에서 특정 오픈소스 라이선스를 사용해야 할 수도 있습니다. 아래에서 이러한 상황을 다룰 것입니다.

## 공개 GitHub 프로젝트는 오픈소스입니까?

깃허브에서 [새로운 프로젝트를 만들려고](https://help.github.com/articles/creating-a-new-repository/) 할 때, **비공개** 또는 **공개** 저장소로 만드는 옵션을 선택할 수 있습니다.

![Create repository](/assets/images/legal/repo-create-name.png)

**GitHub 프로젝트를 공개하는 것은 프로젝트 라이센싱과 동일하지 않습니다.** 공개 프로젝트는 [GitHub의 서비스 약관](https://help.github.com/articles/github-terms-of-service/#f-copyright-and-content-ownership)에 명시되어 있으며, 다른 사람들이 프로젝트를 포크화할 수는 있지만, 그렇지 않은 경우에는 권한이 없습니다.

다른 사람들이 프로젝트를 사용, 복사, 수정 또는 다시 사용할 수 있게하려면, 오픈소스 라이선스를 포함해야합니다. 예를 들어, 권한을 부여하지 않는다는 조건에서는 공개적으로 GitHub 프로젝트의 일부를 코드에 명시적으로 사용할 수는 없습니다.

## 내 프로젝트를 보호하기 위해 필요한 DR;TL 제공해주기.

운이 좋았습니다. 오늘날 오픈소스 라이선스는 표준화되어 있고 사용하기 쉽기 때문입니다. 기존 라이선스를 프로젝트에 직접 복사하여 붙여넣을 수 있습니다.

[MIT](https://choosealicense.com/licenses/mit/), [Apache 2.0](https://choosealicense.com/licenses/apache-2.0/), 그리고 [GPLv3](https://choosealicense.com/licenses/gpl-3.0/)는 가장 인기있는 오픈소스 라이선스입니다, 그러나 선택할 수 있는 다른 옵션도 있습니다. [choosealicense.com](https://choosealicense.com/)에서 이러한 라이선스의 전체 텍스트 및 사용 방법에 대한 지침을 찾을 수 있습니다.

GitHub에서 새로운 프로젝트를 만들 때, [라이선스를 추가할 것인지 물어봅니다](https://help.github.com/articles/open-source-licensing/).

<aside markdown="1" class="pquote">
  <img src="https://avatars2.githubusercontent.com/u/282759?v=3&s=400" class="pquote-avatar" alt="avatar">
  A standardized license serves as a proxy for those without legal training to know precisely what they can and can't do with the software. Unless absolutely required, avoid custom, modified, or non-standard terms, which will serve as a barrier to downstream use of the agency code.
  <p markdown="1" class="pquote-credit">
— @benbalter, ["정부 변호인이 오픈소스 소프트웨어&nbsp;라이선스에 대해 알아야할 모든 것"](http://ben.balter.com/2014/10/08/open-source-licensing-for-government-attorneys/)
  </p>
</aside>

## 내 프로젝트에 적합한 오픈소스 라이선스는 무엇입니까?

빈 슬레이트에서 시작한다면, [MIT 라이선스](https://choosealicense.com/licenses/mit/)를 잘못 읽는 것은 어렵습니다. 짧고 이해하기 쉽기 때문에 저작권 고지를 포함하여 라이선스 사본을 보관하는 한 누구나 아무 것도 할 수 없습니다. 필요한 경우 다른 라이선스로 프로젝트를 릴리스 할 수 있습니다.

그렇지 않으면 프로젝트에 적합한 오픈소스 라이선스를 선택하는 것이 목표에 달려 있습니다.

프로젝트에 **의존성**이 있을 가능성이 큽니다. 예를 들어, Node.js 프로젝트를 오픈소스로 사용하는 경우 노드 패키지 관리자(npm)의 라이브러리를 사용할 수 있습니다. 의존하는 각 라이브러리에는 자체 오픈소스 라이선스가 있습니다. 각 라이선스가 "허용"(다운스트림 라이선스의 조건없이 공용 사용, 수정 및 공유할 수 있는 권한 부여)되어 있으면, 원하는 라이선스를 사용할 수 있습니다. 일반적인 허용 라이선스에는 MIT, Apache 2.0, ISC 및 BSD가 포함됩니다.

반대로, 종속성 라이선스가 "강력한 카피레프트"(동일한 라이선스를 다운스트림으로 사용하는 조건하에 공개 권한을 부여하는 경우)인 경우, 프로젝트는 동일한 라이선스를 사용해야 합니다. 일반적인 강력한 카피레프트 라이선스에는 GPLv2, GPLv3 및 AGPLv3이 포함됩니다.

프로젝트를 사용하고 기여할 수 있는 **커뮤니티**를 고려해보십시오:

* **프로젝트를 다른 프로젝트의 종속성으로 사용 하시겠습니까?** 관련 커뮤니티에서 가장 많이 사용되는 라이선스를 사용하는 것이 가장 좋습니다. 예시로, [MIT](https://choosealicense.com/licenses/mit/)는 [npm libraries](https://libraries.io/npm)에서 가장 인기있는 라이선스입니다.
* **프로젝트를 대기업에 어필하고 싶습니까?** 대기업은 모든 참여자의 명시적인 특허 라이선스를 원할 것입니다. 이 경우, [Apache 2.0](https://choosealicense.com/licenses/apache-2.0/)는 귀하(그리고 그들)을 커버해 줄것 입니다.
* **독점 소스 소프트웨어에서 기여를 사용하고 싶지 않은 기여자에게 프로젝트를 어필하고 싶습니까?** [GPLv3](https://choosealicense.com/licenses/gpl-3.0/) 혹은 (또한 독점 소스 서비스에 기여하지 않으려는 경우) [AGPLv3](https://choosealicense.com/licenses/agpl-3.0/)은 잘될 것 입니다.

귀하의 **회사**는 오픈소스 프로젝트에 대한 특정 라이선스 요구 사항을 가지고 있을 수 있습니다. 예를 들어, 회사에서 회사의 독점 소스 제품에서 프로젝트를 사용할 수 있도록 허용 라이선스가 필요할 수 있습니다. 또는 귀사만 독점 소스 소프트웨어에서 프로젝트를 사용할 수 있도록 강력한 카피 레프트 라이선스와 추가 기여자 계약(아래 참조)이 필요할 수 있습니다. 또는 표준, 사회적 책임 또는 투명성과 관련된 특정 요구 사항이 있을 수 있습니다. 이러한 요구 사항에는 특정 라이선스 전략이 필요할 수 있습니다. 귀하의 [회사 법률 부서](#what-does-my-companys-legal-team-need-to-know)에 이야기하십시오.

GitHub에서 새 프로젝트를 만들면, 라이선스를 선택할 수 있는 옵션이 제공됩니다. 위에서 언급한 라이선스 중 하나를 포함하면 GitHub 프로젝트가 오픈소스로 됩니다. 다른 옵션을 보려면 [choosealicense.com](https://choosealicense.com)에서 [소프트웨어가 아닌 프로젝트](https://choosealicense.com/non-software/)에 적합한 라이선스를 찾으십시오.

## 프로젝트 라이선스를 변경하려면 어떻게해야합니까?

대부분의 프로젝트는 라이선스를 변경할 필요가 없습니다. 그러나 때때로 상황이 바뀝니다.

예를 들어, 프로젝트가 커짐에 따라 종속성이나 사용자가 추가되거나 회사에서 전략을 변경합니다. 전략 중 하나는 다른 라이선스를 요구하거나 원할 수 있습니다. 또한 처음부터 프로젝트 라이선스를 소홀히했다면, 라이선스를 추가하는 것은 사실상 라이선스를 변경하는 것과 같습니다. 프로젝트 라이선스를 추가하거나 변경할 때 고려해야 할 세 가지 기본 사항이 있습니다.

**복잡합니다.** 라이선스 호환성 및 규정 준수 여부를 결정하고 저작권을 보유한 사람은 매우 복잡하고 혼란스러울 수 있습니다. 새로운 릴리즈 및 기여용으로 새롭지만 호환되는 라이선스로 전환하는 것은 기존 기여를 모두 재 라이선스하는 것과 다릅니다. 법률팀에 라이선스 변경 희망의 첫 번째 힌트를 포함시키십시오. 프로젝트의 저작권 소유자로부터 라이선스 변경에 대한 허가를 받았거나 취득할 수있는 경우에도 변경 사항이 프로젝트의 다른 사용자 및 제공자에게 미치는 영향을 고려하십시오. 라이선스 변경은 프로젝트의 이해 관계자와 명확한 커뮤니케이션 및 협의를 통해 원활하게 진행될 수 있는 프로젝트의 "거버넌스 이벤트"라고 생각하십시오. 프로젝트를 시작할 때부터 적절한 라이선스를 선택하여 사용하는 더 많은 이유가 있습니다!

**프로젝트의 기존 라이선스가 있습니다.** 프로젝트의 기존 라이선스가 변경하려는 라이선스와 호환되는 경우, 새 라이선스를 사용하기만 하면됩니다. 라이선스 A가 라이선스 B와 호환되면 B의 조건을 준수하면서 A의 조건을 준수하게됩니다(반대의 경우도 가능). 따라서 현재 MIT와 같은 허가된 라이선스를 사용하고 있다면 MIT 라이선스 사본 및 관련 저작권 고지를 보유하는 한 더 많은 조건으로 라이선스로 변경할 수 있습니다(즉, 계속해서 MIT 라이선스의 최소 조건 준수). 그러나 현재 라이선스가 허용되지 않는 경우(예:카피 레프트 또는 라이선스가 없는 경우), 저작권자가 유일하지 않은 경우, 프로젝트 라이선스를 MIT로 변경할 수 없습니다. 근본적으로 허가된 라이선스로 프로젝트의 저작권 소유자는 라이선스 변경을 사전 허가합니다.

**프로젝트의 기존 저작권 보유자가 있습니다.** 귀하가 프로젝트에 단독으로 기여한 경우, 귀하 또는 귀하의 회사는 프로젝트의 유일한 저작권자입니다. 귀하 또는 귀하의 회사에서 원하는 모든 라이선스를 추가하거나 변경할 수 있습니다. 그렇지 않으면 라이선스를 변경하기 위해 동의해야하는 다른 저작권 소유자가 있을 수 있습니다. 그들은 누구입니까? 프로젝트에 커밋을 한 사람은 시작하기 좋은 곳입니다. 그러나 어떤 경우, 저작권은 해당 사용자의 고용주가 보유하게됩니다. 어떤 경우에는 사람들이 최소한의 기여를 했을 뿐이지만, 몇 줄의 코드가 저작권의 대상이 되지않는다는 단호하고 신속한 규칙은 없습니다. 그럼 무엇을 해야합니까? 상대적으로 규모가 작고 젊은 프로젝트의 경우에는, 기존의 모든 기여자가 문제의 라이선스 변경에 동의하거나 이슈 혹은 pull request할 수 있습니다. 크고 수명이 긴 프로젝트의 경우, 많은 기여가와 소유인을 찾아야 할 수도 있습니다. 모질라는 파이어폭스, 썬더버드 및 관련 소프트웨어를 재 라이선스하기 위해 수년(2001-2006)을 보냈습니다.

또는 기여자가 기존 오픈소스 라이선스에서 허용하는 것 이상으로 특정 조건하에서 특정 라이선스 변경 사항에 대해 사전에 동의할 수 있습니다 (추가 기여자 계약 - 아래 참조). 이렇게하면 라이선스 변경의 복잡성이 조금씩 바뀝니다. 변호사의 도움이 더 필요합니다. 라이선스 변경을 수행할 때는, 프로젝트의 이해 관계자와 명확하게 의견을 나눌 수 있습니다.

## 내 프로젝트에 추가 기여자 계약이 필요합니까?

아마도 그렇지 않습니다. 대다수의 오픈소스 프로젝트에서 공개 소스 라이선스는 인바운드(기여자)와 아웃바운드(다른 참여자 및 사용자) 라이선스로 암묵적으로 사용됩니다. 프로젝트가 GitHub에 있는 경우, GitHub 서비스 약관은 "인바운드 = 아웃 바운드"[명시적 기본값](https://help.github.com/articles/github-terms-of-service/#6-contributions-under-repository-license)로 지정합니다.

기여자 라이선스 계약(CLA)이라고도 부르는 추가 기여자 계약은 프로젝트 메인테이너를 위한 관리 작업을 생성할 수 있습니다. 계약서에 얼마나 많은 작업을 추가할지는 프로젝트와 구현에 달려 있습니다. 간단한 동의는 프로젝트 참여자가 프로젝트 오픈소스 라이선스하에 기여할 수 있는 권리를 클릭으로 확인해야 할 수도 있습니다. 보다 복잡한 합의는 법적 검토와 기여자 고용주의 서명을 요구할 수 있습니다.

또한 일부 사람들은 불필요하거나 이해하기 힘들거나 불공정하다고 생각되는 "서류 작업"을 추가함으로써 (계약 수령자가 프로젝트 참여자보다 더 많은 권리를 얻거나 일반인이 프로젝트의 오픈소스 라이선스를 통해 수행 할 때) 추가 기여자 계약이  프로젝트의 커뮤니티에 비우호적이라고 인식될 수 있습니다.

<aside markdown="1" class="pquote">
  <img src="https://avatars1.githubusercontent.com/u/328614?v=3&s=460" class="pquote-avatar" alt="avatar">
    We have eliminated the CLA for Node.js. Doing this lowers the barrier to entry for Node.js contributors thereby broadening the contributor base.
  <p markdown="1" class="pquote-credit">
— @bcantrill, ["Node.js 기여 확대"](https://www.joyent.com/blog/broadening-node-js-contributions)
  </p>
</aside>

프로젝트에 대한 추가 기여자 계약을 고려할 수 있는 몇 가지 상황은 다음과 같습니다:

* 변호사는 기여자가 오픈소스 라이선스 자체가 충분하지 않다고 생각하기 때문에 모든 기여자가 기여 조항을 명시적으로 (_sign_, 온라인 또는 오프라인) 받아들이기를 원합니다. 이것이 유일한 관심사라면, 프로젝트의 오픈소스 라이선스를 인정하는 기여자 계약만으로 충분할 것입니다. [jQuery Individual Contributor License Agreement](https://contribute.jquery.org/CLA/)는 경량 추가 제공자 계약의 좋은 예입니다. 일부 프로젝트의 경우, [개발자 인증서 발급](https://github.com/probot/dco)을 사용할 수 있습니다.
* 귀하의 프로젝트는 익스프레스 특허 부여 (MIT 등)가 포함되지 않은 오픈소스 라이선스를 사용하며, 모든 기여자의 특허 보조금이 필요합니다. 그 중 일부는 귀하를 타겟으로 삼을 수있는 대규모 특허 포트폴리오를 보유한 회사 또는 프로젝트의 다른 참여자 및 사용자에서 사용할 수 있습니다. [Apache Individual Contributor License Agreement](https://www.apache.org/licenses/icla.pdf)는 일반적으로 사용되는 추가 기여자 계약으로 Apache License 2.0에서 발견된 특허권 부여를 미러링합니다.
* 프로젝트에 카피레프트 라이선스가 있지만, 프로젝트의 독점 버전을 배포해야합니다. 모든 저작자가 저작권을 양도하거나 관할권을 부여할 수 있는 허가권을 사용자에게 부여해야합니다. [MongoDB Contributor Agreement](https://www.mongodb.com/legal/contributor-agreement)는 이러한 유형의 계약입니다.
* 평생동안 프로젝트를 변경하고 기여자가 그러한 변경 사항에 동의하기를 원한다고 생각하십시오.

프로젝트에 기여자 계약을 추가로 사용해야하는 경우 기여자 산만을 최소화하기 위해 [CLA 어시스턴트](https://github.com/cla-assistant/cla-assistant)와 같은 통합 사용을 고려하십시오.

## 우리 회사의 법률 팀은 무엇을 알아야합니까?

오픈소스 프로젝트를 회사 직원으로 공개하는 경우, 먼저 법률팀이 오픈소스 프로젝트임을 알고 있어야합니다.

더 좋든 나쁘든, 개인 프로젝트일지라도 알려주도록하십시오. 특히 회사의 비즈니스와 관련이 있거나 프로젝트를 개발하기 위해 회사 자원을 사용하는 경우, 프로젝트 관리를 제공하는 회사와 "직원 IP 계약"을 체결했을 수도 있습니다. 귀사는 귀사에게 쉽게 허가권을 부여해야하며, 직원 친화적인 IP 계약 또는 회사 방침을 이미 거쳐야 할 수도 있습니다. 그렇지 않은 경우, 협상을 통해 (예 : 프로젝트가 회사의 전문 학습 및 개발 목표를 제공한다고 설명), 또는 더 나은 회사를 찾을 때까지 프로젝트 작업을 하지 않을 수 있습니다.

**당신이 회사를 위해 프로젝트를 오픈소스화하고 있다면,** 분명히 알려주십시오. 법무팀은 이미 귀사의 비즈니스 요구 사항 및 전문성을 토대로 프로젝트가 종속성의 라이센스를 준수하는지 확인하기 위해 오픈 소스 라이센스 (및 추가로 제공되는 계약자 계약)에 대한 정책을 이미 가지고 있습니다. 그렇지 않다면, 당신과 그들은 운에 따라야 합니다! 귀하의 법률팀은 당신과 함께 이 일을 이해하기 위해 열심히 노력해야 합니다. 생각해야될 몇 가지 사항이 있습니다:

* **서드파티 부속** Does your project have dependencies created by others or otherwise include or use others' code? If these are open source, you'll need to comply with the materials' open source licenses. That starts with choosing a license that works with the third party open source licenses (see above). If your project modifies or distributes third party open source material, then your legal team will also want to know that you're meeting other conditions of the third party open source licenses such as retaining copyright notices. If your project uses others' code that doesn't have an open source license, you'll probably have to ask the third party maintainers to [add an open source license](https://choosealicense.com/no-license/#for-users), and if you can't get one, stop using their code in your project.

* **영업 기밀:** Consider whether there is anything in the project that the company does not want to make available to the general public. If so, you could open source the rest of your project, after extracting the material you want to keep private.

* **특허:** Is your company applying for a patent of which open sourcing your project would constitute [public disclosure](https://en.wikipedia.org/wiki/Public_disclosure)? Sadly, you might be asked to wait (or maybe the company will reconsider the wisdom of the application). If you're expecting contributions to your project from employees of companies with large patent portfolios, your legal team may want you to use a license with an express patent grant from contributors (such as Apache 2.0 or GPLv3), or an additional contributor agreement (see above).

* **상표:** Double check that your project's name [does not conflict with any existing trademarks](../starting-a-project/#avoiding-name-conflicts). If you use your own company trademarks in the project, check that it does not cause any conflicts. [FOSSmarks](http://fossmarks.org/) is a practical guide to understanding trademarks in the context of free and open source projects.

* **개인 정보:** Does your project collect data on users? "Phone home" to company servers? Your legal team can help you comply with company policies and external regulations.

If you're releasing your company's first open source project, the above is more than enough to get through (but don't worry, most projects shouldn't raise any major concerns).

Longer term, your legal team can do more to help the company get more from its involvement in open source, and stay safe:

* **직원 기여 정책:** Consider developing a corporate policy that specifies how your employees contribute to open source projects. A clear policy will reduce confusion among your employees and help them contribute to open source projects in the company's best interest, whether as part of their jobs or in their free time. A good example is Rackspace's [Model IP and Open Source Contribution Policy](https://processmechanics.com/2015/07/22/a-model-ip-and-open-source-contribution-policy/).

<aside markdown="1" class="pquote">
  <img src="https://avatars3.githubusercontent.com/u/214698?v=3&s=400" class="pquote-avatar" alt="avatar">
  Letting out the IP associated with a patch builds the employee's knowledge base and reputation. It shows that the company is invested in the development of that employee and creates a sense of empowerment and autonomy. All of these benefits also lead to higher morale and better employee retention.
  <p markdown="1" class="pquote-credit">
— @vanl, ["모델 IP 및 공개 소스 기여 정책"](https://processmechanics.com/2015/07/22/a-model-ip-and-open-source-contribution-policy/)
  </p>
</aside>

* **공개 할 내용:** [(Almost) everything?](http://tom.preston-werner.com/2011/11/22/open-source-everything.html) If your legal team understands and is invested in your company's open source strategy, they'll be best able to help rather than hinder your efforts.
* **Compliance:** Even if your company doesn't release any open source projects, it uses others' open source software. [Awareness and process](https://www.linux.com/blog/why-companies-use-open-source-need-compliance-program) can prevent headaches, product delays, and lawsuits.

<aside markdown="1" class="pquote">
  Organizations must have a license and compliance strategy in place that fits both \["permissive" and "copyleft"\] categories. This begins with keeping a record of the licensing terms that apply to the open source software you’re using — including subcomponents and dependencies.
  <p markdown="1" class="pquote-credit">
— Heather Meeker, ["오픈소스 소프트웨어 : 규정 준수 기본 사항 및 모범 사례"](https://techcrunch.com/2012/12/14/open-source-software-compliance-basics-and-best-practices/)
  </p>
</aside>

* **Patents:** Your company may wish to join the [Open Invention Network](http://www.openinventionnetwork.com/), a shared defensive patent pool to protect members' use of major open source projects, or explore other [alternative patent licensing](https://www.eff.org/document/hacking-patent-system-2016).
* **Governance:** Especially if and when it makes sense to move a project to a [legal entity outside of the company](../leadership-and-governance/#do-i-need-a-legal-entity-to-support-my-project).
