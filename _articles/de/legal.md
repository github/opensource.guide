---
lang: de
title: Rechtliche Aspekte von Open-Source-Projekten
description: Alle Rechtsfragen zu Open-Source-Projekten, über die Sie sich jemals Gedanken gemacht haben, und einige, über die nicht.
class: legal
order: 10
image: /assets/images/cards/legal.png
related:
  - contribute
  - leadership
---

## Die rechtlichen Implikationen von offenem Quellcode verstehen

Ihr kreatives Werk mit der Welt zu teilen, ist eine anregende und erfüllende Erfahrung. Jedoch können auch unerwartete Rechtsfragen auftreten. Dankenswerterweise müssen Sie bei deren Beantwortung nicht von Null anfangen. Wir decken Sie hier mit Hinweise ein, aber bitte beachten Sie unseren [Haftungsausschluss](/notices/).

## Warum sorgen sich Leute so um Rechtsfragen im Open-Source-Bereich?

Danke, dass Sie fragen! Wenn Sie ein kreatives Werk erarbeiten (bspw. einen Text, ein Bild, oder eben Code) fällt es standardmäßig und automatisch unter das Urheberrecht. Das bedeutet, das von Rechts wegen Sie, der/die Autor\*in des Werkes bestimmen dürfen, was andere damit tun dürfen.

Generell gilt, dass Niemand sonst Ihr Werk nutzen, kopieren, verbreiten, oder modifizieren darf, ohne Abmahnungen oder Klagen zu riskieren.

Open Source ist diesbezüglich natürlich anders, denn die/der Autor\*in erwartet ja, dass andere das Werk nutzen, modifizieren und teilen. Aber weil der Rechtsgrundsatz zunächst "exklusives Urheberrecht" lautet, benötigen Sie eine Lizenz, die klare Erlaubnisse verteilt.

Wenn Sie keine Open-Source-Lizenz einsetzen, erhält zudem jede\*r ebenfalls das ausschließliche Urheberrechts, der/die zu Ihrem Projekt beiträgt. Das würde bedeuten, dass wirklich Niemand die Beiträge nutzen, kopieren, verbreiten, oder modifizieren dürfte. Selbst Sie nicht.

Schlussendlich könnte Ihr Projekt auch von anderen abhängen, die wiederum Lizenzbedingungen haben, derer Sie sich nicht bewusst waren. Die Gemeinschaft um Ihr Projekt und/oder Regelungen Ihrer Arbeitsstelle können auch bestimmte Open-Source-Lizenzen bedingen. Diese Fälle behandeln wir weiter unten.

## Sind publizierte GitHub-Projekte Open Source?

Wenn Sie [ein neues Projekt auf GitHub erstellen](https://help.github.com/articles/creating-a-new-repository/), können Sie dies **öffentlich** oder **privat** tun.

![Ein Repo erstellen](/assets/images/legal/repo-create-name.png)

**Ihr GitHub-Projekt öffentlich zu machen, ist nicht dasselbe, wie eine Lizenz zu vergeben.** Öffentliche Projekte unterliegen [GitHubs Servicebedingungen](https://help.github.com/en/github/site-policy/github-terms-of-service#3-ownership-of-content-right-to-post-and-license-grants), die Anderen das Ansehen und Forken Ihres Projektes erlauben. Dies bringt allerdings keine weiteren Erlaubnisse für Ihr Werk mit sich.

Wenn Sie anderen die Nutzung, Verbreitung, Modifikation Ihres Projektes erlauben möchten, sowie zu ihm beizutragen, müssen Sie eine Open-Source-Lizenz vergeben. Beispielsweise darf legalerweise kein Mensch irgendeinen Teil Ihres GitHub-Projektes in seinen/ihren eigenen Code nutzen (selbst wenn es öffentlich ist) solange Sie nicht das Recht dazu explizit eingeräumt haben.

## Sag mir nur kurz, wie ich mein Projekt schützen kann.

Sie haben Glück, denn Open-Source-Lizenzen sind heutzutage standardisiert und einfach zu nutzen. Sie können eine existierende Lizenz direkt in ihr Projekt kopieren.

[MIT](https://choosealicense.com/licenses/mit/), [Apache 2.0](https://choosealicense.com/licenses/apache-2.0/), und [GPLv3](https://choosealicense.com/licenses/gpl-3.0/) sind die populärsten Open-Source-Lizenzen, aber es gibt auch andere zur Auswahl. Sie finden deren Volltexte, sowie Anleitungen zur deren Nutzung auf [choosealicense.com](https://choosealicense.com/), sowie eine Gruppierung nach Lizenztyp auf [ifrOSS.org/lizenz-center](http://www.ifross.org/lizenz-center).

Wenn Sie ein neues Projekt auf GitHub anlegen, wird Ihnen [die Nutzung einer Lizenz vorgeschlagen](https://help.github.com/articles/open-source-licensing/).

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/benbalter?s=180" class="pquote-avatar" alt="avatar">

  Eine Standardlizenz fasst für juristisch nicht vorgebildete Leute zusammen, was diese mit der Software tun können, und was nicht. Solange es nicht absolut nötig ist, sollten Sie eigene, modifizierte oder nicht-Standard-Klauseln vermeiden, denn diese behindern die Nachnutzung des Codes.

  _A standardized license serves as a proxy for those without legal training to know precisely what they can and can't do with the software. Unless absolutely required, avoid custom, modified, or non-standard terms, which will serve as a barrier to downstream use of the agency code._

  <p markdown="1" class="pquote-credit">
— @benbalter, ["Everything a government attorney needs to know about open source software&nbsp;licensing"](https://ben.balter.com/2014/10/08/open-source-licensing-for-government-attorneys/)
  </p>
</aside>

## Welche Open-Source-Lizenz passt zu meinem Projekt?

Wenn Sie ein komplett neues Projekt starten, können Sie mit der [MIT-Lizenz](https://choosealicense.com/licenses/mit/) nichts falsch machen. Sie ist kurz, verständlich, und erlaubt allen alles, solange sie eine Lizenzkopie und Ihren Urheberrechtshinweis beibehalten.

Ansonsten hängt die korrekte Lizenzwahl von den Zielen Ihres Projektes ab.

Wahrscheinlich hat Ihr Projekt externe Abhängigkeiten (oder wird diese haben). Beispielsweise wenn Sie ein Node.js-Projekt veröffentlichen, werden Sie vermutlich Bibliotheken vom Node Package Manager (npm) nutzen. Jede dieser Bibliotheken ist eine Abhängigkeiten von Ihrem Projekt und hat ihre eigene Open-Source-Lizenz. Wenn jede dieser Lizenzen "permissiv" ist (also der Öffentlichkeit die Nutzung, Modifikation, und das Teilen bedingungslos erlaubt), können _Sie_ jede Lizenz verwenden, die sie möchten. Weit verbreitete permissive Lizenzen sind z.B. MIT, Apache 2.0, ISC und BSD.

Wenn allerdings irgendeine der Bibliotheken, von denen Ihr Projekt abhängt, ein "starkes Copyleft" hat (also der Öffentlichkeit die Nutzung, Modifikation, und das Teilen ebenso erlaubt, aber unter der Bedingung, die selbe Lizenz zu nutzen), dann wird Ihr Projekt diese Lizenz auch verwenden (müssen). Weit verbreitete Copyleft-Lizenzen sind z.B. die GPLv2, GPLv3, sowie die AGPLv3.

Sie sollten auch die **Gemeinschaften** beachten, von denen Sie sich Nutzung und Beiträge Ihres Projektes erhoffen.

* **Möchten Sie Ihr Projekt in anderen nachgenutzt wissen?** Am Besten nutzen Sie dann die populärste Lizenz im Umfeld ihres Projektes. Beispielsweise ist die [MIT-Lizenz](https://choosealicense.com/licenses/mit/) für [npm-Bibliotheken](https://libraries.io/npm) am populärsten.
* **Soll Ihr Projekt auch große Firmen anziehen?** Große Firmen möchten sich vermutlich Patentrechte sichern, auch von allen Kontributor\*innen. Diesen Fall deckt [Apache 2.0](https://choosealicense.com/licenses/apache-2.0/) ab.
* **Soll Ihr Projekt Kontributor\*innen anziehen, die ihre Beiträge aus Closed-Source-Software raushalten möchten?** [GPLv3](https://choosealicense.com/licenses/gpl-3.0/) oder (wenn sie auch nicht zu Closed-Source-Diensten beitragen möchten) [AGPLv3](https://choosealicense.com/licenses/agpl-3.0/) würden dazu passen.

Ihre **Firma** hat evtl. spezifische Lizenzanforderungen für ihre Open-Source-Projekte. Beispielsweise fordert sie eine permissive Lizenz, sodass sie Ihr Projekt in firmeneigener Closed-Source-Software nutzen kann. Oder, Ihre Firma könnte eine starke Copyleft-Lizenz und eine zusätzliche Kontributionsvereinbarung nutzen (siehe unten). Sodann kann nur sie und keine andere Firma, Ihr Projekt in einer Closed-Source-Software nutzen. Oder, Ihre Firma könnte spezielle Standards technischer Art haben, oder bezogen auf soziale Verantwortung, oder an Transparenz. All dies könnte eine spezifische Lizenzstrategie bedingen. Sprechen Sie mit der [Rechtsabteilung Ihrer Firma](#was-muss-die-rechtsabteilung-meines-unternehmens-wissen).

Wenn Sie ein GitHub-Projekt erstellen, wird Ihnen die Lizenzwahl vorgeschlagen. Dabei eine der oben genannten Lizenzen auszuwählen, "open-sourced" ihr Projekt. Wenn Sie aus weiteren Möglichkeiten die richtige Lizenz finden möchten, bitte schauen Sie sich [choosealicense.com](https://choosealicense.com) an, auch wenn Ihr Projekt [keine Software](https://choosealicense.com/non-software/) an sich ist.

## Was, wenn ich die Lizenz meines Projektes ändern möchte?

Die meisten Projekte müssen ihre Lizenz nie ändern. Aber manchmal kommen andere Umstände.

Zum Beispiel: Während des Wachstums Ihres Projektes bindet es weitere externe Bibliotheken ein oder gewinnt Nutzer\*innen hinzu. Oder, Ihre Firma ändert die Strategie. All dies kann (oder muss sogar) eine andere Lizenzentscheidung nach sich ziehen. Außerdem: Falls Sie zu Beginn keine Lizenz vergeben haben, ist dies nachzuholen effektiv dasselbe wie eine Lizenzänderung. Die folgenden drei Dinge sind grundsätzlich zu beachten, wenn Sie die Lizenzvergabe oder -änderung für Ihr Projekt in Betracht ziehen:

**Es ist kompliziert** Lizenzkompatibilitäten und deren Befolgung zu ermitteln. Auch die Urheberrechtsinhaber\*in(nen) herauszufinden, kann schnell kompliziert und verwirrend werden. Auf eine andere aber kompatible Lizenz für einen neue Release-Version und neue Beiträge zu wechseln, funktioniert anders als alle existierenden Beiträge zu relizenzieren. Ziehen Sie Ihre Kolleg\*innen von der Rechtsabteilung beim ersten Anflug des Verlangens nach Relizenzierung hinzu. Selbst wenn Sie die Erlaubnisse der Urheberrechtsinhaber\*innen für eine Lizenzänderung haben oder bekommen können: Bedenken Sie den Umbruch, den dies für Ihre Projekt und seine Nutzer\*innen bedeutet. Behandeln Sie eine Lizenzänderung als eine Richtungsentscheidung, die geschmeidiger über die Bühne gehen kann, wenn Sie mit allen Projektteilnehmer\*innen klar kommunizieren und alle konsultieren. All dies sind zudem gute Gründe, schon zu Beginn eines Projektes eine passende Lizenz zu wählen.

**Die vorhandene Lizenz Ihres Projektes.** Wenn diese kompatibel mit der gewünschten neuen Lizenz ist, können Sie die neue einfach anfangen zu verwenden. Dies funktioniert, da eine Kompatibilität von Lizenz A mit Lizenz B bedeutet, dass Sie die Bedingungen von Lizenz A auch erfüllen, wenn Sie sich an Lizenz B halten (Umgekehrt gilt dies allerdings nicht notwendigerweise ebenso). Wenn Sie z.B. eine permissive Lizenz nutzen (wie MIT), können Sie auf eine Lizenz mit mehr Bedingungen wechseln, solange Sie die Kopie des MIT-Lizenztextes und die assoziierten Urheberrechtshinweise beibehalten (also die MIT-Minimalbedingungen erfüllen). Wenn allerdings Ihre aktuelle Lizenz nicht-permissiv ist (sondern z.B. copyleft, oder wenn Sie keine Lizenz nutzen), und Sie nicht der oder die einzige Urheberrechtsinhaber\*in sind, können Sie Ihr Projekt nicht einfach auf MIT umstellen. Im Kern bedeutet eine permissive Lizenz auch, dass ein\*e Urheberrechtsinhaber\*in schon im Vorhinein die Erlaubnis zur Lizenzänderung gegeben hat.

**Die bestehenden Urheber\*innen Ihres Projekts.** Wenn Sie die oder der einzige Mitwirkende an Ihrem Projekt sind, dann sind entweder Sie oder Ihr Unternehmen der/die einzige Rechteinhaber\*in des Projekts. Sie können die Lizenz hinzufügen oder ändern, die Sie oder Ihr Unternehmen haben möchten. Andernfalls kann es andere Urheberrechtsinhaber\*innen geben, von denen Sie die Zustimmung benötigen, um die Lizenzen zu ändern. Wer sind sie? Menschen, die sich in Ihrem Projekt engagieren, kommen infrage. Aber in manchen Fällen werden die Verwertungsrechte von den Arbeitgeber\*innen dieser Leute gehalten, in anderen Fällen haben die Leute nur minimale Beiträge geleistet, aber es gibt keine exakte Regel, dass Beiträge unter einer bestimmten Anzahl von Code-Zeilen nicht dem Urheberrecht unterliegen. Was tun? Das kommt darauf an. Für ein relativ kleines und junges Projekt kann es möglich sein, alle existierenden Mitwirkenden dazu zu bringen, einer Lizenzänderung in einem Issue oder einem Pull-Antrag zuzustimmen. Für große und langlebige Projekte müssen Sie möglicherweise viele Mitwirkende und sogar deren Erben suchen. Mozilla brauchte Jahre (2001-2006), um Firefox, Thunderbird und verwandte Software neu zu lizenzieren.

Alternativ können Sie auch im Voraus bestimmte Lizenzänderungen unter bestimmten Bedingungen vereinbaren, die über die von Ihrer bestehenden Open-Source-Lizenz hinausgehen. Solche zusätzlichen Vereinbarungen, auch "contributor (license) agreements" genannt, werden unten weiter erklärt. Sie verschieben die Komplexität des Lizenzwechsels etwas: Sie brauchen mehr Hilfe von Ihren Anwälten im Vorfeld, und Sie werden trotzdem mit den Beteiligten Ihres Projekts kommunizieren wollen, wenn Sie eine Lizenzänderung durchführen.

## Benötigt mein Projekt eine zusätzliche Kontributionsvereinbarung?

Wahrscheinlich nicht. Für die überwiegende Mehrheit der Open-Source-Projekte gilt eine Open-Source-Lizenz implizit sowohl für reinkommende Beiträge als auch ausgehend an andere Mitwirkende und Benutzer\*innen. Wenn Ihr Projekt auf GitHub steht, machen GitHubs Terms of Service diese "inbound=outbound" genannte Praxis zum [expliziten Standard](https://help.github.com/en/github/site-policy/github-terms-of-service#6-contributions-under-repository-license).

Eine zusätzliche Kontributionsvereinbarung - oft auch Contributor License Agreement (CLA) genannt - kann Verwaltungsarbeit für die Projektbetreuer\*in schaffen. Hierbei hängt der Umfang der zusätzlichen Arbeit vom Projekt und der Implementierung ab. Eine einfache Vereinbarung erfordert, dass die Kontributor\*innen mit einem Klick bestätigen, dass sie die erforderlichen Rechte innehaben, um zum Projekts im Rahmen dessen Open-Source-Lizenz beizutragen.

Durch das Hinzufügen von "Papierkram", den einige für unnötig, schwer verständlich oder ungerecht halten (wenn der/die Empfänger\*in der Vereinbarung mehr Rechte erhält als die Mitwirkenden oder die Öffentlichkeit über die Open-Source-Lizenz des Projekts erhält), kann eine zusätzliche Kontributionsvereinbarung als unfreundlich für die Gemeinschaft des Projekts empfunden werden.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/bcantrill?s=180" class="pquote-avatar" alt="avatar">

    Wir haben den CLA für Node.js eliminiert, was die Eintrittsbarriere für Node.js-Mitwirkende senkt und damit die Basis der Kontributor\*innen verbreitert.

    _We have eliminated the CLA for Node.js. Doing this lowers the barrier to entry for Node.js contributors thereby broadening the contributor base._

  <p markdown="1" class="pquote-credit">
— @bcantrill, ["Broadening Node.js Contributions"](https://www.joyent.com/blog/broadening-node-js-contributions)
  </p>
</aside>

Einige Situationen, in denen Sie eine zusätzliche Kontributionsvereinbarung für Ihr Projekt in Betracht ziehen sollten, sind z.B:

* Ihre Anwälte wollen, dass alle Mitwirkenden ausdrücklich die Kontributionsbedingungen akzeptieren (_unterschreiben_, on- oder off-line), vielleicht weil sie der Meinung sind, dass die Open-Source-Lizenz selbst nicht ausreicht (obwohl sie ausreicht!). Wenn dies die einzige Sorge ist, sollte eine Kontributionsvereinbarung, welche die Open-Source-Lizenz des Projekts bestätigt, ausreichen. Das [jQuery Individual Contributor License Agreement](https://contribute.jquery.org/CLA/) ist ein gutes Beispiel für eine leichtgewichtige, zusätzliche Kontributionsvereinbarung. Für manche Projekte kann ein [Developer Certificate of Origin](https://github.com/probot/dco) eine Alternative sein.
* Sie oder Ihre Anwälte wollen Entwickler\*innen bestätigen lassen, dass Ihre Commits autorisiert sind. Viele Projekte nutzen dafür das [Developer Certificate of Origin](https://developercertificate.org/). Beispielsweise nutzt die Node.js-Community [ein DCO](https://github.com/nodejs/node/blob/HEAD/CONTRIBUTING.md) anstatt ihres [vorherigen CLAs](https://nodejs.org/en/blog/uncategorized/notes-from-the-road/#easier-contribution). [DCO Probot](https://github.com/probot/dco) bietet eine einfache Möglichkeit, in Ihrem Projekt ein solches DCO automatisch einzufordern.
* Ihr Projekt verwendet eine Open-Source-Lizenz, die keine ausdrückliche Patenterteilung enthält (z.B. MIT), die Sie aber von allen Mitwirkenden benötigen. Von denen können Einige für Unternehmen mit großen Patentportfolios arbeiten, die gegen Sie oder die anderen Mitwirkenden und Benutzer\*innen des Projekts verwendet werden könnten. Die [Apache Individual Contributor License Agreement](https://www.apache.org/licenses/icla.pdf) ist eine häufig verwendete zusätzliche Kontributionsvereinbarung mit einer der Apache License 2.0 entsprechenden Patenterteilung.
* Ihr Projekt steht unter einer Copyleft-Lizenz, aber Sie müssen auch eine proprietäre Version des Projekts verbreiten. Sie werden von allen Kontributor\*innen eine Rechteverwertungsvereinbarung einholen müssen, die Ihnen (aber nicht der Öffentlichkeit) eine permissive Lizenz gewährt. Das [MongoDB Contributor Agreement](https://www.mongodb.com/legal/contributor-agreement) ist ein Beispiel für eine solche Vereinbarungen.
* Sie sind der Meinung, dass Ihr Projekt im Laufe seiner Laufzeit seine Lizenz wechseln muss und möchten, dass die Mitwirkenden dieser Änderungen im Voraus zustimmen.

Wenn Sie mit Ihrem Projekt wirklich eine zusätzliche Kontributionsvereinbarung verwenden müssen, sollten Sie eine Integration wie den [CLA-Assistenten](https://github.com/cla-assistant/cla-assistant) verwenden, um Mitwirkende nur minimalstmöglich abzulenken.

## Was muss die Rechtsabteilung meines Unternehmens wissen?

Wenn Sie ein Open-Source-Projekt als Mitarbeiter\*in eines Unternehmens veröffentlichen, sollte die Rechtsabteilung zunächst wissen, dass Sie ein Open-Source-Projekt durchführen.

Ungeachtet der möglichen Vor- oder Nachteile sollten Sie es mitteilen, auch wenn es sich um ein persönliches Projekt handelt. Sie haben wahrscheinlich eine "Rechteübertragungsvereinbarung" mit ihrer Firma, die ihr einen gewissen Grad an Kontrolle über ihre Projekte gibt. Insbesondere, wenn diese irgendwie mit dem Geschäft des Unternehmens zu tun haben oder Sie die Ressourcen des Unternehmens für die Entwicklung des Projekts nutzen. Ihr Unternehmen _sollte_ Ihnen problemlos die Erlaubnis erteilen, und hat vielleicht schon eine mitarbeiterfreundliche Rechtevereinbarung oder Firmenpolitik. Wenn nicht, können Sie verhandeln (z.B. erklären, dass Ihr Projekt den beruflichen Lern- und Entwicklungszielen des Unternehmens dient), oder vermeiden, an Ihrem Projekt zu arbeiten, bis Sie ein besseres Unternehmen gefunden haben.

**Wenn Sie ein Projekt im Namen Ihrer Firma öffnen möchten,** teilen Sie dies definitiv mit. Ihre Rechtsabteilung hat wahrscheinlich bereits Richtlinien für eine Open-Source-Lizenz (und vielleicht eine zusätzliche Kontributionsvereinbarung), die auf den geschäftlichen Anforderungen des Unternehmens basieren und die sicherstellen, dass Ihr Projekt mit den Lizenzen seiner Dependencies übereinstimmt - wenn nicht, dann haben Sie und Ihre Rechtsabteilung Glück! Letztere dürfte erpicht darauf sein, mit Ihnen zusammenzuarbeiten, um folgende Dinge herauszufinden:

* **Material Dritter:** Hängt Ihr Projekt von Software ab, die von anderen erstellt wurden, oder enthält oder verwendet es anderweitig den Code Dritter? Wenn ja und diese Open-Source-lizenziert sind, müssen Sie diese einhalten. Dies beginnt mit der Wahl einer Lizenz für Ihr Projekt, die mit den Open-Source-Lizenzen der Drittanbieter kompatibel ist (siehe oben). Wenn Ihr Projekt Open-Source-Material Dritter modifiziert oder verbreitet, wird Ihre Rechtsabteilung auch sicher sein wollen, dass Sie Zusatzbedingungen der Drittanbieterlizenzen erfüllen, wie z.B. die Beibehaltung von Urheberrechtsvermerken. Wenn Ihr Projekt anderen Code verwendet, der nicht unter einer Open-Source-Lizenz steht, müssen Sie wahrscheinlich die Drittanbieter bitten, eine [Open-Source-Lizenz hinzuzufügen](https://choosealicense.com/no-license/#for-users). Wenn dies nicht erfolgreich ist, müssen Sie aufhören, deren Code in Ihrem Projekt zu verwenden.

* **Geschäftsgeheimnisse:** Überlegen Sie, ob Teile des Projektes Ihres Unternehmen nicht der Öffentlichkeit zugänglich gemacht werden sollten. Solches Material können Sie aus Ihrem Projekt extrahieren, privat halten, und den Rest veröffentlichen.

* **Patente:** Wenn Ihr Unternehmen ein Patent anmeldet, für das die Veröffentlichung Ihres Projekt eine [Offenlegung](https://en.wikipedia.org/wiki/Public_disclosure) darstellen würde, werden Sie evtl. gebeten zu warten (oder vielleicht wird das Unternehmen überdenken, ob die Patentanmeldung sinnvoll ist). Wenn Sie Beiträge von Mitarbeiter\*innen von Unternehmen mit großen Patentportfolios erwarten, könnte Ihre Rechtsabteilung sich eine Lizenz mit einer ausdrücklichen Patenterteilung von Kontributor\*innen wünschen (z.B. die Apache 2.0 oder GPLv3), oder eine zusätzliche Kontributionsvereinbarung (siehe oben).

* **Marken- und Warenzeichen:** Vergewissern Sie sich, dass Ihr Projektname [nicht im Widerspruch zu bestehenden Marken steht](../starting-a-project/#namenskonflikte-vermeiden). Wenn Sie Ihre eigenen Firmenmarken im Projekt verwenden, stellen Sie sicher, dass diese keine Konflikte verursachen. [FOSSmarks](http://fossmarks.org/) ist ein praktischer Leitfaden, um Marken im Rahmen von freien und Open-Source-Projekten zu verstehen.

* **Privatsphäre:** Sammelt Ihr Projekt Daten über Benutzer\*innen? Sendet sie zurück an Firmenserver? Ihre Rechtsabteilung kann Sie bei der Einhaltung von Unternehmensrichtlinien und externen Vorschriften unterstützen.

Wenn Sie das erste Open-Source-Projekt Ihres Unternehmens veröffentlichen, ist das mehr als genug, um durchzukommen (aber keine Sorge, die meisten Projekte sollten keine größeren Bedenken aufwerfen).

Längerfristig kann Ihre Rechtsabteilung mehr tun, um dem Unternehmen zu helfen, von seinem Engagement für Open Source zu profitieren, und auf der sicheren Seite zu bleiben:

* **Richtlinie für Beiträge von Angestellten:** Erwägen Sie die Entwicklung einer Unternehmenspolitik, die festlegt, wie Ihre Mitarbeiter\*innen zu Open-Source-Projekten beitragen. Eine klare Richtlinie verringert die Verwirrung unter Ihren Mitarbeiter\*innen und hilft ihnen dabei, Open-Source-Projekte im besten Interesse des Unternehmens zu unterstützen, sei es als Teil ihrer Arbeit oder in ihrer Freizeit. Ein gutes Beispiel von Rackspace ist deren [Model IP and Open Source Contribution Policy](https://processmechanics.com/2015/07/22/a-model-ip-and-open-source-contribution-policy/).

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/vanl?s=180" class="pquote-avatar" alt="avatar">

  Die Herausgabe des mit einem Patch verbundenen Rechte baut die Wissensbasis und das Ansehen der Mitarbeiterin / des Mitarbeiters auf und zeigt, dass das Unternehmen in die Entwicklung seiner Angestellten investiert, sowie ein Gefühl von Eigenverantwortung und Autonomie schafft. All diese Vorteile führen auch zu höherer Moral und besserer Mitarbeiterbindung.

  _Letting out the IP associated with a patch builds the employee's knowledge base and reputation. It shows that the company is invested in the development of that employee and creates a sense of empowerment and autonomy. All of these benefits also lead to higher morale and better employee retention._

  <p markdown="1" class="pquote-credit">
— @vanl, ["A Model IP and Open Source Contribution Policy"](https://processmechanics.com/2015/07/22/a-model-ip-and-open-source-contribution-policy/)
  </p>
</aside>

* **Was veröffentlichen?** [(Fast) alles?](http://tom.preston-werner.com/2011/11/22/open-source-everything.html). Wenn Ihre Rechtsabteilung die Open-Source-Strategie Ihres Unternehmens versteht und in sie investiert, kann sie Ihnen am besten helfen, anstatt Ihre Bemühungen zu behindern.
* **Compliance:** Auch wenn Ihr Unternehmen keine Open-Source-Projekte veröffentlicht, verwendet es die Open-Source-Software von anderen. [Bewusstsein darüber und Prozesse dafür](https://www.linuxfoundation.org/blog/blog/why-companies-that-use-open-source-need-a-compliance-program/) helfen, Kopfschmerzen, Produktverzögerungen und Klagen zu vermeiden.

<aside markdown="1" class="pquote">

  Organisationen müssen über eine Lizenz- und Compliance-Strategie verfügen, die sowohl in die Kategorien \["permissive" als auch "copyleft"\] passt, beginnend mit der Aufzeichnung der Lizenzbedingungen, die für die von Ihnen verwendete Open-Source-Software gelten - einschließlich Unterkomponenten und Abhängigkeiten.

  _Organizations must have a license and compliance strategy in place that fits both \["permissive" and "copyleft"\] categories. This begins with keeping a record of the licensing terms that apply to the open source software you're using — including subcomponents and dependencies._

  <p markdown="1" class="pquote-credit">
— Heather Meeker, ["Open Source Software: Compliance Basics And Best Practices"](https://techcrunch.com/2012/12/14/open-source-software-compliance-basics-and-best-practices/)
  </p>
</aside>

* **Patente:** Ihr Unternehmen kann dem [Open Invention Network](https://www.openinventionnetwork.com/) beitreten: Einem gemeinsamen defensiven Patent-Pool, um die Nutzung großer Open-Source-Projekte durch Mitglieder zu schützen, oder kann andere [alternative Patentlizenzen](https://www.eff.org/document/hacking-patent-system-2016) in Betracht ziehen.
* **Governance:** Vor allem, wenn es sinnvoll ist, ein Projekt in eine [juristische Person außerhalb des Unternehmens](../leadership-and-governance/#brauche-ich-für-mein-projekt-eine-juristische-person) zu verlegen.
