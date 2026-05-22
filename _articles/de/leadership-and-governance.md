---
lang: de
title: Führung und Lenkung
description: Wachsende Open-Source-Projekte können von formellen Entscheidungsfindungsregeln profitieren.
class: leadership
order: 6
image: /assets/images/cards/leadership.png
related:
  - best-practices
  - metrics
---

## Die Lenkungen eines wachsenden Projektes verstehen

Ihr Projekt wächst, Leute sind engagiert und Sie setzen sich dafür ein, dass alles läuft. In diesem Stadium fragen Sie sich vielleicht, wie Sie regelmäßig Mitwirkende in Ihren Arbeitsprozess einbinden können - sei es durch die Gewährung von direktem Commit-Zugang oder durch die Führung von Debatten in der Gemeinschaft. Wir liefern Antworten auf Ihre Fragen.

## Welche formalen Rollen kann es in Open-Source-Projekten geben?

Viele Projekte folgen einer ähnlichen Struktur hinsichtlich Mitwirkung und Anerkennung.

Was diese Rollen aber tatsächlich bedeuten, liegt ganz bei Ihnen. Nachfolgend sind einige Arten von Rollen aufgeführt, die Sie vielleicht schon kennen:

* **Maintainer\*in**
* **Mitwirkende\*r**
* **Committer\*in**

**Bei einigen Projekten sind "Maintainer\*innen"** die einzigen Personen mit Commit-Rechten. In anderen Projekten sind es einfach die Leute, die in der README als Maintainer\*innen aufgelistet sind.

Ein\*e Maintainer\*in muss in Ihrem Projekt nicht zwangsläufig Code schreiben. Es kann auch eine Person sein, die viel Öffentlichkeitsarbeit für Ihr Projekt geleistet hat, viel Dokumentation geschrieben hat, oder das Projekt für andere zugänglicher gemacht hat. Unabhängig davon, was sie tagtäglich tun, fühlen sich Maintainer\*innen wahrscheinlich für die Richtung des Projekts verantwortlich und setzen sich für dessen Verbesserung ein.

"Mitwirkende" könnten alle Menschen sein, die ein Issue oder Pull Request kommentiert, die dem Projekt einen Mehrwert verleihen (sei es durch Problembehebungen, das Schreiben von Code oder die Organisation von Veranstaltungen) oder alle, deren Pull Requests akzeptiert wurden (vielleicht die engste Definition für einen Beitrag).

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/mikeal?s=180" class="pquote-avatar" alt="avatar">

  \[Für Node.js,\] ist jede Person, die durch Kommentieren in einem Issue mithilft, oder Code einreicht, Mitglied der Projekt-Community. Dass sie einfach durch aktive Beteiligung sichtbar werden, bedeutet, dass sie die Benutzer-Kontributor-Grenze überschritten haben.

  _\[For Node.js,\] every person who shows up to comment on an issue or submit code is a member of a project's community. Just being able to see them means that they have crossed the line from being a user to being a contributor._

  <p markdown="1" class="pquote-credit">
— @mikeal, ["Healthy Open Source"](https://medium.com/the-javascript-collection/healthy-open-source-967fa8be7951)
  </p>
</aside>

**Der Begriff "Committer\*in"** könnte verwendet werden, um die höhere Verantwortung des Commit-Rechtes von anderen Formen der Mitarbeit zu unterscheiden.

Sie können Ihre Projektrollen zwar nach Belieben definieren, aber Sie sollten die Verwendung von [breiteren Definitionen in Betracht ziehen](../how-to-contribute/#was-einen-beitrag-leisten-bedeutet), um mehr Beitragsformen zu fördern. Mit Hilfe von Führungsrollen können Sie Personen, die unabhängig von ihren fachlichen Fähigkeiten herausragende Leistungen für Ihr Projekt erbracht haben, formell auszeichnen.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/jacobian?s=180" class="pquote-avatar" alt="avatar">

  Sie kennen mich vielleicht als den "Erfinder" von Django... Aber ich bin in Wirklichkeit der Typ, der angeheuert wurde, um an einer seit einem Jahr fertigen Sache zu arbeiten. (...) Die Leute vermuten, dass ich wegen meiner Programmierfähigkeiten erfolgreich bin... Aber ich bin bestenfalls ein durchschnittlicher Programmierer.

  _You might know me as the "inventor" of Django...but really I'm the guy who got hired to work on a thing a year after it was already made. (...) People suspect that I'm successful because of my programming skill...but I'm at best an average programmer._

  <p markdown="1" class="pquote-credit">
— @jacobian, ["PyCon 2015 Keynote" (video)](https://www.youtube.com/watch?v=hIJdFxYlEKE#t=5m0s)
  </p>
</aside>

## Wie formalisiere ich diese Führungsrollen?

Führungsrollen zu formalisieren, hilft den Menschen, ein eigenes Verantwortungsbewusstsein zu entwickeln und zeigt anderen Mitwirkenden, wen sie um Hilfe bitten sollen.

In einem kleineren Projekt kann die Ernennung von Verantwortlichen einfach durch Hinzufügen Ihrer Namen zur README- oder CONTRIBUTORS-Datei geschehen.

Für ein größeres Projekt mit einer Website, erstellen Sie eine Teamseite und listen die Verantwortlichen dort auf. Zum Beispiel hat [Postgres](https://github.com/postgres/postgres/) eine [umfassende Teamseite](https://www.postgresql.org/community/contributors/) mit Kurzprofilen aller Mitwirkenden.

Wenn Ihr Projekt eine sehr aktive Gemeinschaft von Mitwirkenden hat, können Sie ein Maintainer\*innen-"Kernteam" bilden oder sogar Gremien, welche die Verantwortung für verschiedene Themengebiete übernehmen (z.B. Sicherheit, Issue-Bearbeitung oder Community-Management). Lassen Sie die Leute sich selbst organisieren! Anstatt ihnen Rollen zuzuweisen, lassen Sie Freiwillige das übernehmen, was diese am meisten begeistert.

<aside markdown="1" class="pquote">

  \[Wir\] ergänzen das Kernteam mit mehreren "Subteams". Jedes Subteam ist auf einen bestimmten Bereich fokussiert, z.B. Sprachdesign oder Bibliotheken. Um eine globale Koordination und eine starke, kohärente Sichtweise für das Gesamtprojekt zu gewährleisten, wird jedes Subteam von einem Mitglied des Kernteams geleitet.

  _\[We\] supplement the core team with several "subteams". Each subteam is focused on a specific area, e.g., language design or libraries. (...) To ensure global coordination and a strong, coherent vision for the project as a whole, each subteam is led by a member of the core team._

  <p markdown="1" class="pquote-credit">
— ["Rust Governance RFC"](https://github.com/rust-lang/rfcs/blob/HEAD/text/1068-rust-governance.md)
  </p>
</aside>

Führungsteams können einen Kommunikationskanal einrichten (z.B. mit IRC) oder sich regelmäßig treffen, um das Projekt zu besprechen (z.B. in Gitter oder Google Hangout). Sie können diese Meetings sogar öffentlich machen, damit andere Leute zuhören können. [Cucumber-ruby](https://github.com/cucumber/cucumber-ruby) zum Beispiel, [lädt zu wöchentlichen Sprechstunden ein](https://github.com/cucumber/cucumber-ruby/blob/HEAD/CONTRIBUTING.md#talking-with-other-devs).

Vergessen Sie nicht, nach der Festlegung von Führungsrollen zu dokumentieren, wie Menschen diese erreichen können! Richten Sie einen klaren Prozess ein, wie Leute Maintainer\*in werden oder einem Gremium in Ihrem Projekt beitreten können, und beschreiben Sie diesen Prozess in einer GOVERNANCE.md.

Tools wie [Vossibility](https://github.com/icecrime/vossibility-stack) können Ihnen dabei helfen, öffentlich zu verfolgen, wer zum Projekt beiträgt (oder nicht). Die Dokumentation dieser Informationen beugt dem Eindruck vor, dass eine Maintainer\*innen-Clique ihre Privatinteressen durchsetzen würde.

Wenn sich Ihr Projekt auf GitHub befindet, können Sie Ihr Projekt von Ihrem persönlichen Konto in eine Organisation verschieben und mindestens einen Backup-Administrator einrichten. [GitHub-Organisationen](https://help.github.com/articles/creating-a-new-organization-account/) erleichtern die Verwaltung von mehreren Repositories und Berechtigungen, und schützen ihr Projektarchiv durch [gemeinsame Verantwortung](../building-community/#teilen-sie-die-eigentümerschaft-an-ihrem-projekt).

## Wann sollte ich jemandem Commit-Rechte geben?

Einige Leute denken, dass Sie allen Commit-Zugang geben sollten, die einen Beitrag geleistet haben. Dies könnte dazu führen, dass sich mehr Menschen für Ihr Projekt interessieren.

Andererseits (besonders bei größeren, komplexeren Projekten) möchten Sie vielleicht nur Personen zu Commits berechtigen, die ihr Engagement unter Beweis gestellt haben. Es gibt hier nicht _den einen_ richtigen Weg. Tun Sie, was Ihnen behagt!

Wenn sich Ihr Projekt auf GitHub befindet, können Sie unter [protected branches](https://help.github.com/articles/about-protected-branches/) verwalten, wer unter welchen Umständen auf einen bestimmten Branch committen darf.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/felixge?s=180" class="pquote-avatar" alt="avatar">

  Wann immer Ihnen jemand einen Pull Request schickt, geben Sie ihm Commit-Zugriff auf Ihr Projekt. Auch wenn es auf den ersten Blick unglaublich dumm klingt, können Sie mit dieser Strategie die wahre Kraft von GitHub entfalten. (...) Sobald Leute Commit-Zugriff haben, haben sie keine Angst mehr, dass ihr Patch nicht mehr angenommen werden könnte... Dies veranlasst sie dazu, viel mehr Arbeit in Patches zu stecken.

  _Whenever somebody sends you a pull request, give them commit access to your project. While it may sound incredibly stupid at first, using this strategy will allow you to unleash the true power of GitHub. (...) Once people have commit access, they are no longer worried that their patch might go unmerged...causing them to put much more work into it._

  <p markdown="1" class="pquote-credit">
— @felixge, ["The Pull Request Hack"](https://felixge.de/2013/03/11/the-pull-request-hack.html)
  </p>
</aside>

## Welche Verwaltungsstrukturen nutzen Open-Source-Projekte häufiger?

Es gibt drei Verwaltungsstrukturen, die häufig bei Open-Source-Projekten vorkommen.

* * **BDFL:** BDFL steht für "Benevolent Dictator for Life" (gutmütige\*r Diktator\*in auf Lebenszeit). Bei dieser Struktur hat eine Person (in der Regel die oder der Erstautor\*in des Projekts) das letzte Wort bei allen wichtigen Projektentscheidungen. [Python](https://github.com/python) ist ein klassisches Beispiel. Kleinere Projekte haben wahrscheinlich standardmäßig ein\*e BDFL, da es nur einen oder zwei Maintainer\*innen gibt. Aus Unternehmen stammende Projekte können ebenfalls in die Kategorie BDFL fallen.

* **Meritokratie:** **(Hinweis: Der Begriff "Meritokratie" ist bei einigen Communitys negativ konnotiert und hat eine [komplexe soziale und politische Geschichte](http://geekfeminism.wikia.com/wiki/Meritocracy).)** Unter einer Meritokratie erhalten aktive Projektmitarbeiter\*innen (diejenigen, die "sich die Meriten angelesen" haben) eine formelle Entscheidungsrolle. Entscheidungen werden in der Regel auf der Grundlage eines reinen Abstimmungskonsenses getroffen. Das Konzept der Meritokratie wurde von der [Apache Foundation](http://www.apache.org/) entwickelt; [alle Apache-Projekte](http://www.apache.org/index.html#projects-list) sind Meritokratien. Beiträge können nur von Personen geleistet werden, die sich selbst vertreten, nicht von einem Unternehmen.

* **Liberales Beitragsmodell:** Nach einem liberalen Beitragsmodell werden die Menschen, die aktuell die meiste Arbeit leisten, als die einflussreichsten anerkannt. Dabei wird aber ihre frühere Beitragshistorie außer Acht gelassen. Wichtige Projektentscheidungen werden auf der Grundlage eines Konsensfindungsprozesses (Besprechen der wichtigsten Missstände) und nicht auf Grundlage reiner Abstimmung getroffen. Dabei streben solche Projekte nach Einbeziehung möglichst vieler Perspektiven der Gemeinschaft. Beliebte Beispiele für Projekte, die ein liberales Beitragsmodell verwenden, sind [Node.js](https://foundation.nodejs.org/) und [Rust](https://www.rust-lang.org/).

Welches Modell sollten Sie verwenden? Das obliegt Ihnen! Jedes Modell hat Vor- und Nachteile. Und obwohl sie zunächst sehr unterschiedlich erscheinen mögen, haben alle drei Modelle mehr gemeinsam als zu vermuten wäre. Wenn Sie daran interessiert sind, eines dieser Modelle zu übernehmen, schauen Sie sich diese Vorlagen an (alle auf Englisch):

* [BDFL-Modellvorlage](http://oss-watch.ac.uk/resources/benevolentdictatorgovernancemodel)
* [Meritokratische Modellvorlage](http://oss-watch.ac.uk/resources/meritocraticgovernancemodel)
* [Node.js's liberale Beitragspolitik](https://medium.com/the-node-js-collection/healthy-open-source-967fa8be7951)

## Muss ich Projektleitung und -Steuerung schon zum Projektstart dokumentieren?

Es gibt nicht den einen richtigen Zeitpunkt, um die Leitungs- und Steuerungsrichtlinien Ihres Projekts aufzuschreiben. Allerdings sind sie einfacher zu definieren, sobald Sie die Entwicklung von Community-Dynamiken gesehen haben. Das Beste (und Schwierigste) an Open-Source-Projektsteuerung ist, dass sie von der Gemeinschaft geprägt wird!

Frühzeitige Dokumentationen wird selbst auch dazu beitragen, wie sich Ihr Projekt entwickelt, also schreiben Sie ruhig früh auf, was Sie früh wissen. So können Sie beispielsweise schon zum Projektstart klare Erwartungen an die Funktionsweise Ihres Mitwirkungsprozesses definieren.

Wenn Sie Teil eines Unternehmens sind, das ein Open-Source-Projekt startet, lohnt sich eine interne Diskussion vor dem Start. Wie erwartet Ihr Unternehmen, dass es das Projekt aufrechterhält und Entscheidungen trifft? Möglicherweise möchten Sie auch öffentlich erklären, ob oder wie Ihr Unternehmen in das Projekt eingebunden wird.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/caabernathy?s=180" class="pquote-avatar" alt="avatar">

  Wir beauftragen kleine Teams mit der Leitung von Projekten auf GitHub, die aktuell bei Facebook an diesen arbeiten. Beispielsweise wird das React-Projekt von einer React-Ingenieurin betreut.

  _We assign small teams to manage projects on GitHub who are actually working on these at Facebook. For example, React is run by a React engineer._

  <p markdown="1" class="pquote-credit">
— @caabernathy, ["An inside look at open source at Facebook"](https://opensource.com/life/15/10/ato-interview-christine-abernathy-facebook)
  </p>
</aside>

## Was passiert, wenn Firmenangehörige Beiträge einreichen?

Erfolgreiche Open-Source-Projekte werden von vielen Menschen und Unternehmen genutzt, und einige davon verfügen möglicherweise über Einnahmen, die letztendlich durch das Projekt generiert wurden. Beispielsweise kann eine Firma den Projektcode als eine Komponente eines kommerziellen Serviceangebots verwenden.

Mit zunehmender Verbreitung des Projekts werden Menschen, die über Fachwissen verfügen, immer gefragter (Sie könnten eine\*r davon sein!) und wird manchmal für die Arbeit bezahlt, die sie im Projekt leisten.

Es ist wichtig, kommerzielle Aktivitäten als normal und als eine weitere Motivation für die Entwicklungsarbeit zu betrachten. Bezahlte Entwickler\*innen sollten natürlich keine Sonderbehandlung gegenüber unbezahlten erhalten. Jeder Beitrag muss nach seinen technischen Eigenschaften bewertet werden. Allerdings sollten die Leute zu kommerziellen Aktivitäten bereit sein, und sich damit wohl fühlen, wenn sie ihre Anwendungsfälle angeben oder sich für eine bestimmte Verbesserung oder Funktion aussprechen.

"Kommerziell" ist vollständig kompatibel mit "Open-Source". "Kommerziell" bedeutet nur, dass irgendwo Geld im Spiel ist, z.B. dass die Software unternehmerisch eingesetzt wird. Dies wird umso wahrscheinlicher, je weiter sich ein Projekt verbreitet. Wenn Open-Source-Software als Teil eines Nicht-Open-Source-Produkts verwendet wird, ist das Gesamtprodukt immer noch "proprietäre" Software, obwohl sie (wie Open-Source!) für kommerzielle oder nicht-kommerzielle Zwecke verwendet werden kann.

Wie jeder andere auch, gewinnen kommerziell motivierte Entwickler\*innen durch die Qualität und Quantität ihrer Beiträge Einfluss auf das Projekt. Natürlich kann ein\*e Entwickler\*in, die oder der für die Arbeitszeit bezahlt wird, mehr tun als unbezahlte Beitragende, aber das ist in Ordnung: Bezahlung beeinflusst nur als einer von vielen möglichen Faktoren, was jemand tut. Halten Sie Ihre Projektdiskussionen auf den Inhalt der Beiträge fokussiert, nicht auf die externen Faktoren, die es den Menschen ermöglichen, diese Beiträge zu leisten.

## Brauche ich für mein Projekt eine juristische Person?

Sie benötigen keine juristische Person, um Ihr Open-Source-Projekt zu verwalten. Es sei denn, es kommt Geld ins Spiel.

Wenn Sie beispielsweise ein kommerzielles Unternehmen gründen möchten, sollten Sie eine GmbH oder UG gründen (wenn Sie in Deutschland ansässig sind). Wenn Sie nur Auftragsarbeiten im Zusammenhang mit Ihrem Open-Source-Projekt durchführen, können Sie Geld als (Einzel)Unternehmergesellschaft akzeptieren oder eine GmbH gründen.

Wenn Sie Spenden für Ihr Open-Source-Projekt annehmen möchten, können Sie einen Spendenkanal einrichten (z.B. über PayPal oder Stripe), aber das Geld ist nicht steuerlich absetzbar. Es sei denn, dieser Prozess läuft über einen anerkannten gemeinnützigen Verein.

Viele Projekte wollen sich nicht die Mühe machen, einen gemeinnützigen Verein zu gründen, also finden sie stattdessen einen gemeinnützigen, steuerrechtlichen Sponsor. Ein solcher Sponsor nimmt Spenden in Ihrem Namen entgegen (teilweise im Austausch gegen einen prozentualen Anteil der Spende). [Software Freedom Conservancy](https://sfconservancy.org/), [Apache Foundation](https://www.apache.org/), [Eclipse Foundation](https://eclipse.org/org/foundation/), [Linux Foundation](https://www.linuxfoundation.org/projects), [Open Collective](https://opencollective.com/opensource), und das deutsche [Center for the Cultivation of Technology](https://techcultivation.org/) sind Beispiele für Organisationen, die als steuerrechtliche Sponsoren für Open-Source-Projekte fungieren.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/piamancini?s=180" class="pquote-avatar" alt="avatar">

  Unser Ziel ist es, eine Infrastruktur bereitzustellen, die Communitys nutzen können, um selbsttragend zu sein, und so ein Umfeld zu schaffen, in dem alle (Beitragende, Geldgeber\*innen und Sponsor\*innen) konkrete Vorteile daraus ziehen können.

  _Our goal is to provide an infrastructure that communities can use to be self sustainable, thus creating an environment where everyone — contributors, backers, sponsors — get concrete benefits out of it._

  <p markdown="1" class="pquote-credit">
— @piamancini, ["Moving beyond the charity framework"](https://medium.com/open-collective/moving-beyond-the-charity-framework-b1191c33141)
  </p>
</aside>

Wenn Ihr Projekt spezifisch für eine bestimmte Programmiersprache oder ein bestimmtes Ökosystem gedacht ist, kann es auch eine entsprechende Software-Stiftung geben, mit der Sie zusammenarbeiten können. So unterstützt beispielsweise die [Python Software Foundation](https://www.python.org/psf/) den Paketmanager [PyPI](https://pypi.org/), und die [Node.js-Foundation](https://foundation.nodejs.org/) unterstützt das Node-basierte Framework [Express.js](https://expressjs.com/).
