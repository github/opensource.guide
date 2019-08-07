---
lang: ko
title: 오픈소스 프로젝트 시작하기
description: 오픈소스의 세계에 대해 자세히 알아보고 자신만의 프로젝트를 시작할 준비를 하십시오.
class: beginners
order: 2
image: /assets/images/cards/beginner.png
related:
  - finding
  - building
---

## The "what" and "why" of open source

따라서 오픈소스를 시작하는 것에 대해 생각하고 있습니까? 축하합니다! 세상은 당신의 기여를 높이 평가합니다. 오픈소스란 무엇이며, 왜 사람들이 그렇게하는지 이야기해 봅시다.

### "오픈소스"란 무엇을 의미합니까?

즉 **누구나 프로젝트를 보고, 사용하고, 수정하고, 배포 할 수 있습니다.** 이러한 권한은 [오픈소스 라이선스](https://opensource.org/licenses)를 통해 시행됩니다.

오픈소스는 채택의 장벽을 낮추어 아이디어가 빠르게 확산될 수 있기 때문에 강력합니다.

그것이 어떻게 작동하는지 이해하려면, 친구가 potluck을 가지고 있다고 상상해보고, 체리 파이를 가지고 오십시오.

* 모두가 파이를 먹습니다 (_사용_)
* 파이가 히트를 쳤습니다! 그들은 당신에게 파이 제조법을 묻습니다 (_보기_)
* 한 친구인, 제과점 주방장 Alex는 설탕을 줄이는 것이 좋다고 조언합니다 (_수정_)
* 다른 친구인, Lisa는 다음 주 저녁 식사에 그것을 사용할 것을 요청합니다 (_배포_)

비교해 보면, 독점 소스 과정은 식당에 가서 체리 파이 한 조각을 주문할 것입니다. 당신은 파이를 먹기 위해 수수료를 지불해야하며, 레스토랑은 아마도 당신에게 요리 방법을 알려주지 않을 것입니다. 만약 파이를 정확하게 복사하여 같은 이름으로 팔면, 레스토랑이 당신을 상대로 고소할 수도 있습니다.

### 왜 사람들은 자신의 작업을 오픈소스로 공개합니까?

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/kentcdodds?s=180" class="pquote-avatar" alt="avatar">
  One of the most rewarding experiences I get out of using and collaborating on open source comes from the relationships that I build with other developers facing many of the same problems I am.
  <p markdown="1" class="pquote-credit">
— @kentcdodds, ["어떻게 오픈 소스에 빠져야 나에게 멋진가?"](https://kentcdodds.com/blog/how-getting-into-open-source-has-been-awesome-for-me)
  </p>
</aside>

사람이나 조직이 프로젝트 소스를 공개하려는 데는 [여러 가지 이유](https://ben.balter.com/2015/11/23/why-open-source/)가 있습니다. 몇 가지 예는 다음과 같습니다:

* **협업:** 오픈소스 프로젝트는 전 세계 누구나 변화를 수용 할 수 있습니다. [Exercism](https://github.com/exercism/)를 예시로 들면, 350명이 넘는 기여자가 참여하는 프로그래밍 연습 플랫폼입니다.

* **채택과 재가공:** 오픈소스 프로젝트는 거의 모든 목적으로 누구나 사용할 수 있습니다. 사람들은 그것을 사용하여 다른 것을 만들 수도 있습니다. [WordPress](https://github.com/WordPress)를 예시로 들면, [b2](https://github.com/WordPress/book/blob/master/Content/Part%201/2-b2-cafelog.md)라는 기존 프로젝트의 포크로 시작되었습니다.

* **투명도:** 누구나 오픈소스 프로젝트에서 오류나 불일치를 검사 할 수 있습니다. 투명성은 [불가리아](https://medium.com/@bozhobg/bulgaria-got-a-law-requiring-open-source-98bf626cf70a) 또는 [미국](https://sourcecode.cio.gov/)과 같은 정부, 은행 또는 건강 관리와 같은 규제 대상 산업, Let's Encrypt와 같은 보안 소프트웨어와 관련이 있습니다.

오픈소스는 소프트웨어만을 위한 것이 아닙니다. 데이터 세트에서부터 서적에 이르기까지 모두 오픈소스할 수 있습니다. [GitHub Explore](https://github.com/explore)에서 다른 오픈소스 아이디어를 확인하십시오.

### 오픈소스는 "무료"를 의미합니까?

오픈소스의 가장 큰 매력 중 하나는 비용이 들지 않는다는 것입니다. 그러나 "무료 비용"은 오픈소스의 전반적인 가치의 부산물입니다.

[오픈소스 라이선스](https://opensource.org/osd-annotated)는 누구나 거의 모든 목적으로 프로젝트를 사용, 수정 및 공유 할 수 있어야 하므로 프로젝트 자체는 무료입니다. 만약 프로젝트에 사용할 비용이 들었다면, 누구나 합법적으로 복사본을 만들어 무료 버전을 사용할 수 있습니다.

결과적으로 대부분의 오픈소스 프로젝트는 무료이지만, "무료"는 오픈소스 정의의 일부가 아닙니다. 오픈소스의 공식적인 정의를 계속 준수하면서 이중 라이선스 또는 제한된 기능을 통해 간접적으로 오픈소스 프로젝트를 청구할 수있는 방법이 있습니다.

## Should I launch my own open source project?

짧은 결과는 예입니다. 결과에 관계없이, 자신의 프로젝트를 시작하는 것이 오픈소스의 작동 방식을 배우기위한 훌륭한 방법이기 때문입니다.

이전에 프로젝트의 소스를 공개 한 적이 없다면, 다른 사람이 의견을 말하지 않거나 전혀 눈치채지 못할거라고 불안해 할 수 있습니다. 이게 당신의 이야기처럼 들린다면, 당신은 혼자가 아닙니다!

오픈소스 작품은 글쓰기나 페인팅과 비슷한 다른 창의적인 활동과 같습니다. 전세계에 당신의 작품을 공유하는 것이 무섭다는 생각이 들지만, 청중이 없는 경우에도 연습하는 것이 유일한 방법입니다.

아직 확신하지 못했다면, 잠시 시간을 내어 목표가 무엇인지 생각해보십시오.

### 목표 설정하기

목표는 어떤 일을 해야할 건지, 어떤 말을 하지 않을건지, 다른 사람들에게 도움이 필요한 곳을 파악하는 것에 도움이 될 수 있습니다. 스스로에게 물어보십시오,  _왜 내가 이 프로젝트를 오픈 소스로 만들었습니까?_

이 질문에 대한 정답은 아무도 없습니다. 한 프로젝트에 대해 여러 가지 목표를 가질 수도 있고, 다른 목표를 가진 다른 프로젝트를 가질 수도 있습니다.

귀하의 유일한 목표가 귀하의 업무를 과시하는 것이라면, 귀하는 README에 기여를 원한다고 말할 수 없습니다. 다른 한편으로는, 기여자를 원한다면 명확한 문서화에 시간을 투자를 통해 신규 방문자가 환영받는다고 느끼게 될 것입니다.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/mavris?s=180" class="pquote-avatar" alt="avatar">
  At some point I created a custom UIAlertView that I was using...and I decided to make it open source. So I modified it to be more dynamic and uploaded it to GitHub. I also wrote my first documentation explaining to other developers how to use it on their projects. Probably nobody ever used it because it was a simple project but I was feeling good about my contribution.
  <p markdown="1" class="pquote-credit">
— @mavris, ["독학 소프트웨어 개발자: 오픈소스가 우리에게 중요한 이유"](https://medium.com/rocknnull/self-taught-software-engineers-why-open-source-is-important-to-us-fe2a3473a576)
  </p>
</aside>

프로젝트가 성장함에 따라 커뮤니티는 단순한 코드 그 이상을 필요로 할 수 있습니다. 이슈에 대응하고, 코드를 검토하고, 프로젝트를 홍보하는 것은 오픈소스 프로젝트에서 중요한 작업입니다.

비코딩 작업에 소요되는 시간은 프로젝트의 크기와 범위에 따라 다르지만, 직접 해결하거나 도움을 줄 담당자를 준비해야합니다.

**만약 프로젝트를 오픈소스화하는 회사의 일원이라면,** 프로젝트가 번창하기 위해 필요한 내부 자원이 있는지 확인하십시오. 시작한 후에 프로젝트를 유지 관리 할 책임이 있는 사람과 해당 작업을 커뮤니티와 공유하는 방법을 식별해야합니다.

홍보, 운영 및 프로젝트 유지를 위해 전담 예산이나 인력이 필요하다면 일찍 대화를 시작하십시오.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/captainsafia?s=180" class="pquote-avatar" alt="avatar">
  As you begin to open source the project, it's important to make sure that your management processes take into consideration the contributions and abilities of the community around your project. Don't be afraid to involve contributors who are not employed in your business in key aspects of the project — especially if they are frequent contributors.
  <p markdown="1" class="pquote-credit">
— @captainsafia, ["그래서 당신은 프로젝트를 오픈소스화하고 싶습니까?"](https://dev.to/captainsafia/so-you-wanna-open-source-a-project-eh-5779)
  </p>
</aside>

### 다른 프로젝트에 기여하기

다른 사람들과 협력하거나 오픈소스가 어떻게 작동하는지 이해하는 방법을 배우는 것이 목표라면, 기존 프로젝트에 기여하는 것을 고려하십시오. 이미 사용하고 사랑하는 프로젝트부터 시작하십시오. 프로젝트에 기여하는 것은 오타를 수정하거나 문서를 업데이트하는 것만큼 간단합니다.

기여자로 시작하는 방법을 모르는 경우에는, [오픈소스에 기여하는 방법 가이드](../how-to-contribute/)를 확인하십시오.

## Launching your own open source project

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

오픈소스 라이선스는 타인이 영향을 주지 않고 프로젝트에서 사용, 복사, 수정 및 기여할 수 있음을 보증합니다. 또한 복잡하게 얽혀있는 법적 상황으로부터 당신을 보호합니다. **오픈소스 프로젝트를 시작할 때 라이선스를 포함해야합니다.**

법률 업무는 재미 없습니다. 좋은 소식은 기존 라이선스를 복사하여 저장소에 붙여 넣을 수 있다는 것입니다. 당신의 노력을 보호하는 데 단지 1분 정도만 소요됩니다.

[MIT](https://choosealicense.com/licenses/mit/), [Apache 2.0](https://choosealicense.com/licenses/apache-2.0/), 그리고 [GPLv3](https://choosealicense.com/licenses/gpl-3.0/)는 가장 인기있는 오픈소스 라이선스입니다, 그러나 선택할 수있는 [다른 옵션](https://choosealicense.com)도 있습니다.

GitHub에서 새 프로젝트를 만들면, 라이선스를 선택할 수 있는 옵션이 제공됩니다. 오픈소스 라이선스를 포함하면 GitHub 프로젝트를 오픈소스로 만들 수 있습니다.

![Pick a license](/assets/images/starting-a-project/repository-license-picker.png)

만약 오픈소스 프로젝트를 관리하는 법적 측면에 대해 다른 질문이나 우려 사항이 있으시면, [이 내용은 귀하를 대상으로합니다](../legal/).

### Writing a README

README는 프로젝트 사용 방법을 설명하는 것 이상을 수행합니다. 또한 프로젝트가 중요한 이유와 사용자가 수행 할 수 있는 작업에 대해 설명합니다.

README에 다음 질문에 답하십시오:

* 이 프로젝트는 무엇을 합니까?
* 이 프로젝트는 왜 유용합니까?
* 어떻게 시작합니까?
* 필요할 경우, 어디에서 더 많은 도움을 받을 수 있습니까?

README를 사용하여 기여를 처리하는 방법, 프로젝트의 목표가 무엇인지, 라이선스 및 속성에 대한 정보와 같은 다른 질문에 답할 수 있습니다. 기여를 받고 싶지 않거나, 프로젝트가 아직 준비되지 않은 경우에는 이 정보를 적어 두십시오.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/tracymakes?s=180" class="pquote-avatar" alt="avatar">
  Better documentation means more users, less support requests, and more contributors. (...) Remember that your readers aren't you. There are people who might come to a project who have completely different experiences.
  <p markdown="1" class="pquote-credit">
— @tracymakes, ["읽힐 단어 쓰기 (비디오)"](https://www.youtube.com/watch?v=8LiV759Bje0&list=PLmV2D6sIiX3U03qc-FPXgLFGFkccCEtfv&index=10)
  </p>
</aside>

때로는, 사람들이 프로젝트가 끝나지 않았거나 기부를 원치 않기 때문에 README를 쓰지 않는 경우가 있습니다. 이것은 모두 하나를 쓰는 아주 좋은 이유입니다.

더 많은 영감을 얻으려면, @18F의 ["Making READMEs Readable"](https://pages.18f.gov/open-source-guide/making-readmes-readable/) 혹은 @PurpleBooth의 완전한 README를 작성하는[README template](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2)를 사용해보십시오.

README 파일을 루트 디렉토리에 포함시키면, GitHub가 자동으로 저장소 홈페이지에 표시합니다.

### Writing your contributing guidelines

CONTRIBUTING 파일은 잠재 고객에게 프로젝트 참여 방법을 알려줍니다. 예를 들어 다음 정보를 포함 할 수 있습니다:

* 버그 보고서를 제출하는 방법 ([이슈와 pull request 템플릿](https://github.com/blog/2111-issue-and-pull-request-templates)을 사용해보십시오)
* 새로운 기능을 제안하는 방법
* 환경 설정 및 테스트 실행 방법

기술적 세부 사항 외에도, CONTRIBUTING 파일은 기여에 대한 귀하의 기대를 전달할 수 있는 기회입니다, 예로 들면 :

* 당신이 찾고있는 기여의 종류
* 프로젝트 로드맵 또는 비전
* 참여자가 귀하와 연락해야 (또는 하지 말아야) 하는 방법

따뜻하고 친숙한 분위기의 음색을 사용하고, 기여에 대한 구체적인 제안 (예를 들어 문서 작성 또는 웹 사이트 만들기)을 제공하면 신규 방문자가 참여하고 환영하게 될 것입니다.

예시로, [Active Admin](https://github.com/activeadmin/activeadmin/)은 다음과 함께 [기여 가이드](https://github.com/activeadmin/activeadmin/blob/master/CONTRIBUTING.md)를 시작합니다:

> 먼저 Active Admin에 기여 해 주셔서 감사합니다. Active Admin을 훌륭한 도구로 만드는 것은 여러분과 같은 사람들입니다.

프로젝트의 가장 초기 단계에서, CONTRIBUTING 파일을 간단하게 만들 수 있습니다. 버그 또는 파일 문제를 보고하는 방법과 (테스트에 필요한) 기술적 요구 사항을 항상 설명하여 기여를 해야합니다.

시간이 지나면, 다른 자주 묻는 질문을 CONTRIBUTING 파일에 추가 할 수 있습니다. 이 정보를 적어두면 같은 질문을 반복해서 하는 사람들이 줄어들 것입니다.

CONTRIBUTING 파일을 작성하는 데 도움이 필요하면, check out @nayafia의 [contributing guide template](https://github.com/nayafia/contributing-template/blob/master/CONTRIBUTING-template.md) 혹은 @mozilla의 ["How to Build a CONTRIBUTING.md"](https://mozillascience.github.io/working-open-workshop/contributing/)를 보십시오.

README에 CONTRIBUTING 파일을 링크하면 더 많은 사람들이 볼 수 있습니다. 만약 당신이 [CONTRIBUTING 파일을 프로젝트의 저장소에 두면](https://help.github.com/articles/setting-guidelines-for-repository-contributors/), GitHub는 참여자가 이슈를 생성하거나 pull request를 열면 자동으로 파일에 연결됩니다.

![Contributing guidelines](/assets/images/starting-a-project/Contributing-guidelines.jpg)

### 행동강령 세우기

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/mlynch?s=180" class="pquote-avatar" alt="avatar">
  We’ve all had experiences where we faced what was probably abuse either as a maintainer trying to explain why something had to be a certain way, or as a user...asking a simple question. (...) A code of conduct becomes an easily referenced and linkable document that indicates that your team takes constructive discourse very seriously.
  <p markdown="1" class="pquote-credit">
— @mlynch, ["오픈소스를 보다 행복한 곳으로 만들기"](https://medium.com/ionic-and-the-mobile-web/making-open-source-a-happier-place-3b90d254f5f)
  </p>
</aside>

마지막으로, 행동강령은 프로젝트 참가자의 행동에 대한 기본 규칙을 설정하는 데 도움이 됩니다. 이는 커뮤니티나 회사를 위해 오픈소스 프로젝트를 시작하는 경우 특히 유용합니다. 행동강령은 건강하고 건설적인 커뮤니티 행동을 촉진하도록 권한을 부여하며, 이는 메인테이너로서의 스트레스를 감소시킵니다.

자세한 정보를 확인하려면, [행동강령 가이드](../code-of-conduct/)를 보십시오.

행동강령은 참여자가 _어떻게_ 행동 할 것으로 기대하는지 의사 소통하는 것 외에도, 이러한 기대 사항이 적용되는 대상, 적용시기, 위반이 발생할 경우 수행 할 작업을 설명하는 경향이 있습니다.

오픈소스 라이선스와 마찬가지로 행동강령에 대한 새로운 기준도 있으므로, 사용자가 직접 작성할 필요는 없습니다. [Contributor Covenant](https://www.contributor-covenant.org/)는 Kubernetes, Rails 및 Swift를 포함하여 [40,000개 이상의 오픈소스 프로젝트](https://www.contributor-covenant.org/adopters)에서 사용되는 행동 강령입니다. 어떤 텍스트를 사용하든 필요에 따라 행동강령을 시행 할 준비가 되어 있어야합니다.

텍스트를 저장소의 CODE_OF_CONDUCT 파일에 직접 붙여 넣으십시오. 프로젝트의 루트 디렉토리에 파일을 보관하여 찾기 쉽도록 하고, README에서 링크를 연결하십시오.

## Naming and branding your project

브랜딩은 화려한 로고 또는 재미있는 프로젝트 이름 이상입니다. 그것은 당신의 프로젝트에 대해 어떻게 이야기하고, 당신의 메시지를 가지고 도달했는지에 관한 것입니다.

### 올바른 이름 고르기

기억하기 쉬운 이름을 골라야하며, 이상적으로 프로젝트가 하는 일에 대한 아이디어를 제공하십시오. 예시입니다:

* [Sentry](https://github.com/getsentry/sentry)는 충돌보고를 위해 앱을 모니터링합니다
* [Thin](https://github.com/macournoyer/thin)은 빠르고 간단한 Ruby 웹 서버입니다

기존 프로젝트를 기반으로 하는 경우, 그 이름을 접두사로 사용하면 프로젝트가 수행하는 작업을 분명히 알 수 있습니다 (예시. [node-fetch](https://github.com/bitinn/node-fetch)는  Node.js에서 `window.fetch`를 가져옵니다).

무엇보다 명확성을 고려하십시오. 농담은 재미 있지만, 일부 농담은 다른 문화나 다른 경험을 가진 사람들로 번역되지 않을 수도 있음을 기억하십시오. 잠재적인 사용자 중 일부는 회사 직원일 수 있습니다: 그들이 직장에서 당신의 프로젝트를 설명해야 할 때 불편하게 하고 싶지는 않습니다!

### Avoiding name conflicts

[비슷한 이름의 오픈소스 프로젝트가 있는지 확인하십시오](http://ivantomic.com/projects/ospnc/), 특히 동일한 언어 또는 같은 생태계를 공유하는 경우, 이름이 기존의 인기있는 프로젝트와 겹치면 잠재적인 고객을 혼동시킬 수 있습니다.

웹 사이트, Twitter 핸들 또는 프로젝트를 나타내는 다른 속성을 원하면 원하는 이름을 가져올 수 있는지 확인하십시오. 이상적으로는, 아직 사용하지 않으려는 경우에도 마음의 평화를 위해 [지금 해당 이름을 예약하십시오](https://instantdomainsearch.com/).

프로젝트 이름이 상표를 침해하지 않는지 확인하십시오. 회사는 나중에 프로젝트를 중단하거나, 법적 조치를 취할 것을 요구할 수 있습니다. 위험 부담이 되지 않습니다.

You can check the [WIPO Global Brand Database](http://www.wipo.int/branddb/en/) for trademark conflicts. If you're at a company, this is one of the things your [legal team can help you with](../legal/).

마지막으로, 프로젝트 이름에 대한 빠른 Google 검색을 수행하십시오. 사람들이 프로젝트를 쉽게 찾을 수 있습니까? 검색 결과에 표시하고 싶지 않은 것이 있습니까?

### 당신이 쓰는 방법(그리고 코드)은 당신의 브랜드에도 영향을 미칩니다!

프로젝트가 진행되는 동안, 많은 글을 쓸 것입니다: README, 튜토리얼, 커뮤니티 문서, 이슈에 대한 회신, 뉴스레터 및 메일링 리스트 등.

그것이 공식적인 문서이건 캐주얼 이메일이건, 당신의 작문 스타일은 프로젝트의 브랜드의 일부입니다. 잠재 고객에게 도달하는 방법과 전달하려는 톤인지 여부를 고려하십시오.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/janl?s=180" class="pquote-avatar" alt="avatar">
  I tried to be involved with every thread on the mailing list, and showing exemplary behaviour, being nice to people, taking their issues seriously and trying to be helpful overall. After a while, people stuck around not to only ask questions, but to help with the answering as well, and to my complete delight, they mimicked my style.
  <p markdown="1" class="pquote-credit">
— @janl on [CouchDB](https://github.com/apache/couchdb), ["지속 가능한 오픈소스"](https://writing.jan.io/2015/11/20/sustainable-open-source.html)
  </p>
</aside>

따뜻하고 포괄적인 언어 (예를 들어 한 사람을 언급 할 때도 "그들"과 같이)를 사용하면, 이 프로젝트가 새로운 참여자에게 환영받는 느낌을 줄 수 있습니다. 많은 독자가 원어민이 아니기 때문에 간단한 언어에 충실하십시오.

단어 작성 방법 이외에도, 코딩 스타일이 프로젝트 브랜드의 일부가 될 수도 있습니다. [Angular](https://github.com/johnpapa/angular-styleguide)와 [jQuery](https://contribute.jquery.org/style-guide/js/)는 엄격한 코딩 스타일과 가이드 라인을 가진 프로젝트의 두 가지 예시입니다.

프로젝트를 시작할 때 스타일 가이드를 작성할 필요가 없으며, 어쨌든 다른 코딩 스타일을 프로젝트에 통합하는 것을 즐긴다는 것을 알 수 있습니다. 그러나 글쓰기와 코딩 스타일이 다른 유형의 사람들을 끌어 모으거나 방해 할 수있는 방법을 예상해야합니다. 프로젝트의 가장 초기 단계는 보고자하는 선례를 설정할 기회입니다.

## Your pre-launch checklist

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

## You did it!

첫번째 프로젝트를 오픈소스화한 것을 축하합니다. 결과에 관계없이 공개적으로 일하는 것은 공동체에 대한 선물입니다. 모든 커밋, 설명 및 pull request을 풀어 쓰면, 자신과 다른 사람들이 배우고 성장할 수 있는 기회가 만들어집니다.
