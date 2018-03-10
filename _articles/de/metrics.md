---
lang: de
title: Open-Source-Metriken
description: Treffen Sie fundierte Entscheidungen und helfen Sie Ihrem Open-Source-Projekt, indem Sie seinen Erfolg messen und verfolgen.
class: metrics
toc:
  warum-überhaupt-etwas-messen: "Warum überhaupt etwas messen?"
  entdeckt-werden: "Entdeckt werden"
  benutzung: "Benutzung"
  retention: "Retention"
  maintainer-activity: "Maintainer activity"
order: 9
image: /assets/images/cards/metrics.png
related:
  - finding
  - best-practices
---

## Warum überhaupt etwas messen?

Daten können Open-Source-Betreuern helfen, bessere Entscheidungen zu treffen, wenn sie mit Bedacht verwendet werden.

Mit mehr Informationen können Sie:

* Verstehen, wie Benutzer auf eine neue Funktion reagieren
* Herausfinden, woher neue Nutzer kommen
* Identifizieren und entscheiden, ob ein Anwendungsfall oder eine Funktionalität für Radnfälle unterstützt wird
* Die Beliebtheit Ihres Projekts quantifizieren
* Verstehen, wie Ihr Projekt verwendet wird
* Geld durch Sponsoring und Zuschüsse erhalten

[Homebrew](https://github.com/Homebrew/brew/blob/bbed7246bc5c5b7acb8c1d427d10b43e090dfd39/docs/Analytics.md) z.B. fand heraus, dass Google Analytics ihnen half, Arbeit zu priorisieren:

> Homebrew wird kostenlos zur Verfügung gestellt und ausschließlich von Freiwilligen in ihrer Freizeit betrieben. Daher verfügen wir nicht über die Ressourcen, um detaillierte Benutzerstudien von Homebrew-Benutzern durchzuführen, um zu entscheiden, wie zukünftige Features am besten gestaltet und die aktuelle Arbeit priorisiert werden können. Mit anonymen aggregierten Benutzeranalysen können wir Korrekturen und neue Funktionen basierend darauf priorisieren, wie, wo und wann Menschen Homebrew verwenden.

Popularität ist nicht alles. Jeder kommt aus verschiedenen Gründen auf Open Source. Wenn Ihr Ziel als Open Source-Betreuer darin besteht, Ihre Arbeit zu präsentieren, Ihren Code transparent zu machen oder einfach nur um Spaß zu haben, sind Metriken für Sie möglicherweise nicht wichtig.

Wenn Sie daran interessiert sind, Ihr Projekt auf einer tieferen Ebene zu verstehen, lesen Sie weiter, um die Aktivitäten Ihres Projekts zu analysieren.

## Entdeckt werden

Bevor Leute Ihr Projekt nutzen oder zu ihm beitragen können, müssen sie wissen, dass es existiert... Fragen Sie sich selbst: _Finden Leute dieses Projekt?_

![Besucherzahlen](/assets/images/metrics/repo_traffic_graphs_tooltip.png)

Wenn Ihr Projekt auf GitHub gehostet wird, [können Sie sichansehen](https://help.github.com/articles/about-repository-graphs/#traffic), wie viele Personen Ihr Projekt finden und wie sie es gefunden haben. Im Repo Ihres Projektes, klicken Sie "Insights" und dann "Traffic". Auf der Seite sehen Sie:

* **Views** zeigen an, wie oft Ihr Projekt angesehen wurde.

* **Unique visitors** zeigt, wie viele Personen Ihr Projekt angesehen haben.

* **Referring sites:** Diese Metrik kann Ihnen helfen, herauszufinden, wo Sie Ihr Publikum erreichen und ob Ihre Werbekampagnen funktionieren.

* **Popular content** sagt, wohin Besucher\*innen auf Ihrer Projektseite gehen, aufgeschlüsselt nach Seitenaufrufen und einzelnen Besucher\*innen.

[GitHub-Stern](https://help.github.com/articles/about-stars/) Während GitHub-Sterne nicht unbedingt mit Downloads und Nutzung korrelieren, können sie Ihnen sagen, wie viele Menschen Ihre Arbeit schätzen.

Vielleicht möchten Sie auch [die Auffindbarkeit an bestimmten Orten verfolgen](https://opensource.com/business/16/6/pirate-metrics): z.B. Google PageRank, von Ihrer Projektwebsite ausgehende Epfehlungen, oder eingehende Epfehlungen anderer Open-Source-Projekte oder -Webseiten.

## Benutzung

Leute finden Ihr Projekt auf dieser wilden und verrückten Sache, die wir das Internet nennen. Wenn sie Ihr Projekt sehen, werden sie sich im Idealfall angespornt fühlen, etwas zu tun. Die zweite Frage, die Sie sich stellen sollten, lautet: _Nutzen Leute dieses Projekt?_

Wenn Sie einen Paketmanager wie npm oder RubyGems.org verwenden, um Ihr Projekt zu verteilen, können Sie vielleicht die Downloads Ihres Projekts verfolgen.

Paketmanager verwenden leicht unterschiedliche "Download"-Definitionen, und Downloads korrelieren nicht unbedingt mit "Installation" oder "Verwendung", aber sie bieten eine Grundlinie für den Vergleich: Probieren Sie [Libraries.io](https://libraries.io/) aus, um Nutzungsstatistiken über viele populäre Paketmanager hinweg zu verfolgen.

Wenn sich Ihr Projekt auf GitHub befindet, navigieren Sie erneut zur Traffic-Seite. Aus [dem clone-Diagramm](https://github.com/blog/1873-clone-graphs) können Sie ablesen, wie oft Ihr Projekt an einem bestimmten Tag heruntergeladen wurde, aufgeschlüsselt nach Gesamtzahl und  Nutzer\*innen.

![clone-Diagramm](/assets/images/metrics/clone_graph.png)

Wenn die Nutzung im Vergleich zur Anzahl der Personen, die Ihr Projekt entdecken, gering ist, gibt es zwei Punkte zu beachten:

* Entweder schafft es Ihr Projekt nicht, Besucher\*innen zu Nutzer\*innen zu gewinnen,
* oder Sie ziehen die falsche Zielgruppe an.

Wenn Ihr Projekt z.B. auf der Titelseite von [Hacker News](https://news.ycombinator.com/) landet, werden Sie wahrscheinlich eine Steigerung der Entdeckungsrate (Traffic) sehen, aber eine niedrigere Konversionsrate, weil Sie alle auf Hacker News erreichen. Wenn Ihr Ruby-Projekt jedoch auf einer Ruby-Konferenz vorgestellt wird, ist es wahrscheinlicher, dass Sie eine hohe Konversionsrate von einem Zielpublikum sehen.

Versuchen Sie, herauszufinden, woher Ihr Publikum kommt, und bitten Sie auf Ihrer Projektseite um Feedback der Besucher\*innen, um herauszufinden, welche dieser beiden Effekte Ihre Projekt betrifft.

Sobald Sie wissen, dass Leute Ihr Projekt benutzen, möchten Sie vielleicht versuchen, herauszufinden, was sie damit machen... Bauen sie darauf auf, indem sie Ihren Code forken und Funktionen hinzufügen? Nutzen sie es für wissenschaftliche oder gewerbsmäßige Zwecke.

## Retention

People are finding your project and they're using it. The next question you'll want to ask yourself is: _are people contributing back to this project?_

It's never too early to start thinking about contributors. Without other people pitching in, you risk putting yourself into an unhealthy situation where your project is _popular_ (many people use it) but not _supported_ (not enough maintainer time to meet demand).

Retention also requires an [inflow of new contributors](http://blog.abigailcabunoc.com/increasing-developer-engagement-at-mozilla-science-learning-advocacy#contributor-pathways_2), as previously active contributors will eventually move on to other things.

Examples of community metrics that you may want to regularly track include:

* **Total contributor count and number of commits per contributor:** Tells you how many contributors you have, and who's more or less active. On GitHub, you can view this under "Graphs" -> "Contributors." Right now, this graph only counts contributors who have committed to the default branch of the repository.

![Contributor graph](/assets/images/metrics/repo_contributors_specific_graph.png)

* **First time, casual, and repeat contributors:** Helps you track whether you're getting new contributors, and whether they come back. (Casual contributors are contributors with a low number of commits. Whether that's one commit, less than five commits, or something else is up to you.) Without new contributors, your project's community can become stagnant.

* **Number of open issues and open pull requests:** If these numbers get too high, you might need help with issue triaging and code reviews.

* **Number of _opened_ issues and _opened_ pull requests:** Opened issues means somebody cares enough about your project to open an issue. If that number increases over time, it suggests people are interested in your project.

* **Types of contributions:** For example, commits, fixing typos or bugs, or commenting on an issue.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/arfon?s=180" class="pquote-avatar" alt="avatar">
  Open source is more than just code. Successful open source projects include code and documentation contributions together with conversations about these changes.
  <p markdown="1" class="pquote-credit">
— @arfon, ["The Shape of Open Source"](https://github.com/blog/2195-the-shape-of-open-source)
  </p>
</aside>

## Maintainer activity

Finally, you'll want to close the loop by making sure your project's maintainers are able to handle the volume of contributions received. The last question you'll want to ask yourself is: _am I (or are we) responding to our community?_

Unresponsive maintainers become a bottleneck for open source projects. If someone submits a contribution but never hears back from a maintainer, they may feel discouraged and leave.

[Research from Mozilla](https://docs.google.com/presentation/d/1hsJLv1ieSqtXBzd5YZusY-mB8e1VJzaeOmh8Q4VeMio/edit#slide=id.g43d857af8_0177) suggests that maintainer responsiveness is a critical factor in encouraging repeat contributions.

Consider tracking how long it takes for you (or another maintainer) to respond to contributions, whether an issue or a pull request. Responding doesn't require taking action. It can be as simple as saying: _"Thanks for your submission! I'll review this within the next week."_

You could also measure the time it takes to move between stages in the contribution process, such as:

* Average time an issue remains open
* Whether issues get closed by PRs
* Whether stale issues get closed
* Average time to merge a pull request

## Use 📊 to learn about people

Understanding metrics will help you build an active, growing open source project. Even if you don't track every metric on a dashboard, use the framework above to focus your attention on the type of behavior that will help your project thrive.
