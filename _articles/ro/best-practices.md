---
lang: ro
title: Cele mai bune practici pentru întreținători
description: Ușurarea vieții tale în calitate de întreținător open source, de la documentarea proceselor la mobilizarea comunității
class: best-practices
toc:
  what-does-it-mean-to-be-a-maintainer: "Ce înseamnă să fii un întreținător?"
  documenting-your-processes: "Documentarea proceselor tale"
  learning-to-say-no: "Învățând să spui nu"
  leverage-your-community: "Mobilizarea comunității tale"
  bring-in-the-robots: "Cheamă roboții"
  its-okay-to-hit-pause: "Este OK să apeși pauză"
order: 5
image: /assets/images/cards/best-practices.png
related:
  - metrics
  - leadership
---

## Ce înseamnă să fii un întreținător?

Dacă întreții un proiect cu sursă deschisă pe care mulți oameni îl folosesc, poate ai observat că programezi mai puțin și răspunzi la probleme mai mult.

In primele etape ale unui proiect, experimentezi cu idei noi și decizi bazat pe ce vrei tu. Pe măsură ce proiectul crește în popularitate, te vei afla lucrând cu utilizatorii și contributorii tăi mai mult.

Întreținerea unui proiect necesită mai mult decât cod. Aceste sarcini sunt deseori neașteptate, dar ele sunt exact la fel de importante pentru un proiect în creștere. Am adunat câteva căi pentru a-ți ușura viața, de la documentarea proceselor la mobilizarea comunității tale.

## Documentarea proceselor tale

Notarea lucrurilor este unul dintre cele mai importante lucruri pe care le poți face în calitate de întreținător.

Documentația nu doar clarifică propria ta gândire, ci și ajută alți oameni să înțeleagă de ce ai nevoie sau ce aștepți, chiar înainte ca ei să întrebe.

Notând lucruri face mai ușor să spui nu când ceva nu se încadrează în domeniul tău. De asemenea face mai ușor pentru oameni să pășească înăuntru și să ajute. Nu știi niciodată cine ar putea citi sau folosi proiectul tău.

Chiar dacă nu folosești paragrafe complete, notarea bulinelor este mai bună decât să nu scrii nimic.

Ține minte să-ți păstrezi documentația actualizată. Dacă nu ești capabil să faci asta mereu, șterge documentația ta expirată sau indică faptul că este expirată astfel încât contributorii să știe că actualizările sunt binevenite.

### Notează viziunea proiectului tău

Începe prin a scrie scopurile proiectului tău. Adaugă-le la README-ul tău, sau creează un fișier separat numit VISION. Dacă există alte artefacte care ar putea ajuta, cum ar fi o foaie de parcurs a proiectului, fă-le publice și pe acestea.

A avea o viziune clară, documentată te ține concentrat și te ajută să eviți „deriva obiectivelor” din cauza contribuțiilor altora.

De exemplu, @lord a descoperit că având o viziune a proiectului l-a ajutat să-și dea seama pe care cereri să-și petreacă timpul. În calitate de nou întreținător, el a regretat că nu s-a lipit de scopul proiectului lui când a primit prima lui cerere de facilitate pentru [Slate](https://github.com/lord/slate).

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/lord?s=180" class="pquote-avatar" alt="avatar">
  <p>
    Am fumat-o. Nu am acordat efortul pentru a veni cu o soluție completă. În schimbul unei soluții neadecvate, îmi doresc să fi spus „Nu am timp pentru aceasta chiar acum, dar o să o adaug la lista pe termen lung de lucruri drăguțe de făcut.”
  </p>
  <p>
    <em>
      I fumbled it. I didn't put in the effort to come up with a complete solution. Instead of an half-assed solution, I wish I had said "I don't have time for this right now, but I'll add it to the long term nice-to-have list."
    </em>
  </p>
  <p markdown="1" class="pquote-credit">
— @lord, ["Tips for new open source maintainers"](https://lord.io/blog/2014/oss-tips/)
  </p>
</aside>

### Comunică-ți așteptările

Regulile pot fi enervante când le scrii. Câteodată te-ai putea simți ca și cum faci politică pentru comportamentul altor oameni sau distrugi toată distracția.

Scrise și impuse corect, totuși, regulile bune împuternicesc întreținătorii. Ele te previn din a fi târât în a face lucruri pe care nu vrei să le faci.

Cei mai mulți oameni care ajung la proiectul tău nu știu nimic despre tine sau despre circumstanțele tale. Ei pot presupune că ești plătit să lucrezi pe el, în special dacă este ceva pe care ei îl folosesc în mod obișnuit și de care depind. Poate într-un punct tu depui mult timp în proiectul tău, dar acum ești ocupat cu un nou loc de muncă sau membru de familie.

Toate acestea sunt perfect OK! Doar asigură-te că ceilalți știu despre acestea.

Dacă întreținerea proiectului tău este part-time sau pur voluntară, fii sincer în legătură cu cât de mult timp ai. Acesta nu este același cu cât timp crezi tu că proiectul necesită, sau cât timp alții vor să cheltui tu.

Iată câteva reguli care merită notate:

* Cum o contribuție este analizată și acceptată (_Au nevoie de teste? Un șablon pentru probleme?_)
* Tipurile de contribuții pe care le vei accepta (_Vrei ajutor doar la o anumită parte a codului tău?_)
* Când este potrivit să urmezi (_de exemplu, „Puteți aștepta un răspuns de la un întreținător în 7 zile. Dacă nu ați auzit nimic până atunci, simțiți-vă liberi să bâzâiți firul de discuție.”_)
* Cât de mult timp cheltui pe proiect (_de exemplu, „Cheltuim doar aproximativ 5 ore pe săptămână pe acest proiect”_)

[Jekyll](https://github.com/jekyll/jekyll/tree/master/docs), [CocoaPods](https://github.com/CocoaPods/CocoaPods/wiki/Communication-&-Design-Rules), și [Homebrew](https://github.com/Homebrew/brew/blob/bbed7246bc5c5b7acb8c1d427d10b43e090dfd39/docs/Maintainers-Avoiding-Burnout.md) sunt câteva exemple de proiecte cu reguli de bază pentru întreținători și contributori.

### Păstrează comunicarea publică

Nu uita să documentezi interacțiunile tale, de asemenea. Oriunde poți, păstrează comunicarea despre proiectul tău publică. Dacă cineva încearcă să te contacteze în privat să discutați despre o cerere de facilitate sau o nevoie de asistență, direcționează-l politicos către un canal de comunicare public, cum ar fi o listă de email-uri sau un urmăritor de probleme.

Dacă te întâlnești cu alți întreținători, sau faci o decizie majoră în privat, documentează aceste conversații în public, chiar dacă înseamnă doar postarea notițelor tale.

În acest mod, oricine se alătură comunității tale va avea acces la aceleași informații ca cineva care a fost acolo de ani de zile.

## Învățând să spui nu

Ai notat lucruri. În mod normal, toată lumea ți-ar citi documentația, dar în realitate, va treui să reamintești celorlalți că aceste cunoștințe există.

Având totul scris, totuși, ajută la depersonalizarea situațiilor când trebuie să-ți impui regulile.

A spune nu nu este distractiv, dar _„Contribuția ta nu se potrivește cu criteriile acestui proiect”_ se simte mai puțin personal decât _„Nu-mi place contribuția ta”_.

A spune nu se aplică la multe situații peste care vei da în calitate de întreținător: cereri de facilități care nu se încadrează în domeniu, cineva care deraiază o discuție, făcând muncă nefolositoare pentru alții.

### Păstrează conversația prietenoasă

Unul dintre cele mai importante locuri unde vei practica spunerea de nu este asupra cozii tale de probleme și cereri de pull. În calitate de întreținător de proiect, vei primi inevitabil sugestii pe care nu dorești să le accepți.

Poate contribuția schimbă domeniul proiectului tău sau nu se potrivește cu viziunea ta. Poate ideea este bună, dar implementarea este slabă.

Indiferent de motiv, este posibil să gestionați cu mult tact contribuțiile care nu se ridică la standardele proiectului tău.

Dacă primești o contribuție pe care nu vrei să o accepți, prima ta reacție ar putea fi să o ignori sau să pretinzi că nu ai văzut-o. Făcând astfel ar putea răni sentimentele celeilalte persoane și chiar să demotiveze alți potențiali contributori din comunitatea ta.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/krausefx?s=180" class="pquote-avatar" alt="avatar">
  <p>
    Cheia pentru a gestiona asistența pentru proiecte cu sursă deschisă la scară mare este să ții problemele în mișcare. Încearcă să eviți a avea probleme în stagnare. Dacă ești un dezvoltator iOS știi cât de frustrant poate fi să trimiți radare. Ai putea primi răspuns 2 ani mai târziu, și ți se spune să încerci din nou cu ultima versiune iOS.
  </p>
  <p>
    <em>
      The key to handle support for large-scale open source projects is to keep issues moving. Try to avoid having issues stall. If you're an iOS developer you know how frustrating it can be to submit radars. You might hear back 2 years later, and are told to try again with the latest version of iOS.
    </em>
  </p>
  <p markdown="1" class="pquote-credit">
— @KrauseFx, ["Scaling open source communities"](https://krausefx.com/blog/scaling-open-source-communities)
  </p>
</aside>

Nu lăsa o contribuție nedorită deschisă pentru că te simți vinovat sau dorești să fii drăguț. În timp, problemele la care nu s-a răspuns și PR-urile vor face lucrul pe proiectul tău să se simtă cu foarte mult mai stresant și mai intimidant.

Este mai bine să închizi imediat contribuțiile pe care știi că nu vrei să le accepți. Dacă proiectul tău suferă deja de restanțe mari, @steveklabnik are sugestii pentru [cum să triezi problemele eficient](https://words.steveklabnik.com/how-to-be-an-open-source-gardener).

În al doilea rând, ignorarea contribuțiilor trimite un semnal negativ către comunitatea ta. A contribui la un proiect poate fi intimidant, în special dacă este prima dată a cuiva. Chiar dacă nu accepți contribuția ei, consideră persoana din spatele ei și mulțumește-i pentru interesul ei. Este un mare compliment!

Dacă nu dorești să accepți o contribuție:

* **Mulțumește-i** pentru contribuția ei
* **Explică de ce nu se încadrează** în domeniul proiectului, și oferă sugestii clare de îmbunătățire, dacă poți. Fii bun, dar ferm.
* **Leagă către documentația relevantă**, dacă o ai. Dacă observi cereri repetate de lucruri pe care nu vrei să le accepți, adaugă-le în documentația ta pentru a evita să te repeți.
* **Închide cererea**

Nu ar trebui să ai nevoie de mai mult de 1-2 enunțuri pentru a răspunde. De exemplu, când un utilizator al [celery](https://github.com/celery/celery/) a raportat o eroare legată de Windows, @berkerpeksag [a răspuns cu](https://github.com/celery/celery/issues/3383):

![captură de ecran Celery](/assets/images/best-practices/celery.png)

Dacă gândul de a spune „nu” te îngrozește, nu ești singur. După cum @jessfraz [a spus](https://blog.jessfraz.com/post/the-art-of-closing/):

> Am discutat cu întreținători din câteva proiecte diferite cu sursă deschisă, Mesos, Kubernetes, Chromium, și ei toți cad de acord că una dintre cele mai grele părți de a fi un întreținător este să spui „Nu” la patch-uri pe care nu le vrei.
> 
> I've talked to maintainers from several different open source projects, Mesos, Kubernetes, Chromium, and they all agree one of the hardest parts of being a maintainer is saying "No" to patches you don't want.

Nu te simți vinovat în legătură cu a nu vrea să accepți contribuția cuiva. Prima regulă a open source, [după](https://twitter.com/solomonstre/status/715277134978113536) @shykes: _"Nu este temporar, da este pentru totdeauna.”_ În timp ce a empatiza cu entuziasmul altei persoane este un lucru bun, a respinge o contribuție nu este același lucru cu a respinge persoana din spatele ei.

În cele din urmă, dacă o contribuție nu este destul de bună, nu ai nicio obligație să o accepți. Fii amabil și sensibil când oameni contribuie la proiectul tău, dar acceptă doar schimbări despre care chiar crezi că vor face proiectul tău mai bun. Cu cât mai des practici a spune nu, cu atât devine mai ușor. Promit.

### Fii proactiv

Pentru a reduce în primul rând volumul de contribuții nedorite, explică procesul proiectului tău pentru trimiterea și acceptarea contribuțiilor în ghidul tău de contribuire.

Dacă tu primești prea multe contribuții de calitate slabă, cere contributorilor să facă puțină muncă înainte, de exemplu:

* Completează un șablon/o listă de verificare la o problemă sau un PR
* Deschide o problemă înainte de a trimite un PR

Dacă ei nu îți urmează regulile, închide problema imediat și fă trimitere către documentația ta.

În timp ce această abordare se poate simți necuviincioasă la început, fiind proactiv este de fapt bine pentru ambele părți. Aceasta reduce șansele ca cineva să pună multe ore pierdute de muncă într-o cerere de pull pe care nu o vei accepta. Și îți face volumul de muncă mai ușor de gestionat.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/mikemcquaid?s=180" class="pquote-avatar" alt="avatar">
  <p>
    În mod ideal, explică-le direct și într-un fișier CONTRIBUTING.md cum pot obține în viitor o indicație mai bună despre ce ar fi sau nu ar fi acceptat înainte ca ei să înceapă munca.
  </p>
  <p>
    <em>
      Ideally, explain to them and in a CONTRIBUTING.md file how they can get a better indication in the future on what would or would not be accepted before they begin the work.
    </em>
  </p>
  <p markdown="1" class="pquote-credit">
— @MikeMcQuaid, ["Kindly Closing Pull Requests"](https://github.com/blog/2124-kindly-closing-pull-requests)
  </p>
</aside>

Uneori, când spui nu, contributorul tău potențial ar putea să se supere sau să-ți critice decizia. Dacă comportamentul lui devine ostil, [ia măsuri să dezamorsezi situația](https://github.com/jonschlinkert/maintainers-guide-to-staying-positive#action-items) sau chiar să-l înlături din comunitatea ta, dacă nu dorește să colaboreze constructiv.

### Îmbrățișează mentoratul

Poate cineva din comunitatea ta trimite în mod regulat contribuții care nu respectă standardele proiectului tău. Poate fi frustrant pentru ambele părți să treacă în mod repetat prin respingeri.

Dacă vezi că cineva este entuziast în legătură cu proiectul tău, dar are nevoie de un pic de finisare, fii răbdător. Explică în mod clar în fiecare situație de ce contribuția lui nu respectă așteptările proiectului. Încearcă să-l trimiți la o sarcină mai ușoară sau mai puțin ambiguă, cum ar fi o problemă marcată _„good first issue,”_ pentru a-l obișnui cu situații noi. Dacă ai timp, consideră să-l mentorezi prin prima lor contribuție, sau găsește pe altcineva din comunitatea ta care ar putea fi doritor să-l mentoreze.

## Mobilizarea comunității tale

Nu trebuie să faci totul de unul singur. Comunitatea proiectului tău există cu un motiv! Chiar dacă nu ai încă o comunitate activă de contributori, dacă ai mulți utilizatori, pune-i la muncă.

### Împarte volumul de muncă

Dacă ești în căutarea altora să pășească înăuntru, începe prin a întreba prin jur.

Când vezi contributori noi făcând contribuții repetate, recunoaște munca lor oferind mai multă responsabilitate. Documentează cum alții pot crește în roluri de conducere dacă doresc.

Încurajându-i pe alții să [împartă proprietatea proiectului](../building-community/#share-ownership-of-your-project) poate reduce foarte mult propriul tău volum de muncă, după cum @lmccart a descoperit pe proiectul ei, [p5.js](https://github.com/processing/p5.js).

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/lmccart?s=180" class="pquote-avatar" alt="avatar">
  <p>
    Spuneam „Da, oricine poate fi implicat, nu trebuie să ai multă expertiză cu programarea [...].” Am avut oameni semnând să vină [la un eveniment] și atunci a fost când mă întrebam cu adevărat: este aceasta adevărat, ceea ce spuneam? Vor fi aproape 40 de oameni care vin, și nu este ca și cum aș putea sta cu fiecare dintre ei...Dar oamenii au venit împreună, și chiar a funcționat cumva. De îndată ce o persoana a reușit, ea și-a putut învăța aproapele.
  </p>
  <p>
    <em>
      I’d been saying, "Yeah, anyone can be involved, you don’t have to have a lot of coding expertise [...]." We had people sign up to come [to an event] and that’s when I was really wondering: is this true, what I’ve been saying? There are gonna be 40 people who show up, and it’s not like I can sit with each of them...But people came together, and it just sort of worked. As soon as one person got it, they could teach their neighbor.
    </em>
  </p>
  <p markdown="1" class="pquote-credit">
—  @lmccart, ["What Does "Open Source" Even Mean? p5.js Edition"](https://medium.com/@kenjagan/what-does-open-source-even-mean-p5-js-edition-98c02d354b39)
  </p>
</aside>

Dacă trebuie să renunți la proiectul tău, fie ca pauză sau permanent, nu este nicio rușine în a cere altcuiva să-l preia pentru tine.

Dacă alți oameni sunt entuziaști în legătură cu direcția lui, dă-le permisiunea de a face commit sau predă controlul în mod formal altcuiva. Dacă cineva a bifurcat proiectul tău și îl menține activ altundeva, consideră legarea către copie din proiectul tău original. Este minunat că atât de mulți oameni vor ca proiectul tău să trăiască!

@progrium [a găsit că](https://progrium.com/blog/2015/12/04/leadership-guilt-and-pull-requests/) documentarea viziunii pentru proiectul său, [Dokku](https://github.com/dokku/dokku), a ajutat aceste scopuri să trăiască mai departe chiar și după ce el a ieșit din proiect:

> Am scris o pagină de wiki descriind ce îmi doream și de ce îmi doream acele lucruri. Din anumite motive a venit ca o surpriză că întreținătorii au început să miște proiectul în acea direcție! S-a întâmplat exact cum aș fi făcut-o eu? Nu întotdeauna. Dar totuși a adus proiectul mai aproape de ceea ce scrisesem.
> 
> I wrote a wiki page describing what I wanted and why I wanted it. For some reason it came as a surprise to me that the maintainers started moving the project in that direction! Did it happen exactly how I'd do it? Not always. But it still brought the project closer to what I wrote down.

### Lasă-i pe ceilalți să construiască soluțiile de care au nevoie

Dacă un contributor potențial are o părere diferită despre ce ar trebui să facă proiectul tău, poate ai vrea să-i încurajezi cu blândețe să lucreze pe propria lor copie.

Copierea proiectului nu trebuie să fie un lucru rău. Fiind capabil să copiezi și să modifici proiectele este unul dintre cele mai bune lucruri despre open source. Încurajând membrii comunității tale să lucreze pe propria lor copie poate furniza ieșirea creativă de care ei au nevoie, fără să intre în conflict cu viziunea proiectului tău.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/geerlingguy?s=180" class="pquote-avatar" alt="avatar">
  I cater to the 80% use case. If you are one of the unicorns, please fork my work. I won't get offended! My public projects are almost always meant to solve the most common problems; I try to make it easy to go deeper by either forking my work or extending it.
  <p markdown="1" class="pquote-credit">
— @geerlingguy, ["Why I Close PRs"](https://www.jeffgeerling.com/blog/2016/why-i-close-prs-oss-project-maintainer-notes)
  </p>
</aside>

The same applies to a user who really wants a solution that you simply don't have the bandwidth to build. Offering APIs and customization hooks can help others meet their own needs, without having to modify the source directly. @orta [found that](https://artsy.github.io/blog/2016/07/03/handling-big-projects/) encouraging plugins for CocoaPods led to "some of the most interesting ideas":

> It's almost inevitable that once a project becomes big, maintainers have to become a lot more conservative about how they introduce new code. You become good at saying "no", but a lot of people have legitimate needs. So, instead you end up converting your tool into a platform.

## Cheamă roboții

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

## Este OK să apeși pauză

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

## Ai grijă de tine mai întâi!

Maintaining a popular project requires different skills than the earlier stages of growth, but it's no less rewarding. As a maintainer, you'll practice leadership and personal skills on a level that few people get to experience. While it's not always easy to manage, setting clear boundaries and only taking on what you're comfortable with will help you stay happy, refreshed, and productive.
