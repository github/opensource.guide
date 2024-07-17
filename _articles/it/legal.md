---
lang: it
title: Il lato legale dell'open source
description: Tutto quello che ti sei sempre chiesto riguardo al lato legale dell'open source e alcune cose che non ti sei chiesto.
class: legal
order: 10
image: /assets/images/cards/legal.png
related:
  - contribute
  - leadership
---

## Comprendere le implicazioni legali dell'open source

Condividere il tuo lavoro creativo con il mondo può essere un'esperienza emozionante e gratificante. Può anche significare un sacco di cose legali di cui non sapevi di doverti preoccupare. Fortunatamente, con questa guida non è necessario ricominciare da zero. (Prima di approfondire, assicurati di leggere il nostro [disclaimer](/notices/).)

## Perché le persone si preoccupano così tanto del lato legale dell'open source?

Sono felice che tu l'abbia chiesto! Quando realizzi un'opera creativa (come scrittura, grafica o codice), quell'opera è protetta da copyright esclusivo per impostazione predefinita. Cioè, la legge presuppone che, come autore del tuo lavoro, tu abbia voce in capitolo su ciò che gli altri possono fare con esso.

In genere, ciò significa che nessun altro può utilizzare, copiare, distribuire o modificare il tuo lavoro senza correre il rischio di rimozione, squalifica o contenzioso.

Tuttavia, l'open source è una circostanza insolita perché l'autore si aspetta che altri utilizzino, modifichino e condividano il lavoro. Ma poiché il valore legale predefinito è ancora il diritto d'autore esclusivo, è necessario concedere esplicitamente queste autorizzazioni con una licenza.

Queste regole si applicano anche quando qualcuno contribuisce al tuo progetto. Senza licenza o altro accordo, tutti i contributi sono di proprietà esclusiva dei loro autori. Ciò significa che nessuno – nemmeno tu – può utilizzare, copiare, distribuire o modificare il proprio contributo.

Infine, il tuo progetto potrebbe avere dipendenze con requisiti di licenza di cui non eri a conoscenza. La comunità del tuo progetto o le politiche del tuo datore di lavoro potrebbero anche richiedere che il tuo progetto utilizzi licenze open source specifiche. Esamineremo queste situazioni di seguito.

## Публичните GitHub проекти с отворен код ли са?

Quando [crei nuovo progetto](https://help.github.com/articles/creating-a-new-repository/) su GitHub, hai la possibilità di rendere il repository **privato** o **pubblico**.

![Crea un archivio](/assets/images/legal/repo-create-name.png)

**Rendere pubblico il tuo progetto GitHub non equivale a concedergli una licenza.** I progetti pubblici sono coperti dai [Termini di servizio di GitHub](https://docs.github.com/en/site-policy/github-terms/github-terms-of-service#3-ownership-of-content-right-to-post-and-license-grants), che consente ad altri di rivedere e creare un fork del tuo progetto, ma per il resto il tuo lavoro arriva senza autorizzazioni.

Se desideri che altri utilizzino, distribuiscano, modifichino o contribuiscano al tuo progetto, devi includere una licenza open source. Ad esempio, qualcuno non può utilizzare legalmente alcuna parte del tuo progetto GitHub nel proprio codice, anche se è pubblico, a meno che tu non gli conceda specificatamente il diritto di farlo.

## Dammi solo un riepilogo di ciò di cui ho bisogno per proteggere il mio progetto.

Sei fortunato perché oggi le licenze open source sono standardizzate e facili da usare. Puoi copiare e incollare una licenza esistente direttamente nel tuo progetto.

[MIT](https://choosealicense.com/licenses/mit/), [Apache 2.0](https://choosealicense.com/licenses/apache-2.0/) e [GPLv3](https://choosealicense.com/licenses/gpl-3.0/) sono [licenze open source popolari](https://innovationgraph.github.com/global-metrics/licenses), ma ci sono altre opzioni tra cui scegliere. È possibile trovare il testo completo di queste licenze e le istruzioni su come utilizzarle all'indirizzo [choosealicense.com](https://choosealicense.com/).

Quando crei un nuovo progetto su GitHub, ti verrà [chiesto di aggiungere una licenza](https://help.github.com/articles/open-source-licensing/).

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/benbalter?s=180" class="pquote-avatar" alt="avatar">
  La licenza standardizzata funge da sostituto per coloro che non hanno una formazione legale per sapere esattamente cosa possono e non possono fare con il software. A meno che non sia assolutamente necessario, evitare termini personalizzati, modificati o non standard che costituiranno un ostacolo all'utilizzo del codice dell'agenzia a valle.
  <p markdown="1" class="pquote-credit">
— @benbalter, ["Tutto ciò che un avvocato governativo deve sapere sulle licenze open source"](https://ben.balter.com/2014/10/08/open-source-licensing-for-government-attorneys/)
  </p>
</aside>

## Quale licenza open source è adatta al mio progetto?

È difficile sbagliare con la [licenza MIT](https://choosealicense.com/licenses/mit/) se inizi con un foglio bianco. È breve, facile da capire e consente a chiunque di fare qualsiasi cosa purché conservi una copia della licenza, inclusa la nota sul copyright. Potrai rilasciare il progetto con una licenza diversa, se mai ne avessi bisogno.

Altrimenti, la scelta della giusta licenza open source per il tuo progetto dipende dai tuoi obiettivi.

Molto probabilmente il tuo progetto ha (o avrà) **dipendenze**, ognuna delle quali avrà la propria licenza open source con termini che dovrai rispettare. Ad esempio, se stai rendendo open source un progetto Node.js, probabilmente utilizzerai le librerie di Node Package Manager (npm).

Dipendenze con **licenze permissive** come [MIT](https://choosealicense.com/licenses/mit/), [Apache 2.0](https://choosealicense.com/licenses/apache-2.0/), [ISC](https://choosealicense.com/licenses/isc) e [BSD](https://choosealicense.com/licenses/bsd-3-clause) ti consentono di concedere in licenza il tuo progetto come preferisci.

Le dipendenze con **licenze di copyright** richiedono maggiore attenzione. Inclusa qualsiasi libreria con una licenza copyleft "forte" come [GPLv2](https://choosealicense.com/licenses/gpl-2.0), [GPLv3](https://choosealicense.com/licenses/gpl-3.0), o [AGPLv3](https://choosealicense.com/licenses/agpl-3.0) richiede la scelta di una licenza identica o [compatibile](https://www.gnu.org/licenses/license-list.en.html#GPLCompatibleLicenses) per il tuo progetto. Librerie con una licenza copyleft "limitata" o "debole" come [MPL 2.0](https://choosealicense.com/licenses/mpl-2.0/) e [LGPL](https://choosealicense.com/licenses/lgpl-3.0/) può essere incluso in progetti con qualsiasi licenza, a condizione che si seguano le [regole aggiuntive](https://fossa.com/blog/all-about-copyleft-licenses/#:~:text=weak%20copyleft%20licenses%20also%20obligate%20users%20to%20release%20their%20changes.%20however%2C%20this%20requirement%20applies%20to%20a%20narrower%20set%20of%20code.) sottolineano.
 
Puoi anche controllare le **community** che speri di utilizzare e contribuire al tuo progetto:

* **Vuoi che il tuo progetto venga utilizzato come dipendenza da altri progetti?** Probabilmente è meglio utilizzare la licenza più popolare nella comunità pertinente. Ad esempio, [MIT](https://choosealicense.com/licenses/mit/) è la licenza più popolare per [librerie npm](https://libraries.io/search?platforms=NPM).
* **Vuoi che il tuo progetto attiri le grandi imprese?** Le grandi imprese possono essere confortate da una licenza di brevetto espressa da parte di tutti i contributori. In tal caso, [Apache 2.0](https://choosealicense.com/licenses/apache-2.0/) copre te (e loro).
* **Vuoi che il tuo progetto attiri i contributori che non vogliono che i loro contributi vengano utilizzati in software closed source?** [GPLv3](https://choosealicense.com/licenses/gpl-3.0/) o (se non vogliono contribuire ai servizi closed source) [AGPLv3](https://choosealicense.com/licenses/agpl-3.0/) andrà benissimo.

La tua **azienda** potrebbe avere politiche di licenza per progetti open source. Alcune aziende richiedono che i tuoi progetti abbiano una licenza permissiva per consentire l'integrazione con i prodotti proprietari dell'azienda. Altre politiche impongono una forte licenza copyleft e un accordo di collaborazione aggiuntivo (vedi sotto), in modo che solo la tua azienda possa utilizzare il progetto nel software closed source. Le organizzazioni possono anche avere determinati standard, obiettivi di responsabilità sociale o esigenze di trasparenza che potrebbero richiedere una strategia di licenza specifica. Rivolgiti a [l'ufficio legale della tua azienda](#il-mio-progetto-necessita-di-un-contratto-di-collaborazione-aggiuntivo) per ricevere assistenza.

Quando crei un nuovo progetto su GitHub, ti viene data la possibilità di scegliere una licenza. Includere una delle licenze sopra menzionate renderà il tuo progetto GitHub open source. Se vuoi vedere altre opzioni, controlla [choosealicense.com](https://choosealicense.com) per trovare la licenza giusta per il tuo progetto, anche se è [non software](https://choosealicense.com/non-software/).

## Cosa succede se voglio cambiare la licenza del mio progetto?

Nella maggior parte dei progetti non è mai necessario modificare le licenze. Ma a volte le circostanze cambiano.

Ad esempio, man mano che il tuo progetto cresce, aggiunge dipendenze o utenti oppure la tua azienda cambia strategie, ognuna delle quali potrebbe richiedere o richiedere una licenza diversa. Inoltre, se hai dimenticato di concedere la licenza al tuo progetto fin dall'inizio, aggiungere una licenza equivale praticamente a modificare le licenze. Ci sono tre cose principali da tenere a mente quando aggiungi o modifichi la licenza del tuo progetto:

**È complicato.** Determinare la compatibilità e la conformità della licenza e chi possiede il copyright può diventare complicato e creare confusione molto rapidamente. Passare a una licenza nuova ma compatibile per nuove versioni e contributi è diverso dal concedere nuovamente in licenza tutti i contributi esistenti. Coinvolgi il tuo team legale al primo accenno di desiderio di modificare le licenze. Anche se hai o puoi ottenere il permesso dai detentori del copyright del tuo progetto per modificare la licenza, considera l'impatto della modifica sugli altri utenti e contributori al tuo progetto. Pensa a una modifica della licenza come a un "evento di gestione" per il tuo progetto, che è più probabile che si svolga senza intoppi con una comunicazione chiara e una consultazione con le parti interessate del progetto. Un motivo in più per scegliere e utilizzare una licenza adeguata per il tuo progetto fin dal suo inizio!

**Licenza esistente del tuo progetto.** Se la licenza esistente del tuo progetto è compatibile con la licenza che desideri modificare, puoi semplicemente iniziare a utilizzare la nuova licenza. Questo perché se la licenza A è compatibile con la licenza B, rispetterai i termini di A rispettando allo stesso tempo i termini di B (ma non necessariamente il contrario). Pertanto, se stai attualmente utilizzando una licenza permissiva (ad esempio MIT), puoi passare a una licenza con più termini purché conservi una copia della licenza MIT e di eventuali avvisi di copyright associati (ovvero continui a rispettare i termini minimi della licenza MIT). Ma se la tua licenza attuale non è permissiva (ad esempio copyleft o non hai una licenza) e non sei l'unico detentore del copyright, non puoi semplicemente cambiare la licenza del tuo progetto MIT. In sostanza, con una licenza permissiva, i detentori dei diritti d'autore del progetto hanno dato il permesso preventivo di modificare le licenze.

**Detentori del copyright esistenti del tuo progetto.** Se sei l'unico collaboratore del tuo progetto, tu o la tua azienda siete gli unici detentori del copyright del progetto. Puoi aggiungere o modificare qualsiasi licenza tu o la tua azienda desideriate. In caso contrario, potrebbero esserci altri titolari di copyright di cui è necessario il consenso per modificare le licenze. Loro chi sono? [Le persone che si sono impegnate nel tuo progetto](https://github.com/thehale/git-authorship) è un buon punto di partenza. Ma in alcuni casi i diritti d'autore saranno detenuti dai datori di lavoro di quelle persone. In alcuni casi le persone avranno dato solo un contributo minimo, ma non esiste una regola ferrea secondo cui i contributi al di sotto di un certo numero di righe di codice non sono soggetti a copyright. Cosa fare? Dipende. Per un progetto relativamente piccolo e giovane, potrebbe essere possibile convincere tutti i contributori esistenti ad accettare una modifica della licenza in un problema o in una richiesta pull. Per progetti grandi e a lungo termine, potrebbe essere necessario cercare molti collaboratori e persino i loro successori. Mozilla ha impiegato anni (2001-2006) per concedere nuovamente la licenza a Firefox, Thunderbird e al relativo software.

In alternativa, puoi chiedere ai contributori di pre-approvare alcune modifiche alla licenza tramite un contratto di collaborazione aggiuntivo ([vedi su](#quale-licenza-open-source-è-adatta-al-mio-progetto)). Ciò elimina parte della complessità della modifica delle licenze. Avrai bisogno di maggiore aiuto da parte dei tuoi avvocati in anticipo e vorrai comunque comunicare chiaramente con le parti interessate del progetto quando effettui una modifica della licenza.

## Il mio progetto necessita di un contratto di collaborazione aggiuntivo?

Probabilmente no. Per la stragrande maggioranza dei progetti open source, la licenza open source funge implicitamente sia da licenza in entrata (dai contributori) che da licenza in uscita (ad altri contributori e utenti). Se il tuo progetto è su GitHub, i Termini di servizio di GitHub rendono "inbound=outbound" [esplicito per impostazione predefinita](https://help.github.com/en/github/site-policy/github-terms-of-service#6-contributi-sotto-licenza-repository).

Un ulteriore contratto di collaborazione, spesso chiamato Contributor License Agreement (CLA), può creare lavoro amministrativo per i manutentori del progetto. La quantità di lavoro aggiunta da un accordo dipende dal progetto e dall'implementazione. Un tipico accordo potrebbe richiedere ai contributori di confermare con un clic di possedere i diritti necessari per contribuire secondo la licenza open source del progetto. Un accordo più complesso può richiedere la revisione legale e la firma da parte dei datori di lavoro dei contributori.

Inoltre, aggiungendo "documentazione" che alcuni ritengono non necessaria, difficile da comprendere o ingiusta (quando il destinatario dell'accordo ottiene più diritti dei contributori o del pubblico attraverso la licenza open source del progetto), un ulteriore accordo con il contributore può essere percepito come ostile alla comunità del progetto.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/bcantrill?s=180" class="pquote-avatar" alt="avatar">
    Abbiamo rimosso il CLA per Node.js. Ciò riduce la barriera all’ingresso per i contributori di Node.js, espandendo così la base dei contributori.
  <p markdown="1" class="pquote-credit">
— @bcantrill, ["Estensione dei contributi Node.js"](https://www.tritondatacenter.com/blog/broadening-node-js-contributions)
  </p>
</aside>

Alcune situazioni in cui potresti prendere in considerazione un accordo di collaborazione aggiuntivo per il tuo progetto includono:

* I tuoi avvocati vogliono che tutti i contributori accettino esplicitamente (_firmano_, online o offline) i termini del contributo, forse perché ritengono che la licenza open source da sola non sia sufficiente (anche se lo è!). Se questa è l'unica preoccupazione, dovrebbe essere sufficiente un accordo di collaborazione che riconosca la licenza open source del progetto. Il contratto di licenza per collaboratore individuale jQuery è un buon esempio di contratto per collaboratore aggiuntivo leggero.
* Tu o i tuoi avvocati volete che gli sviluppatori dichiarino che ogni impegno che assumono è autorizzato. Il requisito del [Certificato di origine dello sviluppatore](https://developercertificate.org/) indica quanti progetti raggiungono questo obiettivo. Ad esempio, la comunità Node.js [utilizza](https://github.com/nodejs/node/blob/HEAD/CONTRIBUTING.md) DCO [invece di](https://nodejs.org/en/blog/uncategorized/notes-from-the-road/#easier-contribution) dal loro precedente CLA. Una semplice opzione per automatizzare l'implementazione di DCO nel tuo repository è [DCO Probot](https://github.com/probot/dco).
* Il tuo progetto utilizza una licenza open source che non include una concessione espressa di brevetto (come il MIT) e hai bisogno dell'autorizzazione al brevetto da parte di tutti i contributori, alcuni dei quali potrebbero lavorare per aziende con ampi portafogli di brevetti che potrebbero essere utilizzati per prendere di mira te o altri contributori e utenti del progetto. Il [Contratto di licenza per collaboratore personale Apache](https://www.apache.org/licenses/icla.pdf) è un contratto per collaboratore supplementare comunemente utilizzato che prevede una concessione di brevetto che rispecchia quella presente nella licenza Apache 2.0.
* Il tuo progetto è protetto da licenza copyleft, ma devi anche distribuire la tua versione del progetto. Ogni collaboratore dovrà assegnarti il ​​copyright o concedere a te (ma non al pubblico) una licenza permissiva. Il [Contratto di collaborazione MongoDB](https://www.mongodb.com/legal/contributor-agreement) è un esempio di questo tipo di contratto.
* Ritieni che il tuo progetto potrebbe dover modificare le licenze nel corso della sua vita e desideri che i partecipanti accettino tali modifiche in anticipo.

Se hai comunque bisogno di utilizzare un contratto di collaborazione aggiuntivo con il tuo progetto, prendi in considerazione l'utilizzo di un'integrazione come [Assistente CLA](https://github.com/cla-assistant/cla-assistant) per ridurre al minimo la distrazione del collaboratore.

## Cosa deve sapere il team legale della mia azienda?

Se stai lanciando un progetto open source come dipendente dell'azienda, innanzitutto il tuo team legale deve sapere che sei un progetto open source.

Nel bene e nel male, considera di farglielo sapere, anche se si tratta di un progetto personale. Probabilmente hai un "accordo di proprietà intellettuale dei dipendenti" con la tua azienda che dà loro un certo controllo sui tuoi progetti, soprattutto se sono legati all'attività aziendale o se stai utilizzando risorse aziendali per sviluppare il progetto. La tua azienda _dovrebbe_ concederti facilmente l'autorizzazione e potrebbe già averlo fatto tramite un accordo IP o una politica aziendale favorevole ai dipendenti. In caso contrario, puoi negoziare (ad esempio spiegando che il tuo progetto serve agli obiettivi di apprendimento e sviluppo professionale dell'azienda per te) o evitare di lavorare sul tuo progetto finché non trovi un'azienda migliore.

**Se stai cercando un progetto open source per la tua azienda**, faglielo sapere. Probabilmente il tuo team legale ha già delle politiche su quale licenza open source (e forse un accordo di collaborazione aggiuntivo) da utilizzare in base ai requisiti aziendali e all'esperienza dell'azienda nel garantire che il tuo progetto sia conforme alle licenze delle sue dipendenze. In caso contrario, tu e loro siete fortunati! Il tuo team legale dovrebbe essere desideroso di lavorare con te per capire queste cose. Alcune cose a cui pensare:

* **Materiale di terze parti:** Il tuo progetto ha dipendenze create da altri o include o utilizza in altro modo codice di terze parti? Se sono open source, dovrai rispettare le licenze open source dei materiali. Questo inizia con la scelta di una licenza che funzioni con licenze open source di terze parti ([vedi sopra](#quale-licenza-open-source-è-adatta-al-mio-progetto)). Se il tuo progetto modifica o distribuisce materiale open source di terze parti, il tuo team legale vorrà anche sapere se rispetti altri termini delle licenze open source di terze parti, come il mantenimento degli avvisi di copyright. Se il tuo progetto utilizza codice di terze parti che non dispone di una licenza open source, potresti dover chiedere ai manutentori di terze parti di [aggiungere una licenza open source](https://choosealicense.com/no-license/#for-users) e, se non riesci a ottenerne uno, smetti di usare il loro codice nel tuo progetto.

* **Segreti commerciali:** Considera se c'è qualcosa nel progetto che l'azienda non vuole rendere disponibile al pubblico in generale. In tal caso, puoi aprire il resto del tuo progetto dopo aver estratto il materiale che desideri mantenere privato.

* **Brevetti:** La tua azienda sta richiedendo un brevetto per il quale l'open source del tuo progetto costituirebbe [divulgazione pubblica](https://en.wikipedia.org/wiki/Public_disclosure)? Sfortunatamente, ti potrebbe essere chiesto di attendere (o forse la società riconsidererà la ragionevolezza della richiesta). Se ti aspetti contributi al tuo progetto da dipendenti di aziende con un ampio portafoglio di brevetti, il tuo team legale potrebbe richiederti di utilizzare una licenza con una concessione esplicita di brevetto da parte dei contributori (come Apache 2.0 o GPLv3) o un ulteriore accordo con il collaboratore ([vedi sopra](#quale-licenza-open-source-è-adatta-al-mio-progetto)).

* **Marchi commerciali:** Controlla che il nome del tuo progetto [non sia in conflitto con i marchi esistenti](../starting-a-project/#evitare-conflitti-di-nomi). Se utilizzi i marchi della tua azienda nel progetto, controlla che non ci siano conflitti. [FOSSmarks](http://fossmarks.org/) è una guida pratica per comprendere i marchi nel contesto di progetti gratuiti e open source.

* **Privacy:** Il tuo progetto raccoglie dati degli utenti? "Telefono di casa" ai server aziendali? Il tuo team legale può aiutarti a rispettare le politiche aziendali e le normative esterne.

Se stai lanciando il primo progetto open source della tua azienda, quanto sopra è più che sufficiente per farcela (ma non preoccuparti, la maggior parte dei progetti non dovrebbe essere un grosso problema).

Nel lungo termine, il tuo team legale può fare di più per aiutare l'azienda a ottenere di più dal suo coinvolgimento open source e rimanere al sicuro:

* **Regole per il contributo dei dipendenti:** Valuta la possibilità di sviluppare una politica aziendale che definisca il modo in cui i tuoi dipendenti contribuiscono ai progetti open source. Una politica chiara ridurrà la confusione tra i tuoi dipendenti e li aiuterà a contribuire a progetti open source nel migliore interesse dell'azienda, sia come parte del loro lavoro che nel loro tempo libero. Un buon esempio è [un IP modello e una politica di contributo open source](https://processmechanics.com/2015/07/23/a-model-ip-and-open-source-contribution-policy/) di Rackspace.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/vanl?s=180" class="pquote-avatar" alt="avatar">
  Fornire proprietà intellettuale correzionale rafforza la base di conoscenze e la reputazione di un dipendente. Ciò dimostra che l'azienda ha investito nello sviluppo del dipendente e crea un senso di empowerment e autonomia. Tutti questi vantaggi portano anche a un morale più alto e a una migliore fidelizzazione dei dipendenti.
  <p markdown="1" class="pquote-credit">
— @vanl, ["Modello IP e politica di contributo open source"](https://processmechanics.com/2015/07/23/a-model-ip-and-open-source-contribution-policy/)
  </p>
</aside>

* **Cosa pubblicare:** [(Quasi) tutto?](http://tom.preston-werner.com/2011/11/22/open-source-everything.html) АQuando il tuo team legale comprende ed è investito nella strategia open source della tua azienda, sarà in grado di aiutarti meglio piuttosto che ostacolare i tuoi sforzi.
* **Conformità:** Anche se la tua azienda non rilascia progetti open source, utilizza software open source di terze parti. [Consapevolezza e processo](https://www.linuxfoundation.org/blog/blog/why-companies-that-use-open-source-need-a-compliance-program/) possono prevenire mal di testa, ritardi nei prodotti e azioni legali.

<aside markdown="1" class="pquote">
  Le organizzazioni devono disporre di una strategia di licenza e conformità che soddisfi entrambe le categorie \["permissivo" e "copyleft"\]. Ciò inizia con la tenuta di un registro dei termini di licenza che si applicano al software open source utilizzato, inclusi sottocomponenti e dipendenze.
  <p markdown="1" class="pquote-credit">
— Heather Meeker, ["Software open source: nozioni di base e best practice sulla conformità"](https://techcrunch.com/2012/12/14/open-source-software-compliance-basics-and-best-practices/)
  </p>
</aside>

* **Brevetti:** la tua azienda potrebbe voler aderire a [Open Invention Network](https://www.openinventionnetwork.com/), un pool di brevetti condiviso e sicuro per proteggere l'uso da parte dei membri di grandi progetti open source o per esplorare altre [licenze di brevetti alternative](https://www.eff.org/document/hacking-patent-system-2016).
* **Governance:** Soprattutto se e quando ha senso trasferire un progetto a [un'entità legale esterna all'azienda](../leadership-and-governance/#ho-bisogno-di-una-persona-giuridica-per-sostenere-il-mio-progetto).
