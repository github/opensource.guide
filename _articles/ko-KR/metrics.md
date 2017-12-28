---
locale: ko-KR
title: 오픈소스 측정항목
description: 성공을 측정하고 추적함으로써 오픈소스 프로젝트가 성공할 수 있도록 정보에 입각한 의사 결정을 하십시오.
class: metrics
toc:
  why-measure-anything: "왜 무엇이든지 측정합니까?"
  discovery: "발견"
  usage: "사용"
  retention: "보유"
  maintainer-activity: "메인테이너 활동"
order: 9
image: /assets/images/cards/metrics.png
related:
  - finding
  - best-practices
---

## 왜 무엇이든지 측정합니까?

데이터를 현명하게 사용하면, 오픈소스 메인테이너로서 더 나은 의사 결정을 내릴 수 있습니다.

자세한 정보를 통해 다음을 수행 할 수 있습니다:

* 사용자가 새로운 기능에 어떻게 반응하는지 이해하기
* 새로운 사용자가 어디서 왔는지 파악하기
* 이상한 사용 사례 또는 기능을 식별하거나 지원할지 여부를 결정하기
* 프로젝트의 인기를 정량화하기
* 프로젝트 사용 방법 이해하기
* 스폰서십과 보조금을 통해 돈을 모으기

예시로, [Homebrew](https://github.com/Homebrew/brew/blob/bbed7246bc5c5b7acb8c1d427d10b43e090dfd39/docs/Analytics.md)는 Google 웹 로그 분석으로 우선 순위를 결정하는 데 도움이 되는 것으로 나타났습니다:

> Homebrew는 무료로 제공되며, 여가 시간에 자원 봉사자들에 의해 전적으로 운영됩니다. 결과적으로, 우리는 미래의 기능을 설계하고 현재 작업의 우선 순위를 정하는 최선의 방법을 결정하기 위해 Homebrew 사용자에 대한 상세한 사용자 연구를 할 수 있는 자원이 없습니다. 익명 집계 사용자 분석을 사용하면 사람들이 Homebrew를 사용하는 방법, 장소 및 시기에 따라 수정 및 기능의 우선 순위를 지정할 수 있습니다.

인기가 모든 것이 아닙니다. 누구나 다른 이유로 오픈소스를 사용합니다. 오픈소스 메인테이너로서의 목표가 업무를 과시하거나, 코드에 대해 투명하게 표현하거나, 재미있게 만나는 것이라면, 측정이 중요하지 않을 수도 있습니다.

If you _are_ interested in understanding your project on a deeper level, read on for ways to analyze your project's activity.

## 발견

누구든지 프로젝트를 사용하거나 기여할 수 있게 하기전에, 이것이 존재 하는 지를 알아야합니다. 자신에게 물어보십시오: _이 프로젝트를 찾는 사람들입니까?_

![Traffic graph](/assets/images/metrics/repo_traffic_graphs_tooltip.png)

프로젝트가 GitHub에서 호스팅되고 있다면, [you can view](https://help.github.com/articles/about-repository-graphs/#traffic) how many people land on your project and where they come from. From your project's page, click "Graphs", then "Traffic". On this page, you can see:

* **총 페이지 뷰:** 얼마나 많은 조회 횟수로 프로젝트를 보았는지 알려줍니다

* **총 고유 방문자수:** 얼마나 많은 사람들이 프로젝트를 보았는지 알려줍니다

* **참고한 사이트:** 방문자가 어디에서 왔는지 알려줍니다. 이 통계는 잠재 고객에게 도달할 수있는 위치와 홍보 활동의 효과를 파악하는 데 도움이됩니다.

* **인기 컨텐츠:** 방문자가 프로젝트에서 어디로 이동했는지 알려주며, 페이지 뷰와 고유 방문자별로 세분화됩니다.

[GitHub stars](https://help.github.com/articles/about-stars/) can also help provide a baseline measure of popularity. While GitHub stars don't necessarily correlate to downloads and usage, they can tell you how many people are taking notice of your work.

You may also want to [track discoverability in specific places](https://opensource.com/business/16/6/pirate-metrics): for example, Google PageRank, referral traffic from your project's website, or referrals from other open source projects or websites.

## 사용

People are finding your project on this wild and crazy thing we call the internet. Ideally, when they see your project, they'll feel compelled to do something. The second question you'll want to ask is: _are people using this project?_

npm 또는 RubyGems.org와 같은 패키지 관리자를 사용하여 프로젝트를 배포하는 경우 프로젝트 다운로드를 추적할 수 있습니다.

Each package manager may use a slightly different definition of "download", and downloads do not necessarily correlate to installs or use, but it provides some baseline for comparison. Try using [Libraries.io](https://libraries.io/) to track usage statistics across many popular package managers.

If your project is on GitHub, navigate again to the "Traffic" page. You can use the [clone graph](https://github.com/blog/1873-clone-graphs) to see how many times your project has been cloned on a given day, broken down by total clones and unique cloners.

![Clone graph](/assets/images/metrics/clone_graph.png)

프로젝트를 발견한 사람의 수에 비해 사용량이 적을 경우, 고려해야 할 두 가지 문제가 있습니다. 어느 한 쪽으로는:

* 프로젝트가 잠재 고객을 성공적으로 전환하지 못했거나, 또는
* 틀린 지지자를 끌어들이고 있습니다.

예를 들어, 프로젝트가 Hacker News의 첫 페이지에있는 경우, Hacker News의 모든 사용자에게 도달했기 때문에 발견(트래픽)은 증가하지만 전환율은 낮아질 수 있습니다. 그러나 Ruby 프로젝트가 Ruby 컨퍼런스에 등장한다면 타겟 잠재 고객의 전환율이 높아질 가능성이 큽니다.

잠재 고객이 어디에서 왔는지 파악하고 프로젝트 페이지에서 다른 사람들에게 당신이 직면한 두가지 문제점을 파악하도록 요청하십시오.

사람들이 프로젝트를 사용하고 있다는 것을 알게되면, 사람들이 프로젝트를 통해 무엇을 하고 있는지 파악하려고 할 수 있습니다. 그들은 당신의 코드를 포크하고 기능을 추가함으로써 그것을 구축하고 있습니까? 그들은 과학이나 비즈니스를 위해 그것을 사용하고 있습니까?

## 보유

People are finding your project and they're using it. The next question you'll want to ask yourself is: _are people contributing back to this project?_

It's never too early to start thinking about contributors. Without other people pitching in, you risk putting yourself into an unhealthy situation where your project is _popular_ (many people use it) but not _supported_ (not enough maintainer time to meet demand).

Retention also requires an [inflow of new contributors](http://blog.abigailcabunoc.com/increasing-developer-engagement-at-mozilla-science-learning-advocacy#contributor-pathways_2), as previously active contributors will eventually move on to other things.

정기적으로 추적할 수 있는 커뮤니티 측정 항목의 예는 다음과 같습니다:

* **Total contributor count and number of commits per contributor:** Tells you how many contributors you have, and who's more or less active. On GitHub, you can view this under "Graphs" -> "Contributors." Right now, this graph only counts contributors who have committed to the default branch of the repository.

![Contributor graph](/assets/images/metrics/repo_contributors_specific_graph.png)

* **First time, casual, and repeat contributors:** Helps you track whether you're getting new contributors, and whether they come back. (Casual contributors are contributors with a low number of commits. Whether that's one commit, less than five commits, or something else is up to you.) Without new contributors, your project's community can become stagnant.

* **Number of open issues and open pull requests:** If these numbers get too high, you might need help with issue triaging and code reviews.

* **Number of _opened_ issues and _opened_ pull requests:** Opened issues means somebody cares enough about your project to open an issue. If that number increases over time, it suggests people are interested in your project.

* **Types of contributions:** For example, commits, fixing typos or bugs, or commenting on an issue.

<aside markdown="1" class="pquote">
  <img src="https://avatars1.githubusercontent.com/u/4483" class="pquote-avatar" alt="avatar">
  Open source is more than just code. Successful open source projects include code and documentation contributions together with conversations about these changes.
  <p markdown="1" class="pquote-credit">
— @arfon, ["오픈소스의 형태"](https://github.com/blog/2195-the-shape-of-open-source)
  </p>
</aside>

## 메인테이너 활동

Finally, you'll want to close the loop by making sure your project's maintainers are able to handle the volume of contributions received. The last question you'll want to ask yourself is: _am I (or are we) responding to our community?_

응답이 없는 메인테이너는 오픈소스 프로젝트의 병목 현상이 됩니다. 누군가 기여를 제출했지만 메인테이너가 듣지 못하면 기분이 나빠져서 떠나기도 합니다.

[Research from Mozilla](https://docs.google.com/presentation/d/1hsJLv1ieSqtXBzd5YZusY-mB8e1VJzaeOmh8Q4VeMio/edit#slide=id.g43d857af8_0177) suggests that maintainer responsiveness is a critical factor in encouraging repeat contributions.

Consider tracking how long it takes for you (or another maintainer) to respond to contributions, whether an issue or a pull request. Responding doesn't require taking action. It can be as simple as saying: _"Thanks for your submission! I'll review this within the next week."_

다음과 같이 기여 프로세스의 단계간에 이동하는 데 걸리는 시간을 측정 할 수도 있습니다:

* 이슈가 열려있는 평균 시간
* 이슈가 PR에 의해 폐쇄되는지 여부
* 부실 이슈가 종결 되는지 여부
* pull request을 병합하는 평균 시간

## 📊 를 사용하여 사람들에 대해 알아보기

측정 기준을 이해하면 적극적으로 성장하는 오픈소스 프로젝트를 구축하는 데 도움이됩니다. 대시 보드의 모든 측정치를 추적하지 않더라도, 위의 프레임워크를 사용하여 프로젝트가 성공하는 데 도움이 되는 동작 유형에 주의를 기울이십시오.