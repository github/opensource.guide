---
lang: hu
title: Építs befogadó közösséget
description: Olyan közösség építése, amely bátorítja az embereket a használatra, a részvételre és a projekt hírnevének terjesztésére.
class: building
order: 4
image: /assets/images/cards/building.png
related:
  - best-practices
  - coc
---

## Sikeres projekt összeállítása

Elindítottad a projektet, próbálod ismertté tenni, és az emberek megnézik. Fantasztikus! De hogy fogod őket megtartani?

A befogadó közösség egy befektetés a projekt jövőjébe és megítélésébe. Ha a projekt éppen most kezdi fogadni az első hozzájárulásokat, akkor kezd azzal, hogy az első közreműködők pozitív tapasztalatokat kapjanak, és könnyítsd meg nekik, hogy folyamatosan visszatérjenek.

### Érezzék az emberek, hogy szívesen látod őket

Gondolj a projekt közösségére például úgy, ahogyan @MikeMcQuaid amit ő [résztvevői tölcsérnek](https://mikemcquaid.com/2018/08/14/the-open-source-contributor-funnel-why-people-dont-contribute-to-your-open-source-project/) nevezett el:

![résztvevői tölcsér](/assets/images/building-community/contributor_funnel_mikemcquaid.png)

A közösség felépítése során fontold meg, hogy a tölcsér tetejéről valaki (potenciális felhasználó) hogyan tud eljutni a tölcsér aljára (aktív karbantartó). Cél, hogy minden résztvevő tapasztalatát javítsd ezeken a szakaszokon. Amikor az emberek könnyen érnek el eredményt, az ösztönözni fogja őket, hogy még többet tegyenek.

Kezd a dokumentációkkal:

* **Tedd egyszerűvé, hogy valaki használhassa a projektedet!** [Egy batátságos README](../starting-a-project/#readme-írása) és tiszta kód példák mindenkit hozzásegítenek ahhoz, hogy könnyen el tudjanak indulni.
* **Tisztán és érthetően magyarázd el, hogy hogyan lehet hozzájárulni**, használd a [ CONTRIBUTING fájlodat](../starting-a-project/#részvételi-irányelvek-leírása) és a hibajelzéseket tartsd naprakészen.
* **Good first issues**: Az új hozzájárulókat segíti az, ha egyértelműen [jelezve van címkével az az issue, amely kezdőknek ajánlott](https://help.github.com/en/articles/helping-new-contributors-find-your-project-with-labels). A GitHub egyértelműen megmutatja ezeket az issue-kat, és ezzel segíti a hasznos hozzájárulásokat úgy, hogy a hozzájáruló szintjének megfelelő hibát ajánl megoldásra.

[A GitHub 2017. évi nyílt forráskódú felmérése](http://opensourcesurvey.org/2017/) azt mutatta ki, hogy a félkész és zavaros dokumentáció a legnagyobb probléma a felhasználók számára. A jó dokumentáció beszippantja az embereket a projektbe: egyszercsak valaki nyit egy hibajelzést, vagy beküld egy beolvasztási kérelmet. Használd ki ezeket a lehetőségeket, hogy az emberek tovább mozogjanak lefelé a _résztvevői tölcséren_.

* **Ha valaki újként jelenik meg a projektben, akkor köszönd meg neki az érdeklődését!** Egyetlen egy negatív tapasztalat is elég ahhoz, hogy valaki ne jöjjön vissza többé a projekthez.
* **Legyél reszponzív!** Ha hónapokig nem válaszol a problémájára valakinek, nagy esély van rá, hogy elfelejti a projektedet.
* **Légy nyitott gondolkodású az új hozzájárulások elfogadásakor!** Sok hozzájáruló hibák jelzésével vagy apró javításokkal kezdi. [Számos módja van a hozzájárulásoknak](../how-to-contribute/#mit-jelent-a-hozzájárulás) a projekthez. Hagy segítsenek az emberek úgy, ahogy ők akarnak.
* **Ha van olyan hozzájárulás, amivel nem értesz egyet,** akkor köszönd meg az ötletet, és [magyarázd el miért](../best-practices/#meg-kell-tanulni-nemet-mondani) nem felel meg a projekt víziónak és csatold a hivatkozásokat a dokumentációidból.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/mikeal?s=180" class="pquote-avatar" alt="avatar">
  A nyílt forrásban való részvétel valaki könnyebb, valakinek nehezebb. Attól tarthat valaki, hogy pellengérre állítják, ha nem tesz valamit helyesen, vagy ha nem illeszkedik be. (...) Azáltal, hogy a nagyon alacsony műszaki jártassággal rendelkező közreműködőknek is megadjuk a lehetőséget a hozzájárulásra (dokumentáció, tartalom, stb.), nagymértékben csökkenthetjük ezt az aggodalmat.
  <p markdown="1" class="pquote-credit">
— @mikeal, ["Közreműködői bázis bővítése a modern nyílt forráskódban"](https://opensource.com/life/16/5/growing-contributor-base-modern-open-source)
  </p>
</aside>

A nyílt forráskódú közreműködők többsége "alkalmi közreműködő": olyan emberek, akik csak alkalmanként járulnak hozzá a projekthez. Előfordulhat, hogy egy alkalmi közreműködőnek nincs ideje teljes mértékben felkészülni a projektre, ezért az a feladatod, hogy megkönnyítsd számukra a hozzájárulást ilyen esetekben is.

Más közreműködők ösztönzése számodra is hasznos befektetés. Ha támogatod a projekt legnagyobb rajongóit abban, hogy azon dolgozzanak amin szeretnének, akkor kevesebb lesz a nyomás rajtad, hogy mindent te csinálj.

### Dokumentálj mindent

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/janl?s=180" class="pquote-avatar" alt="avatar">
  Voltál már valaha olyan (tech-) rendezvényen, ahol nem ismertél senkit, de úgy tűnt számodra, hogy mindenki más csoportokban áll és beszélget, mint a régi barátok? (...) Most képzeld el, hogy hozzá szeretnél járulni egy nyílt forráskódú projekthez, de nem tudod, miként és hogyan lehetséges ez.
  <p markdown="1" class="pquote-credit">
— @janl, ["Fenntartható Nyílt Forráskód"](https://writing.jan.io/2015/11/20/sustainable-open-source.html)
  </p>
</aside>

Amikor új projektet indítasz, természetesnek tűnhet, hogy a munkádat nem publikálod. De a nyílt forráskódú projektek akkor sikeresek, ha a folyamatait nyilvánosan dokumentálod.

Amikor leírod a dolgokat, több ember vehet részt a projekt minden lépésében. Segíthet akár olyan dolgokban is, amelyekre még nem is gondoltad volna, hogy szükséged van.

A dolgok leírása nem csupán a műszaki dokumentációt jelent. Bármikor, amikor azt érzed, hogy le kell írni valamit, vagy egy magánbeszélgetést folytattál a projektről, gondolkozz el arról, hogy nyilvánosságra tudod-e hozni azt.

Legyen átlátható a projekt ütemterve, a várt hozzájárulások típusai, vagy azok áttekintésének módja és akár az is, hogy miért hoztál meg bizonyos döntéseket.

Ha több felhasználó jelzi ugyanazt a problémát, akkor dokumentáld a válaszokat a README részben.

Találkozók alkalmával fontold meg a megjegyzések vagy döntések közzétételét egy vonatkozó kérdésben. Az ilyen átláthatóság szintjén kapott visszajelzés lehet meg fog lepni.

Mindennek a dokumentálása az te általad végzett munkára is vonatkozik. Ha a projekt lényeges frissítésén dolgozol,akkor add fel beolvasztási kérelemként és jelöld meg folyamatban lévő munkaként (WIP). Ily módon más emberek már korán bekapcsolódhatnak folyamatba és maguknak érzik azt.

### Legyél reszponzív

Amint [ismertté próbálod tenni a projektet](../finding-users), az emberek visszajelzéseket fognak küldeni neked. Lesznek kérdéseik a működéséről, vagy épp segítségre lehet szükségük az induláshoz.

Próbáljon reagálni, ha valaki problémát vagy beolvasztási kérelmet nyújt be, vagy kérdést tesz fel a projekttel kapcsolatban. Ha gyorsan reagálsz, az emberek úgy érzik, hogy részesei a párbeszédnek, és lelkesebben fognak részt venni.

Még ha a kérelmet nem is tudod azonnal átvizsgálni, a korai befogadás segít növelni az elkötelezettséget. Így válaszolt @tdreyno a [Middleman](https://github.com/middleman/middleman/pull/1466) egyik beolvasztási kérelmére:

![Middleman beolvasztási kérelem](/assets/images/building-community/middleman_pr.png)

[Egy Mozilla tanulmány szerint](https://docs.google.com/presentation/d/1hsJLv1ieSqtXBzd5YZusY-mB8e1VJzaeOmh8Q4VeMio/edit#slide=id.g43d857af8_0177) azoknak a válaszadóknak, akik 48 órán belül megkapták a kód review eredményét, sokkal magasabb volt a visszatérési aránya a projekthez és a hozzájárulása ahhoz.

A projekttel kapcsolatos beszélgetések az internet más részein is zajlanak, például a StackOverflow, a Twitter vagy a Reddit oldalain. Ezen helyek egy részén értesítéseket állíthatsz be, így figyelmeztetést kapsz, ha valaki megemlíti a projektedet.

### Biztosíts egy helyet a közösségednek

Két oka is van, hogy miért kell a közösségnek egy helyet biztosítani, ahol összejöhetnek.

Az első ok ők maguk. Segíts az embereknek megismerni egymást. A közös érdeklődésű emberek szeretnének egy helyet, ahol lehet beszélgetni. És amikor a kommunikáció nyilvános és hozzáférhető, bárki elolvashatja a múltbeli archívumokat, hogy felvegye a ritmust és hogy részt vegyen a párbeszédben.

A másik ok te vagy. Ha nem biztosítasz egy nyilvános helyet az embereknek ahol a projektjéről lehet beszélni, akkor valószínűleg közvetlenül téged keresnek meg. A kezdetben ez könnyűnek tűnhet, ha a magánüzenetekre csípőből válaszolunk. De az idő múlásával, különösen, ha a projekt népszerűvé válik, kimerülten fogod magad érezni. Állj ellen annak a kísértésnek, hogy privát módon kommunikálj az emberekkel a projekttel kapcsolatosan. Ehelyett irányítsd őket egy kijelölt és nyilvános csatornára.

A nyilvános kommunikáció egyszerű lehet, ha arra kéred az embereket, hogy nyissanak egy hibajegyet, ahelyett, hogy közvetlenül e-mailen küldnének azt, vagy megjegyzést fűznének a blogodhoz. Beállíthatsz egy levelezőlistát, vagy létrehozhatsz egy Twitter fiókot, Slack vagy akár egy IRC csatornát arra, hogy az emberek beszéljenek a projektedről. De akár próbálkozhatsz mindegyikkel!

[Kubernetes kops](https://github.com/kubernetes/kops#getting-involved) minden második héten biztosít időt arra, hogy segítse a közösség tagjait:

> Kopsnak minden második héten van elkülönített ideje arra, hogy segítséget és útmutatást nyújtson a közösség számára. A Kops fenntartói megállapodtak abban, hogy külön időt fordítanak az újonnan érkezőkkel való együttműködésre, a PR-ekkel kapcsolatos segítségnyújtásra és az új funkciók megvitatására.

A nyilvános kommunikáció alól kivételt képeznek: 1) biztonsági kérdések és 2) érzékeny magatartási kódex megsértése. Az embereknek mindig képesnek kell lenniük arra, hogy ezeket a kérdéseket privát módon jelentsék be. Ha nem akarod használni a személyes e-mail címed, akkor állíts be egy külön e-mail címet erre a célra.

## Growing your community

Communities are extremely powerful. That power can be a blessing or a curse, depending on how you wield it. As your project's community grows, there are ways to help it become a force of construction, not destruction.

### Don't tolerate bad actors

Any popular project will inevitably attract people who harm, rather than help, your community. They may start unnecessary debates, quibble over trivial features, or bully others.

Do your best to adopt a zero-tolerance policy towards these types of people. If left unchecked, negative people will make other people in your community uncomfortable. They may even leave.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/okdistribute?s=180" class="pquote-avatar" alt="avatar">
  The truth is that having a supportive community is key. I'd never be able to do this work without the help of my colleagues, friendly internet strangers, and chatty IRC channels. (...) Don't settle for less. Don't settle for assholes.
  <p markdown="1" class="pquote-credit">
— @okdistribute, ["How to Run a FOSS Project"](https://okdistribute.xyz/post/okf-de)
  </p>
</aside>

Regular debates over trivial aspects of your project distracts others, including you, from focusing on important tasks. New people who arrive to your project may see these conversations and not want to participate.

When you see negative behavior happening on your project, call it out publicly. Explain, in a kind but firm tone, why their behavior is not acceptable. If the problem persists, you may need to [ask them to leave](../code-of-conduct/#enforcing-your-code-of-conduct). Your [code of conduct](../code-of-conduct/) can be a constructive guide for these conversations.

### Meet contributors where they're at

Good documentation only becomes more important as your community grows. Casual contributors, who may not otherwise be familiar with your project, read your documentation to quickly get the context they need.

In your CONTRIBUTING file, explicitly tell new contributors how to get started. You may even want to make a dedicated section for this purpose. [Django](https://github.com/django/django), for example, has a special landing page to welcome new contributors.

![Django new contributors page](/assets/images/building-community/django_new_contributors.png)

In your issue queue, label bugs that are suitable for different types of contributors: for example, [_"first timers only"_](https://kentcdodds.com/blog/first-timers-only), _"good first issue"_, or _"documentation"_. [These labels](https://github.com/librariesio/libraries.io/blob/6afea1a3354aef4672d9b3a9fc4cc308d60020c8/app/models/github_issue.rb#L8-L14) make it easy for someone new to your project to quickly scan your issues and get started.

Finally, use your documentation to make people feel welcome at every step of the way.

You will never interact with most people who land on your project. There may be contributions you didn't receive because somebody felt intimidated or didn't know where to get started. Even a few kind words can keep someone from leaving your project in frustration.

For example, here's how [Rubinius](https://github.com/rubinius/rubinius/) starts [its contributing guide](https://github.com/rubinius/rubinius/blob/master/.github/contributing.md):

> We want to start off by saying thank you for using Rubinius. This project is a labor of love, and we appreciate all of the users that catch bugs, make performance improvements, and help with documentation. Every contribution is meaningful, so thank you for participating. That being said, here are a few guidelines that we ask you to follow so we can successfully address your issue.

### Share ownership of your project

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/sagesharp?s=180" class="pquote-avatar" alt="avatar">
  Your leaders will have different opinions, as all healthy communities should! However, you need to take steps to ensure the loudest voice doesn't always win by tiring people out, and that less prominent and minority voices are heard.
  <p markdown="1" class="pquote-credit">
— @sagesharp, ["What makes a good community?"](https://sage.thesharps.us/2015/10/06/what-makes-a-good-community/)
  </p>
</aside>

People are excited to contribute to projects when they feel a sense of ownership. That doesn't mean you need to turn over your project's vision or accept contributions you don't want. But the more you give credit to others, the more they'll stick around.

See if you can find ways to share ownership with your community as much as possible. Here are some ideas:

* **Resist fixing easy (non-critical) bugs.** Instead, use them as opportunities to recruit new contributors, or mentor someone who'd like to contribute. It may seem unnatural at first, but your investment will pay off over time. For example, @michaeljoseph asked a contributor to submit a pull request on a [Cookiecutter](https://github.com/audreyr/cookiecutter) issue below, rather than fix it himself.

![Cookiecutter issue](/assets/images/building-community/cookiecutter_submit_pr.png)

* **Start a CONTRIBUTORS or AUTHORS file in your project** that lists everyone who's contributed to your project, like [Sinatra](https://github.com/sinatra/sinatra/blob/master/AUTHORS.md) does.

* If you've got a sizable community, **send out a newsletter or write a blog post** thanking contributors. Rust's [This Week in Rust](https://this-week-in-rust.org/) and Hoodie's [Shoutouts](http://hood.ie/blog/shoutouts-week-24.html) are two good examples.

* **Give every contributor commit access.** @felixge found that this made people [more excited to polish their patches](https://felixge.de/2013/03/11/the-pull-request-hack.html), and he even found new maintainers for projects that he hadn't worked on in awhile.

* If your project is on GitHub, **move your project from your personal account to an [Organization](https://help.github.com/articles/creating-a-new-organization-account/)** and add at least one backup admin. Organizations make it easier to work on projects with external collaborators.

The reality is that [most projects only have](https://peerj.com/preprints/1233.pdf) one or two maintainers who do most of the work. The bigger your project, and the bigger your community, the easier it is to find help.

While you may not always find someone to answer the call, putting a signal out there increases the chances that other people will pitch in. And the earlier you start, the sooner people can help.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/gr2m?s=180" class="pquote-avatar" alt="avatar">
  \[It's in your\] best interest to recruit contributors who enjoy and who are capable of doing the things that you are not. Do you enjoy coding, but not answering issues? Then identify those individuals in your community who do and let them have it.
  <p markdown="1" class="pquote-credit">
— @gr2m, ["Welcoming Communities"](http://hood.ie/blog/welcoming-communities.html)
  </p>
</aside>

## Resolving conflicts

In the early stages of your project, making major decisions is easy. When you want to do something, you just do it.

As your project becomes more popular, more people will take interest in the decisions you make. Even if you don't have a big community of contributors, if your project has a lot of users, you'll find people weighing in on decisions or raising issues of their own.

For the most part, if you've cultivated a friendly, respectful community and documented your processes openly, your community should be able to find resolution. But sometimes you run into an issue that's a bit harder to address.

### Set the bar for kindness

When your community is grappling with a difficult issue, tempers may rise. People may become angry or frustrated and take it out on one another, or on you.

Your job as a maintainer is to keep these situations from escalating. Even if you have a strong opinion on the topic, try to take the position of a moderator or facilitator, rather than jumping into the fight and pushing your views. If someone is being unkind or monopolizing the conversation, [act immediately](../building-community/#dont-tolerate-bad-actors) to keep discussions civil and productive.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/kennethreitz?s=180" class="pquote-avatar" alt="avatar">
  As a project maintainer, it's extremely important to be respectful to your contributors. They often take what you say very personally.
  <p markdown="1" class="pquote-credit">
— @kennethreitz, ["Be Cordial or Be on Your Way"](https://www.kennethreitz.org/essays/be-cordial-or-be-on-your-way)
  </p>
</aside>

Other people are looking to you for guidance. Set a good example. You can still express disappointment, unhappiness, or concern, but do so calmly.

Keeping your cool isn't easy, but demonstrating leadership improves the health of your community. The internet thanks you.

### Treat your README as a constitution

Your README is [more than just a set of instructions](../starting-a-project/#writing-a-readme). It's also a place to talk about your goals, product vision, and roadmap. If people are overly focused on debating the merit of a particular feature, it may help to revisit your README and talk about the higher vision of your project. Focusing on your README also depersonalizes the conversation, so you can have a constructive discussion.

### Focus on the journey, not the destination

Some projects use a voting process to make major decisions. While sensible at first glance, voting emphasizes getting to an "answer," rather than listening to and addressing each other's concerns.

Voting can become political, where community members feel pressured to do each other favors or vote a certain way. Not everybody votes, either, whether it's the [silent majority](https://ben.balter.com/2016/03/08/optimizing-for-power-users-and-edge-cases/#the-silent-majority-of-users) in your community, or current users who didn't know a vote was taking place.

Sometimes, voting is a necessary tiebreaker. As much as you are able, however, emphasize ["consensus seeking"](https://en.wikipedia.org/wiki/Consensus-seeking_decision-making) rather than consensus.

Under a consensus seeking process, community members discuss major concerns until they feel they have been adequately heard. When only minor concerns remain, the community moves forward. "Consensus seeking" acknowledges that a community may not be able to reach a perfect answer. Instead, it prioritizes listening and discussion.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/lee-dohm?s=180" class="pquote-avatar" alt="avatar">
  Part of the reason why a voting system doesn't exist for Atom Issues is because the Atom team isn't going to follow a voting system in all cases. Sometimes we have to choose what we feel is right even if it is unpopular. (...) What I can offer and pledge to do...is that it is my job to listen to the community.
  <p markdown="1" class="pquote-credit">
— @lee-dohm on [Atom's decisionmaking process](https://discuss.atom.io/t/prioritize-issues-feature-requests-based-on-voting-system/27642/2)
  </p>
</aside>

Even if you don't actually adopt a consensus seeking process, as a project maintainer, it's important that people know you are listening. Making other people feel heard, and committing to resolving their concerns, goes a long way to diffuse sensitive situations. Then, follow up on your words with actions.

Don't rush into a decision for the sake of having a resolution. Make sure that everybody feels heard and that all information has been made public before moving toward a resolution.

### Keep the conversation focused on action

Discussion is important, but there is a difference between productive and unproductive conversations.

Encourage discussion so long as it is actively moving towards resolution. If it's clear that conversation is languishing or going off-topic, jabs are getting personal, or people are quibbling about minor details, it's time to shut it down.

Allowing these conversations to continue is not only bad for the issue at hand, but bad for the health of your community. It sends a message that these types of conversations are permitted or even encouraged, and it can discourage people from raising or resolving future issues.

With every point made by you or by others, ask yourself, _"How does this bring us closer to a resolution?"_

If the conversation is starting to unravel, ask the group, _"Which steps should we take next?"_ to refocus the conversation.

If a conversation clearly isn't going anywhere, there are no clear actions to be taken, or the appropriate action has already been taken, close the issue and explain why you closed it.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/kfogel?s=180" class="pquote-avatar" alt="avatar">
  Guiding a thread toward usefulness without being pushy is an art. It won't work to simply admonish people to stop wasting their time, or to ask them not to post unless they have something constructive to say. (...) Instead, you have to suggest conditions for further progress: give people a route, a path to follow that leads to the results you want, yet without sounding like you're dictating conduct.
  <p markdown="1" class="pquote-credit">
— @kfogel, [_Producing OSS_](https://producingoss.com/en/producingoss.html#common-pitfalls)
  </p>
</aside>

### Pick your battles wisely

Context is important. Consider who is involved in the discussion and how they represent the rest of the community.

Is everybody in the community upset about, or even engaged with, this issue? Or is a lone troublemaker? Don't forget to consider your silent community members, not just the active voices.

If the issue does not represent the broader needs of your community, you may just need to acknowledge the concerns of a few people. If this is a recurring issue without a clear resolution, point them to previous discussions on the topic and close the thread.

### Identify a community tiebreaker

With a good attitude and clear communication, most difficult situations are resolvable. However, even in a productive conversation, there can simply be a difference in opinion on how to proceed. In these cases, identify an individual or group of people that can serve as a tiebreaker.

A tiebreaker could be the primary maintainer of the project, or it could be a small group of people who make a decision based on voting. Ideally, you've identified a tiebreaker and the associated process in a GOVERNANCE file before you ever have to use it.

Your tiebreaker should be a last resort. Divisive issues are an opportunity for your community to grow and learn. Embrace these opportunities and use a collaborative process to move to a resolution wherever possible.

## Community is the ❤️ of open source

Healthy, thriving communities fuel the thousands of hours poured into open source every week. Many contributors point to other people as the reason for working - or not working - on open source. By learning how to tap into that power constructively, you'll help someone out there have an unforgettable open source experience.
