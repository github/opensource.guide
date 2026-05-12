---
lang: it
title: Le migliori pratiche di sicurezza per il tuo progetto
description: Rafforza il futuro del tuo progetto creando fiducia attraverso pratiche di sicurezza essenziali, dall'MFA e dalla scansione del codice alla gestione sicura delle dipendenze e alla segnalazione di vulnerabilità private.
class: security-best-practices
order: -1
image: /assets/images/cards/security-best-practices.png
---

A parte bug e nuove funzionalità, la longevità di un progetto dipende non solo dalla sua utilità, ma anche dalla fiducia che guadagna dai suoi utenti. Misure di sicurezza efficaci sono fondamentali per mantenere viva questa fiducia. Ecco alcune azioni importanti che puoi intraprendere per migliorare significativamente la sicurezza del tuo progetto.

## Assicurati che tutti i collaboratori con privilegi abbiano abilitato l'autenticazione a più fattori (MFA)

### Un malintenzionato che riesca a impersonare un collaboratore con privilegi nel tuo progetto causerà danni catastrofici.

Una volta ottenuto l'accesso con privilegi, questo malintenzionato può modificare il tuo codice per eseguire azioni indesiderate (ad esempio, estrarre criptovalute), oppure può distribuire malware all'infrastruttura dei tuoi utenti, o ancora può accedere a repository di codice privati ​​per esfiltrare proprietà intellettuale e dati sensibili, incluse le credenziali di accesso ad altri servizi.

L'MFA fornisce un ulteriore livello di sicurezza contro il furto di account. Una volta abilitata, devi accedere con il tuo nome utente e password e fornire un'altra forma di autenticazione che solo tu conosci o a cui hai accesso.

## Proteggi il tuo codice come parte del tuo flusso di lavoro di sviluppo

### Le vulnerabilità di sicurezza nel tuo codice sono più economiche da risolvere se rilevate nelle prime fasi del processo rispetto a quando vengono utilizzate in produzione.

Utilizza uno strumento SAST (Static Application Security Testing) per rilevare le vulnerabilità di sicurezza nel tuo codice. Questi strumenti operano a livello di codice e non necessitano di un ambiente di esecuzione, quindi possono essere eseguiti nelle prime fasi del processo e possono essere integrati perfettamente nel tuo consueto flusso di lavoro di sviluppo, durante la build o durante le fasi di revisione del codice.

È come avere un esperto qualificato che esamina il tuo repository di codice, aiutandoti a trovare vulnerabilità di sicurezza comuni che potrebbero nascondersi alla vista durante la scrittura del codice.

Come scegliere il tuo strumento SAST?
Verifica la licenza: alcuni strumenti sono gratuiti per i progetti open source. Ad esempio, GitHub CodeQL o SemGrep.
Verifica la copertura per i tuoi linguaggi

* Selezionane uno che si integri facilmente con gli strumenti che già utilizzi e con il tuo processo esistente. Ad esempio, è meglio se gli avvisi sono disponibili come parte del tuo processo di revisione del codice e del tuo strumento, piuttosto che passare a un altro strumento per visualizzarli.
* Attenzione ai falsi positivi! Non vorrai certo che lo strumento ti rallenti senza motivo!
* Controlla le funzionalità: alcuni strumenti sono molto potenti e possono tracciare i taint (ad esempio: GitHub CodeQL), alcuni propongono suggerimenti di correzione generati dall'intelligenza artificiale, altri semplificano la scrittura di query personalizzate (ad esempio: SemGrep).

## Non condividere i tuoi segreti

### Dati sensibili, come chiavi API, token e password, a volte possono essere accidentalmente inseriti nel tuo repository.

Immagina questo scenario: sei il responsabile della manutenzione di un popolare progetto open source con contributi di sviluppatori da tutto il mondo. Un giorno, un collaboratore inserisce inconsapevolmente nel repository alcune chiavi API di un servizio di terze parti. Giorni dopo, qualcuno trova queste chiavi e le usa per accedere al servizio senza autorizzazione. Il servizio viene compromesso, gli utenti del tuo progetto subiscono tempi di inattività e la reputazione del tuo progetto ne risente. Come responsabile della manutenzione, ora ti trovi ad affrontare il difficile compito di revocare i segreti compromessi, indagare sulle azioni dannose che l'attaccante potrebbe aver compiuto con questi segreti, avvisare gli utenti interessati e implementare le correzioni.

Per prevenire tali incidenti, esistono soluzioni di "scansione dei segreti" che ti aiutano a individuare tali segreti nel tuo codice. Alcuni strumenti come GitHub Secret Scanning e Trufflehog di Truffle Security possono impedirti di inviarli a branch remoti, mentre altri strumenti revocheranno automaticamente alcuni segreti per te.

## Controlla e aggiorna le tue dipendenze

### Le dipendenze nel tuo progetto possono presentare vulnerabilità che ne compromettono la sicurezza. Mantenere aggiornate manualmente le dipendenze può essere un'attività che richiede molto tempo.

Immagina questo: un progetto costruito sulle solide fondamenta di una libreria ampiamente utilizzata. In seguito, la libreria rileva un grave problema di sicurezza, ma le persone che hanno sviluppato l'applicazione utilizzandola non ne sono a conoscenza. I dati sensibili degli utenti rimangono esposti quando un aggressore sfrutta questa vulnerabilità, tentando di appropriarsene. Questo non è un caso teorico. È esattamente quello che è successo a Equifax nel 2017: non sono riusciti ad aggiornare la loro dipendenza Apache Struts dopo la notifica del rilevamento di una grave vulnerabilità. La vulnerabilità è stata sfruttata e la famigerata violazione di Equifax ha interessato i dati di 144 milioni di utenti.

Per prevenire tali scenari, strumenti di analisi della composizione del software (SCA) come Dependabot e Renovate controllano automaticamente le dipendenze alla ricerca di vulnerabilità note pubblicate in database pubblici come NVD o GitHub Advisory Database, e quindi creano richieste pull per aggiornarle a versioni sicure. Rimanere aggiornati con le ultime versioni delle dipendenze sicure salvaguarda il progetto da potenziali rischi.

## Evita modifiche indesiderate con branch protetti

### L'accesso illimitato ai tuoi branch principali può portare a modifiche accidentali o dolose che potrebbero introdurre vulnerabilità o compromettere la stabilità del tuo progetto.

Un nuovo collaboratore ottiene l'accesso in scrittura al branch principale e inserisce accidentalmente modifiche che non sono state testate. In questo modo, grazie alle ultime modifiche, viene scoperta una grave falla di sicurezza. Per prevenire tali problemi, le regole di protezione dei branch garantiscono che le modifiche non possano essere inserite o unite in branch importanti senza prima essere sottoposte a revisione e aver superato specifici controlli di stato. Con questa misura aggiuntiva, che garantisce la massima qualità ogni volta, sei più sicuro e in una posizione migliore.

## Imposta un meccanismo di acquisizione per la segnalazione delle vulnerabilità

### È una buona pratica semplificare la segnalazione dei bug da parte degli utenti, ma la domanda fondamentale è: quando un bug ha un impatto sulla sicurezza, come possono segnalartelo in modo sicuro senza renderti un bersaglio per hacker malintenzionati?

Immagina questa situazione: un ricercatore di sicurezza scopre una vulnerabilità nel tuo progetto ma non trova un modo chiaro o sicuro per segnalarla. Senza un processo definito, potrebbero creare un problema pubblico o discuterne apertamente sui social media. Anche se fossero ben intenzionati e offrissero una soluzione, se lo facessero con una pull request pubblica, altri la vedrebbero prima che venga integrata! Questa divulgazione pubblica esporrebbe la vulnerabilità a malintenzionati prima che tu abbia la possibilità di risolverla, portando potenzialmente a un exploit zero-day che attaccherebbe il tuo progetto e i suoi utenti.

### Policy di sicurezza

Per evitare questo problema, pubblica una policy di sicurezza. Una policy di sicurezza, definita in un file `SECURITY.md`, descrive i passaggi per segnalare problemi di sicurezza, creare un processo trasparente per la divulgazione coordinata e stabilire le responsabilità del team di progetto per la gestione dei problemi segnalati. Questa policy di sicurezza può essere semplice come "Si prega di non pubblicare dettagli in un problema pubblico o in una PR, inviarci un'e-mail privata a security@example.com", ma può anche contenere altri dettagli, come ad esempio quando dovrebbero aspettarsi di ricevere una risposta da te. Tutto ciò che può contribuire all'efficacia e all'efficienza del processo di divulgazione.

### Segnalazione di vulnerabilità private

Su alcune piattaforme, è possibile semplificare e rafforzare il processo di gestione delle vulnerabilità, dall'acquisizione alla trasmissione, con segnalazioni private. Su GitLab, questo è possibile grazie alle segnalazioni private. Su GitHub, questo si chiama segnalazione di vulnerabilità private (PVR). La PVR consente ai manutentori di ricevere e gestire le segnalazioni di vulnerabilità, il tutto all'interno della piattaforma GitHub. GitHub creerà automaticamente un fork privato per scrivere le correzioni e una bozza di avviso di sicurezza. Tutto ciò rimane riservato finché non si decide di divulgare le segnalazioni e rilasciare le correzioni. Per chiudere il cerchio, verranno pubblicati avvisi di sicurezza che informeranno e proteggeranno tutti gli utenti tramite il loro strumento SCA.

## Conclusione: pochi passaggi per te, un enorme miglioramento per i tuoi utenti

Questi pochi passaggi potrebbero sembrarti facili o basilari, ma contribuiscono notevolmente a rendere il tuo progetto più sicuro per i suoi utenti, perché forniranno protezione dai problemi più comuni.

## Collaboratori

### Un ringraziamento speciale a tutti i responsabili della manutenzione che hanno condiviso con noi le loro esperienze e i loro suggerimenti per questa guida!

Questa guida è stata scritta da [@nanzggits](https://github.com/nanzggits) & [@xcorail](https://github.com/xcorail) con contributi di:

[@JLLeitschuh](https://github.com/JLLeitschuh)
[@intrigus-lgtm](https://github.com/intrigus-lgtm) + molti altri!
