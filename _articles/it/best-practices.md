---
lang: it
title: Buone pratiche per Maintainer
description: Come rendere la tua vita da maintainer open source più facile. Dai processi di documentazione alla valorizzazione e utilizzo della tua community.
class: best-practices
toc:
  what-does-it-mean-to-be-a-maintainer: "Cosa significa essere un maintainer?"
  documenting-your-processes: "Il processo di documentazione"
  learning-to-say-no: "Imparare a dire di no"
  leverage-your-community: "Utilizza la tua community"
  bring-in-the-robots: "Automatizza"
  its-okay-to-hit-pause: "Prenditi una pausa"
order: 5
image: /assets/images/cards/best-practices.png
related:
  - metrics
  - leadership
---

## Cosa significa essere un maintainer?

Se mantieni un progetto open source utilizzato da molte persone, potresti ritrovarti a programmare meno e a passare più tempo rispondendo a varie segnalazioni (issue).

Nelle prime fasi di un progetto, stai sperimentando con nuove idee ed effettuando decisioni basate su cosa vuoi. Mano a mano che il tuo progetto aumenta di popolarità, ti ritroverai a lavorare con maggiore frequenza con i tuoi user e contributor.

Mantenere un progetto richiede più che programmazione. Questo include compiti spesso inaspettati, ma compiti altrettanto importanti allo sviluppo di un progetto. Abbiamo raccolto alcuni modi per rendere la tua vita più facile, dai processi di documentazione alla valorizzazione e utilizzo della tua community.

## Il processo di documentazione

Prendere nota è una delle cose più importanti che puoi fare in qualità di maintainer.

La documentazione non solo può chiarirti le idee, ma aiuta altre persone a capire di cosa hai bisogno o che aspettative hai, prima ancora che te lo chiedano.

Prendere nota può aiutarti a dire di no quando qualcosa non è adatto al tuo progetto. Inoltre, rende la partecipazione e l'eventuale contributo da altre persone più semplice. Non sai mai chi potrebbe leggere o utilizzare il tuo progetto.

Anche se non usi paragrafi interi, annotare dei punti è molto meglio che non scrivere nulla.

Ricordati di mantenere la tua documentazione aggiornata. Se non sei sempre in grado di farlo, elimina la documentazione obsoleta o indicala come tale, in modo che chi vuole contribuire sappia quali aggiornamenti sono benvenuti.

### Sviluppa una visione di progetto

Incomincia con l'annotare gli obiettivi del tuo progetto. Aggiungili al tuo README, o crea un file separato chiamandolo VISION. Se ci sono altri artefatti che potrebbero esserti d'aiuto, come una roadmap di progetto, rendi pubblici anche quelli.

Avere una visione documentata in modo chiaro aiuta a tenerti focalizzato e ad evitare "scope creep" a seguito di contributi altrui.

Per esempio, @lord ha constatato che una visione di progetto lo abbia aiutato a stabilire quali richieste meritassero il suo tempo. Come nuovo maintainer, aveva rimpianto non essersi attenuto allo scope del progetto quando ebbe ricevuto la sua prima feature request per [Slate](https://github.com/lord/slate).

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/lord?s=180" class="pquote-avatar" alt="avatar">
  Ho fatto un pasticcio. Non mi sono impegnato abbastanza nello sviluppo di una soluzione completa. Invece di una mezza-soluzione, avrei dovuto dire "Al momento non ho tempo per questo, ma l'aggiungerò alla mia wishlist di progetto lungo termine."

  _I fumbled it. I didn't put in the effort to come up with a complete solution. Instead of an half-assed solution, I wish I had said "I don't have time for this right now, but I'll add it to the long term nice-to-have list."_

  <p markdown="1" class="pquote-credit">
— @lord, ["Suggerimenti per open source maintainers"](https://lord.io/blog/2014/oss-tips/)
  </p>
</aside>

### Comunica le tue aspettative

Scrivere e stabilire delle regole può essere stressante. Talvolta potresti sentirti come se stessi controllando eccessivamente il comportamento altrui o trovando modi per eliminare il divertimento.

Buone regole scritte e applicate ragionevolmente, tuttavia, responsabilizzano i maintainers. Prevengono che tu venga coinvolto nel fare ciò che non vuoi.

La maggior parte delle persone che si imbatteranno nel tuo progetto non conoscono nulla di te o delle tue circostanze. Potrebbero supporre che tu venga pagato per il tuo lavoro, specialmente se è qualcosa che utilizzano spesso e su cui dipendono. É probabile che ad un certo punto tu abbia investito molto tempo nel tuo progetto, ma che ora ti ritrovi occupato con un nuovo lavoro o familiare.

Tutto ciò è perfettamente accettabile! Assicurati semplicemente di renderlo noto ad altri.

Se mantieni il tuo progetto part-time o in maniera completamente volontaria, sii onesto rispetto a quanto tempo hai a disposizione. Questo non equivale a quanto tempo credi che abbia bisogno il progetto, o quanto tempo pensi che altre persone vogliano tu investa!

Ecco alcune regole che conviene annotare:

* Come un contributo viene revisionato e accettato (_Richiedono test? Una issue template?_)
* Il tipo di contributi che accetti (_Vuoi aiuto solo in una parte specifica del tuo codice?_)
* Quand'è opportuno un follow up (_per esempio, "In media, un maintainer sarà in grado di rispondere nell'arco di 7 giorni. Passati i sette giorni senza risposta, sentiti libero di mandare un ping al thread."_)
* Quanto tempo investi nel progetto (_per esempio, "A questo progetto dedichiamo circa 5 ore a settimana"_)

[Jekyll](https://github.com/jekyll/jekyll/tree/master/docs), [CocoaPods](https://github.com/CocoaPods/CocoaPods/wiki/Communication-&-Design-Rules), e [Homebrew](https://github.com/Homebrew/brew/blob/bbed7246bc5c5b7acb8c1d427d10b43e090dfd39/docs/Maintainers-Avoiding-Burnout.md) sono diversi esempi di progetti con solide regole di base per maintainer e contributori.

### Mantieni la comunicazione pubblica

Non dimenticare di documentare anche le interazioni. Mantieni ogni comunicazione rilevante al tuo progetto pubblica il più possibile. Se qualcuno cerca di contattarti privatamente per discutere una feature request o richiesta di supporto, dirigili gentilmente verso un canale di comunicazione pubblica, come una mailing list o issue tracker.

Se incontri altri maintainer, o prendete una decisione importante in privato, documentate queste conversazioni in pubblico, anche se si tratta solo di pubblicare le tue note.

In questo modo, qualsiasi nuovo arrivato avrà accesso alle stesse informazioni in possesso di chi ha già fatto parte della community per tre anni.

## Imparare a dire di no

Hai annotato tutto. Idealmente, tutti avranno già letto la documentazione che hai fornito, ma sarà molto spesso il caso che dovrai ricordargli che queste informazioni esistono.

Avere annotato tutto aiuta a rendere meno personali le situazioni in cui dovrai applicare le regole.

Dire di no, non è divertente, ma _"Il tuo contributo non soddisfa i criteri di questo progetto"_ è meno personale di _"Non mi piace il tuo contributo"_.

Dire di no è applicabile a molte situazioni che riscontrerai in qualità di maintainer: feature requests che non si allineano allo scope di progetto, qualcuno che deraglia una discussione, fare lavoro inutile per altri.

### Mantieni la conversazione cordiale

Una delle circostanze più importanti in cui dovrai dire di no sarà in merito alla coda di issue e pull request. Come project maintainer, è inevitabile che riceverai suggerimenti (suggestions) che non vorrai accettare.

Sarà che il contributo cambi lo scope di progetto e non corrisponda con la tua vision. O che l'idea sia buona, ma l'implementazione lasci desiderare.

A prescindere dalla ragione, è possible gestire con tatto quei contributi che non soddisfano gli standard del tuo progetto.

Se ricevi un contributo che non vuoi accettare, la tua prima reazione potrebbe essere quella di ignorare il contributo o far finta di non averlo visto. Così facendo potresti ferire i sentimenti del contributore e demotivare altri potenziali contributori nella tua community.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/krausefx?s=180" class="pquote-avatar" alt="avatar">

  La chiave per gestire il supporto per progetti open source su larga scala è di mantenere le segnalazioni in circolo. Cercare di evitare che le segnalazioni vadano in stallo. Se sei uno sviluppatore iOS sai quanto può essere frustrante inviare radars. Potresti ricevere feedback dopo 2 anni dicendoti di riprovare con la versione iOS più recente.

  _The key to handle support for large-scale open source projects is to keep issues moving. Try to avoid having issues stall. If you're an iOS developer you know how frustrating it can be to submit radars. You might hear back 2 years later, and are told to try again with the latest version of iOS._
  <p markdown="1" class="pquote-credit">
— @KrauseFx, ["Scaling open source communities"](https://krausefx.com/blog/scaling-open-source-communities)
  </p>
</aside>

Non lasciare un contributo indesiderato aperto perchè ti senti in colpa o vuoi essere buono. Con il passare del tempo, le tue segnalazioni e PRs renderanno lavorare sul tuo progetto molto più stressante e spaventoso.

É meglio chiudere immediatamente quei contributi che non vuoi accettare. Se il tuo progetto soffre già a causa di numerosi arretrati, @steveklabnik ha dei suggerimenti su come [gestire issues efficientemente](https://words.steveklabnik.com/how-to-be-an-open-source-gardener).

Inoltre, ignorare contributi manda un messaggio negativo alla tua community. Contribuire ad un progetto può essere spaventoso, specialmente se è la prima volta. Anche se non accetti il loro contributo, riconosci la persona e ringraziala per il loro interesse. É un gran complimento!

Se non vuoi accettare un contributo:

* **Ringraziali** per il loro contributo
* **Spiega perchè non è adatto** allo scope del progetto, e offri suggerimenti chiari su come migliorare, se possibile. Sii cortese, ma fermo.
* **Offri link a documentazione pertinente**, se ne hai. Se noti richieste ripetitive per cose che non vuoi accettare, aggiungile alla tua documentazione per evitare di doverti ripetere.
* **Chiudi la richiesta**

Non dovresti aver bisogno di più di 1-2 frasi per rispondere. Per esempio, quando uno user di [celery](https://github.com/celery/celery/) segnalò un errore relativo a Windows, @berkerpeksag [rispose così](https://github.com/celery/celery/issues/3383):

![Celery screenshot](/assets/images/best-practices/celery.png)

Se anche solo il pensiero di dire di no ti terrorizza, non sei solo. @jessfraz infatti [la mise così](https://blog.jessfraz.com/post/the-art-of-closing/):

> Ho parlato con maintainer di diversi progetti open source, Mesos, Kubernetes, Chromium, e tutti sono d'accordo che uno dei compiti più difficili di maintainer è quello di dire di "No" a patch che non vuoi.

> I've talked to maintainers from several different open source projects, Mesos, Kubernetes, Chromium, and they all agree one of the hardest parts of being a maintainer is saying "No" to patches you don't want.

Non sentirti in colpa di non voler accettare un contributo. La prima regola open source, [secondo](https://twitter.com/solomonstre/status/715277134978113536) @shykes: _"Un no è temporaneo, un sì eterno."_ Mentre entrare in empatia con l'entusiasmo di un'altra persona è una buona cosa, rifiutare un contributo non è sinonimo di rifiuto della persona contribuente.

Alla fine, se un contributo non è sufficiente, non sei sotto alcun obbligo di accettarlo. Sii cortese e reattivo quando qualcuno contribuisce al tuo progetto, ma accetta solo cambi che veramente credi possano migliorare il tuo progetto. Più fai pratica a dire di no, più facile diventa. É una promessa!

### Sii proattivo

Affinchè tu possa ridurre la quantità di contributi indesiderati in primo luogo, spiega il processo di invio e accettazione del tuo progetto in una "contributing guide".

Se stai ricevendo molti contributi di bassa qualità, richiedi che i contributori facciano un po' di lavoro in anticipo, per esempio:

* Compila una issue o un template/check-list PR
* Apri una issue prima di inviare una PR

Se non seguono le regole, chiudi la issue immediatamente e fai riferimento alla tua documentazione.

Mentre questo approccio può sembrare scortese, rimanere proattivi beneficia entrambe le parti. Riduce la possibilità che qualcuno impieghi molte ore lavorando su una pull request che non verrà accettata. Inoltre, rende il carico di lavoro più facile da gestire.

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
— @danielbachhuber, ["My condolences, you're now the maintainer of a popular open source project"](https://danielbachhuber.com/2016/06/26/my-condolences-youre-now-the-maintainer-of-a-popular-open-source-project/)
  </p>
</aside>

Sometimes, it can be hard to take a break from open source work when it feels like everybody needs you. People may even try to make you feel guilty for stepping away.

Do your best to find support for your users and community while you're away from a project. If you can't find the support you need, take a break anyway. Be sure to communicate when you're not available, so people aren't confused by your lack of responsiveness.

Taking breaks applies to more than just vacations, too. If you don't want to do open source work on weekends, or during work hours, communicate those expectations to others, so they know not to bother you.

## Take care of yourself first!

Maintaining a popular project requires different skills than the earlier stages of growth, but it's no less rewarding. As a maintainer, you'll practice leadership and personal skills on a level that few people get to experience. While it's not always easy to manage, setting clear boundaries and only taking on what you're comfortable with will help you stay happy, refreshed, and productive.
