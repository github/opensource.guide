---
lang: ar
title: أفضل الممارسات للمحافظين
description: تسهيل حياتك كمحافظ على مشروع مفتوح المصدر، من توثيق العمليات إلى الاستفادة من مجتمعك
class: best-practices
order: 5
image: /assets/images/cards/best-practices.png
related:
  - metrics
  - leadership
---

<div dir="rtl" markdown="1">

## ما معنى أن تكون <span dir='ltr'  markdown="1" >Maintainer</span> (مسؤول عن مشروع) ؟ 

 إذا كنت مسؤولًا عن مشروع <span dir='ltr'  markdown="1">open source</span>  يستخدمه عدد كبير من الناس، فمن المؤكد أنك لاحظت أنك أصبحت تقوم بـ <span dir='ltr'  markdown="1">coding</span>  أقل، وتقضي وقتًا أكثر في الرد على <span dir='ltr'  markdown="1">issues</span> المشاكل والبلاغات .

في بدايات المشروع، تكون لا تزال تجرب أفكارًا جديدة وتتخذ قرارات بناءً على ما ترغب فيه. ومع نمو المشروع وزيادة شعبيته، ستجد نفسك تعمل أكثر مع <span dir='ltr'  markdown="1">users</span>  و <span dir='ltr'  markdown="1">contributors</span>

إن الحفاظ على مشروع بطريقة صحيحة يتطلب منك أكثر من مجرد code. غالبًا ما تكون هذه ال <span dir='ltr'  markdown="1">tasks</span> غير متوقعة، لكنها مهمة جدًا لنمو المشروع، تمامًا مثل الكود.

لقد جمعنا لك هنا بعض الأمور التي تساعدك على تسهيل حياتك، بدءًا من توثيق العمليات <span dir='ltr'  markdown="1">documenting processes</span> وصولًا إلى كيفية الاستفادة بشكل صحيح من <span dir='ltr'  markdown="1">community</span>  المحيط بمشروعك.

## دوّن (وثّق) الإجراءات الخاصة بك
إن تدوين الأمور يعد واحدًا من أهم الأشياء التي يمكنك القيام بها كـ 
<span dir='ltr'  markdown="1">maintainer</span>.

الـ <span dir='ltr'  markdown="1">Documentation</span> ليس فقط لتوضيح أفكارك لنفسك، بل يساعد أيضًا الآخرين على فهم ما تحتاجه أو تتوقعه منهم، حتى قبل أن يسألوا.

عندما تكون الأمور مكتوبة، يصبح من الأسهل عليك قول "لا" عندما لا تناسب مسألة معينة الـ <span dir='ltr'  markdown="1">scope</span> الخاص بك. وفي الوقت نفسه، يصبح من الأسهل على الآخرين الدخول والمساعدة. فأنت لا تعرف من قد يقرأ أو يستخدم مشروعك.

حتى لو لم تكتب فقرات كاملة، فإن تدوينها كنقاط سريعة <span dir='ltr'  markdown="1">bullet points</span> أفضل من عدم كتابة أي شيء على الإطلاق.

وتذكّر دائمًا أن تحافظ على الـ <span dir='ltr'  markdown="1">documentation</span> محدثًا <span dir='ltr'  markdown="1">up-to-date</span>. وإذا لم تتمكن من القيام بذلك دائمًا، فاحذف التوثيق القديم أو وضح أنه قديم <span dir='ltr'  markdown="1">outdated</span>، حتى يعرف الـ <span dir='ltr'  markdown="1">contributors</span> أن التحديثات مرحّب بها.

### اكتب رؤية (Vision) مشروعك
ابدأ بكتابة أهداف مشروعك. أضفها في ملف الـ <span dir='ltr'  markdown="1">README</span>، أو أنشئ ملفًا منفصلًا وسمّه <span dir='ltr'  markdown="1">VISION</span>. إذا كانت هناك أي عناصر أخرى قد تساعد، مثل "خارطة طريق" للمشروع <span dir='ltr'  markdown="1">project roadmap</span>، اجعلها <span dir='ltr'  markdown="1">public</span> أيضًا.


عندما تمتلك رؤية واضحة ومكتوبة، فإن ذلك يجعلك مركّزًا ويساعدك على تجنّب ما يُعرف بـ
<span dir='ltr'  markdown="1">"scope creep"</span> الزحف بالنطاق الذي يحدث نتيجة مساهمات الآخرين.


كمثال، اكتشف <span dir='ltr'  markdown="1">@lord</span> أن وجود رؤية للمشروع ساعده على تحديد أي الطلبات تستحق أن يقضي وقتَه عليها. وكـ <span dir='ltr'  markdown="1">maintainer</span> جديد، ندم على عدم التزامه بـ <span dir='ltr'  markdown="1">scope</span> مشروعه عندما تعامل مع أول <span dir='ltr'  markdown="1">feature request</span> لمشروع  <span dir='ltr'  markdown="1">[Slate](https://github.com/lord/slate)</span>.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/lord?s=180" class="pquote-avatar" alt="avatar">
لقد أخطأت في الأمر. لم أبذل الجهد الكافي لإنتاج حل كامل. بدل هذا الحل ال <span dir='ltr'  markdown="1">half-assed solution</span>، كنت أتمنى لو قلت: " ليس لدي وقت لهذا الأمر حاليًا، لكن سأضيفه إلى قائمة الأشياء الـ <span dir='ltr'  markdown="1">nice-to-have</span> للمدى البعيد ".
  <p markdown="1" class="pquote-credit">
— @lord, ["نصائح للمحافظين الجدد في المصادر المفتوحة"](https://lord.io/blog/2014/oss-tips/)
  </p>
</aside>
</div>

<div dir="rtl" markdown="1">

### وضّح توقعاتك Expectations

كتابة القوانين <span dir='ltr'  markdown="1">Rules</span> أمر مرهق أحيانًا. قد تشعر أحيانًا وكأنك "شرطي" يراقب تصرفات الآخرين أو أنك تفسد الجو المرح.
لكن الحقيقة أن القوانين الجيدة، عندما تُكتب وتُطبق بعدل، تمنح الـ <span dir='ltr'  markdown="1">maintainers</span> القوة. فهي تمنعك من الانجرار للقيام بأمور لا ترغب فيها.

أغلب الأشخاص الذين يشاهدون مشروعك لا يعرفون عنك شيئًا أو عن ظروفك. قد يفترضون أنك تتقاضى أجرًا للعمل عليه، خصوصًا إذا كانوا يستخدمونه بشكل دائم ويعتمدون عليه. ربما كنت في السابق تخصص وقتًا كبيرًا لمشروعك، لكن الآن قد تكون مشغولًا بعمل آخر أو لديك التزامات عائلية.
كل هذا طبيعي وعادي جدًا، لكن المهم أن تتأكد أن الآخرين على علم بهذه الظروف.

إذا كانت إدارتك للمشروع <span dir='ltr'  markdown="1">part-time</span> أو مجرد تطوع كامل <span dir='ltr'  markdown="1">volunteered</span>، كن صريحًا بشأن مقدار الوقت المتاح لديك. هذا لا يعني الوقت الذي تعتقد أن المشروع يحتاجه، ولا الوقت الذي يريدك الآخرون أن تقضيه فيه.

إليك بعض القوانين التي يستحق كتابتها:

* كيفية مراجعة المساهمات <span dir='ltr'  markdown="1">contribution</span> وقبولها:( هل تحتاج إلى <span dir='ltr'  markdown="1">tests</span> ؟ هل يجب تعبئة <span dir='ltr'  markdown="1">issue template</span> نموذج بلاغ ؟ )
* أنواع المساهمات التي تقبلها:( هل تريد المساعدة في جزء معين من كود المشروع فقط؟ )
* متى يكون من المقبول متابعتك أو تذكيرك:( مثلًا، "يمكن توقع رد من مسؤول المشروع خلال 7 أيام. إذا لم تسمع شيئًا بعد هذا الوقت، من المقبول تمامًا إرسال ping في النقاش." )
* مقدار الوقت الذي تخصصه للمشروع:( مثلًا، "نخصص حوالي 5 ساعات في الأسبوع لهذا المشروع." )

ومن الأمثلة للمشاريع التي لها قواعد أساسية للمحافظين والمساهمين :<span dir='ltr'  markdown="1">[Jekyll](https://github.com/jekyll/jekyll/tree/master/docs)</span>, <span dir='ltr'  markdown="1">[CocoaPods](https://github.com/CocoaPods/CocoaPods/wiki/Communication-&-Design-Rules)</span> ,<span dir='ltr'  markdown="1">[Homebrew](https://github.com/Homebrew/brew/blob/bbed7246bc5c5b7acb8c1d427d10b43e090dfd39/docs/Maintainers-Avoiding-Burnout.md)</span>

### اجعل التواصل public

لا تنسَ أن تعمل <span dir='ltr'  markdown="1">document</span> لتفاعلاتك أيضًا. قدر ما تستطيع، اجعل التواصل الذي يخص مشروعك public. إذا حاول أحدهم التواصل معك على الخاص لمناقشة <span dir='ltr'  markdown="1">feature request</span> أو احتاج <span dir='ltr'  markdown="1">support</span>، فبكل أدب وجّهه إلى قناة تواصل علنية، مثل <span dir='ltr'  markdown="1">mailing list</span> (قائمة بريدية) أو <span dir='ltr'  markdown="1">issue tracker</span> (متتبّع البلاغات).

إذا جلست مع <span dir='ltr'  markdown="1">maintainers</span> آخرين، أو اتخذتم قرارًا كبيرًا على الخاص، فقُم بتوثيق هذه النقاشات بشكل public، حتى ولو فقط بنشر <span dir='ltr'  markdown="1">notes</span> الخاصة بك.

بهذه الطريقة، أي شخص جديد ينضم إلى الـ <span dir='ltr'  markdown="1">community</span> الخاص بك سيحصل على نفس المعلومات التي يمتلكها الشخص الموجود منذ سنوات.

## تعلم قول لا

لقد دونت الأمور مكتوبة. من الناحية المثالية، يجب أن يقرأ الجميع التوثيق الخاص بك، لكن في الواقع، ستضطر إلى تذكير الآخرين بوجود هذه المعرفة.

وجود كل شيء مكتوبًا يساعد على جعل المواقف أقل شخصية عندما تحتاج إلى تطبيق قواعدك.

قول لا ليس ممتعًا، لكن عبارة _"مساهمتك لا تتوافق مع معايير هذا المشروع"_ تبدو أقل شخصية من _"لا أحب مساهمتك"_.

قول لا ينطبق على العديد من المواقف التي ستواجهها كمحافظ على المشروع: طلبات ميزات لا تتناسب مع نطاق المشروع، شخص يشتت النقاش، القيام بأعمال غير ضرورية للآخرين.

### حافظ على ودية النقاش

أحد أهم الأماكن التي ستتدرب فيها على قول لا هو قائمة القضايا <span dir='ltr' markdown="1">issue</span> وطلبات السحب <span dir='ltr' markdown="1">pull request</span>. كمحافظ على المشروع، ستتلقى حتماً اقتراحات قد لا ترغب في قبولها.

ربما تغير المساهمة نطاق مشروعك أو لا تتوافق مع رؤيتك. ربما الفكرة جيدة، لكن التنفيذ ضعيف.

بغض النظر عن السبب، من الممكن التعامل بلباقة مع المساهمات التي لا تفي بمعايير مشروعك.

إذا تلقيت مساهمة لا ترغب في قبولها، قد تكون ردة فعلك الأولى هي تجاهلها أو التظاهر بعدم رؤيتها. القيام بذلك قد يجرح مشاعر الشخص الآخر، وربما يثبط أيضًا الآخرين المحتملين للمساهمة في مجتمعك.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/krausefx?s=180" class="pquote-avatar" alt="avatar">
  المفتاح للتعامل مع الدعم الفني لمشاريع <span dir='ltr'  markdown="1">open source</span> الضخمة هو أن تحافظ على <span dir='ltr'  markdown="1">issues</span> في حالة حركة مستمرة، وألا تسمح لها بأن تتوقف أو <span dir='ltr'  markdown="1">stall</span>.
إذا كنت مطور <span dir='ltr'  markdown="1">iOS developer</span> فأنت بالتأكيد تعرف مدى الإحباط عند إرسال <span dir='ltr'  markdown="1">radars</span>، حيث قد تنتظر لسنتين قبل أن يصلك رد يخبرك ببساطة: جرّب مرة أخرى باستخدام آخر <span dir='ltr'  markdown="1">version</span> من <span dir='ltr'  markdown="1">iOS</span>!
  <p markdown="1" class="pquote-credit">
— @KrauseFx, ["توسيع مجتمع الـ <span dir='ltr'  markdown="1">open source</span>"](https://krausefx.com/blog/scaling-open-source-communities)
  </p>
</aside>

لا تترك مساهمة لا ترغب بها مفتوحة فقط لأنك تشعر بالذنب أو بدافع اللطف. مع مرور الوقت، تراكم <span dir='ltr'  markdown="1">issues</span> و <span dir='ltr'  markdown="1">PRs</span> غير المردود عليها سيجعل العمل على مشروعك أكثر توترًا ويخلق شعورًا بالرهبة.

من الأفضل أن تقوم بإغلاق المساهمات التي تعلم مسبقًا أنك لن تقبلها، وبشكل فوري. وإذا كان مشروعك يعاني بالفعل من <span dir='ltr'  markdown="1">backlog</span> كبير، فإن <span dir='ltr'  markdown="1">@steveklabnik</span> يقدّم نصائح ممتازة حول [كيفية إجراء <span dir='ltr'  markdown="1">triage</span> للـ <span dir='ltr'  markdown="1">issues</span> بطريقة فعّالة](https://words.steveklabnik.com/how-to-be-an-open-source-gardener).

أيضًا، تجاهل المساهمات يرسل إشارة سلبية إلى الـ <span dir='ltr'  markdown="1">community</span>. المشاركة في مشروع مفتوح المصدر قد تكون خطوة مخيفة، خصوصًا إذا كانت هذه أول تجربة للشخص. حتى إن لم تقبل المساهمة، فمن المهم الاعتراف بجهد صاحبها وشكره على اهتمامه، فمجرد مشاركته هو بمثابة مجاملة كبيرة للمشروع!

### إذا لم تكن ترغب في قبول مساهمة معينة:

* **اشكرهم** على مساهمتهم.
* **اشرح لهم سبب عدم توافقها** مع نطاق المشروع **<span dir='ltr'  markdown="1">scope</span>**، وقدّم اقتراحات واضحة للتحسين إن أمكن. كن لطيفًا، لكن حازمًا.
* **ضع رابطًا إلى التوثيق** المناسب **<span dir='ltr'  markdown="1">documentation</span>** إن كان متوفرًا. إذا لاحظت وصول طلبات متكررة لأمور لا ترغب في قبولها، أضفها إلى التوثيق لتجنّب تكرار الشرح.
* **قم بإغلاق الطلب**.

لا تحتاج إلى أكثر من جملة أو جملتين للرد. على سبيل المثال، عندما أبلغ أحد مستخدمي [<span dir='ltr'  markdown="1">celery</span>](https://github.com/celery/celery/) عن خطأ متعلق بـ <span dir='ltr'  markdown="1">Windows</span>، قام **<span dir='ltr'  markdown="1">@berkerpeksag</span>** بالرد بطريقة واضحة:  

![<span dir='ltr'  markdown="1">Celery screenshot</span>](/assets/images/best-practices/celery.png)

إذا شعرت بأن فكرة قول "**لا**" **<span dir='ltr'  markdown="1">terrifies</span>**، فأنت لست وحدك. كما قالت **<span dir='ltr'  markdown="1">@jessfraz</span>**:  

> "لقد تحدثت مع **<span dir='ltr'  markdown="1">maintainers</span>** من عدة مشاريع **<span dir='ltr'  markdown="1">open source</span>** مثل <span dir='ltr'  markdown="1">Mesos</span>, <span dir='ltr'  markdown="1">Kubernetes</span>, <span dir='ltr'  markdown="1">Chromium</span>، واتفقوا جميعًا على أن من أصعب المهام كونك **<span dir='ltr'  markdown="1">maintainer</span>** هو قول ’لا‘ على **<span dir='ltr'  markdown="1">patches</span>** لا ترغب بها."

لا تشعر بالذنب إن لم ترغب في قبول مساهمة شخص ما. أول قاعدة في الـ **<span dir='ltr'  markdown="1">open source</span>**، وفقًا لما ذكره **<span dir='ltr'  markdown="1">@shykes</span>**:  
_"الـ '<span dir='ltr'  markdown="1">No</span>' مؤقتة، أما الـ '<span dir='ltr'  markdown="1">Yes</span>' فهي للأبد."_  من الطبيعي أن تتعاطف مع حماس الآخرين، لكن رفض المساهمة **<span dir='ltr'  markdown="1">contribution</span>** لا يعني رفض الشخص الذي قدمها.

في النهاية إذا لم تكن المساهمة بالجودة المطلوبة، فأنت **غير ملزم <span dir='ltr'  markdown="1">under no obligation</span>** بقبولها. كن لطيفًا و **<span dir='ltr'  markdown="1">responsive</span>** مع كل من يساهم في مشروعك، لكن لا تقبل إلا ال**<span dir='ltr'  markdown="1">changes</span>** التي تؤمن حقًا بأنها ستجعل مشروعك أفضل. كلما مارست قول "**لا**" أكثر، أصبح الأمر أسهل. **<span dir='ltr'  markdown="1">Promise</span>.**

### كن Proactive (استباقيًا / مبادرًا)

لتقليل كمية المساهمات غير المرغوب فيها من البداية، قم بشرح <span dir='ltr'  markdown="1">process</span>  مشروعك لتقديم وقبول المساهمات في ملف <span dir='ltr'  markdown="1">contributing guide</span> دليل المساهمة.

إذا لاحظت وصول مساهمات <span dir='ltr'  markdown="1">low-quality</span> بشكل متكرر، اجعل من الضروري أن يقوم <span dir='ltr'  markdown="1">contributors</span> ببعض الخطوات المسبقة، مثل:

* تعبئة <span dir='ltr'  markdown="1">template</span> للـ <span dir='ltr'  markdown="1">issue</span> أو الـ <span dir='ltr'  markdown="1">PR</span>، أو استخدام قائمة تدقيق.  
* فتح <span dir='ltr'  markdown="1">issue</span> (بلاغ) قبل تقديم <span dir='ltr'  markdown="1">PR</span> (طلب دمج).

إذا لم يلتزموا بالقواعد، قم بإغلاق الـ <span dir='ltr'  markdown="1">issue</span> فورًا ووجّههم إلى الـ <span dir='ltr'  markdown="1">documentation</span> الخاص بك.

رغم أن هذه الطريقة قد تبدو unkind في البداية، إلا أن كونك <span dir='ltr'  markdown="1">proactive</span> مفيد للطرفين. فهو يقلل من احتمال أن يضع شخص ما ساعات طويلة من العمل الضائع على <span dir='ltr'  markdown="1">pull request</span> لن يتم قبوله، ويسهّل إدارة ضغط العمل الخاص بك.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/mikemcquaid?s=180" class="pquote-avatar" alt="avatar">
  من الأفضل أن تشرح لهم، وفي ملف <span dir='ltr'  markdown="1">CONTRIBUTING.md</span>، كيف يمكنهم الحصول على فكرة أوضح في المستقبل حول ما سيتم قبوله وما لن يتم قبوله قبل أن يبدأوا بالعمل.
  <p markdown="1" class="pquote-credit">
— <span dir='ltr'  markdown="1">@MikeMcQuaid</span>، <a href="https://github.com/blog/2124-kindly-closing-pull-requests">"إغلاق <span dir='ltr'  markdown="1">Pull Requests</span> بلطف"</a>
  </p>
</aside>

أحيانًا، عندما تقول "لا"، قد يغضب المساهم المحتمل أو ينتقد قرارك. إذا أصبح سلوكه عدائيًا <span dir='ltr'  markdown="1">hostile</span>، [اتخذ خطوات لتهدئة الوضع](https://github.com/jonschlinkert/maintainers-guide-to-staying-positive#action-items) أو حتى قم بإزالته من الـ <span dir='ltr'  markdown="1">community</span> الخاص بك، إذا لم يكن راغبًا في التعاون بشكل بنّاء <span dir='ltr'  markdown="1">constructively</span>.

### تبنَّ نهج الـ <span dir='ltr' markdown="1">Mentorship</span> (الإشراف والتوجيه)

قد يقوم أحد الأعضاء في الـ <span dir='ltr' markdown="1">community</span> بتقديم <span dir='ltr' markdown="1">contributions</span> متكررة لا تتماشى مع <span dir='ltr' markdown="1">standards</span> المشروع. هذا قد يكون محبطًا للطرفين بسبب تكرار حالات الرفض.

إذا لاحظت أن هذا الشخص متحمّس للمشروع ولكنه يحتاج إلى مزيد من <span dir='ltr' markdown="1">polish</span>، فتحلَّ بالصبر. اشرح له بوضوح في كل مرة سبب عدم توافق مساهمته مع <span dir='ltr' markdown="1">expectations</span> المشروع. حاول توجيهه نحو <span dir='ltr' markdown="1">task</span> أسهل أو أقل غموضًا، مثل <span dir='ltr' markdown="1">issue</span> تحمل وسم <span dir='ltr' markdown="1">"good first issue"</span> ليبدأ بالتدرّج. وإن كان لديك وقت، فكّر في منحه <span dir='ltr' markdown="1">mentoring</span> خلال أول مساهمة له، أو اطلب من أحد أعضاء الـ <span dir='ltr' markdown="1">community</span> مساعدته في ذلك.

## استفد من قوة الـ <span dir='ltr' markdown="1">Community</span>

لست مضطرًا للقيام بكل شيء بنفسك. وُجدت الـ <span dir='ltr' markdown="1">community</span> من أجل دعم المشروع! حتى لو لم يكن لديك مساهمون نشطون بعد، لكن لديك عدد كبير من <span dir='ltr' markdown="1">users</span>، فيمكن توجيههم للمساعدة.

### شارك الـ <span dir='ltr' markdown="1">Workload</span>

إذا كنت تبحث عن من يساهم معك، ابدأ بطلب الدعم ممن حولك.

إحدى الطرق لجذب <span dir='ltr' markdown="1">contributors</span> جدد هي تحديد <span dir='ltr' markdown="1">issues</span> بسيطة مناسبة للمبتدئين عبر وضع <span dir='ltr' markdown="1">label</span> واضح عليها. عندها سيقوم <span dir='ltr' markdown="1">GitHub</span> بإبراز هذه <span dir='ltr' markdown="1">issues</span> في أماكن مختلفة، مما يزيد من <span dir='ltr' markdown="1">visibility</span> لها.

عندما تلاحظ <span dir='ltr' markdown="1">contributors</span> جدد يقدمون مساهمات متكررة، قدّر جهودهم من خلال منحهم <span dir='ltr' markdown="1">responsibility</span> أكبر. ولا تنسَ توثيق كيفية التطور داخل المشروع والوصول إلى <span dir='ltr' markdown="1">leadership roles</span> لمن يرغب بذلك.

تشجيع الآخرين على مشاركة <span dir='ltr' markdown="1">ownership</span> في المشروع يمكن أن يقلّل من <span dir='ltr' markdown="1">workload</span> عنك بشكل كبير، كما حدث مع المشروع <span dir='ltr' markdown="1">p5.js</span> الخاص بـ <span dir='ltr' markdown="1">@lmccart</span>.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/lmccart?s=180" class="pquote-avatar" alt="avatar">
  كنت أقول: "نعم، أي شخص يمكنه المشاركة، ليس من الضروري أن يمتلك خبرة كبيرة في <span dir='ltr' markdown="1">coding</span> [...]." سجل الناس للحضور [إلى حدث]، وهنا بدأت أتساءل حقًا: هل ما أقوله صحيح؟ سيكون هناك حوالي 40 شخصًا سيحضرون، وليس بإمكاني الجلوس مع كل واحد منهم... لكن الناس اجتمعوا، وسارت الأمور بسلاسة. بمجرد أن فهم شخص واحد الأمر، استطاع تعليم جاره.
  <p markdown="1" class="pquote-credit">
— @lmccart, ["ماذا يعني فعليًا <span dir='ltr' markdown="1">Open Source</span>? نسخة <span dir='ltr' markdown="1">p5.js</span>"](https://medium.com/@kenjagan/what-does-open-source-even-mean-p5-js-edition-98c02d354b39)
  </p>
</aside>


إذا احتجت إلى الابتعاد عن مشروعك أو اضطررت إلى <span dir='ltr' markdown="1">step away</span> عن مشروعك، سواء لفترة <span dir='ltr' markdown="1">hiatus</span>  مؤقتة أو بشكل <span dir='ltr' markdown="1">permanently</span> دائم، فلا يوجد أي شعور بالـ <span dir='ltr' markdown="1">shame</span> في أن تطلب من شخص آخر أن <span dir='ltr' markdown="1">take over</span> تولّي المسؤولية بدلاً منك.

إذا كان هناك من هو متحمّس لـ <span dir='ltr' markdown="1">direction</span> المشروع، يمكنك منحه <span dir='ltr' markdown="1">commit access</span> أو تسليم الـ <span dir='ltr' markdown="1">control</span> الإداري رسميًا لشخص آخر. وإذا قام أحدهم بعمل <span dir='ltr' markdown="1">fork</span> للمشروع ويقوم بـ <span dir='ltr' markdown="1">maintaining</span> نشط له في مكان آخر، فمن الجيد أن تضع <span dir='ltr' markdown="1">link</span> لهذا الـ <span dir='ltr' markdown="1">fork</span> من مشروعك الأصلي. من الرائع أن هناك أشخاصًا يريدون لمشروعك أن يبقى <span dir='ltr' markdown="1">live on</span>!

<span dir='ltr' markdown="1">@progrium</span> اكتشف أن توثيق الـ <span dir='ltr' markdown="1">vision</span> لمشروعه <span dir='ltr' markdown="1">Dokku</span> ساعد في استمرار تحقيق الأهداف حتى بعد ابتعاده عن المشروع:

> "كتبت صفحة <span dir='ltr'>wiki</span> أوضّح فيها ما أريد ولماذا. ولدهشتي، بدأ الـ <span dir='ltr'>maintainers</span> بتحريك المشروع في هذا الاتجاه! هل حدث تمامًا كما كنت سأفعله؟ ليس دائمًا. لكنه قرّب المشروع أكثر نحو الرؤية التي وضعتها."

### دع الآخرين يبنون الحلول التي يحتاجونها

إذا كان لدى مساهم محتمل رأي مختلف حول ما ينبغي أن يقوم به مشروعك، يمكنك "encourage" تشجيعه بلطف للعمل على <span dir='ltr' markdown="1">fork</span> خاص به.

الـ <span dir='ltr' markdown="1">Forking</span> ليس أمرًا سيئًا. القدرة على <span dir='ltr' markdown="1">copy</span> و<span dir='ltr' markdown="1">modify</span> المشاريع هي واحدة من أقوى مزايا <span dir='ltr' markdown="1">open source</span>. تشجيع أعضاء الـ <span dir='ltr' markdown="1">community</span> على العمل في <span dir='ltr' markdown="1">fork</span> خاص بهم يمكن أن يوفر لهم <span dir='ltr' markdown="1">creative outlet</span> يحتاجونه، دون أن يتعارض مع <span dir='ltr' markdown="1">vision</span> مشروعك.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/geerlingguy?s=180" class="pquote-avatar" alt="avatar">
  أنا أركز على تلبية احتياجات <span dir='ltr' markdown="1">80% use case</span>. إذا كنت من الحالات النادرة <span dir='ltr' markdown="1">unicorns</span>، فيمكنك <span dir='ltr' markdown="1">fork</span> عملي دون أي مشكلة، فلن أشعر بالإساءة! مشاريعّي <span dir='ltr' markdown="1">public</span> تهدف غالبًا لحل المشاكل الأكثر شيوعًا؛ وأحاول تسهيل إمكانية التعمق فيها عن طريق <span dir='ltr' markdown="1">forking</span> أو <span dir='ltr' markdown="1">extending</span> العمل.
  <p markdown="1" class="pquote-credit">
— @geerlingguy, [لماذا أغلق المساهمات <span dir='ltr' markdown="1">PRs</span>](https://www.jeffgeerling.com/blog/2016/why-i-close-prs-oss-project-maintainer-notes)
  </p>
</aside>
نفس الأمر ينطبق على المستخدم الذي يحتاج حلًا لا تتوفر لديك الموارد الكافية لبنائه. تقديم <span dir='ltr' markdown="1">APIs</span> و<span dir='ltr' markdown="1">customization hooks</span> يمكن أن يساعد الآخرين على تلبية احتياجاتهم بأنفسهم دون تعديل المصدر مباشرة. @orta وجد أن تشجيع <span dir='ltr' markdown="1">plugins</span> لـ <span dir='ltr' markdown="1">CocoaPods</span> أدى إلى بعض من أكثر الأفكار إثارة:

> من الطبيعي تقريبًا أنه عندما يكبر المشروع، يجب على المسؤولين أن يكونوا أكثر حذرًا عند إضافة كود جديد. تصبح ماهرًا في قول "لا"، لكن الكثير من الناس لديهم احتياجات مشروعة. لذلك، ينتهي بك الأمر بتحويل أداتك إلى منصة.

## الاستعانة بالروبوتات

كما توجد مهام يمكن للآخرين مساعدتك فيها، هناك مهام أخرى لا ينبغي لأي إنسان القيام بها. الروبوتات صديقك، استخدمها لتسهيل حياتك كمحافظ على المشروع.

### طلب <span dir='ltr' markdown="1">tests</span> وفحوصات أخرى لتحسين جودة الكود

إحدى أهم طرق أتمتة مشروعك هي إضافة <span dir='ltr' markdown="1">tests</span>. 

تساعد <span dir='ltr' markdown="1">tests</span> المساهمين على الشعور بالثقة بعدم كسر أي شيء، كما تسهل عليك مراجعة وقبول المساهمات بسرعة. كلما كنت أكثر استجابة، كان مجتمعك أكثر تفاعلًا.

قم بإعداد <span dir='ltr' markdown="1">automatic tests</span> لتعمل على جميع المساهمات الواردة، وتأكد من أنه يمكن تشغيلها محليًا بسهولة من قبل المساهمين. اجعل كل مساهمة تمر عبر <span dir='ltr' markdown="1">tests</span> قبل تقديمها، لتضع معيارًا أدنى للجودة. تساعد <span dir='ltr' markdown="1">required status checks</span> على <span dir='ltr' markdown="1">GitHub</span> في ضمان عدم دمج أي تغيير دون اجتياز <span dir='ltr' markdown="1">tests</span>.

إذا أضفت <span dir='ltr' markdown="1">tests</span>، تأكد من شرح كيفية عملها في ملف <span dir='ltr' markdown="1">CONTRIBUTING</span>.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/edunham?s=180" class="pquote-avatar" alt="avatar">
  أنا أؤمن بأن <span dir='ltr' markdown="1">tests</span> ضرورية لكل <span dir='ltr' markdown="1">code</span> يعمل عليه الناس. فلو كان <span dir='ltr' markdown="1">code</span> صحيحًا وكاملًا تمامًا، لما احتاج إلى أي تعديل – نحن نكتب <span dir='ltr' markdown="1">code</span> فقط عندما يكون هناك خلل، سواء كان سببًا في <span dir='ltr' markdown="1">It crashes</span> أو لغياب ميزة معينة .
  وبغض النظر عن التغييرات، تظل <span dir='ltr' markdown="1">tests</span> أساسية لاكتشاف أي <span dir='ltr' markdown="1">regressions</span> قد تدخلها عن طريق الخطأ 
  
  <p markdown="1" class="pquote-credit">
— @edunham, ["Rust's Community Automation"](https://edunham.net/2016/09/27/rust_s_community_automation.html)
  </p>
</aside>

### استخدام الأدوات لأتمتة مهام الصيانة الأساسية

الأمر الجيد في إدارة مشروع مشهور هو أن مسؤولين آخرين ربما واجهوا مشاكل مشابهة ووجدوا لها حلولًا.

هناك [<span dir='ltr' markdown="1">variety of tools</span>](https://github.com/showcases/tools-for-open-source) متاحة لمساعدتك على أتمتة بعض جوانب عمل الصيانة. بعض الأمثلة:

* [<span dir='ltr' markdown="1">semantic-release</span>](https://github.com/semantic-release/semantic-release) لأتمتة الإصدارات
* [<span dir='ltr' markdown="1">mention-bot</span>](https://github.com/facebook/mention-bot) لذكر المراجعين المحتملين في <span dir='ltr' markdown="1">pull requests</span>
* [<span dir='ltr' markdown="1">Danger</span>](https://github.com/danger/danger) يساعد في أتمتة مراجعة الكود
* [<span dir='ltr' markdown="1">no-response</span>](https://github.com/probot/no-response) يغلق القضايا التي لم يرد فيها المؤلف على طلب معلومات إضافية
* [<span dir='ltr' markdown="1">dependabot</span>](https://github.com/dependabot) يتحقق يوميًا من ملفات الاعتماديات ويفتح <span dir='ltr' markdown="1">pull requests</span> لأي تحديثات قديمة

بالنسبة لتقارير الأخطاء والمساهمات الشائعة، لدى GitHub [<span dir='ltr' markdown="1">Issue Templates and Pull Request Templates</span>](https://github.com/blog/2111-issue-and-pull-request-templates) يمكنك إعدادها لتسهيل التواصل معك. @TalAter أنشأ [<span dir='ltr' markdown="1">Choose Your Own Adventure guide</span>](https://www.talater.com/open-source-templates/#/) لمساعدتك في كتابة هذه القوالب.

لإدارة إشعارات البريد الإلكتروني، يمكنك إعداد [<span dir='ltr' markdown="1">email filters</span>](https://github.com/blog/2203-email-updates-about-your-own-activity) لتنظيمها حسب الأولوية.

إذا أردت التقدم أكثر، يمكن لدلائل الأسلوب و<span dir='ltr' markdown="1">linters</span> توحيد مساهمات المشروع وجعل مراجعتها وقبولها أسهل.

لكن إذا كانت معاييرك معقدة جدًا، فقد تزيد من صعوبة المساهمة. تأكد من إضافة القواعد الضرورية فقط لتسهيل الأمور على الجميع.

إذا لم تكن متأكدًا من الأدوات المناسبة، انظر إلى ما يفعله المشاريع الشهيرة الأخرى، خصوصًا في نفس النظام البيئي الخاص بك. على سبيل المثال، كيف تبدو عملية المساهمة في وحدات Node الأخرى؟ استخدام أدوات مماثلة سيجعل عملية المساهمة أكثر ألفة للمساهمين المستهدفين.

## من المقبول أخذ استراحة

ربما كان العمل في <span dir='ltr' markdown="1">open source</span> مصدرًا للمتعة بالنسبة لك. ربما بدأ الآن يثير شعورًا بالتجنب أو الذنب.

قد تشعر بالإرهاق أو بالخوف عند التفكير في مشاريعك، وفي الوقت نفسه تتراكم القضايا و<span dir='ltr' markdown="1">pull requests</span>.

الإرهاق <span dir='ltr' markdown="1">burnout</span> قضية حقيقية وشائعة في العمل المفتوح المصدر، خاصة بين المسؤولين. كمحافظ على المشروع، سعادتك شرط أساسي لاستمرار أي مشروع <span dir='ltr' markdown="1">open source</span>.

وبالرغم من أن هذا بديهي، خذ استراحة! لا تنتظر حتى تشعر بالإرهاق لتأخذ عطلة. @brettcannon، مطور أساسي في Python، قرر أخذ [<span dir='ltr' markdown="1">month-long vacation</span>](https://snarky.ca/why-i-took-october-off-from-oss-volunteering/) بعد 14 سنة من العمل التطوعي في <span dir='ltr' markdown="1">OSS</span>.

مثل أي عمل آخر، ستبقيك الاستراحات المنتظمة متجدد النشاط، سعيدًا، ومتحمسًا لمواصلة عملك.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/danielbachhuber?s=180" class="pquote-avatar" alt="avatar">
  أثناء إدارة <span dir='ltr' markdown="1">WP-CLI</span> اكتشفت أن عليّ أن أضع سعادتي أولًا، وأن أرسم حدودًا واضحة لمستوى مشاركتي. أفضل توازن وجدته هو من ساعتين إلى خمس ساعات في الأسبوع، كجزء من جدول عملي العادي. هذا يحافظ على أن تظل مشاركتي شغفًا، وليس عبئًا أو عملًا ثقيلًا. ولأنني أُعطي الأولوية للقضايا التي أعمل عليها، أتمكن من إحراز تقدم منتظم في الأمور التي أراها الأكثر أهمية.
  <p markdown="1" class="pquote-credit">
<span dir='ltr' markdown="1">@danielbachhuber —</span>, ["تعازيّ، لقد أصبحت الآن المسؤول عن مشروع <span dir='ltr' markdown="1">open source</span> مشهور"](https://web.archive.org/web/20220306014037/https://danielbachhuber.com/2016/06/26/my-condolences-youre-now-the-maintainer-of-a-popular-open-source-project/)
  </p>
</aside>

أحيانًا يكون من الصعب أخذ استراحة من العمل في <span dir='ltr' markdown="1">open source</span> عندما تشعر أن الجميع يحتاج إليك. قد يحاول البعض حتى جعلك تشعر بالذنب إذا ابتعدت قليلًا.

ابذل جهدك لإيجاد الدعم لمستخدميك ولمجتمعك أثناء ابتعادك عن المشروع. وإذا لم تتمكن من العثور على الدعم الذي تحتاجه، خذ استراحة على أي حال. تأكد من إعلام الآخرين بعدم تواجدك، حتى لا يشعروا بالارتباك بسبب قلة استجابتك.

أخذ الاستراحات لا يقتصر على الإجازات فقط. إذا كنت لا ترغب في العمل على <span dir='ltr' markdown="1">open source</span> في عطلات نهاية الأسبوع أو خلال ساعات عملك، ضع هذه التوقعات بوضوح للآخرين حتى يعرفوا عدم إزعاجك.

## اهتم بنفسك أولًا!

إدارة مشروع مشهور تتطلب مهارات مختلفة عن مراحل النمو الأولى، لكنها ليست أقل مكافأة. كمحافظ على المشروع، ستكتسب خبرة في القيادة والمهارات الشخصية على مستوى نادر أن يحصل عليه معظم الناس. ورغم أن الأمر قد يكون صعبًا أحيانًا، فإن وضع حدود واضحة وأخذ فقط ما تستطيع تحمله سيساعدك على البقاء سعيدًا، متجدد النشاط، ومنتجًا.
</div>