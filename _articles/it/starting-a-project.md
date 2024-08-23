---
lang: it
title: Avvio di un progetto open source
description: Scopri di più sul mondo dell'open source e preparati a iniziare il tuo progetto.
class: beginners
order: 2
image: /assets/images/cards/beginner.png
related:
  - finding
  - building
---

## Il "cosa" e il "perché" dell'open source

Quindi stai pensando di iniziare con l'open source? Congratulazioni! Il mondo apprezza il tuo contributo. Parliamo di cos'è l'open source e perché le persone lo fanno.

### Cosa significa "open source"?

Quando un progetto è open source, significa che **chiunque è libero di utilizzare, studiare, modificare e distribuire il tuo progetto per qualsiasi scopo.** Queste autorizzazioni si applicano tramite la [licenza open source](https://opensource.org/licenses).

L'open source è potente perché abbassa le barriere all'adozione e alla collaborazione, consentendo alle persone di distribuire e migliorare rapidamente i progetti. Anche perché offre agli utenti la possibilità di controllare i propri computer, rispetto al closed source. Ad esempio, un'azienda che utilizza software open source ha la possibilità di assumere qualcuno per apportare miglioramenti personalizzati al software invece di affidarsi esclusivamente alle soluzioni di prodotto di un fornitore closed source.

_Software Libero_ si riferisce allo stesso insieme di progetti di _Open Source_. A volte vedrai anche [questi termini](https://en.wikipedia.org/wiki/Free_and_open-source_software) combinati come "software libero e open source" (FOSS) o "software libero e open source" (FLOSS). _Free_ e _libre_ si riferiscono alla libertà, [non al prezzo](#open-source-significa-gratuito).

### Защо хората отварят кода на работата си?

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/kentcdodds?s=180" class="pquote-avatar" alt="avatar">
  Una delle esperienze più gratificanti che ottengo utilizzando e collaborando con l'open source deriva dalle relazioni che instauro con altri sviluppatori che affrontano molti dei miei stessi problemi.
  <p markdown="1" class="pquote-credit">
— @kentcdodds, ["Come è stato fantastico per me entrare nell'Open Source"](https://kentcdodds.com/blog/how-getting-into-open-source-has-been-awesome-for-me)
  </p>
</aside>

[Ci sono molte ragioni](https://ben.balter.com/2015/11/23/why-open-source/) per cui un individuo o un'organizzazione vorrebbe rendere open source un progetto. Alcuni esempi includono:

* **Collaborazione:** I progetti open source possono accettare modifiche da chiunque nel mondo. [Exercism](https://github.com/exercism/), ad esempio, è una piattaforma di esercizi di programmazione con oltre 350 contributori.

* **Adozione e remix:** i progetti open source possono essere utilizzati da chiunque per quasi tutti gli scopi. Le persone possono persino usarlo per costruire altre cose. [WordPress](https://github.com/WordPress), ad esempio, è iniziato come fork di un progetto esistente chiamato [b2](https://github.com/WordPress/book/blob/HEAD/Content/Part%201/2-b2-cafelog.md).

* **Trasparenza:** chiunque può verificare la presenza di bug o incoerenze in un progetto open source. La trasparenza è importante per governi come la [Bulgaria](https://medium.com/@bozhobg/bulgaria-got-a-law-requiring-open-source-98bf626cf70a) o gli [Stati Uniti](https://www.cio.gov/2016/08/11/peoples-code.html), settori regolamentati come quello bancario o sanitario e software di sicurezza come [Let's Encrypt](https://github.com/letsencrypt).

L'open source non riguarda solo il software. Puoi aprire qualsiasi cosa, dai set di dati ai libri. Dai un'occhiata a [GitHub Explore](https://github.com/explore) per idee su cos'altro puoi aprire.

### Open source significa "gratuito"?

Uno dei maggiori vantaggi dell'open source è che non costa denaro. Tuttavia, "gratuito" è un sottoprodotto del valore complessivo dell'open source.

Poiché la [licenza open source richiede](https://opensource.org/definition-annotated/) che chiunque sia in grado di utilizzare, modificare e condividere il tuo progetto per quasi tutti gli scopi, i progetti stessi sono generalmente gratuiti. Se l'utilizzo del progetto costa denaro, chiunque può legalmente farne una copia e utilizzare invece la versione gratuita.

Di conseguenza, la maggior parte dei progetti open source sono gratuiti, ma "gratuito" non fa parte della definizione di open source. Esistono modi per far pagare i progetti open source indirettamente attraverso doppia licenza o funzionalità limitate, pur rispettando la definizione ufficiale di open source.

## Dovrei iniziare il mio progetto open source?

La risposta breve è sì, perché indipendentemente dal risultato, avviare il proprio progetto è un ottimo modo per imparare come funziona l'open source.

Se non hai mai aperto un progetto open source prima, potresti essere preoccupato per ciò che la gente dirà o se qualcuno se ne accorgerà. Se suona come te, non sei solo!

Il lavoro open source è come qualsiasi altra attività creativa, che si tratti di scrivere o disegnare. Potresti avere paura di condividere il tuo lavoro con il mondo, ma l'unico modo per migliorare è esercitarsi, anche se non hai un pubblico.

Se non sei ancora convinto, prenditi un momento per pensare a quali potrebbero essere i tuoi obiettivi.

### Stabilisci i tuoi obiettivi

Gli obiettivi possono aiutarti a capire su cosa lavorare, a cosa dire di no e dove hai bisogno dell'aiuto degli altri. Inizia chiedendoti _perché sto utilizzando questo progetto open source?_

Non esiste un'unica risposta corretta a questa domanda. Puoi avere più obiettivi per un progetto o progetti diversi con obiettivi diversi.

Se il tuo unico obiettivo è mettere in mostra il tuo lavoro, potresti non volere nemmeno un contributo e addirittura dirlo nel tuo README. D'altra parte, se desideri contributori, investirai tempo in una documentazione chiara e farai sentire i nuovi arrivati ​​i benvenuti.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/mavris?s=180" class="pquote-avatar" alt="avatar">
  Ad un certo punto ho creato un UIAlertView personalizzato che ho utilizzato... e ho deciso di renderlo open source. Quindi l'ho modificato per renderlo più dinamico e l'ho caricato su GitHub. Ho anche scritto la mia prima documentazione spiegando ad altri sviluppatori come utilizzarlo nei loro progetti. Probabilmente nessuno lo ha mai usato perché era un progetto semplice, ma mi sono sentito bene con il mio contributo.
  <p markdown="1" class="pquote-credit">
— @mavris, ["Sviluppatori di software autodidatti: perché l'open source è importante per noi"](https://medium.com/rocknnull/self-taught-software-engineers-why-open-source-is-important-to-us-fe2a3473a576)
  </p>
</aside>

Man mano che il tuo progetto cresce, la tua comunità potrebbe aver bisogno di qualcosa di più del semplice codice, da parte tua. Rispondere ai problemi, rivedere il codice ed evangelizzare il tuo progetto sono compiti importanti in un progetto open source.

Anche se la quantità di tempo che dedichi ad attività non di codifica dipenderà dalle dimensioni e dall'ambito del tuo progetto, dovresti essere preparato come manutentore a gestirle da solo o a trovare qualcuno che ti aiuti.

**Se fai parte di un'azienda che offre un progetto open source,** assicurati che il tuo progetto disponga delle risorse interne necessarie per prosperare. Ti consigliamo di determinare chi è responsabile del mantenimento del progetto dopo il lancio e come condividerai tali attività con la tua comunità.

Se hai bisogno di un budget o di personale dedicato per la promozione, le operazioni e la manutenzione del progetto, avvia queste conversazioni in anticipo.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/captainsafia?s=180" class="pquote-avatar" alt="avatar">
  Quando inizi a rendere open source il tuo progetto, è importante assicurarti che i tuoi processi di governance tengano conto del contributo e delle capacità della comunità attorno al tuo progetto. Non aver paura di coinvolgere collaboratori esterni alla tua azienda negli aspetti chiave del progetto, soprattutto se collaborano spesso.
  <p markdown="1" class="pquote-credit">
— @captainsafia, ["Quindi vuoi un progetto open source eh?"](https://dev.to/captainsafia/so-you-wanna-open-source-a-project-eh-5779)
  </p>
</aside>

### Contributo ad altri progetti

Se il tuo obiettivo è imparare a collaborare con gli altri o capire come funziona l'open source, valuta la possibilità di contribuire a un progetto esistente. Inizia con un progetto che già usi e che ti piace. Contribuire a un progetto può essere semplice come correggere un errore di battitura o aggiornare la documentazione.

Se non sei sicuro di come iniziare come collaboratore, consulta la nostra [Come contribuire alla guida Open Source](../how-to-contribute/).

## Inizia il tuo progetto open source

Non esiste il momento perfetto per aprire la tua attività. Puoi rendere open source un'idea, in lavorazione o dopo anni di closed source.

In generale, dovresti aprire il tuo progetto quando ti senti a tuo agio con gli altri che visualizzano e forniscono feedback sul tuo lavoro.

Non importa in quale fase decidi di aprire il tuo progetto, ogni progetto deve includere la seguente documentazione:

* [Open source license](https://help.github.com/articles/open-source-licensing/#where-does-the-license-live-on-my-repository)
* [README](https://help.github.com/articles/create-a-repo/#commit-your-first-change)
* [Contributing guidelines](https://help.github.com/articles/setting-guidelines-for-repository-contributors/)
* [Code of conduct](../code-of-conduct/)

In qualità di sostenitore, questi componenti ti aiuteranno a comunicare le aspettative, a gestire i contributi e a proteggere i diritti legali di tutti (inclusi i tuoi). Aumentano notevolmente le tue possibilità di un'esperienza positiva.

Se il tuo progetto è su GitHub, posizionare questi file nella directory root con i nomi file consigliati aiuterà GitHub a riconoscerli e a mostrarli automaticamente ai tuoi lettori.

### Selezione della licenza

Una licenza open source garantisce che altri possano utilizzare, copiare, modificare e contribuire al tuo progetto senza conseguenze. Ti protegge anche da situazioni legali difficili. **Devi includere una licenza quando avvii un progetto open source.**

Il lavoro legale non è divertente. La buona notizia è che puoi copiare e incollare una licenza esistente nel tuo repository. Ci vorrà solo un minuto per proteggere il tuo duro lavoro.

[MIT](https://choosealicense.com/licenses/mit/), [Apache 2.0](https://choosealicense.com/licenses/apache-2.0/) e [GPLv3](https://choosealicense.com/licenses/gpl-3.0/) sono le licenze open source più popolari, ma [ci sono altre opzioni](https://choosealicense.com), da qualle scegliere .

Quando crei un nuovo progetto su GitHub, ti viene data la possibilità di scegliere una licenza. Includere una licenza open source renderà il tuo progetto GitHub open source.

![Seleziona una licenza](/assets/images/starting-a-project/repository-license-picker.png)

Se hai altre domande o dubbi sugli aspetti legali della gestione di un progetto open source, [ti abbiamo coperto](../legal/).

### Scrivi README

I README fanno molto di più che spiegare come utilizzare il tuo progetto. Spiegano anche perché il tuo progetto è importante e cosa possono farci i tuoi utenti.

Nel README, prova a rispondere alle seguenti domande:

* Cosa fa questo progetto?
* Perché è utile questo progetto?
* Come iniziare?
* Dove posso ottenere ulteriore aiuto se ne ho bisogno?

Puoi utilizzare il file README per rispondere ad altre domande, ad esempio come gestisci i contributi, quali sono gli obiettivi del progetto e informazioni su licenza e attribuzione. Se non vuoi accettare contributi o il tuo progetto non è ancora pronto per la produzione, salva queste informazioni.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/tracymakes?s=180" class="pquote-avatar" alt="avatar">
  Una migliore documentazione significa più utenti, meno richieste di supporto e più contributori. (...) Ricorda che i tuoi lettori non sei tu. Ci sono persone che possono venire a un progetto che hanno background completamente diversi.
  <p markdown="1" class="pquote-credit">
— @tracymakes, ["Scrivi in ​​modo che le tue parole vengano lette (video)"](https://www.youtube.com/watch?v=8LiV759Bje0&list=PLmV2D6sIiX3U03qc-FPXgLFGFkccCEtfv&index=10)
  </p>
</aside>

A volte le persone evitano di scrivere un README perché pensano che il progetto sia incompiuto o non vogliono contributi. Questi sono tutti ottimi motivi per scriverne uno.

Per ulteriore ispirazione, prova a utilizzare [la guida "Crea un README" di @dguo](https://www.makeareadme.com/) o [README nel modello](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2) di @PurpleBooth per scrivere un completo README.

Quando includi un file README nella directory root, GitHub lo visualizzerà automaticamente nella home page del repository.

### Scrivi le linee guida per il tuo contributo

Un file CONTRIBUTO indica al tuo pubblico come partecipare al tuo progetto. Ad esempio, puoi includere informazioni su:

* Come inviare una segnalazione di bug (prova a utilizzare [modelli di richiesta problemi e pull](https://github.com/blog/2111-issue-and-pull-request-templates))
* Come proporre una nuova funzionalità
* Come configurare il tuo ambiente ed eseguire i test

Oltre ai dettagli tecnici, il file CONTRIBUTI è un'opportunità per comunicare le vostre aspettative per i contributi, come ad esempio:

* I tipi di contributi che stai cercando
* La tua tabella di marcia o visione per il progetto
* Come i contributori dovrebbero (o non dovrebbero) contattarti

Usare un tono caldo e amichevole e offrire suggerimenti specifici per i contributi (come scrivere documentazione o creare un sito web) può fare molto per far sentire i nuovi arrivati ​​benvenuti ed entusiasti di partecipare.
Per esempio [Active Admin](https://github.com/activeadmin/activeadmin/) inizia [la sua guida ai contributi](https://github.com/activeadmin/activeadmin/blob/HEAD/CONTRIBUTING.md) con:

> Innanzitutto, grazie per aver considerato di contribuire ad Active Admin. Sono le persone come te che rendono Active Admin uno strumento così eccezionale.

Nelle prime fasi del tuo progetto, il tuo file CONTRIBUTO può essere semplice. Dovresti sempre spiegare come segnalare bug o problemi, ed eventuali requisiti tecnici (come i test) per dare un contributo.

Nel tempo, potresti aggiungere altre domande frequenti al tuo file CONTRIBUTING. Annotare queste informazioni significa che meno persone ti faranno sempre le stesse domande.

Per ulteriore assistenza nella scrittura del file CONTRIBUTING, consulta @nayafia [modello guida per la collaborazione](https://github.com/nayafia/contributing-template/blob/HEAD/CONTRIBUTING-template.md) o @mozilla ["Come creare CONTRIBUTING.md"](https://mozillascience.github.io/working-open-workshop/contributing/).

Collega il tuo file CONTRIBUTE dal tuo README in modo che più persone possano vederlo. Se [posiziona il file CONTRIBUTING nel repository del tuo progetto](https://help.github.com/articles/setting-guidelines-for-repository-contributors/), GitHub si collegherà automaticamente al tuo file quando un collaboratore crea un problema o apre una richiesta pull.

![Linee guida per i contributi](/assets/images/starting-a-project/Contributing-guidelines.jpg)

### Creazione di un codice di condotta

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/mlynch?s=180" class="pquote-avatar" alt="avatar">
  Tutti abbiamo avuto esperienze in cui ci siamo imbattuti in quello che probabilmente era un abuso, sia come manutentore che cercava di spiegare perché qualcosa dovrebbe essere in un certo modo, sia come utente... che poneva una semplice domanda. (...) Il Codice di condotta diventa un documento con riferimenti e collegamenti facili che dimostra che il vostro team prende molto sul serio il discorso costruttivo.
  <p markdown="1" class="pquote-credit">
— @mlynch, ["Rendere l'open source un luogo più felice"](https://medium.com/ionic-and-the-mobile-web/making-open-source-a-happier-place-3b90d254f5f)
  </p>
</aside>

Infine, un codice di condotta aiuta a definire le regole di base per la condotta dei partecipanti al progetto. Ciò è particolarmente utile se stai avviando un progetto open source per una comunità o un'azienda. Un codice di condotta ti consente di facilitare un comportamento sano e costruttivo nella comunità che ridurrà il tuo stress come sostenitore.

Per ulteriori informazioni, consultare la nostra [Guida al Codice di condotta](../code-of-conduct/).

Oltre a comunicare _come_ ci si aspetta che i partecipanti si comportino, un codice di condotta tende anche a descrivere a chi si applicano tali aspettative, quando si applicano e cosa fare se si verifica una violazione.

Come per le licenze open source, esistono standard emergenti per i codici di condotta, quindi non è necessario scriverne uno proprio. Il [Contributor Covenant](https://contributor-covenant.org/) è un codice di condotta utilizzato da [oltre 40.000 progetti open source](https://www.contributor-covenant.org/adopters), incluso Kubernetes, Rails e Swift. Indipendentemente dal testo che utilizzi, devi essere pronto a far rispettare il tuo codice di condotta quando necessario.

Incolla il testo direttamente in un file CODE_OF_CONDUCT nel tuo repository. Archivia il file nella directory principale del tuo progetto in modo che sia facile da trovare e collegalo dal tuo file README.

## Assegna un nome e un marchio al tuo progetto

Il branding è più di un logo appariscente o di un nome di progetto accattivante. Riguarda il modo in cui parli del tuo progetto e chi raggiungi con il tuo messaggio.

### Scegliere il nome giusto

Scegli un nome che sia facile da ricordare e che, idealmente, dia un'idea di ciò che fa il progetto. Per esempio:

* [Sentry](https://github.com/getsentry/sentry) monitora le applicazioni di segnalazione degli arresti anomali
* [Thin](https://github.com/macournoyer/thin) è un server web Ruby facile e veloce

Se stai sviluppando un progetto esistente, usare il loro nome come prefisso può aiutarti a chiarire cosa fa il tuo progetto (ad esempio [node-fetch](https://github.com/bitinn/node-fetch) porta `window.fetch` a Node.js).

Pensa prima alla chiarezza. I giochi di parole sono divertenti, ma ricorda che alcune battute potrebbero non essere applicabili ad altre culture o persone con esperienze diverse dalle tue. Alcuni dei tuoi potenziali utenti potrebbero essere dipendenti dell'azienda: non vuoi farli sentire a disagio quando devono spiegare il tuo progetto al lavoro!

### Evitare conflitti di nomi

[Verifica la presenza di progetti open source con nomi simili](https://ivatomic.com/), soprattutto se condividi la stessa lingua o ecosistema. Se il tuo nome si sovrappone a un popolare progetto esistente, potresti confondere il tuo pubblico.

Se desideri che un sito web, un account Twitter o altre proprietà rappresentino il tuo progetto, assicurati di poter ottenere i nomi che desideri. Idealmente, [salva questi nomi adesso](https://instantdomainsearch.com/) per la massima tranquillità, anche se non intendi ancora utilizzarli.

Assicurati che il nome del tuo progetto non violi alcun marchio. Un'azienda potrebbe chiederti di rimuovere il tuo progetto in un secondo momento o addirittura intraprendere un'azione legale contro di te. Non vale la pena rischiare.

Puoi controllare il [WIPO Global Brand Database](http://www.wipo.int/branddb/en/) per eventuali conflitti tra marchi. Se lavori in un'azienda, questa è una delle cose in cui il tuo [team legale può aiutarti](../legal/).

Infine, esegui una rapida ricerca su Google per il nome del tuo progetto. Le persone riusciranno a trovare facilmente il tuo progetto? C'è qualcos'altro che appare nei risultati di ricerca che non vuoi che venga visualizzato?

### Anche il modo in cui scrivi (e codifichi) influisce sul tuo marchio!

Nel corso della vita del tuo progetto, scriverai molto: README, tutorial, documenti della community, risposte a problemi, forse anche newsletter e mailing list.

Che si tratti di documentazione formale o di un'e-mail informale, il tuo stile di scrittura fa parte del marchio del tuo progetto. Pensa a come potresti percepire il tuo pubblico e se questo è il tono che vuoi trasmettere.

<aside markdown="1" class="pquote">
   <img src="https://avatars.githubusercontent.com/janl?s=180" class="pquote-avatar" alt="avatar">
   Ho cercato di partecipare a ogni discussione della mailing list e di mostrare un comportamento esemplare, di essere gentile con le persone, di prendere sul serio i loro problemi e di cercare di essere d'aiuto in generale. Dopo un po', le persone si sono fermate non solo per fare domande, ma anche per aiutare con le risposte, e con mia grande gioia hanno imitato il mio stile.
   <p markdown="1" class="pquote-credit">
— @janl в [CouchDB](https://github.com/apache/couchdb), ["Open source sostenibile"](https://web.archive.org/web/20200723213552/https://writing.jan.io/2015/11/20/sustainable-open-source.html)
   </p>
</aside>

Usare un linguaggio caldo e inclusivo (come "loro" anche quando si riferisce a una sola persona) può fare molto per far sì che il tuo progetto si senta accogliente per i nuovi contributori. Attieniti a un linguaggio semplice poiché molti dei tuoi lettori potrebbero non essere di madrelingua inglese.

Oltre al modo in cui digiti le parole, anche il tuo stile di codifica può diventare parte del marchio del tuo progetto. [Angular](https://angular.io/guide/styleguide) e [jQuery](https://contribute.jquery.org/style-guide/js/) sono due esempi di progetti con stili e linee guida di codifica rigorosi.

Non è necessario scrivere una guida di stile per il tuo progetto quando hai appena iniziato e potresti scoprire che ti diverti comunque a incorporare diversi stili di codifica nel tuo progetto. Ma devi prevedere in che modo il tuo stile di scrittura e programmazione potrebbe attrarre o scoraggiare diversi tipi di persone. Le prime fasi del tuo progetto sono la tua opportunità per creare il precedente che desideri vedere.

## La tua lista di controllo pre-lancio

Pronto per aprire il tuo progetto? Ecco una lista di controllo per aiutarti. Seleziona tutte le caselle? Sei pronto per andare! [Fai clic su "pubblica"](https://help.github.com/articles/making-a-private-repository-public/) e datti una pacca sulla spalla.

**Documentazione**

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox1" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox1" class="overflow-hidden d-block text-normal">
    Il progetto ha un file LICENSE di licenza open source
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox2" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox2" class="overflow-hidden d-block text-normal">
    Il progetto ha la documentazione di base (README, CONTRIBUTING, CODE_OF_CONDUCT)
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
    La coda dei problemi è aggiornata, con problemi chiaramente organizzati ed etichettati
  </label>
</div>

**Код**

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox5" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox5" class="overflow-hidden d-block text-normal">
    Il progetto utilizza convenzioni di codifica coerenti e nomi chiari di funzioni/metodi/variabili
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox6" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox6" class="overflow-hidden d-block text-normal">
    Il codice è chiaramente commentato, documentando intenti e casi limite
  </label>
</div>

<div class="clearfix mb-4">
  <input type="checkbox" id="cbox7" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox7" class="overflow-hidden d-block text-normal">
    Nessun materiale sensibile nella cronologia delle modifiche, nei problemi o nelle richieste pull (ad esempio password o altre informazioni non pubbliche)
  </label>
</div>

**Хора**

Se sei un privato:

<div class="clearfix mb-4">
  <input type="checkbox" id="cbox8" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox8" class="overflow-hidden d-block text-normal">
  Hai parlato con l'ufficio legale e/o hai compreso le politiche open source e IP della tua azienda (se sei un dipendente da qualche parte)
  </label>
</div>

Se sei un'azienda o un ente:

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox9" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox9" class="overflow-hidden d-block text-normal">
    Hai parlato con il tuo dipartimento legale
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox10" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox10" class="overflow-hidden d-block text-normal">
    Hai un piano di marketing per annunciare e promuovere il progetto
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox11" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox11" class="overflow-hidden d-block text-normal">
    Qualcuno è impegnato a gestire le interazioni della comunità (rispondere ai problemi, rivedere e unire le richieste pull)
  </label>
</div>

<div class="clearfix mb-4">
  <input type="checkbox" id="cbox12" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox12" class="overflow-hidden d-block text-normal">
    Almeno due persone hanno accesso amministrativo al progetto
  </label>
</div>

## Fallo!

Congratulazioni per il tuo primo progetto open source. Qualunque sia il risultato, il servizio pubblico è un dono per la comunità. Con ogni coinvolgimento, commento e richiesta pull, crei opportunità per te e gli altri di apprendere e crescere.
