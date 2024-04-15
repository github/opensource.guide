---
lang: bg
title: Правната страна на отворения код
description: Всичко, което някога сте се чудили за правната страна на отворения код, и няколко неща, които не сте се чудили.
class: legal
order: 10
image: /assets/images/cards/legal.png
related:
  - contribute
  - leadership
---

## Разбиране на правните последици от отворения код

Споделянето на вашата творческа работа със света може да бъде вълнуващо и възнаграждаващо изживяване. Това може да означава и куп правни неща, за които не сте знаели, че трябва да се тревожите. За щастие, с това ръководство не е нужно да започвате от нулата. (Преди да се задълбочите, не забравяйте да прочетете нашия [отказ от отговорност](/notices/).)

## Защо хората се интересуват толкова много от правната страна на отворения код?

Радвам се, че попита! Когато правите творческо произведение (като писане, графики или код), това произведение е под изключителни авторски права по подразбиране. Тоест законът предполага, че като автор на вашето произведение вие имате думата какво другите могат да правят с него.

Като цяло това означава, че никой друг не може да използва, копира, разпространява или модифицира вашата работа, без да бъде изложен на риск от премахване, разклащане или съдебни спорове.

Отвореният код обаче е необичайно обстоятелство, тъй като авторът очаква други да използват, променят и споделят работата. Но тъй като правното подразбиране все още е изключително авторско право, трябва изрично да дадете тези разрешения с лиценз.

Тези правила се прилагат и когато някой допринася за вашия проект. Без лиценз или друго споразумение всички приноси са изключителна собственост на техните автори. Това означава, че никой – дори вие – не може да използва, копира, разпространява или променя техния принос.

И накрая, вашият проект може да има зависимости с лицензионни изисквания, за които не сте знаели. Общността на вашия проект или политиките на вашия работодател може също да изискват вашият проект да използва конкретни лицензи с отворен код. Ще разгледаме тези ситуации по-долу.

## Публичните GitHub проекти с отворен код ли са?

Когато [създадете нов проект](https://help.github.com/articles/creating-a-new-repository/) в GitHub, имате опцията да направите хранилището **частно** или **публично**.

![Създаване на хранилище](/assets/images/legal/repo-create-name.png)

**Да направите своя проект в GitHub публичен не е същото като да лицензирате проекта си.** Публичните проекти са обхванати от [Условията за ползване на GitHub](https://help.github.com/en/github/site-policy/github-Terms-of-service#3-ownership-of-content-right-to-post-and-license-grants), което позволява на другите да преглеждат и разклоняват вашия проект, но иначе работата ви идва без разрешения.

Ако искате други да използват, разпространяват, модифицират или допринасят обратно към вашия проект, трябва да включите лиценз с отворен код. Например, някой не може законно да използва която и да е част от вашия GitHub проект в своя код, дори ако е публичен, освен ако изрично не му дадете правото да го направи.

## Просто ми дайте TL;DR за това, от което се нуждая, за да защитя проекта си.

Имате късмет, защото днес лицензите за отворен код са стандартизирани и лесни за използване. Можете да копирате и поставите съществуващ лиценз директно във вашия проект.

[MIT](https://choosealicense.com/licenses/mit/), [Apache 2.0](https://choosealicense.com/licenses/apache-2.0/) и [GPLv3](https://choosealicense.com/licenses/gpl-3.0/) са [популярни лицензи за отворен код](https://innovationgraph.github.com/global-metrics/licenses), но има и други опции за избор. Можете да намерите пълния текст на тези лицензи и инструкции как да ги използвате на [choosealicense.com](https://choosealicense.com/).

Когато създадете нов проект в GitHub, ще бъдете [помолени да добавите лиценз](https://help.github.com/articles/open-source-licensing/).

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/benbalter?s=180" class="pquote-avatar" alt="avatar">
  Стандартизираният лиценз служи като заместител за тези без правно обучение, за да знаят точно какво могат и какво не могат да правят със софтуера. Освен ако не е абсолютно необходимо, избягвайте персонализирани, модифицирани или нестандартни условия, които ще послужат като пречка за използването на кода на агенцията надолу по веригата.
  <p markdown="1" class="pquote-credit">
— @benbalter, ["Всичко, което един държавен адвокат трябва да знае за лицензирането на&nbsp;отворен код"](https://ben.balter.com/2014/10/08/open-source-licensing-for-government-attorneys/)
  </p>
</aside>

## Кой лиценз с отворен код е подходящ за моя проект?

Трудно е да сгрешите с [MIT License](https://choosealicense.com/licenses/mit/), ако започвате с празен лист. Той е кратък, лесен за разбиране и позволява на всеки да прави каквото и да е, стига да пази копие от лиценза, включително вашето известие за авторски права. Ще можете да пуснете проекта под различен лиценз, ако някога се наложи.

В противен случай изборът на правилния лиценз с отворен код за вашия проект зависи от вашите цели.

Вашият проект много вероятно има (или ще има) **зависимости**, всяка от които ще има собствен лиценз с отворен код с условия, които трябва да спазвате. Например, ако сте с отворен код за Node.js проект, вероятно ще използвате библиотеки от Node Package Manager (npm).

Зависимости с **разрешителни лицензи** като [MIT](https://choosealicense.com/licenses/mit/), [Apache 2.0](https://choosealicense.com/licenses/apache-2.0/), [ISC](https://choosealicense.com/licenses/isc) и [BSD](https://choosealicense.com/licenses/bsd-3-clause) ви позволяват да лицензирате проекта си както искате.

Зависимостите с **лицензи за авторско право** изискват по-голямо внимание. Включително всяка библиотека със "силен" лиценз за копиралефт като [GPLv2](https://choosealicense.com/licenses/gpl-2.0), [GPLv3](https://choosealicense.com/licenses/gpl-3.0), или [AGPLv3](https://choosealicense.com/licenses/agpl-3.0) изисква да изберете идентичен или [съвместим лиценз](https://www.gnu.org/licenses/license-list.en.html#GPLCompatibleLicenses) за вашия проект. Библиотеки с "ограничен" или "слаб" лиценз за копиралефт като [MPL 2.0](https://choosealicense.com/licenses/mpl-2.0/) и [LGPL](https://choosealicense.com/licenses/lgpl-3.0/) могат да бъдат включени в проекти с произволен лиценз, при условие че следвате [допълнителните правила](https://fossa.com/blog/all-about-copyleft-licenses/#:~:text=weak%20copyleft%20licenses%20also%20obligate%20users%20to%20release%20their%20changes.%20however%2C%20this%20requirement%20applies%20to%20a%20narrower%20set%20of%20code.) посочват те.
 
Можете също така да разгледате **общностите**, които се надявате да използвате и да допринесете за вашия проект:

* **Искате ли вашият проект да бъде използван като зависимост от други проекти?** Вероятно най-добре е да използвате най-популярния лиценз в съответната общност. Например [MIT](https://choosealicense.com/licenses/mit/) е най-популярният лиценз за [npm библиотеки](https://libraries.io/search?platforms=NPM).
* **Искате ли вашият проект да се хареса на големия бизнес?** Големият бизнес може да се утеши от изричен патентен лиценз от всички сътрудници. В този случай [Apache 2.0](https://choosealicense.com/licenses/apache-2.0/) покрива вас (и тях).
* **Искате ли вашият проект да се хареса на сътрудници, които не искат техният принос да се използва в софтуер със затворен код?** [GPLv3](https://choosealicense.com/licenses/gpl-3.0/) или (ако те също не желаят да допринасят за услуги със затворен код) [AGPLv3](https://choosealicense.com/licenses/agpl-3.0/) ще мине добре.

Вашата **компания** може да има правила за лицензиране на проекти с отворен код. Някои компании изискват вашите проекти да носят разрешителен лиценз, за да позволят интеграция с фирмените продукти на компанията. Други политики налагат силен лиценз за копиралефт и споразумение за допълнителен сътрудник (вижте по-долу), така че само вашата компания може да използва проекта в софтуер със затворен код. Организациите може също така да имат определени стандарти, цели за социална отговорност или нужди от прозрачност, които може да изискват конкретна стратегия за лицензиране. Говорете с [правния отдел на вашата компания](#какво-трябва-да-знае-юридическият-екип-на-моята-компания) за насоки.

Когато създавате нов проект в GitHub, ви се дава възможност да изберете лиценз. Включването на един от лицензите, споменати по-горе, ще направи вашия проект GitHub с отворен код. Ако искате да видите други опции, вижте [choosealicense.com](https://choosealicense.com), за да намерите правилния лиценз за вашия проект, дори ако [не е софтуер](https://choosealicense.com/non-software/).

## Какво ще стане, ако искам да сменя лиценза на моя проект?

Повечето проекти никога не се нуждаят от промяна на лицензи. Но понякога обстоятелствата се променят.

Например, докато вашият проект расте, той добавя зависимости или потребители, или вашата компания променя стратегии, всяка от които може да изисква или иска различен лиценз. Освен това, ако сте пропуснали да лицензирате проекта си от самото начало, добавянето на лиценз е на практика същото като промяната на лицензите. Има три основни неща, които трябва да имате предвид, когато добавяте или променяте лиценза на вашия проект:

**Сложно е.** Определянето на съвместимостта и съответствието на лиценза и кой притежава авторските права може да стане сложно и объркващо много бързо. Преминаването към нов, но съвместим лиценз за нови версии и приноси е различно от повторното лицензиране на всички съществуващи приноси. Включете юридическия си екип при първия намек за всяко желание за промяна на лицензи. Дори ако имате или можете да получите разрешение от притежателите на авторските права на вашия проект за промяна на лиценза, помислете за въздействието на промяната върху другите потребители и сътрудници на вашия проект. Мислете за промяната на лиценза като за "управленско събитие" за вашия проект, което е по-вероятно да протече гладко с ясна комуникация и консултация със заинтересованите страни във вашия проект. Още повече причина да изберете и използвате подходящ лиценз за вашия проект от самото му начало!

**Съществуващият лиценз на вашия проект.** Ако съществуващият лиценз на вашия проект е съвместим с лиценза, който искате да промените, можете просто да започнете да използвате новия лиценз. Това е така, защото ако лиценз A е съвместим с лиценз B, вие ще спазвате условията на A, докато спазвате условията на B (но не непременно обратното). Така че, ако в момента използвате разрешителен лиценз (напр. MIT), можете да промените на лиценз с повече условия, стига да запазите копие от лиценза на MIT и всички свързани бележки за авторски права (т.е. да продължите да спазвате минималните условия на лиценза на MIT). Но ако текущият ви лиценз не е разрешителен (напр. copyleft или нямате лиценз) и не сте единственият притежател на авторските права, не можете просто да промените лиценза на вашия проект на MIT. По същество, с разрешителен лиценз, притежателите на авторските права на проекта са дали предварително разрешение за промяна на лицензите.

**Съществуващи носители на авторски права на вашия проект.** Ако вие сте единственият сътрудник на вашия проект, тогава вие или вашата компания сте единственият носител на авторските права на проекта. Можете да добавите или промените какъвто лиценз вие или вашата компания искате. В противен случай може да има други притежатели на авторски права, от които се нуждаете от съгласие, за да промените лицензите. Кои са те? [Хората, които имат ангажименти във вашия проект](https://github.com/thehale/git-authorship) е добро място да започнете. Но в някои случаи авторските права ще се държат от работодателите на тези хора. В някои случаи хората ще са направили само минимален принос, но няма твърдо и бързо правило, че приносите под определен брой редове код не са обект на авторско право. Какво да правя? Зависи. За сравнително малък и млад проект може да е възможно да накарате всички съществуващи сътрудници да се съгласят с промяна на лиценза в проблем или заявка за изтегляне. За големи и дълготрайни проекти може да се наложи да потърсите много сътрудници и дори техните наследници. Mozilla отне години (2001-2006), за да прелицензира Firefox, Thunderbird и свързания софтуер.

Като алтернатива можете да накарате сътрудниците предварително да одобрят определени промени в лиценза чрез споразумение за допълнителен сътрудник ([вижте по-долу](#which-open-source-license-is-appropriate-for-my-project)). Това измества малко сложността на промяната на лицензите. Ще имате нужда от повече помощ от вашите адвокати предварително и все пак ще искате да комуникирате ясно със заинтересованите страни във вашия проект, когато извършвате промяна на лиценза.

## Моят проект има ли нужда от споразумение за допълнителен сътрудник?

Вероятно не. За по-голямата част от проектите с отворен код лицензът с отворен код имплицитно служи както за входящ (от сътрудници), така и за изходящ (към други сътрудници и потребители) лиценз. Ако вашият проект е в GitHub, Общите условия на GitHub правят "inbound=outbound" [изрично по подразбиране](https://help.github.com/en/github/site-policy/github-terms-of-service#6-contributions-under-repository-license).

Допълнително споразумение за сътрудник – често наричано Споразумение за лиценз на сътрудник (CLA) – може да създаде административна работа за поддържащите проекта. Колко работа добавя едно споразумение зависи от проекта и изпълнението. Обикновено споразумение може да изисква сътрудниците да потвърдят с едно щракване, че имат правата, необходими за принос съгласно лиценза за отворен код на проекта. По-сложно споразумение може да изисква правен преглед и подписване от работодателите на сътрудниците.

Освен това, чрез добавяне на "бумащина", която според някои е ненужна, трудна за разбиране или несправедлива (когато получателят на споразумението получава повече права от сътрудниците или обществеността чрез лиценза за отворен код на проекта), допълнително споразумение за сътрудник може да се възприеме като недружелюбно към общността на проекта.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/bcantrill?s=180" class="pquote-avatar" alt="avatar">
    Премахнахме CLA за Node.js. Това намалява бариерата за навлизане на сътрудниците на Node.js, като по този начин разширява базата на сътрудниците.
  <p markdown="1" class="pquote-credit">
— @bcantrill, ["Разширяване на Node.js приноси"](https://www.joyent.com/blog/broadening-node-js-contributions)
  </p>
</aside>

Някои ситуации, в които може да искате да обмислите споразумение за допълнителен сътрудник за вашия проект, включват:

* Вашите адвокати искат всички сътрудници изрично да приемат (_подписват_, онлайн или офлайн) условията за принос, може би защото смятат, че самият лиценз за отворен код не е достатъчен (въпреки че е!). Ако това е единствената грижа, споразумение за сътрудник, което потвърждава лиценза за отворен код на проекта, трябва да е достатъчно. [Лицензионното споразумение за jQuery Individual Contributor](https://web.archive.org/web/20161013062112/http://contribute.jquery.org/CLA/) е добър пример за леко споразумение за допълнителен сътрудник.
* Вие или вашите адвокати искате разработчиците да декларират, че всеки ангажимент, който правят, е разрешен. Изискването за [Сертификат за произход на разработчици](https://developercertificate.org/) е колко проекта постигат това. Например общността Node.js [използва](https://github.com/nodejs/node/blob/HEAD/CONTRIBUTING.md) DCO [вместо](https://nodejs.org/en/blog/uncategorized/notes-from-the-road/#easier-contribution) от техния предишен CLA. Една проста опция за автоматизиране на прилагането на DCO във вашето хранилище е [DCO Probot](https://github.com/probot/dco).
* Вашият проект използва лиценз с отворен код, който не включва изрично предоставяне на патент (като MIT) и се нуждаете от разрешение за патент от всички сътрудници, някои от които може да работят за компании с големи патентни портфейли, които биха могли да бъдат използвани за насочване към вас или други сътрудници и потребители на проекта. [Лицензионното споразумение за личен сътрудник на Apache](https://www.apache.org/licenses/icla.pdf) е често използвано допълнително споразумение за сътрудник, което има предоставяне на патент, отразяващо това, което се намира в Лиценза на Apache 2.0.
* Вашият проект е под лиценз за копиралефт, но също така трябва да разпространявате собствена версия на проекта. Ще трябва всеки сътрудник да ви прехвърли авторски права или да ви предостави (но не на обществеността) разрешителен лиценз. [Споразумението за сътрудник на MongoDB](https://www.mongodb.com/legal/contributor-agreement) е пример за този тип споразумение.
* Смятате, че вашият проект може да се наложи да промени лицензите през целия си живот и искате участниците да се съгласят предварително с такива промени.

Ако все пак трябва да използвате допълнително споразумение за сътрудници с вашия проект, обмислете използването на интеграция като [CLA помощник](https://github.com/cla-assistant/cla-assistant), за да сведете до минимум разсейването на сътрудниците.

## Какво трябва да знае правният екип на моята компания?

Ако пускате проект с отворен код като служител на компанията, първо, вашият правен екип трябва да знае, че сте проект с отворен код.

За добро или лошо, помислете да ги уведомите дори ако това е личен проект. Вероятно имате "споразумение за интелектуална собственост на служителите" с вашата компания, което им дава известен контрол върху вашите проекти, особено ако изобщо са свързани с бизнеса на компанията или използвате ресурси на компанията за разработване на проекта. Вашата компания _би трябвало_ лесно да ви даде разрешение и може би вече го е направила чрез удобно за служителите IP споразумение или фирмена политика. Ако не, можете да преговаряте (например да обясните, че вашият проект служи на целите на компанията за професионално обучение и развитие за вас) или да избягвате да работите по проекта си, докато не намерите по-добра компания.

**Ако търсите проект с отворен код за вашата компания**, тогава определено ги уведомете. Вашият правен екип вероятно вече има политики за това какъв лиценз с отворен код (и може би допълнително споразумение за сътрудници) да използва въз основа на бизнес изискванията и експертния опит на компанията за гарантиране, че вашият проект е в съответствие с лицензите на неговите зависимости. Ако не, вие и те имате късмет! Вашият правен екип трябва да е нетърпелив да работи с вас, за да разберете тези неща. Някои неща, за които да помислите:

* **Материал на трета страна:** Вашият проект има ли зависимости, създадени от други или по друг начин включва или използва чужд код? Ако те са с отворен код, ще трябва да спазвате лицензите за отворен код на материалите. Това започва с избора на лиценз, който работи с лицензи с отворен код на трети страни ([вижте по-горе](#which-open-source-license-is-appropriate-for-my-project)). Ако вашият проект модифицира или разпространява материал с отворен код на трета страна, вашият правен екип също ще иска да знае, че отговаряте на други условия на лицензите за отворен код на трета страна, като запазване на бележки за авторски права. Ако вашият проект използва чужд код, който няма лиценз с отворен код, вероятно ще трябва да помолите поддържащите трети страни да [добавят лиценз с отворен код](https://choosealicense.com/no-license/#for-users), и ако не можете да получите такъв, спрете да използвате техния код във вашия проект.

* **Търговски тайни:** Помислете дали има нещо в проекта, което компанията не иска да направи достъпно за широката общественост. Ако е така, можете да отворите останалата част от проекта си, след като извлечете материала, който искате да запазите поверителен.

* **Патенти:** Вашата компания кандидатства ли за патент, за който отвореният код на вашия проект би представлявал [публично разкриване](https://en.wikipedia.org/wiki/Public_disclosure)? За съжаление може да бъдете помолени да изчакате (или може би компанията ще преразгледа разумността на приложението). Ако очаквате принос към вашия проект от служители на компании с големи патентни портфейли, вашият правен екип може да поиска да използвате лиценз с изрично предоставяне на патент от сътрудници (като Apache 2.0 или GPLv3) или допълнително споразумение за сътрудници ([вижте по-горе](#which-open-source-license-is-appropriate-for-my-project)).

* **Търговски марки:** Проверете отново дали името на вашия проект [не е в конфликт със съществуващи търговски марки](../starting-a-project/#избягване-на-конфликти-с-имена). Ако използвате търговските марки на собствената си компания в проекта, проверете дали това не предизвиква конфликти. [FOSSmarks](http://fossmarks.org/) е практическо ръководство за разбиране на търговските марки в контекста на безплатни проекти с отворен код.

* **Поверителност:** Вашият проект събира ли данни за потребители? "Домашен телефон" към фирмени сървъри? Вашият правен екип може да ви помогне да спазвате фирмените политики и външните разпоредби.

Ако пускате първия проект с отворен код на вашата компания, горното е повече от достатъчно, за да преминете (но не се притеснявайте, повечето проекти не би трябвало да предизвикват големи притеснения).

В по-дългосрочен план вашият правен екип може да направи повече, за да помогне на компанията да извлече повече от участието си в отворен код и да остане в безопасност:

* **Правила за приноса на служителите:** Помислете за разработване на корпоративна политика, която определя как вашите служители допринасят за проекти с отворен код. Ясната политика ще намали объркването сред вашите служители и ще им помогне да допринесат за проекти с отворен код в най-добрия интерес на компанията, независимо дали като част от работата им или в свободното им време. Добър пример е [Модел IP и политика за принос с отворен код](https://processmechanics.com/2015/07/23/a-model-ip-and-open-source-contribution-policy/) на Rackspace.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/vanl?s=180" class="pquote-avatar" alt="avatar">
  Предоставянето на IP, свързано с корекция, изгражда база от знания и репутация на служителя. Това показва, че компанията е инвестирала в развитието на този служител и създава усещане за овластяване и автономност. Всички тези предимства също водят до по-висок морал и по-добро задържане на служителите.
  <p markdown="1" class="pquote-credit">
— @vanl, ["Модел на IP и политика за принос с отворен код"](https://processmechanics.com/2015/07/23/a-model-ip-and-open-source-contribution-policy/)
  </p>
</aside>

* **Какво да публикувате:** [(Почти) всичко?](http://tom.preston-werner.com/2011/11/22/open-source-everything.html) Ако вашият правен екип разбира и е инвестирани в стратегията на вашата компания за отворен код, те ще могат най-добре да помогнат, вместо да пречат на вашите усилия.
* **Съответствие:** Дори ако вашата компания не пуска проекти с отворен код, тя използва чужд софтуер с отворен код. [Осъзнаването и процесът](https://www.linuxfoundation.org/blog/blog/why-companies-that-use-open-source-need-a-compliance-program/) могат да предотвратят главоболия, забавяния на продукти и съдебни дела .

<aside markdown="1" class="pquote">
  Организациите трябва да разполагат с лиценз и стратегия за съответствие, които отговарят както на категориите \["permissive" и "copyleft"\]. Това започва с водене на запис на лицензионните условия, които се прилагат за софтуера с отворен код, който използвате – включително подкомпоненти и зависимости.
  <p markdown="1" class="pquote-credit">
— Heather Meeker, ["Софтуер с отворен код: Основи на съответствието и най-добри практики"](https://techcrunch.com/2012/12/14/open-source-software-compliance-basics-and-best-practices/)
  </p>
</aside>

* **Патенти:** Вашата компания може да пожелае да се присъедини към [Open Invention Network](https://www.openinventionnetwork.com/), споделен защитен патентен пул за защита на използването на големи проекти с отворен код от членовете, или да проучи друго [алтернативно патентно лицензиране](https://www.eff.org/document/hacking-patent-system-2016).
* **Управление:** Особено ако и когато има смисъл да се премести проект към [юридическо лице извън компанията](../leadership-and-governance/#имам-нужда-от-юридическо-лице-което-да-подкрепи-моя-проект).