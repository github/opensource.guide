---
lang: ko
untranslated: true
title: 오픈 소스 메인테이너를 위한 균형 유지
description: 메인테이너를 위한 자기 관리 및 번아웃 방지 팁
class: balance
order: 0
image: /assets/images/cards/maintaining-balance-for-open-source-maintainers.png
---

오픈 소스 프로젝트의 인기가 높아질수록, 장기적으로 신선함과 생산성을 유지하려면 명확한 경계를 설정하는 것이 중요합니다.

메인테이너들의 경험과 그들이 균형을 찾는 전략을 더 깊이 이해하기 위해, 우리는 <a href="http://maintainers.github.com/">메인테이너 커뮤니티</a>의 40명과 워크숍을 진행했으며, 이를 통해 오픈 소스에서 번아웃을 경험한 사례와, 그들이 균형을 유지하는 데 도움이 된 실천 방법을 직접 배울 수 있었습니다. 여기서 개인 생태계(personal ecology)라는 개념이 중요한 역할을 합니다.

그렇다면 개인 생태계란 무엇일까요? <a href="https://rockwoodleadership.org/nonprofit-four-day-workweek-can-take-care-still-change-world/#:~:text=personal%20ecology%3A%20maintaining%20balance%2C%20pacing%20and%20efficiency%20to%20sustain%20your%20energy%20over%20a%20lifetime%20of%20activism">Rockwood Leadership Institute의 설명</a>에 따르면, 여기에는 "<strong>우리의 에너지를 평생 동안 지속하기 위해 균형, 속도 그리고 효율성을 유지하는 것</strong>"이 포함됩니다. 
이는 메인테이너들이 시간이 흐르면서 변화하는 더 큰 생태계의 일부로서 자신의 역할과 기여를 인식하는 데 도움을 주는 개념이 되었습니다. 번아웃은 [세계보건기구(WHO)가 정의](https://icd.who.int/browse11/l-m/en#/http://id.who.int/icd/entity/129180281)한 바와 같이 만성적인 업무 스트레스로 인해 발생하는 증후군이며, 메인테이너들 사이에서도 흔히 나타납니다. 이는 종종 동기 상실, 집중력 저하, 그리고 기여자 및 커뮤니티에 대한 공감 부족으로 이어집니다.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/gabek?s=180" class="pquote-avatar" alt="avatar">
  일에 집중하거나 시작할 수 없었습니다. 사용자들에 대한 공감도 부족했죠.
  <p markdown="1" class="pquote-credit">
— <a href="https://github.com/gabek">@gabek</a>, Owncast live streaming server의 메인테이너, 그의 오픈 소스 작업에 대한 번아웃의 영향에 대해.
  </p>
</aside>

이 개인 생태계 개념을 수용함으로써, 메인테이너들은 번아웃을 사전에 방지하고, 자기 관리를 우선하며, 균형을 유지하여 최상의 작업을 수행할 수 있습니다.

## 메인테이너를 위한 자기 관리 및 번아웃 방지 팁:

### 오픈 소스에서 작업하는 동기(motivation)를 확인하기

오픈 소스 유지보수의 어떤 부분이 여러분에게 활력을 주는지 생각해 보세요. 자신의 동기를 이해하면, 지속적으로 참여하면서 새로운 도전에 대비할 수 있도록 작업의 우선순위를 정하는 데 도움이 됩니다. 사용자의 긍정적인 피드백이든, 커뮤니티와 협업하고 교제하는 기쁨이든, 코드에 깊이 몰입하는 만족감이든, 자신의 동기를 인식하는 것이 집중 방향을 설정하는 데 도움이 될 수 있습니다.

### 균형을 잃고 스트레스 받는 원인을 되돌아보기

번아웃이 발생하는 원인을 이해하는 것이 중요합니다. 오픈 소스 메인테이너들 사이에서 공통적으로 나타나는 몇 가지 주요 원인은 다음과 같습니다:

* **긍정적인 피드백 부족:** 사용자들은 불만이 있을 때 연락을 취할 가능성이 훨씬 더 높습니다. 모든 것이 원활하게 작동하면 그들은 조용히 있는 경우가 많지요. 당신의 기여가 어떤 변화를 가져오는지 보여주는 긍정적인 피드백 없이 그저 늘어나는 문제(issue) 목록을 지켜보는 것은 좌절감을 불러올 수 있습니다.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/thisisnic?s=180" class="pquote-avatar" alt="avatar">
  가끔은 공허 속에 소리치는 느낌이 들 때가 있고, 피드백은 정말로 내게 힘을 불어넣어준다는 것을 알게 됐어요. 우리는 행복하지만 조용한 사용자들이 많이 있어요.
  <p markdown="1" class="pquote-credit">
— <a href="https://github.com/thisisnic">@thisisnic</a>, Apache Arrow의 메인테이너
  </p>
</aside>

* **'아니오'라고 말하지 않기:** 오픈 소스 프로젝트에서는 생각보다 많은 책임을 맡게 되기 쉽습니다. 사용자, 기여자 또는 다른 메인테이너로부터든, 우리는 항상 그들의 기대에 부응할 수는 없습니다.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/agnostic-apollo?s=180" class="pquote-avatar" alt="avatar">
  저는 FOSS에서 흔히 하는 것처럼, 여러 사람이 해야 할 일을 한 명 이상이 맡아서 해야 한다는 것을 알게 되었습니다.
  <p markdown="1" class="pquote-credit">
— <a href="https://github.com/agnostic-apollo">@agnostic-apollo</a>, Termux의 메인테이너, 업무에서 번아웃을 유발하는 원인에 대해
  </p>
</aside>

* **혼자 일하기:** 메인테이너가 된다는 것은 엄청나게 외로울 수 있습니다. 심지어 여러 명의 메인테이너와 함께 일하더라도 지난 몇 년 동안은 분산된 팀을 직접 소집하는 것은 어려웠습니다.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/gabek?s=180" class="pquote-avatar" alt="avatar">
 특히 코로나19로 인해 재택근무를 하게 되면서 누군가를 만나거나 대화를 나누기가 더 어려워졌습니다.
  <p markdown="1" class="pquote-credit">
— <a href="https://github.com/gabek">@gabek</a>, Owncast live streaming server의 메인테이너, 그의 오픈 소스 작업에 대한 번아웃의 영향에 대해.
  </p>
</aside>

* **부족한 시간 혹은 자원:** 이는 특히 프로젝트를 진행하기 위해 여가 시간을 희생해야 하는 자원봉사자 메인테이너들이 해당됩니다.

<aside markdown="1" class="pquote">
  저는 제 저축을 모두 소진하지 않고, 나중에 그것을 보충하기 위해 많은 계약 일을 해야 한다는 생각 없이 오픈 소스 작업에 집중할 수 있도록 더 많은 재정적 지원을 [받고 싶습니다].
  <p markdown="1" class="pquote-credit">
— 오픈 소스 메인테이너
  </p>
</aside>

* **상충되는 기대:** 오픈 소스는 서로 다른 동기를 가진 여러 그룹으로 가득 차 있어, 이를 조정하는 것이 어려울 수 있습니다. 오픈 소스를 유료로 진행하는 경우, 때때로 당신 고용주의 관심사와 커뮤니티의 이익이 충돌할 수도 있습니다.

<aside markdown="1" class="pquote">
  유료 오픈 소스에서는 고용주의 초점과 커뮤니티에 가장 좋은 것이 무엇인지에 대한 충돌이 발생할 수 있습니다.
  <p markdown="1" class="pquote-credit">
— 오픈 소스 메인테이너
  </p>
</aside>

### 번아웃 징후를 주의하기

지금처럼 10주 동안 일을 할 수 있겠습니까? 10달은요? 10년은요?

[@shaunagm](https://github.com/shaunagm)의 [Burnout Checklist](https://governingopen.com/resources/signs-of-burnout-checklist.html)와 같은 도구들이 현재 속도를 되돌아보고 조정할 부분이 있는지 확인하는 데 도움을 줄 수 있습니다. 일부 메인테이너는 웨어러블 기술을 사용해 수면 질이나 심박수 변동성 (둘 다 스트레스와 관련 있음)과 같은 지표를 추적하기도 합니다.

<aside markdown="1" class="pquote">
 저는 좋은 웨어러블 기기를 매우 신뢰합니다. 과학을 기반으로 하면, 더 나은 방법을 알 수 있고 당신이 원하는 최적의 상태에 어떻게 도달할 수 있을지 이해할 수 있습니다. 
  <p markdown="1" class="pquote-credit">
— 오픈 소스 메인테이너
  </p>
</aside>

### 자기 자신과 커뮤니티를 계속 유지하려면 무엇이 필요할까?

이것은 각 메인테이너마다 다르게 나타나며, 인생의 단계와 다른 외부 요인에 따라 달라질 수 있습니다. 하지만 우리가 들은 몇 가지 주요 주제는 다음과 같습니다:

* **커뮤니티에 의지하기:** 업무 위임과 기여자를 찾는 것은 업무 부담을 덜어줄 수 있습니다. 프로젝트에 여러 접점을 두면 걱정 없이 휴식을 취할 수 있습니다. 다른 메인테이너 및 더 넓은 커뮤니티와 연결하세요, [메인테이너 커뮤니티](http://maintainers.github.com/)같은 곳이요. 이는 동료 지원 및 학습을 위한 훌륭한 리소스가 될 수 있습니다.

  사용자 커뮤니티와 소통할 수 있는 방법을 찾을 수도 있습니다. 이를 통해 정기적으로 피드백을 듣고 당신의 오픈 소스 작업의 영향을 파악할 수 있습니다.

* **자금 확보 탐색:** 피자값 정도의 지원이든, 오픈 소스를 전업으로 하려고 하든, 도움을 위한 리소스는 있습니다! 첫 단계로 [GitHub Sponsors](https://github.com/sponsors)를 켜서 다른 사람들이 당신의 오픈 소스 작업을 후원할 수 있게 고려해보세요. 만약 전업으로 전환하려고 생각한다면, [GitHub Accelerator](http://accelerator.github.com/)의 다음 라운드에 지원하세요.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/mansona?s=180" class="pquote-avatar" alt="avatar">
  저는 얼마 전 팟캐스트에 출연했을 때, 우리는 오픈 소스 유지 관리와 지속 가능성에 대해 이야기하고 있었죠. 깃허브에서 제 작업을 지원해주는 소수의 사람들만으로도 게임 앞에 앉아있는 대신, 오픈 소스를 위한 작은 일을 하나 하기로 했다는 제 결정을 발견했어요.
  <p markdown="1" class="pquote-credit">
— <a href="https://github.com/mansona">@mansona</a>, EmberJS의 메인테이너
  </p>
</aside>

* **도구 사용하기:** [GitHub Copilot](https://github.com/features/copilot/)이나 [GitHub Actions](https://github.com/features/actions) 같은 도구를 탐구하여 반복적인 작업을 자동화하고 더 의미 있는 기여를 할 수 있는 시간을 확보하세요.

<aside markdown="1" class="pquote">
 지루한 일엔 [Copilot](https://github.com/features/copilot/)를 쓰고, 재미있는 일은 직접 하세요.
  <p markdown="1" class="pquote-credit">
— 오픈 소스 메인테이너
  </p>
</aside>

* **휴식과 재충전:** 오픈 소스 외에도 취미와 관심사에 시간을 할애하세요. 주말에는 쉬면서 재충전하고, [GitHub status](https://docs.github.com/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/personalizing-your-profile#setting-a-status)를 설정하여 언제 일할 수 있는지를 나타내보세요! 숙면은 장기적인 노력 지속 능력에 큰 차이를 만들 수 있습니다.

  프로젝트에서 특히 즐기는 부분이 있다면, 그 부분을 경험할 수 있도록 작업을 구성해 보세요.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/danielroe?s=180" class="pquote-avatar" alt="avatar">
  저는 하루 중간에 '창의적인 순간'을 더 많이 만들 수 있는 기회를 찾고 있어요. 저녁에 손을 다 놔버리기보다요.
  <p markdown="1" class="pquote-credit">
— <a href="https://github.com/danielroe">@danielroe</a>, Nuxt의 메인테이너
  </p>
</aside>

* **경계를 설정하기:** 모든 요청에 '예(yes)'라고 답할 수는 없습니다. "지금은 그 일을 할 수 없고, 앞으로도 할 계획이 없다"고 간단히 말하거나, README에 내가 하고 싶은 일과 하지 않을 일을 나열하는 방식으로도 충분히 할 수 있습니다. 예를 들어 다음과 같이 말할 수 있습니다: "나는 PR을 만든 이유가 명확하게 나열된 PR만 병합합니다." 또는 "나는 매주 목요일 6시부터 7시까지만 이슈를 리뷰합니다". 이렇게 하면 다른 사람들이 당신의 기대치를 알게 되고, 나중에 기여자나 사용자들이 시간에 대해 무리한 요구를 할 때, 이를 완화할 수 있는 기준을 제시할 수 있게 됩니다.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/mikemcquaid?s=180" class="pquote-avatar" alt="avatar">
이러한 측면에서 다른 사람을 의미 있게 신뢰하려면, 모든 요청에 '예'라고 말하는 사람이 되어서는 안 됩니다. 그렇게 하면 직업적이거나 개인적으로 경계를 유지하기 어려우며, 신뢰받는 동료가 되기도 어렵습니다.
  <p markdown="1" class="pquote-credit">
— <a href="https://github.com/mikemcquaid">@mikemcquaid</a>, [아니라고 말하기(Saying No)](https://mikemcquaid.com/saying-no/)에서 Homebrew의 메인테이너가
  </p>
</aside>

  유독한(toxic) 행동과 부정적인 상호작용을 단호하게 차단하는 법을 배우세요. 관심 없는 일에 에너지를 쏟지 않아도 괜찮습니다.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/IvanSanchez?s=180" class="pquote-avatar" alt="avatar">
내 소프트웨어는 무료이지만 내가 들인 시간과 관심은 무료가 아니죠.
  <p markdown="1" class="pquote-credit">
— <a href="https://github.com/IvanSanchez">@IvanSanchez</a>, Leaflet의 메인테이너
  </p>
</aside>

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/foosel?s=180" class="pquote-avatar" alt="avatar">
오픈소스 유지보수에는 어두운 면이 있다는 것은 비밀이 아닙니다. 그중 하나는 감사함을 모르거나 자격이 없거나 노골적으로 해로운 사람들과 때때로 교류해야 한다는 점입니다. 프로젝트의 인기가 높아질수록 이러한 종류의 교류의 빈도도 증가하여 메인테이너의 부담이 가중되고 메인테이너의 번아웃을 유발하는 상당한 위험 요소가 될 수 있습니다.

  <p markdown="1" class="pquote-credit">
— <a href="https://github.com/foosel">@foosel</a>, [독성이 있는 사람들을 대처하는 방법(How to deal with toxic people)](https://www.youtube.com/watch?v=7lIpP3GEyXs)에서 Octoprint의 메인테이너가
  </p>
</aside>

 개인 생태학은 당신의 오픈 소스 여정을 진행하면서 발전하는 지속적인 실천이라는 점을 기억하세요. 자기 관리를 우선시하고 균형 감각을 유지함으로써, 당신은 오픈 소스 커뮤니티에 효과적이고 지속 가능하게 기여할 수 있고, 이는 장기적으로 웰빙과 프로젝트의 성공을 함께 보장할 수 있습니다.

## 추가 자료

* [Maintainer Community](http://maintainers.github.com/)
* [The social contract of open source](https://snarky.ca/the-social-contract-of-open-source/), Brett Cannon
* [Uncurled](https://daniel.haxx.se/uncurled/), Daniel Stenberg 
* [How to deal with toxic people](https://www.youtube.com/watch?v=7lIpP3GEyXs), Gina Häußge
* [SustainOSS](https://sustainoss.org/)
* [Rockwood Art of Leadership](https://rockwoodleadership.org/art-of-leadership/)
* [Saying No](https://mikemcquaid.com/saying-no/), Mike McQuaid
* [Governing Open](https://governingopen.com/)
* Workshop agenda was remixed from [Mozilla's Movement Building from Home](https://foundation.mozilla.org/en/blog/its-a-wrap-movement-building-from-home/) series

## 기여자

이 가이드를 위해 자신의 경험과 팁을 공유해 주신 모든 메인테이너분들께 진심으로 감사드립니다!

이 가이드는 [@abbycabs](https://github.com/abbycabs)가 작성했으며, 아래 기여자들의 기여가 있었습니다.

[@agnostic-apollo](https://github.com/agnostic-apollo)
[@AndreaGriffiths11](https://github.com/AndreaGriffiths11)
[@antfu](https://github.com/antfu)
[@anthonyronda](https://github.com/anthonyronda)
[@CBID2](https://github.com/CBID2)
[@Cli4d](https://github.com/Cli4d)
[@confused-Techie](https://github.com/confused-Techie)
[@danielroe](https://github.com/danielroe)
[@Dexters-Hub](https://github.com/Dexters-Hub)
[@eddiejaoude](https://github.com/eddiejaoude)
[@Eugeny](https://github.com/Eugeny)
[@ferki](https://github.com/ferki)
[@gabek](https://github.com/gabek)
[@geromegrignon](https://github.com/geromegrignon)
[@hynek](https://github.com/hynek)
[@IvanSanchez](https://github.com/IvanSanchez)
[@karasowles](https://github.com/karasowles)
[@KoolTheba](https://github.com/KoolTheba)
[@leereilly](https://github.com/leereilly)
[@ljharb](https://github.com/ljharb)
[@nightlark](https://github.com/nightlark)
[@plarson3427](https://github.com/plarson3427)
[@Pradumnasaraf](https://github.com/Pradumnasaraf)
[@RichardLitt](https://github.com/RichardLitt)
[@rrousselGit](https://github.com/rrousselGit)
[@sansyrox](https://github.com/sansyrox)
[@schlessera](https://github.com/schlessera)
[@shyim](https://github.com/shyim)
[@smashah](https://github.com/smashah)
[@ssalbdivad](https://github.com/ssalbdivad)
[@The-Compiler](https://github.com/The-Compiler)
[@thehale](https://github.com/thehale)
[@thisisnic](https://github.com/thisisnic)
[@tudoramariei](https://github.com/tudoramariei)
[@UlisesGascon](https://github.com/UlisesGascon)
[@waldyrious](https://github.com/waldyrious) + 이외의 다른 많은 사람들!
