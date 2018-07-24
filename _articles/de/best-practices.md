---
lang: de
title: Gute Maintainer-Praxis
description: Erleichtern Sie Ihr Leben als Open-Source-Maintainer! Von der Dokumentation von Prozesses bis zum Einsatz Ihrer Community.
class: best-practices
toc:
  was-bedeutet-es-eine-software-instand-zu-halten: "Was bedeutet es, eine Software instand zu halten?"
  dokumentieren-sie-ihre-prozesse: "Dokumentieren Sie Ihre Prozesse"
  lernen-nein-zu-sagen: "Lernen, nein zu sagen"
  leverage-your-community: "Leverage your community"
  bring-in-the-robots: "Bring in the robots"
  its-okay-to-hit-pause: "It’s okay to hit pause"
order: 5
image: /assets/images/cards/best-practices.png
related:
  - metrics
  - leadership
---

## Was bedeutet es, eine Software instand zu halten?

Wenn Sie ein Open-Source-Projekt pflegen, das viele Leute benutzen, haben Sie vielleicht bemerkt, dass Sie weniger programmieren und mehr auf Issues reagieren.

In der Anfangsphase eines Projekts experimentieren Sie mit neuen Ideen und treffen Entscheidungen nach Ihren Wünschen. Da Ihr Projekt immer beliebter wird, werden Sie mehr mit Ihren Benutzer\*innen und Mitwirkenden zusammenarbeiten.

Die Instandhaltung eines Projekts erfordert mehr als nur Code. Diese Aufgaben sind oft unerwartet, aber genauso wichtig für ein wachsendes Projekt. Wir haben einige Möglichkeiten zusammengestellt, um Ihnen das Leben zu erleichtern, von der Dokumentation von Prozessen bis hin zur Nutzung Ihrer Community.

## Dokumentieren Sie Ihre Prozesse

Dinge aufzuschreiben ist eine der wichtigsten Aufgaben, die man als Maintainer\*in erledigt.

Dokumentation verdeutlicht nicht nur Ihr eigenes Denken, sondern macht auch anderen Menschen verständlich, was Sie brauchen oder erwarten, bevor sie überhaupt fragen.

Dinge aufzuschreiben macht es einfacher, nein zu sagen, wenn etwas nicht in den Anwendungsbereich passt. Es macht es auch einfacher für die Menschen, mitzumachen und zu helfen. Sie wissen nie, wer Ihr Projekt lesen oder nutzen könnte.

Selbst wenn Sie keine vollständigen Absätze niederschreiben, ist es besser, Stichworte aufzulisten, als gar nicht zu schreiben.

Denken Sie daran, Ihre Dokumentation auf dem neuesten Stand zu halten. Wenn Sie dies nicht immer tun können, löschen Sie Veraltetes oder markieren es als solches, damit die Mitwirkenden wissen, dass Updates gerne angenommen werden.

### Schreiben Sie Ihre Projektsvision auf

Schreiben Sie zunächst die Ziele Ihres Projekts auf. Fügen Sie sie Ihrer README hinzu oder erstellen Sie eine separate Datei namens VISION. Wenn es andere dafür nützliche Artefakte gibt (z.B. eine Projekt-Roadmap) machen Sie diese auch öffentlich.

Eine klare, dokumentierte Vision hilft Ihnen, sich zu konzentrieren und das "Scope Creep" von Beiträgen anderer zu vermeiden.

Zum Beispiel entdeckte @lord, dass ihm eine Projektvision herauszufinden half, auf welche Anfragen er Zeit verwenden sollte. Als frisch gebackener Maintainer bedauerte er, dass er sich nicht auf den Kern seines Projekts fokussiert hat, als er seine erste Feature-Anfrage für [Slate](https://github.com/lord/slate) erhielt.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/lord?s=180" class="pquote-avatar" alt="avatar">

  Ich habe es zurechtgefummelt. Ich habe mir nicht die Mühe gemacht, eine komplette Lösung zu finden. Statt einer halbherzigen Lösung wünschte ich, ich hätte gesagt: "Ich habe jetzt keine Zeit dafür, aber ich werde es auf die lange Nice-to-have-Liste setzen."

  _I fumbled it. I didn't put in the effort to come up with a complete solution. Instead of an half-assed solution, I wish I had said "I don't have time for this right now, but I'll add it to the long term nice-to-have list."_

  <p markdown="1" class="pquote-credit">
— @lord, ["Tips for new open source maintainers"](https://lord.io/blog/2014/oss-tips/)
  </p>
</aside>

### Communicate your expectations

Kommunizieren Sie Ihre Erwartungen

Es kann nervenaufreibend sein, Regeln niederzuschreiben. Manchmal hat man das Gefühl, das Verhalten anderer Leute zu überwachen, oder ein Spaßverderber zu sein.

Allerdings sind geschrieben und fair durchgesetzte Regeln nützlich für Projektbetreuer\*innen. Sie verhindern, dass man in Dinge hineingezogen wird, die man nicht tun will.

Die meisten Menschen, die auf Ihr Projekt stoßen, wissen nichts über Sie oder Ihre Lebensumstände. Sie können annehmen, dass Sie dafür bezahlt werden, daran zu arbeiten, insb. wenn sie Ihr Projekt regelmäßig benutzen und davon abhängig sind. Vielleicht haben Sie mal viel Zeit in Ihr Projekt gesteckt, sind aber jetzt mit einem neuen Job oder Familienmitglied beschäftigt.

All das ist völlig in Ordnung! Stellen Sie nur sicher, dass Andere davon erfahren.

Wenn Sie Ihr Projekt in Teilzeit oder auf freiwilliger Basis betreuen, seien Sie ehrlich, wie viel Zeit Ihnen zur Verfügung steht. Das ist nicht das Gleiche, wie viel Zeit das Projekt Ihrer Meinung nach benötigt oder wie viel Andere erwarten.

Hier sind ein paar Regeln, die es wert sind, aufgeschrieben zu werden:

* Wie ein Beitrag geprüft und akzeptiert wird (_Benötigen sie Tests? Ein Issue-Template?_)
* Die Arten von Beiträgen, die Sie akzeptieren werden (_Wollen Sie nur Hilfe bei einem bestimmten Teil Ihres Codes?_)
* Wenn es angebracht ist, den Vorgang zu verfolgen (z.B. "Sie können innerhalb von 7 Tagen eine Antwort von einer Betreuerin oder einem Betreuer erwarten. Wenn Sie bis dahin noch nichts gehört haben, können Sie gerne den Thread pingen."_)
* Wie viel Zeit Sie für das Projekt aufwenden (z.B. "Wir verbringen nur ca. 5 Stunden pro Woche für dieses Projekt"_)

[Jekyll](https://github.com/jekyll/jekyll/tree/master/docs), [CocoaPods](https://github.com/CocoaPods/CocoaPods/wiki/Communication-&-Design-Rules) und [Homebrew](https://github.com/Homebrew/brew/blob/bbed7246bc5c5b7acb8c1d427d10b43e090dfd39/docs/Maintainers-Avoiding-Burnout.md) geben ihren Betreuer\*innen und Mitwirkenden nützliche Grundregeln mit.

### Kommunikation öffentlich halten

Vergessen Sie nicht, auch Ihre Interaktionen zu dokumentieren. Wo immer Sie können, halten Sie die Kommunikation über Ihr Projekt öffentlich. Wenn jemand versucht, Sie privat zu kontaktieren, um eine Feature- oder Support-Anfrage zu besprechen, verweisen Sie sich höflich an einen öffentlichen Kommunikationskanal, wie z.B. eine Mailingliste oder einen Issue Tracker.

Wenn Sie sich mit anderen Betreuer\*innen treffen oder eine wichtige Entscheidung privat treffen, dokumentieren Sie diese Gespräche in der Öffentlichkeit, selbst wenn es nur um die Veröffentlichung Ihrer Notizen geht.

Auf diese Weise hat jede*r, der Ihrer Community beitritt, Zugang zu den gleichen Informationen wie jemand, der schon seit Jahren dort ist.

## Lernen, nein zu sagen

Sie haben Dinge aufgeschrieben, und im Idealfall würden auch alle Ihre Dokumentation lesen. Allerdings werden Sie in Wirklichkeit andere daran erinnern müssen, dass dieses Wissen existiert.

Alles aufgeschrieben zu haben, hilft jedoch, Situationen zu entpersönlichen, in denen Sie Ihre Regeln durchsetzen müssen.

Nein zu sagen macht keinen Spaß, aber _"Ihr Beitrag entspricht nicht den Kriterien dieses Projekts"_ fühlt sich weniger persönlich an als _"Ich mag Ihren Beitrag nicht"_.

Nein zu sagen gilt für viele Situationen, in denen Sie als Maintainer\*in auftreten werden: unnötige Arbeit für andere erledigen, Feature-Anfragen, die nicht in den Anwendungsbereich passen, jemand, der eine Diskussion entgleist, usw.

### Das Gespräch freundlich halten

Einer der wichtigsten Orte, an denen Sie üben werden, Nein zu sagen, ist Ihr Issue Tracker und die Pull-Request-Liste. Als Projektbetreuer\*in werden Sie unweigerlich Vorschläge erhalten, die Sie nicht akzeptieren wollen.

Vielleicht verändert ein dort eingereichter Beitrag den Umfang Ihres Projekts oder passt nicht zu Ihrer Vision. Vielleicht ist die Idee gut, aber schlecht umgesetzt.

Unabhängig vom Ablehnungsgrund ist es möglich, Beiträge, die nicht den Standards Ihres Projekts entsprechen, taktvoll zu behandeln.

Wenn Sie einen Beitrag erhalten, den Sie nicht annehmen möchten, könnte Ihre erste Reaktion darin bestehen, ihn zu ignorieren oder so zu tun, als ob Sie ihn nicht gesehen hätten. Dies könnte die Gefühle der anderen Person verletzen und sogar andere potenzielle Mitwirkende in Ihrer Gemeinschaft demotivieren.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/krausefx?s=180" class="pquote-avatar" alt="avatar">

  Der Schlüssel zur Unterstützung großer Open-Source-Projekte liegt darin, die Issues in Bewegung zu halten. Versuchen Sie, Probleme zu vermeiden. Wenn Sie ein iOS-Entwickler sind, wissen Sie, wie frustrierend es sein kann, Radars einzureichen. Möglicherweise hören Sie 2 Jahre später zurück und werden aufgefordert, es erneut mit der neuesten Version von iOS zu versuchen.

  _The key to handle support for large-scale open source projects is to keep issues moving. Try to avoid having issues stall. If you're an iOS developer you know how frustrating it can be to submit radars. You might hear back 2 years later, and are told to try again with the latest version of iOS._

  <p markdown="1" class="pquote-credit">
— @KrauseFx, ["Scaling open source communities"](https://krausefx.com/blog/scaling-open-source-communities)
  </p>
</aside>

Lassen Sie keinen unerwünschten Beitrag offen, weil Sie sich schuldig fühlen oder nett sein wollen. Im Laufe der Zeit werden unbeantwortete Issues und PRs die Projektarbeit stressiger und einschüchternder machen.

Schließen Sie Beiträge lieber sofort, von denen Sie wissen, dass Sie sie nicht annehmen wollen. Wenn Ihr Projekt bereits unter einem großen Rückstand leidet, hat @steveklabnik Vorschläge für [eine effiziente Behandlung von Issues](http://words.steveklabnik.com/how-to-be-an-open-source-gardener).

Zweitens sendet das Ignorieren von Beiträgen ein negatives Signal an die Gemeinschaft um Ihr Projekt. Einen Projektbeitrag einzureichen, kann einschüchternd sein, besonders für Neulinge. Auch wenn Sie ihren Beitrag nicht annehmen, danken Sie der einreichenden Person, für ihr Interesse. Das ist ein großes Kompliment!

Wenn Sie einen Betrag nicht annehmen wollen:

* **Bedanken** Sie sich für den Beitrag.
* **Erklären Sie, warum es nicht in den Rahmen des Projekts passt** und geben Sie klare Verbesserungsvorschläge, wenn Sie dazu in der Lage sind. Seien Sie dabei freundlich, aber bestimmt.
* **Verlinken Sie auf die entsprechende Dokumentation**, wenn Sie diese haben. Wenn Sie wiederholt ähnliche Beiträge bekommen, die Sie nicht akzeptieren wollen, weisen Sie darauf in Ihrer Dokumentation hin, um weitere Wiederholungen zu vermeiden.
* **Schließen Sie die Anfrage**

Sie sollten nicht mehr als 1-2 Sätze benötigen, um zu antworten. Als beispielsweise ein Benutzer von [celery](https://github.com/celery/celery/) einen Windows-bezogenen Fehler meldete, [antwortet](https://github.com/celery/celery/issues/3383) @berkerpeksag mit:

![Celery screenshot](/assets/images/best-practices/celery.png)

Wenn Ihnen der Gedanke, "Nein" zu sagen, Angst macht, sind Sie nicht allein. Wie @jessfraz [es formulierte](https://blog.jessfraz.com/post/the-art-of-closing/):

> Ich habe mit Maintainern aus verschiedenen Open-Source-Projekten gesprochen, Mesos, Kubernetes, Chromium, und sie alle sind sich einig, dass einer der schwierigsten Aspekte des Maintainers darin besteht, "Nein" zu Patches zu sagen, die man nicht will.

> I've talked to maintainers from several different open source projects, Mesos, Kubernetes, Chromium, and they all agree one of the hardest parts of being a maintainer is saying "No" to patches you don't want.

Fühlen Sie sich nicht schuldig, weil Sie den Beitrag von jemandem nicht annehmen wollen. Die erste Regel in Open-Source-Projekten, [nach](https://twitter.com/solomonstre/status/715277134978113536) @shykes lautet: "Nein ist vorübergehend, ja ist für immer." Obwohl es gut ist, sich in die Begeisterung einer anderen Person hineinzufühlen, ist die Ablehnung eines Beitrags nicht dasselbe wie die Ablehnung der Person dahinter.

Wenn ein Beitrag nicht gut genug ist, sind Sie nicht verpflichtet, ihn anzunehmen. Seien Sie freundlich und reaktionsschnell, wenn Menschen zu Ihrem Projekt beitragen, aber akzeptieren Sie nur Änderungen, von denen Sie wirklich glauben, dass sie Ihr Projekt verbessern werden. Je öfter Sie Nein sagen, desto einfacher wird es. Versprochen.

### Seien Sie proaktiv

Um das Volumen der unerwünschten Beiträge zu reduzieren, erklären Sie den Prozess der Einreichung und Annahme von Beiträgen in einem Kontributionsrichtlinie.

Wenn Sie zu viele minderwertige Beiträge erhalten, verlangen Sie zum Beispiel, dass die Beitragszahler vorher ein wenig Arbeit leisten:

* ein Issue oder PR Template oder eine Checkliste ausfüllen
* ein Issue erstellen lassen, bevor ein PR eingereicht wird

Wer nicht Ihren Regeln folgt, dessen Issue können Sie sofort schließen und dabei auf Ihre Dokumentation verweisen.

Auch wenn sich dieser Ansatz zunächst unfreundlich anfühlt, ist es für beide Seiten gut, proaktiv zu sein. Es verringert die Chance, dass jemand viele vergeudete Stunden Arbeit in ein Pull Request steckt, die Sie nicht akzeptieren werden. Und es macht Ihre Arbeit einfacher zu verwalten.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/mikemcquaid?s=180" class="pquote-avatar" alt="avatar">

  Im Idealfall erklären Sie ihnen und in einer CONTRIBUTING.md-Datei, wie sie in Zukunft einen besseren Hinweis darauf erhalten können, was sie vor Beginn der Arbeit akzeptieren würden oder nicht.

  _Ideally, explain to them and in a CONTRIBUTING.md file how they can get a better indication in the future on what would or would not be accepted before they begin the work._

  <p markdown="1" class="pquote-credit">
— @MikeMcQuaid, ["Kindly Closing Pull Requests"](https://github.com/blog/2124-kindly-closing-pull-requests)
  </p>
</aside>

Manchmal, wenn Sie nein sagen, kann Ihr potenzieller Mitwirkender verärgert sein oder Ihre Entscheidung kritisieren. Wenn deren Verhalten feindselig wird, unternehmen Sie Schritte, um die Situation zu entschärfen](https://github.com/jonschlinkert/maintainers-guide-to-staying-positive#action-items) oder entfernen Sie sie sogar aus Ihrer Gemeinschaft, wenn keine Bereitschaft zur konstruktiven Zusammenzuarbeiten erkennbar ist.

### Mentorschaft etablieren

Vielleicht reicht jemand in Ihrer Community regelmäßig Beiträge ein, die nicht den Standards Ihres Projekts entsprechen. Es kann für beide Seiten frustrierend sein, immer wieder Ablehnungen zu erfahren.

Wenn Sie sehen, dass jemand von Ihrem Projekt begeistert ist, aber ein wenig aufpoliert werden muss, haben Sie Geduld. Erklären Sie in jeder Situation deutlich, warum die Beiträge nicht den Erwartungen des Projekts entsprechen. Versuchen Sie, sie auf eine einfachere oder weniger zweideutige Aufgabe hinzuweisen. Bspw. ein Problem, das mit _"good first issue"_ gekennzeichnet ist. Wenn Sie Zeit haben, erwägen Sie, die Person durch ihren ersten Beitrag zu betreuen, oder finden Sie jemand anders in Ihrer Community der/die bereit sein könnte, sie zu betreuen.

## Leverage your community

You don't have to do everything yourself. Your project's community exists for a reason! Even if you don't yet have an active contributor community, if you have a lot of users, put them to work.

### Share the workload

If you're looking for others to pitch in, start by asking around.

When you see new contributors making repeated contributions, recognize their work by offering more responsibility. Document how others can grow into leadership roles if they wish.

Encouraging others to [share ownership of the project](../building-community/#teilen-sie-die-eigentümerschaft-an-ihrem-projekt) can greatly reduce your own workload, as @lmccart discovered on her project, [p5.js](https://github.com/processing/p5.js?files=1).

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/lmccart?s=180" class="pquote-avatar" alt="avatar">
  I’d been saying, "Yeah, anyone can be involved, you don’t have to have a lot of coding expertise [...]." We had people sign up to come [to an event] and that’s when I was really wondering: is this true, what I’ve been saying? There are gonna be 40 people who show up, and it’s not like I can sit with each of them...But people came together, and it just sort of worked. As soon as one person got it, they could teach their neighbor.
  <p markdown="1" class="pquote-credit">
—  @lmccart, ["What Does "Open Source" Even Mean? p5.js Edition"](https://medium.com/@kenjagan/what-does-open-source-even-mean-p5-js-edition-98c02d354b39#.chnjlag7p)
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
  <img src="https://avatars.githubusercontent.com/geerlingguy?s=180" class="pquote-avatar" alt="avatar">
  I cater to the 80% use case. If you are one of the unicorns, please fork my work. I won't get offended! My public projects are almost always meant to solve the most common problems; I try to make it easy to go deeper by either forking my work or extending it.
  <p markdown="1" class="pquote-credit">
— @geerlingguy, ["Why I Close PRs"](https://www.jeffgeerling.com/blog/2016/why-i-close-prs-oss-project-maintainer-notes)
  </p>
</aside>

The same applies to a user who really wants a solution that you simply don't have the bandwidth to build. Offering APIs and customization hooks can help others meet their own needs, without having to modify the source directly. @orta [found that](https://artsy.github.io/blog/2016/07/03/handling-big-projects/) encouraging plugins for CocoaPods led to "some of the most interesting ideas":

> It's almost inevitable that once a project becomes big, maintainers have to become a lot more conservative about how they introduce new code. You become good at saying "no", but a lot of people have legitimate needs. So, instead you end up converting your tool into a platform.

## Bring in the robots

Just as there are tasks that other people can help you with, there are also tasks that no human should ever have to do. Robots are your friend. Use them to make your life as a maintainer easier.

### Require tests and other checks to improve the quality of your code

One of the most important ways you can automate your project is by adding tests.

Tests help contributors feel confident that they won't break anything. They also make it easier for you to review and accept contributions quickly. The more responsive you are, the more engaged your community can be.

Set up automatic tests that will run on all incoming contributions, and ensure that your tests can easily be run locally by contributors. Require that all code contributions pass your tests before they can be submitted. You'll help set a minimum standard of quality for all submissions. [Required status checks](https://help.github.com/articles/about-required-status-checks/) on GitHub can help ensure no change gets merged without your tests passing.

If you add tests, make sure to explain how they work in your CONTRIBUTING file.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/edunham?s=180" class="pquote-avatar" alt="avatar">
  I believe that tests are necessary for all code that people work on. If the code was fully and perfectly correct, it wouldn't need changes – we only write code when something is wrong, whether that's "It crashes" or "It lacks such-and-such a feature". And regardless of the changes you're making, tests are essential for catching any regressions you might accidentally introduce.
  <p markdown="1" class="pquote-credit">
— @edunham, ["Rust's Community Automation"](https://edunham.net/2016/09/27/rust_s_community_automation.html)
  </p>
</aside>

### Use tools to automate basic maintenance tasks

The good news about maintaining a popular project is that other maintainers have probably faced similar issues and built a solution for it.

There are a [variety of tools available](https://github.com/showcases/tools-for-open-source) to help automate some aspects of maintenance work. A few examples:

* [semantic-release](https://github.com/semantic-release/semantic-release) automates your releases
* [mention-bot](https://github.com/facebook/mention-bot) mentions potential reviewers for pull requests
* [Danger](https://github.com/danger/danger) helps automate code review

For bug reports and other common contributions, GitHub has [Issue Templates and Pull Request Templates](https://github.com/blog/2111-issue-and-pull-request-templates), which you can create to streamline the communication you receive. @TalAter made a [Choose Your Own Adventure guide](https://www.talater.com/open-source-templates/#/) to help you write your issue and PR templates.

To manage your email notifications, you can set up [email filters](https://github.com/blog/2203-email-updates-about-your-own-activity) to organize by priority.

If you want to get a little more advanced, style guides and linters can standardize project contributions and make them easier to review and accept.

However, if your standards are too complicated, they can increase the barriers to contribution. Make sure you're only adding enough rules to make everyone's lives easier.

If you're not sure which tools to use, look at what other popular projects do, especially those in your ecosystem. For example, what does the contribution process look like for other Node modules? Using similar tools and approaches will also make your process more familiar to your target contributors.

## It's okay to hit pause

Open source work once brought you joy. Maybe now it's starting to make you feel avoidant or guilty.

Perhaps you're feeling overwhelmed or a growing sense of dread when you think about your projects. And meanwhile, the issues and pull requests pile up.

Burnout is a real and pervasive issue in open source work, especially among maintainers. As a maintainer, your happiness is a non-negotiable requirement for the survival of any open source project.

Although it should go without saying, take a break! You shouldn't have to wait until you feel burned out to take a vacation. @brettcannon, a Python core developer, decided to take [a month-long vacation](https://snarky.ca/why-i-took-october-off-from-oss-volunteering/) after 14 years of volunteer OSS work.

Just like any other type of work, taking regular breaks will keep you refreshed, happy, and excited about your work.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/danielbachhuber?s=180" class="pquote-avatar" alt="avatar">
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
