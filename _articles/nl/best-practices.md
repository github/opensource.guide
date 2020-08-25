---
lang: nl
title: Tips voor een open source-beheerder
description: Uw leven gemakkelijker maken als open source-beheerder, van het documenteren van processen tot het benutten van uw gemeenschap.
class: best-practices
toc:
  what-does-it-mean-to-be-a-maintainer: "Wat betekent het om een open source-onderhouder te zijn?"
  documenting-your-processes: "Documenteren van uw processen"
  learning-to-say-no: "Nee leren zeggen"
  leverage-your-community: "Maak gebruik van uw community"
  bring-in-the-robots: "Breng de robots"
  its-okay-to-hit-pause: "Het is oké om op pauze te drukken"
order: 5
image: /assets/images/cards/best-practices.png
related:
  - metrics
  - leadership
---

## Wat betekent het om een open source-onderhouder te zijn?

Als je een open source-project onderhoudt dat veel mensen gebruiken, heb je misschien gemerkt dat je minder codeert en meer op problemen reageert.

In de vroege stadia van een project experimenteer je met nieuwe ideeën en neem je beslissingen op basis van wat je wilt. Naarmate uw project populairder wordt, zult u merken dat u meer met uw gebruikers en bijdragers samenwerkt.

Voor het onderhouden van een project is meer nodig dan alleen code. Deze taken zijn vaak onverwacht, maar net zo belangrijk voor een groeiend project. We hebben een aantal manieren verzameld om uw leven gemakkelijker te maken, van het documenteren van processen tot het benutten van uw gemeenschap.

## Documenteren van uw processen

Dingen documenteren is een van de belangrijkste dingen die u als onderhouder kunt doen.

Documentatie verduidelijkt niet alleen uw eigen denken, maar het helpt andere mensen ook te begrijpen wat u nodig heeft of verwacht, nog voordat ze erom vragen.

Door dingen op te schrijven, wordt het gemakkelijker om nee te zeggen als iets niet binnen uw bereik past. Het maakt het ook gemakkelijker voor mensen om in te springen en te helpen. Je weet nooit wie je project leest of gebruikt.

Zelfs als u geen volledige alinea's gebruikt, is het beter om opsommingstekens op te schrijven dan helemaal niet te documenteren.

Denk eraan om uw documentatie up-to-date te houden. Als u dit niet altijd kunt doen, verwijdert u uw verouderde documentatie of geeft u aan dat deze verouderd is, zodat bijdragers weten dat updates welkom zijn.

### Schrijf de visie van uw project op

Begin met het opschrijven van de doelen van uw project. Voeg ze toe aan je README, of maak een apart bestand met de naam VISION. Als er andere artefacten zijn die kunnen helpen, zoals een projectroadmap, maak die dan ook openbaar.

Door een duidelijke, gedocumenteerde visie te hebben, blijft u gefocust en kunt u voorkomen dat u "scoop" van andermans bijdragen krijgt.

@Lord ontdekte bijvoorbeeld dat het hebben van een projectvisie hem hielp uitzoeken aan welke verzoeken hij tijd moest besteden. Als nieuwe open source-onderhouder had hij er spijt van dat hij zich niet aan de reikwijdte van zijn project had gehouden toen hij zijn eerste functieverzoek kreeg voor [Slate](https://github.com/lord/slate).

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/lord?s=180" class="pquote-avatar" alt="avatar">
Ik heb het gerommeld. Ik heb niet de moeite genomen om met een complete oplossing te komen. In plaats van een halfslachtige oplossing, zou ik willen dat ik had gezegd: "Ik heb hier momenteel geen tijd voor, maar ik zal het toevoegen aan de lange termijn lijst met leuke dingen."
  
_I fumbled it. I didn't put in the effort to come up with a complete solution. Instead of an half-assed solution, I wish I had said "I don't have time for this right now, but I'll add it to the long term nice-to-have list."_

  <p markdown="1" class="pquote-credit">
— @lord, ["Tips for new open source maintainers"](https://lord.io/blog/2014/oss-tips/)
  </p>
</aside>

### Communiceer uw verwachtingen

Regels kunnen zenuwslopend zijn om op te schrijven. Soms heb je misschien het gevoel dat je het gedrag van andere mensen controleert of al het plezier wegneemt.

Eerlijk geschreven en gehandhaafd, maar goede regels geven open soruce-onderhouders meer mogelijkheden. Ze voorkomen dat u wordt meegesleurd in dingen die u niet wilt doen.
 
De meeste mensen die uw project tegenkomen, weten niets over u of uw omstandigheden. Ze gaan er misschien van uit dat je wordt betaald om eraan te werken, vooral als het iets is dat ze regelmatig gebruiken en waarvan ze afhankelijk zijn. Misschien heb je op een gegeven moment veel tijd in je project gestoken, maar ben je nu bezig met een nieuwe baan of familielid.

Dit is allemaal in orde! Zorg ervoor dat andere mensen ervan op de hoogte zijn.

Als het onderhouden van uw project parttime of puur vrijwillig is, wees dan eerlijk over hoeveel tijd u hebt. Dit is niet hetzelfde als hoeveel tijd u denkt dat het project nodig heeft, of hoeveel tijd anderen willen dat u eraan besteedt.

Hier zijn een paar regels die het waard zijn om op te schrijven:

* Hoe een bijdrage wordt beoordeeld en geaccepteerd (_Hebben ze tests nodig? Een issue-sjabloon?_)
* De soorten bijdragen die je accepteert (_Wil je alleen hulp bij een bepaald deel van je code?_)
* Wanneer het gepast is om op te volgen (_bijvoorbeeld: "U kunt binnen 7 dagen een reactie van een onderhouder verwachten. Als u tegen die tijd niets heeft gehoord, kunt u de discussie pingen."_)
* Hoeveel tijd u aan het project besteedt (_bijvoorbeeld: "We besteden slechts ongeveer 5 uur per week aan dit project"_)

[Jekyll](https://github.com/jekyll/jekyll/tree/master/docs), [CocoaPods](https://github.com/CocoaPods/CocoaPods/wiki/Communication-&-Design-Rules), en [Homebrew](https://github.com/Homebrew/brew/blob/bbed7246bc5c5b7acb8c1d427d10b43e090dfd39/docs/Maintainers-Avoiding-Burnout.md) zijn verschillende voorbeelden van projecten met basisregels voor beheerders en bijdragers.

### Houd de communicatie openbaar

Vergeet ook niet uw interacties te documenteren. Houd de communicatie over uw project waar mogelijk openbaar. Als iemand privé contact met u opneemt om een functieverzoek of ondersteuningsbehoefte te bespreken, verwijs hem dan beleefd naar een openbaar communicatiekanaal, zoals een mailinglijst of issue tracker.

Als u andere beheerders ontmoet, of een belangrijke beslissing neemt in privé, documenteer deze gesprekken dan in het openbaar, zelfs als u alleen maar uw aantekeningen plaatst.

Op die manier heeft iedereen die lid wordt van uw community toegang tot dezelfde informatie als iemand die er al jaren is.
 
## Nee leren zeggen

Je hebt dingen opgeschreven. Idealiter zou iedereen uw documentatie lezen, maar in werkelijkheid moet u anderen eraan herinneren dat deze kennis bestaat.

Door alles op te schrijven, kunt u situaties onpersoonlijk maken waarin u uw regels wel moet handhaven.

Nee zeggen is niet leuk, maar _"Uw bijdrage voldoet niet aan de criteria van dit project"_ voelt minder persoonlijk dan _"Ik vind uw bijdrage niet leuk"_.

Nee zeggen is van toepassing op veel situaties die je als open source-onderhouder tegenkomt: functieverzoeken die niet binnen het bereik passen, iemand die een discussie ontspoort, onnodig werk voor anderen doet.

### Houd het gesprek vriendelijk

Een van de belangrijkste plaatsen waar u kunt oefenen om nee te zeggen, is uw issue en pull request lijst met verzoeken. Als projectbeheerder ontvangt u onvermijdelijk suggesties die u niet wilt accepteren.

Misschien verandert de bijdrage de reikwijdte van uw project of past deze niet bij uw visie. Misschien is het idee goed, maar de implementatie is slecht.

Ongeacht de reden is het mogelijk om tactvol om te gaan met bijdragen die niet voldoen aan de normen van uw project.

Als u een bijdrage ontvangt die u niet wilt accepteren, is uw eerste reactie misschien dat u deze negeert of doet alsof u deze niet hebt gezien. Dit kan de gevoelens van de ander schaden en zelfs andere potentiële bijdragers in uw gemeenschap demotiveren.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/krausefx?s=180" class="pquote-avatar" alt="avatar">
  De sleutel tot het afhandelen van ondersteuning voor grootschalige open source-projecten is om problemen in beweging te houden. Probeer te voorkomen dat problemen vastlopen. Als je een iOS-ontwikkelaar bent, weet je hoe frustrerend het kan zijn om radars in te dienen. Mogelijk hoort u 2 jaar later terug en wordt u verteld het opnieuw te proberen met de nieuwste versie van iOS.
  
  _The key to handle support for large-scale open source projects is to keep issues moving. Try to avoid having issues stall. If you're an iOS developer you know how frustrating it can be to submit radars. You might hear back 2 years later, and are told to try again with the latest version of iOS._
  <p markdown="1" class="pquote-credit">
— @KrauseFx, ["Scaling open source communities"](https://krausefx.com/blog/scaling-open-source-communities)
  </p>
</aside>

Laat geen ongewenste bijdrage openstaan omdat je een schuldgevoel hebt of aardig wilt zijn. Na verloop van tijd zullen uw onbeantwoorde problemen en PR's het werken aan uw project veel stressvoller en intimiderend maken.

Het is beter om de bijdragen waarvan u weet dat u ze niet wilt accepteren, onmiddellijk af te sluiten. Als uw project al een grote achterstand heeft, heeft @steveklabnik suggesties voor [hoe u problemen efficiënt kunt sorteren](https://words.steveklabnik.com/how-to-be-an-open-source-gardener).

Ten tweede is het negeren van bijdragen een negatief signaal naar uw gemeenschap. Bijdragen aan een project kan intimiderend zijn, vooral als het iemands eerste keer is. Zelfs als u hun bijdrage niet accepteert, erken de persoon erachter en bedank hem voor zijn interesse. Het is een groot compliment!
 
Als u een bijdrage niet wil accepteren:

* **Bedank ze** voor hun bijdrage
* **Leg uit waarom het niet past** in de scope van het project, en bied duidelijke suggesties voor verbetering, als je kunt. Wees aardig, maar standvastig.
* **Link naar relevante documentatie**, als u die heeft. Als u herhaalde verzoeken opmerkt voor dingen die u niet wilt accepteren, voegt u deze toe aan uw documentatie om te voorkomen dat u zichzelf herhaalt.
* **Sluit het verzoek**

Je hebt niet meer dan 1-2 zinnen nodig om te reageren. Als voorbeeld, als een gebruiker van [celery](https://github.com/celery/celery/) een Windows-gerelateerde fout meldde, @berkerpeksag [reageerde met](https://github.com/celery/celery/issues/3383):

![Celery screenshot](/assets/images/best-practices/celery.png)

Als de gedachte om nee te zeggen je bang maakt, ben je niet de enige. zoals @jessfraz [het omschrijft](https://blog.jessfraz.com/post/the-art-of-closing/):

> Ik heb met onderhouders van verschillende open source-projecten gesproken, Mesos, Kubernetes, Chromium, en ze zijn het er allemaal over eens dat een van de moeilijkste aspecten van het zijn van een onderhouder is om "Nee" te zeggen tegen patches die je niet wilt.

Voel je niet schuldig over het niet willen accepteren van iemands bijdrage. De eerste regel van open source, [volgens](https://twitter.com/solomonstre/status/715277134978113536) @shykes: _"Nee is tijdelijk, ja is voor altijd."_ Hoewel empathie met het enthousiasme van een ander een goede zaak is, is het afwijzen van een bijdrage niet hetzelfde als het afwijzen van de persoon erachter.

Als een bijdrage uiteindelijk niet goed genoeg is, bent u niet verplicht deze te accepteren. Wees vriendelijk en responsief wanneer mensen bijdragen aan uw project, maar accepteer alleen veranderingen waarvan u echt denkt dat ze uw project beter zullen maken. Hoe vaker je oefent om nee te zeggen, hoe gemakkelijker het wordt. Beloofd.

### Wees proactief

Om het aantal ongewenste bijdragen in de eerste plaats te verminderen, legt u het proces van uw project voor het indienen en accepteren van bijdragen uit in uw handleiding voor bijdragen.

Als u te veel bijdragen van lage kwaliteit ontvangt, moet u van tevoren eisen dat bijdragers wat werk doen, bijvoorbeeld:

* Vul een probleem of PR-sjabloon/checklist in
* Open een issue voordat je een PR opent

Als ze uw regels niet volgen, sluit u het probleem onmiddellijk af en verwijst u naar uw documentatie.

Hoewel deze aanpak in het begin misschien onaardig aanvoelt, is proactief zijn eigenlijk goed voor beide partijen. Het verkleint de kans dat iemand veel verspilde uren werk in een pull-verzoek stopt dat u niet zult accepteren. En het maakt uw werklast gemakkelijker te beheren.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/mikemcquaid?s=180" class="pquote-avatar" alt="avatar">
  Leg ze idealiter en in een CONTRIBUTING.md-bestand uit hoe ze in de toekomst een betere indicatie kunnen krijgen van wat wel of niet geaccepteerd zou worden voordat ze met het werk beginnen.
  
  _Ideally, explain to them and in a CONTRIBUTING.md file how they can get a better indication in the future on what would or would not be accepted before they begin the work._
  <p markdown="1" class="pquote-credit">
— @MikeMcQuaid, ["Kindly Closing Pull Requests"](https://github.com/blog/2124-kindly-closing-pull-requests)
  </p>
</aside>

Soms, als u nee zegt, kan uw potentiële bijdrager van streek raken of uw beslissing bekritiseren. Als hun gedrag vijandig wordt, [neem deze maatregelen om het positief te houden](https://github.com/jonschlinkert/maintainers-guide-to-staying-positive#action-items) of verwijder ze zelfs uit uw gemeenschap, als ze niet bereid zijn constructief samen te werken.

### Omarm mentorschap

Misschien dient iemand in uw gemeenschap regelmatig bijdragen in die niet voldoen aan de normen van uw project. Het kan voor beide partijen frustrerend zijn om herhaaldelijk afwijzingen te doorstaan.

Als je ziet dat iemand enthousiast is over je project, maar een beetje gepolijst moet worden, wees dan geduldig. Leg in elke situatie duidelijk uit waarom hun bijdragen niet voldoen aan de verwachtingen van het project. Wijs ze op een gemakkelijkere of minder dubbelzinnige taak, zoals een probleem met de aanduiding _"good first issue"_ om ze te laten wennen. Als u tijd heeft, overweeg dan om hen te begeleiden door middel van hun eerste bijdrage, of zoek iemand anders in uw gemeenschap die misschien bereid is om hen te begeleiden.

## Maak gebruik van uw community

U hoeft niet alles zelf te doen. De gemeenschap van uw project bestaat niet voor niets! Zelfs als u nog geen actieve bijdragersgemeenschap heeft, kunt u, als u veel gebruikers heeft, ze aan het werk zetten.

### Deel de werklast

Als je op zoek bent naar anderen om bij te praten, begin dan met rond te vragen.

Een manier om nieuwe bijdragers te werven, is door expliciet [label problemen die voor beginners eenvoudig genoeg zijn om aan te pakken](https://help.github.com/en/articles/helping-new-contributors-find-your-project-with-labels). GitHub zal deze problemen vervolgens op verschillende plaatsen op het platform aan de oppervlakte brengen, waardoor hun zichtbaarheid wordt vergroot.

Als je ziet dat nieuwe bijdragers herhaaldelijk bijdragen leveren, erken dan hun werk door meer verantwoordelijkheid te bieden. Documenteer hoe anderen kunnen uitgroeien tot leiderschapsrollen als ze dat willen.

Anderen aanmoedigen om [aandeelhouderschap van het project](../building-community/#share-ownership-of-your-project) te nemen, kan je werklast verlagen, zoals @lmccart ondekte op haar project, [p5.js](https://github.com/processing/p5.js).

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/lmccart?s=180" class="pquote-avatar" alt="avatar">
  Ik had gezegd: "Ja, iedereen kan erbij betrokken zijn, je hoeft niet veel codeerkennis te hebben [...]." Er waren mensen die zich hadden aangemeld om [naar een evenement] te komen en toen vroeg ik me echt af: is dit waar, wat ik heb gezegd? Er zullen 40 mensen komen opdagen, en het is niet alsof ik bij elk van hen kan zitten... Maar mensen kwamen samen, en het werkte gewoon. Zodra een persoon het kreeg, konden ze het hun buurman leren.
  
  <p markdown="1" class="pquote-credit">
—  @lmccart, ["Wat betekent "open source"? P5.js Edition"](https://medium.com/@kenjagan/what-does-open-source-even-mean-p5-js-edition-98c02d354b39)
  </p>
</aside>

Als u afstand moet nemen van uw project, hetzij op pauze, hetzij permanent, is het geen schande om iemand anders te vragen om het voor u over te nemen.

Als andere mensen enthousiast zijn over de richting, geef ze dan toegang of draag de controle formeel over aan iemand anders. Als iemand uw project heeft geforked en het actief elders onderhoudt, overweeg dan om te linken naar de fork van uw oorspronkelijke project. Het is geweldig dat zoveel mensen willen dat uw project voortleeft!

@progrium [merkte dat](https://web.archive.org/web/20151204215958/https://progrium.com/blog/2015/12/04/leadership-guilt-and-pull-requests/) het documentern van zijn visie voor het project, [Dokku](https://github.com/dokku/dokku), hielp die doelen voortleven, zelfs nadat hij het project had verlaten:

> Ik schreef een wikipagina die beschreef wat ik wilde en waarom ik het wilde. Om de een of andere reden kwam het als een verrassing voor mij dat de beheerders het project in die richting begonnen te bewegen! Is het precies gebeurd zoals ik het zou doen? Niet altijd. Maar het bracht het project nog steeds dichter bij wat ik had opgeschreven.

### Laat anderen de oplossingen bouwen die ze nodig hebben

Als een potentiële bijdrager een andere mening heeft over wat uw project zou moeten doen, wilt u hem misschien voorzichtig aanmoedigen om aan zijn eigen fork te werken.

Een project forceren hoeft geen slechte zaak te zijn. Projecten kunnen kopiëren en wijzigen is een van de beste dingen van open source. Door uw gemeenschapsleden aan te moedigen om aan hun eigen fork te werken, kan dit de creatieve uitlaatklep zijn die ze nodig hebben, zonder in strijd te zijn met de visie van uw project.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/geerlingguy?s=180" class="pquote-avatar" alt="avatar">
  Ik speel in op de use case van 80%. Als je een van de eenhoorns bent, fork mijn werk dan alsjeblieft. Ik zal niet beledigd worden! Mijn openbare projecten zijn bijna altijd bedoeld om de meest voorkomende problemen op te lossen; Ik probeer het gemakkelijk te maken om dieper te gaan door mijn werk te forceren of uit te breiden.
  
  _I cater to the 80% use case. If you are one of the unicorns, please fork my work. I won't get offended! My public projects are almost always meant to solve the most common problems; I try to make it easy to go deeper by either forking my work or extending it._
  <p markdown="1" class="pquote-credit">
— @geerlingguy, ["Why I Close PRs"](https://www.jeffgeerling.com/blog/2016/why-i-close-prs-oss-project-maintainer-notes)
  </p>
</aside>

The same applies to a user who really wants a solution that you simply don't have the bandwidth to build. Offering APIs and customization hooks can help others meet their own needs, without having to modify the source directly. @orta [found that](https://artsy.github.io/blog/2016/07/03/handling-big-projects/) encouraging plugins for CocoaPods led to "some of the most interesting ideas":

> It's almost inevitable that once a project becomes big, maintainers have to become a lot more conservative about how they introduce new code. You become good at saying "no", but a lot of people have legitimate needs. So, instead you end up converting your tool into a platform.

## Breng de robots

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

## Het is oké om op pauze te drukken

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

Soms kan het moeilijk zijn om een pauze in te lassen van open source-werk als het voelt alsof iedereen je nodig heeft. Mensen kunnen zelfs proberen je een schuldgevoel te geven omdat je weggaat.

Doe uw best om ondersteuning voor uw gebruikers en gemeenschap te vinden terwijl u niet aan een project zit. Als je de ondersteuning die je nodig hebt niet kunt vinden, neem dan toch een pauze. Zorg ervoor dat u communiceert wanneer u niet beschikbaar bent, zodat mensen niet in de war raken door uw gebrek aan reactievermogen.

Pauzes nemen geldt ook voor meer dan alleen vakanties. Als je in het weekend of tijdens werkuren geen open source-werk wilt doen, communiceer die verwachtingen dan aan anderen, zodat ze weten dat ze je niet lastig vallen.

## Take care of yourself first!

Het onderhouden van een populair project vereist andere vaardigheden dan de eerdere groeifasen, maar het is niet minder lonend. Als onderhouder oefen je leiderschap en persoonlijke vaardigheden op een niveau dat maar weinig mensen ervaren. Hoewel het niet altijd gemakkelijk te beheren is, helpt het stellen van duidelijke grenzen en alleen aan te nemen waar je een prettig gevoel bij hebt, je gelukkig door voelt of wat je verfrist om productief te blijven.
