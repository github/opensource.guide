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

Het is beter om de bijdragen waarvan u weet dat u ze niet wilt accepteren, onmiddellijk af te sluiten. Als uw project al een grote achterstand heeft, heeft @steveklabnik suggesties voor [hoe u problemen efficiënt kunt sorteren (Engels)](https://words.steveklabnik.com/how-to-be-an-open-source-gardener).

Ten tweede is het negeren van bijdragen een negatief signaal naar uw gemeenschap. Bijdragen aan een project kan intimiderend zijn, vooral als het iemands eerste keer is. Zelfs als u hun bijdrage niet accepteert, erken de persoon erachter en bedank hem voor zijn interesse. Het is een groot compliment!
 
Als u een bijdrage niet wil accepteren:

* **Bedank ze** voor hun bijdrage
* **Leg uit waarom het niet past** in de scope van het project, en bied duidelijke suggesties voor verbetering, als je kunt. Wees aardig, maar standvastig.
* **Link naar relevante documentatie**, als u die heeft. Als u herhaalde verzoeken opmerkt voor dingen die u niet wilt accepteren, voegt u deze toe aan uw documentatie om te voorkomen dat u zichzelf herhaalt.
* **Sluit het verzoek**

Je hebt niet meer dan 1-2 zinnen nodig om te reageren. Als voorbeeld, als een gebruiker van [celery](https://github.com/celery/celery/) een Windows-gerelateerde fout meldde, @berkerpeksag [reageerde met (Engels)](https://github.com/celery/celery/issues/3383):

![Celery screenshot](/assets/images/best-practices/celery.png)

Als de gedachte om nee te zeggen je bang maakt, ben je niet de enige. zoals @jessfraz [het omschrijft](https://blog.jessfraz.com/post/the-art-of-closing/):

> Ik heb met onderhouders van verschillende open source-projecten gesproken, Mesos, Kubernetes, Chromium, en ze zijn het er allemaal over eens dat een van de moeilijkste aspecten van het zijn van een onderhouder is om "Nee" te zeggen tegen patches die je niet wilt.

Don't feel guilty about not wanting to accept someone's contribution. The first rule of open source, [according to](https://twitter.com/solomonstre/status/715277134978113536) @shykes: _"No is temporary, yes is forever."_ While empathizing with another person's enthusiasm is a good thing, rejecting a contribution is not the same as rejecting the person behind it.

Ultimately, if a contribution isn't good enough, you're under no obligation to accept it. Be kind and responsive when people contribute to your project, but only accept changes that you truly believe will make your project better. The more often you practice saying no, the easier it becomes. Promise.

### Be proactive

To reduce the volume of unwanted contributions in the first place, explain your project's process for submitting and accepting contributions in your contributing guide.

If you're receiving too many low-quality contributions, require that contributors do a bit of work beforehand, for example:

* Fill out a issue or PR template/checklist
* Open an issue before submitting a PR

If they don't follow your rules, close the issue immediately and point to your documentation.

While this approach may feel unkind at first, being proactive is actually good for both parties. It reduces the chance that someone will put in many wasted hours of work into a pull request that you aren't going to accept. And it makes your workload easier to manage.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/mikemcquaid?s=180" class="pquote-avatar" alt="avatar">
  Ideally, explain to them and in a CONTRIBUTING.md file how they can get a better indication in the future on what would or would not be accepted before they begin the work.
  <p markdown="1" class="pquote-credit">
— @MikeMcQuaid, ["Kindly Closing Pull Requests"](https://github.com/blog/2124-kindly-closing-pull-requests)
  </p>
</aside>

Sometimes, when you say no, your potential contributor may get upset or criticize your decision. If their behavior becomes hostile, [take steps to defuse the situation](https://github.com/jonschlinkert/maintainers-guide-to-staying-positive#action-items) or even remove them from your community, if they're not willing to collaborate constructively.

### Embrace mentorship

Maybe someone in your community regularly submits contributions that don't meet your project's standards. It can be frustrating for both parties to repeatedly go through rejections.

If you see that someone is enthusiastic about your project, but needs a bit of polish, be patient. Explain clearly in each situation why their contributions don't meet the expectations of the project. Try pointing them to an easier or less ambiguous task, like an issue marked _"good first issue,"_ to get their feet wet. If you have time, consider mentoring them through their first contribution, or find someone else in your community who might be willing to mentor them.

## Maak gebruik van uw community

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

@progrium [found that](https://web.archive.org/web/20151204215958/https://progrium.com/blog/2015/12/04/leadership-guilt-and-pull-requests/) documenting the vision for his project, [Dokku](https://github.com/dokku/dokku), helped those goals live on even after he stepped away from the project:

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
