---
lang: it
title: Metriche Open Source
description: Prendi decisioni informate per aiutare il tuo progetto open source a prosperare misurando e monitorandone il successo.
class: metrics
order: 9
image: /assets/images/cards/metrics.png
related:
  - finding
  - best-practices
---

## Perché misurare qualcosa?

I dati, se utilizzati con saggezza, possono aiutarti a prendere decisioni migliori come sostenitore dell'open source.

Per ulteriori informazioni, puoi:

* Scopri come gli utenti reagiscono a una nuova funzionalità
* Scopri da dove provengono i nuovi utenti
* Identificare e decidere se supportare un caso d'uso o una funzionalità eccezionale
*Quantificare la popolarità del tuo progetto
* Scopri come viene utilizzato il tuo progetto
* Raccogliere fondi attraverso sponsorizzazioni e sovvenzioni

Per esempio [Homebrew](https://github.com/Homebrew/brew/blob/bbed7246bc5c5b7acb8c1d427d10b43e090dfd39/docs/Analytics.md) scopre che Google Analytics li aiuta a dare priorità al lavoro:

> Homebrew è fornito gratuitamente ed è gestito interamente da volontari nel loro tempo libero. Di conseguenza, non abbiamo le risorse per effettuare studi dettagliati sugli utenti di Homebrew per decidere come progettare al meglio le funzionalità future e dare priorità al lavoro attuale. L'analisi anonima degli utenti aggregati ci consente di dare priorità a correzioni e funzionalità in base a come, dove e quando le persone utilizzano Homebrew.

La popolarità non è tutto. Tutti entrano nell'open source per motivi diversi. Se il tuo obiettivo come sostenitore dell'open source è mostrare il tuo lavoro, essere trasparente riguardo al tuo codice o semplicemente divertirti, le metriche potrebbero non essere importanti per te.

Se sei interessato a comprendere il tuo progetto a un livello più profondo, leggi i modi per analizzare l'attività del tuo progetto.

## Scoperta

Prima che chiunque possa utilizzare o contribuire al tuo progetto, deve sapere che esiste. Chiediti: _le persone trovano questo progetto?_

![Grafico del traffico](/assets/images/metrics/repo_traffic_graphs_tooltip.png)

Se il tuo progetto è ospitato su GitHub, [puoi vedere](https://help.github.com/articles/about-repository-graphs/#traffic) quante persone arrivano al tuo progetto e da dove provengono . Dalla pagina del tuo progetto, fai clic su Approfondimenti, quindi su Traffico. In questa pagina puoi vedere:

* **Visualizzazioni di pagina totali:** indica quante volte il tuo progetto è stato visualizzato

* **Visitatori unici totali:** Ti dice quante persone hanno visto il tuo progetto

* **Siti di riferimento:** ti dice da dove provengono i tuoi visitatori. Questa metrica può aiutarti a capire dove raggiungere il tuo pubblico e se i tuoi sforzi di promozione stanno funzionando.

* **Contenuti popolari:** indica dove stanno andando i visitatori nel tuo progetto, suddivisi per visualizzazioni di pagina e visitatori unici.

[Le stelle di GitHub](https://help.github.com/articles/about-stars/) possono anche aiutare a fornire una misura di base della popolarità. Anche se le star di GitHub non sono necessariamente legate ai download e all'utilizzo, possono dirti quante persone prestano attenzione al tuo lavoro.

Potresti anche voler [monitorare la rilevabilità di posizioni specifiche](https://opensource.com/business/16/6/pirate-metrics): ad esempio, Google PageRank, traffico proveniente da referral dal sito web del tuo progetto o referral da altri progetti o siti web open source.

## Utilizzo

Le persone trovano il tuo progetto in questa cosa selvaggia e folle che chiamiamo Internet. Idealmente, quando vedranno il tuo progetto, si sentiranno obbligati a fare qualcosa. La seconda domanda che dovrai porre è: _ci sono persone che utilizzano questo progetto?_

Se utilizzi un gestore di pacchetti come npm o RubyGems.org per distribuire il tuo progetto, potresti essere in grado di monitorare i download del tuo progetto.

Ogni gestore di pacchetti può utilizzare una definizione leggermente diversa di "download" e i download non sono necessariamente correlati alle installazioni o all'utilizzo, ma forniscono alcune linee di base per il confronto. Prova a utilizzare [Libraries.io](https://libraries.io/) per tenere traccia delle statistiche di utilizzo su molti gestori di pacchetti popolari.

Se il tuo progetto è su GitHub, apri nuovamente la pagina Traffico. Puoi utilizzare il [grafico dei cloni](https://github.com/blog/1873-clone-graphs) per vedere quante volte il tuo progetto è stato clonato in un determinato giorno, suddiviso in cloni totali e cloni unici.

![Grafico dei cloni](/assets/images/metrics/clone_graph.png)

Se l'utilizzo è basso rispetto al numero di persone che hanno scoperto il tuo progetto, ci sono due problemi da considerare. O:

* Il tuo progetto non sta convertendo con successo il tuo pubblico, o
* Stai attirando il pubblico sbagliato

Ad esempio, se il tuo progetto arriva sulla prima pagina di Hacker News, probabilmente noterai un picco nella scoperta (traffico) ma un tasso di conversione inferiore perché stai raggiungendo tutti su Hacker News. Tuttavia, se il tuo progetto Ruby viene presentato a una conferenza Ruby, è più probabile che tu ottenga un tasso di conversione elevato da un pubblico target.

Cerca di capire da dove proviene il tuo pubblico e chiedi feedback agli altri sulla pagina del tuo progetto per scoprire quale di questi due problemi stai affrontando.

Una volta che sai che le persone utilizzano il tuo progetto, potresti provare a scoprire cosa ne fanno. Si basano su di esso biforcando il codice e aggiungendo funzionalità? Lo usano per la scienza o per gli affari?

## Presa

Le persone trovano il tuo progetto e lo usano. La prossima domanda che ti dovrai porre è: _le persone contribuiscono a questo progetto?_

Non è mai troppo presto per iniziare a pensare ai collaboratori. Senza l'intervento di altre persone, rischi di metterti in una situazione malsana in cui il tuo progetto è _popolare_ (molte persone lo usano) ma non _mantenuto_ (non abbastanza tempo di supporto per soddisfare la domanda).

La conservazione richiede anche [un afflusso di nuovi contributori](http://blog.abigailcabunoc.com/increasing-developer-engagement-at-mozilla-science-learning-advocacy#contributor-pathways_2) poiché i contributori precedentemente attivi alla fine passeranno a altre cose.

Esempi di parametri della community che potresti voler monitorare regolarmente includono:

* **Totale contributori e impegni per collaboratore:** indica quanti collaboratori hai e chi è più o meno attivo. Su GitHub puoi vederlo in Approfondimenti -> Collaboratori. Attualmente, questo grafico riporta solo i contributori che si sono impegnati nel ramo predefinito del repository.

![Graffico dei collaboratori](/assets/images/metrics/repo_contributors_specific_graph.png)

* **Primi contributori, collaboratori occasionali e ricorrenti:** ti aiuta a monitorare se ottieni nuovi contributori e se ritornano. (I contributori occasionali sono contributori con un numero limitato di commit. Che si tratti di un commit, di meno di cinque commit o di qualcos'altro dipende da te.) Senza nuovi contributori, la comunità del tuo progetto può ristagnare.

* **Numero di problemi aperti e richieste pull aperte:** Se questi numeri diventano troppo alti, potresti aver bisogno di aiuto con l'ordinamento dei problemi e le revisioni del codice.

* **Numero di problemi _aperti_ e richieste pull _aperte_:** I problemi aperti indicano che qualcuno è sufficientemente interessato al tuo progetto da aprire un problema. Se questo numero aumenta nel tempo, significa che le persone sono interessate al tuo progetto.

* **Tipi di contributi:** Ad esempio, commit, correzione di errori di battitura o di commento o commento su un problema.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/arfon?s=180" class="pquote-avatar" alt="avatar">
  L'open source è più del semplice codice. I progetti open source di successo includono il contributo di codice e documentazione insieme a conversazioni su tali modifiche.
  <p markdown="1" class="pquote-credit">
— @arfon, ["Il formato open source"](https://github.com/blog/2195-the-shape-of-open-source)
  </p>
</aside>

## Attività di supporto

Infine, ti consigliamo di chiudere il ciclo assicurandoti che i sostenitori del tuo progetto siano in grado di gestire il volume dei contributi ricevuti. L'ultima domanda che vorrai farti è: _sto (o stiamo) rispondendo alla nostra community?_

I manutentori che non rispondono diventano un ostacolo per i progetti open source. Se qualcuno invia un contributo ma non riceve mai risposta dal manutentore, potrebbe sentirsi scoraggiato e andarsene.

[Una ricerca di Mozilla](https://docs.google.com/presentation/d/1hsJLv1ieSqtXBzd5YZusY-mB8e1VJzaeOmh8Q4VeMio/edit#slide=id.g43d857af8_0177) suggerisce che la reattività del manutentore è un fattore critico nell'incoraggiare la ripetizione dei contributi.

Prendi in considerazione [il monitoraggio del tempo impiegato da te (o da un altro manutentore) per rispondere alle richieste pull](https://github.blog/2023-07-19-metrics-for-issues-pull-requests-and-discussions/), che si tratti di un problema o di una richiesta di download. La risposta non richiede alcuna azione. Potrebbe essere semplice come dire: _"Grazie per il tuo contributo! Esaminerò la questione la prossima settimana."_

Puoi anche misurare il tempo necessario per passare da una fase all'altra del processo di contribuzione, ad esempio:

* Tempo medio in cui il problema rimane aperto
* Se i problemi vengono risolti dai PR
* Se i problemi obsoleti sono chiusi
* Tempo medio per unire una richiesta pull

## Usa 📊 per conoscere le persone

Comprendere le metriche ti aiuterà a costruire un progetto open source attivo e in crescita. Anche se non tieni traccia di tutte le metriche della dashboard, utilizza la struttura sopra per focalizzare la tua attenzione sul tipo di comportamento che aiuterà il tuo progetto a prosperare.

[CHAOSS](https://chaoss.community/) è un'accogliente comunità open source focalizzata su analisi, metriche e software sulla salute della comunità.
