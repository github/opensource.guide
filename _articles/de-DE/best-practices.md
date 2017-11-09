---
locale: de-DE
title: Optimale Vorgehensweisen für Betreiber
description: Mache dein Leben als ein Open-Source Betreiber einfacher, vom Dokumentieren bis zum wirksamen Einsetzen deiner Community
class: best-practices
toc:
  what-does-it-mean-to-be-a-maintainer: "Was bedeutet es, ein Betreiber zu sein?"
  documenting-your-processes: "Dokumentiere deine Vorgänge"
  learning-to-say-no: "Lernen, nein zu sagen"
  leverage-your-community: "Setze deine Community wirksam ein"
  bring-in-the-robots: "Bring in the robots"
  its-okay-to-hit-pause: "Es ist in Ordnung, Pause zu drücken"
order: 5
image: /assets/images/cards/best-practices.png
---

## Was bedeutet es, ein Betreiber zu sein?

Wenn du ein Open-Source Projekt betreibst, dass viele Menschen nutzen, wirst du vielleicht merken dass du weniger programmierst und mehr mit Problemen arbeitest.

In den frühen Tagen eines Projekts experimentierst du viel mit neuen Ideen und machst Entscheidungen basierend auf was du möchtest. Sobald dein Projekt populär wird, wirst du dich vermehrt darin sehen, dass du dich mit deinen Nutzern und Beitragenden beschäftigst.

Ein Projekt zu betreiben bedeutet mehr als nur zu programmieren. Die anstehenden Arbeiten sind oft ungeplant, aber sie sind wichtig für ein wachsendes Projekt. Wir haben ein paar beigetragen, vom Dokumentations-Prozess bis zum wirksamen Einsetzen deiner Community.

## Dokumentiere deine Vorgänge

Dinge aufzuschreiben ist eine der wichtigsten Dinge die du als Betreiber machen kannst.

Dokumentation beschreibt nicht nur deine Gedanken, sondern es hilft auch anderen Leuten zu verstehen was sie erwarten oder brauchen, bevor sie überhaupt fragen.

Dinge aufzuschreiben macht es einfacher „Nein“ zu sagen wenn etwas nicht in deinen Bereich reinpasst. Es macht es außerdem leichter für Leute einzusteigen und zu helfen. Du weißt nie wer dein Projekt liest oder benutzt.

Wenn du keine Texte schreiben möchtest, sind Stichwörter ebenfalls besser als überhaupt nichts aufzuschreiben.

### Schreibe die Vision des Projekts auf

Fange an mit dem Aufschreiben von den Zielen deines Projektes. Füge sie zu deiner README hinzu, oder erstelle eine VISION Datei. Wenn andere Artifakte helfen könnte, wie z.B. eine Roadmap, mache sie ebenfalls öffentlich.

Eine klar-dokumentierte Vision hilft dir stets fokussiert zu sein, auf dass was du machen möchtest und vermeidet Unklarheiten von anderen Beitragenden.

Zum Beispiel hat @lord entdeckt, dass eine Projekt Vision ihm geholfen hat herauszufinden auf welche Anfragen er sich fokussieren soll. Als ein neuer Betreiber hat er es bereut, sich nicht auf ein paar Ziele festzulegen als er seinen ersten Funktionswunsch für [Slate](https://github.com/lord/slate) hatte.

<aside markdown="1" class="pquote">
  <img src="https://avatars2.githubusercontent.com/u/1976330?v=3&s=460" class="pquote-avatar" alt="avatar" alt="@lord avatar">
  Ich fummelte rum. Ich habe mir nicht die Mühe gegeben, eine Komplettlösung zu finden. Stattdessen habe ich eine unfähige Lösung genommen. Ich wünsche ich hätte gesagt „Ich habe momentan dafür keine Zeit, aber ich werde es auf die langfristige Wunschliste setzen“.
  <p markdown="1" class="pquote-credit">
— @lord, ["Tips for new open source maintainers"](https://lord.io/blog/2014/oss-tips/)
  </p>
</aside>

### Kommuniziere deine Erwartungen

Regeln aufzuschreiben kann nervtötend sein. Manchmal fühlst du dich vielleicht als Überwacher fremder Verhaltensweisen und als Spaßbremse.

Aufgeschriebene und fair-durchgesetzte, gute Regeln wirken dennoch motivierend für Betreiber. Sie verhindern dass du Sachen machen musst, die du nicht tun willst.

Die meisten Leute die auf dein Projekt stoßen wissen nichts über dich oder deine Umstände. Sie könnten vermuten dass du dafür bezahlst wird, dass Projekt zu betreiben, besonderes, wenn sie dein Projekt regelmäßig nutzen und darauf basieren. Vielleicht hast du einmal viel Zeit in dein Projekt investiert, bist aber nun beschäftigt mit deinem neuen Job oder Familienmitglied.

Alles davon ist absolut in Ordnung! Nur stelle sicher, dass die anderen Benutzer darüber Bescheid wissen.

Wenn das Betreiben deines Projekt Teilzeit oder komplett freiwillig ist, seie ehrlich wieviel Zeit du hast. Das ist aber nicht das Selbe als wieviel Zeit du denkst dass das Projekt braucht, oder wieviel Zeit du damit verbringen möchtest.

Hier sind einige Regeln die es wert sind, niedergeschrieben zu werden:

* Wie wird ein Beitrag geprüft und akzeptiert (_Müssen sie Tests haben? Ein Issue-Template?_)
* Die Arten von Beiträgen, die du akzeptierst (_Möchtest du nur in manchen Bereichen deines Codes Unterstützung?_)
* Wann es angemessen ist, nachzufragen (_z.B. „Du kannst erwarten, dass dein Beitrag innerhalb 7 Tagen eine Antwort erhält. Wenn du ab dann nichts gehörst hast, kannst du den Thread gerne pushen.“_)
* Wieviel Zeit du mit dem Projekt verbringst (_„z.B. Wir wenden nur 5 Stunden die Woche mit diesem Projekt auf“_)

[Jekyll](https://github.com/jekyll/jekyll/tree/master/docs), [CocoaPods](https://github.com/CocoaPods/CocoaPods/wiki/Communication-&-Design-Rules), und [Homebrew](https://github.com/Homebrew/brew/blob/bbed7246bc5c5b7acb8c1d427d10b43e090dfd39/docs/Maintainers-Avoiding-Burnout.md) sind zahlreiche Beispiele, die grundsätzliche Regeln für Betreiber und Beitragende haben.

### Stelle die Kommunikation öffentlich

Vergesse nicht, auch deine Interaktionen zu dokumentieren. Wo auch immer du bist, lass die Kommunikation über dein Projekt öffentlich. Wenn jemand versucht, dir privat einen Vorschlag zu machen oder Hilfe möchte, verweise ihn höflich auf deine öffentlichen Kanäle, zum Beispiel eine Mailing-Liste oder ein Issue Tracker.

Wenn du dich mit anderen Betreibern triffst, oder privat eine große Änderung gemacht wurde, dokumentiere die Beweggründe öffentlich, zumindest wenn es nur bedeutet, deine Notizen aufzuschreiben.

So wird jeder, der in deine Community eintreten möchte Zugang zu den selben Informationen haben als jemand, der bereits Jahre dabei ist.

## Lernen, „nein“ zu sagen

Du hast Dinge niedergeschrieben. Idealerweise liest jeder deine Dokumentation, aber natürlich musst du andere daran erinnen, dass dieses Wissen existiert.

Alles aufzuschreiben hilft dennoch, vorallem bei Situationen, wo du objektiv dastehen musst um deine Regeln durchzusetzen.

„Nein“ zu sagen macht keinen Spaß, aber _„Dein Beitrag passt nicht zum Ziel des Projekts“_ fühlt sich weniger persönlich an als _„Ich mag deinen Beitrag nicht“_.

Du wirst als Betreiber viele Situationen kennenlernen wo du „Nein“ sagen musst: Funktionswünsche die nicht reinpassen, jemand, der eine Diskussion abschleifen lässt, oder jemand, der unnötige Arbeit für andere macht.

### Lass die Unterhaltung freundlich

Eine der wichtigsten Orte wo du „Nein“ sagen musst ist dein Probleme und Pull Request Bereich. Als ein Projektbetreiber wirst du zwangsläufig Vorschläge bekommen die du nicht annehmen möchtest.

Vielleicht ändert der Beitrag den Umfang, den dein Projekt abdecken soll oder es passt nicht zu deiner Vision. Vielleicht ist die Idee gut, aber schlecht umgesetzt...

Wie auch immer, es ist möglich taktisch umzugehen mit Beiträgen die deinem Projektstandard widersprechen.

Wenn du einen Beitrag erhälst den du nicht annehmen möchtest, wäre deine erste Reaktion vielleicht es zu ignorieren, oder vorzutäuschen, dass du es nicht siehst. Wenn du das tust, verletzt du nicht nur die Gefühle des Beitragenden, sondern auch andere potenzielle Beitragende in deiner Community.

<aside markdown="1" class="pquote">
  <img src="https://avatars3.githubusercontent.com/u/869950?v=3&s=400" class="pquote-avatar" alt="avatar" alt="@KrauseFx avatar">
  Der Schlüssel selbst bei großen Open-Source Projekten den Support reibungslos zu durchführen zu können ist ein Problem stets in Bewegung zu halten. Wenn du ein iOS Entwickler bist, weißt du wie schwer es ist ein Radar abzusenden. Zwei Jahre später hörst du erneut davon, und du sollst es erneut probieren mit der neusten Version von iOS.
  <p markdown="1" class="pquote-credit">
— @KrauseFx, ["Scaling open source communities"](https://krausefx.com/blog/scaling-open-source-communities)
  </p>
</aside>

Lass einen nicht-passenden Beitrag nicht offen weil du höflich sein möchtest. Über längere Zeit hast du dadurch viele unbeantwortete Probleme und Pull Requests. Dadurch sinkt gleichermaßen die Motivation, weil du mehr Stress hast.

Es ist besser gleich den Beitrag zu schließen, wenn du es nicht möchtest. Wenn dein Projekt bereits einen großen Rückstau hat, hat @steveklabnik Vorschläge für dich, [wie du Probleme effizient abarbeiten kannst(Englisch)](http://words.steveklabnik.com/how-to-be-an-open-source-gardener).

Zweitens, Beiträge zu ignorieren sendet ein negatives Signal an deine Community. Einem Projekt beizutragen kann extrem einschüchternd sein, besonders wenn es für jemand das erste Mal ist. Selbst wenn du den Beitrag nicht akzeptiert, bedanke dich bei der Person hinter dem Beitrag, vorallem für ihr Interesse. Das ist ein großes Kompliment.

Wenn du einen Beitrag nicht akzeptieren möchtest:

* **Bedanke dich** für ihren Beitrag
* **Erkläre, wieso es nicht passt** in den Berreich deines Projekts und biete klare offene Vorschläge für das Verbessern, wenn du kannst. Sei höflich, aber bestimmt.
* **Verlinke zu relevanter Dokumentaion**, wenn du eine hast. Wenn du merkst, dass du häufig Vorschläge hast, die du nicht annehmen möchtest, füge sie zur Dokumentation hinzu, damit du vermeidest dich selbst zu wiederholen.
* **Schließe die Anfrage**

Du solltest nicht mehr als 1-2 Sätze brauchen. Zum Beispiel, als ein Nutzer von [celery](https://github.com/celery/celery/) einen Windows-gerichteten Fehler meldete, [antwortete @berkerpeksag mit](https://github.com/celery/celery/issues/3383):

![celery screenshot](assets/images/best-practices/celery.png)

Wenn der Gedanke, „Nein“ zu sagen dir Angst macht, bist du nicht alleine. @jessfraz hat es [niedergeschrieben](https://blog.jessfraz.com/post/the-art-of-closing/)

> Ich habe mit Beitreibern von mehreren verschiedenen Open-Source Projekten gesprochen, Mesos, Kubernetes, Chromium... Und alle haben sich auf eines geeinigt: „Nein“ zu sagen zu Patchen die du nicht möchtest ist eine schwierige Aufgabe als Betreiber.

Fühl dich nicht schuldig, wenn du einen Beitag nicht akzeptieren möchtest. Die erste Regel von Open-Source, [nach](https://twitter.com/solomonstre/status/715277134978113536) @shykes: _"Nein, ist temporär, Ja ist für immer"_. Während sich mit anderen Leuten mitzufühlen gut ist, bedeutet einen Beitrag abzulehnen nicht, die Person dahinter zurückzuweisen.

Am Schlimmsten ist es, wenn ein Beitrag nicht gut ist, und du unter keinen Umständen es akzeptieren kannst. Sei freundlich und mitfühlend wenn Leute etwas zu deinem Projekt beitragen, aber akzeptiere nur Änderungen wo du wirklich denkst, dass sie dein Projekt verbessern. Je öfter du übst „Nein“ zu sagen, desto einfacher wird es. Versprochen.

### Ergreife die Initiative

Um die Anzahl von ungewünschten Beitragen von vorherein zu reduzieren, erkläre nach welchen Kriterien du den Prozess vom Erstellen bis zum Akzeptieren des Beitrags durchführst. Dies kannst du in deinem Contributing Guide niederschreiben.

Wenn du sehr viele minderwertige Beiträge erhälst, erfordere von den Beiträgern etwas Vorarbeit, zum Beispiel:

* Fülle ein(e) Problem- oder Pull Request Template/-Checklist aus
* Öffne zuerst ein Issue bevor du einen Pull Request erstellst

Wenn sie deinen Regeln nicht folgen, schließe sofort das Problem/den Pull Request und verweise auf die Dokumentation.

Während sich dieser Ansatz im ersten Moment vielleicht unhöflich anfühlt, die Initiative zu ergreifen ist eigentlich gut für den Anfragenden und für dich. Es reduziert die Chance das jemand unnötig viele Stunden in etwas investiert, was du im Vorhinein nicht akzeptierst, und es macht deine Arbeit leichter zu verwalten.

<aside markdown="1" class="pquote">
  <img src="https://avatars0.githubusercontent.com/u/125011" class="pquote-avatar" alt="avatar">
  Idealerweise erklärst du ihnen in einer CONTRIBUTING.md Datei auf was sie sich fokussieren müssen, damit sie wissen auf was es ankommt, bevor sie überhaupt mit der Arbeit anfangen.
  <p markdown="1" class="pquote-credit">
— @mikemcquaid, ["Kindly Closing Pull Requests"](https://github.com/blog/2124-kindly-closing-pull-requests)
  </p>
</aside>

Manchmal, wenn du „Nein“ sagst, wird dein potenzieller Beiträger vielleicht wütend, oder kritisiert deine Entscheidung. Wenn er ablehnend wird, [ergreife die Initative um die Lage zu beruhigen (Englisch)](https://github.com/jonschlinkert/maintainers-guide-to-staying-positive#action-items) oder entferne ihn sogar aus der Community, wenn er nicht konstruktiv mitarbeiten möchten.

### Ergreife die Leitung

Vielleicht erstellt jemand in deiner Community regelmäßig Beiträge, die nicht mit deinen Projektstandards vereinbar sind. Es kann für beide Seiten frustierend sein, wenn man immer wieder Ablehnungen durchleben muss.

Wenn du siehst, dass jemand begeistert von deinem Projekt ist, aber etwas Hilfe benötigt, sei wachsam. Erkläre klar in jeder Situation wieso seine Beiträge nicht die Erwartungen deines Projekts erfüllen. Versuche den Anfänger auf eine leicherte oder weniger anstrengende Aufgabe zu verweisen, wie z.B. auf ein Problem mit dem Label _„guter erster Bug“_, damit sie erste Erfahrungen in einem neuen Bereich machen können. Wenn du Zeit hast, überlege ob du weitere Instruktionen mitgeben kannst, oder jemand findest in deiner Community, wer den Anfänger gerne unterstützt.

## Setze deine Community wirksam ein

Du musst nicht alles selber machen. Deine Community existiert für einen ganz bestimmten Grund! Selbst wenn du bisher keinen aktiven Beitragenden hast, wenn du viele Nutzer hast, bringe sie zur Arbeit!

### Verteile die Last

Wenn du welche suchst, die mitarbeiten wollen, frage einfach rum.

Falls du siehst dass neue Beitragende wiederholt Beiträge machen, erkenne ihre Arbeit an, indem du ihnen mehr Verantwortung anbietest. Dokumentiere wie andere ebenfalls in Leiterrollen reinwachsen können, wenn sie wollen.

Andere zu ermutigen [die Leitung des Projekts zu übernehmen](../building-community/#share-ownership-of-your-project) kann deine eigene Last stark reduzieren, wie @lmccart in ihrem Projekt festgestellt hat: [p5.js](https://github.com/processing/p5.js?files=1).

<aside markdown="1" class="pquote">
  <img src="https://avatars3.githubusercontent.com/u/191056?v=3&s=460" class="pquote-avatar" alt="avatar">
  Ich hatte gesagt, „Ja, jeder kann teilnehmen, du brauchst nicht viel Programmiererfahrung [...]“. Wir hatten Leute, die sich angemeldet haben [auf ein Event zu kommen] und das hat mich richtig verwundert: Ist es wahr, was ich gesagt hatte? Da kommen 40 Leute, und ich kann nicht mit jedem sitzen... Aber die Leute kamen zusammen, und es wurde einfach nur gearbeitet. Sobald eine Person es verstanden hatte, konnte sie es ihrem Nachbar es erklären.
  <p markdown="1" class="pquote-credit">
—  @lmccart, ["What Does “Open Source” Even Mean? p5.js Edition"](https://medium.com/@kenjagan/what-does-open-source-even-mean-p5-js-edition-98c02d354b39#.chnjlag7p)
  </p>
</aside>

Wenn du von deinem Projekt Abstand nehmen musst, entweder temporär oder permanent, gibt es keinen Grund sich zu schämen, wenn man fragt ob jemand anderes es übernehmen könnte.

Sofern andere Leute begeistert über die neue Richtung sind, gebe ihnen den Commit-Zugang oder reiche formal die Kontrolle weiter. Wenn jemand dein Projekt geforkt hat und es aktiv extern entwickelt, möchtest du das Projekt vielleicht in deinem Original Projekt verlinken. Es ist großartig dass soviele Leute dein Projekt am Leben haben möchten!

@progrium [hat rausgefunden dass (Englisch)](http://progrium.com/blog/2015/12/04/leadership-guilt-and-pull-requests/) das Dokumentieren der Vision für sein Projekt, [Dokku](https://github.com/dokku/dokku), die Ziele lebendig gemacht hat, sogar als er vom Projekt Abstand genommen hat:

> Ich habe ein Wiki-Seite geschreiben darüber was ich möchte und wieso ich es möchte. Aus irgendeinem Grund hat es mich überrascht als die Betreiber gestartet haben, in die Richtung zu gehen, in die ich wollte. Ist es exakt so passiert wie ich es umgesetzt hätte? Nicht immer. Aber es hat das Projekt nach vorne gebracht, zudem was ich aufgeschrieben habe.

## Lass andere die Lösungen bauen, die sie brauchen

Wenn ein potenzieller Beitragender eine andere Meinung darüber hat, was der Fokus des Projekts sein sollte, möchtest du ihn vielleicht ermutigen auf seinem eigenem Fork weiterzuarbeiten.

Ein Projekt zu forken muss nicht schlecht sein. Ein Projekt zu kopieren und etwas zu verändern ist einer der besten Dinge, die man mit Open-Source Software machen kann.

Die Mitglieder deiner Community zu ermutigen auf ihrem Fork zu arbeiten kann das Bedürfnis nach Kreativität befriedigen, die sie brauchen, ohne mit dir über die Vision des Projekts zu diskutieren.

<aside markdown="1" class="pquote">
  <img src="https://avatars1.githubusercontent.com/u/481677?v=3&s=400" class="pquote-avatar" alt="avatar">
  Ich pflege die 80:20 Regel. Wenn du einer von den Speziellen bist, forke bitte meine Arbeit. Ich werde nicht wütend! Meine öffentlichen Projekte sind immer dafür gedacht die wichtigsten Probleme zu lösen; Ich versuche es einfach zu machen um weitere Bereiche abzudecken mit dem Forken meiner Arbeit oder es schlichtweg zu erweitern.
  <p markdown="1" class="pquote-credit">
— @geerlingguy, ["Why I Close PRs"](https://www.jeffgeerling.com/blog/2016/why-i-close-prs-oss-project-maintainer-notes)
  </p>
</aside>

Das Selbe gilt für einen Nutzer wo du schlichtweg nicht die Kapazität hast um es zu machen. APIs anzubieten und/oder Benutzerspezifische Einstellungen kann andere helfen, ihren Bedarf zu stillen, ohne den Code direkt zu bearbeiten. @orta [hat rausgefunden(Englisch)](http://artsy.github.io/blog/2016/07/03/handling-big-projects/), dass Leute zu ermutigen, Plug-Ins zu erstellen, für CocoaPods zu "einigen  der interessantesten Ideen" geführt hat:

> Es ist fast unausweichlich dass ein Projekt groß wird, Betreiber müssen deswegen konsversativer werden darüber, wie sie neuen Code möchten. Du wirst gut mit dem „Nein“ sagen, aber viele Leute haben zu Recht Bedürfnisse. Also, hörst du damit auf, dein Werkzeug zu einer kompletten Plattform auszubauen.

## Bringe die Roboter rein!

So wie es Aufgaben gibt, wo andere Leute dir helfen können, gibt es auch Aufgaben, die kein Mensch je tun mus. Roboter sind deine Freunde, also benutze sie, um dein Leben als Leitung des Projekts einfacher zu machen.

### Fordere Tests und andere Überprüfungen um die Qualität des Codes zu erhöhen

Einer der ersten Punkte, womit du dein Projekt automatisieren könntest, sind Tests.

Tests helfen Beitragenden sich sicher zu fühlen, dass sie nichts zerstören. Sie können außerdem es einfacher für dich machen, die Änderungen durchzuschauen und Beiträge schnell anzunehmen. Je mehr verantwortlich du bist, desto mehr kannst du deine Community ermutigen.

Richte utomatische Tests ein, die bei allen ankommenden Beiträgen durchlaufen, und stelle sicher, dass die Tests auch lokal von den Beitragenden durchgeführt werden können.
Setze voraus, dass alle Code Beiträge deine Tests bestehen, bevor sie abgesendet werden können. Damit hilfst du, einen Mindeststandard für Qualität aufzubauen. [Requeired Status Checks(Englisch)](https://help.github.com/articles/about-required-status-checks/) auf GitHub können sicherstellen, dass keine Änderung gemergt werden, ohne, dass die Tests abgeschlossen sind.

Wenn du Tests hinzufügst, erkläre auch, wie sie funktionieren in deiner CONTRIBUTING Datei.

<aside markdown="1" class="pquote">
  <img src="https://avatars3.githubusercontent.com/u/812892?v=3&s=460" class="pquote-avatar" alt="avatar">
  Ich glaube, dass Tests nötig sind für jeden Code, wo Menschen dran arbeiten. Wenn der Code immer vollständig und überrichtig ist, würde es keinen Änderungen bedürfen – Wir schreiben nur Code wenn etwas nicht richtig funktioniert, egal ob es heißt „Es stürzt ab“ oder „Es ist halbgar umgesetzt“. Und egal welche Änderungen du vollführst, Tests zuschreiben sind essentiell für jede Änderung die du versehentlich gemacht hast.
  <p markdown="1" class="pquote-credit">
— @edunham, ["Rust's Community Automation"](http://edunham.net/2016/09/27/rust_s_community_automation.html)
  </p>
</aside>

### Nutze Erweiterungen, um grundlegende Aufgaben zu automatisieren

Die gute Nachricht über das Betreiben eines populären Projekt ist, dass andere Betreiber ähnliche Probleme hatten und Lösungen gebaut hatten.

Es gibt eine [große Auswahl an Erweiterungen (Englisch)](https://github.com/showcases/tools-for-open-source) um dir zu bei grundlegenden Aspekten zu helfen. Ein paar Beispiele:

* [semantic-release](https://github.com/semantic-release/semantic-release) automatisiert Versionen
* [mention-bot](https://github.com/facebook/mention-bot) findet Betreiber heraus, die für ein Review eines Pull Requests in Frage kommen
* [Danger](https://github.com/danger/danger) hilft beim automatischen Review von Code.

Für Bug Reports und andere gewöhnliche Beiträge hat GitHub [Issue und Pull Requests Templates (Englisch)](https://github.com/blog/2111-issue-and-pull-request-templates) womit du Kommunikation beeinflussen kannst. Du kannst auch [E-Mail Filter einrichten (Englisch)](https://github.com/blog/2203-email-updates-about-your-own-activity), um deine E-Mail Benachrichtungen zu verwalten.

Wenn du etwas tiefer in die Materie einsteigen möchtest, kannst du dir Style-Guides und Linter anschauen, die Beiträge einfacher zu reviewen und anzunehmen.


Aber, wenn Standards zu kompliziert sind, erhöhen sie die Schwierigkeit, beizutragen. Stelle sicher, dass du nur genug Regeln hinzufügt, die für jeden das Leben einfacher machen.

Wenn du unsicher bist, welche Erweiterungen du benutzen sollst, schau dir einfach andere populäre Projekte an, besonders die, die im selben Bereich aktiv sind. Wie sieht zum Beispiel bei anderen Node Modulen der Beitrags-Prozess aus? Ähnliche Wege und Werkzeuge machen den Prozess einfacher, auch für deine Zielgruppe.

## Es ist Ok eine Pause einzulegen

Open-Source Arbeit brachte dir Freude. Vielleicht fühlst du dich jetzt dadurch bedrängt oder schuldig.

Möglicherweise fühlst du dich überwältigt oder deine Furcht wächst immer weiter, wenn du an deine Projekte denkst. Und währenddessen stapeln sich die Probleme und Pull Requests.

Burnout ist ein reales und um sich greifendes Problem bei der Open Source Arbeit, besonders unter den Projektleitern. Als Entwickler ist deine Freude am Projekt ausschlaggebend für den Fortbestand jedes Open Source Projekts.

Obwohl es selbstverständlich sein sollte: Nimm dir eine Pause! Du solltest nicht warten bis du dich erschöpfst fühlst und dir einen Urlaub nehmen musst. @brettcannon, ein Python Kern Entwickler, entschied sich einen [gesamten Monat Urlaub (Englisch)](http://www.snarky.ca/why-i-took-october-off-from-oss-volunteering) zu nehmen, und das nach 14 Jahren freiwilliger Arbeit in der Open Source Gemeinschaft.

So wie bei jeder Art von Arbeit hilft es regelmäßige Pausen einzulegen, um einen klaren Kopf zu behalten und glücklich und begeistert an deine Arbeit heran zu gehen.

<aside markdown="1" class="pquote">
  <img src="https://avatars1.githubusercontent.com/u/36432?v=3&s=400" class="pquote-avatar" alt="avatar">
  Bei dem Pflegen von WP-CLI, merkte ich, dass ich mich selbst glücklich machen muss und klare Grenzen meines Mitwirkens zu ziehen. Die beste Balance ist es, zwischen 2 und 5 Stunden in der Woche, neben der regulären Arbeit, zu arbeiten. So bleibt mein Engagement eine Passion und fühlt sich nicht wie Arbeit an. Ich konzentriere mich auf die Probleme, an denen ich gerade arbeite. So kann ich regelmäßigen Fortschritt machen und zwar dort wo es am wichtigsten ist.
  <p markdown="1" class="pquote-credit">
— @danielbachhuber, ["My condolences, you're now the maintainer of a popular open source project"](https://runcommand.io/2016/06/26/my-condolences-youre-now-the-maintainer-of-a-popular-open-source-project/)
  </p>
</aside>

Manchmal kann es hart sein sich eine Pause zu nehmen, besonders dann, wenn man das Gefühl hat, dass jeder deine Unterstützung braucht. Manche Leute versuchen, dass du dich deswegen schuldig fühlst.

Versuche dein Bestes und suche dir Unterstützer aus der Geimeinschaft während du nicht anwesend bist. Wenn du niemanden finden kannst nimm dir trotzdem eine Auszeit. Achte darauf, immer im Kontakt zu bleiben, so dass die anderen Entwickler nicht verwirrt sind. 

Eine Pause zu nehmen bedeuted mehr, als sich einen Urlaub zu nehmen. Wenn du am Wochenende oder währen der Arbeitszeiten nicht arbeiten willst, sprich das mit den Anderen ob, so dass sie nicht nicht stören.

## Kümmere dich zuerst um dich!

Ein populäres Projekt zu betreuen benötigt verschiedene Fähigkeiten als
Ein populäres Projekt aufrechtzuerhalten, erfordert andere Fähigkeiten als die frühen Entwicklungsstadien, aber es ist nicht weniger lohnend. Als Betreiber übst du Führungs- und persönliche Fähigkeiten auf einem Level, dass nur wenige Menschen erleben können. Auch wenn es nicht immer einfach ist, aber klare Grenzen zu setzen und nur das zu übernehmen, womit du dich wohl fühlst, wird dir helfen, glücklich, erfrischt und produktiv zu bleiben.