---
lang: it
title: Creare community accoglienti
description: Creare una community che incoraggia le persone ad utilizzare, contribuire a, e venerare il tuo progetto.
class: building
order: 4
image: /assets/images/cards/building.png
related:
  - best-practices
  - coc
---

## Prepara il tuo progetto al successo

Hai avviato il tuo progetto, si sta spargendo la voce, e la gente lo sta visitando. Ottimo! Ora, come fai in modo che rimangano nei paraggi?

Una community accogliente è un investimento per il futuro del tuo progetto e la tua reputazione. Se il tuo progetto ha appena cominciato ad avere contributi, comincia con l'offrire ai primi contributor una buona esperienza, e rendi appetibile il loro ritorno.

### Falli sentire benvenuti

Un modo per riflettere sulla community del tuo progetto è attraverso ciò che @MikeMcQuaid chiama l'[imbuto dei contributor (contributor funnel)](https://mikemcquaid.com/2018/08/14/the-open-source-contributor-funnel-why-people-dont-contribute-to-your-open-source-project/):

![Contributor funnel](/assets/images/building-community/contributor_funnel_mikemcquaid.png)

Man mano che costruisci la tua community, considera come qualcuno all'apice dell'imbuto (un potenziale utente) possa teoricamente raggiungere il fondo (diventando un maintainer attivo). Il tuo obiettivo è ridurre la frizione dell'esperienza del contributore ad ogni stadio. Quando la gente vince facile, è incentivata a fare di più.

Comincia con la tua documentazione:

* **Rendi l'utilizzo del tuo progetto semplice** [Un amichevole README](../starting-a-project/#writing-a-readme) ed esempi di codice chiari renderanno più semplice l'inizio del lavoro da parte di coloro che si ritrovano sul tuo progetto.
* **Spiega in modo chiaro come contribuire**, utilizzando [il tuo file CONTRIBUTING](../starting-a-project/#writing-your-contributing-guidelines) e mantenendo le tue issue aggiornate.
* **Buone prime issue**: Per aiutare nuovi contributor ad iniziare, considera esplicitamente [di contrassegnare quelle issue semplici e adatte a principianti come tali](https://help.github.com/en/articles/helping-new-contributors-find-your-project-with-labels). Github si prenderà cura di rendere quelle issue visibili in altri posti sulla piattaforma, incrementando i contributi utili, e riducendo la frizione creata da utenti che affrontano issue troppo difficili al loro livello.

[GitHub's 2017 Open Source Survey](http://opensourcesurvey.org/2017/) mostra che documentazione confusa o incompleta è il più grande problema per utenti open source. Una buona documentazione invita le persone a interagire con il tuo progetto. Prima o poi, qualcuno invierà una issue o pull request. Usa queste interazioni come opportunità di movimento verso il fondo dell'imbuto.

* **Quando qualcuno si ritrova sul tuo progetto, ringraziali per il loro interesse!** Occorre soltanto un'esperienza negativa per far sì che qualcuno non voglia ritornare.
* **Sii reattivo.** Se non rispondi alla loro issue per un mese, ci sono buon probabilità che abbiano già dimenticato il tuo progetto.
* **Mantieni una mente aperta rispetto a quali contributi accetti** Molti contributor cominciano con un piccolo bug report o una piccola soluzione. Ci sono [molti modi di contribuire](../how-to-contribute/#what-it-means-to-contribute) ad un progetto. Lascia che le persone aiutino come vogliono aiutare.
* **Se c'è un contributo con cui non sei d'accordo,** ringraziali per la loro idea e [spiega perchè](../best-practices/#learning-to-say-no) non è adatto allo scope del progetto, fornendo link alla documentazione relativa se disponibile.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/mikeal?s=180" class="pquote-avatar" alt="avatar">

  Contribuire all'open source talvolta è più facile per qualcuno che per altri. C'è molta paura di essere rimproverati per non aver fatto qualcosa in moro corretto o non adatto. (...) Dando uno spazio dove i contributor possono contribuire anche con minori conoscenze technice (documentazione, contentuti web markdown, ecc.) puoi ridurre in maniera drastica quei timori.

  _Contributing to open source is easier for some than others. There's a lot of fear of being yelled at for not doing something right or just not fitting in. (...) By giving contributors a place to contribute with very low technical proficiency (documentation, web content markdown, etc) you can greatly reduce those concerns._
  <p markdown="1" class="pquote-credit">
— @mikeal, ["Growing a contributor base in modern open source"](https://opensource.com/life/16/5/growing-contributor-base-modern-open-source)
  </p>
</aside>

La maggior parte dei contributor open source sono "contributor casuali": persone che contribuiscono al progetto soltanto occasionalmente. Un contributore casuale potrebbe non avere il tempo di essere aggiornato perfettamente con il tuo progetto. Per questo, è il tuo compito di rendere facile la loro contribuzione.

Incoraggiare altri contributor è anche un investimento per te stesso. Quando responsabilizzi i tuoi più grandi fan a eseguire il lavoro per cui sono più appassionati, c'è molta meno pressione di dover fare tutto da solo.

### Documenta tutto

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/janl?s=180" class="pquote-avatar" alt="avatar">

  Sei mai stato ad un evento (tech) dove non conoscevi nessuno, ma tutti gli altri sembravano fossero in gruppi a chiacchierare come vecchi amici? (...) Ora immagina che vuoi contribuire ad progetto open source, ma non vedi perchè o come questo sta succedendo.

  _Have you ever been to a (tech-) event where you didn't know anyone, but everyone else seemed to stand in groups and chat like old friends? (...) Now imagine you want to contribute to an open source project, but you don't see why or how this is happening._

  <p markdown="1" class="pquote-credit">
— @janl, ["Sustainable Open Source"](https://web.archive.org/web/20200723213552/https://writing.jan.io/2015/11/20/sustainable-open-source.html)
  </p>
</aside>

Quando incominci un nuovo progetto, tenere il tuo lavoro privato potrebbe sembrare naturale. Ma progetti open source prosperano quando documenti il tuo processo pubblicamente.

Quando annoti il tuo processo, più persone possono rendersi partecipi ad ogni passo del tuo cammino. Potresti ricevere aiuto su qualcosa che nemmeno sapevi di aver bisogno di ricevere.

Annotare significa più di una semplice trasposizione della documentazione puramente tecnica. Ogni volta che senti l'impulso di scrivere qualcosa o di discuterlo privatamente, domandati se puoi renderlo pubblico.

Sii trasparente rispetto alla tua roadmap di progetto, i tipi di contributi che cerchi, come i contributi sono revisionati, o perchè hai preso certe decisioni.

Se noti che diversi hanno lo stesso problema, documenta le tue risposte nel README.

Quando si tratta di incontri, considera la pubblicazione delle tue note o cose da ricordare in una issue pertinente. Il feedback che riceverai tramite questo livello di trasparenza potrebbe sorprenderti.

Documentare tutto comprende anche il lavoro che fai. Se stai lavorando su un aggiornamento considerevole per il tuo progetto, mettilo in una pull request e marcalo come work in progress (WIP). Così facendo gli altri potranno sentirsi al più presto parte del processo.

### Sii reattivo

Mentre [promuovi il tuo progetto](../finding-users), riceverai feedback da diverse persone. Potrebbero avere domande su come funzionano le cose, o potrebbero aver bisogno di aiuto su come cominciare.

Cerca di rimanere reattivo quando qualcuno invia una issue, una pull request, o fa domande sul tuo progetto. Quando rispondi in fretta, li farai sentire parte di un dialogo e saranno più entusiaste a partecipare.

Anche se non riesci a controllare la request immediatamente, prendendo atto e rendendo noto presto di averla ricevuta fa in modo che il livello di coinvolgimento aumenti. Ecco come @tdreyno ha risposto ad una pull request su [Middleman](https://github.com/middleman/middleman/pull/1466):

![Middleman pull request](/assets/images/building-community/middleman_pr.png)

[Uno studio condotto da Mozilla](https://docs.google.com/presentation/d/1hsJLv1ieSqtXBzd5YZusY-mB8e1VJzaeOmh8Q4VeMio/edit#slide=id.g43d857af8_0177) ha trovato che contributor che avevano ricevuto una revisione entro le 48 ore, avevano avuto una percentuale di rientro maggiore e contribuzioni ripetute.

Conversazioni relative al tuo progetto potrebbero anche avvenire in altri posti online come Stack Overflow, Twitter, o Reddit. Puoi configurare le tue notifiche su alcuni di questi siti per essere avvertito quando qualcuno menziona il tuo progetto.

### Offri alla tua community un posto dove radunarsi

Ci sono due ragioni per offrire alla tua community un posto dove possono ritrovarsi.

La prima ragione è per loro. Aiuta a far sì che ognuno si possa conoscere. Persone aventi interessi in comune vorrano inevitabilmente un posto dove possono parlarne. E quando la comunicazione è pubblica ed accessibile, chiunque può leggere archivi passati per aggiornarsi e partecipare.

La seconda ragione è per te. Se non offri loro un posto pubblico dove possono parlare del tuo progetto, ti contatteranno direttamente. All'inizio, rispondere a messaggi privati "solo questa volta" potrebbe sembrare abbastanza semplice. Col passare del tempo, specialmente se il tuo progetto diviene popolare, ti sentirai esausto. Resisti la tentazione di comunicare del tuo progetto in privato. Cerca invece di indirizzali verso un canale pubblico designato.

La comunicazione pubblica può consistere in semplici accorgimenti come quello di incoraggiare le persone ad aprire una issue invece di mandarti una email direttamente o commentare sul tuo blog. Potresti inoltre configurare una mailing list o creare un account Twitter, Slack o un canale IRC predisposto alla discussione del tuo progetto. O tutto quanto sopra menzionato!

[Kubernetes kops](https://github.com/kubernetes/kops#getting-involved) alloca ore d'ufficio ogni due settimane per aiutare membri della community:

> Kops inoltre, alloca un certo orario ogni due settimane per offrire assistanza e orientamento alla community. I maintainer di Kops hanno messo da parte tempo specifico da dedicare al lavoro con nuovi arrivati, aiutando con PRs, e discutendo nuove feature.
>
> Kops also has time set aside every other week to offer help and guidance to the community. Kops maintainers have agreed to set aside time specifically dedicated to working with newcomers, helping with PRs, and discussing new features.

Eccezioni di rilievo alla comunicazione pubblica sono: 1) problemi di sicurezza e 2) violazioni ai codici di condotta sensibili. Dovresti sempre avere modalità di report separate per gestire queste problematiche privatamente. Se non vuoi utilizzare la tua email personale, configura un indirizzo email dedicato.

## La crescita della tua community

Le community sono estremamente potenti. Tale potere può essere una benedizione così come una maledizione, a seconda di come viene esercitato. Man mano che la tua community di progetto cresce, ci sono modi per facilitare il suo divenire una forza costruttiva, anzichè una distruttiva.

### Non tollerare i malintenzionati

Qualunque progetto popolare attrarrà inevitabilmente persone che vogliono danneggiare, piuttosto che aiutare, la tua community. Potrebbero cominciare discussioni inutili, disquisire su feature insignificanti, o intimidire altre persone.  

Adotta il più possibile una polizza tolleranza zero rispetto a questo tipo di persone. Se non controllate, persone negative di questo genere creeranno esperienze sgradevoli che potrebbero persino indurre altri membri ad abbandonare la community.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/okdistribute?s=180" class="pquote-avatar" alt="avatar">

  La verità è che avere una community incoraggiante e solidale è essenziale. Non riuscirei mai a fare questo lavoro senza l'aiuto dei miei colleghi, amichevoli stranieri su internet, e canali IRC loquaci. (...) Non accontentarti di meno. Non accontentarti degli stronzi.

  _The truth is that having a supportive community is key. I'd never be able to do this work without the help of my colleagues, friendly internet strangers, and chatty IRC channels. (...) Don't settle for less. Don't settle for assholes._

  <p markdown="1" class="pquote-credit">
— @okdistribute, ["How to Run a FOSS Project"](https://okdistribute.xyz/post/okf-de)
  </p>
</aside>

Discussioni regolari su aspetti banali del progetto distraggono gli altri, te stesso, e impedisce che ci si possa concentrare su mansioni importanti. Potrebbe succedere che nuove persone appena giunte sul tuo progetto vedano queste conversazioni e decidino di non partecipare.

Quando noti comportamenti negativi attorno al tuo progetto, rendilo noto pubblicamente. Spiega, in un tono cortese ma fermo, come mai il loro comportamento non è accettabile. Se il problema persiste, potrebbe essere il caso di [richiedergli di andarsene](../code-of-conduct/#enforcing-your-code-of-conduct). Il tuo [codice di condotta](../code-of-conduct/) può essere una guida costruttiva per questo tipo di conversazioni.

### Incontra i contributor dove sono

Più la tua community cresce, più importante diventa avere buona documentazione. contributor casuali, i quali potrebbero non essere ancora familiari con il tuo progretto, leggeranno la tua documentazione per farsi il quadro del progetto e della situazione velocemente.

Nel tuo file CONTRIBUTING, spiega esplicitamente come nuovi contributor possono iniziare. A questo fine potresti anche creare una sezione dedicata. [Django](https://github.com/django/django), per esempio, ha una pagina landing speciale per dare il benvenuto a nuovi contributor.

![Django new contributors page](/assets/images/building-community/django_new_contributors.png)

Nella tua coda di issue, marca bug come adatti a diversi tipi di contributor: per esempio, [_"first timers only"_](https://kentcdodds.com/blog/first-timers-only), _"good first issue"_, oppure _"documentation"_. [Queste "labels"](https://github.com/librariesio/libraries.io/blob/6afea1a3354aef4672d9b3a9fc4cc308d60020c8/app/models/github_issue.rb#L8-L14) rendono semplice e veloce, per coloro che sono nuovi al tuo progetto, la rilevazione di issue e il loro inizio.

Infine, usa la tua documentazione per far sentire tutti benvenuti ad ogni passo.

Non interagirai con la maggior parte delle persone che atterreranno sul tuo progetto. Ci potrebbero essere contributi che nemmeno riceverai perchè qualcuno potrebbe essersi sentito impaurito o non sapeva dove cominciare. Bastano poche parole gentili e incoraggianti a far sì che qualcuno non abbandoni il tuo progetto frustrati.


Per esempio, ecco come [Rubinius](https://github.com/rubinius/rubinius/) comincia [la sua guida contributing](https://github.com/rubinius/rubinius/blob/HEAD/.github/contributing.md):

>Volevamo cominciare col ringraziarti per aver scelto di utilizzare Rubinius. Questo progetto è un lavoro d'amore, e apprezziamo tutti gli utenti che trovano bug, migliorano i tempi di esecuzione, e aiutano con la documentazione. Ogni contributo è importante, quindi grazie per la tua partecipazione. Detto ciò, ecco alcune linee guida che ti chiediamo di seguire nell'interesse di una risoluzione positiva alla tua issue.
>
>We want to start off by saying thank you for using Rubinius. This project is a labor of love, and we appreciate all of the users that catch bugs, make performance improvements, and help with documentation. Every contribution is meaningful, so thank you for participating. That being said, here are a few guidelines that we ask you to follow so we can successfully address your issue.

### Condividi un senso di proprietà sul progetto

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/sagesharp?s=180" class="pquote-avatar" alt="avatar">

  I tuoi leader avranno opinioni diverse, come è consono che sia in community sane! Ciò nonostante, occorre prendere certi accorgimenti per assicurarsi che le voci più rumorose non vincano sempre su quelle meno prominenti. In modo da poter essere anche quest'ultime sentite.

  _Your leaders will have different opinions, as all healthy communities should! However, you need to take steps to ensure the loudest voice doesn't always win by tiring people out, and that less prominent and minority voices are heard._

  <p markdown="1" class="pquote-credit">
— @sagesharp, ["What makes a good community?"](https://sage.thesharps.us/2015/10/06/what-makes-a-good-community/)
  </p>
</aside>

Le persone sono più entusiaste a contribuire quando hanno la sensazione che il progetto sia loro. Questo non significa che tu debba rinunciare alla tua visione di progetto o accetare contributi che non vuoi. Ma dando maggiore e maggiore credito per lavoro altrui, man mano incrementerai la possibilità che i tuoi contributor rimangano nei paraggi.

Vedi se riesci a trovare modi per condividere la proprietà del tuo progetto il maggiormente possibile. Ecco alcune idee:

* **Non risolvere semplici bug (non critici).** Usali come opportunità per la recluta di nuovi contributor, o per fare da mentore a chi vuole contribuire. Inizialmente potrebbe sembrare non naturale, ma col passare del tempo ne varrà l'investimento. Per esempio, @michaeljoseph ha richiesto a contributor di inviare una pull request su una issue [Cookiecutter](https://github.com/audreyr/cookiecutter), piuttosto che risolverla da sè.

![Cookiecutter issue](/assets/images/building-community/cookiecutter_submit_pr.png)




* **Start a CONTRIBUTORS or AUTHORS file in your project** that lists everyone who's contributed to your project, like [Sinatra](https://github.com/sinatra/sinatra/blob/HEAD/AUTHORS.md) does.

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
— @kennethreitz, ["Be Cordial or Be on Your Way"](https://web.archive.org/web/20200509154531/https://kenreitz.org/essays/be-cordial-or-be-on-your-way)
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
