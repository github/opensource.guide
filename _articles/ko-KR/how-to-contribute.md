---
locale: ko-KR
title: 오픈소스 컨트리뷰트는 어떻게 하는 걸까?
description: 이 가이드는 오픈소스 컨트리뷰트를 해보고 싶어하는 모든이들(초보자~베테랑)을 위해 작성되었습니다. 어려워하지 마시고, 가이드를 참고하셔서 하나씩 따라하다보면 오픈소스를 컨트리뷰트할 수 있을 겁니다.
class: contribute
toc:
  why-contribute-to-open-source: "why-contribute-to-open-source?"
  what-it-means-to-contribute: "What it means to contribute"
  orienting-yourself-to-a-new-project: "Orienting yourself to a new project"
  finding-a-project-to-contribute-to: "Finding a project to contribute to"
  how-to-submit-a-contribution: "How to submit a contribution"
  what-happens-after-you-submit-a-contribution: "What happens after you submit a contribution"
order: 1
image: /assets/images/cards/contribute.png
---

## Why contribute to open source?

<aside markdown="1" class="pquote">
  <img src="https://avatars2.githubusercontent.com/u/134585?v=3&s=400" class="pquote-avatar" alt="avatar">
  \[freenode\]에서 일을 했던 경험은 대학생활이나 현업을 수행함에 있어서 기술적으로 많은 도움이 됐습니다.</br>
   내가 생각하기에 오픈소스에 컨트리뷰트하는 것은 앞으로 해 나갈 수많은 프로젝트에 도움을 줄 거라고 생각합니다.
  <p markdown="1" class="pquote-credit">
— @errietta, ["Why I love contributing to open source software"](https://www.errietta.me/blog/open-source/)
  </p>
</aside>

오픈소스를 컨트리뷰트 하는 것은 당신이 상상할 수 있는 모든 것을 배우거나 가르치고, 구축해 갈 수 있는 기회입니다.</br>
생각만 해오던 것들이 현실이 되는 겁니다. 왜 사람들이 오픈 소스를 컨트리뷰트 하냐구요? 이유는 이걸로 충분하지 않나요!

### 현재 가지고 있는 기술력의 향상

당신이 코딩을 하든 인터페이스 디자인을 하든 그래픽 디자인을 하든 글을 쓰거나 조직을 관리하든, 무엇을 하든 별로 중요하지 않습니다.
답답한 마음에 해답지를 찾고 있는 중이라면, 어쩌면 오픈소스 프로젝트가 당신에게 답이 되어 줄 수도 있습니다.


### 비슷한 생각을 가진 사람들을 만날 수 있습니다.

수 년동안 많은 이들이, 아늑하고 그들을 환영하는 오픈소스 프로젝트로 돌아오곤 합니다.
심야 온라인 채팅이나 컨퍼런스등을 통해서 많은 이들이 우정을 쌓고 돈독해졌으며, 그러한 단결력을 바탕으로
오픈소스 프로젝트에 함께 참여하고 있습니다.

### 가르침을 받거나, 가르침을 주기도 합니다.

다른 이들과 공유하는 프로젝트를 한다는 것은, 당신이 하는 일을 누군가에게 설명하거나 혹은 막혔을 때 다른 이에게  도움을 받는 다는 것을 의미합니다. 이처럼 배우고 가르치는 일련의 활동들은 당신뿐만 아니라 모두에게 있어서 한 단계 레벨업을 할 수 있는 기회를 제공해줍니다.

### 여러 공공재들이 당신의 명성과 커리어에 도움을 줄 겁니다.

당신이 작업한 모든 일들은 공공재로 쓰이게 됩니다. 달리 말하면, 당신 또한 일을 하다 막혔을 때 누군가 만들어놓은 공공재로부터 도움(무료 예제나 무료 데모)을 얻을 수 있다는 의미입니다.

### 여러가지 경험을 통해 인적으로 성장할 수 있습니다.

사람들끼리 팀을 이루고 서로간의 문제를 해결하는 방법, 리더쉽이나 관리하는 법, 일의 우선순위를 설정하는 법들을 경험할 수 있고 그 안에서 당신 스스로가 성장해 나갈 수 있습니다.

### 작은 것 하나에 불과하더라도 당신이 바꿔나갈 수 있습니다.

오픈소스를 한다고 해서 당신이 평생 그 오픈소스에 대한 컨트리뷰터가 되야 한다는 부담감을 느낄 필요는 없습니다. 혹시 웹사이트에서 오타가 있는 것을 본적이 있습니까? 혹은 그걸 누가 고쳐줬으면 하고 바랬던 적이 있지 않습니까?</br>
오픈 소스 프로젝트에서는 바라기만 하는게 아니라 당신이 직접 오타를 고치고 수정 할 수 있습니다.
그러한 경험을 하나씩 해가면서 사람들이 본인의 삶 속에서 좀 더 재미있고 다양한 경험을 할 수 있도록 돕는 것이 오픈소스의 소명중 하나입니다.


## What it means to contribute

내가 원하는 프로젝트를 어떻게 찾아야 하는 거지? 코드는 어떻게 작성하는 거야? 내가 실수하면 어떡해??
...라는 고민과 걱정을 하고 있을 수도 있다고 생각합니다. 괜찮습니다, 처음엔 누구나 다 그러니까요.</br>
더욱이 오픈소스라는, 기이하면서도 매력적인 이 문화는 당신이 지금까지 만나 본 그 어떤 것보다 낯설게 다가올 수도 있으니까요.

하지만 걱정마세요. 여기에 가이드 되어있는 내용과 소소한 팁들을 참고한다면 당신도 어느새 당당한 한 명의 오픈소스 컨트리뷰터가 될 수 있습니다.

### 굳이 코드를 `작성`하는 것만이 능사는 아닙니다.

오픈소스 컨트리뷰트에 대한 가장 흔한 오해 중 하나는, 당신이 코드를 직접 건드려야 한다는 것입니다. 하지만 전혀 그렇지 않습니다.
일부 프로젝트의 경우엔 [개선없이 방치된 상태](https://github.com/blog/2195-the-shape-of-open-source) 일 수도 있습니다. 이런 프로젝트들에게 당신의 의견을 전달하거나 제안을 하는, 작은 행동도 그 프로젝트에게는 큰 도움이 될 것입니다.

그렇기에 우리는 이러한 일련의 행위까지도 모두 컨트리뷰트라고 정의하고 있습니다.

<aside markdown="1" class="pquote">
  <img src="https://avatars1.githubusercontent.com/u/49038?v=3&s=460" class="pquote-avatar" alt="avatar">
  나는 CocoaPods에서 일하는 동안 내가 유명해졌다고 생각했지만 대부분의 사람들은 내가 실질적으로 무엇을 했는지, 어떤 일을 했는지를 알지 못 했다. 문서작성에서부터 브랜드 가치를 높이는 주된 업무를 밤낮없이 일했는데도 말이다.
  <p markdown="1" class="pquote-credit">
— @orta, ["Moving to OSS by default"](https://realm.io/news/orta-therox-moving-to-oss-by-default/)
  </p>
</aside>

물론 당신이 코드를 작성하고 싶을 수도 있습니다. 그럼 그렇게 해도 됩니다. 다만, 직접 코딩이 아닌 다른 방식을 통해서도 커뮤니티 멤버들을 만날 수 있고 프로젝트에 기여할 수 있다는 것을 말해주고픈 것입니다. </br>
결국은 이러한 관계를 구축하는 것 자체가 프로젝트의 여타 부분에서 함께 작업할 수 있는 빌미가 되는 거니까요.

<aside markdown="1" class="pquote">
  <img src="https://avatars3.githubusercontent.com/u/54418?v=3&s=460" class="pquote-avatar" alt="avatar">
  2002년 6월 17일에 나는 오픈소스에서 발견된 버그를 픽스하여 파이썬 개발팀에게 연락을 했습니다. 메일링리스트에 있는 내 패치를 적용해달라는 요청을 하기 위해서였죠.
  처음에 그들은 이런저런 핑계를 대며 해당 요청에 대한 명확한 사유를 물어보기만 했습니다.
  그들의 태도에 누군가는 나서서 그 문제를 고쳐야 하지 않냐고 비판적으로 말해야 했고 그제서야 나는 '내가 나서서 이런 사항들을 관리해야 겠구나'라는 결심을 했습니다.
  <p markdown="1" class="pquote-credit">
— @brettcannon, ["Maintainer Stories"](https://github.com/open-source/stories/brettcannon)
  </p>
</aside>


### 기획하고 계획하는 걸 좋아하나요?

* [@fzamperin NodeSchool](https://github.com/nodeschool/organizers/issues/406) 처럼 프로젝트에 대한 워크샵이나 Meetup에 대한 준비를 할 수도 있습니다.
* 프로젝트 컨퍼런스를 개최할 준비를 해볼 수도 있구요.
* 다른 커뮤니티 멤버가 적절한 컨퍼런스를 찾거나 연사로 나설 수 있도록 도와줄 수도 있습니다.

### 디자인하는 걸 좋아하시나요?

* 유저 사용성적인 측면에서 프로젝트의 Layout을 재설계하는 건 어떤가요?
* [Drupal suggests](https://www.drupal.org/community-initiatives/drupal-core/usability) 같은 유저 리서치 활동을 통해 프로젝트의 네비게이션이나 메뉴를 재정립하는건 어떤가요.
* 프로젝트가 일관된 디자인 스타일을 가질 수 있도록 스타일 가이드를 작성할 수도 있습니다.
* [hapi.js's contributors](https://github.com/hapijs/contrib/issues/68) 처럼 T-shirt를 디자인하거나 새로운 로고를 만드는 외적인 활동도 디자인에 연관이 있죠.

### 글 쓰는 걸 좋아하나요?

* 프로젝트의 문서를 개선할 수 있습니다.
* 프로젝트를 어떻게 사용하는지에 대한 예제를 들어줄 수도 있습니다.
* 메일링 리스트에 하이라이트 처리를 하거나 뉴스레터를 발간할 수도 있습니다.
* [pypa's contributors](https://github.com/pypa/python-packaging-user-guide/issues/194) 와 같은 프로젝트의 튜토리얼도 작성할 수 있겠네요
* 프로젝트의 번역문서도 작성할 수 있습니다.

<aside markdown="1" class="pquote">
  <img src="https://avatars3.githubusercontent.com/u/853712?v=3&s=400" class="pquote-avatar" alt="avatar">
  중요하지만 많은 이들이 간과하고 있는 점인데, \[문서\]는 아주 중요합니다. 지금까지 작성된 문서는 아주 훌륭했고 Babel의 핵심 요소였습니다. 그것들은 당신의 생각보다 더 많은 곳에서 사용되고 있으며 추가된 단락과 설명들로 인한 도움은 정말 감사할 따름입니다.
  <p markdown="1" class="pquote-credit">
— @kittens, ["Call for contributors"](https://github.com/babel/babel/issues/1347)
  </p>
</aside>

### 정리하는 건 어떤가요?

* 중복된 issue를 취합하고 새로운 issue의 명칭을 제안한다거나하는 정리활동도 컨트리뷰트에 포함이 됩니다.
* [@nzakas eslint](https://github.com/eslint/eslint/issues/6765) 처럼 issue를 등록(open)하거나 오래된 issue에 대한 종료(close) 요청도 할 수 있습니다.
* 최근에 열린 issue의 내용을 명확히 한다거나 우선순위를 설정 할 수도 있겠네요.

### 코드를 좋아하시나요?

* [@dianjin Leaflet](https://github.com/Leaflet/Leaflet/issues/4528#issuecomment-216520560) 처럼 등록된 issue의 문제점을 찾아주세요
* 새로운 기능에 대한 사항을 작성하는데 도움을 줄 수 있는지 물어볼 수도 있습니다.
* 프로젝트의 Setup 과정을 자동화할 수 있습니다.
* 유용한 툴을 추천해준다거나 테스트 하는 과정을 개선할 수도 있습니다.


### 사람들 돕는 걸 좋아하나요?

* [Postgres example](http://stackoverflow.com/questions/18664074/getting-error-peer-authentication-failed-for-user-postgres-when-trying-to-ge) 처럼 Stack Overflow나 reddit에 프로젝트에 대한 질문을 할 수 있습니다.
* 사람들의 이해를 돕기 위해 등록된 issue에 대한 질문을 할 수도 있구요.
* 토론에서 의견을 제시하거나 대화채널을 통해서 누군가에게 도움을 줄 수도 있습니다.

### 다른 이들의 코드 도움을 주는 건 어떤가요?

* 다른 사람의 코드리뷰를 해줄 수 있습니다.
* 프로젝트를 사용하려는 이들을 위한 튜토리얼을 작성할 수도 있습니다.
* [@ereichert did for @bronzdoc on Rust](https://github.com/rust-lang/book/issues/123#issuecomment-238049666) 처럼 누군가의 멘토가 되어줄 수도 있습니다.

### 이 모든 사항들이 SW 프로젝트에만 국한되는 것은 아닙니다.

오픈 소스는 보통 SW의 영역이라고 생각하기 쉽습니다만, 그 외 분야에서도 당신은 컨트리뷰터로써 누군가와 협업을 할 수 있습니다. 글을 쓴다거나 요리법, 목록이나 강의와 같은 컨텐츠에 대한 것들도 오픈소스 프로젝트로 진행되고 있기 때문입니다.

예를 들어 아래와 같은 오픈 소스들이 있습니다.

* @sindresorhus 가 주도하고 있는 [list of "awesome" lists](https://github.com/sindresorhus/awesome)
* 프론트 엔드 개발자가 되고싶어하는 이들을 위한 @h5bp 의 [list of potential interview questions](https://github.com/h5bp/Front-end-Developer-Interview-Questions)
* @stuartlynn 와 @nicole-a-tesla 가 만든 [collection of fun facts about puffins](https://github.com/stuartlynn/puffin_facts)

당신이 SW 개발자일지라도 일단, 문서 프로젝트에서 컨트리뷰션을 시작해보는 것이 도움이 될 거라 생각합니다.   
코드가 없는 프로젝트에서 먼저 컨트리뷰션을 해보면 흔히 초보자들이 가지는 '잘 못 되지 않을까..?' 라는 두려움을 떨칠 수 있고, 이러한 과정을 통해 자신감과 경험을 쌓으면서 한 명의 컨트리뷰터로 성장할 수 있을 것입니다.

## Orienting yourself to a new project

<aside markdown="1" class="pquote">
  <img src="https://avatars2.githubusercontent.com/u/1179362?v=3&s=460" class="pquote-avatar" alt="avatar">
  만약 당신이 issue를 쫓다가 잘 이해가 가지 않고 혼란스럽다면, 당신만의 문제는 아닙니다. 이러한 툴들은 내포된 정보가 매우 많기때문입니다. 그렇기 때문에 당신의 의문과 질문은 당연한 것이고 그들의 답변을 통해 혼란스러움과 궁금증을 해소할 수 있는 것입니다.
  <p markdown="1" class="pquote-credit">
— @shaunagm, ["How to Contribute to Open Source"](http://readwrite.com/2014/10/10/open-source-diversity-how-to-contribute/)
  </p>
</aside>

간단한 오타수정이 아니라 그보다 더한 무언가를 오픈소스에 컨트리뷰트 한다는 것은 낯선 이들이 가득한 파티장에 당당히 걸어들어가는 것과 같습니다.</br>
비유하자면, 초면인 이들이 가득한 파티장에서 당신이 어색한 분위기를 풀기위해 조랑말에 대한 이야기를 했다고 가정합시다. 그런데 사람들은 느닷없이 금붕어에 대한 이야기를 하면서 아주 이상한 사람을 보듯 당신을 쳐다보는 겁니다. 기반 지식이 없는 당신은 당황할 수밖에 없는 거죠.

그렇기 때문에 스스로의 의견을 먼저 내세우기 전에 그들이 어떤 주제를 가지고 어떠한 대화를 하며 오늘 파티의 관심사가 무엇인지를 파악하는 법을 배워야 합니다. 그렇게하면 당신이 가진 생각들을 개진하고 그들의 의견을 수렴할 기회들이 늘어날 것입니다.  

### 오픈 소스 프로젝트를 분석해봅시다.

모든 오픈 소스 커뮤니티는 다릅니다.

수 년 동안 하나의 오픈 소스 프로젝트에 관여했다는 것은, 당신이 알고 있는 오픈 소스 프로젝트도 하나밖에 없다는 것을 의미합니다. 그런 상황에서 다른 프로젝트에 기여하려 한다면 당신은 아마 지금까지와는 전혀 다른 스타일의 어휘와, 규정, 커뮤니케이션 환경에 맞닥뜨리게 될 것입니다.</br>
하지만 알고보면 대부분의 오픈소스 프로젝트는 비슷한 구성을 가지고 있습니다.
그렇기에 서로 다른 커뮤니티의 역할과 전반적인 프로세스를 이해한다면 당신이 다른 프로젝트에 적응하는데 큰 도움이 될 것입니다.

일반적으로 오픈소스 프로젝트를 구성하는 사람은 아래와 같습니다.

* **Author :** 프로젝트를 만든 사람, 혹은 조직
* **Owner :** 레파지토리나 조직을 책임감 관리하고 이끄는 이들(이들이 Author 일 수도 있습니다.)
* **Maintainers :** 프로젝트 관점에서 관리하고 비전을 설계하며 책임감있게 이끌어가는 컨트리뷰터들(이들이 프로젝트의 Author나 Owner일 수도 있습니다.)
* **Contributors :** 프로젝트에 컨트리뷰트 하는 모든 이들
* **Community Members :** 프로젝트를 사용하는 사람들. 프로젝트가 나아가야 할 방향에 대해서 조언하고 의견을 피력하는 모든 이들.

큰 규모의 프로젝트에는 툴을 감별하거나 분석하고 커뮤니티를 중재하거나 이벤트를 조직하는데 초점을 둔 작은 위원회나 별도 그룹이 존재하기도 합니다. 프로젝트의 웹사이트에서 "팀"페이지나 관리문서의 레파지토리를 살펴보면 이에 대한 정보를 얻을 수도 있죠.

또한 프로젝트는 관련 문서(Documentation)도 존재하기 마련입니다. 이 파일들은 보통 레파지토리의 최상위 위치(root)에 나열되어 있는데 대개 아래와 같은 종류입니다.

* **LICENSE :** 대부분의 오픈소스 프로젝트는 [open source license](https://choosealicense.com) 입니다. 이러한 표기가 없다면, 해당 프로젝트는 오픈소스가 아닙니다.
* **README :** README 파일은 일종의 설명서입니다. 누구나 손쉽게 해당 프로젝트를 접하고 이해하기 쉽게 설명되어있으며 어떻게 해야 이 프로젝트를 사용할 수 있는지에 대한 내용으로 구성되어 있습니다.
* **CONTRIBUTING :** README파일이 프로젝트를 _사용_ 하려는 사람들을 도와주는 역할이라면, CONTRIBUTING 문서는 프로젝트에 _컨트리뷰트_ 하려는 사람들을 도와주는 역할을 합니다.
이 문서의 주된 내용은 컨트리뷰션을 할때 필요한 절차에 대해 설명입니다. 모든 프로젝트가 이 파일을 가지고 있는 것은 아니지만, 이 파일이 만약 있다면 해당 프로젝트는 당신의 컨트리뷰트를 격하게 환영한다는 의미라고 보시면 됩니다.
* **CODE_OF_CONDUCT :** 이 또한 모든 프로젝트에 존재하는 파일은 아닙니다. Code of Conduct는 해당 프로젝트에 대해 당신이 지켜야 할 기본원칙(Ground Rule)을 설명하고 좀 더 프로젝트의 내부 환경적인 면에 적응할 수 있도록 도와줍니다.
* **Other documentation :** 위 문서들 외에도 튜토리얼이나 검토사항들, 관리정책이나 특별한 목적을 지닌 문서가 큰 규모의 프로젝트들에는 추가로 존재합니다.

마지막으로, 오픈소스 프로젝트는 아래와 같은 툴들을 이용하여 서로의 의견을 교환합니다. 이처럼 활발한 의견 교환과 활동은 보다 좋은 품질의 결과물을 만들게되는 원천입니다.

* **Issue tracker :** 프로젝트에 등록 된 issue에 대한 툴
* **Pull requests :** 프로젝트를 진행하면서 변경된 사항에 대해 리뷰와 논의하는 툴
* **Discussion forums or mailing lists :** 서로간에 대화가 필요한 사항이 셩겼을 때, 대부분의 프로젝트에서 이 툴을 사용합니다.(예를들어, 기능에 대한 요구사항이나 버그 리포트 대신에 _"How do I..."_ or _"What do you think about..."_ 와 같은 문구로 운을 때야 할 때). 물론, 굳이 이 툴이 아니라 Issue tracker를 사용해서 대부분의 대화를 하는 이들도 있습니다.
* **Synchronous chat channel :** 많은 프로젝트들이 간단한 대화나 협업, 빠른 의견교환이 필요할 때는 Slack이나 IRC와 같은 채팅 채널을 이용합니다.

## Finding a project to contribute to

여기까지 읽었다면 오픈소스가 어떻게 돌아가는지 이해했을 겁니다. 그러니 이제, 실제로 컨트리뷰트할 프로젝트를 찾아볼 시간입니다.

만약 지금까지 오픈소스에 컨트리뷰트 한 적이 단 한번도 없다면 당신에게 이 문구를 들려주고 싶습니다.</br>
John F. Kennedy (U.S President) : _"Ask not what your country can do for you - ask what you can do for your country."_(조국이 여러분을 위해 무엇을 할 수 있는지 묻지 말고, 여러분이 조국을 위해 무엇을 할 수 있을지 스스로 물어보십시오
  )

오픈소스에 컨트리뷰트 하는 것은 프로젝트 전반에 걸쳐서 일어나는 작업입니다. 하지만 벌써부터 겁을 먹고 당신의 첫 컨트리뷰션이 어떻게 동작하고 어떻게 보일지에 대해서 너무 깊이 생각 할 필요는 없습니다.

대신 당신이 이미 사용했거나 사용하기를 원하는 프로젝트에 대해서 생각하세요. 왜냐면 당신이 적극적으로 컨트리뷰트하게 될 프로젝트는 당신 스스로가 원하는 프로젝트일 것이기 때문입니다.

특정 프로젝트에서 당신 스스로 생각해봤을 때, 보다 더 좋거나 지금과는 다를 수 있다고 생각하는 점들이 있다면 주저하지 말고 의견을 던지고 컨트리뷰션을 하시는 걸 권장합니다.

오픈 소스는 당신이나 나와 같은 이들에 의해서 만들어지는 것이지 어느 누군가에 의해 독점되어지는 것은 아닙니다. 그렇기에 집단지성의 힘을 빌어, 오픈소스를 발전시키면 세상에 있는 여러 문제들을 해결할 수 있는 해결책이 될 수 있습니다.

README 파일을 볼 때 오타나 잘못 된 링크를 발견할 수도 있습니다. 혹은, 당신이 새로운 사용자인데 문서에 꼭 있어야만 하는 문구를 생각해내거나 어딘가가 누락되었음을 깨달을 수도 있습니다. 그럴때는 '누군가가 하겠지'라는 생각보다 스스로 나서서 고치고 의견을 제시하여 주셨으면 합니다. 그렇게 행해진 당신의 작은 도움하나가 오픈소스를 만들어가는 것이고 이것이 우리가 주창하는 오픈소스의 본질이기 때문입니다.

> [28% 의 casual contributions](http://www.igor.pro.br/publica/papers/saner2016.pdf) 들은 오탈자를 고치거나 문서 양식의 변환, 혹은 번역을 하였습니다. 즉, 코딩을 한다거나 프로젝트에 크게 기여해야 겠다는 생각을 버리라는 말입니다.

당신은 또한 아래 리소스들을 통해 도움을 줄 수 있을 법한 프로젝트들을 발견할 수도 있습니다.

* [GitHub Explore](https://github.com/explore/)
* [First Timers Only](http://www.firsttimersonly.com/)
* [Your First PR](https://yourfirstpr.github.io/)
* [CodeTriage](https://www.codetriage.com/)
* [24 Pull Requests](https://24pullrequests.com/)
* [Up For Grabs](http://up-for-grabs.net/)
* [Contributor-ninja](https://contributor.ninja)

### 컨트리뷰트를 하기 전에, 확인해야 할 사항들

컨트리뷰션하려는 프로젝트를 찾았다면, 먼저 해당 프로젝트가 컨트리뷰트하기에 적절한 대상인지부터 확인해야 합니다. 그렇지 않으면 당신의 노력이 수포로 돌아갈 수도 있습니다.

아래에 나열 된 사항들은 당신과 같은 새로운 컨트리뷰터들을 위한 일종의 체크리스트입니다.


**오픈소스가 맞는지를 확인하세요**

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox1" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox1" class="overflow-hidden d-block text-normal">
  프로젝트의 라이센스를 확인했습니까? (보통 root 디렉토리에 LICENSE 파일이 있을 겁니다. 없다면 프로젝트 관리자에게 문의해보세요)
  </label>
</div>

</br>
**활성화 되어 있는 프로젝트인지 확인하세요**

*Github의 레파지토리 페이지를 통해서 Master 브랜치의 Commit 활동내역을 확인해보세요.*

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox2" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox2" class="overflow-hidden d-block text-normal">
  마지막 Commit은 언제인가요?
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox3" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox3" class="overflow-hidden d-block text-normal">
  얼마나 많은 수의 컨트리뷰터가 참여하고 있습니까?
  </label>
</div>

<div class="clearfix mb-4">
  <input type="checkbox" id="cbox4" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox4" class="overflow-hidden d-block text-normal">
  컨터리뷰트는 얼마나 자주 하고 있나요? (Github 페이지 상단에 "Commits" 메뉴를 통해 확인할 수 있습니다.)
  </label>
</div>

</br>
*다음으로 해당 프로젝트의 issue를 확인해보세요.*

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox5" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox5" class="overflow-hidden d-block text-normal">
    얼마나 많은 수의 issue가 등록되어 있죠?
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox6" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox6" class="overflow-hidden d-block text-normal">
    issue들이 등록되었을 때 관리자들의 피드백은 빠른 편인가요?
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox7" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox7" class="overflow-hidden d-block text-normal">
    issue에 대한 적극적인 토론은 진행되나요?
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox8" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox8" class="overflow-hidden d-block text-normal">
    방금 확인한 issue가 최신인가요?
  </label>
</div>

<div class="clearfix mb-4">
  <input type="checkbox" id="cbox9" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox9" class="overflow-hidden d-block text-normal">
    여타 issue들은 무사히 종료되었습니까? (Github 페이지 상단에 "closed" 메뉴를 통해 확인할 수 있습니다.)
  </label>
</div>

</br>
*다음은 프로젝트 pull request에서 같은 request가 있는지를 체크하세요.*

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox10" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox8" class="overflow-hidden d-block text-normal">
    얼마나 많은 수의 pull request가 요청되었나요?
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox20" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox20" class="overflow-hidden d-block text-normal">
    관리자들은 pull request에 대해 발빠르게 대응하고 있습니까?
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox11" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox11" class="overflow-hidden d-block text-normal">
   pull request에 대한 논의는 활발히 벌어지고 있나요?
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox12" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox12" class="overflow-hidden d-block text-normal">
    해당 pull request는 최신인가요?
  </label>
</div>

<div class="clearfix mb-4">
  <input type="checkbox" id="cbox13" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox13" class="overflow-hidden d-block text-normal">
    최근에 Merge된 pull request는 어떤 것인가요? (Github 페이지 상단에 "closed" 메뉴를 통해 확인할 수 있습니다.)
  </label>
</div>

</br>
**프로젝트에 관여하기 시작했을 때**

*프로젝트는 당신의 제안을 비롯해 새로운 컨트리뷰터인 당신을 매우 환영하며 맞아줄 것입니다.*

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox14" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox14" class="overflow-hidden d-block text-normal">
    관리자에게 issue에 대해 질문 했을 때 답은 잘 해주던가요?
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox15" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox15" class="overflow-hidden d-block text-normal">
    issue들과 토론 창, 채팅(IRC나 Slack)에서 활동하는 사람들은 활발한 편입니까?
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox16" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox16" class="overflow-hidden d-block text-normal">
    pull request는 리뷰를 받고 있나요?
  </label>
</div>

<div class="clearfix mb-4">
  <input type="checkbox" id="cbox17" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox17" class="overflow-hidden d-block text-normal">
    관리자는 사람들의 컨트리뷰션에 고마워하고 있나요?
  </label>
</div>

<aside markdown="1" class="pquote">
  <img src="https://avatars1.githubusercontent.com/u/401111?v=3&s=400" class="pquote-avatar" alt="avatar">
  당신이 문제점을 발견하여 질문을 했을 때, 해당 사항에 관련된 핵심개발자들이 어떤 태도를 보이는지를 잘 관찰해야 합니다.
  보다 나아지기 위해서 건설적인 논의를 하려 하는지, 혹은 언급된 사항들에 대해 조취를 적절히 취하였는지 확인이 가능한가요?
  만약 그렇지 않고 당신의 물음에 옳은 응답없이 일방적인 비판과 불만만 내세운다면 비추입니다.
  왜냐면 오픈소스의 컨트리뷰션을 위해 쏟아도 모자랄 당신의 에너지를 쓸데없는 언쟁에 허비할 것이기 떄문입니다.
  <p markdown="1" class="pquote-credit">
— @kfogel, [_Producing OSS_](http://producingoss.com/en/evaluating-oss-projects.html)
  </p>
</aside>

## How to submit a contribution

마음에 드는 프로젝트를 찾았다면 이제 본격적으로 컨트리뷰션을 할 준비를 해봅시다. Section5 에서는 어떻게 해야 컨트리뷰션을 잘 했다고 소문이 날까? 에 대한 이야기를 할 예정입니다.


### 묻고 답하고, 답하고 묻고. 보다 많은 이야기를 해야 합니다.

단 한번만 컨트리뷰션을 하든 지속적으로 하든, 다른 이들과 이야기를 하고 협력하면서 함께 일을 하는 자세는 오픈소스를 개발함에 있어서 가장 중요한 덕목 중 하나입니다.

<aside markdown="1" class="pquote">
  <img src="https://avatars2.githubusercontent.com/u/7693422?v=3&s=460" class="pquote-avatar" alt="avatar">
  \[새로운 컨트리뷰터\]에게 팁을 주자면, 등록된 issue를 매듭짓는 가장 빠른 방법은, 물어보는 겁니다.

  저는 issue 해결을 위해 코드를 살폈을 때, `이렇게 하면 되지 않을까?` 라는 생각이 들면 언제나 이 문제에 관련된 질문을 하곤 했습니다. 그리고 내가 필요로 하는 답변들이 모였을 때, 저는 issue를 해결할 수 있었죠.

  <p markdown="1" class="pquote-credit">
— @shubheksha, [A Beginner's Very Bumpy Journey Through The World of Open Source](https://medium.freecodecamp.com/a-beginners-very-bumpy-journey-through-the-world-of-open-source-4d108d540b39#.pcswr2e78)
  </p>
</aside>

issue나 pull request를 등록하거나 대화 채널을 통해 질문 하기 전에, 아래 항목들을 참고하여 당신이 가진 생각을 효과적으로 전달할 수 있기를 바랍니다.

**설명은 객관적으로 해주세요.** 당신의 질문에 답변하는 이는 당신이 아닌 타인이라는 것을 생각하세요. 에러가 발생했다면 에러가 발생한 상황, 재현하는 방법등을 상세히 설명하고 수행하려는 작업이 무엇인지도 상세히 설명해주세요. </br>
만약 새로운 아이디어를 제안하는 경우라면 왜 그러한 생각을 하게 되었고 그 아이디어가 프로젝트에게 있어서 어떻게 유용하게 적용될 수 있는지도 설명하면 더욱 좋을 겁니다.

> 좋은 예 : 😇 _"내가 Y를 입력 했을 때 Z라는 상황이 발생하면서 X가 동작하지 않아요"_
>
> 나쁜 예 : 😢 _"X가 동작하지 않아요! 좀 고쳐주세요!"_

**선검색 후질문은 매너입니다.** 문제점이 풀리지 않아 질문을 할 수는 있습니다. 다만 도움을 구하기 전에, 프로젝트의 README 나 공식문서, 현재 등록되거나 종료된 issue들, 메일링 리스트와 인터넷 검색등 당신이 해결을 위해 시도했던 사례들을 공유해주면 더 없이 좋을 겁니다. 사람들은 스스로 문제를 해결하려는 이를 더 좋아하기 때문이죠.

> 좋은 예 : 😇 _"저는 어떻게 X가 동작하는지 잘 모르겠습니다. 가이드 문서도 읽어보고 관련 댓글도 찾아봤지만 이해가 잘 되지 않습니다."_
>
> 나쁜 예 : 😢 _"X는 어떻게 하는거야?"_

**질문/요청은 최대한 간결하고 명확하게 해주세요.** 이메일을 통해 질문하거나 컨트리뷰션을 하는 일련의 요청들은 해당 건이 확실하게 누군가에게 도움을 주는 사항이라하더라도 반드시 다른사람의 리뷰를 받아야 합니다. </br>
이는 오픈소스 프로젝트가 1인 프로젝트가 아니며 모두가 함께하는 프로젝트이기 때문입니다. 그렇기에 대부분의 오픈소스 프로젝트들은 관여하는 사람들의 몇 배에 달하는 요청들을 받고 있습니다. 그래서 당신의 질문, 혹은 요청이 너무 장황하고 길고 복잡하다면 받는 이가 도움을 주기 어려울 수도 있습니다. 따라서 요청은 최대한 간결하고 명확하게 해주는 것이 좋습니다.


> 좋은 예 : 😇 _"저는 API 튜토리얼 사용법을 찾고 있습니다."_
>
> 나쁜 예 : 😢 _"어느 고속도로에서 운전을 하던 날인데 말야. 불현듯 그런 생각이 들더라고. 우리가 프로젝트에 해야 할, 아주 좋으면서 그럴싸한 아이디어가 번뜩였지. 아마 내가 이걸 너한테 설명해주면 너도 까무라치면서 놀랄거야, 마치 '아니 정말 이걸 네가 생각해낸거야? 판타스틱한데???' 라고 감탄사를 연발하면서. 아, 그 전에 내가 대체 어떻게 이런 아이디어를 냈는지 너한테 설명을 해주자면 말야..."_


**1:1보다는 1:N 에게 의견을 물어보세요.** 중요한 정보(보안 issue나 심각한 위반행위등)를 공유해야 되는 사항이 아니라면 관리자에게 사적으로 문의를 하는 것은 지양해주세요.</br>
오픈소스는 집단지성의 힘이 가장 강력히 발휘되는 곳입니다. 그렇기에 당신의 의견을 모두에게 공개했을 때, 보다 많은 이들이 서로 배우고 좋은 성과를 낼 수 있는 방향으로 발전할 수 있을 거라고 생각합니다. 그 과정에서 발생하는 토론 또한 그 자체만로도 사람들과 당신에게 도움이 것이구요.

> 좋은 예 : 😇 _(코멘트를 달면서) "@-maintainer 안녕 모두들! PR하는 방법 좀 가르쳐주지 않을래?"_
>
> 나쁜 예 : 😢 _(이메일을 보낼 경우) "안녕. 갑작스럽게 메일을 보내서 미안해. 다름이 아니라 PR 좀 검토해 주지 않을래?"_

**질문을 하는 건 자유입니다(feat. 인내심)** 누구나 프로젝트를 처음 접한 시점이 있었을 겁니다. 흔히 능력자라 불리는 분들도 새로운 프로젝트를 접하게 되면 그 프로젝트를 알아가는 시간이 필요합니다. 마찬가지로, 오랫동안 관리자를 해왔다고 해서 그 프로젝트의 모든 것을 잘 아는 것은 아닙니다. 그렇기 때문에 당신의 질문에 대한 그들의 답이 언제나 옳고 알맞지는 않을 수 있습니다. 그러니 부디 양해부탁드립니다.

> 좋은 예 : 😇 _"이러한 문제점을 찾아주셔서 감사합니다. 당신의 제안을 바탕으로 이 문제를 해결했습니다."_
>
> 나쁜 예 : 😢 _"당신 프로젝트인데 왜 내가 말해준 버그를 못 고치는 거죠?"_

**커뮤니티의 결정을 존중해주시길 바랍니다.** 당신의 아이디어가 커뮤니티가 지향하는 방향이나 비전과 다를 수도 있습니다. 때로는 당신의 의견이 너무너무 좋은 것이라 하더라도 받아들일 수 없다고 할지도 모릅니다. 당신이 반려당한 의견에 대해 고민하고 타협점을 찾으려할때에, 어쩌면 관리자(maintainer)들은 더 오랜 시간 당신의 의견에 대해 곰곰히 생각했을 수도 있습니다.
물론, 끝내 관리자들의 의견에 당신이 동의하거나 납득할 수 없다면 fork나 개별적으로 만든 프로젝트를 통해서 당신의 생각이 담긴 오픈소스 프로젝트를 시작할 수도 있습니다.

> 좋은 예 : 😇 _"제 의견에 동의해주시지 않은 점은 굉장히 슬픕니다..하지만 제 의견이 반영되었을 경우를 상정하여 일어날 일들에 대해 설명을 해주신 덕분에 납득할 수 있었습니다. 제 의견을 들어주셔서 감사합니다."_
>
> 나쁜 예 : 😢 _"왜 내 의견은 씹나요?!"_

**서로를 존중하는 자세가 필요합니다.** 오픈 소스는 전세계에 있는 모든 이들이 함께 만들어가는 프로젝트입니다. 그렇기때문에 언어, 문화, 위치, 심지어 시간까지 서로가 다르기에 이질감을 느끼실 수도 있습니다.
게다가 의사소통의 도구가 '글'이 되기때문에 어투나 분위기까지 전달하기가 굉장히 어렵습니다. 그래서 정확한 의도는 추정할 수 밖에 없습니다.</br>
그렇기 때문에 아이디어를 조금 미뤄두거나 문맥을 좀 더 고려하거나 당신의 포지션을 좀 더 자세히 설명하는 것은
아주 좋은 자세입니다.

### 프로젝트의 문맥을 이해해야 합니다.

어떠한 일을 진행하기에 앞서서 혹시 당신의 아이디어가 이미 다른 곳에서 논의되고 있는 사항이 아닌지 확인을 해야 합니다. 프로젝트의 README, issue, 메일링 리스트, 그리고 Stack Overflow를 체크해보세요. 관련 정보를 모두 체크하는 데는 그리 오랜 시간이 걸리진 않을겁니다. 다만 명확하지 않거나 짧은 몇개의 키워드로만 검색을 하게 되면 좀 오래 걸릴 수도 있다는 점을 명심하세요.

만약 당신이 다른 어느곳에서도 당신의 아이디어를 찾을 수 없다면, 그때 아이디어의 구현을 준비하면 됩니다. 이미 당신만의 프로젝트가 Github에 있다면 issue를 등록하거나 pull request를 통해서 커뮤니티 형성할 수도 있습니다.

* **Issues** 를 등록해서 해당 주제에 대해 의견을 나누거나 대화를 할 수 있습니다.
* **Pull requests** 를 통해서 솔루션 개발을 본격적으로 시작할 수 있습니다.
* **For lightweight communication,** Stack Overflow, IRC, Slack 혹은 다른 채팅 채널에 프로젝트에 대한 질문이나 어떻게 사용하는지에 대한 FAQ가 필요할 경우에 사용할 수 있습니다.

issue를 등록하거나 pull request를 등록하기 전에 먼저 프로젝트가 가이드하고 있는 컨트리뷰트 문서(보통 CONTRIBUTING이나 README라는 이름으로 된 파일)를 살펴보고 양식에 맞춰서 누락되거나 수정할 부분이 없는지 체크하여야 합니다.

예를 들어, 특정 템플릿에 맞춰서 문서를 작성하거나, 등록한 사항에 대한 테스트를 먼저 해야 할 수도 있으며 tap or space 같은 코드린트사항까지 지켜야 할 수도 있기 때문입니다.


당신이 정말 이 프로젝트에 실용성있는 컨트리뷰션을 하기를 원한다면, 우선 issue를 등록한 후에 작업을 시작해야 합니다. 왜냐하면, 그래야 해당 프로젝트를 통해서 Github에서 제공하는 ["Watch"](https://help.github.com/articles/watching-repositories/) 기능을 통해 다른 사람들이 issue를 확인하고 각자의 의견을 제시할 수 있으며 제시된 의견에 대한 알림도 당신이 받을 수 있기 때문입니다.

<aside markdown="1" class="pquote">
  <img src="https://avatars2.githubusercontent.com/u/810438?v=3&s=400" class="pquote-avatar" alt="avatar">
  하나의 프로젝트를 만들고 개발하고 컨트리뷰션 하면서 모든 issue와 PR을 직/간접적으로 만들고 해결해나가다보면 아주 <em>많은 것</em>을 배울 수 있습니다.

<p markdown="1" class="pquote-credit">
— @gaearon [on joining projects](https://twitter.com/dan_abramov/status/819555257055322112)
  </p>
</aside>

### issue 등록에 관하여

당신은 보통 아래와 같은 상황에서 issue를 등록하게 될 것입니다.

* 스스로 해결 할 수 없는 에러를 리포팅할때
* 관리자급들이 결정해야 하는 주제나 생각들이 있을 때(ex. community, vision, policies)
* 새로운 기능이나 아이디어를 떠올렸을 때

issue에서 커뮤니케이션을 하는 팁을 소개하자면,

* **의견을 제시하고픈 issue를 봤을때는** comment를 달아서 사람들이 당신의 의견을 볼 수 있게 하는 것이 좋습니다. 그래야 사람들이 일을 2번하지 않게 할 수 있기 때문입니다.
* **issue가 등록된 지 얼마되지 않았다면,** 그 issue는 이미 어딘가에서 해결되었거나 해결중일 수도 있으니 중복 확인을 먼저 해보는 것이 좋습니다.
* **등록한 issue에 대해서 스스로 답을 찾았을 경우,** comment를 달아서 사람들에게 issue의 해결을 알리고 완료(close)처리를 하면 됩니다. 스스로 등록하고 종료했지만 해당 issue를 문서화하는 것 또한 프로젝트에 컨트리뷰션 하는 것과 마찬가지입니다.

### Pull request 등록에 관하여

당신은 보통 아래와 같은 상황에서 pull request를 등록할 겁니다.

* 사소한 오류를 고쳤을 경우 (ex. 오탈자나 링크수정, 누가봐도 명백한 오류인 것들등)
* 이미 issue로 요청하여 검토가 끝났거나 의견조율이 끝난 사항들에 대해서

pull request를 날리는 것이 일이 끝났다는 것을 의미하는 건 아닙니다. 일반적으로 pull request가 등록되면 다른 이들이 해당 프로세스를 함께 보고 피드백을 줄 수 있습니다. 이 경우 pull request의 이름(제목)에 "WIP"(Work in Progress)라는 단어를 추가하시기 바랍니다. 혹시나 빠트렸다면, 나중에라도 Commit를 통해 추가할 수 있으니 걱정 하지 않으셔도 됩니다.

프로젝트가 Github에 등록되어 있다면, 아래 순을 따라서 pull request를 등록해 볼 수 있습니다.

* 먼저 **[레파지토리를 Fork](https://guides.github.com/activities/forking/)** 하고 로컬에 clone을 받습니다. 그러면 당신의 로컬 레파지토리에 "upstream" 레파지토리로 원격지에 있는 레파지토리가 등록되게 됩니다.</br> "upstream"으로 부터 pull을 자주 받으면, 로컬에서 수정한 사항을 원격지에 merge 시도할 경우에 충돌(conflict)이 덜 발생하게 됩니다(자세한 사항은 [여기](https://help.github.com/articles/syncing-a-fork/)를 참조하세요)
* editor나 편집기가 있는 위치에 **[브랜치를 생성](https://guides.github.com/introduction/flow/)** 합니다.
* 당신의 PR에 관련된 문서나 **참조할 만한 issue** 를 살펴봅니다. (ex. "Closes #37.")
* HTML/CSS를 수정하는 작업을 해야 한다면 **before/after 스크린샷을 포함** 시키는 게 좋습니다. 스크린샷은 드래그 앤 드롭으로 pull request에 첨부가 가능합니다.
* **변경한 사항은 테스트가 필수입니다!** 기존에 테스트 하는 형식이나 양식이 있다면 따라서 테스트를 진행 해야하며, 만약 없다면 만들어서라도 테스트를 진행해야 합니다. 또한 테스트의 유무와는 상관없이 수정된 사항이 사이드 이펙트를 발생시키지는 않는지, 정상적으로 동작을 하는지에 대한 확인도 반드시 필요합니다.
* **프로젝트가 지향하는 컨트리뷰트 스타일** 은 최대한 준수해야 합니다. </br>
이는 거창한 것이 아니라 들여쓰기, 세미콜론, 또는 주석처럼 글의 양식과 같은 사소한 부분일 수도 있습니다. 그래서 별거 아니라고 치부될 수도 있습니다만, 이러한 부분을 컨트리뷰터가 세심히 챙겨주게 되면 관리자(maintainer) 입장에서는 merge를 진행하기가 훨씬 수월합니다. 게다가 쉽고 일관된 스타일을 따라 수정사항이 반영되기 때문에 다른 컨트리뷰터들이 이해하고 유지보수하기에도 많은 이점을 제공합니다.

만약 이번이 당신의 첫번째 pull request라면 @kentcdodds 가 만든 [Make a Pull Request](http://makeapullrequest.com/) 을 확인해보기 바랍니다.

## What happens after you submit a contribution

일련의 과정을 다 거쳤다면, 축하합니다. 당신은 이제 오픈 소스 컨트리뷰터가 된겁니다. 시작이 반이라고 했으니 벌써 반이나 해낸겁니다. 앞으로는 아래 사항들을 인지하면서 멋진 컨트리뷰터가 되기를 기원합니다.

### 😭 어쩌면 당신은 응답을 받지 못 할 수도 있습니다.

바라건데 컨트리뷰션을 하기 전에 위에서도 언급했지만 [해당 프로젝트가 활성화 되어 있는지를 확인](#a-checklist-before-you-contribute) 했기를 바랍니다. 물론, 활성화 되어 있는 프로젝트라 하더라도 당신의 컨트리뷰션에 대한 응답은 받지 못 할 수도 있습니다.

만약 일주일이 넘도록 응답을 받지 못 했다면, 그때는 리뷰를 요청한 이에게 양해를 구하고 다른 이에게 리뷰를 부탁하는 것이 좋습니다. 만약 리뷰를 해줄 수 있는 사람을 명확히 알고 있어서 지정하고 싶다면 해당 이의 id나 name앞에 @-를 표기하여 지명할 수도 있습니다.

하지만 부디, **개인적으로는 그 사람에게 요청하지 마시길 바랍니다**. 위에서도 언급했듯이 1:1 보다는 1:N을 추구하는 것이 오픈소스 커뮤니케이션의 본질이기 때문입니다.

만약 당신이 정중히 어필을 했음에도 불구하고 아무런 답도 받지 못 한다면, 어쩌면 아무도 응답할 수 없는 상황일 수도 있습니다.
뭐,딱히 좋은 상황은 아니지만 그렇다고 너무 낙담하진 마세요. 누구나 다 한 번쯤은 겪는 상황이니까요.

당신이 응답을 받지 못하는 데는 많은 이유가 있을 수 있습니다. 개인적인 상황 때문일수도 있고 어쩌면 당신의 예측을 벗어난 무언가 때문 일수도 있습니다.

다른 프로젝트나 컨트리뷰트 방법을 찾아보는 건 어떤가요.
오히려 다른 커뮤니티 멤버들이 해당 프로젝트에 관심을 가져서 포화상태에 이르기 전에 다른 방법을 모색하는 것도 이름있는 컨트리뷰터가 되는 한 가지 길일 수 있습니다.

### 🚧 누구라도 당신의 컨트리뷰션을 고칠 수 있습니다.

다른 이들의 피드백을 받은 후에 당신의 코드나 아이디어등을 수정해야 하는 경우가 발생할 수도 있습니다.

누군가가 당신의 pull request에 대해 변경을 요청했다는 것은 그들이 당신의 컨트리뷰션에 대한 리뷰를 했다는 것이기 때문에 좋은 현상입니다. PR을 열어보기만 하고 아무런 피드백 없이 방치되는 경우도 있으니까요.

만약 피드백을 받은 사항에 대해서 어디서부터 어떻게 변경을 해야하는지 잘 모르겠다면 먼저 리뷰를 받은 사항을 바탕으로 문제점을 파악하고 당신에게 도움을 줄 수 있는 이를 찾아 다시 물어보는 방법도 있습니다.

부득이하게 해당 issue를 해결할 시간이 없다면( 예를 들어 관련 대화를 이미 몇 달 동안이나 계속하였고 당신에게도 불가불한 사정이 생겼을 수도 있습니다. 사람 일은 모르는 거니까요. ) 관리자가 당신을 기다리지 않도록 사정을 알려야 합니다. 그래야만 해당 issue에 대해서 다른 이가 인수를 받아서 진행을 할 수 있으니까요.

### 👎 어쩌면 당신의 컨트리뷰션이 반영되지 않을 수도 있습니다.

당신의 컨트리뷰션은 어쩌면 merge 될 수도 있고 되지 않을 수도 있습니다. 그렇기에 한 번에 너무 많은 변경을 하지 않는 것이 좋다는 말씀을 드립니다. 당신의 컨트리뷰션이 왜 적용되지 않는지 납득이 가지 않는다면 해당사항을 관리자에게 문의하시기 바랍니다. 그러면 관리자가 명확한 사유를 피드백해 줄 겁니다.

그리고 피드백을 받아서 검토해보면 아마 당신도 그들의 결정을 납득하게 될 것입니다. 언성을 높이거나 무조건적인 화를 내지는 말아주십시오. 비록 방향성은 달라지겠지만 당신은 언제든 fork를 받아서 당신만의 오픈소스 프로젝트를 진행하실 수 있기 때문입니다.


### 🎉 당신의 컨트리뷰션이 적용 되었다면..!!

Olleh!! 당신은 이제 당당한 한 명의 오픈 소스 컨트리뷰터 입니다.

## 다시 한 번 축하드립니다!

컨트리뷰션이 당신에게 있어서 처음이든 아니든, 사실 그건 중요하지 않습니다. 중요한 것은 컨트리뷰션이라는 활동을 통해서 당신이 이전보다 더 나아가고 발전하는 사람이 되었다는 것입니다. 만약 당신의 컨트리뷰션이 반영되지 않았다 하더라도 당신에게 도움을 준 관리자와 여타 이들에게 고마워하는 마음을 잊지 말아주셨으면 합니다.

오픈소스는 소소하지만 하나의 issue에 pull request를 보내고 다른 이들의 의견에 comment를 달고 피드백을 보내면서 함께 해 나가는, 바로 당신과 같은 이들이 만들어 가는 것이기 때문입니다.
