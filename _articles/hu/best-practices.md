---
lang: hu
title: Bevált gyakorlatok karbantartók részére
description: Nyílt forráskódú karbantartóként tedd az életed könnyebbé a folyamatok dokumentálásától kezdve a közösség erejének a kiaknázásáig.
class: best-practices
order: 5
image: /assets/images/cards/best-practices.png
related:
  - metrics
  - leadership
---

## Mit jelent karbantartónak lenni?

Ha olyan nyílt forráskódú projektet tartasz fenn, amelyet sok ember használ, akkor valószínűleg észrevetted, hogy kevesebbet kódolsz, és többet válaszolsz a problémákra.

A projekt korai szakaszában új ötletekkel kísérletezel és alapvető döntéseket hozol az alapján, hogy mit szeretnél. Ahogy a projekted népszerűsége növekszik, azon veszed észre magad, hogy egyre többet dolgozol együtt a felhasználókkal és a közreműködőkkel.

Egy projektet fenntartani többet jelent, mint csak kódolni. Ezek a feladatok gyakran váratlanok, de ugyanolyan fontosak egy fejlődő projektben. Összegyűjtöttünk néhány módszert az életünk megkönnyítésére, a folyamatok dokumentálásától kezdve a közösség erejének a kiaknázásáig.

## A folyamatok dokumentálása

A dolgok leírása az egyik legfontosabb dolog, amelyet karbantartóként megtehetsz.

A dokumentáció nem csak a saját gondolkodásod letisztulását segíti, hanem elősegíti, hogy más is megértse a szándékodat anélkül, hogy kérdezni kellene.

A dolgok leírása könnyebbé teszi azt, hogy nemet tudj mondani olyan dolgokra, amelyek nem illeszkednek a projekt hatókörébe. Ezenkívül megkönnyíti az embereknek a belépését és segítését. Sohasem tudhatod, hogy ki olvassa vagy használja a projektet.

Még ha nem is fejted ki a teljes mondanivalód, akkor is jobb legalább felsoroláspontokban röviden összeszedni azt, mintha nem írnál semmit.

Ne felejtsd el naprakészen tartani a dokumentációt. Ha nem vagy képes ezt mindig megtenni, töröld az elavult dokumentációt, vagy jelezd azt, hogy elavult, így a közreműködők tudják, hogy szívesen várod a frissítéseket ezekre.

### Írd le a projekt vízióját

Kezd azzal, hogy leírod a projekt célját. Írd le a README-ben, vagy hozz létre egy különálló VISION fájlt. Ha van bármi más ami segít, mint például egy projekt roadmap, akkor tedd elérhetővé azt is.

A tiszta, jól dokumentált elképzelés segít fókuszálni és elkerülni azt, hogy más hozzájárulók felesleges vagy oda nem illő dolgokkat járuljanak hozzá.

Például @lord észrevette, hogy a projekt vízió segített neki rájönni arra, hogy melyik kéréssel töltsön el időt. Új karbantartóként sajnálta, hogy nem ragaszkodott a projektjének hatóköréhez, amikor megkapta az első, funkcióra irányuló kérést a [Slate-hez](https://github.com/lord/slate).

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/lord?s=180" class="pquote-avatar" alt="avatar">
  TODO: Ódzkodtam tőle. Nem törekedtem arra, hogy mindenre megoldás szülessen. Egy fél megoldás helyett inkább azt mondtam volna, hogy: "Erre most nincs elég időm, de hozzá fogom adni a hosszú távú jó-lenne-majd listához."
  <p markdown="1" class="pquote-credit">
— @lord, ["Tippek nyílt forrású projektek karbantartóinak"](https://lord.io/blog/2014/oss-tips/)
  </p>
</aside>

### Kommunikáld az elvárásaid

A szabályok leírása idegesítő lehet. Időnként úgy érzed, mintha más emberek viselkedését szabályoznád, vagy mintha kiölnél minden szórakoztató dolgot.

Ugyanakkor megfelelően leírva és jól végrehajtva, a jó szabályok támogatják a karbantartókat. Megakadályozzák, hogy olyan dolgokba menj bele, amelyekbe nem akarsz.

A legtöbb ember, aki a projekttel találkozik, semmit sem tud rólad vagy a körülményeidről. Feltételezhetik, hogy fizetetést kapsz a munkádért, különösen, ha rendszeresen használják, és függnek a projektől. Lehet, hogy egy ideig sok időt töltesz a projekttel, de az is lehet, hogy most egy új munkával, vagy épp a családdal foglalkozol.

Mindez teljesen rendben van! Csak legyél biztos abban, hogy mások is tudnak erről.

Ha a projekt fenntartása részmunkaidős vagy tisztán önkéntes, akkor legyél őszinte abban, hogy mennyi időd van rá. Ez nem egyezik meg azzal, hogy szerinted mennyi időt igényelne a projekt, vagy azzal, hogy mennyi időt várnak el mások tőled.

Néhány szabály, amelyeket érdemes leírni:

* Hogyan vizsgálod meg és fogadod el a hozzájárulást (_Meg vannak követelve a tesztek? Van az issue-khoz sablon?_)
* A hozzájárulások típusai, amelyeket elfogadsz (_Csak egy bizonyos részéhez fogadsz el hozzájárulást a kódnak?_)
* Mikor helyénvaló ismét figyelmeztetni (_például: "7 napon belül várhatsz választ a karbantartótól. Ha ez alatt mégsincs visszajelzés, nyugodtan pingeld meg a szálat."_)
* Mennyi időt fogsz a projektre költeni (_például: "Mi csak kb. 5 órát foglalkozunk a hetente ezzel a projekttel."_)

[Jekyll](https://github.com/jekyll/jekyll/tree/master/docs), [CocoaPods](https://github.com/CocoaPods/CocoaPods/wiki/Communication-&-Design-Rules), és a [Homebrew](https://github.com/Homebrew/brew/blob/bbed7246bc5c5b7acb8c1d427d10b43e090dfd39/docs/Maintainers-Avoiding-Burnout.md) mellett számos példa van a karbantartók és közreműködők alapszabályairól rendelkező projektekre.

### Legyen a kommunikáció nyilvános

Ne felejtsd el dokumentálni az interakciókat is. Ahol csak lehet, tartsd nyilvánosan a projekttel kapcsolatos kommunikációt. Ha valaki megpróbál privát kapcsolaton keresztül kommunikálni egy funkciókérést vagy támogatási igényt akkor, udvariasan irányítsd egy nyilvános kommunikációs csatornára, például egy levelezőlistára vagy a hibakövető rendszerre.

Ha találkozol más karbantartókkal, vagy ha zártkörű döntés születik, akkor is nyilvánosan dokumentáld ezeket a beszélgetéseket, még akkor is, ha csak jegyzeteket írsz.

Így bárki, aki csatlakozik a közösséghez, ugyanazt az információt éri el, mint az, aki már évek óta tagja a közösségnek.

## Meg kell tanulni nemet mondani

Leírtad a dolgokat. Ideális esetben mindenki elolvassa a dokumentációt, de a valóságban ez más, mert figyelmeztetned kell majd másokat arra, hogy ez a tudás létezik.

Ha mindent leírsz, az segít megszüntetni azokat a helyzeteket, amikor szükség van a szabályok érvényesítésére.

Nemet mondani nem kellemes, de a _"Hozzájárulásod nem felel meg a projekt kritériumoknak"_ kevésbé személyeskedő, mint a _"Nem tetszik ez a hozzájárulásod"_.

TODO: Sok helyzetben kell majd nemet mondanod, amelyekkel karbantartóként találkozol: olyan funkciókérések, amelyek nem felelnek meg az alkalmazási körnek, mégis valaki levezeti a beszélgetést, és ezzel felesleges munkát generál másoknak.

### Legyen barátságos a beszélgetés

A legfontosabb helyek, ahol gyakorolni fogod a nemet mondást, az az issue-id és a beolvasztási kérelmek. Projekt karbantartóként elkerülhetetlen lesz az a helyzet, amikor olyan javaslatokat kapsz, amelyeket nem akarsz elfogadni.

Lehet, hogy a hozzájárulás megváltoztatja a projekt célját, vagy nem felel meg a jövőképének. Talán az ötlet jó, de a megvalósítás rossz.

Az indoktól függetlenül lehetséges tapintatosan kezelni azokat a hozzájárulásokat, amelyek nem felelnek meg a projekt normáinak.

Ha olyan hozzájárulást kapsz, amelyet nem akarsz elfogadni, akkor az első reakciód az lehet, hogy figyelmen kívül hagyod, vagy úgy teszel, mintha nem látnád. Ha így teszel, akkor a másik személy érzéseit megsértheted, vagy akár más lehetséges hozzájárulók kedvét is elveszed a közösségedben.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/krausefx?s=180" class="pquote-avatar" alt="avatar">
  A nagyszabású, nyílt forráskódú projektek támogatásának kezelésének a kulcsa az issue-k mozgásának folyamatos fenntartása. El kell kerülni, hogy az issue-k sokáig álljanak egyhelyben. Ha iOS fejlesztő vagy, akkor tudod, milyen bosszantó lehet egy iOS bug bejelentése. Lehet, hogy 2 évvel később hallasz csak róla, és azt mondják majd, hogy próbáld újra az iOS legújabb verziójával.
  <p markdown="1" class="pquote-credit">
— @KrauseFx, ["Nyílt forráskódú közösségek méretezése"](https://krausefx.com/blog/scaling-open-source-communities)
  </p>
</aside>

Ne hagyj nyitva nem kívánt hozzájárulást, csak azért, mert bűnösnek érznéd magad, ha nem lennél kedves. Az idő múlásával a megválaszolatlan kérdések és beolvasztási kérelmek sokkal stresszesebbé és ijesztőbbé teszik a projekttel történő munkát.

Sokkal jobb, ha azonnal lezárod a hozzájárulást, ha nem akarod elfogadni. Ha a projekted már eleve nagy feladatlistával rendelkezik, akkor itt van @steveklabnik javaslata arra, hogy [hogyan priorizáld hatékonyan az issue-kat](https://words.steveklabnik.com/how-to-be-an-open-source-gardener).

Ugyanakkor a hozzájárulások figyelmen kívül hagyása negatív jelet küldhet a közösségnek. A projekthez való hozzájárulás félelmetes is lehet, különösen, ha valaki először csinálja. Még ha nem is fogadod el az általa benyújtott hozzájárulást, becsüld meg azt a személyt aki benyújtotta, és mondj köszönetet az érdeklődése iránt, ez nagy dícséret!

Ha nem akarsz elfogadni egy hozzájárulást:

* **Köszönd meg nekik** a hozzájárulást
* **Magyarázd el, miért nem illik bele a projekt kritériumokba,** vagy ha lehetséges, javasolj egyértelmű dolgokat a javításra. Legyél határozott, de kedves.
* **Linkeld be a releváns dokumentációkat,** ha vannak. Ha arra leszel figyelmes, hogy rendszeresen kapsz olyan kéréseket, amelyeket nem akarsz elfogadni, akkor add hozzá a dokumentációhoz, ezzel elkerülheted, hogy mindig magadat ismételd.
* **Zárd le a kérést**

Nem kell több a válaszba mint 1-2 mondat. Például a [celery](https://github.com/celery/celery/) felhasználója jelentett egy Windows-hoz kapcsolódó hibát,  erre @berkerpeksag [így válaszolt](https://github.com/celery/celery/issues/3383):

![Celery screenshot](/assets/images/best-practices/celery.png)

Ha megijeszt a nemet mondás, ne aggódj, nem vagy egyedül, lásd @jessfraz [írását erről](https://blog.jessfraz.com/post/the-art-of-closing/):

> Számos, különböző nyílt forráskódú projektekből beszéltem karbantartókkal, Mesos, Kubernetes, Chromium, és abban mindannyian egyetértettek, hogy a legkeményebb rész a "Nem"-et mondás arra a javításra, amelyet nem akarsz.

Ne érezd magad bűnösnek azért, mert nem fogadsz el egy hozzájárulást. Az első szabálya a nyílt forráskódnak @shykes [szerint](https://twitter.com/solomonstre/status/715277134978113536): _"A nem az átmeneti, az igen az örökös."_ Bár jó érzés a másik ember lelkesedését látni, a hozzájárulás elutasítása nem jelenti a mögötte álló személy elutasítását.

Végül, ha a hozzájárulás nem elég jó, akkor nem vagy köteles elfogadni azt. Légy kedves és közreműködő, ha az emberek hozzájárulnak a projekthez, de csak azokat a változásokat fogadd el, amelyektől valóban azt hiszed, hogy a projekt jobbá válik. Minél gyakrabban gyakorolod a nemet mondást, annál könnyebbé válik.

### Legyél proaktív

A nemkívánatos hozzájárulások mennyiségének csökkentése érdekében mindenekelőtt mutasd be a hozzájárulási útmutatóban a projekt hozzájárulások benyújtásának és elfogadásának folyamatát.

Ha túl sok gyenge színvonalú hozzájárulást kapsz, kérd meg a közreműködőket, hogy végezzenek el előtte egy kis munkát, például:

* Töltsék ki a hibához, vagy beolvasztási kérelemhez rendelt űrlapot, vagy ellenőrző listát
* Nyissanak egy issue-t, mielőtt beolvasztási kérelmet adnak fel

Ha nem követik a szabályokat, akkor azonnal zárd le a jelzést és hivatkozd meg a dokumentációt.

Noha ez a megközelítés kezdetben kellemetlennek tűnik, a proaktív fellépés mindkét fél számára jó. Csökkenti annak az esélyét, hogy valaki sok elpazarolt órát fordítson egy beolvasztási kérelembe, amelyet nem fogadsz el. Emellett a munkaterhelés könnyebben kezelhetővé válik.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/mikemcquaid?s=180" class="pquote-avatar" alt="avatar">
  Ideális az, ha elmagyarázod egy CONTRIBUTING.md fájlban, hogy miként kaphatnak jobb tájékoztatást a jövőben arról, hogy mit fogadnál el vagy mit nem fogadnál el, még mielőtt a munkát elkezdenék.
  <p markdown="1" class="pquote-credit">
— @MikeMcQuaid, ["Kedvesen lezárt beolvasztási kérelmek"](https://github.com/blog/2124-kindly-closing-pull-requests)
  </p>
</aside>

Időnként, amikor nemet mondsz, a potenciális közreműködőt felháboríthatja a döntés vagy kritizálhatja azt. Ha a viselkedése ellenségessé válik, akkor [tegyél lépéseket a helyzet enyhítésére](https://github.com/jonschlinkert/maintainers-guide-to-staying-positive#action-items) vagy akár el is távolíthatod a közösségből a személyt, ha meg sem próbál konstruktívan együttműködni.

### Erősítsd a mentorálást

Lehet, hogy valaki a közösségedben rendszeresen nyújt be olyan hozzájárulásokat, amelyek nem felelnek meg a projekt normáinak. Mindkét fél számára frusztráló lehet az ismételt visszautasítás.

Ha azt látod, hogy valaki lelkesedik a projekted iránt, de egy kis segítségre van szüksége, légy türelmes. Mindig magyarázd el világosan, hogy miért nem felelnek meg a hozzájárulások a projekt elvárásainak. Próbálj ajánlani egy könnyebb vagy kevésbé bonyolult feladatot, például egy feladatot a _"good first issue"_ jelöléssel, hogy a megtegye az első lépéseket. Ha van időd, akkor fontold meg a mentorálásukat az első hozzájárulásuk alkalmával, vagy keress meg valaki mást a közösségében, aki hajlandó mentorálni őket.

## Leverage your community

You don't have to do everything yourself. Your project's community exists for a reason! Even if you don't yet have an active contributor community, if you have a lot of users, put them to work.

### Share the workload

If you're looking for others to pitch in, start by asking around.

One way to gain new contributors is to explicitly [label issues that are simple enough for beginners to tackle](https://help.github.com/en/articles/helping-new-contributors-find-your-project-with-labels). GitHub will then surface these issues in various places on the platform, increasing their visibility.

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
* [no-response](https://github.com/probot/no-response) closes issues where the author hasn't responded to a request for more information
* [dependabot-preview](https://github.com/marketplace/dependabot-preview) checks your dependency files every day for outdated requirements and opens individual pull requests for any it finds

For bug reports and other common contributions, GitHub has [Issue Templates and Pull Request Templates](https://github.com/blog/2111-issue-and-pull-request-templates), which you can create to streamline the communication you receive. @TalAter made a [Choose Your Own Adventure guide](https://www.talater.com/open-source-templates/#/) to help you write your issue and PR templates.

To manage your email notifications, you can set up [email filters](https://github.com/blog/2203-email-updates-about-your-own-activity) to organize by priority.

If you want to get a little more advanced, style guides and linters can standardize project contributions and make them easier to review and accept.

However, if your standards are too complicated, they can increase the barriers to contribution. Make sure you're only adding enough rules to make everyone's lives easier.

If you're not sure which tools to use, look at what other popular projects do, especially those in your ecosystem. For example, what does the contribution process look like for other Node modules? Using similar tools and approaches will also make your process more familiar to your target contributors.

## It's okay to hit pause

Open source work once brought you joy. Maybe now it's starting to make you feel avoidant or guilty.

Perhaps you're feeling overwhelmed or a growing sense of dread when you think about your projects. And meanwhile, the issues and pull requests pile up.

Burnout is a real and pervasive issue in open source work, especially among maintainers. As a maintainer, your happiness is a non-negotiable requirement for the survival of any open source project.

Although it should go without saying, take a break! You shouldn't have to wait until you feel burned out to take a vacation. @brettcannon, a Python core developer, decided to take [a month-long vacation](https://snarky.ca/why-i-took-october-off-from-oss-volunteering/) after 14 years of volunteer OSS work.

Just like any other type of work, taking regular breaks will keep you refreshed, happy, and excited about your work.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/danielbachhuber?s=180" class="pquote-avatar" alt="avatar">
  In maintaining WP-CLI, I've discovered I need to make myself happy first, and set clear boundaries on my involvement. The best balance I've found is 2-5 hours per week, as a part of my normal work schedule. This keeps my involvement a passion, and from feeling too much like work. Because I prioritize the issues I'm working on, I can make regular progress on what I think is most important.
  <p markdown="1" class="pquote-credit">
— @danielbachhuber, ["My condolences, you're now the maintainer of a popular open source project"](https://runcommand.io/2016/06/26/my-condolences-youre-now-the-maintainer-of-a-popular-open-source-project/)
  </p>
</aside>

Sometimes, it can be hard to take a break from open source work when it feels like everybody needs you. People may even try to make you feel guilty for stepping away.

Do your best to find support for your users and community while you're away from a project. If you can't find the support you need, take a break anyway. Be sure to communicate when you're not available, so people aren't confused by your lack of responsiveness.

Taking breaks applies to more than just vacations, too. If you don't want to do open source work on weekends, or during work hours, communicate those expectations to others, so they know not to bother you.

## Take care of yourself first!

Maintaining a popular project requires different skills than the earlier stages of growth, but it's no less rewarding. As a maintainer, you'll practice leadership and personal skills on a level that few people get to experience. While it's not always easy to manage, setting clear boundaries and only taking on what you're comfortable with will help you stay happy, refreshed, and productive.
