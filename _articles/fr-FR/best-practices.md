---
locale: fr-FR 
title: Meilleures pratiques pour les mainteneurs
description: Simplifiez-vous la vie en tant que mainteneur open source, de la documentation des processus à l'exploitation de votre communauté.
class: best-practices
toc:
  Que-signifie-être-un-mainteneur: "Que signifie être un mainteneur?"
  Documenter-vos-processus: "Documenter vos processus"
  Apprendre-à-dire-non: "Apprendre à dire non"
  Tirer-parti-de-votre-communauté: "Tirer parti de votre communauté"
  Apportez-les-robots: "Apportez les robots"
  C'est bon de prende une pause: "C'est bon de prende une pause"
order: 5
image: /assets/images/cards/best-practices.png
related:
  - metrics
  - leadership

---

## Que signifie être un mainteneur?

Si vous gérez un projet Open Source que beaucoup de personnes utilisent, vous avez peut-être remarqué que vous codez moins et que vous répondez à d'autres problèmes.

Au début d'un projet, vous expérimentez de nouvelles idées et prenez des décisions en fonction de ce que vous voulez. Au fur et à mesure que votre projet gagne en popularité, vous travaillerez de plus en plus avec vos utilisateurs et vos contributeurs.

Maintenir un projet nécessite plus que du code. Ces tâches sont souvent inattendues, mais elles sont tout aussi importantes pour un projet en croissance. Nous avons rassemblé quelques moyens pour vous faciliter la vie, de la documentation des processus à l'exploitation de votre communauté.

## Documenter vos processus

Écrire des documentations est l'une des choses les plus importantes que vous pouvez faire en tant que mainteneur.

La documentation clarifie non seulement votre propre pensée, mais elle aide les autres à comprendre ce dont vous avez besoin ou ce que vous attendez, avant même de le demander.

la Rédaction des documentations rend plus facile de dire non, quand quelque chose ne rentre pas dans votre champ d'application. Cela facilite également la tâche des gens. Vous ne savez jamais qui pourrait lire ou utiliser votre projet.

Même si vous n'utilisez pas de paragraphes entiers, mieux vaut ne pas écrire du tout.

N'oubliez pas de garder votre documentation à jour. Si vous n'êtes pas en mesure de toujours le faire, supprimez votre documentation obsolète ou indiquez qu'elle est obsolète afin que les contributeurs sachent que les mises à jour sont les bienvenues.

### Ecrivez la vision de votre projet

Commencez par écrire les objectifs de votre projet. Ajoutez-les à votre fichier README ou créez un fichier distinct appelé VISION. S'il y a d'autres artefacts qui pourraient aider, comme une feuille de route de projet, faites-les aussi publics.

Avoir une vision claire et documentée vous permet de rester concentré et vous aide à éviter le «fluage portée» des contributions des autres.

Par exemple, @lord a découvert que le fait d'avoir une vision de projet l'aidait à déterminer les demandes pour lesquelles il devait passer du temps. En tant que nouveau responsable, il a regretté ne pas s'en tenir à la portée de son projet quand il a eu sa première demande de [Slate](https://github.com/lord/slate).

<aside markdown="1" class="pquote">
  <img src="https://avatars2.githubusercontent.com/u/1976330?v=3&s=460" class="pquote-avatar" alt="avatar" alt="@lord avatar">
 Je l'ai foiré. Je n'ai pas fait l'effort de trouver une solution complète. Au lieu d'une solution à demi-assortie, j'aurais aimé dire "Je n'ai pas le temps pour ça maintenant, mais je vais l'ajouter à la liste à long terme."
  <p markdown="1" class="pquote-credit">
— @lord, ["Tips for new open source maintainers"](https://lord.io/blog/2014/oss-tips/)
  </p>
</aside>

### Communiquez vos attentes

Les règles peuvent être angoissantes à écrire. Parfois, vous pourriez avoir l'impression de surveiller le comportement des autres ou de tuer tout le plaisir.

Écrit et appliqué équitablement, cependant, de bonnes règles habilitent les mainteneurs. Ils vous empêchent d'être entraînés à faire des choses que vous ne voulez pas faire.

La plupart des personnes qui rencontrent votre projet ne savent rien de vous ou de votre situation. Ils peuvent supposer que vous êtes payé pour travailler dessus, surtout si c'est quelque chose qu'ils utilisent régulièrement et dont ils dépendent. Peut-être qu'à un moment donné, vous avez consacré beaucoup de temps à votre projet, mais maintenant vous êtes occupé avec un nouvel emploi ou un membre de votre famille.

Tout cela est parfaitement correct! Assurez-vous simplement que les autres personnes le savent.

Si le maintien de votre projet est à temps partiel ou purement volontaire, soyez honnête quant au temps dont vous disposez. Ce n'est pas la même chose que le temps que vous estimez nécessaire au projet ou combien de temps les autres vous demandent.

Voici quelques règles qui méritent d'être notées:

* Comment une contribution est examinée et acceptée (_Ont-ils besoin de tests? Un modèle de problème?_)
* Les types de contributions que vous accepterez (_Voulez-vous seulement de l'aide pour une certaine partie de votre code?_)
* Quand est-il approprié de faire un suivi (_par exemple, "Vous pouvez vous attendre à une réponse d'un responsable dans les 7 jours, si vous n'avez encore rien entendu, n'hésitez pas à envoyer une requête ping au fil."_)
* Combien de temps consacrez-vous au projet (_par exemple, "Nous ne consacrons que 5 heures par semaine à ce projet" _)

[Jekyll](https://github.com/jekyll/jekyll/tree/master/docs), [CocoaPods](https://github.com/CocoaPods/CocoaPods/wiki/Communication-&-Design-Rules), et [Homebrew](https://github.com/Homebrew/brew/blob/bbed7246bc5c5b7acb8c1d427d10b43e090dfd39/docs/Maintainers-Avoiding-Burnout.md) sont plusieurs exemples de projets avec des règles de base pour les mainteneurs et les contributeurs.

### Gardez la communication publique

N'oubliez pas de documenter vos interactions, aussi. Partout où vous pouvez, gardez la communication sur votre projet public. Si quelqu'un tente de vous contacter en privé pour discuter d'une demande de fonctionnalité ou d'un besoin de support, dirigez-les poliment vers un canal de communication public, tel qu'une liste de diffusion ou un outil de suivi des problèmes.

Si vous rencontrez d'autres responsables, ou prenez une décision importante en privé, documentez ces conversations en public, même si cela ne concerne que la publication de vos notes.

De cette façon, toute personne qui se joint à votre communauté aura accès à la même information que quelqu'un qui est là depuis des années.

## Apprendre à dire non

Vous avez écrit des choses. Idéalement, tout le monde lirait votre documentation, mais en réalité, vous devrez rappeler aux autres que cette connaissance existe.

Cependant, tout noter contribue à dépersonnaliser les situations lorsque vous devez appliquer vos règles.

Dire non n'est pas amusant, mais  _"Votre contribution ne correspond pas aux critères de ce projet" se sent moins personnelle que  "Je n'aime pas votre contribution"_.

Dire non s'applique à de nombreuses situations que vous rencontrerez en tant que responsable: des demandes de fonctionnalités qui ne correspondent pas à la portée, quelqu'un qui déraille une discussion, qui fait un travail inutile pour les autres.

### Gardez la conversation amicale

L'un des endroits les plus importants que vous entraînez en disant non est sur votre problème et tire la file d'attente des demandes. En tant que responsable du projet, vous recevrez inévitablement des suggestions que vous ne souhaitez pas accepter.

Peut-être que la contribution modifie la portée de votre projet ou ne correspond pas à votre vision. Peut-être que l'idée est bonne, mais la mise en œuvre est mauvaise.

Peu importe la raison, il est possible de gérer avec tact les contributions qui ne répondent pas aux normes de votre projet.

Si vous recevez une contribution que vous ne voulez pas accepter, votre première réaction pourrait être de l'ignorer ou de prétendre que vous ne l'avez pas vue. Cela pourrait nuire aux sentiments de l'autre et même démotiver d'autres contributeurs potentiels dans votre communauté.

<aside markdown="1" class="pquote">
  <img src="https://avatars3.githubusercontent.com/u/869950?v=3&s=400" class="pquote-avatar" alt="avatar" alt="@KrauseFx avatar">
 La clé pour gérer le support des projets Open Source à grande échelle est de continuer à faire bouger les problèmes. Essayez d'éviter les problèmes. Si vous êtes un développeur iOS, vous savez à quel point il peut être frustrant de soumettre des radars. Vous pourriez entendre revenir 2 ans plus tard, et on vous dit d'essayer à nouveau avec la dernière version d'iOS.
  <p markdown="1" class="pquote-credit">
— @KrauseFx, ["Mise à l'échelle des communautés open source"](https://krausefx.com/blog/scaling-open-source-communities)
  </p>
</aside>

Ne laissez pas une contribution indésirable ouverte parce que vous vous sentez coupable ou que vous voulez être gentil. Au fil du temps, vos problèmes sans réponse et les relations publiques rendront le travail sur votre projet beaucoup plus stressant et intimidant.

Il est préférable de fermer immédiatement les contributions que vous ne voulez pas accepter. Si votre projet souffre déjà d'un important retard, @steveklabnik a des suggestions pour [comment trier efficacement les problèmes](http://words.steveklabnik.com/how-to-be-an-open-source-gardener).

Deuxièmement, ignorer les contributions envoie un signal négatif à votre communauté. Contribuer à un projet peut être intimidant, surtout s'il s'agit de la première fois. Même si vous n'acceptez pas leur contribution, remerciez la personne derrière et remerciez-les de leur intérêt. C'est un gros compliment!

Si vous ne voulez pas accepter une contribution:

* **remercier les** pour leur contribution
* **Expliquez pourquoi cela ne rentre pas** dans la portée du projet, et offrir des suggestions claires pour l'amélioration, si vous êtes capable. Soyez gentil, mais ferme.
* **Lien vers la documentation pertinente**, si tu l'as. Si vous remarquez des demandes répétées pour des choses que vous ne voulez pas accepter, ajoutez-les dans votre documentation pour éviter de vous répéter.
* **Fermez la demande**
Vous ne devriez pas avoir besoin de plus de 1-2 phrases pour répondre. Par exemple, lorsqu'un utilisateur de [céleri](https://github.com/celery/celery/) a signalé une erreur liée à Windows, @berkerpeksag [répondu avec](https://github.com/celery/celery/issues/3383):

![Celery screenshot](/assets/images/best-practices/celery.png)

Si la pensée de dire non vous terrifie, vous n'êtes pas seul. Comme @jessfraz [put it](https://blog.jessfraz.com/post/the-art-of-closing/):

> J'ai parlé à des responsables de plusieurs projets open source différents, Mesos, Kubernetes, Chromium, et ils sont tous d'accord que l'un des aspects les plus difficiles d'un mainteneur est de dire "Non" aux correctifs que vous ne voulez pas.

Ne vous sentez pas coupable de ne pas vouloir accepter la contribution de quelqu'un. La première règle de l'open source, [d'apres](https://twitter.com/solomonstre/status/715277134978113536) @shykes: _"Non est temporaire, oui est pour toujours."_ Tandis que l'empathie avec l'enthousiasme d'une autre personne est une bonne chose, rejeter une contribution n'est pas la même chose que rejeter la personne derrière elle.

En fin de compte, si une contribution n'est pas suffisante, vous n'êtes pas obligé de l'accepter. Soyez gentil et réactif lorsque les gens contribuent à votre projet, mais n'acceptez que les changements qui, selon vous, amélioreront votre projet. Le plus souvent vous pratiquez en disant non, plus cela devient facile. Promettre.

### Etre pro-actif

Pour réduire le volume des contributions non désirées, expliquez le processus de soumission et d'acceptation des contributions de votre projet dans votre guide.

Si vous recevez trop de contributions de faible qualité, demandez aux contributeurs de faire un peu de travail à l'avance, par exemple:

* Remplir un problème ou un modèle de PR / liste de contrôle
* Ouvrir un problème avant de soumettre un RP

S'ils ne respectent pas vos règles, fermez immédiatement le problème et pointez vers votre documentation.

Bien que cette approche puisse sembler méchante au début, être proactif est réellement bon pour les deux parties. Cela réduit le risque que quelqu'un consacre beaucoup d'heures de travail perdues à une demande de retrait que vous n'allez pas accepter. Et cela rend votre charge de travail plus facile à gérer.

<aside markdown="1" class="pquote">
  <img src="https://avatars0.githubusercontent.com/u/125011" class="pquote-avatar" alt="avatar">
  Idéalement, expliquez-leur et dans un fichier CONTRIBUTING.md comment ils peuvent obtenir une meilleure indication sur ce qui serait ou ne serait pas accepté avant qu'ils commencent le travail.
  <p markdown="1" class="pquote-credit">
— @mikemcquaid, ["demande de fermeture avec bienveillance"](https://github.com/blog/2124-kindly-closing-pull-requests)
  </p>
</aside>

Parfois, quand vous dites non, votre contributeur potentiel peut se fâcher ou critiquer votre décision. Si leur comportement devient hostile, [prendre des mesures pour désamorcer la situation](https://github.com/jonschlinkert/maintainers-guide-to-staying-positive#action-items) ou même les retirer de votre communauté, s'ils ne veulent pas collaborer de manière constructive.

### Embrasser le mentorat

Peut-être que quelqu'un dans votre communauté soumet régulièrement des contributions qui ne répondent pas aux normes de votre projet. Il peut être frustrant pour les deux parties de passer à plusieurs reprises par des rejets.

Si vous voyez que quelqu'un est enthousiaste à propos de votre projet, mais qu'il a besoin d'un peu de poli, soyez patient. Expliquer clairement dans chaque situation pourquoi leurs contributions ne répondent pas aux attentes du projet. Essayez de les diriger vers une tâche plus facile ou moins ambiguë, comme un problème marqué «bon premier bug», pour se mouiller les pieds. Si vous avez le temps, envisagez de les encadrer à travers leur première contribution, ou de trouver quelqu'un d'autre dans votre communauté qui pourrait être disposé à les encadrer..

## Tirer parti de votre communauté

Vous n'avez pas à tout faire vous-même. La communauté de votre projet existe pour une raison! Même si vous n'avez pas encore de communauté de contributeurs actifs, si vous avez beaucoup d'utilisateurs, mettez-les au travail..

### Partagez la charge de travail

Si vous cherchez d'autres personnes, commencez par demander.

Lorsque vous voyez de nouveaux contributeurs faire des contributions répétées, reconnaissez leur travail en offrant plus de responsabilités. Documentez comment les autres peuvent devenir des leaders s'ils le souhaitent.

Encourager les autres à [partager la propriété du projet](../building-community/#share-ownership-of-your-project) peut grandement réduire votre charge de travail, comme @lmccart l'a découvert sur son projet, [p5.js](https://github.com/processing/p5.js?files=1).

<aside markdown="1" class="pquote">
  <img src="https://avatars3.githubusercontent.com/u/191056?v=3&s=460" class="pquote-avatar" alt="avatar">
  Je disais: «Oui, n'importe qui peut être impliqué, vous n'avez pas besoin d'avoir beaucoup d'expertise en codage [...]». Nous avions des gens qui s'inscrivaient pour venir [à un événement] et c'est à ce moment que j'étais Je me demande vraiment: est-ce vrai, ce que j'ai dit? Il y aura 40 personnes qui se présenteront, et ce n'est pas comme si je pouvais m'asseoir avec chacune d'entre elles ... Mais les gens se sont réunis, et ça a juste fonctionné. Dès qu'une personne l'a obtenue, elle pourrait enseigner à son voisin.
  <p markdown="1" class="pquote-credit">
—  @lmccart, ["Que veut dire "Open Source"? Edition p5.js"](https://medium.com/@kenjagan/what-does-open-source-even-mean-p5-js-edition-98c02d354b39#.chnjlag7p)
  </p>
</aside>

Si vous avez besoin de quitter votre projet, que ce soit en pause ou en permanence, il n'y a pas de honte à demander à quelqu'un d'autre de vous remplacer.

Si d'autres personnes sont enthousiastes à l'égard de sa direction, donnez-leur l'autorisation de s'engager ou remettez officiellement le contrôle à quelqu'un d'autre. Si quelqu'un a bifurqué votre projet et le maintient activement ailleurs, envisagez de créer un lien vers la fourche de votre projet d'origine. C'est génial que tant de gens veulent que votre projet continue à vivre!

@progrium [trouvé ceci](http://progrium.com/blog/2015/12/04/leadership-guilt-and-pull-requests/) documenter la vision de son projet, [Dokku](https://github.com/dokku/dokku), aidé à atteindre ces objectifs même après s'être retiré du projet:

> J'ai écrit une page wiki décrivant ce que je voulais et pourquoi je le voulais. Pour une raison ou une autre, j'ai été surpris de constater que les responsables ont commencé à faire avancer le projet dans cette direction! Est-ce arrivé exactement comment je le ferais? Pas toujours. Mais cela rapprochait encore le projet de ce que j'avais écrit.

### Laissez les autres construire les solutions dont ils ont besoin

Si un contributeur potentiel a une opinion différente sur ce que votre projet devrait faire, vous pouvez les encourager doucement à travailler sur leur propre fourchette.

Forking un projet ne doit pas être une mauvaise chose. Etre capable de copier et de modifier des projets est l'une des meilleures choses à propos de l'open source. Encourager les membres de votre communauté à travailler sur leur propre branche peut fournir le débouché créatif dont ils ont besoin, sans entrer en conflit avec la vision de votre projet.

<aside markdown="1" class="pquote">
  <img src="https://avatars1.githubusercontent.com/u/481677?v=3&s=400" class="pquote-avatar" alt="avatar">
  Je réponds au cas d'utilisation de 80%. Si vous êtes l'un des licornes, s'il vous plaît fourchez mon travail. Je ne serai pas offensé! Mes projets publics sont presque toujours destinés à résoudre les problèmes les plus courants; J'essaie de faire en sorte qu'il soit plus facile d'approfondir mon travail ou de l'étendre
  <p markdown="1" class="pquote-credit">
— @geerlingguy, ["Pourquoi je ferme les PR"](https://www.jeffgeerling.com/blog/2016/why-i-close-prs-oss-project-maintainer-notes)
  </p>
</aside>

La même chose s'applique à un utilisateur qui veut vraiment une solution que vous n'avez tout simplement pas le temps à construire. L'offre d'API et de hooks de personnalisation peut aider les autres à répondre à leurs propres besoins, sans avoir à modifier directement la source. @orta [trouvé ceci](http://artsy.github.io/blog/2016/07/03/handling-big-projects/) des plugins encourageants pour CocoaPods ont conduit à "quelques-unes des idées les plus intéressantes":

> Il est presque inévitable qu'une fois qu'un projet prend de l'ampleur, les mainteneurs doivent être beaucoup plus conservateurs quant à la façon dont ils introduisent un nouveau code. Vous devenez bon à dire «non», mais beaucoup de gens ont des besoins légitimes. Ainsi, vous finissez par convertir votre outil en plate-forme.

## Apportez les robots

Tout comme il existe des tâches que d'autres personnes peuvent vous aider, il y a aussi des tâches que personne ne devrait jamais avoir à faire. Les robots sont votre ami. Utilisez-les pour rendre votre vie de mainteneur plus facile.

### Exiger des tests et d'autres vérifications pour améliorer la qualité de votre code

L'un des moyens les plus importants pour automatiser votre projet consiste à ajouter des tests.

Les tests aident les contributeurs à croire qu'ils ne briseront rien. Ils facilitent également la consultation et l'acceptation des contributions rapidement. Plus vous êtes réactif, plus votre communauté peut être engagée.

Configurez des tests automatiques qui s'exécuteront sur toutes les contributions entrantes, et assurez-vous que vos tests peuvent être facilement exécutés localement par les contributeurs. Exiger que toutes les contributions de code passent vos tests avant de pouvoir être soumis. Vous aiderez à définir une norme de qualité minimale pour toutes les soumissions. [Vérifications d'état requises](https://help.github.com/articles/about-required-status-checks/) sur GitHub, vous pouvez vous assurer qu'aucun changement ne sera effectué sans que vos tests ne passent.

Si vous ajoutez des tests, assurez-vous d'expliquer comment ils fonctionnent dans votre fichier CONTRIBUTING.

<aside markdown="1" class="pquote">
  <img src="https://avatars3.githubusercontent.com/u/812892?v=3&s=460" class="pquote-avatar" alt="avatar">
  Je crois que des tests sont nécessaires pour tout le code sur lequel les gens travaillent. Si le code était complet et parfaitement correct, il n'aurait pas besoin de modifications - nous n'écrivons du code que lorsque quelque chose ne va pas, que ce soit "Il plante" ou "Il manque telle ou telle fonctionnalité". Et quels que soient les changements que vous effectuez, les tests sont essentiels pour détecter les régressions que vous pourriez introduire accidentellement.
  <p markdown="1" class="pquote-credit">
— @edunham, ["L'automatisation communautaire de Rust"](http://edunham.net/2016/09/27/rust_s_community_automation.html)
  </p>
</aside>

### Utiliser des outils pour automatiser les tâches de maintenance de base

Les bonnes nouvelles à propos du maintien d'un projet populaire sont que d'autres responsables ont probablement fait face à des problèmes similaires et ont construit une solution pour cela.

Il ya un [variété d'outils disponibles](https://github.com/showcases/tools-for-open-source) pour aider à automatiser certains aspects du travail de maintenance. Quelques exemples:

* [semantic-release](https://github.com/semantic-release/semantic-release) automatise vos versions
* [mention-bot](https://github.com/facebook/mention-bot) mentionne les évaluateurs potentiels pour les demandes d'extraction
* [Danger](https://github.com/danger/danger) aide à automatiser l'examen du code

Pour les rapports de bugs et autres contributions communes, GitHub a [Modèles de problèmes et modèles de demande de tirage](https://github.com/blog/2111-issue-and-pull-request-templates), que vous pouvez créer pour rationaliser la communication que vous recevez. @TalAter a fait un [Choisissez votre guide d'aventure](https://www.talater.com/open-source-templates/#/) pour vous aider à écrire votre problème et vos modèles de relations publiques.

Pour gérer vos notifications par e-mail, vous pouvez configurer [filtres d'email](https://github.com/blog/2203-email-updates-about-your-own-activity) organiser par priorité.

Si vous souhaitez être un peu plus avancé, les guides de style et les linters peuvent standardiser les contributions de projet et les rendre plus faciles à consulter et à accepter.

Cependant, si vos normes sont trop compliquées, elles peuvent augmenter les obstacles à la contribution. Assurez-vous d'ajouter suffisamment de règles pour faciliter la vie de tous.

Si vous n'êtes pas sûr des outils à utiliser, regardez ce que font les autres projets populaires, en particulier ceux de votre écosystème. Par exemple, à quoi ressemble le processus de contribution pour les autres modules Node? L'utilisation d'outils et d'approches similaires rendra votre processus plus familier à vos contributeurs cibles.

## C'est bon de prende une pause

Le travail open source vous a déjà apporté de la joie. Peut-être que maintenant ça commence à vous faire sentir évitante ou coupable.

Peut-être vous sentez-vous débordé ou un sentiment croissant d'effroi quand vous pensez à vos projets. Et pendant ce temps, les problèmes et les demandes d'extraction s'accumulent.

le Burnout est un problème réel et omniprésent dans le travail open source, en particulier chez les mainteneurs. En tant que mainteneur, votre bonheur est une exigence non négociable pour la survie de tout projet open source.

Bien que cela devrait aller de soi, faites une pause! Vous ne devriez pas avoir à attendre jusqu'à ce que vous vous sentiez brûlé pour prendre des vacances. @brettcannon, un développeur de noyau Python, a décidé de prendre [des vacances d'un mois](http://www.snarky.ca/why-i-took-october-off-from-oss-volunteering) après 14 années de travail bénévole à l'OSS.

Tout comme n'importe quel autre type de travail, prendre des pauses régulières vous gardera rafraîchi, heureux et excité par votre travail.

<aside markdown="1" class="pquote">
  <img src="https://avatars1.githubusercontent.com/u/36432?v=3&s=400" class="pquote-avatar" alt="avatar">
  Dans le maintien de WP-CLI, j'ai découvert que je devais d'abord me rendre heureux et établir des limites claires sur mon implication. Le meilleur équilibre que j'ai trouvé est de 2 à 5 heures par semaine, dans le cadre de mon horaire de travail normal. Cela maintient ma participation une passion, et de sentir trop comme le travail. Parce que je priorise les problèmes sur lesquels je travaille, je peux faire des progrès réguliers sur ce que je pense être le plus important.
  <p markdown="1" class="pquote-credit">
— @danielbachhuber, ["Mes condoléances, vous êtes maintenant le mainteneur d'un projet open source populaire"](https://runcommand.io/2016/06/26/my-condolences-youre-now-the-maintainer-of-a-popular-open-source-project/)
  </p>
</aside>

Parfois, il peut être difficile de faire une pause dans le travail open source quand on a l'impression que tout le monde a besoin de vous. Les gens peuvent même essayer de vous faire sentir coupable d'avoir abandonné.

Faites de votre mieux pour trouver du support pour vos utilisateurs et votre communauté pendant votre absence d'un projet. Si vous ne trouvez pas le soutien dont vous avez besoin, faites une pause de toute façon. Assurez-vous de communiquer lorsque vous n'êtes pas disponible, afin que les gens ne soient pas perturbés par votre manque de réactivité.

Prendre des pauses s'applique à plus que de simples vacances, aussi. Si vous ne voulez pas faire du travail open source le week-end, ou pendant les heures de travail, communiquez ces attentes aux autres, afin qu'ils sachent ne pas vous déranger.

## Prenez soin de vous en premier!

Maintenir un projet populaire nécessite des compétences différentes des étapes précédentes de la croissance, mais ce n'est pas moins gratifiant. En tant que responsable, vous pratiquerez le leadership et les compétences personnelles à un niveau que peu de gens connaissent. Bien que ce ne soit pas toujours facile à gérer, définir des limites claires et ne prendre que ce qui vous convient vous aidera à rester heureux, régénéré et productif.
