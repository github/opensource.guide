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

In den frühen Tagen eines Projekts experimentierst du viel mit neuen Ideen und machst Entscheidungen basierend auf was du möchtest. Sobald dein Projekt populär wird, wirst du dich vermehrt darin sehen, dass du mit deinen Nutzern und Beitragenden beschäftigst.

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

![celery screenshot](/assets/images/best-practices/celery.png)

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

Manchmal, wenn du „Nein“ sagst, wird dein potenzieller Beiträgern vielleicht wütend, oder kritisiert deine Entscheidung. Wenn sie ablehnend werden, [ergreife die Initative um die Lage zu beruhigen (Englisch)](https://github.com/jonschlinkert/maintainers-guide-to-staying-positive#action-items) oder entferne sie sogar aus der Community, wenn sie nicht konstruktiv mitarbeiten möchten.

### Embrace mentorship

Maybe someone in your community regularly submits contributions that don't meet your project's standards. It can be frustrating for both parties to repeatedly go through rejections.

If you see that someone is enthusiastic about your project, but needs a bit of polish, be patient. Explain clearly in each situation why their contributions don't meet the expectations of the project. Try pointing them to an easier or less ambiguous task, like an issue marked _"good first bug,"_ to get their feet wet. If you have time, consider mentoring them through their first contribution, or find someone else in your community who might be willing to mentor them.

## Leverage your community

You don't have to do everything yourself. Your project's community exists for a reason! Even if you don't yet have an active contributor community, if you have a lot of users, put them to work.

### Share the workload

If you're looking for others to pitch in, start by asking around.

When you see new contributors making repeated contributions, recognize their work by offering more responsibility. Document how others can grow into leadership roles if they wish.

Encouraging others to [share ownership of the project](../building-community/#share-ownership-of-your-project) can greatly reduce your own workload, as @lmccart discovered on her project, [p5.js](https://github.com/processing/p5.js?files=1).

<aside markdown="1" class="pquote">
  <img src="https://avatars3.githubusercontent.com/u/191056?v=3&s=460" class="pquote-avatar" alt="avatar">
  I’d been saying, “Yeah, anyone can be involved, you don’t have to have a lot of coding expertise [...].” We had people sign up to come [to an event] and that’s when I was really wondering: is this true, what I’ve been saying? There are gonna be 40 people who show up, and it’s not like I can sit with each of them...But people came together, and it just sort of worked. As soon as one person got it, they could teach their neighbor.
  <p markdown="1" class="pquote-credit">
—  @lmccart, ["What Does “Open Source” Even Mean? p5.js Edition"](https://medium.com/@kenjagan/what-does-open-source-even-mean-p5-js-edition-98c02d354b39#.chnjlag7p)
  </p>
</aside>

If you need to step away from your project, either on hiatus or permanently, there's no shame in asking someone else to take over for you.

If other people are enthusiastic about its direction, give them commit access or formally hand over control to someone else. If someone forked your project and is actively maintaining it elsewhere, consider linking to the fork from your original project. It's great that so many people want your project to live on!

@progrium [found that](http://progrium.com/blog/2015/12/04/leadership-guilt-and-pull-requests/) documenting the vision for his project, [Dokku](https://github.com/dokku/dokku), helped those goals live on even after he stepped away from the project:

> I wrote a wiki page describing what I wanted and why I wanted it. For some reason it came as a surprise to me that the maintainers started moving the project in that direction! Did it happen exactly how I'd do it? Not always. But it still brought the project closer to what I wrote down.

### Let others build the solutions they need

If a potential contributor has a different opinion on what your project should do, you may want to gently encourage them to work on their own fork.

Forking a project doesn't have to be a bad thing. Being able to copy and modify projects is one of the best things about open source. Encouraging your community members to work on their own fork can provide the creative outlet they need, without conflicting with your project's vision.

<aside markdown="1" class="pquote">
  <img src="https://avatars1.githubusercontent.com/u/481677?v=3&s=400" class="pquote-avatar" alt="avatar">
  I cater to the 80% use case. If you are one of the unicorns, please fork my work. I won't get offended! My public projects are almost always meant to solve the most common problems; I try to make it easy to go deeper by either forking my work or extending it.
  <p markdown="1" class="pquote-credit">
— @geerlingguy, ["Why I Close PRs"](https://www.jeffgeerling.com/blog/2016/why-i-close-prs-oss-project-maintainer-notes)
  </p>
</aside>

The same applies to a user who really wants a solution that you simply don't have the bandwidth to build. Offering APIs and customization hooks can help others meet their own needs, without having to modify the source directly. @orta [found that](http://artsy.github.io/blog/2016/07/03/handling-big-projects/) encouraging plugins for CocoaPods led to "some of the most interesting ideas":

> It's almost inevitable that once a project becomes big, maintainers have to become a lot more conservative about how they introduce new code. You become good at saying "no", but a lot of people have legitimate needs. So, instead you end up converting your tool into a platform.

## Bring in the robots

Just as there are tasks that other people can help you with, there are also tasks that no human should ever have to do. Robots are your friend. Use them to make your life as a maintainer easier.

### Require tests and other checks to improve the quality of your code

One of the most important ways you can automate your project is by adding tests.

Tests help contributors feel confident that they won't break anything. They also make it easier for you to review and accept contributions quickly. The more responsive you are, the more engaged your community can be.

Set up automatic tests that will run on all incoming contributions, and ensure that your tests can easily be run locally by contributors. Require that all code contributions pass your tests before they can be submitted. You'll help set a minimum standard of quality for all submissions. [Required status checks](https://help.github.com/articles/about-required-status-checks/) on GitHub can help ensure no change gets merged without your tests passing.

If you add tests, make sure to explain how they work in your CONTRIBUTING file.

<aside markdown="1" class="pquote">
  <img src="https://avatars3.githubusercontent.com/u/812892?v=3&s=460" class="pquote-avatar" alt="avatar">
  I believe that tests are necessary for all code that people work on. If the code was fully and perfectly correct, it wouldn't need changes – we only write code when something is wrong, whether that's "It crashes" or "It lacks such-and-such a feature". And regardless of the changes you're making, tests are essential for catching any regressions you might accidentally introduce.
  <p markdown="1" class="pquote-credit">
— @edunham, ["Rust's Community Automation"](http://edunham.net/2016/09/27/rust_s_community_automation.html)
  </p>
</aside>

### Use tools to automate basic maintenance tasks

The good news about maintaining a popular project is that other maintainers have probably faced similar issues and built a solution for it.

There are a [variety of tools available](https://github.com/showcases/tools-for-open-source) to help automate some aspects of maintenance work. A few examples:

* [semantic-release](https://github.com/semantic-release/semantic-release) automates your releases
* [mention-bot](https://github.com/facebook/mention-bot) mentions potential reviewers for pull requests
* [Danger](https://github.com/danger/danger) helps automate code review

For bug reports and other common contributions, GitHub has [Issue Templates and Pull Request Templates](https://github.com/blog/2111-issue-and-pull-request-templates), which you can create to streamline the communication you receive. You can also set up [email filters](https://github.com/blog/2203-email-updates-about-your-own-activity) to manage your email notifications.

If you want to get a little more advanced, style guides and linters can standardize project contributions and make them easier to review and accept.

However, if your standards are too complicated, they can increase the barriers to contribution. Make sure you're only adding enough rules to make everyone's lives easier.

If you're not sure which tools to use, look at what other popular projects do, especially those in your ecosystem. For example, what does the contribution process look like for other Node modules? Using similar tools and approaches will also make your process more familiar to your target contributors.

## It's okay to hit pause

Open source work once brought you joy. Maybe now it's starting to make you feel avoidant or guilty.

Perhaps you're feeling overwhelmed or a growing sense of dread when you think about your projects. And meanwhile, the issues and pull requests pile up.

Burnout is a real and pervasive issue in open source work, especially among maintainers. As a maintainer, your happiness is a non-negotiable requirement for the survival of any open source project.

Although it should go without saying, take a break! You shouldn't have to wait until you feel burned out to take a vacation. @brettcannon, a Python core developer, decided to take [a month-long vacation](http://www.snarky.ca/why-i-took-october-off-from-oss-volunteering) after 14 years of volunteer OSS work.

Just like any other type of work, taking regular breaks will keep you refreshed, happy, and excited about your work.

<aside markdown="1" class="pquote">
  <img src="https://avatars1.githubusercontent.com/u/36432?v=3&s=400" class="pquote-avatar" alt="avatar">
  In maintaining WP-CLI, I've discovered I need to make myself happy first, and set clear boundaries on my involvement. The best balance I've found is 2-5 hours per week, as a part of my normal work schedule. This keeps my involvement a passion, and from feeling too much like work. Because I prioritize the issues I'm working on, I can make regular progress on what I think is most important.
  <p markdown="1" class="pquote-credit">
— @danielbachhuber, ["My condolences, you're now the maintainer of a popular open source project"](https://runcommand.io/2016/06/26/my-condolences-youre-now-the-maintainer-of-a-popular-open-source-project/)
  </p>
</aside>

Sometimes, it can be hard to take a break from open source work when it feels like everybody needs you. People may even try to make you feel guilty for stepping away.

Do your best to find support for your users and community while you're away from a project. If you can't find the support you need, take a break anyway. Be sure to communicate when you're not available, so people aren't confused by your lack of responsiveness.

Taking breaks applies to more than just vacations, too. If you don't want to do open source work on weekends, or during work hours, communicate those expectations to others, so they know not to bother you.

## Take care of yourself first!

Maintaining a popular project requires different skills than the earlier stages of growth, but it's no less rewarding. As a maintainer, you'll practice leadership and personal skills on a level that few people get to experience. While it's not always easy to manage, setting clear boundaries and only taking on what you're comfortable with will help you stay happy, refreshed, and productive.
