---
lang: bg
title: Стартиране на проект с отворен код
description: Научете повече за света на отворения код и се пригответе да стартирате свой собствен проект.
class: beginners
order: 2
image: /assets/images/cards/beginner.png
related:
  - finding
  - building
---

## "Какво" и "защо" на отворения код

Значи обмисляте да започнете с отворен код? Честито! Светът оценява вашия принос. Нека поговорим какво е отворен код и защо хората го правят.

### Какво означава "отворен код"?

Когато даден проект е с отворен код, това означава, че **всеки е свободен да използва, изучава, променя и разпространява вашия проект за всякакви цели.** Тези разрешения се прилагат чрез [лиценз за отворен код](https://opensource.org/licenses).

Отвореният код е мощен, защото намалява бариерите пред приемането и сътрудничеството, позволявайки на хората да разпространяват и подобряват проекти бързо. Също така защото дава на потребителите потенциал да контролират собствените си компютри, в сравнение със затворения код. Например, бизнес, използващ софтуер с отворен код, има опцията да наеме някой, който да направи персонализирани подобрения на софтуера, вместо да разчита изключително на продуктовите решения на доставчик със затворен код.

_Свободен софтуер_ се отнася до същия набор от проекти като _отворен код_. Понякога също така ще видите [тези термини](https://en.wikipedia.org/wiki/Free_and_open-source_software) комбинирани като "свободен софтуер с отворен код" (FOSS) или "безплатен софтуер с отворен код" (FLOSS). _Безплатно_ и _libre_ се отнасят за свободата, [не за цената](#отворен-код-означава-ли-безплатно).

### Защо хората отварят кода на работата си?

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/kentcdodds?s=180" class="pquote-avatar" alt="avatar">
  Едно от най-възнаграждаващите преживявания, които получавам от използването и сътрудничеството с отворен код, идва от взаимоотношенията, които изграждам с други разработчици, изправени пред много от същите проблеми като мен.
  <p markdown="1" class="pquote-credit">
— @kentcdodds, ["Как навлизането в Open Source беше страхотно за мен"](https://kentcdodds.com/blog/how-getting-into-open-source-has-been-awesome-for-me)
  </p>
</aside>

[Има много причини](https://ben.balter.com/2015/11/23/why-open-source/), поради които дадено лице или организация би искала да отвори проект с отворен код. Някои примери включват:

* **Сътрудничество:** Проектите с отворен код могат да приемат промени от всеки по света. [Exercism](https://github.com/exercism/), например, е платформа за упражнения по програмиране с над 350 участници.

* **Приемане и ремиксиране:** Проектите с отворен код могат да се използват от всеки за почти всякакви цели. Хората дори могат да го използват за изграждане на други неща. [WordPress](https://github.com/WordPress), например, стартира като разклонение на съществуващ проект, наречен [b2](https://github.com/WordPress/book/blob/HEAD/Content/Part%201/2-b2-cafelog.md).

* **Прозрачност:** Всеки може да провери проект с отворен код за грешки или несъответствия. Прозрачността има значение за правителства като [България](https://medium.com/@bozhobg/bulgaria-got-a-law-requiring-open-source-98bf626cf70a) или [Съединените щати](https://www.cio.gov/2016/08/11/peoples-code.html), регулирани отрасли като банкиране или здравеопазване и софтуер за сигурност като [Да шифроваме](https://github.com/letsencrypt).

Отвореният код също не е само за софтуер. Можете да отворите всичко - от набори от данни до книги. Разгледайте [GitHub Explore](https://github.com/explore) за идеи какво още можете да отворите.

### Отворен код означава ли "безплатно"?

Едно от най-големите предимства на отворения код е, че не струва пари. "Безплатно" обаче е страничен продукт от общата стойност на отворения код.

Тъй като [лицензът с отворен код изисква](https://opensource.org/definition-annotated/) всеки да може да използва, променя и споделя вашия проект за почти всякакви цели, самите проекти обикновено са безплатни. Ако използването на проекта струва пари, всеки може законно да направи копие и вместо това да използва безплатната версия.

В резултат на това повечето проекти с отворен код са безплатни, но "безплатно" не е част от определението за отворен код. Има начини за таксуване за проекти с отворен код индиректно чрез двойно лицензиране или ограничени функции, като същевременно се спазва официалното определение за отворен код.

## Трябва ли да стартирам собствен проект с отворен код?

Краткият отговор е да, защото независимо от резултата, стартирането на собствен проект е чудесен начин да научите как работи отвореният код.

Ако никога преди не сте отваряли проект с отворен код, може да се притеснявате какво ще кажат хората или дали някой изобщо ще забележи. Ако това звучи като вас, не сте сами!

Работата с отворен код е като всяка друга творческа дейност, независимо дали е писане или рисуване. Може да ви е страшно да споделяте работата си със света, но единственият начин да станете по-добри е да практикувате – дори и да нямате публика.

Ако все още не сте убедени, отделете малко време, за да помислите какви може да са вашите цели.

### Поставяне на вашите цели

Целите могат да ви помогнат да разберете върху какво да работите, на какво да кажете "не" и къде имате нужда от помощ от другите. Започнете, като се запитате _защо използвам този проект с отворен код?_

Няма един правилен отговор на този въпрос. Може да имате множество цели за един проект или различни проекти с различни цели.

Ако единствената ви цел е да покажете работата си, може дори да не искате принос и дори да го кажете във вашия README. От друга страна, ако искате сътрудници, ще инвестирате време в ясна документация и ще накарате новодошлите да се почувстват добре дошли.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/mavris?s=180" class="pquote-avatar" alt="avatar">
  В един момент създадох персонализиран UIAlertView, който използвах... и реших да го направя с отворен код. Затова го модифицирах, за да бъде по-динамичен, и го качих в GitHub. Написах и първата си документация, обяснявайки на други разработчици как да я използват в своите проекти. Вероятно никой никога не го е използвал, защото беше прост проект, но се чувствах добре от моя принос.
  <p markdown="1" class="pquote-credit">
— @mavris, ["Самоуки разработчици на софтуер: Защо отвореният код е важен за нас"](https://medium.com/rocknnull/self-taught-software-engineers-why-open-source-is-important-to-us-fe2a3473a576)
  </p>
</aside>

С разрастването на проекта ви, общността ви може да се нуждае от нещо повече от код - от вас. Отговарянето на проблеми, прегледът на кода и евангелизирането на вашия проект са важни задачи в проект с отворен код.

Макар че времето, което отделяте за задачи, които не са свързани с кодиране, ще зависи от размера и обхвата на вашия проект, вие трябва да сте подготвени като поддържащ да се справите с тях сами или да намерите някой, който да ви помогне.

**Ако сте част от компания, предлагаща проект с отворен код,** се уверете, че вашият проект разполага с необходимите вътрешни ресурси, за да процъфтява. Ще искате да определите кой е отговорен за поддържането на проекта след стартирането и как ще споделите тези задачи с вашата общност.

Ако имате нужда от специален бюджет или персонал за промоция, операции и поддържане на проекта, започнете тези разговори отрано.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/captainsafia?s=180" class="pquote-avatar" alt="avatar">
  Когато започнете да отваряте проекта с отворен код, е важно да се уверите, че вашите процеси на управление вземат предвид приноса и способностите на общността около вашия проект. Не се страхувайте да включите сътрудници, които не са заети във вашия бизнес, в ключови аспекти на проекта — особено ако те често сътрудничат.
  <p markdown="1" class="pquote-credit">
— @captainsafia, ["Значи искате проект с отворен код, а?"](https://dev.to/captainsafia/so-you-wanna-open-source-a-project-eh-5779)
  </p>
</aside>

### Принос към други проекти

Ако целта ви е да научите как да си сътрудничите с други или да разберете как работи отворен код, помислете дали да допринесете за съществуващ проект. Започнете с проект, който вече използвате и харесвате. Приносът към проект може да бъде толкова прост, колкото коригиране на правописни грешки или актуализиране на документация.

Ако не сте сигурни как да започнете като сътрудник, вижте нашето [Как да допринесете за ръководство с отворен код](../how-to-contribute/).

## Стартиране на ваш собствен проект с отворен код

Няма идеално време за отваряне на вашата работа. Можете да отворите кода на идея, в процес на работа или след години на затворен код.

Най-общо казано, трябва да отворите своя проект, когато се чувствате комфортно другите да гледат и дават обратна връзка за работата ви.

Без значение на кой етап решите да отворите проекта си, всеки проект трябва да включва следната документация:

* [Open source license](https://help.github.com/articles/open-source-licensing/#where-does-the-license-live-on-my-repository)
* [README](https://help.github.com/articles/create-a-repo/#commit-your-first-change)
* [Contributing guidelines](https://help.github.com/articles/setting-guidelines-for-repository-contributors/)
* [Code of conduct](../code-of-conduct/)

Като поддържащ, тези компоненти ще ви помогнат да съобщите очакванията, да управлявате приносите и да защитите законните права на всички (включително вашите собствени). Те значително увеличават шансовете ви за положително преживяване.

Ако вашият проект е в GitHub, поставянето на тези файлове в основната ви директория с препоръчаните файлови имена ще помогне на GitHub да ги разпознае и автоматично да ги покаже на вашите читатели.

### Избор на лиценз

Лицензът с отворен код гарантира, че други могат да използват, копират, модифицират и допринасят обратно към вашия проект без последствия. Освен това ви предпазва от трудни правни ситуации. **Трябва да включите лиценз, когато стартирате проект с отворен код.**

Легалната работа не е забавна. Добрата новина е, че можете да копирате и поставите съществуващ лиценз във вашето хранилище. Ще отнеме само минута, за да защитите упоритата си работа.

[MIT](https://choosealicense.com/licenses/mit/), [Apache 2.0](https://choosealicense.com/licenses/apache-2.0/) и [GPLv3](https://choosealicense.com/licenses/gpl-3.0/) са най-популярните лицензи с отворен код, но [има и други опции](https://choosealicense.com), от които да избирате.

Когато създавате нов проект в GitHub, ви се дава възможност да изберете лиценз. Включването на лиценз с отворен код ще направи вашия проект GitHub отворен код.

![Изберете лиценз](/assets/images/starting-a-project/repository-license-picker.png)

Ако имате други въпроси или притеснения относно правните аспекти на управлението на проект с отворен код, [ние ще ви покрием](../legal/).

### Напишете README

README правят повече от това да обяснят как да използвате вашия проект. Те също така обясняват защо вашият проект има значение и какво могат да правят вашите потребители с него.

В README опитайте да отговорите на следните въпроси:

* Какво прави този проект?
* Защо този проект е полезен?
* Как да започна?
* Къде мога да получа повече помощ, ако имам нужда от нея?

Можете да използвате вашия README, за да отговорите на други въпроси, като например как се справяте с приносите, какви са целите на проекта и информация за лицензи и приписване. Ако не искате да приемате принос или вашият проект все още не е готов за производство, запишете тази информация.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/tracymakes?s=180" class="pquote-avatar" alt="avatar">
  По-добрата документация означава повече потребители, по-малко заявки за поддръжка и повече сътрудници. (...) Помнете, че вашите читатели не сте вие. Има хора, които могат да дойдат на проект, които имат напълно различен опит.
  <p markdown="1" class="pquote-credit">
— @tracymakes, ["Пишете така, че думите ви да се четат (видео)"](https://www.youtube.com/watch?v=8LiV759Bje0&list=PLmV2D6sIiX3U03qc-FPXgLFGFkccCEtfv&index=10)
  </p>
</aside>

Понякога хората избягват да пишат README, защото смятат, че проектът е незавършен или не искат приноси. Всичко това са много добри причини да напиша такъв.

За повече вдъхновение опитайте да използвате [ръководството "Направете README" на @dguo](https://www.makeareadme.com/) или [шаблона README](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2) на @PurpleBooth за да напишете пълен README.

Когато включите файл README в основната директория, GitHub автоматично ще го покаже на началната страница на хранилището.

### Напишете вашите указания за принос

CONTRIBUTING файл казва на вашата публика как да участва във вашия проект. Например можете да включите информация за:

* Как да подадете доклад за грешка (опитайте да използвате [шаблони за заявка за проблем и изтегляне](https://github.com/blog/2111-issue-and-pull-request-templates))
* Как да предложим нова функция
* Как да настроите вашата среда и да стартирате тестове

В допълнение към техническите подробности, файлът CONTRIBUTING е възможност да съобщите вашите очаквания за приноси, като например:

* Типовете приноси, които търсите
* Вашата пътна карта или визия за проекта
* Как сътрудниците трябва (или не трябва) да се свързват с вас

Използването на топъл, приятелски тон и предлагането на конкретни предложения за принос (като например писане на документация или създаване на уебсайт) може да помогне много на новодошлите да се почувстват добре дошли и развълнувани да участват.

Например [Active Admin](https://github.com/activeadmin/activeadmin/) започва [своето ръководство за принос](https://github.com/activeadmin/activeadmin/blob/HEAD/CONTRIBUTING.md) с:

> Първо, благодаря ви, че обмислихте да допринесете за Active Admin. Именно хора като вас правят Active Admin толкова страхотен инструмент.

В най-ранните етапи на вашия проект, вашият CONTRIBUTING файл може да бъде прост. Винаги трябва да обяснявате как да докладвате бъгове или проблеми с файлове, както и всякакви технически изисквания (като тестове), за да направите принос.

С течение на времето може да добавите други често задавани въпроси към вашия CONTRIBUTING файл. Записването на тази информация означава, че по-малко хора ще ви задават едни и същи въпроси отново и отново.

За повече помощ при писането на вашия CONTRIBUTING файл вижте @nayafia [шаблон за ръководство за допринасяне](https://github.com/nayafia/contributing-template/blob/HEAD/CONTRIBUTING-template.md) или @mozilla ["Как да Създайте CONTRIBUTING.md"](https://mozillascience.github.io/working-open-workshop/contributing/).

Връзка към вашия ПРИНОСЕН файл от вашия README, така че повече хора да го видят. Ако [поставите файла CONTRIBUTING в хранилището на вашия проект](https://help.github.com/articles/setting-guidelines-for-repository-contributors/), GitHub автоматично ще се свърже с вашия файл, когато участник създаде проблем или отваря заявка за изтегляне.

![Указания за принос](/assets/images/starting-a-project/Contributing-guidelines.jpg)

### Създаване на кодекс на поведение

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/mlynch?s=180" class="pquote-avatar" alt="avatar">
  Всички сме имали опит, в който сме се сблъсквали с това, което вероятно е било злоупотреба, или като поддържащ, който се опитва да обясни защо нещо трябва да бъде по определен начин, или като потребител... задавайки прост въпрос. (...) Кодексът на поведение се превръща в документ с лесни препратки и връзки, който показва, че вашият екип приема много сериозно конструктивния дискурс.
  <p markdown="1" class="pquote-credit">
— @mlynch, ["Превръщане на отворения код в по-щастливо място"](https://medium.com/ionic-and-the-mobile-web/making-open-source-a-happier-place-3b90d254f5f)
  </p>
</aside>

И накрая, кодексът на поведение помага да се определят основните правила за поведение на участниците във вашия проект. Това е особено ценно, ако стартирате проект с отворен код за общност или компания. Кодексът на поведение ви дава възможност да улесните здравословното, конструктивно поведение в общността, което ще намали стреса ви като поддържащ.

За повече информация вижте нашето [Ръководство за кодекс на поведение](../code-of-conduct/).

В допълнение към комуникацията _как_ очаквате да се държат участниците, кодексът за поведение също има тенденция да описва към кого се отнасят тези очаквания, кога се прилагат и какво да направите, ако възникне нарушение.

Подобно на лицензите с отворен код, има и нововъзникващи стандарти за кодекси за поведение, така че не е нужно да пишете свои собствени. [Споразумението на сътрудниците](https://contributor-covenant.org/) е код за поведение, който се използва от [над 40 000 проекта с отворен код](https://www.contributor-covenant.org/adopters), включително Kubernetes, Rails и Swift. Без значение кой текст използвате, трябва да сте готови да наложите своя кодекс на поведение, когато е необходимо.

Поставете текста директно във файл CODE_OF_CONDUCT във вашето хранилище. Съхранявайте файла в главната директория на вашия проект, за да е лесен за намиране, и свържете към него от вашия README.

## Наименуване и брандиране на вашия проект

Брандирането е повече от крещящо лого или закачливо име на проект. Става въпрос за това как говорите за вашия проект и до кого достигате с вашето послание.

### Избор на правилното име

Изберете име, което е лесно за запомняне и в идеалния случай дава някаква представа какво прави проектът. Например:

* [Sentry](https://github.com/getsentry/sentry) следи приложенията за докладване на сривове
* [Thin](https://github.com/macournoyer/thin) е бърз и лесен Ruby уеб сървър

Ако надграждате върху съществуващ проект, използването на тяхното име като префикс може да ви помогне да изясните какво прави вашият проект (например [node-fetch](https://github.com/bitinn/node-fetch) носи `window .fetch` към Node.js).

Помислете за яснотата преди всичко. Каламбурите са забавни, но не забравяйте, че някои вицове може да не се преведат в други култури или хора с различен опит от вашия. Някои от вашите потенциални потребители може да са служители на компанията: не искате да ги карате да се чувстват неудобно, когато трябва да обясняват вашия проект по време на работа!

### Избягване на конфликти с имена

[Проверете за проекти с отворен код с подобно име](http://ivantomic.com/projects/ospnc/), особено ако споделяте същия език или екосистема. Ако името ви се припокрива с популярен съществуващ проект, може да объркате аудиторията си.

Ако искате уебсайт, Twitter манипулатор или други свойства да представляват вашия проект, уверете се, че можете да получите имената, които искате. В идеалния случай [запазете тези имена сега](https://instantdomainsearch.com/) за спокойствие, дори ако все още не възнамерявате да ги използвате.

Уверете се, че името на вашия проект не нарушава никакви търговски марки. Една компания може да поиска от вас да премахнете проекта си по-късно или дори да предприеме съдебни действия срещу вас. Просто не си струва риска.

Можете да проверите [WIPO Global Brand Database](http://www.wipo.int/branddb/en/) за конфликти на търговски марки. Ако сте в компания, това е едно от нещата, с които вашият [правен екип може да ви помогне](../legal/).

И накрая, направете бързо търсене в Google за името на вашия проект. Ще могат ли хората лесно да намерят вашия проект? Показва ли се нещо друго в резултатите от търсенето, което не бихте искали да виждат?

### Как пишете (и кодирате) също влияе върху вашата марка!

През целия живот на вашия проект ще пишете много: README, уроци, документи на общността, отговаряне на проблеми, може би дори бюлетини и пощенски списъци.

Независимо дали става въпрос за официална документация или случаен имейл, вашият стил на писане е част от марката на вашия проект. Помислете как бихте могли да възприемете публиката си и дали това е тонът, който искате да предадете.

<aside markdown="1" class="pquote">
   <img src="https://avatars.githubusercontent.com/janl?s=180" class="pquote-avatar" alt="avatar">
   Опитах се да участвам във всяка нишка в пощенския списък и да показвам примерно поведение, да бъда любезен с хората, да приемам проблемите им сериозно и да се опитвам да бъда полезен като цяло. След известно време хората останаха наоколо не само за да задават въпроси, но и за да помогнат с отговорите и за моя пълна радост имитираха моя стил.
   <p markdown="1" class="pquote-credit">
— @janl в [CouchDB](https://github.com/apache/couchdb), ["Устойчив отворен код"](https://web.archive.org/web/20200723213552/https://writing.jan.io/2015/11/20/sustainable-open-source.html)
   </p>
</aside>

Използването на топъл, приобщаващ език (като "тях", дори когато се отнася до един човек) може много да помогне на вашия проект да се почувства добре дошъл за новите сътрудници. Придържайте се към простия език, тъй като много от вашите читатели може да не са носители на английски език.

Освен начина, по който пишете думи, вашият стил на кодиране може също да стане част от марката на вашия проект. [Angular](https://angular.io/guide/styleguide) и [jQuery](https://contribute.jquery.org/style-guide/js/) са два примера за проекти със строги стилове и насоки за кодиране.

Не е необходимо да пишете стилово ръководство за вашия проект, когато току-що започвате, и може да откриете, че така или иначе ви харесва да включвате различни стилове на кодиране във вашия проект. Но трябва да предвидите как вашият стил на писане и кодиране може да привлече или обезсърчи различни типове хора. Най-ранните етапи на вашия проект са вашата възможност да създадете прецедента, който искате да видите.

## Вашият контролен списък преди стартиране

Готови ли сте да отворите вашия проект? Ето контролен списък за помощ. Поставете отметка във всички квадратчета? Готови сте за работа! [Щракнете върху "публикувай"](https://help.github.com/articles/making-a-private-repository-public/) и се потупайте по рамото.

**Документация**

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox1" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox1" class="overflow-hidden d-block text-normal">
    Проектът има файл LICENSE с лиценз с отворен код
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox2" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox2" class="overflow-hidden d-block text-normal">
    Проектът има основна документация (README, CONTRIBUTING, CODE_OF_CONDUCT)
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox3" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox3" class="overflow-hidden d-block text-normal">
    Името е лесно за запомняне, дава известна представа какво прави проектът и не е в конфликт със съществуващ проект или нарушава търговски марки
  </label>
</div>

<div class="clearfix mb-4">
  <input type="checkbox" id="cbox4" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox4" class="overflow-hidden d-block text-normal">
    Опашката с проблеми е актуална, с ясно организирани и етикетирани проблеми
  </label>
</div>

**Код**

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox5" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox5" class="overflow-hidden d-block text-normal">
    Проектът използва последователни кодови конвенции и ясни имена на функции/методи/променливи
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox6" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox6" class="overflow-hidden d-block text-normal">
    Кодът е ясно коментиран, документирайки намеренията и крайните случаи
  </label>
</div>

<div class="clearfix mb-4">
  <input type="checkbox" id="cbox7" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox7" class="overflow-hidden d-block text-normal">
    Няма чувствителни материали в хронологията на редакциите, проблеми или заявки за изтегляне (например пароли или друга непублична информация)
  </label>
</div>

**Хора**

Ако сте физическо лице:

<div class="clearfix mb-4">
  <input type="checkbox" id="cbox8" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox8" class="overflow-hidden d-block text-normal">
  Говорили сте с правния отдел и/или разбирате политиките за IP и отворен код на вашата компания (ако сте служител някъде)
  </label>
</div>

Ако сте компания или организация:

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox9" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox9" class="overflow-hidden d-block text-normal">
    Говорили сте с правния си отдел
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox10" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox10" class="overflow-hidden d-block text-normal">
    Имате маркетингов план за анонсиране и популяризиране на проекта
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox11" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox11" class="overflow-hidden d-block text-normal">
    Някой се ангажира да управлява взаимодействията на общността (отговаряне на проблеми, преглед и обединяване на заявки за изтегляне)
  </label>
</div>

<div class="clearfix mb-4">
  <input type="checkbox" id="cbox12" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox12" class="overflow-hidden d-block text-normal">
    Най-малко двама души имат административен достъп до проекта
  </label>
</div>

## Направи го!

Поздравления за първия ви проект с отворен код. Без значение от резултата, публичната работа е дар за общността. С всеки ангажимент, коментар и заявка за изтегляне вие създавате възможности за себе си и за другите да се учат и да растат.
