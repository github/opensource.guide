---
lang: ar
direction: rtl
title: أفضل الممارسات للصوّان
description: سهّل حياتك كصائن مصادر مفتوحة. من توثيق العمليات إلى الاستفادة من مجتمعك.
class: best-practices
order: 5
image: /assets/images/cards/best-practices.png
related:
  - metrics
  - leadership
---

## ما معنى أن تكون صائن؟

إذا كنت تصون مشروع مصادر مفتوحة يستخدمه الكثير من الناس، ربما لاحظت أنك أصبحت تقوم بالبرمجة بشكل أقل وبدأت بالرد على التذاكر بشكل أكبر.

في المراحل الأولى من المشروع، ستختبر أفكارًا جديدةً وتتخذ قرارات بناءً على ما تريد. وبعد أن تزداد شهرة مشروعك ستجد نفسك في تعمل مع المستخدمين والمساهمين بشكل أكبر.

صيانة مشروع تتطلب أكثر من الكود. هذه المهام غير متوقعة في العادة، ولكنها بنفس درجة الأهمية في المشاريع الكبيرة. جمعنا بعض الوسائل المساعدة (من توثيق العمليات إلى الاستفادة من مجتمعك) لجعل  حياتك أسهل.

## توثيق العمليات

Writing things down is one of the most important things you can do as a maintainer.

Documentation not only clarifies your own thinking, but it helps other people understand what you need or expect, before they even ask.

Writing things down makes it easier to say no when something doesn't fit into your scope. It also makes it easier for people to pitch in and help. You never know who might be reading or using your project.

Even if you don't use full paragraphs, jotting down bullet points is better than not writing at all.

Remember to keep your documentation up-to-date. If you're not able to always do this, delete your outdated documentation or indicate it is outdated so contributors know updates are welcome.

### اكتب رؤية مشروعك

Start by writing down the goals of your project. Add them to your README, or create a separate file called VISION. If there are other artifacts that could help, like a project roadmap, make those public as well.

Having a clear, documented vision keeps you focused and helps you avoid "scope creep" from others' contributions.

For example, @lord discovered that having a project vision helped him figure out which requests to spend time on. As a new maintainer, he regretted not sticking to his project's scope when he got his first feature request for [Slate](https://github.com/lord/slate).

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/lord?s=180" class="pquote-avatar" alt="avatar">
  I fumbled it. I didn't put in the effort to come up with a complete solution. Instead of an half-assed solution, I wish I had said "I don't have time for this right now, but I'll add it to the long term nice-to-have list."
  <p markdown="1" class="pquote-credit">
— @lord, ["Tips for new open source maintainers"](https://lord.io/blog/2014/oss-tips/)
  </p>
</aside>

### أوصل توقعاتك

Rules can be nerve-wracking to write down. Sometimes you might feel like you're policing other people's behavior or killing all the fun.

Written and enforced fairly, however, good rules empower maintainers. They prevent you from getting dragged into doing things you don't want to do.

Most people who come across your project don't know anything about you or your circumstances. They may assume you get paid to work on it, especially if it's something they regularly use and depend on. Maybe at one point you put a lot of time into your project, but now you're busy with a new job or family member.

All of this is perfectly okay! Just make sure other people know about it.

If maintaining your project is part-time or purely volunteered, be honest about how much time you have. This is not the same as how much time you think the project requires, or how much time others want you to spend.

Here are a few rules that are worth writing down:

* How a contribution is reviewed and accepted (_Do they need tests? An issue template?_)
* The types of contributions you'll accept (_Do you only want help with a certain part of your code?_)
* When it's appropriate to follow up (_for example, "You can expect a response from a maintainer within 7 days. If you haven't heard anything by then, feel free to ping the thread."_)
* How much time you spend on the project (_for example, "We only spend about 5 hours per week on this project"_)

[Jekyll](https://github.com/jekyll/jekyll/tree/master/docs), [CocoaPods](https://github.com/CocoaPods/CocoaPods/wiki/Communication-&-Design-Rules), and [Homebrew](https://github.com/Homebrew/brew/blob/bbed7246bc5c5b7acb8c1d427d10b43e090dfd39/docs/Maintainers-Avoiding-Burnout.md) are several examples of projects with ground rules for maintainers and contributors.

### أبق التواصل علنيًا

لا تنس أن توثق تواصلك. أبق التواصل حول مشروعك علينًا قدر ما استطعت, إذا حاول أحد التواصل معك بشكل منفرد للتواصل حول طلب خاصية أو احتياج دعم، وجههم منهم بشكل مؤدب لقناة تواصل عامة مثل القائمة البريدية أو متتبع القضايا.

إذا تقابلت مع صوّان آخرين أو اتخذت قرارات كبيرة في وسط خاص، وثق هذه المحادثات بشكل عام حتى لو اكتفيت بنشر ملاحظاتك.

بهذه الطريقة سيكون أي شخص ينظم لمجتمعك لديه وصول لنفس المعلومات مثل أي شخص موجود منذ سنوات.

## تعلم أن تقول لا

You've written things down. Ideally, everybody would read your documentation, but in reality, you'll have to remind others that this knowledge exists.

Having everything written down, however, helps depersonalize situations when you do need to enforce your rules.

Saying no isn't fun, but  _"Your contribution doesn't match this project's criteria"_ feels less personal than _"I don't like your contribution"_.

Saying no applies to many situations you'll come across as a maintainer: feature requests that don't fit the scope, someone derailing a discussion, doing unnecessary work for others.

### ابق المحادثة ودية

أحد أكثر الأماكن التي ستتدرب على قول لا فيها هو صف طلبات السحب والمشاكل. كصائن مشروع ستصلك حتمًا بعض المقترحات التي لا تريد قبولها.

ربما تكون المساهمة تغير نطاق مشروعك أو لا تتماشى مع رؤيتك. ربما تكون الفكرة جيدة لكن التنفيذ غير مناسب.

بغض النظر عن السبب، من الممكن أن تتعامل مع المساهمات التي لا تصل إلى معايير مشروعك بشكل بلباقة.

قد تكون ردة فعلك الأولى إذا وصلتك مساهمة لا تريد قبولها هي تجاهلها أو التظاهر بأنك لم ترها. هذا التصرف قد يؤذي مشاعر الطرف الآخر وربما يحبطه مساهمين آخرين في مجتمعك.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/krausefx?s=180" class="pquote-avatar" alt="avatar">
  مفتاح التعامل مع الدعم في مشاريع المصادر المفتوحة الضخمة هو إبقاء القضايا تتحرك. حاول تفادي المماطلة في القضايا. إذا كنت مطور iOS فأنت تعمل كم هو مزعج أن تفتح قضية في نظام دعم Apple. قد يصلك الرد بعد سنتين، يطلب منك التجربة مجددًا مع آخر نسخة من iOS.
  <p markdown="1" class="pquote-credit">
— @KrauseFx, ["توسعة مجتمعات المصادر المفتوحة"](https://krausefx.com/blog/scaling-open-source-communities)
  </p>
</aside>

لا تترك أي مساهمة مفتوحة فقط لأنك تشعر بالذنب أو تريد أن تكون لطيفًا. خلال الوقت القضايا والطلبات المفتوحة تجعل العمل على مشروعك أكثر ضغطًا وتحديًا.

من الأفضل أن تغلق المساهمات التي تعلم أنك لا تريد قبولها. إذا كان مشروعك يعاني من متراكمات كثيرة، @steveklabnik لديه بعض الاقتراحات حول [كيف تفرز القضايا بشكل فعال](https://words.steveklabnik.com/how-to-be-an-open-source-gardener).

ثانيًا، تجاهل المساهمات قد يرسل رسالة سلبية لمجتمعك. المساهمة في مشروع تجربة مخيفة خصوصًا عندما تكون التجربة الأولى.
حتى لو لم تقبل المساهمة، أشكر من قام بها على اهتمامهم.

إذا لم ترد قبول مساهمة:

* **أشكرهم** على مساهمتهم
* **اشرح لماذا لا تناسب** نطاق عمل المشروع وقدم اقتراحات واضحة للتحسين إذا استطعت.
* **قدم روابط للتوثيق ذي العلاقة** إذا كان موجودًا. إذا لاحظت طلبات متكررة لأشياء لا ترغب في قبولها، أضفها لتوثيقاتك لتتجنب تكرار نفسك.
* **أغلق الطلب**

يفترض أن لا تحتاج لأكثر من جملة أو جملتين للرد. كمثال، أحد مستخدمي [celery](https://github.com/celery/celery/) بلغ عن خطأ متعلق بـ Windows، وقام @berkerpeksag [بالرد](https://github.com/celery/celery/issues/3383):

![Celery screenshot](/assets/images/best-practices/celery.png)

إذا كانت فكرة قول لا تخيفك فأنت لست وحدك. [كما تقول](https://blog.jessfraz.com/post/the-art-of-closing/) @jessfraz:

> تحدثت مع صوّان من عدة مشاريع مفتوحة المصدر مختلفة، مثل Mesos، Kubernetes، Chromium وجميعهم يتفقون أن أحد أصعب أجزاء كونك صائن هو قول "لا" لترقيعات لا تريدها.

لا تشعر بالذنب لعدم قبولك مساهمة أحدهم. القانون الأول في المصادر المفتوحة [بحسب](https://twitter.com/solomonstre/status/715277134978113536) @shykes: _"لا هي شيء مؤقت، نعم ستبقى معك للأبد."_ قد يكون التعاطف مع حماس شخص آخر شيءً جيدًا، لكن رفض مساهمة لا يعني أن رفض الشخص الذي قام بها.

في النهاية، إذا كانت المساهمة ليست جيدة بما يكفي فلست ملزمًا بقبولها. كن لطيفًا ومتجاوبًا عندما يساهم الناس في مشروعك، ولكن أقبل فقط التغييرات التي تقتنع بصدق أنها تجعل مشروعك أفضل. كلما تدربت على قول "لا" يصبح الأمر أسهل. نعدك بذلك.

### كن استباقيًا

لتقلل حجم المساهمات غير المرغوبة في المقام الأول، اشرح عمليات مشروعك لتقديم وقبول المساهمات في دليل المساهمة.

إذا كانت تصلك العديد من المساهمات متدنية الجودة، أطلب أن يقوم المساهمون ببعض العمل مسبقًا، كمثال:

* تعبئة قائمة تحقق/نموذج قضية أو طلب سحب
* افتح قضية قبل تسليم طلب سحب

أغلق القضية مباشرة ووجههم لتوثيقاتك إذا لم يتبعوا قوانينك.

While this approach may feel unkind at first, being proactive is actually good for both parties. It reduces the chance that someone will put in many wasted hours of work into a pull request that you aren't going to accept. And it makes your workload easier to manage.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/mikemcquaid?s=180" class="pquote-avatar" alt="avatar">
  في الحالة المثالية، اشرح لهم وفي ملف CONTRIBUTING.md كيف يمكن أن يحصلوا على إشارات أفضل عن ماذا يمكن أن يقبل أو يرفض قبل بدء العمل.
  <p markdown="1" class="pquote-credit">
— @MikeMcQuaid, ["إغلاق طلبات السحب بلطافة"](https://github.com/blog/2124-kindly-closing-pull-requests)
  </p>
</aside>

في بعض الأحيان، عندما تقول لا قد يغضب المساهم المحتمل أو ينتقد قرارك. إذا بدأ تصرفهم بالتحول إلى عدائي، [خذ خطوات لكسر حدة الموقف](https://github.com/jonschlinkert/maintainers-guide-to-staying-positive#action-items) أو حتى ازلهم من مجتمعك إذا لم يكونوا مستعدين للمساهمة بشكل بناءً.

### Embrace mentorship

Maybe someone in your community regularly submits contributions that don't meet your project's standards. It can be frustrating for both parties to repeatedly go through rejections.

If you see that someone is enthusiastic about your project, but needs a bit of polish, be patient. Explain clearly in each situation why their contributions don't meet the expectations of the project. Try pointing them to an easier or less ambiguous task, like an issue marked _"good first issue,"_ to get their feet wet. If you have time, consider mentoring them through their first contribution, or find someone else in your community who might be willing to mentor them.

## Leverage your community

You don't have to do everything yourself. Your project's community exists for a reason! Even if you don't yet have an active contributor community, if you have a lot of users, put them to work.

### Share the workload

If you're looking for others to pitch in, start by asking around.

When you see new contributors making repeated contributions, recognize their work by offering more responsibility. Document how others can grow into leadership roles if they wish.

Encouraging others to [share ownership of the project](../building-community/#share-ownership-of-your-project) can greatly reduce your own workload, as @lmccart discovered on her project, [p5.js](https://github.com/processing/p5.js).

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/lmccart?s=180" class="pquote-avatar" alt="avatar">
  I’d been saying, "Yeah, anyone can be involved, you don’t have to have a lot of coding expertise [...]." We had people sign up to come [to an event] and that’s when I was really wondering: is this true, what I’ve been saying? There are gonna be 40 people who show up, and it’s not like I can sit with each of them...But people came together, and it just sort of worked. As soon as one person got it, they could teach their neighbor.
  <p markdown="1" class="pquote-credit">
—  @lmccart, ["What Does "Open Source" Even Mean? p5.js Edition"](https://medium.com/@kenjagan/what-does-open-source-even-mean-p5-js-edition-98c02d354b39)
  </p>
</aside>

If you need to step away from your project, either on hiatus or permanently, there's no shame in asking someone else to take over for you.

If other people are enthusiastic about its direction, give them commit access or formally hand over control to someone else. If someone forked your project and is actively maintaining it elsewhere, consider linking to the fork from your original project. It's great that so many people want your project to live on!

@progrium [found that](https://progrium.com/blog/2015/12/04/leadership-guilt-and-pull-requests/) documenting the vision for his project, [Dokku](https://github.com/dokku/dokku), helped those goals live on even after he stepped away from the project:

> I wrote a wiki page describing what I wanted and why I wanted it. For some reason it came as a surprise to me that the maintainers started moving the project in that direction! Did it happen exactly how I'd do it? Not always. But it still brought the project closer to what I wrote down.

### Let others build the solutions they need

If a potential contributor has a different opinion on what your project should do, you may want to gently encourage them to work on their own fork.

Forking a project doesn't have to be a bad thing. Being able to copy and modify projects is one of the best things about open source. Encouraging your community members to work on their own fork can provide the creative outlet they need, without conflicting with your project's vision.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/geerlingguy?s=180" class="pquote-avatar" alt="avatar">
  I cater to the 80% use case. If you are one of the unicorns, please fork my work. I won't get offended! My public projects are almost always meant to solve the most common problems; I try to make it easy to go deeper by either forking my work or extending it.
  <p markdown="1" class="pquote-credit">
— @geerlingguy, ["Why I Close PRs"](https://www.jeffgeerling.com/blog/2016/why-i-close-prs-oss-project-maintainer-notes)
  </p>
</aside>

The same applies to a user who really wants a solution that you simply don't have the bandwidth to build. Offering APIs and customization hooks can help others meet their own needs, without having to modify the source directly. @orta [found that](https://artsy.github.io/blog/2016/07/03/handling-big-projects/) encouraging plugins for CocoaPods led to "some of the most interesting ideas":

> It's almost inevitable that once a project becomes big, maintainers have to become a lot more conservative about how they introduce new code. You become good at saying "no", but a lot of people have legitimate needs. So, instead you end up converting your tool into a platform.

## Bring in the robots

Just as there are tasks that other people can help you with, there are also tasks that no human should ever have to do. Robots are your friend. Use them to make your life as a maintainer easier.

### Require tests and other checks to improve the quality of your code

One of the most important ways you can automate your project is by adding tests.

Tests help contributors feel confident that they won't break anything. They also make it easier for you to review and accept contributions quickly. The more responsive you are, the more engaged your community can be.

Set up automatic tests that will run on all incoming contributions, and ensure that your tests can easily be run locally by contributors. Require that all code contributions pass your tests before they can be submitted. You'll help set a minimum standard of quality for all submissions. [Required status checks](https://help.github.com/articles/about-required-status-checks/) on GitHub can help ensure no change gets merged without your tests passing.

If you add tests, make sure to explain how they work in your CONTRIBUTING file.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/edunham?s=180" class="pquote-avatar" alt="avatar">
  I believe that tests are necessary for all code that people work on. If the code was fully and perfectly correct, it wouldn't need changes – we only write code when something is wrong, whether that's "It crashes" or "It lacks such-and-such a feature". And regardless of the changes you're making, tests are essential for catching any regressions you might accidentally introduce.
  <p markdown="1" class="pquote-credit">
— @edunham, ["Rust's Community Automation"](https://edunham.net/2016/09/27/rust_s_community_automation.html)
  </p>
</aside>

### Use tools to automate basic maintenance tasks

The good news about maintaining a popular project is that other maintainers have probably faced similar issues and built a solution for it.

There are a [variety of tools available](https://github.com/showcases/tools-for-open-source) to help automate some aspects of maintenance work. A few examples:

* [semantic-release](https://github.com/semantic-release/semantic-release) automates your releases
* [mention-bot](https://github.com/facebook/mention-bot) mentions potential reviewers for pull requests
* [Danger](https://github.com/danger/danger) helps automate code review

For bug reports and other common contributions, GitHub has [Issue Templates and Pull Request Templates](https://github.com/blog/2111-issue-and-pull-request-templates), which you can create to streamline the communication you receive. @TalAter made a [Choose Your Own Adventure guide](https://www.talater.com/open-source-templates/#/) to help you write your issue and PR templates.

To manage your email notifications, you can set up [email filters](https://github.com/blog/2203-email-updates-about-your-own-activity) to organize by priority.

If you want to get a little more advanced, style guides and linters can standardize project contributions and make them easier to review and accept.

However, if your standards are too complicated, they can increase the barriers to contribution. Make sure you're only adding enough rules to make everyone's lives easier.

If you're not sure which tools to use, look at what other popular projects do, especially those in your ecosystem. For example, what does the contribution process look like for other Node modules? Using similar tools and approaches will also make your process more familiar to your target contributors.

## لا بأس في أخذ وقفة

قد يكون العمل في المصادر المفتوحة جلب لك السعادة يومًا ما، لكن ربما تشعر اليوم بالذنب أو الرغبة في اجتناب الناس.

ربما تشعر أنك مغلوب على أمرك أو ربما يشعرك التفكير في مشاريعك بالخوف.
Perhaps you're feeling overwhelmed or a growing sense of dread when you think about your projects. And meanwhile, the issues and pull requests pile up.

الشعور بالاستنفاذ (Burnout) هو مشكلة حقيقية ومنتشرة في شبكة المصادر المفتوحة، خصوصُا لدى الصوّان. كصائن، شعورك بالسعادة هو متطلب غير قابل للنقاش لنجاح أي مشروع مصادر مفتوحة.

يفترض أن لا نحتاج لقول هذا، لكن خذ فترة راحة! لا يفترض أن تنتظر حتى تشعر بالاستنفاذ لتأخذ إجازة. @brettcannon، أحد مطورين لبّ Python، قرر أخذ  [إجازة لمدة شهر](https://snarky.ca/why-i-took-october-off-from-oss-volunteering/) بعد 14 من العمل التطوعي في المصادر المفتوحة.

مثل أي نوع عمل آخر، أخذ راحة بشكل منتظم سيجعلك متجددًا وسعيدًا ومتحمسًا لعملك.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/danielbachhuber?s=180" class="pquote-avatar" alt="avatar">
  آثناء صيانة WP-CLI، اكتشفت أنني بحاجة لجعل نفسي سعيدًا أولًا وأن أضع حدود لمشاركتي. أفضل مستوى من التوازن وجدته كان ساعتين إلى خمس ساعات في كل أسبوع كجزء من جدول عملي المعتاد. هذا يبقى مشاركتي شغفًا، ويحميني من الشعور بكثرة العمل. لأنني أرتب ما سأعمل عليه حسب الأهمية استطيع تقدم منتظم فيما أريد أظن أنهم مهم.
  <p markdown="1" class="pquote-credit">
— @danielbachhuber, ["تعازي، أنت الآن صائن مشروع مفتوح المصدر"](https://runcommand.io/2016/06/26/my-condolences-youre-now-the-maintainer-of-a-popular-open-source-project/)
  </p>
</aside>

أحيانًا قد يكون من الصعب أخذ راحة من العمل في المصادر المفتوحة عندما تشعر أن الجميع يحتاجك. وقد يحاول البعض أن يشعرك بالذنب لمحاولة الابتعاد.

قد بجهدك لتجد من يدعم مستخدميك ومجتمعك وأنت بعيد عن مشروعك.
حتى لو لم تجد الدعم المطلوب، خذ فترة راحتك على كل حال. تأكد من إيصال رسالة أنك غير موجود حتى لا يحتار الناس عن سبب عدم ردك.

أخذ فترات راحة ينطبق لأكثر من الإجازات. إذا كنت لا تريد القيام بالعمل على المصادر المفتوحة خلال نهاية الأسبوع أو خلال ساعات عملك، أوصل هذه التوقعات للآخرين حتى يتعلموا أن لا يزعجوك فيها.

## اهتم بنفسك أولًا!

صيانة مشروع مفتوح المصدر تتطلب مهارات مختلفة عن مراحل النمو الأولى، وهي مرحلة مجزية أيضًا. كصائن ستتدرب على القيادة والمهارات الشخصية على مستوى لا يصل إلى أغلب الناس. لن يكون من السهل إدارة الأمور دائمًا، ولذا وضع الحدود والعمل على المقدار الذي ترتاح له سيساعدك على البقاء سعيدًا ومتجددًا ومنتجًا.
