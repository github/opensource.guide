---
lang: de
title: Open-Source-Metriken
description: Treffen Sie fundierte Entscheidungen und helfen Sie Ihrem Open-Source-Projekt, indem Sie dessen Erfolg messen und verfolgen.
class: metrics
order: 9
image: /assets/images/cards/metrics.png
related:
  - finding
  - best-practices
---

## Warum überhaupt etwas messen?

Daten können Open-Source-Betreuer\*innen helfen, bessere Entscheidungen zu treffen, wenn sie mit Bedacht verwendet werden.

Mit mehr Informationen können Sie:

* Verstehen, wie Benutzer\*innen auf eine neue Funktion reagieren
* Herausfinden, woher neue Nutzer\*innen kommen
* Identifizieren und entscheiden, ob ein Anwendungsfall oder eine Funktionalität für Randfälle unterstützt wird
* Die Beliebtheit Ihres Projekts quantifizieren
* Verstehen, wie Ihr Projekt verwendet wird
* Geld durch Sponsoring und Zuschüsse erhalten

[Homebrew](https://github.com/Homebrew/brew/blob/bbed7246bc5c5b7acb8c1d427d10b43e090dfd39/docs/Analytics.md) z.B. fand heraus, dass Google Analytics ihnen half, Arbeit zu priorisieren:

> Homebrew wird kostenlos zur Verfügung gestellt und ausschließlich von Freiwilligen in ihrer Freizeit betrieben. Daher verfügen wir nicht über die Ressourcen, um detaillierte Benutzerstudien von Homebrew-Benutzern durchzuführen, um zu entscheiden, wie zukünftige Features am besten gestaltet und die aktuelle Arbeit priorisiert werden können. Mit anonymen aggregierten Benutzeranalysen können wir Korrekturen und neue Funktionen basierend darauf priorisieren, wie, wo und wann Menschen Homebrew verwenden.
>
> Homebrew is provided free of charge and run entirely by volunteers in their spare time. As a result, we do not have the resources to do detailed user studies of Homebrew users to decide on how best to design future features and prioritise current work. Anonymous aggregate user analytics allow us to prioritise fixes and features based on how, where and when people use Homebrew.

Popularität ist nicht alles. Jeder kommt aus verschiedenen Gründen auf Open Source. Wenn Ihr Ziel als Open-Source-Betreuer\*in darin besteht, Ihre Arbeit zu präsentieren, Ihren Code transparent zu machen oder einfach nur um Spaß zu haben, sind Metriken für Sie möglicherweise nicht wichtig.

Wenn Sie daran interessiert sind, Ihr Projekt auf einer tieferen Ebene zu verstehen, lesen Sie weiter, um die Aktivitäten Ihres Projekts zu analysieren.

## Entdeckt werden

Bevor Leute Ihr Projekt nutzen oder zu ihm beitragen können, müssen sie wissen, dass es existiert. Fragen Sie sich selbst: _Finden Leute dieses Projekt?_

![Besucherzahlen](/assets/images/metrics/repo_traffic_graphs_tooltip.png)

Wenn Ihr Projekt auf GitHub gehostet wird, [können Sie sich ansehen](https://help.github.com/articles/about-repository-graphs/#traffic), wie viele Personen Ihr Projekt finden und wie sie es gefunden haben. Im Repo Ihres Projektes, klicken Sie "Insights" und dann "Traffic". Auf der Seite sehen Sie:

* **Views** zeigen an, wie oft Ihr Projekt angesehen wurde.

* **Unique visitors** zeigt, wie viele Personen Ihr Projekt angesehen haben.

* **Referring sites:** Diese Metrik kann Ihnen helfen, herauszufinden, wo Sie Ihr Publikum erreichen und ob Ihre Werbekampagnen funktionieren.

* **Popular content** zeigt, wohin Besucher\*innen auf Ihrer Projektseite gehen, aufgeschlüsselt nach Seitenaufrufen und einzelnen Besucher\*innen.

[GitHub-Stern](https://help.github.com/articles/about-stars/) korrelieren nicht unbedingt mit Downloads und Nutzung, aber zeigen Ihnen, wie viele Menschen Ihre Arbeit schätzen.

Vielleicht möchten Sie auch [die Auffindbarkeit an bestimmten Orten verfolgen](https://opensource.com/business/16/6/pirate-metrics): z.B. Google PageRank, von Ihrer Projektwebsite ausgehende Empfehlungen, oder eingehende Empfehlungen anderer Open-Source-Projekte oder -Webseiten.

## Benutzung

Leute finden Ihr Projekt auf dieser wilden und verrückten Sache, die wir das Internet nennen. Wenn sie Ihr Projekt sehen, werden sie sich im Idealfall angespornt fühlen, etwas zu tun. Die zweite Frage, die Sie sich stellen sollten, lautet: _Nutzen Leute dieses Projekt?_

Wenn Sie einen Paketmanager wie [npm](https://www.npmjs.com/) oder [RubyGems.org](https://rubygems.org/) verwenden, um Ihr Projekt zu verteilen, können Sie vielleicht die Downloads Ihres Projekts verfolgen.

Paketmanager verwenden leicht unterschiedliche "Download"-Definitionen, und Downloads korrelieren nicht unbedingt mit "Installation" oder "Verwendung", aber sie bieten eine Basislinie für Vergleiche: Probieren Sie [Libraries.io](https://libraries.io/) aus, um Nutzungsstatistiken über viele populäre Paketmanager hinweg zu verfolgen.

Wenn sich Ihr Projekt auf GitHub befindet, navigieren Sie erneut zur Traffic-Seite. Aus [dem clone-Diagramm](https://github.com/blog/1873-clone-graphs) können Sie ablesen, wie oft Ihr Projekt an einem bestimmten Tag heruntergeladen wurde, aufgeschlüsselt nach Gesamtzahl und Nutzer\*innen.

![clone-Diagramm](/assets/images/metrics/clone_graph.png)

Wenn die Nutzung im Vergleich zur Anzahl der Personen, die Ihr Projekt entdecken, gering ist, gibt es zwei Punkte zu beachten:

* Entweder schafft es Ihr Projekt nicht, Besucher\*innen zu Nutzer\*innen zu konvertieren,
* oder Sie ziehen die falsche Zielgruppe an.

Wenn Ihr Projekt z.B. auf der Titelseite von [Hacker News](https://news.ycombinator.com/) landet, werden Sie wahrscheinlich eine Steigerung der Entdeckungsrate (Traffic) sehen, aber eine niedrigere Konversionsrate, weil Sie alle auf Hacker News erreichen. Wenn Ihr Ruby-Projekt jedoch auf einer Ruby-Konferenz vorgestellt wird, ist es wahrscheinlicher, dass Sie eine hohe Konversionsrate von einem Zielpublikum sehen.

Versuchen Sie herauszufinden woher Ihr Publikum kommt, und bitten Sie auf Ihrer Projektseite um Feedback der Besucher\*innen, um herauszufinden, welche dieser beiden Effekte Ihr Projekt betrifft.

Sobald Sie wissen, dass Leute Ihr Projekt benutzen, möchten Sie vielleicht versuchen, herauszufinden, was sie damit machen. Bauen sie darauf auf, indem sie Ihren Code forken und Funktionen hinzufügen? Nutzen sie es für wissenschaftliche oder gewerbsmäßige Zwecke?

## Nachhaltigkeit

Leute finden Ihr Projekt und benutzen es. Sie sollten sich nun die Frage stellen: _Wird auch wieder an das Projekt zurückgegeben?_

Es ist nie zu früh, um über Mitwirkende nachzudenken: Ohne andere Leute, die mitmachen, riskieren Sie, dass Sie sich in eine ungesunde Situation begeben, in der Ihr Projekt _populär_ ist (viele Leute benutzen es), aber nicht _unterstützt_ (nicht genug Zeit, um die Nachfrage zu befriedigen).

Nachhaltigkeit setzt auch [die Gewinnung neuer Mitwirkender](http://blog.abigailcabunoc.com/increasing-developer-engagement-at-mozilla-science-learning-advocacy#contributor-pathways_2) voraus, da zuvor Aktive auch mit der Zeit sich anderen Themen zuwenden werden.

Beispiele für Community-Metriken, die Sie regelmäßig verfolgen möchten, sind unter anderem:

* **Gesamtzahl der Mitwirkenden und Anzahl der Commits pro Mitwirkenden:** Sagt Ihnen, wie viele Leute an Ihrem Projekt mitwirken, und wer mehr oder weniger aktiv ist. Auf GitHub können Sie dies unter "Insights" -> "Contributors" einsehen. Dieses Diagramm zeigt momentan nur die Mitwirkenden, die zum Default-Branch des Repositories beigetragen haben.

![Mitwirkendendiagramm](/assets/images/metrics/repo_contributors_specific_graph.png)

* **Erstmalige, gelegentliche und regelmäßige Mitwirkende:** Hilft Ihnen nachzuvollziehen, ob Sie neue Mitwirkende hinzugewinnen können, und ob sie auch wiederholt mithelfen. (Gelegentlich Mitwirkende sind solche mit geringer Commit-Anzahl. Ob es sich dabei um einen, weniger als fünf Commits oder um andere Zahlen handelt, sei Ihnen überlassen). Ohne neue Helfer\*innen kann die Community Ihres Projekts stagnieren.

* **Anzahl der offenen Issues und Pull Requests:** Wenn diese Zahlen zu hoch werden, benötigen Sie vielleicht Hilfe beim Sichten der Issues und bei Code-Reviews.

* **Anzahl der _eröffneten_ Issues und Pull Requests:** Issues aufzumachen bedeutet, dass sich jemand genug für Ihr Projekt interessiert, um ein Problem lösen zu wollen. Wenn sich diese Zahl im Laufe der Zeit erhöht, dann zeigt dies wachsendes Interesse an Ihrem Projekt.

* **Arten der Mithilfe:** Zum Beispiel Commits, das Beheben von Tippfehlern oder Bugs oder das Kommentieren eines Issues.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/arfon?s=180" class="pquote-avatar" alt="avatar">

  Open Source ist mehr als nur Code: Erfolgreiche Open-Source-Projekte beinhalten Code und Dokumentationsbeiträge sowie Gespräche über diese Änderungen.

  _Open source is more than just code. Successful open source projects include code and documentation contributions together with conversations about these changes._

  <p markdown="1" class="pquote-credit">
— @arfon, ["The Shape of Open Source"](https://github.com/blog/2195-the-shape-of-open-source)
  </p>
</aside>

## Betreuer\*innen-Aktivität

Schließlich möchten Sie den Kreis schließen, indem Sie sicherstellen, dass die Maintainer\*innen Ihres Projekts in der Lage sind, das Volumen der erhaltenen Beiträge zu bewältigen. Die letzte Frage, die Sie sich stellen sollten, ist: _Antworte ich (oder antworten wir) auf unsere Community?_

Unresponsive Betreuer\*innen werden zum Flaschenhals für Open-Source-Projekte. Wenn jemand einen Beitrag einreicht, der aber nie beantwortet wird, wird sich die Person entmutigt fühlen und sich abwenden.

[Untersuchungen von Mozilla](https://docs.google.com/presentation/d/1hsJLv1ieSqtXBzd5YZusY-mB8e1VJzaeOmh8Q4VeMio/edit#slide=id.g43d857af8_0177) deuten darauf hin, dass eine schnelle und freundliche Reaktion der Maintainer\*innen Mitwirkende zu weiteren Beiträgen ermutigt.

Überlegen Sie, wie lange es dauert, bis Sie (oder ein anderer Betreuer) auf Beiträge reagieren, egal ob es sich um ein Issue oder ein Pull Request handelt. Die Reaktion muss keine Maßnahme sein; Auch ein einfaches : _"Vielen Dank für diesen Beitrag! Ich werde ihn innerhalb einer Woche überprüfen."_ zählt.

Sie können auch die Zeit messen, die benötigt wird, um zwischen den einzelnen Phasen des Beitragsprozesses zu wechseln, wie z.B:

* Die durchschnittliche Dauer, die ein Issue offen bleibt
* Ob Issues durch PRs geschlossen werden
* Ob veraltete Issues geschlossen werden
* Die Durchschnittliche Zeit für den Merge eines Pull Requests

## Nutzen Sie 📊 um die Helfer\*innen besser zu verstehen

Selbst wenn Sie nicht alle Metriken auf einem Dashboard verfolgen, können Sie mit Hilfe der obigen Hinweise Ihre Aufmerksamkeit auf die Art des Verhaltens lenken, die Ihrem Projekt zum Erfolg verhelfen wird.
