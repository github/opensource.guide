---
lang: de
title: Führung und Lenkung
description: Heranwachsende Open-Source-Projekte können von formellen Entscheidungsfindungsregeln profitieren.
class: leadership
toc:
  welche-beispiele-für-formale-rollen-gibt-es-in-open-source-projekten: "Welche Beispiele für formale Rollen gibt es in Open-Source-Projekten?"
  how-do-i-formalize-these-leadership-roles: "How do I formalize these leadership roles?"
  when-should-i-give-someone-commit-access: "When should I give someone commit access?"
  what-are-some-of-the-common-governance-structures-for-open-source-projects: "What are some of the common governance structures for open source projects?"
  do-i-need-governance-docs-when-i-launch-my-project: "Do I need governance docs when I launch my project?"
  what-happens-if-corporate-employees-start-submitting-contributions: "What happens if corporate employees start submitting contributions?"
  do-i-need-a-legal-entity-to-support-my-project: "Do I need a legal entity to support my project?"
order: 6
image: /assets/images/cards/leadership.png
related:
  - best-practices
  - metrics
---

## Die Lenkungen eines wachsenden Projektes verstehen

Ihr Projekt wächst, Leute sind engagiert und Sie setzen sich dafür ein, dass diese Sache am Laufen bleibt. In diesem Stadium fragen Sie sich vielleicht, wie Sie regelmäßige Projektmitarbeiter\*innen in Ihren Arbeitsprozess einbinden können? Sei es durch die Gewährung von Commit-Rechten oder durch die Führung von Debatten in der Gemeinschaft. Wir liefern Antworten, auf Ihre Fragen.

## Welche Beispiele für formale Rollen gibt es in Open-Source-Projekten?

Viele Projekte folgen einer ähnlichen Struktur hinsichtlich Mitwirkung und Anerkennung.

Was diese Rollen aber tatsächlich bedeuten, liegt ganz bei Ihnen. Nachfolgend sind einige Arten von Rollen aufgeführt, die Sie vielleicht erkennen werden:

* * **Maintainer\*in**
* * **Mitwirkende\*r ***
* * **Committer\*in**

**Bei einigen Projekten sind "Maintainer\*innen "** die einzigen Personen in einem Projekt mit Commit-Rechten. In anderen Projekten sind es einfach die Leute, die in der README als Maintainer\*innen aufgelistet sind.

Ein\*e Maintainer\*in muss nicht zwangsläufig für Ihr Projekt Code schreiben. Es kann auch eine Person sein, die oder der viel Öffentlichkeitsarbeit für Ihr Projekt geleistet hat, oder viel  Dokumentation geschrieben hat, die das Projekt für andere zugänglicher gemacht hat. Unabhängig davon, was sie tagtäglich tun, fühlen sich Maintainer\*innen wahrscheinlich für die Richtung des Projekts verantwortlich und setzen sich für die Verbesserung des Projekts ein.

"Mitwirkende" könnten alle sein, die ein Problem oder einen Pull-Request kommentiert, Menschen, die dem Projekt einen Mehrwert verleihen (sei es durch Problembehebungen, das Schreiben von Code oder die Veranstaltungsorganisation) oder alle, deren Pull-Requests  akzeptiert wurden (vielleicht die engste Definition für Mitwirkende).

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/mikeal?s=180" class="pquote-avatar" alt="avatar">
  
  \[Für Node.js,\] ist jede Person, die auftaucht, um einen Kommentar zu einem Problem abzugeben oder Code einzureichen, Mitglied der Projekt-Community. Sie einfach nur sehen zu können, bedeutet, dass sie die Benutzer-Kontributor-Grenze überschritten haben.
  
  _\[For Node.js,\] every person who shows up to comment on an issue or submit code is a member of a project’s community. Just being able to see them means that they have crossed the line from being a user to being a contributor._
  
  <p markdown="1" class="pquote-credit">
— @mikeal, ["Healthy Open Source"](https://medium.com/the-javascript-collection/healthy-open-source-967fa8be7951)
  </p>
</aside>

**Der Begriff "Committer\*in"** könnte verwendet werden, um die höhere Verantwortung des Commit-Recht zu unterscheiden von anderen Formen der Mitarbeit.

Sie können Ihre Projektrollen zwar nach Belieben definieren, aber Sie sollten die Verwendung von [breiteren Definitionen in Betracht ziehen](../how-to-contribute/#was-einen-beitrag-leisten-bedeutet), um mehr Beitragsformen zu fördern. Mit Hilfe von Führungsrollen können Sie Personen, die unabhängig von ihren fachlichen Fähigkeiten herausragende Leistungen für Ihr Projekt erbracht haben, formell auszeichnen.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/jacobian?s=180" class="pquote-avatar" alt="avatar">
  
  Sie kennen mich vielleicht als den "Erfinder" von Django... Aber ich bin in Wirklichkeit der Typ, der angeheuert wurde, um an einer seit einem Jahr fertigen Sache zu arbeiten. (....) Die Leute vermuten, dass ich wegen meiner Programmierfähigkeiten erfolgreich bin... Aber ich bin bestenfalls ein durchschnittlicher Programmierer.
  
  _You might know me as the "inventor" of Django...but really I'm the guy who got hired to work on a thing a year after it was already made. (...) People suspect that I'm successful because of my programming skill...but I'm at best an average programmer._
  
  <p markdown="1" class="pquote-credit">
— @jacobian, ["PyCon 2015 Keynote" (video)](https://www.youtube.com/watch?v=hIJdFxYlEKE#t=5m0s)
  </p>
</aside>

## How do I formalize these leadership roles?

Formalizing your leadership roles helps people feel ownership and tells other community members who to look to for help.

For a smaller project, designating leaders can be as simple as adding their names to your README or a CONTRIBUTORS text file.

For a bigger project, if you have a website, create a team page or list your project leaders there. For example, [Postgres](https://github.com/postgres/postgres/) has a [comprehensive team page](https://www.postgresql.org/community/contributors/) with short profiles for each contributor.

If your project has a very active contributor community, you might form a "core team" of maintainers, or even subcommittees of people who take ownership of different issue areas (for example, security, issue triaging, or community conduct). Let people self-organize and volunteer for the roles they're most excited about, rather than assigning them.

<aside markdown="1" class="pquote">
  \[We\] supplement the core team with several "subteams". Each subteam is focused on a specific area, e.g., language design or libraries. (...) To ensure global coordination and a strong, coherent vision for the project as a whole, each subteam is led by a member of the core team.
  <p markdown="1" class="pquote-credit">
— ["Rust Governance RFC"](https://github.com/rust-lang/rfcs/blob/master/text/1068-rust-governance.md)
  </p>
</aside>

Leadership teams may want to create a designated channel (like on IRC) or meet regularly to discuss the project (like on Gitter or Google Hangout). You can even make those meetings public so other people can listen. [Cucumber-ruby](https://github.com/cucumber/cucumber-ruby), for example, [hosts office hours every week](https://github.com/cucumber/cucumber-ruby/blob/master/CONTRIBUTING.md#talking-with-other-devs).

Once you've established leadership roles, don't forget to document how people can attain them! Establish a clear process for how someone can become a maintainer or join a subcommittee in your project, and write it into your GOVERNANCE.md.

Tools like [Vossibility](https://github.com/icecrime/vossibility-stack) can help you publicly track who is (or isn't) making contributions to the project. Documenting this information avoids the community perception that maintainers are a clique that makes its decisions privately.

Finally, if your project is on GitHub, consider moving your project from your personal account to an Organization and adding at least one backup admin. [GitHub Organizations](https://help.github.com/articles/creating-a-new-organization-account/) make it easier to manage permissions and multiple repositories and protect your project's legacy through [shared ownership](../building-community/#teilen-sie-die-eigentümerschaft-an-ihrem-projekt).

## When should I give someone commit access?

Some people think you should give commit access to everybody who makes a contribution. Doing so could encourage more people to feel ownership of your project.

On the other hand, especially for bigger, more complex projects, you may want to only give commit access to people who have demonstrated their commitment. There's no one right way of doing it - do what makes you most comfortable!

If your project is on GitHub, you can use [protected branches](https://help.github.com/articles/about-protected-branches/) to manage who can push to a particular branch, and under which circumstances.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/felixge?s=180" class="pquote-avatar" alt="avatar">
  Whenever somebody sends you a pull request, give them commit access to your project. While it may sound incredibly stupid at first, using this strategy will allow you to unleash the true power of GitHub. (...) Once people have commit access, they are no longer worried that their patch might go unmerged...causing them to put much more work into it.
  <p markdown="1" class="pquote-credit">
— @felixge, ["The Pull Request Hack"](https://felixge.de/2013/03/11/the-pull-request-hack.html)
  </p>
</aside>

## What are some of the common governance structures for open source projects?

There are three common governance structures associated with open source projects.

* **BDFL:** BDFL stands for "Benevolent Dictator for Life". Under this structure, one person (usually the initial author of the project) has final say on all major project decisions. [Python](https://github.com/python) is a classic example. Smaller projects are probably BDFL by default, because there are only one or two maintainers. A project that originated at a company might also fall into the BDFL category.

* **Meritocracy:** **(Note: the term "meritocracy" carries negative connotations for some communities and has a [complex social and political history](http://geekfeminism.wikia.com/wiki/Meritocracy).)** Under a meritocracy, active project contributors (those who demonstrate "merit") are given a formal decision making role. Decisions are usually made based on pure voting consensus. The meritocracy concept was pioneered by the [Apache Foundation](http://www.apache.org/); [all Apache projects](http://www.apache.org/index.html#projects-list) are meritocracies. Contributions can only be made by individuals representing themselves, not by a company.

* **Liberal contribution:** Under a liberal contribution model, the people who do the most work are recognized as most influential, but this is based on current work and not historic contributions. Major project decisions are made based on a consensus seeking process (discuss major grievances) rather than pure vote, and strive to include as many community perspectives as possible. Popular examples of projects that use a liberal contribution model include [Node.js](https://nodejs.org/en/foundation/) and [Rust](https://www.rust-lang.org/en-US/).

Which one should you use? It's up to you! Every model has advantages and trade-offs. And although they may seem quite different at first, all three models have more in common than they seem. If you're interested in adopting one of these models, check out these templates:

* [BDFL model template](http://oss-watch.ac.uk/resources/benevolentdictatorgovernancemodel)
* [Meritocracy model template](http://oss-watch.ac.uk/resources/meritocraticgovernancemodel)
* [Node.js's liberal contribution policy](https://medium.com/the-javascript-collection/healthy-open-source-967fa8be7951#.m9ht26e79)

## Do I need governance docs when I launch my project?

There is no right time to write down your project's governance, but it's much easier to define once you've seen your community dynamics play out. The best (and hardest) part about open source governance is that it is shaped by the community!

Some early documentation will inevitably contribute to your project's governance, however, so start writing down what you can. For example, you can define clear expectations for behavior, or how your contributor process works, even at your project's launch.

If you're part of a company launching an open source project, it's worth having an internal discussion before launch about how your company expects to maintain and make decisions about the project moving forward. You may also want to publicly explain anything particular to how your company will (or won't!) be involved with the project.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/caabernathy?s=180" class="pquote-avatar" alt="avatar">
  We assign small teams to manage projects on GitHub who are actually working on these at Facebook. For example, React is run by a React engineer.
  <p markdown="1" class="pquote-credit">
— @caabernathy, ["An inside look at open source at Facebook"](https://opensource.com/life/15/10/ato-interview-christine-abernathy-facebook)
  </p>
</aside>

## What happens if corporate employees start submitting contributions?

Successful open source projects get used by many people and companies, and some companies may eventually have revenue streams eventually tied to the project. For example, a company may use the project's code as one component in a commercial service offering.

As the project gets more widely used, people who have expertise in it become more in-demand - you may be one of them! - and will sometimes get paid for work they do in the project.

It's important to treat commercial activity as normal and as just another source of development energy. Paid developers shouldn't get special treatment over unpaid ones, of course; each contribution must be evaluated on its technical merits. However, people should feel comfortable engaging in commercial activity, and feel comfortable stating their use cases when arguing in favor of a particular enhancement or feature.

"Commercial" is completely compatible with "open source". "Commercial" just means there is money involved somewhere - that the software is used in commerce, which is increasingly likely as a project gains adoption. (When open source software is used as part of a non-open-source product, the overall product is still "proprietary" software, though, like open source, it might be used for commercial or non-commercial purposes.)

Like anyone else, commercially-motivated developers gain influence in the project through the quality and quantity of their contributions. Obviously, a developer who is paid for her time may be able to do more than someone who is not paid, but that's okay: payment is just one of many possible factors that could affect how much someone does. Keep your project discussions focused on the contributions, not on the external factors that enable people to make those contributions.

## Do I need a legal entity to support my project?

You don't need a legal entity to support your open source project unless you're handling money.

For example, if you want to create a commercial business, you'll want to set up a C Corp or LLC (if you're based in the US). If you're just doing contract work related to your open source project, you can accept money as a sole proprietor, or set up an LLC (if you're based in the US).

If you want to accept donations for your open source project, you can set up a donation button (using PayPal or Stripe, for example), but the money won't be tax-deductible unless you are a qualifying nonprofit (a 501c3, if you're in the US).

Many projects don't wish to go through the trouble of setting up a nonprofit, so they find a nonprofit fiscal sponsor instead. A fiscal sponsor accepts donations on your behalf, usually in exchange for a percentage of the donation. [Software Freedom Conservancy](https://sfconservancy.org/), [Apache Foundation](https://www.apache.org/), [Eclipse Foundation](https://eclipse.org/org/foundation/), [Linux Foundation](https://www.linuxfoundation.org/projects) and [Open Collective](https://opencollective.com/opensource) are examples of organizations that serve as fiscal sponsors for open source projects.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/piamancini?s=180" class="pquote-avatar" alt="avatar">
  Our goal is to provide an infrastructure that communities can use to be self sustainable, thus creating an environment where everyone — contributors, backers, sponsors — get concrete benefits out of it.
  <p markdown="1" class="pquote-credit">
— @piamancini, ["Moving beyond the charity framework"](https://medium.com/open-collective/moving-beyond-the-charity-framework-b1191c33141#.vgsbj9um9)
  </p>
</aside>

If your project is closely associated with a certain language or ecosystem, there may also be a related software foundation you can work with. For example, the [Python Software Foundation](https://www.python.org/psf/) helps support [PyPI](https://pypi.org/), the Python package manager, and the [Node.js Foundation](https://nodejs.org/en/foundation/) helps support [Express.js](https://expressjs.com/), a Node-based framework.
