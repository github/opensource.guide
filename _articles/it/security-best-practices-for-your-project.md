---
lang: it
untranslated: true
title: Le migliori pratiche di sicurezza per il tuo progetto
description: Rafforza il futuro del tuo progetto creando fiducia tramite pratiche di sicurezza essenziali, dall'MFA e dalla scansione del codice alla gestione sicura delle dipendenze e alla segnalazione privata delle vulnerabilità.
title: Security Best Practices for your Project
description: Strengthen your project's future by building trust through essential security practices — from MFA and code scanning to safe dependency management and private vulnerability reporting.
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

* Selezionane uno che si integri facilmente con gli strumenti che già utilizzi e con il tuo processo esistente. Ad esempio, è meglio se gli avvisi sono disponibili come parte del processo e dello strumento di revisione del codice esistenti, piuttosto che dover ricorrere a un altro strumento per visualizzarli.
* Attenzione ai falsi positivi! Non vorrai che lo strumento ti rallenti senza motivo!
* Controlla le funzionalità: alcuni strumenti sono molto potenti e possono eseguire il taint tracking (ad esempio: GitHub CodeQL), alcuni propongono suggerimenti di correzione generati dall'intelligenza artificiale, altri semplificano la scrittura di query personalizzate (ad esempio: SemGrep).  

## Non condividere i tuoi segreti

### Dati sensibili, come chiavi API, token e password, a volte possono essere accidentalmente inseriti nel tuo repository.

Immagina questo scenario: sei il responsabile della manutenzione di un popolare progetto open source con contributi di sviluppatori da tutto il mondo. Un giorno, un collaboratore inserisce inconsapevolmente nel repository alcune chiavi API di un servizio di terze parti. Giorni dopo, qualcuno trova queste chiavi e le usa per accedere al servizio senza autorizzazione. Il servizio viene compromesso, gli utenti del tuo progetto subiscono tempi di inattività e la reputazione del tuo progetto ne risente. Come responsabile della manutenzione, ti trovi ora ad affrontare il difficile compito di revocare i segreti compromessi, indagare sulle azioni dannose che l'aggressore potrebbe aver compiuto con questi segreti, avvisare gli utenti interessati e implementare le correzioni.

Per prevenire tali incidenti, esistono soluzioni di "scansione dei segreti" che ti aiutano a rilevare tali segreti nel tuo codice. Alcuni strumenti come GitHub Secret Scanning e Trufflehog di Truffle Security possono impedirti di inviarli a branch remote, e alcuni strumenti revocheranno automaticamente alcuni segreti per te.

## Controlla e aggiorna le tue dipendenze

### Le dipendenze nel tuo progetto possono presentare vulnerabilità che ne compromettono la sicurezza. Mantenere aggiornate manualmente le dipendenze può essere un'attività che richiede molto tempo.

Immaginate questo: un progetto costruito sulle solide fondamenta di una libreria ampiamente utilizzata. La libreria in seguito rileva un grave problema di sicurezza, ma le persone che hanno sviluppato l'applicazione utilizzandola non ne sono a conoscenza. I dati sensibili degli utenti rimangono esposti quando un aggressore sfrutta questa vulnerabilità, piombando per impossessarsene. Questo non è un caso teorico. Questo è esattamente quello che è successo a Equifax nel 2017: non sono riusciti ad aggiornare la loro dipendenza Apache Struts dopo la notifica del rilevamento di una grave vulnerabilità. La vulnerabilità è stata sfruttata e la famigerata violazione di Equifax ha colpito i dati di 144 milioni di utenti.

Per prevenire tali scenari, strumenti di analisi della composizione del software (SCA) come Dependabot e Renovate controllano automaticamente le dipendenze alla ricerca di vulnerabilità note pubblicate in database pubblici come NVD o GitHub Advisory Database, e quindi creano richieste pull per aggiornarle a versioni sicure. Rimanere aggiornati con le ultime versioni sicure delle dipendenze protegge il progetto da potenziali rischi.

## Evita modifiche indesiderate con i branch protetti

### L'accesso illimitato ai branch principali può portare a modifiche accidentali o dannose che potrebbero introdurre vulnerabilità o compromettere la stabilità del progetto.

Un nuovo collaboratore ottiene l'accesso in scrittura al branch principale e invia accidentalmente modifiche che non sono state testate. In questo modo, viene scoperta una grave falla di sicurezza, grazie alle ultime modifiche. Per prevenire tali problemi, le regole di protezione dei branch garantiscono che le modifiche non possano essere inviate o unite a branch importanti senza prima essere sottoposte a revisione e aver superato i controlli di stato specificati. Questa misura aggiuntiva garantisce maggiore sicurezza e un'elevata qualità ogni volta.

## Imposta un meccanismo di acquisizione per la segnalazione delle vulnerabilità

### È buona norma semplificare la segnalazione dei bug da parte degli utenti, ma la domanda fondamentale è: quando un bug ha un impatto sulla sicurezza, come possono segnalarvelo in modo sicuro senza rendervi un bersaglio per hacker malintenzionati?

Immagina questo: un ricercatore di sicurezza scopre una vulnerabilità nel tuo progetto ma non trova un modo chiaro e sicuro per segnalarla. Senza una procedura specifica, potrebbe creare un problema pubblico o discuterne apertamente sui social media. Anche se è ben intenzionato e offre una soluzione, se lo fa con una pull request pubblica, altri la vedranno prima che venga integrata! Questa divulgazione pubblica esporrà la vulnerabilità a malintenzionati prima che tu abbia la possibilità di risolverla, portando potenzialmente a un exploit zero-day che attaccherà il tuo progetto e i suoi utenti.

### Policy di sicurezza

Per evitare questo problema, pubblica una policy di sicurezza. Una policy di sicurezza, definita in un fil `SECURITY.md`, descrive in dettaglio i passaggi per la segnalazione di problemi di sicurezza, la creazione di un processo trasparente per la divulgazione coordinata e la definizione delle responsabilità del team di progetto per la gestione dei problemi segnalati. Questa policy di sicurezza può essere semplice come "Si prega di non pubblicare dettagli in un problema pubblico o in una PR, inviare un'email privata a security@example.com", ma può anche contenere altri dettagli, come ad esempio i tempi previsti per ricevere una risposta da parte del team. Qualsiasi informazione che possa contribuire all'efficacia e all'efficienza del processo di divulgazione.

### Segnalazione di vulnerabilità private

Su alcune piattaforme, è possibile semplificare e rafforzare il processo di gestione delle vulnerabilità, dall'acquisizione alla trasmissione, con problemi privati. Su GitLab, questo è possibile con problemi privati. Su GitHub, questo è chiamato segnalazione di vulnerabilità private (PVR). La PVR consente ai manutentori di ricevere e gestire le segnalazioni di vulnerabilità, il tutto all'interno della piattaforma GitHub. GitHub creerà automaticamente un fork privato per scrivere le correzioni e una bozza di avviso di sicurezza. Tutto questo rimane confidenziale finché non deciderai di rivelare i problemi e rilasciare le correzioni. Per chiudere il cerchio, verranno pubblicati degli avvisi di sicurezza che informeranno e proteggeranno tutti i tuoi utenti tramite il loro strumento SCA.

## Conclusione: pochi passaggi per te, un enorme miglioramento per i tuoi utenti

Questi pochi passaggi potrebbero sembrarti facili o basilari, ma contribuiscono notevolmente a rendere il tuo progetto più sicuro per i suoi utenti, perché forniranno protezione dai problemi più comuni.

## Collaboratori

### Un ringraziamento speciale a tutti i responsabili della manutenzione che hanno condiviso con noi le loro esperienze e i loro suggerimenti per questa guida!

Questa guida è stata scritta da [@nanzggits](https://github.com/nanzggits) e [@xcorail](https://github.com/xcorail) con il contributo di:

[@JLLeitschuh](https://github.com/JLLeitschuh)
[@intrigus-lgtm](https://github.com/intrigus-lgtm) e molti altri!
=======
Bugs and new features aside, a project's longevity hinges not only on its usefulness but also on the trust it earns from its users. Strong security measures are important to keep this trust alive. Here are some important actions you can take to significantly improve your project's security.

## Ensure all privileged contributors have enabled Multi-Factor Authentication (MFA)

### A malicious actor who manages to impersonate a privileged contributor to your project, will cause catastrophic damages.

Once they obtain the privileged access, this actor can modify your code to make it perform unwanted actions (e.g. mine cryptocurrency), or can distribute malware to your users' infrastructure, or can access private code repositories to exfiltrate intellectual property and sensitive data, including credentials to other services. 

MFA provides an additional layer of security against account takeover. Once enabled, you have to log in with your username and password and provide another form of authentication that only you know or have access to.

## Secure your code as part of your development workflow

### Security vulnerabilities in your code are cheaper to fix when detected early in the process than later, when they are used in production.

Use a Static Application Security Testing (SAST) tool to detect security vulnerabilities in your code. These tools are operating at code level and don't need an executing environment, and therefore can be executed early in the process, and can be seamlessly integrated in your usual development workflow, during the build or during the code review phases. 

It's like having a skilled expert look over your code repository, helping you find common security vulnerabilities that could be hiding in plain sight as you code. 

How to choose your SAST tool?
Check the license: Some tools are free for open source projects. For example GitHub CodeQL or SemGrep.
Check the coverage for your language(s)

* Select one that easily integrates with the tools you already use, with your existing process. For example, it's better if the alerts are available as part of your existing code review process and tool, rather than going to another tool to see them.
* Beware of False Positives! You don't want the tool to slow you down for no reason!
* Check the features: some tools are very powerful and can do taint tracking (example: GitHub CodeQL), some propose AI-generated fix suggestions, some make it easier to write custom queries (example: SemGrep).  

## Don't share your secrets

### Sensitive data, such as API keys, tokens, and passwords, can sometimes accidentally get committed to your repository.

Imagine this scenario: You are the maintainer of a popular open-source project with contributions from developers worldwide. One day, a contributor unknowingly commits to the repository some API keys of a third-party service. Days later, someone finds these keys and uses them to get into the service without permission. The service is compromised, users of your project experience downtime, and your project's reputation takes a hit. As the maintainer, you're now faced with the daunting tasks of revoking compromised secrets, investigating what malicious actions the attacker could have performed with this secret, notifying affected users, and implementing fixes. 

To prevent such incidents, "secret scanning" solutions exist to help you detect those secrets in your code. Some tools like GitHub Secret Scanning, and Trufflehog by Truffle Security can prevent you from pushing them to remote branches in the first place, and some tools will automatically revoke some secrets for you. 

## Check and update your dependencies

### Dependencies in your project can have vulnerabilities that compromise the security of your project. Manually keeping dependencies up to date can be a time-consuming task.

Picture this: a project built on the sturdy foundation of a widely-used library. The library later finds a big security problem, but the people who built the application using it don't know about it. Sensitive user data is left exposed when an attacker takes advantage of this weakness, swooping in to grab it. This is not a theoretical case. This is exactly what happened to Equifax in 2017: They failed to update their Apache Struts dependency after the notification that a severe vulnerability was detected. It was exploited, and the infamous Equifax breach affected 144 million users' data. 

To prevent such scenarios, Software Composition Analysis (SCA) tools such as Dependabot and Renovate automatically check your dependencies for known vulnerabilities published in public databases such as the NVD or the GitHub Advisory Database, and then creates pull requests to update them to safe versions. Staying up-to-date with the latest safe dependency versions safeguards your project from potential risks. 

## Avoid unwanted changes with protected branches

### Unrestricted access to your main branches can lead to accidental or malicious changes that may introduce vulnerabilities or disrupt the stability of your project.

A new contributor gets write access to the main branch and accidentally pushes changes that have not been tested. A dire security flaw is then uncovered, courtesy of the latest changes. To prevent such issues, branch protection rules ensure that changes cannot be pushed or merged into important branches without first undergoing reviews and passing specified status checks. You're safer and better off with this extra measure in place, guaranteeing top-notch quality every time.

## Set up an intake mechanism for vulnerability reporting

### It's a good practice to make it easy for your users to report bugs, but the big question is: when this bug has a security impact, how can they safely report them to you without putting a target on you for malicious hackers?

Picture this: A security researcher discovers a vulnerability in your project but finds no clear or secure way to report it. Without a designated process, they might create a public issue or discuss it openly on social media. Even if they are well-intentioned and offer a fix, if they do it with a public pull request, others will see it before it's merged! This public disclosure will expose the vulnerability to malicious actors before you have a chance to address it, potentially leading to a zero-day exploit, attacking your project and its users.

### Security Policy

To avoid this, publish a security policy. A security policy, defined in a `SECURITY.md` file, details the steps for reporting security concerns, creating a transparent process for coordinated disclosure, and establishing the project team's responsibilities for addressing reported issues. This security policy can be as simple as "Please don't publish details in a public issue or PR, send us a private email at security@example.com", but can also contain other details such as when they should expect to receive an answer from you. Anything that can help the effectiveness and the efficiency of the disclosure process.

### Private Vulnerability Reporting

On some platforms, you can streamline and strengthen your vulnerability management process, from intake to broadcast, with private issues. On GitLab, this can be done with private issues. On GitHub, this is called private vulnerability reporting (PVR). PVR enables maintainers to receive and address vulnerability reports, all within the GitHub platform. GitHub will automatically create a private fork to write the fixes, and a draft security advisory. All of this remains confidential until you decide to disclose the issues and release the fixes. To close the loop, security advisories will be published, and will inform and protect all your users through their SCA tool.

## Conclusion: A few steps for you, a huge improvement for your users

These few steps might seem easy or basic to you, but they go a long way to make your project more secure for its users, because they will provide protection against the most common issues.

## Contributors

### Many thanks to all the maintainers who shared their experiences and tips with us for this guide!

This guide was written by [@nanzggits](https://github.com/nanzggits) & [@xcorail](https://github.com/xcorail) with contributions from: 

[@JLLeitschuh](https://github.com/JLLeitschuh)
[@intrigus-lgtm](https://github.com/intrigus-lgtm) + many others!
