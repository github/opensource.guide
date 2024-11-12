---
lang: it
title: Leadership e governo
description: I progetti open source in crescita possono trarre vantaggio da regole formali per prendere decisioni.
class: leadership
order: 6
image: /assets/images/cards/leadership.png
related:
  - best-practices
  - metrics
---

## Comprendere la gestione del tuo progetto in crescita

Il tuo progetto sta crescendo, le persone sono coinvolte e tu ti impegni a mantenere questa cosa. A questo punto, ti starai chiedendo come includere contributori regolari al progetto nel tuo flusso di lavoro, sia che si tratti di fornire accesso al commit o di risolvere i dibattiti della comunità. Se hai domande, abbiamo le risposte.

## Quali sono esempi di ruoli formali utilizzati nei progetti open source?

Molti progetti seguono una struttura simile per quanto riguarda i ruoli dei contributori e il riconoscimento.

Il significato effettivo di questi ruoli, tuttavia, dipende interamente da te. Ecco alcuni tipi di ruoli che potresti riconoscere:

* **Supporto**
* **Associato**
* **Committente**

**Per alcuni progetti, i "sostenitori"** sono le uniche persone in un progetto con accesso come commit. In altri progetti, sono semplicemente le persone elencate nel README come manutentori.

Un manutentore non deve essere qualcuno che scrive il codice per il tuo progetto. Potrebbe essere qualcuno che ha svolto molto lavoro per evangelizzare il tuo progetto o documentazione scritta che ha reso il progetto più accessibile agli altri. Indipendentemente da ciò che fa quotidianamente, un manutentore è probabilmente qualcuno che si sente responsabile della direzione del progetto e si impegna a migliorarlo.

Un **"Collaboratore" può essere chiunque** commenti un problema o una richiesta pull, persone che aggiungono valore al progetto (che si tratti di valutare problemi, scrivere codice o organizzare eventi) o chiunque abbia una richiesta pull combinata (magari la definizione più ristretta di contributore).

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/mikeal?s=180" class="pquote-avatar" alt="avatar">
  \[Per Node.js,\] ogni persona che sembra commentare un problema o inviare codice è un membro della comunità del progetto. Il solo fatto di poterli vedere significa che hanno superato il limite da utente a collaboratore.
  <p markdown="1" class="pquote-credit">
— @mikeal, ["Healthy Open Source"](https://medium.com/the-javascript-collection/healthy-open-source-967fa8be7951)
  </p>
</aside>

**Il termine "agente"** può essere utilizzato per distinguere l'accesso all'impegno, che è un tipo specifico di responsabilità, da altre forme di contributo.

Sebbene tu possa definire i ruoli del tuo progetto come desideri, [considera l'utilizzo di definizioni più ampie](../how-to-contribute/#cosa-significa-contribuire) per incoraggiare più forme di contributo. Puoi utilizzare i ruoli di leadership per riconoscere formalmente le persone che hanno apportato contributi eccezionali al tuo progetto, indipendentemente dalle loro competenze tecniche.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/jacobian?s=180" class="pquote-avatar" alt="avatar">
  Potresti conoscermi come l'"inventore" di Django... ma in realtà sono la persona che è stata assunta per lavorare su qualcosa un anno dopo che era già stato realizzato. (...) La gente sospetta che io abbia successo grazie alle mie capacità di programmazione... ma nella migliore delle ipotesi sono un programmatore medio.
  <p markdown="1" class="pquote-credit">
— @jacobian, ["Nota chiave di PyCon 2015" (video)](https://www.youtube.com/watch?v=hIJdFxYlEKE#t=5m0s)
  </p>
</aside>

## Come formalizzo questi ruoli di leadership?

Formalizzare i ruoli di leadership aiuta le persone a sentirsi proprietarie e dice agli altri membri della comunità a chi rivolgersi per chiedere aiuto.

Per un progetto più piccolo, designare i leader può essere semplice come aggiungere i loro nomi al file di testo README o CONTRIBUTORS.

Per un progetto più ampio, se hai un sito web, crea una pagina del team o elenca lì i tuoi project manager. Ad esempio, [Postgres](https://github.com/postgres/postgres/) ha una [pagina completa del team](https://www.postgresql.org/community/contributors/) con brevi profili di ciascun contributore.

Se il tuo progetto ha una comunità di contributori molto attiva, puoi formare un "core team" di manutentori o anche sottocomitati di persone che si assumono la responsabilità di diverse aree problematiche (ad esempio sicurezza, classificazione dei problemi o comportamento della comunità). Consentire alle persone di auto-organizzarsi e fare volontariato per i ruoli che li appassionano di più, piuttosto che esternalizzarli.

<aside markdown="1" class="pquote">
  \[Noi\] integriamo la squadra principale con diverse "sotto-squadre". Ogni sottoteam si concentra su un'area specifica, come la progettazione del linguaggio o le biblioteche. (...) Per garantire un coordinamento globale e una visione forte e coerente per il progetto nel suo insieme, ogni sotto-team è guidato da un membro del team principale.
  <p markdown="1" class="pquote-credit">
— ["RFC per la gestione di Rust"](https://github.com/rust-lang/rfcs/blob/HEAD/text/1068-rust-governance.md)
  </p>
</aside>

I team dirigenti potrebbero voler creare un canale designato (come su IRC) o incontrarsi regolarmente per discutere del progetto (come su Gitter o Google Hangout). Puoi anche rendere pubbliche queste riunioni in modo che altre persone possano ascoltarle. [Cucumber-ruby](https://github.com/cucumber/cucumber-ruby), ad esempio, [prende ore di lavoro ogni settimana](https://github.com/cucumber/cucumber-ruby/blob/HEAD/CONTRIBUTING.md#talking-with-other-devs).

Una volta stabiliti i ruoli di leadership, assicurati di documentare come le persone possono raggiungerli! Stabilisci un processo chiaro su come qualcuno può diventare un sostenitore o unirsi a un sottocomitato nel tuo progetto e scrivilo nel tuo GOVERNANCE.md.

Strumenti come [Vossibility](https://github.com/icecrime/vossibility-stack) possono aiutarti a tenere traccia pubblicamente chi sta (o non sta) contribuendo al progetto. Documentare queste informazioni evita la percezione della comunità secondo cui i manutentori sono una cricca che prende le proprie decisioni in privato.

Infine, se il tuo progetto è su GitHub, valuta la possibilità di spostare il progetto dal tuo account personale a un'organizzazione e di aggiungere almeno un amministratore di backup. [GitHub Organizations](https://help.github.com/articles/creating-a-new-organization-account/) semplifica la gestione delle autorizzazioni e di più repository e protegge l'eredità del tuo progetto tramite [proprietà condivisa](../building-community/#condividi-la-proprietà-del-tuo-progetto).

## Quando dovrei dare a qualcuno l'accesso per impegnarsi?

Alcune persone pensano che dovresti dare accesso al coinvolgimento a tutti coloro che danno un contributo. Ciò può incoraggiare più persone a sentirsi proprietarie del tuo progetto.

D'altra parte, soprattutto per progetti più grandi e complessi, potresti voler concedere l'accesso al coinvolgimento solo alle persone che hanno dimostrato il proprio impegno. Non esiste un modo giusto per farlo: fai ciò che ti fa sentire più a tuo agio!

Se il tuo progetto è su GitHub, puoi utilizzare [rami protetti](https://help.github.com/articles/about-protected-branches/) per gestire chi può puntare a un particolare ramo e in quali circostanze.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/felixge?s=180" class="pquote-avatar" alt="avatar">
  Ogni volta che qualcuno ti invia una richiesta pull, consentigli l'accesso al tuo progetto. Anche se all'inizio può sembrare incredibilmente sciocco, l'utilizzo di questa strategia ti consentirà di liberare il vero potere di GitHub. (...) Una volta che le persone hanno accesso al commit, non si preoccupano più che la loro correzione possa essere disgregata... il che li porta a dedicarci molto più lavoro.
  <p markdown="1" class="pquote-credit">
— @felixge, ["Хакът на заявка за изтегляне"](https://felixge.de/2013/03/11/the-pull-request-hack.html)
  </p>
</aside>

## Quali sono alcune delle strutture di governance comuni per i progetti open source?

Esistono tre strutture di governance generale associate ai progetti open source.

* **BDFL:** BDFL sta per "Dittatore benevolo per la vita". In questa struttura, una persona (di solito l'autore originale del progetto) ha l'ultima parola su tutte le principali decisioni del progetto. [Python](https://github.com/python) è un classico esempio. I progetti più piccoli probabilmente utilizzano BDFL per impostazione predefinita perché ci sono solo uno o due manutentori. Anche un progetto che nasce da un'azienda può rientrare nella categoria BDFL.

* **Meritocrazia:** (Nota: il termine "meritocrazia" ha connotazioni negative per alcune comunità e ha una [storia sociale e politica complessa](http://geekfeminism.wikia.com/wiki/Meritocracy).) ** Nella meritocrazia ai partecipanti attivi al progetto (coloro che dimostrano "merito") viene assegnato un ruolo decisionale formale. Le decisioni vengono solitamente prese sulla base del voto per puro consenso. Il concetto di meritocrazia è stato introdotto dalla [Fondazione Apache](https://www.apache.org/); [tutti i progetti Apache](https://www.apache.org/index.html#projects-list) sono meritocrazie. I contributi possono essere versati solo da individui che rappresentano se stessi e non da un'azienda.

* **Contributo liberale:** In un modello di contribuzione liberale, le persone che lavorano di più sono riconosciute come le più influenti, ma questo si basa sul lavoro attuale, non sul contributo storico. Le decisioni sui grandi progetti vengono prese sulla base di un processo di ricerca del consenso (discussione delle principali lamentele) piuttosto che sul puro voto, e cercano di includere quante più prospettive comunitarie possibile. Esempi popolari di progetti che utilizzano un modello di contribuzione liberale includono [Node.js](https://foundation.nodejs.org/) e [Rust](https://www.rust-lang.org/).

Quale dovresti usare? Sta a te! Ogni modello presenta vantaggi e compromessi. E anche se a prima vista possono sembrare molto diversi, tutti e tre i modelli hanno più cose in comune di quanto sembri. Se sei interessato ad adottare uno di questi modelli, dai un'occhiata a questi modelli:

* [BDFL model template](http://oss-watch.ac.uk/resources/benevolentdictatorgovernancemodel)
* [Meritocracy model template](http://oss-watch.ac.uk/resources/meritocraticgovernancemodel)
* [Node.js's liberal contribution policy](https://medium.com/the-node-js-collection/healthy-open-source-967fa8be7951)

## Ho bisogno di documenti gestionali quando inizio il mio progetto?

Non esiste un momento giusto per scrivere la gestione del tuo progetto, ma è molto più semplice definirlo una volta che hai visto svolgersi le dinamiche della tua comunità. La parte migliore (e più difficile) della gestione open source è che è modellata dalla comunità!

Tuttavia, alcuni dei primi documenti contribuiranno inevitabilmente alla gestione del progetto, quindi inizia a registrare ciò che puoi. Ad esempio, puoi definire aspettative chiare sul comportamento o sul funzionamento del processo di collaborazione, anche all'inizio del tuo progetto.

Se fai parte di un'azienda che lancia un progetto open source, vale la pena tenere una discussione interna prima del lancio su come la tua azienda prevede di supportare e prendere decisioni sui progressi del progetto. Potresti anche voler spiegare pubblicamente qualcosa di specifico su come la tua azienda sarà (o non sarà!) coinvolta nel progetto.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/caabernathy?s=180" class="pquote-avatar" alt="avatar">
  Assegniamo a piccoli team la gestione dei progetti GitHub che effettivamente lavorano su di essi su Facebook. Ad esempio, React è gestito da un ingegnere React.
  <p markdown="1" class="pquote-credit">
— @caabernathy, ["An inside look at open source at Facebook"](https://opensource.com/life/15/10/ato-interview-christine-abernathy-facebook)
  </p>
</aside>

## Cosa succede se i dipendenti aziendali iniziano a inviare contributi?

I progetti open source di successo vengono utilizzati da molte persone e aziende e alcune aziende potrebbero finire per avere flussi di entrate che sono in definitiva legati al progetto. Ad esempio, un'azienda può utilizzare il codice di progetto come componente nell'offerta di un servizio commerciale.

Man mano che il progetto diventa più diffuso, le persone con esperienza in esso diventano più richieste: potresti essere uno di loro! - e talvolta verranno pagati per il lavoro svolto sul progetto.

È importante considerare l'attività commerciale come una cosa normale e semplicemente come un'altra fonte di energia per lo sviluppo. Naturalmente, gli sviluppatori pagati non dovrebbero ricevere un trattamento speciale rispetto a quelli non pagati; ogni contributo dovrebbe essere giudicato in base ai suoi meriti tecnici. Tuttavia, le persone dovrebbero sentirsi a proprio agio nell'impegnarsi in attività commerciali e sentirsi a proprio agio nel citare i propri casi d'uso quando si discute a favore di un particolare miglioramento o funzionalità.

"Commerciale" è pienamente compatibile con "open source". "Commerciale" significa semplicemente che da qualche parte sono coinvolti dei soldi, che il software viene utilizzato commercialmente, il che è sempre più probabile man mano che un progetto ottiene l'accettazione. (Quando il software open source viene utilizzato come parte di un prodotto non open source, il prodotto complessivo è ancora software "proprietario", sebbene, come l'open source, possa essere utilizzato per scopi commerciali e non commerciali.)

Come chiunque altro, gli sviluppatori motivati ​​dal punto di vista commerciale ottengono influenza nel progetto attraverso la qualità e la quantità del loro contributo. Ovviamente, un programmatore che viene pagato per il suo tempo può essere in grado di guadagnare più di qualcuno che non lo fa, ma va bene così: il pagamento è solo uno dei tanti possibili fattori che possono influenzare quanto qualcuno guadagna. Mantieni le discussioni del tuo progetto focalizzate sul contributo, non sui fattori esterni che consentono alle persone di dare quel contributo.

## Ho bisogno di una persona giuridica per sostenere il mio progetto?

Non hai bisogno di un'entità legale per supportare il tuo progetto open source a meno che non gestisci denaro.

Ad esempio, se desideri avviare un'attività commerciale, ti consigliamo di costituire una C Corp o LLC (se risiedi negli Stati Uniti). Se stai solo lavorando a un contratto relativo al tuo progetto open source, puoi accettare denaro come unico proprietario o formare una LLC (se risiedi negli Stati Uniti).

Se desideri accettare donazioni per il tuo progetto open source, puoi impostare un pulsante di donazione (utilizzando PayPal o Stripe, ad esempio), ma il denaro non sarà deducibile dalle tasse a meno che tu non sia un'organizzazione no-profit qualificata (501c3, se sei sono negli Stati Uniti).

Molti progetti non vogliono prendersi la briga di creare un'organizzazione no-profit, quindi trovano invece uno sponsor fiscale senza scopo di lucro. Uno sponsor fiscale accetta donazioni per tuo conto, solitamente in cambio di una percentuale della donazione. [Software Freedom Conservancy](https://sfconservancy.org/), [Apache Foundation](https://www.apache.org/), [Eclipse Foundation](https://eclipse.org/org/foundation/), [Linux Foundation](https://www.linuxfoundation.org/projects) e [Open Collective](https://opencollective.com/opensource) sono esempi di organizzazioni che fungono da sponsor fiscali per progetti open source.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/piamancini?s=180" class="pquote-avatar" alt="avatar">
  Il nostro obiettivo è fornire infrastrutture che le comunità possano utilizzare per essere autosostenibili, creando così un ambiente in cui tutti — contributori, sostenitori, sponsor — ne traggano benefici concreti.
  <p markdown="1" class="pquote-credit">
— @piamancini, ["Andare oltre la beneficenza"](https://medium.com/open-collective/moving-beyond-the-charity-framework-b1191c33141)
  </p>
</aside>

Se il tuo progetto è strettamente correlato a un particolare linguaggio o ecosistema, potrebbe esserci anche una base software associata con cui puoi lavorare. Ad esempio, la [Python Software Foundation](https://www.python.org/psf/) aiuta a supportare [PyPI](https://pypi.org/), il gestore pacchetti Python e [Node.js Foundation] (https://foundation.nodejs.org/) aiuta a mantenere [Express.js](https://expressjs.com/), un framework basato su Node.
