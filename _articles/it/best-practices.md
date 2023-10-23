---
lang: it
title: Buone Pratiche per i Manutentori del Codice.
description: Semplificare la vita di un manutentore open source, dalla documentazione dei processi alla valorizzazione della comunità.
class: best-practices
order: 5
image: /assets/images/cards/best-practices.png
related:
  - metrics
  - leadership
---

## Cosa significa essere un manutentore?

Se mantenete un progetto open source utilizzato da molte persone, potreste aver notato che state scrivendo meno codice e rispondendo di più ai problemi.

Nelle prime fasi di un progetto, si sperimentano nuove idee e si prendono decisioni in base a ciò che si desidera. Con l'aumentare della popolarità del progetto, vi troverete a lavorare di più con i vostri utenti e collaboratori.

La manutenzione di un progetto richiede molto più del codice. Questi compiti sono spesso inaspettati, ma sono altrettanto importanti per un progetto in crescita. Abbiamo raccolto alcuni modi per semplificarvi la vita, dalla documentazione dei processi allo sfruttamento della vostra comunità.

## Documentare i processi

Scrivere è una delle cose più importanti che si possono fare come manutentori.

La documentazione non solo chiarisce il vostro pensiero, ma aiuta gli altri a capire di cosa avete bisogno o cosa vi aspettate, prima ancora che ve lo chiedano.

Scrivere le cose rende più facile dire di no quando qualcosa non rientra nel vostro ambito. Inoltre, è più facile che le persone si mettano a disposizione e diano una mano. Non si sa mai chi potrebbe leggere o utilizzare il vostro progetto.

Anche se non si usano paragrafi interi, è meglio annotare i punti salienti che non scrivere affatto.

Ricordate di tenere aggiornata la documentazione. Se non siete in grado di farlo sempre, cancellate la documentazione obsoleta o indicatela come obsoleta, in modo che i collaboratori sappiano che gli aggiornamenti sono benvenuti.

### Scrivere la visione del progetto

Iniziate scrivendo gli obiettivi del vostro progetto. Aggiungeteli al vostro README o create un file separato chiamato VISION. Se ci sono altri artefatti che possono essere utili, come una roadmap del progetto, rendete pubblici anche quelli.

Avere una visione chiara e documentata vi mantiene concentrati e vi aiuta a evitare lo "scope creep" dei contributi degli altri.

Ad esempio:
@lord ha scoperto che avere la visione di un progetto lo ha aiutato a realizzare quali richieste priorizzare. Come manutentore novizio, si pentì di non essere rimasto fedele allo scopo del progetto quando ricevette la sua prima richiesta di funzionalità per [Slate](https://github.com/lord/slate).

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/lord?s=180" class="pquote-avatar" alt="avatar">
  Ho provato. Non ho messo l'effort necessario per andare avanti con una soluzione completa. Invece di una soluzione a metà, avrei preferito dire: "In questo momento non ho tempo per questo, ma aggiungerò la funzionalità alla lista delle cose da fare in futuro."
  <p markdown="1" class="pquote-credit">
— @lord, ["Consigli per i manutentori del codice open source"](https://lord.io/blog/2014/oss-tips/)
  </p>
</aside>

### Comunicare le proprie aspettative

Le regole possono essere snervanti da scrivere. A volte si può avere l'impressione di controllare il comportamento degli altri o di uccidere tutto il divertimento.

Tuttavia, se scritte e fatte rispettare in modo equo, le buone regole responsabilizzano i manutentori. Impediscono di essere trascinati a fare cose che non si vogliono fare.

La maggior parte delle persone che si imbattono nel vostro progetto non sanno nulla di voi o della vostra situazione. Potrebbero pensare che siate pagati per lavorarci, soprattutto se si tratta di qualcosa che usano regolarmente e da cui dipendono. Forse un tempo dedicavate molto tempo al vostro progetto, ma ora siete impegnati con un nuovo lavoro o con un familiare.

Tutto questo va benissimo! Ma assicuratevi che gli altri lo sappiano.

Se il mantenimento del progetto è part-time o puramente volontario, siate onesti su quanto tempo avete a disposizione. Non si tratta di quanto tempo pensate che il progetto richieda, né di quanto tempo gli altri vogliono che dedichiate.

Ecco alcune regole che vale la pena mettere per iscritto:

* Come viene rivista e accettata una contribuzione (_Hanno bisogno di fare dei test? C'&egrave; un modello che devono usare per le issues?_)
* I tipi di contributi che accetterai (_Vuoi aiuto solo con una parte del codice?_)
* Quando &egrave; appropriato fare un follow-up (_ad es. "Puoi aspettarti una risposta da un manutentore del codice entro i prossimi 7 giorni. Se non hai avuto notizie entro quel tempo, non esitare a pingare il thread."_)
* Quanto tempo dedichi al progetto (_ad es. "Dedichiamo solo circa 5 ore a settimana a questo progetto"_)

[Jekyll](https://github.com/jekyll/jekyll/tree/master/docs), [CocoaPods](https://github.com/CocoaPods/CocoaPods/wiki/Communication-&-Design-Rules), e [Homebrew](https://github.com/Homebrew/brew/blob/bbed7246bc5c5b7acb8c1d427d10b43e090dfd39/docs/Maintainers-Avoiding-Burnout.md) sono alcuni esempi di progetti con regole chiare per manutentori e collaboratori.

### Mantenere la comunicazione pubblica

Non dimenticare di documentare anche le tue interazioni. Ovunque tu possa, mantieni la comunicazione sul tuo progetto pubblica. Se qualcuno cerca di contattarti in privato per discutere una richiesta di funzionalit&agrave; o un bisogno di supporto, indirizzalo educatamente verso un canale di comunicazione pubblico, come una mailing list o un issue tracker.