---
locale: fr-FR
title: Démarrer un projet Open Source
description: Apprenez plus sur le monde de l'open source et préparez-vous à lancer votre propre projet.
class: beginners
toc:
  le-quoi-et-le-pourquoi-de-lopen-source: "Le quoi et le pourquoi de l'open source"
  dois-je-lancer-mon-propre-projet-open-source: "Dois-je lancer mon propre projet open source?"
  lancer-votre-propre-projet-open-source: "Lancer votre propre projet open source"
  nommer-et-branding-de-votre-projet: "Nommer et Branding de votre projet"
  votre-check-list-de-pré-lancement: "Votre check-list de pré-lancement"
order: 2
image: /assets/images/cards/beginner.png
related:
  - finding
  - building
---

## Le "quoi" et le "pourquoi" de l'open source

Donc, vous songez à commencer avec l'open source? Toutes nos félicitations! Le monde apprécie votre contribution. Parlons de ce qu'est l'open source et pourquoi les gens le font.

### Que signifie "open source"?

Quand un projet est open source, cela signifie que **tout le monde peut le voir, l'utiliser, le modifier et distribuez votre projet pour n'importe quel but.** Ces autorisations sont appliquées via [une licence open source](https://opensource.org/licenses).

L'open source est puissant parce qu'il baisse les barrières à l'adoption, permettant aux idées de se propager rapidement.

Pour comprendre comment cela fonctionne, Imaginez que votre ami a un repas-partage et vous apportez une tarte aux cerises.

* Tout le monde essaie la tarte (_utiliser_)
* La tarte est un succès! Ils vous demandent la recette, que vous transmettez (_regarder_)
* Un ami, Alex, qui est un chef pâtissier, suggère de réduire le sucre (_modifier_)
* Un autre amie, Lisa, demande de l'utiliser pour un dîner la semaine prochaine (_distribuer_)

Par comparaison, un processus de source fermer (close source) irait à un restaurant et pour commander une tranche de tarte aux cerises. Vous devez payer des frais pour manger la tarte et le restaurant ne vous donnera pas probablement leur recette. Si vous avez copié leur tarte exactement et l'avez vendu sous votre propre nom, le restaurant pourrait prendre des mesures contre vous.

### Pourquoi les gens ouvrent-ils leur travail?

<aside markdown="1" class="pquote">
  <img src="https://avatars1.githubusercontent.com/u/1500684?v=3&s=460" class="pquote-avatar" alt="avatar">
  Une des expériences les plus enrichissantes que je retire de l'utilisation et de la collaboration sur l'open source vient des relations que j'ai construit avec d'autres développeurs comme moi confrontés aux même et nombreux problèmes.
  <p markdown="1" class="pquote-credit">
— @kentcdodds, ["How getting into Open Source has been awesome for me"](https://medium.com/@kentcdodds/how-getting-into-open-source-has-been-awesome-for-me-8480cd756a80#.pjt9oqp4w)
  </p>
</aside>

[Il existe de nombreuses raisons](http://ben.balter.com/2015/11/23/why-open-source/) pourquoi une personne ou une organisation voudrait ouvrir un projet. Certains exemples incluent:

* **Collaboration:** Les projets open source peuvent accepter des changements de n'importe qui dans le monde. [Exercism](https://github.com/exercism/), par exemple, est une plateforme d'exercices de programmation avec plus de 350 contributeurs.

* **Adoption et personnalisation:** Les projets open source peuvent être utilisés par n'importe qui pour presque n'importe quel but. Les gens peuvent même l'utiliser pour construire d'autres choses. [WordPress](https://github.com/WordPress), par exemple, commencé un [fork](https://fr.wikipedia.org/wiki/Fork_%28d%C3%A9veloppement_logiciel%29) d'un projet a existant et l'appelé [b2](https://github.com/WordPress/book/blob/master/Content/Part%201/2-b2-cafelog.md).

* **transparence:** N'importe qui peut inspecter un projet open source pour des erreurs ou des incohérences. La transparence est importante pour les gouvernements comme la [Bulgarie](https://medium.com/@bozhobg/bulgaria-got-a-law-requiring-open-source-98bf626cf70a) ou les [États Unis](https://sourcecode.cio.gov/), réglementation des industries comme la banque ou la santé et des logiciels de sécurité comme [Let's Encrypt](https://github.com/letsencrypt).

L'open source n'est pas seulement pour les logiciels. Vous pouvez tout ouvrir, des ensembles de données aux livres. Consultez [GitHub Explore](https://github.com/explore) pour des idées sur quoi d'autre vous pouvez ouvrir le code.

### Est-ce que l'open source signifie "gratuit"?

L'un des plus grands avantages de l'open source est qu'il ne coûte pas de l'argent. "gratuit", toutefois, c'est une sous-évaluation de la valeur globale de l'open source.

Parce qu'[une licence open source exige](https://opensource.org/osd-annotated) que n'importe qui puisse utiliser, modifier et partager votre projet pour presque n'importe quel but, les projets eux-mêmes ont tendance à être gratuits. Si le projet coût de l'argent pour l'utiliser, n'importe qui pourrait légalement faire une copie et utiliser la version gratuite à la place.

Par conséquent, la plupart des projets open source sont gratuits, mais "gratuit" ne fait pas partie de la définition de l'open source. Il existe des moyens de facturer les projets open source indirectement grâce à une double licence ou limitées les fonctionnalités, tout en respectant la définition officielle de l'open source.

## Dois-je lancer mon propre projet open source?

La réponse courte est oui, parce qu'importe le résultat, lancer votre propre projet est un excellent moyen d'apprendre comment fonctionne l'open source.

Si vous n'avez jamais ouvert un projet auparavant, vous pourriez être inquiets au sujet de ce que les gens diront, ou de toute remarque de n'importe qui. Si cela vous ressemble, vous n'êtes pas seul!

Le travail open source est comme toute autre activité créative, que ce soit l'écriture ou la peinture. Cela peut être effrayant de partager votre travail avec le monde, mais la seule façon de s'améliorer est de pratiquer - même si vous n'avez pas d'audience.

Si vous n'êtes pas encore convaincu, prenez un moment pour penser à vos objectifs.

### Définir vos objectifs

Les objectifs peuvent vous aider à déterminer ce sur quoi vous devez travailler, ce que vous devez dire non et où vous avez besoin de l'aide des autres. Commencer par vous demander,  _pourquoi je rends ce projet open source?_

Il n'y a pas une bonne réponse à cette question. Vous pouvez avoir plusieurs objectifs pour un même projet ou différents projets avec des objectifs différents.

Si votre seul but est de mettre en valeur votre travail, vous ne voulez peut-être même pas de contributions et encore dites-le dans votre fichier README. D'un autre côté, si vous voulez vraiment des contributeurs, vous allez investir du temps dans une documentation claire et faire en sorte que les nouveaux arrivants se sentent les bienvenus.

<aside markdown="1" class="pquote">
  <img src="https://avatars2.githubusercontent.com/u/3520168?v=3&s=460" class="pquote-avatar" alt="avatar">
  À un moment donné, j'ai créé un UIAlertView a personnalisé que j'utilisais... Et j'ai décidé de le rendre open source. Alors, je l'ai modifié pour être plus dynamique et l'ai téléchargé sur GitHub. J'ai également écrit ma première documentation expliquant aux autres développeurs comment l'utiliser sur leurs projets. Probablement personne ne l'a jamais utilisé parce que c'était un projet simple mais, je me sentais bien au sujet de ma contribution.
  <p markdown="1" class="pquote-credit">
— @mavris, ["Self-taught Software Developers: Why Open Source is important to us"](https://medium.com/rocknnull/self-taught-software-engineers-why-open-source-is-important-to-us-fe2a3473a576#.zhwo5krlq)
  </p>
</aside>

Au fur et à mesure que votre projet grandit, votre communauté peut avoir besoin de plus que du code de votre part. Répondre aux problèmes, passer en revue le code et évangéliser sur votre projet, sont des tâches toutes aussi importantes dans un projet open source.

Bien que le temps que vous consacrez à des tâches de non-codage dépende de la taille et de la portée de votre projet, vous devez être préparé en tant que mainteneur (responsable) pour les résoudre vous-même ou trouver quelqu'un pour vous aider.

**Si vous faites partie d'une entreprise qui ouvre un projet,** assurez-vous que votre projet à des ressources internes dont il a besoin pour prospérer. Vous voudrez identifier qui est responsable de maintenir le projet après le lancement et comment vous partagerez ces tâches avec votre communauté.

Si vous avez besoin d'un budget ou d'un personnel dédié pour la promotion, les opérations et la maintenance du projet, commencez ces conversations plus tôt.

<aside markdown="1" class="pquote">
  <img src="https://avatars2.githubusercontent.com/u/1857993?v=3&s=460" class="pquote-avatar" alt="avatar">
  Lorsque vous commencez à ouvrir le projet, il est important de s'assurer que vos processus de gestion prennent en considération les contributions et les compétences de la communauté autour de votre projet. N'ayez pas peur d'impliquer des collaborateurs qui ne sont pas employés dans votre entreprise, dans les aspects clés du projet — surtout s'ils sont des contributeurs fréquents.
  <p markdown="1" class="pquote-credit">
— @captainsafia, ["So you wanna open source a project, eh?"](https://writing.safia.rocks/2016/12/06/so-you-wanna-open-source-a-project-eh/)
  </p>
</aside>

### Contribuer à d'autres projets

Si votre objectif est d'apprendre à collaborer avec les autres ou à comprendre comment fonctionne l'open source, envisagez de contribuer à un projet existant. Commencez avec un projet que vous utilisez déjà et aimez. Contribuer à un projet peut être aussi simple que la correction de coquilles, des fautes de frappe ou  la mise à jour de la documentation.

Si vous n'êtes pas sûrs de savoir comment commencer en tant que contributeur, consultez [Comment contribuer au guide Open Source](../how-to-contribute/).

## Lancer votre propre projet open source

There is no perfect time to open source your work. You can open source an idea, a work in progress, or after years of being closed source.

Generally speaking, you should open source your project when you feel comfortable having others view, and give feedback on, your work.

No matter which stage you decide to open source your project, every project should include the following documentation:

* [Open source license](https://help.github.com/articles/open-source-licensing/#where-does-the-license-live-on-my-repository)
* [README](https://help.github.com/articles/create-a-repo/#commit-your-first-change)
* [Contributing guidelines](https://help.github.com/articles/setting-guidelines-for-repository-contributors/)
* [Code of conduct](../code-of-conduct/)

As a maintainer, these components will help you communicate expectations, manage contributions, and protect everyone's legal rights (including your own). They significantly increase your chances of having a positive experience.

If your project is on GitHub, putting these files in your root directory with the recommended filenames will help GitHub recognize and automatically surface them to your readers.

### Choosing a license

An open source license guarantees that others can use, copy, modify, and contribute back to your project without repercussions. It also protects you from sticky legal situations. **You must include a license when you launch an open source project.**

Legal work is no fun. The good news is that you can copy and paste an existing license into your repository. It will only take a minute to protect your hard work.

[MIT](https://choosealicense.com/licenses/mit/), [Apache 2.0](https://choosealicense.com/licenses/apache-2.0/), and [GPLv3](https://choosealicense.com/licenses/gpl-3.0/) are the most popular open source licenses, but [there are other options](https://choosealicense.com) to choose from.

When you create a new project on GitHub, you are given the option to select a license. Including an open source license will make your GitHub project open source.

![Pick a license](/assets/images/starting-a-project/repository-license-picker.png)

If you have other questions or concerns around the legal aspects of managing an open source project, [we've got you covered](../legal/).

### Writing a README

READMEs do more than explain how to use your project. They also explain why your project matters, and what your users can do with it.

In your README, try to answer the following questions:

* What does this project do?
* Why is this project useful?
* How do I get started?
* Where can I get more help, if I need it?

You can use your README to answer other questions, like how you handle contributions, what the goals of the project are, and information about licenses and attribution. If you don't want to accept contributions, or your project is not yet ready for production, write this information down.

<aside markdown="1" class="pquote">
  <img src="https://avatars0.githubusercontent.com/u/168572?v=3&s=460" class="pquote-avatar" alt="avatar">
  Better documentation means more users, less support requests, and more contributors. (...) Remember that your readers aren't you. There are people who might come to a project who have completely different experiences.
  <p markdown="1" class="pquote-credit">
— @limedaring, ["Writing So Your Words Are Read (video)"](https://www.youtube.com/watch?v=8LiV759Bje0&list=PLmV2D6sIiX3U03qc-FPXgLFGFkccCEtfv&index=10)
  </p>
</aside>

Sometimes, people avoid writing a README because they feel like the project is unfinished, or they don't want contributions. These are all very good reasons to write one.

For more inspiration, try using @18F's ["Making READMEs Readable"](https://pages.18f.gov/open-source-guide/making-readmes-readable/) or @PurpleBooth's [README template](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2) to write a complete README.

When you include a README file in the root directory, GitHub will automatically display it on the repository homepage.

### Writing your contributing guidelines

A CONTRIBUTING file tells your audience how to participate in your project. For example, you might include information on:

* How to file a bug report (try using [issue and pull request templates](https://github.com/blog/2111-issue-and-pull-request-templates))
* How to suggest a new feature
* How to set up your environment and run tests

In addition to technical details, a CONTRIBUTING file is an opportunity to communicate your expectations for contributions, such as:

* The types of contributions you're looking for
* Your roadmap or vision for the project
* How contributors should (or should not) get in touch with you

Using a warm, friendly tone and offering specific suggestions for contributions (such as writing documentation, or making a website) can go a long way in making newcomers feel welcomed and excited to participate.

For example, [Active Admin](https://github.com/activeadmin/activeadmin/) starts [its contributing guide](https://github.com/activeadmin/activeadmin/blob/master/CONTRIBUTING.md) with:

> First off, thank you for considering contributing to Active Admin. It's people like you that make Active Admin such a great tool.

In the earliest stages of your project, your CONTRIBUTING file can be simple. You should always explain how to report bugs or file issues, and any technical requirements (like tests) to make a contribution.

Over time, you might add other frequently asked questions to your CONTRIBUTING file. Writing down this information means fewer people will ask you the same questions over and over again.

For more help with writing your CONTRIBUTING file, check out @nayafia's [contributing guide template](https://github.com/nayafia/contributing-template/blob/master/CONTRIBUTING-template.md) or @mozilla's ["How to Build a CONTRIBUTING.md"](http://mozillascience.github.io/working-open-workshop/contributing/).

Link to your CONTRIBUTING file from your README, so more people see it. If you [place the CONTRIBUTING file in your project's repository](https://help.github.com/articles/setting-guidelines-for-repository-contributors/), GitHub will automatically link to your file when a contributor creates an issue or opens a pull request.

![Contributing guidelines](/assets/images/starting-a-project/Contributing-guidelines.jpg)

### Establishing a code of conduct

<aside markdown="1" class="pquote">
  <img src="https://avatars3.githubusercontent.com/u/11214?v=3&s=460" class="pquote-avatar" alt="avatar">
  We’ve all had experiences where we faced what was probably abuse either as a maintainer trying to explain why something had to be a certain way, or as a user...asking a simple question. (...) A code of conduct becomes an easily referenced and linkable document that indicates that your team takes constructive discourse very seriously.
  <p markdown="1" class="pquote-credit">
— @mlynch, ["Making Open Source a Happier Place"](https://medium.com/ionic-and-the-mobile-web/making-open-source-a-happier-place-3b90d254f5f#.v4qhl7t7v)
  </p>
</aside>

Finally, a code of conduct helps set ground rules for behavior for your project's participants. This is especially valuable if you're launching an open source project for a community or company. A code of conduct empowers you to facilitate healthy, constructive community behavior, which will reduce your stress as a maintainer.

For more information, check out our [Code of Conduct guide](../code-of-conduct/).

In addition to communicating _how_ you expect participants to behave, a code of conduct also tends to describe who these expectations apply to, when they apply, and what to do if a violation occurs.

Much like open source licenses, there are also emerging standards for codes of conduct, so you don't have to write your own. The [Contributor Covenant](http://contributor-covenant.org/) is a drop-in code of conduct that is used by [over 40,000 open source projects](http://contributor-covenant.org/adopters/), including Kubernetes, Rails, and Swift. No matter which text you use, you should be prepared to enforce your code of conduct when necessary.

Paste the text directly into a CODE_OF_CONDUCT file in your repository. Keep the file in your project's root directory so it's easy to find, and link to it from your README.

## Nommer et Branding de votre projet

Branding is more than a flashy logo or catchy project name. It's about how you talk about your project, and who you reach with your message.

### Choosing the right name

Pick a name that is easy to remember and, ideally, gives some idea of what the project does. For example:

* [Sentry](https://github.com/getsentry/sentry) monitors apps for crash reporting
* [Thin](https://github.com/macournoyer/thin) is a fast and simple Ruby web server

If you're building upon an existing project, using their name as a prefix can help clarify what your project does (for example, [node-fetch](https://github.com/bitinn/node-fetch) brings `window.fetch` to Node.js).

Consider clarity above all. Puns are fun, but remember that some jokes might not translate to other cultures or people with different experiences from you. Some of your potential users might be company employees: you don't want to make them uncomfortable when they have to explain your project at work!

### Avoiding name conflicts

[Check for open source projects with a similar name](http://ivantomic.com/projects/ospnc/), especially if you share the same language or ecosystem. If your name overlaps with a popular existing project, you might confuse your audience.

If you want a website, Twitter handle, or other properties to represent your project, make sure you can get the names you want. Ideally, [reserve those names now](https://instantdomainsearch.com/) for peace of mind, even if you don't intend to use them just yet.

Make sure that your project's name doesn't infringe upon any trademarks. A company might ask you to take down your project later on, or even take legal action against you. It's just not worth the risk.

You can check the [WIPO Global Brand Database](http://www.wipo.int/branddb/en/) for trademark conflicts. If you're at a company, this is one of the things your [legal team can help you with](../legal/).

Finally, do a quick Google search for your project name. Will people be able to easily find your project? Does something else appear in the search results that you wouldn't want them to see?

### How you write (and code) affects your brand, too!

Throughout the life of your project, you'll do a lot of writing: READMEs, tutorials, community documents, responding to issues, maybe even newsletters and mailing lists.

Whether it's official documentation or a casual email, your writing style is part of your project's brand. Consider how you might come across to your audience and whether that is the tone you wish to convey.

<aside markdown="1" class="pquote">
  <img src="https://avatars0.githubusercontent.com/u/11321?v=3&s=460" class="pquote-avatar" alt="avatar">
  I tried to be involved with every thread on the mailing list, and showing exemplary behaviour, being nice to people, taking their issues seriously and trying to be helpful overall. After a while, people stuck around not to only ask questions, but to help with the answering as well, and to my complete delight, they mimicked my style.
  <p markdown="1" class="pquote-credit">
— @janl on [CouchDB](https://github.com/apache/couchdb), ["Sustainable Open Source"](http://writing.jan.io/2015/11/20/sustainable-open-source.html)
  </p>
</aside>

Using warm, inclusive language (such as "them", even when referring to the single person) can go a long way in making your project feel welcoming to new contributors. Stick to simple language, as many of your readers may not be native English speakers.

Beyond how you write words, your coding style may also become part of your project's brand. [Angular](https://github.com/johnpapa/angular-styleguide) and [jQuery](http://contribute.jquery.org/style-guide/js/) are two examples of projects with rigorous coding styles and guidelines.

It isn't necessary to write a style guide for your project when you're just starting out, and you may find that you enjoy incorporating different coding styles into your project anyway. But you should anticipate how your writing and coding style might attract or discourage different types of people. The earliest stages of your project are your opportunity to set the precedent you wish to see.

## Votre check-list de pré-lancement

Ready to open source your project? Here's a checklist to help. Check all the boxes? You're ready to go! [Click "publish"](https://help.github.com/articles/making-a-private-repository-public/) and pat yourself on the back.

**Documentation**

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox1" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox1" class="overflow-hidden d-block text-normal">
    Project has a LICENSE file with an open source license
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox2" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox2" class="overflow-hidden d-block text-normal">
    Project has basic documentation (README, CONTRIBUTING, CODE_OF_CONDUCT)
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox3" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox3" class="overflow-hidden d-block text-normal">
    The name is easy to remember, gives some idea of what the project does, and does not conflict with an existing project or infringe on trademarks
  </label>
</div>

<div class="clearfix mb-4">
  <input type="checkbox" id="cbox4" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox4" class="overflow-hidden d-block text-normal">
    The issue queue is up-to-date, with issues clearly organized and labeled
  </label>
</div>

**Code**

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox5" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox5" class="overflow-hidden d-block text-normal">
    Project uses consistent code conventions and clear function/method/variable names
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox6" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox6" class="overflow-hidden d-block text-normal">
    The code is clearly commented, documenting intentions and edge cases
  </label>
</div>

<div class="clearfix mb-4">
  <input type="checkbox" id="cbox7" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox7" class="overflow-hidden d-block text-normal">
    There are no sensitive materials in the revision history, issues, or pull requests (for example, passwords or other non-public information)
  </label>
</div>

**People**

If you're an individual:

<div class="clearfix mb-4">
  <input type="checkbox" id="cbox8" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox8" class="overflow-hidden d-block text-normal">
  You've talked to the legal department and/or understand the IP and open source policies of your company (if you're an employee somewhere)
  </label>
</div>

If you're a company or organization:

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox9" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox9" class="overflow-hidden d-block text-normal">
    You've talked to your legal department
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox10" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox10" class="overflow-hidden d-block text-normal">
    You have a marketing plan for announcing and promoting the project
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox11" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox11" class="overflow-hidden d-block text-normal">
    Someone is committed to managing community interactions (responding to issues, reviewing and merging pull requests)
  </label>
</div>

<div class="clearfix mb-4">
  <input type="checkbox" id="cbox12" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox12" class="overflow-hidden d-block text-normal">
    At least two people have administrative access to the project
  </label>
</div>

## You did it!

Congratulations on open sourcing your first project. No matter the outcome, working in public is a gift to the community. With every commit, comment, and pull request, you're creating opportunities for yourself and for others to learn and grow.
