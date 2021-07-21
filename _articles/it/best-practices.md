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

Se mantieni un progetto open source utilizzato da molte persone, potresti ritrovarti a programmare meno e a passare più tempo rispondendo a varie issue.

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

[Jekyll](https://github.com/jekyll/jekyll/tree/master/docs), [CocoaPods](https://github.com/CocoaPods/CocoaPods/wiki/Communication-&-Design-Rules), e [Homebrew](https://github.com/Homebrew/brew/blob/bbed7246bc5c5b7acb8c1d427d10b43e090dfd39/docs/Maintainers-Avoiding-Burnout.md) sono diversi esempi di progetti con solide regole di base per maintainer e contributors.

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

Se ricevi un contributo che non vuoi accettare, la tua prima reazione potrebbe essere quella di ignorare il contributo o far finta di non averlo visto. Così facendo potresti ferire i sentimenti del contributor e demotivare altri potenziali contributors nella tua community.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/krausefx?s=180" class="pquote-avatar" alt="avatar">

  La chiave per gestire il supporto per progetti open source su larga scala è di mantenere le issue in circolo. Cercare di evitare che le issue vadano in stallo. Se sei uno sviluppatore iOS sai quanto può essere frustrante inviare radars. Potresti ricevere feedback dopo 2 anni dicendoti di riprovare con la versione iOS più recente.

  _The key to handle support for large-scale open source projects is to keep issues moving. Try to avoid having issues stall. If you're an iOS developer you know how frustrating it can be to submit radars. You might hear back 2 years later, and are told to try again with the latest version of iOS._
  <p markdown="1" class="pquote-credit">
— @KrauseFx, ["Scaling open source communities"](https://krausefx.com/blog/scaling-open-source-communities)
  </p>
</aside>

Non lasciare un contributo indesiderato aperto perchè ti senti in colpa o vuoi essere buono. Con il passare del tempo, le tue issue e PRs renderanno lavorare sul tuo progetto molto più stressante e spaventoso.

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

Se stai ricevendo molti contributi di bassa qualità, richiedi che i contributors facciano un po' di lavoro in anticipo, per esempio:

* Compila una issue o un template/check-list PR
* Apri una issue prima di inviare una PR

Se non seguono le regole, chiudi la issue immediatamente e fai riferimento alla tua documentazione.

Mentre questo approccio può sembrare scortese, rimanere proattivi beneficia entrambe le parti. Riduce la possibilità che qualcuno impieghi molte ore lavorando su una pull request che non verrà accettata. Inoltre, rende il carico di lavoro più facile da gestire.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/mikemcquaid?s=180" class="pquote-avatar" alt="avatar">

  Idealmente, spiega in un file CONTRIBUTING.md come possono avere una migliore indicazione in futuro riguardo a cos'è accettato prima che incomincino il lavoro.  

  _Ideally, explain to them and in a CONTRIBUTING.md file how they can get a better indication in the future on what would or would not be accepted before they begin the work._
  <p markdown="1" class="pquote-credit">
— @MikeMcQuaid, ["Kindly Closing Pull Requests"](https://github.com/blog/2124-kindly-closing-pull-requests)
  </p>
</aside>

Talvolta, quando dirai di no, il tuo potenziale contributor potrebbe arrabbiarsi o criticare la tua decisione. Nel qual caso il suo comportamento diventi ostile, [agisci per allentare la tensione](https://github.com/jonschlinkert/maintainers-guide-to-staying-positive#action-items) o rimuovili dalla community, se non sono disposti a collaborare in manier costruttiva.

### Accogli possibilità di mentoring

Forse qualcuno nella tua community invia regolarmente contributi non adeguati agli standard del tuo progetto. Doverli ripetutamente rifiutare può essere frustrante per entrambe le parti.

Se vedi che qualcuno è entusiasta del tuo progetto, ma ha bisogno di un po' di rifinitura, sii paziente. Spiega a loro in modo chiaro in ogni situazione come mai i loro contributi non sono adeguati alle aspettative del progetto. Prova a dirigerli verso un compito più semplice o meno ambiguo, come una issue marcata _"good first issue"_ per far sì che si familiarizzino. Se hai tempo, considera fargli da mentore affiancandoli nel loro primo contributo, o trova qualcuno nella tua community disposto a farlo.

## Utilizza la tua community

Non devi fare tutto da solo. La tua community esiste per una ragione! Anche se non hai un contributor di progetto attivo, se hai tanti user, mettili a lavoro!

### Spartisci il carico di lavoro

Se stai cercando altri partecipanti, comincia chiedendo in giro.

Uno dei modi per ottenere contributors è di [marcare esplicitamente semplici issue adatti a neofiti come tali](https://help.github.com/en/articles/helping-new-contributors-find-your-project-with-labels). Github poi si occuperà del resto, rendendo queste issue in diversi spazi sulla piattaforma più visibili.

Quando noti ripetuti contributi da parte di nuovi contributors, riconosci il loro lavoro offrendogli maggiore responsabilità. Documenta come altri possono occupare ruoli di leadership qualora lo desiderino.

Incoraggiare che altri [condividino la proprietà del progetto](../building-community/#share-ownership-of-your-project) può notevolmente ridurre il tuo carico di lavoro, come @lmccart ha scoperto con il suo progetto, [p5.js](https://github.com/processing/p5.js).

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/lmccart?s=180" class="pquote-avatar" alt="avatar">

Ho sempre detto, "Si, chiunque può essere coinvolto, non devi avere eccessiva esperienza di programmazione [...]." Avevamo persone che si registravano per partecipare [ad un evento] e da quel momento mi stavo veramente chiedendo: è vero quello che ho sempre detto? Si presenteranno 40 persone ed è improbabile che potrò sedermi con una ad una... Ma in qualche modo le persone si unissero, e funzionò. Appena una persona aveva capito, era in grado di insegnare al proprio vicino.

  _I’d been saying, "Yeah, anyone can be involved, you don’t have to have a lot of coding expertise [...]." We had people sign up to come [to an event] and that’s when I was really wondering: is this true, what I’ve been saying? There are gonna be 40 people who show up, and it’s not like I can sit with each of them...But people came together, and it just sort of worked. As soon as one person got it, they could teach their neighbor._

  <p markdown="1" class="pquote-credit">
—  @lmccart, ["What Does "Open Source" Even Mean? p5.js Edition"](https://medium.com/@kenjagan/what-does-open-source-even-mean-p5-js-edition-98c02d354b39)
  </p>
</aside>

Se hai bisogno di staccarti dal progetto, sia per una pausa o sia permanentemente, non aver vergogna a chiedere che qualcuno assuma il tuo posto.

Se altre persone sono entusiaste della direzione del progetto, offrigli commit access o cedi formalmente il controllo a qualcun altro. Se qualcuno ha forked il tuo progetto e lo sta mantenendo attivamente da un'altra parte, considera di aggiungere un link al fork nel tuo progetto originale. É bello vedere che tanti vogliono che il tuo progetto sopravviva!

@progrium [ha riscontrato che](https://web.archive.org/web/20151204215958/https://progrium.com/blog/2015/12/04/leadership-guilt-and-pull-requests/) documentare la sua visione di progetto, [Dokku](https://github.com/dokku/dokku), ha aiutato a fare in modo che, una volta allontanatosi dal progetto, quegli obiettivi prefissati sopravvivessero:

> Ho scritto una pagina wiki descrivendo cosa volevo e perchè. Per qualche ragione fui sorpreso nel notare che i maintaner avevano cominciato a muovere il progetto in quella direzione! Fu eseguito esattamente come l'avrei fatto io? Non sempre. Ma aveva comunque contribuito a fare in modo che il progetto si avvicinasse a quello che avevo scritto.
>
> I wrote a wiki page describing what I wanted and why I wanted it. For some reason it came as a surprise to me that the maintainers started moving the project in that direction! Did it happen exactly how I'd do it? Not always. But it still brought the project closer to what I wrote down.

### Lascia che gli altri costruiscano le loro soluzioni

Se un potenziale contributor ha un'opinione diversa riguardo a cosa dovrebbe fare il tuo progetto, potresti incoraggiarli di lavorare sulla propria fork.

Creare una fork non è necessariamente una cosa negativa. L'abilità di copiare e modificare progetti è una delle migliori caratteristiche dell'open source. Incoraggiando i membri della tua community a lavorare sulla propria fork può fornirli dell'outlet creativo di cui hanno bisogno, senza creare conflitti con la tua visione di progetto.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/geerlingguy?s=180" class="pquote-avatar" alt="avatar">

  Rispondo all'80% dei casi d'uso. Se sei uno dei pochi casi unici, per favore forka il mio lavoro. Non mi offenderò! I miei progetti pubblici hanno quasi sempre l'intenzione di risolvere i problemi più comuni; tento di rendere l'approfondimento più semplice forkando il mio lavoro o estendendolo.

  _I cater to the 80% use case. If you are one of the unicorns, please fork my work. I won't get offended! My public projects are almost always meant to solve the most common problems; I try to make it easy to go deeper by either forking my work or extending it._
  <p markdown="1" class="pquote-credit">
— @geerlingguy, ["Why I Close PRs"](https://www.jeffgeerling.com/blog/2016/why-i-close-prs-oss-project-maintainer-notes)
  </p>
</aside>

Lo stesso vale per un utente che vuole ostinamente una soluzione per cui non hai le risorse necessarie. Offrire API e customization hooks può assisterli con la soddisfazione delle proprie esigenze, senza modificare il source direttamente. @orta [ha constatato che](https://artsy.github.io/blog/2016/07/03/handling-big-projects/) incentivare plugins per CocoaPods ha portato ad "alcune delle idee più interessanti":

> É quasi inevitabile che una volta che un progetto sia cresciuto, i maintainer siano costretti a diventare più prudenti rispetto a come nuovo codice viene implementato. Diventi bravo a dire di "no", ma molte persone hanno bisogni legittimi. Quindi, ti ritrovi invece a trasforma uno strumento (tool) in una piattaforma.
>
> It's almost inevitable that once a project becomes big, maintainers have to become a lot more conservative about how they introduce new code. You become good at saying "no", but a lot of people have legitimate needs. So, instead you end up converting your tool into a platform.

## Delega ai robot

Così come ci sono compiti che altre persone possono aiutarti a svolgere, ci sono altri compiti che nessun essere umano dovrebbe mai fare. I robot sono tuoi amici. Usali per rendere la tua vita da maintainer più semplice.

### Esigi test e altre verifiche per migliorare la qualità del tuo codice

Auggiungere test è uno dei modi più importanti per automatizzare il tuo progetto.

I test rendono i tuoi contributor più sicuri di non aver rotto niente. Inoltre, rendono la revisione e accettazione di un contributo più rapida. Maggiore la tua reattività, maggiore sarà la partecipazione della tua community.

Configura test eseguiti automaticamente su tutti i contributi, e assicurati che gli stessi test possano essere eseguiti localmente dagli stessi contributor. Richiedi che tutti i contributi passino i tuoi test prima di poter essere inviati. Così facendo, aiuterai a mantenere uno standard di qualità minimo per tutti i contributi. [Required status checks](https://help.github.com/articles/about-required-status-checks/) su Github possono assicurare che nessun cambiamento venga merged senza che i test vengano superati.

Se aggiungi test, assicurati che venga spiegato come funzionano nel tuo file CONTRIBUTING.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/edunham?s=180" class="pquote-avatar" alt="avatar">

  Credo che i test siano necessari per chiunque lavori su codice. Se il codice fosse completamente e perfettamente corretto, non ci sarebbe bisogno di alcun cambiamento - scriviamo codice quando qualcosa è sbagliato, che sia "crasha" o che sia "manca questa o quest'altra feature". E a prescindere dalla specificità dei cambiamenti su cui stai lavorando, i test sono essenziali all'individuazione di qualsiasi potenziale regressione introdotta accidentalmente.

  _I believe that tests are necessary for all code that people work on. If the code was fully and perfectly correct, it wouldn't need changes – we only write code when something is wrong, whether that's "It crashes" or "It lacks such-and-such a feature". And regardless of the changes you're making, tests are essential for catching any regressions you might accidentally introduce._
  <p markdown="1" class="pquote-credit">
— @edunham, ["Rust's Community Automation"](https://edunham.net/2016/09/27/rust_s_community_automation.html)
  </p>
</aside>

### Utilizza tool per l'automatizzazione di compiti di manutenzione base

La buona notizia per quanto riguarda la manutenzione di progetti popolari è che la probabilità che altri maintainer abbiano già affrontato problematiche simili e costruito soluzioni verso la loro risoluzione sia alta.

Ci sono diversi [tool disponsibili](https://github.com/showcases/tools-for-open-source) per l'automatizzazione di certi aspetti di manutenzione. Alcuni esempi:

* [semantic-release](https://github.com/semantic-release/semantic-release) automatizza i rilasci
* [mention-bot](https://github.com/facebook/mention-bot) menziona potenziali revisori per pull request
* [Danger](https://github.com/danger/danger) aiuta ad automatizzare la revisione del codice
* [no-response](https://github.com/probot/no-response) chiude le issue laddove l'autore non ha risposto a richieste per maggiori informazioni
* [dependabot-preview](https://github.com/marketplace/dependabot-preview) controlla i tuoi file delle dipendenze ogni giorno per requisiti obsoleti e apre pull request per ciascuno se li trova.

Per segnalazioni relative a bug e altri contributi, Github ha [Issue Templates e Pull Request Templates](https://github.com/blog/2111-issue-and-pull-request-templates), che puoi utilizzare per semplificare la comunicazione che ricevi. @TalAterha ha creato un guida [Choose Your Own Adventure guide](https://www.talater.com/open-source-templates/#/) per aiutare a scrivere issue e template PR.

Per gestire le notifiche email, puoi configurare [filtri email](https://github.com/blog/2203-email-updates-about-your-own-activity) per organizzarle secondo le tue priorità.

Se vuoi qualcosa di un pochino più avanzato, style guide e linters possono standardizzare i tuoi contributi di progetto e renderli più facili da revisionare e accettare.

Tuttavia, se i tuoi standard sono troppo complicati, possono divenire un ostacolo alla contribuzione. Assicurati di aggiungere soltanto abbastanza regole da rendere la vita di tutti più semplice.

Se non sei sicuro quali tool utilizzare, dai un'occhiata a come operano altri progetti popolari, specialmente quei progetti che fanno parte del tuo ecosistema. Per esempio, che aspetto ha il processo di contribuzione per altri moduli node? Utilizzando strumenti e approcci simili renderai la tua procedura più familiare ai tuoi prospettivi contributori.

## mettere in pausa è perfettamente accettabile!



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
