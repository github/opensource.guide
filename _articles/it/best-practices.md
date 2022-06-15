---
lang: es
title: Buone pratiche per i manutentori del codice.
description: Semplificandoti la vita come manutentore open source, dal processo di documentazione per ottenere il massimo dalla community.
class: best-practices
order: 5
image: /assets/images/cards/best-practices.png
related:
  - metrics
  - leadership
---

## Cosa significa essere un manutentore del codice?
Se il tuo compito &egrave; mantenere un progetto open source utilizzato da molte persone, probabilmente avrai notato che dedichi pi&ugrave; tempo a rispondere ai problemi di programmazione.

Nelle prime fasi di un progetto, trascorri del tempo a sperimentare nuove idee e prendere decisioni in base a ci&ograve; che ti piace. Man mano che il tuo progetto cresce in popolarit&agrave;, ti ritroverai a lavorare sempre di pi&ugrave; con i tuoi utenti e collaboratori.

La manutenzione di un progetto richiede pi&ugrave; del semplice codice. Questi compiti sono spesso trascurati, ma sono altrettanto importanti per un progetto in crescita. Abbiamo messo insieme alcune idee che ti semplificheranno la vita, dal processo di documentazione per ottenere il massimo dalla community.

## Documentare i tuoi processi

Prendere nota delle procedure &egrave; una delle migliori pratiche che puoi fare come manutentore del codice.

Documentare non solo chiarisce il tuo pensiero, ma aiuta anche gli altri a capire ci&ograve; di cui hai bisogno o ti aspetti, senza nemmeno dover chiedere.

Prendere nota dei processi rende facile dire di no quando la proposta di qualcuno non si adatta al tuo contesto. Così oltre a rendere pi&ugrave; facile per altre persone unirsi e aiutare. Non sai mai chi potrebbe leggere o utilizzare il tuo progetto.

Anche se non sei il tipo da scrivere paragrafi interi, avere i punti chiave scritti &egrave; meglio di niente.

### Rendere chiara la visione del tuo progetto

Inizia scrivendo gli obiettivi del tuo progetto. Aggiungili al tuo file README o crea un file separato chiamato VISION. Se ci sono altri artefatti che potrebbero aiutare, come una mappa del progetto, rendi pubblici anche quelli.

Avere una visione chiara e documentata ti mantiene concentrato e aiuta a evitare fraintendimenti sull'ambito da parte di altri collaboratori.

Ad esempio, ha scoperto @lord che avere la visione di un progetto lo ha aiutato. per realizzare quali richieste dare priorit&agrave;. Come manutentore del codice alle prime armi, si &egrave; lamentato di non essere fedele allo scopo del progetto una volta ricevuto. la tua prima richiesta di funzionalit&agrave; da parte di [Slate](https://github.com/lord/slate).

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/lord?s=180" class="pquote-avatar" alt="avatar">
  Lo intent&eacute;. No le puse el esfuerzo necesario para salir adelante con una soluci&oacute;n completa. En lugar de una soluci&oacute;n a medias, hubiera deseado haber dicho "En este momento no tengo tiempo para eso, pero voy a agregar la funcionalidad a la lista de pendientes a desarrollar en el futuro."
  <p markdown="1" class="pquote-credit">
— @lord, ["Suggerimenti per i manutentori open source"](https://lord.io/blog/2014/oss-tips/)
  </p>
</aside>

### Comunica le tue aspettative

A volte pu&ograve; essere difficile precisare le regole in modo che altre persone possano contribuire. Potresti sentirti come un poliziotto o rovinare il divertimento per gli altri.

Ben scritte e applicate, tuttavia, le buone regole autorizzano i manutentori del codice. Ti impediscono di essere trascinato a fare cose che non vuoi fare.

La maggior parte delle persone che si imbattono nel tuo progetto non sanno nulla di te o delle tue circostanze. Potrebbero presumere che tu venga pagato per lavorarci, specialmente se è qualcosa che usano regolarmente e da cui dipendono. Forse a un certo punto dedichi molto tempo al tuo progetto, ma ora sei impegnato con un nuovo lavoro o un membro della famiglia.

&Egrave; perfettamente bene! Assicurati solo che le persone lo sappiano.

Se il mantenimento del tuo progetto &egrave; part-time o solo volontariato, sii onesto su quanto tempo hai a disposizione. Questo non &egrave; lo stesso di quanto tempo pensi che il progetto richiederà, o quanto tempo gli altri vogliono che tu spenda.

Qui ci sono alcune regole degne di nota:

* In che modo un contributo viene esaminato e accettato (_Devono essere testati? Qualche modello da utilizzare per i problemi?_)
* I tipi di contributi che accetterai (_Vuoi aiuto solo con una parte del codice?_)
* Quando &egrave; opportuno continuare (_es. "Puoi aspettarti una risposta da un responsabile della manutenzione del codice entro i prossimi 7 giorni. Se non hai sentito nulla per allora, sentiti libero di eseguire il ping del thread." _)
* Quanto tempo dedichi al progetto (_es. "Dedichiamo solo circa 5 ore a settimana a questo progetto"_)

[Jekyll](https://github.com/jekyll/jekyll/tree/master/docs), [CocoaPods](https://github.com/CocoaPods/CocoaPods/wiki/Communication-&-Design-Rules), e [Homebrew](https://github.com/Homebrew/brew/blob/bbed7246bc5c5b7acb8c1d427d10b43e090dfd39/docs/Maintainers-Avoiding-Burnout.md) sono alcuni esempi di progetti con regole chiare per manutentori e collaboratori.

### Mantieni la comunicazione pubblica

Non dimenticare di documentare anche le tue interazioni. Ovunque tu possa, mantieni la comunicazione sul tuo progetto pubblica. Se qualcuno tenta di contattarti in privato per discutere di una richiesta di funzionalit&agrave; o di un'esigenza di supporto, indirizzalo educatamente a un canale di comunicazione pubblico, come una mailing list o un tracker di problemi.

Se incontri altri manutentori o prendi decisioni importanti in privato, documenta pubblicamente queste conversazioni, anche se stai solo pubblicando i tuoi appunti.

In questo modo, chiunque si unisca alla tua comunit&agrave; avr&agrave; una possibilit&agrave;. Hai accesso alle stesse informazioni di qualcuno che &egrave; stato l&igrave;. per anni.

## Imparare a dire di no

Hai scritto cose. Idealmente, tutti dovrebbero leggere la tua documentazione, ma in realt&agrave; dovrai ricordare agli altri che questa conoscenza esiste.

Avere tutto scritto, tuttavia, aiuta a spersonalizzare le situazioni in cui &egrave; necessario far rispettare le proprie regole.

Dire di no non &egrave; divertente, ma _"Il tuo contributo non corrisponde ai criteri di questo progetto"_ sembra meno personale di _"Non mi piace il tuo contributo"_.

Dire di no si applica a molte situazioni che incontrerai come manutentore del codice: richieste di funzionalit&agrave; che non rientrano nell'ambito, qualcuno che fa deragliare una discussione, facendo del lavoro non necessario per altri.

### Mantieni la conversazione amichevole

Uno dei posti pi&ugrave; importanti in cui ti eserciterai a dire di no &egrave; nel tuo problema e nella coda delle richieste pull. In qualit&agrave; di project manager, riceverai inevitabilmente suggerimenti che non vorrai accettare.

Forse il contributo cambia la portata del tuo progetto o non corrisponde alla tua visione. Forse l'idea &egrave; buona, ma l'implementazione &egrave; pessima.

Indipendentemente dal motivo, i contributi che non soddisfano gli standard del tuo progetto possono essere gestiti con tatto.

Se ricevi un contributo che non vuoi accettare, la tua prima reazione potrebbe essere ignorarlo o fingere di non averlo visto. Ci&ograve; potrebbe ferire i sentimenti dell'altra persona e persino scoraggiare altri potenziali contributori nella tua comunit&agrave;.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/krausefx?s=180" class="pquote-avatar" alt="avatar">
  La chiave per gestire il supporto per progetti open source su larga scala &egrave; mantenere i problemi in movimento. Cerca di evitare di avere ancora problemi. Se sei uno sviluppatore iOS, sai quanto pu&ograve; essere frustrante inviare autovelox. Potresti ricevere alcune notizie due anni dopo e ti verranno chieste Riprova con l'ultima versione di iOS.
  <p markdown="1" class="pquote-credit">
— @KrauseFx, ["Ridimensionamento delle comunità open source"](https://krausefx.com/blog/scaling-open-source-communities)
  </p>
</aside>

Non lasciare un contributo indesiderato aperto perch&egrave; ti senti in colpa o vuoi essere gentile. Nel tempo, i tuoi problemi senza risposta e le tue PR andranno bene. Renderà il lavoro sul tuo progetto molto più stressante e intimidatorio.

&Egrave; meglio chiudere immediatamente i contributi che sai di non voler accettare. Se il tuo progetto soffre gi&agrave; di un grande arretrato o di un elenco di funzionalit&agrave; da implementare, @steveklabnik ha suggerimenti su [come scegliere i problemi in modo efficiente](https://words.steveklabnik.com/how-to-be-an-open-source -giardiniere).

In secondo luogo, ignorare i contributi invia un segnale negativo alla tua comunit&agrave;. Contribuire a un progetto pu&ograve; intimidire, soprattutto se è la prima volta di qualcuno. Anche se non accetti il ​​loro contributo, riconosci la persona dietro e ringraziala per il suo interesse. È un grande complimento!

Se non vuoi accettare un contributo:

* **Ringraziali** per il loro contributo.
* **Dì loro perché. non rientra** nell'ambito del progetto e offre chiari suggerimenti per il miglioramento, se possibile. lo so gentile, ma fermo.
* **Condividi informazioni rilevanti**, se ce l'hai. Se noti richieste ripetute per cose che non vuoi accettare, aggiungile alla tua documentazione per evitare di spiegare sempre la stessa cosa.
* **Chiudi la richiesta**

non dovresti aver bisogno di pi&ugrave; di 1-2 frasi per rispondere. Ad esempio, quando un utente di [celery](https://github.com/celery/celery/) segnalato un errore relativo a Windows, @berkerpeksag [risposto insieme a](https://github.com/celery/celery/issues/3383):

[celery screenshot](/assets/images/best-practices/celery.png)

Se hai il terrore di dire di no, non sentirti solo. Come @jessfraz [dice](https://blog.jessfraz.com/post/the-art-of-closing/):


> Ho parlato con i manutentori del codice di molti diversi progetti open source, Mesos, Kubernetes, Chromium, e sono tutti d'accordo sul fatto che una delle parti pi&ugrave; difficili dell'essere un manutentore &egrave; il codice &egrave; dire "No" alle patch che non si utilizzano volere.

Non sentirti in colpa per non voler accettare il contributo di qualcuno. La prima regola dell'open source, [secondo](https://twitter.com/solomonstre/status/715277134978113536) @shykes: _"No, &egrave; temporaneo; sì, &egrave; per sempre."_ Mentre l'empatia per l'entusiasmo di un'altra persona è una buona cosa, rifiutare un contributo non equivale a rifiutare la persona dietro di esso .

In definitiva, se un contributo non &egrave; abbastanza buono, non sei tenuto ad accettarlo. lo so Sii amichevole e reattivo quando le persone contribuiscono al tuo progetto, ma accetta solo i cambiamenti che pensi davvero miglioreranno il tuo progetto. Pi&ugrave; spesso ti eserciti a dire di no, pi&ugrave; facile diventa. &Egrave; una promessa.

### Lo so proattivi

Per ridurre il volume dei contributi indesiderati, in primo luogo, spiega il processo del tuo progetto per inviare e accettare contributi nella tua guida ai contributi.

Se ricevi troppi contributi di bassa qualit&agrave;, chiedi ai contributori di fare un po' di lavoro in anticipo, ad esempio:

* Compila un modello o una lista di controllo per problemi o PR
* Aprire un problema prima di inviare un PR

Se non seguono le tue regole, chiudi immediatamente il problema e indirizzalo alla tua documentazione.

Sebbene all'inizio questo approccio possa sembrare scoraggiante, essere proattivi &egrave; in realt&agrave; positivo per entrambe le parti. Riduce la possibilit&agrave; che qualcuno metta molte ore di lavoro sprecate in una richiesta pull che non accetterai. E semplifica la gestione del carico di lavoro.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/mikemcquaid?s=180" class="pquote-avatar" alt="avatar">
  Idealmente, spiegare loro e in un file CONTRIBUTING.md come possono ottenere una migliore indicazione in futuro di ciò che sarebbe o non sarebbe accettato prima di iniziare il lavoro.
  <p markdown="1" class="pquote-credit">
— @MikeMcQuaid, ["Chiudere bene le richieste pull"](https://github.com/blog/2124-kindly-closing-pull-requests)
  </p>
</aside>

A volte, quando dici di no, il tuo potenziale collaboratore potrebbe essere sconvolto o critico nei confronti della tua decisione. Se il loro comportamento diventa ostile, [prendere provvedimenti per disinnescare la situazione](https://github.com/jonschlinkert/maintainers-guide-to-staying-positive#action-items) o addirittura rimuoverli dalla tua comunit&agrave;, se lo sono non disposti a collaborare in modo costruttivo.

### Abbraccia il tutoraggio

Forse qualcuno nella tua comunit&agrave; invia regolarmente contributi che non soddisfano gli standard del tuo progetto. Pu&ograve; essere frustrante per entrambe le parti passare ripetutamente attraverso il processo di rifiuto.

Se vedi che qualcuno lo &egrave; Se sei entusiasta del tuo progetto, ma hai bisogno di un po' di pratica, sii paziente. Spiega chiaramente in ogni situazione perch&egrave;. i tuoi contributi non soddisfano le aspettative del progetto. Prova ad assegnargli un compito pi&ugrave; semplice o meno ambiguo, ad esempio un problema contrassegnato con _"buona prima edizione",_ , per riscaldarli. Se hai tempo, prendi in considerazione l'idea di fare da mentore attraverso il tuo primo contributo o trova qualcun altro nella tua comunit&agrave; che lo sia. disposto a guidarli.

## Sfruttare la comunità

Non devi fare tutto da solo. La tua community di progetti esiste per una ragione! Anche se non hai ancora una comunità attiva di contributori, se hai molti utenti, lavoraci sopra.

### Condividi il carico di lavoro

Se stai cercando altri a cui unirsi, inizia chiedendo in giro.

Quando vedi nuovi contributori che fanno contributi ripetuti, dovresti riconoscere il loro lavoro offrendo loro maggiori responsabilit&agrave;. Documenta come gli altri possono ottenere ruoli di leadership, se lo desiderano.

Incoraggiare gli altri a [condividere la proprietà del progetto](../building-community/#share-ownership-of-your-project) pu&ograve; ridurre notevolmente il carico di lavoro, come ha scoperto @lmccart. nel tuo progetto, [p5.js](https://github.com/processing/p5.js).

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/lmccart?s=180" class="pquote-avatar" alt="avatar">
  Stavo dicendo: "Sì, chiunque pu&ograve; partecipare, non &egrave; necessario avere molta esperienza di programmazione [...]". Abbiamo avuto persone registrate [per eventi] e lì Fu allora che mi chiesi: &egrave; vero, quello che dicevo? Ci saranno 40 persone che si presenteranno, e non &egrave; che potessi sedermi con ognuna di loro... Ma le persone si sono riunite e ha funzionato. non appena una persona lo ha ottenuto, potrebbe insegnare ai suoi vicini.
  <p markdown="1" class="pquote-credit">
—  @lmccart, ["che cosa Cosa significa, dopo tutto, "Open Source?" p5.js Edition"](https://medium.com/@kenjagan/what-does-open-source-even-mean-p5-js-edition-98c02d354b39)
  </p>
</aside>

Se hai bisogno di allontanarti dal tuo progetto, temporaneamente o permanentemente, non c'&egrave; vergogna nel chiedere a qualcun altro di subentrare per te.

Se altre persone sono entusiaste della direzione del progetto, dai loro il permesso di impegnarsi o affidare formalmente il controllo a qualcun altro. Se qualcuno ha fatto un fork del tuo progetto e lo &egrave;. mantenendo attivamente da qualche altra parte, considera di collegare il fork dal tuo progetto originale. &Egrave; fantastico che così tante persone vogliano che il tuo progetto cresca!

@progrium [ha scoperto che](https://web.archive.org/web/20151204215958/https://progrium.com/blog/2015/12/04/leadership-guilt-and-pull-requests/) documenta la tua visione del progetto, [Dokku](https://github.com/dokku/dokku), aiutato Ha incoraggiato quegli obiettivi a durare, anche dopo che se n'era andato. del progetto:

> ho scritto Ho fornito una pagina wiki che descrive cosa volevo e perch&egrave;. lo volevo. Per qualche motivo sono rimasto sorpreso! Quindi i manutentori hanno iniziato a spostare il progetto in quella direzione! È successo? esattamente come lo faresti? Non sempre. Ma ancora si avvicin&ograve; Ha trasformato il progetto in ci&ograve; che voleva.

### Consenti ad altri di creare le soluzioni di cui hanno bisogno

Se un potenziale collaboratore ha un'opinione diversa su ci&ograve; che il tuo progetto dovrebbe fare, potrebbe essere necessario incoraggiarlo gentilmente a lavorare sul proprio fork.

Non &egrave; necessario eseguire il fork di un progetto. essere una brutta cosa. Essere in grado di copiare e modificare i progetti &egrave; una delle cose migliori dell'essere open source. Incoraggiare i membri della tua comunit&agrave; a lavorare sul proprio fork pu&ograve; fornire lo sbocco creativo di cui hanno bisogno, senza entrare in conflitto con la visione del tuo progetto.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/geerlingguy?s=180" class="pquote-avatar" alt="avatar">
  Gestisco l'80% dei casi d'uso. Se sei uno degli unicorni, per favore biforca il mio lavoro. non mi offender&ograve;! I miei progetti pubblici sono quasi sempre volti a risolvere i problemi pi&ugrave; comuni; Cerco di rendere pi&ugrave; facile andare oltre biforcando il mio lavoro o estendendolo.
  <p markdown="1" class="pquote-credit">
— @geerlingguy, ["perché Chiudo PR?"](https://www.jeffgeerling.com/blog/2016/why-i-close-prs-oss-project-maintainer-notes)
  </p>
</aside>

Lo stesso vale per un utente che desidera davvero una soluzione che semplicemente non ha lo scopo di creare. L'offerta di API e hook personalizzabili può aiutare gli altri a soddisfare le proprie esigenze, senza dover modificare direttamente la fonte.
@orta [trovato che](https://artsy.github.io/blog/2016/07/03/handling-big-projects/) ha preso i plugin incoraggianti per CocoaPods ad "alcune delle idee più interessanti":

> &Egrave; quasi inevitabile che una volta che un progetto diventa grande, i manutentori debbano essere molto pi&ugrave; prudenti su come introdurre nuovo codice. Diventi bravo a dire "no", ma molte persone hanno bisogni legittimi. Pertanto, finisci per trasformare il tuo strumento in una piattaforma.

## Forza i robot

Così Proprio come ci sono compiti in cui altre persone possono aiutarti, ci sono anche compiti che nessun essere umano dovrebbe svolgere. I robot sono tuoi amici. usali per semplificarti la vita come manutentore del codice.

### Richiedi test e altri controlli per migliorare la qualità del tuo codice

Uno dei modi più importanti per automatizzare il tuo progetto è testare.

I test aiutano i contribuenti a sentirsi sicuri che non romperanno nulla. Consentono inoltre di rivedere e accettare rapidamente i contributi. Più sei ricettivo, più il tuo partner può essere impegnato. sii la tua comunit&agrave;

Imposta test automatici da eseguire su tutti i contributi in entrata e assicurati che possano essere eseguiti localmente dai contributori. Richiede che tutti i contributi di codice siano sottoposti a test prima che possano essere inviati. aiuter&agrave; stabilire uno standard minimo di qualit&agrave; per tutte le applicazioni.
[Required Status Checks](https://help.github.com/articles/about-required-status-checks/) su GitHub può aiutare a garantire che nessuna modifica venga unita senza prima passare attraverso il test.

Se aggiungi dei test, assicurati di spiegare come funzionano nel tuo file CONTRIBUTING.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/edunham?s=180" class="pquote-avatar" alt="avatar">
  Penso che il test sia necessario per tutto il codice su cui le persone lavorano. Se il codice fosse completamente e perfettamente corretto, non avrebbe bisogno di modifiche: scriviamo codice solo quando qualcosa non va. sbagliato, "Arresto anomalo" o "Questa o quella funzione &egrave; mancante". Indipendentemente dalle modifiche che stai apportando, il test &egrave; essenziale per acquisire eventuali regressioni che potresti introdurre accidentalmente.
  <p markdown="1" class="pquote-credit">
— @edunham, ["Automazione della comunit&agrave; di Rust"](https://edunham.net/2016/09/27/rust_s_community_automation.html)
  </p>
</aside>

### Utilizza gli strumenti per automatizzare le attivit&agrave; di manutenzione di base

La buona notizia sul mantenimento di un progetto popolare è che altri manutentori hanno probabilmente affrontato problemi simili e hanno creato una soluzione per esso.

Sono disponibili [varie strumenti](https://github.com/showcases/tools-for-open-source) per automatizzare alcuni aspetti del lavoro di manutenzione. Qualche esempio:

* [semantic-release](https://github.com/semantic-release/semantic-release) automatizza i tuoi rilasci
* [mention-bot](https://github.com/facebook/mention-bot) cita possibili revisori per il rull requests
* [Danger](https://github.com/danger/danger) aiuta ad automatizzare la revisione del codice

Per segnalazioni di bug e altri contributi comuni, GitHub ha [Issue and Pull Request Templates](https://github.com/blog/2111-issue-and-pull-request-templates), che puoi creare per velocizzare la comunicazione che ricevi. Possono anche configurare [filtri e-mail](https://github.com/blog/2203-email-updates-about-your-own-activity) per gestire le notifiche e-mail.

Se vuoi diventare un po' pi&ugrave; avanzato, le guide di stile possono standardizzare i contributi del progetto e renderli pi&ugrave; facili da rivedere e accettare.

Tuttavia, se i tuoi standard sono troppo complicati, possono aumentare le barriere al contributo. Assicurati di aggiungere solo regole per semplificare la vita di tutti.

Se non sei sicuro di cosa strumenti da utilizzare, guarda cosa stanno facendo altri progetti popolari, specialmente quelli nel tuo ecosistema. Ad esempio, cosa Che aspetto ha il processo di contribuzione per altri moduli Node? Anche l'uso di strumenti e approcci simili far&agrave; il trucco. Rendi il tuo processo più familiare ai tuoi contribuenti target.

## &Egrave; ok pausa

Il lavoro open source una volta ti ha portato gioia. Forse ora lo &egrave;. iniziando a farti sentire evitante o in colpa.

Forse ti senti sopraffatto o con un crescente senso di terrore quando pensi ai tuoi progetti. E nel frattempo, i problemi e le richieste pull si stanno accumulando.

Il burnout &egrave; un problema reale e pervasivo nel lavoro open source, specialmente tra i manutentori. In qualit&agrave; di manutentore, la tua felicit&agrave; &egrave; un requisito non negoziabile per la sopravvivenza di qualsiasi progetto open source.

Anche se dovrebbe essere dato per scontato, prenditi una pausa! Non dovresti aspettare di sentirti esausto per prenderti una vacanza. @brettcannon, uno sviluppatore Python, ha deciso di farlo Ho preso [un mese di vacanza] (http://www.snarky.ca/why-i-took- October-off-from-oss-volunteering) dopo 14 anni di volontariato OSS.

Proprio come qualsiasi altro tipo di lavoro, fare delle pause regolari ti terr&agrave; sulle spine. fresca, felice ed entusiasta del tuo lavoro.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/danielbachhuber?s=180" class="pquote-avatar" alt="avatar">
  Durante la manutenzione di WP-CLI, ho scoperto So che devo prima preoccuparmi della mia felicit&agrave; e stabilire limiti chiari al mio coinvolgimento. Il miglior equilibrio che ho trovato &egrave; di 2-5 ore settimanali, come parte del mio normale programma di lavoro. Questo mantiene la mia partecipazione una passione e dal sentirmi troppo simile al lavoro. Poich&egrave; do la priorit&agrave; ai problemi su cui sto lavorando, posso fare progressi regolari su ci&ograve; che ritengo pi&ugrave; importante.
  <p markdown="1" class="pquote-credit">
— @danielbachhuber, ["Le mie condoglianze, ora sei il manutentore di un popolare progetto open source"](https://web.archive.org/web/20220306014037/https://danielbachhuber.com/2016/06/26/my-condolences-youre-now-the-maintainer-of-a-popular-open-source-project/)
  </p>
</aside>

A volte può essere difficile prendersi una pausa dal lavoro open source quando senti che il mondo intero ha bisogno di te. Le persone potrebbero anche provare a farti sentire in colpa per esserti allontanato.

Fai del tuo meglio per trovare supporto per i tuoi utenti e la community mentre sei lontano da un progetto. Se non riesci a trovare il supporto di cui hai bisogno, fai comunque una pausa. Assicurati di comunicare quando non sei disponibile in modo che le persone non siano confuse dalla tua mancanza di reattivit&agrave;.

Le pause si applicano anche a qualcosa di pi&ugrave; delle semplici vacanze. Se non vuoi lavorare open source nei fine settimana o durante l'orario di lavoro, comunica queste decisioni ad altri, in modo che sappiano che non ti daranno fastidio.

## Prenditi cura prima di te!

Mantenere un progetto popolare richiede competenze diverse rispetto alle prime fasi di crescita, ma non &egrave; meno gratificante. Come manutentore, eserciterai la leadership e le abilità personali a un livello che poche persone possono sperimentare. Anche se non &egrave; sempre facile da gestire, stabilire confini chiari e prendere solo ci&ograve; che ti fa sentire a tuo agio aiuter&agrave;. mantieniti felice, aggiornato e produttivo.
