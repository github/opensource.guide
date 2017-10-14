---
locale: ko-KR
title: 메인테이너를 위한 모범 사례
description: 문서화 과정에서 커뮤니티 활용에 이르기까지 오픈 소스 메인테이너로서 여러분의 삶을 편하게 만들어줍니다.
class: 모범-사례
toc:
  what-does-it-mean-to-be-a-maintainer: "메인테이너가 된다는 것은 무엇을 의미하나요?"
  documenting-your-processes: "진행과정을 문서화하기"
  learning-to-say-no: "아니오라고 말하는 것을 배우기"
  leverage-your-community: "커뮤니티 활용하기"
  bring-in-the-robots: "로봇 가져오기"
  its-okay-to-hit-pause: "정지를 눌러도 좋습니다"
order: 5
image: /assets/images/cards/best-practices.png
related:
  - metrics
  - leadership
---

## 메인테이너가 된다는 것은 무엇을 의미하나요?

많은 사람들이 사용하는 오픈 소스 프로젝트를 유지한다면, 적은 양으로 코딩하고 더 많은 이슈에 대응할 수 있습니다.

프로젝트 초기 단계에서 새로운 아이디어를 실험하고 원하는 것을 기반으로 의사 결정을 내리고 있습니다. 프로젝트의 인기가 높아짐에 따라 사용자와 기여자들과 더 잘 일할 수 있습니다.

프로젝트를 유지하려면 코드 이상을 요구합니다. 이러한 작업은 예상치 못한 경우가 많지만 성장하는 프로젝트와 마찬가지로 중요합니다. 우리는 프로세스 문서화에서부터 커뮤니티 활용에 이르기까지 당신의 삶을 편하게 해주는 몇 가지 방법을 모아봤습니다.

## 진행과정을 문서화하기

글을 작성하는 것은 메인테이너가 할 수있는 가장 중요한 일 중 하나입니다.

문서는 자신의 생각을 분명히 할 뿐만 아니라, 다른 사람들이 물어보기도 전에 필요하거나 기대하는 것을 이해하도록 도와줍니다.

글을 쓰게되면 무언가가 당신의 범위에 맞지 않을 때 아무 말도 하지 않게됩니다. 또한 사람들이 쉽게 참여하고 도움을 줍니다. 누가 프로젝트를 읽고 사용하는지 알 수 없습니다.

전체 단락을 사용하지 않더라도, 글 머리 기호를 적어 두는 것이 아에 작성하지 않는것보다 좋습니다.

### 프로젝트의 비전을 써내려가기

먼저 프로젝트의 목표를 써내려갑니다. README에 추가하거나, VISION이라 불리는 별도의 파일을 작성하십시오. 프로젝트 로드맵과 같이 도움이 될 수있는 다른 인위적인 결과물이 있는 경우, 이를 공개 할 수도 있습니다.

명확하고, 문서화 된 비전을 가지고 있으면 집중력을 유지하고 다른 기여자로부터 "scope creep"를 피할 수 있습니다.

예를 들어, @lord는 프로젝트 비전을 가짐으로써 시간을 보낼 요청을 파악하는 데 도움이 된다는 것을 발견했습니다. 새로운 관리자인, 그는 [Slate](https://github.com/lord/slate)에 대한 첫 번째 기능 요청을 받았을 때 프로젝트의 범위를 고수하지 않은 것을 후회했습니다.

<aside markdown="1" class="pquote">
  <img src="https://avatars2.githubusercontent.com/u/1976330?v=3&s=460" class="pquote-avatar" alt="avatar" alt="@lord avatar">
  I fumbled it. I didn't put in the effort to come up with a complete solution. Instead of an half-assed solution, I wish I had said "I don't have time for this right now, but I'll add it to the long term nice-to-have list."
  <p markdown="1" class="pquote-credit">
— @lord, ["새로운 오픈 소스 메인테이너를 위한 팁"](https://lord.io/blog/2014/oss-tips/)
  </p>
</aside>

### 생각을 소통하기

규칙은 신경 쓰면 더 쓰일 수 있습니다. 때로는 다른 사람들의 행동을 감시하거나 모든 재미를 없애는 것처럼 느껴질 수도 있습니다.

그러나 공정하게 작성되고 시행되면, 좋은 규칙은 메인테이너에게 힘을 줍니다. 그것들은 당신이 하고 싶지 않은 일을 하도록 끌리지 못하게 합니다.

프로젝트를 직접 경험하는 대부분의 사람들은 당신 혹은 당신이 겪는 상황에 대해 알지 못합니다. 그들은 당신이 그것에 대해 일하기 위해 돈을 받는다고 가정 할 지도 모릅니다, 특히 그들이 정기적으로 사용하고 의존하는 것이지요. 어쩌면 한번에 프로젝트에다가 많은 시간을 할애하지만, 이제는 새로운 직업이나 가족 구성원으로 바쁩니다.

이 모든 것은 완벽하게 괜찮습니다! 다른 사람들이 그것에 대해 알고 있는지 확인하시기 바랍니다.

당신의 프로젝트를 파트 타임으로 유지하거나 순수하게 자원봉사하는 경우, 당신이 가진 시간에 대해 솔직하게 말하십시오. 이것은 프로젝트가 요구하는 시간, 또는 다른 사람들이 당신의 개발에 소비하기를 원하는 시간과 같지 않습니다.

다음과 같은 몇 가지 규칙을 적어 두는 것이 좋습니다:

* 기여를 검토하고 수락하는 방법 (_Do they need tests? An issue template?_)
* 당신이 수락할 기여 유형 (_Do you only want help with a certain part of your code?_)
* 후속 조치가 필요한 순간 (_ex. "You can expect a response from a maintainer within 7 days. If you haven't heard anything by then, feel free to ping the thread."_)
* 프로젝트에 할애하는 시간 (_ex. "We only spend about 5 hours per week on this project"_)

[Jekyll](https://github.com/jekyll/jekyll/tree/master/docs), [CocoaPods](https://github.com/CocoaPods/CocoaPods/wiki/Communication-&-Design-Rules), 및 [Homebrew](https://github.com/Homebrew/brew/blob/bbed7246bc5c5b7acb8c1d427d10b43e090dfd39/docs/Maintainers-Avoiding-Burnout.md)는 메인테이너와 기여자를 위한 기본 원칙이 있는 프로젝트의 몇 가지 예시입니다.

### 열린 소통을 유지하기

상호 작용을 문서화하는 것을 잊지 마십시오. 가능한 모든 곳에서 프로젝트 공개에 대한 소통을 유지하십시오. 누군가가 개인적으로 연락하여 기능 요청 또는 지원 필요성에 대해 토론하려고하면, 정중하게 메일링 리스트 또는 이슈 트래커와 같은 공개 소통 채널로 안내합니다.

다른 관리자와 만나거나, 비공개로 중요한 결정을 내릴 경우, 또는 메모를 게시하는 경우에도 마찬가지로, 공개적으로 문서를 기록하십시오.

그러면, 커뮤니티에 가입 한 사람은 수년간 그 곳에 있었던 사람과 동일한 정보에 접근 할 수 있습니다.

## 아니오라고 말하는 것을 배우기

You've written things down. Ideally, everybody would read your documentation, but in reality, you'll have to remind others that this knowledge exists.

Having everything written down, however, helps depersonalize situations when you do need to enforce your rules.

Saying no isn't fun, but  _"Your contribution doesn't match this project's criteria"_ feels less personal than _"I don't like your contribution"_.

Saying no applies to many situations you'll come across as a maintainer: feature requests that don't fit the scope, someone derailing a discussion, doing unnecessary work for others.

### 친근한 대화를 유지하기

One of the most important places you'll practice saying no is on your issue and pull request queue. As a project maintainer, you'll inevitably receive suggestions that you don't want to accept.

Maybe the contribution changes your project's scope or doesn't match your vision. Maybe the idea is good, but the implementation is poor.

Regardless of the reason, it is possible to tactfully handle contributions that don't meet your project's standards.

If you receive a contribution you don't want to accept, your first reaction might be to ignore it or pretend you didn't see it. Doing so could hurt the other person's feelings and even demotivate other potential contributors in your community.

<aside markdown="1" class="pquote">
  <img src="https://avatars3.githubusercontent.com/u/869950?v=3&s=400" class="pquote-avatar" alt="avatar" alt="@KrauseFx avatar">
  The key to handle support for large-scale open source projects is to keep issues moving. Try to avoid having issues stall. If you're an iOS developer you know how frustrating it can be to submit radars. You might hear back 2 years later, and are told to try again with the latest version of iOS.
  <p markdown="1" class="pquote-credit">
— @KrauseFx, ["Scaling open source communities"](https://krausefx.com/blog/scaling-open-source-communities)
  </p>
</aside>

Don't leave an unwanted contribution open because you feel guilty or want to be nice. Over time, your unanswered issues and PRs will make working on your project feel that much more stressful and intimidating.

It's better to immediately close the contributions you know you don't want to accept. If your project already suffers from a large backlog, @steveklabnik has suggestions for [how to triage issues efficiently](http://words.steveklabnik.com/how-to-be-an-open-source-gardener).

Secondly, ignoring contributions sends a negative signal to your community. Contributing to a project can be intimidating, especially if it's someone's first time. Even if you don't accept their contribution, acknowledge the person behind it and thank them for their interest. It's a big compliment!

If you don't want to accept a contribution:

* **Thank them** for their contribution
* **Explain why it doesn't fit** into the scope of the project, and offer clear suggestions for improvement, if you're able. Be kind, but firm.
* **Link to relevant documentation**, if you have it. If you notice repeated requests for things you don't want to accept, add them into your documentation to avoid repeating yourself.
* **Close the request**

You shouldn't need more than 1-2 sentences to respond. For example, when a user of [celery](https://github.com/celery/celery/) reported a Windows-related error, @berkerpeksag [responded with](https://github.com/celery/celery/issues/3383):

![Celery screenshot](/assets/images/best-practices/celery.png)

If the thought of saying no terrifies you, you're not alone. As @jessfraz [put it](https://blog.jessfraz.com/post/the-art-of-closing/):

> I've talked to maintainers from several different open source projects, Mesos, Kubernetes, Chromium, and they all agree one of the hardest parts of being a maintainer is saying "No" to patches you don't want.

Don't feel guilty about not wanting to accept someone's contribution. The first rule of open source, [according to](https://twitter.com/solomonstre/status/715277134978113536) @shykes: _"No is temporary, yes is forever."_ While empathizing with another person's enthusiasm is a good thing, rejecting a contribution is not the same as rejecting the person behind it.

Ultimately, if a contribution isn't good enough, you're under no obligation to accept it. Be kind and responsive when people contribute to your project, but only accept changes that you truly believe will make your project better. The more often you practice saying no, the easier it becomes. Promise.

### 대책 세우기

To reduce the volume of unwanted contributions in the first place, explain your project's process for submitting and accepting contributions in your contributing guide.

If you're receiving too many low-quality contributions, require that contributors do a bit of work beforehand, for example:

* Fill out a issue or PR template/checklist
* Open an issue before submitting a PR

If they don't follow your rules, close the issue immediately and point to your documentation.

While this approach may feel unkind at first, being proactive is actually good for both parties. It reduces the chance that someone will put in many wasted hours of work into a pull request that you aren't going to accept. And it makes your workload easier to manage.

<aside markdown="1" class="pquote">
  <img src="https://avatars0.githubusercontent.com/u/125011" class="pquote-avatar" alt="avatar">
  Ideally, explain to them and in a CONTRIBUTING.md file how they can get a better indication in the future on what would or would not be accepted before they begin the work.
  <p markdown="1" class="pquote-credit">
— @mikemcquaid, ["Kindly Closing Pull Requests"](https://github.com/blog/2124-kindly-closing-pull-requests)
  </p>
</aside>

Sometimes, when you say no, your potential contributor may get upset or criticize your decision. If their behavior becomes hostile, [take steps to defuse the situation](https://github.com/jonschlinkert/maintainers-guide-to-staying-positive#action-items) or even remove them from your community, if they're not willing to collaborate constructively.

### 멘토십을 포옹하기

Maybe someone in your community regularly submits contributions that don't meet your project's standards. It can be frustrating for both parties to repeatedly go through rejections.

If you see that someone is enthusiastic about your project, but needs a bit of polish, be patient. Explain clearly in each situation why their contributions don't meet the expectations of the project. Try pointing them to an easier or less ambiguous task, like an issue marked _"good first bug,"_ to get their feet wet. If you have time, consider mentoring them through their first contribution, or find someone else in your community who might be willing to mentor them.

## 커뮤니티 활용하기

You don't have to do everything yourself. Your project's community exists for a reason! Even if you don't yet have an active contributor community, if you have a lot of users, put them to work.

### 작업량을 분할하기

If you're looking for others to pitch in, start by asking around.

When you see new contributors making repeated contributions, recognize their work by offering more responsibility. Document how others can grow into leadership roles if they wish.

Encouraging others to [share ownership of the project](../building-community/#share-ownership-of-your-project) can greatly reduce your own workload, as @lmccart discovered on her project, [p5.js](https://github.com/processing/p5.js?files=1).

<aside markdown="1" class="pquote">
  <img src="https://avatars3.githubusercontent.com/u/191056?v=3&s=460" class="pquote-avatar" alt="avatar">
  I’d been saying, “Yeah, anyone can be involved, you don’t have to have a lot of coding expertise [...].” We had people sign up to come [to an event] and that’s when I was really wondering: is this true, what I’ve been saying? There are gonna be 40 people who show up, and it’s not like I can sit with each of them...But people came together, and it just sort of worked. As soon as one person got it, they could teach their neighbor.
  <p markdown="1" class="pquote-credit">
—  @lmccart, ["What Does “Open Source” Even Mean? p5.js Edition"](https://medium.com/@kenjagan/what-does-open-source-even-mean-p5-js-edition-98c02d354b39#.chnjlag7p)
  </p>
</aside>

If you need to step away from your project, either on hiatus or permanently, there's no shame in asking someone else to take over for you.

If other people are enthusiastic about its direction, give them commit access or formally hand over control to someone else. If someone forked your project and is actively maintaining it elsewhere, consider linking to the fork from your original project. It's great that so many people want your project to live on!

@progrium [found that](http://progrium.com/blog/2015/12/04/leadership-guilt-and-pull-requests/) documenting the vision for his project, [Dokku](https://github.com/dokku/dokku), helped those goals live on even after he stepped away from the project:

> I wrote a wiki page describing what I wanted and why I wanted it. For some reason it came as a surprise to me that the maintainers started moving the project in that direction! Did it happen exactly how I'd do it? Not always. But it still brought the project closer to what I wrote down.

### 다른 사람들이 필요한 솔루션을 구축하게하기

If a potential contributor has a different opinion on what your project should do, you may want to gently encourage them to work on their own fork.

Forking a project doesn't have to be a bad thing. Being able to copy and modify projects is one of the best things about open source. Encouraging your community members to work on their own fork can provide the creative outlet they need, without conflicting with your project's vision.

<aside markdown="1" class="pquote">
  <img src="https://avatars1.githubusercontent.com/u/481677?v=3&s=400" class="pquote-avatar" alt="avatar">
  I cater to the 80% use case. If you are one of the unicorns, please fork my work. I won't get offended! My public projects are almost always meant to solve the most common problems; I try to make it easy to go deeper by either forking my work or extending it.
  <p markdown="1" class="pquote-credit">
— @geerlingguy, ["Why I Close PRs"](https://www.jeffgeerling.com/blog/2016/why-i-close-prs-oss-project-maintainer-notes)
  </p>
</aside>

The same applies to a user who really wants a solution that you simply don't have the bandwidth to build. Offering APIs and customization hooks can help others meet their own needs, without having to modify the source directly. @orta [found that](http://artsy.github.io/blog/2016/07/03/handling-big-projects/) encouraging plugins for CocoaPods led to "some of the most interesting ideas":

> It's almost inevitable that once a project becomes big, maintainers have to become a lot more conservative about how they introduce new code. You become good at saying "no", but a lot of people have legitimate needs. So, instead you end up converting your tool into a platform.

## 로봇을 가져오기

Just as there are tasks that other people can help you with, there are also tasks that no human should ever have to do. Robots are your friend. Use them to make your life as a maintainer easier.

### Require tests and other checks to improve the quality of your code

One of the most important ways you can automate your project is by adding tests.

Tests help contributors feel confident that they won't break anything. They also make it easier for you to review and accept contributions quickly. The more responsive you are, the more engaged your community can be.

Set up automatic tests that will run on all incoming contributions, and ensure that your tests can easily be run locally by contributors. Require that all code contributions pass your tests before they can be submitted. You'll help set a minimum standard of quality for all submissions. [Required status checks](https://help.github.com/articles/about-required-status-checks/) on GitHub can help ensure no change gets merged without your tests passing.

If you add tests, make sure to explain how they work in your CONTRIBUTING file.

<aside markdown="1" class="pquote">
  <img src="https://avatars3.githubusercontent.com/u/812892?v=3&s=460" class="pquote-avatar" alt="avatar">
  I believe that tests are necessary for all code that people work on. If the code was fully and perfectly correct, it wouldn't need changes – we only write code when something is wrong, whether that's "It crashes" or "It lacks such-and-such a feature". And regardless of the changes you're making, tests are essential for catching any regressions you might accidentally introduce.
  <p markdown="1" class="pquote-credit">
— @edunham, ["Rust's Community Automation"](http://edunham.net/2016/09/27/rust_s_community_automation.html)
  </p>
</aside>

### 자동적인 기본 관리 작업 도구를 사용하기

The good news about maintaining a popular project is that other maintainers have probably faced similar issues and built a solution for it.

There are a [variety of tools available](https://github.com/showcases/tools-for-open-source) to help automate some aspects of maintenance work. A few examples:

* [semantic-release](https://github.com/semantic-release/semantic-release) automates your releases
* [mention-bot](https://github.com/facebook/mention-bot) mentions potential reviewers for pull requests
* [Danger](https://github.com/danger/danger) helps automate code review

For bug reports and other common contributions, GitHub has [Issue Templates and Pull Request Templates](https://github.com/blog/2111-issue-and-pull-request-templates), which you can create to streamline the communication you receive. You can also set up [email filters](https://github.com/blog/2203-email-updates-about-your-own-activity) to manage your email notifications.

If you want to get a little more advanced, style guides and linters can standardize project contributions and make them easier to review and accept.

However, if your standards are too complicated, they can increase the barriers to contribution. Make sure you're only adding enough rules to make everyone's lives easier.

If you're not sure which tools to use, look at what other popular projects do, especially those in your ecosystem. For example, what does the contribution process look like for other Node modules? Using similar tools and approaches will also make your process more familiar to your target contributors.

## 정지를 눌러도 좋습니다

Open source work once brought you joy. Maybe now it's starting to make you feel avoidant or guilty.

Perhaps you're feeling overwhelmed or a growing sense of dread when you think about your projects. And meanwhile, the issues and pull requests pile up.

Burnout is a real and pervasive issue in open source work, especially among maintainers. As a maintainer, your happiness is a non-negotiable requirement for the survival of any open source project.

Although it should go without saying, take a break! You shouldn't have to wait until you feel burned out to take a vacation. @brettcannon, a Python core developer, decided to take [a month-long vacation](http://www.snarky.ca/why-i-took-october-off-from-oss-volunteering) after 14 years of volunteer OSS work.

Just like any other type of work, taking regular breaks will keep you refreshed, happy, and excited about your work.

<aside markdown="1" class="pquote">
  <img src="https://avatars1.githubusercontent.com/u/36432?v=3&s=400" class="pquote-avatar" alt="avatar">
  In maintaining WP-CLI, I've discovered I need to make myself happy first, and set clear boundaries on my involvement. The best balance I've found is 2-5 hours per week, as a part of my normal work schedule. This keeps my involvement a passion, and from feeling too much like work. Because I prioritize the issues I'm working on, I can make regular progress on what I think is most important.
  <p markdown="1" class="pquote-credit">
— @danielbachhuber, ["My condolences, you're now the maintainer of a popular open source project"](https://runcommand.io/2016/06/26/my-condolences-youre-now-the-maintainer-of-a-popular-open-source-project/)
  </p>
</aside>

Sometimes, it can be hard to take a break from open source work when it feels like everybody needs you. People may even try to make you feel guilty for stepping away.

Do your best to find support for your users and community while you're away from a project. If you can't find the support you need, take a break anyway. Be sure to communicate when you're not available, so people aren't confused by your lack of responsiveness.

Taking breaks applies to more than just vacations, too. If you don't want to do open source work on weekends, or during work hours, communicate those expectations to others, so they know not to bother you.

## 먼저 자신을 돌보기!

Maintaining a popular project requires different skills than the earlier stages of growth, but it's no less rewarding. As a maintainer, you'll practice leadership and personal skills on a level that few people get to experience. While it's not always easy to manage, setting clear boundaries and only taking on what you're comfortable with will help you stay happy, refreshed, and productive.
