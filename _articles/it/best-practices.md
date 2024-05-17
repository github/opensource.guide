---
lang: it
title: Buone pratiche per i manutentori del codice.
description: Semplificarti la vita come sostenitore dell'open source, dal processo di documentazione fino a ottenere il massimo dalla community.
class: best-practices
order: 5
image: /assets/images/cards/best-practices.png
related:
  - metrics
  - leadership
---

## Cosa significa essere un manutentore del codice?

Se il tuo lavoro è mantenere un progetto open source utilizzato da molte persone, probabilmente avrai notato che passi più tempo a rispondere alle domande che a programmare.

Nelle prime fasi di un progetto, trascorri del tempo sperimentando nuove idee e prendendo decisioni in base a ciò che ti piace. Man mano che il tuo progetto cresce in popolarità, ti ritroverai in una situazione in cui lavorerai sempre di più con i tuoi utenti e collaboratori.

Il mantenimento di un progetto richiede molto più del semplice codice. Questi compiti vengono solitamente trascurati, ma sono altrettanto importanti per un progetto in crescita. Abbiamo messo insieme alcune idee che ti semplificheranno la vita, dal processo di documentazione all'ottenimento del massimo dalla community.

## Documentare i tuoi processi

Contrassegnare le procedure è una delle migliori pratiche che puoi seguire come manutentore del codice.

Documentare non solo chiarisce il tuo pensiero, ma aiuta anche gli altri a capire di cosa hai bisogno o cosa ti aspetti senza nemmeno doverlo chiedere.

Tenendo conto dei processi, è più facile per te dire di no quando la proposta di qualcuno non si adatta al tuo contesto. Quindi rende anche più facile per altre persone unirsi e aiutare. Non sai mai chi potrebbe leggere o utilizzare il tuo progetto.

Anche se non sei il tipo che scrive interi paragrafi, annotare i punti chiave è meglio di niente.

### Chiarire la visione del tuo progetto

Inizia scrivendo gli obiettivi del tuo progetto. Aggiungili al tuo file README o crea un file separato chiamato VISION. Se ci sono altri elementi che possono essere d'aiuto, come una mappa di progetto, rendili pubblici.

Avere una visione chiara e documentata ti mantiene concentrato e aiuta a evitare malintesi sull'ambito da parte di altri contributori.

Per esempio:
@lord ha scoperto che avere una visione del progetto lo ha aiutato a capire a quali richieste dare priorità. Essendo un sostenitore del codice alle prime armi, si è lamentato di non essere fedele allo scopo del progetto quando ha ricevuto la tua prima richiesta di funzionalità [Slate](https://github.com/lord/slate).

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/lord?s=180" class="pquote-avatar" alt="avatar">
  Ho provato. Non ho fatto lo sforzo necessario per trovare una soluzione completa. Invece di una soluzione a metà, vorrei aver detto "Non ho tempo per questo adesso, ma aggiungerò la funzionalità al backlog che verrà sviluppato in futuro".
  <p markdown="1" class="pquote-credit">
— @lord, ["Suggerimenti per i sostenitori dell'Open Source"](https://lord.io/blog/2014/oss-tips/)
  </p>
</aside>

### Comunica le tue aspettative

A volte può essere difficile formulare le regole in modo che altre persone possano contribuire. Potresti avere la sensazione di comportarti come un poliziotto o di rovinare il divertimento degli altri.

Tuttavia, le buone regole scritte e applicate in modo equo danno potere ai manutentori del codice. Ti impediscono di farti coinvolgere in cose che non vuoi fare.

La maggior parte delle persone che incontrano il tuo progetto non sanno nulla di te o delle tue circostanze. Potrebbero presumere che tu sia pagato per lavorarci, soprattutto se è qualcosa che usano e da cui dipendono regolarmente. Forse una volta dedicavi molto tempo al tuo progetto, ma ora sei impegnato con un nuovo lavoro o con un membro della famiglia.

Va tutto bene! Assicurati solo che la gente lo sappia.

Sia che il mantenimento del tuo progetto sia part-time o solo volontario, sii onesto su quanto tempo hai. Questo non è lo stesso di quanto tempo pensi che richiederà il progetto o di quanto tempo gli altri vogliono che tu spenda.

Ecco alcune regole che vale la pena tenere a mente:

* Come viene esaminato e accettato l'input (_Hai bisogno di fare qualche test? Qualche modello da utilizzare per i problemi?_)
* I tipi di contributi che accetterai (_Vuoi aiuto solo con una parte del codice?_)
* Quando è opportuno dare seguito (_ad esempio "Puoi aspettarti una risposta dal supporto del codice entro i prossimi 7 giorni. Se non hai ricevuto alcuna risposta entro allora, sentiti libero di eseguire il ping del thread."_)
*Quanto tempo dedichi al progetto (_es. "Investiamo solo circa 5 ore settimanali in questo progetto"_)

[Jekyll](https://github.com/jekyll/jekyll/tree/master/docs), [CocoaPods](https://github.com/CocoaPods/CocoaPods/wiki/Communication-&-Design-Rules), e [Homebrew](https://github.com/Homebrew/brew/blob/bbed7246bc5c5b7acb8c1d427d10b43e090dfd39/docs/Maintainers-Avoiding-Burnout.md) questi sono alcuni esempi di progetti con regole chiare per manutentori e contributori.

### Mantenere la comunicazione pubblica

Non dimenticare di documentare anche le tue interazioni. Dove puoi, mantieni la comunicazione pubblica sul tuo progetto. Se qualcuno tenta di contattarti personalmente per discutere di una richiesta di funzionalità o di un'esigenza di supporto, indirizzalo educatamente a un canale di comunicazione pubblico, come un elenco di posta elettronica o un tracker dei problemi.

Se incontri altri sostenitori o prendi decisioni importanti in privato, documenta tali conversazioni pubblicamente, anche se pubblichi solo i tuoi appunti.

In questo modo, chiunque si unisca alla tua comunità avrà accesso alle stesse informazioni di chi è stato lì. Per anni.

## Impara a dire di "No"

Hai scritto tu la roba. Idealmente, tutti leggeranno la tua documentazione, ma in realtà dovrai ricordare agli altri che questa conoscenza esiste.

Tuttavia, avere tutto scritto aiuta a spersonalizzare le situazioni in cui le regole devono essere applicate.

Dire di no non è divertente, ma _"Il tuo contributo non soddisfa i criteri per questo progetto"_ sembra meno personale di _"Non mi piace il tuo contributo"_.

Dire "no" si applica a molte situazioni che incontrerai come sostenitore del codice: richieste di funzionalità che non rientrano nell'ambito, qualcuno che deraglia una discussione, che fa lavoro non necessario per altri.

### Mantieni la conversazione amichevole

Uno dei posti più importanti in cui ti eserciterai a dire di no è nella coda di rilascio e richiesta pull. Come project manager, riceverai inevitabilmente proposte che non vuoi accettare.

Forse il contributo cambia la portata del tuo progetto o non si adatta alla tua visione. Forse l'idea è buona, ma la realizzazione è pessima.

Indipendentemente dal motivo, puoi gestire con tatto i contributi che non soddisfano gli standard del progetto.

Se ricevi un messaggio che non vuoi accettare, la tua prima reazione potrebbe essere quella di ignorarlo o di far finta di non averlo visto. Ciò può ferire i sentimenti dell'altra persona e persino scoraggiare altri potenziali contributori nella tua comunità.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/krausefx?s=180" class="pquote-avatar" alt="avatar">
  La chiave per gestire il supporto per progetti open source su larga scala è mantenere i problemi in movimento. Cerca di evitare ulteriori problemi. Se sei uno sviluppatore iOS, sai quanto può essere frustrante l'invio di radar. Potresti ricevere alcune notizie due anni dopo e ti verrà chiesto di confermarle. Riprova con l'ultima versione di iOS.
  <p markdown="1" class="pquote-credit">
— @KrauseFx, ["Scalare le comunità open source"](https://krausefx.com/blog/scaling-open-source-communities)
  </p>
</aside>

Non lasciare aperto un contributo non richiesto perché ti senti in colpa o vuoi essere gentile. Nel corso del tempo, le tue domande senza risposta e le tue PR diventeranno ridondanti. Ciò renderà il lavoro sul tuo progetto molto più stressante e imbarazzante.

È meglio chiudere immediatamente i contributi che sai di non voler accettare. Se il tuo progetto soffre già di un ampio arretrato o di un elenco di funzionalità da implementare, @steveklabnik ha suggerimenti su [come selezionare le domande in modo efficace](https://words.steveklabnik.com/how-to-be-an-open-source-gardener).

In secondo luogo, ignorare i contributi invia un segnale negativo alla tua comunità. Contribuire a un progetto può essere intimidatorio, soprattutto se è la prima volta per qualcuno. Anche se non accetti il ​​loro contributo, congratulati con la persona che sta dietro al progetto e ringraziala per il suo interesse. È un grande complimento!

Se non desideri accettare una donazione:

* **Grazie** per il loro contributo.
* **Spiegare perché non soddisfa** l'ambito del progetto e offrire chiari suggerimenti per il miglioramento, se possibile. Lo so, gentile ma fermo.
* **Condividi informazioni rilevanti** se ne hai. Se noti ripetute richieste di cose che non vuoi accettare, aggiungile alla tua documentazione per evitare di spiegare sempre la stessa cosa.
* **Chiudi la richiesta**

Non dovresti avere più di 1-2 frasi a cui rispondere. Ad esempio, quando un utente [celery](https://github.com/celery/celery/) segnalato un errore relativo a Windows, @berkerpeksag [lui a risposto con](https://github.com/celery/celery/issues/3383):

[celery screenshot](/assets/images/best-practices/celery.png)

Se l'idea di dire di no ti terrorizza, non sentirti sola. Come @jessfraz [dice](https://blog.jessfraz.com/post/the-art-of-closing/):

> Ho parlato con manutentori del codice di molti diversi progetti open source, Mesos, Kubernetes, Chromium, e sono tutti d'accordo sul fatto che una delle parti più difficili dell'essere un manutentore del codice è: dire "No" alle patch che non vuoi utilizzare

Non sentirti in colpa per non voler accettare il contributo di qualcuno. La prima regola dell'open source, [secondo](https://twitter.com/solomonstre/status/715277134978113536) @shykes: _"No, è temporaneo; sì, è per sempre."_ Sebbene martirizzare l'entusiasmo di un'altra persona sia una buona cosa, rifiutare un contributo non è la stessa cosa che rifiutare la persona che sta dietro ad esso.

Dopotutto, se un contributo non è abbastanza buono, non sei obbligato ad accettarlo. So che sii gentile e accomodante quando le persone contribuiscono al tuo progetto, ma accetta solo i cambiamenti che ritieni veramente miglioreranno il tuo progetto. Più ti eserciti a dire di no, più diventa facile. È una promessa.

### Sii proattivo

Per ridurre innanzitutto il volume dei contributi non richiesti, spiega il processo del tuo progetto per l'invio e l'accettazione dei contributi nella guida ai contributi.

Se ricevi troppi contributi di bassa qualità, chiedi ai contributori di svolgere del lavoro in anticipo, ad esempio:

* Completa un modello o un elenco di controllo per problemi o PR
*Apri un problema prima di inviare un PR

Se non seguono le tue regole, chiudi immediatamente il problema e indirizzali alla tua documentazione.

Sebbene questo approccio possa sembrare inizialmente imbarazzante, essere proattivi è in realtà positivo per entrambe le parti. Riduci la possibilità che qualcuno investa molte ore di lavoro sprecato su una richiesta pull che non accetti. E semplifica la gestione del carico.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/mikemcquaid?s=180" class="pquote-avatar" alt="avatar">
  Idealmente, spiegare in un file CONTRIBUTING.md come possono ottenere in futuro un'indicazione migliore di cosa verrebbe o non verrebbe accettato prima di iniziare il lavoro.
  <p markdown="1" class="pquote-credit">
— @MikeMcQuaid, ["Si prega di chiudere le richieste pull"](https://github.com/blog/2124-kindly-closing-pull-requests)
  </p>
</aside>

A volte, quando dici di no, il tuo potenziale collaboratore potrebbe arrabbiarsi o criticare la tua decisione. Se il tuo comportamento diventa ostile, [prendi provvedimenti per disinnescare la situazione](https://github.com/jonschlinkert/maintainers-guide-to-staying-positive#action-items) o addirittura rimuoverli dalla tua comunità se non sono disposti a collaborare in modo costruttivo.

### Scegli il tutoraggio

Forse qualcuno nella tua comunità invia regolarmente contributi che non soddisfano gli standard del tuo progetto. Può essere frustrante per entrambe le parti sottoporsi ripetutamente al processo di rifiuto.

Se vedi qualcuno che ti entusiasma, ma ha bisogno di un po' di pratica, sii paziente. In ogni situazione, spiega chiaramente il motivo. il loro contributo non soddisfa le aspettative del progetto. Prova a dare loro un compito più semplice o meno ambiguo, come un problema etichettato come "buon primo problema" per riscaldarli. Se hai tempo, valuta la possibilità di fare da mentore tramite il tuo primo contributo o trova qualcun altro nella tua comunità che sia interessato. pronto ad istruirli.

##Utilizzo della comunità

Non devi fare tutto da solo. La tua community di progetto esiste per un motivo! Anche se non hai ancora una comunità attiva di contributori, se hai molti utenti, lasciali lavorare.

### Condividi il carico

Se stai cercando altri a cui unirsi, inizia chiedendo in giro.

Quando vedi nuovi contributori che contribuiscono ripetutamente, dovresti riconoscere il loro lavoro offrendo loro maggiori responsabilità. Documenta come gli altri possono ottenere ruoli di leadership, se lo desiderano.

Incoraggiare gli altri a [condividere la proprietà del progetto](../building-community/#condividi-la-proprietà-del-tuo-progetto) può ridurre significativamente il carico di lavoro, come ha trovato @lmccart nel suo progetto, [p5.js](https://github.com/processing/p5.js).

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/lmccart?s=180" class="pquote-avatar" alt="avatar">
 Dicevo: "Sì, può partecipare chiunque, non è necessario avere molta esperienza di programmazione [...]." Abbiamo persone iscritte [agli eventi] ed eccoci qui. Allora mi sono chiesto: è vero quello che dico? Ci saranno 40 persone che si presenteranno e non è che posso sedermi con ognuna di loro... Ma le persone si sono riunite e ha funzionato. Una volta che una persona l’ha capito, può insegnarlo ai suoi vicini.
  <p markdown="1" class="pquote-credit">
—  @lmccart, ["Dopo tutto, cosa significa "Open Source"?"? p5.js La modifica"](https://medium.com/@kenjagan/what-does-open-source-even-mean-p5-js-edition-98c02d354b39)
  </p>
</aside>

Se hai bisogno di allontanarti dal tuo progetto, temporaneamente o permanentemente, non c'è vergogna nel chiedere a qualcun altro di subentrare al tuo posto.

Se altre persone sono entusiaste della direzione del progetto, dai loro il permesso di essere coinvolte o di cedere formalmente il controllo a qualcun altro. Se qualcuno crea un fork del tuo progetto e questo viene mantenuto attivamente da qualche altra parte, considera di collegare il fork dal tuo progetto originale. È fantastico che così tante persone vogliano che il tuo progetto venga sviluppato!

@progrium [trovato quello](https://web.archive.org/web/20151204215958/https://progrium.com/blog/2015/12/04/leadership-guilt-and-pull-requests/) documentare la visione del tuo progetto, [Dokku](https://github.com/dokku/dokku), aiutare questi obiettivi a continuare, anche oltre ciò che resta del progetto:

> Ho scritto una pagina wiki che descrive cosa voglio e perché lo voglio. Per qualche motivo sono rimasto sorpreso da questo! Lasciamo che i manutentori inizino a muovere il progetto in questa direzione! È successo? Come lo faresti esattamente? Non sempre. Ma comunque sia stato affrontato, ho realizzato il progetto come volevo.

### Lascia che siano gli altri a creare le soluzioni di cui hanno bisogno

Se un potenziale collaboratore ha un'opinione diversa su ciò che dovrebbe fare il tuo progetto, potresti dover incoraggiarlo gentilmente a lavorare sul proprio fork.

Biforcare un progetto non è necessariamente una cosa negativa. Essere in grado di copiare e modificare progetti è una delle cose migliori dell'open source. Incoraggiare i membri della tua comunità a lavorare sul proprio fork può fornire lo sbocco creativo di cui hanno bisogno senza entrare in conflitto con la visione del tuo progetto.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/geerlingguy?s=180" class="pquote-avatar" alt="avatar">
  Gestisco l'80% dei casi d'uso. Se sei uno degli unicorni, per favore sgancia il mio lavoro. Non mi offenderò! I miei progetti comunitari sono quasi sempre finalizzati alla risoluzione dei problemi più comuni; Cerco di rendere più semplice andare oltre ramificando il mio lavoro o espandendolo.
  <p markdown="1" class="pquote-credit">
— @geerlingguy, ["Perchè sto chiudendo PR"](https://www.jeffgeerling.com/blog/2016/why-i-close-prs-oss-project-maintainer-notes)
  </p>
</aside>

Lo stesso vale per un utente che desidera davvero una soluzione che semplicemente non hai la capacità di creare. Offrire API e hook personalizzati può aiutare gli altri a soddisfare le proprie esigenze senza dover modificare direttamente la fonte.
@orta [ha trovato che](https://artsy.github.io/blog/2016/07/03/handling-big-projects/) incoraggiando i plugin CocoaPods ad "alcune delle idee più interessanti":

> È quasi inevitabile che una volta che un progetto diventa grande, i manutentori debbano essere molto più conservatori su come introdurre il nuovo codice. Sai dire di no, ma molte persone hanno bisogni legittimi. Pertanto, finisci per trasformare il tuo strumento in una piattaforma.

## Porta avanti i robot

Quindi, proprio come ci sono compiti in cui altre persone possono aiutarti, ci sono anche compiti che nessun essere umano dovrebbe svolgere. I robot sono tuoi amici. Usali per semplificarti la vita come manutentore del codice.

### Richiedi test e altri controlli per migliorare la qualità del tuo codice

Uno dei modi più importanti per automatizzare il tuo progetto è attraverso i test.

I test aiutano i contributori a sentirsi sicuri che non romperanno nulla. Inoltre, facilitano la revisione e l'accettazione rapida dei contributi. Più sei ricettivo, più sarai coinvolto. sii la tua comunità.

Imposta test automatizzati per eseguire tutti i contributi in arrivo e garantire che possano essere eseguiti localmente dai contributori. È necessario che tutti i contributi al codice superino i test prima di poter essere inviati. Contribuirà a stabilire uno standard minimo di qualità per tutte le applicazioni.
[Sono necessari controlli sullo stato](https://help.github.com/articles/about-required-status-checks/) su GitHub può aiutare a garantire che nessuna modifica venga unita senza prima eseguire i test.

Se aggiungi test, assicurati di spiegare come funzionano nel tuo file CONTRIBUTING.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/edunham?s=180" class="pquote-avatar" alt="avatar">
  Penso che i test siano necessari per tutto il codice su cui le persone lavorano. Se il codice fosse completamente e perfettamente corretto, non ci sarebbe bisogno di modifiche: scriviamo il codice solo quando qualcosa è corretto. sbagliato, oppure "Si blocca", oppure "Manca questa o quella funzione". Qualunque sia la modifica apportata, il test è essenziale per individuare eventuali regressioni che potresti introdurre accidentalmente.
  <p markdown="1" class="pquote-credit">
— @edunham, [Automazione comunitaria di Rust"](https://edunham.net/2016/09/27/rust_s_community_automation.html)
  </p>
</aside>

### Utilizza strumenti per automatizzare le attività di manutenzione di base

La buona notizia nel mantenere un progetto popolare è che altri manutentori hanno probabilmente riscontrato problemi simili e hanno creato una soluzione per questo.

Sono disponibili [vari strumenti](https://github.com/showcases/tools-for-open-source) per automatizzare alcuni aspetti del lavoro di manutenzione. Alcuni esempi:

* [semantic-release](https://github.com/semantic-release/semantic-release) automatizzare i tuoi rilasci
* [mention-bot](https://github.com/facebook/mention-bot) menzionare possibili revisori per le richieste del timone
* [Danger](https://github.com/danger/danger) aiuta ad automatizzare la revisione del codice

Per segnalazioni di bug e altri contributi generali, GitHub dispone di [modelli di richiesta di rilascio e pull](https://github.com/blog/2111-issue-and-pull-request-templates), che puoi creare per semplificare la comunicazione che ricevi. Puoi anche configurare [filtri email](https://github.com/blog/2203-email-updates-about-your-own-activity) per gestire le tue notifiche email.

Se vuoi diventare un po' più avanzato, le guide di stile possono standardizzare i contributi del progetto e renderli più facili da rivedere e adottare.

Tuttavia, se i tuoi standard sono troppo complessi, possono aumentare gli ostacoli alla contribuzione. Assicurati di aggiungere solo regole per rendere la vita più semplice a tutti.

Se non sei sicuro di quali strumenti utilizzare, controlla cosa stanno facendo altri progetti popolari, in particolare quelli nel tuo ecosistema. Ad esempio, come si presenta il processo di contribuzione per gli altri moduli Node? Anche l'utilizzo di strumenti e approcci simili faciliterà. Rendi il tuo processo più familiare ai tuoi associati target.

## È una bella pausa

Il lavoro open source una volta ti dava gioia. Forse ora è così che iniziano a farti sentire evasivo o colpevole.

Forse ti senti sopraffatto o provi un crescente senso di paura quando pensi ai tuoi progetti. E nel frattempo si accumulano problemi e pull request.

Il burnout è un problema reale e pervasivo nel lavoro open source, soprattutto tra i manutentori. In qualità di manutentore, la tua felicità è un requisito non negoziabile per la sopravvivenza di qualsiasi progetto open source.

Anche se dovrebbe essere ovvio, prenditi una pausa! Non devi aspettare finché non ti senti stanco per fare una pausa. @brettcannon, uno sviluppatore Python, ha deciso di prendersi una [mese di vacanza](http://www.snarky.ca/why-i-took-october-off-from-oss-volunteering) dopo 14 anni OSS volantariato.

Come qualsiasi altro tipo di lavoro, fare delle pause regolari ti manterrà motivato. freschi, felici ed entusiasti del loro lavoro.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/danielbachhuber?s=180" class="pquote-avatar" alt="avatar">
  Pur mantenendo WP-CLI, ho scoperto che dovevo preoccuparmi prima della mia felicità e stabilire limiti chiari al mio coinvolgimento. Il miglior equilibrio che ho trovato è 2-5 ore settimanali come parte del mio normale orario di lavoro. Mantiene il mio coinvolgimento come passione e non sembra troppo un lavoro. Poiché do la priorità alle questioni su cui sto lavorando, posso fare regolarmente progressi su ciò che ritengo più importante.
  <p markdown="1" class="pquote-credit">
— @danielbachhuber, ["Le mie condoglianze, ora sei il manutentore di un popolare progetto open source"](https://web.archive.org/web/20220306014037/https://danielbachhuber.com/2016/06/26/my-condolences-youre-now-the-maintainer-of-a-popular-open-source-project/)
  </p>
</aside>

A volte può essere difficile prendersi una pausa dal lavoro open source quando ritieni che il mondo intero abbia bisogno di te. Le persone potrebbero anche provare a farti sentire in colpa per esserti allontanato.

Fai del tuo meglio per trovare supporto per i tuoi utenti e la tua comunità mentre sei lontano da un progetto. Se non riesci a trovare il supporto di cui hai bisogno, prenditi comunque una pausa. Ricordati di comunicare quando non sei disponibile in modo che le persone non si sentano confuse dalla tua mancanza di reattività.

Fare le vacanze è qualcosa di più delle semplici vacanze. Se non vuoi lavorare con l'open source nei fine settimana o durante l'orario lavorativo, comunica queste decisioni ad altri in modo che sappiano che non sarai disturbato.

## Prenditi cura di te prima!

Mantenere un progetto popolare richiede competenze diverse rispetto alle prime fasi di crescita, ma non è per questo meno gratificante. In qualità di manutentore, eserciterai le capacità di leadership e di gestione delle persone a un livello che poche persone possono sperimentare. Anche se non è sempre facile da gestire, stabilire dei limiti chiari e prendere solo ciò che ti fa sentire a tuo agio ti aiuterà. per mantenerti felice, aggiornato e produttivo.
