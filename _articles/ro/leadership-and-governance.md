---
lang: ro
title: Conducere și guvernare
description: Proiectele în creștere cu sursă deschisă pot beneficia de reguli formale pentru luarea deciziilor.
class: leadership
toc:
  understanding-governance-for-your-growing-project: "Înțelegerea guvernării pentru proiectul tău în creștere"
  what-are-examples-of-formal-roles-used-in-open-source-projects: "Care sunt exemplele de roluri formale utilizate în proiecte cu sursă deschisă?"
  how-do-i-formalize-these-leadership-roles: "Cum formalizez aceste roluri de conducere?"
  when-should-i-give-someone-commit-access: "Când ar trebui să dau cuiva acces de commit?"
  what-are-some-of-the-common-governance-structures-for-open-source-projects: "Care sunt unele dintre structurile comune de guvernanță pentru proiectele cu sursă deschisă?"
  do-i-need-governance-docs-when-i-launch-my-project: "Am nevoie de documente de guvernare atunci când lansez proiectul meu?"
  what-happens-if-corporate-employees-start-submitting-contributions: "Ce se întâmplă dacă angajați din companii încep să trimită contribuții?"
  do-i-need-a-legal-entity-to-support-my-project: "Am nevoie de o entitate juridică pentru a-mi susține proiectul?"
order: 6
image: /assets/images/cards/leadership.png
related:
  - best-practices
  - metrics
---

## Înțelegerea guvernării pentru proiectul tău în creștere

Proiectul tău este în creștere, oamenii sunt angajați, și ești angajat să ții acest lucru tot așa. În această etapă, s-ar putea să te întrebi cum să încorporezi contributori obișnuiți ai proiectului în fluxul tău de lucru, fie că este vorba de a da cuiva permisiunea de a face commit-uri sau rezolvarea dezbaterilor comunității. Dacă tu ai întrebări, noi avem răspunsuri.

## Care sunt exemplele de roluri formale utilizate în proiecte cu sursă deschisă?

Multe proiecte urmează o structură similară pentru rolurile și recunoașterea contributorilor.

Ce aceste roluri înseamnă de fapt, totuși, depinde doar de tine. Iată câteva tipuri de roluri pe care le-ai putea recunoaște:

* **Întreținător**
* **Contributor**
* **Committer**

**Pentru unele proiecte, „întreținătorii”** sunt singurele persoane din proiect cu acces de commit. În alte proiecte, ei sunt pur și simplu oamenii care sunt listați în README ca întreținători.

Un întreținător nu trebuie să fie neapărat cineva care scrie cod pentru proiectul tău. Poate fi cineva care a făcut multă muncă promovându-ți proiectul, sau a scris documentație care a făcut proiectul mai accesibil altora. Indiferent de ce face zi de zi, un întreținător este probabil cineva care simte responsabilitate asupra direcției proiectului și este angajat la îmbunătățirea lui.

**Un „contributor” ar putea fi oricine** care comentează la o problemă sau la o cerere de pull, oameni care adaugă valoare proiectului (fie că este trierea de probleme, scrierea de cod, sau organizarea de evenimente), sau oricine cu o cerere de pull îmbinată (poate cea mai restrânsă definiție a unui contributor).

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/mikeal?s=180" class="pquote-avatar" alt="avatar">
  <p>
    [Pentru Node.js,] oricare persoană care se arată să comenteze la o problemă sau să trimită cod este o membră a comunității unui proiect. Doar faptul că ea poate fi văzută înseamnă că ea a trecut linia de la a fi un utilizator la a fi un contributor.
  </p>
  <p>
    <em>
      [For Node.js,] every person who shows up to comment on an issue or submit code is a member of a project’s community. Just being able to see them means that they have crossed the line from being a user to being a contributor.
    </em>
  </p>
  <p markdown="1" class="pquote-credit">
— @mikeal, ["Healthy Open Source"](https://medium.com/the-javascript-collection/healthy-open-source-967fa8be7951)
  </p>
</aside>

**Termenul „committer”** poate fi folosit pentru a distinge accesul la commit, care este un tip specific de responsabilitate, de alte forme de contribuție.

În timp ce poți defini rolurile proiectului tău în orice fel îți place, [consideră folosirea de definiții mai largi](../how-to-contribute/#what-it-means-to-contribute) pentru a încuraja mai multe forme de contribuție. Poți folosi roluri de conducere pentru a recunoaște în mod oficial pe oamenii care au făcut contribuții remarcabile la proiectul tău, indiferent de abilitățile lor tehnice.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/jacobian?s=180" class="pquote-avatar" alt="avatar">
  <p>
    Poate mă știi ca „inventatorul” lui Django... dar de fapt sunt tipul care a fost angajat să lucreze pe un lucru la un an după ce a fost deja făcut. (...) Oamenii suspectează că sunt de succes datorită abilităților mele de programare... dar sunt în cel mai bun caz un programator mediu.
  </p>
  <p>
    <em>
      You might know me as the "inventor" of Django...but really I'm the guy who got hired to work on a thing a year after it was already made. (...) People suspect that I'm successful because of my programming skill...but I'm at best an average programmer.
    </em>
  </p>
  <p markdown="1" class="pquote-credit">
— @jacobian, ["PyCon 2015 Keynote" (video)](https://www.youtube.com/watch?v=hIJdFxYlEKE#t=5m0s)
  </p>
</aside>

## Cum formalizez aceste roluri de conducere?

Formalizarea rolurilor de conducere ajută oamenii să se simtă proprietari și spune celorlalți membri de comunitate pe cine să caute pentru ajutor.

Pentru un proiect mai mic, desemnarea liderilor poate fi atât de simplă ca adăugarea numelor lor la fișierul tău text README sau CONTRIBUTORS.

Pentru un proiect mai mare, dacă ai un site web, creează o pagină a echipei sau listează liderii proiectului tău acolo. De exemplu, [Postgres](https://github.com/postgres/postgres/) are o [pagină cuprinzătoare a echipei](https://www.postgresql.org/community/contributors/) cu profiluri scurte pentru fiecare contributor.

Dacă proiectul tău are comunitate de contributori foarte activă, ai putea să formezi o „echipă de bază” a întreținătorilor, sau chiar subcomitete ale oamenilor care preiau conducerea unor domenii de probleme diferite (de exemplu, securitate, trierea problemelor, sau conduita comunității). Lasă oamenii să se autoorganizeze și să aplice pentru voluntariat în rolurile de care sunt cei mai încântați, în loc să li le atribui.

<aside markdown="1" class="pquote">
  <p>
    [Noi] suplinim echipa de bază cu câteva „subechipe”. Fiecare subechipă este concentrată pe un domeniu specific, de exemplu, proiectarea limbajului sau a bibliotecilor. (...) Pentru a asigura coordonare globală și o puternică, coerentă viziune pentru proiect ca întreg, fiecare subechipă este condusă de un membru din echipa de bază.
  </p>
  <p>
    <em>
      [We] supplement the core team with several "subteams". Each subteam is focused on a specific area, e.g., language design or libraries. (...) To ensure global coordination and a strong, coherent vision for the project as a whole, each subteam is led by a member of the core team.
    </em>
  </p>
  <p markdown="1" class="pquote-credit">
— ["Rust Governance RFC"](https://github.com/rust-lang/rfcs/blob/master/text/1068-rust-governance.md)
  </p>
</aside>

Leadership teams may want to create a designated channel (like on IRC) or meet regularly to discuss the project (like on Gitter or Google Hangout). You can even make those meetings public so other people can listen. [Cucumber-ruby](https://github.com/cucumber/cucumber-ruby), for example, [hosts office hours every week](https://github.com/cucumber/cucumber-ruby/blob/master/CONTRIBUTING.md#talking-with-other-devs).

Once you've established leadership roles, don't forget to document how people can attain them! Establish a clear process for how someone can become a maintainer or join a subcommittee in your project, and write it into your GOVERNANCE.md.

Tools like [Vossibility](https://github.com/icecrime/vossibility-stack) can help you publicly track who is (or isn't) making contributions to the project. Documenting this information avoids the community perception that maintainers are a clique that makes its decisions privately.

Finally, if your project is on GitHub, consider moving your project from your personal account to an Organization and adding at least one backup admin. [GitHub Organizations](https://help.github.com/articles/creating-a-new-organization-account/) make it easier to manage permissions and multiple repositories and protect your project's legacy through [shared ownership](../building-community/#share-ownership-of-your-project).

## Când ar trebui să dau cuiva acces de commit?

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

## Care sunt unele dintre structurile comune de guvernanță pentru proiectele cu sursă deschisă?

There are three common governance structures associated with open source projects.

* **BDFL:** BDFL stands for "Benevolent Dictator for Life". Under this structure, one person (usually the initial author of the project) has final say on all major project decisions. [Python](https://github.com/python) is a classic example. Smaller projects are probably BDFL by default, because there are only one or two maintainers. A project that originated at a company might also fall into the BDFL category.

* **Meritocracy:** **(Note: the term "meritocracy" carries negative connotations for some communities and has a [complex social and political history](http://geekfeminism.wikia.com/wiki/Meritocracy).)** Under a meritocracy, active project contributors (those who demonstrate "merit") are given a formal decision making role. Decisions are usually made based on pure voting consensus. The meritocracy concept was pioneered by the [Apache Foundation](https://www.apache.org/); [all Apache projects](https://www.apache.org/index.html#projects-list) are meritocracies. Contributions can only be made by individuals representing themselves, not by a company.

* **Liberal contribution:** Under a liberal contribution model, the people who do the most work are recognized as most influential, but this is based on current work and not historic contributions. Major project decisions are made based on a consensus seeking process (discuss major grievances) rather than pure vote, and strive to include as many community perspectives as possible. Popular examples of projects that use a liberal contribution model include [Node.js](https://foundation.nodejs.org/) and [Rust](https://www.rust-lang.org/).

Which one should you use? It's up to you! Every model has advantages and trade-offs. And although they may seem quite different at first, all three models have more in common than they seem. If you're interested in adopting one of these models, check out these templates:

* [BDFL model template](http://oss-watch.ac.uk/resources/benevolentdictatorgovernancemodel)
* [Meritocracy model template](http://oss-watch.ac.uk/resources/meritocraticgovernancemodel)
* [Node.js's liberal contribution policy](https://medium.com/the-node-js-collection/healthy-open-source-967fa8be7951)

## Am nevoie de documente de guvernare atunci când lansez proiectul meu?

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

## Ce se întâmplă dacă angajați din companii încep să trimită contribuții?

Successful open source projects get used by many people and companies, and some companies may eventually have revenue streams eventually tied to the project. For example, a company may use the project's code as one component in a commercial service offering.

As the project gets more widely used, people who have expertise in it become more in-demand - you may be one of them! - and will sometimes get paid for work they do in the project.

It's important to treat commercial activity as normal and as just another source of development energy. Paid developers shouldn't get special treatment over unpaid ones, of course; each contribution must be evaluated on its technical merits. However, people should feel comfortable engaging in commercial activity, and feel comfortable stating their use cases when arguing in favor of a particular enhancement or feature.

"Commercial" is completely compatible with "open source". "Commercial" just means there is money involved somewhere - that the software is used in commerce, which is increasingly likely as a project gains adoption. (When open source software is used as part of a non-open-source product, the overall product is still "proprietary" software, though, like open source, it might be used for commercial or non-commercial purposes.)

Like anyone else, commercially-motivated developers gain influence in the project through the quality and quantity of their contributions. Obviously, a developer who is paid for her time may be able to do more than someone who is not paid, but that's okay: payment is just one of many possible factors that could affect how much someone does. Keep your project discussions focused on the contributions, not on the external factors that enable people to make those contributions.

## Am nevoie de o entitate juridică pentru a-mi susține proiectul?

You don't need a legal entity to support your open source project unless you're handling money.

For example, if you want to create a commercial business, you'll want to set up a C Corp or LLC (if you're based in the US). If you're just doing contract work related to your open source project, you can accept money as a sole proprietor, or set up an LLC (if you're based in the US).

If you want to accept donations for your open source project, you can set up a donation button (using PayPal or Stripe, for example), but the money won't be tax-deductible unless you are a qualifying nonprofit (a 501c3, if you're in the US).

Many projects don't wish to go through the trouble of setting up a nonprofit, so they find a nonprofit fiscal sponsor instead. A fiscal sponsor accepts donations on your behalf, usually in exchange for a percentage of the donation. [Software Freedom Conservancy](https://sfconservancy.org/), [Apache Foundation](https://www.apache.org/), [Eclipse Foundation](https://eclipse.org/org/foundation/), [Linux Foundation](https://www.linuxfoundation.org/projects) and [Open Collective](https://opencollective.com/opensource) are examples of organizations that serve as fiscal sponsors for open source projects.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/piamancini?s=180" class="pquote-avatar" alt="avatar">
  Our goal is to provide an infrastructure that communities can use to be self sustainable, thus creating an environment where everyone — contributors, backers, sponsors — get concrete benefits out of it.
  <p markdown="1" class="pquote-credit">
— @piamancini, ["Moving beyond the charity framework"](https://medium.com/open-collective/moving-beyond-the-charity-framework-b1191c33141)
  </p>
</aside>

If your project is closely associated with a certain language or ecosystem, there may also be a related software foundation you can work with. For example, the [Python Software Foundation](https://www.python.org/psf/) helps support [PyPI](https://pypi.org/), the Python package manager, and the [Node.js Foundation](https://foundation.nodejs.org/) helps support [Express.js](https://expressjs.com/), a Node-based framework.
