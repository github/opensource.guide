---
lang: ko
title: 오픈소스의 법적 측면
description: 오픈소스의 법적 측면과 당신이 하지 않은 몇가지 사항에 대해 궁금해하는 모든 것입니다.
class: legal
order: 10
image: /assets/images/cards/legal.png
related:
  - contribute
  - leadership
---

## 오픈소스의 법적 함의를 이해하기

세계와 창의적인 작업을 공유하는 것은 흥미롭고 보람있는 경험이 될 수 있습니다. 그것은 또한 당신이 걱정해야 했지만 잘 몰랐던 여러 법적 문제를 의미할 수도 있습니다. 고맙게도 처음부터 다시 시작할 필요는 없습니다. 귀하의 법적 요구 사항이 있습니다. (이 내용을 파기전에, [면책조항](/notices/)을 읽으십시오.)

## 왜 사람들은 오픈소스의 법적 측면에 신경을 많이 쓸까요?

물어봤다는건 다행입니다! 창의적인 작업(작성, 그래픽 또는 코드)을 할 때, 그 저작물은 기본적으로 독점적인 저작권 하에 있습니다. 즉, 법은 귀하를 저작물의 작성자로서 다른 사람들이 할 수 있는 것에 대해 귀하가 말하고 있는 것으로 간주합니다.

일반적으로, 이는 타인이 인계, 훼손 또는 소송의 위험이 없이 작업을 사용, 복사, 배포 또는 수정할 수 없음을 의미합니다.

그러나 오픈소스는 다른 사람들이 작업을 사용, 수정 및 공유하기를 기대하기 때문에 드문 경우입니다. 그러나 법적 기본값은 독점적인 저작권이므로 명시적으로 이러한 사용 권한을 명시한 사용권이 필요합니다.

오픈소스 라이선스를 적용하지 않으면, 프로젝트에 기여한 모든 사람도 자신의 저작물의 독점적인 저작권자가 됩니다. 즉, 아무도 자신의 기여를 사용, 복사, 배포 또는 수정할 수 없으며 "아무도"에서는 귀하를 포함하지 않는다는 의미입니다.

마지막으로, 프로젝트는 사용자가 알지 못하는 라이선스 요구 사항과의 종속성을 가질 수 있습니다. 프로젝트의 커뮤니티 또는 고용주의 정책에 따라 프로젝트에서 특정 오픈소스 라이선스를 사용해야 할 수도 있습니다. 아래에서 이러한 상황을 다룰 것입니다.

## 깃허브의 공개 프로젝트는 오픈소스인가요?

깃허브에서 [새로운 프로젝트를 만들려고](https://help.github.com/articles/creating-a-new-repository/) 할 때, **비공개** 또는 **공개** 저장소로 만드는 옵션을 선택할 수 있습니다.

![Create repository](/assets/images/legal/repo-create-name.png)

**GitHub 프로젝트를 공개하는 것은 프로젝트 라이센싱과 동일하지 않습니다.** 공개 프로젝트는 [GitHub의 서비스 약관](https://docs.github.com/en/site-policy/github-terms/github-terms-of-service#3-ownership-of-content-right-to-post-and-license-grants)에 명시되어 있으며, 다른 사람들이 프로젝트를 보거나 포크할 수는 있지만, 다른 권한은 없습니다.

다른 사람들이 프로젝트를 사용, 복사, 수정 또는 다시 사용할 수 있게 하려면, 오픈소스 라이선스를 포함해야 합니다. 예를 들어, GitHub 프로젝트가 공개되어 있다 하더라도 명시적으로 권한을 부여하지 않는다면, 그 코드의 어느 부분도 사용할 수 없습니다. 

## 너무 기니까 그냥 내 프로젝트를 보호하는 데 필요한 점을 요약해 주세요.

운이 좋았습니다. 오늘날 오픈소스 라이선스는 표준화되어 있고 사용하기 쉽기 때문입니다. 기존 라이선스를 프로젝트에 직접 복사하여 붙여넣을 수 있습니다.

[MIT](https://choosealicense.com/licenses/mit/), [Apache 2.0](https://choosealicense.com/licenses/apache-2.0/), 그리고 [GPLv3](https://choosealicense.com/licenses/gpl-3.0/)는 가장 인기있는 오픈소스 라이선스입니다. 그러나 선택할 수 있는 다른 옵션도 있습니다. [choosealicense.com](https://choosealicense.com/)에서 이러한 라이선스의 전체 텍스트 및 사용 방법에 대한 지침을 찾을 수 있습니다.

GitHub에서 새로운 프로젝트를 만들 때, [라이선스를 추가할 것인지 물어봅니다](https://help.github.com/articles/open-source-licensing/).

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/benbalter?s=180" class="pquote-avatar" alt="avatar">
  A standardized license serves as a proxy for those without legal training to know precisely what they can and can't do with the software. Unless absolutely required, avoid custom, modified, or non-standard terms, which will serve as a barrier to downstream use of the agency code.
  <p markdown="1" class="pquote-credit">
— @benbalter, ["정부 변호인이 오픈소스 소프트웨어&nbsp;라이선스에 대해 알아야할 모든 것"](https://ben.balter.com/2014/10/08/open-source-licensing-for-government-attorneys/)
  </p>
</aside>

## 내 프로젝트에는 어떤 라이선스가 적합할까요?

빈 슬레이트에서 시작한다면, [MIT 라이선스](https://choosealicense.com/licenses/mit/)를 잘못 읽는 것은 어렵습니다. MIT 라이선스는 짧고 이해하기 쉬우며, 저작권 고지를 포함하여 라이선스 사본을 보관하는 한 누구나 모든 것을 할 수 있도록 허락합니다. 필요한 경우 다른 라이선스로 프로젝트를 릴리스 할 수 있습니다.

그렇지 않으면 프로젝트에 적합한 오픈소스 라이선스를 선택하는 것은 목적에 달려 있습니다.

프로젝트에 **의존성**이 있을 가능성이 큽니다. 예를 들어, Node.js 프로젝트를 오픈소스로 사용하는 경우 노드 패키지 관리자(npm)의 라이브러리를 사용할 수 있습니다. 의존하는 각 라이브러리에는 자체 오픈소스 라이선스가 있습니다. 각 라이선스가 "허용"(다운스트림 라이선스의 조건없이 공용 사용, 수정 및 공유할 수 있는 권한 부여)되어 있으면, 원하는 라이선스를 사용할 수 있습니다. 일반적인 허용 라이선스에는 MIT, Apache 2.0, ISC 및 BSD가 포함됩니다.

반대로, 의존하는 라이선스가 "강력한 카피레프트"(동일한 라이선스를 다운스트림으로 사용하는 조건 하에 동일한 권한을 부여하는 경우)인 경우, 프로젝트는 동일한 라이선스를 사용해야 합니다. 일반적인 강력한 카피레프트 라이선스에는 GPLv2, GPLv3 및 AGPLv3이 포함됩니다.

프로젝트를 사용하고 기여할 수 있는 **커뮤니티**를 고려해보십시오:

* **프로젝트를 다른 프로젝트의 종속성으로 사용 하시겠습니까?** 관련 커뮤니티에서 가장 많이 사용되는 라이선스를 사용하는 것이 가장 좋습니다. 예시로, [MIT](https://choosealicense.com/licenses/mit/)는 [npm libraries](https://libraries.io/search?platforms=NPM)에서 가장 인기있는 라이선스입니다.
* **프로젝트를 대기업에 어필하고 싶습니까?** 대기업은 모든 참여자의 명시적인 특허 라이선스를 원할 것입니다. 이 경우, [Apache 2.0](https://choosealicense.com/licenses/apache-2.0/)는 귀하(그리고 그들)을 커버해 줄것 입니다.
* **독점 소스 소프트웨어에 기여를 하고 싶지 않은 기여자에게 프로젝트를 어필하고 싶습니까?** [GPLv3](https://choosealicense.com/licenses/gpl-3.0/) 혹은 (또한 독점 소스 서비스에 기여하지 않으려는 경우) [AGPLv3](https://choosealicense.com/licenses/agpl-3.0/)은 잘될 것입니다.

귀하의 **회사**는 오픈소스 프로젝트에 대한 특정 라이선스 요구 사항을 가지고 있을 수 있습니다. 예를 들어, 회사에서 회사의 독점 소스 제품에서 프로젝트를 사용할 수 있도록 허용 라이선스가 필요할 수 있습니다. 또는 귀사만 독점 소스 소프트웨어에서 프로젝트를 사용할 수 있도록 강력한 카피 레프트 라이선스와 추가 기여자 계약(아래 참조)이 필요할 수 있습니다. 또는 표준, 사회적 책임 또는 투명성과 관련된 특정 요구 사항이 있을 수 있습니다. 이러한 요구 사항에는 특정 라이선스 전략이 필요할 수 있습니다. 귀하의 [회사 법률 부서](#회사의-법무팀은-무엇을-알아야-할까요)에 이야기하십시오.

GitHub에서 새 프로젝트를 만들면, 라이선스를 선택할 수 있는 옵션이 제공됩니다. 위에서 언급한 라이선스 중 하나를 포함하면 GitHub 프로젝트가 오픈소스로 됩니다. 다른 옵션을 보려면 [choosealicense.com](https://choosealicense.com)에서 [소프트웨어가 아닌 프로젝트](https://choosealicense.com/non-software/)에 적합한 라이선스를 찾으십시오.

## 내 프로젝트의 라이선스를 바꾸고 싶다면 어쩌죠?

대부분의 프로젝트는 라이선스를 변경할 필요가 없습니다. 그러나 때때로 상황이 바뀝니다.

예를 들어, 프로젝트가 커짐에 따라 종속성이나 사용자가 추가되거나 회사에서 전략을 변경합니다. 전략 중 하나는 다른 라이선스를 요구하거나 원할 수 있습니다. 또한 처음부터 프로젝트 라이선스를 소홀히 했다면, 라이선스를 추가하는 것은 사실상 라이선스를 변경하는 것과 같습니다. 프로젝트 라이선스를 추가하거나 변경할 때 고려해야 할 세 가지 기본 사항이 있습니다.

**복잡합니다.** 라이선스 호환성 및 규정 준수 여부를 결정하고 저작권을 보유한 사람은 매우 복잡하고 혼란스러울 수 있습니다. 새로운 릴리즈 및 기여용으로 새롭지만 호환되는 라이선스로 전환하는 것은 기존 기여를 모두 재 라이선스하는 것과 다릅니다. 법률팀에 라이선스 변경 희망의 첫 번째 힌트를 포함시키십시오. 프로젝트의 저작권 소유자로부터 라이선스 변경에 대한 허가를 받았거나 취득할 수있는 경우에도 변경 사항이 프로젝트의 다른 사용자 및 제공자에게 미치는 영향을 고려하십시오. 라이선스 변경은 프로젝트의 이해 관계자와 명확한 커뮤니케이션 및 협의를 통해 원활하게 진행될 수 있는 프로젝트의 "거버넌스 이벤트"라고 생각하십시오. 프로젝트를 시작할 때부터 적절한 라이선스를 선택하여 사용하는데는 더 많은 이유가 있습니다!

**프로젝트의 기존 라이선스가 있습니다.** 프로젝트의 기존 라이선스가 변경하려는 라이선스와 호환되는 경우, 새 라이선스를 사용하기만 하면 됩니다. 라이선스 A가 라이선스 B와 호환되면 B의 조건을 준수하면서 A의 조건을 준수하게 됩니다(반대의 경우도 가능). 따라서 현재 MIT와 같은 허가된 라이선스를 사용하고 있다면 MIT 라이선스 사본 및 관련 저작권 고지를 보유하는 한 더 많은 조건으로 라이선스로 변경할 수 있습니다(즉, 계속해서 MIT 라이선스의 최소 조건 준수). 그러나 현재 라이선스가 허용되지 않는 경우(예:카피 레프트 또는 라이선스가 없는 경우), 저작권자가 유일하지 않은 경우, 프로젝트 라이선스를 MIT로 변경할 수 없습니다. 근본적으로 허가된 라이선스로 프로젝트의 저작권 소유자는 라이선스 변경을 사전 허가합니다.

**프로젝트의 기존 저작권 보유자가 있습니다.** 귀하가 프로젝트에 단독으로 기여한 경우, 귀하 또는 귀하의 회사는 프로젝트의 유일한 저작권자입니다. 귀하 또는 귀하의 회사에서 원하는 모든 라이선스를 추가하거나 변경할 수 있습니다. 그렇지 않으면 라이선스를 변경하기 위해 동의해야하는 다른 저작권 소유자가 있을 수 있습니다. 그들은 누구입니까? 프로젝트에 커밋을 한 사람은 시작하기 좋은 곳입니다. 그러나 어떤 경우, 저작권은 해당 사용자의 고용주가 보유하게 됩니다. 어떤 경우에는 사람들이 최소한의 기여를 했을 뿐이지만, 몇 줄의 코드가 저작권의 대상이 되지 않는다는 단호하고 신속한 규칙은 없습니다. 그럼 무엇을 해야합니까? 상대적으로 규모가 작고 젊은 프로젝트의 경우에는, 기존의 모든 기여자가 문제의 라이선스 변경에 동의하거나 이슈 혹은 pull request할 수 있습니다. 크고 수명이 긴 프로젝트의 경우, 많은 기여자와 상속인을 찾아야 할 수도 있습니다. 모질라는 파이어폭스, 썬더버드 및 관련 소프트웨어를 재 라이선스하기 위해 수년(2001-2006)을 보냈습니다.

또는 기여자가 기존 오픈소스 라이선스에서 허용하는 것 이상으로 특정 조건하에서 특정 라이선스 변경 사항에 대해 사전에 동의할 수 있습니다 (추가 기여자 계약 - 아래 참조). 이렇게하면 라이선스 변경의 복잡성이 조금씩 바뀝니다. 변호사의 도움이 더 필요합니다. 라이선스 변경을 수행할 때는, 프로젝트의 이해 관계자와 명확하게 의견을 나눌 수 있습니다.

## 내 프로젝트에 추가 기여자 계약이 필요한가요?

아마도 그렇지 않습니다. 대다수의 오픈소스 프로젝트에서 공개 소스 라이선스는 인바운드(기여자)와 아웃바운드(다른 참여자 및 사용자) 라이선스로 암묵적으로 사용됩니다. 프로젝트가 GitHub에 있는 경우, GitHub 서비스 약관은 "인바운드 = 아웃 바운드" [명시적 기본값](https://help.github.com/en/github/site-policy/github-terms-of-service#6-contributions-under-repository-license)으로 지정합니다.

기여자 라이선스 계약(CLA)이라고도 부르는 추가 기여자 계약은 프로젝트 메인테이너를 위한 관리 작업을 생성할 수 있습니다. 계약서에 얼마나 많은 작업을 추가할지는 프로젝트와 구현에 달려 있습니다. 간단한 동의는 프로젝트 참여자가 프로젝트 오픈소스 라이선스 하에 기여할 수 있는 권리를 클릭으로 확인해야 할 수도 있습니다. 보다 복잡한 합의는 법적 검토와 기여자 고용주의 서명을 요구할 수 있습니다.

또한 일부 사람들은 불필요하거나 이해하기 힘들거나 불공정하다고 생각되는 "서류 작업"을 추가함으로써 (계약 수령자가 프로젝트 참여자보다 더 많은 권리를 얻거나 일반인이 프로젝트의 오픈소스 라이선스를 통해 수행 할 때) 추가 기여자 계약이 프로젝트의 커뮤니티에 비우호적이라고 인식될 수 있습니다.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/bcantrill?s=180" class="pquote-avatar" alt="avatar">
    We have eliminated the CLA for Node.js. Doing this lowers the barrier to entry for Node.js contributors thereby broadening the contributor base.
  <p markdown="1" class="pquote-credit">
— @bcantrill, ["Node.js 기여 확대"](https://www.tritondatacenter.com/blog/broadening-node-js-contributions)
  </p>
</aside>

프로젝트에 대한 추가 기여자 계약을 고려할 수 있는 몇 가지 상황은 다음과 같습니다:

* 변호사는 기여자가 오픈소스 라이선스 자체가 충분하지 않다고 생각하기 때문에 모든 기여자가 기여 조항을 명시적으로 (_sign_, 온라인 또는 오프라인) 받아들이기를 원합니다. 이것이 유일한 관심사라면, 프로젝트의 오픈소스 라이선스를 인정하는 기여자 계약만으로 충분할 것입니다. [jQuery Individual Contributor License Agreement](https://web.archive.org/web/20161013062112/http://contribute.jquery.org/CLA/)는 경량 추가 제공자 계약의 좋은 예입니다. 일부 프로젝트의 경우, [개발자 인증서 발급](https://github.com/probot/dco)을 사용할 수 있습니다.
* 귀하의 프로젝트는 익스프레스 특허 부여 (MIT 등)가 포함되지 않은 오픈소스 라이선스를 사용하며, 모든 기여자의 특허 허여가 필요합니다. 그 중 일부는 귀하를 타겟으로 삼을 수 있는 대규모 특허 포트폴리오를 보유한 회사 또는 프로젝트의 다른 참여자 및 사용자가 사용할 수 있습니다. [Apache Individual Contributor License Agreement](https://www.apache.org/licenses/icla.pdf)는 일반적으로 사용되는 추가 기여자 계약으로 Apache License 2.0에서 발견된 특허권 부여를 미러링합니다.
* 프로젝트에 카피레프트 라이선스가 있지만, 프로젝트의 독점 버전을 배포해야 합니다. 모든 저작권자가 저작권을 양도하거나 관할권을 부여할 수 있는 허가권을 사용자에게 부여해야합니다. [MongoDB Contributor Agreement](https://www.mongodb.com/legal/contributor-agreement)는 이러한 유형의 계약입니다.
* 평생동안 프로젝트를 변경하고 기여자가 그러한 변경 사항에 동의하기를 원한다고 생각하십시오.

프로젝트에 기여자 계약을 추가로 사용해야하는 경우 기여자 산만을 최소화하기 위해 [CLA 어시스턴트](https://github.com/cla-assistant/cla-assistant)와 같은 통합 사용을 고려하십시오.

## 회사의 법무팀은 무엇을 알아야 할까요?

오픈소스 프로젝트를 회사 직원으로 공개하는 경우, 먼저 법률팀이 오픈소스 프로젝트임을 알고 있어야 합니다.

더 좋든 나쁘든, 개인 프로젝트일지라도 알려주도록 하십시오. 특히 회사의 비즈니스와 관련이 있거나 프로젝트를 개발하기 위해 회사 자원을 사용하는 경우, 프로젝트 관리를 제공하는 회사와 "직원 IP 계약"을 체결했을 수도 있습니다. 귀사는 귀사에게 쉽게 허가권을 부여해야하며, 직원 친화적인 IP 계약 또는 회사 방침을 이미 거쳐야 할 수도 있습니다. 그렇지 않은 경우, 협상을 통해 (예 : 프로젝트가 회사의 전문 학습 및 개발 목표를 제공한다고 설명), 또는 더 나은 회사를 찾을 때까지 프로젝트 작업을 하지 않을 수 있습니다.

**당신이 회사를 위해 프로젝트를 오픈소스화하고 있다면,** 분명히 알려주십시오. 법무팀은 이미 귀사의 비즈니스 요구 사항 및 전문성을 토대로 프로젝트가 종속성의 라이선스를 준수하는지 확인하기 위해 오픈 소스 라이선스 (및 추가로 제공되는 계약자 계약)에 대한 정책을 이미 가지고 있습니다. 그렇지 않다면, 당신과 그들은 운에 따라야 합니다! 귀하의 법률팀은 당신과 함께 이 일을 이해하기 위해 열심히 노력해야 합니다. 생각해야될 몇 가지 사항이 있습니다:

* **서드파티 부속** 프로젝트에 다른 사람이 만든 종속성이 있거나 다른 사람의 코드를 포함하거나 사용합니까? 오픈소스인 경우, 자료의 오픈소스 라이선스를 준수해야합니다. 먼저 타사 오픈소스 라이선스 (위 참조)와 함께 작동하는 라이선스를 선택하십시오. 프로젝트가 제 3자 오픈소스 자료를 수정 또는 배포하는 경우, 법률팀은 저작권 침해와 같은 제 3자 오픈소스 라이선스의 다른 조건을 충족하고 있음을 알고 싶어합니다. 프로젝트에서 오픈소스 라이선스가 없는 다른 사용자의 코드를 사용하는 경우, 타사 관리자에게 [오픈소스 라이선스 추가](https://choosealicense.com/no-license/#for-users)를 요청해야합니다. 얻을 수 없다면 프로젝트에서 코드 사용을 중단하십시오.

* **영업 기밀:** 프로젝트에서 회사가 일반 대중에게 공개하기를 원하지 않는 것이 있는지 여부를 고려하십시오. 그렇다면 비공개로 유지하려는 자료를 추출한 후, 프로젝트의 나머지 부분을 소스로 열 수 있습니다.

* **특허:** 귀하의 회사가 귀하의 프로젝트를 [공개](https://en.wikipedia.org/wiki/Public_disclosure)하여 특허를 신청할 계획입니까? 안타깝게도, 기다려달라는 요청을 받을 수 있습니다 (또는 회사에서 애플리케이션의 지혜를 재고 할 수도 있음). 대규모 특허 포트폴리오를 보유한 회사의 직원으로부터 프로젝트에 대한 기여가 기대되는 경우, 법무팀은 기여자(Apache 2.0 또는 GPLv3 등)의 명시적인 특허 지원 또는 추가 기부자 동의서를 사용하여 라이선스를 사용하기를 원할 수 있습니다(위 참조).

* **상표:** 프로젝트 이름이 [기존 상표와 충돌하지 않는지](../starting-a-project/#이름-중복-피하기) 다시 확인하십시오. 만약 프로젝트에서 자신의 회사 상표를 사용하는 경우에 충돌이 발생하지 않는지도 확인하십시오. [FOSSmarks](http://fossmarks.org/)는 무료 및 오픈소스 프로젝트의 맥락에서 상표를 이해하는 실질적인 가이드입니다.

* **개인 정보:** 프로젝트가 사용자에 대한 데이터를 수집합니까? 법률팀은 회사 정책 및 외부 규정을 준수하도록 도울 수 있습니다.

만약 회사의 첫번째 오픈소스 프로젝트를 릴리스하는 경우, 위의 내용만으로도 충분합니다 (걱정하지 마십시오. 대부분의 프로젝트가 큰 우려를 제기해서는 안됩니다).

장기적으로, 법률팀은 오픈소스에 대한 참여를 통해 더 많은 것을 얻고, 안전을 유지할 수 있도록 더 많은 일을 할 수 있습니다:

* **직원 기여 정책:** 직원이 오픈소스 프로젝트에 기여하는 방법을 지정하는 기업 정책을 개발하는 것을 고려하십시오. 분명한 정책은 직원들 사이의 혼란을 줄이고 작업의 일부 또는 자유 시간에 상관없이, 회사의 이익을 최대한 활용하여 오픈소스 프로젝트에 기여할 수 있도록 지원합니다. 좋은 예시는 Rackspace의 [모델 IP 및 오픈소스 기여 정책](https://processmechanics.com/2015/07/23/a-model-ip-and-open-source-contribution-policy/)입니다.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/vanl?s=180" class="pquote-avatar" alt="avatar">
  Letting out the IP associated with a patch builds the employee's knowledge base and reputation. It shows that the company is invested in the development of that employee and creates a sense of empowerment and autonomy. All of these benefits also lead to higher morale and better employee retention.
  <p markdown="1" class="pquote-credit">
— @vanl, ["모델 IP 및 공개 소스 기여 정책"](https://processmechanics.com/2015/07/23/a-model-ip-and-open-source-contribution-policy/)
  </p>
</aside>

* **공개 할 내용:** [(거의) 다?](http://tom.preston-werner.com/2011/11/22/open-source-everything.html) 귀하의 법무팀이 귀하의 회사 오픈소스 전략을 이해하고 투자한다면, 귀하의 노력을 방해하는 것보다 최선을 다 할 수 있습니다.
* **준수:** 회사가 오픈소스 프로젝트를 공개하지 않더라도, 다른 회사의 오픈 소스 소프트웨어를 사용합니다. [Awareness and process](https://www.linuxfoundation.org/blog/blog/why-companies-that-use-open-source-need-a-compliance-program/)는 두통, 제품 지연 및 법적 소송을 예방할 수 있습니다.

<aside markdown="1" class="pquote">
  Organizations must have a license and compliance strategy in place that fits both \["permissive" and "copyleft"\] categories. This begins with keeping a record of the licensing terms that apply to the open source software you’re using — including subcomponents and dependencies.
  <p markdown="1" class="pquote-credit">
— Heather Meeker, ["오픈소스 소프트웨어 : 규정 준수 기본 사항 및 모범 사례"](https://techcrunch.com/2012/12/14/open-source-software-compliance-basics-and-best-practices/)
  </p>
</aside>

* **특허:** 귀사는 회원사의 주요 오픈소스 프로젝트 사용을 보호하거나 다른 대체 특허 라이센싱을 모색하기 위해, [Open Invention Network](http://www.openinventionnetwork.com/)에 가입 할 수 있습니다.
* **가버넌스:** 특히 프로젝트를 [회사 외부의 법인](../leadership-and-governance/#제-프로젝트를-지원하려면-법인이-필요한가요)으로 옮기는 것이 이치에 맞을 경우에 할 수 있습니다.
