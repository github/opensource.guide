---
lang: it
title: Buone Pratiche per i Manutentori del Codice.
description: Rendendo la tua vita pi&ugrave; facile come manutentore di codice open source, dal processo di documentazione al massimizzare i benefici dalla comunit&agrave;.
class: best-practices
order: 5
image: /assets/images/cards/best-practices.png
related:
  - metrics
  - leadership
---

## Cosa significa essere un manutentore del codice?

Se il tuo lavoro &egrave; mantenere un progetto di codice aperto che molte persone usano, probabilmente ti sei reso conto che passi pi&ugrave; tempo a rispondere ai problemi che a programmare.

Nelle prime fasi di un progetto, passi il tempo a sperimentare nuove idee e a prendere decisioni basate su ci&ograve; che ti piace. Man mano che il tuo progetto cresce in popolarit&agrave;, ti troverai a lavorare sempre di pi&ugrave; con i tuoi utenti e collaboratori.

Mantenere un progetto richiede pi&ugrave; che solo codice. Queste attivit&agrave; spesso non vengono prese in considerazione, ma sono altrettanto importanti per un progetto in crescita. Abbiamo raccolto alcune idee che renderanno la tua vita pi&ugrave; facile, dal processo di documentazione al massimizzare i benefici dalla comunit&agrave;.

## Documentare i tuoi processi

Prendere nota delle procedure &egrave; una delle migliori pratiche che puoi seguire come manutentore del codice.

Documentare non solo chiarisce il tuo pensiero, ma aiuta anche gli altri a capire cosa ti aspetti o cosa stai aspettando, senza nemmeno dover chiedere.

Prendere nota dei processi semplifica il fatto di dire no quando la proposta di qualcuno non si adatta al tuo contesto. Cos&igrave; come rende pi&ugrave; facile per altre persone partecipare e aiutare. Non sai mai chi potrebbe leggere o usare il tuo progetto.

Anche se non sei il tipo di persona che scrive paragrafi completi, avere le note chiave &egrave; meglio che non avere niente.

### Rendere chiara la visione del tuo progetto

Inizia scrivendo gli obiettivi del tuo progetto. Aggiungili al tuo file README o crea un file separato chiamato VISIONE. Se ci sono altri oggetti che possono aiutare, come una mappa del progetto, rendili pubblici anche.

Avere una visione chiara e documentata ti mantiene focalizzato e aiuta ad evitare malintesi sullo scopo da parte degli altri collaboratori.

Ad esempio:
@lord ha scoperto che avere la visione di un progetto lo ha aiutato a realizzare quali richieste priorizzare. Come manutentore novizio, si pent&igrave; di non essere rimasto fedele allo scopo del progetto quando ricevette la sua prima richiesta di funzionalit&agrave; per [Slate](https://github.com/lord/slate).

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/lord?s=180" class="pquote-avatar" alt="avatar">
  Ho provato. Non ho messo l'effort necessario per andare avanti con una soluzione completa. Invece di una soluzione a met&agrave;, avrei preferito dire: "In questo momento non ho tempo per questo, ma aggiunger&ograve; la funzionalit&agrave; alla lista delle cose da fare in futuro."
  <p markdown="1" class="pquote-credit">
— @lord, ["Consigli per i manutentori del codice open source"](https://lord.io/blog/2014/oss-tips/)
  </p>
</aside>

### Comunicare le tue aspettative

A volte pu&ograve; essere difficile dettagliare le regole affinché altre persone possano contribuire. Potresti sentirti come se stessi agendo come un poliziotto o rovinando il divertimento per gli altri.

Se scritte ed applicate in modo equo, le buone regole danno potere ai manutentori del codice. Ti impediscono di farti trascinare in cose che non vuoi fare.

La maggior parte delle persone che incontrano il tuo progetto non sanno nulla di te o delle tue circostanze. Potrebbero presumere che tu venga pagato per lavorarci, specialmente se &egrave; qualcosa di cui si affidano e dipendono regolarmente. Forse un tempo dedicavi molto tempo al tuo progetto, ma ora sei occupato con un nuovo lavoro o con un membro della famiglia.

¡Va benissimo! Assicurati solo che la gente lo sappia.

Se mantieni il tuo progetto part-time o semplicemente come volontario, sii onesto su quanto tempo hai. Questo non &egrave; lo stesso di quanto tempo pensi che il progetto richieda o quanto tempo gli altri vogliano che tu spenda.

Ecco alcune regole che potresti voler considerare:

* Come viene rivista e accettata una contribuzione (_Hanno bisogno di fare dei test? C'&egrave; un modello che devono usare per le issues?_)
* I tipi di contributi che accetterai (_Vuoi aiuto solo con una parte del codice?_)
* Quando &egrave; appropriato fare un follow-up (_ad es. "Puoi aspettarti una risposta da un manutentore del codice entro i prossimi 7 giorni. Se non hai avuto notizie entro quel tempo, non esitare a pingare il thread."_)
* Quanto tempo dedichi al progetto (_ad es. "Dedichiamo solo circa 5 ore a settimana a questo progetto"_)

[Jekyll](https://github.com/jekyll/jekyll/tree/master/docs), [CocoaPods](https://github.com/CocoaPods/CocoaPods/wiki/Communication-&-Design-Rules), e [Homebrew](https://github.com/Homebrew/brew/blob/bbed7246bc5c5b7acb8c1d427d10b43e090dfd39/docs/Maintainers-Avoiding-Burnout.md) sono alcuni esempi di progetti con regole chiare per manutentori e collaboratori.

### Mantenere la comunicazione pubblica

Non dimenticare di documentare anche le tue interazioni. Ovunque tu possa, mantieni la comunicazione sul tuo progetto pubblica. Se qualcuno cerca di contattarti in privato per discutere una richiesta di funzionalit&agrave; o un bisogno di supporto, indirizzalo educatamente verso un canale di comunicazione pubblico, come una mailing list o un issue tracker.
