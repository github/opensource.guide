---
lang: it
title: Avviare un Progetto Open Source
description: Impara di più sul mondo dell'open source e preparati a lanciare il tuo progetto.
class: beginners
order: 2
image: /assets/images/cards/beginner.png
related:
  - building
---

## Il "come" e il "perché" dell'open source

Stai pensando di iniziare con l'open source? Congratulazioni! Il mondo apprezza il tuo contributo. Parliamo di cosa è l'open source e del perché la gente lo fa.

### Cosa significa "open source"?

Quando un progetto è open source, significa che **chiunque è libero di usarlo, studiarlo, modificarlo e distribuirlo per qualsiasi scopo**. Questi permessi vengono garantiti attraverso [una lincenza open source](https://opensource.org/licenses).

L'open source è potente perché abbassa le barriere all'adozione e alla collaborazione, consentendo alle persone di diffondere e migliorare rapidamente i progetti. Inoltre, rispetto al closed source, offre agli utenti la possibilità di controllare la propria attività informatica. Ad esempio, un'azienda che utilizza software open source ha la possibilità di assumere qualcuno per apportare miglioramenti personalizzati al software, piuttosto che affidarsi esclusivamente alle decisioni di un fornitore di prodotti closed source.

### Perché la gente sceglie di rendere il proprio lavoro open source?

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/kentcdodds?s=180" class="pquote-avatar" alt="avatar">
  Una delle esperienze più gratificanti derivate dall'uso e dal contribuire a progetti open source è la realzione che si crea con altri sviluppatori che affrontano i tuoi stessi problemi.
  <p markdown="1" class="pquote-credit">
— @kentcdodds, ["How getting into Open Source has been awesome for me"](https://kentcdodds.com/blog/how-getting-into-open-source-has-been-awesome-for-me)
  </p>
</aside>

[Ci sono varie ragioni](https://ben.balter.com/2015/11/23/why-open-source/) per cui una persona o un'organizzazione vorrebe rendere open source un progetto. Alcuni esempi sono:

* **Collaborazione:**  I progetti open source possono accettare modifiche da chiunque nel mondo. [Exercism](https://github.com/exercism/), ad esempio, è una piattaforma di esercizi di programmazione con oltre 350 collaboratori.

* **Adozione e remix:** I progetti open source possono essere utilizzati da chiunque per quasi tutti gli scopi. Le persone possono anche usarli per costruire altre cose. [WordPress](https://github.com/WordPress), per esempio, è nato come fork di un progetto esistente chiamato [b2](https://github.com/WordPress/book/blob/HEAD/Content/Part%201/2-b2-cafelog.md).

* **Trasparenza:** Chiunque può ispezionare un progetto open source alla ricerca di errori o incoerenze. La trasparenza è importante per governi come la Bulgaria o gli Stati Uniti, per industrie regolamentate come quelle bancarie o sanitarie e per software di sicurezza come [Let's Encrypt](https://github.com/letsencrypt).

L'open source non riguarda solo il software. Si può aprire tutto, dai set di dati ai libri. Consulta [GitHub Explore](https://github.com/explore) per avere un'idea di cos'altro si può fare con l'open source.

### Open source significa "gratuito"?

Una delle maggiori attrattive dell'open source è che non ha costi. La "gratuità", tuttavia, è un sottoprodotto del valore complessivo dell'open source.

Poiché una licenza [open source prevede](https://opensource.org/osd-annotated) che chiunque possa utilizzare, modificare e condividere il progetto per quasi tutti gli scopi, i progetti stessi tendono a essere gratuiti. Se l'utilizzo del progetto costasse, chiunque potrebbe legalmente farne una copia e utilizzare la versione gratuita.

Di conseguenza, la maggior parte dei progetti open source sono gratuiti, ma "gratuito" non fa parte della definizione di open source. Esistono modi per far pagare i progetti open source indirettamente, attraverso licenze doppie o funzionalità limitate, pur rispettando la definizione ufficiale di open source.

## Dovrei lanciare un mio progetto open source?

La risposta breve è sì, perché a prescindere dal risultato, lanciare il proprio progetto è un ottimo modo per imparare come funziona l'open source.

Se non avete mai lanciato un progetto open source prima d'ora, potreste essere nervosi per quello che dirà la gente o se qualcuno se ne accorgerà mai. Se questo vi sembra il vostro caso, non siete soli!

Il lavoro open source è come qualsiasi altra attività creativa, che si tratti di scrittura o di pittura. Può far paura condividere il proprio lavoro con il mondo, ma l'unico modo per migliorare è fare pratica, anche se non si ha un pubblico.

Se non siete ancora convinti, prendetevi un momento per pensare a quali potrebbero essere i vostri obiettivi.

### Stabilire gli obiettivi

Gli obiettivi possono aiutarvi a capire su cosa lavorare, a cosa dire di no e dove avete bisogno dell'aiuto di altri. Iniziate a chiedervi: _perché sto facendo open sourcing di questo progetto?_

Non esiste una risposta giusta a questa domanda. Potreste avere più obiettivi per un singolo progetto, o progetti diversi con obiettivi diversi.

Se il vostro unico obiettivo è quello di mettere in mostra il vostro lavoro, potreste anche non volere contributi e dirlo nel vostro README. D'altra parte, se si vogliono contributi, si investirà tempo in una documentazione chiara e nel far sentire i nuovi arrivati i benvenuti.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/mavris?s=180" class="pquote-avatar" alt="avatar">
  Ad un certo punto ho creato una UIAlertView personalizzata che stavo usando... e ho deciso di renderla open source. Così l'ho modificata per renderla più dinamica e l'ho caricata su GitHub. Ho anche scritto la mia prima documentazione, spiegando ad altri sviluppatori come utilizzarla nei loro progetti. Probabilmente nessuno l'ha mai usato perché era un progetto semplice, ma mi sentivo bene per il mio contributo.
  <p markdown="1" class="pquote-credit">
— @mavris, ["Self-taught Software Developers: Why Open Source is important to us"](https://medium.com/rocknnull/self-taught-software-engineers-why-open-source-is-important-to-us-fe2a3473a576)
  </p>
</aside>

Man mano che il vostro progetto cresce, la vostra comunità potrebbe avere bisogno di qualcosa di più del vostro codice. Rispondere ai problemi, rivedere il codice e promuovere il progetto sono tutti compiti importanti in un progetto open source.

Sebbene la quantità di tempo da dedicare alle attività non legate al codice dipenda dalle dimensioni e dalla portata del progetto, in qualità di manutentori dovreste essere pronti ad affrontarle da soli o a trovare qualcuno che vi aiuti.

**Se fate parte di un'azienda che ha un progetto in open sourcing**, assicuratevi che il vostro progetto abbia le risorse interne di cui ha bisogno per prosperare. Dovrete identificare chi è responsabile della manutenzione del progetto dopo il lancio e come condividerete questi compiti con la vostra comunità.

Se avete bisogno di un budget dedicato o di personale per la promozione, le operazioni e la manutenzione del progetto, iniziate subito a parlarne.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/captainsafia?s=180" class="pquote-avatar" alt="avatar">
  Quando si inizia a rendere open source il progetto, è importante assicurarsi che i processi di gestione tengano conto dei contributi e delle capacità della comunità intorno al progetto. Non abbiate paura di coinvolgere collaboratori che non lavorano nella vostra azienda in aspetti chiave del progetto, soprattutto se si tratta di collaboratori abituali.
  <p markdown="1" class="pquote-credit">
— @captainsafia, ["So you wanna open source a project, eh?"](https://dev.to/captainsafia/so-you-wanna-open-source-a-project-eh-5779)
  </p>
</aside>

### Contribuire ad altri progetti

Se il vostro obiettivo è imparare a collaborare con gli altri o capire come funziona l'open source, prendete in considerazione la possibilità di contribuire a un progetto esistente. Iniziate con un progetto che già utilizzate e amate. Contribuire a un progetto può essere semplice come correggere errori di battitura o aggiornare la documentazione.

Se non siete sicuri di come iniziare a contribuire, consultate la nostra guida [Come contribuire all'open source](../how-to-contribute/).

## Lanciare il proprio progetto open source

Non esiste un momento ideale per rendere open source il proprio lavoro. Si può aprire un'idea, un lavoro in corso o dopo anni di chiusura.

In generale, dovreste aprire il vostro progetto quando vi sentite a vostro agio nel far vedere il vostro lavoro ad altri e nel fornire un feedback.

Indipendentemente dalla fase in cui si decide di rendere open source il progetto, ogni progetto dovrebbe includere la seguente documentazione:

* [Licenza open source](https://help.github.com/articles/open-source-licensing/#where-does-the-license-live-on-my-repository)
* [README](https://help.github.com/articles/create-a-repo/#commit-your-first-change)
* [Linee guida per la contribuzione](https://help.github.com/articles/setting-guidelines-for-repository-contributors/)
* [Codice di condotta](../code-of-conduct/)

In qualità di manutentori, questi componenti vi aiuteranno a comunicare le aspettative, a gestire i contributi e a proteggere i diritti legali di tutti (compresi i vostri). Aumentano notevolmente le possibilità di avere un'esperienza positiva.

Se il vostro progetto è su GitHub, inserire questi file nella vostra directory principale con i nomi dei file raccomandati aiuterà GitHub a riconoscerli e a farli apparire automaticamente ai vostri lettori.

### Scelta della licenza

Una licenza open source garantisce che altri possano usare, copiare, modificare e contribuire al vostro progetto senza ripercussioni. Inoltre, vi protegge da situazioni legali spinose. **È necessario includere una licenza quando si lancia un progetto open source**.

Il lavoro legale non è divertente. La buona notizia è che potete copiare e incollare una licenza esistente nel vostro repository. Ci vorrà solo un minuto per proteggere il vostro duro lavoro.

[MIT](https://choosealicense.com/licenses/mit/), [Apache 2.0](https://choosealicense.com/licenses/apache-2.0/), y [GPLv3](https://choosealicense.com/licenses/gpl-3.0/) sono le licenze più diffuse, ma ci sono [altre opzioni](https://choosealicense.com) da poter scegliere.

Quando si crea un nuovo progetto su GitHub, viene data la possibilità di selezionare una licenza. Includendo una licenza open source, il progetto GitHub diventa open source.

[Devi scegliere una licenza!](/assets/images/starting-a-project/repository-license-picker.png)

Se avete altre domande o dubbi sugli aspetti legali della gestione di un progetto open source, [siamo a vostra disposizione](../legal/).

### Scrivere un README

I README non si limitano a spiegare come utilizzare il progetto. Spiegano anche perché il progetto è importante e cosa possono fare gli utenti con esso.

Nel vostro README, cercate di rispondere alle seguenti domande:

* Cosa fa questo progetto?
* Perché questo progetto è utile?
* Come posso iniziare?
* Dove posso trovare ulteriore aiuto, se ne ho bisogno?

Potete usare il vostro README per rispondere ad altre domande, come ad esempio come gestite i contributi, quali sono gli obiettivi del progetto e le informazioni su licenze e attribuzione. Se non volete accettare contributi o se il vostro progetto non è ancora pronto per la produzione, scrivete queste informazioni.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/tracymakes?s=180" class="pquote-avatar" alt="avatar">
  Una documentazione migliore significa più utenti, meno richieste di assistenza e più collaboratori. (...) Ricordate che i vostri lettori non sono voi. Ci sono persone che possono arrivare a un progetto con esperienze completamente diverse.
  <p markdown="1" class="pquote-credit">
— @tracymakes, ["Writing So Your Words Are Read (video)"](https://www.youtube.com/watch?v=8LiV759Bje0&list=PLmV2D6sIiX3U03qc-FPXgLFGFkccCEtfv&index=10)
  </p>
</aside>

A volte si evita di scrivere un README perché si ha l'impressione che il progetto sia incompiuto o perché non si vogliono contributi. Queste sono tutte ottime ragioni per scriverne uno.

Per avere maggiore ispirazione, provate a usare la guida ["Make a README"](https://www.makeareadme.com/) di @dguo o il [modello README](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2) di @PurpleBooth per scrivere un README completo.

Quando si include un file README nella directory principale, GitHub lo visualizza automaticamente nella homepage del repository.

### Scrivere le linee guida per la contribuzione

Un file CONTRIBUTING indica al pubblico come partecipare al progetto. Ad esempio, si possono includere informazioni su:

* Come presentare una segnalazione di bug (provate a usare i modelli di issue e pull request)
* Come suggerire una nuova funzionalità
* Come configurare l'ambiente ed eseguire i test

Oltre ai dettagli tecnici, un file CONTRIBUTING è un'opportunità per comunicare le vostre aspettative sui contributi, come ad esempio:

* I tipi di contributi che state cercando
* La vostra roadmap o visione del progetto
* Come i collaboratori devono (o non devono) mettersi in contatto con voi.
L
'uso di un tono cordiale e amichevole e l'offerta di suggerimenti specifici per i contributi (come la stesura della documentazione o la creazione di un sito web) possono contribuire a far sentire i nuovi arrivati benvenuti ed entusiasti di partecipare.

Ad esempio, [Active Admin](https://github.com/activeadmin/activeadmin/) inizia [la sua guida  a contribuire ](https://github.com/activeadmin/activeadmin/blob/HEAD/CONTRIBUTING.md) con:

> Innanzitutto, grazie per aver pensato di contribuire ad Active Admin. Sono le persone come voi che rendono Active Admin uno strumento così grande.
Nelle prime fasi del progetto, il file CONTRIBUTING può essere semplice. Dovreste sempre spiegare come segnalare i bug o i problemi dei file e tutti i requisiti tecnici (come i test) per dare un contributo.

Col tempo, potreste aggiungere altre domande frequenti al vostro file CONTRIBUTING. Scrivere queste informazioni significa ridurre il numero di persone che vi porranno sempre le stesse domande.

Per maggiori informazioni sulla stesura del file di CONTRIBUTO, consultare il [modello di guida](https://github.com/nayafia/contributing-template/blob/HEAD/CONTRIBUTING-template.md) per i contributi di @nayafia o ["Come costruire un file CONTRIBUTING.md"](https://mozillascience.github.io/working-open-workshop/contributing/) di @mozilla.

Collega il file CONTRIBUTING al file README, in modo che più persone lo vedano. Se si [inserisce il file CONTRIBUTING nel repository del progetto](https://help.github.com/articles/setting-guidelines-for-repository-contributors/), GitHub collegherà automaticamente il file quando un collaboratore crea un problema o apre una richiesta di pull.

![Linee guida per la contribuzione](/assets/images/starting-a-project/Contributing-guidelines.jpg)

### Stabilire un codice di condotta

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/mlynch?s=180" class="pquote-avatar" alt="avatar">
  Tutti noi abbiamo avuto esperienze in cui ci siamo trovati di fronte a quello che probabilmente era un abuso, sia come manutentori che cercavano di spiegare perché qualcosa doveva essere in un certo modo, sia come utenti... che facevano una semplice domanda. (...) Un codice di condotta diventa un documento facilmente consultabile e collegabile che indica che il vostro team prende molto seriamente il discorso costruttivo.
  <p markdown="1" class="pquote-credit">
— @mlynch, ["Making Open Source a Happier Place"](https://medium.com/ionic-and-the-mobile-web/making-open-source-a-happier-place-3b90d254f5f)
  </p>
</aside>

Infine, un codice di condotta aiuta a stabilire le regole di base per il comportamento dei partecipanti al progetto. Questo è particolarmente utile se state lanciando un progetto open source per una comunità o un'azienda. Un codice di condotta vi consente di facilitare un comportamento sano e costruttivo della comunità, riducendo il vostro stress come manutentori.

Per maggiori informazioni, consultate la nostra guida al [Codice di condotta](../code-of-conduct/).

Oltre a comunicare _come ci si aspetta_ che i partecipanti si comportino, un codice di condotta tende anche a descrivere a chi si applicano queste aspettative, quando si applicano e cosa fare in caso di violazione.

Come per le licenze open source, esistono anche standard emergenti per i codici di condotta, per cui non è necessario scriverne uno proprio. Il [Contributor Covenant](https://www.contributor-covenant.org/) è un codice di condotta che viene utilizzato da oltre [40.000 progetti](https://www.contributor-covenant.org/adopters) open source, tra cui Kubernetes, Rails e Swift. Indipendentemente dal testo utilizzato, dovrete essere pronti a far rispettare il vostro codice di condotta quando necessario.

Incollate il testo direttamente in un file CODE_OF_CONDUCT nel vostro repository. Mantenete il file nella cartella principale del progetto, in modo che sia facile da trovare, e collegatelo al file dal vostro README.

## Nome e branding del progetto

Il branding è molto più di un logo appariscente o di un nome accattivante per un progetto. Riguarda il modo in cui parlate del vostro progetto e chi raggiungete con il vostro messaggio.

### Scegliere il nome giusto

Scegliete un nome che sia facile da ricordare e che, idealmente, dia un'idea di ciò che il progetto fa. Ad esempio:

* [Sentry](https://github.com/getsentry/sentry) monitora le applicazioni per segnalare gli arresti anomali
* [Thin](https://github.com/macournoyer/thin) è un server web Ruby semplice e veloce

Se si sta lavorando su un progetto esistente, usare il suo nome come prefisso può aiutare a chiarire cosa fa il progetto (per esempio, [node-fetch](https://github.com/bitinn/node-fetch) porta `window.fetch` su Node.js).

Considerate la chiarezza prima di tutto. I giochi di parole sono divertenti, ma ricordate che alcune battute potrebbero non essere adatte ad altre culture o a persone con esperienze diverse dalle vostre. Alcuni dei vostri potenziali utenti potrebbero essere dipendenti dell'azienda: non vorrete metterli a disagio quando dovranno spiegare il vostro progetto al lavoro!

### Evitare i conflitti di nome

Controllate se ci sono progetti open source con un nome simile, soprattutto se condividete la stessa lingua o lo stesso ecosistema. Se il vostro nome si sovrappone a un progetto esistente molto popolare, potreste confondere il vostro pubblico.

Se volete un sito web, un account Twitter o altre proprietà che rappresentino il vostro progetto, assicuratevi di poter ottenere i nomi che desiderate. L'ideale sarebbe [riservare questi nomi fin da ora](https://instantdomainsearch.com), anche se non avete intenzione di usarli subito.

Assicuratevi che il nome del vostro progetto non violi alcun marchio. Un'azienda potrebbe chiedervi di togliere il vostro progetto in un secondo momento o addirittura intraprendere un'azione legale contro di voi. Non vale la pena rischiare.

Potete controllare il [Global Brand Database](http://www.wipo.int/branddb/en/)dell'OMPI per verificare la presenza di conflitti tra marchi. Se siete un'azienda, questo è uno degli aspetti che il vostro team [legale](../legal/) può aiutarvi a risolvere.

Infine, fate una rapida ricerca su Google per il nome del vostro progetto. Le persone saranno in grado di trovare facilmente il vostro progetto? Nei risultati della ricerca compare qualcosa di diverso che non vorreste vedere?

### Anche il modo in cui scrivete (e codificate) influisce sul vostro marchio!

Durante la vita del vostro progetto, scriverete molto: README, tutorial, documenti della comunità, risposte a problemi, forse anche newsletter e mailing list.

Che si tratti di documentazione ufficiale o di un'email casuale, il vostro stile di scrittura fa parte del marchio del vostro progetto. Considerate come potreste apparire al vostro pubblico e se questo è il tono che volete trasmettere.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/janl?s=180" class="pquote-avatar" alt="avatar">
  Ho cercato di partecipare a ogni discussione della mailing list, mostrando un comportamento esemplare, essendo gentile con le persone, prendendo sul serio i loro problemi e cercando di essere utile nel complesso. Dopo un po', le persone si sono fermate non solo per fare domande, ma anche per aiutare a rispondere e, con mia grande gioia, hanno imitato il mio stile.
  <p markdown="1" class="pquote-credit">
— @janl on [CouchDB](https://github.com/apache/couchdb), ["Sustainable Open Source"](https://web.archive.org/web/20200723213552/https://writing.jan.io/2015/11/20/sustainable-open-source.html)
  </p>
</aside>

L'uso di un linguaggio caldo e inclusivo (come "loro", anche quando ci si riferisce a una singola persona) può contribuire a rendere il vostro progetto accogliente per i nuovi collaboratori. Attenetevi a un linguaggio semplice, poiché molti dei vostri lettori potrebbero non essere di madrelingua inglese.

Oltre al modo in cui scrivete le parole, anche il vostro stile di codifica può diventare parte del marchio del vostro progetto. [Angular](https://github.com/johnpapa/angular-styleguide) e [jQuery](https://contribute.jquery.org/style-guide/js/) sono due esempi di progetti con stili di codifica e linee guida rigorosi.

Non è necessario scrivere una guida di stile per il vostro progetto quando siete agli inizi, e potreste scoprire che vi piace incorporare diversi stili di codifica nel vostro progetto. Tuttavia, dovreste prevedere come il vostro stile di scrittura e di codifica possa attrarre o scoraggiare diversi tipi di persone. Le prime fasi del progetto sono l'occasione per creare il precedente che desiderate.

## La vostra lista di controllo pre-lancio

Siete pronti a rendere open source il vostro progetto? Ecco una lista di controllo per aiutarvi. Selezionate tutte le caselle? Siete pronti a partire! Fate clic su ["pubblica"](https://help.github.com/articles/making-a-private-repository-public/) e datevi una pacca sulla spalla.

**Documentazione**

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox1" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox1" class="overflow-hidden d-block text-normal">
    Il progetto ha un file LICENSE con una licenza open source.
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox2" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox2" class="overflow-hidden d-block text-normal">
    Il progetto ha una documentazione basica (README, CODE_OF_CONDUCT, CONTRIBUTE).
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox3" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox3" class="overflow-hidden d-block text-normal">
    Il nome è facile da ricordare, dà un'idea di ciò che il progetto fa e non ha conflitti con progetti preesistenti ne marchi registrati.
  </label>
</div>

<div class="clearfix mb-4">
  <input type="checkbox" id="cbox4" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox4" class="overflow-hidden d-block text-normal">
    La coda dei problemi è aggiornata, organizzata ed etichettata.
  </label>
</div>

**Codice**

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox5" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox5" class="overflow-hidden d-block text-normal">
    I progetti utilizzano convenzioni di codice consistente e nomi chiari di funzioni/metodi/variabili.
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox6" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox6" class="overflow-hidden d-block text-normal">
    Il codice è commentatio chiaramente, documentando le intenzioni e i casi limite
  </label>
</div>

<div class="clearfix mb-4">
  <input type="checkbox" id="cbox7" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox7" class="overflow-hidden d-block text-normal">
    Non ci sono materiali sensibili nella storia delle revisioni, nei problemi e nelle pull requests (ad esempio, password e altre informazioni non pubbliche)
  </label>
</div>

**Persone**

Se sei un individuo:

<div class="clearfix mb-4">
  <input type="checkbox" id="cbox8" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox8" class="overflow-hidden d-block text-normal">
    Hai parlato con il dipartimento legale e capito le policy open source della tua azienda (se sei impiegato)
  </label>
</div>

Se sei un'azienda o un'organizzione:

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox9" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox9" class="overflow-hidden d-block text-normal">
    Hai parlato con il tuo dipartimento legale
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox10" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox10" class="overflow-hidden d-block text-normal">
    Hai un piano di marketing per annunciare e promuovere il tuo progetto
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox11" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox11" class="overflow-hidden d-block text-normal">
    Qualcuno è adibido a gestire le interazioni con la community (rispondendo ai problemi, revisionando e approvando le pull request)
  </label>
</div>

<div class="clearfix mb-4">
  <input type="checkbox" id="cbox12" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox12" class="overflow-hidden d-block text-normal">
    Almeno due persone hanno accessi amministrativi al progetto
  </label>
</div>

## Ce l'hai fatta!

Congratulazioni per l'open sourcing del vostro primo progetto. Indipendentemente dal risultato, lavorare in pubblico è un dono per la comunità. Con ogni commit, commento e richiesta di pull, create opportunità di apprendimento e di crescita per voi e per gli altri.