---
lang: ko
title: 관리자의 모범
description: 문서화 과정에서 커뮤니티 활용에 이르기까지 오픈소스 관리자로서 여러분의 삶을 더 편하게 만들어 줍니다.
class: best-practices
order: 5
image: /assets/images/cards/best-practices.png
related:
  - metrics
  - leadership
---

## 관리자라는 직책이란

여러분이 많은 사람들이 사용하는 오픈소스 프로젝트를 관리하고 있다면, 점점 코딩은 덜 하고 이슈에 더 많이 반응하고 있다는 것을 알아차렸을 것입니다.

프로젝트의 초기 단계에서, 여러분은 새로운 아이디어를 실험하고 여러분이 원하는 것을 바탕으로 결정을 내리고 있습니다. 프로젝트가 인기를 끌면서 여러분은 사용자 및 기여자들과 더 많은 일을 하게 될 것입니다.

프로젝트 유지에는 코드 이상의 것이 필요합니다. 종종 예상치 못한 과제가 주어지기도 하지만 성장하는 프로젝트에게 이는 중요한 일입니다. 프로세스를 문서화하는 것에서부터 커뮤니티를 활용하는 것까지 여러분의 삶을 더 쉽게 만들 수 있는 몇 가지 방법을 모아 보았습니다.

## 프로세스 문서화하기

기록해두는 것은 여러분이 관리자로서 할 수 있는 가장 중요한 일 중 하나입니다.

문서화는 여러분의 생각을 분명히 할 뿐만 아니라 여러분이 필요로 하거나 기대하는 것을 사람들이 직접 물어보지 않고도 알 수 있게 합니다.

문서화를 해 두면 여러분의 의도에 맞지 않는 의견을 기각하기 더 쉬워집니다. 또한 사람들이 프로젝트에 참여하기 더 쉽게 만듭니다. 어떤 사람들이 여러분의 프로젝트를 보거나 사용하고 있는지 모르니까요.

모든 항목에 대해 작성하지 않아도 괜찮습니다. 주요 항목에 대해 적어두는 것이 아무 것도 적어놓지 않는 것보다는 낫습니다.

여려분의 문서를 항상 최신으로 유지할 수 있도록 노력하세요. 항상 업데이트하기 어렵다면 오래된 문서를 지우거나 'outdated'로 표시해서 기여자들의 업데이트를 환영한다고 알리세요.

### 프로젝트의 비전을 서술하세요

프로젝트의 목표를 이야기하는 것부터 시작하세요. 이를 README 파일 또는 새로운 VISION 파일에 추가하세요. 프로젝트 로드맵 등 도움이 될만한 자료가 더 있다면 그것도 게시하세요.

명료하고 문서화된 비전은 여러분을 집중할 수 있게 하고, 사람들의 기여로부터 생길 수 있는 'scope creep'을 피할 수 있도록 해줍니다.

예를 들어 @lord는 프로젝트 비전을 가지면 어떤 요구에 시간을 투자해야 하는지 파악하는 데 도움이 된다는 사실을 깨달았습니다. 새로운 관리자로서의 그는 [Slate](https://github.com/lord/slate)의 첫 기능 요청을 받았을 때 프로젝트의 본 목적에 집중하지 않았던 것을 아쉽게 생각했습니다.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/lord?s=180" class="pquote-avatar" alt="avatar">
  I fumbled it. I didn't put in the effort to come up with a complete solution. Instead of an half-assed solution, I wish I had said "I don't have time for this right now, but I'll add it to the long term nice-to-have list."
  <p markdown="1" class="pquote-credit">
— @lord, ["Tips for new open source maintainers”](https://lord.io/blog/2014/oss-tips/)
  </p>
</aside>

### 기대하는 바를 전달하세요

규칙을 나열하는 것은 머리 아픈 일입니다. 가끔 여러분이 사람들의 행동에 간섭하거나 재미를 없애는 것이 아닌가 하는 생각이 들 수도 있습니다.

그러나 공정하게 제정되고 시행되는 좋은 규칙은 관리자에게 제어력을 부여합니다. 하고 싶지 않은 일에 억지로 끌려들어가지 않게 해줍니다.

여러분의 프로젝트를 찾아오는 대부분의 사람들은 여러분이나 여러분의 환경에 대해 아무것도 알지 못합니다. 프로젝트에 의지하며 꾸준히 사용하는 사람들은 여러분이 그 프로젝트에서 작업하면서 보수를 받는다고 추측할지도 모릅니다. 언젠가는 프로젝트에 많은 시간을 쏟아부을 수 있었어도 이제는 새 직장이나 가족 구성원으로 정신없을 수도 있습니다.

전부 괜찮습니다! 대신 사람들에게 그렇다는 사실을 알리세요.

프로젝트 관리를 아르바이트식 혹은 자발적으로 하고 있다면 여러분이 가진 시간에 대해 솔직해지세요. 프로젝트에 투자해야 한다고 여러분이 생각하는 시간과, 사람들이 여러분이 프로젝트에 투자하기를 원하는 시간과는 다릅니다.

아래와 같은 규칙은 정해 두는 편이 좋습니다.

* 기여를 검토하고 받아들이는 방식 (_테스트를 수행해야 하나요? 정해진 이슈 템플릿이 있나요?_)
* 여러분이 받아들이고자 하는 기여 유형 (_코드의 일부분에만 기여를 받고 싶은가요?_)
* 피드백까지 예상되는 시간 (_ex. "일주일 안에는 관리자의 답변을 받으실 수 있을 것입니다. 그때까지 소식이 없다면 주저 말고 스레드에서 관리자를 호출해주세요" 등._)
* 여러분이 프로젝트에 투자하는 시간 (_ex. "저희는 이 프로젝트에 일주일에 약 5시간만을 할애하고 있습니다" 등._)

[Jekyll](https://github.com/jekyll/jekyll/tree/master/docs), [CocoaPods](https://github.com/CocoaPods/CocoaPods/wiki/Communication-&-Design-Rules), [Homebrew](https://github.com/Homebrew/brew/blob/bbed7246bc5c5b7acb8c1d427d10b43e090dfd39/docs/Maintainers-Avoiding-Burnout.md)는 관리자와 기여자를 위한 행동 원칙을 가진 프로젝트의 예시입니다.

### 열린 소통을 유지하세요

다양한 토의나 질답을 문서화하는 것을 잊지 마세요. 가능하면 어디에서든 여러분의 프로젝트에 대한 이야기는 공개적으로 하는 것이 좋습니다. 누군가 기능이나 지원 요청을 하기 위해 사적으로 연락한다면, 정중하게 메일링 리스트 혹은 이슈 트래커 등의 공개된 채널로 안내하세요.

다른 관리자와 만나거나, 공개하기 어려운 중요한 결정을 내린다면 여러분의 메모 정도라고 해도 내용은 공개적으로 게시하세요.

그러면 여러분의 프로젝트에 막 찾아온 사람도 몇 년간 있었던 사람과 같은 양의 정보를 획득할 수 있습니다.

## 거절하는 법 배우기

필요한 것들을 문서화했나요? 모두가 문서를 읽는다면 이상적이겠지만 현실은 그렇지 않습니다. 사람들에게 그런 문서가 있다는 사실을 알려주어야 합니다.

그러나 모든 것을 기록하면 규칙을 적용해야 할 때 객관적으로 상황을 해결할 수 있습니다.

거절하는 것은 썩 유쾌한 일이 아닙니다. 하지만 _"당신의 기여는 프로젝트 기준에 맞지 않아요."_가 _"당신의 기여가 마음에 들지 않네요."_보다는 덜 감정적으로 느껴집니다.

관리자로서, 본 목적에 맞지 않는 기능 요청, 토론과 관련 없는 발언, 불필요한 작업 등 거절이나 제지가 필요한 많은 상황을 맞닥뜨릴 것입니다.

### 친절한 태도를 유지하세요

가장 중요한 장소 중 하나인 No라고 말하면서 이슈와 pull request 대기열을 가져옵니다. 프로젝트 메인테이너로서, 여러분은 받아들이기를 원치않는 제안을 필연적으로 받게됩니다.

기여 내용이 프로젝트의 범위를 변경하거나 비전과 일치하지 않을 수 있습니다. 어쩌면 그 아이디어가 좋지만 구현도가 낮을 수 있습니다.

이유에 관계없이, 프로젝트 표준에 맞지 않는 기여 내용을 현명하게 처리할 수 있습니다.

동의하지 않는 기여를 받는 경우, 첫번째 반응으로는 무시하거나 보지 못했다고 둘러댈 수 있습니다. 이렇게 한다면 다른 사람의 감정에 해를 끼칠 수 있으며 커뮤니티내의 다른 잠재적인 기여자의 능력도 떨어뜨릴 수 있습니다.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/krausefx?s=180" class="pquote-avatar" alt="avatar">
  The key to handle support for large-scale open source projects is to keep issues moving. Try to avoid having issues stall. If you're an iOS developer you know how frustrating it can be to submit radars. You might hear back 2 years later, and are told to try again with the latest version of iOS.
  <p markdown="1" class="pquote-credit">
— @KrauseFx, ["오픈소스 커뮤니티 확장하기"](https://krausefx.com/blog/scaling-open-source-communities)
  </p>
</aside>

죄책감을 느끼거나 좋은 사람이 되기위해 원하지 않는 기여는 하지마십시오. 시간이 지남에 귀하의 답변되지 않은 이슈와 PR은 프로젝트에 대한 작업을 훨씬 더 스트레스와 협박으로 느낄 것입니다.

수락하고 싶지 않은 기여는 즉시 닫는 것이 좋습니다. 프로젝트에 이미 많은 양의 백로그가 있는 경우, @steveklabnik 는 [문제를 효율적으로 분류하는 방법](https://words.steveklabnik.com/how-to-be-an-open-source-gardener)에 대한 제안 사항을 제공합니다.

두번째로는, 기여를 무시하면 귀하의 커뮤니티에 부정적인 신호가 보내집니다. 프로젝트에 기여하는 것은 위협적일 수 있습니다. 특히 다른 사람이 처음인 경우에는 더욱 그렇습니다. 기여를 수락하지 않더라도 그 뒤에 있는 사람을 인정하고 관심을 가져 주신 것에 감사하길 바랍니다. 큰 칭찬입니다!

기여를 받지 않는다고 가정한 경우에는 이렇게 하십시오:

* 그들의 기여에 **감사해 합니다**
* 가능한 경우 프로젝트의 **범위에 맞지 않는 이유를 설명하고** 개선을 위한 명확한 제안을 합니다. 친절하고 단호하게 말하십시오.
* 필요한 경우 **관련 문서를 링크겁니다**. 수락하고 싶지 않은 것에 대한 반복적인 요청을 발견한 경우, 문서를 반복하여 번복하지 않도록 합시다.
* **request를 닫습니다**

응답하는 데 1-2문장 이상 필요하지 않습니다. 예시로, [celery](https://github.com/celery/celery/)의 사용자가 윈도우 관련 오류를 보고 했을때, @berkerpeksag는 [이렇게 반응했습니다](https://github.com/celery/celery/issues/3383):

![Celery screenshot](/assets/images/best-practices/celery.png)

아무도 말을 하지않는다고 해도, @jessfraz [put it](https://blog.jessfraz.com/post/the-art-of-closing/)처럼 혼자가 아닙니다:

> I've talked to maintainers from several different open source projects, Mesos, Kubernetes, Chromium, and they all agree one of the hardest parts of being a maintainer is saying "No" to patches you don't want.

누군가의 기여를 받아들이지 않으려고 죄책감을 느끼지 마십시오. 오픈소스의 첫 규칙은, @shykes [에 따르면](https://twitter.com/solomonstre/status/715277134978113536): _"아니오는 일시적이며, 예는 영원합니다."_입니다 다른 사람의 열정에 공감하는 것은 좋은 일이지만 기여를 거절하는 것은 그 뒤에있는 사람을 거절하는 것과 동일하지 않습니다.

궁극적으로, 기여가 충분하지 않은 경우, 기여를 수락 할 의무는 없습니다. 사람들이 프로젝트에 기여할 때에는 친절하고 즉각적이어야 하지만, 프로젝트를 더 좋게 만들 것이라고 생각되는 변경 사항만 수락하십시오. 더 자주 아니오라고 말하는 연습을 하면 쉽게 됩니다. 약속합시다.

### 대책 세우기

처음에 원치 않는 기여를 줄이려면, 기여 가이드에 기여를 제출하고 수락하는 프로젝트 진행 과정을 설명하십시오.

너무 많은 저품질 기여를 받는다면, 이와 같이 기여자들이 미리 약간의 작업을 해줄 것을 요구하십시오:

* 이슈 또는 PR 템플릿/체크리스트 작성하기
* PR을 제출하기 전에 이슈를 열기

만약 그들이 규칙에 따르지 않는다면, 즉시 이슈를 닫고 문서를 가리킵니다.

이러한 접근 방식이 처음에는 불친절하다고 느낄 수도 있지만, 이 대책은 실제로 서로에게도 좋습니다. 그것은 누군가가 받아 들일 수 없는 pull request에 많은 시간 낭비를 초래할 가능성을 줄여줍니다. 또한 작업 부하를 보다 쉽게 ​​관리할 수 ​​있습니다.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/mikemcquaid?s=180" class="pquote-avatar" alt="avatar">
  Ideally, explain to them and in a CONTRIBUTING.md file how they can get a better indication in the future on what would or would not be accepted before they begin the work.
  <p markdown="1" class="pquote-credit">
— @MikeMcQuaid, ["친절한 pull request 닫기"](https://github.com/blog/2124-kindly-closing-pull-requests)
  </p>
</aside>

때로는 아니오라고 말하면 잠재적 기여자가 결정을 뒤집거나 비판할 수 있습니다. 그들의 행동이 적대적으로 된다면, [상황을 완화시키기 위한 조치를 취하십시오.](https://github.com/jonschlinkert/maintainers-guide-to-staying-positive#action-items) 또는 건설적으로 협업하지 않으려는 경우 커뮤니티 자체에서 제거할 수도 있습니다.

### 멘토십을 포옹하기

커뮤니티의 누군가가 프로젝트 표준에 맞지 않는 기여를 정기적으로 제출할 수도 있습니다. 각자 당사자가 거절을 반복해서 거치는 것은 좌절할 수 있습니다.

누군가 당신의 프로젝트에 열성적이지만 약간의 수정이 필요하다면 인내심을 가집시다. 그들의 공헌이 프로젝트의 기대에 부합하지 않는 이유를 각 상황에서 분명하게 설명합니다. 발을 젖게하기 위해 _"좋은 첫 버그,"_라고 표시된 이슈와 같이 더 쉽거나 덜 모호한 작업을 가리키도록 하십시오. 시간이 있다면, 첫번째 기여를 통해 멘토링을 고려하거나 멘토를 기꺼이 도울 수 있는 다른 사람을 커뮤니티에서 찾을 수 있습니다.

## 커뮤니티 활용하기

당신은 모든 것을 스스로 할 필요가 없습니다. 프로젝트 공동체가 존재합니다! 적극적으로 참여한 커뮤니티가 없는 경우에도 많은 사용자가 있는 경우, 일하도록 하십시오.

### 작업량을 분할하기

피치를 받을 다른 사람을 찾고 있다면 주위에 물어보십시오.

새로운 기여자가 반복적으로 기여를 하는 것을 보았을 때, 더 많은 책임을 제공함으로써 자신의 업무로 인정합시다. 원한다면 다른 사람들이 리더십 역할로 성장할 수 있는 방법을 문서화하십시오.

@lmccart가 프로젝트 [p5.js](https://github.com/processing/p5.js)에서 발견한대로 [프로젝트 소유권 공유](../building-community/#share-ownership-of-your-project)를 권장하면 자신의 작업량을 크게 줄일 수 있습니다.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/lmccart?s=180" class="pquote-avatar" alt="avatar">
  I’d been saying, "Yeah, anyone can be involved, you don’t have to have a lot of coding expertise [...]." We had people sign up to come [to an event] and that’s when I was really wondering: is this true, what I’ve been saying? There are gonna be 40 people who show up, and it’s not like I can sit with each of them...But people came together, and it just sort of worked. As soon as one person got it, they could teach their neighbor.
  <p markdown="1" class="pquote-credit">
—  @lmccart, [""오픈소스"란 무엇을 의미합니까? p5.js Edition"](https://medium.com/@kenjagan/what-does-open-source-even-mean-p5-js-edition-98c02d354b39)
  </p>
</aside>

프로젝트가 중단되거나 영구히 중단되어야하는 경우, 다른 사람에게 자신을 대신하도록 요청하는 것은 부끄러운 일이 아닙니다.

다른 사람들이 그 방향에 열성적이라면, 그들에게 접근을 허용하거나 공식적으로 다른 사람에게 통제 권한을 넘겨주도록 하십시오. 다른 사람이 프로젝트를 포크하고 다른 곳에서 적극적으로 유지 관리하는 경우, 원래 프로젝트의 포크에 연결하는 것이 좋습니다. 많은 사람들이 귀하의 프로젝트가 살아가기를 원합니다!

@progrium은 프로젝트의 비전을 문서화[한 것으로 밝혀지면서](https://progrium.com/blog/2015/12/04/leadership-guilt-and-pull-requests/) [Dokku](https://github.com/dokku/dokku)가 프로젝트에서 물러 난 후에도 이러한 목표를 달성 할 수 있도록 도왔습니다.

> I wrote a wiki page describing what I wanted and why I wanted it. For some reason it came as a surprise to me that the maintainers started moving the project in that direction! Did it happen exactly how I'd do it? Not always. But it still brought the project closer to what I wrote down.

### 다른 사람들이 필요한 솔루션을 구축하게하기

잠재적 기여자가 프로젝트에서 해야 할 일에 대해 다른 견해를 가지고 있다면, 그들을 자신의 포크로 작업하도록 부드럽게 격려하고 싶을 수 있습니다.

프로젝트 포킹은 나쁜 일이 아닙니다. 프로젝트를 복사하고 수정할 수 있다는 것이 오픈소스에 관한 가장 좋은 것 중 하나입니다. 커뮤니티 회원들이 자신의 포크로 작업하도록 권장하면 프로젝트 비전과 상충하지 않고, 필요한 창의적인 판로를 제공 할 수 있습니다.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/geerlingguy?s=180" class="pquote-avatar" alt="avatar">
  I cater to the 80% use case. If you are one of the unicorns, please fork my work. I won't get offended! My public projects are almost always meant to solve the most common problems; I try to make it easy to go deeper by either forking my work or extending it.
  <p markdown="1" class="pquote-credit">
— @geerlingguy, ["PR을 닫는 이유"](https://www.jeffgeerling.com/blog/2016/why-i-close-prs-oss-project-maintainer-notes)
  </p>
</aside>

실제로 대역폭을 구축 할 필요가 없는 솔루션을 원하는 사용자에게도 마찬가지입니다. API 및 사용자 정의 후크를 제공하면 소스를 직접 수정하지 않고도 다른 사람들이 자신의 필요를 충족시킬 수 있습니다. @orta는 CocoaPods용 플러그인이 "가장 흥미로운 아이디어 중 일부"를 이끌어 냈다는 것을 [알게 되었습니다](https://artsy.github.io/blog/2016/07/03/handling-big-projects/)

> 프로젝트가 커지면 메인테이너는 새로운 코드를 어떻게 도입할 것인지 훨씬 보수적으로 판단해야합니다. 당신은 "아니오"라고 말하는 것이 좋지만 많은 사람들이 합법적인 필요를 가지고 있습니다. 따라서 도구가 대신 플랫폼으로 변환됩니다.

## Bring in the robots

다른 사람들이 당신을 도울 수 있는 작업이 있는 것처럼, 인간도 할 일이 없어야합니다. 로봇은 당신의 친구입니다. 그것들을 사용하여 메인테이너로서의 삶을 더 쉽게 만듭니다.

### 코드의 품질을 향상시키는 데 필요한 테스트 및 기타 검사

프로젝트를 자동화하는 가장 중요한 방법 중 하나는 테스트를 추가하는 것입니다.

테스트는 기여자가 아무 것도 망가트리지 않을 것이라고 확신하는 데 도움이 됩니다. 또한 기여를 신속하게 검토하고 수락하기가 더 쉽습니다. 반응이 좋을수록 커뮤니티의 참여도가 높아집니다.

들어오는 모든 기여에 대해 실행할 자동 테스트를 설정하고, 기여자가 테스트를 로컬에서 쉽게 실행할 수 있도록 하십시오. 제출하기 전에 모든 코드가 테스트에 합격해야합니다. 모든 제출물에 대해 최소한의 품질 기준을 설정하는 데 도움이됩니다. GitHub의 [Required status checks](https://help.github.com/articles/about-required-status-checks/)는 테스트 통과없이 변경 사항이 병합되지 않도록 도와줍니다.

만약 테스트를 추가한다면, 그것들이 CONTRIBUTING 파일에 어떻게 작동하는지 설명합시다.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/edunham?s=180" class="pquote-avatar" alt="avatar">
  I believe that tests are necessary for all code that people work on. If the code was fully and perfectly correct, it wouldn't need changes – we only write code when something is wrong, whether that's "It crashes" or "It lacks such-and-such a feature". And regardless of the changes you're making, tests are essential for catching any regressions you might accidentally introduce.
  <p markdown="1" class="pquote-credit">
— @edunham, ["Rust'의 커뮤니티 자동화"](https://edunham.net/2016/09/27/rust_s_community_automation.html)
  </p>
</aside>

### 자동적인 기본 관리 작업 도구를 사용하기

인기있는 프로젝트를 유지하는 것에 대한 좋은 소식은 다른 메인테이너가 비슷한 문제에 직면해 있고, 그에 대한 해결책을 마련한다는 것입니다.

유지 보수 작업의 일부 측면을 자동화하는 데 도움이되는 [다양한 도구](https://github.com/showcases/tools-for-open-source)가 있습니다. 약간의 예시입니다:

* [semantic-release](https://github.com/semantic-release/semantic-release) 릴리즈를 자동화하기
* [mention-bot](https://github.com/facebook/mention-bot) pull requests를 위한 잠재적 검토자 언급하기
* [Danger](https://github.com/danger/danger) 코드 리뷰 자동화를 도와주기

버그 보고서 및 기타 일반적인 공헌을 위해 GitHub는 [이슈 템플릿과 Pull Request 템플릿](https://github.com/blog/2111-issue-and-pull-request-templates)를 제공합니다, 귀하가 받을 수 있는 커뮤니케이션을 합리화하기 위해 만들 수 있습니다. [이메일 필터](https://github.com/blog/2203-email-updates-about-your-own-activity)를 설정하여 이메일 알림을 관리 할 수도 있습니다.

좀 더 진보적인 스타일을 원한다면, 스타일 가이드와 linter가 프로젝트 기여를 표준화하고 검토하고 받아들이기가 쉬워질 수 있습니다.

그러나, 표준이 너무 복잡하면, 기여에 대한 장벽이 높아질 수 있습니다. 모든 사람의 삶을 편하게 하기위한 규칙만 추가하고 있는지 확인하십시오.

어떤 도구를 사용해야하는지 잘 모르는 경우 다른 인기있는 프로젝트, 특히 같은 생태계에 있는 프로젝트를 살펴보십시오. 예를 들어, 다른 Node 모듈에 대한 기여 진행과정은 어떻게됩니까? 유사한 도구와 접근 방식을 사용하면 진행과정은 대상 기여자에게 더 익숙하게 됩니다.

## 잠시 멈춰도 괜찮습니다

오픈소스 작업은 한 때 기쁨을 가져다주었습니다만. 어쩌면 이제는 회피하거나 죄책감을 느낄 수 있습니다.

아마도 당신은 이 프로젝트에 대해 생각할 때, 위압적이거나 두려움에 시달리고 있습니다. 그리고 그 동안 이슈와 pull request가 늘어납니다.

번아웃은 특히 메인테이너 간 오픈소스 작업에서 실제로 발생하는 보편적인 문제입니다. 메인테이너로서 여러분의 행복은 모든 오픈소스 프로젝트의 생존을 위한 협상을 할 수 없는 요구 사항입니다.

아무 말도하지 말고 쉬쉽시오! 휴가를 위해 번아웃될 때까지 기다릴 필요가 없습니다.
파이썬 핵심 개발자인 @brettcannon은 14년간 OSS 자원 봉사를 한 후 [1개월간의 휴가](http://www.snarky.ca/why-i-took-october-off-from-oss-volunteering)를 하기로 결정했습니다.

다른 유형의 일과 마찬가지로 정기적인 휴식을 취하면 일에 대해 새롭고, 행복하며, 짜릿함을 유지할 수 있습니다.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/danielbachhuber?s=180" class="pquote-avatar" alt="avatar">
  In maintaining WP-CLI, I've discovered I need to make myself happy first, and set clear boundaries on my involvement. The best balance I've found is 2-5 hours per week, as a part of my normal work schedule. This keeps my involvement a passion, and from feeling too much like work. Because I prioritize the issues I'm working on, I can make regular progress on what I think is most important.
  <p markdown="1" class="pquote-credit">
— @danielbachhuber, ["조의를 표합니다, 당신은 지금 인기있는 오픈소스 프로젝트의 메인테이너입니다."](https://runcommand.io/2016/06/26/my-condolences-youre-now-the-maintainer-of-a-popular-open-source-project/)
  </p>
</aside>

때때로, 모든 사람들이 당신을 필요로 할 때 오픈소스 작업에서 휴식을 취하는 것이 어려울 수 있습니다. 사람들은 심지어 당신이 발걸음을 딛고 죄책감을 갖도록하려고 할 수도 있습니다.

프로젝트를 떠나려는 동안 사용자와 커뮤니티에 대한 지원을 찾으려면 최선을 다하십시오. 필요한 지원을 찾을 수 없으면 어쨌든 휴식을 취하십시오. 사용할 수 없을 때, 반드시 의사 소통을 해야하므로 응답성이 부족하게하여 사람들에게 혼동을 주지 않도록하십시오.

휴식을 취하는 것은 방학기간이상 적용됩니다. 주말이나 근무 시간 중에 오픈소스 작업을 하고싶지 않다면, 그 계획을 다른 사람들에게 알려줌으로써 그들은 당신을 귀찮게하지 않을 것입니다.

## Take care of yourself first!

인기있는 프로젝트를 유지하려면 성장 초기 단계와는 다른 기술이 필요하지만 그다지 보람이 없습니다. 메인테이너로서, 소수의 사람들이 경험할 수 있는 수준에서 리더십과 개인 기술을 연습하게됩니다. 관리가 항상 쉬운 것은 아니지만, 명확한 경계를 설정하고 자신이 편안하게 느끼는 것을 취하는 것만으로도 행복하고 생기넘치며 생산적으로 머물 수 있습니다.
